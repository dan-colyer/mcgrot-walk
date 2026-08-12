// McGrot's — entry point. G0.
//
// A second, small game in this repo: one pitch at the Foot of the Walk, third
// person, anchored spots. Plan and decisions in docs/MCGROTS-ROADMAP.md.
//
// THIS DOES NOT IMPORT THE STREET. src/main.js and its modules are paused
// (CLAUDE.md, and MCGROTS-ROADMAP § 8) and nothing here may edit them. The one
// thing shared with the street is the asset contract convention, honoured in
// foot.js. Everything else — scene, loop, camera, input — is this game's own.
//
// THE LOOP IS FRAME-STEPPABLE BY DESIGN. `dbg.pauseAuto()` stops rAF and
// `dbg.stepFrames(n)` advances a fixed dt, which is how the gate suite gets a
// deterministic capture. The street learned this the hard way: an unpinned
// clock alone moves the sky, and a probe that boots differently from the gate
// cannot be used to explain the gate.

import * as THREE from 'three';
import { LIGHT, PITCH } from './site.js';
import { loadFoot, buildFoot } from './foot.js';
import { ANCHORS, anchorById, nearestAnchor, SEAT_HEIGHT } from './anchors.js';
import { makeActor } from './actor.js';
import { makeCapsuleBody } from './actors/capsule.js';
import { makeSegmentedBody } from './actors/segmented.js';
import { makeFlatsBody } from './actors/flats.js';
import { makeSkinnedBody } from './actors/skinned.js';
import { createStyle, STYLES } from './style.js';
import { createLooks, LOOKS } from './looks.js';
import { createPage } from './page.js';
import { KEYS } from './keys.js';
import { buildStatue } from './statue.js';
import { buildVan } from './van.js';

// G1's bake-off lever. `?body=segmented` swaps the candidate without touching
// anything else, which is what keeps the comparison to the body alone —
// locomotion, cameras, lighting and anchors are identical across all arms.
const BODIES = {
  capsule: () => makeCapsuleBody({}),
  segmented: (assets) => makeSegmentedBody({ assets, archetype: BODY_ARCHETYPE }),
  flats: (assets) => makeFlatsBody({ assets, archetype: BODY_ARCHETYPE }),
  skinned: (assets) => makeSkinnedBody({ assets, archetype: BODY_ARCHETYPE }),
};
const params = new URLSearchParams(location.search);
const BODY_KIND = params.get('body') || 'capsule';
const BODY_ARCHETYPE = params.get('archetype') || 'rab';
// G2's bake-off levers, the same shape as G1's `?body=`.
//
// THREE INDEPENDENT ARMS, and they are separate params on purpose. A style in
// this game is not one thing: `look` mutates the scene before it draws
// (looks.js), `style` grades the finished frame (style.js), `page` puts
// furniture around it (page.js). Folding them into one `?style=` would make
// every candidate a bundle, and a bundle cannot be a control for another
// bundle — which is exactly the mistake the street's acceptance gates made
// twice (CLAUDE.md, the verification contract).
//
// So the four candidates Dan chose address as:
//   S1 inked cel      ?look=inked
//   S2 aerial flatten ?look=aerial      (S1 is its control: same but aerial=0)
//   S3 one key        ?style=key        (posterise is its control)
//   S4 the page       ?page=on
const STYLE_KIND = params.get('style') || 'none';
const LOOK_KIND = params.get('look') || 'none';
const PAGE_ON = params.get('page') === 'on';
const KEY_KIND = params.get('key') || null;

const FIXED_DT = 1 / 60;

const canvas = document.getElementById('scene');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = LIGHT.exposure;

const style = createStyle(renderer);
const scene = new THREE.Scene();
const looks = createLooks(scene);
scene.background = new THREE.Color(LIGHT.skyColor);
// Enough fog to give the massing depth without hiding the far side of the
// junction. This is a placeholder grade — G2 owns the real one.
scene.fog = new THREE.Fog(LIGHT.skyColor, 40, 260);

