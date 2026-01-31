import { Source } from '../types/marketData';

interface SourcesProps {
  sources: Source[];
}

export default function Sources({ sources }: SourcesProps) {
  // Parse source string to extract text and URL
  const parseSource = (source: string) => {
    const urlMatch = source.match(/(https?:\/\/[^\s]+)/);
    if (urlMatch) {
      const url = urlMatch[1];
      const text = source.replace(` - ${url}`, '').replace(url, '').trim();
      return { text, url };
    }
    return { text: source, url: null };
  };

  // Get icon for category
  const getCategoryIcon = (category: string) => {
    if (category.includes('Yahoo Finance')) return '📈';
    if (category.includes('FRED')) return '🏦';
    if (category.includes('Economic')) return '📊';
    if (category.includes('Verification')) return '✅';
    return '📋';
  };

  return (
    <section id="sources" className="mb-12 scroll-mt-20">
      <h2 className="text-3xl font-bold mb-6 text-text-primary">Data Sources & Verification</h2>
      
      {/* Verification Note */}
      <div className="bg-accent/20 border border-accent rounded-lg p-4 mb-6">
        <p className="text-text-secondary text-sm">
          <strong className="text-text-primary">Data Verification:</strong> All market data is sourced from authoritative financial data providers. 
          Click any link below to verify current values against the original source. Data is updated every Wednesday at 9:00 AM UTC.
        </p>
      </div>

      <div className="bg-secondary border border-border rounded-lg p-8">
        <div className="grid gap-8 md:grid-cols-2">
          {sources.map((category, index) => (
            <div key={index} className="space-y-3">
              <h3 className="text-lg font-semibold text-text-primary flex items-center gap-2">
                <span>{getCategoryIcon(category.category)}</span>
                {category.category}
              </h3>
              <ul className="space-y-2">
                {category.sources.map((source, sourceIndex) => {
                  const { text, url } = parseSource(source);
                  return (
                    <li key={sourceIndex} className="text-sm leading-relaxed flex items-start gap-2">
                      <span className="text-text-muted mt-1">•</span>
                      <span className="text-text-secondary">
                        {text}
                        {url && (
                          <>
                            {' — '}
                            <a 
                              href={url} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-accent-blue hover:text-accent-blue/80 hover:underline transition-colors"
                            >
                              View Source ↗
                            </a>
                          </>
                        )}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer with timestamp */}
        <div className="mt-8 pt-6 border-t border-border">
          <p className="text-xs text-text-muted text-center">
            Market data is fetched from live APIs. Minor discrepancies may occur due to timing differences between data providers.
            For real-time quotes, please refer to the verification sources above.
          </p>
        </div>
      </div>
    </section>
  );
}
