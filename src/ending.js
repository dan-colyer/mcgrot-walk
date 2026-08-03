// Leaving — the opt-in close at the Foot (E5d part 2).
//
// Walk back to the Foot of the Walk after having turned round, and the haar
// coming off the Forth is offered as a way out. Step into it and the street
// recedes: fog closes, the light falls, the camera drifts north over the
// water, the voices merge into one wash. Then a card.
//
// NEVER FORCED, and that is a design constraint rather than a nicety:
// - It is offered only on leg >= 1, so it cannot be walked into in the first
//   ten seconds. An ending you can trip over is a trapdoor, not a close.
// - Closing the tab stays a valid exit, so the card is not a wall — it offers
//   "keep walking" and puts you back exactly where you were.
//
// THE HAND-OFF. atmosphere.js reapplies the whole palette every frame, so a
// sequence that wrote fog and exposure directly would be overwritten before
// any of it was seen. `atmosphere.setSuspended(true)` stops it painting and
// hands those fields over; resuming repaints immediately, so nothing this
// module leaves behind can persist. That is the only correct seam here, and
// there is a gate comparing a resumed boot against one that never ended.

const SEQUENCE_SECONDS = 10;
const FOG_FROM_MULTIPLIER = 1;
const FOG_TO_MULTIPLIER = 9;      // haar-thick by the end
// The close is a WHITEOUT, not a blackout. A first pass eased exposure to
// 0.12 and the frame was black within a second, then held black for nine
// more — technically a fade, visually nothing. Haar off the Forth is pale and
// luminous, so the fog colour lifts toward it and the exposure only comes
// down enough to take the contrast out.
const HAAR_COLOUR = 0x9aa09a;
const EXPOSURE_FLOOR = 0.5;
const DRIFT_METRES = 26;          // how far north the camera slides, over the water

// Offered only once you have turned back at least once.
const MIN_LEG = 1;

export function createEnding({ camera, world, legs, atmosphere, ambience, controls, renderer }) {
  const promptEl = typeof document !== 'undefined' ? document.getElementById('ending-prompt') : null;
  const cardEl = typeof document !== 'undefined' ? document.getElementById('ending-card') : null;
  const resumeEl = typeof document !== 'undefined' ? document.getElementById('ending-resume') : null;
  const streetLine = (world && world.streetLine) || [];

  const noop = {
    update() {},
    begin() { return false; },
    canOffer: () => false,
    state: () => ({ phase: 'idle', offered: false, elapsed: 0, ended: 0 }),
  };
  if (!camera || !legs || !atmosphere || streetLine.length < 2) return noop;

  // North is the direction from the second point toward the Foot — the same
  // derivation forth.js uses to decide where the water lies.
  const foot = streetLine[0];
  const next = streetLine[1];
  let nx = foot[0] - next[0];
  let nz = foot[1] - next[1];
  const nlen = Math.hypot(nx, nz) || 1;
  nx /= nlen; nz /= nlen;

  let phase = 'idle';          // idle | running | ended
  let elapsed = 0;
  let offered = false;
  let ended = 0;               // how many times the close has played
  let startPos = null;
  let baseFogDensity = 0;
  let startExposure = 1;
  const startFogColour = { r: 0, g: 0, b: 0 };
  const haar = { r: ((HAAR_COLOUR >> 16) & 255) / 255, g: ((HAAR_COLOUR >> 8) & 255) / 255, b: (HAAR_COLOUR & 255) / 255 };

  function canOffer() {
    if (phase !== 'idle') return false;
    const s = legs.state();
    return !!s.enabled && s.leg >= MIN_LEG && s.zone === 'north';
  }

  function showPrompt(show) {
    if (!promptEl) return;
    if (show === offered) return;
    offered = show;
    promptEl.style.display = show ? 'block' : 'none';
  }

  function begin() {
    if (!canOffer()) return false;
    phase = 'running';
    elapsed = 0;
    showPrompt(false);
    startPos = camera.position.clone();
    baseFogDensity = world.fog ? world.fog.density : 0;
    // Snapshot where the palette left things. Atmosphere is suspended from
    // here, so these are stable, and easing FROM them means the close works
    // at any hour rather than only the one it was tuned at.
    startExposure = renderer ? renderer.toneMappingExposure : 1;
    if (world.fog) {
      startFogColour.r = world.fog.color.r;
      startFogColour.g = world.fog.color.g;
      startFogColour.b = world.fog.color.b;
    }
    // Hand fog and exposure over. Everything below owns them until resume().
    atmosphere.setSuspended(true);
    if (controls) controls.setEnabled(false);
    // The voices merge rather than stop — ducking the bed is the closest the
    // current ambience API gets, and it is the right direction.
    if (ambience) ambience.setDucked(true);
    return true;
  }

  function resume() {
    if (phase !== 'ended') return false;
    phase = 'idle';
    elapsed = 0;
    if (cardEl) cardEl.style.display = 'none';
    if (startPos) camera.position.copy(startPos);
    // Repaints immediately, so the arbitrary fog/exposure the sequence left
    // behind never survives into a visible frame.
    atmosphere.setSuspended(false);
    if (controls) controls.setEnabled(true);
    if (ambience) ambience.setDucked(false);
    return true;
  }

  function update(dt) {
    if (phase === 'idle') {
      showPrompt(canOffer());
      return;
    }
    if (phase === 'ended') return;

    elapsed = Math.min(SEQUENCE_SECONDS, elapsed + (Number.isFinite(dt) ? dt : 0));
    const t = elapsed / SEQUENCE_SECONDS;
    const ease = t * t * (3 - 2 * t);

    if (world.fog) {
      world.fog.density = baseFogDensity * (FOG_FROM_MULTIPLIER + (FOG_TO_MULTIPLIER - FOG_FROM_MULTIPLIER) * ease);
      // Mutated in place, never reassigned — sky.js's uFog uniform holds THIS
      // object and a fresh Color would leave the dome pointing at a stale one
      // (see "THE SEAM" in sky.js).
      world.fog.color.setRGB(
        startFogColour.r + (haar.r - startFogColour.r) * ease,
        startFogColour.g + (haar.g - startFogColour.g) * ease,
        startFogColour.b + (haar.b - startFogColour.b) * ease,
      );
    }
    if (renderer) {
      // Eased across the WHOLE sequence from the snapshotted start. The first
      // pass used a per-frame approach-the-floor step, which converged in
      // about a second and spent the rest of the close on a static frame.
      renderer.toneMappingExposure = startExposure + (EXPOSURE_FLOOR - startExposure) * ease;
    }
    if (startPos) {
      camera.position.x = startPos.x + nx * DRIFT_METRES * ease;
      camera.position.z = startPos.z + nz * DRIFT_METRES * ease;
    }

    if (elapsed >= SEQUENCE_SECONDS) {
      phase = 'ended';
      ended += 1;
      if (cardEl) cardEl.style.display = 'flex';
    }
  }

  if (resumeEl) resumeEl.addEventListener('click', resume);
  if (promptEl) promptEl.addEventListener('click', begin);

  return {
    update,
    begin,
    resume,
    canOffer,
    state: () => ({
      phase,
      offered,
      elapsed: +elapsed.toFixed(3),
      ended,
      minLeg: MIN_LEG,
      sequenceSeconds: SEQUENCE_SECONDS,
    }),
  };
}
