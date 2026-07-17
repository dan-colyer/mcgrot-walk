# McGrot Walk

First-person Three.js POC: post-apocalyptic Leith Walk (real OSM footprints), 400+
grotesque NPC vendors each reading a McGrot comic aloud (Gemini TTS, verbatim
garbled text), plus an ambient crowd, wrecked vehicles and photo-derived façades.

## Development workflow

This project runs a two-model workflow. Check which model you are and stay in lane.

**Fable is the architect.** It owns the persistent conversation: understanding the
codebase, architectural decisions, planning, breaking work into milestones
(C1, C2, D1…), writing implementation briefs with acceptance criteria, and
reviewing completed work against the original plan. Fable avoids routine
implementation unless there is a compelling architectural reason — and when it
delegates, it delegates a complete milestone, not a small coding task (the
overhead of delegation must buy a real reduction in implementation work done in
the architecture session).

**Sonnet is the implementer.** It owns the implementation loop for the current
milestone end-to-end: reading and modifying code, running builds, browser QA via
the preview harness, and iterating until the milestone is complete — fix issues
rather than handing control back. It finishes with a concise implementation
summary (what changed, what was verified, anything that deviated from the brief).

**Session boundaries.** Planning, implementation and review are separate phases:

1. Fable plans the next milestone.
2. The `/handoff` skill produces the implementation package.
3. Sonnet implements the milestone in a separate Claude Code session.
4. Sonnet returns a concise completion summary.
5. Fable reviews the diff against its original brief and acceptance criteria —
   not the implementation transcript.
6. Compact the Fable session before planning the next milestone.

The implementation conversation is disposable; the architectural conversation is
persistent.

**Handoff contract.** Every milestone ends with a `/handoff` brief containing at
minimum: objective, scope, expected files to modify, constraints, acceptance
criteria, risks, and notes for the implementer. It must be complete enough that
Sonnet can execute largely autonomously without architectural clarification.

**Reviews** prioritise correctness, architecture, maintainability, performance
and unintended regressions — judged against the handoff, not the conversation.
No stylistic rewrite requests unless they materially improve the codebase.

**Planning** goes deep only on the NEXT milestone. Keep a high-level roadmap for
the rest and re-plan from the actual state of the codebase after each milestone
lands — detailed plans for far-future work go stale before they're used.

**Context efficiency.** Prefer concise briefs, milestone-based delegation,
autonomous implementation, diff-based review, and compaction after each review.
Avoid long-lived sessions where architecture, implementation, debugging, QA and
deployment all pile into one conversation.

## Commands

```bash
npm run dev      # bundle + static server on :5174 (preview via workspace launch.json "mcgrot-walk")
npm run bundle   # esbuild src/main.js → src/dev-bundle.js (stamps index.html with the bundle hash)
node build.mjs   # single-file dist/mcgrot-walk.html, all assets inlined (the shareable artifact)
node build.mjs --site   # dist-site/ for GitHub Pages (secret-scan before pushing)
```

## Architecture

- `src/assets.js` — load-bearing contract: `window.MCGROT_ASSETS` (single-file build,
  data URIs) vs relative `assets/` fetches (dev). ALL asset URLs go through
  `assetUrl(assets, path)`. `src/assets` is a symlink to `../assets` for dev serving.
- `src/world.js` — street ribbons + 995 extruded OSM buildings (merged geometry),
  `streetLine` polyline (north→south, ~1617m), `nearestStreetPoint` for corridor clamp.
- `src/npcs.js` / `src/interact.js` — paper-doll NPCs (face JPEG on head front),
  proximity prompt → overlay + audio. `src/leithers.js` — ambient walkers who listen
  and comment. `src/litter.js` — readable comics on the ground. `src/scenery.js` —
  tram, catenary + arc flashes, smoke, debris (seeded PRNG: layout must stay
  deterministic). `src/ambience.js` — WebAudio only, must start from a user gesture
  (title card).

## Gotchas

- three.js physical light units: intensities that "look right" are ~10-100× the legacy
  scale (torch 18, exhibit spots 60). Tone mapping is ACESFilmic, exposure 1.15.
- ACES lifts everything: procedural texture tones must be picked far darker than
  looks right on paper, and canvas bakes must write RAW sRGB hex bytes (THREE.Color
  components are linear; an SRGB-tagged canvas converts AGAIN → silhouettes).
- Spawn yaw must come from the street tangent — Leith Walk runs SSW, not south
  (`atan2(-tx, -tz)`; controls' forward is `(-sin yaw, -cos yaw)`).
- No pointer lock assumption: drag-look is primary (artifact iframe blocks pointer lock).
- Audio is MP3 (Safari won't play OGG/Opus). Keep the final HTML under ~8MB.
- `window.__mcgrotDebug` (main.js) is a dev probe — hostname-gated to localhost.
- Asset regeneration (TTS/faces/OSM): see README.md; keys in `.env.local` (gitignored).
- Texture/bundle URLs are content-hash versioned (atlas/strips etags, stamp-bundle) —
  never hand-write a cache-buster query.

## Verbatim rule

NPC scripts read the comics' AI-garbled text EXACTLY as printed — never "fix" the
nonsense. It's the point. This extends to Leither comments and litter readings:
quoted comic fragments are sacred; only the wrapper phrasing is theirs.
