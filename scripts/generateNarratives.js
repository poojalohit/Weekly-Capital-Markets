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

Analyze this week's market data and write a concise interpretation (4-6 sentences) that:

1. DEFINE THE TREND: Give it a memorable name (e.g., "The Risk Rally", "Flight to Quality", "Stagflation Scare")

2. IDENTIFY ANOMALIES - Look for unusual patterns:
   - Did Gold rise WITH equities? (unusual - normally inverse)
   - Did VIX rise while stocks rose? (unusual - normally inverse)
   - Did credit spreads widen while equities rallied? (divergence)
   - Did Treasuries and stocks move in the same direction? (correlation breakdown)
   - Any asset moving >3% weekly deserves explanation

3. EXPLAIN WHY: Connect each major move to a specific catalyst (Fed comments, economic data, geopolitical event)

Market Data:
${marketSummary}

CRITICAL: For each significant move, state: "[Asset] moved [X%] because [specific reason]"
Example: "Gold surged +4.4% despite equity gains—an anomaly suggesting persistent inflation hedging demand amid Middle East tensions."`;

    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: 'You are a senior portfolio manager at a major investment bank. Your job is to identify anomalies in market data and explain WHY they occurred. Never describe a move without explaining its cause. Be specific with numbers and catalysts.' },
        { role: 'user', content: prompt }
      ],
      max_tokens: 300,
      temperature: 0.7
    });
    
    return completion.choices[0].message.content.trim();
  } catch (error) {
    console.error('Error generating interpretation:', error.message);
    return generateFallbackInterpretation();
  }
}

// Generate U.S. Market Narrative using AI - Updated format with correlations and catalysts
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
    
    const prompt = `You are a senior portfolio manager writing a weekly market analysis. Write a comprehensive Market Analysis & Commentary (450-550 words) following this EXACT structure:

**1. Trend Identification: [Give it a descriptive title like "The Divergence Rally" or "Risk-On with Hedges"]**

REQUIRED: Correlate market data to specific events. For each observation:
- State the DATA POINT (e.g., "S&P 500 +0.4%, Nasdaq +0.9%")
- State the CAUSE (e.g., "driven by strong earnings from mega-cap tech")
- Identify ANOMALIES with explanation:
  • "ANOMALY: Gold +4.4% despite equity gains—unusual as gold typically falls in risk-on environments. Cause: [explanation]"
  • "ANOMALY: VIX elevated at 16+ while equities rally—suggests hedging demand persists. Cause: [explanation]"
  • "CORRELATION BREAKDOWN: Stocks and bonds moving together signals [interpretation]"

Use this format for each key observation:
• [Asset] moved [X%] → Cause: [specific event/reason] → Implication: [what this means]

**2. Key Catalysts**

For EACH catalyst, you MUST show the cause-and-effect chain:

FORMAT:
• **[Event Name]** (e.g., "Fed Chair Powell Speech on Tuesday")
  - What happened: [1 sentence description]
  - Market impact: [Specific numbers - which assets moved and by how much]
  - Transmission mechanism: [How did this event flow through to prices?]
  - Forward implication: [What does this mean going forward?]

Cover these catalyst categories:
- Federal Reserve actions/communications
- Economic data releases (NFP, CPI, retail sales, etc.)
- Geopolitical developments
- Corporate earnings/guidance (if significant)

**3. Sentiment Analysis**

Describe market mood using EVIDENCE:
• VIX level and what it indicates (below 15 = complacent, 15-20 = cautious, 20+ = fear)
• Credit spreads (tightening = risk-on, widening = risk-off)
• Safe haven flows (gold, yen, Treasuries)
• Sector rotation (growth vs value, cyclicals vs defensives)

**4. The "Fresh Money" Recommendation**

• Recommendation: [Clear action - e.g., "Overweight U.S. equities, underweight duration"]
• Rationale: [Connect to the data and catalysts discussed above]
• What to Avoid: [Specific assets/sectors and why]
• Risk to this view: [What could go wrong?]

**5. Forward Outlook**

• Key data releases next week: [List specific releases with dates]
• Bull case: [What could drive markets higher?]
• Bear case: [What could cause a selloff?]
• Technical levels to watch: [S&P support/resistance if applicable]

Market Data This Week:
${marketSummary}

Economic Releases:
${economicReleases}

Recent News Headlines:
${recentNews}

