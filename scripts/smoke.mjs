// E0.2 validation rig — the headless acceptance gate for every milestone and
// every deploy. See docs/VALIDATION.md for the full playbook.
//
// Flow: bundle -> serve on a free port -> Playwright chromium -> ENTER ->
// invariants (console clean, updater wiring, draw-call budget) -> determinism
// (geomHash identical across two fresh loads) -> goldens (pixel-diff each
// bookmark against docs/smoke/goldens/<id>.png).
//
// Goldens will be recaptured wholesale when E1 (terrain incline) lands — the
// tolerance below protects against ACCIDENTAL drift, not intentional change.
//
//   node scripts/smoke.mjs                  # run the gate
//   node scripts/smoke.mjs --update-goldens # recapture goldens + budget baseline

import { spawn, execSync } from 'child_process';
import { createServer } from 'net';
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { chromium } from 'playwright';
import { PNG } from 'pngjs';
import pixelmatch from 'pixelmatch';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const smokeDir = join(root, 'docs/smoke');
const goldenDir = join(smokeDir, 'goldens');
const budgetPath = join(smokeDir, 'budget.json');

const UPDATE_GOLDENS = process.argv.includes('--update-goldens');
const DRAW_CALL_TOLERANCE_PCT = 10;
const PIXEL_THRESHOLD = 0.1;       // pixelmatch per-pixel colour-diff sensitivity (0-1)
const DIFF_PCT_TOLERANCE = 0.5;    // max % of pixels allowed to differ before a golden fails

// Hardcoded so a new subsystem added to only ONE of animate()/stepFrame (a
// D0-era bug class, see src/main.js) is caught deliberately rather than by
// accident — a mismatch here means main.js's updaters list changed and this
// script needs a conscious update, not a silent pass.
const EXPECTED_UPDATERS = [
  'controls', 'npcs', 'leithers', 'litter', 'shopfronts', 'sky', 'birds',
  'vermin', 'scenery', 'interact', 'proximityAudio', 'torch',
];

function getFreePort() {
  return new Promise((resolve, reject) => {
    const srv = createServer();
    srv.listen(0, () => {
      const { port } = srv.address();
      srv.close(() => resolve(port));
    });
    srv.on('error', reject);
  });
}

function waitForServer(url, timeoutMs = 10000) {
  const deadline = Date.now() + timeoutMs;
  return new Promise((resolve, reject) => {
    (function attempt() {
      fetch(url).then(() => resolve()).catch((err) => {
        if (Date.now() > deadline) reject(err);
        else setTimeout(attempt, 100);
      });
    })();
  });
}

async function bootPage(browser, port) {
  const context = await browser.newContext({ viewport: { width: 1280, height: 800 } });
  const page = await context.newPage();
  const consoleMessages = [];
  page.on('console', (msg) => {
    if (msg.type() === 'error') consoleMessages.push(msg.text());
  });
  page.on('pageerror', (err) => consoleMessages.push(String(err)));

  await page.goto(`http://localhost:${port}/`);
  await page.click('#title-enter');
  // The title card fades out over a real 0.9s CSS transition (src/index.html)
  // — irrelevant on a human's timescale but our screenshots are taken far
  // sooner than that, so kill the transition to make dismissal instantaneous.
  await page.evaluate(() => {
    const el = document.getElementById('title-card');
    if (el) el.style.transition = 'none';
  });
  await page.waitForFunction(() => !!(window.__mcgrotDebug && window.__mcgrotDebug.world));
  await page.evaluate(() => window.__mcgrotDebug.pauseAuto());
  return { context, page, consoleMessages };
}

async function getInvariants(page) {
  return page.evaluate(() => window.__mcgrotDebug.invariants());
}

function summarizeConsole(pageConsole, debugConsoleErrors) {
  return [...pageConsole, ...debugConsoleErrors];
}

function pctDiff(actual, baseline) {
  if (baseline === 0) return actual === 0 ? 0 : Infinity;
  return Math.abs(actual - baseline) / baseline * 100;
}

