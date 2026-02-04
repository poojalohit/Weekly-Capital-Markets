import { WeeklyDashboard } from '../types/marketData';

export const sampleDashboardData: WeeklyDashboard = {
  date: '2026-02-04',
  marketData: [
  {
    variable: "S&P 500 Index",
    latestLevel: 6917.81005859375,
    weeklyChange: -0.8403983020698361,
    ytdChange: 0.312776578043686
  },
  {
    variable: "Nasdaq Composite Index",
    latestLevel: 23255.189453125,
    weeklyChange: -1.4281042721513748,
    ytdChange: -0.6998166642467093
  },
  {
    variable: "VIX Index",
    latestLevel: 18.18000030517578,
    weeklyChange: 11.260710742995164,
    ytdChange: 26.86671599418984
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
    latestLevel: 5082.5,
    weeklyChange: 9.951325040562466,
    ytdChange: 16.301683861333537
  },
  {
    variable: "Crude Oil (WTI)",
    latestLevel: 63.52000045776367,
    weeklyChange: 2.220793501238948,
    ytdChange: 9.611733600504763
  },
  {
    variable: "USD/JPY",
    latestLevel: 156.63600158691406,
    weeklyChange: 0.9239608868781803,
    ytdChange: 0.14257587934149163
  },
  {
    variable: "EUR/USD",
    latestLevel: 1.1821727752685547,
    weeklyChange: -0.231704513615193,
    ytdChange: 0.6336394014294002
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
    latestLevel: 76085.8359375,
    weeklyChange: -3.3078796786628333,
    ytdChange: -13.053531206226515
  }
],
  interpretation: `**This Week's Theme: "Stocks Up, But Investors Are Playing It Safe"**

The stock market had a good week—the S&P 500 (a basket of 500 large U.S. companies) rose about 0.4%, and tech stocks did even better at nearly 1%. But here's what's interesting: investors also bought a lot of gold (+4.4%), which is usually what people buy when they're nervous.

**Why is this unusual?** Normally, when investors feel confident about stocks, they don't rush to buy gold—it's like bringing an umbrella on a sunny day. The fact that both went up suggests investors are optimistic but also hedging their bets, just in case something goes wrong.

**What's causing the nervousness?** The VIX (often called the "fear index" because it measures how volatile investors expect the market to be) is elevated at 16.27. Tensions in the Middle East are pushing oil prices up (+2.7%), and there's still uncertainty about when the Federal Reserve might cut interest rates.

**The bottom line:** Markets are doing well on the surface, but investors are clearly keeping one eye on potential risks.`,
  usNarrative: `**1. What Happened This Week: "A Good Week for Stocks, But Investors Bought Insurance"**

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

• **Wild card:** Any escalation in Middle East tensions could spike oil prices and create market volatility`,
  globalEvents: `**How World Events Affected U.S. Markets This Week**

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

**The Bottom Line:** Global events this week are adding to uncertainty and keeping investors cautious, even as U.S. markets perform reasonably well.`,
  sources: [
    {
        category: "Equity & Volatility Data - Yahoo Finance",
        sources: [
            "VIX Index (^VIX) - https://finance.yahoo.com/quote/^VIX",
            "S&P 500 Index (^GSPC) - https://finance.yahoo.com/quote/^GSPC",
            "Gold (USD/oz) (GC=F) - https://finance.yahoo.com/quote/GC=F",
            "Crude Oil (WTI) (CL=F) - https://finance.yahoo.com/quote/CL=F",
            "Nasdaq Composite Index (^IXIC) - https://finance.yahoo.com/quote/^IXIC",
            "USD/JPY (USDJPY=X) - https://finance.yahoo.com/quote/USDJPY=X",
            "EUR/USD (EURUSD=X) - https://finance.yahoo.com/quote/EURUSD=X",
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