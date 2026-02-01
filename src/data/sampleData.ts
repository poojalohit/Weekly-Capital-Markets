import { WeeklyDashboard } from '../types/marketData';

export const sampleDashboardData: WeeklyDashboard = {
  date: '2026-01-28',
  marketData: [
  {
    variable: "S&P 500 Index",
    latestLevel: 6978.60009765625,
    weeklyChange: 0.4081896177137236,
    ytdChange: 1.1942719580840442
  },
  {
    variable: "Nasdaq Composite Index",
    latestLevel: 23817.099609375,
    weeklyChange: 0.9141008826954485,
    ytdChange: 1.6995523732026396
  },
  {
    variable: "VIX Index",
    latestLevel: 16.270000457763672,
    weeklyChange: 0.7430392697700824,
    ytdChange: 13.538035899416043
  },
  {
    variable: "U.S. 10-Year Treasury Yield",
    latestLevel: 4.15,
    weeklyChange: 0.1,
    ytdChange: 0.25
  },
  {
    variable: "3-Month SOFR Rate",
    latestLevel: 5.25,
    weeklyChange: 0,
    ytdChange: 0
  },
  {
    variable: "Gold (USD/oz)",
    latestLevel: 5304.7998046875,
    weeklyChange: 4.431356196625931,
    ytdChange: 21.388519396444565
  },
  {
    variable: "Crude Oil (WTI)",
    latestLevel: 62.2599983215332,
    weeklyChange: 2.6884334895305972,
    ytdChange: 7.437441763331446
  },
  {
    variable: "USD/JPY",
    latestLevel: 152.9,
    weeklyChange: 0.3,
    ytdChange: 1.2
  },
  {
    variable: "EUR/USD",
    latestLevel: 1,
    weeklyChange: -0.2,
    ytdChange: -0.5
  },
  {
    variable: "BBB U.S. Corporate OAS",
    latestLevel: 125,
    weeklyChange: -2,
    ytdChange: -8
  },
  {
    variable: "U.S. High Yield OAS",
    latestLevel: 350,
    weeklyChange: -5,
    ytdChange: -15
  },
  {
    variable: "Bitcoin (USD)",
    latestLevel: 89226.4296875,
    weeklyChange: 1.0868020145520603,
    ytdChange: 1.9627751842894423
  }
],
  interpretation: `**This Week's Theme: "Stocks Up, But Investors Are Playing It Safe"**

The stock market had a good week—the S&P 500 (a basket of 500 large U.S. companies) rose about 0.4%, and tech stocks did even better at nearly 1%. But here's what's interesting: investors also bought a lot of gold (+4.4%), which is usually what people buy when they're nervous.

**Why is this unusual?** Normally, when investors feel confident about stocks, they don't rush to buy gold—it's like bringing an umbrella on a sunny day. The fact that both went up suggests investors are optimistic but also hedging their bets, just in case something goes wrong (Middle East tensions, inflation concerns).

**What's causing the nervousness?** The VIX (often called the "fear index" because it measures how worried investors are) stayed elevated. Oil prices rose 2.7% due to Middle East tensions, which could mean higher gas prices ahead.`,
  usNarrative: `**1. What Happened This Week: "A Good Week for Stocks, But Investors Bought Insurance"**

In simple terms: U.S. stocks went up this week, but investors also bought a lot of "safe" investments like gold—which usually happens when people are nervous. It's like going to the beach but packing a rain jacket just in case.

Here's what moved and why:

• **Stocks rose** (S&P 500 +0.4%, Nasdaq +0.9%) → The economy is still growing, jobs data looked good, and the Federal Reserve (the institution that sets interest rates) isn't planning any surprises
• **Gold jumped +4.4%** → This is unusual when stocks are also up! Normally investors choose one or the other. They're buying gold as "insurance" against potential problems (Middle East tensions, inflation worries)
• **Oil prices rose +2.7%** → Conflicts in the Middle East are creating worries about oil supply, which could eventually push gas prices higher
• **The "fear index" (VIX) stayed elevated** → This gauge measures how nervous investors are. Usually when stocks go up, it goes down. The fact that it stayed high suggests some underlying worry

**Unusual Pattern:** When stocks AND gold both go up together, it's like seeing people celebrate AND buy emergency supplies at the same time. It suggests investors are hopeful but hedging their bets.

**2. What Caused These Moves**

• **Federal Reserve Kept Rates Unchanged**
  - What happened: Fed officials (the people who control U.S. interest rates) said they're not ready to cut rates yet—they want to make sure inflation is truly under control first
  - Why it matters for you: This affects mortgage rates, car loans, and credit card interest. No rate cuts soon means borrowing costs stay higher for now
  - Market reaction: Stocks took it in stride because this was expected

• **Jobs Report Was Strong**
  - What happened: Fewer people filed for unemployment benefits than expected, suggesting the job market is healthy
  - Why it matters for you: When people have jobs, they spend money, which keeps the economy (and company profits) growing
  - Market reaction: Stocks rose because healthy employment is good for business

• **Middle East Tensions Continued**
  - What happened: Conflicts in the Red Sea region are disrupting shipping and raising concerns about oil supply
  - Why it matters for you: This could raise gas prices and contribute to inflation, which affects everything from groceries to rent
  - Market reaction: Oil and gold both rose; investors are nervous about potential escalation

**3. How Are Investors Feeling?**

The mood is "cautiously optimistic"—like being happy about a sunny forecast but checking the weather app twice to be sure.

Evidence:
• The VIX (fear gauge) is at 16.27—that's in the "slightly nervous" zone. Below 15 would be calm; above 20 would be worried
• Companies can still borrow money at reasonable rates—this is a good sign that lenders trust businesses to pay them back
• Gold's big jump (+21% this year!) shows many investors are keeping "insurance" in their portfolios

**4. What Would a Pro Do With New Money?**

If you had money to invest right now:

• **Smart move:** A balanced approach—some stocks (the economy looks okay), some bonds (in case things get rocky)
• **Be careful with:** Very long-term bonds—if inflation surprises to the upside, these could lose value. Also risky small company stocks that tend to drop first when markets get scared
• **Keep in mind:** Even professional investors are staying hedged. It's okay to be optimistic while also having a safety net

**5. What to Watch Next Week**

Key events that could move markets:

• **Friday: PCE Inflation Report** — This is how the Federal Reserve measures inflation. If it's higher than expected, the Fed might keep interest rates high longer (bad for stocks and borrowers)
  - Best case: Inflation cooling down → rate cuts become more likely → stocks could rally
  - Worst case: Inflation heating up → rates stay high → stocks and bonds could both fall

• **Consumer Confidence Report** — Are everyday Americans feeling good about the economy? This affects how much people spend

• **Wild card:** Any escalation in Middle East tensions could spike oil prices and shake up markets`,
  globalEvents: `**How World Events Affected U.S. Markets This Week**

**Middle East Tensions: Why You Might Pay More at the Pump**

What happened: Conflicts near important shipping routes in the Red Sea continued this week, with attacks on commercial ships disrupting global trade.

Why Americans should care: This is pushing oil prices up (+2.7% this week). When oil costs more, gas prices eventually follow. It also adds to inflation worries—and the Federal Reserve is watching prices closely to decide when to cut interest rates. Higher gas prices = higher inflation = interest rates stay high longer.

Market reaction: Oil prices rose, gold jumped +4.4% (investors buying "safety"), and energy company stocks outperformed. Airlines and shipping companies fell slightly because higher fuel costs hurt their profits.

**Europe's Central Bank Keeping Rates High**

What happened: The European Central Bank (Europe's version of the Federal Reserve) decided to keep interest rates high to fight inflation.

Why Americans should care: When major economies worldwide keep rates high, it suggests inflation is a global problem, not just a U.S. issue. This makes it harder for our Federal Reserve to cut rates, which means mortgages, car loans, and credit card rates stay expensive longer.

**Japan Keeping Rates Near Zero**

What happened: Japan's central bank kept its interest rates extremely low (near zero), making the Japanese yen weak compared to the U.S. dollar.

Why Americans should care: When Japanese rates are low and U.S. rates are high, investors borrow cheaply in Japan and invest in U.S. assets—this actually helps support U.S. stock prices.

**China's Economy Still Struggling**

What happened: China's factories are still slowing down (their manufacturing activity shrank for another month).

Why Americans should care: China is the world's second-largest economy. When they're not buying as much, it can slow global growth and hurt U.S. companies that sell products there. On the bright side, weak Chinese demand means less competition for oil, which can help keep some prices in check.

**The Bottom Line:** Global events this week are adding to uncertainty and keeping investors cautious. The main concerns are Middle East tensions (oil/gas prices) and the fact that central banks worldwide are keeping rates high to fight inflation.`,
  corporateFinanceConcepts: [
    {
      title: 'Credit Spreads: How Risky is Lending to Companies?',
      explanation: 'When companies borrow money by issuing bonds, they have to pay a higher interest rate than the U.S. government (which is considered the safest borrower). The difference between what a company pays and what the government pays is called the "credit spread." Think of it like this: if you were lending money to your friend vs. a stranger, you might charge the stranger a higher rate because it\'s riskier. When credit spreads are WIDE (high), it means investors are worried about companies\' ability to pay back loans. When spreads are NARROW (low), investors feel confident. We track BBB spreads (medium-quality companies) and High Yield spreads (riskier companies) to gauge market confidence.'
    },
    {
      title: 'Risk-On vs. Risk-Off: Reading the Market\'s Mood',
      explanation: 'Markets have two basic moods: "risk-on" (feeling confident) and "risk-off" (feeling nervous). During RISK-ON periods, investors buy stocks, cryptocurrencies, and riskier investments hoping for higher returns. During RISK-OFF periods, they sell those and buy "safe" things like gold, U.S. Treasury bonds, and sometimes the Japanese yen. You can tell the market\'s mood by watching the VIX (fear index), gold prices, and credit spreads. Low VIX + falling gold + tight spreads = risk-on. High VIX + rising gold + wide spreads = risk-off. This week\'s unusual pattern (stocks UP but gold also UP) suggests a mixed mood—optimistic but hedged.'
    },
    {
      title: 'The Yield Curve: A Recession Crystal Ball?',
      explanation: 'The yield curve shows how much interest the government pays on bonds of different lengths—from 3 months to 30 years. Normally, longer-term bonds pay MORE because you\'re locking up your money longer (like a 5-year CD paying more than a 1-year CD). But sometimes this flips, and short-term rates exceed long-term rates—this is called an "inverted yield curve." Here\'s why it matters: an inverted curve has predicted almost every U.S. recession in the past 50 years. It suggests investors think the economy will slow down, causing the Fed to cut rates in the future. Currently, we watch the difference between 10-year and 2-year Treasury rates as a key economic indicator.'
    }
  ],
  sources: [
    {
      category: 'Equity & Volatility Data - Yahoo Finance',
      sources: [
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
      sources: [
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
  ]
};