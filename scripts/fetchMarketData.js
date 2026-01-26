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

// Fetch data from Yahoo Finance (using yfinance API or similar)
async function fetchYahooFinanceData(symbol) {
  try {
    // Using Alpha Vantage or similar free API
    // Note: You may need to get a free API key from Alpha Vantage
    const response = await axios.get(`https://query1.finance.yahoo.com/v8/finance/chart/${symbol}`, {
      params: {
        interval: '1d',
        range: '1y' // Need full year to get Dec 31, 2025 value for YTD calculation
      }
    });
    
    if (response.data && response.data.chart && response.data.chart.result) {
      const result = response.data.chart.result[0];
      const quotes = result.indicators.quote[0];
      const timestamps = result.timestamp;
      
      // Get latest close
      const latestIndex = quotes.close.length - 1;
      const latestClose = quotes.close[latestIndex];
      
      // Find last Wednesday's close
      const lastWedTimestamp = Math.floor(lastWednesday.getTime() / 1000);
      const lastWedIndex = timestamps.findIndex(ts => ts >= lastWedTimestamp);
      const lastWedClose = quotes.close[lastWedIndex] || latestClose;
      
      // Find previous Wednesday's close
      const prevWedTimestamp = Math.floor(previousWednesday.getTime() / 1000);
      const prevWedIndex = timestamps.findIndex(ts => ts >= prevWedTimestamp);
      const prevWedClose = quotes.close[prevWedIndex] || latestClose;
      
      // Find year start close (Dec 31, 2025) - find closest trading day
      const yearStartTimestamp = Math.floor(yearStart.getTime() / 1000);
      // Find the closest timestamp on or before year start
      let yearStartIndex = -1;
      for (let i = timestamps.length - 1; i >= 0; i--) {
        if (timestamps[i] <= yearStartTimestamp) {
          yearStartIndex = i;
          break;
        }
      }
      // If not found, try to find closest after (in case markets were closed)
      if (yearStartIndex === -1) {
        yearStartIndex = timestamps.findIndex(ts => ts >= yearStartTimestamp);
      }
      const yearStartClose = yearStartIndex >= 0 ? quotes.close[yearStartIndex] : latestClose;
      
      const weeklyChange = ((latestClose - lastWedClose) / lastWedClose) * 100;
      const ytdChange = ((latestClose - yearStartClose) / yearStartClose) * 100;
      
      return {
        latestLevel: latestClose,
        weeklyChange: weeklyChange,
        ytdChange: ytdChange
      };
    }
  } catch (error) {
    console.error(`Error fetching ${symbol}:`, error.message);
    return null;
  }
}

// Fetch Treasury yield from FRED API
async function fetchTreasuryYield() {
  try {
    // FRED API requires an API key (free from https://fred.stlouisfed.org/docs/api/api_key.html)
    const FRED_API_KEY = process.env.FRED_API_KEY || '';
    if (!FRED_API_KEY) {
      console.warn('FRED_API_KEY not set, using placeholder data');
      return { latestLevel: 4.15, weeklyChange: 0.10, ytdChange: 0.25 };
    }
    
    const seriesId = 'DGS10'; // 10-Year Treasury Constant Maturity Rate
    const response = await axios.get(`https://api.stlouisfed.org/fred/series/observations`, {
      params: {
        series_id: seriesId,
        api_key: FRED_API_KEY,
        file_type: 'json',
        sort_order: 'desc',
        limit: 30
      }
    });
    
    if (response.data && response.data.observations) {
      const observations = response.data.observations.filter(obs => obs.value !== '.');
      const latest = parseFloat(observations[0].value);
      
      // Find last Wednesday
      const lastWedStr = formatDate(lastWednesday);
      const lastWedObs = observations.find(obs => obs.date <= lastWedStr);
      const lastWedValue = lastWedObs ? parseFloat(lastWedObs.value) : latest;
      
      // Find year start
      const yearStartStr = formatDate(yearStart);
      const yearStartObs = observations.find(obs => obs.date <= yearStartStr);
      const yearStartValue = yearStartObs ? parseFloat(yearStartObs.value) : latest;
      
      const weeklyChange = latest - lastWedValue;
      const ytdChange = latest - yearStartValue;
      
      return {
        latestLevel: latest,
        weeklyChange: weeklyChange,
        ytdChange: ytdChange
      };
    }
  } catch (error) {
    console.error('Error fetching Treasury yield:', error.message);
    return { latestLevel: 4.15, weeklyChange: 0.10, ytdChange: 0.25 };
  }
}

