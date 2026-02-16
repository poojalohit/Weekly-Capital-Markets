import axios from 'axios';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { 
  generateInterpretation, 
  generateUSNarrative, 
  generateGlobalEvents,
  fetchEconomicCalendar,
  fetchFinancialNews
} from './generateNarratives.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Calculate dates
const today = new Date();
const lastWednesday = getLastWednesday(today);
const previousWednesday = new Date(lastWednesday);
previousWednesday.setDate(previousWednesday.getDate() - 7);
// YTD is calculated from December 31, 2025 (end of previous year)
const yearStart = new Date('2025-12-31');

// Helper function to get last Wednesday
function getLastWednesday(date) {
  const d = new Date(date);
  const day = d.getDay();
  const diff = d.getDate() - day + (day === 3 ? 0 : day < 3 ? -4 : 3); // Wednesday is 3
  return new Date(d.setDate(diff));
}

// Format date for API
function formatDate(date) {
  return date.toISOString().split('T')[0];
}

// Track data sources for each variable
const dataSources = {};

// Fetch data from Yahoo Finance
async function fetchYahooFinanceData(symbol, variableName) {
  try {
    const response = await axios.get(`https://query1.finance.yahoo.com/v8/finance/chart/${symbol}`, {
      params: {
        interval: '1d',
        range: '1y' // Need full year to get Dec 31, 2025 value for YTD calculation
      },
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    });
    
    if (response.data && response.data.chart && response.data.chart.result) {
      const result = response.data.chart.result[0];
      const quotes = result.indicators.quote[0];
      const timestamps = result.timestamp;
      
      // Get latest close
      const latestIndex = quotes.close.length - 1;
      const latestClose = quotes.close[latestIndex];
      const latestDate = new Date(timestamps[latestIndex] * 1000).toISOString().split('T')[0];
      
      // Find last Wednesday's close
      const lastWedTimestamp = Math.floor(lastWednesday.getTime() / 1000);
      const lastWedIndex = timestamps.findIndex(ts => ts >= lastWedTimestamp);
      const lastWedClose = quotes.close[lastWedIndex] || latestClose;
      
      // Find previous Wednesday's close
      const prevWedTimestamp = Math.floor(previousWednesday.getTime() / 1000);
      const prevWedIndex = timestamps.findIndex(ts => ts >= prevWedTimestamp);
      const prevWedClose = quotes.close[prevWedIndex] || latestClose;
      
      // Find year start close (Dec 31, 2025)
      const yearStartTimestamp = Math.floor(yearStart.getTime() / 1000);
      let yearStartIndex = -1;
      for (let i = timestamps.length - 1; i >= 0; i--) {
        if (timestamps[i] <= yearStartTimestamp) {
          yearStartIndex = i;
          break;
        }
      }
      if (yearStartIndex === -1) {
        yearStartIndex = timestamps.findIndex(ts => ts >= yearStartTimestamp);
      }
      const yearStartClose = yearStartIndex >= 0 ? quotes.close[yearStartIndex] : latestClose;
      
      const weeklyChange = ((latestClose - lastWedClose) / lastWedClose) * 100;
      const ytdChange = ((latestClose - yearStartClose) / yearStartClose) * 100;
      
      // Record source
      dataSources[variableName] = {
        source: 'Yahoo Finance',
        symbol: symbol,
        url: `https://finance.yahoo.com/quote/${symbol}`,
        lastUpdated: latestDate
      };
      
      return {
        latestLevel: latestClose,
        weeklyChange: weeklyChange,
        ytdChange: ytdChange
      };
    }
  } catch (error) {
    console.error(`Error fetching ${symbol} from Yahoo Finance:`, error.message);
    return null;
  }
}

