import { WeeklyDashboard } from '../types/marketData';

export const sampleDashboardData: WeeklyDashboard = {
  date: '2026-02-18',
  marketData: [
  {
    variable: "S&P 500 Index",
    latestLevel: 6843.22021484375,
    weeklyChange: 1.2,
    ytdChange: -0.7688250079654476
  },
  {
    variable: "Nasdaq Composite Index",
    latestLevel: 22578.380859375,
    weeklyChange: 1.8,
    ytdChange: -3.589804620614751
  },
  {
    variable: "VIX Index",
    latestLevel: 19.329999923706055,
    weeklyChange: -4.731399450488089,
    ytdChange: 34.89183549630396
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
    latestLevel: 4939.2998046875,
    weeklyChange: 1.1550493246170892,
    ytdChange: 13.024866577690528
  },
  {
    variable: "Crude Oil (WTI)",
    latestLevel: 62.5,
    weeklyChange: 0.2727389121631861,
    ytdChange: 7.851594783706009
  },
  {
    variable: "USD/JPY",
    latestLevel: 153.71800231933594,
    weeklyChange: 0.6146102007235937,
    ytdChange: -1.7229975527481975
  },
  {
    variable: "EUR/USD",
    latestLevel: 1.1839923858642578,
    weeklyChange: -0.23207081439548227,
    ytdChange: 0.7885355725896693
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
    latestLevel: 68166.7890625,
    weeklyChange: -0.9824755637928789,
    ytdChange: -22.102957469469597
  }
],
  interpretation: `**This Week's Theme: "Stocks Up, But Investors Are Playing It Safe"**

The stock market had a good week—the S&P 500 (a basket of 500 large U.S. companies) rose +1.20%, and tech stocks (Nasdaq) gained +1.80%. Investors also bought gold (+1.16%), which is usually what people buy when they're nervous.

**What's driving the moves?**

• The VIX (often called the "fear index"—measures how volatile investors expect the market to be) is at 19.33
• Oil prices rose +0.27% on supply concerns
• Bitcoin fell -0.98%

**The bottom line:** Markets reflect the current mood—optimistic but hedged.`,
  usNarrative: `**1. What Happened This Week: "A Good Week for Stocks, But Investors Bought Insurance"**

In simple terms: U.S. stocks went up this week. Here's what moved and why:

• **S&P 500 rose +1.20% to 6,843** → The broad market reflects current economic conditions and Fed policy expectations
• **Nasdaq gained +1.80%** — now negative for the year (-3.59% YTD) → Tech stocks performance
• **Bitcoin fell -0.98%** — down -22.10% year-to-date → When risky assets like Bitcoin fall, it signals investors are reducing risk
• **Gold rose +1.16%** — up +13.02% for the year → Investors are maintaining "safe haven" allocations
• **Oil rose +0.27%** → Geopolitical concerns continue to support energy prices
• **The "fear index" (VIX) at 19.33** → Still in nervous territory (above 15 = cautious) 

**2. What Caused These Moves**

• **Federal Reserve Held Steady on Rates**
  - What happened: Fed officials said they're not ready to cut rates yet—they want more evidence that inflation is under control
  - Why it matters: Affects mortgage rates, credit card interest. No rate cuts soon means borrowing costs stay higher
  - Market reaction: Stocks took it in stride; this was expected

• **Geopolitical Tensions**
  - What happened: Conflicts in the Red Sea region are disrupting shipping and creating oil supply concerns
  - Why it matters: Could raise gas prices and contribute to inflation
  - Market reaction: Oil and gold both rose; investors monitoring escalation

**3. How Are Investors Feeling?**

The mood is **"Cautiously optimistic"**—the VIX in the nervous zone suggests worry.

**4. What Would a Pro Do With New Money?**

• **Consider:** A balanced approach—some stocks, some bonds
• **Be careful with:** Very long-term bonds if inflation surprises
• **Keep in mind:** Gold up +13.02% suggests smart money is hedged.

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
• **U.S. High Yield OAS** — Extra interest riskier companies pay. **Bitcoin (USD)** — Volatile digital asset, often "risk-on."`,
  globalEvents: `**How World Events Affected U.S. Markets This Week**

**Middle East Tensions: Why You Might Pay More at the Pump**

What happened: Conflicts in the Red Sea region (near important shipping routes) continued this week, with attacks on commercial ships disrupting global trade.

Why Americans should care: Oil prices rose +0.27% this week. When oil costs more, gas prices eventually follow. It also adds to inflation worries—the Federal Reserve is watching prices closely to decide when to cut interest rates.

Market reaction: Oil prices rose +0.27% this week, gold jumped (investors buying "safety"), and the stock market's "fear gauge" stayed elevated.

**Europe's Central Bank Keeping Rates High**

What happened: The European Central Bank (like America's Federal Reserve, but for Europe) decided to keep interest rates high to fight inflation.

Why Americans should care: When major economies worldwide keep rates high, it suggests inflation is a global problem. This makes it harder for the Fed to cut rates, which means mortgages, car loans, and credit card rates stay expensive longer.

**China's Economy Still Sluggish**

What happened: China's manufacturing sector is still struggling (their PMI, a measure of factory activity, stayed below 50, which indicates shrinking activity).

Why Americans should care: China is the world's second-largest economy. When they're not buying as much, it can slow global growth and hurt U.S. companies that sell products there.

**The Bottom Line:** Global events this week are adding to uncertainty and keeping investors cautious, even as U.S. markets performed reasonably well.`,
  sources: [
    {
        category: "Equity & Volatility Data - Yahoo Finance",
        sources: [
            "Crude Oil (WTI) (CL=F) - https://finance.yahoo.com/quote/CL=F",
            "USD/JPY (USDJPY=X) - https://finance.yahoo.com/quote/USDJPY=X",
            "Gold (USD/oz) (GC=F) - https://finance.yahoo.com/quote/GC=F",
            "Nasdaq Composite Index (^IXIC) - https://finance.yahoo.com/quote/^IXIC",
            "EUR/USD (EURUSD=X) - https://finance.yahoo.com/quote/EURUSD=X",
            "S&P 500 Index (^GSPC) - https://finance.yahoo.com/quote/^GSPC",
            "VIX Index (^VIX) - https://finance.yahoo.com/quote/^VIX",
            "Bitcoin (USD) (BTC-USD) - https://finance.yahoo.com/quote/BTC-USD"
        ]
    },
    {
        category: "Interest Rates & Credit Spreads - FRED (Federal Reserve Economic Data)",
        sources: [
            "10-Year Treasury Yield (DGS10) - https://fred.stlouisfed.org/series/DGS10",
            "SOFR Rate (SOFR) - https://fred.stlouisfed.org/series/SOFR",
            "BBB Corporate OAS (BAMLC0A4CBBB) - https://fred.stlouisfed.org/series/BAMLC0A4CBBB",
            "High Yield OAS (BAMLH0A0HYM2) - https://fred.stlouisfed.org/series/BAMLH0A0HYM2"
        ]
    },
    {
        category: "Economic Data & News",
        sources: [
            "Bureau of Labor Statistics (BLS) - Employment, CPI, PPI - https://www.bls.gov/",
            "Bureau of Economic Analysis (BEA) - GDP, PCE - https://www.bea.gov/",
            "Federal Reserve - Monetary Policy - https://www.federalreserve.gov/",
            "Trading Economics - Economic Calendar - https://tradingeconomics.com/calendar",
            "NewsAPI - Financial News Aggregation - https://newsapi.org/"
        ]
    },
    {
        category: "Verification Sources",
        sources: [
            "WSJ Markets - https://www.wsj.com/market-data",
            "MarketWatch - https://www.marketwatch.com/",
            "Bloomberg - https://www.bloomberg.com/markets",
            "CNBC - https://www.cnbc.com/markets/"
        ]
    }
]
};