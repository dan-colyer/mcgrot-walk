// Four-up live comparison for the G1 bake-off. A REVIEW TOOL, not the game.
//
// Every candidate posed at the same instant, in the same light, at the same
// distance from the lens, side by side. The strips in
// docs/smoke/captures/mcgrots/g1/ are stills; a walk has to be judged moving,
// and judging it across three page loads is judging your own memory.
//
// ONE SCENE, FOUR CAMERAS, SCISSORED VIEWPORTS. Not four renderers and not
// four scenes: sharing the scene is what guarantees the lighting is identical
// rather than merely configured identically. Each panel's camera sits at the
// same offset from its own figure, so nothing differs across panels except the
// body itself.
//
// THE FIGURES WALK ON THE SPOT. The body interface takes `phase` in METRES
// walked (src/mcgrots/actor.js), so a treadmill is just phase advancing while
// position stays put — no locomotion involved, and every panel is at the same
// point in its stride on every frame. The ground stripes scroll at the same
// rate to sell it, because a walk with a static ground reads as a mime.

import * as THREE from 'three';
import { LIGHT } from '../site.js';
import { makeCapsuleBody } from '../actors/capsule.js';
import { makeSegmentedBody } from '../actors/segmented.js';
import { makeFlatsBody } from '../actors/flats.js';
import { makeSkinnedBody } from '../actors/skinned.js';

const HEIGHT = 1.72;
const WALK_SPEED = 1.35;          // m/s — matches actor.js
const SPACING = 40;               // metres between figures; far enough that no
                                  // panel can see its neighbour
const params = new URLSearchParams(location.search);
const ARCHETYPE = params.get('archetype') || 'rab';

const PANELS = [
  { id: 'skinned', label: 'A1 · Skinned', make: (a) => makeSkinnedBody({ assets: a, archetype: ARCHETYPE }) },
  { id: 'segmented', label: 'A2 · Segmented', make: (a) => makeSegmentedBody({ assets: a, archetype: ARCHETYPE }) },
  { id: 'flats', label: 'A3 · Hinged flats', make: (a) => makeFlatsBody({ assets: a, archetype: ARCHETYPE }) },
  { id: 'capsule', label: 'Control · Capsule', make: () => makeCapsuleBody({}) },
];

const canvas = document.getElementById('scene');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = LIGHT.exposure;
renderer.setScissorTest(true);

const scene = new THREE.Scene();
scene.background = new THREE.Color(LIGHT.skyColor);

// The game's own lighting rig, so a candidate that only reads well under a
// review light is not flattered here.
scene.add(new THREE.HemisphereLight(LIGHT.skyColor, LIGHT.groundColor, LIGHT.hemiIntensity));
const sun = new THREE.DirectionalLight(LIGHT.sunColor, LIGHT.sunIntensity);
sun.position.set(Math.cos(LIGHT.sunAltitude) * Math.sin(LIGHT.sunAzimuth) * 120,
  Math.sin(LIGHT.sunAltitude) * 120,
  Math.cos(LIGHT.sunAltitude) * Math.cos(LIGHT.sunAzimuth) * 120);
scene.add(sun, sun.target);

// Ground stripes, scrolled by phase. Procedural so there is no asset to load
// and no chance of it differing between panels.
const stripeCanvas = document.createElement('canvas');
stripeCanvas.width = 8; stripeCanvas.height = 64;
{
  const c = stripeCanvas.getContext('2d');
  c.fillStyle = '#4a4433'; c.fillRect(0, 0, 8, 64);
  c.fillStyle = '#3a352a'; c.fillRect(0, 0, 8, 32);
}
const stripeTex = new THREE.CanvasTexture(stripeCanvas);
stripeTex.wrapS = stripeTex.wrapT = THREE.RepeatWrapping;
stripeTex.repeat.set(4, 200);
const ground = new THREE.Mesh(
  new THREE.PlaneGeometry(400, 400),
  new THREE.MeshLambertMaterial({ map: stripeTex }),
);
ground.rotation.x = -Math.PI / 2;
scene.add(ground);

const panels = [];
let loadError = null;

const boot = (async () => {
  for (let i = 0; i < PANELS.length; i++) {
    const spec = PANELS[i];
    const body = spec.make(null);
    const holder = new THREE.Group();
    holder.position.set(i * SPACING, 0, 0);
    body.group.scale.setScalar(HEIGHT);
    holder.add(body.group);
    scene.add(holder);

    // Three-quarter view: a pure side-on hides a head-turn, and a head-turn is
    // exactly the motion A3 cannot do. The comparison has to be able to show it.
    // Framing: far enough back that the BOOTS are never clipped. At 3.0 m and
    // 34° the vertical field is 1.86 m against a 1.72 m figure, which put the
    // feet at 92% of the way down the panel — they touched the edge, and the
    // foot-plant is one of the things being judged.
    const cam = new THREE.PerspectiveCamera(32, 1, 0.05, 200);
    cam.position.set(holder.position.x + 2.6, 1.24, 2.6);
    cam.lookAt(holder.position.x, 0.82, 0);

    // A ledge per panel, shown only in the sit pose. A seated figure with
    // nothing under it reads as a crouch however good the pose is — which is
    // exactly why sitting looked bad in all four arms at first review.
    const ledge = new THREE.Mesh(
      new THREE.BoxGeometry(1.5, 0.45, 0.5),
      new THREE.MeshLambertMaterial({ color: 0x5a5344, flatShading: true }),
    );
    ledge.position.set(holder.position.x, 0.225, -0.24);
    ledge.visible = false;
    scene.add(ledge);

    panels.push({ ...spec, body, holder, cam, ledge, ready: body.ready });
  }
  const results = await Promise.allSettled(panels.map((p) => p.ready || Promise.resolve()));
  results.forEach((r, i) => {
    if (r.status === 'rejected') {
      panels[i].failed = String(r.reason?.message || r.reason);
      loadError = panels[i].failed;
    }
  });
})();

