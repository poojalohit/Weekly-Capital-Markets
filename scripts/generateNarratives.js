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
    return generateFallbackInterpretation();
  }
  
  try {
    const marketSummary = marketData.map(item => 
      `${item.variable}: ${item.latestLevel} (Weekly: ${item.weeklyChange > 0 ? '+' : ''}${item.weeklyChange.toFixed(2)}%, YTD: ${item.ytdChange > 0 ? '+' : ''}${item.ytdChange.toFixed(2)}%)`
    ).join('\n');
    
    const prompt = `You are a senior portfolio manager writing a brief market interpretation for institutional investors.

Analyze this week's market data and write a concise interpretation (3-5 sentences) that:
1. Identifies the DEFINING TREND of the week (give it a memorable name if appropriate, e.g., "The Risk Rally" or "Flight to Quality")
2. Notes any CORRELATION BREAKDOWNS or unusual cross-asset movements
3. Highlights the BIGGEST MOVERS and explains WHY they moved

Market Data:
${marketSummary}

Write in a professional, analytical tone. Be specific with numbers. Identify anomalies.`;

    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: 'You are a senior portfolio manager at a major investment bank writing market commentary for institutional clients. Be analytical, specific, and identify the key narrative driving markets.' },
        { role: 'user', content: prompt }
      ],
      max_tokens: 250,
      temperature: 0.7
    });
    
    return completion.choices[0].message.content.trim();
  } catch (error) {
    console.error('Error generating interpretation:', error.message);
    return generateFallbackInterpretation();
  }
}

// Generate U.S. Market Narrative using AI - Updated format matching sample
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
    
    const prompt = `You are a senior portfolio manager writing a weekly market analysis for institutional investors. Write a comprehensive Market Analysis & Commentary (400-500 words) following this EXACT structure:

**1. Trend Identification: [Give it a descriptive title]**
- Identify the DEFINING TREND of the week
- Explain what made this week's market action distinctive
- Note any correlation breakdowns (e.g., if stocks and bonds moved together unusually)
- Use bullet points for specific observations

**2. Key Catalysts**
- Identify the most IMPACTFUL events that moved markets this week
- For each catalyst, explain:
  • What happened
  • How markets reacted (be specific with numbers)
  • Why this matters going forward
- Include Fed actions, economic data releases, geopolitical events

**3. Sentiment Analysis**
- Describe the overall market mood (risk-on, risk-off, cautious, euphoric, panic, etc.)
- Use VIX levels as evidence
- Reference credit spreads and other sentiment indicators
- Note any sector-specific sentiment shifts

**4. The "Fresh Money" Recommendation**
- If you had $10M of fresh capital to deploy, what would you do?
- Provide a clear RECOMMENDATION (e.g., "Hold Cash", "Buy IG Credit", "Overweight Equities")
- Explain your RATIONALE with specific reasoning
- Identify what you would AVOID and why

**5. Forward Outlook**
- What should investors watch NEXT WEEK?
- Identify key RISKS that could derail markets
- Identify potential OPPORTUNITIES
- Name specific data releases or events to monitor

Market Data:
${marketSummary}

Economic Releases This Week:
${economicReleases}

Recent News:
${recentNews}

Write in a professional, analytical tone. Be SPECIFIC with data points. Connect macro events to market movements. Use bullet points within each section.`;

    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: 'You are a senior portfolio manager at a top-tier investment bank writing weekly market commentary for sophisticated institutional clients. Your analysis should be insightful, specific, and actionable. Always connect data to market implications. Use the numbered section format exactly as specified.' },
        { role: 'user', content: prompt }
      ],
      max_tokens: 1200,
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
    const marketSummary = marketData.map(item => 
      `${item.variable}: ${item.latestLevel} (WoW: ${item.weeklyChange > 0 ? '+' : ''}${item.weeklyChange.toFixed(2)}%)`
    ).join('\n');
    
    const globalNews = news.filter(article => 
      article.title.toLowerCase().includes('europe') ||
      article.title.toLowerCase().includes('china') ||
      article.title.toLowerCase().includes('japan') ||
      article.title.toLowerCase().includes('ecb') ||
      article.title.toLowerCase().includes('boj') ||
      article.title.toLowerCase().includes('geopolitical') ||
      article.title.toLowerCase().includes('oil') ||
      article.title.toLowerCase().includes('opec')
    ).slice(0, 10);
    
    const newsSummary = globalNews.map(article => 
      `${article.title} - ${article.description || ''}`
    ).join('\n');
    
    const prompt = `You are a senior portfolio manager writing about global events affecting U.S. markets. Write a Global Events section (200-250 words) with this structure:

**International Developments**
For each major global event this week:
- Describe what happened
- Explain the TRANSMISSION MECHANISM to U.S. markets:
  • How did it affect U.S. Treasury yields?
  • How did it affect risk sentiment?
  • How did it affect FX markets (especially USD)?
  • How did it affect commodities?

Cover these areas:
- Central bank decisions abroad (ECB, BOJ, PBOC, etc.)
- Geopolitical tensions or resolutions
- Commodity supply/demand shocks
- Economic surprises in major economies (China, Europe, Japan)

Use bullet points. Be specific about transmission mechanisms.

Market Data (for reference):
${marketSummary}

Recent Global News:
${newsSummary}`;

    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: 'You are a senior global macro strategist explaining how international events impact U.S. markets. Focus on transmission mechanisms - how global events flow through to U.S. assets.' },
        { role: 'user', content: prompt }
      ],
      max_tokens: 500,
      temperature: 0.7
    });
    
    return completion.choices[0].message.content.trim();
  } catch (error) {
    console.error('Error generating global events:', error.message);
    return generateFallbackGlobalEvents();
  }
}

