# Data Cloud SQL Composer

A browser-based Salesforce Data Cloud SQL composer for Query Editor and Calculated Insights.

## Important deployment note

The frontend is static, but SQL generation calls Anthropic. Do not place an Anthropic API key in `index.html` or any browser JavaScript. This project includes a Vercel serverless endpoint at `api/generate.js`, which reads the key from an environment variable.

## Deploy from GitHub to Vercel

1. Create a new GitHub repository, for example `data-cloud-sql-composer`.
2. Upload all files and folders from this project, keeping the `api` folder intact.
3. In Vercel, select **Add New > Project**, import the GitHub repository, and deploy it.
4. In the Vercel project, open **Settings > Environment Variables**.
5. Add `ANTHROPIC_API_KEY` with your Anthropic API key.
6. Optionally add `ANTHROPIC_MODEL`; otherwise the server uses `claude-sonnet-4-6`.
7. Redeploy the project after adding the environment variable.

## Local test

Install Vercel CLI and run:

```bash
npm install -g vercel
vercel dev
```

Create `.env.local` from `.env.example` and put your real API key in it. Never commit `.env.local`.

## GitHub Pages limitation

GitHub Pages can display `index.html`, but it cannot run the serverless endpoint in `api/generate.js`. Therefore the complete AI-enabled app should be deployed to Vercel (or another backend-capable platform) from the GitHub repository.