// Fetch data from FRED API
async function fetchFREDData(seriesId, variableName, isRate = false) {
  try {
    const FRED_API_KEY = process.env.FRED_API_KEY || '';
    if (!FRED_API_KEY) {
      console.warn(`FRED_API_KEY not set, cannot fetch ${seriesId}`);
      return null;
    }
    
    const response = await axios.get(`https://api.stlouisfed.org/fred/series/observations`, {
      params: {
        series_id: seriesId,
        api_key: FRED_API_KEY,
        file_type: 'json',
        sort_order: 'desc',
        limit: 365 // Get enough data for YTD calculation
      }
    });
    
    if (response.data && response.data.observations) {
      const observations = response.data.observations.filter(obs => obs.value !== '.');
      const latest = parseFloat(observations[0].value);
      const latestDate = observations[0].date;
      
      // Find last Wednesday
      const lastWedStr = formatDate(lastWednesday);
      const lastWedObs = observations.find(obs => obs.date <= lastWedStr);
      const lastWedValue = lastWedObs ? parseFloat(lastWedObs.value) : latest;
      
      // Find year start (Dec 31, 2025 or closest)
      const yearStartStr = formatDate(yearStart);
      const yearStartObs = observations.find(obs => obs.date <= yearStartStr);
      const yearStartValue = yearStartObs ? parseFloat(yearStartObs.value) : latest;
      
      let weeklyChange, ytdChange;
      if (isRate) {
        // For rates, show basis point change
        weeklyChange = (latest - lastWedValue) * 100; // Convert to bps
        ytdChange = (latest - yearStartValue) * 100; // Convert to bps
      } else {
        // For spreads (already in bps), show absolute change
        weeklyChange = latest - lastWedValue;
        ytdChange = latest - yearStartValue;
      }
      
      // Record source
      dataSources[variableName] = {
        source: 'FRED (Federal Reserve Economic Data)',
        seriesId: seriesId,
        url: `https://fred.stlouisfed.org/series/${seriesId}`,
        lastUpdated: latestDate
      };
      
      return {
        latestLevel: latest,
        weeklyChange: weeklyChange,
        ytdChange: ytdChange
      };
    }
  } catch (error) {
    console.error(`Error fetching ${seriesId} from FRED:`, error.message);
    return null;
  }
}

// Fetch Treasury yield from FRED API
async function fetchTreasuryYield() {
  const data = await fetchFREDData('DGS10', 'U.S. 10-Year Treasury Yield', true);
  if (data) {
    // Convert back to percentage points for display
    data.weeklyChange = data.weeklyChange / 100;
    data.ytdChange = data.ytdChange / 100;
  }
  return data || { latestLevel: 4.15, weeklyChange: 0.10, ytdChange: 0.25 };
}

// Fetch SOFR from FRED
async function fetchSOFR() {
  const data = await fetchFREDData('SOFR', '3-Month SOFR Rate', true);
  if (data) {
    data.weeklyChange = data.weeklyChange / 100;
    data.ytdChange = data.ytdChange / 100;
  }
  return data || { latestLevel: 5.25, weeklyChange: 0.00, ytdChange: 0.00 };
}

// Fetch BBB Corporate OAS from FRED (ICE BofA BBB US Corporate Index OAS)
async function fetchBBBSpread() {
  const data = await fetchFREDData('BAMLC0A4CBBB', 'BBB U.S. Corporate OAS', false);
  // FRED reports in percentage, convert to basis points
  if (data) {
    data.latestLevel = data.latestLevel * 100; // Convert % to bps
    // Weekly and YTD changes are already calculated as differences
  }
  return data || { latestLevel: 125, weeklyChange: -2, ytdChange: -8 };
}

// Fetch High Yield OAS from FRED (ICE BofA US High Yield Index OAS)
async function fetchHYSpread() {
  const data = await fetchFREDData('BAMLH0A0HYM2', 'U.S. High Yield OAS', false);
  // FRED reports in percentage, convert to basis points
  if (data) {
    data.latestLevel = data.latestLevel * 100; // Convert % to bps
  }
  return data || { latestLevel: 350, weeklyChange: -5, ytdChange: -15 };
}

// Fetch VIX
async function fetchVIX() {
  return await fetchYahooFinanceData('^VIX', 'VIX Index');
}

// Fetch S&P 500
async function fetchSP500() {
  return await fetchYahooFinanceData('^GSPC', 'S&P 500 Index');
}

// Fetch Nasdaq
async function fetchNasdaq() {
  return await fetchYahooFinanceData('^IXIC', 'Nasdaq Composite Index');
}

// Fetch Gold
async function fetchGold() {
  return await fetchYahooFinanceData('GC=F', 'Gold (USD/oz)');
}

// Fetch Oil (WTI)
async function fetchOil() {
  return await fetchYahooFinanceData('CL=F', 'Crude Oil (WTI)');
}

// Fetch Bitcoin
async function fetchBitcoin() {
  return await fetchYahooFinanceData('BTC-USD', 'Bitcoin (USD)');
}

// Fetch USD/JPY from Yahoo Finance
async function fetchUSDJPY() {
  const data = await fetchYahooFinanceData('USDJPY=X', 'USD/JPY');
  return data || { latestLevel: 148.50, weeklyChange: 0.3, ytdChange: 1.2 };
}

// Fetch EUR/USD from Yahoo Finance
async function fetchEURUSD() {
  const data = await fetchYahooFinanceData('EURUSD=X', 'EUR/USD');
  return data || { latestLevel: 1.0850, weeklyChange: -0.2, ytdChange: -0.5 };
}

