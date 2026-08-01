import * as THREE from 'three';
import { loadAssets } from './assets.js';
import { buildWorld, createPlayerTorch } from './world.js';
import { createControls } from './controls.js';
import { buildNpcs } from './npcs.js';
import { buildShopfronts } from './shopfronts.js';
import { createProximityAudio } from './proximity-audio.js';
import { createInteract } from './interact.js';
import { buildScenery } from './scenery.js';
import { buildGables } from './gables.js';
import { buildChimneys } from './chimneys.js';
import { createSky } from './sky.js';
import { createAtmosphere } from './atmosphere.js';
import { buildWindows } from './windows.js';
import { buildForth } from './forth.js';
import { buildRoadDressing } from './road.js';
import { buildRoadworks } from './roadworks.js';
import { buildBirds } from './birds.js';
import { buildVermin } from './vermin.js';
import { buildFlora } from './flora.js';
import { buildCars } from './cars.js';
import { buildLeithers } from './leithers.js';
import { buildLitter } from './litter.js';
import { createRain } from './rain.js';
import { createAmbience } from './ambience.js';
import { createTitleCard } from './title.js';
import { createPost } from './post.js';
import { createDebugApi } from './debug.js';

const DPR_CAP = 2;

async function main() {
  const canvas = document.getElementById('scene');
  // preserveDrawingBuffer (localhost only) lets a manually-driven stepFrame render
  // survive to a screenshot when the preview pane is hidden and rAF is paused.
  const isLocal = ['localhost', '127.0.0.1'].includes(location.hostname);
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, preserveDrawingBuffer: isLocal });
  // E2e: measured against the 'skyline' bookmark's 954-draw-call frame (the
  // heaviest pose in the goldens) at DPR 1/1.5/2/unclamped via
  // __mcgrotDebug.measureFrameTiming — see scripts/smoke.mjs's DPR table.
  // 2 is kept as the default cap pending a real-device check (Dan's call,
  // per the E2e brief); this is provisional, not a final verdict.
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, DPR_CAP));
  renderer.setSize(window.innerWidth, window.innerHeight);
  // Filmic tone mapping lifts the murk into readable values without losing the grim mood
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.46;
  // The post pass draws through a second renderer.render() call, and
  // renderer.info resets at the start of every one of them by default
  // (autoReset), which would collapse the draw-call count every
  // invariants()/budget gate reads down to 1 (the post quad only). Disabled
  // here; renderNow calls info.reset() itself, once, before the frame starts
  // — see docs/VALIDATION.md.
  renderer.info.autoReset = false;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 1000);
  scene.add(camera); // needed so the camera-attached torch light (below) renders

  // E2d: vignette, grain and colour grade, applied to the finished frame after
  // tone mapping rather than through an EffectComposer — post.js explains at
  // length why a composer cannot be used here without re-authoring the fog.
  const post = createPost(renderer);

  const assets = await loadAssets();
  const world = buildWorld(assets.leith);
  scene.add(world.group);
  scene.fog = world.fog;
  // The sky dome is parented to the camera and takes the fog's own Color object,
  // so its horizon can never drift out of step with the fog it meets. See sky.js.
  const sky = createSky(world.fog.color, world.streetLine);
  camera.add(sky.mesh);
  buildForth(world, scene); // the Forth: water + far shore, north of the Foot

  const torch = createPlayerTorch(camera);
  const windows = buildWindows(assets, world, scene); // lit windows after dark
  const rain = createRain(camera); // E2c.2: one camera-following THREE.Points system
  scene.add(rain.object);
  // WebAudio ambience bed — created here (rather than down with the other
  // subsystems) so atmosphere can drive its setRain() every frame; start()
  // itself still needs the title-card gesture, wired further down.
  const ambience = createAmbience();
  // Sole authority for time-of-day AND weather (E2a/E2c): lights, exposure,
  // fog/sky colour, the unlit-façade tint registry, torch reach, window
  // glow, rain and its ambience all flow from here every frame. Created
  // after createSky/torch/windows/rain/ambience exist — it drives all of
  // them — and before the remaining subsystems below.
  const atmosphere = createAtmosphere({ scene, renderer, world, sky, torch, windows, rain, ambience });

  // streetLine is oriented north (index 0) -> south; spawn at the north end
  // (Foot of the Walk) facing along the street's actual bearing (Leith Walk
  // runs SSW, not due south — controls' forward is (-sin yaw, -cos yaw)).
  const p0 = world.streetLine[0] || [0, 0];
  const p1 = world.streetLine[1] || [p0[0], p0[1] + 1];
  const spawn = { x: p0[0], z: p0[1], yaw: Math.atan2(-(p1[0] - p0[0]), -(p1[1] - p0[1])) };

  const controls = createControls(camera, canvas, {
    nearestStreetPoint: world.nearestStreetPoint,
    spawn,
    groundHeight: world.groundHeight,
  });
  controls.setEnabled(false); // gated until the title card is dismissed

  const npcs = buildNpcs(assets, world, scene, camera);
  const leithers = buildLeithers(assets, world, scene, npcs.npcs); // the ambient crowd
  const litter = buildLitter(assets, world, scene); // readable comics in the gutters
  const shopfronts = buildShopfronts(assets, world, scene); // real Leith Walk shop windows on near façades
  buildRoadDressing(world, scene);       // tram rails that stop dead, potholes, standing water
  buildRoadworks(world, scene);          // ...and the trench, cones and hoarding waiting at the end of them
  const birds = buildBirds(world, assets.leith, scene); // gulls wheeling, gulls perched, pigeons
  const vermin = buildVermin(world, scene);             // rats darting in the gutters
  buildFlora(world, assets.leith, scene);               // buddleia, Buckfast, bins, a trolley
  buildGables(assets, world, scene);     // baked soot/blocked-window/ghost-sign dressing on blank gable walls
  buildChimneys(assets, world, scene);   // instanced chimney stacks + TV aerials along rooflines
  buildCars(assets, world, scene);       // abandoned wrecks in the parking lanes; the dead bus on the rails
  const scenery = buildScenery(world, scene);
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
    litter,
    leithers,
  });

  createTitleCard({
    controls,
    torch,
    onEnter: () => {
      // E2e.1 item 7: one AudioContext shared between the ambience bed and
      // the proximity-audio listener, both constructed inside THIS gesture.
      // THREE.AudioContext.setContext must run before the first
      // `new THREE.AudioListener()` (inside proximityAudio.resume()) so that
      // listener picks up this context instead of creating its own.
      //
      // E2c.3a item 0: this whole preamble is wrapped in try/catch. A throw
      // here (observed on iOS: visitors got no sound at all, not even the
      // ambience bed that worked before this preamble existed) used to take
      // out ambience.start()/proximityAudio.resume() below it too. Neither
      // call may depend on sharedCtx surviving — ambience.start(undefined)
      // and proximityAudio.resume() both already fall back to constructing
      // their own AudioContext (see ambience.js/proximity-audio.js), so a
      // failed shared-context setup degrades to "two contexts" rather than
      // "no sound".
      let sharedCtx = null;
      try {
        // Dev/test-only fault injection (see scripts/smoke.mjs) — proves the
        // catch below actually protects ambience.start()/proximityAudio.resume(),
        // not just that no one has broken this preamble yet.
        if (window.__mcgrotForceAudioContextError && ['localhost', '127.0.0.1'].includes(location.hostname)) {
          throw new Error('[debug] forced AudioContext setup failure');
        }
        const AudioContextCtor = window.AudioContext || window.webkitAudioContext;
        sharedCtx = AudioContextCtor ? new AudioContextCtor() : null;
        if (sharedCtx) {
          THREE.AudioContext.setContext(sharedCtx);
          // iOS Safari unlock: play a one-sample silent buffer through the
          // shared context on the same gesture that resumes it. Long-standing
          // trick, costs nothing, belt-and-braces alongside ctx.resume() below.
          const unlockSrc = sharedCtx.createBufferSource();
          unlockSrc.buffer = sharedCtx.createBuffer(1, 1, sharedCtx.sampleRate);
          unlockSrc.connect(sharedCtx.destination);
          unlockSrc.start(0);
        }
      } catch (err) {
        console.warn('[title] shared AudioContext setup failed, falling back to per-subsystem contexts:', err);
        sharedCtx = null;
      }
      ambience.start(sharedCtx);        // AudioContext creation needs this user gesture
      proximityAudio.resume();          // ...and so does the positional-audio listener
    },
  });

  window.addEventListener('resize', onResize);
  function onResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, DPR_CAP));
    renderer.setSize(window.innerWidth, window.innerHeight);
    post.resize();
  }

  // Single registered update list, consumed by BOTH animate() and stepFrame —
  // a subsystem added to only one of the two (litter, leithers) has shipped
  // broken before. litter.update and torch.update take (position)/(time)
  // instead of (dt, time); wrapped here so every entry has the same signature.
  const updaters = [
    { name: 'controls', update: (dt) => controls.update(dt) },
    { name: 'npcs', update: (dt, t) => npcs.update(dt, t) },
    { name: 'leithers', update: (dt, t) => leithers.update(dt, t) },
    { name: 'litter', update: () => litter.update(camera.position) },
    { name: 'shopfronts', update: () => shopfronts.update(camera.position) },
    { name: 'sky', update: (dt, t) => sky.update(t) },
    { name: 'atmosphere', update: (dt, t) => atmosphere.update(dt, t) },
    { name: 'rain', update: (dt, t) => rain.update(dt, t) },
    { name: 'birds', update: (dt, t) => birds.update(dt, t) },
    { name: 'vermin', update: (dt, t) => vermin.update(dt, t) },
    { name: 'scenery', update: (dt, t) => scenery.update(dt, t) },
    { name: 'interact', update: (dt) => interact.update(dt) },
    { name: 'proximityAudio', update: () => proximityAudio.update() },
    { name: 'torch', update: (dt, t) => torch.update(t) },
    // Not a simulation step — it hands the post shader the same stepped `t`
    // the rest of the list runs on, so film grain resamples off the sim clock
    // and never off wall time. Registered here rather than called from
    // renderNow so that a settle of N frames lands on the same grain field
    // every run; renderNow deliberately draws without updating.
    { name: 'post', update: (dt, t) => post.setTime(t) },
  ];
  // Simulation only, no draw. Settling the world costs the same updater work
  // either way, but headless Chromium rasterises in SOFTWARE (SwiftShader —
  // there is no GPU), where one 945-draw-call frame costs ~160ms of real time
  // against ~2ms of JavaScript. The cost is invisible from JS because
  // renderer.render only queues commands; it lands at the next await. So a
  // settle that draws every intermediate frame it never looks at was most of
  // the validation rig's 42-minute runtime. Same updater sequence, same dt/t,
  // so the settled state is identical — measured pixel-identical (0.000% at
  // north-150-close). See docs/VALIDATION.md.
  function updateFrame(dt, t) {
    for (const u of updaters) u.update(dt, t);
  }
  function renderNow() {
    renderer.info.reset();
    post.render(scene, camera);
  }
  function runFrame(dt, t) {
    updateFrame(dt, t);
    renderNow();
  }
  function setPostProcessing(v) {
    post.setEnabled(v);
  }

  // THREE.Clock is deprecated in r185 and its getDelta() yields 0 here,
  // freezing all dt-driven motion — plain performance.now() bookkeeping instead.
  let lastFrame = performance.now();
  let autoAnimate = true;
  function animate() {
    if (!autoAnimate) return;
    requestAnimationFrame(animate);
    const now = performance.now();
    const dt = Math.min((now - lastFrame) / 1000, 0.1);
    lastFrame = now;
    runFrame(dt, now / 1000);
  }
  // The harness sets this via addInitScript, before any page script runs, so
  // that NO real-time frame executes before it can call pauseAuto(). Without
  // it the frame count is machine-load dependent (13-20 measured) and every
  // one of those frames advances the sim by exactly dt's 0.1s clamp above —
  // see docs/VALIDATION.md's "elm-row-hero is bimodal" section.
  if (!(isLocal && window.__mcgrotFreezeAtBoot)) animate();

  // Dev-only test API (localhost only). stepFrame lets tests drive frames
  // manually — rAF is paused whenever the preview pane is hidden. pauseAuto()
  // additionally stops the live rAF loop entirely so the validation rig
  // (scripts/smoke.mjs) can advance the world ONLY via stepFrame — required
  // for the determinism invariant, since animate()'s real-time dt would
  // otherwise make every reload's leither/bird/vermin positions diverge.
  if (['localhost', '127.0.0.1'].includes(location.hostname)) {
    window.__mcgrotDebug = createDebugApi({
      camera, world, npcs, leithers, litter, shopfronts, controls, proximityAudio, renderer, scene,
      sky, atmosphere, torch, DPR_CAP, ambience, post,
      stepFrame: runFrame,
      renderNow,
      setPostProcessing,
      updateFrame,
      updaters,
      setAutoAnimate(v) {
        autoAnimate = v;
        // While auto-animate is off the debug API/harness fully owns the
        // camera: suspend the per-frame ground-follow clamp so a posed
        // elevation (skyline) or a manual inspection fly-through survives
        // stepFrame. Terrain-follow resumes when play does.
        controls.setYFollow(v);
        if (v) { lastFrame = performance.now(); requestAnimationFrame(animate); }
      },
    });
  }
}

main().catch((err) => {
  console.error('McGrot Walk failed to start:', err);
});
