# Deployment Guide

This guide covers deploying the U.S. Capital Markets Dashboard to various platforms.

## GitHub Pages Deployment

### Option 1: Using GitHub Actions (Recommended)

1. Create a `.github/workflows/deploy.yml` file in your repository:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '18'
      - name: Install dependencies
        run: npm ci
      - name: Build
        run: npm run build
      - name: Setup Pages
        uses: actions/configure-pages@v4
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

2. Update `vite.config.ts` to set the correct base path:

```typescript
export default defineConfig({
  plugins: [react()],
  base: '/your-repo-name/', // Replace with your repository name
})
```

3. Enable GitHub Pages in your repository settings:
   - Go to Settings > Pages
   - Select "GitHub Actions" as the source

### Option 2: Manual Deployment

1. Build the project:
```bash
npm run build
```

2. Copy the contents of the `dist` folder to the `gh-pages` branch
3. Push to GitHub

## Netlify Deployment

1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy!

## Vercel Deployment

1. Import your GitHub repository to Vercel
2. Vercel will auto-detect Vite settings
3. Deploy!

## Manual Static Hosting

1. Build the project:
```bash
npm run build
```

2. Upload the contents of the `dist` folder to your hosting provider

## Updating Weekly Data

To update the dashboard with new weekly data:

1. Edit `src/data/sampleData.ts`
2. Update the `sampleDashboardData` object with:
   - New date
   - Updated market data values
   - New interpretation text
   - Updated U.S. narrative (350-450 words)
   - Updated global events (150-200 words)
   - Updated sources if needed
3. Commit and push changes
4. The site will automatically rebuild and deploy (if using CI/CD)

## Data Sources

Remember to update sources in `sampleDashboardData.sources` when adding new data sources. All data should be properly cited according to the requirements.
