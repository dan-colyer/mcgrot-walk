// G1 — the animation bake-off. Renders each candidate and measures its cost.
//
//   node scripts/mcgrots-bakeoff.mjs
//   node scripts/mcgrots-bakeoff.mjs --only=capsule,segmented --archetype=mcgrot
//
// THE DELIVERABLE IS MOTION, NOT STILLS. A candidate that looks superb frozen
// and terrible moving is the exact failure mode here, and E8's style harness
// judges still frames, so it cannot be reused. Each candidate gets a STRIP:
// eight frames sampled evenly across one full stride, tiled left to right, so
// a gait can be read off a single PNG. Idle, sit and head-turn get one frame
// each.
//
// THE NUMBERS GO BESIDE THE PICTURES, NOT INSTEAD OF THEM. Draw calls,
// triangles, bytes and pose+render cost are all here, but they decide nothing
// on their own — G0 proved that a suite will happily pass a frame that is 54%
// black. Dan judges the look; this table judges the cost.
//
// The control is the capsule. Whatever a candidate's walk is worth, it is
// worth it against a figure that only slides.

import { spawn } from 'child_process';
import { mkdirSync, writeFileSync, readFileSync, existsSync, statSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { createServer } from 'net';
import { chromium } from 'playwright';
import { PNG } from 'pngjs';
import { LAUNCH_OPTS, LAUNCH_LABEL } from './launch.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const OUT = join(root, 'docs/smoke/captures/mcgrots/g1');

const arg = (n, d = null) => {
  const hit = process.argv.find((a) => a.startsWith(`--${n}=`));
  return hit ? hit.slice(n.length + 3) : d;
};

const ARCHETYPE = arg('archetype', 'rab');
const ONLY = (arg('only') || '').split(',').filter(Boolean);

// Every candidate G1 is meant to compare. `file` is what supplies its line in
// the cost table's "lines of code" column; a missing file means the candidate
// is not written yet, which is reported rather than skipped silently.
// `assets` is what the candidate ADDS to the payload, on disk, beyond the glb
// every candidate already needs. Reported from the filesystem rather than from
// the page: A2 was reporting a 5 KB sidecar and A3 an atlas measured in PIXELS,
// which made the cost column meaningless.
const CANDIDATES = [
  { id: 'capsule', label: 'control (capsule)', file: 'src/mcgrots/actors/capsule.js', offline: null, assets: [] },
  { id: 'segmented', label: 'A2 segmented', file: 'src/mcgrots/actors/segmented.js', offline: 'scripts/segment-glb.mjs',
    assets: ['assets/characters/{A}-segments.json'] },
  { id: 'flats', label: 'A3 hinged flats', file: 'src/mcgrots/actors/flats.js', offline: 'scripts/render-flats.mjs',
    assets: ['assets/characters/{A}-flats.png', 'assets/characters/{A}-flats.json'] },
  { id: 'skinned', label: 'A1 skinned', file: 'src/mcgrots/actors/skinned.js', offline: 'scripts/rig-glb.mjs',
    assets: ['assets/characters/{A}-rig.json'] },
];

const STRIDE = 0.72;          // metres per stride — must match actors/segmented.js
const STRIP_FRAMES = 8;
const W = 320, H = 420;       // per-frame capture size; portrait, because a figure is

const loc = (p) => (existsSync(join(root, p)) ? readFileSync(join(root, p), 'utf8').split('\n').length : null);
const assetBytes = (paths, archetype) => paths.reduce((sum, p) => {
  const f = join(root, p.replace('{A}', archetype));
  return sum + (existsSync(f) ? statSync(f).size : 0);
}, 0);

function tile(frames, cols = frames.length) {
  const pngs = frames.map((b) => PNG.sync.read(b));
  const rows = Math.ceil(pngs.length / cols);
  const out = new PNG({ width: cols * W, height: rows * H });
  pngs.forEach((p, i) => {
    const cx = (i % cols) * W, cy = Math.floor(i / cols) * H;
    PNG.bitblt(p, out, 0, 0, Math.min(W, p.width), Math.min(H, p.height), cx, cy);
  });
  return PNG.sync.write(out);
}

const freePort = () => new Promise((res) => {
  const s = createServer();
  s.listen(0, '127.0.0.1', () => { const p = s.address().port; s.close(() => res(p)); });
});

let server, browser;
try {
  mkdirSync(OUT, { recursive: true });
  const port = await freePort();
  server = spawn('python3', [join(root, 'scripts/serve.py'), String(port)], { cwd: join(root, 'src'), stdio: 'ignore' });
  for (let i = 0; i < 100; i++) {
    try { if ((await fetch(`http://127.0.0.1:${port}/`, { signal: AbortSignal.timeout(1500) })).ok) break; } catch { /* waiting */ }
    await new Promise((r) => setTimeout(r, 100));
  }

  browser = await chromium.launch(LAUNCH_OPTS);
  const rows = [];

  for (const cand of CANDIDATES) {
    if (ONLY.length && !ONLY.includes(cand.id)) continue;

    const lines = loc(cand.file);
    if (lines === null) {
      rows.push({ ...cand, status: 'NOT WRITTEN', lines: null });
      console.log(`[g1] ${cand.id.padEnd(10)} not written yet — ${cand.file} absent`);
      continue;
    }

    const page = await browser.newPage({ viewport: { width: W, height: H } });
    const errors = [];
    page.on('pageerror', (e) => errors.push(String(e)));
    await page.goto(`http://127.0.0.1:${port}/mcgrots.html?body=${cand.id}&archetype=${ARCHETYPE}`, { waitUntil: 'load' });
    await page.waitForFunction(() => !!window.__mcgrotsDebug, null, { timeout: 20000 });

    const failed = await page.evaluate(() => window.__mcgrotsDebug.bodyError);
    if (failed) {
      rows.push({ ...cand, status: `LOAD FAILED: ${failed}`, lines });
      console.log(`[g1] ${cand.id.padEnd(10)} FAILED to load: ${failed}`);
      await page.close();
      continue;
    }

    await page.evaluate(() => {
      const d = window.__mcgrotsDebug;
      d.pauseAuto();
      d.setMarkersVisible(false);
      d.setReviewCamera('side');
      d.snapTo('back');
    });

    // THE WALK STRIP. Send the actor on a long straight walk, let the gait
    // settle, then sample one full stride. Sampling from a standing start
    // would put the first frames in the acceleration, which no candidate
    // models and all three would therefore "pass" identically.
    const stripBufs = [];
    await page.evaluate(() => {
      const d = window.__mcgrotsDebug;
      const s = d.state().actor;
      d.walkTo(s.x, s.z + 40);        // 40 m of straight line, ~30 s of walking
      d.stepFrames(90);               // settle: 1.5 s in, well past any easing
    });
    // One stride at 1.35 m/s is 0.533 s — 32 frames at the fixed 1/60 dt.
    const framesPerStride = Math.round((STRIDE / 1.35) * 60);
    const every = Math.max(1, Math.round(framesPerStride / STRIP_FRAMES));
    for (let i = 0; i < STRIP_FRAMES; i++) {
      await page.evaluate((n) => window.__mcgrotsDebug.stepFrames(n), every);
      stripBufs.push(await page.screenshot({ type: 'png' }));
    }
    writeFileSync(join(OUT, `${cand.id}-walk.png`), tile(stripBufs));

    // The three poses that are not a walk. Head-turn is here because it is the
    // motion a hinged flat may simply not be able to do, and G6 makes it
    // load-bearing — Pomplé cannot talk, so his head-turn carries the scene.
    const poses = [];
    for (const [name, setup] of [
      ['idle', () => { const d = window.__mcgrotsDebug; d.setActorState('idle'); d.lookAt(0); d.stepFrames(30); }],
      ['sit', () => { const d = window.__mcgrotsDebug; d.setActorState('sit'); d.stepFrames(60); }],
      ['look', () => { const d = window.__mcgrotsDebug; d.setActorState('idle'); d.lookAt(0.9); d.stepFrames(30); }],
    ]) {
      await page.evaluate(setup);
      poses.push(await page.screenshot({ type: 'png' }));
      void name;
    }
    writeFileSync(join(OUT, `${cand.id}-poses.png`), tile(poses));

    // Cost. Pose+render for 300 frames, measured in the page so the number is
    // the work itself and not the harness's round trips.
    const cost = await page.evaluate(() => {
      const d = window.__mcgrotsDebug;
      d.setActorState('walk');
      d.stepFrames(30);
      const t0 = performance.now();
      d.stepFrames(300);
      const ms = performance.now() - t0;
      return { msPerFrame: ms / 300, stats: d.bodyStats(), scene: d.state() };
    });

    rows.push({
      ...cand, status: 'ok', lines,
      offlineLines: cand.offline ? loc(cand.offline) : null,
      drawCalls: cost.stats.drawCalls,
      triangles: cost.stats.triangles,
      bytes: assetBytes(cand.assets, ARCHETYPE),
      msPerFrame: cost.msPerFrame,
      errors: errors.length,
    });
    console.log(`[g1] ${cand.id.padEnd(10)} ok — ${cost.stats.drawCalls} draws, ${cost.stats.triangles} tris, ` +
      `${cost.msPerFrame.toFixed(3)} ms/frame`);
    await page.close();
  }

  console.log(`\n[g1] renderer ${LAUNCH_LABEL}   archetype ${ARCHETYPE}   captures docs/smoke/captures/mcgrots/g1/\n`);
  console.log('candidate            draws     tris   asset KB   ms/frame   runtime LOC   offline LOC   status');
  for (const r of rows) {
    if (r.status !== 'ok') {
      console.log(`${r.label.padEnd(20)} ${'-'.repeat(48)} ${r.status}`);
      continue;
    }
    console.log(
      `${r.label.padEnd(20)} ${String(r.drawCalls).padStart(5)} ${String(r.triangles).padStart(8)} ` +
      `${(r.bytes / 1024).toFixed(1).padStart(10)} ${r.msPerFrame.toFixed(3).padStart(10)} ` +
      `${String(r.lines).padStart(13)} ${String(r.offlineLines ?? '-').padStart(13)}   ${r.errors ? `${r.errors} PAGE ERRORS` : 'ok'}`);
  }
  console.log('\n[g1] the table judges cost. Open the strips and judge the motion.');
} finally {
  try { await browser?.close(); } catch { /* already gone */ }
  try { server?.kill(); } catch { /* already gone */ }
}
