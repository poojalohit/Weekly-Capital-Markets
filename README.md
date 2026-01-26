# U.S. Capital Markets Dashboard

A professional weekly dashboard providing concise updates on U.S. capital markets, helping users interpret market data, understand macroeconomic drivers, and connect global events to U.S. financial conditions.

## Features

- **Weekly Market Data Table**: Comprehensive table tracking 12 key financial variables with latest levels, weekly changes, and year-to-date performance
- **U.S. Market Narrative**: Detailed 350-450 word analysis of U.S. economic developments and policy changes
- **Global Events Section**: 150-200 word summary of international developments affecting U.S. markets
- **Corporate Finance Concepts**: Educational explanations of advanced financial concepts
- **Source Citations**: Complete documentation of all data sources

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd capital-markets-dashboard
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
capital-markets-dashboard/
├── src/
│   ├── components/          # React components
│   │   ├── MarketDataTable.tsx
│   │   ├── USMarketNarrative.tsx
│   │   ├── GlobalEvents.tsx
│   │   ├── CorporateFinanceConcepts.tsx
│   │   └── Sources.tsx
│   ├── data/                # Sample data
│   │   └── sampleData.ts
│   ├── types/               # TypeScript types
│   │   └── marketData.ts
│   ├── App.tsx              # Main app component
│   ├── main.tsx            # Entry point
│   └── index.css           # Global styles
├── index.html
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── vite.config.ts
```

## Data Updates

To update the weekly dashboard data, modify the `sampleDashboardData` object in `src/data/sampleData.ts`. The data structure includes:

- Market data points (12 variables)
- Interpretation text
- U.S. market narrative
- Global events summary
- Corporate finance concepts
- Source citations

## Deployment

This project can be deployed to:

- **GitHub Pages**: Update `vite.config.ts` base path and deploy
- **Netlify**: Connect your GitHub repo for automatic deployments
- **Vercel**: Import the project for easy deployment
- **Any static hosting service**: Build the project and upload the `dist` folder

## Technologies Used

- React 18
- TypeScript
- Vite
- Tailwind CSS

## License

Private project