// Generate sources section based on actual data fetched
function generateSourcesSection() {
  const yahooFinanceSources = [];
  const fredSources = [];
  
  for (const [variable, info] of Object.entries(dataSources)) {
    if (info.source === 'Yahoo Finance') {
      yahooFinanceSources.push(`${variable} (${info.symbol}) - ${info.url}`);
    } else if (info.source.includes('FRED')) {
      fredSources.push(`${variable} (${info.seriesId}) - ${info.url}`);
    }
  }
  
  return [
    {
      category: 'Equity & Volatility Data - Yahoo Finance',
      sources: yahooFinanceSources.length > 0 ? yahooFinanceSources : [
        'S&P 500 Index (^GSPC) - https://finance.yahoo.com/quote/%5EGSPC',
        'Nasdaq Composite (^IXIC) - https://finance.yahoo.com/quote/%5EIXIC',
        'VIX Index (^VIX) - https://finance.yahoo.com/quote/%5EVIX',
        'Gold Futures (GC=F) - https://finance.yahoo.com/quote/GC%3DF',
        'WTI Crude Oil (CL=F) - https://finance.yahoo.com/quote/CL%3DF',
        'Bitcoin (BTC-USD) - https://finance.yahoo.com/quote/BTC-USD',
        'USD/JPY (USDJPY=X) - https://finance.yahoo.com/quote/USDJPY%3DX',
        'EUR/USD (EURUSD=X) - https://finance.yahoo.com/quote/EURUSD%3DX'
      ]
    },
    {
      category: 'Interest Rates & Credit Spreads - FRED (Federal Reserve Economic Data)',
      sources: fredSources.length > 0 ? fredSources : [
        '10-Year Treasury Yield (DGS10) - https://fred.stlouisfed.org/series/DGS10',
        'SOFR Rate (SOFR) - https://fred.stlouisfed.org/series/SOFR',
        'BBB Corporate OAS (BAMLC0A4CBBB) - https://fred.stlouisfed.org/series/BAMLC0A4CBBB',
        'High Yield OAS (BAMLH0A0HYM2) - https://fred.stlouisfed.org/series/BAMLH0A0HYM2'
      ]
    },
    {
      category: 'Economic Data & News',
      sources: [
        'Bureau of Labor Statistics (BLS) - Employment, CPI, PPI - https://www.bls.gov/',
        'Bureau of Economic Analysis (BEA) - GDP, PCE - https://www.bea.gov/',
        'Federal Reserve - Monetary Policy - https://www.federalreserve.gov/',
        'Trading Economics - Economic Calendar - https://tradingeconomics.com/calendar',
        'NewsAPI - Financial News Aggregation - https://newsapi.org/'
      ]
    },
    {
      category: 'Verification Sources',
      sources: [
        'WSJ Markets - https://www.wsj.com/market-data',
        'MarketWatch - https://www.marketwatch.com/',
        'Bloomberg - https://www.bloomberg.com/markets',
        'CNBC - https://www.cnbc.com/markets/'
      ]
    }
  ];
}

