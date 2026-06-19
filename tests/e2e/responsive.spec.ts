import { test, expect, type Page } from "@playwright/test";

/**
 * Mobile-responsiveness regression suite.
 *
 * Verifies the single-page portfolio adapts across a range of viewport widths
 * without horizontal overflow, and that navigation works on both mobile
 * (hamburger drawer) and desktop (inline links).
 */

const WIDTHS = [320, 360, 375, 414, 768, 1024, 1440];
const MOBILE_WIDTHS = WIDTHS.filter((w) => w < 768);
const DESKTOP_WIDTHS = WIDTHS.filter((w) => w >= 768);

async function hasHorizontalOverflow(page: Page): Promise<boolean> {
  return page.evaluate(() => {
    const doc = document.documentElement;
    // 1px tolerance for sub-pixel rounding.
    return doc.scrollWidth > doc.clientWidth + 1;
  });
}

test.describe("no horizontal overflow across screen sizes", () => {
  for (const width of WIDTHS) {
    test(`page does not scroll horizontally at ${width}px`, async ({ page }) => {
      await page.setViewportSize({ width, height: 900 });
      await page.goto("/");
      await page.waitForLoadState("networkidle");
      expect(await hasHorizontalOverflow(page)).toBe(false);
    });
  }
});

test.describe("navigation — mobile hamburger drawer", () => {
  for (const width of MOBILE_WIDTHS) {
    test(`hamburger toggles the drawer at ${width}px`, async ({ page }) => {
      await page.setViewportSize({ width, height: 900 });
      await page.goto("/");

      // Desktop inline links must be hidden below md.
      const desktopNav = page.locator("nav ul.hidden.md\\:flex");
      await expect(desktopNav).toBeHidden();

      // Hamburger is visible and is a proper >=44px touch target.
      const toggle = page.getByRole("button", { name: /open menu/i });
      await expect(toggle).toBeVisible();
      const box = await toggle.boundingBox();
      expect(box).not.toBeNull();
      expect(box!.width).toBeGreaterThanOrEqual(44);
      expect(box!.height).toBeGreaterThanOrEqual(44);

      // Drawer is closed initially, opens on tap.
      await expect(page.locator("#mobile-menu")).toHaveCount(0);
      await toggle.click();
      const drawer = page.locator("#mobile-menu");
      await expect(drawer).toBeVisible();
      await expect(drawer.getByRole("link", { name: "Professional" })).toBeVisible();
      await expect(drawer.getByRole("link", { name: "Personal" })).toBeVisible();
      await expect(drawer.getByRole("link", { name: "Contact" })).toBeVisible();

      // aria-expanded reflects state.
      await expect(page.getByRole("button", { name: /close menu/i })).toHaveAttribute(
        "aria-expanded",
        "true"
      );

      // Tapping a link closes the drawer.
      await drawer.getByRole("link", { name: "Contact" }).click();
      await expect(page.locator("#mobile-menu")).toHaveCount(0);
    });
  }

  test("Escape key closes the drawer", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 900 });
    await page.goto("/");
    await page.getByRole("button", { name: /open menu/i }).click();
    await expect(page.locator("#mobile-menu")).toBeVisible();
    await page.keyboard.press("Escape");
    await expect(page.locator("#mobile-menu")).toHaveCount(0);
  });
});

test.describe("navigation — desktop inline links", () => {
  for (const width of DESKTOP_WIDTHS) {
    test(`inline nav visible and hamburger hidden at ${width}px`, async ({ page }) => {
      await page.setViewportSize({ width, height: 900 });
      await page.goto("/");

      await expect(page.locator("nav ul.hidden.md\\:flex")).toBeVisible();
      await expect(page.getByRole("button", { name: /open menu/i })).toBeHidden();
    });
  }
});

test.describe("hero avatar fits the viewport", () => {
  for (const width of MOBILE_WIDTHS) {
    test(`avatar width <= viewport at ${width}px`, async ({ page }) => {
      await page.setViewportSize({ width, height: 900 });
      await page.goto("/");
      const avatar = page.locator("#home img").first();
      await expect(avatar).toBeVisible();
      const box = await avatar.boundingBox();
      expect(box).not.toBeNull();
      expect(box!.width).toBeLessThanOrEqual(width);
    });
  }
});

test.describe("anchor sections are reachable", () => {
  test("all nav target sections exist in the DOM", async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto("/");
    for (const id of ["home", "professional", "personal", "contact"]) {
      // Some sections may use different ids; assert at least the primary anchors resolve.
      const exists = await page.locator(`#${id}`).count();
      expect(exists, `#${id} should exist`).toBeGreaterThan(0);
    }
  });
});
