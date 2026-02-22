import axios from 'axios';
import { GoogleGenerativeAI } from '@google/generative-ai';

// Initialize Gemini client
const geminiApiKey = process.env.GEMINI_API_KEY || '';
const genAI = geminiApiKey ? new GoogleGenerativeAI(geminiApiKey) : null;

if (genAI) {
  console.log('✅ GEMINI_API_KEY detected — will use Gemini AI for narratives');
} else {
  console.log('❌ GEMINI_API_KEY not found — will use fallback narratives');
}

async function callGemini(systemPrompt, userPrompt, maxTokens = 1400) {
  if (!genAI) return null;
  try {
    const model = genAI.getGenerativeModel({ 
      model: 'gemini-2.5-flash',
      systemInstruction: systemPrompt,
      generationConfig: { maxOutputTokens: maxTokens, temperature: 0.7 }
    });
    const result = await model.generateContent(userPrompt);
    const text = result.response.text().trim();
    console.log(`✅ Gemini generated ${text.length} characters`);
    return text;
  } catch (error) {
    console.error(`❌ Gemini API call failed: ${error.message}`);
    return null;
  }
}

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
        importance: '1,2,3'
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
async function generateInterpretation(marketData, dateStr = new Date().toISOString().split('T')[0]) {
  if (!genAI) {
    console.warn('⚠️  GEMINI_API_KEY not set — using data-driven fallback narrative. Set GEMINI_API_KEY for AI-generated commentary.');
    return generateFallbackInterpretation(marketData);
  }
  
  try {
    const marketSummary = marketData.map(item => 
      `${item.variable}: ${item.latestLevel} (Weekly: ${item.weeklyChange > 0 ? '+' : ''}${item.weeklyChange.toFixed(2)}%, YTD: ${item.ytdChange > 0 ? '+' : ''}${item.ytdChange.toFixed(2)}%)`
    ).join('\n');
    
    const prompt = `Write a brief market summary for the week ending ${dateStr}. Someone reads this every week—each summary MUST be unique based on the actual data below.

CRITICAL: Use the EXACT numbers from the Market Data. Do not use generic percentages. Reference specific moves (e.g., "S&P 500 fell -0.7%" not "stocks dipped").

RULES FOR SIMPLE LANGUAGE:
- Avoid jargon. If you must use a term like "VIX" or "yield," explain it in parentheses
- Use everyday analogies (e.g., "Gold is like a safety blanket for investors")
- Explain WHY something matters, not just what happened
- Use phrases like "This means..." or "In simple terms..."

FORMAT REQUIREMENTS:
- Start with: **This Week's Theme: "[Your Theme Title]"**
- Follow with 1-2 sentences of overview
- Then add section headers like **What's driving the fear?** or **The catalyst:**
- Use bullet points (•) under each section to list key points
- Keep each bullet concise and clear

Analyze this data and explain:
1. Give the week a simple theme name (e.g., "A Good Week for Stocks, But Investors Are Nervous")
2. What UNUSUAL patterns happened? Explain why they're unusual in simple terms
3. What caused the biggest moves?

Market Data:
${marketSummary}

Example format:
**This Week's Theme: "Your Title"**

Overview paragraph explaining the main story.

**What's driving the fear?**

• First key point with explanation
• Second key point with explanation
• Third key point with explanation`;

    const systemPrompt = 'You are a financial educator who explains market movements to everyday people. Use simple language, avoid jargon, and always explain the "so what" behind the numbers. If you use a technical term, immediately explain it in plain English.';

    const result = await callGemini(systemPrompt, prompt, 350);
    return result || generateFallbackInterpretation(marketData);
  } catch (error) {
    console.error('Error generating interpretation:', error.message);
    return generateFallbackInterpretation(marketData);
  }
}

