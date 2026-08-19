// G6b.2. `pomple.js`'s `MCGROT_LOCAL` was a placed assumption with nothing
// standing there to check it against; `mcgrot.js` is the real figure, and
// this region gates the same claim the van/pomple/statue regions already
// gate for a rendered prop — visible on screen, not just a scene-graph
// entry (AGENTS.md's own invariant, and F19/F20's lesson) — plus the one
// thing this unit actually adds: a beret, checked directly rather than
// trusted to have worked because the geometry was added.

import { PNG } from 'pngjs';
import { writeFileSync } from 'fs';
import { join } from 'path';
import { countDiffPixels } from '../helpers.mjs';

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
      const mcgrot = d.scene.getObjectByName('mcgrot');
      if (!mcgrot) return null;
      const box = new d.THREE.Box3().setFromObject(mcgrot);
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
    writeFileSync(join(OUT, `mcgrot-${id}.png`), buf);
    rows.push({ id, rect, buf });
  }

  // Measured across all five anchors before picking this band (same
  // technique and the same 0.3%/70% band as the van region — his
  // measured range, 0.649%-4.051%, sits inside it with real margin on
  // both sides, so the band is not stretched to fit him): >0.3% rules
  // out a handful of stray pixels, <70% rules out a projection bug
  // reading as "fills the shot". THIS IS THE WEAK CHECK, and named as
  // such: `Box3().setFromObject` walks descendants regardless of
  // `.visible` (measured directly here, the same fact the statue region
  // documents about itself) — it proves the rig loaded and sits at a
  // sensible spot, not that anything actually drew. The toggle checks
  // below are what prove that.
  const areaOf = (r) => r ? Math.max(0, r.ux1 - r.ux0) * Math.max(0, r.uy1 - r.uy0) : 0;
  const areaRows = rows.map((v) => ({ id: v.id, area: areaOf(v.rect), rect: v.rect }));
  const badArea = areaRows.filter((v) => !v.rect || !v.rect.anyInFront || v.area < 0.003 || v.area > 0.7);
  check('mcgrot occupies a sensible fraction of the frame at every anchor (existence only — see the toggle checks below for visibility)',
    badArea.length === 0,
    areaRows.map((v) => `${v.id} ${(v.area * 100).toFixed(2)}%`).join(' / '));

  // Shared by both toggle checks below: mean absolute luminance diff
  // between two captures, inside one unit-rect only.
  const meanAbsDiffRect = (bufA, bufB, r) => {
    const a = PNG.sync.read(bufA), b = PNG.sync.read(bufB);
    const px0 = Math.max(0, Math.round(r.ux0 * a.width));
    const px1 = Math.min(a.width - 1, Math.round(r.ux1 * a.width));
    const py0 = Math.max(0, Math.round(r.uy0 * a.height));
    const py1 = Math.min(a.height - 1, Math.round(r.uy1 * a.height));
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

  // THE ACTUAL VISIBILITY CHECK, and why it is a toggle rather than the
  // van/pomple regions' static "not flat" technique. FAULT-INJECTED
  // first (`actor.group.visible = false` in mcgrot.js): the static
  // stddev-vs-flattest-corner check the van/pomple regions use STAYED
  // GREEN with the whole figure invisible (stddev 21.0-30.3 against a
  // flat-corner control of 0.0, comfortably over that check's own +10
  // floor) — his rect overlaps the van's own counter, shelf and
  // sauce-bottle detail behind him, which is plenty of "not flat" all by
  // itself. This is the exact weak-independence the brief's own pointer
  // (docs/MCGROTS-ROADMAP.md § 10, F20) warns a check can have at this
  // spot, measured directly rather than assumed. So this checks HIM,
  // specifically: `mcgrot` toggled invisible in the SAME boot, same
  // anchor, diffed inside his own rect only — the technique the beret
  // check below and the statue region already use, not copied from
  // van/pomple's weaker one.
  const mcgrotRows = [];
  for (const v of rows) {
    const r = v.rect;
    if (!r) { mcgrotRows.push({ id: v.id, diff: 0, missing: true }); continue; }
    await page.evaluate((a) => {
      const d = window.__mcgrotsDebug;
      d.snapTo(a);
      d.stepFrames(2);
    }, v.id);
    const withOn = await page.screenshot({ type: 'png' });
    const originalVisible = await page.evaluate(() => {
      const g = window.__mcgrotsDebug.scene.getObjectByName('mcgrot');
      const vis = g.visible; g.visible = false; window.__mcgrotsDebug.stepFrames(1);
      return vis;
    });
    const withOff = await page.screenshot({ type: 'png' });
    await page.evaluate((vis) => {
      const g = window.__mcgrotsDebug.scene.getObjectByName('mcgrot');
      g.visible = vis; window.__mcgrotsDebug.stepFrames(1);
    }, originalVisible);
    mcgrotRows.push({ id: v.id, diff: meanAbsDiffRect(withOn, withOff, r) });
  }
  // >3 rules out anti-aliasing noise on an unchanged frame — a dry run
  // (two captures with him already invisible in both) reads exactly 0.0
  // at every anchor tried, same as the beret's own dry run below; this
  // renderer is deterministic (CLAUDE.md), so any positive reading is
  // real signal. Measured range with him genuinely toggling, all five
  // anchors: see the landing commit for the numbers this was judged
  // against.
  const badMcgrot = mcgrotRows.filter((v) => v.missing || v.diff <= 3);
  check('the mcgrot rect changes when toggled off in the same boot, at every anchor (control: same toggle, dry run reads 0.0)',
    badMcgrot.length === 0,
    mcgrotRows.map((v) => v.missing ? `${v.id} MISSING` : `${v.id} diff=${v.diff.toFixed(1)}`).join(' / '));

  // THE BERET. This is the whole unit, so it is gated directly rather
  // than trusted to have worked because the geometry was added — the
  // statue's own carried lesson (F9: existence is not visibility) and
  // Pomplé's (F19: a green gate that never looked at the actual mesh).
  // THE CONTROL, named per the brief: `mcgrot:beret` toggled invisible in
  // the SAME boot, same anchor, and the mean-absolute-luminance diff
  // measured only inside the BERET's own projected rect (not his whole
  // body) — isolating the beret's own contribution from the rest of him,
  // the same isolation the statue region uses against the van/massing
  // behind it, and the check above now uses for him. A DRY RUN first
  // (two captures with the beret already off in both) reads EXACTLY 0.0
  // at every anchor tried — this renderer is deterministic (CLAUDE.md),
  // so any positive reading below is real signal, not noise. Measured
  // range with the beret genuinely toggling, all five anchors:
  // 11.09-29.24 (default boot, no `?look=` — the same boot this check
  // actually runs under). No anchor is diluted the way the statue's
  // `counter` reading is: the beret's own rect sits at the TOP of his
  // silhouette, mostly clear of the player's own capsule standing at the
  // counter anchor's viewing spot in front of him.
  const beretRows = [];
  for (const v of rows) {
    const beretRect = await page.evaluate((a) => {
      const d = window.__mcgrotsDebug;
      d.snapTo(a);
      d.stepFrames(2);
      const beret = d.scene.getObjectByName('mcgrot')?.getObjectByName('mcgrot:beret');
      if (!beret) return null;
      const box = new d.THREE.Box3().setFromObject(beret);
      let x0 = Infinity, x1 = -Infinity, y0 = Infinity, y1 = -Infinity;
      for (const x of [box.min.x, box.max.x]) {
        for (const y of [box.min.y, box.max.y]) {
          for (const z of [box.min.z, box.max.z]) {
            const p = new d.THREE.Vector3(x, y, z).project(d.camera);
            x0 = Math.min(x0, p.x); x1 = Math.max(x1, p.x);
            y0 = Math.min(y0, p.y); y1 = Math.max(y1, p.y);
          }
        }
      }
      const clamp01 = (val) => Math.max(0, Math.min(1, val));
      return {
        ux0: clamp01(x0 * 0.5 + 0.5), ux1: clamp01(x1 * 0.5 + 0.5),
        uy0: clamp01(1 - (y1 * 0.5 + 0.5)), uy1: clamp01(1 - (y0 * 0.5 + 0.5)),
      };
    }, v.id);
    if (!beretRect) { beretRows.push({ id: v.id, diff: 0, missing: true }); continue; }

    const withOn = await page.screenshot({ type: 'png' });
    const originalVisible = await page.evaluate(() => {
      const b = window.__mcgrotsDebug.scene.getObjectByName('mcgrot').getObjectByName('mcgrot:beret');
      const vis = b.visible; b.visible = false; window.__mcgrotsDebug.stepFrames(1);
      return vis;
    });
    const withOff = await page.screenshot({ type: 'png' });
    await page.evaluate((vis) => {
      const b = window.__mcgrotsDebug.scene.getObjectByName('mcgrot').getObjectByName('mcgrot:beret');
      b.visible = vis; window.__mcgrotsDebug.stepFrames(1);
    }, originalVisible);
    beretRows.push({ id: v.id, diff: meanAbsDiffRect(withOn, withOff, beretRect) });
  }
  // >3 rules out anti-aliasing noise on an unchanged frame (the dry run
  // above measured exactly 0.0, not just "under 3" — there is no
  // dithering in this renderer's deterministic output); every anchor's
  // real, measured range (11.09-29.24) clears it with wide margin.
  const badBeret = beretRows.filter((v) => v.missing || v.diff <= 3);
  check('the beret is on his head and visible — on/off diff inside the beret\'s own rect, at every anchor (control: same toggle, dry run reads 0.0)',
    badBeret.length === 0,
    beretRows.map((v) => v.missing ? `${v.id} MISSING` : `${v.id} diff=${v.diff.toFixed(1)}`).join(' / '));

  // F22: at `counter` the player's own body used to sit between the
  // camera and McGrot, covering roughly his middle third
  // (docs/briefs/g7b-pre-visit-fixes.md § F22). main.js now hides the
  // player's own body when the camera sits far enough behind it
  // (`SELF_OCCLUDE_HIDE_DIST`, measured per-anchor there).
  //
  // COUNTS PIXELS, not a mean diff — the mean-diff toggle above answers
  // "did something change"; this answers "how much of him is actually
  // visible", which a mean cannot: a small bright patch and a large dim
  // one can read the same mean while covering very different fractions of
  // his own rect. Same on/off toggle technique as the checks above
  // (mcgrot hidden vs shown, diffed inside his own AABB rect), counting
  // pixels that cross a luminance threshold rather than averaging them.
  //
  // THE CONTROL, named per the brief: the identical measurement with the
  // fix disabled (`setSelfOcclusion(false)`) — the capsule is a real,
  // depth-tested object, so with the fix off it occludes him exactly as
  // it did before this unit, and the SAME on/off-diff technique counts
  // fewer of his pixels as ever being frontmost. "He is visible" would
  // pass trivially even occluded (he always was, partly) — this proves
  // the fix's own contribution instead of assuming it.
  //
  // G7.5a: `countDiffPixels` moved to scripts/smoke/helpers.mjs — was
  // defined identically here, in taxman, and in valance (diffed
  // byte-for-byte before the merge).

  // MEASURED UNDER THE SHIPPED LOOK, not the region's default `?look=
  // none` boot — under Lambert (no look installed) McGrot renders as a
  // near-black silhouette (main.js's own "NO FILL LIGHT" note above), so
  // his luminance sits close enough to shadow that the diff threshold
  // undercounts him regardless of occlusion (measured: ~15% at EVERY
  // anchor, not just counter, so that number was reading the material,
  // not the fault). Aerial (S2, the settled style) is what Dan actually
  // sees during the visit and is what separates cleanly — see the floor
  // comment below.
  //
  // SETTLES 4 FRAMES after install, the style region's own established
  // number for a fresh cel/hull material (its S1/S2 checks below:
  // `setLook('inked'); stepFrames(4)`) — a new shader needs a compile.
  //
  // CLOCK PINNED TO A KNOWN-EMPTY MOMENT (rota.js: `whatTheyAreDoing(980)`
  // is null — the same reference point the rota region's own sequence
  // strip uses for '1-empty'). Without this the region ran on the REAL
  // wall clock (`rotaNow()`'s fallback), and rota.js's own reader stands
  // at `SPOT_LOCAL = [0.35, 2.1]` — almost exactly McGrot's own position
  // ([0.35, 1.3]) and directly between him and the `counter` camera.
  // Found by opening a failing run's own capture: the "un-inked" 15.5%
  // reading was not a material or compile race at all — it was a second
  // figure standing in front of him, present roughly half of any given
  // real-time window (readings.json's average duration is close to
  // GAP_S). This is why the fault reproduced in clean bursts (many runs
  // in a row landing inside the same real-time visit window) rather than
  // as independent per-run noise, which is what actually ruled out a
  // rendering race.
  await page.evaluate(() => window.__mcgrotsDebug.rota.setClock(980));
  await page.evaluate(() => { window.__mcgrotsDebug.setLook('aerial'); window.__mcgrotsDebug.stepFrames(4); });

  const counterRow = rows.find((v) => v.id === 'counter');
  const mcgrotVisiblePixelFraction = async () => {
    const r = counterRow.rect;
    await page.evaluate(() => { window.__mcgrotsDebug.snapTo('counter'); window.__mcgrotsDebug.stepFrames(2); });
    const withOn = await page.screenshot({ type: 'png' });
    const originalVisible = await page.evaluate(() => {
      const g = window.__mcgrotsDebug.scene.getObjectByName('mcgrot');
      const vis = g.visible; g.visible = false; window.__mcgrotsDebug.stepFrames(1);
      return vis;
    });
    const withOff = await page.screenshot({ type: 'png' });
    await page.evaluate((vis) => {
      const g = window.__mcgrotsDebug.scene.getObjectByName('mcgrot');
      g.visible = vis; window.__mcgrotsDebug.stepFrames(1);
    }, originalVisible);
    return countDiffPixels(withOn, withOff, r);
  };

  const fixOnFraction = await mcgrotVisiblePixelFraction();
  await page.evaluate(() => window.__mcgrotsDebug.setSelfOcclusion(false));
  const fixOffFraction = await mcgrotVisiblePixelFraction();
  await page.evaluate(() => window.__mcgrotsDebug.setSelfOcclusion(true));

  // FLOOR MEASURED, not guessed at 50% (the first attempt, which failed
  // against the fix's own correct output). A humanoid AABB is never
  // fully filled by its own silhouette — gaps beside the arms, above the
  // shoulders, between the legs — so even a totally unoccluded figure
  // never reads close to 100%. Measured at all five anchors with the fix
  // ON (`scripts/mcgrots-shot.mjs -f`, one-off, not committed): counter
  // 30.2%, wall 29.1%, kerb 28.8%, far 33.7%, back 30.3% — i.e. counter
  // WITH THE FIX matches the natural, unoccluded range everywhere else,
  // not a degraded version of it. Fix disabled measures 15.7%, roughly
  // half. 20% sits above the occluded reading with margin and below the
  // natural range with more.
  check('F22: McGrot is not occluded at counter — his own visible-pixel fraction clears a floor',
    fixOnFraction > 0.2,
    `on-arm: ${(fixOnFraction * 100).toFixed(1)}% of his AABB rect is actually his (>20% required, natural unoccluded range ~29-34%)`);
  check('F22 control: with the fix disabled, the same measurement comes in materially lower',
    fixOffFraction < fixOnFraction * 0.8,
    `fix on=${(fixOnFraction * 100).toFixed(1)}% fix off=${(fixOffFraction * 100).toFixed(1)}%`);

  // F22 FOLLOW-UP (found by Dan on a detached worktree, re-measured here):
  // the pinned-980 check above proves the PLAYER's own body no longer
  // occludes him. It says nothing about rota.js's reader, who used to
  // stand at the same x as McGrot ([0.35, 2.1] vs his own [0.35, 1.3] —
  // rota.js predates him; see rota.js's own SPOT_LOCAL comment) and read
  // as a featureless capsule over his torso, apron and right arm on the
  // real clock. That figure was also the F22 gate's actual flake source
  // (see the gate-flake commit) — pinning the clock made the gate
  // deterministic and silently hid this second, real fault behind it.
  //
  // rota.js's SPOT_LOCAL is now [-1.5, 2.1] (moved beside the counter,
  // clear of both McGrot and Pomplé — see that file's own comment for
  // the candidate renders this was picked from). Gated here on clocks
  // where a reader IS PRESENT (not the pinned-980 empty moment above),
  // covering the phases a real visit actually passes through: arriving,
  // mid-reading, leaving. Same `mcgrotVisiblePixelFraction` measurement
  // and the same floor as the check above — the claim is "the reader
  // does not reopen F22", not a new threshold.
  const readerPresentFractions = {};
  for (const wc of [995, 1020, 1050]) {
    await page.evaluate((w) => window.__mcgrotsDebug.rota.setClock(w), wc);
    readerPresentFractions[wc] = await mcgrotVisiblePixelFraction();
  }
  const badReaderPresent = Object.entries(readerPresentFractions).filter(([, f]) => f <= 0.2);
  check('F22 follow-up: the rota reader does not reopen the counter occlusion, at every phase of a visit',
    badReaderPresent.length === 0,
    Object.entries(readerPresentFractions).map(([wc, f]) => `t=${wc} ${(f * 100).toFixed(1)}%`).join(' / ') + ' (>20% required, each)');

  // Back to the region's own default boot (`?look=none`, real wall clock)
  // for whatever runs after this block.
  await page.evaluate(() => window.__mcgrotsDebug.setLook('none'));
  await page.evaluate(() => window.__mcgrotsDebug.rota.clearClock());

  check('console clean after driving the mcgrot region',
    consoleErrors.length === 0, consoleErrors.slice(0, 3).join(' | ') || 'no errors');
}
