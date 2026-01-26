import { MarketDataPoint } from '../types/marketData';

interface MarketDataTableProps {
  data: MarketDataPoint[];
  date: string;
  interpretation: string;
}

export default function MarketDataTable({ data, date, interpretation }: MarketDataTableProps) {
  const formatNumber = (value: number | string): string => {
    if (typeof value === 'string') return value;
    if (value >= 1000) {
      return value.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    }
    return value.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  };

  const formatPercentage = (value: number): string => {
    const sign = value >= 0 ? '+' : '';
    return `${sign}${value.toFixed(2)}%`;
  };

  const getChangeColor = (value: number): string => {
    if (value > 0) return 'text-green-400';
    if (value < 0) return 'text-red-400';
    return 'text-text-secondary';
  };

  return (
    <section id="market-data" className="mb-12 scroll-mt-20">
      <div className="mb-6">
        <h2 className="text-4xl font-bold mb-2">Weekly Market Data Table</h2>
        <p className="text-text-secondary">
          <span className="font-semibold">Date:</span> {new Date(date).toLocaleDateString('en-US', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}
        </p>
      </div>

      <div className="overflow-x-auto mb-6">
        <table className="w-full border-collapse bg-secondary border border-border rounded-lg">
          <thead>
            <tr className="bg-accent">
              <th className="px-6 py-4 text-left font-semibold text-text-primary border-b border-border">Variable</th>
              <th className="px-6 py-4 text-right font-semibold text-text-primary border-b border-border">Latest Level</th>
              <th className="px-6 py-4 text-right font-semibold text-text-primary border-b border-border">% Change (Weekly)</th>
              <th className="px-6 py-4 text-right font-semibold text-text-primary border-b border-border">% Change (YTD)</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr 
                key={index} 
                className="border-b border-border hover:bg-accent/20 transition-colors"
              >
                <td className="px-6 py-4 text-text-primary font-medium">{row.variable}</td>
                <td className="px-6 py-4 text-right text-text-primary font-mono">{formatNumber(row.latestLevel)}</td>
                <td className={`px-6 py-4 text-right font-mono font-semibold ${getChangeColor(row.weeklyChange)}`}>
                  {formatPercentage(row.weeklyChange)}
                </td>
                <td className={`px-6 py-4 text-right font-mono font-semibold ${getChangeColor(row.ytdChange)}`}>
                  {formatPercentage(row.ytdChange)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="bg-secondary border border-border rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-3 text-text-primary">Interpretation Box</h2>
        <p className="text-text-secondary leading-relaxed">{interpretation}</p>
      </div>
    </section>
  );
}
