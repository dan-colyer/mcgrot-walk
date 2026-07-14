# McGrot Walk 2 — The Full Street

Plan for an **Opus orchestrator** spawning **sonnet subagents**. Written 2026-07-13 at the end of the Fable session that shipped v1 (3 comics, artifact at https://claude.ai/code/artifact/e22cad87-9a85-4bda-8141-41ae1aeff5fc). Read CLAUDE.md and README.md in this repo first — they carry the architecture, asset pipeline, and hard-won gotchas.

## STATUS — 2026-07-14 (Opus session, mid-build)

**Decisions locked** (all gates resolved by Dan): hosting = **GitHub Pages, new PUBLIC repo under his personal `dan-colyer` account** (like github.com/dan-colyer/whatsapp-bot); audio = **free-tier trickle** (no billing); faces = **Trek/Farscape stills as placeholders**; comic set = **ALL 418** (387 main + 31 in `other/`).

**Revised scope: the full 418, filled in daily.** Dan: "keep iterating on the rest of the comics each day, and since it's free we'll use all of them 400>". So transcribe all 418 over daily waves, and trickle audio for all 418 (~20/day free → ~3 weeks). Later: an **ingestion system** so the friend's new comics get auto-prepped + transcribed + voiced + redeployed (sketch below).

### Done & verified
- **prep-comics.mjs** → 418 unique comics deduped + recompressed to `assets/comics/<id>.jpg` (40MB); `assets/catalog.json` is the source of truth (id, image, audio, npc{name,blurb,voiceName,accent,build,face,ttsModel}, sparse, done).
- **Brightness** (Dan asked twice): now `main.js` exposure **1.46**, `world.js` hemi **3.9** / sun **1.15** / ambient **1.4**. Verified brighter-but-grim.
- **Transcription factory** — validated pattern (`scripts/catalog-batches/BRIEF.md` + `assignments.json`, sonnet vision agents, verbatim sacred rule). **100/418 done** (batches 0–4 merged via `merge-batches.mjs`). ~18% are `sparse` non-comics (posters/photos/screenshots incl. a Keir Starmer photo, a *Young Ones* tweet) — handled in-character, filterable via the `sparse` flag. Spot-checked; one misread fixed by hand (`2db7525f`).
- **Faces** — `scripts/fetch-faces.mjs` + `face-list.json` pulled **36 franchise faces** (Memory Alpha/Fandom API) → `assets/faces/<slug>.jpg` (512²) + `credits.json`; cycled across NPCs (each ~2.8×).
- **TTS** — `generate-tts.mjs` rewritten: catalog-driven, resumable (`--missing`), per-entry `ttsModel` (50/50 mix of `gemini-2.5-flash-preview-tts` and `gemini-3.1-flash-tts-preview`), progress log. **20/418 clips done** then hit the free-tier daily cap (~20/day). Free tier DOES work in the UK — £0 spent.
- **Engine D1–D3 (all verified in-browser)**: `npcs.js` catalog-driven spawner (103 NPCs = 100 + 3 v1, alternating sides along the full street, merged body geometry, shared face textures, no per-NPC spotlights); lazy comic textures within 34m; **`proximity-audio.js`** — pooled `PositionalAudio` (≤6), auto-play looping within 18m, inverse-distance falloff, E restarts from 0 + opens overlay. 665 draw calls, 44k tris. `assets.js` loads catalog (manifest fallback for the artifact). `renderer` has `preserveDrawingBuffer` on localhost (so stepFrame screenshots survive the hidden-pane rAF pause).

### Next, in order (Dan's steer)
1. **D4 shopfronts** — real Leith Walk shop windows (photo-sourced, janky OK). See Workstream B/D4 below; geograph API still UNVERIFIED — the curating agent must check it (fallback Wikimedia Commons "Leith Walk").
2. **E deploy** — `build.mjs --site` → `dist-site/`, then new PUBLIC repo under `dan-colyer` + Pages. Needs `gh` auth for that account; **`.env.local` must never be committed**. Visible Credits link (face + shopfront attribution).
3. **Daily trickle** (ongoing): rerun `set -a; source .env.local; set +a; node scripts/generate-tts.mjs` each day for +~20 audio; and transcribe the next batches — **`assignments.json` already holds all 21 batches; batches 5–20 (315 comics) are ready to run** as-is (spawn sonnet agents with the same per-batch prompt, then `merge-batches.mjs` + re-run the face-assignment cycle patch). Do them in cost-conscious waves, not all 16 at once.

### Future: ingestion system (once 418 is complete)
A one-command (or watched) pipeline: diff `~/Desktop/screenshots/mcgrot` vs `catalog.json` → `prep-comics.mjs` (adds new hash ids) → spawn a transcription agent for the new ids → assign face + ttsModel → `generate-tts.mjs` (trickle) → `build.mjs --site` → push. Design it so the friend just drops files in.

## Workstream A — brightness (Opus inline, 10 minutes, no agent)

`src/main.js` toneMappingExposure 1.15 → ~1.35; `src/world.js` hemi 2.5 → ~3.0, judge by screenshot (keep it grim, not daylight). Use the stepFrame harness (below) to get a mid-street screenshot with an NPC before/after.

## Workstream B — pipeline scale-up (one sonnet agent, code only, no asset reads)

1. `scripts/prep-comics.mjs`: md5-dedupe the source folder (396→387), recompress ALL to `assets/comics/<hash8>.jpg` (700px wide, `-q:v 5` — tighter than v1; ~150KB each), emit `assets/catalog.json` skeleton (id, imagePath, placeholder fields for title/npc/voice/promptFile/audioPath). Keep the 3 existing comics' ids stable (map by source filename — see manifest.json).
2. `generate-tts.mjs` upgrades: `--missing` mode (skip ids whose MP3 exists), ~8s pause between calls, catalog-driven, progress + failure log to `scripts/tts-progress.json`, safe to kill and rerun. Keep the 4-attempt retry (Gemini returns text-not-audio sometimes).
3. `scripts/fetch-faces.mjs`: given `scripts/face-list.json` (name → image URL), download, square-crop (512px, face-ish centre crop; ffmpeg), save `assets/faces/<slug>.jpg`. A separate sonnet agent with WebSearch/WebFetch curates face-list.json: ~70 distinct Trek (Memory Alpha/Wikipedia) + Farscape characters; cycled across 387 NPCs.
4. `scripts/fetch-shopfronts.mjs`: CC-licensed Leith Walk shopfront photos. Primary source: geograph.org.uk (CC BY-SA, has a syndication API — agent to verify current API shape) around grid squares NT2674–NT2676; secondary: Wikimedia Commons "Leith Walk" categories. Download 40–80, crop to shopfront band (lower ~40% of each photo usually), normalise to 512×384, build `assets/shopfronts/atlas.jpg` + `credits.json` (photographer + licence per tile — **CC BY-SA requires visible attribution: add a Credits link on the title card**).

## Workstream C — transcription factory (the long pole; parallel sonnet agents WITH VISION)

- 384 comics in batches of ~20 → ~19 sonnet agents, run 3–4 concurrently.
- Per batch, the agent: crops each comic into thirds at full res (ffmpeg pattern in CLAUDE.md/session history — bands of ih/3) and Reads them; transcribes **VERBATIM — the sacred rule: never fix the AI-garbled text** ("Ye canane swing at smell, lads!" stays); writes `scripts/tts-prompts/<id>.txt` in the house format (Audio Profile / Scene / Director's Notes / Transcript with [performance tags] — copy the structure from comic1-3, incl. the "read exactly as printed" director's note); invents NPC name + one-line blurb (League of Gentlemen Scottish grotesques; each agent gets a distinct surname pool to avoid collisions); assigns a voice from the 30 Gemini prebuilt voices (rotate; mostly Scottish accent directions, occasional absurd mismatch is in-genre) and writes its batch results to `scripts/catalog-batches/batch-N.json`.
- Opus merges batches into `assets/catalog.json` and spot-checks 2 scripts per batch against the source image (vision).
- Cost estimate: ~1–1.5M sonnet tokens total. Start this workstream FIRST; everything else can overlap.

## Workstream D — engine (one sonnet agent, sequential chunks; Opus reviews diffs)

- **D1 Spawner at scale**: replace 3-NPC manifest flow with catalog.json → 387 NPCs spaced evenly along the full `streetLine` (1617m / ~193 per side ≈ 8.4m spacing, alternating sides, 6m offset — density is the joke). Bodies: keep build-param variety but batch geometry (InstancedMesh per part, or merged-by-colour) — 387 × individual meshes will tank draw calls. Name plates + face textures created **lazily** when player within ~40m, disposed beyond ~60m (387 canvas textures upfront = memory blowout).
- **D2 Lazy assets**: comic JPEGs and MP3s fetched on proximity (<25m), small LRU cache, silent placeholder until loaded. The `assetUrl(assets, path)` contract in src/assets.js stays — the v1 3-comic artifact build must keep working (inline data URIs take precedence).
- **D3 Proximity audio** (the headline feature): `THREE.AudioListener` on camera + pooled `THREE.PositionalAudio` (max ~6 concurrent). NPC within ~18m → auto-play its reading on loop from a random offset (busker effect); refDistance ≈ 2, steep rolloff, maxDistance ≈ 20 so with 8.4m spacing you hear 1–3 voices, a murmuring street beyond. E within range: opens the existing overlay AND restarts that NPC's audio from 0 (non-positional or positional both fine while overlay is open). Ambience ducking now scales with nearby-voice count. All audio still gated behind the title-card gesture.
- **D4 Shopfronts**: ground-floor quads (~3m tall) on street-facing building façades within ~25m of the centreline, textured from the atlas (random tile per quad, slight emissive lift so they read in the murk). Janky is accepted — no per-building curation.
- Perf gates: 60fps mid-street, memory flat over a full-street walk (stepFrame harness loop), draw calls < ~150.

## Workstream E — build, deploy, QA

- `build.mjs --site` → `dist-site/` (index.html + assets/ tree, NO inlining); keep default single-file mode for the 3-comic artifact demo.
- Deploy per gate 1 (gh repo create → Pages, or chosen host). Credits link verified.
- Scripted QA via `window.__mcgrotDebug.stepFrame(dt, t)` (localhost-only probe in main.js): walkthrough at 5 street positions, assert prompt text, audio pool count ≤ 6, console clean, screenshots at each stop.

## Gotchas the orchestrator MUST know (all bled for in v1)

- **rAF pauses when the preview pane tab is hidden** (`visibilityState: hidden` → 0 frames): timed input tests silently no-op while drag-look still works. ALWAYS QA via `stepFrame`, never via setTimeout walks.
- **Dev server must send no-store** — use `scripts/serve.py` (port 5174 via workspace-root launch.json entry "mcgrot-walk"); python's default http.server serves stale HTML+JS and you will chase ghosts.
- **Artifact = fragment**: claude.ai wraps artifacts in its own html/head/body — publish `dist/mcgrot-walk-artifact.html` (build.mjs emits it), never the full document.
- **three r185**: `THREE.Clock` is deprecated/broken (getDelta()=0) — main.js uses performance.now(); lights use physical units (torch 18, spots 60 — legacy-looking values do nothing).
- **Yaw convention**: controls forward = `(-sin yaw, -cos yaw)`; spawn yaw from street tangent (Leith Walk bears SSW).
- **Scenery randomness must stay seeded** (deterministic layout, `rand()` in scenery.js) — extend the pattern to NPC placement.
- **Keys**: `GEMINI_API_KEY` in `mcgrot-walk/.env.local` (gitignored — NEVER commit; site deploys must exclude it). `TOGETHER_API_KEY` lives in `whatsapp-bot/.env` (FLUX, only if AI faces get green-lit). The old bot VM (46.225.26.249) is DEAD — its IP presents a foreign SSH host key; do not connect.
- Gemini free tier: TTS works, **image gen has zero quota** (429s).
- Interaction RANGE (interact.js) is 8m because NPCs stand 6m off the centreline — keep trigger radius > offset if either changes.

## Suggested order

C (start immediately, longest) ∥ B → TTS batch runs (background, resumable, quota-gated) ∥ A (trivial) → D1→D2→D3→D4 → E. Opus stays orchestrator: briefs carry file paths + contracts so agents never re-derive context; Opus does all judgement calls, spot-checks, and the final walkthrough.
