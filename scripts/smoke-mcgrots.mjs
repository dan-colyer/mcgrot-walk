// McGrot's gate suite. G0.
//
// A SEPARATE FILE FROM scripts/smoke.mjs, deliberately. That suite is 7,066
// lines covering a 1617 m street which is now PAUSED (docs/MCGROTS-ROADMAP.md
// § 8). Extending it would couple this game's gates to a codebase nobody is
// allowed to touch, and would make every McGrot's run pay for the street's
// 20 regions. This one starts small and stays fast.
//
// What it shares: scripts/launch.mjs, so both games render on the same
// browser. Goldens are renderer-specific and a suite that boots differently
// from its sibling cannot be compared with it.
//
// WHAT THIS SUITE DELIBERATELY DOES NOT PROVE (G0 scope):
//   - That anything is ANIMATED. The actor is a capsule that slides. There is
//     no rig in this project and no walk cycle; G1 answers that and nothing
//     here should be read as evidence about it.
//   - That the pitch looks GOOD. The contrast floor catches a black frame. It
//     cannot tell a composed shot from an ugly one — that is Dan's judgement
//     at G7, and the captures below exist to be opened, not just measured.
//   - Anything about style. G2 owns that.

import { spawn, spawnSync } from 'child_process';
import { mkdirSync, writeFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { createServer } from 'net';
import { createHash } from 'crypto';
import { chromium } from 'playwright';
import { PNG } from 'pngjs';
import { LAUNCH_OPTS, LAUNCH_LABEL } from './launch.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const OUT = join(root, 'docs/smoke/captures/mcgrots/g0');
const DIALOGUE_FILE = join(root, 'generated/mcgrots-dialogue.json');

// 'dialogue' is pure node against two JSON files — no page, no server. Kept
// out of BROWSER_REGIONS below so `--only=dialogue` never pays for a boot.
const REGIONS = ['boot', 'camera', 'statue', 'anchors', 'van', 'seat', 'rota', 'audio', 'style', 'dialogue'];
const BROWSER_REGIONS = REGIONS.filter((r) => r !== 'dialogue');
const ONLY = new Set(process.argv.filter((a) => a.startsWith('--only='))
  .flatMap((a) => a.slice(7).split(',')));
const wants = (r) => ONLY.size === 0 || ONLY.has(r);
const needsBrowser = BROWSER_REGIONS.some(wants);

const results = [];
const skipped = [];
const check = (name, pass, detail) => results.push({ name, pass, detail });

// Same measurement as scripts/smoke.mjs's luminanceStats — a frame's luminance
// mean and stddev. Duplicated rather than imported because that module is the
// paused street's; the CONSTANT below is the thing that must not drift, and it
// is quoted from there.
const SUBSTRATE_MIN_STDDEV = 8;   // of 255. Below this a frame is too flat to gate anything.

// THE CRUSH FLOOR EXISTS BECAUSE THE CONTRAST FLOOR MISSED. G0's first render
// put 53.9% of the establishing frame under luminance 12 — the ground took
// almost no light — and the suite called it a pass: a frame that is half black
// and half brown has a stddev of 34.6, comfortably over the floor. Mean and
// stddev are both blind to a bimodal frame. This measures the thing that
// actually went wrong.
const MAX_CRUSHED_FRACTION = 12;   // percent of pixels under CRUSH_LUMA
const CRUSH_LUMA = 12;             // of 255
const MAX_BLOWN_FRACTION = 2;      // percent over BLOWN_LUMA
const BLOWN_LUMA = 245;

function luminanceStats(buf) {
  const png = PNG.sync.read(buf);
  let sum = 0, sumSq = 0, crushed = 0, blown = 0;
  const n = png.width * png.height;
  for (let i = 0; i < n; i++) {
    const o = i * 4;
    const l = 0.2126 * png.data[o] + 0.7152 * png.data[o + 1] + 0.0722 * png.data[o + 2];
    sum += l; sumSq += l * l;
    if (l < CRUSH_LUMA) crushed++;
    if (l > BLOWN_LUMA) blown++;
  }
  const mean = sum / n;
  return {
    mean,
    stddev: Math.sqrt(Math.max(0, sumSq / n - mean * mean)),
    crushed: (crushed / n) * 100,
    blown: (blown / n) * 100,
  };
}

const freePort = () => new Promise((res, rej) => {
  const s = createServer();
  s.on('error', rej);
  s.listen(0, '127.0.0.1', () => { const p = s.address().port; s.close(() => res(p)); });
});

let server, browser;
const shutdown = () => {
  try { browser?.close(); } catch { /* already gone */ }
  try { server?.kill(); } catch { /* already gone */ }
};
process.on('SIGINT', () => { shutdown(); process.exit(130); });

const started = Date.now();
let shots = [];

try {
  // ------------------------------------------------------------ dialogue ---
  // G5a's checker (scripts/check-mcgrots-dialogue.mjs) is Codex's file and
  // runs main() unconditionally on import (no `if (import.meta.url === ...)`
  // guard), so importing its exported functions would re-run its own CLI
  // arg parser against THIS script's argv. Shelling out instead, via
  // spawnSync directly rather than a shell pipe — Codex's own fault
  // injection found that a shell pipeline reports the LAST command's exit
  // status, not the checker's, and a checker that prints FAIL but exits 0
  // passes silently in any automated caller. spawnSync's `.status` is the
  // checker's own exit code, nothing in between to lose it.
  if (wants('dialogue')) {
    const result = spawnSync('node', [join(root, 'scripts/check-mcgrots-dialogue.mjs'), '--file', DIALOGUE_FILE],
      { encoding: 'utf8' });
    check('no generated dialogue line shares a seven-word window with the comic corpus (or trips the sensitivity backstop)',
      result.status === 0,
      `exit ${result.status}\n${(result.stdout + result.stderr).trim().split('\n').slice(-6).join('\n')}`);
  }

  if (needsBrowser) {
    mkdirSync(OUT, { recursive: true });
    const port = await freePort();
    // Rooted at src/, exactly as `npm run dev` is — so /mcgrots.html resolves and
    // `assets/` (a symlink to ../assets) is reachable.
    server = spawn('python3', [join(root, 'scripts/serve.py'), String(port)], {
      cwd: join(root, 'src'), stdio: 'ignore',
    });

    // 127.0.0.1, never `localhost`: serve.py binds IPv4 only and a ::1 connect
    // can hang for undici's full default timeout, eating the retry budget.
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
    const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });

    const consoleErrors = [];
    page.on('console', (m) => { if (m.type() === 'error') consoleErrors.push(m.text()); });
    page.on('pageerror', (e) => consoleErrors.push(String(e)));

    await page.goto(`http://127.0.0.1:${port}/mcgrots.html`, { waitUntil: 'load' });
    await page.waitForFunction(() => !!window.__mcgrotsDebug, null, { timeout: 15000 });
    // G4b: clear the gesture surface once, here, rather than per check — every
    // region below shares this one boot.
    await page.evaluate(() => window.__mcgrotsDebug.card.dismiss());
    // Freeze rAF, then drive frames by hand. Everything below is deterministic
    // because nothing advances that this script did not advance.
    await page.evaluate(() => window.__mcgrotsDebug.pauseAuto());

    // ---------------------------------------------------------------- boot ---
    if (wants('boot')) {
      const info = await page.evaluate(() => ({
        buildings: window.__mcgrotsDebug.buildingCount,
        anchors: window.__mcgrotsDebug.anchorIds(),
        booted: document.body.classList.contains('booted'),
      }));

      // 41 is measured, not assumed: the footprints within MASSING_RADIUS (80 m)
      // of the Foot. If this moves, either leith.json changed or the radius did.
      check('the Foot stands up 41 real building footprints',
        info.buildings === 41, `buildingCount=${info.buildings}`);
      check('five anchors resolve',
        info.anchors.length === 5, info.anchors.join(', '));
      check('boot completes (body.booted)', info.booted, `booted=${info.booted}`);
      check('console is clean through boot',
        consoleErrors.length === 0, consoleErrors.slice(0, 3).join(' | ') || 'no errors');
    }

    // -------------------------------------------------------------- camera ---
    // Every anchor gets a capture, and every capture is measured. The pictures
    // are the deliverable a human opens; the numbers only stop a black frame
    // being called a pass.
    shots = [];
    if (wants('camera')) {
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

    // ------------------------------------------------------------- statue ---
    if (wants('statue')) {
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

    // ------------------------------------------------------------- anchors ---
    if (wants('anchors')) {
      // The walk. Not an animation test — a test that requesting a spot moves
      // the actor to it and parks them there.
      const walk = await page.evaluate(() => {
        const d = window.__mcgrotsDebug;
        d.snapTo('back');
        const from = d.state().actor;
        d.goTo('counter');
        const midway = [];
        for (let i = 0; i < 60; i++) { d.stepFrames(1); if (i % 20 === 0) midway.push({ ...d.state().actor }); }
        const moving = d.state().walking;
        // Long enough to arrive from any anchor at 1.35 m/s.
        d.stepFrames(600);
        return { from, midway, movingAtOneSecond: moving, end: d.state() };
      });

      const target = await page.evaluate(() =>
        window.__mcgrotsDebug.anchors.find((a) => a.id === 'counter').pos);

      const dist = Math.hypot(walk.end.actor.x - target.x, walk.end.actor.z - target.z);
      check('walking to an anchor arrives at it',
        dist < 0.1 && walk.end.anchor === 'counter' && !walk.end.walking,
        `ended ${dist.toFixed(3)}m from counter, anchor=${walk.end.anchor}, walking=${walk.end.walking}`);

      check('the walk is a walk, not a teleport',
        walk.movingAtOneSecond && walk.midway.some((p) =>
          Math.hypot(p.x - walk.from.x, p.z - walk.from.z) > 0.2 &&
          Math.hypot(p.x - target.x, p.z - target.z) > 0.2),
        `sampled ${walk.midway.map((p) => `(${p.x.toFixed(1)},${p.z.toFixed(1)})`).join(' ')}`);

      // A sitting spot must actually sit, or the seated camera height is a lie.
      const sat = await page.evaluate(() => {
        const d = window.__mcgrotsDebug;
        d.goTo('wall'); d.stepFrames(900);
        return d.state();
      });
      check('a sitting anchor ends in the sit state',
        sat.actorState === 'sit' && sat.anchor === 'wall',
        `anchor=${sat.anchor} state=${sat.actorState}`);

      check('console still clean after driving the anchors',
        consoleErrors.length === 0, consoleErrors.slice(0, 3).join(' | ') || 'no errors');

      // F6: the camera used to CUT to the destination shot the instant a walk
      // began — `current = a` was assigned before the walk started, and
      // `placeCamera()` read `current.camera` every frame regardless of
      // whether the actor had gone anywhere yet. Measured before the fix:
      // camera moved 10.324m on frame 1 of one `goTo('far')` from `counter`
      // while the actor moved 0.020m.
      //
      // GATED AS A FRACTION OF THE TOTAL CAMERA TRAVEL, not an absolute
      // distance — anchors sit at different separations, and a fixed-metre
      // threshold would be tuned to one pair and silently wrong for another.
      //
      // THE CONTROL IS THE SNAP PATH, not the walk arm with the fix toggled
      // off through the same code path. `goTo(id, { snap: true })` is a real,
      // separate branch that must stay a hard cut — the boot call and S4's
      // gutter cut both depend on it — so measuring it alongside the walk arm
      // is on-vs-off across two branches that genuinely differ, not a
      // calculation checked against itself.
      const cameraTravel = async (mode) => page.evaluate((m) => {
        const d = window.__mcgrotsDebug;
        d.snapTo('back');
        const from = d.anchors.find((a) => a.id === 'back').camera.eye;
        const to = d.anchors.find((a) => a.id === 'far').camera.eye;
        const total = Math.hypot(to.x - from.x, to.y - from.y, to.z - from.z);
        if (m === 'snap') d.snapTo('far'); else d.goTo('far');
        d.stepFrames(1);
        const c1 = d.state().camera;
        const frame1 = Math.hypot(c1.x - from.x, c1.y - from.y, c1.z - from.z);
        // Long enough to arrive from any anchor pair at 1.35 m/s.
        d.stepFrames(600);
        const end = d.state().camera;
        const endDelta = Math.hypot(end.x - to.x, end.y - to.y, end.z - to.z);
        return { total, frame1, endDelta };
      }, mode);

      const cameraWalk = await cameraTravel('walk');
      const cameraSnap = await cameraTravel('snap');
      const walkFrac = cameraWalk.total > 0 ? cameraWalk.frame1 / cameraWalk.total : 0;
      const snapFrac = cameraSnap.total > 0 ? cameraSnap.frame1 / cameraSnap.total : 0;

      check('a walk eases the camera — frame 1 is a small fraction of the total move',
        walkFrac < 0.1,
        `frame-1 ${cameraWalk.frame1.toFixed(3)}m of ${cameraWalk.total.toFixed(3)}m total (${(walkFrac * 100).toFixed(1)}%)`);

      check('the snap control still cuts the camera on frame 1',
        snapFrac > 0.95,
        `frame-1 ${cameraSnap.frame1.toFixed(3)}m of ${cameraSnap.total.toFixed(3)}m total (${(snapFrac * 100).toFixed(1)}%)`);

      // A camera that eases but never quite lands is still wrong — this is the
      // check that catches an easing curve which asymptotes instead of
      // resolving, or a `progress` that never reaches exactly 1.
      check('the eased camera arrives exactly at the destination anchor',
        cameraWalk.endDelta < 0.01,
        `${cameraWalk.endDelta.toFixed(4)}m from the far anchor's eye once arrived`);

      // F11. The check above only ever drives parked -> walk, which is exactly
      // why it never caught this: interrupting an IN-PROGRESS walk (`onPick`
      // and the number-key handler both call `goTo` with no guard on
      // `actor.walking`) used to ease from the anchor being ABANDONED, not from
      // the camera's live mid-ease position. Repro named in the brief: parked
      // at `back`, `goTo('far')`, 30 frames, then `goTo('counter')` — measured
      // before the fix at 2.442m of a 10.324m move, 23.7%, against the same 10%
      // ceiling the walk-vs-snap check above uses.
      const interrupted = await page.evaluate(() => {
        const d = window.__mcgrotsDebug;
        d.snapTo('back');
        d.goTo('far');
        d.stepFrames(30);
        const before = d.state().camera;
        const to = d.anchors.find((a) => a.id === 'counter').camera.eye;
        const total = Math.hypot(to.x - before.x, to.y - before.y, to.z - before.z);
        d.goTo('counter');
        d.stepFrames(1);
        const after = d.state().camera;
        const frame1 = Math.hypot(after.x - before.x, after.y - before.y, after.z - before.z);
        return { total, frame1 };
      });
      const interruptedFrac = interrupted.total > 0 ? interrupted.frame1 / interrupted.total : 0;
      check('interrupting an in-progress walk still eases, not cuts (F11)',
        interruptedFrac < 0.1,
        `frame-1 ${interrupted.frame1.toFixed(3)}m of ${interrupted.total.toFixed(3)}m total (${(interruptedFrac * 100).toFixed(1)}%)`);
    }

    // ------------------------------------------------------------------ van ---
    // G3a. `van.js` replaces the G0 blockout box with the real van, price board
    // and ground dressing. The claim that matters is not "the van exists in the
    // scene" — a mesh count proves the calculator ran, not that a player would
    // ever see it — it is that the van is ACTUALLY VISIBLE, at a sensible size,
    // from every one of the five shots the game uses.
    if (wants('van')) {
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

    // -------------------------------------------------------------- seat ---
    // G3c built this region on "nothing guarantees the hip lands over the
    // seat", which is true but incomplete: the hip has ZERO local x/z offset
    // in ANY pose (measured, § F1), so a check that only looks at the hip is
    // blind to the LEGS — flip the thigh's sign and this region stayed 38/38
    // (G3e brief, § F10). Rewritten to also measure the knee, which is where
    // F1's actual defect lived. Own navigation (skinned body: the
    // capsule/segmented/flats candidates have no `hips` bone to measure), so
    // this does not inherit whatever body the `anchors` region above left the
    // page on.
    if (wants('seat')) {
      await page.goto(`http://127.0.0.1:${port}/mcgrots.html?body=skinned&archetype=rab`,
        { waitUntil: 'load' });
      await page.waitForFunction(() => !!window.__mcgrotsDebug, null, { timeout: 15000 });
      await page.evaluate(() => window.__mcgrotsDebug.card.dismiss());
      await page.evaluate(() => window.__mcgrotsDebug.pauseAuto());

      // Reads the SHIPPED scene, not a helper that recomputes the ledge's own
      // offsets: the seat's world box comes from `THREE.Box3().setFromObject`
      // on the actual mesh group `main.js` builds, and the hip/knee come from
      // `getWorldPosition` on the actual skeleton bones — same technique as the
      // van region's AABB-projection check (G3a), for the same reason. A helper
      // that re-derives "where the ledge should be" from the same constants the
      // product uses would pass even if the product's own placement code had a
      // sign error, since it would be checking the constants against
      // themselves. `fx`/`fz` come from the anchor's own `yaw` (anchors.js,
      // independent of main.js's ledge-placement code), not from a copy of
      // `SEAT_DEPTH`/`CAP_OVERHANG`.
      const measure = (anchorId, sit) => page.evaluate(({ anchorId, sit }) => {
        const d = window.__mcgrotsDebug;
        // `d.snapTo` runs `goTo(id, { snap: true })`, which sets `current` to
        // this anchor — and `frame()` (main.js) re-asserts `'sit'` every frame
        // whenever `current.sit` is true and the actor isn't walking ("Park
        // state resolves on arrival, so a sitting spot only sits once
        // reached"). That auto-resit stomped the very first version of this
        // control: forcing `'idle'` here looked like it worked for one frame
        // and then silently reverted, so standing measured the SAME hip height
        // as seated. Positioning the actor directly (bypassing `goTo`, so
        // `current` never becomes this anchor) is what makes `'idle'` actually
        // stick for the control.
        const a = d.anchors.find((x) => x.id === anchorId);
        d.actor.snapTo(a.pos.x, a.pos.z, a.yaw);
        d.setActorState(sit ? 'sit' : 'idle');
        d.stepFrames(150);
        let mesh = null;
        d.scene.traverse((o) => { if (o.isSkinnedMesh) mesh = o; });
        const bones = mesh.skeleton.bones;
        const hips = bones.find((b) => b.name === 'hips');
        const shinL = bones.find((b) => b.name === 'shinL');
        const shinR = bones.find((b) => b.name === 'shinR');
        const wp = new d.THREE.Vector3();
        hips.getWorldPosition(wp);
        const kneeL = new d.THREE.Vector3();
        shinL.getWorldPosition(kneeL);
        const kneeR = new d.THREE.Vector3();
        shinR.getWorldPosition(kneeR);
        // McGrot's actor faces (+sin yaw, +cos yaw) — the OPPOSITE of the
        // street's (-sin yaw, -cos yaw) that CLAUDE.md documents (AGENTS.md §
        // invariants). Confirmed by walking the actor and sampling travel,
        // which needs no convention: `facingAgreesWithPlusSinCos = 1.0000`.
        const fx = Math.sin(a.yaw), fz = Math.cos(a.yaw);
        const px = -fz, pz = fx;
        const along = (p) => (p.x - wp.x) * fx + (p.z - wp.z) * fz;
        const seatGroup = d.scene.getObjectByName(`seat:${anchorId}`);
        const b3 = seatGroup ? new d.THREE.Box3().setFromObject(seatGroup) : null;
        const centre = b3 ? { x: (b3.min.x + b3.max.x) / 2, y: (b3.min.y + b3.max.y) / 2, z: (b3.min.z + b3.max.z) / 2 } : null;
        return {
          hip: { x: wp.x, y: wp.y, z: wp.z },
          kneeAlong: (along(kneeL) + along(kneeR)) / 2,
          box: b3 ? { min: { x: b3.min.x, y: b3.min.y, z: b3.min.z }, max: { x: b3.max.x, y: b3.max.y, z: b3.max.z } } : null,
          // The box's AABB centroid coincides with the true centroid of the
          // holder's own (Y-rotated) footprint, whatever that rotation is —
          // rotation about a shape's own centroid does not move it. So this is
          // the built ledge's real world position, not a re-derived one.
          lateralFromCentre: centre ? (wp.x - centre.x) * px + (wp.z - centre.z) * pz : null,
          alongFromCentre: centre ? (wp.x - centre.x) * fx + (wp.z - centre.z) * fz : null,
        };
      }, { anchorId, sit });

      const rows = [];
      for (const id of ['wall', 'kerb']) {
        rows.push({ id, seated: await measure(id, true), standing: await measure(id, false) });
      }

      // THE CHECK THAT WOULD HAVE CAUGHT F1 (§ F10): the knee's offset from the
      // hip, projected on the actor's facing, required POSITIVE — a backward
      // thigh sign puts this negative regardless of where the ledge sits, which
      // is exactly the fault the old hip-only check could not see (the hip has
      // zero horizontal offset in every pose, § F1). Measured at full sit:
      // ~0.34 m forward, both anchors.
      const KNEE_MIN = 0.15; // comfortably between 0 (no swing) and the ~0.34 m measured
      const kneeBad = rows.filter((r) => r.seated.kneeAlong <= KNEE_MIN);
      check('the seated knee sits forward of the hip, at both sitting anchors',
        kneeBad.length === 0,
        rows.map((r) => `${r.id} knee-along-facing=${r.seated.kneeAlong.toFixed(3)}`).join(' / '));

      // CONTROL: standing at the same anchor. The rest pose has (near) zero
      // thigh rotation, so this metric reads close to zero rather than
      // positive — proving the check is reading the SIT pose's thigh swing,
      // not some fixed property of the rig or the anchor.
      const KNEE_STAND_TOL = 0.05;
      const kneeControlBad = rows.filter((r) => Math.abs(r.standing.kneeAlong) > KNEE_STAND_TOL);
      check('standing knee stays near the hip, at both sitting anchors (control)',
        kneeControlBad.length === 0,
        rows.map((r) => `${r.id} standing knee-along-facing=${r.standing.kneeAlong.toFixed(3)}`).join(' / '));

      // THE LEDGE-PLACEMENT CHECKS G3c ORIGINALLY WROTE — honest, and kept:
      // they prove the ledge is built at the anchor and that the sit state
      // applies its drop. What changed is the SPEC each asserts, not their
      // job. Lateral (across the seat, perpendicular to facing) is unaffected
      // by G3e's along-facing offset and stays a tight centring check.
      // Along-facing can no longer be "centred" — the offset deliberately
      // moves the ledge so its FRONT edge, not its centre, sits under the
      // hip (§ F8) — so this only proves the offset exists, is behind the
      // actor (not in front, and not zero), by checking sign and a
      // comfortably-below-measured floor rather than pinning the exact
      // SEAT_DEPTH/CAP_OVERHANG arithmetic main.js itself derives it from.
      const LATERAL_TOL = 0.10;
      const ALONG_MIN = 0.15; // measured ~0.325 m; floor is well short of it
      const placementBad = rows.filter((r) => Math.abs(r.seated.lateralFromCentre) > LATERAL_TOL
        || r.seated.alongFromCentre === null || r.seated.alongFromCentre <= ALONG_MIN);
      check('the ledge is centred laterally and offset behind the anchor, at both sitting anchors',
        placementBad.length === 0,
        rows.map((r) => `${r.id} lateral=${r.seated.lateralFromCentre?.toFixed(3)} along=${r.seated.alongFromCentre?.toFixed(3)}`).join(' / '));

      // Vertical: NOT equality against the cap top (§ F10 — that "requires the
      // hip bone to sit at the stone surface", encoding the second open defect
      // as the spec). A band instead: the hip must not sink below the cap top
      // at all, and stays within a margin well short of standing's ~0.22 m
      // gap, so the band still tells seated from standing apart without
      // demanding the exact-surface reading that caused F8.
      const HIP_BAND_MIN = -0.02;
      const HIP_BAND_MAX = 0.15;
      const heightBad = rows.filter((r) => {
        if (!r.seated.box) return true;
        const d = r.seated.hip.y - r.seated.box.max.y;
        return d < HIP_BAND_MIN || d > HIP_BAND_MAX;
      });
      check('the seated hip sits at or just above the ledge top, at both sitting anchors',
        heightBad.length === 0,
        rows.map((r) => `${r.id} hip.y=${r.seated.hip.y.toFixed(2)} ledge-top=${r.seated.box ? r.seated.box.max.y.toFixed(2) : 'missing'}`).join(' / '));

      // CONTROL for the height band: standing's ~0.22 m gap (SEAT_DROP) must
      // fall OUTSIDE the same band, or the band is too loose to mean anything.
      const heightControlBad = rows.filter((r) => {
        if (!r.standing.box) return false;
        const d = r.standing.hip.y - r.standing.box.max.y;
        return d >= HIP_BAND_MIN && d <= HIP_BAND_MAX;
      });
      check('standing at the same anchor falls outside the seated height band (control)',
        heightControlBad.length === 0,
        rows.map((r) => `${r.id} standing hip.y=${r.standing.hip.y.toFixed(2)} ledge-top=${r.standing.box ? r.standing.box.max.y.toFixed(2) : 'missing'}`).join(' / '));

      check('console clean after driving the seat region',
        consoleErrors.length === 0, consoleErrors.slice(0, 3).join(' | ') || 'no errors');
    }

    // --------------------------------------------------------------- rota ---
    // G4a. Who is at the pitch, driven by wall-clock time, never session start.
    // The camera-independence check is the important one here (Dan's ruling,
    // 2026-08-12: actors must not affect the camera) — everything else is the
    // schedule's own correctness.
    if (wants('rota')) {
      await page.evaluate(() => window.__mcgrotsDebug.rota.clearClock());

      // --- the schedule is a pure function of the clock -----------------------
      const cycleLen = await page.evaluate(() => window.__mcgrotsDebug.rota.cycleSeconds());
      const half = cycleLen / 2;
      const purity = await page.evaluate((h) => {
        const d = window.__mcgrotsDebug;
        const t = 42;
        return { a1: d.rota.whoIsHere(t), a2: d.rota.whoIsHere(t), b: d.rota.whoIsHere(t + h) };
      }, half);
      check('the schedule is a pure function of the clock — same timestamp, same rota',
        purity.a1 === purity.a2,
        `whoIsHere(42) called twice: ${JSON.stringify(purity.a1)} then ${JSON.stringify(purity.a2)}`);
      // The control: without this, "same timestamp -> same result" would pass
      // for a schedule that ignores the clock entirely and always returns the
      // same thing.
      check('...and a different timestamp gives a different rota (control)',
        purity.a1 !== purity.b,
        `t=42 -> ${JSON.stringify(purity.a1)}; t+${half.toFixed(0)} -> ${JSON.stringify(purity.b)}`);

      // --- one reader at a time, across the whole schedule --------------------
      // `overlapCount` reads the actual visit timeline, not `whoIsHere` (which
      // would silently return its first match even if two windows overlapped)
      // — see its comment in rota.js. Scanned across a FULL cycle, not a
      // sampled moment, because a bug that only shows up on one comic's
      // duration would survive a single spot-check.
      const overlap = await page.evaluate((cycleSecs) => {
        const d = window.__mcgrotsDebug;
        let maxCount = 0;
        let firstBad = null;
        for (let t = 0; t < cycleSecs; t += 2) {
          const n = d.rota.overlapCount(t);
          if (n > maxCount) maxCount = n;
          if (n > 1 && firstBad === null) firstBad = t;
        }
        return { maxCount, firstBad };
      }, cycleLen);
      check('one reader at a time across the whole schedule',
        overlap.maxCount <= 1,
        overlap.maxCount <= 1
          ? `max concurrent visits 1, scanned a full ${cycleLen.toFixed(0)}s cycle`
          : `${overlap.maxCount} concurrent visits at t=${overlap.firstBad}`);

      // --- camera independence -------------------------------------------------
      // THE load-bearing check in this unit (Dan's ruling). Two boots, ONE
      // scripted anchor sequence, run identically on both: the "on" arm has the
      // rota loaded and forces an active visit throughout (t=1000 is a live
      // reading, confirmed below); the "off" arm never calls loadRota(), so
      // `whatTheyAreDoing` returns null forever and no reader ever exists. If
      // any actor influenced the camera by any path, the two arms' sampled
      // camera transforms would diverge. The rota clock is advanced FASTER than
      // the stepped render frames (2 wall-seconds per frame) so the ~5s of
      // rendered walk covers several arrive/read/leave cycles — the schedule
      // clock and the render clock are independent by design (rota.js), so
      // this is a legitimate way to exercise more schedule states per frame
      // stepped, not a shortcut that skips anything the game itself does.
      const runSequence = () => {
        const d = window.__mcgrotsDebug;
        d.setMarkersVisible(false);
        d.snapTo('back');
        let wallClock = 1000;
        d.rota.setClock(wallClock);
        const camera = [];
        let readerEverVisible = false;
        const record = () => {
          const s = d.state();
          const q = d.camera.quaternion;
          // Position AND orientation — a look-at bias with the eye pinned in
          // place (the realistic version of the mistake this gate exists to
          // catch) would be invisible to a position-only comparison.
          camera.push([s.camera.x, s.camera.y, s.camera.z, q.x, q.y, q.z, q.w]);
          if (s.reader?.visible) readerEverVisible = true;
        };
        const step = (n) => {
          for (let i = 0; i < n; i++) {
            wallClock += 2;
            d.rota.setClock(wallClock);
            d.stepFrames(1);
            record();
          }
        };
        record();
        d.goTo('far');
        step(90);
        d.goTo('counter');
        step(90);
        d.goTo('wall');
        step(90);
        d.rota.clearClock();
        return { camera, readerEverVisible };
      };

      const onRun = await page.evaluate(runSequence);
      check('the "on" arm actually has a reader visible during the sampled walk',
        onRun.readerEverVisible,
        onRun.readerEverVisible ? 'reader visible in at least one sampled frame' : 'reader never appeared — the control is not exercising the rota');

      const offPage = await browser.newPage({ viewport: { width: 1280, height: 720 } });
      const offErrors = [];
      offPage.on('console', (m) => { if (m.type() === 'error') offErrors.push(m.text()); });
      offPage.on('pageerror', (e) => offErrors.push(String(e)));
      await offPage.goto(`http://127.0.0.1:${port}/mcgrots.html?rota=off`, { waitUntil: 'load' });
      await offPage.waitForFunction(() => !!window.__mcgrotsDebug, null, { timeout: 15000 });
      await offPage.evaluate(() => window.__mcgrotsDebug.card.dismiss());
      await offPage.evaluate(() => window.__mcgrotsDebug.pauseAuto());
      const offRun = await offPage.evaluate(runSequence);
      await offPage.close();

      check('the "off" arm never has a reader (control boots identically otherwise)',
        !offRun.readerEverVisible,
        !offRun.readerEverVisible ? 'reader never appeared, as expected with rota=off' : 'reader appeared with rota=off — the control arm is not actually empty');
      check('console clean on the "off" arm',
        offErrors.length === 0, offErrors.slice(0, 3).join(' | ') || 'no errors');

      let maxDelta = 0, worstIdx = 0;
      const n = Math.min(onRun.camera.length, offRun.camera.length);
      for (let i = 0; i < n; i++) {
        const [ax, ay, az, aqx, aqy, aqz, aqw] = onRun.camera[i];
        const [bx, by, bz, bqx, bqy, bqz, bqw] = offRun.camera[i];
        const posDelta = Math.hypot(ax - bx, ay - by, az - bz);
        const quatDelta = Math.hypot(aqx - bqx, aqy - bqy, aqz - bqz, aqw - bqw);
        const delta = posDelta + quatDelta;
        if (delta > maxDelta) { maxDelta = delta; worstIdx = i; }
      }
      check('the camera is bit-identical whether the rota is populated or empty',
        onRun.camera.length === offRun.camera.length && maxDelta < 1e-9,
        onRun.camera.length !== offRun.camera.length
          ? `sample count differs: on=${onRun.camera.length} off=${offRun.camera.length}`
          : `max delta ${maxDelta.toExponential(2)}m across ${n} sampled frames (frame ${worstIdx})`);

      check('console still clean after driving the rota region',
        consoleErrors.length === 0, consoleErrors.slice(0, 3).join(' | ') || 'no errors');

      // --- the sequence Dan looks at -------------------------------------------
      // Numeric gates cannot see a bad picture (CLAUDE.md / AGENTS.md), and this
      // unit is almost entirely something the player watches. A schedule that
      // is correct and reads as people teleporting in is a failure the checks
      // above cannot catch. Captured from the 'counter' anchor — the closest
      // shot to the reading spot — at four points in one visit's life, stepping
      // real render frames (not the fast wall-clock trick above) so the walk
      // itself animates naturally into and out of the strip.
      const visitAt = await page.evaluate((t) => window.__mcgrotsDebug.rota.whatTheyAreDoing(t), 1020);
      const sequenceShots = [];
      const capture = async (label, wallClock, settleFrames) => {
        await page.evaluate(({ wc, sf }) => {
          const d = window.__mcgrotsDebug;
          d.setMarkersVisible(false);
          d.snapTo('counter');
          d.rota.setClock(wc);
          d.stepFrames(sf);
        }, { wc: wallClock, sf: settleFrames });
        const buf = await page.screenshot({ type: 'png' });
        writeFileSync(join(OUT, `rota-${label}.png`), buf);
        sequenceShots.push(label);
      };
      await capture('1-empty', 980, 2);
      await capture('2-arriving', 995, 330);
      await capture('3-reading', 1020, 2);
      await capture('4-leaving', 1050, 90);
      await capture('5-empty', 1060, 2);
      await page.evaluate(() => window.__mcgrotsDebug.rota.clearClock());

      check('the sequence strip captured (open and look — numeric gates cannot see this)',
        sequenceShots.length === 5 && visitAt?.phase === 'reading',
        `${sequenceShots.length} frames written to docs/smoke/captures/mcgrots/g0/rota-*.png; ` +
        `t=1020 phase=${visitAt?.phase ?? 'null'}`);
    }

    // --------------------------------------------------------------- audio ---
    // G4b (2/2). Its own page, closed at the end of this block — the checks
    // below need a REAL, Playwright-synthesised click on the title card (CDP
    // input, not page.evaluate's JS dispatch), because Chromium's autoplay
    // policy gates AudioContext/media playback on genuine user activation. The
    // other regions' `card.dismiss()` calls are a synthetic DOM removal and
    // deliberately do not exercise this — they only need the overlay gone,
    // not audio actually running.
    if (wants('audio')) {
      const audioPage = await browser.newPage({ viewport: { width: 1280, height: 720 } });
      const audioErrors = [];
      const audioPageErrors = [];
      audioPage.on('console', (m) => { if (m.type() === 'error') audioErrors.push(m.text()); });
      audioPage.on('pageerror', (e) => audioPageErrors.push(String(e)));
      // F15 (G4 phase gate): element state (currentTime/paused/currentSrc/
      // playingId) is satisfied equally by silent playback — mediaEl.volume=0
      // left every existing check green with measured output at peak 0.000,
      // RMS 0.000. This taps the REAL signal path: wrap createMediaElementSource
      // so the same source that feeds the panner also feeds an analyser, parked
      // on window.__mcgrotsAnalyser. An AudioNode fans out to multiple
      // destinations without affecting either, so this changes nothing audio.js
      // does — it only gives the harness a second tap on the same signal.
      await audioPage.addInitScript(() => {
        const proto = (window.AudioContext || window.webkitAudioContext).prototype;
        const orig = proto.createMediaElementSource;
        proto.createMediaElementSource = function (el) {
          const src = orig.call(this, el);
          const analyser = this.createAnalyser();
          analyser.fftSize = 2048;
          src.connect(analyser);
          window.__mcgrotsAnalyser = analyser;
          return src;
        };
      });
      await audioPage.goto(`http://127.0.0.1:${port}/mcgrots.html`, { waitUntil: 'load' });
      await audioPage.waitForFunction(() => !!window.__mcgrotsDebug, null, { timeout: 15000 });
      await audioPage.evaluate(() => window.__mcgrotsDebug.pauseAuto());

      // --- no sound before the gesture -----------------------------------------
      // Checked BEFORE the click below — this is the one thing in the region
      // that has to be true prior to any interaction.
      // F16 (G4 phase gate): this used to also require
      // `document.querySelectorAll('audio').length === 0`, which can never go
      // false — audio.js builds its element with `new Audio()` and never
      // appends it to the document, so that count is 0 at boot, mid-playback,
      // and forever. Only `!started` did any work. Dropped rather than kept
      // for appearance; see VALIDATION.md.
      const preGesture = await audioPage.evaluate(() => ({
        started: window.__mcgrotsDebug.readerAudio.started,
      }));
      check('no sound before the gesture — no AudioContext at boot',
        !preGesture.started,
        `started=${preGesture.started}`);

      await audioPage.click('#title-card'); // the real gesture
      await audioPage.evaluate(() => window.__mcgrotsDebug.card.dismiss()); // idempotent; belt and braces if the click alone left it

      // t=1020 is the same known-reading moment the rota region's sequence
      // capture already uses and inspects — reusing it rather than a fresh
      // sweep keeps this region's fixture identical to a picture Dan has
      // already opened.
      const visit = await audioPage.evaluate((t) => window.__mcgrotsDebug.rota.whatTheyAreDoing(t), 1020);
      const freshT = 1020 - visit.elapsed; // this same visit's own readStart

      // A bounded poll, never waitForFunction — every check in this region has
      // to degrade to a normal FAIL under a fault (a stuck AudioContext, a
      // 404'd file that never starts), not crash the process and hide every
      // other check's result along with it. Returns whatever state it last
      // saw, playing or not.
      const pollForPlaying = async (p, id, timeoutMs = 5000) => {
        let last = { currentTime: 0, currentSrc: null, playingId: null };
        const deadline = Date.now() + timeoutMs;
        while (Date.now() < deadline) {
          last = await p.evaluate(() => ({
            currentTime: window.__mcgrotsDebug.readerAudio.currentTime,
            currentSrc: window.__mcgrotsDebug.readerAudio.currentSrc,
            playingId: window.__mcgrotsDebug.readerAudio.playingId,
          }));
          if (last.playingId === id && last.currentTime > 0) return last;
          await new Promise((r) => setTimeout(r, 200));
        }
        return last;
      };

      // --- playback position tracks the rota clock -----------------------------
      // Mid-reading arrival: must start near `elapsed`, not near zero. This is
      // the brief's central risk — the obvious implementation (start from 0
      // whenever a reading becomes current) looks identical to the right one on
      // a fresh arrival and only diverges here.
      await audioPage.evaluate((t) => window.__mcgrotsDebug.rota.setClock(t), 1020);
      await audioPage.evaluate(() => window.__mcgrotsDebug.stepFrames(1));
      const midState = await pollForPlaying(audioPage, visit.id);
      const midDelta = Math.abs(midState.currentTime - visit.elapsed);
      check('a mid-reading arrival starts near elapsed, not near zero',
        midState.playingId === visit.id && midDelta < 2,
        midState.playingId === visit.id
          ? `elapsed=${visit.elapsed.toFixed(2)}s, playback started at ${midState.currentTime.toFixed(2)}s (delta ${midDelta.toFixed(2)}s)`
          : `never started playing id=${visit.id} (playingId=${midState.playingId}, currentTime=${midState.currentTime})`);

      // --- F15: the signal is actually audible, not just element state ---------
      // Reads the analyser tapped by the init script above. Polled, not a
      // single sample: the media element's play() and the WebAudio graph both
      // run on the real wall clock, decoupled from this harness's frozen rAF,
      // so the first sample or two after a seek can still be silence.
      const sampleRMS = async (p) => p.evaluate(() => {
        const a = window.__mcgrotsAnalyser;
        if (!a) return { peak: 0, rms: 0 };
        const data = new Uint8Array(a.fftSize);
        a.getByteTimeDomainData(data);
        let peak = 0, sumSq = 0;
        for (let j = 0; j < data.length; j++) {
          const v = (data[j] - 128) / 128;
          peak = Math.max(peak, Math.abs(v));
          sumSq += v * v;
        }
        return { peak, rms: Math.sqrt(sumSq / data.length) };
      });
      // Waits for audible output — the first sample or two after a seek can
      // still be silence, since play() and the WebAudio graph run on the real
      // wall clock, decoupled from this harness's frozen rAF.
      const waitForAudible = async (p, attempts = 10) => {
        for (let i = 0; i < attempts; i++) {
          const r = await sampleRMS(p);
          if (r.rms > 0.005) return r;
          await new Promise((res) => setTimeout(res, 150));
        }
        return { peak: 0, rms: 0 };
      };
      const midAudible = await waitForAudible(audioPage);
      check('a reading in progress produces real audio output, not just advancing element state',
        midAudible.rms > 0.005,
        `peak=${midAudible.peak.toFixed(3)} rms=${midAudible.rms.toFixed(3)} (must be >0.005)`);

      // Fresh-arrival control, same visit, same comic — isolates the CLOCK as
      // the only variable. Without this, an implementation that always seeks
      // to the same fixed offset (or that happened to be tested only at this
      // one t) would pass the check above for the wrong reason. A SEPARATE
      // page, not a clock rewind on `audioPage`: real wall-clock time never
      // moves backwards, and rewinding it on the same page leaves the module's
      // `currentId` already equal to `visit.id` from the mid-reading check
      // above, so the id-changed branch never re-fires — that would be testing
      // a scenario the real product never sees, not the fresh-arrival case.
      const freshPage = await browser.newPage({ viewport: { width: 1280, height: 720 } });
      await freshPage.goto(`http://127.0.0.1:${port}/mcgrots.html`, { waitUntil: 'load' });
      await freshPage.waitForFunction(() => !!window.__mcgrotsDebug, null, { timeout: 15000 });
      await freshPage.evaluate(() => window.__mcgrotsDebug.pauseAuto());
      await freshPage.click('#title-card');
      await freshPage.evaluate((t) => window.__mcgrotsDebug.rota.setClock(t), freshT);
      await freshPage.evaluate(() => window.__mcgrotsDebug.stepFrames(1));
      const freshResult = await pollForPlaying(freshPage, visit.id);
      await freshPage.close();
      check('...and a fresh arrival of the SAME reading starts near zero (control)',
        freshResult.playingId === visit.id && freshResult.currentTime < 2,
        freshResult.playingId === visit.id
          ? `readStart=${freshT.toFixed(2)}s, playback started at ${freshResult.currentTime.toFixed(2)}s`
          : `never started playing id=${visit.id} (playingId=${freshResult.playingId})`);

      // --- the file that plays is the comic that is scheduled ------------------
      const scheduled = await audioPage.evaluate(() => ({
        id: window.__mcgrotsDebug.rota.whatTheyAreDoing(1020).id,
        src: window.__mcgrotsDebug.readerAudio.currentSrc,
      }));
      check('the file that plays is the comic that is scheduled',
        scheduled.src?.endsWith(`/${scheduled.id}.mp3`),
        `scheduled id=${scheduled.id}, playing src=${scheduled.src}`);

      // --- one voice at a time: a departure mid-file stops, does not fade ------
      // Jump the clock straight from inside the reading to well past its
      // departure window — real time hasn't passed for the media element, so
      // if nothing stopped it explicitly it would just still be playing.
      // +20s past readEnd: comfortably clear of DEPART_LEAD_S (7s, so this
      // visit's own window has definitely closed) and comfortably short of the
      // NEXT visit's arrive-lead window opening at GAP_S - ARRIVE_LEAD_S = 38s
      // past readEnd (rota.js's constants) — a genuinely empty pitch, not a
      // moment when a different reading has naturally started.
      const readStart = 1020 - visit.elapsed;
      const emptyGapT = readStart + visit.duration + 20;
      await audioPage.evaluate((t) => window.__mcgrotsDebug.rota.setClock(t), emptyGapT);
      await audioPage.evaluate(() => window.__mcgrotsDebug.stepFrames(1));
      // A bounded poll, not waitForFunction — a broken "never stop" fault must
      // read as a normal FAIL below, not crash the whole suite on a timeout.
      let afterDepart = { paused: false, playingId: visit.id };
      for (let i = 0; i < 20; i++) {
        afterDepart = await audioPage.evaluate(() => ({
          paused: window.__mcgrotsDebug.readerAudio.paused,
          playingId: window.__mcgrotsDebug.readerAudio.playingId,
        }));
        if (afterDepart.paused) break;
        await new Promise((r) => setTimeout(r, 250));
      }
      check('a reader leaving mid-file eventually stops playback (bounded by the 5s poll; see F17 in VALIDATION.md for what this does not prove)',
        afterDepart.paused && afterDepart.playingId === null,
        `paused=${afterDepart.paused} playingId=${afterDepart.playingId}`);

      // --- F15 control: an empty pitch produces no output --------------------
      // A brief wait first — the analyser's 2048-sample window (~46ms) can
      // still hold the tail end of the just-paused element's output on the
      // very first read after `paused` flips true. Three samples after that,
      // worst (highest) RMS taken — a single sample landing on silence by luck
      // would understate the bar a real fault has to clear.
      await new Promise((r) => setTimeout(r, 300));
      const gapSamples = [await sampleRMS(audioPage), await sampleRMS(audioPage), await sampleRMS(audioPage)];
      const gapSilent = gapSamples.reduce((a, b) => (b.rms > a.rms ? b : a));
      check('...and an empty pitch produces no output (control)',
        gapSilent.rms <= 0.005,
        `peak=${gapSilent.peak.toFixed(3)} rms=${gapSilent.rms.toFixed(3)} (must be <=0.005)`);

      await audioPage.evaluate(() => window.__mcgrotsDebug.rota.clearClock());

      check('console clean after driving the audio region',
        audioErrors.length === 0 && audioPageErrors.length === 0,
        [...audioErrors, ...audioPageErrors].slice(0, 3).join(' | ') || 'no errors');

      // --- a missing file stays silent, not thrown ------------------------------
      // Own page: once a real mp3 has been requested above, later re-routing
      // the same URL to a 404 would not necessarily hit the network again (the
      // browser may already hold it), so this needs a reading this session has
      // never touched, on a page with no prior successful audio requests to
      // mask the route. Measures the thing CLAUDE.md's catalog rule actually
      // asks for — no throw, no unhandled rejection — not whether the network
      // panel is quiet: a 404's own "Failed to load resource" line is a
      // browser-level log this page cannot suppress and is not what "silent"
      // means here.
      const missingPage = await browser.newPage({ viewport: { width: 1280, height: 720 } });
      const missingPageErrors = [];
      missingPage.on('pageerror', (e) => missingPageErrors.push(String(e)));
      await missingPage.route('**/assets/audio/*.mp3', (route) => route.fulfill({ status: 404, body: 'not found' }));
      await missingPage.goto(`http://127.0.0.1:${port}/mcgrots.html`, { waitUntil: 'load' });
      await missingPage.waitForFunction(() => !!window.__mcgrotsDebug, null, { timeout: 15000 });
      await missingPage.evaluate(() => window.__mcgrotsDebug.pauseAuto());
      await missingPage.click('#title-card');
      await missingPage.evaluate((t) => window.__mcgrotsDebug.rota.setClock(t), 1020);
      await missingPage.evaluate(() => window.__mcgrotsDebug.stepFrames(1));
      await new Promise((r) => setTimeout(r, 1500)); // let the 404'd play() settle
      const missingState = await missingPage.evaluate(() => ({
        paused: window.__mcgrotsDebug.readerAudio.paused,
        currentSrc: window.__mcgrotsDebug.readerAudio.currentSrc,
        scheduledId: window.__mcgrotsDebug.rota.whatTheyAreDoing(1020).id,
      }));
      await missingPage.close();
      // F18 (G4 phase gate): pageerrors===0 && paused===true also holds for a
      // page that never attempted playback at all (a click that missed, a rota
      // returning null) — nothing pinned that an attempt actually happened.
      // currentSrc ending in the scheduled id is the positive control: the
      // module reached the point of trying to play THIS file, not merely doing
      // nothing.
      check('a missing/blocked file does not throw — the module recovers silently, having actually tried',
        missingPageErrors.length === 0 && missingState.paused === true &&
          missingState.currentSrc?.endsWith(`/${missingState.scheduledId}.mp3`),
        `pageerrors=${missingPageErrors.length} paused=${missingState.paused} currentSrc=${missingState.currentSrc} scheduledId=${missingState.scheduledId}`);

      // --- F14 (G4 phase gate): the seek target tracks the LIVE elapsed -------
      // A deliberately delayed route on the mp3 — the shape the phase gate
      // used to find this. On a cold file, the original bug seeked to the
      // `elapsed` captured when `mediaEl.src` was assigned, not the value once
      // `loadedmetadata` actually fired; on 127.0.0.1 that gap is single-digit
      // milliseconds, which is why nothing else in this suite ever saw it.
      //
      // Own page per arm, own boot: the clock is advanced in small real-time
      // steps throughout the wait (`rota.setClock` + `stepFrames`) so it
      // tracks actual elapsed wall-clock time while the (possibly delayed)
      // load is in flight, the same way a real player's un-frozen clock would.
      const measureSeekDrift = async (delayMs) => {
        const p = await browser.newPage({ viewport: { width: 1280, height: 720 } });
        if (delayMs > 0) {
          await p.route('**/assets/audio/*.mp3', async (route) => {
            await new Promise((r) => setTimeout(r, delayMs));
            await route.continue();
          });
        }
        await p.goto(`http://127.0.0.1:${port}/mcgrots.html`, { waitUntil: 'load' });
        await p.waitForFunction(() => !!window.__mcgrotsDebug, null, { timeout: 15000 });
        await p.evaluate(() => window.__mcgrotsDebug.pauseAuto());
        await p.click('#title-card');

        const v = await p.evaluate((t) => window.__mcgrotsDebug.rota.whatTheyAreDoing(t), 1020);
        const rStart = 1020 - v.elapsed;
        await p.evaluate((t) => window.__mcgrotsDebug.rota.setClock(t), 1020);
        await p.evaluate(() => window.__mcgrotsDebug.stepFrames(1));

        const t0 = Date.now();
        let last = { playingId: null, currentTime: 0 };
        let trueElapsedAtDetect = null;
        while (Date.now() - t0 < delayMs + 4000) {
          const clock = 1020 + (Date.now() - t0) / 1000;
          await p.evaluate((t) => window.__mcgrotsDebug.rota.setClock(t), clock);
          await p.evaluate(() => window.__mcgrotsDebug.stepFrames(1));
          last = await p.evaluate(() => ({
            playingId: window.__mcgrotsDebug.readerAudio.playingId,
            currentTime: window.__mcgrotsDebug.readerAudio.currentTime,
          }));
          if (last.playingId === v.id && last.currentTime > 0) { trueElapsedAtDetect = clock - rStart; break; }
          await new Promise((r) => setTimeout(r, 150));
        }
        await p.close();
        return {
          started: last.playingId === v.id,
          drift: trueElapsedAtDetect !== null ? trueElapsedAtDetect - last.currentTime : null,
        };
      };

      const delayed = await measureSeekDrift(3000);
      check('a delayed load still starts near the LIVE elapsed, not the value captured at request time',
        delayed.started && delayed.drift !== null && delayed.drift < 1,
        delayed.started
          ? `3000ms route delay: drift ${delayed.drift.toFixed(2)}s (must be <1s)`
          : 'playback never started under the delayed route');

      // The control: identical procedure, no delay. Without this, the check
      // above would pass equally for an implementation that is simply slow
      // everywhere — the delayed run alone cannot tell "stale seek target"
      // apart from "this whole page runs a bit behind under load".
      const undelayed = await measureSeekDrift(0);
      check('...and with no delay the drift is near zero (control)',
        undelayed.started && undelayed.drift !== null && undelayed.drift < 1,
        undelayed.started
          ? `no delay: drift ${undelayed.drift.toFixed(2)}s`
          : 'playback never started under the control');

      await audioPage.close();
    }

    // --------------------------------------------------------------- style ---
    // G2's four candidates. Every check here boots ONCE and switches arms in
    // place, which is a stronger control than the street's flag gates get: those
    // boot twice and attribute a measured difference to the flag, sound only
    // because nothing else differs. Here nothing else CAN differ — same process,
    // same scene, same frame counter.
    if (wants('style')) {
      const shot = async (name) => {
        const buf = await page.screenshot();
        writeFileSync(join(OUT, `../g2/${name}.png`), buf);
        return buf;
      };
      mkdirSync(join(OUT, '../g2'), { recursive: true });

      // ON THE SKINNED BODY, not the capsule the rest of the suite uses. G1 chose
      // A1 skinned (docs/MCGROTS-VALIDATION § G1), and the outline's hardest path
      // by a wide margin is the skinned one: the hull has to be posed by the same
      // skeleton on the same frame, through three's `<skinnormal_vertex>`, or the
      // line walks beside the character instead of around it. Gating the outline
      // on a capsule would gate the easy case and ship the broken one.
      await page.goto(`http://127.0.0.1:${port}/mcgrots.html?body=skinned&archetype=rab`,
        { waitUntil: 'load' });
      await page.waitForFunction(() => !!window.__mcgrotsDebug, null, { timeout: 15000 });
      await page.evaluate(() => window.__mcgrotsDebug.card.dismiss());
      await page.evaluate(() => window.__mcgrotsDebug.pauseAuto());

      const bodyOk = await page.evaluate(() => window.__mcgrotsDebug.bodyError);
      check('the style region is judging the chosen body, not the control',
        bodyOk === null, bodyOk ? `skinned failed: ${bodyOk}` : 'skinned loaded');

      await page.evaluate(() => {
        const d = window.__mcgrotsDebug;
        d.setPage(false); d.clearLook(); d.setStyle('none');
        d.setMarkersVisible(false);
        d.snapTo('kerb'); d.stepFrames(120);
      });

      // --- the no-op invariant, and it is the load-bearing one ---------------
      // Off must be BIT-IDENTICAL to a plain render. Three arms now mutate three
      // different things — the scene graph, the frame, and the DOM — and the
      // scene-graph one is the dangerous arm, because a leaked material or a
      // stranded hull would look like a slightly different picture rather than
      // like a bug.
      const base = await shot('none-a');
      const baseHash = createHash('md5').update(base).digest('hex');

      // Install and REVERT every arm, then re-render. This is the check that a
      // look actually reverses rather than the check that it installs.
      //
      // EVERY STEP HERE IS dt=0. The first version stepped at the normal 1/60 and
      // failed with two different hashes on a scene that was reverting perfectly:
      // ten frames of game time had passed between the two captures and the idle
      // pose had moved. A frame-identity check has to hold the clock still, or it
      // measures the animation and calls it a leak.
      await page.evaluate(() => {
        const d = window.__mcgrotsDebug;
        d.setLook('inked'); d.stepFrames(1, 0);
        d.setLook('aerial'); d.stepFrames(1, 0);
        d.setStyle('key'); d.stepFrames(1, 0);
        d.setPage(true); d.stepFrames(1, 0);
        d.setPage(false); d.setStyle('none'); d.clearLook(); d.stepFrames(1, 0);
      });
      const after = await shot('none-b');
      const afterHash = createHash('md5').update(after).digest('hex');
      check('every style arm reverts to a bit-identical frame',
        baseHash === afterHash, `${baseHash.slice(0, 12)} vs ${afterHash.slice(0, 12)}`);

      // --- S1 / S2: the scene actually changed ------------------------------
      // `install()` returning true proves a function ran. These prove the scene
      // graph holds outline geometry and swapped materials — the gate has to test
      // the product, not the calculator (CLAUDE.md).
      const inked = await page.evaluate(() => {
        const d = window.__mcgrotsDebug;
        d.setLook('inked'); d.stepFrames(4);
        return { stats: d.lookStats(), render: d.state() };
      });
      // Cel-shading applies to EVERY mesh; the outline applies only to objects
      // under INK_MAX_RADIUS (looks.js — the ground and the massing carry no line
      // in the corpus, and a ground plane's inverted hull lands in front of the
      // camera). So hulls < swapped is correct here, and asserting equality is
      // what the first version of this gate got wrong.
      check('S1 inks the objects and cels everything',
        inked.stats.hulls > 0 && inked.stats.hulls < inked.stats.swapped && inked.stats.aerial === 0,
        `hulls=${inked.stats.hulls} of ${inked.stats.swapped} meshes, aerial=${inked.stats.aerial}`);

      // The outline must be VISIBLE, not merely present — a hull whose thickness
      // rounds to nothing passes a count and draws no line.
      //
      // Measured as INK COVERAGE, not as darkness. The first version of this
      // check used the crushed-pixel fraction and read 0.00% -> 0.00% on a frame
      // that did have ink in it: the hull colour is #211f1c, luminance ~32, and
      // the crush floor is 12. It was measuring the wrong quantity and would have
      // stayed red however good the outline was.
      // MEASURED AS A PER-PIXEL DIFF, not as "how many pixels are ink-coloured".
      // Two things defeated colour matching, and both are properties of the
      // product rather than of the test: the frame is antialiased, so a 2.2px
      // line is mostly blend pixels and only its core is ever the exact hull
      // colour; and the cast is dark, so a line drawn around a dark figure is
      // near-invisible to a colour match. It read 0.02% on a frame with a line
      // clearly in it.
      //
      // The diff has neither problem. Against the zero-width control, every pixel
      // the line touches is darker than it was and nothing else changed.
      const inkDiff = (a, b) => {
        const pa = PNG.sync.read(a), pb = PNG.sync.read(b);
        let darker = 0;
        const n = pa.width * pa.height;
        for (let i = 0; i < n; i++) {
          const o = i * 4;
          const la = 0.2126 * pa.data[o] + 0.7152 * pa.data[o + 1] + 0.0722 * pa.data[o + 2];
          const lb = 0.2126 * pb.data[o] + 0.7152 * pb.data[o + 1] + 0.0722 * pb.data[o + 2];
          if (lb - la > 8) darker++;
        }
        return (darker / n) * 100;
      };
      const inkedShot = await shot('s1-inked');
      const inkedStats = luminanceStats(inkedShot);

      // THE CONTROL IS THE SAME LOOK WITH THE LINE SET TO ZERO WIDTH, not the
      // unstyled frame. Measured against unstyled this check read 1.74% -> 0.02%
      // and looked like the outline had vanished; what it was actually measuring
      // is that the UNSTYLED scene has 1.74% of its pixels near #211f1c already,
      // because its own shadows are that colour, and the cel ramp then lifts them.
      // Ink coverage and shadow coverage are not separable in that comparison.
      //
      // With `uThickness` at 0 every other thing is identical — same materials,
      // same hull meshes, same draw calls, same clock — so a difference in ink
      // coverage is the line and can be nothing else.
      const inkOff = await page.evaluate(() => {
        const d = window.__mcgrotsDebug;
        const was = d.lookUniforms.uThickness.value;
        d.lookUniforms.uThickness.value = 0;
        d.stepFrames(1, 0);
        return was;
      }).then(async (was) => {
        const buf = await shot('s1-control-nothickness');
        await page.evaluate((w) => {
          window.__mcgrotsDebug.lookUniforms.uThickness.value = w;
          window.__mcgrotsDebug.stepFrames(1, 0);
        }, was);
        return buf;
      });

      const inkCoverage = inkDiff(inkedShot, inkOff);
      check('S1 puts visible ink in the frame',
        inkCoverage > 0.25,
        `${inkCoverage.toFixed(2)}% of pixels darkened vs the zero-width control`);

      // F4: the actor's geometry has no `normal` attribute (auto-rigged from a
      // Trellis glb — see actors/skinned.js). MeshLambertMaterial papers over
      // that with three's own auto-flatShading fallback; MeshToonMaterial is
      // not on the four-name whitelist that fallback checks, so the shader
      // reads WebGL's default (0,0,0) for every vertex normal and both direct
      // and indirect diffuse are zero — a solid black silhouette regardless of
      // colour, map, ramp, outline or cache key. looks.js now computes normals
      // once for any target mesh missing them.
      //
      // MEASURED AS VARIANCE WITHIN A PATCH OF THE ACTOR'S OWN TORSO, not as a
      // single-pixel or frame-wide brightness floor — both tried and rejected.
      // A chest-height SAMPLE reads as "black" with or without the fault: the
      // cast wears near-black coats by design (measured luma 1-5 on the jacket
      // in a known-good render — ALBEDO_MULTIPLY is 0.42 and the shade band
      // sits at 52/255). The frame-WIDE crush floor (12% of all pixels) never
      // trips either, since the actor is a few percent of the frame at most —
      // a fully black figure against a lit wall passed that gate every time
      // this fault was live (measured). And a naive bounding BOX around the
      // whole figure also false-passed on the broken render (measured stddev
      // 53-57 with the fault still live): its top edge sat above the seated
      // figure's actual head and its bottom edge crossed the gap between the
      // splayed sitting legs, both of which sample background/bench pixels
      // that never touch the actor at all.
      //
      // What actually discriminates: a patch confined to the TORSO band only
      // (above the leg-splay, below the collar), where every pixel in every
      // row is part of the figure. Measured on `kerb` (the sit anchor this
      // region already snaps to): with the fault live this patch is uniformly
      // (0,0,0) — mean 0.00, stddev 0.00, max 0.0. Fixed, the same patch reads
      // mean 4.5, stddev 7.0, max 74.6 — the cap/collar highlight and the
      // lit/shade split the fault erases. Fractions of actor.height are
      // derived from that measurement (kerb is the only anchor this runs
      // against), not eyeballed: 0.35h-0.62h above the group origin is the
      // torso in a SIT pose, clear of both the collar above and the knees
      // apart below.
      //
      // THE HALF-WIDTH IS DERIVED FROM THE MESH, not a constant, since F3
      // landed five more archetypes and this region can now run against any
      // of them. A hand-picked 45px was tuned for rab (torso ~180px on screen
      // at this anchor); morag's is ~95px, and 45px of half-width either side
      // would already span her whole torso and start sampling the bench
      // beside her — the same false-pass this gate's box redesign exists to
      // avoid, just moved from the vertical axis to the horizontal one. The
      // geometry's own bind-pose bounding box (rest pose — skinning deforms
      // only on the GPU, so this is a per-archetype PROXY for shoulder width,
      // not a live per-frame measurement) scales with the archetype: rab's
      // local half-width is 0.342, morag's 0.208 — a 0.61 ratio, close to the
      // ~0.53 ratio Dan measured on screen. Shrunk by SAFETY so the sampled
      // strip sits inside the torso rather than reaching the arms; calibrated
      // so rab's derived half-width lands within a pixel of the 45px this
      // check shipped with.
      const actorBox = await page.evaluate(() => {
        const d = window.__mcgrotsDebug;
        const toUv = (v) => {
          const c = v.clone().project(d.camera);
          return { x: c.x * 0.5 + 0.5, y: 1 - (c.y * 0.5 + 0.5) };
        };
        let mesh = null;
        d.scene.traverse((o) => { if (o.isSkinnedMesh) mesh = o; });
        mesh.geometry.computeBoundingBox();
        const bb = mesh.geometry.boundingBox;
        const SAFETY = 0.5;
        const halfWidthWorld = ((bb.max.x - bb.min.x) / 2) * d.actor.height * SAFETY;
        const base = d.actor.group.position.clone();
        const top = base.clone(); top.y += d.actor.height * 0.62;
        const bottom = base.clone(); bottom.y += d.actor.height * 0.35;
        const center = base.clone(); center.y += d.actor.height * 0.48;
        const right = new d.THREE.Vector3(halfWidthWorld, 0, 0)
          .applyQuaternion(d.actor.group.quaternion).add(center);
        return { top: toUv(top), bottom: toUv(bottom), center: toUv(center), right: toUv(right) };
      });
      const boxStats = (buf, box) => {
        const png = PNG.sync.read(buf);
        const y0 = Math.max(0, Math.round(box.top.y * png.height));
        const y1 = Math.min(png.height - 1, Math.round(box.bottom.y * png.height));
        const cx = Math.round(box.top.x * png.width);
        // 12px floor: at some archetype/anchor pairing the derived width could
        // round to almost nothing, which would pass by sampling too little to
        // measure anything rather than by the actor being lit.
        const halfW = Math.max(12, Math.round(Math.abs(box.right.x - box.center.x) * png.width));
        const x0 = Math.max(0, cx - halfW), x1 = Math.min(png.width - 1, cx + halfW);
        let sum = 0, sumSq = 0, max = 0, n = 0;
        for (let y = y0; y <= y1; y++) {
          for (let x = x0; x <= x1; x++) {
            const o = (y * png.width + x) * 4;
            const l = 0.2126 * png.data[o] + 0.7152 * png.data[o + 1] + 0.0722 * png.data[o + 2];
            sum += l; sumSq += l * l; if (l > max) max = l;
            n++;
          }
        }
        const mean = n ? sum / n : 0;
        return { mean, stddev: n ? Math.sqrt(Math.max(0, sumSq / n - mean * mean)) : 0, max, n };
      };
      const actorStats = boxStats(inkedShot, actorBox);
      // Threshold lowered 2 -> 1 in G3c: the pose fix (pelvis tilt, actors/
      // skinned.js) shifted what this fixed height-fraction window samples on
      // `kerb` — measured 3.0 before G3c, 1.8 after, both with a real, lit,
      // cel-shaded figure (opened the capture, not just the number). The F4
      // fault this guards against is unrelated to pose — it zeroes the
      // geometry's normals — and reads exactly 0.0 regardless of which pose is
      // on screen, so 1 still keeps a clear multiple of margin above the fault
      // while accepting the legitimate reading.
      check('S1 does not render the skinned actor as a flat black silhouette',
        actorStats.stddev > 1 && actorStats.max > CRUSH_LUMA,
        `torso patch stddev ${actorStats.stddev.toFixed(1)}, max ${actorStats.max.toFixed(1)}, n=${actorStats.n}`);

      // --- S2: the depth ramp, with S1 as the control -----------------------
      // S2 is S1 with `aerial` at 1 and NOTHING else different — same materials,
      // same hulls, same code path. So a difference between these two frames is
      // the depth ramp and can be nothing else. That is the isolation the street's
      // acceptance gates got wrong twice.
      const aerialShot = await page.evaluate(() => {
        const d = window.__mcgrotsDebug;
        d.setLook('aerial'); d.stepFrames(4);
        return d.lookStats();
      }).then(async (stats) => ({ stats, buf: await shot('s2-aerial') }));

      const aerialStats = luminanceStats(aerialShot.buf);
      check('S2 is S1 plus the ramp and nothing else',
        aerialShot.stats.hulls === inked.stats.hulls
        && aerialShot.stats.swapped === inked.stats.swapped
        && aerialShot.stats.aerial === 1,
        `hulls ${aerialShot.stats.hulls} swapped ${aerialShot.stats.swapped} aerial ${aerialShot.stats.aerial}`);

      // The ramp washes distance toward paper, so the frame gets LIGHTER and
      // FLATTER than S1. Both directions asserted: lighter alone would also be
      // true of simply turning the exposure up.
      check('S2 washes the distance out: lighter and flatter than S1',
        aerialStats.mean > inkedStats.mean && aerialStats.stddev < inkedStats.stddev,
        `mean ${inkedStats.mean.toFixed(1)} -> ${aerialStats.mean.toFixed(1)}, ` +
        `stddev ${inkedStats.stddev.toFixed(1)} -> ${aerialStats.stddev.toFixed(1)}`);

      // --- S3: the key, with posterise as the control -----------------------
      await page.evaluate(() => window.__mcgrotsDebug.clearLook());
      const keyed = await page.evaluate(() => {
        const d = window.__mcgrotsDebug;
        d.setStyle('key'); d.setKey('dock'); d.stepFrames(4);
        return { key: d.key(), keys: d.keys.map((k) => ({ id: k.id, n: k.swatches.length })) };
      });
      const keyShot = await shot('s3-key-dock');

      // Every key is exactly five, dark -> paper. A hand-edited six-entry key
      // would half-fill a fixed-size uniform array and quantise against black,
      // which is a fault that renders as "a bit dark" rather than as an error.
      check('every key is exactly five swatches',
        keyed.keys.every((k) => k.n === 5), keyed.keys.map((k) => `${k.id}:${k.n}`).join(' '));

      // The claim S3 makes is that the frame lands ON the key. So: what fraction
      // of pixels are within a tight distance of one of the five? Measured
      // against posterise's pooled twelve on the identical shot.
      const keyMembership = (buf, swatches) => {
        const png = PNG.sync.read(buf);
        let onPalette = 0;
        const n = png.width * png.height;
        for (let i = 0; i < n; i++) {
          const o = i * 4;
          for (const [r, g, b] of swatches) {
            if (Math.abs(png.data[o] - r) < 10 && Math.abs(png.data[o + 1] - g) < 10
              && Math.abs(png.data[o + 2] - b) < 10) { onPalette++; break; }
          }
        }
        return (onPalette / n) * 100;
      };
      const dockSwatches = [[0x43, 0x43, 0x27], [0x7d, 0x59, 0x2b], [0x71, 0x6a, 0x44],
        [0xa0, 0x90, 0x5f], [0xd8, 0xc6, 0x9b]];
      const onKey = keyMembership(keyShot, dockSwatches);
      check('S3 lands the frame on its five measured swatches',
        onKey > 90, `${onKey.toFixed(1)}% of pixels on the dock key`);

      // Switching key must actually repaint. Same style, same scene, one uniform.
      const goldShot = await page.evaluate(() => {
        const d = window.__mcgrotsDebug; d.setKey('gold'); d.stepFrames(2);
      }).then(() => shot('s3-key-gold'));
      check('switching the key repaints the frame',
        createHash('md5').update(keyShot).digest('hex')
          !== createHash('md5').update(goldShot).digest('hex'),
        `dock vs gold differ`);

      // --- S4: the page ------------------------------------------------------
      await page.evaluate(() => { window.__mcgrotsDebug.setStyle('none'); });
      const paged = await page.evaluate(() => {
        const d = window.__mcgrotsDebug;
        d.setPage(true);
        d.setPageTitle("McGrot's"); d.stepFrames(4);
        return d.pageStats();
      });
      const pageShot = await shot('s4-page');

      // The inset must actually inset. A page whose panel is the whole window is
      // furniture that drew nothing — and it would still look like a normal
      // frame, so nothing else here would catch it.
      check('S4 insets the render into a panel',
        paged.enabled && paged.panelFraction > 0.5 && paged.panelFraction < 0.85,
        `panel is ${(paged.panelFraction * 100).toFixed(1)}% of the window`);

      // The renderer must have been told. If the drawing buffer still matches the
      // window, the panel is a mask over a full-window render and every camera in
      // the game is framed for the wrong aspect.
      const buffer = await page.evaluate(() => {
        const d = window.__mcgrotsDebug;
        const s = d.renderer.getSize(new d.THREE.Vector2());
        return { w: s.x, h: s.y, win: [window.innerWidth, window.innerHeight], aspect: d.camera.aspect };
      });
      check('S4 renders at the panel size, not the window size',
        buffer.w < buffer.win[0] && Math.abs(buffer.aspect - buffer.w / buffer.h) < 0.01,
        `buffer ${buffer.w}x${buffer.h} in window ${buffer.win.join('x')}, aspect ${buffer.aspect.toFixed(3)}`);

      // F5: `?page=on` painted the paper, the panel rule and the caption, and
      // the panel itself held no scene — a featureless paper-coloured rect.
      // Both checks above stayed green throughout: one reads the panel's
      // GEOMETRY (`panelFraction`), the other the drawing buffer's DIMENSIONS.
      // Neither samples a pixel inside the panel, so neither could have caught
      // it — the second candidate this session to render nothing behind green
      // numeric gates (F4 was the first). This one looks inside the rect.
      //
      // THE CONTROL IS THE PAPER'S OWN COLOUR, `PAGE.paper` (`#d8c69b`), not a
      // second render: an empty panel is the paper colour edge-to-edge, because
      // that is literally what is behind it (`.page-paper` is full-bleed by
      // design — see page.js). A real render fills the panel with sky, ground
      // and massing, none of which is `#d8c69b`, so the fraction of panel
      // pixels matching the paper closely is near 100% when broken and low
      // when not — no second boot, no scene-specific assumption, and it holds
      // regardless of which anchor or archetype the region runs against.
      const panelStats = await page.evaluate(() => {
        const d = window.__mcgrotsDebug;
        const v = d.pageStats().viewport;
        return { x: Math.round(v.x), y: Math.round(v.y), w: Math.round(v.w), h: Math.round(v.h) };
      });
      const PAPER_RGB = [0xd8, 0xc6, 0x9b];
      const paperMatchFraction = (buf, rect, tol = 6) => {
        const png = PNG.sync.read(buf);
        let matched = 0, n = 0;
        // Every 3rd pixel both axes: the panel is ~650k px at 1280x720 and this
        // check runs once per suite — subsampling costs nothing a full scan
        // would buy, since the fault this catches is uniform across the panel.
        for (let y = rect.y; y < rect.y + rect.h; y += 3) {
          for (let x = rect.x; x < rect.x + rect.w; x += 3) {
            if (x < 0 || y < 0 || x >= png.width || y >= png.height) continue;
            const o = (y * png.width + x) * 4;
            if (Math.abs(png.data[o] - PAPER_RGB[0]) < tol
              && Math.abs(png.data[o + 1] - PAPER_RGB[1]) < tol
              && Math.abs(png.data[o + 2] - PAPER_RGB[2]) < tol) matched++;
            n++;
          }
        }
        return n ? (matched / n) * 100 : 0;
      };
      const panelPaperFraction = paperMatchFraction(pageShot, panelStats);
      check('S4 holds a scene in the panel, not empty paper',
        panelPaperFraction < 50,
        `${panelPaperFraction.toFixed(1)}% of sampled panel pixels match the paper colour (control: 100% is an empty panel)`);

      await page.evaluate(() => { window.__mcgrotsDebug.setPage(false); });
      check('console still clean after every style arm',
        consoleErrors.length === 0, consoleErrors.slice(0, 3).join(' | ') || 'no errors');
    }
  }

  for (const r of REGIONS) if (!wants(r)) skipped.push(`region ${r}`);

  // ------------------------------------------------------------- report ----
  const failed = results.filter((r) => !r.pass);
  console.log(`\n[mcgrots] renderer: ${LAUNCH_LABEL}   captures: docs/smoke/captures/mcgrots/g0/`);
  if (shots.length) {
    console.log('\n[mcgrots] shots:');
    for (const s of shots) {
      console.log(`  ${s.id.padEnd(9)} mean ${s.mean.toFixed(1).padStart(6)}  stddev ${s.stddev.toFixed(1).padStart(6)}` +
        `  draws ${String(s.drawCalls).padStart(3)}  tris ${String(s.triangles).padStart(6)}`);
    }
  }
  console.log('');
  for (const r of results) console.log(`  ${r.pass ? 'PASS' : 'FAIL'}  ${r.name}\n        ${r.detail}`);
  for (const s of skipped) console.log(`  SKIP  ${s}`);
  console.log(`\n[mcgrots] ${results.length - failed.length}/${results.length} passed in ${((Date.now() - started) / 1000).toFixed(1)}s`);

  shutdown();
  process.exit(failed.length ? 1 : 0);
} catch (err) {
  console.error('[mcgrots] suite error:', err);
  shutdown();
  process.exit(2);
}
