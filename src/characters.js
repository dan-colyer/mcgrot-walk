// E3b — five generated meshes standing in for 124 paper dolls.
//
// LANDED OFF. `CHARACTERS_ENABLED` is false, exactly as ANCHORS_ENABLED was, so
// the scene is byte-identical until the flag is flipped deliberately and the
// draw-call baselines and goldens are recaptured as a deliberate change (E3e).
// `window.__mcgrotForceCharacters` overrides it on localhost only — the same
// escape hatch npcs.js gives the anchors flag, so the gate and the probe can
// photograph the crowd both ways from one build.
//
// THE PROBLEM THIS SOLVES
//
// Five meshes across 124 vendors is 24.8x reuse. The faces already repeat 2.6x
// unremarked, so 24.8x is ten times more aggressive and clones are the obvious
// failure. The catalog's build triples are the way out: 114 of the 124 are
// distinct, so there is per-vendor variation available for free, and
// non-uniform scale costs neither a draw call nor a byte.
//
// The trap is that stretching one mesh across girth 0.50 to 1.60 is a 3.2x
// squash, and a squashed face reads as a bug rather than a grotesque. So the
// work is split: SELECTION does the coarse matching (pick the archetype whose
// own proportions are nearest this vendor's) and SCALE only carries the
// residual. Measured over all 124 vendors, that residual lands at 0.79-1.25
// for 90% of them and 1.25 at worst — a nudge, not a stretch. See
// docs/VALIDATION.md "E3b" for the sweep behind the constants below.
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { assetUrl } from './assets.js';
import { vendorDims, DEFAULT_BUILD } from './npcs.js';

export const CHARACTERS_ENABLED = false;

// Each archetype's OWN build triple, measured off the glb by
// `node scripts/glb-proportions.mjs assets/characters/*.glb` and mapped into
// the catalog's units by matching z-scores (mesh width/height -> girth, mesh
// head/torso -> headScale). Measured rather than taken from the generation
// prompt: what Trellis produced is not necessarily what was asked for, and
// these numbers are the denominator of every scale factor below.
//
// Regenerate a mesh and these MUST be re-measured, or every vendor assigned to
// it silently inherits the old mesh's residual.
// `frontZ` comes from the same measurement and is a fraction of the mesh's own
// height: how far its belly sticks out. The comic plane is positioned from the
// paper DOLL's box depth, and the first contact sheet had half the crowd
// wearing their comics inside their stomachs.
export const ARCHETYPES = [
  { name: 'bulk', file: 'characters/rab-form.glb', girth: 1.420, headScale: 1.198, frontZ: 0.200 },
  { name: 'slab', file: 'characters/slab-form.glb', girth: 1.195, headScale: 1.204, frontZ: 0.150 },
  { name: 'runt', file: 'characters/runt-form.glb', girth: 0.918, headScale: 1.470, frontZ: 0.093 },
  { name: 'stoop', file: 'characters/morag-form.glb', girth: 0.712, headScale: 1.485, frontZ: 0.187 },
  { name: 'spindle', file: 'characters/kenneth-form.glb', girth: 0.680, headScale: 1.357, frontZ: 0.083 },
];

// How far in front of the belly the comic plane hangs, in metres. The doll
// used bodyD * 0.5 + 0.17 and the 0.17 is that same clearance, kept so the
// comic reads at the same standoff whichever figure is wearing it.
const COMIC_CLEARANCE = 0.17;

// E3c — the per-vendor colour note, which the scarf used to carry and cannot
// (see the swap below: two of the five archetypes have no neck).
//
// The note is taken off the vendor's OWN SCARF MATERIAL rather than by
// re-hashing its name. Same reason measure() reads world matrices: a mesh that
// recomputed the hash would agree with the doll by construction, whereas this
// one agrees because it read what the doll is actually wearing — and E3d's LOD
// swap then cannot change a vendor's colour mid-street.
//
// Applied as CHROMA ONLY. The scarf colours are dark (average ~0.2), and
// multiplying an albedo map by one directly would both repaint and blacken the
// figure. Normalising each note by its own average leaves a hue with no
// luminance, so the tint shifts what colour a vendor is without changing how
// bright.
//
// And EQUALISED, which the scarf never needed to be. The six palette entries
// carry wildly different amounts of colour — 0x6b3328's deviation from neutral
// is 2.7x 0x2e4640's — which is fine on a 9cm band and not fine on a whole
// figure: photographed side by side, the red vendor read as a different coat
// and the green one was indistinguishable from no tint at all. So each note's
// direction is kept and its LENGTH is set to one value, and every vendor is
// then equally legible. 0.27 is the red note's own former strength, i.e. the
// one that was judged to read as a coat rather than a costume.
const TINT_STRENGTH = 0.27;
// A separate, deterministic per-vendor brightness spread, so two vendors on the
// same note are not the same figure twice. Small: past about 0.2 the darker end
// starts reading as a different, unlit material rather than a different coat.
const TINT_LEVEL = 0.14;

