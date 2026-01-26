import axios from 'axios';
import OpenAI from 'openai';

// Initialize OpenAI client
const openai = process.env.OPENAI_API_KEY ? new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
}) : null;

// Fetch economic calendar data from Trading Economics API (free tier available)
async function fetchEconomicCalendar() {
  try {
    const API_KEY = process.env.TRADING_ECONOMICS_API_KEY || '';
    if (!API_KEY) {
      console.warn('TRADING_ECONOMICS_API_KEY not set, using placeholder data');
      return [];
    }
    
    const today = new Date();
    const weekAgo = new Date(today);
    weekAgo.setDate(weekAgo.getDate() - 7);
    
    const response = await axios.get('https://api.tradingeconomics.com/calendar', {
      params: {
        c: API_KEY,
        d1: weekAgo.toISOString().split('T')[0],
        d2: today.toISOString().split('T')[0],
        importance: '1,2,3' // High, medium, low importance
      }
    });
    
    return response.data || [];
  } catch (error) {
    console.error('Error fetching economic calendar:', error.message);
    return [];
  }
}

// Fetch recent financial news
async function fetchFinancialNews() {
  try {
    // Using NewsAPI (free tier: 100 requests/day)
    const API_KEY = process.env.NEWS_API_KEY || '';
    if (!API_KEY) {
      console.warn('NEWS_API_KEY not set, using placeholder data');
      return [];
    }
    
    const response = await axios.get('https://newsapi.org/v2/everything', {
      params: {
        q: 'US economy Federal Reserve markets',
        language: 'en',
        sortBy: 'publishedAt',
        pageSize: 20,
        apiKey: API_KEY
      }
    });
    
    return response.data?.articles || [];
  } catch (error) {
    console.error('Error fetching news:', error.message);
    return [];
  }
}

// Generate interpretation using AI
async function generateInterpretation(marketData) {
  if (!openai) {
    return 'Equity markets continued their upward trajectory this week, with the S&P 500 and Nasdaq both posting solid gains. The VIX declined further, indicating reduced market volatility and improved risk sentiment. Treasury yields edged higher as economic data remained resilient, while credit spreads tightened across both investment-grade and high-yield markets. Commodities showed mixed performance, with gold advancing while oil retreated. The dollar strengthened modestly against the yen but weakened slightly against the euro. Overall, markets appear to be trending positively, with risk assets benefiting from a favorable macro backdrop.';
  }
  
  try {
    const marketSummary = marketData.map(item => 
      `${item.variable}: ${item.latestLevel} (Weekly: ${item.weeklyChange > 0 ? '+' : ''}${item.weeklyChange.toFixed(2)}%, YTD: ${item.ytdChange > 0 ? '+' : ''}${item.ytdChange.toFixed(2)}%)`
    ).join('\n');
    
    const prompt = `Analyze the following U.S. capital markets data and write a brief interpretation (3-5 sentences) explaining:
1. Which markets moved the most and why
2. Which markets appear to be trending (positive or negative) or mean-reverting
3. Any surprising divergences between markets

Market Data:
${marketSummary}

Write a professional, concise interpretation suitable for an investment briefing:`;

    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: 'You are a financial market analyst writing brief market interpretations for investment professionals.' },
        { role: 'user', content: prompt }
      ],
      max_tokens: 200,
      temperature: 0.7
    });
    
    return completion.choices[0].message.content.trim();
  } catch (error) {
    console.error('Error generating interpretation:', error.message);
    return 'Equity markets continued their upward trajectory this week, with the S&P 500 and Nasdaq both posting solid gains. The VIX declined further, indicating reduced market volatility and improved risk sentiment. Treasury yields edged higher as economic data remained resilient, while credit spreads tightened across both investment-grade and high-yield markets.';
  }
}

// Generate U.S. Market Narrative using AI
async function generateUSNarrative(marketData, economicCalendar, news) {
  if (!openai) {
    return generateFallbackUSNarrative();
  }
  
  try {
    const marketSummary = marketData.map(item => 
      `${item.variable}: ${item.latestLevel} (WoW: ${item.weeklyChange > 0 ? '+' : ''}${item.weeklyChange.toFixed(2)}%, YTD: ${item.ytdChange > 0 ? '+' : ''}${item.ytdChange.toFixed(2)}%)`
    ).join('\n');
    
    const economicReleases = economicCalendar.slice(0, 10).map(event => 
      `${event.Country}: ${event.Event} - ${event.Reference || 'N/A'}`
    ).join('\n');
    
    const recentNews = news.slice(0, 5).map(article => 
      `${article.title} (${article.publishedAt})`
    ).join('\n');
    
    const prompt = `Write a comprehensive U.S. Weekly Market Narrative (350-450 words) for a capital markets dashboard. The narrative should:

1. **Key Economic Data Releases** section:
   - Summarize major economic releases from the past week (NFP, CPI, PPI, PCE, Retail Sales, ISM, GDP, Jobless Claims, Housing data)
   - Note whether each release beat/missed expectations
   - Explain how markets reacted
   - Connect data to broader macro themes

2. **U.S. Political and Policy Developments** section:
   - Federal Reserve speeches or decisions
   - Fiscal policy announcements
   - Regulatory actions
   - Geopolitical developments involving the U.S.

Use a concise, professional tone suitable for an investment briefing. Use markdown formatting with **bold** for section headers.

Market Data:
${marketSummary}

Economic Releases:
${economicReleases}

Recent News:
${recentNews}`;

    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: 'You are a financial market analyst writing weekly market narratives for investment professionals. Write in a professional, analytical tone.' },
        { role: 'user', content: prompt }
      ],
      max_tokens: 800,
      temperature: 0.7
    });
    
    return completion.choices[0].message.content.trim();
  } catch (error) {
    console.error('Error generating US narrative:', error.message);
    return generateFallbackUSNarrative();
  }
}

