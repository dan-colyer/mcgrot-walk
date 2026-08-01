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
