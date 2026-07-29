// window.__mcgrotDebug — the validation rig's test API (E0). Hostname-gated to
// localhost by main.js; ships in the bundle but is inert everywhere else.
//
// goto()/face() pose the camera; invariants() reports scene health; bookmarks
// is a curated golden-pose set. setTime (E2a) and setWeather (E2c.1) are both
// real. scripts/smoke.mjs is the headless consumer; docs/VALIDATION.md is the
// playbook.

import { pointAtChainage } from './frontage.js';

const EYE_HEIGHT = 1.7;
const SETTLE_FRAMES = 150;
const SETTLE_DT = 1 / 60;
const POST_LOAD_SETTLE_FRAMES = 5; // extra renders after texture-wait — see settleAt
// Metres from the street centreline a bookmark camera stands — same value
// and "close = target side, far = opposite side looking across" convention
// as scripts/eval-poses.mjs (SIDE_OFFSET), so a bookmark's geometry reads
// the same way the archived D4-era eval poses did.
const SIDE_OFFSET = 12;
const LOOK_AHEAD = 40; // metres, how far past the camera the lookAt target sits
const TEXTURE_WAIT_TIMEOUT_MS = 4000;

// Elm Row runs roughly chainage 1236-1581m (west side, per docs/shopfront-wishlist.md).
const BOOKMARK_DEFS = [
  // chainage 100 sits right at a junction/plaza near the spawn point where
  // buildings sit much further back than the usual ~12m frontage setback —
  // goto(100, ...) lands the camera in that open gap looking down the
  // corridor instead of at a wall. 150/250 are the nearest chainages that
  // land on ordinary frontage (verified visually).
  { id: 'north-150-close', chainage: 150, side: 'east', distance: 'close' },
  { id: 'north-250-far', chainage: 250, side: 'west', distance: 'far' },
  { id: 'elm-row-hero', chainage: 1300, side: 'west', distance: 'far' },
  { id: 'mid-550-close', chainage: 550, side: 'east', distance: 'close' },
  { id: 'mid-805-far', chainage: 805, side: 'west', distance: 'far' },
  { id: 'fascia-close', chainage: 300, side: 'east', distance: 'close' },
  { id: 'foot-1500-far', chainage: 1500, side: 'west', distance: 'far' },
  {
    id: 'skyline',
    custom: true,
    // Elevated look down the street from ~chainage 700, over the rooflines —
    // not chainage-derived (hand-picked, not goto()-computed). Picked when fog
    // density was a fixed 0.0095, which hid almost everything past ~150m: it
    // sits low and close rather than high and far so it showed a skyline
    // instead of solid fog. Since E2c.3a density is a palette axis and clear
    // daylight runs at 0.0022, so this pose now carries the milestone's long
    // view as well — do not move it without recapturing both columns.
    camera: { x: -293.81, y: 15, z: 633.95 },
    lookAt: { x: -317.4, y: 6, z: 683.62 },
  },
];

// FNV-1a 32-bit, no deps. Folded over raw bytes so float rounding never
// changes the hash between two runs that produce bit-identical arrays.
function fnv1a(bytes, hash) {
  for (let i = 0; i < bytes.length; i++) {
    hash ^= bytes[i];
    hash = Math.imul(hash, 16777619) >>> 0;
  }
  return hash;
}

function hashFloatArray(arr, hash) {
  const bytes = new Uint8Array(arr.buffer, arr.byteOffset, arr.byteLength);
  return fnv1a(bytes, hash);
}

function hashString(str, hash) {
  for (let i = 0; i < str.length; i++) {
    hash = fnv1a([str.charCodeAt(i) & 0xff], hash);
  }
  return hash;
}

