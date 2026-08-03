// LDR post-processing — vignette, film grain, colour grade — applied to the
// finished frame, AFTER tone mapping and sRGB encoding.
//
// Deliberately NOT three's EffectComposer, and the reason is structural rather
// than a matter of tuning. WebGLRenderer picks a material's tone-mapping and
// output-colour-space chunks from whether it is drawing into a render target,
// not from the target's properties:
//
//   toneMapping      = material.toneMapped && currentRenderTarget === null
//                        ? renderer.toneMapping : NoToneMapping
//   outputColorSpace = currentRenderTarget === null
//                        ? renderer.outputColorSpace : workingColorSpace
//
// (three r185, WebGLPrograms.getParameters.) So the instant a composer chain
// has a second pass — the instant RenderPass writes to a buffer instead of the
// canvas — the whole scene is drawn un-tone-mapped and un-encoded. And because
// three's fragment chunk order is
//
//   opaque_fragment -> tonemapping_fragment -> colorspace_fragment -> fog_fragment
//
// fog is composited AFTER both. Routing the scene through a composer buffer
// therefore moves fog mixing out of post-tone-map sRGB space and into linear
// space, which is not what this project's weather palettes were authored
// against. No render-target format and no colourSpace tag can undo that: the
// decision is "is there a render target", full stop. Two milestones (E2d.1,
// E2d.1a) were spent chasing the symptom of this as if it were a bug in a pass.
//
// The fix is to not go through a composer. The scene renders straight to the
// canvas, byte-for-byte as it does with post off; the finished 8-bit sRGB frame
// is copied into a FramebufferTexture and redrawn through one full-screen
// RawShaderMaterial. RawShaderMaterial gets no injected chunks at all, so there
// is no tone mapping and no colour-space conversion in the post pass to double
// up on — and vignette, grain and grade are operations a colourist applies to a
// graded, displayed image anyway, not to scene-referred linear light.
//
// The invariant this buys, and which smoke gates in both directions:
//   at uStrength 0 the post frame is BIT-IDENTICAL to renderer.render(),
//   and at uStrength 1 it is measurably not.
//
// Not shipped here: ambient occlusion. AO needs scene depth and normals in
// linear space, which is exactly the composer path this module exists to avoid,
// and its payoff on merged OSM building geometry under this much fog is the
// smallest of the four effects. Recorded in docs/ROADMAP.md rather than faked.
import * as THREE from 'three';

// Authored constants. Not palette fields: vignette and grain are properties of
// the lens and the film stock, not of the weather, and atmosphere.js already
// owns everything that varies by weather. Kept deliberately restrained — the
// look was won over five milestones and post is here to sit on top of it.
const VIGNETTE = 0.28;   // corner falloff depth
const GRAIN = 0.035;     // peak grain amplitude, in 0-1 display units
const GRADE = 1.0;       // scales the S-curve + split-tone below
const GRAIN_FPS = 24;    // grain resamples on a 24fps step, not every frame