const camera = new THREE.PerspectiveCamera(48, 1, 0.1, 600);

// ONE FIXED LIGHTING SETUP (site.js). No clock, no weather, no atmosphere.js.
const hemi = new THREE.HemisphereLight(LIGHT.skyColor, LIGHT.groundColor, LIGHT.hemiIntensity);
scene.add(hemi);

const sun = new THREE.DirectionalLight(LIGHT.sunColor, LIGHT.sunIntensity);
{
  const r = 120;
  sun.position.set(
    PITCH.x + Math.cos(LIGHT.sunAltitude) * Math.sin(LIGHT.sunAzimuth) * r,
    Math.sin(LIGHT.sunAltitude) * r,
    PITCH.z + Math.cos(LIGHT.sunAltitude) * Math.cos(LIGHT.sunAzimuth) * r,
  );
  sun.target.position.set(PITCH.x, 0, PITCH.z);
}
scene.add(sun, sun.target);

// NO FILL LIGHT HERE, and that is a measured rejection rather than an omission.
//
// The cast renders as a near-black silhouette at every anchor. A camera-side
// fill was the obvious fix and is what the corpus would suggest — the comics
// light figures flat and frontally, with no dramatic key anywhere in 418 pages.
// It was built, swept from 0 to 6 against sun 6-9, hemisphere 3-5 and cast
// albedo 0.42-1.0, and it moved the cast's mean luminance from 8.3 to 11.0 in a
// frame whose mean is ~100. It is not the lever, so it is not in the scene.
//
// The lever is the ASSET. `rab`'s texture averages RGB(44, 37, 31) — measured
// off the decoded image — and `material.color` saturates at 1.0, so no
// multiplier can lift a map that dark. See docs/MCGROTS-VALIDATION § "The cast
// is unreadable" for the full table and what it means for G3.

// G3a: the real van, price board and ground dressing — replaces the G0 box.
buildVan(scene);

// Built in boot(), once the assets object exists — a segmented body needs the
// glb and its sidecar, and assetUrl is the only sanctioned way to reach them.
let actor = null;

// Ground-plane raycast target for click-to-walk, and the anchor markers.
const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2();
const markers = new THREE.Group();
markers.name = 'anchor-markers';
for (const a of ANCHORS) {
  const m = new THREE.Mesh(
    new THREE.RingGeometry(0.5, 0.72, 20),
    new THREE.MeshBasicMaterial({ color: 0xd3b05a, transparent: true, opacity: 0.5, side: THREE.DoubleSide }),
  );
  m.rotation.x = -Math.PI / 2;
  m.position.set(a.pos.x, 0.02, a.pos.z);
  m.name = `marker:${a.id}`;
  markers.add(m);
}
scene.add(markers);

