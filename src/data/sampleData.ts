import { WeeklyDashboard } from '../types/marketData';

export const sampleDashboardData: WeeklyDashboard = {
  date: '2026-01-26',
  marketData: [
    {
      variable: 'S&P 500 Index',
      latestLevel: 4,850.00,
      weeklyChange: 1.2,
      ytdChange: 3.5
    },
    {
      variable: 'Nasdaq Composite Index',
      latestLevel: 15,200.00,
      weeklyChange: 1.8,
      ytdChange: 4.2
    },
    {
      variable: 'VIX Index',
      latestLevel: 14.50,
      weeklyChange: -5.2,
      ytdChange: -12.3
    },
    {
      variable: 'U.S. 10-Year Treasury Yield',
      latestLevel: 4.15,
      weeklyChange: 0.10,
      ytdChange: 0.25
    },
    {
      variable: '3-Month SOFR Rate',
      latestLevel: 5.25,
      weeklyChange: 0.00,
      ytdChange: 0.00
    },
    {
      variable: 'Gold (USD/oz)',
      latestLevel: 2,050.00,
      weeklyChange: 0.8,
      ytdChange: 2.1
    },
    {
      variable: 'Crude Oil (WTI)',
      latestLevel: 75.50,
      weeklyChange: -1.5,
      ytdChange: -3.2
    },
    {
      variable: 'USD/JPY',
      latestLevel: 148.50,
      weeklyChange: 0.3,
      ytdChange: 1.2
    },
    {
      variable: 'EUR/USD',
      latestLevel: 1.0850,
      weeklyChange: -0.2,
      ytdChange: -0.5
    },
    {
      variable: 'BBB U.S. Corporate OAS',
      latestLevel: 125,
      weeklyChange: -2,
      ytdChange: -8
    },
    {
      variable: 'U.S. High Yield OAS',
      latestLevel: 350,
      weeklyChange: -5,
      ytdChange: -15
    },
    {
      variable: 'Bitcoin (USD)',
      latestLevel: 42,500.00,
      weeklyChange: 2.5,
      ytdChange: 8.3
    }
  ],
  interpretation: 'Equity markets continued their upward trajectory this week, with the S&P 500 and Nasdaq both posting solid gains. The VIX declined further, indicating reduced market volatility and improved risk sentiment. Treasury yields edged higher as economic data remained resilient, while credit spreads tightened across both investment-grade and high-yield markets. Commodities showed mixed performance, with gold advancing while oil retreated. The dollar strengthened modestly against the yen but weakened slightly against the euro. Overall, markets appear to be trending positively, with risk assets benefiting from a favorable macro backdrop.',
  usNarrative: `The U.S. capital markets experienced a constructive week, driven by a combination of resilient economic data and continued optimism around monetary policy. The week's key economic releases painted a picture of an economy that remains on solid footing, though with some emerging signs of moderation.

**Key Economic Data Releases**

The week's economic calendar was headlined by several important data points. The latest Non-Farm Payrolls (NFP) report exceeded expectations, showing continued strength in the labor market. The unemployment rate held steady at historically low levels, while wage growth moderated slightly but remained above pre-pandemic trends. This labor market resilience has been a key factor supporting consumer spending and overall economic activity.

Inflation data, as measured by the Consumer Price Index (CPI), came in largely in line with expectations. Core inflation continued its gradual deceleration, providing the Federal Reserve with additional confidence that its policy measures are having the intended effect. The Producer Price Index (PPI) also showed signs of moderation, suggesting that pipeline inflationary pressures are easing.

Retail sales data for the month showed modest growth, indicating that consumer spending remains healthy despite some headwinds from higher interest rates. The ISM Manufacturing Index remained in contraction territory, though the pace of decline has slowed. The Services PMI, meanwhile, continued to indicate expansion, highlighting the ongoing shift in economic activity toward services.

**U.S. Political and Policy Developments**

Federal Reserve communications this week reinforced the central bank's data-dependent approach to monetary policy. Several Fed officials delivered speeches emphasizing the need to remain vigilant on inflation while acknowledging the progress made thus far. The Fed's latest meeting minutes revealed ongoing discussions about the appropriate pace of policy normalization, with most members favoring a gradual approach.

Fiscal policy developments remained relatively quiet, though there were continued discussions in Washington about potential budget measures. Regulatory actions in the financial sector continued to evolve, with several agencies providing additional guidance on implementation of recent rule changes.

The combination of solid economic fundamentals, moderating inflation, and a measured approach to monetary policy has created a favorable environment for risk assets. Equity markets have responded positively to this backdrop, while credit markets have also benefited from improved sentiment.`,
  globalEvents: `International developments this week had meaningful implications for U.S. financial markets, primarily through their impact on global risk sentiment and commodity prices.

**Central Bank Decisions Abroad**

The European Central Bank (ECB) maintained its current policy stance, keeping interest rates unchanged while signaling a continued focus on inflation management. The ECB's relatively hawkish tone, compared to market expectations, contributed to some strength in the euro against the dollar. This development had implications for U.S. exporters and multinational corporations with significant European exposure.

The Bank of Japan (BOJ) continued its ultra-accommodative monetary policy, maintaining negative interest rates and yield curve control measures. This policy divergence between the U.S. and Japan has been a key driver of the USD/JPY exchange rate, which moved higher this week.

**Geopolitical Developments**

Geopolitical tensions in key commodity-producing regions remained a focus for markets. Developments in the Middle East continued to influence oil prices, with WTI crude declining this week as concerns about supply disruptions eased somewhat. However, the situation remains fluid, and any escalation could quickly reverse this trend.

**Transmission Mechanisms**

These global events affected U.S. markets through several channels. The ECB's policy stance contributed to a modest strengthening of the euro, which in turn supported European equity markets and improved sentiment toward global risk assets more broadly. This positive spillover effect benefited U.S. equities, particularly those with international exposure.

Commodity price movements, driven in part by geopolitical developments, influenced inflation expectations and monetary policy outlooks. Lower oil prices helped ease some concerns about persistent inflationary pressures, supporting the case for a more accommodative Fed policy stance.

The policy divergence between major central banks continued to drive currency movements, with implications for U.S. corporate earnings and international trade flows.`,
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
      category: 'Market Data',
      sources: [
        'FRED (Federal Reserve Economic Data) - Treasury yields, interest rates',
        'Yahoo Finance - Equity indices, VIX, commodity prices',
        'WSJ Markets - Currency rates, corporate spreads',
        'MarketWatch - Real-time market data and indices'
      ]
    },
    {
      category: 'Economic Data',
      sources: [
        'Bureau of Labor Statistics (BLS) - Employment, CPI, PPI data',
        'Bureau of Economic Analysis (BEA) - GDP, PCE data',
        'Federal Reserve - Monetary policy, interest rate decisions',
        'ISM (Institute for Supply Management) - Manufacturing and Services PMI',
        'Conference Board - Consumer confidence, leading indicators'
      ]
    },
    {
      category: 'Policy and Analysis',
      sources: [
        'Federal Reserve Communications - Speeches, meeting minutes, policy statements',
        'Trading Economics - Economic calendar and data releases',
        'Bloomberg - Market analysis and financial news'
      ]
    }
  ]
};
