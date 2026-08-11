// The style pass. G2's bake-off machinery.
//
// NOT AN EffectComposer, and that is inherited knowledge rather than a
// preference. `src/post.js` (the paused street) documents the structural
// reason at length, and two street milestones were spent chasing its symptom
// as if it were a bug in a pass:
//
//   WebGLRenderer chooses a material's tone-mapping and output-colour-space
//   chunks from whether it is drawing into a RENDER TARGET, not from that
//   target's properties. So the moment a composer chain has a second pass, the
//   whole scene is drawn un-tone-mapped and un-encoded — and because three's
//   chunk order puts fog AFTER both, fog compositing also moves out of
//   post-tone-map sRGB space into linear space.
//
// So the scene renders straight to the canvas exactly as it does with style
// off, the finished 8-bit sRGB frame is copied into a FramebufferTexture, and
// that is redrawn through one full-screen RawShaderMaterial. RawShaderMaterial
// gets no injected chunks, so there is no tone mapping or colour conversion in
// the pass to double up on.
//
// Everything below is therefore authored in DISPLAY space — sRGB-encoded and
// tone-mapped — which is why the numbers read like a grading panel's. A
// halftone, a misregistered ink plate and a posterisation are all things done
// to a printed image, not to scene-referred light, so this is also where they
// belong conceptually.
//
// THE INVARIANT, and it is the gate: at style `none` the output is
// BIT-IDENTICAL to renderer.render(). A style pass that cannot prove it is a
// no-op when off cannot be trusted to be the only thing that changed when on.

import * as THREE from 'three';

// The twelve swatches k-means'd from 60 comics in CIELAB — docs/STYLE.md.
// Posterisation quantises to THESE rather than to an even cube, so the result
// is on-palette by construction instead of by tuning.
export const PALETTE = [
  [0xe4, 0xd5, 0xa1], // cream — the paper
  [0x2e, 0x39, 0x1f], // deep olive
  [0x50, 0x47, 0x26], // dark brown — the workhorse shadow
  [0xa0, 0x8f, 0x51], // khaki gold
  [0x73, 0x71, 0x57], // olive grey
  [0x55, 0x5d, 0x29], // moss
  [0xac, 0xa0, 0x7c], // warm stone
  [0x7b, 0x68, 0x2e], // bronze
  [0xd3, 0xb0, 0x5a], // mustard
  [0x21, 0x20, 0x20], // near-black — a NEUTRAL, not a warm black
  [0xd6, 0xd7, 0xda], // near-white — the only cool colour with any share
  [0x8b, 0x4e, 0x28], // rust — the accent, 3.1%, the only strong hue
];

// id must be stable: the gate suite and the bake-off both address styles by it.
export const STYLES = [
  { id: 'none', label: 'None (control)', mode: 0 },
  { id: 'posterise', label: 'Posterised to the 12 swatches', mode: 1 },
  { id: 'riso', label: 'Risograph misregistration', mode: 2 },
];

export const styleById = (id) => STYLES.find((s) => s.id === id) || STYLES[0];

const VERT = `
attribute vec3 position;
attribute vec2 uv;
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 1.0);
}
`;