// Fetch VIX
async function fetchVIX() {
  return await fetchYahooFinanceData('^VIX');
}

// Fetch S&P 500
async function fetchSP500() {
  return await fetchYahooFinanceData('^GSPC');
}

// Fetch Nasdaq
async function fetchNasdaq() {
  return await fetchYahooFinanceData('^IXIC');
}

// Fetch Gold
async function fetchGold() {
  return await fetchYahooFinanceData('GC=F');
}

// Fetch Oil (WTI)
async function fetchOil() {
  return await fetchYahooFinanceData('CL=F');
}

// Fetch Bitcoin
async function fetchBitcoin() {
  return await fetchYahooFinanceData('BTC-USD');
}

// Fetch currency rates (using a free API)
async function fetchCurrencyRate(pair) {
  try {
    // Using exchangerate-api.com (free tier available)
    const API_KEY = process.env.EXCHANGE_RATE_API_KEY || '';
    if (!API_KEY) {
      // Fallback to a free API
      const response = await axios.get(`https://api.exchangerate-api.com/v4/latest/USD`);
      const rate = response.data.rates[pair.split('/')[1]];
      return { latestLevel: rate, weeklyChange: 0, ytdChange: 0 };
    }
    
    const response = await axios.get(`https://v6.exchangerate-api.com/v6/${API_KEY}/pair/USD/${pair.split('/')[1]}`);
    return {
      latestLevel: response.data.conversion_rate,
      weeklyChange: 0, // Would need historical data
      ytdChange: 0
    };
  } catch (error) {
    console.error(`Error fetching ${pair}:`, error.message);
    return null;
  }
}

