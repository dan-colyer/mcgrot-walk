# McGrot Walk

First-person Three.js POC: post-apocalyptic Leith Walk (real OSM footprints), three
grotesque NPCs each reading a McGrot comic aloud (Gemini TTS, verbatim garbled text).

## Commands

```bash
npm run dev      # bundle + static server on :5174 (preview via workspace launch.json "mcgrot-walk")
npm run bundle   # esbuild src/main.js → src/dev-bundle.js
node build.mjs   # single-file dist/mcgrot-walk.html, all assets inlined (the shareable artifact)
```

## Architecture

- `src/assets.js` — load-bearing contract: `window.MCGROT_ASSETS` (single-file build,
  data URIs) vs relative `assets/` fetches (dev). ALL asset URLs go through
  `assetUrl(assets, path)`. `src/assets` is a symlink to `../assets` for dev serving.
- `src/world.js` — street ribbons + 995 extruded OSM buildings (merged geometry),
  `streetLine` polyline (north→south, ~1617m), `nearestStreetPoint` for corridor clamp.
- `src/npcs.js` / `src/interact.js` — paper-doll NPCs (face JPEG on head front),
  proximity prompt → overlay + audio. `src/scenery.js` — tram, catenary + arc flashes,
  smoke, debris (seeded PRNG: layout must stay deterministic). `src/ambience.js` —
  WebAudio only, must start from a user gesture (title card).

## Gotchas

- three.js physical light units: intensities that "look right" are ~10-100× the legacy
  scale (torch 18, exhibit spots 60). Tone mapping is ACESFilmic, exposure 1.15.
- Spawn yaw must come from the street tangent — Leith Walk runs SSW, not south
  (`atan2(-tx, -tz)`; controls' forward is `(-sin yaw, -cos yaw)`).
- No pointer lock assumption: drag-look is primary (artifact iframe blocks pointer lock).
- Audio is MP3 (Safari won't play OGG/Opus). Keep the final HTML under ~8MB.
- `window.__mcgrotDebug` (main.js) is a dev probe — strip before publishing the artifact.
- Asset regeneration (TTS/faces/OSM): see README.md; keys in `.env.local` (gitignored).

## Verbatim rule

NPC scripts read the comics' AI-garbled text EXACTLY as printed — never "fix" the
nonsense. It's the point.
