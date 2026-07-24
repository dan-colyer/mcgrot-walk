// window.__mcgrotDebug — the validation rig's test API (E0). Hostname-gated to
// localhost by main.js; ships in the bundle but is inert everywhere else.
//
// goto()/face() pose the camera; invariants() reports scene health; bookmarks
// is a curated golden-pose set. setTime/setWeather are stubs until E2 makes
// them real (see docs/ROADMAP.md). scripts/smoke.mjs is the headless
// consumer; docs/VALIDATION.md is the playbook.

import { pointAtChainage } from './frontage.js';

const EYE_HEIGHT = 1.7;
const SETTLE_FRAMES = 150;
const SETTLE_DT = 1 / 60;
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
    // not chainage-derived (hand-picked, not goto()-computed). FogExp2
    // density (0.0095, src/world.js) hides almost everything past ~150m, so
    // this sits low and close rather than high and far to actually show the
    // skyline instead of solid fog.
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
// aerials, birds, vermin, roadworks cones — enumerated by traversal, not a
// hardcoded list) + every NPC's placed position. NPCs aren't InstancedMesh
// in this codebase (each is its own Group — see src/npcs.js), but their
// placement is just as seeded/static as the InstancedMesh content and just
// as important to catch drift in, so they're folded in by iterating
// npcs.npcs directly rather than via scene.traverse. Deliberately excludes
// anything that moves under real-time rAF (leithers/birds/vermin AI,
// scenery smoke) — see docs/VALIDATION.md for why.
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
    renderer, scene, stepFrame, updaters, setAutoAnimate,
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
  async function settleAt(px, pz, lookX, lookZ) {
    camera.position.set(px, EYE_HEIGHT, pz);
    camera.lookAt(lookX, EYE_HEIGHT, lookZ);
    for (let i = 0; i < SETTLE_FRAMES; i++) {
      try { stepFrame(SETTLE_DT, i * SETTLE_DT); } catch { /* non-finite audio ramp on teleport, documented above */ }
    }
    camera.position.set(px, EYE_HEIGHT, pz);
    camera.lookAt(lookX, EYE_HEIGHT, lookZ);
    stepFrame(SETTLE_DT, SETTLE_FRAMES * SETTLE_DT);
    await waitForPagesLoaded(shopfronts, TEXTURE_WAIT_TIMEOUT_MS);
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
    return { chainage, side, distance, position: { x: px, y: EYE_HEIGHT, z: pz } };
  }

  async function gotoBookmark(id) {
    const bm = BOOKMARK_DEFS.find((b) => b.id === id);
    if (!bm) throw new Error(`[debug] unknown bookmark: ${id}`);
    if (bm.custom) {
      await settleAt(bm.camera.x, bm.camera.z, bm.lookAt.x, bm.lookAt.z);
      camera.position.y = bm.camera.y;
      camera.lookAt(bm.lookAt.x, bm.lookAt.y, bm.lookAt.z);
      stepFrame(SETTLE_DT, 0);
      return bm;
    }
    await goto(bm.chainage, bm.side, bm.distance);
    return bm;
  }

  function face(x, z) {
    camera.lookAt(x, camera.position.y, z);
  }

  function setTime(h) {
    console.info('[debug] setTime not implemented until E2');
  }

  function setWeather(state) {
    console.info('[debug] setWeather not implemented until E2');
  }

  function invariants() {
    stepFrame(SETTLE_DT, 0);
    const info = renderer.info.render;
    return {
      drawCalls: info.calls,
      triangles: info.triangles,
      geomHash: computeGeomHash({ scene, world, npcs }),
      updaterCount: updaters.length,
      updaterNames: updaters.map((u) => u.name),
      consoleErrors: consoleErrors.slice(),
    };
  }

  return {
    // --- back-compat: existing probe fields keep working unchanged ---
    camera, world, npcs, leithers, litter, shopfronts, controls, proximityAudio, renderer,
    stepFrame,

    // --- new test API ---
    goto,
    gotoBookmark,
    face,
    setTime,
    setWeather,
    invariants,
    bookmarks: BOOKMARK_DEFS,
    pauseAuto: () => setAutoAnimate(false),
    resumeAuto: () => setAutoAnimate(true),
  };
}
