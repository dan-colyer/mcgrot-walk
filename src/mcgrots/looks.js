// The SCENE-SIDE arm of a style. G2.
//
// style.js does things to the finished frame. This does things to the scene
// before it is drawn, and the two candidates that came out of actually reading
// the comics both live here rather than there:
//
//   S1 inked cel     ink outline + two flat tones per surface
//   S2 aerial flatten  S1, plus line/saturation/contrast falling off with depth
//
// WHY NOT A POST PASS, given the street already has a grade. Because a
// screen-space edge filter is a different thing from an ink line, and the
// street measured that difference and rejected it (docs/STYLE.md § "Line
// weight, and why there is none"). Two of that ruling's grounds were specific
// to the street and DO NOT CARRY HERE, which is the whole reason this is worth
// building rather than inheriting:
//
//   - "no depth or normal buffer to derive line weight from" — true of a
//     screen-space pass. An inverted hull needs neither: it is geometry, and
//     the normal is an attribute the mesh already has.
//   - "Sobel over photographed brick turns mullions to mush" — the street's
//     façades are photographs. This pitch has none. Nothing here is a photo.
//
// The third ground, that outlines compete with what the player is looking at,
// is a real judgement and still open. It is what the bake-off is for.
//
// THE INVARIANT, same shape as style.js's: install/uninstall must be exactly
// reversible. Every material this replaces is kept and put back by reference,
// and every hull it adds is removed and disposed. A look that cannot prove it
// is absent when off cannot be trusted to be the only thing that changed when
// on — and unlike a post pass, this one MUTATES THE SCENE, so it is the arm
// where a leak would actually be hard to see.

import * as THREE from 'three';

// Two bands, hard boundary. The comics have a lit side and a shade side and
// nothing between them; a three-band ramp was tried on paper and the middle
// band reads as a gradient, which is the thing being avoided.
//
// NearestFilter is load-bearing. On LinearFilter this is a smooth ramp and the
// whole look silently becomes ordinary Lambert with extra steps.
// SHADE_BAND was 90 on the first build and it flattened the pitch: the ground
// went from near-black under Lambert to a mid brown, because a two-band ramp
// replaces the whole falloff with one value and 90/255 is a 35% floor under
// every unlit surface in the scene. The comics' shade side is dark — dark
// enough that a figure's shaded half sits near the key's darkest swatch — so
// this is 52, which lands the shade band on the dark end rather than the mid.
//
// It is a floor, not a taste: docs/STYLE.md's rule is that this world is dark
// and the print is a texture on it, and a ramp that lifts every shadow to a
// third of full is the same mistake as a grade that lifts the game toward the
// comics' lightness. That was rejected twice on the street.
const SHADE_BAND = 52;

function twoBandRamp() {
  const data = new Uint8Array([SHADE_BAND, SHADE_BAND, SHADE_BAND, 255, 255, 255, 255, 255]);
  const tex = new THREE.DataTexture(data, 2, 1, THREE.RGBAFormat);
  tex.minFilter = THREE.NearestFilter;
  tex.magFilter = THREE.NearestFilter;
  tex.generateMipmaps = false;
  tex.needsUpdate = true;
  return tex;
}

// The aerial ramp, shared by the fill and the outline so they cannot disagree.
// NEAR is roughly the anchor-to-van distance and FAR is the far side of the
// junction — i.e. the cast stays fully inked and the massing washes out, which
// is what the pages do.
export const AERIAL = { near: 12, far: 95, wash: 0.82, desaturate: 0.85 };

// Injected into whatever fragment shader three built, AFTER lighting. Written
// against `vViewPosition`, which MeshToonMaterial provides — so this rides on
// three's own chunks instead of reimplementing them, and keeps fog, shadows
// and colour management working.
const AERIAL_FRAG = /* glsl */`
  float aerialD = length(vViewPosition);
  float aerial = smoothstep(uAerialNear, uAerialFar, aerialD) * uAerialAmount;

  // Desaturate toward the frame's own luminance, then lift toward paper. Two
  // separate moves because the pages do two separate things: the far tenements
  // lose their colour AND lose their tonal range, and doing only one of them
  // reads as fog rather than as flat wash.
  vec3 aerialLit = gl_FragColor.rgb;
  float aerialL = dot(aerialLit, vec3(0.2126, 0.7152, 0.0722));
  aerialLit = mix(aerialLit, vec3(aerialL), aerial * uAerialDesat);
  aerialLit = mix(aerialLit, uAerialPaper, aerial * uAerialWash);
  gl_FragColor.rgb = aerialLit;
`;

