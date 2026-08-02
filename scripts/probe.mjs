// Ad-hoc browser probe against a booted scene — the throwaway-measurement
// harness.
//
//   node scripts/probe.mjs -e "dbg.npcs.npcs.length"
//   node scripts/probe.mjs -f my-probe.mjs          # module default-exports async ({page, dbg...}) => any
//   node scripts/probe.mjs -e "..." --anchors=off --hour=3 --weather=haar
//   node scripts/probe.mjs -e "..." --mobile --shot=/tmp/look.png
//
// Why this exists: every review needs a one-off measurement (is the built
// scene where the layout says, does this flag change these pixels, does that
// gate go red), and each one was re-writing the same 30 lines of boot —
// freeze rAF, dismiss the title card, pauseAuto, pin the hour and weather.
// Getting that boot subtly wrong makes the measurement wrong, quietly: an
// unpinned clock alone moves the sky. One harness, used by all of them.
//
// The boot sequence mirrors scripts/smoke.mjs's bootPage + the mobile pass;
// keep them in step, since a probe that boots differently from the gate is a
// probe that cannot be used to explain the gate.

import { spawn } from 'child_process';
import { existsSync, writeFileSync } from 'fs';
import { dirname, join, resolve } from 'path';
import { fileURLToPath, pathToFileURL } from 'url';
import { createServer } from 'net';
import { chromium } from 'playwright';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');

const arg = (name, dflt = null) => {
  const hit = process.argv.find((a) => a.startsWith(`--${name}=`));
  if (hit) return hit.slice(name.length + 3);
  const i = process.argv.indexOf(`--${name}`);
  return i >= 0 ? true : dflt;
};
const flag = (name) => process.argv.includes(`--${name}`);
const pick = (short, long) => {
  const i = process.argv.findIndex((a) => a === short || a === `--${long}`);
  return i >= 0 ? process.argv[i + 1] : null;
};

const expr = pick('-e', 'eval');
const file = pick('-f', 'file');
const shot = arg('shot');
const hour = Number(arg('hour', 13));
const weather = arg('weather', 'overcast');
const anchors = arg('anchors', null);      // 'on' | 'off' | null (shipped default)
const mobile = flag('mobile');
const keepOpen = flag('keep-open');        // leave the browser up for a human look

if (!expr && !file && !shot) {
  console.error('nothing to do — pass -e <expression>, -f <module>, or --shot=<path>');
  process.exit(1);
}

const freePort = () => new Promise((res) => {
  const s = createServer();
  s.listen(0, () => { const p = s.address().port; s.close(() => res(p)); });
});

const port = await freePort();
spawn('node', [join(root, 'scripts/stamp-bundle.mjs')], { stdio: 'ignore' }); // no-op if already stamped
const server = spawn('python3', [join(root, 'scripts/serve.py'), String(port)], {
  cwd: join(root, 'src'), stdio: 'ignore',
});
const waitForServer = async () => {
  for (let i = 0; i < 100; i++) {
    try { const r = await fetch(`http://localhost:${port}/`); if (r.ok) return; } catch { /* not up yet */ }
    await new Promise((r) => setTimeout(r, 100));
  }
  throw new Error('server never came up');
};

let browser;
try {
  await waitForServer();
  browser = await chromium.launch();
  const context = await browser.newContext(
    mobile ? { viewport: { width: 390, height: 844 }, hasTouch: true }
           : { viewport: { width: 1280, height: 800 } }
  );
  // Set BEFORE any page script runs — main.js suppresses its first animate()
  // while this is set, so nothing renders on the wall clock and every frame
  // afterwards is one we asked for. Without it the scene drifts under you.
  await context.addInitScript((a) => {
    window.__mcgrotFreezeAtBoot = true;
    if (a !== null) window.__mcgrotForceAnchors = a === 'on';
  }, anchors);

  const page = await context.newPage();
  const consoleErrors = [];
  page.on('console', (m) => { if (m.type() === 'error') consoleErrors.push(m.text()); });
  page.on('pageerror', (e) => consoleErrors.push(String(e)));

  await page.goto(`http://localhost:${port}/`);
  await page.waitForFunction(() => !!(window.__mcgrotDebug && window.__mcgrotDebug.world));
  await page.evaluate(() => {
    const el = document.getElementById('title-card');
    if (el) el.style.transition = 'none';       // kill the 0.9s fade
    const btn = document.getElementById('title-enter');
    if (btn) { btn.style.animation = 'none'; btn.style.opacity = '1'; } // and the 1.8s pulse
  });
  await page.click('#title-enter');
  await page.evaluate(() => window.__mcgrotDebug.pauseAuto());
  await page.evaluate((h) => window.__mcgrotDebug.setTime(h), hour);
  await page.evaluate((w) => window.__mcgrotDebug.setWeather(w), weather);
  await page.evaluate(() => window.__mcgrotDebug.stepFrame(1 / 60, 0));

  let result;
  if (file) {
    const mod = await import(pathToFileURL(resolve(file)).href);
    if (typeof mod.default !== 'function') throw new Error(`${file} must default-export a function`);
    result = await mod.default({ page, context, browser, port, root });
  } else if (expr) {
    result = await page.evaluate(`(() => { const dbg = window.__mcgrotDebug; return (${expr}); })()`);
  }

  if (shot) {
    const path = shot === true ? '/tmp/mcgrot-probe.png' : shot;
    writeFileSync(path, await page.screenshot());
    console.error(`screenshot -> ${path}`);
  }
  if (result !== undefined) console.log(typeof result === 'string' ? result : JSON.stringify(result, null, 2));
  if (consoleErrors.length) console.error(`\nconsole errors (${consoleErrors.length}):\n  ${consoleErrors.join('\n  ')}`);
  if (keepOpen) { console.error('--keep-open: ctrl-C to finish'); await new Promise(() => {}); }
} finally {
  if (browser) await browser.close();
  server.kill();
}
