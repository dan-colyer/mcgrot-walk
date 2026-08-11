// G2 — measure the sun against the actor, not only against the frame.
//
//   node scripts/mcgrots-sun.mjs
//   npm run sun:mcgrots
//
// This is an investigation tool. It moves the debug sun in a booted page and
// never edits src/mcgrots/site.js. The shipped setting and the sweep are both
// rendered on S2 (aerial) with the real skinned rab body. Whole-frame numbers
// stay beside the actor-only torso-patch numbers so the old objective is visible
// rather than silently replaced.

import { spawn } from 'child_process';
import { mkdirSync, writeFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { createServer } from 'net';
import { chromium } from 'playwright';
import { PNG } from 'pngjs';
import { LAUNCH_LABEL, LAUNCH_OPTS } from './launch.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const OUT = join(root, 'docs/smoke/captures/mcgrots/g2');
const VIEW_W = 960, VIEW_H = 540;
const ANCHORS = ['counter', 'wall', 'kerb', 'far', 'back'];
const SHIPPED = { azimuth: -2.1, altitude: 0.34 };
const ALTITUDES = [0.22, 0.34, 0.50, 0.75];
const AZIMUTHS = [-Math.PI, -2.62, -2.10, -1.57, -1.05, -0.52,
  0, 0.52, 1.05, 1.57, 2.09, 2.62];
const CHECK_ARCHETYPE = 'morag';

const arg = (name, dflt = null) => {
  const hit = process.argv.find((a) => a.startsWith(`--${name}=`));
  return hit ? hit.slice(name.length + 3) : dflt;
};
const archetype = arg('archetype', 'rab');

function luminanceStats(buf) {
  const png = PNG.sync.read(buf);
  let sum = 0, sumSq = 0, dark = 0, blown = 0;
  const n = png.width * png.height;
  for (let i = 0; i < n; i++) {
    const o = i * 4;
    const l = 0.2126 * png.data[o] + 0.7152 * png.data[o + 1] + 0.0722 * png.data[o + 2];
    sum += l; sumSq += l * l;
    if (l < 12) dark++;
    if (l > 245) blown++;
  }
  const mean = sum / n;
  return {
    mean,
    stddev: Math.sqrt(Math.max(0, sumSq / n - mean * mean)),
    dark: (dark / n) * 100,
    blown: (blown / n) * 100,
  };
}

// The patch is the F4 control copied in spirit and in its derived geometry:
// torso only, above the leg split, below the collar, half-width from the
// archetype's bind-pose bounding box. Unlike the F4 gate's boxStats, the
// measurement below keeps only pixels that disappear when the actor is hidden,
// so the reported luma is actor-only even if a patch edge ever reaches outside
// the silhouette at a different camera.
async function actorPatch(page) {
  return page.evaluate(() => {
    const d = window.__mcgrotsDebug;
    const toUv = (v) => {
      const c = v.clone().project(d.camera);
      return { x: c.x * 0.5 + 0.5, y: 1 - (c.y * 0.5 + 0.5) };
    };
    let mesh = null;
    d.scene.traverse((o) => { if (o.isSkinnedMesh) mesh = o; });
    if (!mesh) throw new Error('no skinned mesh for actor patch');
    mesh.geometry.computeBoundingBox();
    const bb = mesh.geometry.boundingBox;
    const halfWidthWorld = ((bb.max.x - bb.min.x) / 2) * d.actor.height * 0.5;
    const base = d.actor.group.position.clone();
    const top = base.clone(); top.y += d.actor.height * 0.62;
    const bottom = base.clone(); bottom.y += d.actor.height * 0.35;
    const center = base.clone(); center.y += d.actor.height * 0.48;
    const right = new d.THREE.Vector3(halfWidthWorld, 0, 0)
      .applyQuaternion(d.actor.group.quaternion).add(center);
    return { top: toUv(top), bottom: toUv(bottom), center: toUv(center), right: toUv(right) };
  });
}

function actorStats(onBuf, offBuf, box) {
  const on = PNG.sync.read(onBuf), off = PNG.sync.read(offBuf);
  const y0 = Math.max(0, Math.round(box.top.y * on.height));
  const y1 = Math.min(on.height - 1, Math.round(box.bottom.y * on.height));
  const cx = Math.round(box.center.x * on.width);
  const halfW = Math.max(12, Math.round(Math.abs(box.right.x - box.center.x) * on.width));
  const x0 = Math.max(0, cx - halfW), x1 = Math.min(on.width - 1, cx + halfW);
  let sum = 0, sumSq = 0, max = 0, n = 0;
  for (let y = y0; y <= y1; y++) {
    for (let x = x0; x <= x1; x++) {
      const o = (y * on.width + x) * 4;
      if (on.data[o] === off.data[o] && on.data[o + 1] === off.data[o + 1]
        && on.data[o + 2] === off.data[o + 2]) continue;
      const l = 0.2126 * on.data[o] + 0.7152 * on.data[o + 1] + 0.0722 * on.data[o + 2];
      sum += l; sumSq += l * l; if (l > max) max = l; n++;
    }
  }
  const mean = n ? sum / n : 0;
  return { mean, stddev: n ? Math.sqrt(Math.max(0, sumSq / n - mean * mean)) : 0, max, pixels: n };
}

function average(items, field) {
  return items.reduce((sum, item) => sum + item[field], 0) / items.length;
}

function settingLabel(setting) {
  return `az ${((setting.azimuth * 180) / Math.PI).toFixed(1)}° alt ${((setting.altitude * 180) / Math.PI).toFixed(1)}°`;
}

function settingKey(setting) {
  return `${setting.azimuth.toFixed(4)}:${setting.altitude.toFixed(4)}`;
}

const freePort = () => new Promise((resolve, reject) => {
  const s = createServer();
  s.on('error', reject);
  s.listen(0, '127.0.0.1', () => {
    const port = s.address().port;
    s.close(() => resolve(port));
  });
});

async function waitForServer(port) {
  for (let i = 0; i < 100; i++) {
    try {
      const r = await fetch(`http://127.0.0.1:${port}/`, { signal: AbortSignal.timeout(1500) });
      if (r.ok) return;
    } catch { /* starting */ }
    await new Promise((resolve) => setTimeout(resolve, 100));
  }
  throw new Error('server never came up');
}

async function bootPage(browser, port, bodyArchetype) {
  const page = await browser.newPage({ viewport: { width: VIEW_W, height: VIEW_H } });
  const errors = [];
  page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()); });
  page.on('pageerror', (e) => errors.push(String(e)));
  await page.goto(`http://127.0.0.1:${port}/mcgrots.html?body=skinned&look=aerial&archetype=${bodyArchetype}`,
    { waitUntil: 'load' });
  await page.waitForFunction(() => !!window.__mcgrotsDebug, null, { timeout: 15000 });
  await page.evaluate(() => {
    const d = window.__mcgrotsDebug;
    d.pauseAuto();
    d.setMarkersVisible(false);
  });
  const bodyError = await page.evaluate(() => window.__mcgrotsDebug.bodyError);
  if (bodyError) throw new Error(`skinned ${bodyArchetype} failed to load: ${bodyError}`);
  return { page, errors };
}

