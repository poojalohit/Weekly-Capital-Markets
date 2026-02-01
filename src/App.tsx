import { useState } from 'react';
import Navigation from './components/Navigation';
import MarketDataTable from './components/MarketDataTable';
import USMarketNarrative from './components/USMarketNarrative';
import GlobalEvents from './components/GlobalEvents';
import Sources from './components/Sources';
import { sampleDashboardData } from './data/sampleData';

function App() {
  const [dashboardData] = useState(sampleDashboardData);

  return (
    <div className="min-h-screen bg-primary">
      <Navigation lastUpdated={dashboardData.date} />
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <MarketDataTable 
          data={dashboardData.marketData}
          date={dashboardData.date}
          interpretation={dashboardData.interpretation}
        />
        
        <USMarketNarrative narrative={dashboardData.usNarrative} />
        
        <GlobalEvents content={dashboardData.globalEvents} />
        
        <Sources sources={dashboardData.sources} />
      </div>
    </div>
  );
}

export default App;
