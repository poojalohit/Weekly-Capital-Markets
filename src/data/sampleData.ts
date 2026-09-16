import { WeeklyDashboard } from '../types/marketData';

export const sampleDashboardData: WeeklyDashboard = {
  date: '2026-09-16',
  marketData: [
  {
    variable: "S&P 500 Index",
    latestLevel: 7608.830078125,
    weeklyChange: -0.14632456216852296,
    ytdChange: 10.333019435692286
  },
  {
    variable: "Nasdaq Composite Index",
    latestLevel: 26152.283203125,
    weeklyChange: -0.1303231444148705,
    ytdChange: 11.670838973529946
  },
  {
    variable: "VIX Index",
    latestLevel: 16.739999771118164,
    weeklyChange: -2.1052666802374707,
    ytdChange: 16.817863644404195
  },
  {
    variable: "U.S. 10-Year Treasury Yield",
    latestLevel: 4.97,
    weeklyChange: 0.20161290322580216,
    ytdChange: 18.89952153110048
  },
  {
    variable: "3-Month SOFR Rate",
    latestLevel: 3.64,
    weeklyChange: 0.5524861878453043,
    ytdChange: -5.943152454780361
  },
  {
    variable: "Gold (USD/oz)",
    latestLevel: 4380,
    weeklyChange: 0.6456972422806984,
    ytdChange: -0.14362458035284315
  },
  {
    variable: "Crude Oil (WTI)",
    latestLevel: 103.30999755859375,
    weeklyChange: 1.8936760829503838,
    ytdChange: 78.27436790072177
  },
  {
    variable: "USD/JPY",
    latestLevel: 155.2259979248047,
    weeklyChange: 1.174524194675277,
    ytdChange: -0.7588860916766318
  },
  {
    variable: "EUR/USD",
    latestLevel: 1.1538017988204956,
    weeklyChange: -0.4822893413191877,
    ytdChange: -1.7814683333023824
  },
  {
    variable: "BBB U.S. Corporate OAS",
    latestLevel: 98,
    weeklyChange: 1.0309278350515474,
    ytdChange: -2.970297029702973
  },
  {
    variable: "U.S. High Yield OAS",
    latestLevel: 276,
    weeklyChange: 4.150943396226411,
    ytdChange: -1.7793594306049918
  },
  {
    variable: "Bitcoin (USD)",
    latestLevel: 75490.8125,
    weeklyChange: -3.4192101420572074,
    ytdChange: -13.733489389017
  }
],
  interpretation: `**This Week's Theme: "Quiet Dip, Loud Signals"**

This past week saw a remarkably small dip in the main stock indexes, but beneath the surface, several unusual signals were flashing, suggesting investors are wrestling with mixed feelings about the future. It was a week where the numbers didn't scream "panic," but they certainly whispered "pay attention."

**What's unusual this week?**

• **Stocks and Bonds Moving Together:** Typically, when stocks fall, people rush into safer investments like U.S. government bonds, which causes bond prices to go up and their yields (the return you get) to go down. This week, the S&P 500 Index fell -0.15% and the Nasdaq Composite Index fell -0.13%, but the U.S. 10-Year Treasury Yield *rose* +0.20% to 4.97%. This is unusual because it suggests investors weren't necessarily seeking safety in bonds, or perhaps they're worried about inflation or the government's borrowing needs. This means the usual "safety net" might not be acting as expected.

• **Gold and Oil Both Rising:** Gold, often seen as a "safe haven" asset (like a financial safety blanket when things get rocky), climbed +0.65% to $4380. At the same time, Crude Oil (WTI), which is a key indicator of economic activity and often a driver of inflation, jumped +1.89% to $103.31. Usually, you see one rise significantly when the other falls, reflecting either fear (gold up) or growth (oil up). Both rising together suggests a complex picture: perhaps investors are worried about inflation (driving oil prices up) but also seeking safety from that inflation or other uncertainties (driving gold up).

• **Corporate Borrowing Costs Jumping for Riskier Companies:** While the main stock indexes barely moved, the cost for riskier companies to borrow money (measured by U.S. High Yield OAS) shot up +4.15% to 276. This is unusual because it shows that even with stocks relatively stable, lenders are demanding a significantly higher "risk premium" from companies with shakier finances. In simple terms, banks are getting much pickier and more expensive with who they lend to, which can signal nervousness about the economy's future health, even if the biggest companies (that make up the S&P) are holding steady.

**What caused the biggest moves?**

• **Oil's Surge:** Crude Oil (WTI) saw the biggest weekly gain, climbing +1.89%. This significant jump likely reflects ongoing concerns about global supply, strong demand, or perhaps renewed geopolitical tensions that could disrupt oil production. This means that filling up your car or heating your home could continue to get more expensive, impacting`,
  usNarrative: `Here's your weekly market analysis for the week ending September 16, 2026:

**1. What Happened This Week: A Sideways Shuffle for Stocks**

This week, the stock market mostly held its ground, with both major U.S. indexes slightly dipping after a period of strong gains. Investors seemed to pause, digesting recent economic news and global developments.

Specifically, the S&P 500 Index, which tracks 500 large U.S. companies, saw a small dip of -0.15% this week, though it's still up a healthy +10.33% for the year. The Nasdaq Composite Index, home to many technology companies, also fell slightly by -0.13% but boasts an impressive +11.67% year-to-date. Meanwhile, Gold, often considered a "safe haven" during uncertain times, surprisingly rose +0.65%, suggesting some investors are still looking for safety even as stocks remain relatively stable. Crude Oil (WTI) jumped +1.89%, pushing its year-to-date gains to a significant +78.27%, which often translates to higher prices at the gas pump.

**Unusual Pattern:** It's a bit unusual to see both stocks holding relatively steady (with minor dips) and gold rising. Normally, when stocks are doing okay, investors don't feel the need to rush into gold. This pattern suggests that while the overall market isn't in panic mode, some investors are subtly adding a layer of protection to their portfolios, perhaps anticipating future uncertainties.

**2. What Caused These Moves**

This week's movements seemed to be a mix of subtle shifts rather than a single dramatic event:

*   **Rising Interest Rates for Risky Borrowers:** Both the BBB U.S. Corporate OAS (Open Aside Spread) and U.S. High Yield OAS, which are fancy terms for the extra interest rate that companies with lower credit ratings have to pay to borrow money, rose this week by +1.03% and +4.15% respectively. Think of these "spreads" like the extra premium a lender charges a riskier friend compared to a very reliable one. When these spreads go up, it means investors are demanding more compensation for lending to these companies, suggesting they perceive more risk. This can make it harder and more expensive for companies to borrow, potentially slowing growth.
*   **Strong Dollar Against the Yen:** The USD/JPY (U.S. Dollar versus Japanese Yen) exchange rate increased by +1.17%. This means the U.S. dollar got stronger compared to the Japanese Yen. A stronger dollar can make U.S. goods more expensive for international buyers, but it also makes imported goods cheaper for Americans.
*   **Oil Prices Continue Their Climb:** Crude Oil (WTI) gained +1.89%, continuing its strong upward trend. This rise is often driven by factors like strong global demand, supply concerns, or geopolitical events. Higher oil prices can impact everyday consumers through increased gas prices and higher costs for transportation and manufacturing.

**3. How Are Investors Feeling?**

Investors seem to be in a state of cautious observation. The VIX Index (a measure of market fear) slightly decreased by -2.11% this week, settling at 16.74. While it's still up +16.82% for the year, a VIX below 20 generally suggests investors are feeling more cautious than worried (below 15 means calm, 15-20 means cautious, above 20 means worried). The fact that Gold is creeping up (+0.65%) while stocks are mostly flat further supports this idea of caution. Investors aren't panicking and selling everything, but they're not rushing headlong into risky assets either. Bitcoin, often seen as a riskier, speculative investment, fell -3.42% this week and is down -13.73% year-to-date, suggesting some hesitation in the more speculative parts of the market.

**4. What Would a Pro Do With New Money?**

If someone had new money to invest right now, a professional might suggest a balanced approach. Given the slight rise in risk perception (seen in the credit spreads) and the ongoing strength of the dollar, it might be smart to stick with high-quality, stable companies that have a good track record and can weather potential economic bumps.

Investors should be careful about chasing the highest-flying stocks or speculative assets without understanding the underlying risks, especially with Bitcoin showing a significant year-to-date decline. This isn't the time to be overly aggressive. Instead, focusing on diversification—spreading investments across different types of assets—and reviewing your long-term goals is key. It's also wise to ensure you have a cash cushion for emergencies.

**5. What to Watch Next Week**

Next week, investors will likely be keeping an eye on any new economic data, especially inflation reports or job numbers, as these can influence central bank decisions on interest rates. Any major news out of oil-producing regions could also impact crude oil prices.

*   **Best-case scenario:** Economic data comes in strong but not "too strong" (which could spark inflation fears), and geopolitical tensions remain low, allowing markets to continue their gradual upward trend.
*   **Worst-case scenario:** Unexpectedly high inflation numbers or signs of a slowing economy could make investors nervous, potentially leading to a market pullback.

**6. What These Numbers Mean (Plain English Guide)**

*   **S&P 500 Index:** Tracks 500 large U.S. companies and is a good measure of the overall health of the stock market.
*   **Nasdaq Composite Index:** Represents many technology and growth companies, often seen as a barometer for innovation.
*   **VIX Index:** A "fear gauge" that shows how much investors expect the stock market to move up or down in the near future.
*   **U.S. 10-Year Treasury Yield:** The interest rate the U.S. government pays to borrow money for 10 years, which influences mortgage rates and other loans.
*   **3-Month SOFR Rate:** A key short-term interest rate that banks use to lend to each other.
*   **Gold (USD/oz):** A traditional "safe haven" asset that people buy when they are worried about the economy or inflation.
*   **Crude Oil (WTI):** The price of a barrel of oil, which directly impacts gas prices and the cost of many goods.
*   **USD/JPY and EUR/USD:** These show how many Japanese Yen (JPY) or U.S. Dollars (USD) you can get for one U.S. Dollar or one Euro (EUR), reflecting currency strength.
*   **BBB U.S. Corporate OAS and U.S. High Yield OAS:** These "spreads" or "OAS" measure the extra interest rate that companies with lower credit ratings have to pay to borrow money compared to the safest U.S. government bonds.
*   **Bitcoin (USD):** A digital currency often seen as a speculative asset, representing investor appetite for risk.`,
  globalEvents: `This week, your investments saw a slight dip, with the S&P 500 down -0.15% and the Nasdaq Composite down -0.13%. Here’s why:

**Middle East Tensions**
- What happened: Continued unrest in the Middle East kept global markets on edge.
- Why Americans should care: This region is crucial for oil production. When there's instability, oil supplies are threatened.
- Market reaction: Crude Oil (WTI) prices rose +1.89% this week. This means you might see gas prices climb, making your commute more expensive and potentially increasing the cost of goods that rely on transportation.

**European Central Bank's Decision**
- What happened: Europe's central bank (like our Federal Reserve) signaled it might keep interest rates high for longer to fight rising prices.
- Why Americans should care: This tells us inflation is a global problem, not just in the U.S. If other major economies struggle with inflation, it could slow down global growth, affecting demand for American products.
- Market reaction: The U.S. 10-Year Treasury Yield, a benchmark for many loan rates, increased +0.20%. This could mean higher borrowing costs for things like mortgages and car loans in the future. The euro weakened against the dollar (EUR/USD was down -0.48%), making European goods cheaper for Americans but U.S. exports more expensive for Europeans.

**China's Economic Slowdown**
- What happened: New data showed China's economy is growing slower than expected.
- Why Americans should care: China is a huge consumer of goods and services worldwide. A weaker China means less demand for products from other countries, including the U.S. This could slow down global economic growth and impact American companies that sell products there.
- Market reaction: Worries about global growth contributed to the overall cautious mood in markets, as seen in the slight dip in major stock indexes.`,
  sources: [
    {
        category: "Equity & Volatility Data - Yahoo Finance",
        sources: [
            "VIX Index (^VIX) - https://finance.yahoo.com/quote/^VIX",
            "Nasdaq Composite Index (^IXIC) - https://finance.yahoo.com/quote/^IXIC",
            "S&P 500 Index (^GSPC) - https://finance.yahoo.com/quote/^GSPC",
            "Crude Oil (WTI) (CL=F) - https://finance.yahoo.com/quote/CL=F",
            "Gold (USD/oz) (GC=F) - https://finance.yahoo.com/quote/GC=F",
            "Bitcoin (USD) (BTC-USD) - https://finance.yahoo.com/quote/BTC-USD",
            "USD/JPY (USDJPY=X) - https://finance.yahoo.com/quote/USDJPY=X",
            "EUR/USD (EURUSD=X) - https://finance.yahoo.com/quote/EURUSD=X"
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