// Merged world geometry + every InstancedMesh's instanceMatrix (chimneys,
// aerials, roadworks cones — enumerated by traversal, not a hardcoded list)
// + every NPC's placed position. NPCs aren't InstancedMesh in this codebase
// (each is its own Group — see src/npcs.js), but their placement is just as
// seeded/static as the InstancedMesh content and just as important to catch
// drift in, so they're folded in by iterating npcs.npcs directly rather than
// via scene.traverse. Deliberately excludes anything that moves under
// real-time rAF — birds/vermin ARE InstancedMesh but their per-frame AI
// mutates instanceMatrix every tick, so this traversal DOES pick them up
// (along with leithers/scenery smoke conceptually belonging to the same
// "moves in real time" category, even though those two aren't InstancedMesh
// at all) — see docs/VALIDATION.md for why that's a known, accepted gap
// rather than something this hash is meant to police.
function computeGeomHash({ scene, world, npcs }) {
  let hash = 0x811c9dc5; // FNV-1a offset basis

  const buildings = world.group.getObjectByName('buildings');
  if (buildings && buildings.geometry) {
    hash = hashString('buildings', hash);
    hash = hashFloatArray(buildings.geometry.attributes.position.array, hash);
  }

  const instanced = [];
  scene.traverse((obj) => { if (obj.isInstancedMesh) instanced.push(obj); });
  // Stable sort by name; equal (often empty) names keep scene-graph/build
  // order, which is itself deterministic (main.js builds subsystems in a
  // fixed sequence).
  instanced.sort((a, b) => (a.name || '').localeCompare(b.name || ''));
  for (const mesh of instanced) {
    hash = hashString(`inst:${mesh.name || 'unnamed'}`, hash);
    hash = hashFloatArray(mesh.instanceMatrix.array, hash);
  }

  if (npcs && Array.isArray(npcs.npcs) && npcs.npcs.length) {
    const arr = new Float32Array(npcs.npcs.length * 3);
    npcs.npcs.forEach((n, i) => {
      const p = n.group.position;
      arr[i * 3] = p.x; arr[i * 3 + 1] = p.y; arr[i * 3 + 2] = p.z;
    });
    hash = hashString('npcs', hash);
    hash = hashFloatArray(arr, hash);
  }

  return (hash >>> 0).toString(16).padStart(8, '0');
}

// Hash over the real-time set's live state — leithers, birds, vermin — the
// same three subsystems computeGeomHash's own note names as excluded from it
// (they move under rAF/stepFrame, so bit-for-bit build-time placement isn't
// the right thing to assert there). This is the direct counterpart: it
// asserts that state IS identical between two independently booted pages,
// which only holds once the pre-pause frame count is pinned at zero — see
// docs/VALIDATION.md's "elm-row-hero is bimodal" section for why an
// uncontrolled frame count made that untrue before E2c.3b.1.
//
// CALLER CONTRACT: invariants() calls stepFrame() before hashing, so every
// call advances the real-time set by one SETTLE_DT. Two realtimeHash values
// are only comparable if both pages have had the SAME number of invariants()
// calls (and the same stepFrame history) since boot. That holds today —
// smoke.mjs takes inv1 and inv2 as each page's first call — but adding an
// extra invariants() call to only one of those paths would fail this gate for
// a reason that has nothing to do with determinism.
//
// Leithers aren't InstancedMesh (each is its own Group, src/leithers.js), so
// their chainage/side/direction are read directly off the walker objects
// rather than by scene traversal. Birds and vermin ARE InstancedMesh and are
// found by name (src/birds.js / src/vermin.js both name their group as of
// this milestone) rather than by build-order position among the scene's
// several unnamed groups, which was the fragile alternative.
function computeRealtimeHash({ scene, leithers }) {
  let hash = 0x811c9dc5; // FNV-1a offset basis, same as computeGeomHash

  if (leithers && Array.isArray(leithers.walkers) && leithers.walkers.length) {
    const arr = new Float32Array(leithers.walkers.length * 3);
    leithers.walkers.forEach((w, i) => {
      arr[i * 3] = w.s;
      arr[i * 3 + 1] = w.side;
      arr[i * 3 + 2] = w.dir;
    });
    hash = hashString('leithers-realtime', hash);
    hash = hashFloatArray(arr, hash);
  }

  for (const name of ['birds', 'vermin']) {
    const group = scene.getObjectByName(name);
    if (!group) continue;
    // EVERY InstancedMesh in the group, not just the last one a traverse
    // lands on. `birds` builds three (wheeling, perched, pigeons) and
    // birds.update() animates only the wheeling set — so a last-one-wins pick
    // hashed the static pigeons and left this group's one real-time mesh
    // unguarded. Measured at E2c.3b.1 review: over 700 stepped frames,
    // birds[0] moved and was not hashed, birds[2] was hashed and never moved.
    // Indexing the label keeps two same-sized meshes from cancelling out.
    let i = 0;
    group.traverse((obj) => {
      if (!obj.isInstancedMesh) return;
      hash = hashString(`${name}-realtime-${i++}`, hash);
      hash = hashFloatArray(obj.instanceMatrix.array, hash);
    });
  }

  return (hash >>> 0).toString(16).padStart(8, '0');
}

