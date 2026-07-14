// A real sky for the Walk.
//
// What was here before was a 4x256 CanvasTexture assigned to `scene.background`.
// A plain Texture background is drawn as a SCREEN-SPACE quad — it does not move
// with the camera — so the same band of murk sat behind you whether you looked
// at the horizon or straight up. This replaces it with an inverted dome whose
// shader paints purely as a function of world direction.
//
// THE SEAM — the one bug this file exists to make impossible.
//
// A hard line where the fogged geometry ends and the sky begins is the classic
// failure here, and it cannot happen by construction. Three fogs a fragment as
//     gl_FragColor.rgb = mix( colour, fogColor, fogFactor )   // fog_fragment
// in LINEAR working space, and only afterwards tone-maps and encodes it. So a
// fully fogged pixel is *exactly* the fog colour. The dome is handed the same
// THREE.Color as a uniform, drives its horizon to exactly that value (every
// gradient and cloud term is gated on an elevation that reaches 0 at d.y = 0),
// and closes with the same two chunks three appends to everything else. Same
// input, same path, same pixel.
//
// The consequence, and it is a real constraint: NOTHING may add colour at the
// horizon. That is why the docks glow is held a few degrees above it.
//
// COMPOSITION. On a tenement street the visible sky is not the horizon — it is
// the slot between the rooflines. Mid-carriageway with 5 storeys either side
// that slot opens at roughly 55 degrees elevation, so the cloud deck and the
// zenith do all the work and the horizon is only seen down long sightlines
// (the junctions, and the open ground at the Foot of the Walk).

import * as THREE from 'three';

// Authored as sRGB hex; THREE.Color converts to the linear working space that
// the shader must output in — the same conversion three applies to fog.color.
const ZENITH = 0x2e343a;      // cold slate: the lid pressing down on the street
const BAND = 0x8d9377;        // dirty luminous haze low down — the canyon needs a
                              // bright slot to read against, or the walls vanish
const CLOUD_DARK = 0x232830;  // the mass of the deck
const CLOUD_LIT = 0x5c5748;   // its thin edges: dirty grey, a hint of sodium
const DOCK_GLOW = 0xb05a24;   // something is burning down at the docks

// The deck is projected onto a plane overhead, which is what gives the clouds
// real perspective: cells crowd together as they approach the horizon.
//
// DENSITY is the only term that sets how much cloud you see in a given patch of
// sky, and getting it wrong is invisible in the code. At 0.5 the whole visible
// slot between the rooflines mapped to less than ONE noise cell, so the fbm came
// out flat and the sky overhead was a smooth dark blob — perspective-correct and
// completely empty. It has to be big enough that several cells fall inside the
// 60-90 degree cone you actually look at from the street.
const CLOUD_DENSITY = 3.2;
// Metres of walking per unit of drift across the deck. Over the Walk's 1.6km
// this slides the sky about two cells, so the ceiling isn't nailed to your head.
const CLOUD_PARALLAX = 1 / 700;

