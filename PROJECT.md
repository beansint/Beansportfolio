# SEO & Semantic Implementation Notes (Updated with your identity)

Current identity filled in:
- Name: Vincent B. Pacaña
- Role: Full Stack Developer
- Location: Cebu City, Philippines
- Email: vincentpacana0@gmail.com
- GitHub: https://github.com/beansint
- LinkedIn: https://linkedin.com/in/vincentpacanab

Still replace the remaining placeholders below.

## Files to update
- `public/robots.txt` → set to `https://www.vincentpacana.com/sitemap.xml` (done).
- `public/sitemap.xml` → set domain to `https://www.vincentpacana.com/` and lastmod to `2025-12-09` (update on next release as needed).
- `app/layout.tsx` → domain set to `https://www.vincentpacana.com`; still replace bio/tech/project placeholders in JSON-LD when ready.
- `app/components/Navbar.tsx` → nav links target `#professional`, `#personal`, and `#contact`.
- `app/components/*` → section `id`/`aria-labelledby` are set; ensure they still match your final content.
- Fonts: Montserrat (headings) and Poppins (body) added via `next/font/google`; body/headings wired in `globals.css`.
- Icons: Font Awesome used in `app/components/Education.tsx` via `react-icons`.
- Projects data updated to resume items; project images are rendered when `project.image` is provided in `DATA.projects` (fallback preview otherwise).

## Placeholder map
- Domain & assets: Domain set to `https://www.vincentpacana.com`. `[YOUR_PROFILE_IMAGE]` (path under `/public`).
- Tech stack: `[KEY_TECH_1]`, `[KEY_TECH_2]`, `[KEY_TECH_3]`.
- Bio: `[SHORT_BIO]`.
- Projects (used in JSON-LD): `[PROJECT_1_NAME]`, `[PROJECT_1_DESC]`, `[PROJECT_1_URL]`, `[PROJECT_2_*]`, `[PROJECT_3_*]`.
- Sitemap last modified: `[CURRENT_DATE_YYYY-MM-DD]` (set to today’s date when you finalize).

## How to replace
1) Update `app/layout.tsx` constants at the top with real values. **Important:** Replace `DOMAIN = "https://example.com"` with your actual domain URL (e.g., `"https://vincentpacana.com"`).
2) Put your profile image in `/public` and set `[YOUR_PROFILE_IMAGE]` to the filename (e.g., `profile.png`).
3) Replace project placeholders in `structuredData` with your top 3 projects (name, 1–2 sentence description, live URL).
4) Update domain in `robots.txt`, `sitemap.xml` (replace `https://example.com`), and ensure meta tags (canonical/OG/Twitter) use your real domain.
5) If you add project screenshots, ensure each `<Image>` or `<img>` has a descriptive `alt`, e.g., “Screenshot of [PROJECT NAME] dashboard showing analytics charts.”

## Semantics summary
- Single `<h1>` in `Hero` (`#home-title`).
- Section headings use `<h2>`; project cards use `<h3>`.
- Primary navigation uses `<nav><ul><li>` with anchor targets set to section IDs.
- Sections include `id` and `aria-labelledby` for clarity.

## Important Notes
- **Domain Fix:** The domain is currently set to `https://example.com` as a safe default to prevent runtime errors. This allows the app to run locally without crashing. Replace it with your actual domain before deploying.
- The `new URL(DOMAIN)` call in `app/layout.tsx` requires a valid URL format, so the placeholder must be a real URL structure.

## After updating
- Regenerate `public/sitemap.xml` lastmod with today’s date.
- Run `npm run lint` to ensure no type or lint issues.
- Deploy with your domain so canonical/OG URLs resolve correctly.

