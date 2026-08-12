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

import { spawn } from 'child_process';
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

const REGIONS = ['boot', 'camera', 'anchors', 'style'];
const ONLY = new Set(process.argv.filter((a) => a.startsWith('--only='))
  .flatMap((a) => a.slice(7).split(',')));
const wants = (r) => ONLY.size === 0 || ONLY.has(r);

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

try {
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
  const shots = [];
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
    check('S1 does not render the skinned actor as a flat black silhouette',
      actorStats.stddev > 2 && actorStats.max > CRUSH_LUMA,
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