const VERT = /* glsl */ `
  varying vec3 vDir;
  void main() {
    // World-space view ray. Correct whether the dome is parented to the camera
    // or to the scene, because modelMatrix carries whichever transform applies.
    vDir = (modelMatrix * vec4(position, 1.0)).xyz - cameraPosition;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const FRAG = /* glsl */ `
  uniform vec3 uFog;
  uniform vec3 uBand;
  uniform vec3 uZenith;
  uniform vec3 uCloudDark;
  uniform vec3 uCloudLit;
  uniform vec3 uGlow;
  uniform vec2 uDock;
  uniform float uTime;
  varying vec3 vDir;

  float hash(vec2 p) {
    p = fract(p * vec2(123.34, 456.21));
    p += dot(p, p + 45.32);
    return fract(p.x * p.y);
  }

  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x),
               mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x), u.y);
  }

  float fbm(vec2 p) {
    float v = 0.0;
    float a = 0.5;
    for (int i = 0; i < 5; i++) {
      v += a * noise(p);
      p *= 2.02;
      a *= 0.5;
    }
    return v;
  }

  void main() {
    vec3 d = normalize(vDir);
    float h = clamp(d.y, 0.0, 1.0);

    // Three-stop vertical gradient: fog at the horizon, a sickly bright haze a
    // few degrees up, heavy slate overhead. Both mixes start from uFog and are
    // driven by smoothsteps that are 0 at h = 0, so the horizon is uFog exactly.
    vec3 col = mix(uFog, uBand, smoothstep(0.0, 0.30, h));
    col = mix(col, uZenith, smoothstep(0.16, 0.85, h));

    // Cloud deck, projected onto a plane overhead. Folding in the camera's XZ
    // makes the deck slide as you walk the 1.6km rather than riding on your head.
    vec2 p = d.xz / max(h, 0.05) * ${CLOUD_DENSITY.toFixed(2)}
           + cameraPosition.xz * ${CLOUD_PARALLAX.toFixed(6)};
    p += vec2(uTime * 0.0035, uTime * 0.0012); // haar drifting in off the Forth

    float f = fbm(p);
    // Thin edges catch what light there is; the thick core is a dark mass.
    vec3 cloud = mix(uCloudLit, uCloudDark, smoothstep(0.38, 0.78, f));
    // The second factor holds the deck clear of the horizon: cloud reaching
    // d.y = 0 would break the fog match. It also masks off the low elevations
    // where the 1/h projection blows p up into a shimmering high-frequency mess.
    float cover = smoothstep(0.40, 0.70, f) * smoothstep(0.06, 0.35, h);
    col = mix(col, cloud, cover * 0.88);

    // The docks are burning. What you see is the light thrown up onto the
    // underside of the haar, not the fire — and it is anchored ABOVE the
    // horizon because any additive term at h = 0 would paint a bright rim
    // along the top of the fogged buildings.
    vec2 flatDir = d.xz;
    float flatLen = length(flatDir);
    float toward = flatLen > 1e-4 ? max(dot(flatDir / flatLen, uDock), 0.0) : 0.0;
    col += uGlow * pow(toward, 5.0) * exp(-h * 4.0) * smoothstep(0.0, 0.10, h);

    // Below the horizon the dome is flat fog, so any sliver of it showing under
    // the ground plane reads as murk rather than as sky.
    col = mix(uFog, col, smoothstep(-0.06, 0.0, d.y));

    gl_FragColor = vec4(col, 1.0);

    // Three injects the *pars* for both of these into every fragment prefix
    // (WebGLProgram.js) — including them here as well is a redefinition error.
    // These two are the bodies, and they are the same ones the fogged buildings
    // run. That is the seam guarantee.
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }
`;

// fogColor: the scene's THREE.Color, NOT a hex — it must be the same object the
// fog uses, so the two can never drift apart.
// streetLine: used to derive which way the docks are, rather than guessing a
// compass bearing. Leith Walk runs SSW, so the docks lie back along the street
// from its far end toward the Foot of the Walk (streetLine[0]).
export function createSky(fogColor, streetLine) {
  const dock = new THREE.Vector2(0, -1);
  if (streetLine && streetLine.length > 1) {
    const head = streetLine[0];
    const tail = streetLine[streetLine.length - 1];
    dock.set(head[0] - tail[0], head[1] - tail[1]).normalize();
  }

  const uniforms = {
    uFog: { value: fogColor },
    uBand: { value: new THREE.Color(BAND) },
    uZenith: { value: new THREE.Color(ZENITH) },
    uCloudDark: { value: new THREE.Color(CLOUD_DARK) },
    uCloudLit: { value: new THREE.Color(CLOUD_LIT) },
    uGlow: { value: new THREE.Color(DOCK_GLOW) },
    uDock: { value: dock },
    uTime: { value: 0 },
  };

  const material = new THREE.ShaderMaterial({
    uniforms,
    vertexShader: VERT,
    fragmentShader: FRAG,
    side: THREE.BackSide,
    // The dome is a backdrop, not geometry: it never writes or tests depth, and
    // renders before everything else. Radius is therefore irrelevant, and the
    // 1000m far plane can't clip it.
    depthWrite: false,
    depthTest: false,
    fog: false, // FogExp2 at this density would render the dome 100% fog colour
  });

  const mesh = new THREE.Mesh(new THREE.SphereGeometry(1, 32, 20), material);
  mesh.renderOrder = -1000;
  mesh.frustumCulled = false;

  // Parented to the camera by the caller, so it needs no per-frame repositioning
  // — the shader reads world direction, which is rotation-invariant.
  return {
    mesh,
    update(time) {
      uniforms.uTime.value = time;
    },
  };
}