async function main() {
  const results = []; // { name, pass, detail }
  let server;
  let browser;
  let exitCode = 0;

  try {
    console.log('[smoke] bundling...');
    execSync('npm run bundle', { cwd: root, stdio: 'inherit' });

    const port = await getFreePort();
    console.log(`[smoke] starting server on :${port}`);
    server = spawn('python3', [join(root, 'scripts/serve.py'), String(port)], {
      cwd: join(root, 'src'),
      stdio: 'ignore',
    });
    await waitForServer(`http://localhost:${port}/`);

    browser = await chromium.launch();

    // --- boot #1: invariants + goldens ---
    const { context: ctx1, page: page1, consoleMessages: pc1 } = await bootPage(browser, port);
    const inv1 = await getInvariants(page1);

    const allConsoleErrors = summarizeConsole(pc1, inv1.consoleErrors);
    results.push({
      name: 'console clean',
      pass: allConsoleErrors.length === 0,
      detail: allConsoleErrors.length ? allConsoleErrors.join(' | ') : 'no errors',
    });

    const missingUpdaters = EXPECTED_UPDATERS.filter((n) => !inv1.updaterNames.includes(n));
    const extraUpdaters = inv1.updaterNames.filter((n) => !EXPECTED_UPDATERS.includes(n));
    results.push({
      name: 'updater wiring',
      pass: missingUpdaters.length === 0 && extraUpdaters.length === 0,
      detail: `expected ${EXPECTED_UPDATERS.length}, got ${inv1.updaterNames.length}` +
        (missingUpdaters.length ? `; missing: ${missingUpdaters.join(',')}` : '') +
        (extraUpdaters.length ? `; unexpected: ${extraUpdaters.join(',')}` : ''),
    });

    // --- bookmarks: draw-call budget + goldens ---
    if (!existsSync(goldenDir)) mkdirSync(goldenDir, { recursive: true });
    const bookmarks = await page1.evaluate(() => window.__mcgrotDebug.bookmarks);

    let budget = existsSync(budgetPath) ? JSON.parse(readFileSync(budgetPath, 'utf8')) : { tolerancePct: DRAW_CALL_TOLERANCE_PCT, perBookmark: {} };
    const drawCallsByBookmark = {};

    for (const bm of bookmarks) {
      await page1.evaluate((id) => window.__mcgrotDebug.gotoBookmark(id), bm.id);
      const inv = await getInvariants(page1);
      drawCallsByBookmark[bm.id] = inv.drawCalls;

      const baseline = budget.perBookmark[bm.id];
      if (UPDATE_GOLDENS || baseline === undefined) {
        results.push({ name: `budget:${bm.id}`, pass: true, detail: `baseline captured (${inv.drawCalls} draw calls)` });
      } else {
        const diff = pctDiff(inv.drawCalls, baseline.drawCalls);
        results.push({
          name: `budget:${bm.id}`,
          pass: diff <= budget.tolerancePct,
          detail: `${inv.drawCalls} draw calls vs baseline ${baseline.drawCalls} (${diff.toFixed(1)}% diff, tolerance ${budget.tolerancePct}%)`,
        });
      }

      const shot = await page1.screenshot();
      const goldenPath = join(goldenDir, `${bm.id}.png`);
      if (UPDATE_GOLDENS || !existsSync(goldenPath)) {
        writeFileSync(goldenPath, shot);
        results.push({ name: `golden:${bm.id}`, pass: true, detail: 'captured' });
        continue;
      }

      const actual = PNG.sync.read(shot);
      const expected = PNG.sync.read(readFileSync(goldenPath));
      if (actual.width !== expected.width || actual.height !== expected.height) {
        results.push({ name: `golden:${bm.id}`, pass: false, detail: `size mismatch ${actual.width}x${actual.height} vs ${expected.width}x${expected.height}` });
        continue;
      }
      const diffPng = new PNG({ width: actual.width, height: actual.height });
      const diffPixels = pixelmatch(actual.data, expected.data, diffPng.data, actual.width, actual.height, { threshold: PIXEL_THRESHOLD });
      const diffPct = (diffPixels / (actual.width * actual.height)) * 100;
      results.push({
        name: `golden:${bm.id}`,
        pass: diffPct <= DIFF_PCT_TOLERANCE,
        detail: `${diffPct.toFixed(3)}% pixels differ (tolerance ${DIFF_PCT_TOLERANCE}%)`,
      });
    }

    if (UPDATE_GOLDENS || Object.keys(budget.perBookmark).length === 0) {
      budget = {
        tolerancePct: DRAW_CALL_TOLERANCE_PCT,
        perBookmark: Object.fromEntries(bookmarks.map((bm) => [bm.id, { drawCalls: drawCallsByBookmark[bm.id] }])),
      };
      writeFileSync(budgetPath, JSON.stringify(budget, null, 2));
      console.log(`[smoke] wrote budget baseline to ${budgetPath}`);
    }

    await ctx1.close();

    // --- boot #2: determinism ---
    const { context: ctx2, page: page2 } = await bootPage(browser, port);
    const inv2 = await getInvariants(page2);
    await ctx2.close();

    results.push({
      name: 'determinism (geomHash)',
      pass: inv1.geomHash === inv2.geomHash,
      detail: `boot1=${inv1.geomHash} boot2=${inv2.geomHash}`,
    });

  } finally {
    if (browser) await browser.close();
    if (server) server.kill();
  }

  console.log('\n[smoke] results:');
  const nameWidth = Math.max(...results.map((r) => r.name.length), 10);
  for (const r of results) {
    console.log(`  ${r.pass ? 'PASS' : 'FAIL'}  ${r.name.padEnd(nameWidth)}  ${r.detail}`);
    if (!r.pass) exitCode = 1;
  }
  console.log(`\n[smoke] ${exitCode === 0 ? 'all checks passed' : 'FAILED'}`);
  process.exit(exitCode);
}

main().catch((err) => {
  console.error('[smoke] fatal error:', err);
  process.exit(1);
});