// G3c: the real ledge at every sitting anchor, replacing G1's placeholder
// box. A low retaining wall — base course plus a capstone lip, the shape
// every low boundary wall at a real junction like this one actually has, not
// a bench dropped in. `docs/LEITH.md` names no specific wall at the Foot, so
// there is no real geometry to defer to here the way the buildings and the
// statue do; this is dressing consistent with `van.js`'s kerb/pavement
// stone tones, not a researched feature.
//
// CENTRED EXACTLY ON THE ANCHOR, not offset. The G1 placeholder set the ledge
// 0.3 m behind the standing spot — a number chosen independently of the pose,
// which is F1's own diagnosis of why the figure sat in front of the seat
// rather than on it. Measured (G3c): the rig's `hips` bone has ZERO local
// x/z offset from the actor's group origin at any point in the sit — the
// thighs swing the KNEE and FOOT forward as children, but the hip joint
// itself never moves horizontally, seated or standing. So the seat point is
// always exactly where the actor stands, and the ledge belongs exactly
// there — no along-facing offset derives to anything but zero.
const SEAT_WIDTH = 1.8;    // across — one person, with margin either side
const SEAT_DEPTH = 0.55;   // front-to-back, along the actor's facing
const CAP_H = 0.06;
const CAP_OVERHANG = 0.05;
const WALL_STONE = 0x5f594c;
const WALL_CAP = 0x716a58;
const seats = new THREE.Group();
seats.name = 'seats';
for (const a of ANCHORS) {
  if (!a.sit) continue;
  const base = new THREE.BoxGeometry(SEAT_WIDTH, SEAT_HEIGHT - CAP_H, SEAT_DEPTH);
  base.translate(0, (SEAT_HEIGHT - CAP_H) / 2, 0);
  const holder = new THREE.Group();
  holder.position.set(a.pos.x, 0, a.pos.z);
  holder.rotation.y = a.yaw;
  holder.name = `seat:${a.id}`;
  const wall = new THREE.Mesh(
    base,
    new THREE.MeshLambertMaterial({ color: WALL_STONE, flatShading: true }),
  );
  wall.name = `seat:${a.id}:wall`;
  holder.add(wall);
  const cap = new THREE.Mesh(
    new THREE.BoxGeometry(SEAT_WIDTH + CAP_OVERHANG * 2, CAP_H, SEAT_DEPTH + CAP_OVERHANG * 2),
    new THREE.MeshLambertMaterial({ color: WALL_CAP, flatShading: true }),
  );
  cap.position.y = SEAT_HEIGHT - CAP_H / 2;
  cap.name = `seat:${a.id}:cap`;
  holder.add(cap);
  seats.add(holder);
}
scene.add(seats);

let footData = null;
let current = null;          // the anchor the actor is parked at or heading to
let previous = null;         // F6: the anchor the camera is easing FROM during a walk
let clock = 0;               // seconds of game time; wall-clock in G4
let bodyError = null;        // a candidate that failed to load — reported, not thrown

function goTo(id, { snap = false } = {}) {
  const a = anchorById(id);
  if (!a) return false;
  const from = current;
  current = a;
  if (snap) {
    // A SNAP is a panel change: the actor is somewhere else on the next frame
    // and so is the camera. Under S4 that gets the gutter hold, which is what
    // the whole candidate is testing. A WALK is not — the walk between anchors
    // is the thing Dan asked to be able to watch (roadmap § decisions), and
    // cutting away from it would be cutting away from the game. F6: only the
    // snap branch is a cut, so `previous` is left alone here — the walk
    // branch is the only reader of it.
    page.cut(() => {
      actor.snapTo(a.pos.x, a.pos.z, a.yaw);
      actor.setState(a.sit ? 'sit' : 'idle');
      placeCamera();
    });
  } else {
    // `from` is whatever anchor the camera was AT (or last eased to) before
    // this call — null only if a walk is somehow requested before the boot
    // snap has ever run, in which case placeCamera() below falls back to a
    // cut for this one transition, having nothing to ease from.
    previous = from;
    actor.walkTo(a.pos.x, a.pos.z, a.yaw);
  }
  page.setCaption(a.label);
  return true;
}

// Cubic Hermite / smoothstep: 3t² − 2t³. Zero derivative at both ends, so the
// camera leaves and arrives at rest rather than at a constant speed that
// starts and stops on a hard corner — the thing that reads as a glide rather
// than a slide. Chosen over linear for exactly that softness, and over
// anything higher-order (e.g. quintic smootherstep) because F6 has no
// evidence either way that the extra derivative continuity is visible at
// these distances and durations; this is the cheapest curve with soft ends.
const easeCamera = (t) => t * t * (3 - 2 * t);

