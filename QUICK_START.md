# Quick Start Guide

## Getting Started

1. **Navigate to the project directory:**
   ```bash
   cd capital-markets-dashboard
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Visit `http://localhost:5173` to see the dashboard

## Updating Weekly Data

To update the dashboard with new weekly data (every Wednesday):

1. **Open the data file:**
   ```
   src/data/sampleData.ts
   ```

2. **Update the following fields:**
   - `date`: Update to the current week's date
   - `marketData`: Update all 12 variables with:
     - Latest closing levels
     - Week-over-week percentage changes
     - Year-to-date percentage changes (from Dec 31, 2025)
   - `interpretation`: 3-5 sentences interpreting the week's movements
   - `usNarrative`: 350-450 words on U.S. market developments
   - `globalEvents`: 150-200 words on global events affecting U.S. markets
   - `sources`: Update if using new data sources

3. **Save and commit:**
   The changes will be reflected immediately in development mode

## Data Sources to Use

### Market Data
- **FRED**: https://fred.stlouisfed.org/ (Treasury yields, rates)
- **Yahoo Finance**: https://finance.yahoo.com/ (Indices, VIX, commodities)
- **WSJ Markets**: https://www.wsj.com/markets (Currencies, spreads)
- **MarketWatch**: https://www.marketwatch.com/ (Real-time data)

### Economic Data
- **BLS**: https://www.bls.gov/ (Employment, CPI, PPI)
- **BEA**: https://www.bea.gov/ (GDP, PCE)
- **Federal Reserve**: https://www.federalreserve.gov/ (Policy, rates)
- **ISM**: https://www.ismworld.org/ (PMI data)
- **Trading Economics**: https://tradingeconomics.com/united-states/calendar (Economic calendar)

## Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment.

## Project Structure

- `src/components/` - React components for each section
- `src/data/` - Weekly market data (update here each week)
- `src/types/` - TypeScript type definitions
- `src/App.tsx` - Main application component

## Tips

- The dashboard automatically formats numbers and percentages
- Green indicates positive changes, red indicates negative
- All sections are responsive and work on mobile devices
- Use bullet points and tables as specified in the requirements
