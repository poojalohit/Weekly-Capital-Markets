import { WeeklyDashboard } from '../types/marketData';

export const sampleDashboardData: WeeklyDashboard = {
  date: '2026-02-25',
  marketData: [
  {
    variable: "S&P 500 Index",
    latestLevel: 6890.06982421875,
    weeklyChange: 0.7651614086322255,
    ytdChange: -0.08947498849435338
  },
  {
    variable: "Nasdaq Composite Index",
    latestLevel: 22863.6796875,
    weeklyChange: 1.044801963062752,
    ytdChange: -2.371572191444793
  },
  {
    variable: "VIX Index",
    latestLevel: 19.479999542236328,
    weeklyChange: -7.282249738114046,
    ytdChange: 35.93858789915729
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
    latestLevel: 5213.10009765625,
    weeklyChange: 0.1613907051037289,
    ytdChange: 19.29017599510166
  },
  {
    variable: "Crude Oil (WTI)",
    latestLevel: 65.54000091552734,
    weeklyChange: -1.1612074670731383,
    ytdChange: 13.097497933842817
  },
  {
    variable: "USD/JPY",
    latestLevel: 156.5970001220703,
    weeklyChange: 1.4630103469572835,
    ytdChange: 0.11764095306048905
  },
  {
    variable: "EUR/USD",
    latestLevel: 1.178828239440918,
    weeklyChange: -0.39254816246947055,
    ytdChange: 0.34893244531877976
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
    latestLevel: 65561.609375,
    weeklyChange: 1.4622698682768016,
    ytdChange: -25.08000532089173
  }
],
  interpretation: `**This Week's Theme: "Quiet Gains in Stocks, But a Nervous Calm"**

This past week saw U.S. stock markets inch higher, with the S&P 500 gaining +0.77% and the Nasdaq climbing +1.04%. While these gains might seem modest, the big story was the unusual calm that settled over the market, even as some underlying worries lingered just beneath the surface.

**What's unusual this week?**

• **Calmer Waters, But Only Just:** The VIX Index, often called the "fear gauge" because it measures expected stock market swings, fell by -7.28% this week. This means investors felt a bit less nervous about big, sudden drops in the market. However, despite this weekly dip, the VIX is still up a significant +35.94% for the year, telling us that while things were calm *this* week, the overall year has been much more volatile than usual. It's like the market took a deep breath, but it's been holding its breath for a while.

• **Bond Yields Holding Steady, Not Falling:** The U.S. 10-Year Treasury Yield, which is a key benchmark for interest rates on things like mortgages and business loans, rose slightly by +0.10% this week. Usually, when stocks go up and fear goes down (like the VIX suggests), bond yields might fall as investors move money out of "safe" bonds and into "riskier" stocks. The fact that yields held firm or even nudged higher suggests that the underlying cost of borrowing money isn't easing up, which can put a damper on future economic growth.

• **Gold's Continued Shine:** Gold, often seen as a safe haven during uncertain times, continued its impressive run, gaining +0.16% this week. Even with stocks moving up and the VIX falling, gold is still up a whopping +19.29% year-to-date. This is unusual because if investors were truly feeling confident, they might be selling gold to buy more stocks. Gold's persistent strength signals that some investors are still keeping their "safety blanket" close, just in case.

**What caused the biggest moves?**

• **A Small Break from Fear:** The biggest mover this week was the VIX Index, falling -7.28%. This suggests that whatever concerns were bubbling last week might have taken a temporary backseat. Perhaps there wasn't any major negative news, or investors simply decided to take a breather from worrying. This drop in fear likely contributed to the positive, albeit small, gains in the S&P 500 and Nasdaq.

• **Strength in Tech and Growth Stocks:** The Nasdaq Composite Index, which is heavily weighted with technology and growth companies, led the stock market gains with a +`,
  usNarrative: `Here's your weekly market analysis for the week ending 2026-02-25:

**1. What Happened This Week: Tech Stocks Lead the Way, But Investors Still Jittery**

This week, the stock market saw a modest gain, largely thanks to technology companies, while investors seemed to be balancing their excitement with a bit of caution. The S&P 500 (a broad measure of U.S. stocks) rose by +0.77%, and the Nasdaq Composite (which is heavy on tech stocks) climbed even more, up +1.04%.

This rise in tech stocks suggests that investors are still keen on growth companies, perhaps anticipating strong future earnings. However, it's an unusual pattern that despite stock market gains, the VIX (a measure of market fear) only dipped slightly by -7.28% and remains elevated compared to the start of the year (up +35.94% YTD). Normally, when stocks go up, the VIX drops more significantly as fear subsides. This suggests investors are buying stocks but are still holding onto some underlying nervousness about the future.

**2. What Caused These Moves**

*   **Positive Tech Earnings (Implied):** While not explicitly stated in our data, the strong performance of the Nasdaq Composite, which is dominated by technology companies, often signals that investors are reacting positively to recent company earnings reports or future growth prospects in the tech sector. Because investors feel good about these companies → they buy their stocks → which pushes the overall Nasdaq index higher.
*   **Steady Interest Rates:** The 3-Month SOFR Rate (a key short-term interest rate that influences many other lending rates) remained unchanged this week at 5.25%. What this means for everyday investors is that the cost of short-term borrowing hasn't changed, offering a stable environment for businesses and potentially supporting continued economic activity.
*   **Calmer Credit Markets:** Both BBB U.S. Corporate OAS (the extra interest that medium-risk companies pay to borrow) and U.S. High Yield OAS (the extra interest that riskier companies pay) fell this week, by -2.00% and -5.00% respectively. Think of credit spreads (OAS) like the interest rate premium risky borrowers pay. Because these spreads tightened → it signals that lenders see less risk in lending to companies → which makes it cheaper for businesses to borrow and invest, generally a good sign for the economy.

**3. How Are Investors Feeling?**

Investors are feeling a mix of cautious optimism. The stock market's gains suggest some confidence, especially in tech. However, the VIX (a measure of market fear) is still at 19.48. This puts it in the "cautious" zone (above 15, below 20), indicating that while not outright worried, investors aren't completely relaxed either. The fact that gold, a traditional "safe-haven" investment, is still up significantly year-to-date (+19.29%) despite stock gains, further hints that investors are still hedging their bets and seeking safety alongside growth.

**4. What Would a Pro Do With New Money?**

If someone had money to invest right now, a professional might suggest a balanced approach. Given the strong performance of tech stocks this week and calmer credit markets, it might be a good time to consider investments in quality growth companies, especially those with strong earnings. However, with the VIX still hinting at caution, it would also be smart to not put all your eggs in one basket. Maintaining some exposure to less volatile assets or those that perform well in uncertain times (like gold, which is up +19.29% YTD) could provide a cushion. Investors should be careful about chasing the hottest stocks without understanding the underlying risks, especially since the overall market is still slightly down for the year (-0.09% for S&P 500 YTD).

**5. What to Watch Next Week**

Next week, investors will be keeping an eye on any new economic reports that could influence interest rate expectations or corporate earnings outlooks. Any comments from central bank officials about future interest rate policy would be particularly impactful. The best-case scenario would be continued strong corporate earnings reports and stable inflation data, encouraging more investment. The worst-case scenario would be unexpected negative economic news or geopolitical events that spook investors, leading to a pull-back in stocks and a rush to safer assets.

**6. What These Numbers Mean (Plain English Guide)**

*   **S&P 500 Index:** Tracks 500 large U.S. companies and is a good snapshot of the overall health of the U.S. stock market.
*   **Nasdaq Composite Index:** Represents mostly technology and growth companies, showing how the tech sector is performing.
*   **VIX Index:** This is a "fear gauge" that measures how much investors expect the stock market to bounce around in the near future.
*   **U.S. 10-Year Treasury Yield:** The interest rate the U.S. government pays to borrow money for 10 years, affecting mortgage rates and other long-term loans.
*   **3-Month SOFR Rate:** A key short-term interest rate that banks use to lend to each other, influencing many consumer and business loan rates.
*   **Gold (USD/oz):** Often seen as a "safe-haven" asset that investors buy when they are worried about economic stability or inflation.
*   **Crude Oil (WTI):** The price of oil, which directly impacts gas prices at the pump and transportation costs for businesses.
*   **USD/JPY and EUR/USD:** These are exchange rates, telling you how many Japanese Yen (JPY) you can get for one U.S. Dollar (USD), or how many U.S. Dollars you can get for one Euro (EUR).
*   **BBB U.S. Corporate OAS and U.S. High Yield OAS:** These "spreads" or "OAS" measure the extra interest (premium) that companies with different risk levels (BBB is medium risk, High Yield is higher risk) have to pay to borrow money compared to super-safe government bonds.
*   **Bitcoin (USD):** A digital currency often seen as a speculative asset, meaning its price can be very volatile and is influenced by investor sentiment and risk-taking.`,
  globalEvents: `This past week, global events created a mixed bag for U.S. investors, impacting everything from gas prices to your 401k.

**Middle East Tensions**
What happened: Ongoing instability in the Middle East continued to be a concern.
Why Americans should care: While there wasn't a major new crisis, the general unease keeps the oil market on edge. This directly impacts the price you pay at the pump.
Market reaction: Despite the tensions, crude oil actually fell -1.16% this week. This might offer some temporary relief for gas prices, which helps ease worries about inflation.

**China's Economic Health**
What happened: News out of China suggested its economy is still struggling to gain strong momentum.
Why Americans should care: China is a huge buyer of goods from around the world, including from the U.S. If China's economy slows down, it means less demand for American products, potentially hurting U.S. company profits and job growth.
Market reaction: Concerns about global growth from China's struggles contributed to a cautious mood, but U.S. stocks still managed to rise.

**European Central Bank Action**
What happened: The European Central Bank (Europe's version of the Federal Reserve) held its key interest rate steady.
Why Americans should care: This signals that Europe is still battling inflation, just like the U.S. It also affects the strength of the dollar compared to the euro (EUR/USD fell -0.39%), which can make American goods more expensive for Europeans to buy.
Market reaction: This decision didn't cause a major stir in U.S. markets, as it was largely expected.

Overall, despite some global worries, U.S. stocks had a good week. The S&P 500 rose +0.77% and the Nasdaq Composite was up +1.04%. This suggests investors are still feeling optimistic about the U.S. economy, even with international headwinds. The "fear gauge," the VIX index, fell -7.28%, indicating less investor anxiety.`,
  sources: [
    {
        category: "Equity & Volatility Data - Yahoo Finance",
        sources: [
            "VIX Index (^VIX) - https://finance.yahoo.com/quote/^VIX",
            "Crude Oil (WTI) (CL=F) - https://finance.yahoo.com/quote/CL=F",
            "USD/JPY (USDJPY=X) - https://finance.yahoo.com/quote/USDJPY=X",
            "Bitcoin (USD) (BTC-USD) - https://finance.yahoo.com/quote/BTC-USD",
            "Gold (USD/oz) (GC=F) - https://finance.yahoo.com/quote/GC=F",
            "S&P 500 Index (^GSPC) - https://finance.yahoo.com/quote/^GSPC",
            "Nasdaq Composite Index (^IXIC) - https://finance.yahoo.com/quote/^IXIC",
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