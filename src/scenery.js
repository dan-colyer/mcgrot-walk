// Post-apocalyptic street dressing for McGrot Walk: derelict tram hulk,
// catenary poles with sagging wire + randomised arc flashes, drifting smoke
// sprites, scattered debris, and a subtle rust-tinted sky gradient.
//
// buildScenery(world, scene) constructs everything (static geometry merged
// per category to stay cheap) and returns { group, update(dt, time),
// onArcFlash } — set `scenery.onArcFlash = fn` to hear about each flash
// (ambience.js hooks a crackle burst off this).

import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

// Deterministic layout: every visitor sees the same wreckage. All build-time
// randomness draws from this seeded PRNG (runtime jitter like arc-flash
// timing also uses it, which is harmless — layout is consumed before frame 1).
const rand = (() => {
  let s = 0xc0ffee;
  return () => {
    s |= 0; s = (s + 0x6d2b79f5) | 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
})();

const POLE_SPACING = 35; // metres along the street
const POLE_OFFSET = 11; // metres from centreline — just outside the pavement
const WIRE_SAG = 0.9; // metres of droop at wire midspan
const TRAM_DIST = 90; // metres along the street from the north end

const RUST_PALETTE = [0x6b3a26, 0x7a4630, 0x5c3524, 0x8a5236, 0x4f2e21];
const DEBRIS_COUNT = 22;
const SMOKE_COUNT = 8;
const ARC_SITE_COUNT = 3;

const ARC_FLASH_DURATION_MIN = 0.06;
const ARC_FLASH_DURATION_MAX = 0.16;
const ARC_INTERVAL_MIN = 4;
const ARC_INTERVAL_MAX = 14;
const ARC_LIGHT_PEAK = 55; // tuned without a browser preview — likely needs a visual pass

export function buildScenery(world, scene) {
  const streetLine = world.streetLine || [];
  const group = new THREE.Group();
  scene.add(group);

  const poles = buildCatenaryPoles(streetLine, group);
  buildTram(streetLine, group);
  buildDebris(streetLine, group);
  const smoke = buildSmoke(streetLine, group);
  const arcSites = buildArcFlashes(poles, group);

  const api = { group, onArcFlash: null };

  api.update = function update(dt, time) {
    updateSmoke(smoke, dt, time);
    updateArcFlashes(arcSites, time, () => {
      if (api.onArcFlash) api.onArcFlash();
    });
  };

  return api;
}

// The flat `scene.background` gradient that used to live here is gone: a plain
// Texture background is drawn in SCREEN space, so it never moved with the
// camera. Replaced by the direction-painted dome in sky.js.

// ---------------------------------------------------------------------------
// Street sampling helpers (local copies of npcs.js's pattern — this module
// doesn't share a utils file with npcs.js, kept decoupled deliberately)
// ---------------------------------------------------------------------------

function sampleStreet(streetLine, targetDist) {
  if (!streetLine || streetLine.length < 2 || targetDist < 0) return null;
  let acc = 0;
  for (let i = 0; i < streetLine.length - 1; i++) {
    const [ax, az] = streetLine[i];
    const [bx, bz] = streetLine[i + 1];
    const dx = bx - ax;
    const dz = bz - az;
    const segLen = Math.hypot(dx, dz);
    if (acc + segLen >= targetDist) {
      const t = segLen > 0 ? (targetDist - acc) / segLen : 0;
      const len = segLen || 1;
      return { point: [ax + dx * t, az + dz * t], tangent: [dx / len, dz / len] };
    }
    acc += segLen;
  }
  return null; // past the southern end
}

function streetLength(streetLine) {
  let len = 0;
  for (let i = 1; i < streetLine.length; i++) {
    len += Math.hypot(streetLine[i][0] - streetLine[i - 1][0], streetLine[i][1] - streetLine[i - 1][1]);
  }
  return len;
}

function colorGeometry(geo, hex) {
  const color = new THREE.Color(hex);
  const count = geo.attributes.position.count;
  const cols = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    cols[i * 3] = color.r;
    cols[i * 3 + 1] = color.g;
    cols[i * 3 + 2] = color.b;
  }
  geo.setAttribute('color', new THREE.Float32BufferAttribute(cols, 3));
}

