# ✅ Fully Automated Dashboard - Setup Complete!

Your U.S. Capital Markets Dashboard is now **fully automated**. Every Wednesday morning, the entire dashboard will refresh automatically with:

## What Gets Updated Automatically

✅ **Market Data (12 variables)**
- Latest levels fetched from APIs
- Weekly % change (calculated from last Wednesday)
- **YTD % change (calculated from Dec 31, 2025)** ✨

✅ **Interpretation Box**
- AI-generated 3-5 sentence analysis
- Explains market movements, trends, and divergences

✅ **U.S. Market Narrative (350-450 words)**
- AI-generated comprehensive analysis
- Includes Key Economic Data Releases section
- Includes U.S. Political and Policy Developments section
- Based on actual economic calendar data and market movements

✅ **Global Events Section (150-200 words)**
- AI-generated analysis of international developments
- Includes Central Bank Decisions, Geopolitical Developments
- Explains transmission mechanisms to U.S. markets
- Based on recent financial news

✅ **Date**
- Automatically set to current date

## Required Setup

### 1. OpenAI API Key (REQUIRED)
- Get your key: https://platform.openai.com/api-keys
- Add to GitHub Secrets as `OPENAI_API_KEY`
- **Cost:** ~$0.01-0.02 per weekly update (uses GPT-4o-mini)

### 2. FRED API Key (REQUIRED)
- Get your key: https://fred.stlouisfed.org/docs/api/api_key.html
- Add to GitHub Secrets as `FRED_API_KEY`
- **Cost:** Free

### 3. Optional APIs (Recommended)
- **Trading Economics API** → `TRADING_ECONOMICS_API_KEY` (for economic calendar)
- **News API** → `NEWS_API_KEY` (for financial news)
- **Exchange Rate API** → `EXCHANGE_RATE_API_KEY` (for currency rates)

## How It Works

1. **Every Wednesday at 9:00 AM UTC**, GitHub Actions triggers
2. Script fetches:
   - Market data from Yahoo Finance
   - Treasury yields from FRED
   - Economic calendar data
   - Financial news
3. AI generates:
   - Interpretation based on market movements
   - U.S. narrative based on economic data and news
   - Global events analysis
4. All data is updated in `src/data/sampleData.ts`
5. Changes are committed and pushed
6. Dashboard rebuilds and redeploys automatically

## Testing Locally

```bash
# Install dependencies
npm install

# Set environment variables
export OPENAI_API_KEY="your-key"
export FRED_API_KEY="your-key"

# Run update script
npm run update-data
```

## Manual Trigger

You can manually trigger the update from:
- GitHub → Actions → Weekly Market Data Update → Run workflow

## Cost Estimate

- **OpenAI API:** ~$0.01-0.02 per update (52 updates/year = ~$0.50-1.00/year)
- **Other APIs:** Free tiers are sufficient
- **Total:** Less than $1 per year! 🎉

## Notes

- YTD calculations are from **December 31, 2025** (end of previous year)
- Weekly changes are calculated from **last Wednesday**
- Narratives are generated fresh each week based on actual market data
- If APIs fail, the script uses fallback data to ensure the dashboard always updates

## Troubleshooting

If narratives aren't generating:
1. Check OpenAI API key is set correctly
2. Verify you have credits in your OpenAI account
3. Check GitHub Actions logs for errors

If market data is incorrect:
1. Verify FRED API key is set
2. Check Yahoo Finance API is accessible
3. Review GitHub Actions logs

---

**You're all set!** The dashboard will now update automatically every Wednesday. No manual work required! 🚀
