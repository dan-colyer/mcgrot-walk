// Bake the cut-out sprite atlases for candidate A3. G1.
//
//   node scripts/render-flats.mjs                 # all bipeds
//   node scripts/render-flats.mjs rab mcgrot
//
// Drives src/mcgrots-flats.html through Playwright and writes, per character:
//   assets/characters/<name>-flats.png    one atlas, 3x2 cells of 256px
//   assets/characters/<name>-flats.json   cell positions and hinge pivots
//
// Runs in a browser because that is where the renderer and the GLTFLoader
// already live; see the note at the top of src/mcgrots/tools/flats-page.js.
// Pomplé is skipped — he is a single rigid part (a quadruped is not a biped),
// so there is nothing to hinge and G6 gives him his own treatment.

import { spawn } from 'child_process';
import { writeFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { createServer } from 'net';
import { chromium } from 'playwright';
import { LAUNCH_OPTS } from './launch.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const BIPEDS = ['kenneth', 'mcgrot', 'morag', 'rab', 'runt', 'slab'];

const wanted = process.argv.slice(2).length ? process.argv.slice(2) : BIPEDS;

const freePort = () => new Promise((res) => {
  const s = createServer();
  s.listen(0, '127.0.0.1', () => { const p = s.address().port; s.close(() => res(p)); });
});

let server, browser;
try {
  const port = await freePort();
  server = spawn('python3', [join(root, 'scripts/serve.py'), String(port)], { cwd: join(root, 'src'), stdio: 'ignore' });
  for (let i = 0; i < 100; i++) {
    try { if ((await fetch(`http://127.0.0.1:${port}/`, { signal: AbortSignal.timeout(1500) })).ok) break; } catch { /* waiting */ }
    await new Promise((r) => setTimeout(r, 100));
  }

  browser = await chromium.launch(LAUNCH_OPTS);
  const page = await browser.newPage({ viewport: { width: 512, height: 512 } });
  page.on('pageerror', (e) => console.error('[flats] page error:', String(e)));
  await page.goto(`http://127.0.0.1:${port}/mcgrots-flats.html`, { waitUntil: 'load' });
  await page.waitForFunction(() => window.__flatsReady === true, null, { timeout: 20000 });

  for (const name of wanted) {
    const result = await page.evaluate((n) => window.__bakeFlats(n), name);
    const b64 = result.png.replace(/^data:image\/png;base64,/, '');
    const png = Buffer.from(b64, 'base64');
    writeFileSync(join(root, `assets/characters/${name}-flats.png`), png);

    const { png: _drop, ...meta } = result;
    writeFileSync(join(root, `assets/characters/${name}-flats.json`), JSON.stringify(meta));

    const missing = Object.entries(result.cells).filter(([, c]) => !c.present).map(([p]) => p);
    console.log(`${name.padEnd(9)} atlas ${(png.length / 1024).toFixed(0)}KB  ` +
      `${result.cols}x${result.rows} cells of ${result.cell}px` +
      (missing.length ? `  MISSING: ${missing.join(',')}` : ''));
  }
} finally {
  try { await browser?.close(); } catch { /* already gone */ }
  try { server?.kill(); } catch { /* already gone */ }
}