// Population spreads of the catalog's 124 triples, so the two axes below are
// compared in like units rather than raw ones.
const GIRTH_SD = 0.2848;
const HEAD_SD = 0.1239;

// How much the head axis is allowed to pull selection away from the girth
// match. This is the one genuinely awkward ruling in E3b, and it is a measured
// knee rather than a taste:
//
// A Trellis mesh is a SINGLE primitive with no separable head, so headScale —
// 13 distinct values, and near-uncorrelated with height (r=0.03) or girth
// (r=0.23), so real variation rather than a restatement of the other two — has
// nowhere to go except selection. Girth has two outlets, selection and the
// residual scale; the head has one.
//
// Weight it at 0 and the assignment is actively WRONG, not merely blind: the
// correlation between a vendor's headScale and its archetype's comes out at
// -0.25, so big-headed vendors are systematically handed the no-neck
// archetypes. Weight it at 1 and worst-case squash goes to 1.69.
//
//   weight  worst squash  head correlation
//     0        1.14           -0.25
//     0.15     1.25            0.07
//     0.25     1.25            0.18
//     0.40     1.63            0.34
//     1.00     1.69            0.66
//
// 0.25 is the knee: it buys the anti-correlation out for nothing (same 1.25
// worst case as 0.15) and the next step up costs 30% more squash.
const HEAD_WEIGHT = 0.25;

export function selectArchetype(build) {
  const b = build || DEFAULT_BUILD;
  let best = ARCHETYPES[0];
  let bestD = Infinity;
  for (const a of ARCHETYPES) {
    const dg = (b.girth - a.girth) / GIRTH_SD;
    const dh = (b.headScale - a.headScale) / HEAD_SD;
    const d = dg * dg + HEAD_WEIGHT * dh * dh;
    if (d < bestD) { bestD = d; best = a; }
  }
  return best;
}

// The per-vendor transform, as a pure function so the gate can measure the
// whole population's distortion without booting a scene.
//
// `height` is the doll's own top — not a constant. E3a normalised every
// archetype to a flat 1.9m and that flattened exactly the height contrast the
// set was chosen for: Runt stood as tall as Slab. Taking it from vendorDims()
// instead means the mesh occupies the doll's silhouette exactly, which is also
// what stops E3d's LOD swap popping.
//
// `squash` is the residual only. It multiplies X and Z equally, so a vendor is
// never squeezed in one horizontal axis and not the other — the distortion is
// always "wider or narrower than this archetype", never "flattened".
export function vendorTransform(build) {
  const b = build || DEFAULT_BUILD;
  const arch = selectArchetype(b);
  const height = vendorDims(b).headTopY;
  return { arch, height, squash: b.girth / arch.girth };
}

