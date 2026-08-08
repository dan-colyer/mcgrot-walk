// Plan-view collision for the player (E6a).
//
// The world blocks the player; nothing here pushes anything else. Blocking is
// one-way by design — see docs/ROADMAP.md § E6a.
//
// Three deliberate constraints, all of them load-bearing:
//
// - **Source data, not meshes.** Buildings collide against the OSM footprint
//   polygons `src/world.js` extrudes from, not the single merged geometry it
//   extrudes them INTO. Props register their own boxes from the placements
//   they already compute. Nothing here reads the scene graph, so nothing here
//   can be broken by a rendering change, and nothing here draws from the
//   shared PRNG.
// - **Plan (x/z) only.** Footprints are 2D, the Walk climbs 27m, and terraced
//   building bases mean a footprint edge can sit below a raised skirt. The
//   MAX_OFFSET corridor clamp already works this way; so does this.
// - **Movement integration only.** `controls.update()` calls resolveMove();
//   the debug API's programmatic posing (goto, bookmarks, place) sets
//   camera.position directly and stays exempt. That exemption is what keeps
//   every bookmark, golden and capture byte-identical.
//
// Resolution is "pull back to the boundary", the same shape as the corridor
// clamp: the proposed point is pushed to the nearest point on the solid's
// outline plus the player radius. The push is perpendicular to the surface,
// so the component of the move ALONG the wall survives — that is the slide,
// and it falls out of the geometry rather than being special-cased.

export const PLAYER_RADIUS = 0.35; // metres — shoulder half-width, not a body
const CELL = 8;                    // metres; grid cell edge
const MAX_PASSES = 4;              // resolution iterations before giving up
const MAX_STEP = 0.25;             // metres per swept sub-step (anti-tunnelling)

function polyBounds(pts) {
  let minX = Infinity, maxX = -Infinity, minZ = Infinity, maxZ = -Infinity;
  for (const [x, z] of pts) {
    if (x < minX) minX = x;
    if (x > maxX) maxX = x;
    if (z < minZ) minZ = z;
    if (z > maxZ) maxZ = z;
  }
  return { minX, maxX, minZ, maxZ };
}

// Closest point on a segment, and its distance.
function closestOnSegment(px, pz, ax, az, bx, bz) {
  const dx = bx - ax;
  const dz = bz - az;
  const len2 = dx * dx + dz * dz;
  let t = len2 > 0 ? ((px - ax) * dx + (pz - az) * dz) / len2 : 0;
  t = t < 0 ? 0 : t > 1 ? 1 : t;
  const cx = ax + dx * t;
  const cz = az + dz * t;
  return { cx, cz, dist: Math.hypot(px - cx, pz - cz) };
}

function pointInPoly(px, pz, pts) {
  let inside = false;
  for (let i = 0, j = pts.length - 1; i < pts.length; j = i++) {
    const [xi, zi] = pts[i];
    const [xj, zj] = pts[j];
    if ((zi > pz) !== (zj > pz) && px < ((xj - xi) * (pz - zi)) / (zj - zi) + xi) inside = !inside;
  }
  return inside;
}

// How deep a disc at (px,pz) is into this solid, and which way is out. Null
// when the disc is clear of it. `depth` orders competing solids; `nx,nz` is a
// unit outward normal, and it is what makes the slide a slide.
function contact(solid, px, pz, r) {
  if (solid.type === 'circle') {
    const dx = px - solid.x;
    const dz = pz - solid.z;
    const d = Math.hypot(dx, dz);
    const want = solid.r + r;
    if (d >= want) return null;
    if (d < 1e-6) return { depth: want, nx: 1, nz: 0 };
    return { depth: want - d, nx: dx / d, nz: dz / d };
  }

  const pts = solid.pts;
  let best = null;
  for (let i = 0, j = pts.length - 1; i < pts.length; j = i++) {
    const hit = closestOnSegment(px, pz, pts[j][0], pts[j][1], pts[i][0], pts[i][1]);
    if (!best || hit.dist < best.dist) best = hit;
  }
  if (!best) return null;
  const inside = pointInPoly(px, pz, pts);
  if (!inside && best.dist >= r) return null;
  const sign = inside ? -1 : 1;
  const dx = (px - best.cx) * sign;
  const dz = (pz - best.cz) * sign;
  const d = Math.hypot(dx, dz);
  const depth = inside ? best.dist + r : r - best.dist;
  if (d < 1e-6) return { depth, nx: 1, nz: 0 }; // exactly on the edge
  return { depth, nx: dx / d, nz: dz / d };
}

