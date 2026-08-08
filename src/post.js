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
// SHIPPED since E8 close; every golden was recaptured against it. The stack
// still lives behind a single branch, now on uStyle * uStrength, so check 26's
// "strength 0 is BIT-identical to a direct render" invariant survives the
// grade being on — which is the whole reason the product is the gate rather
// than uStyle alone.
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
// PRESS FOLLOWS THE ATMOSPHERE (E8b), and this is the round-1 finding made
// structural. A single press exposure cannot serve noon and midnight: every
// round-1 preset lifted enough to print well in daylight turned 22:00 rain
// into flat milky grey, and only `b` — barely lifting at all — survived the
// night. So press is no longer a constant, it is interpolated between a night
// value and a day value by how bright the moment already is.
//
// The driver is `renderer.toneMappingExposure`. atmosphere.js sets it every
// frame from the per-hour, per-weather palette stops, so it is the scene's own
// answer to "how bright is this moment" — the same number the darkness comes
// from. Reading it means there is no second palette to keep in step, and no
// way for the grade to disagree with the weather it is grading. The mapping is
// computed in JS in render() rather than in the shader, so it stays
// inspectable from a probe and testable without a screenshot.
//
// The direction is deliberately the counter-intuitive one: DARKER moments get
// a HIGHER press, meaning less lift. A night panel in a comic is mostly ink,
// and round 1 measured what happens when you argue otherwise.
//
// E8 CLOSE EXTENDED THIS TO THE SCREEN. Enabling the grade doubled the mean
// luminance of the darkest hour (3am, mid-805-far, lower two-thirds: 26.5 ->
// 53.8) and reddened three gates that measure darkness — night-stays-night,
// the torch ratio, and the darkest-hour legibility pair, whose lamps-OFF
// CONTROL read 68.3% where it must read under 5%. The cause is not press: it
// is the halftone's paper showing between the dots, which lifts the bottom of
// the range far more than the middle (x3.45 at display luminance 0.01, x1.20
// at 0.20) — and this game carries its night, its lamps and its torch in
// exactly that bottom range.
//
// Measured alternatives, same pose: tapering the stock instead gives 51.9
// (rejected — 3.5% of the problem); tapering the whole grade gives 37.5
// (rejected — it makes the night less printed rather than differently
// printed). Tapering the SCREEN is what a press actually does: a comic's
// night panel is solid ink with little or no screen on it. Same driver as
// press, one more axis, and the daylight is untouched (13:00 mean 77.2 with
// a full screen, 75.0 with the taper applied — the taper is ~0 by day).
const PRESS_EXPOSURE_LO = 0.50;  // the darkest palette stop (night, haar)
const PRESS_EXPOSURE_HI = 1.46;  // the brightest (noon clear) — also the shipped default

// `b` — "fine-litho" — IS THE GRADE. Two judging rounds chose it (Dan,
// 2026-08-03 and 2026-08-04) and E8 close hardened it: the numbers below are
// now compiled into the shader as constants, not pushed through uniforms, so
// the renderer physically cannot be driven off-style. Round 1's a/c/d and
// round 2's b1/b2/b3 are all rejected with their reasons in docs/ROADMAP.md;
// the live-tuning surface (`setStyle`, `setStylePreset`, the preset table)
// went with them. Re-opening the look means editing these constants and
// recapturing every golden, which is the cost it should have.
//
// The single reason both rounds' losers lost is the constraint any future
// change has to satisfy: EVERY variant that made the print more visible —
// coarser screen, heavier halftone, stronger stock, more lift — read as visual
// distraction over a street the player is trying to walk down and look at. The
// print is a texture on this world, not a filter over it. `b` is the lightest
// touch in either set and it won twice.
//
// docs/STYLE.md § 2 is the prose form of these numbers and is the thing to
// read before touching one.
const STYLE = {
  label: 'fine-litho',
  pressDay: 0.72,      // press at the brightest palette stop
  pressNight: 0.95,    // ...and at the darkest. Darker moment, LESS lift.
  cell: 2.6,           // dot-screen cell, screen pixels
  // How far the printed two-tone replaces the source. FOLLOWS THE ATMOSPHERE,
  // the same driver and the same reason as press — see the note above.
  halftoneDay: 0.35,
  halftoneNight: 0.10,
  highCut: 0.60,       // luminance above which the paper stays clean
  misreg: 0.7,         // plate offset at the frame edge, screen pixels
  sat: 0.85,           // 1 = untouched, below = pulled toward grey
  shadowTint: [0.97, 0.99, 1.03],
  highTint: [1.04, 1.01, 0.96],
  // How far the range is remapped into ink..paper. Also follows the
  // atmosphere: the ink floor is the second lifter of the darkest hour (the
  // halftone is the first), and on its own it was only 3.5% of the problem —
  // but with the screen already tapered it is what remains between the grade
  // and a night that is genuinely dark.
  stockDay: 0.35,
  stockNight: 0.12,
  ink: [0.06, 0.05, 0.05],
  paper: [0.98, 0.96, 0.92],
  artefact: 0.05,      // press speckle depth
};