export function buildCharacters(assets, world, scene, npcs) {
  const isLocal = typeof location !== 'undefined' && ['localhost', '127.0.0.1'].includes(location.hostname);
  const enabled = (isLocal && typeof window !== 'undefined' && window.__mcgrotForceCharacters != null)
    ? !!window.__mcgrotForceCharacters
    : CHARACTERS_ENABLED;
  // The tint's own control, localhost-only like the flag above. It exists so
  // the gate can boot the SAME build both ways and attribute a draw-call or
  // material count to the tint rather than to a number recorded on another day.
  // Declared BEFORE the early return below, which reads it — putting it after
  // threw a temporal-dead-zone ReferenceError on the shipped path, i.e. every
  // boot, and the whole scene failed to come up.
  const tinted = (isLocal && typeof window !== 'undefined' && window.__mcgrotForceTint != null)
    ? !!window.__mcgrotForceTint
    : true;

  if (!enabled) return { enabled, tinted, loaded: () => 0, assigned: 0, counts: {} };

  const list = npcs && Array.isArray(npcs.npcs) ? npcs.npcs : [];
  if (!list.length) return { enabled, tinted, loaded: () => 0, assigned: 0, counts: {} };

  // Each mesh is parented to its VENDOR's group rather than to a characters
  // group of its own: it then inherits the idle sway and the street-facing yaw
  // for free, and E3c's body-lean tell and E3d's LOD swap both act on the same
  // transform the doll already uses.
  //
  // Assign first, load second: one fetch per archetype however many vendors
  // want it, and a vendor whose archetype fails to load simply keeps its doll.
  const wanted = new Map();
  for (const npc of list) {
    const t = vendorTransform(npc.build);
    // Tagged on the vendor so a gate or a judging capture can ask which
    // archetype and how much squash any given NPC ended up with, without
    // re-deriving the selection and risking measuring a second copy of it.
    npc.archetype = t.arch.name;
    npc.squash = t.squash;
    if (!wanted.has(t.arch.name)) wanted.set(t.arch.name, { arch: t.arch, npcs: [] });
    wanted.get(t.arch.name).npcs.push({ npc, ...t });
  }

  const loader = new GLTFLoader();
  const instances = [];
  let loaded = 0;

  for (const { arch, npcs: members } of wanted.values()) {
    loader
      .loadAsync(assetUrl(assets, arch.file))
      .then((gltf) => {
        const proto = normalise(gltf.scene);
        // The prototype's own width once it is 1.0 tall — the denominator the
        // gate divides a rendered instance's aspect by to get its distortion.
        // Read off the LOADED asset rather than recomputed from ARCHETYPES, so
        // a gate built on it compares two independent things: what shipped in
        // the glb, and what is standing in the street.
        const ps = localSize(proto, proto);
        const protoAspect = ps.x / (ps.y || 1);
        // The UNTINTED colour, kept for the same reason: it is the control the
        // note gate divides by, and it must come off the prototype rather than
        // out of normalise()'s constant.
        let protoColor = null;
        proto.traverse((o) => { if (!protoColor && o.isMesh && o.material) protoColor = o.material.color.clone(); });
        for (const m of members) {
          // clone(true) shares geometry AND material with the prototype. The
          // geometry sharing is the whole economy of this file and stays: one
          // archetype is one buffer however many vendors stand on it.
          //
          // The MATERIAL sharing is what E3c spends. E3b kept it deliberately —
          // the crowd shot had to judge whether scaling ALONE closes the 24.8x
          // reuse gap, and a tint pass would have hidden the answer. It closed
          // it, so the note can go back on. That is 124 materials instead of 5;
          // measured cost in docs/VALIDATION.md § E3c.
          const inst = proto.clone(true);
          // Named because normalise() leaves it as the ONE frame with a
          // physical meaning: unit-tall, feet at y=0, then scaled by the
          // vendor's height. Its local (0,1,0) is the figure's head top, which
          // is the point a tell or an LOD swap has to be measured at — the
          // inner glb meshes carry Trellis's own arbitrary centring and reading
          // a distance off one of those is meaningless.
          inst.name = 'vendor-mesh';
          if (tinted) tintInstance(inst, m.npc);
          inst.scale.set(m.height * m.squash, m.height, m.height * m.squash);
          m.npc.group.add(inst);
          for (const part of m.npc.dollBody || []) part.visible = false;
          // THE SCARF DOES NOT SURVIVE THE SWAP. The E3 plan kept it as the
          // per-vendor colour note, but a neck-height accessory needs a neck
          // and two of the five archetypes have not got one: measured with
          // glb-proportions, Slab's and Stoop's width never dips between
          // shoulder and head, so the collar search returns the top of its own
          // search range rather than a collar. Placed at the doll's height it
          // reads as a gag across the mouth; placed at the measured "collar" it
          // sits in Morag's hair. So the colour note comes from the per-vendor
          // tint above (the wreckify() pattern) instead — a change to the E3
          // plan, not an omission from it. E3c is where that landed.
          if (m.npc.scarf) m.npc.scarf.visible = false;
          // The comic only needs Z. Its height and aspect are the comic's own
          // and stay untouched; `squash` is in there because a widened mesh has
          // a proportionally deeper belly too.
          if (m.npc.comicMesh) {
            m.npc.comicMesh.position.z = arch.frontZ * m.height * m.squash + COMIC_CLEARANCE;
          }
          instances.push({ npc: m.npc, arch, inst, protoAspect, protoColor });
          loaded++;
        }
      })
      .catch(() => null); // assets absent (single-file artifact) — same as cars.js
  }

  const counts = {};
  for (const [name, w] of wanted) counts[name] = w.npcs.length;
  return { enabled, tinted, loaded: () => loaded, assigned: list.length, counts, measure };

  // What is actually standing in the street, per vendor, in plain numbers.
  //
  // Everything here is read off world matrices and geometry — nothing recomputes
  // the selection or the scale. That is the point: a gate that called
  // vendorTransform() again would pass whether or not the scene ever used it.
  // `dollTop` in particular comes from the hidden box meshes' own geometry, so
  // the height claim is checked against a second, independently-built figure
  // rather than against the formula that positioned the first.
  function measure() {
    return instances.map(({ npc, arch, inst, protoAspect, protoColor }) => {
      // In the VENDOR's frame, not the world's. Leith Walk curves, so every
      // vendor faces a slightly different way, and a world-axis-aligned box
      // reads a figure turned side-on as its depth rather than its width. That
      // mistake made the same crowd look 0.66-1.48 distorted instead of the
      // 0.74-1.25 it is — the yaw swamping the signal, exactly the shape of
      // error the verification contract keeps warning about.
      const size = localSize(inst, npc.group);
      let dollTop = 0;
      for (const part of npc.dollBody || []) {
        if (!part.geometry) continue;
        part.geometry.computeBoundingBox();
        dollTop = Math.max(dollTop, part.geometry.boundingBox.max.y + part.position.y);
      }
      // E3c's colour note, reported as two INDEPENDENTLY-SOURCED chroma
      // vectors: what this mesh's material actually ended up with, and what
      // this vendor's scarf is actually wearing. A gate compares them. Both
      // are read off live materials — neither is the constant the tint was
      // computed from, so a build that computed a beautiful note and applied
      // it to the wrong vendor still fails.
      //
      // The mesh side is divided by the UNTINTED prototype's own colour first,
      // so what the gate sees is the tint's contribution alone rather than the
      // tint plus whatever albedo factor the glb shipped with.
      let meshMat = null;
      inst.traverse((o) => { if (!meshMat && o.isMesh && o.material) meshMat = o.material; });
      const scarfCol = npc.scarf && npc.scarf.material ? npc.scarf.material.color : null;
      const applied = meshMat && protoColor ? new THREE.Color(
        meshMat.color.r / (protoColor.r || 1),
        meshMat.color.g / (protoColor.g || 1),
        meshMat.color.b / (protoColor.b || 1),
      ) : null;
      return {
        name: npc.name,
        archetype: arch.name,
        meshTop: size.y,
        dollTop,
        // 1.0 = this vendor is wearing its archetype's own proportions.
        distortion: (size.x / (size.y || 1)) / (protoAspect || 1),
        materialId: meshMat ? meshMat.uuid : null,
        meshNote: applied ? chroma(applied) : null,
        scarfNote: scarfCol ? chroma(scarfCol) : null,
      };
    });
  }
}

