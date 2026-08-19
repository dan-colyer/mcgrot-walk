import { PNG } from 'pngjs';

export async function run(ctx) {
  const { page, consoleErrors, check } = ctx;
  // The control is the five shipped camera rays and the authored statue's
  // actual world-space centre, not a scene-node count. This is the measured
  // property G3b must preserve: the quarter-turn moved the old placeholder
  // at the origin to a minimum 8.3m off the sightlines. A larger authored
  // figure must not silently turn the landmark back into the subject.
  const sightlines = await page.evaluate(() => {
    const d = window.__mcgrotsDebug;
    const root = d.scene.getObjectByName('statue');
    if (!root) return { root: false, queen: false, placeholder: false, rows: [] };
    const centre = new d.THREE.Vector3();
    root.getWorldPosition(centre);
    const rows = d.anchors.map((a) => {
      const vx = a.camera.look.x - a.camera.eye.x;
      const vz = a.camera.look.z - a.camera.eye.z;
      const wx = centre.x - a.camera.eye.x;
      const wz = centre.z - a.camera.eye.z;
      const t = (wx * vx + wz * vz) / (vx * vx + vz * vz);
      return { id: a.id, distance: Math.hypot(wx - vx * t, wz - vz * t) };
    });
    return {
      root: true,
      queen: !!root.getObjectByName('statue:queen-victoria'),
      placeholder: !!d.scene.getObjectByName('statue-placeholder'),
      rows,
    };
  });

  check('the Foot carries the authored Queen Victoria, not the placeholder',
    sightlines.root && sightlines.queen && !sightlines.placeholder,
    sightlines.root
      ? `queen=${sightlines.queen} placeholder=${sightlines.placeholder}`
      : 'statue root missing');

  const minimum = sightlines.rows.length
    ? Math.min(...sightlines.rows.map((row) => row.distance))
    : 0;
  // The documented 8.3m is rounded to one decimal place. The exact prior
  // kerb measurement is 8.283m, so 8.28m is the unrounded regression floor.
  // NOT a visibility gate (F9, G3 phase gate) — this is a distance between
  // two numbers, which a hidden object still has. `statue.visible = false`
  // leaves it green. Kept because it guards a real, separate regression:
  // the landmark becoming the subject, a measured property G3b had to
  // preserve when the quarter-turn moved the placeholder off the
  // sightlines. The visibility gate is below.
  const MIN_OFF_SIGHTLINE = 8.28;
  check('Queen Victoria holds the measured 8.3m off-sightline baseline (not a visibility gate — see below)',
    sightlines.rows.length === 5 && minimum >= MIN_OFF_SIGHTLINE,
    sightlines.rows.length
      ? sightlines.rows.map((row) => `${row.id} ${row.distance.toFixed(3)}m`).join(' / ')
      : 'no camera sightlines');

  // F9, G3f: a REAL visibility gate. Starts from the `van` region's shape
  // (project the world Box3 through the LIVE camera at each anchor after a
  // real `snapTo`, clamp to viewport) but the CONTENT half could not stay
  // unchanged — measured below, not assumed.
  const statueIds = await page.evaluate(() => window.__mcgrotsDebug.anchorIds());
  const statueRows = [];
  for (const id of statueIds) {
    await page.evaluate((a) => {
      const d = window.__mcgrotsDebug;
      d.setMarkersVisible(false);
      d.snapTo(a);
      d.stepFrames(2);
    }, id);

    const rect = await page.evaluate(() => {
      const d = window.__mcgrotsDebug;
      const statue = d.scene.getObjectByName('statue');
      if (!statue) return null;
      const box = new d.THREE.Box3().setFromObject(statue);
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
      return { ux0, ux1, uy0, uy1, anyInFront, rawX0: x0, rawX1: x1 };
    });

    // MEASURED: `Box3().setFromObject` walks descendants regardless of
    // `.visible` — so this rect, like the van's, is blind to a visibility
    // fault on its own. That is fine for the van, whose rect sits against
    // flat ground/sky. It is NOT fine here: the statue's rect at these
    // anchors overlaps the massing behind it (confirmed by rendering —
    // `back`'s rect covers the building's beige wall and its colour-band
    // edge), so a plain "does this rect hold non-flat content" check reads
    // the BUILDING as content and passes even with `statue.visible =
    // false`. Verified directly: injecting the fault and re-running the
    // corner-flatness version of this check (the van's technique, tried
    // first, kept in git history rather than repeated here) left it green,
    // `back` reading statue=51.5 flat=0.0 with the statue OFF. So the
    // content check below is a live A/B, not a fixed-corner comparison —
    // it renders the SAME anchor with the statue toggled off, in the same
    // boot, and diffs the two frames inside the rect. A building behind the
    // statue is identical in both frames and cancels out; only the
    // statue's own pixels survive the diff.
    const withOn = await page.screenshot({ type: 'png' });
    // Restore to whatever `.visible` ACTUALLY was, not a hardcoded `true`.
    // The first version of this check hardcoded the restore, which silently
    // un-injected `statue.visible = false` after the first anchor —
    // `counter` (processed first) read the fault correctly, but by `wall`
    // the restore had already flipped it back on, so three of the four
    // checked anchors were testing a scene the check itself had repaired.
    // Caught by actually reading the fault-injection output rather than
    // trusting the design: the "broken" run showed wall/far/back at their
    // normal 27-32 diffs, unchanged from the working run.
    const originalVisible = await page.evaluate(() => window.__mcgrotsDebug.scene.getObjectByName('statue').visible);
    await page.evaluate(() => {
      const d = window.__mcgrotsDebug;
      d.scene.getObjectByName('statue').visible = false;
      d.stepFrames(1);
    });
    const withOff = await page.screenshot({ type: 'png' });
    await page.evaluate((v) => {
      const d = window.__mcgrotsDebug;
      d.scene.getObjectByName('statue').visible = v;
      d.stepFrames(1);
    }, originalVisible);

    statueRows.push({ id, rect, withOn, withOff });
  }

  // MEASURED: at `kerb` the statue's projected box is entirely off the
  // right edge of the frame (raw NDC x0=1.344, x1=8.235 — both past +1, the
  // clamped rect collapses to a zero-area sliver at the boundary). `kerb`
  // is the closest anchor to the statue by straight-line distance (§ F1's
  // camera-derivation comment in `anchors.js`), but the derived shot points
  // the camera past it toward the van, not at it — the statue simply is not
  // in that frame. A band widened to admit a zero-area anchor would admit
  // `statue.visible = false` too, so `kerb` is excluded here BY NAME with
  // its measured number, not folded into a looser band. The sightline check
  // above still covers it — that check does not need the object on screen.
  const AREA_EXCLUDED = 'kerb';
  const areaOf = (r) => r ? Math.max(0, r.ux1 - r.ux0) * Math.max(0, r.uy1 - r.uy0) : 0;
  const areaVisRows = statueRows.filter((v) => v.id !== AREA_EXCLUDED);
  const areaExcludedRow = statueRows.find((v) => v.id === AREA_EXCLUDED);
  const areaRows = areaVisRows.map((v) => ({ id: v.id, area: areaOf(v.rect) }));
  // Same band as the van region: >0.3% rules out a handful of stray pixels
  // at the horizon, <70% rules out a projection bug reading as "fills the
  // shot". Measured range across the four covered anchors is 5.8%-7.6%, so
  // this band is not stretched to fit — it is the van's own, reused because
  // it already rules out the right failure modes and the statue's measured
  // numbers sit comfortably inside it. NOTE: like the van's own area check,
  // this proves the geometry is THERE and sensibly sized — it does not
  // prove it RENDERS (Box3 does not read `.visible`). That is what the
  // content check below is for.
  const badArea = areaRows.filter((v) => v.area < 0.003 || v.area > 0.7);
  check(`the statue occupies a sensible fraction of the frame (${areaVisRows.map((v) => v.id).join(', ')}; ${AREA_EXCLUDED} excluded, see comment)`,
    badArea.length === 0,
    areaRows.map((v) => `${v.id} ${(v.area * 100).toFixed(1)}%`).join(' / ') +
      (areaExcludedRow ? ` / ${AREA_EXCLUDED} excluded (raw ndc x0=${areaExcludedRow.rect?.rawX0.toFixed(2)})` : ''));

  // Mean absolute luminance difference between the on/off frames, inside
  // the rect only — the statue's own contribution, isolated from whatever
  // sits behind it in the same shot.
  const meanAbsDiff = (bufA, bufB, x0, x1, y0, y1) => {
    const a = PNG.sync.read(bufA), b = PNG.sync.read(bufB);
    const px0 = Math.max(0, Math.round(x0 * a.width));
    const px1 = Math.min(a.width - 1, Math.round(x1 * a.width));
    const py0 = Math.max(0, Math.round(y0 * a.height));
    const py1 = Math.min(a.height - 1, Math.round(y1 * a.height));
    let sum = 0, n = 0;
    for (let y = py0; y <= py1; y++) {
      for (let x = px0; x <= px1; x++) {
        const o = (y * a.width + x) * 4;
        const la = 0.2126 * a.data[o] + 0.7152 * a.data[o + 1] + 0.0722 * a.data[o + 2];
        const lb = 0.2126 * b.data[o] + 0.7152 * b.data[o + 1] + 0.0722 * b.data[o + 2];
        sum += Math.abs(la - lb); n++;
      }
    }
    return n ? sum / n : 0;
  };
  const statueContentRowsAll = statueRows.map((v) => {
    const r = v.rect;
    const diff = r ? meanAbsDiff(v.withOn, v.withOff, r.ux0, r.ux1, r.uy0, r.uy1) : 0;
    return { id: v.id, diff };
  });
  // MEASURED: `kerb` has no rect (excluded above) and `counter` genuinely
  // toggles (visually confirmed: a small dark triangle plus a corner of the
  // plinth appear/disappear at the frame's right edge) but reads only 1.0 —
  // against a confirmed-broken baseline of exactly 0.0 (measured by
  // injecting `statue.visible = false` at construction, so the toggle's
  // "on" capture was already off). 1.0 is real signal, not noise — three
  // repeat runs all read exactly 1.0, this renderer is deterministic
  // (`CLAUDE.md`) — but it is real signal DILUTED by averaging over a rect
  // that is >90% empty sky/ground: at `counter` the statue's own AABB is
  // clipped hard against the frame edge, so only a sliver of the box is
  // actual statue. A threshold that passes 1.0 while failing 0.0 exists
  // (>0.5) but has near-zero margin and would mean little if the pose or
  // camera ever moved a few pixels. Per the brief's own instruction, this
  // is said plainly and `counter` is excluded by name rather than the
  // threshold being shaved to fit it. Content check covers 3 of 5 anchors.
  const CONTENT_EXCLUDED = new Set(['kerb', 'counter']);
  const statueContentRows = statueContentRowsAll.filter((v) => !CONTENT_EXCLUDED.has(v.id));
  const excludedContentRows = statueContentRowsAll.filter((v) => CONTENT_EXCLUDED.has(v.id));
  // >3 rules out anti-aliasing/dithering noise on an unchanged frame (two
  // renders of the identical statue-off scene read <0.5 in a dry run);
  // measured range with the statue genuinely toggling, at the three
  // covered anchors, is 27.6-32.0.
  const badStatueContent = statueContentRows.filter((v) => v.diff <= 3);
  check(`the statue rect changes when toggled off in the same boot (${statueContentRows.map((v) => v.id).join(', ')}; ${[...CONTENT_EXCLUDED].join(', ')} excluded, see comment)`,
    badStatueContent.length === 0,
    statueContentRows.map((v) => `${v.id} on-vs-off diff=${v.diff.toFixed(1)}`).join(' / ') +
      ' / excluded: ' + excludedContentRows.map((v) => `${v.id} diff=${v.diff.toFixed(1)}`).join(', '));

  check('console clean after driving the statue region',
    consoleErrors.length === 0, consoleErrors.slice(0, 3).join(' | ') || 'no errors');
}
