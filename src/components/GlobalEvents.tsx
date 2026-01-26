interface GlobalEventsProps {
  content: string;
}

export default function GlobalEvents({ content }: GlobalEventsProps) {
  const formatText = (text: string) => {
    const lines = text.split('\n');
    const formatted: JSX.Element[] = [];
    let currentParagraph: string[] = [];

    lines.forEach((line, index) => {
      const trimmedLine = line.trim();
      
      // Check if line is a header (starts and ends with **)
      if (trimmedLine.startsWith('**') && trimmedLine.endsWith('**') && trimmedLine.length > 4) {
        // Header line
        if (currentParagraph.length > 0) {
          formatted.push(
            <p key={`para-${index}`} className="mb-4 text-text-secondary leading-relaxed">
              {currentParagraph.join(' ')}
            </p>
          );
          currentParagraph = [];
        }
        const header = trimmedLine.replace(/\*\*/g, '');
        formatted.push(
          <h3 key={`header-${index}`} className="text-2xl font-semibold mt-6 mb-4 text-text-primary">
            {header}
          </h3>
        );
      } else if (trimmedLine === '') {
        // Empty line - end current paragraph
        if (currentParagraph.length > 0) {
          formatted.push(
            <p key={`para-${index}`} className="mb-4 text-text-secondary leading-relaxed">
              {currentParagraph.join(' ')}
            </p>
          );
          currentParagraph = [];
        }
      } else {
        currentParagraph.push(trimmedLine);
      }
    });

    if (currentParagraph.length > 0) {
      formatted.push(
        <p key="last-para" className="mb-4 text-text-secondary leading-relaxed">
          {currentParagraph.join(' ')}
        </p>
      );
    }

    return formatted;
  };

  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-6 text-text-primary">Part 3 — Global Events Affecting U.S. Markets</h2>
      <div className="bg-secondary border border-border rounded-lg p-8">
        <div className="prose prose-invert max-w-none">
          {formatText(content)}
        </div>
      </div>
    </section>
  );
}