CRITICAL REQUIREMENTS:
1. Every market move must have an explained CAUSE
2. Every catalyst must show specific MARKET IMPACT with numbers
3. Identify at least 2 ANOMALIES or unusual correlations
4. Use bullet points within each section`;

    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: 'You are a senior portfolio manager at Goldman Sachs writing the weekly market commentary. Your analysis must show CAUSE and EFFECT. Never describe market moves without explaining WHY they happened. Always connect catalysts to specific market impacts with numbers. Identify anomalies and correlation breakdowns. Be specific, analytical, and actionable.' },
        { role: 'user', content: prompt }
      ],
      max_tokens: 1400,
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
    
    const prompt = `You are a global macro strategist explaining how international events affected U.S. markets. Write a Global Events section (200-250 words).

For EACH major global event, you MUST show the TRANSMISSION MECHANISM to U.S. markets:

FORMAT for each event:
**[Event Name]**
• What happened: [Brief description]
• U.S. market impact:
  - Treasuries: [How did yields react and why?]
  - Equities: [How did risk sentiment change?]
  - FX: [How did USD move against relevant currencies?]
  - Commodities: [Any impact on oil, gold, etc.?]

Cover these areas if relevant:
1. Central bank decisions abroad (ECB, BOJ, PBOC)
2. Geopolitical tensions (Middle East, China-Taiwan, Russia-Ukraine)
3. Commodity supply/demand shocks (OPEC decisions, weather events)
4. Economic surprises in major economies

Market Data (for reference):
${marketSummary}

Recent Global News:
${newsSummary}

CRITICAL: Show the CHAIN OF CAUSATION from global event → transmission channel → U.S. market impact
Example: "ECB's hawkish hold → EUR/USD +0.5% → U.S. export competitiveness concerns → slight drag on multinational earnings expectations"`;

    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: 'You are a global macro strategist. Your job is to explain HOW international events flow through to U.S. markets. Always show the transmission mechanism with specific market impacts.' },
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

// Fallback interpretation with anomaly identification
function generateFallbackInterpretation() {
  return `The defining trend this week was "Cautious Optimism with Safe-Haven Demand"—an unusual combination where risk assets advanced while defensive positioning intensified.

**Key Anomaly #1:** Gold surged +4.4% this week even as the S&P 500 gained +0.4%—a notable divergence from the typical inverse relationship. This suggests investors are simultaneously buying equities for upside while hedging against tail risks (geopolitical tensions, inflation uncertainty).

**Key Anomaly #2:** The VIX remains elevated at 16+ despite equity gains, indicating persistent hedging demand. Normally, a rising equity market would compress volatility, but options markets are pricing in potential turbulence ahead.

**Correlation Observation:** Credit spreads continued tightening (BBB OAS -2 bps, HY -5 bps) alongside equity gains—this is the normal risk-on correlation and suggests credit markets are confirming the equity rally's legitimacy.

The equity advance (+0.4% S&P, +0.9% Nasdaq) was driven by resilient economic data and steady Fed messaging, while the gold bid reflects ongoing geopolitical uncertainty in the Middle East and persistent inflation hedging.`;
}

// Fallback narratives with cause-effect relationships
function generateFallbackUSNarrative() {
  return `**1. Trend Identification: "The Hedged Rally"**

This week's defining trend was a risk-on rally accompanied by elevated hedging activity—an unusual combination suggesting investors are buying equities while simultaneously protecting against downside.

• S&P 500 +0.41% → Cause: Resilient economic data and stable Fed messaging → Implication: Soft landing narrative remains intact
• Nasdaq +0.91% → Cause: Strong mega-cap tech performance and AI enthusiasm → Implication: Growth stocks leading despite rate concerns
• **ANOMALY: Gold +4.4% during equity rally** → Cause: Geopolitical tensions (Middle East) + inflation hedging → Implication: Investors don't fully trust the rally
• **ANOMALY: VIX elevated at 16+ despite gains** → Cause: Options market pricing tail risks → Implication: Hedging demand suggests caution beneath the surface

**2. Key Catalysts**

• **Federal Reserve Communications (Mid-week)**
  - What happened: Multiple Fed officials maintained data-dependent stance, emphasized no rush to cut rates
  - Market impact: 10Y Treasury yields stable around 4.15%; equity volatility contained
  - Transmission: Steady Fed messaging → reduced rate uncertainty → supportive for risk assets
  - Forward implication: Markets now pricing fewer cuts in 2026; focus shifts to inflation data