async function setSun(page, setting) {
  await page.evaluate(({ azimuth, altitude }) => {
    const d = window.__mcgrotsDebug;
    const sun = d.lights.sun;
    const target = sun.target.position;
    const radius = 120;
    sun.position.set(
      target.x + Math.cos(altitude) * Math.sin(azimuth) * radius,
      target.y + Math.sin(altitude) * radius,
      target.z + Math.cos(altitude) * Math.cos(azimuth) * radius,
    );
    sun.position.needsUpdate = true;
    sun.target.updateMatrixWorld();
  }, setting);
}

async function measureAnchor(page, id) {
  await page.evaluate((anchor) => {
    const d = window.__mcgrotsDebug;
    d.snapTo(anchor);
    d.stepFrames(2, 0);
  }, id);
  const patch = await actorPatch(page);
  const on = await page.screenshot({ type: 'png' });
  await page.evaluate(() => {
    const d = window.__mcgrotsDebug;
    d.actor.group.visible = false;
    d.stepFrames(1, 0);
  });
  const off = await page.screenshot({ type: 'png' });
  await page.evaluate(() => {
    const d = window.__mcgrotsDebug;
    d.actor.group.visible = true;
    d.stepFrames(1, 0);
  });
  return {
    anchor: id,
    whole: luminanceStats(on),
    actor: actorStats(on, off, patch),
    shot: on,
  };
}

