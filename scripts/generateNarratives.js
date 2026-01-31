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
    
    const prompt = `Write a brief market summary (4-6 sentences) for someone who is NOT a finance expert. 

RULES FOR SIMPLE LANGUAGE:
- Avoid jargon. If you must use a term like "VIX" or "yield," explain it in parentheses
- Use everyday analogies (e.g., "Gold is like a safety blanket for investors")
- Explain WHY something matters, not just what happened
- Use phrases like "This means..." or "In simple terms..."

Analyze this data and explain:
1. Give the week a simple theme name (e.g., "A Good Week for Stocks, But Investors Are Nervous")
2. What UNUSUAL patterns happened? Explain why they're unusual in simple terms
3. What caused the biggest moves?

Market Data:
${marketSummary}

Example of good simple language:
"Gold jumped +4.4% even though stocks also went up. That's unusual—normally when investors feel confident about stocks, they don't buy as much gold (which is seen as a 'safe haven' investment). This suggests investors are hedging their bets, buying stocks for growth but also buying gold just in case something goes wrong."`;

    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: 'You are a financial educator who explains market movements to everyday people. Use simple language, avoid jargon, and always explain the "so what" behind the numbers. If you use a technical term, immediately explain it in plain English.' },
        { role: 'user', content: prompt }
      ],
      max_tokens: 350,
      temperature: 0.7
    });
    
    return completion.choices[0].message.content.trim();
  } catch (error) {
    console.error('Error generating interpretation:', error.message);
    return generateFallbackInterpretation();
  }
}

// Generate U.S. Market Narrative using AI - Simple language version
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
    
    const prompt = `Write a weekly market analysis (450-500 words) that a non-finance person can understand. Use simple language throughout.

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

Market Data:
${marketSummary}

Economic Events:
${economicReleases}

News:
${recentNews}

Remember: Write as if explaining to a smart friend who doesn't follow finance. Be clear, not condescending.`;

    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: 'You are a financial educator who makes markets understandable for everyone. You explain complex concepts using everyday language and analogies. You never assume the reader knows financial jargon. When you must use a technical term, you immediately explain it in parentheses. Your goal is clarity, not impressive vocabulary.' },
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

// Generate Global Events section using AI - Simple language
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
    
    const prompt = `Write a simple explanation (200-250 words) of how world events affected U.S. markets this week. 

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

    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: 'You explain global events and their market impact in simple terms anyone can understand. You connect international news to everyday concerns like gas prices, grocery costs, and retirement savings. You never use jargon without explaining it.' },
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

// Fallback interpretation with simple language
function generateFallbackInterpretation() {
  return `**This Week's Theme: "Stocks Up, But Investors Are Playing It Safe"**

The stock market had a good week—the S&P 500 (a basket of 500 large U.S. companies) rose about 0.4%, and tech stocks did even better at nearly 1%. But here's what's interesting: investors also bought a lot of gold (+4.4%), which is usually what people buy when they're nervous.

**Why is this unusual?** Normally, when investors feel confident about stocks, they don't rush to buy gold—it's like bringing an umbrella on a sunny day. The fact that both went up suggests investors are optimistic but also hedging their bets, just in case something goes wrong.

**What's causing the nervousness?** The VIX (often called the "fear index" because it measures how volatile investors expect the market to be) is elevated at 16.27. Tensions in the Middle East are pushing oil prices up (+2.7%), and there's still uncertainty about when the Federal Reserve might cut interest rates.

**The bottom line:** Markets are doing well on the surface, but investors are clearly keeping one eye on potential risks.`;
}

// Fallback narratives with simple language
function generateFallbackUSNarrative() {
  return `**1. What Happened This Week: "A Good Week for Stocks, But Investors Bought Insurance"**

In simple terms: U.S. stocks went up this week, but investors also bought a lot of "safe haven" investments like gold—which usually happens when people are nervous. It's like going to the beach but packing a rain jacket just in case.

Here's what moved and why:

• **Stocks rose** (+0.4% for S&P 500, +0.9% for tech-heavy Nasdaq) → The economy is still growing, jobs data looked good, and the Federal Reserve isn't planning any surprises
• **Gold jumped +4.4%** → This is unusual when stocks are up! Investors are buying gold as "insurance" against potential problems (Middle East tensions, inflation concerns)
• **Oil prices rose +2.7%** → Conflicts in the Middle East are creating worries about oil supply, which could push gas prices higher
• **The "fear index" (VIX) stayed elevated** → Usually when stocks go up, the VIX goes down. The fact that it stayed high suggests investors are still worried about something

