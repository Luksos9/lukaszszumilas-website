# Launch checklist & cutover runbook

## 1. Things to set before launch (need your input)

| What | Where | Notes |
|------|-------|-------|
| **GA4 Measurement ID** | `src/data/site.ts` → `analytics.ga4Id` | Create a **new** GA4 property for this site. Do **not** reuse the luckyx.dev id. While empty, no analytics loads. |
| **Kit form id** | `src/data/site.ts` → `newsletter.kitFormId` | The "ServiceNow Accelerator" form id. While empty, the signup form is a visual placeholder (posts nowhere). |
| **Contact email** | `src/data/site.ts` → `email` | Currently `contact@lukaszszumilas.com` (placeholder). |
| **Course deep links** | `src/data/courses.ts` | Each card links to `luckyx.dev`. Swap for exact per-course URLs if you want. |
| **apex vs www** | `astro.config.mjs` `site` + `public/CNAME` | Currently apex (`lukaszszumilas.com`), `www` redirects to it. One-line change to flip. |

## 2. Content to review (optional but recommended)

- **Migrated post titles** — a few came across without punctuation (e.g. "ServiceNow API A Restaurant Analogy"). Edit the `title:` in `src/content/blog/*.md`.
- **Image alt text** — migrated images have empty `alt`. Add descriptions for accessibility/SEO.
- **The 2 AI posts** (`does-the-ai-have-my-servicenow-password.md`, `mcp-vs-diy-...md`) are AI-drafted starters in your voice — review/edit or set `draft: true` to hold them.
- **Page copy** (home / about / consulting / teaching) — first drafts in your voice; a writing-style pass is worth it.
- **CV PDF** — optional: drop `lukasz-szumilas-cv.pdf` in `public/files/` and restore the download button on `/about`.

## 3. Create the repo and deploy

```bash
# from the project root, after `git init` + first commit on main:
gh auth login                      # YOU must do this (your GitHub account)
gh repo create Luksos9/lukaszszumilas-website --public --source=. --remote=origin --push
```

Then in **GitHub → Settings → Pages → Source: GitHub Actions**. The push triggers
`.github/workflows/deploy.yml`. Verify the build is green and the site loads at the
`*.github.io` URL **before** attaching the domain.

## 4. DNS cutover (≈ zero downtime)

1. Lower the TTL on the current Ghost `@`/`www` records to 300s, ~24–48h ahead.
2. In **Settings → Pages**, add custom domain `lukaszszumilas.com` (the `public/CNAME`
   is already in the build).
3. Replace the Ghost DNS records with GitHub's:
   - `A  @  185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `AAAA  @  2606:50c0:8000::153`, `8001::153`, `8002::153`, `8003::153`
   - `CNAME  www  Luksos9.github.io`
4. Wait for the green DNS check, then tick **Enforce HTTPS**.
5. Keep Ghost live ~1–2 weeks as rollback insurance, then cancel.

## 5. Verify after cutover

- `https://lukaszszumilas.com` loads over HTTPS with a valid cert.
- Old URLs redirect: e.g. `/servicenow-api-a-restaurant-analogy/` → `/blog/...`, `/rss/` → `/rss.xml`, `/tag/servicenow/` → `/tags/servicenow/`.
- `www` 301s to apex.
- Resubmit `https://lukaszszumilas.com/sitemap-index.xml` in Google Search Console.
- GA4 Realtime shows your visit (once the id is set); a test newsletter signup confirms.

## 6. Rollback

Revert the DNS records to Ghost (fast, thanks to the lowered TTL).