// ---- controls -------------------------------------------------------------
let mode = 'walk';
let playing = true;
let rate = 1;
let phase = 0;          // metres walked
let lookT = 0;

const setMode = (m) => {
  mode = m;
  for (const b of document.querySelectorAll('[data-mode]')) {
    b.classList.toggle('on', b.dataset.mode === m);
  }
};
for (const b of document.querySelectorAll('[data-mode]')) {
  b.addEventListener('click', () => setMode(b.dataset.mode));
}
const playBtn = document.getElementById('play');
playBtn.addEventListener('click', () => {
  playing = !playing;
  playBtn.textContent = playing ? 'Pause' : 'Play';
  playBtn.classList.toggle('on', playing);
});
const rateInput = document.getElementById('rate');
const rateOut = document.getElementById('rateOut');
rateInput.addEventListener('input', () => {
  rate = Number(rateInput.value);
  rateOut.textContent = `${rate.toFixed(2)}×`;
});
document.getElementById('step').addEventListener('click', () => {
  playing = false; playBtn.textContent = 'Play'; playBtn.classList.remove('on');
  advance(1 / 30);
});

function advance(dt) {
  const scaled = dt * rate;
  if (mode === 'walk') {
    phase += WALK_SPEED * scaled;
    stripeTex.offset.y = -phase / 2;
  }
  if (mode === 'look') lookT += scaled;

  for (const p of panels) {
    if (p.failed) continue;
    if (p.ledge) p.ledge.visible = mode === 'sit';
    p.body.pose(mode === 'look' ? 'idle' : mode, phase, scaled || 1e-6);
    // A slow sweep rather than a fixed angle: a lean and a turn look alike at
    // one pose and quite different in motion, which is the whole question.
    p.body.lookAt(mode === 'look' ? Math.sin(lookT * 1.1) * 0.95 : 0);
    if (p.body.faceCamera) p.body.faceCamera(p.cam, p.holder);
  }
}

// ---- render ---------------------------------------------------------------
function layout() {
  const w = canvas.clientWidth, h = canvas.clientHeight;
  renderer.setSize(w, h, false);
  const cols = w < 760 ? 2 : PANELS.length;
  const rows = Math.ceil(PANELS.length / cols);
  const pw = Math.floor(w / cols), ph = Math.floor(h / rows);
  panels.forEach((p, i) => {
    const cx = (i % cols) * pw;
    const cy = h - (Math.floor(i / cols) + 1) * ph;   // WebGL origin is bottom-left
    p.rect = [cx, cy, pw, ph];
    p.cam.aspect = pw / ph;
    p.cam.updateProjectionMatrix();
  });
  // The HTML labels sit over the canvas, so they use TOP-left coordinates.
  const bar = document.getElementById('labels');
  bar.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
}
window.addEventListener('resize', layout);

let last = performance.now();
function tick(now) {
  const dt = Math.min(0.05, (now - last) / 1000);
  last = now;
  if (playing) advance(dt);

  for (const p of panels) {
    if (!p.rect) continue;
    const [x, y, w, h] = p.rect;
    renderer.setViewport(x, y, w, h);
    renderer.setScissor(x, y, w, h);
    renderer.render(scene, p.cam);
  }
  requestAnimationFrame(tick);
}

// Measurement hook. This is a review tool, so "does the figure actually sit ON
// the ledge" has to be answerable with a number rather than by squinting at a
// screenshot — which is how the seat drop came to be wrong in the first place.
window.__cmp = {
  THREE, scene, panels,
  measure() {
    return panels.filter((p) => !p.failed).map((p) => {
      const box = new THREE.Box3().setFromObject(p.body.group);
      return {
        id: p.id,
        feetY: +box.min.y.toFixed(3),
        headY: +box.max.y.toFixed(3),
        ledgeTopY: p.ledge ? +(p.ledge.position.y + 0.225).toFixed(3) : null,
        ledgeVisible: p.ledge ? p.ledge.visible : null,
      };
    });
  },
  setMode,
};

boot.then(() => {
  document.getElementById('labels').innerHTML = panels.map((p) =>
    `<span class="${p.failed ? 'failed' : ''}">${p.label}${p.failed ? ' — FAILED' : ''}</span>`).join('');
  if (loadError) document.getElementById('err').textContent = loadError;
  layout();
  advance(0);
  document.body.classList.add('ready');
  requestAnimationFrame(tick);
});
