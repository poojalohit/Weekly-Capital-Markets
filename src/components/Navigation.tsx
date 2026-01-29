import { useState, useEffect } from 'react';

interface NavigationProps {
  lastUpdated: string;
}

export default function Navigation({ lastUpdated }: NavigationProps) {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['market-data', 'us-narrative', 'global-events', 'corporate-finance', 'sources'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Account for fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const navItems = [
    { id: 'market-data', label: 'Market Data' },
    { id: 'us-narrative', label: 'Market Analysis' },
    { id: 'global-events', label: 'Global Events' },
    { id: 'corporate-finance', label: 'Finance Concepts' },
    { id: 'sources', label: 'Sources' }
  ];

  return (
    <nav className="sticky top-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-border shadow-lg">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between py-4 gap-4">
          <div className="flex items-center gap-4">
            <h1 className="text-2xl font-bold text-text-primary">U.S. Capital Markets Dashboard</h1>
            <span className="text-sm text-text-muted hidden md:inline">|</span>
            <span className="text-sm text-text-secondary">
              Last updated: {new Date(lastUpdated).toLocaleDateString('en-US', { 
                month: 'short', 
                day: 'numeric', 
                year: 'numeric'
              })}
            </span>
          </div>
          
          <div className="flex flex-wrap gap-2 md:gap-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeSection === item.id
                    ? 'bg-accent text-text-primary'
                    : 'text-text-secondary hover:text-text-primary hover:bg-secondary'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
