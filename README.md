# McGrot Walk

First-person 3D POC: a post-apocalyptic Leith Walk (real OSM geometry) where grotesque
static NPCs each hold a McGrot comic and read it aloud in Scottish accents (Gemini TTS,
verbatim including the AI-garbled text).

## Dev

```bash
npm install
npm run dev        # bundles + serves src/ on :5174
```

## Build (single self-contained HTML for sharing / Claude Artifact)

```bash
node build.mjs     # → dist/mcgrot-walk.html (all assets inlined as data URIs)
```

## Adding a comic

1. Copy the PNG from `~/Desktop/screenshots/mcgrot/` into `assets/`, recompress:
   `ffmpeg -i in.png -vf "scale=900:-2" -q:v 4 assets/comicN-slug.jpg`
2. Add an entry to `assets/manifest.json` (comic + npc block: name, blurb, face,
   voiceName from the 30 Gemini prebuilt voices, accent, build proportions).
3. Write a performance script at `scripts/tts-prompts/comicN.txt` (transcribe the
   comic **verbatim**, garbled text and all; structure: Audio Profile / Scene /
   Director's Notes / Transcript with [performance tags]).
4. `set -a; source .env.local; set +a; node scripts/generate-tts.mjs comicN`
5. Face texture (if new NPC): add a prompt to `scripts/gen-faces.mjs`, then
   `TOGETHER_API_KEY=... node scripts/gen-faces.mjs <name>`
6. `node build.mjs`

## Pipeline notes

- `scripts/fetch-osm.mjs` — regenerates `assets/leith.json` from Overpass (only needed
  if you want a different street).
- `GEMINI_API_KEY` lives in `.env.local` (gitignored). TTS model:
  `gemini-3.1-flash-tts-preview`.
- Faces: FLUX.2-pro via Together (`TOGETHER_API_KEY`, currently sourced from the
  whatsapp-bot project's `.env`).