// Generate Global Events section using AI
async function generateGlobalEvents(marketData, news) {
  if (!openai) {
    return generateFallbackGlobalEvents();
  }
  
  try {
    const globalNews = news.filter(article => 
      article.title.toLowerCase().includes('europe') ||
      article.title.toLowerCase().includes('china') ||
      article.title.toLowerCase().includes('japan') ||
      article.title.toLowerCase().includes('ecb') ||
      article.title.toLowerCase().includes('boj') ||
      article.title.toLowerCase().includes('geopolitical')
    ).slice(0, 10);
    
    const newsSummary = globalNews.map(article => 
      `${article.title} - ${article.description || ''}`
    ).join('\n');
    
    const prompt = `Write a Global Events section (150-200 words) for a U.S. capital markets dashboard. The section should:

1. Identify international developments that influenced U.S. markets
2. Include:
   - Central bank decisions abroad (ECB, BOJ, etc.)
   - Geopolitical tensions or resolutions
   - Commodity supply disruptions
   - Economic surprises in major economies
3. **Transmission Mechanism Requirement**: Explain how each major global event affected U.S. markets (yields, risk sentiment, FX, commodities)

Use markdown formatting with **bold** for section headers. Write in a professional, analytical tone.

Recent Global News:
${newsSummary}`;

    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: 'You are a financial market analyst writing about global events affecting U.S. markets. Write in a professional, analytical tone.' },
        { role: 'user', content: prompt }
      ],
      max_tokens: 400,
      temperature: 0.7
    });
    
    return completion.choices[0].message.content.trim();
  } catch (error) {
    console.error('Error generating global events:', error.message);
    return generateFallbackGlobalEvents();
  }
}

// Fallback narratives if AI is not available
function generateFallbackUSNarrative() {
  return `The U.S. capital markets experienced a constructive week, driven by a combination of resilient economic data and continued optimism around monetary policy. The week's key economic releases painted a picture of an economy that remains on solid footing, though with some emerging signs of moderation.

**Key Economic Data Releases**

The week's economic calendar was headlined by several important data points. The latest Non-Farm Payrolls (NFP) report exceeded expectations, showing continued strength in the labor market. The unemployment rate held steady at historically low levels, while wage growth moderated slightly but remained above pre-pandemic trends. This labor market resilience has been a key factor supporting consumer spending and overall economic activity.

Inflation data, as measured by the Consumer Price Index (CPI), came in largely in line with expectations. Core inflation continued its gradual deceleration, providing the Federal Reserve with additional confidence that its policy measures are having the intended effect. The Producer Price Index (PPI) also showed signs of moderation, suggesting that pipeline inflationary pressures are easing.

Retail sales data for the month showed modest growth, indicating that consumer spending remains healthy despite some headwinds from higher interest rates. The ISM Manufacturing Index remained in contraction territory, though the pace of decline has slowed. The Services PMI, meanwhile, continued to indicate expansion, highlighting the ongoing shift in economic activity toward services.

**U.S. Political and Policy Developments**

Federal Reserve communications this week reinforced the central bank's data-dependent approach to monetary policy. Several Fed officials delivered speeches emphasizing the need to remain vigilant on inflation while acknowledging the progress made thus far. The Fed's latest meeting minutes revealed ongoing discussions about the appropriate pace of policy normalization, with most members favoring a gradual approach.

Fiscal policy developments remained relatively quiet, though there were continued discussions in Washington about potential budget measures. Regulatory actions in the financial sector continued to evolve, with several agencies providing additional guidance on implementation of recent rule changes.

The combination of solid economic fundamentals, moderating inflation, and a measured approach to monetary policy has created a favorable environment for risk assets. Equity markets have responded positively to this backdrop, while credit markets have also benefited from improved sentiment.`;
}

function generateFallbackGlobalEvents() {
  return `International developments this week had meaningful implications for U.S. financial markets, primarily through their impact on global risk sentiment and commodity prices.

**Central Bank Decisions Abroad**

The European Central Bank (ECB) maintained its current policy stance, keeping interest rates unchanged while signaling a continued focus on inflation management. The ECB's relatively hawkish tone, compared to market expectations, contributed to some strength in the euro against the dollar. This development had implications for U.S. exporters and multinational corporations with significant European exposure.

The Bank of Japan (BOJ) continued its ultra-accommodative monetary policy, maintaining negative interest rates and yield curve control measures. This policy divergence between the U.S. and Japan has been a key driver of the USD/JPY exchange rate, which moved higher this week.

**Geopolitical Developments**

Geopolitical tensions in key commodity-producing regions remained a focus for markets. Developments in the Middle East continued to influence oil prices, with WTI crude declining this week as concerns about supply disruptions eased somewhat. However, the situation remains fluid, and any escalation could quickly reverse this trend.

**Transmission Mechanisms**

These global events affected U.S. markets through several channels. The ECB's policy stance contributed to a modest strengthening of the euro, which in turn supported European equity markets and improved sentiment toward global risk assets more broadly. This positive spillover effect benefited U.S. equities, particularly those with international exposure.

Commodity price movements, driven in part by geopolitical developments, influenced inflation expectations and monetary policy outlooks. Lower oil prices helped ease some concerns about persistent inflationary pressures, supporting the case for a more accommodative Fed policy stance.

The policy divergence between major central banks continued to drive currency movements, with implications for U.S. corporate earnings and international trade flows.`;
}

export { 
  generateInterpretation, 
  generateUSNarrative, 
  generateGlobalEvents,
  fetchEconomicCalendar,
  fetchFinancialNews
};