// A solid's answer to "where is the nearest legal spot for a disc of radius r
// standing at (px,pz)?" — null when the point is already legal.
function pushOut(solid, px, pz, r) {
  if (solid.type === 'circle') {
    const dx = px - solid.x;
    const dz = pz - solid.z;
    const d = Math.hypot(dx, dz);
    const want = solid.r + r;
    if (d >= want) return null;
    if (d < 1e-6) return [solid.x + want, solid.z]; // dead centre: any direction
    return [solid.x + (dx / d) * want, solid.z + (dz / d) * want];
  }

  const pts = solid.pts;
  let best = null;
  for (let i = 0, j = pts.length - 1; i < pts.length; j = i++) {
    const hit = closestOnSegment(px, pz, pts[j][0], pts[j][1], pts[i][0], pts[i][1]);
    if (!best || hit.dist < best.dist) best = hit;
  }
  if (!best) return null;
  const inside = pointInPoly(px, pz, pts);
  if (!inside && best.dist >= r) return null;
  // Inside: the outward direction points from the player TOWARDS the nearest
  // edge. Outside-but-clipping: it points away from that edge.
  const sign = inside ? 1 : -1;
  const dx = (best.cx - px) * sign;
  const dz = (best.cz - pz) * sign;
  const d = Math.hypot(dx, dz);
  if (d < 1e-6) return [best.cx, best.cz]; // exactly on the edge; nudge is arbitrary
  return [best.cx + (dx / d) * r, best.cz + (dz / d) * r];
}

