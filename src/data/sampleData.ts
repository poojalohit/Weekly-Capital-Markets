import { WeeklyDashboard } from '../types/marketData';

export const sampleDashboardData: WeeklyDashboard = {
  date: '2026-02-22',
  marketData: [
  {
    variable: "S&P 500 Index",
    latestLevel: 6909.509765625,
    weeklyChange: 0.6939724763506775,
    ytdChange: 0.19241689382943322
  },
  {
    variable: "Nasdaq Composite Index",
    latestLevel: 22886.0703125,
    weeklyChange: 0.8964522328127177,
    ytdChange: -2.2759637178185623
  },
  {
    variable: "VIX Index",
    latestLevel: 19.09000015258789,
    weeklyChange: -5.635192365023732,
    ytdChange: 33.21702898970285
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
    latestLevel: 5059.2998046875,
    weeklyChange: 1.6760767696405419,
    ytdChange: 15.770799103683647
  },
  {
    variable: "Crude Oil (WTI)",
    latestLevel: 66.38999938964844,
    weeklyChange: -0.06021513675083808,
    ytdChange: 14.564276989805641
  },
  {
    variable: "USD/JPY",
    latestLevel: 155.16000366210938,
    weeklyChange: 0.3,
    ytdChange: -0.801078406295308
  },
  {
    variable: "EUR/USD",
    latestLevel: 1.1769136190414429,
    weeklyChange: -0.2,
    ytdChange: 0.18594846962400233
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
    latestLevel: 67984.71875,
    weeklyChange: -0.030443344705741525,
    ytdChange: -22.31101683490862
  }
],
  interpretation: `**This Week's Theme: "Stocks Up, But Investors Are Playing It Safe"**

The stock market had a good week—the S&P 500 (a basket of 500 large U.S. companies) rose +0.69%, and tech stocks (Nasdaq) gained +0.90%. Investors also bought gold (+1.68%), which is usually what people buy when they're nervous.

**What's driving the moves?**

• The VIX (often called the "fear index"—measures how volatile investors expect the market to be) is at 19.09
• Oil -0.06% this week
• Bitcoin fell -0.03%

**The bottom line:** Markets reflect the current mood—optimistic but hedged.`,
  usNarrative: `**1. What Happened This Week: "A Good Week for Stocks, But Investors Bought Insurance"**

In simple terms: U.S. stocks went up this week. Here's what moved and why:

• **S&P 500 rose +0.69% to 6,910** → The broad market reflects current economic conditions and Fed policy expectations
• **Nasdaq gained +0.90%** — now negative for the year (-2.28% YTD) → Tech stocks performance
• **Bitcoin fell -0.03%** — down -22.31% year-to-date → When risky assets like Bitcoin fall, it signals investors are reducing risk
• **Gold rose +1.68%** — up +15.77% for the year → Investors are maintaining "safe haven" allocations
• **Oil fell -0.06%** → Energy markets shifted
• **The "fear index" (VIX) at 19.09** → Still in nervous territory (above 15 = cautious) 

**2. What Caused These Moves**

• **Federal Reserve Held Steady on Rates**
  - What happened: Fed officials said they're not ready to cut rates yet—they want more evidence that inflation is under control
  - Why it matters: Affects mortgage rates, credit card interest. No rate cuts soon means borrowing costs stay higher
  - Market reaction: Stocks took it in stride; this was expected

• **Geopolitical Tensions**
  - What happened: Conflicts in the Red Sea region are disrupting shipping and creating oil supply concerns
  - Why it matters: Could raise gas prices and contribute to inflation
  - Market reaction: Oil and gold both moved; investors monitoring escalation

**3. How Are Investors Feeling?**

The mood is **"Cautiously optimistic"**—the VIX in the nervous zone suggests worry.

**4. What Would a Pro Do With New Money?**

• **Consider:** A balanced approach—some stocks, some bonds
• **Be careful with:** Very long-term bonds if inflation surprises
• **Keep in mind:** Gold up +15.77% suggests smart money is hedged.

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

Why Americans should care: Oil prices fell -0.06% this week. When oil costs more, gas prices eventually follow. It also adds to inflation worries—the Federal Reserve is watching prices closely to decide when to cut interest rates.

Market reaction: Oil prices fell -0.06% this week, gold jumped (investors buying "safety"), and the stock market's "fear gauge" stayed elevated.

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
            "Gold (USD/oz) (GC=F) - https://finance.yahoo.com/quote/GC=F",
            "Crude Oil (WTI) (CL=F) - https://finance.yahoo.com/quote/CL=F",
            "VIX Index (^VIX) - https://finance.yahoo.com/quote/^VIX",
            "S&P 500 Index (^GSPC) - https://finance.yahoo.com/quote/^GSPC",
            "USD/JPY (USDJPY=X) - https://finance.yahoo.com/quote/USDJPY=X",
            "Nasdaq Composite Index (^IXIC) - https://finance.yahoo.com/quote/^IXIC",
            "Bitcoin (USD) (BTC-USD) - https://finance.yahoo.com/quote/BTC-USD",
            "EUR/USD (EURUSD=X) - https://finance.yahoo.com/quote/EURUSD=X"
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