// What uStyle ships at. 0 through the whole prototype loop — the containment
// discipline E2c.3a taught: the stack lands inert, every golden unmoved, and
// turns on in ONE commit that recaptures everything deliberately.
//
// THIS IS THAT COMMIT. Every golden in docs/smoke/goldens was deleted and
// recaptured against it; the street is printed from here on.
const STYLE_SHIPPED = 1;

// The same numbers again, as GLSL source. Generated from the object above so
// the two cannot drift: there is one authority for the look and it is STYLE.
const f = (v) => (Number.isInteger(v) ? v.toFixed(1) : String(v));
const v3 = (a) => `vec3(${a.map(f).join(', ')})`;
const STYLE_CONSTS = `
const float S_CELL      = ${f(STYLE.cell)};
const float S_HIGHCUT   = ${f(STYLE.highCut)};
const float S_MISREG    = ${f(STYLE.misreg)};
const float S_SAT       = ${f(STYLE.sat)};
const vec3  S_SHADOW    = ${v3(STYLE.shadowTint)};
const vec3  S_HIGH      = ${v3(STYLE.highTint)};
const vec3  S_INK       = ${v3(STYLE.ink)};
const vec3  S_PAPER     = ${v3(STYLE.paper)};
const float S_ARTEFACT  = ${f(STYLE.artefact)};
`;

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

