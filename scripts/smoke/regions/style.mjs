// G2's four candidates. Every check here boots ONCE and switches arms in
// place, which is a stronger control than the street's flag gates get: those
// boot twice and attribute a measured difference to the flag, sound only
// because nothing else differs. Here nothing else CAN differ — same process,
// same scene, same frame counter.

import { PNG } from 'pngjs';
import { mkdirSync, writeFileSync } from 'fs';
import { join } from 'path';
import { createHash } from 'crypto';
import { luminanceStats, CRUSH_LUMA } from '../helpers.mjs';

export async function run(ctx) {
  const { page, port, OUT, consoleErrors, check } = ctx;
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
