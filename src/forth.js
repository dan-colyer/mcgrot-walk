// The Forth — E1 "The Brae" payoff. A water plane and a far-shore silhouette
// sitting north of the Foot of the Walk (streetLine[0]), where the real
// street runs out and the estuary begins.
//
// Deliberately impressionistic, not simulated: a big dark plane and a low
// ridge, both using the scene's OWN existing fog (untouched) to do all the
// work. From the top of the brae (chainage ~1617) the water is 1600m+ away
// and fully fogged out; as the player descends toward the Foot the distance
// shrinks and the water resolves out of the haze on its own. No new fog
// logic needed, and none added — see sky.js's "THE SEAM" note for why
// nothing here may touch the global fog or add colour at the horizon.
//
// E2c.3a: fog density is now a palette axis (src/atmosphere.js), and clear
// daylight thinned to 0.0022 is what finally makes this module visible at
// all. Measured at 13:00 clear, eye height, looking north along the street:
// the shore and water cover 344-540 pixels of a 1280x800 frame between
// chainage 5 and 80, and nothing at all from chainage 150 or beyond. So the
// reveal is real but narrow — a dark band glimpsed through the gaps beside
// the terminus building, which still blocks the axis dead-on. Hidden from
// Picardy (0 pixels), which is the constraint that matters.
//
// Kept as a separate module (not folded into sky.js, which stays a pure
// direction-painted dome) because this is real, positioned geometry.

import * as THREE from 'three';
import { hash2, fbmP, finishTexture } from './road.js';
import { LIT_ALBEDO_GAIN } from './lighting-constants.js';

// Raw sRGB bytes, dark — same discipline as every other canvas bake in this
// project (world.js/road.js gotchas): ACES at exposure 1.46 lifts a mid-tone
// into something far brighter than it looks on paper, and a THREE.Color
// component here would double-convert (Color() is linear; this canvas is
// SRGBColorSpace-tagged).
const WATER_BASE = { r: 44, g: 50, b: 45 };
const SHORE_COLOR = 0x262b28; // at/below the sky's own horizon tone — no seam
const WATER_TILE_METRES = 60;

function makeWaterTexture() {
  const S = 256;
  const P = 6;
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = S;
  const ctx = canvas.getContext('2d');
  const img = ctx.createImageData(S, S);
  const px = img.data;

  for (let y = 0; y < S; y++) {
    for (let x = 0; x < S; x++) {
      const nx = (x / S) * P, ny = (y / S) * P;
      let r = WATER_BASE.r, g = WATER_BASE.g, b = WATER_BASE.b;

      // Broad swell — low-frequency tonal drift, not chop.
      const swell = fbmP(nx, ny, P, 3, 401) - 0.5;
      r += swell * 10; g += swell * 12; b += swell * 10;

      // The odd glint of the same pale overcast the sky dome paints.
      const glint = hash2(x, y, 419);
      if (glint > 0.986) { r += 26; g += 26; b += 22; }

      const i = (y * S + x) * 4;
      px[i] = Math.max(0, Math.min(255, r));
      px[i + 1] = Math.max(0, Math.min(255, g));
      px[i + 2] = Math.max(0, Math.min(255, b));
      px[i + 3] = 255;
    }
  }
  ctx.putImageData(img, 0, 0);
  return finishTexture(canvas);
}

export function buildForth(world, scene) {
  const streetLine = world.streetLine || [];
  if (streetLine.length < 2) return { group: null };

  const foot = streetLine[0];
  const tail = streetLine[streetLine.length - 1];
  // Same derivation sky.js uses for the docks glow: the direction FROM the
  // far (south) end TOWARD the Foot is the direction the Forth actually
  // lies in, beyond streetLine[0].
  let dx = foot[0] - tail[0], dz = foot[1] - tail[1];
  const dl = Math.hypot(dx, dz) || 1;
  dx /= dl; dz /= dl;
  const perpX = -dz, perpZ = dx;

  const footY = world.groundHeight ? world.groundHeight(foot[0], foot[1]) : 0;
  const waterY = footY - 2.5; // the estuary sits a little below street level at the Foot

  const group = new THREE.Group();
  group.name = 'forth';

  // Water: a large plane whose NEAR edge sits close to the Foot. Distance
  // alone (via the untouched scene fog) makes it dissolve in and out.
  const WATER_SIZE = 1400;
  const NEAR_OFFSET = 15; // metres beyond the Foot before the water starts
  const waterGeo = new THREE.PlaneGeometry(WATER_SIZE, WATER_SIZE);
  waterGeo.rotateX(-Math.PI / 2);
  const tex = makeWaterTexture();
  tex.repeat.set(WATER_SIZE / WATER_TILE_METRES, WATER_SIZE / WATER_TILE_METRES);
  const water = new THREE.Mesh(waterGeo, new THREE.MeshLambertMaterial({ map: tex }));
  water.position.set(
    foot[0] + dx * (NEAR_OFFSET + WATER_SIZE / 2),
    waterY,
    foot[1] + dz * (NEAR_OFFSET + WATER_SIZE / 2)
  );
  water.name = 'forth-water';
  group.add(water);

  // Far shore: a low ridge silhouette (Fife), flat and dark — a hint of a
  // horizon feature, not a rendered coastline. Long axis built along local
  // +Z, rotated the same way every other street-aligned prop in this
  // codebase orients itself (θ = atan2(dirX, dirZ) maps +Z to (dirX,dirZ)).
  const SHORE_DIST = NEAR_OFFSET + 340;
  const SHORE_H = 12;
  const shoreGeo = new THREE.BoxGeometry(26, SHORE_H, 900);
  shoreGeo.translate(0, SHORE_H / 2, 0);
  shoreGeo.rotateY(Math.atan2(perpX, perpZ));
  shoreGeo.translate(
    foot[0] + dx * SHORE_DIST,
    waterY,
    foot[1] + dz * SHORE_DIST
  );
  const shore = new THREE.Mesh(shoreGeo, new THREE.MeshLambertMaterial({ color: new THREE.Color(SHORE_COLOR).multiplyScalar(LIT_ALBEDO_GAIN) }));
  shore.name = 'forth-shore';
  group.add(shore);

  scene.add(group);
  return { group, water, shore };
}
