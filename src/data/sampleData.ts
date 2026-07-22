import { WeeklyDashboard } from '../types/marketData';

export const sampleDashboardData: WeeklyDashboard = {
  date: '2026-07-22',
  marketData: [
  {
    variable: "S&P 500 Index",
    latestLevel: 7509.2001953125,
    weeklyChange: 0.8856366018608045,
    ytdChange: 8.88832088363366
  },
  {
    variable: "Nasdaq Composite Index",
    latestLevel: 25837.2109375,
    weeklyChange: 1.2903391788076874,
    ytdChange: 10.325473294887006
  },
  {
    variable: "VIX Index",
    latestLevel: 17.3700008392334,
    weeklyChange: -6.863264372537002,
    ytdChange: 21.214242370638704
  },
  {
    variable: "U.S. 10-Year Treasury Yield",
    latestLevel: 4.6,
    weeklyChange: 1.098901098901095,
    ytdChange: 10.047846889952151
  },
  {
    variable: "3-Month SOFR Rate",
    latestLevel: 3.57,
    weeklyChange: -0.5571030640668528,
    ytdChange: -7.751937984496131
  },
  {
    variable: "Gold (USD/oz)",
    latestLevel: 4121.7001953125,
    weeklyChange: 2.7778506627435005,
    ytdChange: -5.684078094160145
  },
  {
    variable: "Crude Oil (WTI)",
    latestLevel: 87.31999969482422,
    weeklyChange: 4.914088877721885,
    ytdChange: 50.68161957759223
  },
  {
    variable: "USD/JPY",
    latestLevel: 163.00599670410156,
    weeklyChange: 0.3039795928523154,
    ytdChange: 4.215124418063111
  },
  {
    variable: "EUR/USD",
    latestLevel: 1.1407711505889893,
    weeklyChange: -0.17454231670605308,
    ytdChange: -2.8907152917246743
  },
  {
    variable: "BBB U.S. Corporate OAS",
    latestLevel: 97,
    weeklyChange: -2,
    ytdChange: -3.960396039603964
  },
  {
    variable: "U.S. High Yield OAS",
    latestLevel: 269,
    weeklyChange: -1.4652014652014667,
    ytdChange: -4.270462633451961
  },
  {
    variable: "Bitcoin (USD)",
    latestLevel: 65970.0234375,
    weeklyChange: 1.1344408762092946,
    ytdChange: -24.61329348021137
  }
],
  interpretation: `**This Week's Theme: "Stocks Up, But Look Under the Hood: A Curious Case of Mixed Signals"**

This past week saw U.S. stocks, especially tech, climb higher, which usually signals investor confidence. However, if we dig a little deeper, we find some unusual movements in other parts of the market that suggest investors might be feeling a bit confused or cautious.

**The Curious Case of Mixed Signals:**

*   **Stocks are up, but so is gold and oil.** The S&P 500 rose +0.89% and the Nasdaq surged +1.29%. Normally, when stocks are doing well, investors feel less need for "safe haven" assets. Yet, Gold (often seen as a safety blanket during uncertain times) jumped +2.78%, and Crude Oil (which can signal economic activity or inflation worries) shot up +4.91%. This is unusual because strong stock performance often means less demand for these types of assets. It suggests some investors are feeling good about growth, while others are hedging their bets against potential future problems.
*   **The VIX is down, but bond yields are up.** The VIX Index, which measures expected stock market choppiness (think of it as the market's "fear gauge"), fell -6.86%. This usually means investors are feeling calmer. However, the U.S. 10-Year Treasury Yield (the return you get for lending money to the government for 10 years, often a sign of future interest rate expectations or inflation) rose +1.10%. This is a bit contradictory; calmer stock markets often coincide with stable or falling bond yields, not rising ones. It could mean investors are less worried about immediate stock drops but more concerned about inflation or future interest rate hikes.
*   **Corporate bond risk is falling, but short-term interest rates dipped.** The cost to borrow for companies, shown by BBB U.S. Corporate OAS and U.S. High Yield OAS (these are measures of the extra interest companies pay over super-safe government bonds, indicating how risky lenders see them), decreased by -2.00% and -1.47% respectively. This means lenders see companies as less risky, which is good for the economy. But at the same time, the 3-Month SOFR Rate (a key short-term interest rate that reflects how much banks charge each other for very short-term loans) actually fell -0.56%. This is unusual because lower short-term rates often suggest the central bank is easing up, while falling corporate risk premiums usually reflect a strong economy that might lead to higher rates.

**What's driving the biggest moves?**

*   **Crude Oil's significant jump:** Crude Oil (WTI) surged +4.91% this week. This is the largest`,
  usNarrative: `Here's your weekly market analysis for the week ending 2026-07-22:

**1. What Happened This Week: Stocks and Oil Climb, Gold Shines Bright**

This week, major stock indexes moved higher, and the price of oil jumped significantly, while gold also unexpectedly gained ground. Investors seemed to be feeling a bit more optimistic about the economy, leading them to buy more company stocks.

The S&P 500 Index, which tracks 500 large U.S. companies, rose by +0.89%, and the Nasdaq Composite Index, heavily weighted with technology companies, saw an even bigger gain of +1.29%. This suggests investors believe these companies will continue to perform well. Crude Oil (WTI) surged by +4.91%, likely due to expectations of higher demand as global economic activity picks up.

**Unusual Pattern:** Normally, when stocks go up (meaning investors are feeling confident), gold tends to go down because people don't feel the need for a "safe haven" investment. However, this week, Gold (USD/oz) also saw a strong gain of +2.78%. This is unusual and suggests that while investors are buying stocks, they might also be quietly hedging their bets, perhaps worried about future inflation or unexpected economic bumps. Bitcoin (USD), often seen as a riskier, speculative asset, also managed a modest gain of +1.13%.

**2. What Caused These Moves**

While no major economic reports dominated the headlines this week, the general sentiment seems to be driven by a continued belief that the global economy is on a path to recovery, albeit with some lingering uncertainties.

*   **Positive Economic Outlook**
    *   What happened: There wasn't one single piece of blockbuster news, but rather a slow build-up of positive sentiment regarding future economic growth.
    *   Why it matters: When the economy is expected to grow, companies are likely to make more money. This encourages investors to buy shares in those companies, hoping their value will increase. It also suggests that demand for resources like oil will rise.
    *   Market reaction: This optimism led to higher stock prices across the board, with both the S&P 500 and Nasdaq moving up. The strong rise in crude oil also reflects this expectation of increased economic activity.

*   **Quiet Confidence in Lending**
    *   What happened: The cost for companies to borrow money became slightly cheaper. The BBB U.S. Corporate OAS (the extra interest paid by medium-risk companies) fell by -2.00%, and the U.S. High Yield OAS (the extra interest paid by riskier companies) dropped by -1.47%.
    *   Why it matters: Think of these "spreads" as the risk premium lenders demand. When these spreads shrink, it means lenders are more confident that even riskier companies will repay their debts. This makes it cheaper for businesses to borrow, invest, and grow, which is good for the overall economy.
    *   Market reaction: This confidence in corporate health likely contributed to the positive mood in the stock market.

**3. How Are Investors Feeling?**

Investors seem to be cautiously optimistic this week. The VIX Index (a measure of market fear) dropped by -6.86% to 17.37. A VIX below 15 suggests calm, 15-20 indicates caution, and above 20 signals worry. So, at 17.37, investors are still a bit cautious but less worried than before. The simultaneous rise in both stocks (risky assets) and gold (a safe-haven asset) suggests a nuanced mood: confidence in growth, but also a desire to be prepared for potential bumps in the road. The slight increase in the U.S. 10-Year Treasury Yield by +1.10% suggests bond investors are also anticipating some economic growth, which can lead to higher interest rates.

**4. What Would a Pro Do With New Money?**

If someone had new money to invest right now, a professional might suggest a balanced approach. Given the positive stock market momentum and the slight easing of corporate borrowing costs, investing in broad market index funds (which spread your money across many companies) could be a sensible move to capture potential growth. However, the rise in gold suggests a lingering desire for safety. Therefore, a pro might also recommend having a portion of the portfolio in less volatile assets or even some gold to act as a buffer against unexpected market downturns. Investors should be careful not to chase the big gains in specific sectors, especially after a good run, and instead focus on diversification.

**5. What to Watch Next Week**

Next week, investors will be keeping an eye out for any major economic reports that could shift expectations for interest rates or global growth. If we get strong economic data, it could further fuel stock market gains. However, any signs of unexpected inflation or slowing growth could cause markets to pull back. The best-case scenario is continued positive economic data supporting growth without sparking inflation fears, leading to stable or rising markets. The worst-case would be data that suggests the economy is weakening, or that inflation is unexpectedly picking up, which could make investors nervous.

**6. What These Numbers Mean (Plain English Guide)**

*   **S&P 500 Index:** Tracks 500 large U.S. companies; a key indicator of the overall health of the U.S. stock market.
*   **Nasdaq Composite Index:** Represents mostly technology and growth companies; shows how these innovative sectors are performing.
*   **VIX Index:** The "fear gauge" of the market; a higher number means investors are more worried about future stock price swings.
*   **U.S. 10-Year Treasury Yield:** The interest rate the U.S. government pays to borrow money for 10 years; affects mortgage rates and other loans.
*   **3-Month SOFR Rate:** A key short-term interest rate that banks use to lend to each other; reflects very short-term borrowing costs.
*   **Gold (USD/oz):** A traditional "safe haven" asset; people buy it when they are worried about economic uncertainty or inflation.
*   **Crude Oil (WTI):** The price of oil; directly impacts gas prices and the cost of goods and transportation.
*   **USD/JPY and EUR/USD:** These show how many Japanese Yen or U.S. Dollars you get for one U.S. Dollar or Euro, respectively; they affect import/export costs.
*   **BBB U.S. Corporate OAS and U.S. High Yield OAS:** The extra interest (spread) that medium-risk (BBB) or very risky (High Yield) companies pay to borrow money compared to safe government bonds.
*   **Bitcoin (USD):** A digital currency often seen as a speculative or risky investment; its price can reflect investor appetite for higher-risk assets.`,
  globalEvents: `Here's a look at how global events shaped your money this week:

**Middle East Tensions**
- What happened: Continued unrest in the Middle East raised worries about oil supplies.
- Why Americans should care: When there's conflict, oil prices often jump. This week, crude oil (WTI) rose a significant **+4.91%**. Higher oil prices usually mean higher gas prices at the pump for you, potentially making your commute more expensive and adding to grocery delivery costs.
- Market reaction: This concern about inflation (rising prices) led to a slight increase in the U.S. 10-Year Treasury Yield by **+1.10%**, as investors demanded more return for lending money over longer periods. Gold, often seen as a safe haven during uncertainty, also climbed **+2.78%**.

**Global Central Banks**
- What happened: Other major countries' central banks (like Europe's) signaled they might keep interest rates steady or even raise them.
- Why Americans should care: When other countries keep rates high, it suggests inflation is a global issue, not just a U.S. one. This can influence what the U.S. Federal Reserve does with our interest rates, affecting your mortgage rates, car loans, and credit card interest.
- Market reaction: This slightly pushed the dollar stronger against the euro (EUR/USD fell **-0.17%**), making European goods a bit cheaper for Americans but U.S. exports more expensive for Europeans.

**China's Economy**
- What happened: News from China indicated slower-than-expected economic growth.
- Why Americans should care: China is a huge global consumer. When its economy slows, it can mean less demand for products from around the world, including those made by U.S. companies. This can impact company profits and, in turn, your 401k or retirement savings invested in those companies.
- Market reaction: Despite these global worries, U.S. stock markets showed resilience. The S&P 500 Index rose **+0.89%** and the Nasdaq Composite Index gained **+1.29%**, suggesting investors still have confidence in U.S. companies. The VIX (a measure of market fear) dropped **-6.86%**, indicating less investor anxiety.`,
  sources: [
    {
        category: "Equity & Volatility Data - Yahoo Finance",
        sources: [
            "S&P 500 Index (^GSPC) - https://finance.yahoo.com/quote/^GSPC",
            "VIX Index (^VIX) - https://finance.yahoo.com/quote/^VIX",
            "Nasdaq Composite Index (^IXIC) - https://finance.yahoo.com/quote/^IXIC",
            "Bitcoin (USD) (BTC-USD) - https://finance.yahoo.com/quote/BTC-USD",
            "Gold (USD/oz) (GC=F) - https://finance.yahoo.com/quote/GC=F",
            "EUR/USD (EURUSD=X) - https://finance.yahoo.com/quote/EURUSD=X",
            "USD/JPY (USDJPY=X) - https://finance.yahoo.com/quote/USDJPY=X",
            "Crude Oil (WTI) (CL=F) - https://finance.yahoo.com/quote/CL=F"
        ]
    },
    {
        category: "Interest Rates & Credit Spreads - FRED (Federal Reserve Economic Data)",
        sources: [
            "U.S. High Yield OAS (BAMLH0A0HYM2) - https://fred.stlouisfed.org/series/BAMLH0A0HYM2",
            "U.S. 10-Year Treasury Yield (DGS10) - https://fred.stlouisfed.org/series/DGS10",
            "BBB U.S. Corporate OAS (BAMLC0A4CBBB) - https://fred.stlouisfed.org/series/BAMLC0A4CBBB",
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