import { chromium } from "playwright";
import { pathToFileURL } from "node:url";
import { join } from "node:path";

const html = pathToFileURL(join("/workspace/.grok/og-card.html")).href;
const out = "/workspace/.grok/og-raw.png";

const browser = await chromium.launch({ args: ["--font-render-hinting=none"] });
const page = await browser.newPage({
  viewport: { width: 1200, height: 630 },
  deviceScaleFactor: 2,
});
await page.goto(html, { waitUntil: "load" });
await page.evaluate(() => document.fonts.ready);
await page.waitForTimeout(200);
await page.screenshot({ path: out, type: "png", omitBackground: false });
await browser.close();
console.log(`wrote ${out}`);
