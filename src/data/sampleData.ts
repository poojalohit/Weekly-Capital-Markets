import { WeeklyDashboard } from '../types/marketData';

export const sampleDashboardData: WeeklyDashboard = {
  date: '2026-03-25',
  marketData: [
  {
    variable: "S&P 500 Index",
    latestLevel: 6556.3701171875,
    weeklyChange: -0.37425745042546726,
    ytdChange: -4.928339292668248
  },
  {
    variable: "Nasdaq Composite Index",
    latestLevel: 21761.89453125,
    weeklyChange: -0.8423349795105182,
    ytdChange: -7.076219652295067
  },
  {
    variable: "VIX Index",
    latestLevel: 25.920000076293945,
    weeklyChange: -0.8795393712868244,
    ytdChange: 80.8792757452469
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
    latestLevel: 4539.60009765625,
    weeklyChange: 3.076678481311305,
    ytdChange: 3.87862969296528
  },
  {
    variable: "Crude Oil (WTI)",
    latestLevel: 88.5,
    weeklyChange: 0.41983746523682247,
    ytdChange: 52.71785821372771
  },
  {
    variable: "USD/JPY",
    latestLevel: 158.88400268554688,
    weeklyChange: -0.21979656288656887,
    ytdChange: 1.5797973247048342
  },
  {
    variable: "EUR/USD",
    latestLevel: 1.1606314182281494,
    weeklyChange: 0.3992631399625713,
    ytdChange: -1.2000901531436443
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
    latestLevel: 71327.7734375,
    weeklyChange: 0.5822673359845466,
    ytdChange: -18.490768342122625
  }
],
  interpretation: `**This Week's Theme: "A Tale of Two Markets: Gold Shines as Stocks Tread Water"**

This week saw a bit of a mixed bag for investors. While major stock indexes like the S&P 500 and Nasdaq barely budged, gold had a truly standout performance, suggesting some investors are looking for safety.

**What's unusual this week?**

• **Gold's Big Jump Amidst Flat Stocks:** Gold surged by an impressive +3.08% this week. This is unusual because gold often acts like a "safety blanket" for investors, gaining value when there's uncertainty or fear in the stock market. While stocks did dip slightly (S&P 500 down -0.37%, Nasdaq down -0.84%), it wasn't a huge drop that typically sparks such a strong move into gold. It suggests a quiet underlying worry among some investors.
• **Falling VIX, Yet Gold Rises:** The VIX Index, often called the "fear gauge" because it measures expected stock market volatility, actually fell by -0.88% this week. Normally, a falling VIX would mean less fear and less reason for gold to climb so much. The fact that gold rallied significantly while the VIX ticked down is a bit contradictory and hints at specific concerns driving gold demand, perhaps related to inflation or geopolitical events rather than just market jitters.

**The biggest movers and why they matter:**

• **Gold (USD/oz) up +3.08%:** This was the biggest positive move. In simple terms, a lot of people bought gold. This usually happens when investors are looking for a safe place to put their money, either because they're worried about the economy, inflation eroding the value of their cash, or global instability. This week's jump suggests those concerns are growing.
• **U.S. High Yield OAS down -5.00%:** This might sound technical, but it’s actually good news for riskier companies. "High Yield OAS" (Option-Adjusted Spread) is like the extra interest rate that riskier companies have to pay to borrow money compared to super-safe government bonds. When this number falls, it means investors are demanding less extra interest, which signals they feel more comfortable lending to these companies. The -5.00% drop suggests a notable increase in confidence towards these riskier businesses, which is a positive sign for that part of the credit market.
• **Nasdaq Composite Index down -0.84%:** This index, heavily weighted towards technology stocks, saw the largest decline among the major stock indexes. This means that the tech sector, which has been a strong performer in recent years, faced a bit more selling pressure than the broader market (S&P 500). It suggests that investors might be rotating out of some of these growth`,
  usNarrative: `Here's your weekly market analysis for the week ending 2026-03-25.

**1. What Happened This Week: A Tug-of-War Between Caution and Calm**

This week, major stock markets dipped slightly, with the S&P 500 falling by -0.37% and the Nasdaq Composite dropping -0.84%. At the same time, investors showed a renewed interest in "safe haven" assets like gold, which jumped by +3.08%.

Investors seemed to be in a cautious mood, pulling back slightly from stocks, especially those in the technology-heavy Nasdaq. This is likely because there wasn't any major positive news to push them higher, and some might be taking a breather after a bumpy start to the year. Meanwhile, the price of crude oil (WTI) nudged up +0.42%, suggesting ongoing demand.

**Unusual Pattern:** Normally, when investors pull back from stocks, we'd expect to see a bigger move into very safe assets like government bonds. However, the U.S. 10-Year Treasury Yield actually increased by +0.10%, meaning bond prices fell slightly. This suggests that while there's some caution, it's not a full-blown flight to safety in all areas, and perhaps investors are anticipating higher interest rates or more government borrowing in the future.

**2. What Caused These Moves**

While there weren't specific big news events this week, the market moves reflect ongoing shifts in how investors are thinking:

*   **The Federal Reserve's "Higher for Longer" Message:**
    *   What happened: The general expectation is that the Federal Reserve (the U.S. central bank) will keep interest rates at their current levels for a longer period than previously thought. The 3-Month SOFR Rate, a key short-term interest rate, remained flat this week at 5.25%, reflecting this steady stance.
    *   Why it matters: When interest rates stay high, it makes borrowing more expensive for businesses and individuals, which can slow down the economy. For everyday investors, this means that savings accounts and money market funds might continue to offer attractive returns, but it can also make it harder for companies to grow, potentially impacting stock prices.
    *   Market reaction: This "higher for longer" outlook likely contributed to the slight dip in stock markets, as investors adjust their expectations for future company profits and economic growth.

*   **Easing Credit Concerns (for now):**
    *   What happened: The "extra interest" (known as the spread or OAS) that companies with less-than-perfect credit pay to borrow money actually decreased this week. BBB U.S. Corporate OAS fell by -2.00%, and U.S. High Yield OAS dropped by -5.00%.
    *   Why it matters: Think of credit spreads like the interest rate premium risky borrowers pay compared to very safe borrowers like the U.S. government. When these spreads fall, it suggests investors are feeling a bit less worried about companies defaulting on their loans. This makes it easier and cheaper for these companies to borrow, which can be a positive sign for the economy.
    *   Market reaction: This easing of credit concerns is a positive underlying signal, even if stock markets didn't fully reflect it this week. It suggests that while there might be caution, there isn't widespread panic about corporate health.

**3. How Are Investors Feeling?**

Investors seem to be in a state of cautious optimism. The VIX (a measure of market fear) slightly decreased by -0.88% this week, landing at 25.92. While this is a small drop, the VIX is still quite high (remember, below 15 suggests calm, 15-20 is cautious, and above 20 indicates worry). So, while the immediate fear eased a touch, investors are still notably worried, as evidenced by the VIX's year-to-date jump of +80.88%. The strong move into gold (+3.08% this week) also shows that investors are seeking "safe" investments, hedging their bets even as Bitcoin, a riskier asset, saw a modest gain of +0.58%.

**4. What Would a Pro Do With New Money?**

If someone had new money to invest right now, a professional might suggest a balanced approach. Given the lingering caution (high VIX) and the attractiveness of safe havens like gold, it would be smart to not go "all in" on risky assets. However, the easing of credit spreads suggests some underlying stability.

Therefore, a pro might:
*   **Consider "boring but stable" investments:** Look for companies with strong balance sheets and consistent earnings that can weather an uncertain economic environment.
*   **Gradually add to diversified stock portfolios:** Instead of trying to time the market, invest smaller amounts regularly (a strategy called dollar-cost averaging).
*   **Don't ignore bonds:** With the 10-Year Treasury Yield at 4.15%, longer-term bonds are offering more attractive returns than they have in years.
*   **Be careful about:** Over-concentrating in highly speculative assets, especially those that have already seen massive run-ups this year.

**5. What to Watch Next Week**

Next week, investors will be keeping an eye on any new economic reports, particularly those related to inflation and employment. These reports directly influence the Federal Reserve's decisions on interest rates.

*   **Best-case scenario:** Inflation shows signs of cooling without a significant jump in unemployment, giving the Fed more flexibility and potentially boosting investor confidence.
*   **Worst-case scenario:** Inflation remains stubbornly high, or unemployment starts to tick up, forcing the Fed to maintain high rates for longer or even consider further hikes, which could put more pressure on stocks.

**6. What These Numbers Mean (Plain English Guide)**

*   **S&P 500 Index:** Tracks 500 large U.S. companies and is a good snapshot of the overall stock market's health.
*   **Nasdaq Composite Index:** Represents mostly technology and growth companies; its movements show how these sectors are performing.
*   **VIX Index:** Often called the "fear gauge," it measures how much volatility investors expect in the stock market over the next 30 days.
*   **U.S. 10-Year Treasury Yield:** The interest rate the U.S. government pays to borrow money for 10 years; it influences mortgage rates and other long-term loans.
*   **3-Month SOFR Rate:** A key short-term interest rate that banks use to lend to each other, influenced by the Federal Reserve.
*   **Gold (USD/oz):** A traditional "safe haven" asset that investors often buy during times of economic uncertainty.
*   **Crude Oil (WTI):** The price of a barrel of West Texas Intermediate oil, which affects gas prices and energy costs for businesses.
*   **USD/JPY and EUR/USD:** These show how many Japanese Yen or U.S. Dollars you get for one U.S. Dollar or Euro, respectively, reflecting currency strength.
*   **BBB U.S. Corporate OAS and U.S. High Yield OAS:** These "spreads" (Option-Adjusted Spreads) represent the extra interest rate that companies with average (BBB) or riskier (High Yield) credit ratings have to pay to borrow money compared to very safe government bonds.
*   **Bitcoin (USD):** A digital currency often seen as a speculative asset, representing investor appetite for higher risk.`,
  globalEvents: `This week, global events created a mixed bag for U.S. markets, with major indexes slightly down. Your retirement savings, reflected in the S&P 500, dipped -0.37%, while tech-heavy investments (Nasdaq) fell -0.84%.

**Tensions in the Middle East**
- What happened: Ongoing conflicts in the Middle East continued, making investors nervous about global stability.
- Why Americans should care: This region is crucial for oil supply. When there's instability, it can disrupt oil flows.
- Market reaction: Crude Oil (WTI) rose +0.42% this week. This can mean higher gas prices at the pump for you, potentially making everything from commuting to grocery delivery more expensive and fueling inflation worries.

**European Central Bank's Decision**
- What happened: Europe's central bank (like our Federal Reserve) signaled it might cut interest rates soon, but not just yet.
- Why Americans should care: Their decisions influence global interest rates and the strength of the U.S. dollar. If Europe cuts rates, it could make the dollar stronger, making U.S. goods more expensive for other countries to buy.
- Market reaction: The Euro strengthened against the dollar (EUR/USD +0.40%), suggesting investors anticipate future rate cuts. Gold, often seen as a safe haven during uncertainty, rose +3.08%.

**China's Economic Slowdown**
- What happened: Concerns persisted about China's economic growth, with signs of weakness in its manufacturing and real estate sectors.
- Why Americans should care: China is a huge consumer of goods and services. A slowdown there means less demand for products made or sold by U.S. companies, potentially impacting their profits and global growth.
- Market reaction: This overall global growth concern contributed to the slight dip in the S&P 500 and Nasdaq, as investors worried about future corporate earnings.`,
  sources: [
    {
        category: "Equity & Volatility Data - Yahoo Finance",
        sources: [
            "Gold (USD/oz) (GC=F) - https://finance.yahoo.com/quote/GC=F",
            "Nasdaq Composite Index (^IXIC) - https://finance.yahoo.com/quote/^IXIC",
            "VIX Index (^VIX) - https://finance.yahoo.com/quote/^VIX",
            "Crude Oil (WTI) (CL=F) - https://finance.yahoo.com/quote/CL=F",
            "USD/JPY (USDJPY=X) - https://finance.yahoo.com/quote/USDJPY=X",
            "S&P 500 Index (^GSPC) - https://finance.yahoo.com/quote/^GSPC",
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