// Shared street-frontage geometry — the SAME logic the engine (src/shopfronts.js)
// and the offline manifest builder (scripts/build-facade-manifest.mjs) both use
// to decide which building walls are street-facing shopfronts, and how OSM's
// per-edge footprints merge into one straight RUN per real building wall.
//
// Deliberately dependency-free (no THREE.js, no DOM) so it runs identically in
// the browser bundle and in plain Node — the manifest's building widths and the
// engine's actual drawn runs would drift apart if this lived in two places.

// Metres from the Leith Walk centreline within which a wall counts as a frontage.
const STREET_RANGE = 30;
const MIN_EDGE = 0.25;
const FACING_MIN = 0.35;   // wall normal · direction-to-street; at or above this it's a shop frontage
const SIDE_MIN = -0.3;     // below this the wall faces away entirely (a back wall)
const CHAMFER_MAX_LEN = 9;      // metres — chamfers (junction corner cuts) are short
const CHAMFER_MAX_ALIGN = 0.88; // |edgeDir · streetDir| under this => not parallel to the street

export const FRONTAGE_CONSTANTS = { STREET_RANGE, MIN_EDGE, FACING_MIN, SIDE_MIN, CHAMFER_MAX_LEN, CHAMFER_MAX_ALIGN };

const CHAIN_JOIN_TOLERANCE = 2; // metres, for clustering streetPath endpoints

// Walks leith.json's streetPaths end-to-end and keeps the longest chain,
// oriented north (small z) -> south (large z). Moved here (from src/world.js)
// so the manifest builder derives the SAME centreline the engine renders from,
// rather than a second, potentially-drifting reimplementation.
export function buildStreetChain(streetPaths) {
  const nodes = []; // { x, z }
  const nodeOfSeg = []; // [startNodeIdx, endNodeIdx] per segment
  const adjacency = []; // adjacency[nodeIdx] = [{ segIdx, otherNode }]

  function findOrAddNode(pt) {
    for (let i = 0; i < nodes.length; i++) {
      const dx = nodes[i].x - pt[0];
      const dz = nodes[i].z - pt[1];
      if (Math.hypot(dx, dz) < CHAIN_JOIN_TOLERANCE) return i;
    }
    nodes.push({ x: pt[0], z: pt[1] });
    return nodes.length - 1;
  }

  streetPaths.forEach((path, segIdx) => {
    if (path.length < 2) return;
    const a = findOrAddNode(path[0]);
    const b = findOrAddNode(path[path.length - 1]);
    nodeOfSeg[segIdx] = [a, b];
    (adjacency[a] ??= []).push({ segIdx, otherNode: b });
    (adjacency[b] ??= []).push({ segIdx, otherNode: a });
  });

  const usedSegs = new Set();

  function walkFrom(startNode) {
    const points = [[nodes[startNode].x, nodes[startNode].z]];
    let curNode = startNode;
    while (true) {
      const options = (adjacency[curNode] || []).filter((o) => !usedSegs.has(o.segIdx));
      if (options.length === 0) break;
      const { segIdx, otherNode } = options[0];
      usedSegs.add(segIdx);
      const path = streetPaths[segIdx];
      const [a] = nodeOfSeg[segIdx];
      const seq = a === curNode ? path : [...path].reverse();
      for (let i = 1; i < seq.length; i++) points.push(seq[i]);
      curNode = otherNode;
    }
    return points;
  }

  function chainLength(pts) {
    let len = 0;
    for (let i = 1; i < pts.length; i++) {
      len += Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]);
    }
    return len;
  }

  const chains = [];
  const startCandidates = nodes.map((_, i) => i).filter((i) => (adjacency[i] || []).length !== 2);
  for (const s of startCandidates) {
    const before = usedSegs.size;
    const pts = walkFrom(s);
    if (usedSegs.size > before) chains.push(pts);
  }
  for (let i = 0; i < nodes.length; i++) {
    const hasUnused = (adjacency[i] || []).some((o) => !usedSegs.has(o.segIdx));
    if (hasUnused) chains.push(walkFrom(i));
  }

  chains.sort((a, b) => chainLength(b) - chainLength(a));
  const longest = chains[0] || [];

  if (longest.length > 1 && longest[0][1] > longest[longest.length - 1][1]) {
    longest.reverse();
  }
  return longest;
}

// Given a street polyline (north -> south, [[x,z],...]), returns a function
// nearestStreetPoint(x,z) -> {point:[x,z], distance, tangent:[dx,dz]} giving the
// closest point on the line, its distance, and the line's local direction there.
export function makeNearestStreetPoint(streetLine) {
  return function nearestStreetPoint(x, z) {
    let best = null;
    let bestDist = Infinity;
    let bestTangent = null;
    for (let i = 0; i < streetLine.length - 1; i++) {
      const [ax, az] = streetLine[i];
      const [bx, bz] = streetLine[i + 1];
      const dx = bx - ax;
      const dz = bz - az;
      const lenSq = dx * dx + dz * dz;
      let t = lenSq > 0 ? ((x - ax) * dx + (z - az) * dz) / lenSq : 0;
      t = Math.max(0, Math.min(1, t));
      const px = ax + t * dx;
      const pz = az + t * dz;
      const dist = Math.hypot(x - px, z - pz);
      if (dist < bestDist) {
        bestDist = dist;
        best = [px, pz];
        const len = Math.sqrt(lenSq);
        bestTangent = len > 0 ? [dx / len, dz / len] : [0, 1];
      }
    }
    return { point: best, distance: bestDist, tangent: bestTangent };
  };
}