// ---------------------------------------------------------------------------
// Catenary poles + sagging wire spans (merged geometry, single flash-arc
// light + spark per chosen site)
// ---------------------------------------------------------------------------

function buildCatenaryPoles(streetLine, group) {
  const len = streetLength(streetLine);
  const poleGeos = [];
  const wireGeos = [];
  const poles = []; // { position: THREE.Vector3 } — wire attachment points

  for (let dist = 12; dist < len - 5; dist += POLE_SPACING) {
    const sample = sampleStreet(streetLine, dist);
    if (!sample) break;
    const [tx, tz] = sample.tangent;
    const perpX = -tz;
    const perpZ = tx;
    const leftPos = new THREE.Vector3(sample.point[0] + perpX * POLE_OFFSET, 0, sample.point[1] + perpZ * POLE_OFFSET);
    const rightPos = new THREE.Vector3(sample.point[0] - perpX * POLE_OFFSET, 0, sample.point[1] - perpZ * POLE_OFFSET);
    const poleHeight = 7.5 + rand() * 0.6;
    const wireY = poleHeight - 0.4;

    poleGeos.push(makePoleGeometry(leftPos, poleHeight));
    poleGeos.push(makePoleGeometry(rightPos, poleHeight));
    wireGeos.push(makeSaggingWireGeometry(leftPos, rightPos, wireY));

    poles.push({ position: leftPos.clone().setY(wireY) }, { position: rightPos.clone().setY(wireY) });
  }

  if (poleGeos.length) {
    const merged = mergeGeometries(poleGeos, false);
    const poleMat = new THREE.MeshLambertMaterial({ color: 0x3a352c, flatShading: true });
    group.add(new THREE.Mesh(merged, poleMat));
  }

  if (wireGeos.length) {
    const mergedWire = mergeGeometries(wireGeos, false);
    const wireMat = new THREE.LineBasicMaterial({ color: 0x1c1a15 });
    group.add(new THREE.LineSegments(mergedWire, wireMat));
  }

  return poles;
}

function makePoleGeometry(pos, height) {
  const geo = new THREE.CylinderGeometry(0.09, 0.13, height, 6);
  geo.translate(pos.x, height / 2, pos.z);
  return geo;
}

function makeSaggingWireGeometry(a, b, y) {
  const SEGMENTS = 8;
  const points = [];
  for (let i = 0; i <= SEGMENTS; i++) {
    const t = i / SEGMENTS;
    const x = THREE.MathUtils.lerp(a.x, b.x, t);
    const z = THREE.MathUtils.lerp(a.z, b.z, t);
    const sag = 4 * t * (1 - t) * WIRE_SAG; // parabolic droop, 0 at the ends
    points.push(x, y - sag, z);
  }
  const segPositions = [];
  for (let i = 0; i < SEGMENTS; i++) {
    segPositions.push(points[i * 3], points[i * 3 + 1], points[i * 3 + 2]);
    segPositions.push(points[(i + 1) * 3], points[(i + 1) * 3 + 1], points[(i + 1) * 3 + 2]);
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(segPositions, 3));
  return geo;
}

// ---------------------------------------------------------------------------
// Arc flashes — brief bluish PointLight pulse + spark mesh on a randomised
// per-site timer, mounted at wire-attachment points
// ---------------------------------------------------------------------------