**Unusual Pattern to Note:** When stocks AND gold both go up, it's like seeing people celebrate AND buy emergency supplies at the same time. It suggests investors are hopeful but hedging their bets.

**2. What Caused These Moves**

• **Federal Reserve Held Steady on Rates**
  - What happened: Fed officials (the people who control U.S. interest rates) said they're not ready to cut rates yet—they want to see more evidence that inflation is under control
  - Why it matters: This affects everything from mortgage rates to credit card interest. No rate cuts soon means borrowing costs stay higher
  - Market reaction: Stocks took it in stride; this was expected

• **Strong Jobs Report**
  - What happened: Fewer people filed for unemployment benefits than expected, suggesting the job market is still healthy
  - Why it matters: When people have jobs, they spend money, which keeps the economy growing
  - Market reaction: Stocks rose because a healthy job market supports company profits

• **Middle East Tensions**
  - What happened: Conflicts in the Red Sea region are disrupting shipping and creating concerns about oil supply
  - Why it matters: This could raise gas prices and contribute to inflation
  - Market reaction: Oil and gold both rose; investors are nervous about potential escalation

**3. How Are Investors Feeling?**

The mood is "cautiously optimistic"—like being happy about a sunny forecast but checking the weather app twice to be sure.

Evidence:
• The VIX (fear gauge) is at 16.27—that's in the "slightly nervous" zone (below 15 would be calm, above 20 would be worried)
• Credit spreads (the extra interest that risky companies pay to borrow money) are getting smaller—this is a good sign, meaning investors trust companies to pay back their loans
• Gold's big jump (+21% this year!) suggests many investors are keeping "insurance" in their portfolios

**4. What Would a Pro Do With New Money?**

If you had money to invest right now, here's what might make sense:

• **Consider:** A balanced approach—some stocks (the economy looks okay), some bonds (in case things get rocky)
• **Be careful with:** Very long-term bonds—if inflation surprises to the upside, these could lose value
• **Keep in mind:** The gold rally suggests smart money is staying hedged. It's okay to be optimistic while also having a safety net

**5. What to Watch Next Week**

Key events that could move markets:

• **Friday: PCE Inflation Report** — This is the Federal Reserve's favorite way to measure inflation. If it comes in higher than expected, the Fed might keep rates higher for longer, which would be bad for stocks
  - Best case: Inflation cooling → rate cuts become more likely → stocks rally
  - Worst case: Inflation heating up → "higher for longer" rates → stocks and bonds both fall

• **Consumer Confidence Report** — Are everyday Americans feeling good about the economy? This affects spending

• **Wild card:** Any escalation in Middle East tensions could spike oil prices and create market volatility`;
}

function generateFallbackGlobalEvents() {
  return `**How World Events Affected U.S. Markets This Week**

**Middle East Tensions: Why You Might Pay More at the Pump**

What happened: Conflicts in the Red Sea region (near important shipping routes) continued this week, with attacks on commercial ships disrupting global trade.

Why Americans should care: This is pushing oil prices up (+2.7% this week). When oil costs more, gas prices eventually follow. It also adds to inflation worries—remember, the Federal Reserve is watching prices closely to decide when to cut interest rates.

Market reaction: Oil prices rose, gold jumped (investors buying "safety"), and the stock market's "fear gauge" stayed elevated.

**Europe's Central Bank Keeping Rates High**

What happened: The European Central Bank (like America's Federal Reserve, but for Europe) decided to keep interest rates high to fight inflation.

Why Americans should care: When major economies worldwide keep rates high, it suggests inflation is a global problem, not just a U.S. issue. This makes it harder for the Fed to cut rates, which means mortgages, car loans, and credit card rates stay expensive longer.

**China's Economy Still Sluggish**

What happened: China's manufacturing sector is still struggling (their PMI, a measure of factory activity, stayed below 50, which indicates shrinking activity).

Why Americans should care: China is the world's second-largest economy. When they're not buying as much, it can slow global growth and hurt U.S. companies that sell products there. On the flip side, weak Chinese demand means less competition for oil and commodities, which can help keep some prices in check.

**The Bottom Line:** Global events this week are adding to uncertainty and keeping investors cautious, even as U.S. markets perform reasonably well.`;
}

export { 
  generateInterpretation, 
  generateUSNarrative, 
  generateGlobalEvents,
  fetchEconomicCalendar,
  fetchFinancialNews
};
