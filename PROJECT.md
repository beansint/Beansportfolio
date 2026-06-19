# SEO, GEO & Analytics — Implementation Notes

Status: **implemented**. This documents the current setup (no outstanding placeholders).

## Identity
- Name: Vincent B. Pacaña
- Role: Full Stack Developer
- Location: Cebu City, Philippines
- Email: vincentpacana0@gmail.com
- GitHub: https://github.com/beansint
- LinkedIn: https://linkedin.com/in/vincentpacanab
- Production domain: **https://vincentpacana.com** (apex is canonical; `www` 301-redirects to it at the Vercel domain level)

## Single source of truth
- `app/site.ts` → `SITE_URL = "https://vincentpacana.com"`. Imported by `app/layout.tsx`, `app/sitemap.ts`, and `app/robots.ts`.
- `public/llms.txt` is a static file and cannot import `SITE_URL` — update it by hand if the domain changes.

## SEO
- `app/layout.tsx` → Next.js Metadata API (title, description, keywords, canonical, OpenGraph, Twitter) sourced from `app/data.tsx`. JSON-LD (`ProfilePage` + `Person` with `knowsAbout`/`alumniOf`/`address`/`image`/`sameAs`, plus an `ItemList` of top projects) is injected as a script in `<body>`.
- `app/sitemap.ts` → MetadataRoute sitemap, served at `/sitemap.xml`. `url` is `${SITE_URL}/` (trailing slash matches canonical); `lastModified: new Date()`.
- `app/robots.ts` → MetadataRoute robots, served at `/robots.txt`. Allows all crawlers; `sitemap` + `host` reference `SITE_URL`.
- `app/opengraph-image.tsx` → dynamic 1200×630 OG card via `next/og`; auto-wired to both `og:image` and `twitter:image`.

## GEO (AI answer engines)
- `public/llms.txt` → structured overview (summary, projects, skills, education, achievements, links) for ChatGPT / Perplexity / Claude.
- `app/robots.ts` explicitly allows AI crawlers: GPTBot, OAI-SearchBot, ChatGPT-User, PerplexityBot, ClaudeBot, anthropic-ai, Google-Extended.

## Analytics
- GA4 via `@next/third-parties/google` — loads in production only when `NEXT_PUBLIC_GA_ID` is set (see `.env.example`).
- Vercel Analytics + Speed Insights (`@vercel/analytics`, `@vercel/speed-insights`) — cookieless.
- Custom events via `sendGAEvent`: `resume_download`, `project_click`, `contact_submit`.

## Semantics
- Single `<h1>` in `Hero` (`#home-title`); section headings `<h2>`, project cards `<h3>`.
- Primary nav uses `<nav><ul><li>` anchored to section IDs; sections carry `id` + `aria-labelledby`.
- All images use `next/image` with descriptive `alt`.

## If the domain changes again
1. Update `SITE_URL` in `app/site.ts`.
2. Update the two URLs in `public/llms.txt`.
3. Update the production/redirect domains in Vercel and redeploy.
4. Re-validate structured data (https://search.google.com/test/rich-results) and resubmit the sitemap in Google Search Console.

## Verify
- `npm run build` (CI runs the same `next build`).
- Check `/sitemap.xml`, `/robots.txt`, `/llms.txt`, `/opengraph-image` resolve and use the apex domain.