// Push the vertex out along its normal, in VIEW space, scaled by view depth so
// the line holds a roughly constant width on screen instead of vanishing at
// distance. Injected by onBeforeCompile rather than written as a fresh
// ShaderMaterial for one reason and it is not style: three's skinning happens
// in `<skinning_vertex>`, and a from-scratch shader would have to reimplement
// it. The cast is SkinnedMeshes (G1's A1), so an outline that cannot skin is an
// outline that floats beside the character while it walks.
const HULL_VERT_HEAD = /* glsl */`
  uniform float uThickness;      // LINE WIDTH IN PIXELS
  uniform float uViewportH;
  uniform float uAerialNear;
  uniform float uAerialFar;
  uniform float uAerialAmount;
`;

// THE NORMAL IS COMPUTED HERE UNDER PRIVATE NAMES, and that is the third
// attempt rather than the tidy one. MeshBasicMaterial is not lit, so whether
// three's vertex shader already has a normal in it depends on the VARIANT:
//
//   no skinning  -> `objectNormal` undeclared        ("undeclared identifier")
//   skinning     -> `objectNormal`, `skinMatrix` and `transformedNormal` all
//                   already defined                  ("redefinition")
//
// Both measured, one after the other, from the same injection. So neither
// including three's normal chunks nor omitting them compiles in both cases, and
// anything conditional on a define here is guessing at three's internals. Own
// names depend on nothing but the attributes and uniforms three always
// provides, and the skinned branch reuses the bone matrices `<skinbase_vertex>`
// has already put in scope.
const HULL_VERT_BODY = /* glsl */`
  vec3 hullObjN = vec3(normal);
  #ifdef USE_SKINNING
    mat4 hullSkin = mat4(0.0);
    hullSkin += skinWeight.x * boneMatX;
    hullSkin += skinWeight.y * boneMatY;
    hullSkin += skinWeight.z * boneMatZ;
    hullSkin += skinWeight.w * boneMatW;
    hullObjN = (bindMatrixInverse * hullSkin * bindMatrix * vec4(hullObjN, 0.0)).xyz;
  #endif

  vec4 hullView = modelViewMatrix * vec4(transformed, 1.0);
  vec3 hullN = normalize(normalMatrix * hullObjN);
  float hullD = length(hullView.xyz);

  // Line weight falls off with distance under S2 and is flat under S1. Same
  // ramp as the fill, so a surface cannot lose its colour while keeping its
  // line — which is exactly the failure that would make this read as a filter.
  float hullFade = 1.0 - smoothstep(uAerialNear, uAerialFar, hullD) * uAerialAmount;

  // THE PUSH IS DERIVED, NOT TUNED, and that is a correction. The first build
  // used a hand-picked coefficient times view depth, which came to ~7.5 cm of
  // push on a 1.72 m figure — wider than the character's own limbs, so the hull
  // engulfed it and rendered a solid black blob. The capture is in the G2
  // folder; nothing about the technique was wrong, the number was.
  //
  // A view-space offset d metres at depth z lands Δpx pixels from its vertex:
  //     Δndc = P[1][1] * δ / z        (clip.y = P11*view.y, clip.w = z)
  //     Δpx  = Δndc * height / 2
  // so for a line of N pixels, δ = 2 * N * z / (P11 * height). Solving it
  // rather than fitting it means the line is N pixels at ANY distance, fov or
  // resolution, and the gate suite's 1280x720 cannot flatter it.
  float hullPush = 2.0 * uThickness * hullD / (projectionMatrix[1][1] * uViewportH);
  hullView.xyz += hullN * hullPush * hullFade;
  gl_Position = projectionMatrix * hullView;
`;

const HULL_COLOUR = 0x211f1c;   // STYLE.md's near-black, warmed a touch toward
                                // the page. Pure #212020 on this ground reads
                                // as a digital key line rather than as ink.

// A look is installed against a scene and reverses exactly. `aerial` is the
// only difference between S1 and S2, which is deliberate: it makes S1 the
// control for S2 rather than a second independent thing that also looks
// different, so a judgement between them isolates the depth ramp.
export const LOOKS = [
  { id: 'inked', label: 'S1 · Inked cel', cel: true, aerial: 0 },
  { id: 'aerial', label: 'S2 · Aerial flatten', cel: true, aerial: 1 },
];

export const lookById = (id) => LOOKS.find((l) => l.id === id) || null;