// A colour reduced to its hue, as a plain array. Both sides of the note gate
// go through here, so a brightness difference (which the tint deliberately
// adds, per vendor) cannot be mistaken for a mismatched note.
function chroma(c) {
  const avg = (c.r + c.g + c.b) / 3;
  return avg > 0 ? [c.r / avg, c.g / avg, c.b / avg] : [1, 1, 1];
}

// Give one vendor's mesh its own material, carrying its own colour note.
//
// The map is not cloned with it — `Material.clone()` copies the texture
// REFERENCE, so 124 materials still share the one archetype texture. What the
// clone costs is 124 sets of uniforms where there were 5, not 124 textures.
function tintInstance(root, npc) {
  const src = npc.scarf && npc.scarf.material ? npc.scarf.material.color : null;
  if (!src) return;
  const c = src.clone();
  const avg = (c.r + c.g + c.b) / 3;
  if (avg > 0) c.multiplyScalar(1 / avg);
  // Direction kept, length set to TINT_STRENGTH. `c` is now a multiplier
  // averaging 1.0, so it recolours without darkening.
  const dev = [c.r - 1, c.g - 1, c.b - 1];
  const len = Math.hypot(dev[0], dev[1], dev[2]);
  const k = len > 0 ? TINT_STRENGTH / len : 0;
  const mul = new THREE.Color(1 + dev[0] * k, 1 + dev[1] * k, 1 + dev[2] * k);

  // Brightness has no doll counterpart to read, so this one IS a name hash —
  // the same 31x rolling hash the scarf picks its colour with, shifted so a
  // vendor's brightness is not a restatement of its note.
  let h = 0;
  for (const ch of npc.name || '') h = (h * 31 + ch.charCodeAt(0)) | 0;
  const level = 1 + (((Math.abs(h) >> 7) % 1000) / 1000 - 0.5) * 2 * TINT_LEVEL;

  mul.multiplyScalar(level);
  root.traverse((o) => {
    if (!o.isMesh || !o.material) return;
    o.material = o.material.clone();
    o.material.color.multiply(mul);
  });
}

