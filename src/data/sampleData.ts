import { WeeklyDashboard } from '../types/marketData';

export const sampleDashboardData: WeeklyDashboard = {
  date: '2026-02-22',
  marketData: [
  {
    variable: "S&P 500 Index",
    latestLevel: 6909.509765625,
    weeklyChange: 0.4098014301220549,
    ytdChange: 0.19241689382943322
  },
  {
    variable: "Nasdaq Composite Index",
    latestLevel: 22886.0703125,
    weeklyChange: 0.5820585468030128,
    ytdChange: -2.2759637178185623
  },
  {
    variable: "VIX Index",
    latestLevel: 19.09000015258789,
    weeklyChange: -2.7013285625639973,
    ytdChange: 33.21702898970285
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
    latestLevel: 5059.2998046875,
    weeklyChange: 1.4599379261506067,
    ytdChange: 15.770799103683647
  },
  {
    variable: "Crude Oil (WTI)",
    latestLevel: 66.38999938964844,
    weeklyChange: 1.840768374446316,
    ytdChange: 14.564276989805641
  },
  {
    variable: "USD/JPY",
    latestLevel: 155.16000366210938,
    weeklyChange: 0.3018950558100446,
    ytdChange: -0.801078406295308
  },
  {
    variable: "EUR/USD",
    latestLevel: 1.1769136190414429,
    weeklyChange: -0.1671319050741744,
    ytdChange: 0.18594846962400233
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
    latestLevel: 67972.71875,
    weeklyChange: 1.5161781087193456,
    ytdChange: -22.324729737089026
  }
],
  interpretation: `**This Week's Theme: "Safety First, But`,
  usNarrative: `**1. What Happened This Week: A Broad Boost for Many Investments**

This week, many types of investments saw positive gains, suggesting a generally optimistic mood among investors. Stocks, commodities like oil, and even gold and Bitcoin all moved higher, while measures of market fear`,
  globalEvents: `This past week, global events nudged U.S. markets higher, though everyday`,
  sources: [
    {
        category: "Equity & Volatility Data - Yahoo Finance",
        sources: [
            "VIX Index (^VIX) - https://finance.yahoo.com/quote/^VIX",
            "S&P 500 Index (^GSPC) - https://finance.yahoo.com/quote/^GSPC",
            "Gold (USD/oz) (GC=F) - https://finance.yahoo.com/quote/GC=F",
            "USD/JPY (USDJPY=X) - https://finance.yahoo.com/quote/USDJPY=X",
            "Crude Oil (WTI) (CL=F) - https://finance.yahoo.com/quote/CL=F",
            "EUR/USD (EURUSD=X) - https://finance.yahoo.com/quote/EURUSD=X",
            "Bitcoin (USD) (BTC-USD) - https://finance.yahoo.com/quote/BTC-USD",
            "Nasdaq Composite Index (^IXIC) - https://finance.yahoo.com/quote/^IXIC"
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