// G2 — capture-review rig. Renders the four style candidates side by side.
//
//   node scripts/mcgrots-styleshots.mjs
//   node scripts/mcgrots-styleshots.mjs --archetype=morag
//   node scripts/mcgrots-styleshots.mjs --hour=17
//
// The deliverable is a contact sheet, not a grade. Each anchor gets one sheet;
// candidates are rows and the three columns show approach, mid-stride and
// arrived. The row label carries the exact URL so a cell remains identifiable
// after the sheet leaves the terminal.

import { spawn } from 'child_process';
import { mkdirSync, writeFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { createServer } from 'net';
import { chromium } from 'playwright';
import { PNG } from 'pngjs';
import { LAUNCH_OPTS, LAUNCH_LABEL } from './launch.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const OUT = join(root, 'docs/smoke/captures/mcgrots/g2');
const CELL_W = 480;
const CELL_H = 360;
const LABEL_W = 430;
const HEADER_H = 42;
const MID_FRAMES = 45;
const ARRIVED_FRAMES = 600;
const ANCHORS = ['counter', 'wall', 'kerb', 'far', 'back'];

const arg = (name, dflt = null) => {
  const hit = process.argv.find((a) => a.startsWith(`--${name}=`));
  return hit ? hit.slice(name.length + 3) : dflt;
};

const archetype = arg('archetype', 'rab');
const requestedHour = arg('hour', null);
const hourLabel = requestedHour === null
  ? 'page default (fixed LIGHT setup)'
  : `${requestedHour} (passed as URL metadata; page currently uses fixed LIGHT)`;

const CANDIDATES = [
  { id: 'baseline', label: 'BASELINE', params: {}, colour: 0x777777 },
  { id: 's1', label: 'S1 INKED', params: { look: 'inked' }, colour: 0xd04d3f },
  { id: 's2', label: 'S2 AERIAL', params: { look: 'aerial' }, colour: 0x4c86b8 },
  { id: 's3', label: 'S3 KEY', params: { style: 'key' }, colour: 0xc59a3b },
  { id: 's3-control', label: 'S3 CONTROL', params: { style: 'posterise' }, colour: 0x8b6db0 },
  { id: 's4', label: 'S4 PAGE', params: { page: 'on' }, colour: 0x4f9870 },
];

// Small built-in bitmap font. Keeping the labels in the PNG means the sheets
// remain legible without ffmpeg, a system font, or a second rendering path.
const FONT = {
  A: ['010', '101', '111', '101', '101'], B: ['110', '101', '110', '101', '110'],
  C: ['011', '100', '100', '100', '011'], D: ['110', '101', '101', '101', '110'],
  E: ['111', '100', '110', '100', '111'], F: ['111', '100', '110', '100', '100'],
  G: ['011', '100', '101', '101', '011'], H: ['101', '101', '111', '101', '101'],
  I: ['111', '010', '010', '010', '111'], J: ['001', '001', '001', '101', '010'],
  K: ['101', '101', '110', '101', '101'], L: ['100', '100', '100', '100', '111'],
  M: ['101', '111', '111', '101', '101'], N: ['101', '111', '111', '111', '101'],
  O: ['010', '101', '101', '101', '010'], P: ['110', '101', '110', '100', '100'],
  Q: ['010', '101', '101', '111', '011'], R: ['110', '101', '110', '101', '101'],
  S: ['011', '100', '010', '001', '110'], T: ['111', '010', '010', '010', '010'],
  U: ['101', '101', '101', '101', '111'], V: ['101', '101', '101', '101', '010'],
  W: ['101', '101', '111', '111', '101'], X: ['101', '101', '010', '101', '101'],
  Y: ['101', '101', '010', '010', '010'], Z: ['111', '001', '010', '100', '111'],
  0: ['111', '101', '101', '101', '111'], 1: ['010', '110', '010', '010', '111'],
  2: ['110', '001', '010', '100', '111'], 3: ['110', '001', '010', '001', '110'],
  4: ['101', '101', '111', '001', '001'], 5: ['111', '100', '110', '001', '110'],
  6: ['011', '100', '111', '101', '111'], 7: ['111', '001', '010', '010', '010'],
  8: ['111', '101', '111', '101', '111'], 9: ['111', '101', '111', '001', '110'],
  '?': ['110', '001', '010', '000', '010'], '&': ['010', '101', '010', '101', '011'],
  '=': ['000', '111', '000', '111', '000'], '-': ['000', '000', '111', '000', '000'],
  '_': ['000', '000', '000', '000', '111'], ':': ['000', '010', '000', '010', '000'],
  ' ': ['000', '000', '000', '000', '000'],
};

function drawText(png, value, x, y, scale, colour) {
  let cx = x;
  for (const ch of value.toUpperCase()) {
    const glyph = FONT[ch] || FONT[' '];
    for (let gy = 0; gy < glyph.length; gy++) {
      for (let gx = 0; gx < glyph[gy].length; gx++) {
        if (glyph[gy][gx] !== '1') continue;
        for (let sy = 0; sy < scale; sy++) {
          for (let sx = 0; sx < scale; sx++) {
            const px = cx + gx * scale + sx, py = y + gy * scale + sy;
            if (px < 0 || px >= png.width || py < 0 || py >= png.height) continue;
            const o = (py * png.width + px) * 4;
            png.data[o] = (colour >> 16) & 0xff;
            png.data[o + 1] = (colour >> 8) & 0xff;
            png.data[o + 2] = colour & 0xff;
            png.data[o + 3] = 0xff;
          }
        }
      }
    }
    cx += 4 * scale;
  }
}

function fill(png, colour) {
  const r = (colour >> 16) & 0xff, g = (colour >> 8) & 0xff, b = colour & 0xff;
  for (let i = 0; i < png.data.length; i += 4) {
    png.data[i] = r; png.data[i + 1] = g; png.data[i + 2] = b; png.data[i + 3] = 0xff;
  }
}

function rect(png, x, y, w, h, colour) {
  const r = (colour >> 16) & 0xff, g = (colour >> 8) & 0xff, b = colour & 0xff;
  const x0 = Math.max(0, x), y0 = Math.max(0, y);
  const x1 = Math.min(png.width, x + w), y1 = Math.min(png.height, y + h);
  for (let py = y0; py < y1; py++) {
    for (let px = x0; px < x1; px++) {
      const o = (py * png.width + px) * 4;
      png.data[o] = r; png.data[o + 1] = g; png.data[o + 2] = b; png.data[o + 3] = 0xff;
    }
  }
}

function urlFor(candidate) {
  const params = new URLSearchParams({ body: 'skinned', archetype });
  for (const [key, value] of Object.entries(candidate.params)) params.set(key, value);
  if (requestedHour !== null) params.set('hour', requestedHour);
  return `?${params.toString()}`;
}

function wrapUrl(url, max = 34) {
  const parts = url.split('&');
  const lines = [];
  let line = '';
  for (const part of parts) {
    const next = line ? `${line}&${part}` : part;
    if (line && next.length > max) { lines.push(line); line = `&${part}`; }
    else line = next;
  }
  if (line) lines.push(line);
  return lines;
}

function compose(anchor, rows) {
  const width = LABEL_W + CELL_W * 3;
  const height = HEADER_H + CELL_H * CANDIDATES.length;
  const sheet = new PNG({ width, height });
  fill(sheet, 0x171713);
  rect(sheet, 0, 0, width, HEADER_H, 0x211f1c);
  drawText(sheet, `G2 ${anchor} ${archetype}`, 14, 12, 3, 0xd8c69b);
  for (let col = 0; col < 3; col++) {
    const title = ['APPROACH', 'MID-STRIDE', 'ARRIVED'][col];
    drawText(sheet, title, LABEL_W + col * CELL_W + 16, 12, 3, 0xd8c69b);
  }

  rows.forEach((row, index) => {
    const y = HEADER_H + index * CELL_H;
    rect(sheet, 0, y, LABEL_W, CELL_H, 0x211f1c);
    rect(sheet, 0, y, 9, CELL_H, row.candidate.colour);
    drawText(sheet, row.candidate.label, 20, y + 22, 3, 0xf1e5c4);
    wrapUrl(row.url).forEach((line, i) => drawText(sheet, line, 20, y + 52 + i * 20, 3, 0xd8c69b));
    for (let col = 0; col < 3; col++) {
      PNG.bitblt(row.frames[col], sheet, 0, 0, CELL_W, CELL_H,
        LABEL_W + col * CELL_W, y);
    }
  });
  return PNG.sync.write(sheet);
}

const freePort = () => new Promise((resolve, reject) => {
  const server = createServer();
  server.on('error', reject);
  server.listen(0, '127.0.0.1', () => {
    const port = server.address().port;
    server.close(() => resolve(port));
  });
});

const waitForServer = async (port) => {
  for (let i = 0; i < 100; i++) {
    try {
      const response = await fetch(`http://127.0.0.1:${port}/`, { signal: AbortSignal.timeout(1500) });
      if (response.ok) return;
    } catch { /* server still starting */ }
    await new Promise((resolve) => setTimeout(resolve, 100));
  }
  throw new Error('server never came up');
};

const baseUrl = (port, candidate) => {
  const query = urlFor(candidate);
  return `http://127.0.0.1:${port}/mcgrots.html${query}`;
};

const waitForPageCut = (page, candidate) => candidate.params.page === 'on'
  ? page.waitForTimeout(160)
  : Promise.resolve();

let server;
let browser;
try {
  mkdirSync(OUT, { recursive: true });
  const port = await freePort();
  server = spawn('python3', [join(root, 'scripts/serve.py'), String(port)], {
    cwd: join(root, 'src'), stdio: 'ignore',
  });
  await waitForServer(port);
  browser = await chromium.launch(LAUNCH_OPTS);

  const sheets = new Map(ANCHORS.map((id) => [id, []]));
  console.log(`[styleshots] renderer ${LAUNCH_LABEL}   archetype ${archetype}   hour ${hourLabel}`);

  for (const candidate of CANDIDATES) {
    const page = await browser.newPage({ viewport: { width: CELL_W, height: CELL_H } });
    const errors = [];
    page.on('console', (message) => { if (message.type() === 'error') errors.push(message.text()); });
    page.on('pageerror', (error) => errors.push(String(error)));
    const url = baseUrl(port, candidate);
    await page.goto(url, { waitUntil: 'load' });
    await page.waitForFunction(() => !!window.__mcgrotsDebug, null, { timeout: 15000 });
    await page.evaluate(() => {
      const d = window.__mcgrotsDebug;
      d.pauseAuto();
      d.setMarkersVisible(false);
    });
    const bodyError = await page.evaluate(() => window.__mcgrotsDebug.bodyError);
    if (bodyError) throw new Error(`${candidate.id} failed to load ${archetype}: ${bodyError}`);
    await waitForPageCut(page, candidate);

    for (const target of ANCHORS) {
      const source = target === 'back' ? 'counter' : 'back';
      const frames = [];
      await page.evaluate((id) => window.__mcgrotsDebug.snapTo(id), source);
      await waitForPageCut(page, candidate);
      await page.evaluate((id) => window.__mcgrotsDebug.goTo(id), target);
      await page.evaluate(() => window.__mcgrotsDebug.stepFrames(2));
      frames.push(PNG.sync.read(await page.screenshot({ type: 'png' })));
      await page.evaluate((n) => window.__mcgrotsDebug.stepFrames(n), MID_FRAMES);
      frames.push(PNG.sync.read(await page.screenshot({ type: 'png' })));
      await page.evaluate((n) => window.__mcgrotsDebug.stepFrames(n), ARRIVED_FRAMES);
      frames.push(PNG.sync.read(await page.screenshot({ type: 'png' })));
      sheets.get(target).push({ candidate, url: urlFor(candidate), frames });
    }
    console.log(`[styleshots] ${candidate.label.padEnd(11)} captured 15 frames` +
      (errors.length ? `   console errors: ${errors.length}` : ''));
    await page.close();
  }

  for (const anchor of ANCHORS) {
    const path = join(OUT, `${anchor}.png`);
    writeFileSync(path, compose(anchor, sheets.get(anchor)));
    console.log(`[styleshots] ${path}`);
  }
  const legend = [
    `renderer: ${LAUNCH_LABEL}`,
    `archetype: ${archetype}`,
    `hour: ${hourLabel}`,
    '',
    'rows: baseline, S1 inked, S2 aerial, S3 key, S3 control posterise, S4 page',
    'columns: approach, mid-stride, arrived',
    'Each row includes its exact URL in the left label panel.',
  ].join('\n');
  writeFileSync(join(OUT, 'LEGEND.txt'), `${legend}\n`);
  console.log(`\n${legend}`);
} finally {
  try { await browser?.close(); } catch { /* already closed */ }
  try { server?.kill(); } catch { /* already stopped */ }
}