// Fallback interpretation
function generateFallbackInterpretation() {
  return `The defining trend this week was "Cautious Optimism" as risk assets advanced while defensive positioning remained elevated. The S&P 500 and Nasdaq both posted gains, yet the VIX remained above historical averages, suggesting investors are hedging against potential volatility. Treasury yields edged higher as economic data came in resilient, while credit spreads continued to tighten—a constructive signal for risk appetite. The correlation between equities and bonds remained elevated, indicating macro factors continue to dominate micro fundamentals. Currency markets showed USD strength against the yen but weakness versus the euro, reflecting divergent central bank expectations.`;
}

// Fallback narratives if AI is not available
function generateFallbackUSNarrative() {
  return `**1. Trend Identification: "The Resilience Rally"**

The defining trend this week was continued market resilience despite mixed economic signals. Risk assets advanced while volatility remained contained.

• Equity markets posted solid gains with the S&P 500 and Nasdaq both finishing higher
• Correlation Observation: Stocks and bonds moved in opposite directions, suggesting a return to normal cross-asset relationships
• The VIX declined, indicating reduced hedging demand and improved risk appetite

**2. Key Catalysts**

The most impactful events this week centered on economic data and Fed communications:

• Labor Market Data: The latest employment figures showed continued strength, supporting the "soft landing" narrative
• Inflation Readings: CPI and PPI data came in near expectations, reinforcing the view that inflation is gradually moderating
• Fed Communications: Multiple Fed officials spoke this week, maintaining a data-dependent stance while acknowledging progress on inflation

**3. Sentiment Analysis**

Market sentiment can be characterized as "cautiously optimistic":

• VIX: Trading at moderate levels, suggesting neither complacency nor panic
• Credit Spreads: Investment-grade and high-yield spreads continued to tighten, indicating confidence in corporate balance sheets
• Sector Rotation: Growth stocks outperformed value, suggesting risk appetite is intact

**4. The "Fresh Money" Recommendation**

• Recommendation: Maintain balanced positioning with a slight overweight to equities
• Rationale: Economic data supports continued expansion, and corporate earnings remain resilient. However, valuations are elevated, warranting selective stock-picking over broad index exposure
• Avoid: Long-duration Treasuries remain vulnerable to any inflation surprises; also exercise caution in rate-sensitive sectors

**5. Forward Outlook**

Key events to monitor next week:

• Risk: Any hawkish surprises from Fed speakers could trigger a volatility spike
• Risk: Geopolitical developments remain a wildcard for energy prices and risk sentiment
• Opportunity: Watch for dips in quality names as potential buying opportunities
• Data to Watch: Housing data, consumer confidence, and any Fed meeting minutes`;
}

function generateFallbackGlobalEvents() {
  return `**International Developments**

Several global events had meaningful implications for U.S. markets this week:

**Central Bank Divergence**
• The ECB maintained its current policy stance, signaling continued focus on inflation
• Transmission to U.S.: Euro strength vs. USD; modest pressure on U.S. export competitiveness
• The BOJ continued ultra-accommodative policy, maintaining the USD/JPY carry trade dynamic
• Transmission to U.S.: Supports risk appetite as yen-funded carry trades remain attractive

**Geopolitical Developments**
• Middle East tensions remained elevated, creating uncertainty in energy markets
• Transmission to U.S.: Oil price volatility affects inflation expectations and Fed policy calculus
• WTI crude movements this week reflected shifting supply/demand expectations

**China Economic Signals**
• Chinese economic data showed mixed signals on growth momentum
• Transmission to U.S.: Impacts global growth expectations, commodity demand, and multinational earnings
• Currency implications: PBOC actions influence USD/CNY and broader EM currency complex

**Key Transmission Mechanisms This Week**
• Yields: Global central bank divergence supported modest Treasury yield increases
• Risk Sentiment: Geopolitical uncertainty added a modest risk premium to markets
• FX: Dollar showed mixed performance, strengthening vs. yen but weakening vs. euro
• Commodities: Oil remained range-bound as supply concerns offset demand worries`;
}

export { 
  generateInterpretation, 
  generateUSNarrative, 
  generateGlobalEvents,
  fetchEconomicCalendar,
  fetchFinancialNews
};