export function createCollision() {
  const solids = [];
  const movers = [];   // E6a.2: solids that move — read live, never gridded
  const grid = new Map();
  let enabled = true;

  const key = (ix, iz) => `${ix},${iz}`;

  function index(solid) {
    const idx = solids.length;
    solids.push(solid);
    const { minX, maxX, minZ, maxZ } = solid.bounds;
    const x0 = Math.floor(minX / CELL);
    const x1 = Math.floor(maxX / CELL);
    const z0 = Math.floor(minZ / CELL);
    const z1 = Math.floor(maxZ / CELL);
    for (let ix = x0; ix <= x1; ix++) {
      for (let iz = z0; iz <= z1; iz++) {
        const k = key(ix, iz);
        let cell = grid.get(k);
        if (!cell) grid.set(k, (cell = []));
        cell.push(idx);
      }
    }
    return idx;
  }

  function addPolygon(pts, tag = 'poly') {
    if (!Array.isArray(pts) || pts.length < 3) return -1;
    const clean = pts.filter((p) => Array.isArray(p) && Number.isFinite(p[0]) && Number.isFinite(p[1]));
    if (clean.length < 3) return -1;
    return index({ type: 'poly', tag, pts: clean, bounds: polyBounds(clean) });
  }

  // Oriented box in plan, stored as its four corners — one code path for
  // resolution, and a prop's yaw costs nothing at query time.
  function addBox(cx, cz, halfW, halfD, yaw = 0, tag = 'box') {
    if (![cx, cz, halfW, halfD, yaw].every(Number.isFinite)) return -1;
    if (halfW <= 0 || halfD <= 0) return -1;
    const s = Math.sin(yaw);
    const c = Math.cos(yaw);
    const corner = (u, v) => [cx + u * halfW * c + v * halfD * s, cz - u * halfW * s + v * halfD * c];
    return addPolygon([corner(-1, -1), corner(1, -1), corner(1, 1), corner(-1, 1)], tag);
  }

  function addCircle(x, z, r, tag = 'circle') {
    if (![x, z, r].every(Number.isFinite) || r <= 0) return -1;
    return index({
      type: 'circle', tag, x, z, r,
      bounds: { minX: x - r, maxX: x + r, minZ: z - r, maxZ: z + r },
    });
  }

  // E6a.2: a circle that follows something. The 30 walkers move every frame,
  // so gridding them would mean re-indexing 30 solids per frame to save 30
  // distance tests per query — the wrong trade at this population. They are
  // read live through getters, which also means nothing here holds a
  // reference into the scene graph.
  //
  // ONE-WAY, and this is the point: a walker is solid TO THE PLAYER, and
  // leithers.js never consults collision, so the player is not solid to a
  // walker. Their 1D paths do not path-find, and a walker who could be
  // blocked by someone standing still would be pinned there forever.
  function addMover(getX, getZ, r, tag = 'mover') {
    if (typeof getX !== 'function' || typeof getZ !== 'function') return -1;
    if (!Number.isFinite(r) || r <= 0) return -1;
    movers.push({
      type: 'circle', tag, r,
      get x() { return getX(); },
      get z() { return getZ(); },
    });
    return movers.length - 1;
  }

  // Every solid the disc at (x,z) could touch: gridded ones by cell, plus
  // every mover (the whole list — 30 distance tests is cheaper than any
  // structure that would avoid them). Deduped; a footprint spans many cells.
  function nearby(x, z, r) {
    const seen = new Set();
    const out = [];
    const x0 = Math.floor((x - r) / CELL);
    const x1 = Math.floor((x + r) / CELL);
    const z0 = Math.floor((z - r) / CELL);
    const z1 = Math.floor((z + r) / CELL);
    for (let ix = x0; ix <= x1; ix++) {
      for (let iz = z0; iz <= z1; iz++) {
        const cell = grid.get(key(ix, iz));
        if (cell) {
          for (const i of cell) {
            if (seen.has(i)) continue;
            seen.add(i);
            out.push(solids[i]);
          }
        }
      }
    }
    for (const m of movers) out.push(m);
    return out;
  }

  // Push a point out of everything it is inside of. Returns [x, z, settled] —
  // `settled` false means the passes ran out, which is the corner-trap case.
  function settle(x, z, r) {
    let px = x;
    let pz = z;
    for (let pass = 0; pass < MAX_PASSES; pass++) {
      let moved = false;
      for (const solid of nearby(px, pz, r)) {
        const out = pushOut(solid, px, pz, r);
        if (out) {
          px = out[0];
          pz = out[1];
          moved = true;
        }
      }
      if (!moved) return [px, pz, true];
    }
    return [px, pz, false];
  }

  function deepestContact(x, z, r) {
    let best = null;
    for (const solid of nearby(x, z, r)) {
      const c = contact(solid, x, z, r);
      if (c && (!best || c.depth > best.depth)) best = c;
    }
    return best;
  }

  // The movement-integration entry point.
  //
  // Deliberately accept-or-reject rather than push-out. Pushing a MOVING point
  // out of several solids at once can oscillate — two edges of one concave
  // tenement footprint each pushing the player back into the other — and the
  // first cut of this did exactly that, turning a wall-slide into a dead stop
  // 39 frames in. Here every candidate position is either free or discarded,
  // so there is nothing to oscillate: the worst case is standing still.
  //
  // The slide is the wall's tangent, not an axis: the blocked step is
  // projected onto the surface it hit (delta minus its normal component), and
  // Leith Walk runs SSW, so an axis-decomposed fallback would have slid the
  // player sideways off a wall that is at 30 degrees to both axes.
  function resolveMove(fromX, fromZ, toX, toZ) {
    if (!enabled || (solids.length === 0 && movers.length === 0)) return [toX, toZ];
    const dx = toX - fromX;
    const dz = toZ - fromZ;
    const len = Math.hypot(dx, dz);
    if (len < 1e-9) return [toX, toZ];

    // A `from` that is already solid means something registered underneath a
    // standing player (a wreck landing on its glb promise). Resolve out first,
    // or every move from here would be rejected and the player frozen.
    let px = fromX;
    let pz = fromZ;
    if (isBlocked(px, pz)) {
      const [sx, sz] = settle(px, pz, PLAYER_RADIUS);
      px = sx;
      pz = sz;
    }

    // Sub-step long moves so a paused tab's catch-up frame cannot tunnel a
    // façade. At 14 m/s a normal frame is 0.23m and takes one step.
    const steps = len > MAX_STEP ? Math.ceil(len / MAX_STEP) : 1;
    const stepX = dx / steps;
    const stepZ = dz / steps;
    for (let s = 0; s < steps; s++) {
      const ax = px + stepX;
      const az = pz + stepZ;
      if (!isBlocked(ax, az)) {
        px = ax;
        pz = az;
        continue;
      }
      const hit = deepestContact(ax, az, PLAYER_RADIUS);
      if (!hit) break;
      const dot = stepX * hit.nx + stepZ * hit.nz;
      const bx = px + stepX - hit.nx * dot;
      const bz = pz + stepZ - hit.nz * dot;
      if (!isBlocked(bx, bz)) {
        px = bx;
        pz = bz;
        continue;
      }
      break; // corner: stand still for the rest of this frame's move
    }
    return [px, pz];
  }

  // Spawn and moment resolution: no `from` to fall back to, so this always
  // returns its best effort. Runs at a slightly larger radius than movement so
  // an arrival never lands flush against a wall it would immediately re-resolve.
  function resolveFree(x, z, r = PLAYER_RADIUS * 1.5) {
    if (solids.length === 0 && movers.length === 0) return [x, z];
    const [px, pz] = settle(x, z, r);
    return [px, pz];
  }

  function isBlocked(x, z, r = PLAYER_RADIUS) {
    for (const solid of nearby(x, z, r)) if (pushOut(solid, x, z, r)) return true;
    return false;
  }

  function stats() {
    const byTag = {};
    for (const s of solids) byTag[s.tag] = (byTag[s.tag] || 0) + 1;
    for (const m of movers) byTag[m.tag] = (byTag[m.tag] || 0) + 1;
    return { solids: solids.length, movers: movers.length, cells: grid.size, byTag, enabled };
  }

  // Every registered radius, by tag — the prompt-radius ordering gate reads
  // this rather than re-deriving the figures it is meant to be checking.
  function radii(tag) {
    const out = [];
    for (const s of solids) if (s.tag === tag && s.type === 'circle') out.push(s.r);
    for (const m of movers) if (m.tag === tag) out.push(m.r);
    return out;
  }

  return {
    addPolygon, addBox, addCircle, addMover, radii,
    playerRadius: PLAYER_RADIUS,
    resolveMove, resolveFree, isBlocked, stats,
    setEnabled: (v) => { enabled = !!v; },
    isEnabled: () => enabled,
    get count() { return solids.length + movers.length; },
  };
}
