// G6a. The body re-check found neither G1 candidate transfers to a
// quadruped (docs/briefs/g6a-pomple-presentation.md), so pomple.js builds
// its own two-part rig. Two claims: he is actually VISIBLE (not a scene-
// graph entry with nothing drawn — the statue's own F-numbered lesson,
// AGENTS.md § invariants), and the head-turn — "the load-bearing
// animation in the whole game" per the roadmap — actually tracks the
// player rather than just existing.

import { PNG } from 'pngjs';
import { writeFileSync } from 'fs';
import { join } from 'path';

export async function run(ctx) {
  const { page, OUT, consoleErrors, check } = ctx;
  const ids = await page.evaluate(() => window.__mcgrotsDebug.anchorIds());
  const rows = [];
  for (const id of ids) {
    const rect = await page.evaluate((a) => {
      const d = window.__mcgrotsDebug;
      d.setMarkersVisible(false);
      d.snapTo(a);
      d.stepFrames(2);
      const pomple = d.scene.getObjectByName('pomple');
      if (!pomple) return null;
      const box = new d.THREE.Box3().setFromObject(pomple);
      let x0 = Infinity, x1 = -Infinity, y0 = Infinity, y1 = -Infinity, anyInFront = false;
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
    }, id);
    const buf = await page.screenshot({ type: 'png' });
    writeFileSync(join(OUT, `pomple-${id}.png`), buf);
    rows.push({ id, rect, buf });
  }

  // He is a small dog beside a van, not the van — a low floor, not the
  // van region's 0.3%. Measured from all five anchors before picking it:
  // 0.088-0.497% of the frame, so 0.03% clears "present in frame" with
  // margin while still catching a degenerate (zero-area or off-screen)
  // projection.
  const areaOf = (r) => r ? Math.max(0, r.ux1 - r.ux0) * Math.max(0, r.uy1 - r.uy0) : 0;
  const areaRows = rows.map((v) => ({ id: v.id, area: areaOf(v.rect), rect: v.rect }));
  const badArea = areaRows.filter((v) => !v.rect || !v.rect.anyInFront || v.area < 0.0003);
  check('pomple is present and non-degenerate in frame at every anchor',
    badArea.length === 0,
    areaRows.map((v) => `${v.id} ${(v.area * 100).toFixed(3)}%`).join(' / '));

  // THE CONTROL, same technique as the van region above: the flattest of
  // four small corner patches, proving the stddev metric can read "flat"
  // as flat before trusting it to read pomple's rect as "not flat". Only
  // at the two nearest anchors (counter, kerb) — his rect is a few dozen
  // pixels at the far anchors, too small for a stddev measurement to mean
  // anything either way.
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
  const contentRows = rows.filter((v) => v.id === 'counter' || v.id === 'kerb').map((v) => {
    const r = v.rect;
    const pompleStddev = r ? stddevOf(v.buf, r.ux0, r.ux1, r.uy0, r.uy1) : 0;
    const flatStddev = flattestCorner(v.buf);
    return { id: v.id, pompleStddev, flatStddev };
  });
  const badContent = contentRows.filter((v) => v.pompleStddev <= v.flatStddev + 5);
  check('the pomple rect holds rendered content, not flat background (control: the flattest corner)',
    badContent.length === 0,
    contentRows.map((v) => `${v.id} pomple=${v.pompleStddev.toFixed(1)} flat=${v.flatStddev.toFixed(1)}`).join(' / '));

  // THE HEAD-TURN GATE. Two viewer positions, both close enough that
  // pomple.js's own attention state machine holds 'player' throughout
  // (measured: counter 3.31 m, kerb 5.36 m from him, both under
  // ATTENTION_ENTER_R) — so the yaw difference below is attributable to
  // the tracked position changing, not to attention switching targets
  // mid-measurement. THE CONTROL, named per the brief: the same two
  // positions with tracking switched off — the head must hold its rest
  // yaw at both, proving the difference above comes from the tracking
  // mechanism and not from idle settle or some other incidental motion.
  const headYawAt = async (id) => {
    await page.evaluate((a) => {
      const d = window.__mcgrotsDebug;
      d.snapTo(a);
      d.stepFrames(150);
    }, id);
    return page.evaluate(() => window.__mcgrotsDebug.pomple.headYaw);
  };
  const onA = await headYawAt('counter');
  const onB = await headYawAt('kerb');
  await page.evaluate(() => window.__mcgrotsDebug.pomple.setTracking(false));
  const offA = await headYawAt('counter');
  const offB = await headYawAt('kerb');
  await page.evaluate(() => window.__mcgrotsDebug.pomple.setTracking(true));

  check('the head-turn tracks the player: yaw differs between two viewer positions',
    Math.abs(onA - onB) > 0.2,
    `tracking on: counter=${onA.toFixed(3)} kerb=${onB.toFixed(3)} (Δ=${Math.abs(onA - onB).toFixed(3)})`);
  check('control: with tracking off, the same two positions do not move the head',
    Math.abs(offA) < 0.01 && Math.abs(offB) < 0.01,
    `tracking off: counter=${offA.toFixed(3)} kerb=${offB.toFixed(3)}`);

  // F21: he was built fire-and-forget at module scope with nothing
  // awaiting his own readiness, so looks.js's one-time traverse at
  // install ran before his meshes existed — he stayed a plain, un-inked
  // MeshLambertMaterial under every look forever. `mcgrot.js` gets the
  // same claim gated above (his beret toggles); this reads the exact pair
  // of properties the diagnostic in docs/briefs/g7b-pre-visit-fixes.md
  // used to confirm the fault, and the fix, directly on the live scene —
  // material type and the presence of an ink hull, not "install()
  // returned true" (looks.js's own stats() comment: that only proves the
  // function ran).
  //
  // THE CONTROL, named per the brief: the identical read under
  // `?look=none`, which must show the plain material and no hull — that
  // is what isolates the LOOK's contribution from "he has some material
  // or other", the same isolation the S1 region's zero-width control
  // uses. Reset to 'none' at the end either way, since that is the
  // default boot every later region in this file assumes.
  const pompleMaterials = async () => page.evaluate(() => {
    const g = window.__mcgrotsDebug.scene.getObjectByName('pomple');
    const at = (name) => g.getObjectByName(name)?.material?.type || null;
    const hull = (name) => !!g.getObjectByName(`hull:${name}`);
    return {
      body: at('pomple:body'), head: at('pomple:head'),
      hullBody: hull('pomple:body'), hullHead: hull('pomple:head'),
    };
  });
  await page.evaluate(() => { window.__mcgrotsDebug.setLook('aerial'); window.__mcgrotsDebug.stepFrames(1); });
  const inkedRead = await pompleMaterials();
  check('F21: pomple is cel-shaded and inked under a look (?look=aerial)',
    inkedRead.body === 'MeshToonMaterial' && inkedRead.head === 'MeshToonMaterial'
    && inkedRead.hullBody && inkedRead.hullHead,
    `body=${inkedRead.body} head=${inkedRead.head} hullBody=${inkedRead.hullBody} hullHead=${inkedRead.hullHead}`);

  await page.evaluate(() => { window.__mcgrotsDebug.setLook('none'); window.__mcgrotsDebug.stepFrames(1); });
  const plainRead = await pompleMaterials();
  check('F21 control: under ?look=none he stays plain, un-inked (isolates the look\'s contribution)',
    plainRead.body === 'MeshLambertMaterial' && plainRead.head === 'MeshLambertMaterial'
    && !plainRead.hullBody && !plainRead.hullHead,
    `body=${plainRead.body} head=${plainRead.head} hullBody=${plainRead.hullBody} hullHead=${plainRead.hullHead}`);

  check('console still clean after driving the pomple region',
    consoleErrors.length === 0, consoleErrors.slice(0, 3).join(' | ') || 'no errors');
}
