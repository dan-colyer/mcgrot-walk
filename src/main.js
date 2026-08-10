import * as THREE from 'three';
import { loadAssets } from './assets.js';
import { buildWorld, createPlayerTorch } from './world.js';
import { createControls } from './controls.js';
import { buildNpcs, computeVendorLayout } from './npcs.js';
import { ANCHOR_SET } from './anchors.js';
import { buildShopfronts } from './shopfronts.js';
import { createProximityAudio } from './proximity-audio.js';
import { createInteract } from './interact.js';
import { buildScenery } from './scenery.js';
import { buildGullet } from './gullet.js';
import { buildInterior, INTERIOR_EXPOSURE } from './interior.js';
import { buildLamps } from './lamps.js';
import { createLegs } from './legs.js';
import { createEnding } from './ending.js';
import { isTypingTarget } from './keys.js';
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
import { buildCharacters } from './characters.js';
import { buildLeithers } from './leithers.js';
import { buildLitter } from './litter.js';
import { createRain } from './rain.js';
import { createAmbience } from './ambience.js';
import { createTitleCard } from './title.js';
import { readMoment, createMoments, createShareUi } from './moments.js';
import { createCaptions } from './captions.js';
import { todayKey, todaySeed, startHour, dayName } from './day.js';
import { createPost } from './post.js';
import { createJournal, countVendorsWithAudio } from './journal.js';
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
  const defaultSpawn = { x: p0[0], z: p0[1], yaw: Math.atan2(-(p1[0] - p0[0]), -(p1[1] - p0[1])) };
  // E5c: a shared link overrides where you arrive. Already corridor-clamped
  // by readMoment, and null for every ordinary visit.
  const spawn = readMoment(world.nearestStreetPoint, world.collision) || defaultSpawn;

  const controls = createControls(camera, canvas, {
    nearestStreetPoint: world.nearestStreetPoint,
    spawn,
    groundHeight: world.groundHeight,
    collision: world.collision, // E6a — solids, resolved before the corridor clamp
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
  // E3b/E3e: stands a generated mesh in each of the 124 vendors' groups.
  // Placed after buildCars so the two glb loaders sit together, and after
  // buildNpcs — which since E3g leaves each vendor holding only its props.
  // THIS CALL IS WHAT DECIDES WHETHER A VENDOR HAS A BODY AT ALL: it builds
  // the paper doll when the crowd is switched off, and when an archetype's
  // glb fails to load. Skip it and the street is 124 floating comics.
  const characters = buildCharacters(assets, world, scene, npcs);
  // E3f: the 30 walkers reuse the five archetypes characters.js just asked
  // for. Here rather than inside buildLeithers because the glbs land
  // asynchronously and buildLeithers has already run — see leithers.js.
  leithers.useArchetypes(characters);
  const scenery = buildScenery(world, scene);
  scenery.onArcFlash = () => ambience.triggerCrackle();

  // E10a.1: McGrot's pitch at chainage 740, behind __mcgrotForceGullet.
  // Its own module and its own seed — it must never draw from scenery's.
  const gullet = buildGullet(assets, world, scene);

  // E9a.1: the shop interior. Its own scene at its own origin — built here so
  // it exists before anything can ask to go inside, and costing nothing while
  // the flag is off (buildInterior returns an inert stub). Nothing adds it to
  // `scene`: it IS a scene, and enterInterior below swaps which one renders.
  const interior = buildInterior();

  // E2g: street lights, hung off scenery's catenary poles. Built after
  // scenery (it needs the pole positions) and handed to atmosphere, which
  // stays the sole authority for how lit the street is at a given hour.
  const lamps = buildLamps({ scene, camera, poles: scenery.poles });
  atmosphere.setLamps(lamps);

  // E5d: reaching either end of the Walk nudges the clock and rolls the
  // weather, so the way back is a different street. Seeded from the calendar
  // day so the same day walked twice hinges the same way.
  const legs = createLegs({ camera, world, atmosphere, seed: todaySeed() });

  // E5d part 2: the opt-in close at the Foot, offered only once you have
  // turned back. Enter, or tap the prompt.
  const ending = createEnding({ camera, world, legs, atmosphere, ambience, controls, renderer });
  window.addEventListener('keydown', (e) => {
    if (e.code !== 'Enter' || isTypingTarget(e)) return;
    if (ending.state().phase === 'ended') ending.resume();
    else ending.begin();
  });

  // E9a.1: which scene renders. The street is the default and the interior
  // swaps in whole — post.render() takes whatever this points at.
  let activeScene = scene;
  // The camera lives in whichever scene is being drawn (it has children — the
  // torch light and the sky dome — that have to travel with it), so entering
  // reparents it and leaving puts it back.
  let streetPose = null;      // where the player was standing when they went in
  let interiorToken = null;   // atmosphere's ownership of toneMappingExposure

  function enterInterior() {
    if (!interior.enabled) return false;
    // OWNERSHIP FIRST, and it is the acquire — not a local `isInside` check —
    // that refuses re-entry. Deliberate: an `if (interior.isInside()) return
    // false` guard ahead of this line made the token dead weight, and a fault
    // injection that handed every caller a token stayed green because nothing
    // ever reached the acquire twice. The token is the only lock, so the gate
    // on re-entry is a gate on the token.
    //
    // A failed acquire means someone else owns the exposure (the ending, mid
    // sequence), and then we do not go in at all rather than going in and
    // being repainted. See atmosphere.js's acquireSuspend.
    const token = atmosphere.acquireSuspend('interior');
    if (!token) return false;
    interiorToken = token;
    streetPose = {
      x: camera.position.x, y: camera.position.y, z: camera.position.z,
      rx: camera.rotation.x, ry: camera.rotation.y, rz: camera.rotation.z,
    };
    interior.enter();
    interior.scene.add(camera);           // reparents out of the street scene
    if (sky.mesh) sky.mesh.visible = false;    // there is no sky in a shop
    if (torch.light) torch.light.visible = false; // the room has its own rig
    camera.position.set(interior.spawn.x, interior.spawn.y, interior.spawn.z);
    controls.setYaw(interior.spawn.yaw);
    camera.rotation.set(0, interior.spawn.yaw, 0);
    controls.setRoom(interior);
    renderer.toneMappingExposure = INTERIOR_EXPOSURE;
    activeScene = interior.scene;
    // Skipping an updater stops it THINKING, not showing. A vendor prompt
    // raised on the last street frame hung over the whole room, and the first
    // capture of the interior had "[E] HEAR ISA STRUTHERS READ" printed across
    // it — caught by the room-hidden control frame, not by any assert.
    // Anything these two put in the DOM comes down on the way in.
    interact.suspend();
    captions.suspend();
    indoorDuck = true;
    applyDuck();
    // Set once here as well as per-frame, so a capture taken before the first
    // update does not show the previous hour's window.
    interior.setDaylight(atmosphere.state().sunAltitude);
    return true;
  }

  function exitInterior() {
    if (!interior.enabled || !interior.isInside()) return false;
    interior.exit();
    scene.add(camera);
    if (sky.mesh) sky.mesh.visible = true;
    if (torch.light) torch.light.visible = true;
    if (streetPose) {
      camera.position.set(streetPose.x, streetPose.y, streetPose.z);
      camera.rotation.set(streetPose.rx, streetPose.ry, streetPose.rz);
      controls.setYaw(streetPose.ry);
      streetPose = null;
    }
    controls.setRoom(null);
    activeScene = scene;
    // Repaints the street palette on this call rather than next frame, so the
    // interior's exposure never survives into a visible frame outside.
    atmosphere.releaseSuspend(interiorToken);
    interiorToken = null;
    indoorDuck = false;
    applyDuck();
    return true;
  }

  // Updaters that read the player's position AGAINST THE STREET. Indoors the
  // camera sits at the interior's own local origin, which in world coordinates
  // is up by the Foot of the Walk — so left running, these would page the
  // wrong façades in, offer a comic from a vendor 1.5km away, and write a
  // share link pointing at a place the player is not. Everything NOT in this
  // set keeps running while you are inside, which is the design: the clock,
  // the weather and the walkers carry on without you (ROADMAP § E9).
  const SUSPENDED_INDOORS = new Set([
    'litter', 'shopfronts', 'interact', 'proximityAudio', 'legs', 'ending', 'moments', 'captions',
  ]);

  // Duck the ambience bed whenever a comic is being read to camera OR a nearby
  // busker is audible — both feed one combined ducking state.
  // E9a.2 adds the third input: indoors. The bed is NOT suspended inside —
  // ambience is not an updater and is driven from atmosphere.update(), which
  // keeps running by design so the weather carries on without you. Before
  // this, that meant the full street bed played at street level inside the
  // shop, rain included, against the design line that says it muffles.
  //
  // Routed through the same combined state rather than calling setDucked from
  // enterInterior: a direct call would be undone by the next applyDuck() the
  // moment a comic stopped playing.
  let readingDuck = false;
  let proxDuck = false;
  let indoorDuck = false;
  const applyDuck = () => ambience.setDucked(readingDuck || proxDuck || indoorDuck);

  // E10a.3: McGrot reads too, but he is NOT one of the 124 — a separate array
  // so npcs.npcs (which geomHash, the vendor census and the journal's
  // denominator all hang off) stays exactly 124 long. proximityAudio gets him
  // as well as interact: his catalog entry carries an audio path the trickle
  // has not rendered yet, and the ambient busking loop skips a vendor whose
  // clip will not load, so this is inert today and correct the day it lands.
  const readers = gullet.reader ? [...npcs.npcs, gullet.reader] : npcs.npcs;

  const proximityAudio = createProximityAudio({
    camera,
    npcs: readers,
    assets,
    onActiveChange: (n) => { proxDuck = n > 0; applyDuck(); },
  });

  // `interact` is assigned below — journal's canOpen only ever runs after
  // both exist (in response to a J-press or a tap), so the closure over this
  // `let` is safe despite the declaration order.
  let interact;
  const journal = createJournal({ assets, npcs: npcs.npcs, litter, canOpen: () => !interact.isOpen(), anchorsEnabled: npcs.anchorsEnabled });

  interact = createInteract({
    assets,
    npcs: readers,
    camera,
    controls,
    proximityAudio,
    onReadingChange: (reading) => { readingDuck = reading; applyDuck(); },
    litter,
    leithers,
    journal,
  });

  // E5c: position + heading in the URL hash. Gated on the title card having
  // been dismissed so the hash isn't rewritten out from under a link the
  // visitor has not yet acted on.
  let entered = false;
  const moments = createMoments({ camera, isEnabled: () => entered });
  // E8 close: the caption box. Same `entered` gate as moments — nothing
  // announces a place before the player is standing in it.
  const captions = createCaptions({ camera, streetLine: world.streetLine, isEnabled: () => entered });
  const shareUi = createShareUi({ moments });

  // The name of this visit. startHour() is the date-derived ARRIVAL hour, not
  // the live clock — atmosphere.setTime() moves the latter and must not move
  // this label. Weather is read once, at boot, for the same reason.
  const hudDayEl = document.getElementById('hud-day');
  if (hudDayEl) {
    hudDayEl.textContent = dayName(todayKey(), startHour(), atmosphere.state().weather);
  }

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
      entered = true;                   // E5c: the URL hash starts tracking from here
      // E6a: settle the spawn against EVERY solid, not just the buildings that
      // existed when readMoment ran. The wrecks arrive on a glb promise, so
      // this cannot be done at boot; here is the last moment before the player
      // can move, and it costs one query. A visitor whose shared link points
      // at the inside of the dead bus arrives beside it instead of inside it.
      const [fx, fz] = world.collision.resolveFree(camera.position.x, camera.position.z);
      camera.position.x = fx;
      camera.position.z = fz;
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
    { name: 'lamps', update: () => lamps.update() },
    { name: 'legs', update: () => legs.update() },
    { name: 'ending', update: (dt) => ending.update(dt) },
    { name: 'interact', update: (dt) => interact.update(dt) },
    { name: 'proximityAudio', update: (dt, t) => proximityAudio.update(dt, t) },
    { name: 'torch', update: (dt, t) => torch.update(t) },
    // Not a simulation step — it hands the post shader the same stepped `t`
    // the rest of the list runs on, so film grain resamples off the sim clock
    // and never off wall time. Registered here rather than called from
    // renderNow so that a settle of N frames lands on the same grain field
    // every run; renderNow deliberately draws without updating.
    { name: 'post', update: (dt, t) => post.setTime(t) },
    // Last, so the hash reflects the position this frame ended at. Runs under
    // stepFrame as well as rAF (see moments.js) — that is what makes the
    // write path measurable rather than only reachable by hand.
    { name: 'moments', update: (dt) => moments.update(dt) },
    { name: 'captions', update: (dt) => captions.update(dt) },
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
    const indoors = interior.isInside();
    for (const u of updaters) {
      if (indoors && SUSPENDED_INDOORS.has(u.name)) continue;
      u.update(dt, t);
    }
    // E9a.2: the glazing follows the street clock. Driven here rather than
    // from a suspend token because the pane is a colour on an unlit material,
    // not fog and not exposure — atmosphere owns those two and nothing else.
    // Only while inside: the material is invisible from the street, so a call
    // out here would be work nobody can see.
    if (indoors) interior.setDaylight(atmosphere.state().sunAltitude);
  }
  function renderNow() {
    renderer.info.reset();
    post.render(activeScene, camera);
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
      camera, world, npcs, leithers, litter, shopfronts, controls, proximityAudio, interact, renderer, scene,
      sky, atmosphere, torch, DPR_CAP, ambience, post, journal, countVendorsWithAudio,
      vendorList: npcs.list, anchorsEnabled: npcs.anchorsEnabled, anchorSet: ANCHOR_SET, computeVendorLayout,
      moments, shareUi, lamps, legs, ending, characters, captions, gullet,
      interior, enterInterior, exitInterior,
      getActiveScene: () => activeScene,
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
