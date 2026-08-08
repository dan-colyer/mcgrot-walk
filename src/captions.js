// E8 close: comic caption boxes (the first of the two DOM levers).
//
// The survey behind E8 said most of a comic read is sold by furniture rather
// than by shading — Void Bastards' panel borders and caption boxes do more
// work than its cel shading does. This is that, at the cheapest possible
// size: a caption box that names the stretch of street you have just walked
// into, in the comics' own voice, and then gets out of the way.
//
// WHERE THE NAMES COME FROM. Not typed from memory. `assets/businesses.json`
// carries a real street per business, and projecting those onto
// `world.streetLine` gives the chainage each street name actually occupies —
// the same method `src/anchors.js` used for the twelve landmark chainages,
// and for the same reason. Measured:
//
//   Duke Street / Great Junction Street    chainage 0-12   (the Foot junction)
//   Leith Walk                  159 addresses,  13-1042, median 489
//   Crighton Place               16 addresses, 862-960    (side street, east)
//   Croall / Brunswick Place     11 addresses, 1117-1185  (side streets, east)
//   Brunswick Street              7 addresses, 1190-1239  (side street, east)
//   Haddington Place             25 addresses, 1212-1469  (the top, east side)
//   Elm Row                      50 addresses, 1231-1581  (the top, west side)
//
// Three bands, not seven. The side streets are side streets — captioning them
// while you walk past their junctions would name somewhere you are not — and
// Haddington Place and Elm Row are the two sides of one stretch, so the one
// with twice the addresses carries it. The 1042-1200 gap keeps the Leith Walk
// caption rather than inventing "Shrubhill", which is a real name for that
// stretch and is not in the data.
const BANDS = [
  { to: 90, name: 'The Foot of the Walk' },
  { to: 1200, name: 'Leith Walk' },
  { to: Infinity, name: 'Elm Row' },
];

const HOLD_S = 4.2;      // seconds fully up
const FADE_S = 1.1;      // ...then this long fading (matches the CSS transition)
// A teleport is not a walk. The debug API poses the camera directly and moves
// it hundreds of metres between frames; a player at WALK_SPEED covers 0.23m.
// Anything above this is a jump, and a jump gets no caption — which is both
// the right behaviour and what keeps every bookmark, golden and moment
// capture free of a caption box by construction rather than by a test hack.
const MAX_WALK_STEP_M = 2.0;

function bandFor(chainage) {
  for (let i = 0; i < BANDS.length; i++) if (chainage <= BANDS[i].to) return i;
  return BANDS.length - 1;
}

// Chainage of the nearest point on the street chain. Local copy of the
// projection rather than a shared util, same as scenery.js's — this module
// stays decoupled and the arithmetic is four lines.
function chainageAt(streetLine, x, z) {
  let acc = 0;
  let best = Infinity;
  let bestC = 0;
  for (let i = 1; i < streetLine.length; i++) {
    const [ax, az] = streetLine[i - 1];
    const [bx, bz] = streetLine[i];
    const dx = bx - ax;
    const dz = bz - az;
    const segLen = Math.hypot(dx, dz);
    const len2 = dx * dx + dz * dz;
    let t = len2 > 0 ? ((x - ax) * dx + (z - az) * dz) / len2 : 0;
    t = t < 0 ? 0 : t > 1 ? 1 : t;
    const px = ax + dx * t;
    const pz = az + dz * t;
    const d = Math.hypot(x - px, z - pz);
    if (d < best) { best = d; bestC = acc + segLen * t; }
    acc += segLen;
  }
  return bestC;
}

export function createCaptions({ camera, streetLine, isEnabled }) {
  const el = typeof document !== 'undefined' ? document.getElementById('caption') : null;
  const textEl = typeof document !== 'undefined' ? document.getElementById('caption-text') : null;

  let band = null;        // null until the first update — the spawn band is a
                          // starting state, not an arrival, and gets no caption
  let lastX = null;
  let lastZ = null;
  let timer = 0;
  let shown = 0;          // how many captions have been raised, for the gate
  let current = null;

  function raise(name) {
    current = name;
    shown++;
    timer = HOLD_S + FADE_S;
    if (!el) return;
    if (textEl) textEl.textContent = name;
    el.style.display = 'block';
    el.classList.remove('fading');
  }

  function update(dt) {
    const x = camera.position.x;
    const z = camera.position.z;

    if (timer > 0) {
      timer -= dt;
      if (el && timer <= FADE_S) el.classList.add('fading');
      if (timer <= 0) {
        if (el) { el.style.display = 'none'; el.classList.remove('fading'); }
        current = null;
      }
    }

    if (isEnabled && !isEnabled()) { lastX = x; lastZ = z; return; }

    const step = lastX === null ? 0 : Math.hypot(x - lastX, z - lastZ);
    lastX = x;
    lastZ = z;

    const next = bandFor(chainageAt(streetLine, x, z));
    if (band === null) { band = next; return; }   // first frame: adopt, don't announce
    if (next === band) return;
    band = next;
    if (step > MAX_WALK_STEP_M || step === 0) return; // teleported, or not moving
    raise(BANDS[next].name);
  }

  return {
    update,
    // Read by the gate: which band the player is in, what is on screen, and
    // how many captions this session has raised.
    state: () => ({ band, name: BANDS[band === null ? 0 : band].name, current, shown, timer }),
    bands: BANDS.map((b) => b.name),
  };
}
