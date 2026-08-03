// E8's judging harness — renders the style presets across the judging set and
// stacks them into contact sheets.
//
//   node scripts/style-sheet.mjs                 # the whole round
//   node scripts/style-sheet.mjs --presets=a,c   # a narrower round
//   node scripts/style-sheet.mjs --only=night    # one condition
//   node scripts/style-sheet.mjs --sheets-only   # restack existing captures
//
// The loop this serves is "Dan judges pictures, not adjectives", so the output
// is the deliverable and the exit code proves nothing. Two products, because
// they answer different questions:
//
//   sheet-<condition>.png   8 bookmarks x every preset. Composition, colour,
//                           whether the facades survive. Downscaled.
//   detail-<condition>.png  1:1 centre crops, every preset. The dot structure
//                           itself — a 3px halftone cell does NOT survive the
//                           contact sheet's downscale, so judging the screen
//                           from the sheet alone would judge a blur.
//
// Cheap by construction: the grade is a set of post-pass uniforms, so one
// settled pose is re-rendered through every preset (renderNow draws without
// running updaters). 24 poses, not 24 x presets.
//
// Nothing here touches docs/smoke/goldens. The shipped uStyle stays 0.
//
// xstack with explicit pixel offsets, NEVER the `tile` filter — see the same
// note in scripts/contact-sheet.mjs; `tile` truncates silently and exits 0.