// G1's review camera: a fixed offset from the actor rather than a fixed point
// in the world, so a walking figure stays centred and the same size in every
// frame of a strip. This is an ANIMATION-REVIEW view, not a shot — the whole
// point of the staging model is that the game has no free camera. It exists
// because comparing three candidates' walks from an anchor shot would compare
// their distance from the lens as much as their motion.
let reviewMode = null;   // null | 'side' | 'front' | 'threequarter'
const REVIEW = {
  side: { off: [2.6, 0.95, 0], look: [0, 0.85, 0] },
  front: { off: [0, 0.95, 2.6], look: [0, 0.85, 0] },
  threequarter: { off: [1.9, 1.15, 1.9], look: [0, 0.85, 0] },
};

// F6, Dan 2026-08-12: "let's just try and make any camera cuts smooth." The
// shots are still fixed per anchor (anchors.js) — nothing here invents a new
// angle — but a WALK now eases the camera from the anchor it left to the one
// it is headed for, tied to `actor.progress` rather than a timer of its own
// (constraint: a duplicate clock drifts out of step with the actor and the
// camera lands early or late). A SNAP still cuts: `page.cut(...)`'s callback
// calls this directly, `current.camera` on its own with `actor.walking`
// false, same as before this fix — the parked and snapped poses are
// untouched by construction, not by a special case.
function placeCamera() {
  if (reviewMode && actor) {
    const r = REVIEW[reviewMode] || REVIEW.side;
    const p = actor.group.position;
    camera.position.set(p.x + r.off[0], r.off[1], p.z + r.off[2]);
    camera.lookAt(p.x + r.look[0], r.look[1], p.z + r.look[2]);
    return;
  }
  if (!current) return;
  if (actor.walking && previous) {
    const t = easeCamera(actor.progress);
    const pe = previous.camera.eye, ce = current.camera.eye;
    const pl = previous.camera.look, cl = current.camera.look;
    camera.position.set(
      pe.x + (ce.x - pe.x) * t,
      pe.y + (ce.y - pe.y) * t,
      pe.z + (ce.z - pe.z) * t,
    );
    camera.lookAt(
      pl.x + (cl.x - pl.x) * t,
      pl.y + (cl.y - pl.y) * t,
      pl.z + (cl.z - pl.z) * t,
    );
    return;
  }
  const c = current.camera;
  camera.position.set(c.eye.x, c.eye.y, c.eye.z);
  camera.lookAt(c.look.x, c.look.y, c.look.z);
}

function frame(dt) {
  clock += dt;
  actor.update(dt, clock);
  // Park state resolves on arrival, so a sitting spot only sits once reached.
  if (current && !actor.walking && actor.state !== 'sit' && current.sit) actor.setState('sit');
  placeCamera();
  style.render(scene, camera);
}

// The renderer draws into the PANEL, not the window, whenever S4 is on. When it
// is off the panel rect is the whole window, so this is one code path rather
// than a branch — an `if (paged)` here would mean the unpaged case stopped
// being exercised the moment the page shipped.
//
// Takes the rect as an argument rather than reading `page` out of the closure,
// because page.js calls this back from inside createPage's own layout: closing
// over the binding would be a temporal-dead-zone fault that only fires if a
// resize ever beats boot.
function applyViewport(v) {
  renderer.setSize(v.w, v.h, false);
  camera.aspect = v.w / v.h;
  camera.updateProjectionMatrix();
  style.resize();
  // In DRAWING-BUFFER pixels, not CSS pixels: the outline is specified in
  // device pixels and setPixelRatio is up to 2 here, so passing v.h would halve
  // the line on a retina display and nowhere else.
  looks.setViewportHeight(renderer.getDrawingBufferSize(new THREE.Vector2()).y);
}

const page = createPage({ canvas, onResize: applyViewport });

function resize() { applyViewport(page.viewport()); }
window.addEventListener('resize', resize);

let autoRunning = true;
let last = performance.now();
function tick(now) {
  if (!autoRunning) return;
  const dt = Math.min(0.1, (now - last) / 1000);
  last = now;
  frame(dt);
  requestAnimationFrame(tick);
}

