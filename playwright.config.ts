import { defineConfig, devices } from "@playwright/test";

/**
 * Playwright config for responsive / e2e checks.
 *
 * By default it spins up the Next.js dev server on :3000. Set
 * PLAYWRIGHT_BASE_URL to run against an already-running server (e.g. a prod
 * build on another port) — this also disables the managed webServer, avoiding
 * cross-project port-3000 collisions.
 */
const externalBaseURL = process.env.PLAYWRIGHT_BASE_URL;
const baseURL = externalBaseURL ?? "http://localhost:3000";

export default defineConfig({
  testDir: "./tests/e2e",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  reporter: "list",
  use: {
    baseURL,
    trace: "on-first-retry",
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
  // Only manage a server when not pointed at an external one.
  ...(externalBaseURL
    ? {}
    : {
        webServer: {
          command: "npm run dev",
          url: "http://localhost:3000",
          reuseExistingServer: !process.env.CI,
          timeout: 120_000,
        },
      }),
});