// Generate U.S. Market Narrative using AI - Simple language version
async function generateUSNarrative(marketData, economicCalendar, news, dateStr = new Date().toISOString().split('T')[0]) {
  if (!genAI) {
    console.warn('⚠️  GEMINI_API_KEY not set — using data-driven fallback narrative.');
    return generateFallbackUSNarrative(marketData);
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
    
    const prompt = `Write a weekly market analysis for the week ending ${dateStr} (450-500 words). This is read every week—your analysis MUST be unique and reflect the ACTUAL numbers below. Use the exact percentages from the data; do not substitute generic figures.

CRITICAL: Each bullet point and percentage must match the Market Data. If S&P 500 fell -0.7%, say "-0.7%" not "about 1%". If Bitcoin is down -24% YTD, say exactly that.

LANGUAGE RULES:
- When you use a term like "VIX," immediately explain it: "VIX (a measure of market fear)"
- Use analogies: "Think of credit spreads like the interest rate premium risky borrowers pay"
- Explain cause and effect clearly: "Because X happened → investors did Y → which caused Z"
- Use "In simple terms..." or "What this means for everyday investors..."

Follow this structure:

**1. What Happened This Week: [Simple descriptive title]**

Start with a 2-sentence plain English summary anyone could understand. Then explain:
- Which investments went up or down, and WHY (connect to real-world events)
- **Unusual Pattern:** Point out anything surprising and explain why it's unusual
  Example: "Normally when stocks go up, gold goes down (investors feel confident and don't need 'safe' investments). But this week, BOTH went up—suggesting investors are buying stocks but also hedging their bets."

**2. What Caused These Moves**

For each major event, explain it simply:
- **[Event in plain English]** (e.g., "The Federal Reserve Signaled No Rate Cuts Soon")
  - What happened: [1-2 simple sentences]
  - Why it matters: [How does this affect regular people's investments, mortgages, savings?]
  - Market reaction: [What did investors do in response?]

**3. How Are Investors Feeling?**

Describe the market mood in everyday terms:
- Are investors nervous or confident? What's the evidence?
- Explain VIX in simple terms (fear gauge: below 15 = calm, 15-20 = cautious, above 20 = worried)
- Are investors seeking "safe" investments (gold, government bonds) or "risky" ones (stocks, crypto)?

**4. What Would a Pro Do With New Money?**

Give practical, understandable advice:
- If someone had money to invest, what would be smart right now?
- What should investors be careful about?
- Explain the reasoning in simple terms

**5. What to Watch Next Week**

- What upcoming events could move markets?
- What's the best-case scenario? Worst-case?
- Any important economic reports coming (and why they matter)?

**6. What These Numbers Mean (Plain English Guide)**

Include a short subsection that explains each variable in one simple sentence for non-finance readers. Use this exact list and keep each explanation to one line:
- S&P 500 Index: what it tracks and why it matters
- Nasdaq Composite Index: what it represents
- VIX Index: "fear gauge" in plain English
- U.S. 10-Year Treasury Yield: what it is and how it affects people
- 3-Month SOFR Rate: what it measures in simple terms
- Gold (USD/oz): why people watch it
- Crude Oil (WTI): what it affects (e.g. gas prices)
- USD/JPY and EUR/USD: what the exchange rate means in plain English
- BBB U.S. Corporate OAS and U.S. High Yield OAS: what "spread" or "OAS" means simply (extra interest risky borrowers pay)
- Bitcoin (USD): what it represents in the context of risk/speculation

Market Data:
${marketSummary}

Economic Events:
${economicReleases}

News:
${recentNews}

Remember: Write as if explaining to a smart friend who doesn't follow finance. Be clear, not condescending.`;

    const systemPrompt = 'You are a financial educator who makes markets understandable for everyone. You explain complex concepts using everyday language and analogies. You never assume the reader knows financial jargon. When you must use a technical term, you immediately explain it in parentheses. Your goal is clarity, not impressive vocabulary.';

    const result = await callGemini(systemPrompt, prompt, 1400);
    return result || generateFallbackUSNarrative(marketData);
  } catch (error) {
    console.error('Error generating US narrative:', error.message);
    return generateFallbackUSNarrative(marketData);
  }
}

