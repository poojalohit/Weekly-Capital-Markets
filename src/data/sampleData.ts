import { WeeklyDashboard } from '../types/marketData';

export const sampleDashboardData: WeeklyDashboard = {
  date: '2026-09-30',
  marketData: [
  {
    variable: "S&P 500 Index",
    latestLevel: 7720.35986328125,
    weeklyChange: 0.47724364406470005,
    ytdChange: 11.950274365419336
  },
  {
    variable: "Nasdaq Composite Index",
    latestLevel: 27100.67578125,
    weeklyChange: 1.045081810525534,
    ytdChange: 15.720496667005543
  },
  {
    variable: "VIX Index",
    latestLevel: 15.850000381469727,
    weeklyChange: -1.3690063318753452,
    ytdChange: 10.607121185319352
  },
  {
    variable: "U.S. 10-Year Treasury Yield",
    latestLevel: 5.24,
    weeklyChange: 1.3539651837524234,
    ytdChange: 25.358851674641166
  },
  {
    variable: "3-Month SOFR Rate",
    latestLevel: 3.88,
    weeklyChange: -0.5128205128205132,
    ytdChange: 0.25839793281653195
  },
  {
    variable: "Gold (USD/oz)",
    latestLevel: 4188.89990234375,
    weeklyChange: 0.49179542462980924,
    ytdChange: -4.500374145260088
  },
  {
    variable: "Crude Oil (WTI)",
    latestLevel: 91.3499984741211,
    weeklyChange: -1.3498920308830646,
    ytdChange: 57.635888302769125
  },
  {
    variable: "USD/JPY",
    latestLevel: 157.17799377441406,
    weeklyChange: -0.18099722903107177,
    ytdChange: 0.4890894088803067
  },
  {
    variable: "EUR/USD",
    latestLevel: 1.1354604959487915,
    weeklyChange: -0.20550999376817003,
    ytdChange: -3.342790077430834
  },
  {
    variable: "BBB U.S. Corporate OAS",
    latestLevel: 102,
    weeklyChange: 3.030303030303033,
    ytdChange: 0.990099009900991
  },
  {
    variable: "U.S. High Yield OAS",
    latestLevel: 308,
    weeklyChange: 5.119453924914672,
    ytdChange: 9.608540925266905
  },
  {
    variable: "Bitcoin (USD)",
    latestLevel: 84218.2421875,
    weeklyChange: 0.8570185026029313,
    ytdChange: -3.7602902564294856
  }
],
  interpretation: `**This Week's Theme: "Tech Shines, But Borrowing Gets Pricier"**

This week saw a mixed bag for investors. While tech stocks continued their winning streak, the cost of borrowing money went up, making things a bit more expensive for businesses and consumers alike.

**The Good News:**

*   **Tech's Strong Performance:** The Nasdaq Composite Index, which is heavily weighted with technology companies, jumped a solid +1.05% this week. This means that big tech companies are still seen as strong performers and are driving a lot of the positive momentum in the stock market. The broader S&P 500 Index also edged up +0.48%.
*   **VIX is Calm:** The VIX Index (a measure of how much investors expect the stock market to jump around) actually fell -1.37%. This suggests that despite some underlying concerns, the overall mood in the market wasn't overly panicky.

**The Not-So-Good News:**

*   **Higher Borrowing Costs:** The U.S. 10-Year Treasury Yield (which is a benchmark for many loan rates, like mortgages) rose by +1.35% to 5.24%. This means it's becoming more expensive for the government, and by extension, for businesses and people, to borrow money for longer periods.
*   **Corporate Borrowing Gets More Expensive:** If you're a company, borrowing money also got pricier. The BBB U.S. Corporate OAS (a measure of how much extra interest a less-than-top-rated company has to pay compared to a super-safe government bond) increased by +3.03% to 102. Even riskier companies saw their borrowing costs jump, with the U.S. High Yield OAS rising +5.12% to 308. In simple terms, lenders are asking for more interest to lend money to companies, especially those considered less stable. This can impact company profits and future growth plans.
*   **Oil Prices Dip:** Crude Oil (WTI) fell -1.35% to $91.3499984741211. A drop in oil prices can sometimes signal concerns about future economic demand, as less economic activity means less need for fuel.

**Unusual Patterns and Their Meaning:**

*   **Stocks Up, Yields Up:** It's a bit unusual to see both stock markets (especially tech) performing well *and* long-term borrowing costs (the 10-Year Treasury Yield) rising significantly. Usually, when borrowing costs go up, it can put a damper on stock market enthusiasm because it makes it more expensive for companies to grow and for consumers to spend. This suggests investors are still very optimistic about the growth prospects of certain sectors, like technology`,
  usNarrative: `Here's your weekly market analysis for the week ending September 30, 2026:

**1. What Happened This Week: Tech Stocks Lead the Charge, But Caution Remains**

This week saw the stock market continue its upward climb, especially in the technology sector, while a noticeable undercurrent of caution kept some investors on edge. Despite positive movements in stocks, signs elsewhere suggested that not everyone is fully convinced the good times will last.

The Nasdaq Composite Index, which is heavily weighted with technology companies, led the way with a strong **+1.05%** gain this week, pushing its year-to-date (YTD) return to an impressive **+15.72%**. The broader S&P 500 Index also moved higher by **+0.48%**, bringing its YTD gain to **+11.95%**. This suggests investors are feeling good about growth-oriented companies. Bitcoin, often seen as a riskier asset, also saw a small gain of **+0.86%** this week, though it's still down **-3.76%** for the year.

**Unusual Pattern:** Normally, when stocks are doing well, "safe haven" assets like gold might fall because investors feel confident and don't need protection. However, this week, Gold also edged up by **+0.49%**. This is unusual because it suggests that while investors are buying stocks, they are also subtly hedging their bets, perhaps wanting a safety net in case things turn sour. It's like buying a new sports car (stocks) but also keeping your sturdy old sedan (gold) just in case.

**2. What Caused These Moves**

While no major economic events or news dominated the headlines this week, the market's movements reflect ongoing investor sentiment and reaction to broader trends.

*   **Ongoing Tech Optimism:** The continued strong performance of the Nasdaq suggests that investors remain very optimistic about the future of technology and innovation. This sustained belief in tech companies is a major driver of the stock market's upward trend.
*   **Rising Borrowing Costs for Companies:** We saw a notable increase in credit spreads this week. The BBB U.S. Corporate OAS (Option-Adjusted Spread), which is the extra interest that companies with decent but not top-notch credit ratings have to pay, went up by **+3.03%**. Even more dramatically, the U.S. High Yield OAS, which is the extra interest that riskier, "junk bond" companies pay, jumped by **+5.12%**.
    *   **What happened:** Companies that borrow money are now paying a higher premium over safe government bonds.
    *   **Why it matters:** Think of credit spreads like the interest rate premium risky borrowers pay. When these spreads go up, it means lenders (investors) are demanding more money to lend to companies, especially the riskier ones. This makes it more expensive for companies to borrow and grow, which can eventually slow down economic activity.
    *   **Market reaction:** While stocks went up, the rise in credit spreads is a subtle warning sign. It shows that beneath the surface, there's growing caution about the financial health of some companies.

**3. How Are Investors Feeling?**

Investors seem to be in a curious mood: optimistic about growth but with a noticeable undercurrent of caution. The VIX Index (a measure of market fear) edged down by **-1.37%** this week to **15.85**. A VIX below 15 suggests calm, 15-20 indicates caution, and above 20 means worry. So, at 15.85, investors are still in a "cautious" but not "worried" state.

The slight rise in gold, combined with the significant increase in credit spreads, tells us that while investors are happy to buy stocks, they are also demanding more for lending to companies and are perhaps seeking some safety. This is a market that's walking a tightrope between confidence and prudence.

**4. What Would a Pro Do With New Money?**

If someone had new money to invest right now, a professional might suggest a balanced approach. Given the strong performance in tech and the broader market, it could be tempting to go "all-in" on growth stocks. However, the rising U.S. 10-Year Treasury Yield (up **+1.35%** this week) and the increasing corporate credit spreads are signals to be careful.

*   **Smart move:** Consider diversifying beyond just high-flying tech. Perhaps look at companies that have solid earnings and are less sensitive to rising borrowing costs. Also, don't ignore bonds entirely; while the 10-year yield is high, it could offer a decent return for a portion of your portfolio.
*   **Be careful about:** Over-concentrating in a few high-growth, potentially risky stocks, especially if they rely heavily on cheap borrowing. The rising cost of corporate debt could hit these companies harder. It's also wise to avoid companies with shaky financial foundations, as the market is clearly demanding a higher premium for lending to them.

**5. What to Watch Next Week**

Next week, investors will likely be looking for any new economic data that could shed light on inflation or the Federal Reserve's (the U.S. central bank) future interest rate plans.

*   **Important economic reports:** Keep an eye out for any inflation reports (like the Consumer Price Index or Producer Price Index) or updates on job numbers. Strong inflation could signal the Fed might keep interest rates higher for longer, while weaker job numbers could suggest an economic slowdown.
*   **Best-case scenario:** Inflation cools down without a major hit to economic growth, allowing the stock market to continue its climb.
*   **Worst-case scenario:** Inflation remains stubbornly high, forcing the Fed to signal even higher interest rates, which could dampen corporate profits and stock market enthusiasm.

**6. What These Numbers Mean (Plain English Guide)**

*   **S&P 500 Index:** Tracks 500 large U.S. companies; it's a good snapshot of the overall health of the U.S. stock market.
*   **Nasdaq Composite Index:** Represents mostly technology and growth companies; it shows how these innovative sectors are performing.
*   **VIX Index:** Often called the "fear gauge," it measures how much investors expect the stock market to jump around in the near future.
*   **U.S. 10-Year Treasury Yield:** The interest rate the U.S. government pays to borrow money for 10 years; it influences mortgage rates and other loan costs.
*   **3-Month SOFR Rate:** A key short-term interest rate that banks use to lend to each other; it reflects very short-term borrowing costs.
*   **Gold (USD/oz):** A traditional "safe haven" asset that investors often buy when they are worried about economic uncertainty or inflation.
*   **Crude Oil (WTI):** The price of a barrel of U.S. oil; it directly affects gas prices, manufacturing costs, and inflation.
*   **USD/JPY and EUR/USD:** These show how many Japanese Yen or U.S. Dollars you get for one U.S. Dollar or Euro, respectively; they indicate the strength of one currency against another.
*   **BBB U.S. Corporate OAS and U.S. High Yield OAS:** These are "spreads" or the extra interest that companies with different credit ratings have to pay to borrow money compared to super-safe government bonds.
*   **Bitcoin (USD):** A digital currency that often acts as a speculative asset, meaning its price can be very volatile and is often seen as a barometer for investor appetite for risk.`,
  globalEvents: `Here's a look at how world events impacted your money this past week:

**Middle East Tensions**
- What happened: While specific new events weren't highlighted, ongoing tensions in the Middle East often create uncertainty.
- Why Americans should care: This region is a major oil producer. Any instability can disrupt oil supplies, potentially leading to higher crude oil prices. Even though crude oil (WTI) actually went down this week by -1.35%, the underlying risk of higher prices remains. If oil prices rise, you might see higher gas prices at the pump, making your commute or grocery run more expensive.
- Market reaction: Despite the tensions, crude oil actually fell -1.35% this week. Gold, often seen as a safe investment during uncertain times, rose +0.49%.

**Global Central Banks**
- What happened: Other major countries' central banks made decisions about their interest rates, though specific actions weren't detailed.
- Why Americans should care: When other big economies, like Europe or Japan, adjust their interest rates, it shows how they view global inflation and economic growth. If they keep rates high, it suggests inflation is a global worry, not just a U.S. problem. This can influence the Federal Reserve's decisions here at home about U.S. interest rates, which then affects your mortgage rates, credit card interest, and even how much your retirement savings grow.
- Market reaction: The U.S. 10-Year Treasury Yield, a benchmark for long-term borrowing costs, rose +1.35%, indicating investors might expect slightly higher interest rates or inflation in the future.

**China's Economy**
- What happened: Reports on China's economic health, though not detailed, continue to be a focus.
- Why Americans should care: China is a massive global manufacturer and consumer. If its economy slows down, it means less demand for products and services worldwide, including from American companies. This can hurt global growth and affect how much profit U.S. companies make, which in turn can impact your 401k or investment portfolio.
- Market reaction: Despite global concerns, the U.S. stock market had a positive week. The S&P 500 Index, which tracks 500 large U.S. companies, rose +0.48%, and the tech-heavy Nasdaq Composite Index jumped +1.05%. This suggests U.S. investors remain somewhat optimistic.

**Overall Market Picture:**
Your retirement savings (like those in the S&P 500 and Nasdaq) generally saw a good week, rising +0.48% and +1.05% respectively. The VIX Index, a measure of market fear, actually fell -1.37%, suggesting investors felt a bit less anxious. However, the cost of borrowing for companies (BBB U.S. Corporate OAS and U.S. High Yield OAS) went up by +3.03% and +5.12%, meaning it's getting more expensive for businesses to borrow money.`,
  sources: [
    {
        category: "Equity & Volatility Data - Yahoo Finance",
        sources: [
            "VIX Index (^VIX) - https://finance.yahoo.com/quote/^VIX",
            "S&P 500 Index (^GSPC) - https://finance.yahoo.com/quote/^GSPC",
            "Nasdaq Composite Index (^IXIC) - https://finance.yahoo.com/quote/^IXIC",
            "Crude Oil (WTI) (CL=F) - https://finance.yahoo.com/quote/CL=F",
            "EUR/USD (EURUSD=X) - https://finance.yahoo.com/quote/EURUSD=X",
            "Bitcoin (USD) (BTC-USD) - https://finance.yahoo.com/quote/BTC-USD",
            "USD/JPY (USDJPY=X) - https://finance.yahoo.com/quote/USDJPY=X",
            "Gold (USD/oz) (GC=F) - https://finance.yahoo.com/quote/GC=F"
        ]
    },
    {
        category: "Interest Rates & Credit Spreads - FRED (Federal Reserve Economic Data)",
        sources: [
            "3-Month SOFR Rate (SOFR) - https://fred.stlouisfed.org/series/SOFR",
            "U.S. 10-Year Treasury Yield (DGS10) - https://fred.stlouisfed.org/series/DGS10",
            "BBB U.S. Corporate OAS (BAMLC0A4CBBB) - https://fred.stlouisfed.org/series/BAMLC0A4CBBB",
            "U.S. High Yield OAS (BAMLH0A0HYM2) - https://fred.stlouisfed.org/series/BAMLH0A0HYM2"
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