const FRAG = `
precision highp float;

uniform sampler2D tDiffuse;
uniform vec2  uResolution;
uniform int   uMode;
uniform float uStrength;     // 0 = provably neutral, 1 = as authored
uniform vec3  uPalette[12];
uniform float uRegister;     // ink plate offset, pixels
uniform float uHalftone;     // dot pitch, pixels
uniform float uGrain;

varying vec2 vUv;

float luma(vec3 c) { return dot(c, vec3(0.2126, 0.7152, 0.0722)); }

// Deterministic value noise. No uTime: a style is judged on stills AND on
// motion, and grain that crawls between frames makes a golden impossible.
float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}

// Nearest of the twelve measured swatches. Distance is weighted toward
// luminance because the corpus is a WARMTH axis rather than a spread of hue
// families (docs/STYLE.md rule 2) — matching on raw RGB distance drags mid
// stone toward moss.
vec3 nearestSwatch(vec3 c) {
  float best = 1e9;
  vec3 hit = c;
  for (int i = 0; i < 12; i++) {
    vec3 d = c - uPalette[i];
    float score = dot(d * vec3(1.0, 1.2, 0.8), d * vec3(1.0, 1.2, 0.8));
    if (score < best) { best = score; hit = uPalette[i]; }
  }
  return hit;
}

void main() {
  vec3 src = texture2D(tDiffuse, vUv).rgb;
  vec3 col = src;

  if (uMode == 1) {
    // POSTERISE. A halftone-ish dither before quantising, so a gradient breaks
    // into stipple rather than into bands. The threshold matrix is screen-space
    // and fixed, which is what makes it read as print rather than as noise.
    vec2 px = vUv * uResolution;
    float d = hash(floor(px / max(1.0, uHalftone)));
    col = clamp(col + (d - 0.5) * 0.10, 0.0, 1.0);
    col = nearestSwatch(col);
  } else if (uMode == 2) {
    // RISOGRAPH. Three ink plates pulled slightly out of register. The offset
    // scales with how DARK the pixel is, so the drift shows in the inked areas
    // and leaves the paper clean — a press misfeeds under load, and a uniform
    // offset reads as a cheap chromatic-aberration filter instead.
    float weight = 1.0 - luma(src);
    vec2 o = (uRegister * weight) / uResolution;
    float ink1 = 1.0 - luma(texture2D(tDiffuse, vUv + vec2( o.x,  o.y * 0.6)).rgb);
    float ink2 = 1.0 - luma(texture2D(tDiffuse, vUv + vec2(-o.x * 0.7, o.y)).rgb);
    float ink3 = 1.0 - luma(texture2D(tDiffuse, vUv + vec2( o.x * 0.2, -o.y)).rgb);

    // Paper first, then ink laid on it. Multiply, because that is what ink on
    // paper does — additive light would make the darks glow.
    vec3 paper = uPalette[0] * 1.04;
    vec3 plateA = mix(vec3(1.0), uPalette[9]  / max(vec3(0.001), paper), clamp(ink1, 0.0, 1.0)); // near-black
    vec3 plateB = mix(vec3(1.0), uPalette[8]  / max(vec3(0.001), paper), clamp(ink2 * 0.55, 0.0, 1.0)); // mustard
    vec3 plateC = mix(vec3(1.0), uPalette[11] / max(vec3(0.001), paper), clamp(ink3 * 0.40, 0.0, 1.0)); // rust
    col = paper * plateA * plateB * plateC;

    // Dot gain, on the same fixed lattice as the posterise dither.
    vec2 px = vUv * uResolution;
    float d = hash(floor(px / max(1.0, uHalftone)));
    col *= 1.0 - (d * uGrain);
  }

  // uStrength 0 must return the source EXACTLY, so the no-op is provable.
  gl_FragColor = vec4(mix(src, col, uStrength), 1.0);
}
`;

export function createStyle(renderer) {
  const size = renderer.getDrawingBufferSize(new THREE.Vector2());
  let texture = new THREE.FramebufferTexture(size.x, size.y);

  const uniforms = {
    tDiffuse: { value: texture },
    uResolution: { value: new THREE.Vector2(size.x, size.y) },
    uMode: { value: 0 },
    uStrength: { value: 1 },
    uPalette: { value: PALETTE.map(([r, g, b]) => new THREE.Vector3(r / 255, g / 255, b / 255)) },
    uRegister: { value: 3.2 },
    uHalftone: { value: 2.0 },
    uGrain: { value: 0.10 },
  };

  const material = new THREE.RawShaderMaterial({
    name: 'McGrotsStyle',
    uniforms,
    vertexShader: VERT,
    fragmentShader: FRAG,
    depthTest: false,
    depthWrite: false,
  });

  // One full-screen TRIANGLE, not a quad: the vertex shader ignores the camera
  // entirely, so no seam can appear where two triangles would meet.
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(
    new Float32Array([-1, -1, 0, 3, -1, 0, -1, 3, 0]), 3));
  geometry.setAttribute('uv', new THREE.BufferAttribute(
    new Float32Array([0, 0, 2, 0, 0, 2]), 2));
  const mesh = new THREE.Mesh(geometry, material);
  mesh.frustumCulled = false;
  const quadScene = new THREE.Scene();
  quadScene.add(mesh);
  const quadCamera = new THREE.Camera();

  let current = 'none';

  function resize() {
    const s = renderer.getDrawingBufferSize(new THREE.Vector2());
    if (s.x === uniforms.uResolution.value.x && s.y === uniforms.uResolution.value.y) return;
    texture.dispose();
    texture = new THREE.FramebufferTexture(s.x, s.y);
    uniforms.tDiffuse.value = texture;
    uniforms.uResolution.value.set(s.x, s.y);
  }

  return {
    get style() { return current; },
    setStyle(id) {
      const s = styleById(id);
      current = s.id;
      uniforms.uMode.value = s.mode;
    },
    setStrength(v) { uniforms.uStrength.value = v; },
    uniforms,
    resize,

    // Scene straight to the canvas, then the finished frame back through the
    // pass. `none` short-circuits entirely rather than running a shader that
    // happens to be a no-op — a passthrough that never executes cannot drift.
    render(scene, camera) {
      renderer.render(scene, camera);
      if (current === 'none' || uniforms.uStrength.value === 0) return;
      resize();
      renderer.copyFramebufferToTexture(texture);
      renderer.render(quadScene, quadCamera);
    },
  };
}
