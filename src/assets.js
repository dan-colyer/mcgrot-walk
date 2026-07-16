// Asset-loading contract for McGrot Walk.
//
// Phase 2 and the eventual single-file Artifact build both depend on this
// shape staying stable:
//
//   { manifest, leith, images, audio }
//
// - manifest / leith: plain parsed JSON objects.
// - images / audio: either `null` (dev server mode — callers build their own
//   relative URLs, e.g. `assets/${path}`) or an object keyed by asset path
//   (e.g. "comic1-stink-off.jpg", "audio/comic1.mp3") whose values are
//   data-URI strings, ready to drop straight into an <img src> / <audio src>.
//
// In the single-file build, `window.MCGROT_ASSETS` is pre-populated with
// everything inlined so there are zero runtime network requests.

export async function loadAssets() {
  if (typeof window !== 'undefined' && window.MCGROT_ASSETS) {
    return window.MCGROT_ASSETS;
  }

  const [manifest, leith, catalog, shopfronts, placement, strips] = await Promise.all([
    fetch('assets/manifest.json').then((res) => res.json()),
    fetch('assets/leith.json').then((res) => res.json()),
    // The full-street catalog (100+ vendors). Absent in the single-file artifact,
    // where the 3-comic manifest is the source of truth instead.
    fetch('assets/catalog.json').then((res) => (res.ok ? res.json() : null)).catch(() => null),
    // Shopfront texture atlas layout (real Leith Walk photos, tiled). Absent in
    // the single-file artifact — buildShopfronts() no-ops when this is null.
    fetch('assets/shopfronts/atlas.json').then((res) => (res.ok ? res.json() : null)).catch(() => null),
    // Which real photo clads which real building (address-verified), plus the
    // businesses on each building for name placeholders. Absent → the engine
    // falls back to its generic hash placement.
    fetch('assets/shopfronts/placement.json').then((res) => (res.ok ? res.json() : null)).catch(() => null),
    // Whole-upper-elevation strips for the placed buildings (one draped quad
    // each). Absent → the engine keeps its per-band stone stacking.
    fetch('assets/shopfronts/strips.json').then((res) => (res.ok ? res.json() : null)).catch(() => null),
  ]);

  // The placement map rides on the atlas layout so the engine reads one object.
  if (shopfronts && placement) shopfronts.placement = placement;
  if (shopfronts && strips) shopfronts.strips = strips;

  return { manifest, leith, catalog, shopfronts, images: null, audio: null };
}

// Single source of truth for resolving an asset path to a usable URL.
//
// In the single-file Artifact build, `assets.images` / `assets.audio` are
// objects mapping asset paths to inlined data-URI strings — return those so
// there are zero runtime network requests. In dev-server mode both maps are
// `null`, so we fall back to a relative URL under `assets/`. Both the data URI
// and the relative URL drop straight into <img>/<audio>/THREE.TextureLoader.
//
// ALL asset URL resolution in Phase 2 must go through this helper.
export function assetUrl(assets, path) {
  if (assets) {
    if (assets.images && assets.images[path]) return assets.images[path];
    if (assets.audio && assets.audio[path]) return assets.audio[path];
  }
  return `assets/${path}`;
}
