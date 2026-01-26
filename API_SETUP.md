# API Setup Guide for Automatic Weekly Updates

This dashboard can automatically update market data every Wednesday morning using various APIs. Follow these steps to set up automatic updates.

## Required API Keys

### 1. FRED API (Free)
**Required for:** Treasury yields, SOFR rates

1. Go to https://fred.stlouisfed.org/docs/api/api_key.html
2. Sign up for a free account
3. Generate an API key
4. Add it to GitHub Secrets as `FRED_API_KEY`

### 2. Exchange Rate API (Optional - Free tier available)
**Required for:** Currency rates (USD/JPY, EUR/USD)

1. Go to https://www.exchangerate-api.com/
2. Sign up for free tier (1,500 requests/month)
3. Get your API key
4. Add it to GitHub Secrets as `EXCHANGE_RATE_API_KEY`

**Note:** The script will work without this key using a fallback API, but rates may be less accurate.

### 3. Yahoo Finance (No API key needed)
**Used for:** Stock indices (S&P 500, Nasdaq), VIX, commodities (Gold, Oil), Bitcoin

No setup required - uses public Yahoo Finance endpoints.

## Setting Up GitHub Secrets

1. Go to your repository: https://github.com/poojalohit/Weekly-Capital-Markets
2. Click **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret**
4. Add each API key:
   - Name: `FRED_API_KEY`, Value: [your FRED API key]
   - Name: `EXCHANGE_RATE_API_KEY`, Value: [your Exchange Rate API key] (optional)

## Data Sources That Require Manual Updates

Some data points are not available via free APIs and will need manual updates:

- **BBB U.S. Corporate OAS** - Requires Bloomberg Terminal or premium data service
- **U.S. High Yield OAS** - Requires Bloomberg Terminal or premium data service
- **3-Month SOFR Rate** - Can be fetched from FRED if you have the correct series ID

## Narrative Updates

The automatic update script currently updates:
- ✅ Market data values
- ✅ Weekly and YTD percentage changes
- ✅ Date

**You still need to manually update:**
- Interpretation text (3-5 sentences)
- U.S. Market Narrative (350-450 words)
- Global Events section (150-200 words)

## Schedule

The workflow runs:
- **Every Wednesday at 9:00 AM UTC** (adjustable in `.github/workflows/weekly-update.yml`)
- Can be manually triggered from the Actions tab

## Testing the Update Script Locally

1. Install dependencies:
   ```bash
   npm install
   ```

2. Set environment variables (optional):
   ```bash
   export FRED_API_KEY="your-key-here"
   export EXCHANGE_RATE_API_KEY="your-key-here"
   ```

3. Run the update script:
   ```bash
   npm run update-data
   ```

4. Check `src/data/sampleData.ts` to see the updated values

## Troubleshooting

### API Rate Limits
- FRED API: 120 requests per minute (free tier)
- Exchange Rate API: 1,500 requests/month (free tier)
- Yahoo Finance: No official limits, but be respectful

### Data Not Updating
- Check GitHub Actions logs for errors
- Verify API keys are set correctly in Secrets
- Ensure the workflow has write permissions

### Incorrect Data
- Some APIs may have delays in data availability
- Verify data manually if it seems incorrect
- Consider adding data validation checks

## Future Enhancements

Potential improvements:
- Add AI-generated narratives using market data analysis
- Integrate with premium data providers for OAS spreads
- Add data validation and error handling
- Store historical data for better trend analysis
