import { Source } from '../types/marketData';

interface SourcesProps {
  sources: Source[];
}

export default function Sources({ sources }: SourcesProps) {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-6 text-text-primary">Part 5 — Source Discipline</h2>
      <div className="bg-secondary border border-border rounded-lg p-8">
        <div className="space-y-6">
          {sources.map((category, index) => (
            <div key={index}>
              <h3 className="text-xl font-semibold mb-3 text-text-primary">{category.category}</h3>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                {category.sources.map((source, sourceIndex) => (
                  <li key={sourceIndex} className="leading-relaxed">{source}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
