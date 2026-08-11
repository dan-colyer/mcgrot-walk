// One-shot look at McGrot's — boot, pose, render, write a PNG.
//
//   node scripts/mcgrots-shot.mjs --shot=/tmp/look.png
//   node scripts/mcgrots-shot.mjs --look=inked --anchor=counter --shot=/tmp/s1.png
//   node scripts/mcgrots-shot.mjs --style=key --key=gold --frames=120 --shot=/tmp/s3.png
//   node scripts/mcgrots-shot.mjs -e "dbg.state().actor"
//
// Why this exists: Dan judges the look, and the only way he can judge it is by
// being shown a picture. `npm run smoke:mcgrots` renders captures, but only the
// ones its checks happen to need, and only at the poses those checks use. This
// is the throwaway equivalent of the street's scripts/probe.mjs — one command
// for "show me X under Y" — so a review is a render rather than an argument.
//
// THE BOOT MIRRORS scripts/smoke-mcgrots.mjs. rAF is frozen and every frame is
// stepped by hand, so two runs of the same arguments produce the same picture.
// A probe that boots differently from the gate cannot be used to explain the
// gate; if the gate's boot changes, change this one with it.
//
// --frames matters more than it looks. The actor walks, so a shot taken at
// frame 0 is a shot of someone standing at the previous anchor. Default 90 is
// roughly the settle after a goTo; raise it to watch a walk finish.

import { spawn } from 'child_process';
import { mkdirSync, writeFileSync } from 'fs';
import { dirname, join, resolve } from 'path';
import { fileURLToPath, pathToFileURL } from 'url';
import { createServer } from 'net';
import { chromium } from 'playwright';
import { LAUNCH_OPTS, LAUNCH_LABEL } from './launch.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');

const arg = (name, dflt = null) => {
  const hit = process.argv.find((a) => a.startsWith(`--${name}=`));
  if (hit) return hit.slice(name.length + 3);
  const i = process.argv.indexOf(`--${name}`);
  return i >= 0 ? true : dflt;
};
const pick = (short, long) => {
  const i = process.argv.findIndex((a) => a === short || a === `--${long}`);
  return i >= 0 ? process.argv[i + 1] : null;
};

const shot = arg('shot');
const expr = pick('-e', 'eval');
const file = pick('-f', 'file');
const anchor = arg('anchor', null);
const frames = Number(arg('frames', 90));
const width = Number(arg('width', 1280));
const height = Number(arg('height', 720));
const keepOpen = process.argv.includes('--keep-open');

// Every candidate is a URL flag, and they are deliberately three separate
// params — a bundle cannot be a control for another bundle (see G2).
const PARAMS = ['body', 'archetype', 'look', 'style', 'key', 'page', 'pose'];

if (!shot && !expr && !file) {
  console.error('nothing to do — pass --shot=<path>, -e <expression>, or -f <module>');
  process.exit(1);
}

const freePort = () => new Promise((res) => {
  const s = createServer();
  s.listen(0, '127.0.0.1', () => { const p = s.address().port; s.close(() => res(p)); });
});

let server, browser;
const cleanup = () => {
  try { server?.kill(); } catch { /* already gone */ }
};
process.on('exit', cleanup);

try {
  const port = await freePort();
  // Rooted at src/, exactly as `npm run dev:mcgrots` is — so /mcgrots.html
  // resolves and `assets/` (a symlink to ../assets) is reachable.
  server = spawn('python3', [join(root, 'scripts/serve.py'), String(port)], {
    cwd: join(root, 'src'), stdio: 'ignore',
  });

  // 127.0.0.1, never `localhost`: serve.py binds IPv4 only and a ::1 connect
  // can hang for undici's full default timeout.
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
  const page = await browser.newPage({ viewport: { width, height } });

  const consoleErrors = [];
  page.on('console', (m) => { if (m.type() === 'error') consoleErrors.push(m.text()); });
  page.on('pageerror', (e) => consoleErrors.push(String(e)));

  const qs = PARAMS.map((p) => [p, arg(p, null)])
    .filter(([, v]) => v !== null)
    .map(([p, v]) => `${p}=${v === true ? 'on' : v}`)
    .join('&');
  const url = `http://127.0.0.1:${port}/mcgrots.html${qs ? `?${qs}` : ''}`;

  await page.goto(url, { waitUntil: 'load' });
  await page.waitForFunction(() => !!window.__mcgrotsDebug, null, { timeout: 15000 });
  // Freeze rAF, then drive frames by hand — nothing advances that this script
  // did not advance.
  await page.evaluate(() => window.__mcgrotsDebug.pauseAuto());

  if (anchor) {
    const ids = await page.evaluate(() => window.__mcgrotsDebug.anchorIds());
    if (!ids.includes(anchor)) {
      throw new Error(`no such anchor "${anchor}" — have: ${ids.join(', ')}`);
    }
    await page.evaluate((a) => window.__mcgrotsDebug.goTo(a), anchor);
  }
  await page.evaluate((n) => window.__mcgrotsDebug.stepFrames(n), frames);

  if (shot) {
    const path = resolve(shot);
    mkdirSync(dirname(path), { recursive: true });
    writeFileSync(path, await page.screenshot({ type: 'png' }));
    console.log(`${LAUNCH_LABEL}  ${url}`);
    console.log(`shot   ${path}  (${width}x${height}, ${frames} frames stepped)`);
  }

  if (expr || file) {
    const fn = expr
      ? await page.evaluate((e) => {
          const dbg = window.__mcgrotsDebug;
          // eslint-disable-next-line no-eval
          return JSON.parse(JSON.stringify(eval(e) ?? null));
        }, expr)
      : await (await import(pathToFileURL(resolve(file)).href)).default({ page });
    console.log(typeof fn === 'string' ? fn : JSON.stringify(fn, null, 2));
  }

  if (consoleErrors.length) {
    console.log(`\nconsole errors (${consoleErrors.length}):`);
    for (const e of consoleErrors.slice(0, 10)) console.log(`  ${e}`);
  }

  if (keepOpen) {
    console.log('\n--keep-open: browser left up, ctrl-c to finish');
    await new Promise(() => {});
  }
} finally {
  if (!keepOpen) await browser?.close();
  cleanup();
}