function buildArcFlashes(poles, group) {
  if (!poles.length) return [];
  const count = Math.min(ARC_SITE_COUNT, poles.length);
  const chosen = pickSpacedIndices(poles.length, count);
  const sites = [];

  for (const idx of chosen) {
    const p = poles[idx];

    const light = new THREE.PointLight(0x9fd0ff, 0, 14, 2); // off until triggered
    light.position.copy(p.position);
    group.add(light);

    const sparkMat = new THREE.MeshBasicMaterial({
      color: 0xdff2ff,
      transparent: true,
      opacity: 0,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    const spark = new THREE.Mesh(new THREE.SphereGeometry(0.12, 6, 6), sparkMat);
    spark.position.copy(p.position);
    group.add(spark);

    sites.push({
      light,
      spark,
      active: false,
      nextTime: ARC_INTERVAL_MIN + rand() * (ARC_INTERVAL_MAX - ARC_INTERVAL_MIN),
      flashEnd: 0,
    });
  }

  return sites;
}

function pickSpacedIndices(n, count) {
  const idxs = [];
  for (let i = 0; i < count; i++) {
    idxs.push(Math.floor(((i + 0.5) / count) * n));
  }
  return idxs;
}

function updateArcFlashes(sites, time, onFlash) {
  for (const site of sites) {
    if (!site.active && time >= site.nextTime) {
      site.active = true;
      const dur = ARC_FLASH_DURATION_MIN + rand() * (ARC_FLASH_DURATION_MAX - ARC_FLASH_DURATION_MIN);
      site.flashEnd = time + dur;
      site.light.intensity = ARC_LIGHT_PEAK;
      site.spark.material.opacity = 1;
      site.spark.scale.setScalar(0.8 + rand() * 0.6);
      onFlash();
    } else if (site.active && time >= site.flashEnd) {
      site.active = false;
      site.light.intensity = 0;
      site.spark.material.opacity = 0;
      site.nextTime = time + ARC_INTERVAL_MIN + rand() * (ARC_INTERVAL_MAX - ARC_INTERVAL_MIN);
    } else if (site.active) {
      // Jittery flicker within the flash itself, for a less "clean" arc look.
      site.light.intensity = ARC_LIGHT_PEAK * (0.7 + rand() * 0.3);
    }
  }
}

// ---------------------------------------------------------------------------
// Derelict tram hulk — boxy rusted body, slight tilt, smashed-window quads
// ---------------------------------------------------------------------------

function buildTram(streetLine, group) {
  const sample = sampleStreet(streetLine, TRAM_DIST);
  if (!sample) return;

  const [tx, tz] = sample.tangent;
  const perpX = -tz;
  const perpZ = tx;
  const offset = 5.5; // sits half into the carriageway — an abandoned wreck, not tidied to the kerb
  const cx = sample.point[0] + perpX * offset;
  const cz = sample.point[1] + perpZ * offset;
  const yaw = Math.atan2(tx, tz); // same convention as npcs.js: local +Z -> tangent direction

  const geos = [];

  const bodyGeo = new THREE.BoxGeometry(2.6, 3.1, 11);
  colorGeometry(bodyGeo, 0x6b4530);
  geos.push(bodyGeo);

  const roofGeo = new THREE.BoxGeometry(2.3, 0.3, 10.6);
  roofGeo.translate(0, 1.7, 0);
  colorGeometry(roofGeo, 0x4a3a2c);
  geos.push(roofGeo);

  // Smashed-window suggestion: dark inset quads jittered along both sides.
  for (let i = -1; i <= 1; i++) {
    for (const side of [-1, 1]) {
      const jag = (rand() - 0.5) * 0.3;
      const wGeo = new THREE.BoxGeometry(0.08, 0.9 + rand() * 0.3, 1.6);
      wGeo.translate(side * 1.32, 0.5 + jag, i * 3.2 + (rand() - 0.5) * 0.6);
      colorGeometry(wGeo, 0x0c0d0a);
      geos.push(wGeo);
    }
  }

  const merged = mergeGeometries(geos, false);
  const mat = new THREE.MeshLambertMaterial({ vertexColors: true, flatShading: true });
  const mesh = new THREE.Mesh(merged, mat);
  mesh.position.set(cx, 1.85, cz);
  mesh.rotation.y = yaw;
  mesh.rotation.z = 0.09; // slight tilt — derailed, not parked
  group.add(mesh);
}

// ---------------------------------------------------------------------------
// Scattered debris — tumbled boxes/barrels along the pavements
// ---------------------------------------------------------------------------

function buildDebris(streetLine, group) {
  const len = streetLength(streetLine);
  if (len < 4) return;
  const geos = [];

  for (let i = 0; i < DEBRIS_COUNT; i++) {
    const dist = 25 + rand() * Math.max(10, len - 33);
    const sample = sampleStreet(streetLine, dist);
    if (!sample) continue;
    const [tx, tz] = sample.tangent;
    const perpX = -tz;
    const perpZ = tx;
    const side = rand() < 0.5 ? 1 : -1;
    const off = (7.5 + rand() * 3) * side; // pavement zone
    const x = sample.point[0] + perpX * off;
    const z = sample.point[1] + perpZ * off;

    const isBarrel = rand() < 0.4;
    const geo = isBarrel
      ? new THREE.CylinderGeometry(0.32, 0.34, 0.7, 8)
      : new THREE.BoxGeometry(0.5 + rand() * 0.3, 0.4 + rand() * 0.3, 0.5 + rand() * 0.3);
    const h = isBarrel ? 0.35 : 0.2;
    geo.translate(0, h, 0);
    geo.rotateY(rand() * Math.PI);
    if (rand() < 0.3) geo.rotateZ((rand() - 0.5) * 0.5); // tipped over
    geo.translate(x, 0, z);
    colorGeometry(geo, RUST_PALETTE[i % RUST_PALETTE.length]);
    geos.push(geo);
  }

  if (!geos.length) return;
  const merged = mergeGeometries(geos, false);
  const mat = new THREE.MeshLambertMaterial({ vertexColors: true, flatShading: true });
  group.add(new THREE.Mesh(merged, mat));
}

// ---------------------------------------------------------------------------
// Drifting smoke — soft dark sprite planes, canvas radial-gradient texture
// ---------------------------------------------------------------------------

function buildSmoke(streetLine, group) {
  const len = streetLength(streetLine);
  if (len < 4) return [];
  const texture = makeSmokeTexture();
  const sprites = [];

  for (let i = 0; i < SMOKE_COUNT; i++) {
    const dist = 35 + rand() * Math.max(20, len - 55);
    const sample = sampleStreet(streetLine, dist);
    if (!sample) continue;

    const mat = new THREE.SpriteMaterial({
      map: texture,
      transparent: true,
      opacity: 0.18,
      depthWrite: false,
      color: 0x3a382c,
    });
    const sprite = new THREE.Sprite(mat);
    const scale = 8 + rand() * 4;
    sprite.scale.set(scale, scale, 1);
    group.add(sprite);

    sprites.push({
      sprite,
      baseX: sample.point[0] + (rand() - 0.5) * 14,
      baseZ: sample.point[1] + (rand() - 0.5) * 14,
      baseY: 6 + rand() * 3,
      phase: rand() * Math.PI * 2,
      riseSpeed: 0.25 + rand() * 0.15,
      riseRange: 9 + rand() * 3,
      driftAmp: 2 + rand() * 2,
      driftFreq: 0.05 + rand() * 0.05,
      baseOpacity: 0.14 + rand() * 0.1,
    });
  }

  return sprites;
}

function updateSmoke(sprites, dt, time) {
  for (const s of sprites) {
    const t = (time * s.riseSpeed + s.phase) % s.riseRange;
    s.sprite.position.set(
      s.baseX + Math.sin(time * s.driftFreq + s.phase) * s.driftAmp,
      s.baseY + t,
      s.baseZ + Math.cos(time * s.driftFreq * 0.8 + s.phase) * s.driftAmp
    );
    // Fade in/out at the bottom/top of each rise cycle so it doesn't pop.
    const fadeT = t / s.riseRange;
    s.sprite.material.opacity = s.baseOpacity * (1 - Math.abs(fadeT - 0.5) * 1.4);
  }
}

function makeSmokeTexture() {
  const size = 128;
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');
  const grad = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  grad.addColorStop(0, 'rgba(60,58,48,0.55)');
  grad.addColorStop(0.5, 'rgba(50,48,40,0.25)');
  grad.addColorStop(1, 'rgba(40,38,32,0)');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, size, size);
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}