// E8: the McGrot grade — the street as a printed page rather than a photograph.
// Every uniform below is inert while uStyle is 0, which is what it ships at
// during the prototype loop: the whole stack lives behind a single branch, so
// check 26's "strength 0 is BIT-identical to a direct render" invariant is
// untouched and no golden can move until a keeper is chosen deliberately.
//
// Deviation from the roadmap's stack, recorded because it was a decision and
// not an oversight: the dot screen is ANALYTIC (fract/length/smoothstep over
// rotated screen coords), not a precomputed Bayer/blue-noise texture. The
// roadmap's reason for a texture was driver stability — sin-based hashes vary
// between drivers — and an analytic dot has that same property while also
// admitting an antialiased dot edge, which a threshold texture cannot. The
// edge width is DERIVED from uCell rather than read from fwidth(): fwidth is
// an extension in ESSL1 (it fails to compile here without the pragma) and a
// hardware derivative is exactly the kind of driver-dependent quantity this
// project's goldens can least afford. No hashes, no derivatives, no texture.
// Round 1's four candidates. They are differentiated FIRST on the axes that
// survive a contact sheet's downscale — press exposure, stock colour,
// saturation — and only second on screen texture. Round 1 was rendered once
// with the four differing mainly in cell size and halftone mix, and the four
// columns were indistinguishable at sheet scale: a 3px cell simply is not
// there after a 3.2x downscale. The detail strip exists for the texture; the
// sheet has to be able to show four different LOOKS.
const STYLE_PRESETS = {
  // Cool grey newsprint. Cheap stock, coarse screen, colour mostly gone.
  a: { label: 'newsprint', press: 0.70, cell: 4.5, halftone: 0.62, highCut: 0.68, misreg: 1.1,
       sat: 0.45, shadowTint: [0.96, 0.98, 1.03], highTint: [1.02, 1.01, 0.98],
       stock: 0.70, ink: [0.11, 0.11, 0.12], paper: [0.93, 0.92, 0.88], artefact: 0.10 },
  // The lightest touch: the shipped murk kept nearly intact, print as texture
  // rather than as a palette. The control for "is any of this an improvement".
  b: { label: 'fine-litho', press: 0.90, cell: 2.6, halftone: 0.35, highCut: 0.60, misreg: 0.7,
       sat: 0.85, shadowTint: [0.97, 0.99, 1.03], highTint: [1.04, 1.01, 0.96],
       stock: 0.35, ink: [0.06, 0.05, 0.05], paper: [0.98, 0.96, 0.92], artefact: 0.05 },
  // Aged cream page — the comics' own stock. Warm, open, the most "printed".
  c: { label: 'cream-page', press: 0.60, cell: 3.4, halftone: 0.34, highCut: 0.52, misreg: 1.0,
       sat: 0.40, shadowTint: [0.92, 0.95, 1.05], highTint: [1.08, 1.02, 0.88],
       stock: 0.85, ink: [0.16, 0.12, 0.09], paper: [0.94, 0.89, 0.74], artefact: 0.08 },
  // Near-duotone warm brown ink: the strongest departure, and the one most
  // likely to eat the photo facades — in the round precisely so the failure
  // is visible rather than argued about.
  d: { label: 'hard-ink', press: 0.55, cell: 3.8, halftone: 0.78, highCut: 0.78, misreg: 1.4,
       sat: 0.15, shadowTint: [0.90, 0.94, 1.06], highTint: [1.10, 1.00, 0.84],
       stock: 0.92, ink: [0.10, 0.06, 0.04], paper: [0.95, 0.87, 0.70], artefact: 0.16 },
};

const VERT = `
attribute vec3 position;
attribute vec2 uv;
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 1.0);
}
`;