// Generate Global Events section using AI - Simple language
async function generateGlobalEvents(marketData, news, dateStr = new Date().toISOString().split('T')[0]) {
  if (!genAI) {
    console.warn('⚠️  GEMINI_API_KEY not set — using data-driven fallback narrative.');
    return generateFallbackGlobalEvents(marketData);
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
    
    const prompt = `Write a simple explanation (200-250 words) of how world events affected U.S. markets for the week ending ${dateStr}. Use the EXACT percentages from the Market Data—e.g., if oil rose +1.3% this week, say "+1.3%" not a generic figure. 

SIMPLE LANGUAGE RULES:
- Explain everything as if to someone who doesn't follow international news closely
- Connect global events to things people care about: gas prices, grocery costs, their 401k
- Use cause-and-effect chains: "Conflict in Middle East → oil prices up → gas prices may rise → inflation worries"

For each major global event:
**[Event Name in Plain English]**
- What happened: [Simple 1-sentence explanation]
- Why Americans should care: [How does this affect U.S. investors or consumers?]
- Market reaction: [Did this make investments go up or down? Which ones?]

Cover events like:
- Tensions in the Middle East (and oil/gas prices)
- What other countries' central banks did (and why it matters for U.S. interest rates)
- China's economy (and what it means for global growth)

Market Data:
${marketSummary}

Global News:
${newsSummary}

Example of good simple language:
"The European Central Bank (Europe's version of the Federal Reserve) kept interest rates high. This matters for U.S. investors because it signals that inflation is still a global concern—not just an American problem. When Europe keeps rates high, it makes the euro stronger compared to the dollar, which can make American exports more expensive overseas."`;

    const systemPrompt = 'You explain global events and their market impact in simple terms anyone can understand. You connect international news to everyday concerns like gas prices, grocery costs, and retirement savings. You never use jargon without explaining it.';

    const result = await callGemini(systemPrompt, prompt, 500);
    return result || generateFallbackGlobalEvents(marketData);
  } catch (error) {
    console.error('Error generating global events:', error.message);
    return generateFallbackGlobalEvents(marketData);
  }
}

// Helper to get value from market data
function getValue(marketData, variableName, prop = 'latestLevel') {
  const item = marketData?.find(m => m.variable === variableName || m.variable.includes(variableName));
  return item ? item[prop] : null;
}

function fmt(v) {
  if (v == null) return 'N/A';
  if (typeof v === 'number') return (v > 0 ? '+' : '') + v.toFixed(2) + '%';
  return String(v);
}

