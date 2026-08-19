// Every anchor gets a capture, and every capture is measured. The pictures
// are the deliverable a human opens; the numbers only stop a black frame
// being called a pass.

import { writeFileSync } from 'fs';
import { join } from 'path';
import {
  luminanceStats, SUBSTRATE_MIN_STDDEV, MAX_CRUSHED_FRACTION, CRUSH_LUMA, MAX_BLOWN_FRACTION, BLOWN_LUMA,
} from '../helpers.mjs';

export async function run(ctx) {
  const { page, OUT, check, shots } = ctx;
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
