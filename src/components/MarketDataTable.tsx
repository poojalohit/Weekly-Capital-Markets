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

  // Format interpretation text with bullet points
  const formatInterpretation = (text: string) => {
    const lines = text.split('\n');
    const formatted: JSX.Element[] = [];
    let currentList: string[] = [];
    let listKey = 0;

    const flushList = () => {
      if (currentList.length > 0) {
        formatted.push(
          <ul key={`list-${listKey++}`} className="list-disc list-outside ml-6 mb-4 space-y-2">
            {currentList.map((item, idx) => (
              <li key={idx} className="text-text-secondary leading-relaxed">
                {formatInlineText(item)}
              </li>
            ))}
          </ul>
        );
        currentList = [];
      }
    };

    // Format inline bold text
    const formatInlineText = (text: string) => {
      const parts = text.split(/(\*\*[^*]+\*\*)/g);
      return parts.map((part, idx) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return <strong key={idx} className="text-text-primary font-semibold">{part.slice(2, -2)}</strong>;
        }
        return part;
      });
    };

    lines.forEach((line, index) => {
      const trimmedLine = line.trim();
      
      // Check if line is a header (starts and ends with **)
      if (trimmedLine.startsWith('**') && trimmedLine.endsWith('**') && trimmedLine.length > 4) {
        flushList();
        const header = trimmedLine.replace(/\*\*/g, '');
        formatted.push(
          <h4 key={`subheader-${index}`} className="text-lg font-semibold mt-4 mb-3 text-text-primary">
            {header}
          </h4>
        );
      }
      // Check if line is a bullet point
      else if (trimmedLine.startsWith('•') || trimmedLine.startsWith('-') || trimmedLine.startsWith('*')) {
        const bulletContent = trimmedLine.replace(/^[•\-\*]\s*/, '');
        currentList.push(bulletContent);
      }
      // Empty line
      else if (trimmedLine === '') {
        flushList();
      }
      // Regular paragraph text
      else {
        flushList();
        formatted.push(
          <p key={`para-${index}`} className="mb-3 text-text-secondary leading-relaxed">
            {formatInlineText(trimmedLine)}
          </p>
        );
      }
    });

    flushList(); // Flush any remaining list items

    return formatted;
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
        <div className="text-text-secondary leading-relaxed">
          {formatInterpretation(interpretation)}
        </div>
      </div>
    </section>
  );
}