function onPick(clientX, clientY) {
  // Against the CANVAS rect, not the window. Under S4 the canvas is inset into
  // the panel, so window-relative NDC would aim the ray at a point offset by
  // the whole margin — a click that walks you to the wrong anchor, and one that
  // would only appear once the page was switched on.
  const r = canvas.getBoundingClientRect();
  pointer.x = ((clientX - r.left) / r.width) * 2 - 1;
  pointer.y = -((clientY - r.top) / r.height) * 2 + 1;
  raycaster.setFromCamera(pointer, camera);
  const hits = raycaster.intersectObject(footData.ground, false);
  if (!hits.length) return;
  const p = hits[0].point;
  const a = nearestAnchor(p.x, p.z);
  if (a) goTo(a.id);
}

canvas.addEventListener('pointerdown', (e) => onPick(e.clientX, e.clientY));
// Number keys are the keyboard route to the same thing — and the route the
// gate suite drives, since a synthetic click depends on the projection matrix
// being right, which is one of the things under test.
window.addEventListener('keydown', (e) => {
  const i = Number(e.key) - 1;
  if (i >= 0 && i < ANCHORS.length) goTo(ANCHORS[i].id);
});

(async function boot() {
  const leith = await loadFoot();
  footData = buildFoot(leith);
  scene.add(footData.group);
  buildStatue(scene);

  // The bake-off body. An unknown ?body= falls back to the control rather than
  // failing to boot — a typo in a capture script should produce a comparable
  // frame with an obvious identity, not a blank page.
  const makeBody = BODIES[BODY_KIND] || BODIES.capsule;
  const body = makeBody(null);
  actor = makeActor({ body, camera });
  scene.add(actor.group);
  try {
    await actor.ready;
  } catch (err) {
    // A candidate that cannot load is a RESULT, not a crash. G1 has to be able
    // to report "A1 failed" with a frame beside it.
    console.warn(`[mcgrots] body '${BODY_KIND}' failed to load:`, err.message);
    bodyError = err.message;
  }

  style.setStyle(STYLE_KIND);
  if (KEY_KIND) style.setKey(KEY_KIND);
  // AFTER the actor and the massing are in the scene. looks.js traverses once
  // at install and swaps what it finds, so installing before the cast exists
  // would ink the ground and leave every character un-outlined — and the frame
  // would still look plausibly styled, which is the dangerous kind of wrong.
  looks.install(LOOK_KIND);
  page.setEnabled(PAGE_ON);
  goTo('back', { snap: true });
  resize();
  placeCamera();

  // Localhost-gated, exactly as the street's __mcgrotDebug is. A public build
  // must not ship a scene-mutating API.
  const localhost = ['localhost', '127.0.0.1', '[::1]'].includes(location.hostname);
  if (localhost) {
    window.__mcgrotsDebug = {
      THREE, scene, camera, renderer, actor, anchors: ANCHORS,
      buildingCount: footData.buildingCount,
      // The grade, exposed so it can be SWEPT rather than guessed. G0 needed
      // three attempts at the lighting because each one was a hand-picked pair
      // of numbers judged by eye on one frame; a sweep measures all five shots
      // at once. G2 grades the real style through the same handles.
      lights: { sun, hemi, ground: footData.ground },
      setGrade({ sunIntensity, hemiIntensity, exposure, groundColor } = {}) {
        if (sunIntensity !== undefined) sun.intensity = sunIntensity;
        if (hemiIntensity !== undefined) hemi.intensity = hemiIntensity;
        if (exposure !== undefined) renderer.toneMappingExposure = exposure;
        if (groundColor !== undefined) footData.ground.material.color.setHex(groundColor);
      },
      // The CAST's albedo, so it can be swept alongside the lights rather than
      // picked. G1 shipped ALBEDO_MULTIPLY 0.42 with no recorded reason and the
      // grade sweep never looked at the cast, so the two were tuned against
      // different things: at 0.42 the figures sit near luminance 10 in a frame
      // whose mean is 75, and no (sun, hemi) pair in the sweep's grid can lift
      // them, because the anchors' cameras always see the shadow side.
      //
      // Scales from a REMEMBERED BASE, so repeated calls do not compound —
      // a multiplier applied to the live colour would make the sweep's result
      // depend on the order its grid was visited.
      setCastAlbedo(k) {
        actor.group.traverse((o) => {
          if (!o.isMesh || !o.material?.color) return;
          if (!o.userData.baseColor) o.userData.baseColor = o.material.color.clone();
          o.material.color.copy(o.userData.baseColor).multiplyScalar(k);
        });
      },
      // G1's bake-off handles. `body` names which candidate is loaded and
      // `bodyError` is non-null when it failed — a failed candidate must be
      // reportable rather than an unexplained blank frame.
      body: BODY_KIND,
      archetype: BODY_ARCHETYPE,
      style: () => style.style,
      styleIds: () => STYLES.map((s) => s.id),
      setStyle: (id) => style.setStyle(id),
      setStyleStrength: (v) => style.setStrength(v),

      // G2's other two arms. Each is separately switchable at runtime, which is
      // what lets a gate boot ONCE and measure on-vs-off from the same process
      // — the street's flag gates boot twice and attribute a difference to the
      // flag, which is only sound because nothing else differs. Here nothing
      // else CAN differ, because it is the same scene.
      look: () => looks.look,
      lookIds: () => LOOKS.map((l) => l.id),
      setLook: (id) => looks.install(id),
      clearLook: () => looks.uninstall(),
      lookStats: () => looks.stats(),
      lookUniforms: looks.uniforms,

      key: () => style.key,
      keyIds: () => style.keyIds(),
      setKey: (id) => style.setKey(id),
      keys: KEYS,

      page: () => page.enabled,
      setPage: (v) => { page.setEnabled(!!v); resize(); },
      setPageTitle: (t) => page.setTitle(t),
      setPageCaption: (t) => page.setCaption(t),
      pageStats: () => page.stats(),
      get bodyError() { return bodyError; },
      bodyStats: () => actor.stats(),
      setActorState: (s) => actor.setState(s),
      lookAt: (yaw) => actor.lookAt(yaw),
      get phase() { return actor.phase; },
      // Walk to a raw point rather than an anchor, so a strip can capture a
      // long straight walk instead of a five-metre hop between two spots.
      walkTo: (x, z, yaw) => actor.walkTo(x, z, yaw),
      setReviewCamera(mode) { reviewMode = mode; placeCamera(); },
      anchorIds: () => ANCHORS.map((a) => a.id),
      goTo: (id) => goTo(id),
      snapTo: (id) => goTo(id, { snap: true }),
      pauseAuto() { autoRunning = false; },
      resumeAuto() { autoRunning = true; last = performance.now(); requestAnimationFrame(tick); },
      stepFrames(n = 1, dt = FIXED_DT) { for (let i = 0; i < n; i++) frame(dt); },
      setMarkersVisible(v) { markers.visible = !!v; },
      state: () => ({
        anchor: current?.id ?? null,
        walking: actor.walking,
        actorState: actor.state,
        actor: { x: +actor.group.position.x.toFixed(3), z: +actor.group.position.z.toFixed(3), yaw: +actor.group.rotation.y.toFixed(4) },
        camera: { x: +camera.position.x.toFixed(3), y: +camera.position.y.toFixed(3), z: +camera.position.z.toFixed(3) },
        clock: +clock.toFixed(3),
        drawCalls: renderer.info.render.calls,
        triangles: renderer.info.render.triangles,
      }),
    };
  }

  document.body.classList.add('booted');
  requestAnimationFrame(tick);
})();
