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
// E2a: atmosphere's date-seeded start hour would otherwise change the
// goldens (and the facade-darkening pose below) every day. Pinned
// immediately after pauseAuto(), before any capture.
const SMOKE_HOUR = 13;
const NIGHT_LUMINANCE_RATIO_MAX = 45; // % — the 6% dimming-test regression this milestone fixes
const TORCH_HOUR = 3; // deep night — daylight ambient/hemi/sun are all near-zero here
const TORCH_EYE_HEIGHT = 1.7; // matches src/debug.js's EYE_HEIGHT
const TORCH_STAND_OFF = 2; // metres from the litter comic — well inside the ~6.5m torch reach at night
const TORCH_MIN_RATIO = 2.5; // E2b acceptance criterion 3

// Hardcoded so a new subsystem added to only ONE of animate()/stepFrame (a
// D0-era bug class, see src/main.js) is caught deliberately rather than by
// accident — a mismatch here means main.js's updaters list changed and this
// script needs a conscious update, not a silent pass.
const EXPECTED_UPDATERS = [
  'controls', 'npcs', 'leithers', 'litter', 'shopfronts', 'sky', 'atmosphere',
  'birds', 'vermin', 'scenery', 'interact', 'proximityAudio', 'torch',
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
  // Pin the clock before any capture — see SMOKE_HOUR above.
  await page.evaluate((h) => window.__mcgrotDebug.setTime(h), SMOKE_HOUR);
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

// Mean perceptual luminance over the upper half of a captured frame — the
// half dominated by façade and sky rather than road, which is what the E2a
// brief's anti-regression measures (the finding: dimming lights alone left
// every unlit façade pixel-identical to full daylight).
// Mean luminance over a centred crop — used for the torch-pool check below,
// where the surface of interest is whatever the camera is pointed straight
// at (not the upper-half facade/sky split the day/night check cares about).
function meanLuminanceCenterCrop(png, fracW, fracH) {
  const { width, height, data } = png;
  const x0 = Math.floor(width * (1 - fracW) / 2), x1 = Math.floor(width * (1 + fracW) / 2);
  const y0 = Math.floor(height * (1 - fracH) / 2), y1 = Math.floor(height * (1 + fracH) / 2);
  let sum = 0, count = 0;
  for (let y = y0; y < y1; y++) {
    for (let x = x0; x < x1; x++) {
      const i = (y * width + x) * 4;
      sum += 0.2126 * data[i] + 0.7152 * data[i + 1] + 0.0722 * data[i + 2];
      count++;
    }
  }
  return count ? sum / count : 0;
}

function meanLuminanceUpperHalf(png) {
  const { width, height, data } = png;
  const halfH = Math.floor(height / 2);
  let sum = 0;
  const count = halfH * width;
  for (let y = 0; y < halfH; y++) {
    for (let x = 0; x < width; x++) {
      const i = (y * width + x) * 4;
      sum += 0.2126 * data[i] + 0.7152 * data[i + 1] + 0.0722 * data[i + 2];
    }
  }
  return count ? sum / count : 0;
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
    const shotsByBookmark = {}; // raw PNG buffers, for the facade-darkening check below

    for (const bm of bookmarks) {
      await page1.evaluate((id) => window.__mcgrotDebug.gotoBookmark(id), bm.id);
      const inv = await getInvariants(page1);

      // A scene bookmark can NEVER legitimately render nothing. Zero draw calls
      // means the frame came up empty — a transient WebGL/GPU capture failure
      // (seen under GPU contention when another context is live). Fail loudly
      // and do NOT let it overwrite a good golden/baseline: --update-goldens
      // silently baking a blank frame is exactly the kind of silent corruption
      // this rig exists to prevent. Leaving it out of drawCallsByBookmark keeps
      // the 0 out of the rebuilt budget (the prior baseline is preserved below).
      if (inv.drawCalls === 0) {
        results.push({ name: `render:${bm.id}`, pass: false, detail: 'rendered 0 draw calls (empty frame — capture/GPU failure); golden NOT written' });
        continue;
      }
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
      shotsByBookmark[bm.id] = shot;
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

    // --- E2a: clock pinning + sky/fog seam + the facade-darkening regression ---
    const invAfterBookmarks = await getInvariants(page1);
    results.push({
      name: 'time pinned',
      pass: invAfterBookmarks.time === SMOKE_HOUR && invAfterBookmarks.rate === 0,
      detail: `time=${invAfterBookmarks.time}, rate=${invAfterBookmarks.rate} (expected ${SMOKE_HOUR}, 0)`,
    });
    results.push({
      name: 'sky/fog linked',
      pass: !!invAfterBookmarks.skyFogLinked,
      detail: invAfterBookmarks.skyFogLinked ? 'uFog uniform === scene.fog.color' : 'sky dome uFog uniform is NOT the same object as scene.fog.color — see "THE SEAM" in src/sky.js',
    });

    const dayShot = shotsByBookmark['mid-805-far'];
    if (dayShot) {
      await page1.evaluate(() => window.__mcgrotDebug.setTime(22));
      await page1.evaluate((id) => window.__mcgrotDebug.gotoBookmark(id), 'mid-805-far');
      const nightShot = await page1.screenshot();
      const dayLum = meanLuminanceUpperHalf(PNG.sync.read(dayShot));
      const nightLum = meanLuminanceUpperHalf(PNG.sync.read(nightShot));
      const ratio = dayLum > 0 ? (nightLum / dayLum) * 100 : 0;
      results.push({
        name: 'night darkens facades',
        pass: ratio <= NIGHT_LUMINANCE_RATIO_MAX,
        detail: `22:00 mean luminance is ${ratio.toFixed(1)}% of ${SMOKE_HOUR}:00's (${nightLum.toFixed(1)} vs ${dayLum.toFixed(1)}; must be <=${NIGHT_LUMINANCE_RATIO_MAX}%)`,
      });
    } else {
      results.push({ name: 'night darkens facades', pass: false, detail: `mid-805-far screenshot unavailable (its render check above failed)` });
    }

    // --- E2b: the torch demonstrably lights a readable surface ---
    // Stand close to a litter comic at deep night (daylight terms are all
    // near-zero here, isolating the torch's own contribution), then compare
    // against the identical pose with the torch light zeroed out. This is
    // the one check in the suite that must be shown to fail if any of the
    // six MeshLambertMaterial conversions is reverted — a lit comic close
    // enough to read only if the torch is actually reaching it.
    const torchPose = await page1.evaluate(({ hour, eyeHeight, standOff }) => {
      const dbg = window.__mcgrotDebug;
      dbg.setTime(hour);
      const items = dbg.litter.items;
      if (!items.length) return null;
      // Pick the comic farthest from any NPC — NPCs carry an always-bright
      // world-space name/occupation sprite label plus a DOM interact prompt
      // when the camera is close, neither of which respond to scene light;
      // either one sitting in the crop would swamp this luminance read with
      // brightness that has nothing to do with the torch.
      const npcPositions = dbg.npcs.npcs.map((n) => ({ x: n.group.position.x, z: n.group.position.z }));
      let best = items[0], bestDist = -1;
      for (const it of items) {
        let minD = Infinity;
        for (const p of npcPositions) minD = Math.min(minD, Math.hypot(it.x - p.x, it.z - p.z));
        if (minD > bestDist) { bestDist = minD; best = it; }
      }
      // Stand just south of the comic, facing north at it — direction doesn't
      // matter here, only distance (well inside torch reach) and that the
      // comic fills the centre of frame.
      const px = best.x, pz = best.z + standOff;
      const groundY = dbg.world.groundHeight ? dbg.world.groundHeight(px, pz) : 0;
      dbg.camera.position.set(px, groundY + eyeHeight, pz);
      // Look down at the comic's own near-ground height (src/litter.js sits
      // it at groundY+0.055), not eye height — the earlier version aimed
      // level-forward, so the comic (lying flat, barely visible edge-on from
      // eye height anyway) ended up below the frame instead of centred.
      dbg.camera.lookAt(best.x, groundY + 0.055, best.z);
      return { x: best.x, z: best.z, nearestNpcDist: bestDist };
    }, { hour: TORCH_HOUR, eyeHeight: TORCH_EYE_HEIGHT, standOff: TORCH_STAND_OFF });

    if (torchPose) {
      // Standing this close to a litter comic can also put the camera inside
      // an NPC's proximity-prompt radius — interact.js's per-frame updater
      // re-shows that DOM overlay every stepFrame while in range, so hiding
      // it once before the settle loop doesn't stick; it has to be the very
      // last thing done before each screenshot. It's a fixed-brightness DOM
      // element on top of the canvas, untouched by any scene light, so left
      // visible it would swamp a centre-crop luminance read.
      const hidePrompt = () => page1.evaluate(() => {
        const el = document.getElementById('npc-prompt');
        if (el) el.style.display = 'none';
      });
      // Separate evaluate() round-trips so the browser actually gets a
      // macrotask tick between frames — a tight synchronous stepFrame loop
      // never lets the comic's lazily-loaded texture finish decoding/
      // uploading (see settleAt's own note in src/debug.js for the same
      // race, found and fixed during this milestone).
      for (let i = 0; i < 40; i++) {
        await page1.evaluate((i) => window.__mcgrotDebug.stepFrame(1 / 60, i / 60), i);
      }
      await hidePrompt();
      const torchOnShot = await page1.screenshot();
      const torchOnLum = meanLuminanceCenterCrop(PNG.sync.read(torchOnShot), 0.3, 0.3);

      // Zero the torch and render directly (renderer.render, not stepFrame) —
      // the 'torch' and 'atmosphere' updaters both recompute the light's
      // intensity/distance from time-of-day every stepFrame call, so going
      // through stepFrame here would just have them overwrite the override
      // before the next frame ever reached the screen. That also means the
      // 'interact' updater doesn't run either, so the prompt (hidden above)
      // can't be re-shown before this screenshot.
      await page1.evaluate(() => {
        const dbg = window.__mcgrotDebug;
        const torchLight = dbg.camera.children.find((c) => c.isPointLight);
        if (torchLight) torchLight.intensity = 0;
        dbg.renderer.render(dbg.camera.parent, dbg.camera);
      });
      const torchOffShot = await page1.screenshot();
      const torchOffLum = meanLuminanceCenterCrop(PNG.sync.read(torchOffShot), 0.3, 0.3);

      const torchRatio = torchOffLum > 0 ? torchOnLum / torchOffLum : (torchOnLum > 0 ? Infinity : 0);
      results.push({
        name: 'torch lights a readable surface',
        pass: torchRatio >= TORCH_MIN_RATIO,
        detail: `torch-on mean luminance ${torchOnLum.toFixed(1)} vs torch-off ${torchOffLum.toFixed(1)} (${torchRatio.toFixed(2)}x; must be >=${TORCH_MIN_RATIO}x)`,
      });
    } else {
      results.push({ name: 'torch lights a readable surface', pass: false, detail: 'no litter comic available to pose the camera at' });
    }

    if (UPDATE_GOLDENS || Object.keys(budget.perBookmark).length === 0) {
      const prev = budget.perBookmark || {};
      budget = {
        tolerancePct: DRAW_CALL_TOLERANCE_PCT,
        // For a bookmark that rendered fine, use its fresh count; for one that
        // failed the 0-draw-call guard above (absent from drawCallsByBookmark),
        // keep its prior baseline rather than clobbering it with a bad capture.
        perBookmark: Object.fromEntries(bookmarks
          .map((bm) => [bm.id, drawCallsByBookmark[bm.id] !== undefined
            ? { drawCalls: drawCallsByBookmark[bm.id] }
            : prev[bm.id]])
          .filter(([, v]) => v !== undefined)),
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