// Fallback interpretation - uses actual market data for correct numbers
function generateFallbackInterpretation(marketData = []) {
  const sp500 = getValue(marketData, 'S&P 500', 'weeklyChange');
  const nasdaq = getValue(marketData, 'Nasdaq', 'weeklyChange');
  const vix = getValue(marketData, 'VIX', 'latestLevel');
  const gold = getValue(marketData, 'Gold', 'weeklyChange');
  const oil = getValue(marketData, 'Crude Oil', 'weeklyChange');
  const bitcoin = getValue(marketData, 'Bitcoin', 'weeklyChange');
  
  const stocksUp = sp500 != null && sp500 > 0;
  const theme = stocksUp 
    ? "Stocks Up, But Investors Are Playing It Safe" 
    : "Stocks Slip, Investors Stay Cautious";
  
  return `**This Week's Theme: "${theme}"**

The stock market ${stocksUp ? 'had a good week' : 'pulled back this week'}—the S&P 500 (a basket of 500 large U.S. companies) ${sp500 != null ? (sp500 > 0 ? `rose ${fmt(sp500)}` : `fell ${fmt(sp500)}`) : 'moved'}, and tech stocks (Nasdaq) ${nasdaq != null ? (nasdaq > 0 ? `gained ${fmt(nasdaq)}` : `lost ${fmt(nasdaq)}`) : 'moved'}. ${gold != null && gold > 0 ? `Investors also bought gold (${fmt(gold)}), which is usually what people buy when they're nervous.` : ''}

**What's driving the moves?**

• The VIX (often called the "fear index"—measures how volatile investors expect the market to be) is at ${vix != null ? vix.toFixed(2) : 'elevated'}
• ${oil != null && oil > 0 ? `Oil prices rose ${fmt(oil)} on supply concerns` : oil != null ? `Oil ${fmt(oil)} this week` : 'Energy markets shifted'}
• ${bitcoin != null ? `Bitcoin ${bitcoin > 0 ? 'gained' : 'fell'} ${fmt(bitcoin)}` : 'Crypto remains volatile'}

**The bottom line:** Markets reflect the current mood—${stocksUp ? 'optimistic but hedged' : 'cautious and defensive'}.`;
}

// Fallback narratives - uses actual market data for correct numbers
function generateFallbackUSNarrative(marketData = []) {
  const sp500Chg = getValue(marketData, 'S&P 500', 'weeklyChange');
  const sp500Lev = getValue(marketData, 'S&P 500', 'latestLevel');
  const nasdaqChg = getValue(marketData, 'Nasdaq', 'weeklyChange');
  const nasdaqYtd = getValue(marketData, 'Nasdaq', 'ytdChange');
  const vix = getValue(marketData, 'VIX', 'latestLevel');
  const goldChg = getValue(marketData, 'Gold', 'weeklyChange');
  const goldYtd = getValue(marketData, 'Gold', 'ytdChange');
  const oilChg = getValue(marketData, 'Crude Oil', 'weeklyChange');
  const btcChg = getValue(marketData, 'Bitcoin', 'weeklyChange');
  const btcYtd = getValue(marketData, 'Bitcoin', 'ytdChange');
  
  const stocksUp = sp500Chg != null && sp500Chg > 0;
  const theme = stocksUp 
    ? "A Good Week for Stocks, But Investors Bought Insurance" 
    : "Tech Slumps, Crypto Crashes, Defensive Posture Continues";
  
  const sp500Line = sp500Chg != null && sp500Lev != null 
    ? `**S&P 500 ${stocksUp ? 'rose' : 'fell'} ${fmt(sp500Chg)} to ${Math.round(sp500Lev).toLocaleString()}**`
    : '**S&P 500** moved';
  const nasdaqLine = nasdaqChg != null 
    ? `**Nasdaq ${nasdaqChg > 0 ? 'gained' : 'dropped'} ${fmt(nasdaqChg)}**${nasdaqYtd != null && nasdaqYtd < 0 ? ` — now negative for the year (${fmt(nasdaqYtd)} YTD)` : ''}`
    : '**Nasdaq** moved';
  const btcLine = btcChg != null && btcYtd != null
    ? `**Bitcoin ${btcChg > 0 ? 'gained' : 'fell'} ${fmt(btcChg)}** — ${btcYtd < 0 ? `down ${fmt(btcYtd)} year-to-date` : `up ${fmt(btcYtd)} YTD`}`
    : '**Bitcoin** moved';
  const goldLine = goldChg != null && goldYtd != null
    ? `**Gold ${goldChg > 0 ? 'rose' : 'fell'} ${fmt(goldChg)}** — ${goldYtd > 0 ? `up ${fmt(goldYtd)} for the year` : ''}`
    : '**Gold** moved';
  const oilLine = oilChg != null
    ? `**Oil ${oilChg > 0 ? 'rose' : 'fell'} ${fmt(oilChg)}**`
    : '**Oil** moved';
  
  return `**1. What Happened This Week: "${theme}"**

In simple terms: U.S. stocks ${stocksUp ? 'went up' : 'pulled back'} this week. Here's what moved and why:

• ${sp500Line} → The broad market reflects current economic conditions and Fed policy expectations
• ${nasdaqLine} → Tech stocks ${nasdaqChg != null && nasdaqChg < 0 ? 'led the decline' : 'performance'}
• ${btcLine} → When risky assets like Bitcoin ${btcChg != null && btcChg < 0 ? 'fall, it signals investors are reducing risk' : 'rise, risk appetite is higher'}
• ${goldLine} → Investors ${goldChg != null && goldChg > 0 ? 'are maintaining "safe haven" allocations' : 'are watching gold'}
• ${oilLine} → ${oilChg != null && oilChg > 0 ? 'Geopolitical concerns continue to support energy prices' : 'Energy markets shifted'}
• **The "fear index" (VIX) at ${vix != null ? vix.toFixed(2) : 'elevated'}** → ${vix != null && vix > 15 ? 'Still in nervous territory (above 15 = cautious)' : 'Market calm'} 

**2. What Caused These Moves**

• **Federal Reserve Held Steady on Rates**
  - What happened: Fed officials said they're not ready to cut rates yet—they want more evidence that inflation is under control
  - Why it matters: Affects mortgage rates, credit card interest. No rate cuts soon means borrowing costs stay higher
  - Market reaction: Stocks took it in stride; this was expected

• **Geopolitical Tensions**
  - What happened: Conflicts in the Red Sea region are disrupting shipping and creating oil supply concerns
  - Why it matters: Could raise gas prices and contribute to inflation
  - Market reaction: Oil and gold both ${oilChg != null && oilChg > 0 ? 'rose' : 'moved'}; investors monitoring escalation

**3. How Are Investors Feeling?**

The mood is **"${stocksUp ? 'Cautiously optimistic' : 'Cautious and defensive'}"**—${vix != null && vix > 15 ? 'the VIX in the nervous zone suggests worry' : 'markets are calm'}.

**4. What Would a Pro Do With New Money?**

• **Consider:** A balanced approach—some stocks, some bonds
• **Be careful with:** Very long-term bonds if inflation surprises
• **Keep in mind:** ${goldYtd != null && goldYtd > 0 ? `Gold up ${fmt(goldYtd)} suggests smart money is hedged.` : 'Stay diversified.'}

**5. What to Watch Next Week**

• **PCE Inflation Report** — The Fed's favorite inflation measure. Higher than expected = rates stay higher longer
• **Consumer Confidence** — Affects spending
• **Wild card:** Middle East escalation could spike oil

**6. What These Numbers Mean (Plain English Guide)**

• **S&P 500 Index** — Tracks 500 of America's biggest companies. When it goes up, the broad stock market is generally doing well.
• **Nasdaq Composite Index** — Tracks mainly technology companies. "How tech stocks are doing."
• **VIX Index** — The "fear gauge." Higher = more worry; lower = more calm.
• **U.S. 10-Year Treasury Yield** — Influences mortgage rates and long-term borrowing.
• **3-Month SOFR Rate** — Key short-term rate tied to Fed policy.
• **Gold (USD/oz)** — People buy gold when they want a "safe" place for money in uncertain times.
• **Crude Oil (WTI)** — U.S. benchmark oil price. When it rises, gas and energy costs tend to follow.
• **USD/JPY** — Dollar vs yen. **EUR/USD** — Dollar vs euro.
• **BBB U.S. Corporate OAS** — Extra interest solid companies pay. Falling = lenders more comfortable.
• **U.S. High Yield OAS** — Extra interest riskier companies pay. **Bitcoin (USD)** — Volatile digital asset, often "risk-on."`;
}

function generateFallbackGlobalEvents(marketData = []) {
  const oilChg = getValue(marketData, 'Crude Oil', 'weeklyChange');
  const goldChg = getValue(marketData, 'Gold', 'weeklyChange');
  const sp500Chg = getValue(marketData, 'S&P 500', 'weeklyChange');
  
  const oilText = oilChg != null 
    ? `Oil prices ${oilChg > 0 ? 'rose' : 'fell'} ${fmt(oilChg)} this week`
    : 'Oil prices moved';
  const goldText = goldChg != null && goldChg > 0 
    ? `gold jumped (investors buying "safety")` 
    : 'investors watching safe havens';
  const stocksText = sp500Chg != null && sp500Chg > 0 
    ? 'U.S. markets performed reasonably well' 
    : 'U.S. markets pulled back';
  
  return `**How World Events Affected U.S. Markets This Week**

**Middle East Tensions: Why You Might Pay More at the Pump**

What happened: Conflicts in the Red Sea region (near important shipping routes) continued this week, with attacks on commercial ships disrupting global trade.

Why Americans should care: ${oilText}. When oil costs more, gas prices eventually follow. It also adds to inflation worries—the Federal Reserve is watching prices closely to decide when to cut interest rates.

Market reaction: ${oilText}, ${goldText}, and the stock market's "fear gauge" stayed elevated.

**Europe's Central Bank Keeping Rates High**

What happened: The European Central Bank (like America's Federal Reserve, but for Europe) decided to keep interest rates high to fight inflation.

Why Americans should care: When major economies worldwide keep rates high, it suggests inflation is a global problem. This makes it harder for the Fed to cut rates, which means mortgages, car loans, and credit card rates stay expensive longer.

**China's Economy Still Sluggish**

What happened: China's manufacturing sector is still struggling (their PMI, a measure of factory activity, stayed below 50, which indicates shrinking activity).

Why Americans should care: China is the world's second-largest economy. When they're not buying as much, it can slow global growth and hurt U.S. companies that sell products there.

**The Bottom Line:** Global events this week are adding to uncertainty and keeping investors cautious, even as ${stocksText}.`;
}

export { 
  generateInterpretation, 
  generateUSNarrative, 
  generateGlobalEvents,
  fetchEconomicCalendar,
  fetchFinancialNews
};
