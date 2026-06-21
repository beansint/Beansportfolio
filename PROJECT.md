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
- `app/layout.tsx` → Next.js Metadata API (title, description, keywords, canonical, OpenGraph, Twitter) sourced from `app/data.tsx`. OpenGraph/Twitter descriptions use the third-person, definition-first `profile.summary`. JSON-LD is injected as a script in `<body>` as a single `@graph` of three nodes:
  - `ProfilePage` → `mainEntity` `Person` with `description`/`disambiguatingDescription` (= `profile.summary`), `knowsAbout`, `knowsLanguage`, `nationality`, `mainEntityOfPage`, `address`, `image`, `alumniOf` (array: CIT-U as `CollegeOrUniversity`, prior schools as `EducationalOrganization`), `award` (`DATA.awards`), `hasCredential` (`EducationalOccupationalCredential` from `DATA.credentials` — the AWS Academy badges with Credly `url` + `recognizedBy`), and `sameAs` (GitHub, LinkedIn, npm).
  - `ItemList` of **all** linkable projects, each a `SoftwareApplication` with `author` → `#person` and `keywords` from its tech list.
  - `FAQPage` (`DATA.faq`) — conversational Q&A for AI answer engines. Every answer mirrors copy **visible** on the page (Hero/ShortProfile), keeping it within Google's structured-data policy (no hidden content).
- `app/sitemap.ts` → MetadataRoute sitemap, served at `/sitemap.xml`. `url` is `${SITE_URL}/` (trailing slash matches canonical); `lastModified: new Date()`.
- `app/robots.ts` → MetadataRoute robots, served at `/robots.txt`. Allows all crawlers; `sitemap` + `host` reference `SITE_URL`.
- `app/opengraph-image.tsx` → dynamic 1200×630 OG card via `next/og`; auto-wired to both `og:image` and `twitter:image`.

## GEO (AI answer engines)
- `public/llms.txt` → structured overview (summary, projects, skills, education, achievements, links) for ChatGPT / Perplexity / Claude. Note: most crawlers fetch HTML directly and largely ignore `llms.txt` (Google has said it won't use it); it's kept as a low-cost agent-routing surface, not a citation lever. The on-page JSON-LD `@graph` is the primary GEO signal.
- The `Person` `award` + `hasCredential` nodes and the `FAQPage` are what surface **accomplishments** to AI Overviews / Perplexity / ChatGPT when someone searches the name.
- `app/robots.ts` explicitly allows AI crawlers: GPTBot, OAI-SearchBot, ChatGPT-User, PerplexityBot, ClaudeBot, anthropic-ai, Google-Extended.
- **Off-page (bigger lever for name → overview, not in this repo):** a Wikidata entry, consistent name/bio/photo (NAP) across GitHub/LinkedIn/npm, and a couple of authored articles (dev.to/Medium) corroborate the entity across independent sources.

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
- `npm run test:e2e` — `tests/e2e/structured-data.spec.ts` asserts the JSON-LD `@graph` (Person `award`/`hasCredential`/`knowsLanguage`/`sameAs`, authored `ItemList`, `FAQPage`) and the anti-hidden-content guard. To run against a prod build on another port without the :3000 collision: `PLAYWRIGHT_BASE_URL=http://localhost:3111 npx playwright test`.
- Paste the live page into https://search.google.com/test/rich-results and the schema.org validator after each schema change.