// E8 style axis. TWO uniforms survive the hardening: uStyle, so the grade can
// be switched off for the opposed-pair gate and for a bit-identical neutral
// frame, and uPress, which is DERIVED from the renderer's live exposure every
// frame and therefore cannot be a constant. Every other axis is compiled in
// from STYLE — see the note above it.
uniform float uStyle;
uniform float uPress;       // exposure for the plate — see the note beside it
uniform float uHalftone;    // screen depth — derived per frame, like uPress
uniform float uStock;       // ink..paper remap depth — ditto
${STYLE_CONSTS}

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
  // properties of the thing looking at it.
  //
  // Gated on uStyle * uStrength, not on uStyle alone, and that product is
  // what E8 close changed. Check 26a asserts that strength 0 is BIT-identical
  // to a direct render; before the grade shipped, uStyle was 0 anyway and the
  // question never arose. Now that it ships at 1, a strength-0 frame would
  // have come out printed and 26a would have gone red for a reason that has
  // nothing to do with the invariant it guards. Branching on the product
  // keeps neutral neutral by construction rather than by a mix() with a zero
  // factor, which is the same argument the block was written under.
  float styleAmt = uStyle * uStrength;
  if (styleAmt > 0.0) {
    vec2 texel = 1.0 / uResolution;
    vec2 fromCentre = vUv - 0.5;

    // Ink misregistration: the plates drift apart toward the edges of the
    // sheet and are in register at the centre. Applied as the DIFFERENCE
    // between a shifted and an unshifted tap, so the authored grade above
    // survives underneath it rather than being resampled away.
    vec2 dir = fromCentre / (length(fromCentre) + 0.0001);
    vec2 mis = dir * S_MISREG * smoothstep(0.05, 0.62, length(fromCentre)) * texel;
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
    vec3 pulled = mix(vec3(tone), lifted, S_SAT)
      * mix(S_SHADOW, S_HIGH, smoothstep(0.1, 0.9, tone));

    // Dot screen at 45 degrees. Analytic, so the dot edge can be
    // fwidth-antialiased — a hard threshold crawls as the camera moves, which
    // is the single artefact that reads as "filter" rather than "printing".
    vec2 p = vUv * uResolution;
    vec2 rot = vec2(p.x - p.y, p.x + p.y) * 0.70710678 / max(S_CELL, 1.0);
    float dist = length(fract(rot) - 0.5) * 2.0;
    float radius = sqrt(clamp(1.0 - tone, 0.0, 1.0));
    // The AA band is derived, not sampled: the rotation preserves length, so
    // one screen pixel is exactly 2/uCell in dot-distance units. fwidth would read
    // the same number out of the hardware at the cost of a derivative — and a
    // derivative is a driver-dependent quantity in a project whose goldens are
    // already pinned to one GPU. This is the anti-swim edge with none of that.
    float aa = 1.5 / max(S_CELL, 1.0);
    float dotMask = 1.0 - smoothstep(radius - aa, radius + aa, dist);

    // Shadow/mid gating. This is the part that makes it read as printing:
    // ungated, every highlight gets dots too and the whole frame turns into
    // an effect. Highlights stay clean paper.
    float gate = 1.0 - smoothstep(S_HIGHCUT - 0.18, S_HIGHCUT, tone);
    vec3 twoTone = mix(vec3(1.0), pulled * 0.35, dotMask);
    vec3 printed = mix(pulled, twoTone, gate * uHalftone);

    // The stock. Nothing on a printed page is pure black or pure white, so
    // the whole range is remapped into ink..paper — per channel, which keeps
    // hue rather than collapsing to a duotone.
    vec3 styled = mix(printed, mix(S_INK, S_PAPER, clamp(printed, 0.0, 1.0)), uStock);

    // Press artefacts: sparse specks on a slow reseed. Low-rate is the whole
    // point — resampled every frame it reads as video noise, not as a press.
    float sp = hash21(floor(vUv * uResolution / 3.0) + vec2(floor(uTime * 6.0) * 37.0, 0.0));
    styled -= smoothstep(0.985, 1.0, sp) * S_ARTEFACT;

    c = mix(c, styled, styleAmt);
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
    // E8. The only two style uniforms left after the hardening: the strength
    // axis, and the plate exposure, which is recomputed from the renderer's
    // live exposure every frame and so cannot be a constant.
    uStyle: { value: STYLE_SHIPPED },
    uPress: { value: STYLE.pressDay },        // DERIVED per frame — see render()
    uHalftone: { value: STYLE.halftoneDay },  // ...and so is this
    uStock: { value: STYLE.stockDay },        // ...and this
  };

  // 0 at the darkest palette stop, 1 at the brightest. The one number both
  // atmosphere-driven axes are interpolated by, so they can never disagree
  // about what time of day it is.
  function dayness(exposure) {
    return Math.min(1, Math.max(0,
      (exposure - PRESS_EXPOSURE_LO) / (PRESS_EXPOSURE_HI - PRESS_EXPOSURE_LO)));
  }
  function pressForExposure(exposure) {
    return STYLE.pressNight + (STYLE.pressDay - STYLE.pressNight) * dayness(exposure);
  }
  function halftoneForExposure(exposure) {
    return STYLE.halftoneNight + (STYLE.halftoneDay - STYLE.halftoneNight) * dayness(exposure);
  }
  function stockForExposure(exposure) {
    return STYLE.stockNight + (STYLE.stockDay - STYLE.stockNight) * dayness(exposure);
  }


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

    // --- E8: the grade -------------------------------------------------
    // The prototype loop's live-tuning surface (setStyle, setStylePreset, the
    // preset table) is GONE. The look is compiled in; the only thing left to
    // move is whether it is applied at all, which the opposed-pair gate and
    // the judging sheet both need. Anything that wants to change the look
    // edits STYLE above and recaptures every golden.
    styleName: STYLE.label,
    styleShipped: STYLE_SHIPPED,
    setStyleStrength(v) { uniforms.uStyle.value = v; },
    getStyleStrength() { return uniforms.uStyle.value; },
    // What press the grade would use at a given exposure, and what it is using
    // now. The mapping is the load-bearing part of E8b, so it is readable as a
    // number rather than only as a picture.
    stylePress(exposure) {
      return exposure === undefined
        ? { day: STYLE.pressDay, night: STYLE.pressNight, exposure: renderer.toneMappingExposure,
            press: uniforms.uPress.value, halftone: uniforms.uHalftone.value, stock: uniforms.uStock.value }
        : { press: pressForExposure(exposure), halftone: halftoneForExposure(exposure), stock: stockForExposure(exposure) };
    },

    // Draws the scene to the canvas exactly as a post-off frame would, then
    // — only if enabled — copies that finished frame and redraws it through
    // the post shader. The scene render is never redirected to a buffer.
    render(scene, camera) {
      renderer.render(scene, camera);
      if (!enabled) return;
      // E8b: press tracks the exposure atmosphere.js has already set for this
      // frame. Read here rather than pushed from atmosphere, so the grade
      // cannot be left holding a stale value by anything else that drives
      // exposure — the ending sequence takes it over for ~10s, and a grade
      // that ignored that would print the ending at the wrong tone.
      //
      // Inside the `enabled` path and behind the same uStyle check the shader
      // uses, so a post-off or style-off frame does no work for it at all.
      if (uniforms.uStyle.value > 0) {
        uniforms.uPress.value = pressForExposure(renderer.toneMappingExposure);
        uniforms.uHalftone.value = halftoneForExposure(renderer.toneMappingExposure);
        uniforms.uStock.value = stockForExposure(renderer.toneMappingExposure);
      }
      renderer.copyFramebufferToTexture(texture);
      renderer.render(quadScene, quadCamera);
    },
  };
}