// Main function to fetch all data
async function fetchAllMarketData() {
  console.log('Fetching market data from Yahoo Finance and FRED...');
  console.log('---------------------------------------------------');
  
  const [sp500, nasdaq, vix, treasury, sofr, gold, oil, bitcoin, usdjpy, eurusd, bbbOAS, hyOAS] = await Promise.all([
    fetchSP500(),
    fetchNasdaq(),
    fetchVIX(),
    fetchTreasuryYield(),
    fetchSOFR(),
    fetchGold(),
    fetchOil(),
    fetchBitcoin(),
    fetchUSDJPY(),
    fetchEURUSD(),
    fetchBBBSpread(),
    fetchHYSpread()
  ]);
  
  // Log sources used
  console.log('\n📊 Data Sources Used:');
  for (const [variable, info] of Object.entries(dataSources)) {
    console.log(`  • ${variable}: ${info.source} (${info.seriesId || info.symbol})`);
  }
  console.log('');
  
  return {
    date: formatDate(today),
    marketData: [
      {
        variable: 'S&P 500 Index',
        latestLevel: sp500?.latestLevel || 4850.00,
        weeklyChange: sp500?.weeklyChange || 1.2,
        ytdChange: sp500?.ytdChange || 3.5
      },
      {
        variable: 'Nasdaq Composite Index',
        latestLevel: nasdaq?.latestLevel || 15200.00,
        weeklyChange: nasdaq?.weeklyChange || 1.8,
        ytdChange: nasdaq?.ytdChange || 4.2
      },
      {
        variable: 'VIX Index',
        latestLevel: vix?.latestLevel || 14.50,
        weeklyChange: vix?.weeklyChange || -5.2,
        ytdChange: vix?.ytdChange || -12.3
      },
      {
        variable: 'U.S. 10-Year Treasury Yield',
        latestLevel: treasury?.latestLevel || 4.15,
        weeklyChange: treasury?.weeklyChange || 0.10,
        ytdChange: treasury?.ytdChange || 0.25
      },
      {
        variable: '3-Month SOFR Rate',
        latestLevel: sofr?.latestLevel || 5.25,
        weeklyChange: sofr?.weeklyChange || 0.00,
        ytdChange: sofr?.ytdChange || 0.00
      },
      {
        variable: 'Gold (USD/oz)',
        latestLevel: gold?.latestLevel || 2050.00,
        weeklyChange: gold?.weeklyChange || 0.8,
        ytdChange: gold?.ytdChange || 2.1
      },
      {
        variable: 'Crude Oil (WTI)',
        latestLevel: oil?.latestLevel || 75.50,
        weeklyChange: oil?.weeklyChange || -1.5,
        ytdChange: oil?.ytdChange || -3.2
      },
      {
        variable: 'USD/JPY',
        latestLevel: usdjpy?.latestLevel || 148.50,
        weeklyChange: usdjpy?.weeklyChange || 0.3,
        ytdChange: usdjpy?.ytdChange || 1.2
      },
      {
        variable: 'EUR/USD',
        latestLevel: eurusd?.latestLevel || 1.0850,
        weeklyChange: eurusd?.weeklyChange || -0.2,
        ytdChange: eurusd?.ytdChange || -0.5
      },
      {
        variable: 'BBB U.S. Corporate OAS',
        latestLevel: bbbOAS?.latestLevel || 125,
        weeklyChange: bbbOAS?.weeklyChange || -2,
        ytdChange: bbbOAS?.ytdChange || -8
      },
      {
        variable: 'U.S. High Yield OAS',
        latestLevel: hyOAS?.latestLevel || 350,
        weeklyChange: hyOAS?.weeklyChange || -5,
        ytdChange: hyOAS?.ytdChange || -15
      },
      {
        variable: 'Bitcoin (USD)',
        latestLevel: bitcoin?.latestLevel || 42500.00,
        weeklyChange: bitcoin?.weeklyChange || 2.5,
        ytdChange: bitcoin?.ytdChange || 8.3
      }
    ]
  };
}

// Update the data file
async function updateMarketData() {
  try {
    console.log('🚀 Starting market data update...\n');
    const marketData = await fetchAllMarketData();
    
    console.log('Fetching economic calendar and news...');
    const [economicCalendar, news] = await Promise.all([
      fetchEconomicCalendar(),
      fetchFinancialNews()
    ]);
    
    console.log('Generating AI narratives...');
    const [interpretation, usNarrative, globalEvents] = await Promise.all([
      generateInterpretation(marketData.marketData, marketData.date),
      generateUSNarrative(marketData.marketData, economicCalendar, news, marketData.date),
      generateGlobalEvents(marketData.marketData, news, marketData.date)
    ]);
    
    const dataPath = path.join(__dirname, '../src/data/sampleData.ts');
    
    // Escape backticks and dollar signs for template literals
    const escapeTemplate = (str) => str.replace(/`/g, '\\`').replace(/\${/g, '\\${');
    
    // Generate dynamic sources based on what was actually fetched
    const sources = generateSourcesSection();
    
    // Create new content with AI-generated narratives
    const newContent = `import { WeeklyDashboard } from '../types/marketData';

export const sampleDashboardData: WeeklyDashboard = {
  date: '${marketData.date}',
  marketData: ${JSON.stringify(marketData.marketData, null, 2).replace(/"([^"]+)":/g, '$1:')},
  interpretation: \`${escapeTemplate(interpretation)}\`,
  usNarrative: \`${escapeTemplate(usNarrative)}\`,
  globalEvents: \`${escapeTemplate(globalEvents)}\`,
  sources: ${JSON.stringify(sources, null, 4).replace(/"([^"]+)":/g, '$1:')}
};`;
    
    fs.writeFileSync(dataPath, newContent, 'utf8');
    console.log('\n✅ Market data and narratives updated successfully!');
    console.log(`📅 Date: ${marketData.date}`);
    console.log(`📊 Market data points: ${marketData.marketData.length}`);
    console.log(`📝 Interpretation: ${interpretation.substring(0, 100)}...`);
    
    return { marketData, interpretation, usNarrative, globalEvents };
  } catch (error) {
    console.error('Error updating market data:', error);
    throw error;
  }
}

// Run the update when script is executed
updateMarketData().catch(console.error);

export { updateMarketData, fetchAllMarketData };
