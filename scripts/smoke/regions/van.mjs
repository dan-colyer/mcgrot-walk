// G3a. `van.js` replaces the G0 blockout box with the real van, price board
// and ground dressing. The claim that matters is not "the van exists in the
// scene" — a mesh count proves the calculator ran, not that a player would
// ever see it — it is that the van is ACTUALLY VISIBLE, at a sensible size,
// from every one of the five shots the game uses.

import { PNG } from 'pngjs';
import { writeFileSync } from 'fs';
import { join } from 'path';

export async function run(ctx) {
  const { page, OUT, consoleErrors, check } = ctx;
  const ids = await page.evaluate(() => window.__mcgrotsDebug.anchorIds());
  const vanRows = [];
  for (const id of ids) {
    await page.evaluate((a) => {
      const d = window.__mcgrotsDebug;
      d.setMarkersVisible(false);
      d.snapTo(a);
      d.stepFrames(2);
    }, id);

    // The van's own world-space bounding box, projected through the LIVE
    // camera this anchor actually uses — not a hand-measured rect. Clamped
    // to the viewport, so a van that is half off-screen is measured by the
    // half that would actually show, not by geometry outside the frame.
    const rect = await page.evaluate(() => {
      const d = window.__mcgrotsDebug;
      const van = d.scene.getObjectByName('van');
      if (!van) return null;
      const box = new d.THREE.Box3().setFromObject(van);
      let x0 = Infinity, x1 = -Infinity, y0 = Infinity, y1 = -Infinity;
      let anyInFront = false;
      for (const x of [box.min.x, box.max.x]) {
        for (const y of [box.min.y, box.max.y]) {
          for (const z of [box.min.z, box.max.z]) {
            const p = new d.THREE.Vector3(x, y, z).project(d.camera);
            if (p.z < 1) anyInFront = true;
            x0 = Math.min(x0, p.x); x1 = Math.max(x1, p.x);
            y0 = Math.min(y0, p.y); y1 = Math.max(y1, p.y);
          }
        }
      }
      const clamp01 = (v) => Math.max(0, Math.min(1, v));
      const ux0 = clamp01(x0 * 0.5 + 0.5), ux1 = clamp01(x1 * 0.5 + 0.5);
      const uy0 = clamp01(1 - (y1 * 0.5 + 0.5)), uy1 = clamp01(1 - (y0 * 0.5 + 0.5));
      return { ux0, ux1, uy0, uy1, anyInFront };
    });

    const buf = await page.screenshot({ type: 'png' });
    writeFileSync(join(OUT, `van-${id}.png`), buf);
    vanRows.push({ id, rect, buf });
  }

  // Fraction of the frame the van's projected footprint covers. Neither
  // end is arbitrary: >0.3% rules out a van that is a handful of stray
  // pixels at the horizon (technically "in frame", not visible to a
  // player), and <70% rules out a projection bug that reads as the van
  // filling the shot outright — measured at `counter` (the closest anchor,
  // where the player stands nearest it) the AXIS-ALIGNED bounding box
  // covers 57.6% even though the van's own silhouette — angled, with a
  // dark opening cut into it — reads as visibly smaller in the actual
  // capture. An AABB always overstates a box-shaped mesh's true footprint;
  // the ceiling has room for that without going slack.
  const areaOf = (r) => r ? Math.max(0, r.ux1 - r.ux0) * Math.max(0, r.uy1 - r.uy0) : 0;
  const areaRows = vanRows.map((v) => ({ id: v.id, area: areaOf(v.rect), rect: v.rect }));
  const badArea = areaRows.filter((v) => !v.rect || !v.rect.anyInFront || v.area < 0.003 || v.area > 0.7);
  check('the van occupies a sensible fraction of the frame at every anchor',
    badArea.length === 0,
    areaRows.map((v) => `${v.id} ${(v.area * 100).toFixed(1)}%`).join(' / '));

  // THE CONTROL: the same stddev measurement, same technique, applied to a
  // patch known to be flat — proving the technique can read "flat" as flat
  // before trusting it to read the van's rect as "not flat". The first
  // version used a fixed sky strip across the top of the window and it was
  // WRONG at three of five anchors: the massing's roofline crosses that
  // strip at `counter`/`wall`/`kerb` (the closer anchors, where the
  // buildings fill more of the frame), so the "sky" patch was actually
  // half sky and half building edge — a hard line, which reads as high
  // variance under this exact metric. Measured: that strip's stddev was
  // 41-45 at the three close anchors, the same order of magnitude as the
  // van itself, which made the check worthless there without saying so.
  //
  // Fixed by not assuming WHERE the flat region is. Four small corner
  // patches (6% x 5% of the frame) are sampled per shot and the FLATTEST
  // of the four is taken as the control — whichever corner the roofline
  // and any other object happens to miss. A corner patch this small is
  // also far less likely to straddle an edge even when it does clip a
  // building face, since it has so little area to do it in.
  const stddevOf = (buf, x0, x1, y0, y1) => {
    const png = PNG.sync.read(buf);
    const px0 = Math.max(0, Math.round(x0 * png.width));
    const px1 = Math.min(png.width - 1, Math.round(x1 * png.width));
    const py0 = Math.max(0, Math.round(y0 * png.height));
    const py1 = Math.min(png.height - 1, Math.round(y1 * png.height));
    let sum = 0, sumSq = 0, n = 0;
    for (let y = py0; y <= py1; y++) {
      for (let x = px0; x <= px1; x++) {
        const o = (y * png.width + x) * 4;
        const l = 0.2126 * png.data[o] + 0.7152 * png.data[o + 1] + 0.0722 * png.data[o + 2];
        sum += l; sumSq += l * l; n++;
      }
    }
    if (!n) return 0;
    const mean = sum / n;
    return Math.sqrt(Math.max(0, sumSq / n - mean * mean));
  };
  const flattestCorner = (buf) => Math.min(
    stddevOf(buf, 0, 0.06, 0, 0.05),
    stddevOf(buf, 0.94, 1, 0, 0.05),
    stddevOf(buf, 0, 0.06, 0.95, 1),
    stddevOf(buf, 0.94, 1, 0.95, 1),
  );
  const contentRows = vanRows.map((v) => {
    const r = v.rect;
    const vanStddev = r ? stddevOf(v.buf, r.ux0, r.ux1, r.uy0, r.uy1) : 0;
    const flatStddev = flattestCorner(v.buf);
    return { id: v.id, vanStddev, flatStddev };
  });
  const badContent = contentRows.filter((v) => v.vanStddev <= v.flatStddev + 10);
  check('the van rect holds rendered content, not flat background (control: the flattest corner)',
    badContent.length === 0,
    contentRows.map((v) => `${v.id} van=${v.vanStddev.toFixed(1)} flat=${v.flatStddev.toFixed(1)}`).join(' / '));

  check('console still clean after driving the van region',
    consoleErrors.length === 0, consoleErrors.slice(0, 3).join(' | ') || 'no errors');
}