// Polls shopfronts' lazy atlas pages until every page the engine has already
// decided is "near" (p.loaded, set by shopfronts.js's own update() during the
// settle loop above) has an actual decoded image behind it — or times out.
// TextureLoader's image decode is asynchronous browser work outside our
// control; stepping simulation frames doesn't drive it, so this polls on a
// real timer instead. That's fine: it only gates readiness, it never
// advances any seeded/stepped game state, so it can't affect determinism.
function waitForPagesLoaded(shopfronts, timeoutMs) {
  return new Promise((resolve) => {
    const start = Date.now ? Date.now() : 0;
    const deadline = start + timeoutMs;
    function poll() {
      const pages = (shopfronts && shopfronts.pages) || [];
      const pending = pages.some((p) => p && p.loaded && p.mesh &&
        !(p.mesh.material.map && p.mesh.material.map.image && p.mesh.material.map.image.complete));
      if (!pending || Date.now() > deadline) { resolve(); return; }
      setTimeout(poll, 20);
    }
    poll();
  });
}

export function createDebugApi(ctx) {
  const {
    camera, world, npcs, leithers, litter, shopfronts, controls, proximityAudio,
    renderer, scene, sky, atmosphere, torch, stepFrame, updateFrame, updaters, setAutoAnimate,
    DPR_CAP, ambience, composer, bloomPass, renderNow, setPostProcessing,
  } = ctx;

  const consoleErrors = [];
  const origConsoleError = console.error.bind(console);
  console.error = (...args) => {
    consoleErrors.push(args.map((a) => (a && a.message) || String(a)).join(' '));
    origConsoleError(...args);
  };
  window.addEventListener('error', (e) => {
    consoleErrors.push(e.message || String(e.error || e));
  });
  window.addEventListener('unhandledrejection', (e) => {
    consoleErrors.push('unhandledrejection: ' + ((e.reason && e.reason.message) || e.reason));
  });

  // Settles the camera at a world position/lookAt: ~150 stepped frames (the
  // positional-audio ramp throws non-finite on a teleport — see
  // src/proximity-audio.js — hence the try/catch), then a final re-set +
  // single step so the last render is exactly on-target. Returns once the
  // lazily-loaded shopfront atlas page(s) near the new position have
  // finished decoding.
  //
  // The settle loop UPDATES without drawing (updateFrame, not stepFrame): the
  // intermediate frames are never looked at, and drawing them cost ~160ms each
  // under SwiftShader — 150 of them per bookmark visit. The final on-target
  // step below and the post-texture-wait frames still render, which is what
  // actually matters: the texture upload happens on render, and the last frame
  // has to be the one that gets captured. See the note in src/main.js.
  // fixed.eyeY / fixed.lookY override the terrain-derived heights for custom
  // bookmarks that pose the camera at an absolute elevation (skyline). The
  // caller must suspend controls' yFollow around such a pose (see gotoBookmark)
  // or the per-frame ground clamp pulls the camera straight back down.
  async function settleAt(px, pz, lookX, lookZ, fixed = {}) {
    const eyeY = fixed.eyeY != null ? fixed.eyeY
      : (world.groundHeight ? world.groundHeight(px, pz) + EYE_HEIGHT : EYE_HEIGHT);
    const lookY = fixed.lookY != null ? fixed.lookY
      : (world.groundHeight ? world.groundHeight(lookX, lookZ) + EYE_HEIGHT : EYE_HEIGHT);
    camera.position.set(px, eyeY, pz);
    camera.lookAt(lookX, lookY, lookZ);
    for (let i = 0; i < SETTLE_FRAMES; i++) {
      try { updateFrame(SETTLE_DT, i * SETTLE_DT); } catch { /* non-finite audio ramp on teleport, documented above */ }
    }
    camera.position.set(px, eyeY, pz);
    camera.lookAt(lookX, lookY, lookZ);
    stepFrame(SETTLE_DT, SETTLE_FRAMES * SETTLE_DT);
    await waitForPagesLoaded(shopfronts, TEXTURE_WAIT_TIMEOUT_MS);
    // A page's texture can finish decoding (async, real wall-clock work)
    // AFTER the last render above — waitForPagesLoaded only waits for that,
    // it doesn't itself trigger a render, so the canvas can still show the
    // pre-decode (black) frame even though the promise resolved. Re-render a
    // few times to composite whatever just became ready — and actually YIELD
    // to the event loop between each one (measured: a tight synchronous loop
    // of stepFrame calls never gives the browser's texture-upload/decode
    // machinery a real wall-clock tick to catch up, so it stays stale no
    // matter how many synchronous frames run; a macrotask boundary between
    // frames is what lets it resolve).
    for (let i = 0; i < POST_LOAD_SETTLE_FRAMES; i++) {
      await new Promise((resolve) => setTimeout(resolve, 0));
      camera.position.set(px, eyeY, pz);
      camera.lookAt(lookX, lookY, lookZ);
      stepFrame(SETTLE_DT, (SETTLE_FRAMES + 1 + i) * SETTLE_DT);
    }
  }

  async function goto(chainage, side, distance) {
    const { point, tangent } = pointAtChainage(world.streetLine, chainage);
    const nx = -tangent[1];
    const nz = tangent[0];
    const sign = side === 'east' ? 1 : -1;
    // close: stand ON the target side, looking outward at it.
    // far: stand on the OPPOSITE side, looking across at it.
    const standSign = distance === 'close' ? sign : -sign;
    const px = point[0] + nx * SIDE_OFFSET * standSign;
    const pz = point[1] + nz * SIDE_OFFSET * standSign;
    const lookX = px + nx * sign * LOOK_AHEAD;
    const lookZ = pz + nz * sign * LOOK_AHEAD;
    await settleAt(px, pz, lookX, lookZ);
    const eyeY = world.groundHeight ? world.groundHeight(px, pz) + EYE_HEIGHT : EYE_HEIGHT;
    return { chainage, side, distance, position: { x: px, y: eyeY, z: pz } };
  }

  async function gotoBookmark(id) {
    const bm = BOOKMARK_DEFS.find((b) => b.id === id);
    if (!bm) throw new Error(`[debug] unknown bookmark: ${id}`);
    if (bm.custom) {
      // Absolute camera pose (elevated skyline shot). settleAt sets the fixed
      // eye/look Y; the ground-follow clamp is already suspended because the
      // harness has paused auto-animate (pauseAuto -> setYFollow(false), see
      // main.js), so no stepFrame — including invariants()' — pulls it back.
      await settleAt(bm.camera.x, bm.camera.z, bm.lookAt.x, bm.lookAt.z,
        { eyeY: bm.camera.y, lookY: bm.lookAt.y });
      return bm;
    }
    await goto(bm.chainage, bm.side, bm.distance);
    return bm;
  }

  function face(x, z) {
    camera.lookAt(x, camera.position.y, z);
  }

  function setTime(h) {
    atmosphere.setTime(h); // also freezes the cycle — see docs/VALIDATION.md
  }

  function setWeather(name) {
    atmosphere.setWeather(name); // starts (or no-ops) a transition — see atmosphere.js
  }

  // E2c.3c Part 3: lets scripts/smoke.mjs disable the autonomous scheduler
  // for golden capture passes — belt-and-braces alongside the schedule's own
  // multi-hour minimum interval (see atmosphere.js), which already keeps it
  // from firing during any capture pass at the standing clock rate.
  function setWeatherSchedule(enabled) {
    atmosphere.setWeatherSchedule(enabled);
  }

  // Test-only override of the atmosphere's own cycle rate, independent of
  // setTime (which always freezes it to 0 — see docs/VALIDATION.md). Exists
  // so the smoke harness can deterministically drive the clock across a
  // midnight wraparound (hours 24->0) via stepFrame while a weather
  // transition is in progress, without resuming the real rAF loop
  // (resumeAuto) — which would advance on wall-clock time and break
  // determinism.
  function setRate(hoursPerRealMinute) {
    atmosphere.setRate(hoursPerRealMinute);
  }

  // E2e acceptance criterion 2: forces the touch-capability class on <html>
  // regardless of the harness's real pointer/touch capabilities, so
  // scripts/smoke.mjs can exercise the touch UI. Ordinary headless Chromium
  // (no hasTouch context option) reports pointer:fine / maxTouchPoints 0 and
  // needs this override to get html.touch at all — but scripts/smoke.mjs's
  // mobile pass builds its context with hasTouch:true, under which Chromium
  // reports any-pointer:coarse at boot and html.touch is already set before
  // this is ever called (measured: see E2e.1 item 3). The gate there asserts
  // the override in both directions instead of relying on the class being
  // absent beforehand.
  function setTouchMode(v) {
    document.documentElement.classList.toggle('touch', !!v);
    // title.js's copy swap runs once at boot (before this override can ever
    // fire, since it needs window.__mcgrotDebug to exist first) — this event
    // lets it re-check the class instead of staying stuck with whatever copy
    // it picked before the harness forced touch mode on.
    window.dispatchEvent(new CustomEvent('mcgrot:touchmodechange'));
  }

  // E2e item 3 (DPR cap): lets the harness re-measure frame cost at a
  // different pixel ratio than the shipped default without a page reload.
  function setPixelRatio(v) {
    renderer.setPixelRatio(v);
  }

  // Mean/p95 JS-side frame cost (updaters + render) over N stepped frames at
  // the renderer's CURRENT pixel ratio — call setPixelRatio first. This is a
  // headless CPU-timing proxy, not a real phone's GPU frame time (see the
  // E2e brief's "what you cannot verify" — Dan does the on-device check).
  function measureFrameTiming(frames = 60) {
    const samples = [];
    for (let i = 0; i < frames; i++) {
      const t0 = performance.now();
      stepFrame(SETTLE_DT, i * SETTLE_DT);
      samples.push(performance.now() - t0);
    }
    samples.sort((a, b) => a - b);
    const mean = samples.reduce((s, v) => s + v, 0) / samples.length;
    const p95 = samples[Math.min(samples.length - 1, Math.floor(samples.length * 0.95))];
    return { meanMs: mean, p95Ms: p95, pixelRatio: renderer.getPixelRatio(), frames };
  }

  // Bulk settle for scripts/smoke.mjs — a drop-in for
  //   for (let i = 0; i < n; i++) stepFrame(1/60, i/60)
  // that draws only the LAST frame. EXACTLY n updater calls at exactly the same
  // dt/t values, so the settled state is bit-identical to the loop it replaces
  // — the count matters, one extra frame of simulation would move every golden.
  // Only the ~160ms-per-frame SwiftShader raster of the n-1 frames nobody looks
  // at goes away. The final frame renders so a screenshot or invariants() taken
  // straight after still sees the settled state. try/catch is the teleport
  // audio ramp, same as settleAt.
  function stepFrames(n, tOffset = 0) {
    if (n <= 0) return;
    for (let i = 0; i < n - 1; i++) {
      try { updateFrame(SETTLE_DT, tOffset + i * SETTLE_DT); } catch { /* non-finite audio ramp, see settleAt */ }
    }
    try { stepFrame(SETTLE_DT, tOffset + (n - 1) * SETTLE_DT); } catch { /* as above */ }
  }

  function invariants() {
    stepFrame(SETTLE_DT, 0);
    const info = renderer.info.render;
    const atmo = atmosphere.state();
    return {
      drawCalls: info.calls,
      triangles: info.triangles,
      geomHash: computeGeomHash({ scene, world, npcs }),
      realtimeHash: computeRealtimeHash({ scene, leithers }),
      updaterCount: updaters.length,
      updaterNames: updaters.map((u) => u.name),
      consoleErrors: consoleErrors.slice(),
      time: atmo.hours,
      rate: atmo.rate,
      weather: atmo.weather,
      weatherTransition: atmo.weatherTransition,
      exposure: atmo.exposure,
      fogDensity: atmo.fogDensity,
      rain: atmo.rain,
      wetness: atmo.wetness,
      // Identity check, not an equality check: catches "THE SEAM" failure
      // mode in sky.js — a `scene.fog.color = new THREE.Color(...)`
      // reassignment anywhere would leave this uniform pointing at a stale
      // object even though the colour values might still look right.
      skyFogLinked: !!(sky && world.fog && sky.uniforms.uFog.value === world.fog.color),
    };
  }

  return {
    // --- back-compat: existing probe fields keep working unchanged ---
    camera, world, npcs, leithers, litter, shopfronts, controls, proximityAudio, renderer, scene,
    stepFrame,
    stepFrames,

    // --- new test API ---
    goto,
    gotoBookmark,
    face,
    setTime,
    setWeather,
    setWeatherSchedule,
    setRate,
    setTouchMode,
    setPixelRatio,
    measureFrameTiming,
    torch,
    DPR_CAP,
    ambience,
    composer,
    bloomPass,
    renderNow,
    setPostProcessing,
    invariants,
    bookmarks: BOOKMARK_DEFS,
    pauseAuto: () => setAutoAnimate(false),
    resumeAuto: () => setAutoAnimate(true),
  };
}
