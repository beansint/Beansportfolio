// Single source of truth for the production origin. Used by metadata,
// sitemap, robots, and the OG image. Keep in sync with public/llms.txt
// (a static file that cannot import this).
// Apex is canonical; www 301-redirects to it at the Vercel domain level.
export const SITE_URL = "https://vincentpacana.com";