import { spawn } from 'child_process';
import { mkdirSync, writeFileSync, existsSync, rmSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { createServer } from 'net';
import { execFileSync } from 'child_process';
import { chromium } from 'playwright';
import { LAUNCH_OPTS, LAUNCH_LABEL } from './launch.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const OUT = join(root, 'docs/smoke/captures/style');

const arg = (name, dflt = null) => {
  const hit = process.argv.find((a) => a.startsWith(`--${name}=`));
  return hit ? hit.slice(name.length + 3) : dflt;
};
const flag = (name) => process.argv.includes(`--${name}`);

// The judging set. Three conditions chosen to be the grade's hardest cases
// rather than its flattering ones: flat overcast is where a print look has
// nothing to bite on, night rain is where ink-on-paper fights the torch and
// the lamps, and low clear sun is where the highlight gate either holds the
// paper clean or blows the whole frame out.
const CONDITIONS = [
  { id: 'noon-overcast', hour: 13, weather: 'overcast', detail: 'elm-row-hero' },
  { id: 'night-rain', hour: 22, weather: 'rain', detail: 'mid-805-far' },
  { id: 'morning-clear', hour: 8, weather: 'clear', detail: 'mid-805-far' },
];

// Same eight the goldens use, in a fixed order — the sheet has no text labels
// (this ffmpeg has no drawtext), so row order IS the legend.
const BOOKMARKS = [
  'north-150-close', 'north-250-far', 'fascia-close', 'mid-550-close',
  'mid-805-far', 'elm-row-hero', 'foot-1500-far', 'skyline',
];

// Column key. 'none' first so every row starts from the shipped frame.
const PRESETS = ['none', ...(arg('presets', 'a,b,c,d').split(','))];
// Per-column border colour, so a cell lifted out of context is still
// identifiable without text.
const COL_COLOUR = ['0x808080', '0xff3333', '0x33ff66', '0x3399ff', '0xffcc00'];

const WEATHER_SETTLE_FRAMES = 700; // matches scripts/smoke.mjs
const CELL_W = 400, CELL_H = 250;  // 1280x800 shots, downscaled 3.2x
const CROP_W = 640, CROP_H = 400;  // 1:1 centre crop for the detail strip

const only = arg('only');
const conditions = only ? CONDITIONS.filter((c) => c.id === only) : CONDITIONS;
if (!conditions.length) { console.error(`unknown --only=${only}`); process.exit(1); }

const freePort = () => new Promise((res) => {
  const s = createServer();
  s.listen(0, () => { const p = s.address().port; s.close(() => res(p)); });
});

async function capture() {
  const port = await freePort();
  spawn('node', [join(root, 'scripts/stamp-bundle.mjs')], { stdio: 'ignore' });
  const server = spawn('python3', [join(root, 'scripts/serve.py'), String(port)], {
    cwd: join(root, 'src'), stdio: 'ignore',
  });
  for (let i = 0; i < 100; i++) {
    try {
      const r = await fetch(`http://127.0.0.1:${port}/`, { signal: AbortSignal.timeout(1500) });
      if (r.ok) break;
    } catch { /* not up yet */ }
    await new Promise((r) => setTimeout(r, 100));
  }

  let browser;
  let tearingDown = false;
  for (const sig of ['SIGINT', 'SIGTERM', 'SIGHUP']) {
    process.on(sig, () => {
      if (tearingDown) return;
      tearingDown = true;
      server.kill();
      try { if (browser) browser.process()?.kill('SIGKILL'); } catch { /* already gone */ }
      process.exit(130);
    });
  }

  try {
    browser = await chromium.launch(LAUNCH_OPTS);
    for (const cond of conditions) {
      const t0 = Date.now();
      const context = await browser.newContext({ viewport: { width: 1280, height: 800 } });
      // Same boot as scripts/probe.mjs and smoke's bootPage: freeze rAF before
      // any page script runs, pin the date. A drifting clock would make two
      // presets in the same row differ by more than the grade.
      await context.addInitScript(() => {
        window.__mcgrotFreezeAtBoot = true;
        window.__mcgrotForceDate = '2026-01-01';
      });
      const page = await context.newPage();
      const errors = [];
      page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()); });
      page.on('pageerror', (e) => errors.push(String(e)));

      await page.goto(`http://localhost:${port}/`);
      await page.waitForFunction(() => !!(window.__mcgrotDebug && window.__mcgrotDebug.world));
      await page.evaluate(() => {
        const el = document.getElementById('title-card');
        if (el) el.style.transition = 'none';
        const btn = document.getElementById('title-enter');
        if (btn) { btn.style.animation = 'none'; btn.style.opacity = '1'; }
      });
      await page.click('#title-enter');
      await page.evaluate(() => window.__mcgrotDebug.pauseAuto());
      await page.evaluate((h) => window.__mcgrotDebug.setTime(h), cond.hour);
      await page.evaluate((w) => window.__mcgrotDebug.setWeather(w), cond.weather);
      await page.evaluate((n) => window.__mcgrotDebug.stepFrames(n), WEATHER_SETTLE_FRAMES);

      const dir = join(OUT, cond.id);
      mkdirSync(dir, { recursive: true });
      for (const bm of BOOKMARKS) {
        await page.evaluate((id) => window.__mcgrotDebug.gotoBookmark(id), bm);
        for (const p of PRESETS) {
          // renderNow redraws the settled frame without stepping updaters, so
          // every preset in this row is the SAME frame graded differently —
          // the isolation the judgement depends on.
          await page.evaluate((name) => {
            window.__mcgrotDebug.setStylePreset(name === 'none' ? null : name);
            window.__mcgrotDebug.renderNow();
          }, p);
          writeFileSync(join(dir, `${bm}-${p}.png`), await page.screenshot());
        }
      }
      await page.evaluate(() => window.__mcgrotDebug.setStylePreset(null));
      await context.close();
      console.log(`${cond.id}: ${BOOKMARKS.length * PRESETS.length} captures in ${((Date.now() - t0) / 1000).toFixed(1)}s`);
      if (errors.length) console.error(`  console errors (${errors.length}):\n  ${errors.join('\n  ')}`);
    }
  } finally {
    if (browser) await browser.close();
    server.kill();
  }
}

