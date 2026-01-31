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
  interpretation: 'The defining trend this week was "Cautious Optimism" as risk assets advanced while defensive positioning remained elevated. The S&P 500 gained +0.41% and Nasdaq rose +0.91%, yet the VIX remains elevated at 16.27 (+13.5% YTD), suggesting investors are hedging against potential volatility. A notable correlation observation: Gold surged +4.4% this week (+21.4% YTD) even as equities rallied—an unusual divergence that suggests persistent safe-haven demand despite the risk-on move in stocks. Credit spreads continued to tighten (BBB OAS -2 bps, HY -5 bps), supporting the constructive risk appetite narrative.',
  usNarrative: `**1. Trend Identification: "The Cautious Rally"**

The defining trend this week was continued market resilience with an underlying tone of caution. Risk assets advanced, but the elevated VIX and strong gold performance suggest investors are maintaining hedges.

• S&P 500 rose +0.41% on the week, now +1.19% YTD
• Nasdaq outperformed at +0.91% weekly, +1.70% YTD
• Correlation Anomaly: Gold surged +4.4% this week even as equities rallied—unusual behavior suggesting persistent safe-haven demand
• VIX at 16.27 remains above historical averages, indicating hedging demand persists

**2. Key Catalysts**

The most impactful events this week:

• Fed Communications: Multiple Fed officials maintained data-dependent stance, keeping rate cut expectations in check
• Labor Market: Employment data showed continued resilience, supporting soft landing narrative
• Earnings Season: Corporate results largely beat expectations, but forward guidance showed caution
• Geopolitical: Middle East tensions remained elevated, supporting oil (+2.7%) and gold (+4.4%)

**3. Sentiment Analysis**

Market sentiment: Cautiously Optimistic (Risk-On with Hedges)

• VIX: At 16.27, elevated from year-start levels (+13.5% YTD) despite equity gains
• Credit Spreads: Tightening continues (BBB OAS 125 bps, -8 bps YTD)—constructive signal
• Gold: The +21.4% YTD surge suggests persistent demand for portfolio insurance
• Sector Leadership: Growth stocks outperforming value indicates risk appetite intact

**4. The "Fresh Money" Recommendation**

• Recommendation: Maintain balanced positioning; overweight quality equities selectively
• Rationale: Economic data supports continued expansion, but valuations are elevated. The unusual gold/equity correlation suggests maintaining some defensive exposure
• Avoid: Long-duration Treasuries (rate volatility persists); speculative small-caps (VIX elevation signals potential volatility ahead)
• Opportunity: Investment-grade credit offers attractive risk-adjusted returns with spreads still above long-term averages

**5. Forward Outlook**

Key items to monitor next week:

• Risk: Fed speakers could shift tone if inflation data surprises
• Risk: Geopolitical escalation could spike oil prices and volatility
• Opportunity: Any equity pullback toward 6800 S&P would be a buying opportunity
• Data Watch: PCE inflation data, consumer confidence, housing starts
• Technical: S&P 500 approaching key resistance; watch for breakout or rejection`,
  globalEvents: `**International Developments**

Several global events had meaningful implications for U.S. markets this week:

**Central Bank Divergence**
• ECB maintained hawkish stance, signaling rates will stay higher for longer
• Transmission to U.S.: Euro strength vs. USD; modest pressure on U.S. export competitiveness
• BOJ continued ultra-accommodative policy, supporting USD/JPY carry trades
• Transmission to U.S.: Supports risk appetite as yen-funded carry trades remain attractive

**Geopolitical Developments**
• Middle East tensions remained elevated, creating uncertainty in energy markets
• Transmission to U.S.: WTI crude +2.7% this week; supports inflation concerns
• Oil price volatility affects Fed policy calculus and inflation expectations

**China Economic Signals**
• Chinese economic data showed continued mixed signals on growth recovery
• Transmission to U.S.: Impacts global growth expectations and commodity demand
• PBOC policy actions influence USD/CNY and broader EM currency complex

**Key Transmission Mechanisms This Week**
• Yields: Global central bank divergence contributed to Treasury yield stability
• Risk Sentiment: Geopolitical uncertainty added modest risk premium; gold +4.4%
• FX: Dollar showed mixed performance (stronger vs. EUR, stable vs. JPY)
• Commodities: Oil rose on supply concerns; gold surged on safe-haven demand`,
  corporateFinanceConcepts: [
    {
      title: 'Option-Adjusted Spread (OAS)',
      explanation: 'Option-Adjusted Spread (OAS) is a measure of the yield spread between a fixed-income security and a risk-free rate, adjusted for embedded options. Unlike nominal spreads, OAS accounts for the value of call or put options embedded in bonds, providing a more accurate assessment of credit risk and relative value. For example, a callable bond will have a higher OAS than a non-callable bond with the same credit quality, reflecting the additional risk to investors from potential early redemption. OAS is particularly important for analyzing mortgage-backed securities, callable corporate bonds, and other structured products where optionality significantly impacts pricing.'
    },
    {
      title: 'Risk-On / Risk-Off Sentiment',
      explanation: 'Risk-on/risk-off (RORO) sentiment refers to the collective market psychology that drives capital flows between risky and safe-haven assets. During risk-on periods, investors favor equities, high-yield bonds, commodities, and emerging market assets, driving their prices higher. Conversely, risk-off periods see capital flight to safe havens like U.S. Treasuries, gold, and the Japanese yen. This sentiment is often driven by macroeconomic factors, geopolitical events, central bank policies, and changes in growth expectations. The VIX index, credit spreads, and currency movements are key indicators of market risk sentiment, with lower VIX and tighter spreads typically signaling risk-on conditions.'
    },
    {
      title: 'Yield Curve Dynamics',
      explanation: 'The yield curve represents the relationship between interest rates (yields) and the time to maturity of debt securities, typically U.S. Treasury bonds. A normal yield curve slopes upward, with longer-term bonds offering higher yields to compensate for time and inflation risk. An inverted yield curve, where short-term rates exceed long-term rates, has historically been a reliable predictor of economic recessions. The shape of the yield curve reflects market expectations about future interest rates, inflation, and economic growth. Changes in the curve\'s slope, steepness, or curvature can signal shifts in monetary policy expectations, economic outlook, or risk perceptions, making it a crucial tool for financial market analysis and economic forecasting.'
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