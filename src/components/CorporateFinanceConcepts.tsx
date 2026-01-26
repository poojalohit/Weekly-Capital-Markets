import { CorporateFinanceConcept } from '../types/marketData';

interface CorporateFinanceConceptsProps {
  concepts: CorporateFinanceConcept[];
}

export default function CorporateFinanceConcepts({ concepts }: CorporateFinanceConceptsProps) {
  return (
    <section id="corporate-finance" className="mb-12 scroll-mt-20">
      <h2 className="text-3xl font-bold mb-6 text-text-primary">Corporate Finance Concepts</h2>
      <div className="space-y-6">
        {concepts.map((concept, index) => (
          <div key={index} className="bg-secondary border border-border rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3 text-text-primary">{concept.title}</h3>
            <p className="text-text-secondary leading-relaxed">{concept.explanation}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
