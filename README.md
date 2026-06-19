This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Responsive design

The site is mobile-first and verified across a range of viewport widths (320 / 360 / 375 / 414 / 768 / 1024 / 1440 px). Key behaviours:

- **Navigation** collapses to an accessible hamburger drawer below the `md` breakpoint (Escape-to-close, focus-visible rings, `prefers-reduced-motion` aware) and shows inline links from `md` up.
- **No horizontal overflow** at any supported width.
- The viewport is configured via the `viewport` export in `app/layout.tsx` (zoom is intentionally **not** disabled, for accessibility).

## Testing

End-to-end responsive checks run with [Playwright](https://playwright.dev):

```bash
npm run test:e2e
```

The config (`playwright.config.ts`) starts the dev server automatically. Tests live in `tests/e2e/` and assert no horizontal overflow, correct mobile/desktop navigation, and that the hero avatar fits within the viewport. First-time setup may require `npx playwright install chromium`.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
