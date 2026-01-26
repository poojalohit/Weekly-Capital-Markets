import { useState } from 'react';
import MarketDataTable from './components/MarketDataTable';
import USMarketNarrative from './components/USMarketNarrative';
import GlobalEvents from './components/GlobalEvents';
import CorporateFinanceConcepts from './components/CorporateFinanceConcepts';
import Sources from './components/Sources';
import { sampleDashboardData } from './data/sampleData';

function App() {
  const [dashboardData] = useState(sampleDashboardData);

  return (
    <div className="min-h-screen bg-primary">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <MarketDataTable 
          data={dashboardData.marketData}
          date={dashboardData.date}
          interpretation={dashboardData.interpretation}
        />
        
        <USMarketNarrative narrative={dashboardData.usNarrative} />
        
        <GlobalEvents content={dashboardData.globalEvents} />
        
        <CorporateFinanceConcepts concepts={dashboardData.corporateFinanceConcepts} />
        
        <Sources sources={dashboardData.sources} />
      </div>
    </div>
  );
}

export default App;