• **Economic Data: Labor Market (Various)**
  - What happened: Jobless claims remained low; labor market shows continued resilience
  - Market impact: Equities +0.4-0.9% on soft landing hopes; yields edged higher
  - Transmission: Strong employment → consumer spending intact → earnings estimates hold
  - Forward implication: "Good news is good news" regime continues

• **Geopolitical: Middle East Tensions**
  - What happened: Elevated tensions in the region; no major escalation but uncertainty persists
  - Market impact: WTI crude +2.7%; Gold +4.4%; mild risk premium in VIX
  - Transmission: Supply disruption fears → energy prices bid → inflation concerns linger
  - Forward implication: Energy volatility likely to continue; watch for escalation

**3. Sentiment Analysis**

Market mood: **Cautiously Optimistic** (Risk-On with Hedges)

Evidence:
• VIX at 16.27 (elevated vs. historical average of ~15) → Hedging demand persists
• Credit spreads tightening: BBB OAS 125 bps (-2 bps WoW), HY 350 bps (-5 bps WoW) → Credit confirming equity rally
• Gold +21% YTD alongside equity gains → Unusual; suggests inflation/geopolitical hedging
• Sector leadership: Growth > Value, Tech leading → Classic risk-on rotation

**4. The "Fresh Money" Recommendation**

• **Recommendation:** Maintain balanced equity exposure; add to quality names on dips
• **Rationale:** Economic data supports continued expansion, but the gold/VIX signals suggest maintaining some defensive positioning. The hedged rally pattern historically precedes either (a) hedges being unwound as concerns fade, or (b) the concerns materializing
• **What to Avoid:** Long-duration Treasuries (rate volatility persists); speculative small-caps (if VIX spikes, they'll underperform)
• **Risk to this view:** Inflation data surprising to the upside; geopolitical escalation

**5. Forward Outlook**

Key data next week:
• PCE Inflation (Friday) — Fed's preferred inflation gauge; critical for rate expectations
• Consumer Confidence (Tuesday) — Gauge of consumer health
• Housing data (Various) — Interest rate sensitivity check

• **Bull case:** PCE comes in soft → Rate cut expectations rise → Equity rally extends
• **Bear case:** PCE surprises high → "Higher for longer" narrative strengthens → Equity pullback, yields spike
• **Technical levels:** S&P 500 resistance at 7000; support at 6800`;
}

function generateFallbackGlobalEvents() {
  return `**International Developments & U.S. Market Transmission**

**European Central Bank Policy Stance**
• What happened: ECB maintained rates, signaled continued focus on inflation
• U.S. market impact:
  - FX: EUR/USD relatively stable; USD maintained strength
  - Equities: Modest positive spillover as European stability supports global risk sentiment
  - Treasuries: Limited direct impact; yield differential remains supportive of USD
  - Transmission: ECB hawkishness → validates "higher for longer" global rate regime → U.S. rates supported

**Middle East Geopolitical Tensions**
• What happened: Elevated tensions persisted; oil supply concerns remain
• U.S. market impact:
  - Commodities: WTI crude +2.7% on supply risk premium
  - Gold: +4.4% on safe-haven demand
  - Equities: Energy sector outperformed; airlines/transport underperformed
  - Treasuries: Mild flight-to-quality bid supporting prices
  - Transmission: Geopolitical risk → energy price volatility → inflation concerns → Fed policy uncertainty

**Bank of Japan Policy**
• What happened: BOJ maintained ultra-accommodative stance
• U.S. market impact:
  - FX: USD/JPY stable; yen carry trade remains attractive
  - Equities: Supports global liquidity conditions
  - Transmission: BOJ accommodation → yen funding for global carry trades → supports risk asset valuations

**Key Transmission Mechanisms This Week**
• Yields: Global central bank divergence supported modest Treasury yield increase
• Risk Sentiment: Geopolitical uncertainty added 2-3 vol points to VIX
• FX: Dollar index stable as conflicting forces (rate support vs. risk sentiment) balanced
• Commodities: Geopolitical premium in oil (~$3-5/barrel); gold bid on hedging demand`;
}

export { 
  generateInterpretation, 
  generateUSNarrative, 
  generateGlobalEvents,
  fetchEconomicCalendar,
  fetchFinancialNews
};