// Stack cells with explicit offsets and then ASSERT the output dimensions —
// xstack sizes to the widest occupied column, so a dropped input produces a
// smaller sheet and a zero exit status.
function stack(cells, out, cellW, cellH, cols, crop) {
  const rows = Math.ceil(cells.length / cols);
  const inputs = cells.flatMap((f) => ['-i', f]);
  const pre = cells.map((_, i) => {
    const col = i % cols;
    const box = `drawbox=c=${COL_COLOUR[col % COL_COLOUR.length]}@0.9:t=4`;
    const fit = crop
      ? `crop=${cellW}:${cellH}:(iw-${cellW})/2:(ih-${cellH})/2`
      : `scale=${cellW}:${cellH}:force_original_aspect_ratio=decrease,`
        + `pad=${cellW}:${cellH}:(ow-iw)/2:(oh-ih)/2:color=0x101010`;
    return `[${i}:v]${fit},${box}[c${i}]`;
  }).join(';');
  const chain = cells.map((_, i) => `[c${i}]`).join('');
  const layout = cells.map((_, i) =>
    `${(i % cols) * cellW}_${Math.floor(i / cols) * cellH}`).join('|');

  execFileSync('ffmpeg', [
    '-loglevel', 'error', '-y', ...inputs,
    '-filter_complex', `${pre};${chain}xstack=inputs=${cells.length}:layout=${layout}`,
    '-frames:v', '1', out,
  ]);
  const dims = execFileSync('ffprobe', [
    '-v', 'error', '-select_streams', 'v:0',
    '-show_entries', 'stream=width,height', '-of', 'csv=p=0', out,
  ]).toString().trim();
  const want = `${Math.min(cols, cells.length) * cellW},${rows * cellH}`;
  if (dims !== want) {
    console.error(`ABORT ${out}: got ${dims}, expected ${want} — cells were dropped`);
    process.exit(1);
  }
  console.log(`${out}  (${cells.length} cells, ${dims})`);
}

function sheets() {
  for (const cond of conditions) {
    const dir = join(OUT, cond.id);
    const cells = BOOKMARKS.flatMap((bm) => PRESETS.map((p) => join(dir, `${bm}-${p}.png`)));
    const missing = cells.filter((f) => !existsSync(f));
    if (missing.length) {
      console.error(`ABORT ${cond.id}: ${missing.length} captures missing — run without --sheets-only`);
      process.exit(1);
    }
    stack(cells, join(OUT, `sheet-${cond.id}.png`), CELL_W, CELL_H, PRESETS.length, false);
    stack(PRESETS.map((p) => join(dir, `${cond.detail}-${p}.png`)),
      join(OUT, `detail-${cond.id}.png`), CROP_W, CROP_H, PRESETS.length, true);
  }
  const legend = [
    `renderer: ${LAUNCH_LABEL}`,
    '',
    'sheet-<condition>.png — rows are bookmarks, columns are presets.',
    `  columns : ${PRESETS.map((p, i) => `${p} (${COL_COLOUR[i % COL_COLOUR.length].replace('0x', '#')})`).join(', ')}`,
    `  rows    : ${BOOKMARKS.join(', ')}`,
    '',
    'detail-<condition>.png — 1:1 centre crops, same column order. This is the',
    'only view where the halftone cell is at its real size.',
    `  ${conditions.map((c) => `${c.id}: ${c.detail}`).join('; ')}`,
    '',
    'Individual cells: <condition>/<bookmark>-<preset>.png',
  ].join('\n');
  writeFileSync(join(OUT, 'LEGEND.txt'), legend + '\n');
  console.log(`\n${legend}`);
}

mkdirSync(OUT, { recursive: true });
if (!flag('sheets-only')) {
  if (flag('clean') && existsSync(OUT)) rmSync(OUT, { recursive: true, force: true });
  const t0 = Date.now();
  await capture();
  console.log(`captures done in ${((Date.now() - t0) / 1000).toFixed(1)}s (renderer ${LAUNCH_LABEL})`);
}
sheets();
