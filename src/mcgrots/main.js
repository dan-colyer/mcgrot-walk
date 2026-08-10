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
import { LIGHT, PITCH, PITCH_YAW, toWorld } from './site.js';
import { loadFoot, buildFoot } from './foot.js';
import { ANCHORS, anchorById, nearestAnchor } from './anchors.js';
import { makeActor } from './actor.js';
import { makeCapsuleBody } from './actors/capsule.js';
import { makeSegmentedBody } from './actors/segmented.js';

// G1's bake-off lever. `?body=segmented` swaps the candidate without touching
// anything else, which is what keeps the comparison to the body alone —
// locomotion, cameras, lighting and anchors are identical across all arms.
const BODIES = {
  capsule: () => makeCapsuleBody({}),
  segmented: (assets) => makeSegmentedBody({ assets, archetype: BODY_ARCHETYPE }),
};
const params = new URLSearchParams(location.search);
const BODY_KIND = params.get('body') || 'capsule';
const BODY_ARCHETYPE = params.get('archetype') || 'rab';

const FIXED_DT = 1 / 60;

const canvas = document.getElementById('scene');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = LIGHT.exposure;

const scene = new THREE.Scene();
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

// The van's footprint, as a box. gullet.js builds the real one and G3 brings
// it in; G0 needs something the shots can be composed against.
const vanPlaceholder = (() => {
  const g = new THREE.Group();
  const body = new THREE.Mesh(
    new THREE.BoxGeometry(5.2, 2.4, 2.6),
    new THREE.MeshLambertMaterial({ color: 0x7a5a3a, flatShading: true }),
  );
  body.position.y = 1.2;   // half of 2.4 — sits ON the ground, not above it
  g.add(body);
  const w = toWorld(0, 0);
  g.position.set(w.x, 0, w.z);
  g.rotation.y = PITCH_YAW;
  g.name = 'van-placeholder';
  return g;
})();
scene.add(vanPlaceholder);

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

let footData = null;
let current = null;          // the anchor the actor is parked at or heading to
let clock = 0;               // seconds of game time; wall-clock in G4
let bodyError = null;        // a candidate that failed to load — reported, not thrown

function goTo(id, { snap = false } = {}) {
  const a = anchorById(id);
  if (!a) return false;
  current = a;
  if (snap) {
    actor.snapTo(a.pos.x, a.pos.z, a.yaw);
    actor.setState(a.sit ? 'sit' : 'idle');
  } else {
    actor.walkTo(a.pos.x, a.pos.z, a.yaw);
  }
  return true;
}

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

// The camera cuts rather than flies. A fixed shot per anchor is the whole
// staging model (anchors.js) — interpolating between them would reintroduce
// the arbitrary angles the model exists to avoid.
function placeCamera() {
  if (reviewMode && actor) {
    const r = REVIEW[reviewMode] || REVIEW.side;
    const p = actor.group.position;
    camera.position.set(p.x + r.off[0], r.off[1], p.z + r.off[2]);
    camera.lookAt(p.x + r.look[0], r.look[1], p.z + r.look[2]);
    return;
  }
  if (!current) return;
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
  renderer.render(scene, camera);
}

function resize() {
  const w = window.innerWidth, h = window.innerHeight;
  renderer.setSize(w, h, false);
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
}
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
  pointer.x = (clientX / window.innerWidth) * 2 - 1;
  pointer.y = -(clientY / window.innerHeight) * 2 + 1;
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

  // The bake-off body. An unknown ?body= falls back to the control rather than
  // failing to boot — a typo in a capture script should produce a comparable
  // frame with an obvious identity, not a blank page.
  const makeBody = BODIES[BODY_KIND] || BODIES.capsule;
  const body = makeBody(null);
  actor = makeActor({ body });
  scene.add(actor.group);
  try {
    await actor.ready;
  } catch (err) {
    // A candidate that cannot load is a RESULT, not a crash. G1 has to be able
    // to report "A1 failed" with a frame beside it.
    console.warn(`[mcgrots] body '${BODY_KIND}' failed to load:`, err.message);
    bodyError = err.message;
  }

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
      // G1's bake-off handles. `body` names which candidate is loaded and
      // `bodyError` is non-null when it failed — a failed candidate must be
      // reportable rather than an unexplained blank frame.
      body: BODY_KIND,
      archetype: BODY_ARCHETYPE,
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