async function measureSetting(page, setting) {
  await setSun(page, setting);
  const anchors = [];
  for (const id of ANCHORS) anchors.push(await measureAnchor(page, id));
  return {
    setting,
    anchors,
    frame: {
      mean: average(anchors.map((a) => a.whole), 'mean'),
      stddev: average(anchors.map((a) => a.whole), 'stddev'),
      dark: average(anchors.map((a) => a.whole), 'dark'),
      blown: average(anchors.map((a) => a.whole), 'blown'),
    },
    actor: {
      mean: average(anchors.map((a) => a.actor), 'mean'),
      stddev: average(anchors.map((a) => a.actor), 'stddev'),
      max: average(anchors.map((a) => a.actor), 'max'),
      pixels: average(anchors.map((a) => a.actor), 'pixels'),
    },
  };
}

async function captureSheet(page, setting, tag) {
  await setSun(page, setting);
  const shots = [];
  for (const id of ANCHORS) {
    await page.evaluate((anchor) => {
      const d = window.__mcgrotsDebug;
      d.snapTo(anchor);
      d.stepFrames(2, 0);
    }, id);
    shots.push(PNG.sync.read(await page.screenshot({ type: 'png' })));
  }
  const cols = 2, rows = Math.ceil(shots.length / cols);
  const sheet = new PNG({ width: VIEW_W * cols, height: VIEW_H * rows });
  for (let i = 0; i < shots.length; i++) {
    PNG.bitblt(shots[i], sheet, 0, 0, VIEW_W, VIEW_H,
      (i % cols) * VIEW_W, Math.floor(i / cols) * VIEW_H);
  }
  const path = join(OUT, `sun-${tag}.png`);
  writeFileSync(path, PNG.sync.write(sheet));
  return path;
}

async function angleTable(page) {
  return page.evaluate(() => {
    const d = window.__mcgrotsDebug;
    const sun = d.lights.sun;
    const target = sun.target.position;
    const sx = sun.position.x - target.x, sz = sun.position.z - target.z;
    const sunAzimuth = Math.atan2(sx, sz);
    const sunLen = Math.hypot(sx, sz);
    return d.anchors.map((a) => {
      // Both vectors originate at the actor: actor -> camera is the surface
      // the player sees; actor -> sun is the horizontal light direction.
      const cx = a.camera.eye.x - a.pos.x, cz = a.camera.eye.z - a.pos.z;
      const cameraAzimuth = Math.atan2(cx, cz);
      const cameraLen = Math.hypot(cx, cz);
      const dot = (cx * sx + cz * sz) / (cameraLen * sunLen);
      return {
        id: a.id,
        cameraAzimuth,
        sunAzimuth,
        angle: Math.acos(Math.max(-1, Math.min(1, dot))) * 180 / Math.PI,
      };
    });
  });
}

