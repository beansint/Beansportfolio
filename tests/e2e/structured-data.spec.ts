import { test, expect, type Page } from "@playwright/test";

/**
 * GEO / structured-data regression suite.
 *
 * Verifies the JSON-LD `@graph` exposes the entity signals AI search engines
 * (Google AI Overviews, Perplexity, Bing Copilot, ChatGPT) rely on for a
 * name -> overview: a rich Person, an authored ItemList of projects, and an
 * FAQPage. Also enforces the anti-hidden-content guard — every fact asserted
 * in an FAQ answer must appear in the visible page copy.
 */

type Node = { [key: string]: unknown };

// Narrowing helpers — JSON-LD is dynamic, so read fields through these.
const obj = (v: unknown): Node =>
  v && typeof v === "object" ? (v as Node) : {};
const arr = (v: unknown): unknown[] => (Array.isArray(v) ? v : []);
const str = (v: unknown): string => (typeof v === "string" ? v : "");

async function readGraph(page: Page): Promise<Node[]> {
  const blocks = await page
    .locator('script[type="application/ld+json"]')
    .allTextContents();
  expect(blocks.length, "at least one JSON-LD block").toBeGreaterThan(0);
  // Merge every @graph (and any bare nodes) into one flat list of nodes.
  const nodes: Node[] = [];
  for (const raw of blocks) {
    const json = obj(JSON.parse(raw)); // throws if malformed -> test fails
    const graph = json["@graph"] ? arr(json["@graph"]) : [json];
    nodes.push(...graph.map(obj));
  }
  return nodes;
}

const byType = (g: Node[], t: string): Node | undefined =>
  g.find((n) => n["@type"] === t);

function findPerson(g: Node[]): Node {
  const profile = g.find((n) => obj(n["mainEntity"])["@type"] === "Person");
  return profile ? obj(profile["mainEntity"]) : obj(byType(g, "Person"));
}

test.describe("structured data — JSON-LD @graph", () => {
  test("renders valid, parseable JSON-LD", async ({ page }) => {
    await page.goto("/");
    const g = await readGraph(page);
    expect(g.length).toBeGreaterThan(0);
  });

  test("Person entity carries accomplishments and identity signals", async ({
    page,
  }) => {
    await page.goto("/");
    const person = findPerson(await readGraph(page));
    expect(person["@type"], "Person node exists").toBe("Person");

    // Accomplishments (the core GEO ask).
    expect(arr(person["award"]).length).toBeGreaterThanOrEqual(2);
    const creds = arr(person["hasCredential"]);
    expect(creds.length).toBe(2);
    for (const raw of creds) {
      const c = obj(raw);
      expect(c["@type"]).toBe("EducationalOccupationalCredential");
      expect(str(c["name"]).length).toBeGreaterThan(0);
      expect(str(obj(c["recognizedBy"])["name"])).toContain(
        "Amazon Web Services"
      );
    }

    // Identity enrichment.
    expect(arr(person["knowsLanguage"])).toEqual(["English", "Filipino"]);
    expect(str(obj(person["nationality"])["name"])).toBe("Philippines");
    expect(str(person["mainEntityOfPage"])).toContain("#profilepage");
    expect(arr(person["alumniOf"]).length).toBeGreaterThanOrEqual(1);

    // sameAs: npm added, dead Twitter placeholder removed.
    const sameAs = JSON.stringify(person["sameAs"]);
    expect(sameAs).toContain("npmjs.com");
    expect(sameAs).toContain("github.com");
    expect(sameAs).not.toContain("twitter.com");
  });

  test("ItemList covers projects and attributes them to the person", async ({
    page,
  }) => {
    await page.goto("/");
    const list = byType(await readGraph(page), "ItemList");
    expect(list, "ItemList node exists").toBeTruthy();
    const items = arr(list!["itemListElement"]);
    expect(items.length).toBeGreaterThanOrEqual(6);
    for (const raw of items) {
      const item = obj(obj(raw)["item"]);
      expect(item["@type"]).toBe("SoftwareApplication");
      expect(str(obj(item["author"])["@id"])).toContain("#person");
      expect(str(item["keywords"]).length).toBeGreaterThan(0);
    }
  });

  test("FAQPage exposes conversational Q&A", async ({ page }) => {
    await page.goto("/");
    const faq = byType(await readGraph(page), "FAQPage");
    expect(faq, "FAQPage node exists").toBeTruthy();
    const qs = arr(faq!["mainEntity"]);
    expect(qs.length).toBeGreaterThanOrEqual(4);
    for (const raw of qs) {
      const q = obj(raw);
      expect(q["@type"]).toBe("Question");
      const answer = obj(q["acceptedAnswer"]);
      expect(answer["@type"]).toBe("Answer");
      expect(str(answer["text"]).length).toBeGreaterThan(0);
    }
  });
});

test.describe("anti-hidden-content guard", () => {
  test("a name-led definition sentence is visible", async ({ page }) => {
    await page.goto("/");
    const body = await page.locator("body").innerText();
    expect(body).toContain(
      "Vincent B. Pacaña is a full-stack developer based in Cebu City"
    );
  });

  test("facts asserted in FAQ answers appear in visible copy", async ({
    page,
  }) => {
    await page.goto("/");
    const body = (await page.locator("body").innerText()).toLowerCase();
    // Substance behind each FAQ answer must be visible, not schema-only.
    for (const fact of [
      "cebu city",
      "english and filipino",
      "freelance",
      "user-facing applications to backend",
    ]) {
      expect(body, `visible copy should contain: ${fact}`).toContain(fact);
    }
  });
});
