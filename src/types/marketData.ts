export interface MarketDataPoint {
  variable: string;
  latestLevel: number | string;
  weeklyChange: number;
  ytdChange: number;
}

export interface WeeklyDashboard {
  date: string;
  marketData: MarketDataPoint[];
  interpretation: string;
  usNarrative: string;
  globalEvents: string;
  sources: Source[];
}

export interface Source {
  category: string;
  sources: string[];
}