function printResult(result, prefix = '') {
  const s = result.setting;
  console.log(`${prefix}${settingLabel(s).padEnd(27)} | ` +
    `frame ${result.frame.mean.toFixed(1).padStart(5)} ${result.frame.stddev.toFixed(1).padStart(5)} ` +
    `${result.frame.dark.toFixed(1).padStart(5)}% ${result.frame.blown.toFixed(2).padStart(5)}% | ` +
    `actor ${result.actor.mean.toFixed(1).padStart(5)} ${result.actor.stddev.toFixed(1).padStart(5)} ` +
    `${result.actor.max.toFixed(1).padStart(5)} ${result.actor.pixels.toFixed(0).padStart(5)}`);
}

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

  const rab = await bootPage(browser, port, archetype);
  console.log(`[sun] renderer ${LAUNCH_LABEL}   style S2 (?look=aerial)   archetype ${archetype}`);
  console.log('[sun] angle convention: actor -> camera vs actor -> sun, horizontal azimuth only');
  console.log('\n[sun] shipped camera/sun angles:');
  const angles = await angleTable(rab.page);
  for (const row of angles) {
    console.log(`  ${row.id.padEnd(8)} camera ${((row.cameraAzimuth * 180) / Math.PI).toFixed(1).padStart(7)}° ` +
      `sun ${((row.sunAzimuth * 180) / Math.PI).toFixed(1).padStart(7)}° ` +
      `angle ${row.angle.toFixed(1).padStart(5)}°`);
  }
  const worst = angles.reduce((a, b) => (a.angle >= b.angle ? a : b));
  console.log(`[sun] largest camera/sun separation: ${worst.id} at ${worst.angle.toFixed(1)}° (180° is directly behind the actor)`);

  const settings = [];
  for (const altitude of ALTITUDES) {
    for (const azimuth of AZIMUTHS) settings.push({ azimuth, altitude });
  }
  console.log('\n[sun] azimuth/altitude sweep: frame mean/stddev/dark/blown | actor mean/stddev/max/pixels');
  const results = [];
  for (const setting of settings) {
    const result = await measureSetting(rab.page, setting);
    results.push(result);
    printResult(result, settingKey(setting) === settingKey(SHIPPED) ? '* ' : '  ');
  }

  const ranked = [...results].sort((a, b) => b.actor.mean - a.actor.mean);
  const shippedRank = ranked.findIndex((r) => settingKey(r.setting) === settingKey(SHIPPED)) + 1;
  console.log(`\n[sun] shipped setting rank by actor mean: ${shippedRank}/${ranked.length}`);
  console.log('[sun] best few by actor mean (numbers narrow the field; open the pictures):');
  ranked.slice(0, 5).forEach((r, i) => printResult(r, `  ${i + 1}. `));

  const bestFew = ranked.slice(0, 3);
  const captures = [
    { tag: 'shipped', result: results.find((r) => settingKey(r.setting) === settingKey(SHIPPED)) },
    ...bestFew.map((result, i) => ({ tag: `best-${i + 1}`, result })),
  ];
  console.log('\n[sun] rendered sheets:');
  for (const capture of captures) {
    const path = await captureSheet(rab.page, capture.result.setting, capture.tag);
    console.log(`  ${path} — ${settingLabel(capture.result.setting)}`);
  }

  const check = await bootPage(browser, port, CHECK_ARCHETYPE);
  console.log(`\n[sun] ${CHECK_ARCHETYPE} cross-check (shipped and rab-best settings):`);
  const checkSettings = [captures[0].result, ...bestFew]
    .filter((result, index, list) => list.findIndex((r) => settingKey(r.setting) === settingKey(result.setting)) === index);
  for (const result of checkSettings) {
    const checked = await measureSetting(check.page, result.setting);
    console.log(`  ${settingLabel(result.setting).padEnd(27)} | actor mean ${checked.actor.mean.toFixed(1)} ` +
      `stddev ${checked.actor.stddev.toFixed(1)} max ${checked.actor.max.toFixed(1)}`);
  }

  const report = {
    renderer: LAUNCH_LABEL,
    style: 'aerial',
    archetype,
    shipped: SHIPPED,
    angles,
    results,
    ranking: ranked.slice(0, 5).map((r) => r.setting),
    shippedRank,
  };
  writeFileSync(join(OUT, 'sun-report.json'), JSON.stringify(report, null, 2));
  writeFileSync(join(OUT, 'SUN-LEGEND.txt'), [
    `renderer: ${LAUNCH_LABEL}`,
    'style: S2 aerial (?look=aerial)',
    `archetype: ${archetype}`,
    'sun-shipped: azimuth -2.1 rad, altitude 0.34 rad',
    'sheets: sun-shipped.png, sun-best-1.png, sun-best-2.png, sun-best-3.png',
    'Each sheet is a 2-column contact sheet in anchor order: counter, wall, kerb, far, back.',
  ].join('\n') + '\n');

  console.log(`\n[sun] recommendation: inspect sun-best-1..3 against sun-shipped; ` +
    `the current setting ranks ${shippedRank}/${ranked.length} by actor mean.`);
  console.log('[sun] no site.js change made; no acceptance gate added, so no fault injection applies.');
  await rab.page.close();
  await check.page.close();
} finally {
  try { await browser?.close(); } catch { /* already closed */ }
  try { server?.kill(); } catch { /* already stopped */ }
}
