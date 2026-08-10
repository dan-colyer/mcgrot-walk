// McGrot's gate suite. G0.
//
// A SEPARATE FILE FROM scripts/smoke.mjs, deliberately. That suite is 7,066
// lines covering a 1617 m street which is now PAUSED (docs/MCGROTS-ROADMAP.md
// § 8). Extending it would couple this game's gates to a codebase nobody is
// allowed to touch, and would make every McGrot's run pay for the street's
// 20 regions. This one starts small and stays fast.
//
// What it shares: scripts/launch.mjs, so both games render on the same
// browser. Goldens are renderer-specific and a suite that boots differently
// from its sibling cannot be compared with it.
//
// WHAT THIS SUITE DELIBERATELY DOES NOT PROVE (G0 scope):
//   - That anything is ANIMATED. The actor is a capsule that slides. There is
//     no rig in this project and no walk cycle; G1 answers that and nothing
//     here should be read as evidence about it.
//   - That the pitch looks GOOD. The contrast floor catches a black frame. It
//     cannot tell a composed shot from an ugly one — that is Dan's judgement
//     at G7, and the captures below exist to be opened, not just measured.
//   - Anything about style. G2 owns that.

import { spawn } from 'child_process';
import { mkdirSync, writeFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { createServer } from 'net';
import { chromium } from 'playwright';
import { PNG } from 'pngjs';
import { LAUNCH_OPTS, LAUNCH_LABEL } from './launch.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const OUT = join(root, 'docs/smoke/captures/mcgrots/g0');

const REGIONS = ['boot', 'camera', 'anchors'];
const ONLY = new Set(process.argv.filter((a) => a.startsWith('--only='))
  .flatMap((a) => a.slice(7).split(',')));
const wants = (r) => ONLY.size === 0 || ONLY.has(r);

const results = [];
const skipped = [];
const check = (name, pass, detail) => results.push({ name, pass, detail });

// Same measurement as scripts/smoke.mjs's luminanceStats — a frame's luminance
// mean and stddev. Duplicated rather than imported because that module is the
// paused street's; the CONSTANT below is the thing that must not drift, and it
// is quoted from there.
const SUBSTRATE_MIN_STDDEV = 8;   // of 255. Below this a frame is too flat to gate anything.

// THE CRUSH FLOOR EXISTS BECAUSE THE CONTRAST FLOOR MISSED. G0's first render
// put 53.9% of the establishing frame under luminance 12 — the ground took
// almost no light — and the suite called it a pass: a frame that is half black
// and half brown has a stddev of 34.6, comfortably over the floor. Mean and
// stddev are both blind to a bimodal frame. This measures the thing that
// actually went wrong.
const MAX_CRUSHED_FRACTION = 12;   // percent of pixels under CRUSH_LUMA
const CRUSH_LUMA = 12;             // of 255
const MAX_BLOWN_FRACTION = 2;      // percent over BLOWN_LUMA
const BLOWN_LUMA = 245;

function luminanceStats(buf) {
  const png = PNG.sync.read(buf);
  let sum = 0, sumSq = 0, crushed = 0, blown = 0;
  const n = png.width * png.height;
  for (let i = 0; i < n; i++) {
    const o = i * 4;
    const l = 0.2126 * png.data[o] + 0.7152 * png.data[o + 1] + 0.0722 * png.data[o + 2];
    sum += l; sumSq += l * l;
    if (l < CRUSH_LUMA) crushed++;
    if (l > BLOWN_LUMA) blown++;
  }
  const mean = sum / n;
  return {
    mean,
    stddev: Math.sqrt(Math.max(0, sumSq / n - mean * mean)),
    crushed: (crushed / n) * 100,
    blown: (blown / n) * 100,
  };
}

const freePort = () => new Promise((res, rej) => {
  const s = createServer();
  s.on('error', rej);
  s.listen(0, '127.0.0.1', () => { const p = s.address().port; s.close(() => res(p)); });
});

let server, browser;
const shutdown = () => {
  try { browser?.close(); } catch { /* already gone */ }
  try { server?.kill(); } catch { /* already gone */ }
};
process.on('SIGINT', () => { shutdown(); process.exit(130); });

const started = Date.now();

try {
  mkdirSync(OUT, { recursive: true });
  const port = await freePort();
  // Rooted at src/, exactly as `npm run dev` is — so /mcgrots.html resolves and
  // `assets/` (a symlink to ../assets) is reachable.
  server = spawn('python3', [join(root, 'scripts/serve.py'), String(port)], {
    cwd: join(root, 'src'), stdio: 'ignore',
  });

  // 127.0.0.1, never `localhost`: serve.py binds IPv4 only and a ::1 connect
  // can hang for undici's full default timeout, eating the retry budget.
  let up = false;
  for (let i = 0; i < 100 && !up; i++) {
    try {
      const r = await fetch(`http://127.0.0.1:${port}/`, { signal: AbortSignal.timeout(1500) });
      up = r.ok;
    } catch { /* not up yet */ }
    if (!up) await new Promise((r) => setTimeout(r, 100));
  }
  if (!up) throw new Error('server never came up');

  browser = await chromium.launch(LAUNCH_OPTS);
  const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });

  const consoleErrors = [];
  page.on('console', (m) => { if (m.type() === 'error') consoleErrors.push(m.text()); });
  page.on('pageerror', (e) => consoleErrors.push(String(e)));

  await page.goto(`http://127.0.0.1:${port}/mcgrots.html`, { waitUntil: 'load' });
  await page.waitForFunction(() => !!window.__mcgrotsDebug, null, { timeout: 15000 });
  // Freeze rAF, then drive frames by hand. Everything below is deterministic
  // because nothing advances that this script did not advance.
  await page.evaluate(() => window.__mcgrotsDebug.pauseAuto());

  // ---------------------------------------------------------------- boot ---
  if (wants('boot')) {
    const info = await page.evaluate(() => ({
      buildings: window.__mcgrotsDebug.buildingCount,
      anchors: window.__mcgrotsDebug.anchorIds(),
      booted: document.body.classList.contains('booted'),
    }));

    // 41 is measured, not assumed: the footprints within MASSING_RADIUS (80 m)
    // of the Foot. If this moves, either leith.json changed or the radius did.
    check('the Foot stands up 41 real building footprints',
      info.buildings === 41, `buildingCount=${info.buildings}`);
    check('five anchors resolve',
      info.anchors.length === 5, info.anchors.join(', '));
    check('boot completes (body.booted)', info.booted, `booted=${info.booted}`);
    check('console is clean through boot',
      consoleErrors.length === 0, consoleErrors.slice(0, 3).join(' | ') || 'no errors');
  }

  // -------------------------------------------------------------- camera ---
  // Every anchor gets a capture, and every capture is measured. The pictures
  // are the deliverable a human opens; the numbers only stop a black frame
  // being called a pass.
  const shots = [];
  if (wants('camera')) {
    const ids = await page.evaluate(() => window.__mcgrotsDebug.anchorIds());
    for (const id of ids) {
      await page.evaluate((a) => {
        const d = window.__mcgrotsDebug;
        d.setMarkersVisible(false);   // markers are UI, not scene
        d.snapTo(a);
        d.stepFrames(2);
      }, id);
      const buf = await page.screenshot({ type: 'png' });
      writeFileSync(join(OUT, `${id}.png`), buf);
      const lum = luminanceStats(buf);
      const st = await page.evaluate(() => window.__mcgrotsDebug.state());
      shots.push({ id, ...lum, ...st });
    }

    const flat = shots.filter((s) => s.stddev < SUBSTRATE_MIN_STDDEV);
    check('every shot is a picture (contrast floor)',
      flat.length === 0,
      flat.length === 0
        ? `all ${shots.length} shots have luminance stddev >= ${SUBSTRATE_MIN_STDDEV} ` +
          `(min ${Math.min(...shots.map((s) => s.stddev)).toFixed(1)} on ` +
          `${shots.reduce((a, b) => (a.stddev <= b.stddev ? a : b)).id})`
        : flat.map((s) => `${s.id} stddev=${s.stddev.toFixed(1)} mean=${s.mean.toFixed(1)}`).join('; '));

    // A frame can clear the stddev floor while being mostly blown-out sky or
    // mostly black ground. The mean band catches the grossest version.
    const badMean = shots.filter((s) => s.mean < 18 || s.mean > 200);
    check('no shot is crushed or blown out (mean 18..200)',
      badMean.length === 0,
      badMean.length === 0
        ? `means ${shots.map((s) => s.mean.toFixed(0)).join('/')}`
        : badMean.map((s) => `${s.id} mean=${s.mean.toFixed(1)}`).join('; '));

    // …and this is the one that would have caught G0's real fault, which both
    // checks above waved through. See the note on MAX_CRUSHED_FRACTION.
    const crushed = shots.filter((s) => s.crushed > MAX_CRUSHED_FRACTION);
    check(`no shot is mostly black (< ${MAX_CRUSHED_FRACTION}% under luma ${CRUSH_LUMA})`,
      crushed.length === 0,
      crushed.length === 0
        ? `worst ${Math.max(...shots.map((s) => s.crushed)).toFixed(1)}% on ` +
          `${shots.reduce((a, b) => (a.crushed >= b.crushed ? a : b)).id}`
        : crushed.map((s) => `${s.id} ${s.crushed.toFixed(1)}% black`).join('; '));

    const blown = shots.filter((s) => s.blown > MAX_BLOWN_FRACTION);
    check(`no shot is mostly blown (< ${MAX_BLOWN_FRACTION}% over luma ${BLOWN_LUMA})`,
      blown.length === 0,
      blown.length === 0
        ? `worst ${Math.max(...shots.map((s) => s.blown)).toFixed(2)}%`
        : blown.map((s) => `${s.id} ${s.blown.toFixed(1)}% blown`).join('; '));

    // The camera is a shot, not a free-flying eye: each one must actually
    // differ from the others, or the anchors are not doing anything.
    const uniq = new Set(shots.map((s) => `${s.camera.x},${s.camera.y},${s.camera.z}`));
    check('each anchor has its own distinct shot',
      uniq.size === shots.length, `${uniq.size} distinct of ${shots.length}`);
  }

  // ------------------------------------------------------------- anchors ---
  if (wants('anchors')) {
    // The walk. Not an animation test — a test that requesting a spot moves
    // the actor to it and parks them there.
    const walk = await page.evaluate(() => {
      const d = window.__mcgrotsDebug;
      d.snapTo('back');
      const from = d.state().actor;
      d.goTo('counter');
      const midway = [];
      for (let i = 0; i < 60; i++) { d.stepFrames(1); if (i % 20 === 0) midway.push({ ...d.state().actor }); }
      const moving = d.state().walking;
      // Long enough to arrive from any anchor at 1.35 m/s.
      d.stepFrames(600);
      return { from, midway, movingAtOneSecond: moving, end: d.state() };
    });

    const target = await page.evaluate(() =>
      window.__mcgrotsDebug.anchors.find((a) => a.id === 'counter').pos);

    const dist = Math.hypot(walk.end.actor.x - target.x, walk.end.actor.z - target.z);
    check('walking to an anchor arrives at it',
      dist < 0.1 && walk.end.anchor === 'counter' && !walk.end.walking,
      `ended ${dist.toFixed(3)}m from counter, anchor=${walk.end.anchor}, walking=${walk.end.walking}`);

    check('the walk is a walk, not a teleport',
      walk.movingAtOneSecond && walk.midway.some((p) =>
        Math.hypot(p.x - walk.from.x, p.z - walk.from.z) > 0.2 &&
        Math.hypot(p.x - target.x, p.z - target.z) > 0.2),
      `sampled ${walk.midway.map((p) => `(${p.x.toFixed(1)},${p.z.toFixed(1)})`).join(' ')}`);

    // A sitting spot must actually sit, or the seated camera height is a lie.
    const sat = await page.evaluate(() => {
      const d = window.__mcgrotsDebug;
      d.goTo('wall'); d.stepFrames(900);
      return d.state();
    });
    check('a sitting anchor ends in the sit state',
      sat.actorState === 'sit' && sat.anchor === 'wall',
      `anchor=${sat.anchor} state=${sat.actorState}`);

    check('console still clean after driving the anchors',
      consoleErrors.length === 0, consoleErrors.slice(0, 3).join(' | ') || 'no errors');
  }

  for (const r of REGIONS) if (!wants(r)) skipped.push(`region ${r}`);

  // ------------------------------------------------------------- report ----
  const failed = results.filter((r) => !r.pass);
  console.log(`\n[mcgrots] renderer: ${LAUNCH_LABEL}   captures: docs/smoke/captures/mcgrots/g0/`);
  if (shots.length) {
    console.log('\n[mcgrots] shots:');
    for (const s of shots) {
      console.log(`  ${s.id.padEnd(9)} mean ${s.mean.toFixed(1).padStart(6)}  stddev ${s.stddev.toFixed(1).padStart(6)}` +
        `  draws ${String(s.drawCalls).padStart(3)}  tris ${String(s.triangles).padStart(6)}`);
    }
  }
  console.log('');
  for (const r of results) console.log(`  ${r.pass ? 'PASS' : 'FAIL'}  ${r.name}\n        ${r.detail}`);
  for (const s of skipped) console.log(`  SKIP  ${s}`);
  console.log(`\n[mcgrots] ${results.length - failed.length}/${results.length} passed in ${((Date.now() - started) / 1000).toFixed(1)}s`);

  shutdown();
  process.exit(failed.length ? 1 : 0);
} catch (err) {
  console.error('[mcgrots] suite error:', err);
  shutdown();
  process.exit(2);
}