// Everything below is authored in DISPLAY space (sRGB-encoded, tone mapped),
// which is why the numbers look like a grading panel's rather than a shader's.
const FRAG = `
precision highp float;

uniform sampler2D tDiffuse;
uniform vec2  uResolution;
uniform float uStrength;   // 0 = provably neutral, 1 = as authored
uniform float uVignette;
uniform float uGrain;
uniform float uGrade;
uniform float uTime;

// E8 style axis. uStyle 0 skips the whole block below — see the note above
// STYLE_PRESETS for why the branch, and not a multiply by zero, is the thing
// that keeps the neutral frame bit-identical.
uniform float uStyle;
uniform float uPress;       // exposure for the plate — see the note beside it
uniform float uCell;        // dot-screen cell size, screen pixels
uniform float uHalftone;    // how far the printed two-tone replaces the source
uniform float uHighCut;     // luminance above which the paper stays clean
uniform float uMisreg;      // plate offset at the frame edge, screen pixels
uniform float uSat;         // 1 = untouched, below = pulled toward grey
uniform vec3  uShadowTint;
uniform vec3  uHighTint;
uniform float uStock;       // how far the range is remapped into ink..paper
uniform vec3  uInk;
uniform vec3  uPaper;
uniform float uArtefact;    // press speckle depth

varying vec2 vUv;

// Hash with no transcendentals — sin-based hashes vary between drivers, and
// the goldens are captured under SwiftShader. All fract/dot/multiply.
float hash21(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * 0.1031);
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}

void main() {
  vec3 c = texture2D(tDiffuse, vUv).rgb;
  float lum = dot(c, vec3(0.299, 0.587, 0.114));

  // Grade: a gentle S-curve for contrast, plus a split tone — cool shadows,
  // warm highlights. Both scaled by uGrade so neutral is exact.
  vec3 curved = c * c * (3.0 - 2.0 * c);
  vec3 split = mix(vec3(0.96, 0.98, 1.06), vec3(1.04, 1.00, 0.95), lum);
  vec3 graded = mix(c, curved, 0.10) * split;
  c = mix(c, graded, uGrade * uStrength);

  // ---- E8: the printed page. Sits between the grade and the lens, because
  // the ink is a property of the image and the vignette and grain are
  // properties of the thing looking at it. Inert at uStyle 0.
  if (uStyle > 0.0) {
    vec2 texel = 1.0 / uResolution;
    vec2 fromCentre = vUv - 0.5;

    // Ink misregistration: the plates drift apart toward the edges of the
    // sheet and are in register at the centre. Applied as the DIFFERENCE
    // between a shifted and an unshifted tap, so the authored grade above
    // survives underneath it rather than being resampled away.
    vec2 dir = fromCentre / (length(fromCentre) + 0.0001);
    vec2 mis = dir * uMisreg * smoothstep(0.05, 0.62, length(fromCentre)) * texel;
    vec3 raw = texture2D(tDiffuse, vUv).rgb;
    vec3 shifted = vec3(
      texture2D(tDiffuse, vUv + mis).r,
      raw.g,
      texture2D(tDiffuse, vUv - mis).b);
    vec3 base = c + (shifted - raw);

    float bl = dot(base, vec3(0.299, 0.587, 0.114));

    // Press exposure, and the reason it is not optional. This scene is a dark
    // one — MEASURED median display luminance 0.139 at noon overcast and 0.055
    // at night rain — while a printed page is a LIGHT object: mostly paper,
    // with ink where the picture is. Screening the scene's own tonality
    // produced a frame that was ink almost everywhere, because sqrt(1 - 0.139)
    // is a dot that nearly fills its cell and a highlight gate never fires.
    // So the tone is re-exposed for the plate first, exactly as a repro camera
    // did — uPress is that exposure, and it is a per-preset axis because how
    // far the night should be lifted is a judgement, not a constant.
    float tone = pow(clamp(bl, 0.0, 1.0), uPress);
    vec3 lifted = base * (tone / max(bl, 0.0015));

    // Palette pull, not posterise: compress saturation, then push the shadows
    // and the highlights apart in temperature. The photographs keep their
    // tonality — hard quantisation is what turns brick to mush.
    vec3 pulled = mix(vec3(tone), lifted, uSat)
      * mix(uShadowTint, uHighTint, smoothstep(0.1, 0.9, tone));

    // Dot screen at 45 degrees. Analytic, so the dot edge can be
    // fwidth-antialiased — a hard threshold crawls as the camera moves, which
    // is the single artefact that reads as "filter" rather than "printing".
    vec2 p = vUv * uResolution;
    vec2 rot = vec2(p.x - p.y, p.x + p.y) * 0.70710678 / max(uCell, 1.0);
    float dist = length(fract(rot) - 0.5) * 2.0;
    float radius = sqrt(clamp(1.0 - tone, 0.0, 1.0));
    // The AA band is derived, not sampled: the rotation preserves length, so
    // one screen pixel is exactly 2/uCell in dot-distance units. fwidth would read
    // the same number out of the hardware at the cost of a derivative — and a
    // derivative is a driver-dependent quantity in a project whose goldens are
    // already pinned to one GPU. This is the anti-swim edge with none of that.
    float aa = 1.5 / max(uCell, 1.0);
    float dotMask = 1.0 - smoothstep(radius - aa, radius + aa, dist);

    // Shadow/mid gating. This is the part that makes it read as printing:
    // ungated, every highlight gets dots too and the whole frame turns into
    // an effect. Highlights stay clean paper.
    float gate = 1.0 - smoothstep(uHighCut - 0.18, uHighCut, tone);
    vec3 twoTone = mix(vec3(1.0), pulled * 0.35, dotMask);
    vec3 printed = mix(pulled, twoTone, gate * uHalftone);

    // The stock. Nothing on a printed page is pure black or pure white, so
    // the whole range is remapped into ink..paper — per channel, which keeps
    // hue rather than collapsing to a duotone.
    vec3 styled = mix(printed, mix(uInk, uPaper, clamp(printed, 0.0, 1.0)), uStock);

    // Press artefacts: sparse specks on a slow reseed. Low-rate is the whole
    // point — resampled every frame it reads as video noise, not as a press.
    float sp = hash21(floor(vUv * uResolution / 3.0) + vec2(floor(uTime * 6.0) * 37.0, 0.0));
    styled -= smoothstep(0.985, 1.0, sp) * uArtefact;

    c = mix(c, styled, uStyle);
  }

  // Vignette.
  float d = length(vUv - 0.5);
  c *= mix(1.0, 1.0 - smoothstep(0.35, 0.78, d), uVignette * uStrength);

  // Grain, weighted towards the midtones the way film is — near-black and
  // blown-out areas stay clean, so the murk gets the texture and the sky
  // does not crawl.
  float n = hash21(vUv * uResolution + vec2(floor(uTime * ${GRAIN_FPS.toFixed(1)}), 0.0));
  float midtone = 1.0 - abs(lum * 2.0 - 1.0);
  c += (n - 0.5) * uGrain * midtone * uStrength;

  gl_FragColor = vec4(clamp(c, 0.0, 1.0), 1.0);
}
`;

