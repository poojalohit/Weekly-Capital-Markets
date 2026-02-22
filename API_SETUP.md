# API Setup Guide for Automatic Weekly Updates

This dashboard can automatically update market data every Wednesday morning using various APIs. Follow these steps to set up automatic updates.

## Required API Keys

### 1. Google Gemini API (Required for AI-generated narratives) — FREE
**Required for:** Automatic generation of interpretation, U.S. narrative, and global events

1. Go to https://aistudio.google.com/apikey
2. Sign in with your Google account
3. Create an API key
4. Add it to GitHub Secrets as `GEMINI_API_KEY`
5. **Note:** Uses Gemini 1.5 Flash model. The free tier (15 requests/minute) is more than enough for weekly runs.

### 2. FRED API (Free)
**Required for:** Treasury yields, SOFR rates

1. Go to https://fred.stlouisfed.org/docs/api/api_key.html
2. Sign up for a free account
3. Generate an API key
4. Add it to GitHub Secrets as `FRED_API_KEY`

### 3. Trading Economics API (Optional - Free tier available)
**Required for:** Economic calendar data (NFP, CPI, PPI, etc.)

1. Go to https://tradingeconomics.com/api
2. Sign up for free tier
3. Get your API key
4. Add it to GitHub Secrets as `TRADING_ECONOMICS_API_KEY`

**Note:** Without this, narratives will use fallback data but may be less accurate.

### 4. News API (Optional - Free tier available)
**Required for:** Recent financial news for narrative context

1. Go to https://newsapi.org/
2. Sign up for free tier (100 requests/day)
3. Get your API key
4. Add it to GitHub Secrets as `NEWS_API_KEY`

**Note:** Without this, narratives will use fallback data but may be less current.

### 5. Exchange Rate API (Optional - Free tier available)
**Required for:** Currency rates (USD/JPY, EUR/USD)

1. Go to https://www.exchangerate-api.com/
2. Sign up for free tier (1,500 requests/month)
3. Get your API key
4. Add it to GitHub Secrets as `EXCHANGE_RATE_API_KEY`

**Note:** The script will work without this key using a fallback API, but rates may be less accurate.

### 6. Yahoo Finance (No API key needed)
**Used for:** Stock indices (S&P 500, Nasdaq), VIX, commodities (Gold, Oil), Bitcoin

No setup required - uses public Yahoo Finance endpoints.

## Setting Up GitHub Secrets

1. Go to your repository: https://github.com/poojalohit/Weekly-Capital-Markets
2. Click **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret**
4. Add each API key:
   - **Required:** `GEMINI_API_KEY` - Your Google Gemini API key (free)
   - **Required:** `FRED_API_KEY` - Your FRED API key
   - **Recommended:** `TRADING_ECONOMICS_API_KEY` - For economic calendar data
   - **Recommended:** `NEWS_API_KEY` - For financial news
   - **Optional:** `EXCHANGE_RATE_API_KEY` - For currency rates

## Data Sources That Require Manual Updates

Some data points are not available via free APIs and will need manual updates:

- **BBB U.S. Corporate OAS** - Requires Bloomberg Terminal or premium data service
- **U.S. High Yield OAS** - Requires Bloomberg Terminal or premium data service
- **3-Month SOFR Rate** - Can be fetched from FRED if you have the correct series ID

## Automatic Updates

The automatic update script now updates **EVERYTHING** automatically:
- ✅ Market data values (all 12 variables)
- ✅ Weekly percentage changes (calculated from last Wednesday)
- ✅ **YTD percentage changes (calculated from Dec 31, 2025)**
- ✅ Date
- ✅ **Interpretation text (3-5 sentences) - AI-generated**
- ✅ **U.S. Market Narrative (350-450 words) - AI-generated**
- ✅ **Global Events section (150-200 words) - AI-generated**

**No manual updates needed!** The entire dashboard refreshes automatically every Wednesday morning.

## Schedule

The workflow runs:
- **Every Wednesday at 9:00 AM UTC** (adjustable in `.github/workflows/weekly-update.yml`)
- Can be manually triggered from the Actions tab

## Testing the Update Script Locally

1. Install dependencies:
   ```bash
   npm install
   ```

2. Set environment variables:
   ```bash
   export GEMINI_API_KEY="your-gemini-key-here"
   export FRED_API_KEY="your-fred-key-here"
   export TRADING_ECONOMICS_API_KEY="your-key-here"  # optional
   export NEWS_API_KEY="your-key-here"  # optional
   export EXCHANGE_RATE_API_KEY="your-key-here"  # optional
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