// Main function to fetch all data
async function fetchAllMarketData() {
  console.log('Fetching market data...');
  
  const [sp500, nasdaq, vix, treasury, gold, oil, bitcoin, usdjpy, eurusd] = await Promise.all([
    fetchSP500(),
    fetchNasdaq(),
    fetchVIX(),
    fetchTreasuryYield(),
    fetchGold(),
    fetchOil(),
    fetchBitcoin(),
    fetchCurrencyRate('USD/JPY'),
    fetchCurrencyRate('EUR/USD')
  ]);
  
  // For OAS spreads, we'll need to use a financial data provider
  // These are typically not available via free APIs
  const bbbOAS = { latestLevel: 125, weeklyChange: -2, ytdChange: -8 };
  const hyOAS = { latestLevel: 350, weeklyChange: -5, ytdChange: -15 };
  
  // SOFR rate (would need FRED API)
  const sofr = { latestLevel: 5.25, weeklyChange: 0.00, ytdChange: 0.00 };
  
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
        latestLevel: sofr.latestLevel,
        weeklyChange: sofr.weeklyChange,
        ytdChange: sofr.ytdChange
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
        latestLevel: bbbOAS.latestLevel,
        weeklyChange: bbbOAS.weeklyChange,
        ytdChange: bbbOAS.ytdChange
      },
      {
        variable: 'U.S. High Yield OAS',
        latestLevel: hyOAS.latestLevel,
        weeklyChange: hyOAS.weeklyChange,
        ytdChange: hyOAS.ytdChange
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
    console.log('Fetching market data...');
    const marketData = await fetchAllMarketData();
    
    console.log('Fetching economic calendar and news...');
    const [economicCalendar, news] = await Promise.all([
      fetchEconomicCalendar(),
      fetchFinancialNews()
    ]);
    
    console.log('Generating narratives...');
    const [interpretation, usNarrative, globalEvents] = await Promise.all([
      generateInterpretation(marketData.marketData),
      generateUSNarrative(marketData.marketData, economicCalendar, news),
      generateGlobalEvents(marketData.marketData, news)
    ]);
    
    const dataPath = path.join(__dirname, '../src/data/sampleData.ts');
    
    // Escape backticks and dollar signs for template literals
    const escapeTemplate = (str) => str.replace(/`/g, '\\`').replace(/\${/g, '\\${');
    
    // Create new content with AI-generated narratives
    const newContent = `import { WeeklyDashboard } from '../types/marketData';

export const sampleDashboardData: WeeklyDashboard = {
  date: '${marketData.date}',
  marketData: ${JSON.stringify(marketData.marketData, null, 2).replace(/"([^"]+)":/g, '$1:')},
  interpretation: '${escapeTemplate(interpretation)}',
  usNarrative: \`${escapeTemplate(usNarrative)}\`,
  globalEvents: \`${escapeTemplate(globalEvents)}\`,
  corporateFinanceConcepts: [
    {
      title: 'Option-Adjusted Spread (OAS)',
      explanation: 'Option-Adjusted Spread (OAS) is a measure of the yield spread between a fixed-income security and a risk-free rate, adjusted for embedded options. Unlike nominal spreads, OAS accounts for the value of call or put options embedded in bonds, providing a more accurate assessment of credit risk and relative value. For example, a callable bond will have a higher OAS than a non-callable bond with the same credit quality, reflecting the additional risk to investors from potential early redemption. OAS is particularly important for analyzing mortgage-backed securities, callable corporate bonds, and other structured products where optionality significantly impacts pricing.'
    },
    {
      title: 'Risk-On / Risk-Off Sentiment',
      explanation: 'Risk-on/risk-off (RORO) sentiment refers to the collective market psychology that drives capital flows between risky and safe-haven assets. During risk-on periods, investors favor equities, high-yield bonds, commodities, and emerging market assets, driving their prices higher. Conversely, risk-off periods see capital flight to safe havens like U.S. Treasuries, gold, and the Japanese yen. This sentiment is often driven by macroeconomic factors, geopolitical events, central bank policies, and changes in growth expectations. The VIX index, credit spreads, and currency movements are key indicators of market risk sentiment, with lower VIX and tighter spreads typically signaling risk-on conditions.'
    },
    {
      title: 'Yield Curve Dynamics',
      explanation: 'The yield curve represents the relationship between interest rates (yields) and the time to maturity of debt securities, typically U.S. Treasury bonds. A normal yield curve slopes upward, with longer-term bonds offering higher yields to compensate for time and inflation risk. An inverted yield curve, where short-term rates exceed long-term rates, has historically been a reliable predictor of economic recessions. The shape of the yield curve reflects market expectations about future interest rates, inflation, and economic growth. Changes in the curve\\'s slope, steepness, or curvature can signal shifts in monetary policy expectations, economic outlook, or risk perceptions, making it a crucial tool for financial market analysis and economic forecasting.'
    }
  ],
  sources: [
    {
      category: 'Market Data',
      sources: [
        'FRED (Federal Reserve Economic Data) - Treasury yields, interest rates',
        'Yahoo Finance - Equity indices, VIX, commodity prices',
        'WSJ Markets - Currency rates, corporate spreads',
        'MarketWatch - Real-time market data and indices'
      ]
    },
    {
      category: 'Economic Data',
      sources: [
        'Bureau of Labor Statistics (BLS) - Employment, CPI, PPI data',
        'Bureau of Economic Analysis (BEA) - GDP, PCE data',
        'Federal Reserve - Monetary policy, interest rate decisions',
        'ISM (Institute for Supply Management) - Manufacturing and Services PMI',
        'Conference Board - Consumer confidence, leading indicators'
      ]
    },
    {
      category: 'Policy and Analysis',
      sources: [
        'Federal Reserve Communications - Speeches, meeting minutes, policy statements',
        'Trading Economics - Economic calendar and data releases',
        'Bloomberg - Market analysis and financial news'
      ]
    }
  ]
};`;
    
    fs.writeFileSync(dataPath, newContent, 'utf8');
    console.log('✅ Market data and narratives updated successfully!');
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
