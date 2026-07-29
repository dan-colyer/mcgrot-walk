// E2b.1: shared albedo gain for the six MeshBasicMaterial → MeshLambertMaterial
// conversions. Lambert renders `albedo * irradiance / PI`, so under the
// restored E2a light rig these materials — authored against unlit
// MeshBasicMaterial — land dark. The naive 1/irradiance estimate (~2.85) still
// left the three closest bookmarks 13-24% below the E2a golden's full-frame
// luminance (hemisphere irradiance isn't flat across real geometry); this
// value is tuned empirically against all eight goldens instead, landing every
// bookmark within +/-10%.
export const LIT_ALBEDO_GAIN = 4.7;

// E2c.3c step 2b: road/pavement roughness at the dry and fully-wet ends of
// the `wetness` axis (src/atmosphere.js's applyWetness). Dry tarmac/paving
// stay near-fully rough (matte, same read as the step-2a conversion);
// wetness lowers roughness toward a tighter, brighter GGX specular lobe —
// the missing half of "wet" that darkening alone (WETNESS_DARKEN) never
// supplied. metalness stays 0 throughout: tarmac is a dielectric, and a
// metalness ramp would tint the reflection with the road's albedo instead of
// the light's colour, reading as foil rather than a puddle.
export const DRY_ROUGHNESS = 1.0;
export const WET_ROUGHNESS = 0.25;
