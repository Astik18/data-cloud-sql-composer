# Data Cloud SQL Composer — Puter.js Edition

This edition generates Salesforce Data Cloud Query Editor SQL and Calculated Insight SQL without a developer-owned Anthropic, OpenAI, or Gemini API key.

## How AI access works

- The page loads Puter.js from `https://js.puter.com/v2/`.
- A visitor signs in to Puter when they generate SQL.
- The developer has no AI API key and pays no AI bill.
- Each visitor uses their own Puter allowance or billed usage. Puter controls model availability and limits.

## Deploy on the existing Vercel project

1. Replace the repository's current `index.html` with this one.
2. Delete the `api` folder because it is no longer used.
3. Delete `package.json`, `vercel.json`, and `.env.example` if they were only used for the old Anthropic backend. They are not required for this static edition.
4. Remove `ANTHROPIC_API_KEY` from Vercel Environment Variables.
5. Commit the changes. Vercel will redeploy automatically.

## Deploy using GitHub Pages

1. Upload `index.html`, `.nojekyll`, and this README to the repository root.
2. Open GitHub repository **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select `main` and `/(root)`, then save.

## Local test

Opening `index.html` directly may work, but authentication popups are more reliable over HTTP. From this folder, run:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Important

There is no universal AI service that guarantees unlimited free usage for every user forever. This project removes the developer-owned API key and shifts AI usage to each signed-in Puter user.