// Cumulative chainage (arc length from the north end) of every building, keyed
// by centroid, plus the building index order sorted north -> south. Used both
// for the engine's anti-repeat spacing and the manifest's chainage field.
export function computeBuildingChainage(buildings, streetLine) {
  function chainageOf(px, pz) {
    let best = Infinity;
    let bestChain = 0;
    let acc = 0;
    for (let i = 0; i < streetLine.length - 1; i++) {
      const [ax, az] = streetLine[i];
      const [bx, bz] = streetLine[i + 1];
      const dx = bx - ax;
      const dz = bz - az;
      const lenSq = dx * dx + dz * dz;
      const segLen = Math.sqrt(lenSq);
      let t = lenSq > 0 ? ((px - ax) * dx + (pz - az) * dz) / lenSq : 0;
      t = Math.max(0, Math.min(1, t));
      const d = Math.hypot(px - (ax + t * dx), pz - (az + t * dz));
      if (d < best) { best = d; bestChain = acc + t * segLen; }
      acc += segLen;
    }
    return bestChain;
  }
  const buildingChainage = new Array(buildings.length).fill(Infinity);
  const buildingOrder = [];
  buildings.forEach((building, bi) => {
    const fp = building && building.footprint;
    if (!fp || fp.length < 3) return;
    let cx = 0, cz = 0;
    for (const p of fp) { cx += p[0]; cz += p[1]; }
    buildingChainage[bi] = chainageOf(cx / fp.length, cz / fp.length);
    buildingOrder.push(bi);
  });
  buildingOrder.sort((a, b) => buildingChainage[a] - buildingChainage[b]);
  return { buildingChainage, buildingOrder };
}

// For one building, returns the merged street-facing RUNS (a run = one or more
// collinear OSM edges joined into a single straight wall) plus which edges got
// stone cladding instead (non-frontage, still visible walls) — callers that only
// need frontage (the manifest) can ignore the second array.
//
// A run: {ax,az,bx,bz, dirx,dirz, len, isChamfer, startEdge, endEdge}
export function computeFrontageRuns(building, nearestStreetPoint) {
  const fp = building.footprint;
  const runs = [];
  if (!fp || fp.length < 3 || !nearestStreetPoint) return runs;

  let cx = 0, cz = 0;
  for (const p of fp) { cx += p[0]; cz += p[1]; }
  cx /= fp.length;
  cz /= fp.length;

  const frontEdges = [];

  for (let i = 0; i < fp.length; i++) {
    const a = fp[i];
    const b = fp[(i + 1) % fp.length];
    const ex = b[0] - a[0];
    const ez = b[1] - a[1];
    const len = Math.hypot(ex, ez);
    if (len < MIN_EDGE) continue;

    const mx = (a[0] + b[0]) / 2;
    const mz = (a[1] + b[1]) / 2;
    const np = nearestStreetPoint(mx, mz);
    if (!np || !np.point) continue;

    const nearA = nearestStreetPoint(a[0], a[1]);
    const nearB = nearestStreetPoint(b[0], b[1]);
    const edgeDist = Math.min(np.distance, nearA ? nearA.distance : Infinity, nearB ? nearB.distance : Infinity);
    if (edgeDist > STREET_RANGE) continue;

    const inv = 1 / len;
    let nx = -ez * inv;
    let nz = ex * inv;
    let sx = a[0];
    let sz = a[1];
    let dx = ex;
    let dz = ez;
    if (nx * (mx - cx) + nz * (mz - cz) < 0) {
      nx = -nx; nz = -nz;
      sx = b[0]; sz = b[1];
      dx = -ex; dz = -ez;
    }

    const dsx = np.point[0] - mx;
    const dsz = np.point[1] - mz;
    const dl = Math.hypot(dsx, dsz) || 1;
    const facing = (nx * dsx + nz * dsz) / dl;
    if (facing < SIDE_MIN) continue;
    const isFrontage = facing >= FACING_MIN;
    if (!isFrontage) continue;

    let isChamfer = false;
    if (np.tangent && len <= CHAMFER_MAX_LEN) {
      const align = Math.abs(dx * inv * np.tangent[0] + dz * inv * np.tangent[1]);
      isChamfer = align < CHAMFER_MAX_ALIGN;
    }

    frontEdges.push({ i, ax: sx, az: sz, bx: sx + dx, bz: sz + dz, dirx: dx * inv, dirz: dz * inv, len, isChamfer });
  }

  for (const e of frontEdges) {
    const last = runs[runs.length - 1];
    const contiguous = last && e.i === last.endEdge + 1
      && last.dirx * e.dirx + last.dirz * e.dirz > 0.985;
    if (contiguous) {
      last.bx = e.bx; last.bz = e.bz; last.len += e.len; last.endEdge = e.i;
      last.isChamfer = last.isChamfer || e.isChamfer;
    } else {
      runs.push({ ax: e.ax, az: e.az, bx: e.bx, bz: e.bz, dirx: e.dirx, dirz: e.dirz, len: e.len, isChamfer: e.isChamfer, startEdge: e.i, endEdge: e.i });
    }
  }
  if (runs.length > 1) {
    const first = runs[0], lastR = runs[runs.length - 1];
    if (lastR.endEdge === fp.length - 1 && first.startEdge === 0
      && Math.hypot(lastR.bx - first.ax, lastR.bz - first.az) < 0.5
      && lastR.dirx * first.dirx + lastR.dirz * first.dirz > 0.985) {
      first.ax = lastR.ax; first.az = lastR.az; first.len += lastR.len;
      first.isChamfer = first.isChamfer || lastR.isChamfer;
      runs.pop();
    }
  }
  return runs;
}