export function createPost(renderer) {
  const size = renderer.getDrawingBufferSize(new THREE.Vector2());

  let texture = new THREE.FramebufferTexture(size.x, size.y);

  const uniforms = {
    tDiffuse: { value: texture },
    uResolution: { value: new THREE.Vector2(size.x, size.y) },
    uStrength: { value: 1 },
    uVignette: { value: VIGNETTE },
    uGrain: { value: GRAIN },
    uGrade: { value: GRADE },
    uTime: { value: 0 },
    // E8, all inert until uStyle rises above 0. The defaults are preset 'a''s
    // so a bare setStyleStrength(1) shows something rather than a black frame,
    // but nothing reads them while the style is off.
    uStyle: { value: 0 },
    uPress: { value: 0.50 },
    uCell: { value: 4.5 },
    uHalftone: { value: 0.62 },
    uHighCut: { value: 0.72 },
    uMisreg: { value: 1.6 },
    uSat: { value: 0.55 },
    uShadowTint: { value: new THREE.Vector3(0.92, 0.95, 1.05) },
    uHighTint: { value: new THREE.Vector3(1.08, 1.02, 0.90) },
    uStock: { value: 0.72 },
    uInk: { value: new THREE.Vector3(0.13, 0.09, 0.07) },
    uPaper: { value: new THREE.Vector3(0.95, 0.91, 0.80) },
    uArtefact: { value: 0.10 },
  };

  const material = new THREE.RawShaderMaterial({
    name: 'McGrotPost',
    uniforms,
    vertexShader: VERT,
    fragmentShader: FRAG,
    depthTest: false,
    depthWrite: false,
  });

  // One full-screen triangle in clip space. The vertex shader ignores the
  // camera entirely, so no projection is involved and no seam can appear
  // where two triangles of a quad would meet.
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

  let enabled = true;

  function resize() {
    const next = renderer.getDrawingBufferSize(new THREE.Vector2());
    if (next.x === texture.image.width && next.y === texture.image.height) return;
    texture.dispose();
    texture = new THREE.FramebufferTexture(next.x, next.y);
    uniforms.tDiffuse.value = texture;
    uniforms.uResolution.value.set(next.x, next.y);
  }

  return {
    // Drives the grain phase off the same stepped `t` the updaters run on,
    // never wall time — a settle of N frames has to land on the same grain
    // field every run or every golden becomes a flake.
    setTime(t) { uniforms.uTime.value = t; },
    resize,
    setEnabled(v) { enabled = !!v; },
    isEnabled() { return enabled; },
    // 0 = provably neutral (the invariant), 1 = as authored. The gate needs
    // both ends: neutral proves the plumbing is transparent, authored proves
    // the effects are actually reaching the frame.
    setStrength(v) { uniforms.uStrength.value = v; },
    getStrength() { return uniforms.uStrength.value; },

    // --- E8 prototype loop ---------------------------------------------
    // Live-tunable, because the loop is judged from pictures and a rebuild
    // per tweak is the thing that makes a style round die of friction.
    // `setStylePreset(null)` / `'none'` returns the frame to the shipped look.
    stylePresets: STYLE_PRESETS,
    setStyle(params) {
      for (const [k, v] of Object.entries(params || {})) {
        const u = uniforms['u' + k[0].toUpperCase() + k.slice(1)];
        if (!u) continue;
        if (Array.isArray(v)) u.value.set(v[0], v[1], v[2]);
        else u.value = v;
      }
    },
    setStyleStrength(v) { uniforms.uStyle.value = v; },
    getStyleStrength() { return uniforms.uStyle.value; },
    setStylePreset(name, strength = 1) {
      if (!name || name === 'none') { uniforms.uStyle.value = 0; return null; }
      const preset = STYLE_PRESETS[name];
      if (!preset) throw new Error(`[post] unknown style preset: ${name}`);
      for (const [k, v] of Object.entries(preset)) {
        if (k === 'label') continue;
        const u = uniforms['u' + k[0].toUpperCase() + k.slice(1)];
        if (!u) continue;
        if (Array.isArray(v)) u.value.set(v[0], v[1], v[2]);
        else u.value = v;
      }
      uniforms.uStyle.value = strength;
      return preset;
    },

    // Draws the scene to the canvas exactly as a post-off frame would, then
    // — only if enabled — copies that finished frame and redraws it through
    // the post shader. The scene render is never redirected to a buffer.
    render(scene, camera) {
      renderer.render(scene, camera);
      if (!enabled) return;
      renderer.copyFramebufferToTexture(texture);
      renderer.render(quadScene, quadCamera);
    },
  };
}
