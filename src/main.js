import * as THREE from 'three';
import { loadAssets } from './assets.js';
import { buildWorld, createPlayerTorch } from './world.js';
import { createControls } from './controls.js';
import { buildNpcs } from './npcs.js';
import { buildShopfronts } from './shopfronts.js';
import { createProximityAudio } from './proximity-audio.js';
import { createInteract } from './interact.js';
import { buildScenery } from './scenery.js';
import { createSky } from './sky.js';
import { buildRoadDressing } from './road.js';
import { buildRoadworks } from './roadworks.js';
import { buildBirds } from './birds.js';
import { createAmbience } from './ambience.js';
import { createTitleCard } from './title.js';

async function main() {
  const canvas = document.getElementById('scene');
  // preserveDrawingBuffer (localhost only) lets a manually-driven stepFrame render
  // survive to a screenshot when the preview pane is hidden and rAF is paused.
  const isLocal = ['localhost', '127.0.0.1'].includes(location.hostname);
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, preserveDrawingBuffer: isLocal });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);
  // Filmic tone mapping lifts the murk into readable values without losing the grim mood
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.46;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 1000);
  scene.add(camera); // needed so the camera-attached torch light (below) renders

  const assets = await loadAssets();
  const world = buildWorld(assets.leith);
  scene.add(world.group);
  scene.fog = world.fog;
  // The sky dome is parented to the camera and takes the fog's own Color object,
  // so its horizon can never drift out of step with the fog it meets. See sky.js.
  const sky = createSky(world.fog.color, world.streetLine);
  camera.add(sky.mesh);

  const torch = createPlayerTorch(camera);

  // streetLine is oriented north (index 0) -> south; spawn at the north end
  // (Foot of the Walk) facing along the street's actual bearing (Leith Walk
  // runs SSW, not due south — controls' forward is (-sin yaw, -cos yaw)).
  const p0 = world.streetLine[0] || [0, 0];
  const p1 = world.streetLine[1] || [p0[0], p0[1] + 1];
  const spawn = { x: p0[0], z: p0[1], yaw: Math.atan2(-(p1[0] - p0[0]), -(p1[1] - p0[1])) };

  const controls = createControls(camera, canvas, {
    nearestStreetPoint: world.nearestStreetPoint,
    spawn,
  });
  controls.setEnabled(false); // gated until the title card is dismissed

  const npcs = buildNpcs(assets, world, scene, camera);
  buildShopfronts(assets, world, scene); // real Leith Walk shop windows on near façades
  buildRoadDressing(world, scene);       // tram rails that stop dead, potholes, standing water
  buildRoadworks(world, scene);          // ...and the trench, cones and hoarding waiting at the end of them
  const birds = buildBirds(world, assets.leith, scene); // gulls wheeling, gulls perched, pigeons
  const scenery = buildScenery(world, scene);

  const ambience = createAmbience();
  scenery.onArcFlash = () => ambience.triggerCrackle();

  // Duck the ambience bed whenever a comic is being read to camera OR a nearby
  // busker is audible — both feed one combined ducking state.
  let readingDuck = false;
  let proxDuck = false;
  const applyDuck = () => ambience.setDucked(readingDuck || proxDuck);

  const proximityAudio = createProximityAudio({
    camera,
    npcs: npcs.npcs,
    assets,
    onActiveChange: (n) => { proxDuck = n > 0; applyDuck(); },
  });

  const interact = createInteract({
    assets,
    npcs: npcs.npcs,
    camera,
    controls,
    proximityAudio,
    onReadingChange: (reading) => { readingDuck = reading; applyDuck(); },
  });

  createTitleCard({
    controls,
    onEnter: () => {
      ambience.start();       // AudioContext creation needs this user gesture
      proximityAudio.resume(); // ...and so does the positional-audio listener
    },
  });

  window.addEventListener('resize', onResize);
  function onResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
  }

  // Dev-only probe (localhost only). stepFrame lets tests drive frames
  // manually — rAF is paused whenever the preview pane is hidden.
  if (['localhost', '127.0.0.1'].includes(location.hostname)) window.__mcgrotDebug = {
    camera, world, npcs, controls, proximityAudio, renderer,
    stepFrame: (dt, t) => {
      controls.update(dt);
      npcs.update(dt, t);
      sky.update(t);
      birds.update(dt, t);
      scenery.update(dt, t);
      interact.update(dt);
      proximityAudio.update();
      torch.update(t);
      renderer.render(scene, camera);
    },
  };

  // THREE.Clock is deprecated in r185 and its getDelta() yields 0 here,
  // freezing all dt-driven motion — plain performance.now() bookkeeping instead.
  let lastFrame = performance.now();
  function animate() {
    requestAnimationFrame(animate);
    const now = performance.now();
    const dt = Math.min((now - lastFrame) / 1000, 0.1);
    lastFrame = now;
    const time = now / 1000;
    controls.update(dt);
    npcs.update(dt, time);
    sky.update(time);
    birds.update(dt, time);
    scenery.update(dt, time);
    interact.update(dt);
    proximityAudio.update();
    torch.update(time);
    renderer.render(scene, camera);
  }
  animate();
}

main().catch((err) => {
  console.error('McGrot Walk failed to start:', err);
});