export function createLooks(scene) {
  const ramp = twoBandRamp();
  let installed = null;          // the look id currently applied
  const swapped = [];            // { mesh, material } — originals, by reference
  const hulls = [];              // meshes added to the scene, ours to dispose
  const uniforms = {
    // Pixels. The corpus draws a heavy line, not a hairline — measured at
    // roughly 0.5% of the page's shorter edge — but a figure here is a fraction
    // of the frame where a comic panel's figure fills it, so this is 2.2px
    // rather than the ~3.5 that a literal transfer would give.
    uThickness: { value: 2.2 },
    uViewportH: { value: 720 },
    uAerialNear: { value: AERIAL.near },
    uAerialFar: { value: AERIAL.far },
    uAerialAmount: { value: 0 },
    uAerialDesat: { value: AERIAL.desaturate },
    uAerialWash: { value: AERIAL.wash },
    uAerialPaper: { value: new THREE.Color(0xd8c69b) },   // `dock` key's paper
  };

  // Materials this look created, so uninstall can dispose them. The originals
  // are NEVER disposed — they are going back on.
  const owned = [];

  function celFor(src) {
    const m = new THREE.MeshToonMaterial({
      color: src.color ? src.color.clone() : new THREE.Color(0xffffff),
      map: src.map || null,
      gradientMap: ramp,
      // flatShading survives from the source: the placeholder van and the
      // massing are authored faceted, and smoothing them here would be this
      // module quietly restyling geometry it does not own.
      flatShading: !!src.flatShading,
    });
    m.name = `cel:${src.name || 'unnamed'}`;
    m.onBeforeCompile = (shader) => {
      shader.uniforms.uAerialNear = uniforms.uAerialNear;
      shader.uniforms.uAerialFar = uniforms.uAerialFar;
      shader.uniforms.uAerialAmount = uniforms.uAerialAmount;
      shader.uniforms.uAerialDesat = uniforms.uAerialDesat;
      shader.uniforms.uAerialWash = uniforms.uAerialWash;
      shader.uniforms.uAerialPaper = uniforms.uAerialPaper;
      shader.fragmentShader = shader.fragmentShader
        .replace('void main() {', `
          uniform float uAerialNear;
          uniform float uAerialFar;
          uniform float uAerialAmount;
          uniform float uAerialDesat;
          uniform float uAerialWash;
          uniform vec3  uAerialPaper;
          void main() {`)
        // AFTER tone mapping and colour space, BEFORE fog — the same ordering
        // constraint the street's post.js documents. `dithering_fragment` is
        // the last chunk in the chain, so injecting before it puts this at the
        // end without having to name a chunk that might not be present.
        .replace('#include <dithering_fragment>', `${AERIAL_FRAG}
          #include <dithering_fragment>`);
    };
    // Two materials with identical source but different injected code must not
    // share a program. three keys the cache on this string.
    m.customProgramCacheKey = () => 'mcgrots-cel';
    owned.push(m);
    return m;
  }

  function hullFor(mesh) {
    const m = new THREE.MeshBasicMaterial({ color: HULL_COLOUR });
    m.side = THREE.BackSide;
    m.fog = false;    // ink does not sit behind the weather; the page is flat.
    m.onBeforeCompile = (shader) => {
      shader.uniforms.uThickness = uniforms.uThickness;
      shader.uniforms.uViewportH = uniforms.uViewportH;
      shader.uniforms.uAerialNear = uniforms.uAerialNear;
      shader.uniforms.uAerialFar = uniforms.uAerialFar;
      shader.uniforms.uAerialAmount = uniforms.uAerialAmount;
      shader.vertexShader = shader.vertexShader
        .replace('void main() {', `${HULL_VERT_HEAD}
          void main() {`)
        // project_vertex is where three writes gl_Position, and it comes AFTER
        // skinning_vertex has moved `transformed` and skinnormal_vertex has
        // moved `objectNormal`. Replacing it is what makes this work on a
        // SkinnedMesh at all.
        .replace('#include <project_vertex>', HULL_VERT_BODY);
    };
    m.customProgramCacheKey = () => 'mcgrots-hull';
    owned.push(m);

    // Share the GEOMETRY, never clone it. The cast is ~5,254 triangles each and
    // a cloned buffer per hull would double the scene's memory for a line.
    const hull = mesh.isSkinnedMesh
      ? new THREE.SkinnedMesh(mesh.geometry, m)
      : new THREE.Mesh(mesh.geometry, m);
    hull.name = `hull:${mesh.name || 'unnamed'}`;
    hull.renderOrder = -1;
    hull.frustumCulled = mesh.frustumCulled;
    if (mesh.isSkinnedMesh) {
      // Same skeleton by reference, so the outline is posed by the same bones
      // on the same frame. A second skeleton would be a frame behind whenever
      // update order changed, which is the kind of fault that only shows while
      // walking.
      hull.bind(mesh.skeleton, mesh.bindMatrix);
      hull.bindMode = mesh.bindMode;
    }
    return hull;
  }

  // Only meshes that are part of the PICTURE get a look. The anchor markers are
  // UI — inking a click target would be inking the cursor.
  function eligible(obj) {
    if (!obj.isMesh) return false;
    if (obj.name.startsWith('hull:')) return false;
    if (obj.name.startsWith('marker:')) return false;
    let p = obj.parent;
    while (p) {
      if (p.name === 'anchor-markers') return false;
      p = p.parent;
    }
    return true;
  }

  // NOT EVERYTHING THAT GETS CEL-SHADED GETS AN OUTLINE, and the first build
  // inked everything. The result is in the G2 captures: the ground plane's own
  // inverted hull expanded to metres and filled two-thirds of the frame with
  // black. An inverted hull assumes a closed solid seen from outside; a 400 m
  // ground plane is neither, so its backface lands in front of the camera.
  //
  // The rule is not a workaround for that, though it fixes it. It is what the
  // corpus does: in the comics the ground and the sky carry NO line, near
  // figures and props carry a heavy one, and the far skyline carries none
  // either. Outline is for objects, not for surroundings — which is the same
  // observation S2 makes about distance, applied to scale.
  //
  // Measured by bounding sphere rather than by name, so a prop added in G3
  // inherits the right behaviour without editing this list. The van is ~3 m of
  // radius and the massing is ~90 m; the threshold has a wide gap to sit in.
  const INK_MAX_RADIUS = 12;

  function inkable(mesh) {
    if (!mesh.geometry) return false;
    if (!mesh.geometry.boundingSphere) mesh.geometry.computeBoundingSphere();
    const r = mesh.geometry.boundingSphere?.radius ?? Infinity;
    // Scale counts: the cast's geometry is authored at unit height and scaled
    // to 1.72 m by makeActor, so raw geometry radius under-reports it.
    const s = mesh.getWorldScale(new THREE.Vector3());
    return r * Math.max(s.x, s.y, s.z) <= INK_MAX_RADIUS;
  }

  function uninstall() {
    for (const h of hulls) {
      h.parent?.remove(h);
      // Geometry is SHARED with the real mesh — disposing it here would take
      // the character with it. Only the material is ours.
      h.material.dispose();
    }
    hulls.length = 0;
    for (const { mesh, material } of swapped) mesh.material = material;
    swapped.length = 0;
    for (const m of owned) m.dispose();
    owned.length = 0;
    uniforms.uAerialAmount.value = 0;
    installed = null;
  }

  function install(id) {
    const look = lookById(id);
    if (installed === id) return !!look;
    uninstall();
    if (!look) return false;

    const targets = [];
    scene.traverse((o) => { if (eligible(o)) targets.push(o); });

    for (const mesh of targets) {
      if (look.cel && mesh.material && !Array.isArray(mesh.material)) {
        swapped.push({ mesh, material: mesh.material });
        mesh.material = celFor(mesh.material);
      }
    }
    // Hulls are added in a second pass. Adding to the scene graph while
    // traversing it is how you end up outlining your own outlines.
    //
    // PARENTED TO THE MESH, not to the mesh's parent, and with no local
    // transform of its own. The first build added each hull as a SIBLING, which
    // silently drops the mesh's own local offset — the van's body sits at
    // y = 1.2 inside its group, so its outline was drawn 1.2 m underground, and
    // every other hull was displaced by whatever local transform its mesh had.
    // What survived was a sliver of z-fighting at one edge of the van, which
    // looked like a thin outline and measured 0.03% ink. Being a child makes
    // the world transform identical by construction rather than by copying
    // three fields that can drift.
    for (const mesh of targets) {
      if (!inkable(mesh)) continue;
      const hull = hullFor(mesh);
      mesh.add(hull);
      hulls.push(hull);
    }

    uniforms.uAerialAmount.value = look.aerial;
    installed = id;
    return true;
  }

  return {
    get look() { return installed; },
    install,
    uninstall,
    uniforms,
    // The line is specified in pixels, so it has to be told how many there are.
    // Driven from main.js's viewport apply, which is also where S4's panel inset
    // changes the drawing buffer — the two must not disagree or the outline
    // widens by the margin the moment the page is switched on.
    setViewportHeight(h) { uniforms.uViewportH.value = Math.max(1, h); },
    // Counts, so a gate can assert the look is actually present rather than
    // assert that install() returned true. `install` returning true proves the
    // function ran; these prove the scene changed.
    stats: () => ({
      look: installed,
      hulls: hulls.length,
      swapped: swapped.length,
      aerial: uniforms.uAerialAmount.value,
    }),
  };
}
