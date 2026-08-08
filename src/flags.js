// One localhost-gated feature-flag helper, replacing the same ~10 lines copied
// into five modules.
//
//   const enabled = flag('Lamps', LAMPS_ENABLED);
//
// reads `window.__mcgrotForceLamps` when the page is served from localhost and
// falls back to the shipped default everywhere else. The name is the suffix,
// not the whole property, so a flag cannot be spelled two ways in two files —
// which was the actual risk in the copied version, not the line count.
//
// WHY LOCALHOST-ONLY. Every flag here is a gate lever: the suite boots the
// SAME build twice and attributes a measured difference to the flag rather
// than to a number recorded on another day. That is only sound if the two
// boots differ in nothing else, and it must not be reachable from the
// deployed page, where a visitor toggling the crowd off would be looking at a
// street the goldens have never seen. `window.__mcgrotDebug` is gated the same
// way for the same reason (main.js).
//
// The E5 phase gate ruled this helper be built by the FIRST unit that needed a
// new flag, migrating the existing ones in the same commit — E10a.1's
// `__mcgrotForceGullet` is that unit. The migration is verified for free by
// the opposed-pair gates those flags already carry (lamps, legs, leithers,
// characters, anchors): if `flag()` resolved differently from the code it
// replaced, an on/off pair would collapse.

export function isLocalhost() {
  return typeof location !== 'undefined' && ['localhost', '127.0.0.1'].includes(location.hostname);
}

// `name` is the __mcgrotForce<name> suffix; `shippedDefault` is what every
// non-localhost visitor gets. An override of `null`/`undefined` is "not set"
// and falls through — that is what lets the suite pass one flag without
// disturbing the others.
export function flag(name, shippedDefault) {
  if (isLocalhost() && typeof window !== 'undefined') {
    const v = window[`__mcgrotForce${name}`];
    if (v != null) return !!v;
  }
  return !!shippedDefault;
}
