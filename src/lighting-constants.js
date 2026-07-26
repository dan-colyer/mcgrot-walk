// E2b.1: shared albedo gain for the six MeshBasicMaterial → MeshLambertMaterial
// conversions. Lambert renders `albedo * irradiance / PI`, so under the
// restored E2a light rig these materials — authored against unlit
// MeshBasicMaterial — land dark. The naive 1/irradiance estimate (~2.85) still
// left the three closest bookmarks 13-24% below the E2a golden's full-frame
// luminance (hemisphere irradiance isn't flat across real geometry); this
// value is tuned empirically against all eight goldens instead, landing every
// bookmark within +/-10%.
export const LIT_ALBEDO_GAIN = 4.7;
