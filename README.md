# lukaszszumilas.com

Personal brand site for **Lukasz Szumilas** — ServiceNow & AI Specialist and Udemy teacher.
Built with [Astro](https://astro.build), deployed as a static site to **GitHub Pages**
(same model as `luckyx.dev`). The personal site is the human-expert hub; it links out to
Lucky X / Udemy for courses rather than duplicating the catalog.

## Stack

- **Astro 6** (static output), Markdown blog via content collections
- Self-hosted fonts (DM Sans, Space Mono, Fraunces) via Fontsource
- `@astrojs/sitemap`, `@astrojs/rss`, `@astrojs/mdx`
- GitHub Actions → GitHub Pages, custom domain via `public/CNAME`

## Local development

Requires Node.js LTS (v20+).

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # static build to ./dist
npm run preview    # serve the built site
npm run check      # type + content schema check
```

## Project structure

```
src/
  pages/            Routes (index, about, consulting, teaching, blog, tags, contact, ...)
  layouts/          BaseLayout, PageLayout-style headers, BlogPostLayout
  components/        Header, Footer, Hero pieces, PostCard, NewsletterForm, ...
  content/blog/      Blog posts (Markdown). Schema in src/content.config.ts
  data/             site, nav, certs, clients, courses, redirects (typed config)
  styles/           tokens.css (brand DNA), global.css, prose.css
public/             CNAME, robots.txt, favicons, og-default.png, images/blog/
.github/workflows/  deploy.yml (Actions → Pages)
```

## Adding a blog post

Create `src/content/blog/<slug>.md`:

```md
---
title: "Your title"
description: "One sentence for SEO, social cards, and the post list."
pubDate: 2026-06-01
tags: ["servicenow"]        # or ["ai", "mcp"], etc.
heroImage: "/images/blog/your-image.png"   # optional
draft: false
---

Body in Markdown...
```

## Deployment

1. Repo: `Luksos9/lukaszszumilas-website`. In **Settings → Pages**, set
   **Source: GitHub Actions**.
2. Push to `main` → the workflow builds and deploys automatically.
3. Custom domain is pinned by `public/CNAME` (the Actions deploy ignores the
   Settings-UI CNAME, so the file is the source of truth).
4. DNS at the registrar:
   - `A  @  185.199.108.153 / 109.153 / 110.153 / 111.153`
   - `AAAA  @  2606:50c0:8000::153 / 8001::153 / 8002::153 / 8003::153`
   - `CNAME  www  Luksos9.github.io`
5. After the DNS check passes in Settings → Pages, enable **Enforce HTTPS**.

See `LAUNCH.md` for the full cutover sequence and pre-launch checklist.

## Content migration

The 22 ServiceNow posts were migrated from the old Ghost site by
`migration/migrate.mjs` (gitignored). Old root URLs (e.g. `/servicenow-api-.../`)
redirect to `/blog/...` via `src/data/redirects.mjs`, wired into `astro.config.mjs`.
