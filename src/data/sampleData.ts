import { WeeklyDashboard } from '../types/marketData';

export const sampleDashboardData: WeeklyDashboard = {
  date: '2026-11-11',
  marketData: [
  {
    variable: "S&P 500 Index",
    latestLevel: 7625.3701171875,
    weeklyChange: 0.9990831233976729,
    ytdChange: 10.572860834778915
  },
  {
    variable: "Nasdaq Composite Index",
    latestLevel: 25590.646484375,
    weeklyChange: 1.33649063451885,
    ytdChange: 9.27263752037122
  },
  {
    variable: "VIX Index",
    latestLevel: 17.780000686645508,
    weeklyChange: -10.742968782390577,
    ytdChange: 24.07537181652131
  },
  {
    variable: "U.S. 10-Year Treasury Yield",
    latestLevel: 4.88,
    weeklyChange: 0.41152263374484715,
    ytdChange: 16.746411483253592
  },
  {
    variable: "3-Month SOFR Rate",
    latestLevel: 3.88,
    weeklyChange: -0.2570694087403658,
    ytdChange: 0.25839793281653195
  },
  {
    variable: "Gold (USD/oz)",
    latestLevel: 4006.300048828125,
    weeklyChange: -2.629722959578928,
    ytdChange: -8.663332940746123
  },
  {
    variable: "Crude Oil (WTI)",
    latestLevel: 87.83000183105469,
    weeklyChange: 1.128386153311917,
    ytdChange: 51.56169227736107
  },
  {
    variable: "USD/JPY",
    latestLevel: 159.86700439453125,
    weeklyChange: 0.9949946138478334,
    ytdChange: 2.20826282582954
  },
  {
    variable: "EUR/USD",
    latestLevel: 1.1096316576004028,
    weeklyChange: -0.45715897762531427,
    ytdChange: -5.541495764862254
  },
  {
    variable: "BBB U.S. Corporate OAS",
    latestLevel: 112.99999999999999,
    weeklyChange: -2.5862068965517264,
    ytdChange: 11.88118811881187
  },
  {
    variable: "U.S. High Yield OAS",
    latestLevel: 334,
    weeklyChange: -2.3391812865497097,
    ytdChange: 18.861209964412804
  },
  {
    variable: "Bitcoin (USD)",
    latestLevel: 74207.9765625,
    weeklyChange: -1.3495471754196342,
    ytdChange: -15.199439699387474
  }
],
  interpretation: `**This Week's Theme: "Stocks Up, But Investors Are Playing It Safe"**

The stock market had a good week—the S&P 500 (a basket of 500 large U.S. companies) rose +1.00%, and tech stocks (Nasdaq) gained +1.34%. 

**What's driving the moves?**

• The VIX (often called the "fear index"—measures how volatile investors expect the market to be) is at 17.78
• Oil prices rose +1.13% on supply concerns
• Bitcoin fell -1.35%

**The bottom line:** Markets reflect the current mood—optimistic but hedged.`,
  usNarrative: `**1. What Happened This Week: "A Good Week for Stocks, But Investors Bought Insurance"**

In simple terms: U.S. stocks went up this week. Here's what moved and why:

• **S&P 500 rose +1.00% to 7,625** → The broad market reflects current economic conditions and Fed policy expectations
• **Nasdaq gained +1.34%** → Tech stocks performance
• **Bitcoin fell -1.35%** — down -15.20% year-to-date → When risky assets like Bitcoin fall, it signals investors are reducing risk
• **Gold fell -2.63%** —  → Investors are watching gold
• **Oil rose +1.13%** → Geopolitical concerns continue to support energy prices
• **The "fear index" (VIX) at 17.78** → Still in nervous territory (above 15 = cautious) 

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
• **Keep in mind:** Stay diversified.

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

Why Americans should care: Oil prices rose +1.13% this week. When oil costs more, gas prices eventually follow. It also adds to inflation worries—the Federal Reserve is watching prices closely to decide when to cut interest rates.

Market reaction: Oil prices rose +1.13% this week, investors watching safe havens, and the stock market's "fear gauge" stayed elevated.

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
            "S&P 500 Index (^GSPC) - https://finance.yahoo.com/quote/^GSPC",
            "Nasdaq Composite Index (^IXIC) - https://finance.yahoo.com/quote/^IXIC",
            "VIX Index (^VIX) - https://finance.yahoo.com/quote/^VIX",
            "EUR/USD (EURUSD=X) - https://finance.yahoo.com/quote/EURUSD=X",
            "Gold (USD/oz) (GC=F) - https://finance.yahoo.com/quote/GC=F",
            "Bitcoin (USD) (BTC-USD) - https://finance.yahoo.com/quote/BTC-USD",
            "Crude Oil (WTI) (CL=F) - https://finance.yahoo.com/quote/CL=F",
            "USD/JPY (USDJPY=X) - https://finance.yahoo.com/quote/USDJPY=X"
        ]
    },
    {
        category: "Interest Rates & Credit Spreads - FRED (Federal Reserve Economic Data)",
        sources: [
            "BBB U.S. Corporate OAS (BAMLC0A4CBBB) - https://fred.stlouisfed.org/series/BAMLC0A4CBBB",
            "U.S. 10-Year Treasury Yield (DGS10) - https://fred.stlouisfed.org/series/DGS10",
            "U.S. High Yield OAS (BAMLH0A0HYM2) - https://fred.stlouisfed.org/series/BAMLH0A0HYM2",
            "3-Month SOFR Rate (SOFR) - https://fred.stlouisfed.org/series/SOFR"
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