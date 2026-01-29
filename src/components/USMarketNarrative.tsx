interface USMarketNarrativeProps {
  narrative: string;
}

export default function USMarketNarrative({ narrative }: USMarketNarrativeProps) {
  // Convert markdown-style formatting to JSX
  const formatText = (text: string) => {
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
      
      // Check if line is a numbered section header (e.g., **1. Trend Identification: "Title"**)
      if (/^\*\*\d+\.\s+/.test(trimmedLine) && trimmedLine.endsWith('**')) {
        flushList();
        const header = trimmedLine.replace(/\*\*/g, '');
        formatted.push(
          <h3 key={`header-${index}`} className="text-xl font-bold mt-8 mb-4 text-accent-blue border-b border-border pb-2">
            {header}
          </h3>
        );
      }
      // Check if line is a regular header (starts and ends with **)
      else if (trimmedLine.startsWith('**') && trimmedLine.endsWith('**') && trimmedLine.length > 4) {
        flushList();
        const header = trimmedLine.replace(/\*\*/g, '');
        formatted.push(
          <h4 key={`subheader-${index}`} className="text-lg font-semibold mt-6 mb-3 text-text-primary">
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
          <p key={`para-${index}`} className="mb-4 text-text-secondary leading-relaxed">
            {formatInlineText(trimmedLine)}
          </p>
        );
      }
    });

    flushList(); // Flush any remaining list items

    return formatted;
  };

  return (
    <section id="us-narrative" className="mb-12 scroll-mt-20">
      <h2 className="text-3xl font-bold mb-6 text-text-primary">Market Analysis & Commentary</h2>
      <div className="bg-secondary border border-border rounded-lg p-8">
        <div className="prose prose-invert max-w-none">
          {formatText(narrative)}
        </div>
      </div>
    </section>
  );
}
