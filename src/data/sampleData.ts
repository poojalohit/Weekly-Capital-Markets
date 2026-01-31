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
  interpretation: 'The defining trend this week was "The Hedged Rally"—risk assets advanced while safe-haven demand intensified, an unusual combination. **ANOMALY #1:** Gold surged +4.4% despite S&P 500 +0.41% gains—typically inverse assets moving together signals investors are buying equities for upside while hedging tail risks (Middle East tensions, inflation uncertainty). **ANOMALY #2:** VIX rose +0.7% to 16.27 even as equities gained—normally VIX falls when stocks rise, suggesting options markets are pricing potential turbulence. Credit spreads tightened (BBB OAS -2 bps, HY -5 bps) confirming the equity rally, while oil +2.7% reflects geopolitical supply premium.',
  usNarrative: `**1. Trend Identification: "The Hedged Rally"**

This week's defining trend was a risk-on rally accompanied by elevated hedging activity—an unusual combination suggesting investors are buying equities while simultaneously protecting against downside.

• S&P 500 +0.41% → **Cause:** Resilient labor market data and stable Fed messaging → **Implication:** Soft landing narrative remains intact
• Nasdaq +0.91% → **Cause:** Strong mega-cap tech performance, AI-related earnings optimism → **Implication:** Growth stocks leading despite rate concerns
• **ANOMALY: Gold +4.4% during equity rally** → **Cause:** Geopolitical tensions (Middle East escalation fears) + inflation hedging → **Implication:** Investors don't fully trust the rally; maintaining tail-risk protection
• **ANOMALY: VIX +0.7% despite equity gains** → **Cause:** Options market pricing elevated tail risks → **Implication:** Unusual; normally VIX falls when stocks rise—suggests caution beneath the surface
• Credit spreads tightening (BBB -2 bps, HY -5 bps) → **Cause:** Strong corporate earnings, low default expectations → **Implication:** Credit market confirming equity rally's legitimacy

**2. Key Catalysts**

• **Federal Reserve Communications (Tuesday-Thursday)**
  - What happened: Multiple Fed officials (Powell, Waller, Bowman) emphasized data-dependency; no imminent rate cuts signaled
  - Market impact: 10Y Treasury yield stable at 4.15%; S&P 500 +0.2% on Wednesday post-Powell
  - Transmission mechanism: Steady Fed messaging → reduced rate uncertainty → lower equity risk premium → supportive for multiples
  - Forward implication: Markets now pricing 2-3 cuts in 2026; focus shifts to PCE inflation data

• **Labor Market Data (Thursday)**
  - What happened: Initial jobless claims came in at 215K (vs. 220K expected); continuing claims stable
  - Market impact: Equities +0.3% intraday; yields edged up 3 bps on "good news is good news" reaction
  - Transmission mechanism: Strong employment → consumer spending intact → earnings estimates hold → equities bid
  - Forward implication: Soft landing narrative reinforced; wage inflation remains key watch

• **Middle East Geopolitical Tensions (Ongoing)**
  - What happened: Elevated tensions in Red Sea shipping lanes; Houthi attacks on commercial vessels continued
  - Market impact: WTI crude +2.7% (+$1.65/barrel); Gold +4.4% on safe-haven bid; VIX +0.7%
  - Transmission mechanism: Supply disruption fears → energy prices bid → inflation expectations inch higher → Fed policy uncertainty
  - Forward implication: Geopolitical premium in oil (~$3-5/barrel); any escalation could spike to $80+

**3. Sentiment Analysis**

Market mood: **Cautiously Optimistic** (Risk-On with Active Hedging)

Evidence supporting this assessment:
• VIX at 16.27 (+13.5% YTD) elevated vs. 5-year average of ~15 → Hedging demand persists despite equity gains
• Credit spreads tightening: BBB OAS 125 bps (-8 bps YTD), HY 350 bps (-15 bps YTD) → Credit confirming equity rally
• **Anomalous signal:** Gold +21.4% YTD alongside positive equity returns → Unusual; suggests inflation/geopolitical hedging in portfolios
• Sector rotation: Tech (+1.2%) > Utilities (+0.3%) → Growth leadership = risk-on, but defensive sectors holding gains

**4. The "Fresh Money" Recommendation**

• **Recommendation:** Maintain equity exposure with hedges; overweight quality large-caps; add to IG credit
• **Rationale:** The gold/VIX anomalies suggest smart money is hedged. Economic fundamentals support equities, but tail risks (geopolitics, inflation surprise) warrant protection. IG credit offers equity-like returns with lower vol.
• **What to Avoid:** Long-duration Treasuries (if inflation surprises, they'll underperform); speculative small-caps (first to sell off if VIX spikes)
• **Risk to this view:** PCE inflation comes in hot → "higher for longer" narrative strengthens → risk-off rotation

**5. Forward Outlook**

Key events next week:
• **Friday: PCE Inflation** — Fed's preferred inflation gauge; consensus 2.8% YoY. Above 3.0% = hawkish repricing
• **Tuesday: Consumer Confidence** — Gauge of consumer health; watch for divergence from hard data
• **Wednesday: GDP Revision** — Q4 GDP second estimate; upside surprise = yields higher

• **Bull case:** PCE at or below 2.7% → Rate cut expectations rise → S&P breaks 7000 resistance
• **Bear case:** PCE above 3.0% → "Higher for longer" confirmed → Equities -2-3%, yields spike 10+ bps
• **Technical levels:** S&P 500 resistance at 7000 (psychological); support at 6800 (20-day MA)`,
  globalEvents: `**International Developments & U.S. Market Transmission**

**Middle East Geopolitical Tensions (Primary Driver)**
• What happened: Houthi attacks on Red Sea shipping continued; U.S./UK conducted retaliatory strikes; Iran tensions elevated
• U.S. market impact chain:
  - Commodities: WTI crude +2.7% (+$1.65) on supply disruption premium → adds ~5 bps to inflation expectations
  - Gold: +4.4% on safe-haven flows → anomalous given equity gains; signals hedging demand
  - Equities: Energy sector +1.8% outperformance; airlines/transports -0.5% on fuel cost concerns
  - Treasuries: Mild flight-to-quality bid → 10Y yield capped despite strong data

**European Central Bank Policy (Thursday)**
• What happened: ECB held rates at 4.0%; Lagarde emphasized "data-dependent" but no imminent cuts
• U.S. market impact chain:
  - FX: EUR/USD stable at 1.08; validates global "higher for longer" regime
  - Treasuries: Supports view that U.S. yields have floor; 10Y-Bund spread stable at ~180 bps
  - Equities: Neutral impact; European stability supports global risk sentiment

**Bank of Japan Stance**
• What happened: BOJ maintained ultra-loose policy; yen remained weak vs. USD
• U.S. market impact chain:
  - FX: USD/JPY +0.3% to 152.9 → yen carry trade remains attractive funding source
  - Risk assets: Yen weakness → carry trade flows into U.S. equities → supportive of valuations
  - Transmission: BOJ accommodation = global liquidity support

**China Economic Data**
• What happened: Manufacturing PMI at 49.2 (contraction); services holding at 50.5
• U.S. market impact chain:
  - Commodities: Copper flat; iron ore weak → reflects tepid China demand
  - Multinationals: Modest headwind for companies with China exposure
  - Fed implications: Weak China = disinflationary impulse globally`,
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