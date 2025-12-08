# SEO & Semantic Implementation Notes (Placeholders Present)

This project includes SEO and semantic updates with placeholders you should replace. Update the items below with your real details.

## Files to update
- `public/robots.txt` → replace `[YOUR_DOMAIN]`.
- `public/sitemap.xml` → replace `[YOUR_DOMAIN]` and `[CURRENT_DATE_YYYY-MM-DD]`.
- `app/layout.tsx` → replace identity, tech stack, social links, profile image, bio, and project placeholders in meta tags and JSON-LD.
- `app/components/Navbar.tsx` → nav links target `#professional`, `#personal`, and `#contact`.
- `app/components/*` → section `id`/`aria-labelledby` are set; ensure they still match your final content.

## Placeholder map
- Identity: `[YOUR_NAME]`, `[YOUR_ROLE]`, `[YOUR_LOCATION]`, `[YOUR_EMAIL]`.
- Domain & assets: `[YOUR_DOMAIN]`, `[YOUR_PROFILE_IMAGE]` (path under `/public`).
- Tech stack: `[KEY_TECH_1]`, `[KEY_TECH_2]`, `[KEY_TECH_3]`.
- Bio: `[SHORT_BIO]`.
- Socials: `https://github.com/[YOUR_USERNAME]`, `https://linkedin.com/in/[YOUR_USERNAME]`.
- Projects (used in JSON-LD): `[PROJECT_1_NAME]`, `[PROJECT_1_DESC]`, `[PROJECT_1_URL]`, `[PROJECT_2_*]`, `[PROJECT_3_*]`.
- Sitemap last modified: `[CURRENT_DATE_YYYY-MM-DD]` (set to today’s date when you finalize).

## How to replace
1) Update `app/layout.tsx` constants at the top with real values.
2) Put your profile image in `/public` and set `[YOUR_PROFILE_IMAGE]` to the filename (e.g., `profile.png`).
3) Replace project placeholders in `structuredData` with your top 3 projects (name, 1–2 sentence description, live URL).
4) Set your domain/email in `robots.txt`, `sitemap.xml`, and meta tags (canonical/OG/Twitter).
5) If you add project screenshots, ensure each `<Image>` or `<img>` has a descriptive `alt`, e.g., “Screenshot of [PROJECT NAME] dashboard showing analytics charts.”

## Semantics summary
- Single `<h1>` in `Hero` (`#home-title`).
- Section headings use `<h2>`; project cards use `<h3>`.
- Primary navigation uses `<nav><ul><li>` with anchor targets set to section IDs.
- Sections include `id` and `aria-labelledby` for clarity.

## After updating
- Regenerate `public/sitemap.xml` lastmod with today’s date.
- Run `npm run lint` to ensure no type or lint issues.
- Deploy with your domain so canonical/OG URLs resolve correctly.