// The bounding size of `root`'s geometry expressed in `frame`'s coordinates.
//
// three's Box3.setFromObject only does world space, and applying an inverse
// afterwards does not undo it — a Box3 grows to the axis-aligned hull each
// time it is transformed, so rotate-then-unrotate leaves it bigger than it
// started. Composing the two matrices FIRST and transforming once is what
// makes this exact.
const _m = new THREE.Matrix4();
const _box = new THREE.Box3();
const _acc = new THREE.Box3();
function localSize(root, frame) {
  frame.updateWorldMatrix(true, false);
  root.updateWorldMatrix(false, true);
  _acc.makeEmpty();
  const inv = _m.copy(frame.matrixWorld).invert();
  const toFrame = new THREE.Matrix4();
  root.traverse((o) => {
    if (!o.isMesh || !o.geometry) return;
    o.geometry.computeBoundingBox();
    _box.copy(o.geometry.boundingBox).applyMatrix4(toFrame.multiplyMatrices(inv, o.matrixWorld));
    _acc.union(_box);
  });
  return _acc.getSize(new THREE.Vector3());
}

// Put the mesh in a unit frame: 1.0 tall, feet on y=0, centred on x/z, facing
// the doll's +Z. Everything per-vendor is then a scale on the instance, so the
// prototype is prepared once and cloned 124 times.
//
// The material swap is not an optimisation, it is the style bet. Trellis bakes
// lighting into the albedo it generates — the input image's soft frontal key is
// painted in — and MeshStandardMaterial would light that already-lit texture
// again under ACES at exposure 1.46. The same double-lighting failure
// docs/STYLE.md records for canvas bakes. Lambert with a dark tint multiply is
// what every other prop in this scene uses, and it is what lets the street's
// own light and preset `b` do the work.
function normalise(root) {
  root.traverse((o) => {
    if (!o.isMesh || !o.material) return;
    const src = o.material;
    o.material = new THREE.MeshLambertMaterial({
      map: src.map || null,
      // Tint far darker than looks right: ACES lifts any mid multiply straight
      // back to showroom-bright, which is the note cars.js carries too.
      color: (src.color ? src.color.clone() : new THREE.Color(0xffffff)).multiplyScalar(0.42),
    });
  });

  const box = new THREE.Box3().setFromObject(root);
  const size = box.getSize(new THREE.Vector3());
  const centre = box.getCenter(new THREE.Vector3());
  const s = 1 / (size.y || 1);
  root.scale.setScalar(s);
  root.position.set(-centre.x * s, -box.min.y * s, -centre.z * s);

  const wrapper = new THREE.Group();
  wrapper.add(root);
  // NO yaw correction. Trellis already reconstructs the input photograph
  // facing +Z, which is the doll's own front, so a mesh dropped into the
  // vendor's group inherits the right facing.
  //
  // Worth the comment because the first crowd shot looked like it needed one:
  // every mesh had its back to the camera, and a 180-degree flip duly made
  // them all turn round. The dolls had their backs to the camera too — the
  // measurement (dot of a vendor's forward against the direction to the
  // camera: -1.00, -0.78, -0.45 at the three street bookmarks) is what caught
  // it. The "fix" had rotated the whole crowd away from the street it faces.
  return wrapper;
}
