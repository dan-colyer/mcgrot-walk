# McGrot's — implementation plan

A second, small game in this repo. One pitch, McGrot's van, a handful of canon
characters arriving and leaving, read aloud. Third person, anchored spots, a
permanent world you drop into.

**Status: G0 and G1 landed 2026-08-10. G2's four candidates are BUILT, isolated
and gated (2026-08-11). The cast-albedo fault, F4, F5 and F6 are all FIXED
(§ 10). Style is settled: S2 aerial flatten (Dan, 2026-08-12), re-confirmed
against the regenerated review sheets. G3a (the van, price board, ground) and
G3b (Queen Victoria) landed 2026-08-12, concurrently on different files. G3c
(the real ledge, F1's seated pose, F2 judged) landed 2026-08-12 too, once G3a
and G3b existed for it to sit against — F2 is closed; F1 was recorded closed,
was REOPENED by the G3 phase gate, which found the seated legs extending
backwards and the thighs buried in the capstone, and is **now closed again by
G3e (2026-08-12)** — the leg sign and the ledge offset landed together with
F10's replacement gate (§ 10 F1, F7, F8, F10). **G3f (2026-08-12) closed F9**
(the statue region gated existence, not visibility) with a real
projection+content gate, in its own commit, and separately deepened the
seated pose's leg angle and ledge offset so the figure reads as settled on
the wall rather than perched on its corner — landed as its own commit too,
re-verified against F10's knee check and G3e's seat-contact measurement.
Full account: `docs/MCGROTS-VALIDATION.md` § "G3f".
**G3c turned out narrower than originally planned**: the composed shots and
the fixed hour were deliberately not in it (a posture whose ledge did not yet
exist could not be composed around), and landed as G3d on 2026-08-12. See § G3
below and `docs/MCGROTS-VALIDATION.md` §§ "G3a", "G3c", "G3d". **G3g
(2026-08-12) closed F12**: `mcgrots-grade.mjs` had been sweeping the unstyled
look and not S2, so the recorded 6/3 numbers did not reproduce; the tool now
takes `--look=<id>` and the corrected S2 sweep keeps the same 6/3 decision.**
**F11 (the interrupted-walk camera cut) is CLOSED, and G4a (2026-08-12) landed
the rota — the schedule and the walk, silent, no audio yet — with the
camera-independence gate as its load-bearing check.**

Gates and their limits: `docs/MCGROTS-VALIDATION.md`. Run `npm run
smoke:mcgrots` for the full suite; boot the game with `npm run dev:mcgrots`
and open `/mcgrots.html`.

This document is the brief. It is written to be picked up by a session with no
memory of the conversation that produced it (Dan and Opus, 2026-08-10). Read
`CLAUDE.md` first — the verification contract and the landing rules in it hold
here without amendment. Where this document and `docs/ROADMAP.md` disagree,
that one describes the *street*, which is paused; this one wins for anything
under `src/mcgrots/`.

---

## 1. Why this exists

Leith Walk got too big to finish. 995 OSM buildings, a façade pipeline, 156
vendors, 1293 lines of atmosphere, a 74-second gate suite. The content is
good and the world is the cost.

McGrot's keeps the content — the comics, the audio, the cast, the palette —
and throws away the world. One patch of land. The bet is that a small stage
finished beats a large one perpetually at 80%.

**The street is paused, not deleted.** See § 8.

---

## 2. Decisions already made — do not relitigate

All from Dan, 2026-08-10, in the conversation that produced this file.

| Question | Decision |
|---|---|
| Where it lives | Same repo, new entry point under `src/mcgrots/`. Not a fresh repo, not a fork of `src/`. |
| Camera | **Third person.** First person was considered and rejected — "if it's first person view i think that'll be rubbish". |
| Movement | **Anchored spots**, and you watch your character walk between them. Not free roam, not teleport cuts. The walk is the point. |
| What the player does | Listen, and a relationship with **Pomplé**. Not ordering food, not working the counter. |
| World shape | **Permanent.** No shift, no session ending. You drop in and out. |
| Multiplayer | **Deferred.** Prototype ships single-player on GitHub Pages. Design so it stays additive (§ 6). |
| Shared state, when it comes | Shared while the room is occupied, forgotten when it empties. No cross-day persistence. |
| McGrot's dialogue | **Auto-generated**, using the existing transcripts as voice context. Not hand-written. |
| Comic coverage | All 418 eventually. Start with a small selection for the prototype. |
| Graphics style | Undecided by design — goes to a bake-off (G2). Candidates in § 5.2. |
| Animation approach | **Prototype all three** (G1). Dan's call: do not pre-emptively pick one. |
| The place | **The Foot of the Walk** — the Queen Victoria statue, Leith's meeting point since 1907. A real place with real obligation; `docs/LEITH.md` § 2 binds. |
| Who arrives | **The canon principals as regulars** — Keth with One Eye, Mike English, the Taxman, the Government Inspector, the Leith Badger. Recurring characters you get to know, not a rotating vendor pool. |
| Time | **One fixed hour, always.** No day cycle, no weather cycle. One authored lighting setup, tuned until it is beautiful. Which hour is a G2 decision, not a G0 one. |
| Definition of done | **One good ten-minute visit.** The test is whether Dan would willingly sit through it a second time. See § 5.9. |
| The street | Fully paused. Daily TTS launch agent stopped and disabled 2026-08-10. |

Defaulted by Opus rather than asked, because reversing them is cheap — overturn
freely: **mobile is a target from G0** (tap-an-anchor is already the mobile
shape, and retrofitting cost the street a whole gate region); **captions on,
diegetic where the style allows** (the game is entirely listening, and browsers
block autoplay); **the browser remembers what you have heard**, locally only, so
it does not touch the "forgotten when the room empties" ruling; **the player is
a fly on the wall** — McGrot complains at the world, not at you.

---

## 3. Measured starting conditions

Numbers taken 2026-08-10. They are here so a fresh session does not re-derive
them, and because two of them overturn assumptions that sounded safe.

**The character meshes are not rigged.** All seven glbs in
`assets/characters/` — the five archetypes plus `mcgrot-form.glb` and
`pomple-form.glb` — are static Trellis output: no `skins`, no `joints`, no
`animations`, 0.40–0.58 MB each. Checked by reading the glTF JSON chunk
directly.

**There is no walk-cycle code anywhere in the project.** `src/legs.js` is not
a leg module — it is the turnaround hinge at each end of the Walk. The street's
vendors stand still, so nothing ever needed a rig. This is the entire reason
G1 exists.

**Content on disk:**

| | Count |
|---|---|
| `assets/catalog.json` entries | 418 |
| …with an mp3 present | 136 |
| …with an `npc` block (street vendors) | 156 |
| `assets/readings.json` | 125 readings, **961 phrase-level timings tagged `comic`**, 631 tagged `vendor`, 82.8 minutes total |
| `assets/comic-lines.json` | 95 comics, 514 lines, 2,530 words |
| `scripts/tts-prompts/` | 205 worked performance briefs (audio profile / scene / director's notes) |
| McGrot dialogue corpus | ~3,956 words in `comic` phrases + 2,530 in comic-lines |

`readings.json` carrying **phrase-level start/end times** is the most valuable
asset here and is underused by the street. It means reactions, camera cuts and
captions can be driven off the clock rather than off the audio element.

**Payload:** built street is 97 MB (`dist-site`) — comics 40 MB, audio 38 MB,
shopfronts 13 MB, characters 3.2 MB. A prototype shipping a dozen comics and
their mp3s is a few megabytes and fits GitHub Pages comfortably.

### The Foot — what already exists, and what does not

**The Foot is the origin of the existing OSM data.** `scripts/fetch-osm.mjs:48`
— *"Origin: northernmost node of the street (Foot of the Walk)"*. Local
chainage 0 is the pitch, `z` increases southward, and the fetched bbox
(`55.952,-3.196,55.976,-3.164`) covers it comfortably.

| Around the Foot | Count |
|---|---|
| Building footprints within 40 m | 15 |
| …within 80 m | 41 |
| …within 150 m | 128 |
| Buildings carrying a name (whole dataset) | 31 |

So the composed shots get real reference geometry for free, and the existing
frontage and shopfront work already covers this end of the street.

**The statue is not in the data.** The Overpass query fetches
`way["name"="Leith Walk"]["highway"]` and `way["building"]` — ways only. A
memorial is an OSM *node*, so Queen Victoria was never fetched and cannot be.
She has to be authored, or added to the fetch as a separate query. Same for
the PERSEVERE signage and the boundary plaque in `docs/LEITH.md` § 2.

**The Central Bar stands at the Foot** (`docs/LEITH.md` line 70 — the tiled
Victorian "people's palace"), which means the real-geometry rule from
`docs/ROADMAP.md` applies to the shots: chamfer pubs at 45°, and never
"correct" real geometry that looks wrong.

### The canon cast does not exist yet

`assets/characters/` holds seven meshes: `kenneth`, `mcgrot`, `morag`,
`pomple`, `rab`, `runt`, `slab`. **None of the five principals chosen as the
regulars are among them** — Keth with One Eye, Mike English, the Taxman, the
Government Inspector and the Leith Badger are all specified in
`docs/CANON.md` and all unbuilt. Each needs the full pipeline
(`scripts/gen-character.mjs` → `scripts/gen-mesh.mjs`, FLUX form variant →
Trellis at `mesh_simplify 0.98`, `texture_size 512`), a voice, and generated
dialogue.

This is the largest content lift in the plan, and § 5 orders the milestones
around it.

**Reusable as-is:** `assets.js` (`assetUrl` contract), `flags.js`, `day.js`,
`characters.js` (`normalise()` and the glb loader), `interact.js`,
`proximity-audio.js`, `captions.js`, `journal.js`, `collision.js` (the module,
not the street's footprint registry), and `gullet.js` for the van, price board
and `mcgrotIsIn(dayKey)`.

**The precedent to copy:** `src/interior.js`. It is a self-contained
`THREE.Scene` at its own origin, axis-aligned, with its own fog, swapped in by
`main.js`. McGrot's is that, outdoors, as the only scene.

---

## 4. Architecture

```
src/
  mcgrots.html          new entry page (dev server is rooted at src/, so this
                        serves at /mcgrots.html with no server change)
  mcgrots/
    main.js             own scene, own loop, own render target
    stage.js            the pitch: ground, van, dressing
    cameras.js          the composed shot set + transitions
    anchors.js          the standable/sittable spots (NOT src/anchors.js)
    actor.js            the animation interface (§ 5.1)
    actors/             one file per G1 candidate
    rota.js             wall-clock arrival schedule
    audio.js            playback + readings.json phrase timing (landed under
                         this name in G4b — sketch corrected G4c part 3, the
                         module was never called reader.js)
    pomple.js
scripts/
  smoke-mcgrots.mjs     own gate suite, own regions
```

**Shared modules are imported from `../`, never copied.** If a shared module
needs a change, the change must be additive and the street's suite must be run
to prove its goldens did not move (§ 8).

**Forked, not shared:** `controls.js` (third person is a different input
model), `post.js` and `atmosphere.js` (the new style owns its own grade — do
not try to parameterise the street's 1293-line atmosphere module).

**Build:** add `bundle:mcgrots` and `dev:mcgrots` to `package.json` mirroring
the existing esbuild + `stamp-bundle.mjs` pair. Do not touch the existing
`bundle`, `dev` or `deploy` scripts.

---

## 5. Milestones

Deep on G0 and G1 only. Everything past G2 is deliberately sketched — re-plan
from the actual state of the code after each one lands, per `CLAUDE.md`.

### G0 — Scaffold and the empty stage ✅ landed 2026-08-10

The harness G1 needs in order to compare anything. Commit `6d76399`.

What landed: `src/mcgrots/` (site, foot, anchors, actor, main),
`src/mcgrots.html`, `scripts/smoke-mcgrots.mjs` (13 checks, 1.3s),
`scripts/mcgrots-grade.mjs`, `scripts/stamp-mcgrots.mjs`, and the
`bundle:mcgrots` / `dev:mcgrots` / `smoke:mcgrots` npm scripts.

Three faults the captures caught that the numbers had passed — the ground
rendering at RGB (13,9,4) under legacy-scale light intensities, an
overcorrection to a mean of 137, and every camera sitting on the axis the
statue stands on. All three are written up in `docs/MCGROTS-VALIDATION.md`
with the measurements and the rejected approaches.

The anchor set is `counter`, `wall`, `kerb`, `far`, `back`. Note `far` was
called `statue` until the pitch was turned a quarter turn, after which it stood
17.9 m from the statue — the furthest of the five. Renamed rather than
re-sited; framing a real shot on the landmark is G3's work.

Deliverables as specified:

1. `src/mcgrots.html` + `src/mcgrots/main.js` booting a `THREE.Scene` with
   flat ground, one directional key light and ambient. No street modules
   imported. **One fixed lighting setup** — no clock, no weather, no
   `atmosphere.js`. Pick any defensible hour for now and leave it; G2 chooses
   the real one, because lighting and style are the same decision.
2. **The Foot, roughly blocked out.** Pull the building footprints within
   ~80 m of local origin from `assets/leith.json` (41 of them, § 3) as
   extruded massing. This is siting reference for the camera shots, not
   finished dressing — G3 dresses it. The statue is a placeholder box at
   this stage; it is not in the OSM data and has to be authored.
3. **Third-person camera and the anchor set.** Four to six fixed, composed
   camera positions covering the pitch, sited against the real massing from
   deliverable 2. Tapping or clicking an anchor walks the actor there; the
   camera cuts to that anchor's shot. Point-and-click adventure staging — you
   author the shots, so the world only has to hold up from angles you chose.
4. A placeholder actor (a capsule) that translates between anchors at walking
   pace, so G1's candidates have something to replace.
5. `scripts/smoke-mcgrots.mjs` with regions `boot`, `camera`, `anchors`.
   Reuse `scripts/launch.mjs` for the GPU browser — do **not** extend the
   street's 7,066-line `smoke.mjs`.
6. A debug probe equivalent to `scripts/probe.mjs` pointed at
   `/mcgrots.html`, or a flag on the existing one.

Acceptance: the suite boots the page, asserts the anchor count and that each
camera shot passes the contrast floor (`docs/VALIDATION.md` § E2g.1 — "the
frame is a picture"). Prove the contrast gate can go red by fault-injecting a
black material, watch it fail, restore, and commit *before* injecting anything
(`CLAUDE.md` § Gotchas).

### G1 — The animation bake-off ✅ built 2026-08-10, awaiting judgement

Dan's instruction: **prototype all three.** Do not shortcut to a favourite.

The three candidates implement one interface so the harness can swap them:

```js
// src/mcgrots/actor.js
// makeActor(archetype, opts) -> {
//   group,                    // THREE.Object3D, feet at y=0, 1 unit tall
//   setState(name),           // 'idle' | 'walk' | 'sit' | 'listen'
//   update(dt, clock),        // advance; clock is wall-clock seconds
//   height,                   // metres, for camera framing
//   stats(),                  // { drawCalls, triangles, bytes }
// }
```

**A1 — Rigged.** Add a skeleton to the Trellis glbs and skin them. There is no
rig, so this means placing bones by script and computing skin weights by
distance-to-bone (heat-diffusion weighting is out of scope). This is the
high-risk candidate: auto-rigging lumpy generated topology fails often and
fails ugly.
*Time-box it.* If a walk still tears the mesh after the box, write the failure
up with captures and score it as failed — a measured rejection is a delivered
result, not a shortfall.

**A2 — Segmented.** No skinning. Split each glb into torso / head / upper arm /
forearm / thigh / shin by assigning triangles to the nearest part along the
mesh's own bounding box, re-parent as a transform hierarchy, and animate
rotations. Do the split offline in `scripts/segment-glb.mjs` and cache the
result — never at boot.
`npc.buildDoll()` in `src/npcs.js:528` is the existing box-figure precedent
(coat/boot merge, oversized head, arm swing) and is worth reading before
starting; it is the same idea with primitives instead of mesh pieces.

**A3 — Hinged flats.** Render each archetype offline to orthographic sprites,
cut them into limb rectangles, and build a jointed 2D skeleton on billboards.
Cheapest to animate, nothing to rig, and the strongest fit for a cut-out or
stop-motion look. The offline render reuses the existing glbs, so no new art.

**Each candidate must produce the same four things:** a walk between two
anchors, an idle, a sit-down, and a head-turn to a speaker.

**Judging.** Numeric gates cannot see a bad picture (`CLAUDE.md`), and a
candidate that looks superb frozen and terrible moving is the exact failure
mode here. So:

- **The deliverable is motion**, not stills. Capture a frame strip per
  candidate across a full walk cycle plus the sit, at a fixed camera, and
  render them to `docs/smoke/captures/mcgrots/g1/`. `scripts/contact-sheet.mjs`
  already builds sheets and is the thing to extend.
- **The numbers go beside the pictures, not instead of them:** draw calls,
  triangles, bytes on the wire, ms/frame at four actors, lines of code, and
  offline build time per archetype.
- **Dan judges the look. The table judges the cost.** Do not pick a winner in
  the session; present both and hand it over.

### G2 — The style bake-off

Runs on whichever rig or rigs survive G1. Style and animation are one
decision, not two — a style with no opinion about how a body moves cannot be
judged here.

**The candidate list was replaced on 2026-08-11**, on Dan's instruction to widen
it and to derive the options from the comics rather than from a list of
rendering processes. Nine comics sampled across the 418 in `assets/comics/`
carry several properties `docs/STYLE.md` does not record, because that document
measures colour only — see `docs/MCGROTS-VALIDATION.md` § G2 for the full read.

**The four Dan chose, all built and gated:**

1. **S1 · Inked cel** (`?look=inked`) — inverted-hull outline plus a hard
   two-band ramp. Geometry, not a post pass: the street's ban on outlines rests
   on having no depth buffer and on Sobel wrecking photographed brick, and
   neither carries to a hand-built pitch with no photos in it.
2. **S2 · Aerial flatten** (`?look=aerial`) — line weight, saturation and tonal
   range all fall off with distance. The corpus's most distinctive property and
   the one no off-the-shelf toon shader does. **S1 is its control**: identical
   in every respect but the ramp.
3. **S3 · One key at a time** (`?style=key`) — five measured swatches per beat
   rather than the pooled twelve. See `src/mcgrots/keys.js`: no comic uses
   twelve colours, so quantising to the pool mixes swatches that never
   co-occur. `posterise` stays as the control.
4. **S4 · The page** (`?page=on`) — paper margin, panel rule, title and caption
   bars around an inset viewport, and a gutter-hold cut on anchor change. The
   only candidate that changes the game rather than the pixels, and the staging
   was already panel-shaped: G0 fixed one camera per anchor and made it cut.

**Deferred to G6:** S5 bubbles as world objects, S6 three-mark faces. Both are
clearly right from the corpus but are character work, and G6 already owns
Pomplé's head-turn and dialogue delivery.

**Dropped:** risograph (the comics show no rosette, no misregistration, no
screen — it was a printing process picked off a list of printing processes),
PS1 chunk and clay (nothing in the corpus suggests either), stop-motion (S4's
panel cut is this world's version of it, and closer to the source).

Rejected in advance: **split-screen comic panels**. It reads well solo and
breaks shared attention the moment multiplayer lands — if two players see
different panel layouts they are not listening together. The *fixed composed
camera* from G0 keeps the panel feeling without that cost.

`docs/STYLE.md` binds every candidate: warm always (`b*` mean +22.4, 41 of 42
comics net-warm), neutral on green/red, cool as a 1.7% accent. A candidate
that renders neutral or cool has failed before it is judged.

`npm run style` (`scripts/style-sheet.mjs`) is the existing judging harness
from E8 — extend it rather than writing a second one, but note it judges
**still frames** and G2 needs motion for the same reason G1 does.

**G2 CLOSED 2026-08-11 on S2 · Aerial flatten — provisionally, and Dan said so
in the same breath.** His words: none of the four were interesting or original
enough to be worth considering, so there will be **another pass later** and S2
is accepted for now rather than settled.

Treat that as a live constraint, not a courtesy. A later session reading "G2
chose S2" without this paragraph would build on it as a decided thing. It is
not. What S2 has going for it is that it is the corpus's most distinctive
measured property and the one no off-the-shelf toon shader does; what it lacks
is an idea. The second pass should start from the comics again rather than from
S2, and the candidates it rejects should be more adventurous than the four here,
which were all conventional treatments of the same cel/quantise family.

Ranked from the capture-review rig, `npm run styleshots:mcgrots` — five contact
sheets, one per anchor, six rows (four candidates plus the baseline and S3's
posterise control) and three columns (approach, mid-stride, arrived). Building
that rig is what made a ranking possible at all; nothing before it let the four
be seen side by side.

**The phase gate qualified this on 2026-08-12: the ranking was made on five
stills plus three anchors of motion, not five.** Five of the ten motion cells
across the sheets contained no actor, because the camera cut to the
destination on the first frame of a walk — F6 below, **fixed same day**. That
does not overturn S2, which was already provisional, but the second pass
should re-run the sheets (now regenerated, actor present in all ten motion
cells at the two anchors previously worst-affected) rather than treat the
original ones as a motion comparison.

**Dan re-confirmed S2 on 2026-08-12, on the regenerated sheets** — "stick with
S2 and continue with G3", after F6 was fixed and `counter.png` and `wall.png`
were re-opened with the actor visible in all three columns. So the ranking no
longer rests on the weaker evidence the gate flagged; the qualification above
is now a record of how it got here, not a caveat on the choice. **The second
pass still stands**, on his original grounds — none of the four were
interesting enough — and is a G7-or-later question, not a G3 one. G3 finalises
the composed shots against S2 as chosen.

Done: all four candidates built, isolated and gated, four fault injections
recorded, and three blocking faults fixed — the **cast-albedo fault**
(`src/mcgrots/actors/texture.js` lifts the character textures at load), **F4**
(the actor's geometry had no `normal` attribute; `MeshToonMaterial` doesn't get
three's auto-flatShading fallback that `MeshLambertMaterial` gets for free), and
**F5** (S4's full-bleed paper painted over the canvas, so its panel was empty in
every capture — two green geometry gates never looked inside it). Suite 27/27.

**Still owed by G2, and now carried into the next milestone: which fixed hour.**
It was to be settled with the key, and it was not settled, because the sun
investigation turned it into a different question — see below.

**The sun is not the lever (measured 2026-08-11, `npm run sun:mcgrots`).** The
shipped grade was chosen on whole-frame mean/stddev, and the actor is a few
percent of the frame, so its legibility was never in the objective. Supplying
the missing term — an actor-only torso patch, reusing F4's geometry-derived
sampling — and sweeping 48 settings put the shipped `-2.10 / 0.34 rad` **7th of
48**, with actor mean 6.9 against the best setting's 7.0 and a *worse* peak
(85.0 vs 83.5). A morag cross-check was the same wash, 55.2 against 56.0.

The reason is geometric and is in the tool's own output: camera-to-sun
separation is 54.0° at counter, 51.4° at wall, 35.4° at back, 31.3° at far and
26.9° at kerb. Five anchors face five ways, so no single sun azimuth is in front
of the actor at more than one of them, and the average barely moves. **Do not
re-run this sweep.** The three options it leaves are a fill or rim light carried
by the camera (the only one that fixes all five anchors at once), moving the
anchor cameras, or accepting a dark figure at rest as the look.

G2 also chooses **which fixed hour**. Time is a single authored lighting
setup, so this is one decision made once, and it belongs with the style rather
than before it. `docs/STYLE.md` argues for a low warm sun; a dusk setup with
the van's serving hatch as a practical light is the other obvious candidate,
and it is much cheaper to make beautiful. Judge them as part of the same round.

### The ordering rule for everything after G2

**The five principals do not exist** (§ 3), and generating them is the largest
content lift here. Building them before the loop can be judged would front-load
weeks of character work against a kill criterion — "one good ten-minute visit"
— that cannot yet be applied to anything.

So: **placeholder cast first, real cast last.** Stand the seven existing
meshes in as the regulars, get the loop to the point where it can be judged,
and generate the real five only once the loop is worth dressing. If the visit
is not good with stand-ins, five beautiful new characters will not save it.

**Voices before bodies**, for the same reason. This is a game about listening;
a stand-in body reading the right lines in the right voice tells you far more
about whether the visit works than a finished mesh reading nothing.

### G3 — The pitch

The Foot, dressed. The van (from `gullet.js`), the ground, the statue, the
composed shots finalised against the chosen style. `mcgrotIsIn(dayKey)` already
exists and already decides whether he is in — 3 days in 8 — and it is
**date-keyed, not hour-keyed**, so the fixed-hour decision does not touch it.
"Was McGrot in today" survives as the reason to come back.

Queen Victoria has to be authored (§ 3). `docs/LEITH.md` § 2 carries the
PERSEVERE signage, the boundary plaque and the Central Bar; the real-geometry
rule applies — never "correct" something real that looks wrong.

**Sequenced in three units, planned 2026-08-12.** Most of G3 depends on the
dressing existing: a seated pose tuned against a placeholder ledge is thrown
away (F1's own conclusion), a shot composed against a blockout is composed
against nothing, and the fixed hour cannot be judged on an empty pitch. So the
two units that need nothing land first and in parallel, and everything that
requires something to look at follows them.

| Unit | Owns | Depends on |
|---|---|---|
| **G3a** — the van, the price board, the ground | `van.js` (new), `main.js` | nothing |
| **G3b** — Queen Victoria and the Foot's landmarks | `statue.js` (new), `site.js` § STATUE | nothing |
| **G3c** — the real ledge, F1's seated pose, F2 judged | the ledge in `main.js`, `actor.js` | G3a, G3b |
| **G3d** — the composed shots and the fixed hour | `anchors.js`, `site.js` § LIGHT | G3c |

G3a and G3b ran concurrently on different files. The plan said each adds one
line to `main.js` and "git will merge that" — **which was wrong, and is
recorded in `AGENTS.md` § Landing.** There are no per-worker branches: both
workers share one working tree, so there is no merge, only interleaving.
G3b's commit swept up G3a's uncommitted doc edits. Nothing was lost and the
code commits stayed correctly attributed, but that was luck. Concurrent units
now commit by explicit pathspec.

**The ledge fell between the two briefs, and that is an orchestration miss
worth recording.** G3a covered the van, the board and the ground; G3b covered
the statue. Neither replaced the placeholder `BoxGeometry` seat at `main.js:143`
— the one G1 dropped in so the pose could be looked at at all. So F1 still had
no real wall to be tuned against, which was the entire reason it was deferred
to G3. Caught before G3c was briefed, by checking rather than by assuming the
plan had covered it.

G3c and G3d split what the original plan called one unit. The pose has to be
right before the shots are composed around it, or the shots get composed
twice — and the fixed hour is judged on the finished shots, so it comes last:

- **G3c** — the real ledge, then F1's seated pose standing on it, then F2
  (foot slide) *judged* at the real shot distances rather than fixed. "It does
  not read at these distances, close F2" is a good and cheap result.
- **G3d** — the five composed shots and the **fixed hour**. Re-run
  `scripts/mcgrots-grade.mjs` against the dressed pitch under S2, not against
  the blockout the current sun/hemi pair was swept on. Two observations from
  the 2026-08-12 review are its starting material: the van occupies 57.6% of
  the frame at `counter` and 6.5% at `far`, a tenfold spread across five
  shots; and the `back` wide has an empty middle distance, with the van left,
  the statue right and bare ground between them.

#### G3a — the van, the price board, the ground — implemented 2026-08-12

`src/mcgrots/van.js` replaces the G0 blockout box with the real subject.
Style is settled at S2 (aerial flatten, Dan, re-confirmed against the
regenerated sheets), and nothing here is tuned against a different look.

Reused from `src/gullet.js` (read, not imported): the six-panel shell around
a real serving opening — a solid box put the figure who stands at the hatch
entirely inside it, per that module's own record — the interior liner, the
opening sill/top numbers, the canon palette, the price-board canvas
technique. Not reused: collision registration (this game has none — anchored
staging never needs it), McGrot/Pomplé and `mcgrotIsIn()` (G4/G6's), the
leaned hoarding and shut sign (cut for scope). Price board text is authored
fresh — a price board is not a comic, so the verbatim rule does not bind it —
in the same hand-lettered register as `gullet.js`'s.

Ground: a kerb + pavement patch in pitch-local space via `toWorld`, added as
a scene sibling to `foot.js`'s raycast ground plane (untouched) rather than
replacing it, sized to 16 m so its bounding sphere clears `looks.js`'s 12 m
ink threshold by construction — a compact patch would read as a boxed
rectangle on the tarmac, the "surroundings drawn as an object" mistake the
corpus rule exists to avoid.

New `van` region in `smoke-mcgrots.mjs`: the van's projected screen footprint
is a sensible fraction of the frame (0.3%–70%) and holds real rendered
content against a control, at all five anchors. Full account, including the
control's own redesign and the fault injection, in
`docs/MCGROTS-VALIDATION.md` § "G3a".

**Opened the review sheets, all five anchors, under S2.** The van reads
clearly with legible price-board text at `counter`, `wall`, `kerb`, and
`back`'s approach/mid-stride columns. At `far` (every column) and `back`'s
arrived column it is smaller — a recognisable box-with-hatch-and-sign
silhouette, but the price text is not legible there. F1's known bad seated
pose is visible at `wall`/`kerb`, left alone — G3c's.

#### G3b — Queen Victoria and the Foot's landmarks — implemented 2026-08-12

`src/mcgrots/statue.js` replaces the G0 cylinder with authored low-poly scene
geometry: a circular granite base, chamfered sandstone pedestal with four dark
bas-relief placeholder plaques, and a compact seated bronze Victoria with robe,
throne back, arms, legs, head and crown. The repository documents the Foot as
the statue's place but carries no survey bearing or dimensions, so the exact
origin and footprint remain the measured `STATUE` values (`x=0`, `z=0`,
`radius=1.6m`, `plinth=2.4m`); `yaw=0` and the figure proportions are authored
assumptions, not a claim of survey accuracy. PERSEVERE signage and the boundary
plaque remain deferred bonus dressing.

The new statue smoke region measures the actual authored statue centre against
the five shipped camera sightlines. It preserves the prior exact minimum of
8.283m at `kerb` (the roadmap's 8.3m is rounded): the measured rows are
10.160m, 11.328m, 8.283m, 12.186m and 10.800m for counter, wall, kerb, far and
back. The control is the camera-ray distance, not a scene-node count. The
authored statue replaces `statue-placeholder` in the product scene as a second
check. The landed full smoke is `35/35 passed in 2.0s` under Chromium/Metal;
fault-injecting the product centre to `(10,-5)` made the statue region fail
`1/2` (distances 0.562m / 1.359m / 1.297m / 1.035m / 0.380m), and restoring
`(0,0)` returned it to `2/2`.

#### G3c — the real ledge, F1's seated pose, F2 judged — implemented 2026-08-12

Closed the gap G3a/G3b left: neither replaced G1's placeholder sitting box
(`main.js:143`), so F1 still had no real wall to be tuned against.

**The pose half of this unit did not hold.** The ledge is real and
`SEAT_HEIGHT`'s derivation was a genuine catch, but the phase gate reopened F1
the same day: the thigh sign was checked against the STREET's facing formula
rather than this game's, so "refuted" was itself inverted, and the seat's
along-facing offset was deleted on a measurement that had no bearing on it.
Full account in § 10 F1 (reopened) and F2 (judged, closed) above — kept there
rather than duplicated here, since that is where the acceptance-list structure
lives.

New `seat` region in `smoke-mcgrots.mjs`: the seated hip's world position
against the ledge's actual `Box3`, at both sitting anchors, against a
standing-at-the-same-anchor control. Needed a redesign before its own fault
injection worked — footprint containment did not catch the 0.3 m mislocation
fault it was meant to, since the ledge is deep enough that the shift still
left the (unmoved) hip inside the box, just off-centre. Distance-to-centre
does. Full account in `docs/MCGROTS-VALIDATION.md` § "G3c".

Also lowered the F4 torso-patch gate's stddev floor (2 → 1): the pelvis fix
shifted what that fixed height-fraction window samples on `kerb` (3.0 before,
1.8 after, both a real lit figure — capture opened, not just the number). The
F4 fault itself is pose-independent and still reads exactly 0.0 under the new
threshold, re-verified by injecting it again after this change.

`npm run smoke:mcgrots` → **38/38**.

#### G3d — the five composed shots and the fixed hour — implemented 2026-08-12

This was a judgement pass, not a camera rewrite. After G3c landed, all five
anchors were rendered at 600 stepped frames under S2 and opened individually,
then `npm run styleshots:mcgrots` regenerated the five 15-frame review sheets.
The existing derived camera rule was retained: `counter` is the deliberately
close service view, `wall` and `kerb` are the seated views, and `far` and `back`
are the establishing wides. The opened final shots show the van/actor framing
spread is doing different jobs rather than exposing a broken `back`: `far` is
the best balanced three-subject wide and `back` is the cleanest establishing
wide, with no empty middle. `counter` is intentionally van-dominant; `kerb`
keeps the actor and van readable but Victoria leaves the frame.

The fixed hour remains `LIGHT.sunIntensity=6`, `hemiIntensity=3`, with the
shipped `sunAzimuth=-2.1` and `sunAltitude=0.34`. The dressed-pitch S2 grade
was rerun across 27 sun/hemi/albedo rows: current 6/3 gave frame mean 105.1,
cast mean 17.2 and 0.00% blown; 12/3 improved cast mean to 26.4 but raised
frame mean to 134.5 and visibly washed the pitch without making the
rear-facing actor readable. The old camera-side fill experiment is recorded
as 8.3→11.0 cast luminance and rejected. The hour is therefore a measured
best-available result, not a claim that the asset is legible at rest.

The existing picture-safety contrast floor and G3a van-fraction check remain
the named controls. Composition is deliberately not converted into a numeric
ranking: no new acceptance gate was added, and there is no fault injection for
taste. Full verification after the source comments landed is recorded in the
validation entry.

### G4 — The rota

Arrivals as a pure function of **wall-clock time** (§ 6). Note that a fixed
hour freezes the *lighting*, not the schedule: the clock still advances and
still drives who turns up, there is simply no dawn.

One reader at a time, which is the whole reason this works: on the street 156
people talk at once and none of them land. Audio and reactions driven off
`readings.json` phrase timings.

**Sizing.** 82.8 minutes across 125 readings is roughly 40 s each, so a
ten-minute visit is about **six to eight readings** plus McGrot's interjections
and the gaps between. That is the content budget for the prototype — not the
"dozen comics" this document assumed before the kill criterion was set.

Runs on the placeholder cast. See the ordering rule above.

**G4a (2026-08-12) landed the schedule and the walk, silent.** Split from G4
because McGrot's has no audio module at all yet — playback is G4b, on top of
this. New module `src/mcgrots/rota.js`: `whoIsHere(now)`/`whatTheyAreDoing(now)`,
pure functions of a wall-clock timestamp, scheduling the `readings.json` ∩
audio-on-disk pool of 125 (not the raw 136 — see `MCGROTS-VALIDATION.md` §
G4a for why the intersection is the correct, already-verified pool) through a
one-time seeded shuffle and a fixed 45s gap. A capsule-bodied reader (the
placeholder cast) walks in, stands at the counter, and walks off, driven by a
`createReader({ scene })` factory `main.js` calls once and updates once per
frame — nothing else in `main.js` changed to add this.

**F11 landed as a separate commit in the same session** — see § 10, now
closed.

**The camera-independence gate is the one that matters** (Dan's ruling, this
document's top of § "The ruling that shapes this unit" in the brief): two
boots, rota populated vs. `?rota=off`, identical scripted anchor sequence,
camera position AND orientation sampled at 271 frames and required
bit-identical. Fault-injected with a realistic mistake (a small `lookAt` bias
toward the reader) and confirmed red before restoring. Full account, including
the schedule-purity and one-reader-at-a-time gates and their own fault
injections: `MCGROTS-VALIDATION.md` § G4a.

**Two approach-point layouts were tried and rejected before the sequence
capture read as a walk rather than a glitch** — both caught by opening the
capture, neither by a gate. Numbers and the fix: `MCGROTS-VALIDATION.md` §
G4a "Rejected: the first two approach-point layouts".

**Not yet built:** audio playback (G4b), McGrot's own interjections (G6),
generated dialogue (G5). The reader stands silently at the counter for its
`readings.json` duration and leaves; nothing plays.

**G4b part 1 (2026-08-14) landed the gesture surface, silent — no audio
module yet.** New `src/mcgrots/card.js`: a full-window overlay ("McGrot's" /
"Click anywhere to start"), dismissed on the overlay's own `pointerdown`.
Created at module scope in `main.js`, independent of `boot()`'s async work —
the gesture is needed before any sound exists, not before the scene finishes
loading. `onStart` is currently empty; it is where G4b's second half
constructs the `AudioContext`, and nothing is constructed there yet.

**Blast radius measured, not reasoned about, per the brief.** Ran the full
54-check suite before and after: 54/54 both times, and every numeric value
the suite prints — including the style region's panel fraction (70.9%) and
buffer size, which the brief flagged as the checks most likely to move —
was bit-identical across the two runs. The harness dismisses the card once,
via a new localhost-only `__mcgrotsDebug.card.dismiss()`, immediately after
each of its four page boots resolve `__mcgrotsDebug`, before anything is
measured.

**Fault-injected:** removed the dismiss call from the suite's main boot only
(the other three sub-boots' dismiss calls were left in) and reran. 53/54 —
"the statue rect changes when toggled off in the same boot" went red, every
on/off diff reading 0.0 because the black card covered the canvas for every
capture in that boot. Restored via `git checkout -- scripts/smoke-mcgrots.mjs`
(safe: the file was already staged) and reran clean at 54/54 before
continuing.

**Not this dispatch:** the audio module, the `assets/audio/*.mp3` contract,
and `scripts/mcgrots-shot.mjs` — the one-shot review tool is outside this
unit's file scope, so a `--shot` render still shows the card and needs its
own `card.dismiss()` call added when someone next touches that script.
Audio playback is G4b's second dispatch.

**G4b part 2 (2026-08-14) landed audio playback.** New `src/mcgrots/audio.js`:
`createReaderAudio()`, a single shared `<audio>` element wrapped in a
`PannerNode`, driven from `main.js`'s `frame()` every frame with
`whatTheyAreDoing(now)`, the reader group's world position, and a listener
pose read fresh off `camera` each frame. No `AudioContext` is constructed
anywhere except inside `start()`, called once from `card.js`'s `onStart` —
the same pointerdown that dismisses the title card, per part 1's design.
Preload policy: at most one file loaded at a time, the currently scheduled
reading; `mediaEl.src` is set once per reading, never a prefetch queue.
`scripts/mcgrots-shot.mjs` gained the `card.dismiss()` call flagged as owed
in part 1.

**A real dev-server bug found and fixed, outside this unit's original file
scope: `scripts/serve.py` never supported HTTP Range requests.** Measured
directly (`curl -H "Range: bytes=1000-2000"` returned a full `200`, not
`206`): without `Accept-Ranges`/`206` support, Chromium's media pipeline
marks a progressively-downloaded `<audio>` element as **not seekable at
all** — `audio.seekable` stayed `[0, 0]` even once `buffered` covered the
whole file and `readyState` was `HAVE_ENOUGH_DATA`. Setting `.currentTime`
on such an element is silently dropped rather than throwing or queuing,
which is exactly the failure mode this unit's central risk warns about: it
looked like the seek-to-`elapsed` fix worked (no error, `.currentTime`
readback showed the assigned value momentarily) while every reading
actually still started from ~0. `scripts/serve.py` now answers a `Range`
header with real `206 Partial Content` (additive: a request with no `Range`
header is byte-for-byte the same response as before); re-verified against
the street's own suite (`npm run smoke:par`, shared server) — 323 PASS, 0
FAIL, no regression from the added `Accept-Ranges` header or the new
`send_head` branch.

**Gated, each with a control and a fault injection (`--only=audio`, its own
region, a real Playwright-synthesised click on the title card rather than
the other regions' synthetic `card.dismiss()` — Chromium's autoplay policy
needs genuine user activation for `AudioContext`/media playback):**

- *A mid-reading arrival starts near `elapsed`, not near zero*, with a
  fresh-arrival-of-the-SAME-reading control (isolates the clock, on a
  separate page — real wall-clock time never rewinds, and rewinding it on
  the same page leaves `currentId` already set, so the id-changed branch
  never re-fires). Fault-injected by deleting the `mediaEl.currentTime =
  info.elapsed` line: the mid-reading check went red (`elapsed=21.67s`,
  played at `0.00s`); everything else stayed green. Restored, 7/7.
- *A reader leaving mid-file stops playback outright, not a fade.* Jumps
  the clock from inside a reading to 20s past its `readEnd` — comfortably
  clear of `DEPART_LEAD_S` (7s) and comfortably short of the next visit's
  arrive-lead window (`GAP_S - ARRIVE_LEAD_S` = 38s past `readEnd`), a
  genuinely empty pitch rather than a moment a different reading has
  naturally started. Fault-injected by deleting the stop call on phase
  exit: check went red (`paused=false`); restored, 7/7.
- *The file that plays is the comic that is scheduled* — resolves
  `readerAudio.currentSrc` and compares its basename to
  `whatTheyAreDoing(t).id`. Fault-injected by hardcoding `audioUrl()` to
  always return a different, real, existing reading's file (a genuinely
  missing file blocks playback entirely via the 404 path below, which masks
  this check rather than testing it): went red; restored, 7/7.
- *No sound before the gesture* — `readerAudio.started === false` and zero
  `<audio>` elements exist at boot, checked before any click. Fault-injected
  by calling `readerAudio.start()` eagerly at module scope in `main.js`,
  bypassing `card.js`: went red (`started=true`); restored, 7/7.
- *A missing/blocked file does not throw* — `page.route()` 404s
  `**/assets/audio/*.mp3` on a page that has made no prior audio request (a
  page that had already succeeded once could serve the file from cache,
  masking the route), then asserts zero `pageerror` events. Two real,
  distinct bugs found while building this check, not just used to validate
  it: (1) a naive eager `play()` call (no `readyState` gate, matching the
  seek fix's own naive-first-draft shape) throws an uncaught
  `NotSupportedError` on a 404 — confirmed with `pageerrors=1`, restored;
  (2) the *shipped* code never actually calls `play()` for a missing file
  at all, because `loadedmetadata` never fires for a 404 and `play()` is
  gated behind it — so `.catch()` on `play()` turned out not to be the
  operative protection for this case, the `readyState` gate is. Documented
  rather than "fixed" further: both are real, the shipped path is safe by
  construction, not by the `.catch()` alone.

**All five checks use a bounded poll, not `page.waitForFunction`** — a
broken fault (audio that never starts) must read as one `FAIL` in the
report, not crash the whole region and hide every other check's result.
Found this the hard way: the first two fault injections above threw
`TimeoutError` and killed the process before printing anything.

**Not gated, named rather than built (the brief's own instruction — with
audio this list is long):** positional accuracy of the panner (only that it
is set every frame from real positions, never that the stereo image is
correct — no listener has ears here); loudness/level judgement; whether a
departure's stop *sounds* abrupt versus merely *is* abrupt in the numbers;
the 41 MB pool's aggregate network behaviour under a real ten-minute visit
(the "current file only" policy is asserted by construction — one
`mediaEl.src` — not measured under load); browser autoplay-policy variance
outside this Chromium build. Numeric gates cannot hear a bad sound, exactly
as they cannot see a bad picture (the brief's own framing) — **Dan has not
yet listened**, on the dev server, per the brief's "What Dan does" section;
this unit is not done until he has. See the session report for what to run
and what to expect.

**G4c part 1 (2026-08-14) fixed F14, the G4 phase gate's one real product
defect (not a gate fault).** `audio.js`'s seek target went stale by the
file's load latency: the closure that seeks and plays a newly-scheduled
reading captured `elapsed` at the moment `mediaEl.src` was assigned, not
the value once `loadedmetadata` actually fired — invisible on the dev
server (`127.0.0.1`, single-digit-millisecond loads) but the phase gate
measured 2.5s of drift on a 3s route delay. Matters beyond a fraction of a
second: § 6's multiplayer design rests on a reading sitting at `now − T`
for every client, and a permanently-drifting seek target breaks the one
property that argument needs. Fixed with a `latestInfo` closure variable
`update()` refreshes every frame, read by the seek instead of the stale
capture, plus a `wantId` supersession guard for a second id change racing
the same slow load. New gate: a deliberately delayed route plus an
undelayed control, drift <1s required on both, fault-injected by restoring
the original captured-closure form — went red (`drift 3.01s`), control
stayed near zero throughout, restored. Full account, including why the
control matters, in `MCGROTS-VALIDATION.md` § G4c (part 1).

`npm run smoke:mcgrots` → 63/63 (61 + 2 new).

**G4c part 2 (2026-08-14) closed all four gate faults.** F15, the one that
mattered: no check could tell playing from silent (`mediaEl.volume = 0`
left the region 7/7 green at measured peak 0.000, RMS 0.000). Closed with
an analyser tapped off the same signal `audio.js` already sends to the
panner — `AudioNode`s fan out without side effects, so `audio.js` itself
is untouched. New checks require RMS >0.005 while a reading plays and
<=0.005 during an empty gap; fault-injected the same volume mute and the
audible check went red, the control correctly stayed green. F16 (a clause
that could never fail — `audioElements === 0` is permanently true, since
`audio.js`'s element is never appended to the document) was dropped, not
mechanised. F17 ("stops outright, not a fade" could not see a fade —
a 3s fade passed 7/7) was renamed to "eventually stops playback" with the
gap admitted inline, per the brief's own ruling that this is a landing,
not a cop-out. F18 (the missing-file check had no positive control) gained
a `currentSrc` assertion; fault-injecting a genuine non-attempt showed the
old check's two conditions both still holding while the new one correctly
went red. Full account, including every fault injection, in
`MCGROTS-VALIDATION.md` § G4c (part 2).

**G4c part 3** corrected two records: the mid-reading delta, previously
logged as exactly `0.00s`, now states the `<2s` bound the check actually
enforces (three re-measurements on this machine: 0.15–0.20s, never 0.00);
and this file's architecture sketch above, which named a `reader.js` that
was never built — the module landed as `audio.js`.

`npm run smoke:mcgrots` → 65/65 (63 + 2 new from F15; F16/F18 changed
existing checks rather than adding new ones).

### G5 — The voices

Generate dialogue for **McGrot and the five principals** from the corpus in
§ 3, styled on the 205 director briefs in `scripts/tts-prompts/`, then TTS
through the existing `scripts/generate-tts.mjs`.

Each principal has a full specification in `docs/CANON.md` — temperament,
register, props, what is *established* canon versus *suggested* design freedom.
That split binds: established facts are not up for reinterpretation by a
generator.

**The trap, and the gate it needs.** Comic lines are sacred *as quotations*
(`CLAUDE.md` § Verbatim rule). A generator handed them as style context will
lift fragments straight into new complaints, which puts protected text into an
unprotected slot where someone later "corrects" it. New complaints are new
writing.

Gate: reject any generated line sharing an n-gram of more than six words with
the comic corpus. Mechanical, falsifiable, and it must be proven able to go red
by feeding it a known comic line.

`docs/CANON.md`'s Central Bar test and `docs/LEITH.md`'s sensitivity rules
apply to every generated line.

**G5a (2026-08-14) landed the text half. No audio, no game wiring.** Split
from G5 because McGrot's voice is Dan's curation call (§ 11, item 0.5) and the
placeholder has never been listened to — rendering audio first means paying
for, and forming an opinion about, a performance of text nobody has judged.
Brief: `docs/briefs/g5a-dialogue-generation.md`.

Two scripts, both Codex's: `scripts/generate-mcgrots-dialogue.mjs`
(deterministic, resumable, owns its seed, emits the 205-brief shape) and
`scripts/check-mcgrots-dialogue.mjs` (the gate). Output is
`generated/mcgrots-dialogue.json` — **six principals × eight lines = 48
original lines**, seed `1511506142`. The lines themselves, the scope decision
and the per-principal read are in **`docs/MCGROTS-DIALOGUE.md`**, which Codex
owns; this section is the pointer, not a second copy.

**The gate is falsified and holds.** Corpus indexed at 1475 source lines,
6531 normalised words, 541 unique seven-word windows — seven being "more than
six", per the rule above. All 48 lines pass with 0 plagiarism and 0 lexical
sensitivity violations. Fed a genuine comic line pulled from
`readings.json` rather than the checker author's own choice, it went red with
three matching windows and **exit 1**; the clean run exits 0. Numbers and the
exit-code check: `MCGROTS-VALIDATION.md` § G5a.

**Not voice-approved, and Codex said so unprompted** — the finding is that the
sample is uneven, not that it is good. McGrot is the strongest isolated
register. Pomplé risks aphorism density. Keth reads as generic prophecy rather
than Leith. Mike English's "international confidence" line is the weakest in
the sample. The Taxman and the Government Inspector are written as solo lines
and have not been tested as a two-actor exchange, which is how they would
actually appear.

**G5b (2026-08-14) fixed the register G5a flagged as uneven.** Brief:
`docs/briefs/g5b-register.md`. G5a's own write-up named four weak individual
lines; measured across all 48, the fault was systemic and none of those four
were the cause — 1 of 15 documented `LEITH.md` dialect-kit words used ("pal",
twice), "the fit o' the Walk" used 0 times against LEITH.md's "use
constantly", mean line length 12.1 words, 0 lines under 7. Almost every line
was one balanced sentence built as a concrete noun then an abstract lift —
one writer's habit wearing six hats, not six voices.

**Constrained form, not content** — the `CANON.md` characterisations were
right. `scripts/generate-mcgrots-dialogue.mjs`'s 72 hand-authored line cards
(12 per principal, unchanged structure) were rewritten against three targets:
dialect actually present and unevenly distributed (McGrot high, Mike English
— canonically an outsider — deliberately lower), a real fraction of lines
under seven words (fragments, interruptions, one-word replies), and the
noun-then-abstract-lift shape capped rather than default. Measured on the
rewritten 72-line corpus: dialect kit used in 24/72 lines (33%, up from 2%),
"the fit o' the Walk" used 3 times, 20/72 lines (28%) under 7 words, and only
13/72 (18%) still fit the old balanced-sentence shape. Survived unchanged, as
required: Pomplé's handwritten-sign device, the Government Inspector's "the
risk has declined to participate", and the plagiarism gate (module
untouched).

**Stayed with authored cards — no model call.** Dan ruled it on 2026-08-14:
proving the register is fixable by hand is the cheaper experiment, and the
fork to model generation stays live for later (recorded in the brief). The
generator's own comment already said "original line cards"; the roadmap
wording above ("Generate dialogue... from the corpus") reads as model
generation and does not match what exists — noted here so the record says
which thing was actually built.

**The Leith Badger joins the cast, and gets no lines.** Dan ruled the Badger
into the cast (`CANON.md` lists it as one of the roadmap's five regulars).
Giving it Pomplé's sign device would duplicate the one silent-character trick
the corpus has and weaken both; giving it speech has no canon basis (unlike
Pomplé, canon establishes no prop-holding or literate ability for wildlife).
No third device was found that wasn't either of those two, so the Badger has
no lines — a finding about how the cast works, not an unfinished card.
Reasoning: `docs/MCGROTS-DIALOGUE.md`.

**More dialect raised the plagiarism gate's stakes and it held.** More kit
words shared with the comics' own Scots means more seven-word collisions are
more likely, not less — watched for rather than assumed, and confirmed: all
72 rewritten lines still pass with 0 violations. `MCGROTS-VALIDATION.md` § G5b
has the three new mechanical gates (dialect quota, length distribution,
shape cap) and their fault injections.

**G5c (2026-08-14) wrote the two-actor exchanges G5a flagged as missing.**
Brief: `docs/briefs/g5c-exchanges.md`. `docs/CANON.md` puts the Taxman and
the Government Inspector opposite McGrot, not solo, and both principals had
only ever been written alone. Two exchanges, six turns each: McGrot vs the
Taxman, McGrot vs the Government Inspector. 72 lines became 84; no solo
line was revised.

**Turns live in their speaker's own `entry.lines`, on purpose.** Every
gate protecting this corpus reads text through exactly
`entries[].lines[].text` — a top-level `exchanges` array would have been
invisible to all four checks while the suite printed a passing count.
`exchange` (id) and `turn` (global ordinal) are additive fields on the line
object; nothing about the reachable path changed. Proven, not assumed: a
genuine `readings.json` line swapped into `mcgrot-exch-taxman-01` made the
plagiarism checker go red naming that exact turn, before anything else
was measured.

**Two mechanical gates joined the `dialogue` region**, still browserless at
0.0s: each exchange reassembles from the full line set into a gapless,
alternating-speaker run of at least four turns with no empty turn, and
McGrot appears in both. Both were fault-injected independently — a broken
turn ordinal, and a turn moved to the wrong speaker's entry — and each
took the reassembly check red on its own; restored, 6/6 clean. Numbers:
`MCGROTS-VALIDATION.md` § G5c.

**The two risks the brief named were watched, not assumed, and neither
regressed.** Procedural back-and-forth is naturally dialect-free and could
have dragged the 33% overall dialect fraction toward its 20% floor —
it didn't: both exchanges carry kit words (McGrot's "shan"/"gie", the
Taxman quoting "pal" back), so the fraction held flat at 28/84 (33%). More
McGrot text sharing more comic vocabulary could have raised plagiarism
collisions — the re-run at 84 lines still shows 0 violations, same as at
72. Full form-gate comparison in `MCGROTS-DIALOGUE.md` § G5c.

**G5d (2026-08-15) designed McGrot's voice and settled the service question.
Design only — nothing rendered, nothing wired.** The full record is
`docs/MCGROTS-VOICE.md`; this is the pointer, not a second copy.

**The keys we already hold do more than the roadmap assumed.** Measured by
real calls rather than read from docs: the Together key returns real MP3s
(Kokoro, Orpheus), and the FAL key reaches ElevenLabs TTS and produced a 40KB
44.1kHz file. § 11 item 0.5's assumption that this is a choice among Gemini's
30 prebuilt voices is superseded — **no new signup is needed**, and a voice
can be *designed* from a written description rather than picked from a list.

**Persistence decided the engine, not quality.** Of the three voice-design
models reachable on FAL, only **MiniMax Voice Design** returns a
`custom_voice_id` that can be called again. Qwen 3 Voice Design and Maya1
return audio only, rebuilding the voice from the description on every call —
McGrot would drift between lines, which is disqualifying for a character with
twelve solo lines plus exchange turns. They stay in the audition as a read on
whether the *description* works; they cannot ship.

**A probe trap worth not repeating:** FAL's queue reports `COMPLETED` for a
path that does not exist, with the 404 in the response body. Checking only the
status code "proved" an ElevenLabs voice-design endpoint existed when it does
not. Read the payload.

**Seven design questions settled by Dan** — early fifties, wear from both
smoke/fryer and sea/salt, mid-range and quick rather than deep and slow,
accent thickest on dialect words and clearer on ordinary sentences, rarely
shouts, sincerity drops and softens. One internal tension named rather than
smoothed over: early fifties is young for that much wear, so the description
earns it through heavy use rather than years.

**Six acceptance criteria, all judged by ear.** There is no numeric gate on a
voice and inventing one would be the decoration this project keeps deleting —
the existing RMS check already proves audio came out at all, which is the only
part a gate can honestly cover. The criterion expected to fail first is that
McGrot reads the comics' garbled text *verbatim* and it must sound like
confident speech rather than the model stumbling.

Sent to Andrew, McGrot's creator, for review 2026-08-15. Age and accent
thickness are the two calls flagged for his view.

**G5e (2026-08-15) built the audition rig** —
`scripts/mcgrots-voice-audition.mjs`. Renders the five audition lines through
MiniMax, Qwen and Maya, resumable, gitignored output with a committed
manifest. Full account in `docs/MCGROTS-VOICE.md` and
`docs/MCGROTS-VALIDATION.md` § G5e. Run once for real, smallest possible
(MiniMax, one line): 46s, ~$0.0001, `custom_voice_id`
`ttv-voice-2026081517153126-cFGhfIvB` captured. **Not listened to** — that is
next, and it is Dan's.

**G5f (2026-08-15) found audition 1's FAL result was worthless before it was
judged — none of the three engines sounded Scottish — and pivoted to
Gemini, which already did.** Full account `docs/MCGROTS-VOICE.md` §
"Audition 2" and `docs/MCGROTS-VALIDATION.md` § G5f. Director's briefs for
the twelve solo lines are authored by Dan, one file per line at
`scripts/mcgrots-voice-briefs/` (committed `55db0d2`), read verbatim — the
rig does not write voice-performance text. **Part A landed: 10 of 21 planned
Gemini renders**, ~$0.0098; the rest blocked twice by
`gemini-2.5-flash-tts`'s free tier (10 requests/day/project/model, shared
with `daily-tts.sh`'s cron), not by anything in the rig.

**Part B and C landed same day, once FAL was topped up.** All 15 of the FAL
set rendered (MiniMax, Qwen, Maya × 5 lines, accent-first prompt) across two
passes — a transient billing lock 403'd three calls mid-run, correctly
reported and not looped on, and a second identical command filled the gap.
MiniMax's design-once-reuse is real: one voice id
(`ttv-voice-2026081518363626-ZFQUVUyB`) covers all five clips, confirmed by
a live call to `fal-ai/minimax/speech-02-turbo`, not assumed from docs.
Audition 1's stale files moved to `docs/voice-audition/audition-1/`, not
deleted.

**2026-08-16: the account went paid, and the remaining 11 Gemini renders
landed with zero 429s** — confirmed empirically (the run logged none), not
assumed from Dan's report of the top-up. Also new: `gemini-2.5-pro-preview-tts`
(2x Flash's price, no free tier ever) auditioned on the same three
cross-comparison lines as the FAL set, same voice (Algenib), files named so
each line's Flash/Pro pair sorts adjacent. `docs/voice-audition/INDEX.md`
rewritten to cover all 39 rendered clips (15 FAL + 24 Gemini across two
models and four Google voices), grouped by the words spoken, plain language,
every filename cross-checked against disk.

**2026-08-16, Dan's verdict: FAL is out.** All three engines fail on accent
— MiniMax and Maya read English, Qwen American — confirmed a second time
against the rewritten prompt, closing that route rather than leaving it
open. The decision is now Google's Algenib vs Orus. They weren't
comparable (Algenib had all 12 lines, Orus only 3), so Orus was rendered on
the remaining 9 — both finalists now cover the same 13 lines including a
newly-authored Taxman-exchange brief (`86740a7`) neither had before. A
26-voice shortlisting pass (every other Google prebuilt voice, one line
each) ran alongside as a sanity check, explicitly not a third audition.
`docs/voice-audition/INDEX.md` restructured around Algenib-vs-Orus as the
headline, FAL demoted to a rejected appendix. Two stray files found in the
audio folder (a `.zip` and a macOS duplicate-on-extract) — investigated,
confirmed not from this rig, left in place.

**Still G5's, not done:** the listen itself and the pick between Algenib and
Orus (Dan's, with Andrew), getting the files to him (explicitly not this
unit's — no Drive upload), TTS rendering of the 84 lines once a voice is
picked, and wiring any of this into the game.

### G6 — Pomplé

The relationship. He needs a state you can move — fed, near, watching you,
watching McGrot — and he has to be legible without dialogue, because he is a
dog. **His silhouette and head-turn are the load-bearing animation in the whole
game**, and that should have been a G1 judging criterion; if G1 has already
run, re-check the winner against a dog before committing.

**There is one Pomplé, and he is McGrot's — not the player's.** Dan ruled this
2026-08-15, on noticing that a per-player companion does not survive
multiplayer: several visitors would each own a copy of the same dog. He is an
independent entity belonging to the pitch, exactly as McGrot is.

**This is § 6's discipline, and G6 is where it first bites.** The rota is
already a pure function of wall-clock time so no world state goes on the wire.
A dog whose state the player can *change* is world state, so the design has to
split his behaviour in two before any of it is built:

- **Per-client presentation, free and needing no wire.** Where he looks, who
  he tracks, whether he reacts to the nearest visitor. Every client already
  has peer positions, so "watching you" is computable locally and is correctly
  different for each viewer — each person sees the dog notice *them*.
- **Shared state, which is expensive and must be justified.** Anything
  persistent and mutable — fed, befriended, moved — has to be authoritative
  somewhere, relayed, and reconciled. It breaks the "world is a function of
  the clock" property that keeps netcode at ~600 additive lines.

**The unresolved part, deliberately left for G6 rather than guessed now:**
whether the relationship survives with no shared mutable state at all. A dog
that reacts richly but remembers nothing may be enough — dogs are legible
moment to moment, and the emotional beat may live in being noticed rather than
in a persistent bond. If it is not enough, the cost of the shared-state route
gets paid deliberately and with the § 6 corollary in view, not by accident.

**G6a landed 2026-08-16** — presentation only, per the split above. The
re-check the first paragraph asks for was run before building and came back
negative: G1's winner (A1 skinned) has no rig for a quadruped at all, and A2
segmented gives a dog one rigid part with no head joint. `src/mcgrots/pomple.js`
builds its own two-part rig instead of forcing either. The remembers-nothing
question is now Dan's to judge, and is unaffected by anything measured.

**G6b.2 landed 2026-08-16** — McGrot himself, standing at the van's serving
opening, wearing a beret. Unlike Pomplé, G1's A1 skinned rig already has a biped
entry for `mcgrot` (`assets/characters/mcgrot-rig.json` exists), so there was no
bake-off question; `src/mcgrots/mcgrot.js` reuses `actor.js`/`actors/skinned.js`
directly. The beret is the whole unit, per Dan's ruling that a new body is
G8a's — sized off a live measurement of the actual mesh, not guessed, and
gated with an on/off toggle rather than the van/pomple regions' weaker static
check (see F21 above for what that check-swap caught). `pomple.js`'s
`MCGROT_LOCAL` is now imported from this module rather than kept as a second
copy. Full details, numbers and both fault injections:
`docs/MCGROTS-VALIDATION.md` § G6b.2.

### G7 — Judge against the kill criterion

**PASSED, 2026-08-18. Dan watched the full ten minutes and called it.** His
verdict verbatim: *"I think we can say g7 is done because I've just watched the
10 mins. For PoC it's ok. We need a phase soon where we holistically tidy up
and do some polish."*

**Read the bar exactly as met, and no wider.** The criterion below asks whether
he wants a second run, not whether the thing is good. "For PoC it's ok" clears
that bar and explicitly does not clear a quality one — the same distinction
§ 11.0.1 draws for the audio, which he passed as sound while leaving its
delivery unrefined. **The project continues; it has not been declared good.**

**He asked for a polish phase, and it is not G8a.** A holistic tidy-up and
polish pass is now wanted "soon", ahead of or alongside rebuilding the leads.
It has no brief yet and no number attached. Its scope should be derived from
what the phase gate finds rather than assembled from this session's own sense
of what is untidy — the session that made the mess is the worst judge of it.

Known candidates, recorded so they are not lost, NOT a plan: F24's ground-plane
conflict (reopened and still live, G7p in flight against it), the audio
delivery pass deferred at § 11.0.1, `scripts/smoke-mcgrots.mjs` at ~4,400 lines
and one region per unit, the `style` region's page navigation that it never
restores, and Pomplé's sign reading as a board beside the dog rather than one
he holds.

---

Stop and apply the bar before spending anything on the real cast. The visit
should be playable end to end on stand-in bodies with real voices. Dan sits
through it. If he does not want a second run, the honest outcome is to say so
and stop — a measured rejection is delivered work, not a shortfall.

**THE EIGHT ARE PICKED, 2026-08-17.** Dan delegated the choice ("you choose for
now") and the pick is G7a's own proposed set, unchanged: `2b2110bb`,
`19f35bc7`, `03347596`, `0121c47c`, `022bcde2`, `08d846d0`, `00f88d65`,
`0738152e`. They are already rendered in Algenib by G7e and Dan has heard them
("happy with them"), so the choice costs nothing to keep and re-picking would
throw away eight clips. Revisit only if a reading reads badly in the sequenced
visit — the shortlist's other 12 are still costed and available.

**Their real durations are 144.0s, not 185.4s.** G7e's Algenib renders are
22.3% shorter than the vendor placeholders this section was budgeted from. That
adds ~41s of slack to the ten minutes; `docs/g7-visit-shape.md`'s silence rows
are conservative by that much.

**G7a landed 2026-08-16 — the shortlist exists, in `docs/g7-reading-shortlist.md`.**
418 → 156 transcribed → 135 with a verified mp3 → 121 after 14 broken or
non-strip assets → 115 after duplicate performances → a shortlist of 20, each
image opened rather than checked by title. A worked set of eight totals 185.4s,
leaving roughly 6.9 minutes of the ten for walking, complaints and Pomplé.
Verified here independently: the catalog counts reproduce, and `ffprobe` on the
proposed eight returns each duration to 0.1s and the same 185.4s total.

Three things that unit found beyond its brief, all worth carrying:

- **The two known duplicate pairs are TRIPLES**, and there are two further
  unlogged duplicate pairs. Found by comparing quoted verbatim lines across all
  135 candidates rather than by title.
- **The 135 mp3s are in VENDOR voices, not Algenib.** They are evidence about
  the writing and the length and nothing else. Whatever eight Dan picks must be
  regenerated in McGrot's voice before G7 is run, and that regeneration is
  blocked behind the Algenib collision in § 11.
- **A 136th mp3 exists that the funnel deliberately excludes**: `3c6b637b`,
  "McGrot — The Badger Consultancy", which has audio but no `npc` block because
  an `npc` block would make him vendor 125 (see `CLAUDE.md`). It is the only
  clip in the catalogue that is McGrot reading as himself, so it is the natural
  reference for what the regenerated eight should sound like — but it is not a
  shortlist candidate and must never be counted in the 135.

Also recorded there: 53 of the 115 clean candidates fall outside the 78-comic
G6b.1 audit and have NOT had an image opened. **Superseded by G7d, same day:
that gap was real against set-a alone, and `comic-features-set-b.md` closed 52
of the 53 before anyone acted on it. The true remainder is one comic,
`13dc6c45`, now audited in `docs/comic-features-set-c.md`.** The whole reading
pool has now had every image opened.

**G7c landed 2026-08-16 — `docs/g7-voice-collision-costs.md`, and it found a
prerequisite nobody had seen.** Costing the readings turned up the fact that
matters more than the costs:

**There is no code path that renders a reading in McGrot's voice.** Two
independent blockers, both verified here:

1. `scripts/generate-tts.mjs` selects targets with
   `!existsSync(join(root,'assets',audioRel))` — it skips anything already
   rendered. All eight proposed readings already carry a vendor mp3, so
   pointing the generator at them is a **no-op**, not a re-render. Producing a
   McGrot-voiced version needs a separate output path and a small script;
   neither exists.
2. `scripts/tts-prompts/<id>.txt` for those eight are the **vendor's** director
   briefs, not McGrot's. Confirmed by reading `2b2110bb.txt`, whose Audio
   Profile is Shug Gantsie, a jumpy nightwatchman. Eight McGrot-persona briefs
   do not exist, and per `docs/MCGROTS-VOICE.md`'s settled convention **Dan
   authors them**.

So the voice work on G7's critical path is not "pick a voice" — that is
settled — it is *(a)* Dan writing eight McGrot director briefs and *(b)* a
small unit building the render path. Sized as estimates against the only real
per-call timing in the repo (35 Gemini calls in
`docs/voice-audition/manifest.json`, mean 5.3s, range 2–15s): ~9,292 prompt
chars, roughly $0.05–0.06, and 98–176s of wall clock. The money is
irrelevant; the missing script and the missing briefs are not.

**The three collision routes, costed.** Route 1, reassigning the six Algenib
vendors: five are already rendered (200.9s, 7,023 chars, ≈$0.06, ~59–107s) and
one has never been rendered, so it is free to redirect. Route 2, accepting the
echo: zero cost, and it does not touch the collision. Route 3, taking McGrot
off the prebuilts: **cannot be costed, because no live implementation exists**
— the audition rig is never called from the shipped render path, and FAL was
closed out on accent (not cost; three engines rejected on it across both
audition rounds).

One thing G7c flagged that is nobody's job yet: **voice assignment for future
vendors happens outside this repo.** `prep-comics.mjs` hard-codes only the
three v1 comics, so nothing in-repo stops a future batch landing back on
Algenib and deepening the collision after it has been resolved.

**G7h landed 2026-08-17 — `visit.js`, the sequencer. This was the single
largest code gap before § 9 could be run at all.** `docs/g7-visit-shape.md`
placed the ten minutes on a clock; nothing before this unit drove the game
against it. Full account, including the two mid-build corrections, in
`docs/MCGROTS-VALIDATION.md` § "G7h — the ten-minute visit sequencer" — the
short version: the visit is a pure function of the wall clock, matching
`rota.js`'s own shape (Dan's ruling, protecting roadmap § 6's "never from
session start"), and its reading/complaint durations are now the MEASURED
ffprobe figures against the landed clips (144.0s / 38.6s), not the shape
doc's vendor-voice estimates — `docs/g7-visit-shape.md` is consequently now
the document out of date against `visit.js`, not the reverse, and is Dan's
to reconcile. Shipped OFF (`?visit=on`); the full suite is 99/99 with all
four gates fault-injected and confirmed to go red before being restored.
Pomplé's three scripted beats are explicitly out of scope (G7h §5;
`pomple.playBeat?.()` is a guarded no-op today) — briefed separately as G7i.

### G8a — McGrot and Pomplé, from the comics

**Dan's ruling, 2026-08-16: the current bodies do not look like the comics, and
that is a prototyping phase of its own rather than a fix inside G6.** Both leads
need a real pass — silhouette, proportion, and whether they read as the drawn
characters — and until it runs, G6 and G7 work with the stand-ins as they are.

This is why the two Pomplé faults in § 10 stay carried. Both live in geometry
this phase replaces, so spending a worker on the current mesh buys nothing that
survives it.

Sequenced after G7 deliberately: G7 judges the visit on stand-in bodies, so a
"no" costs no modelling time. It sits ahead of G8's five principals because the
two leads carry the pitch and the rest of the cast do not.

### G8 — The real cast

Only if G7 passes. Five principals through `scripts/gen-character.mjs` →
`scripts/gen-mesh.mjs`, then `normalise()` in `characters.js` so they carry the
same treatment as everything else. Re-judge each against the G2 style; the
pipeline was settled at E3a and is not being re-swept.

### G9 — Ship on GitHub Pages

Six to eight comics and their mp3s, plus the generated voice lines.
Single-file artifact via `build.mjs` if it comes free; otherwise the multi-file
site. Deploying stays Dan's explicit call.

### Later — Multiplayer

`docs/ROADMAP.md` § E7b already specifies it: one Cloudflare Durable Object,
the hibernation API, `~10 Hz` transforms, no chat, preset Leither names, peers
kept out of any geometry hash. Scoped to one pitch it is smaller than the
street version. Requires the E7a move off GitHub Pages.

---

## 6. The one discipline that keeps multiplayer additive

**Drive the rota from wall-clock time, never from session start.**

It costs nothing today and it is the whole reason netcode stays ~600 additive
lines later. If the world is a pure function of the clock, no world state ever
goes on the wire — a server hands out an authoritative time and relays
`{x, z, yaw}`, and every client computes the same schedule. Shared listening
then falls out for free: a reading that began at T is at `now − T` for
everyone, and a late arrival joins mid-sentence, which is correct. That is what
walking up to a busker is.

The street already proved the principle — `docs/ROADMAP.md` § E7 calls
determinism "the asset here" for exactly this reason.

Corollary: keep peers and the player out of any geometry hash, the way
`leithers.js` already is.

### The persistent world is the product. The scripted loop is scaffolding.

**Dan's ruling, 2026-08-17**, settling the question the ideation session raised
as § F1 of `docs/g7-ideas.md` — whether G7h's fixed 28-cue timeline is a *demo
of* the wall-clock world or a *replacement for* it:

> "It is a persistent world, you can log in any time. Yes it's currently on a 10
> min scenario that will loop but that's for poc. Once we've polished it, we'll
> randomise and expand scenes."

So the answer is demo, not replacement, and this section keeps paying. Three
things follow, and they are the reason this is recorded here rather than in the
G7 narrative:

- **`visit.js`'s 28 cues are a fixture, not the design.** Anything built on the
  assumption that the timeline is fixed, ordered or ten minutes long is building
  on scaffolding. Randomised and expanded scenes are the direction of travel.
- **Arriving mid-something is correct behaviour, not an edge case.** G7h already
  snaps a joining player to the current cue's anchor for this reason.
  `audio.js` has always seeked to `elapsed` on arrival so a late arrival hears
  the middle of a file — see § F2 of the ideas doc, which is now a wanted
  feature rather than an option.
- **A character appearing twice in one ten-minute window is a fixture problem,
  not a cast problem.** The ideation session proposed cutting one of the two
  bureaucrats (§ E2) because their registers overlap. Declined on this ruling:
  two officials who never share a scenario are not one joke twice. The
  constraint belongs in whatever schedules scenes, not in the cast list. Both
  keep their fifteen lines.

---

## 7. Verification

`CLAUDE.md`'s contract holds unchanged. The parts that bite hardest here:

- **Never report a measurement you did not run.** Three street milestones
  landed on false numbers. Run the suite; do not reason about blast radius.
- **Prove every new gate can go red.** Fault-inject, watch it fail, restore —
  and commit before injecting, or the injection survives into the next run
  looking like a second bug.
- **Every acceptance measurement names a control** that isolates the system's
  own contribution. "On vs off" is not isolation if both arms derive from the
  same function.
- **Numeric gates cannot see a bad picture.** Anything the player watches gets
  rendered and the review opens the captures. This project is almost entirely
  things the player watches, so this is the default, not the exception.
- **Nothing intentional lives under a golden tolerance.** Delete and recapture;
  never `--update-goldens`.

The new suite starts small and stays fast. It is a fresh file with its own
regions — resist the pull to merge it into the street's, which is paused and
should stay green and untouched.

---

## 8. What must not break

- **McGrot's actor faces `(+sin yaw, +cos yaw)` — the OPPOSITE of the street.**
  `CLAUDE.md` documents the street's forward as `(-sin yaw, -cos yaw)`, and
  that is correct there and wrong here. Measured, not assumed: walk the actor
  toward `+x` and `group.rotation.y` settles at `1.5708`, giving
  `(sin, cos) = (1, 0)`; re-confirmed 2026-08-12 by sampling travel direction
  against `(+sin, +cos)` for a dot product of exactly `1.0000`. **Any
  derivation copied from the street's formula comes out mirrored**, including
  where a review camera is placed — which is how G3c rendered a shot, looked at
  it, and read backwards as forwards (§ 10 F1). Derive a direction from travel
  where you can; it needs no convention at all.
- **Authored scene content gets a RENDERED-FRAME check, never a scene-graph
  one.** A check that asks the scene graph whether something exists passes
  while the thing is invisible, unlit, off-camera, or behind another object —
  `statue.visible = false` left the statue region 2/2 and the suite 38/38
  (§ 10 F9). G3a's van region has the technique that works: project the AABB
  into screen space and require luminance variance inside it, against a
  corner-patch control.
- **The street is paused.** `src/main.js` and the street modules are not to be
  edited. Any change to a *shared* module must be additive, and the street's
  own `npm run smoke:par` must be run to prove its goldens did not move. That
  is the only reason to run the street's suite at all now.
- **The daily TTS agent is off** (`com.mcgrot.daily-tts`, stopped and disabled
  2026-08-10). Do not re-enable it as a side effect. Re-enable deliberately
  with:
  `launchctl enable gui/$(id -u)/com.mcgrot.daily-tts && launchctl bootstrap gui/$(id -u) ~/Library/LaunchAgents/com.mcgrot.daily-tts.plist`
- **Seeded PRNG order is sacred**, and a module gets its own generator rather
  than drawing from a shared one. One extra draw from a shared sequence
  reseeds everything downstream — that is what moved the entire crowd at E3f.
- **The verbatim rule.** Garbled comic text is never corrected, anywhere,
  including in anything a generator produces.
- **`assetUrl(assets, path)`** is the only way to resolve an asset. Both build
  modes depend on it.
- **Pushing and deploying stay explicit asks.** Committing does not.

---

## 9. The kill criterion

**One good ten-minute visit.** The test is whether Dan would willingly sit
through it a second time.

That is a felt judgement, not a checklist, and it is deliberately not
mechanised — every gate in this project measures whether something is *correct*
and none of them can tell whether it is any good. G7 is where it gets applied,
before the expensive character work in G8.

What the visit has to contain to be judged at all: the chosen style, a walk
between anchors that reads well, six to eight readings on the wall clock,
McGrot's complaints in the gaps, and Pomplé doing something you notice. Bodies
may be stand-ins. Voices may not.

**Failing is a valid outcome and should be reported as one.** The reason this
project exists is that the street was allowed to keep going at 80%.

---

## 10. Known faults — carried, not blocking

### F24 — the van and McGrot were authored to two different ground planes (Dan, 2026-08-17, from a render)

**His proportions are NOT wrong — that was the first hypothesis and it is
false.** McGrot measures 1.77 m, a normal human height. Measured off the live
scene:

| part | y range (m) |
|---|---|
| McGrot | 0.00 → 1.77 — feet on the road |
| `van-body` (the floor) | **0.62** → 2.67 |
| `van-counter` | 1.09 → 1.15 |
| `van-wheels` | 0.02 → 0.82 |

He stands at road level *inside* the van's plan footprint (his x[8.56, 9.65]
and z[−6.47, −5.54] both sit inside the van's), so his legs occupy the same
space as the van's underside. That is the clipping visible in every `counter`
capture.

**The two halves cannot both be satisfied as authored.** A counter at 1.12 m
crosses a road-level figure at mid-chest, which is why the shot currently
composes well. Stand him on the van floor instead and the same counter sits
0.50 m above his feet — knee height. The counter was authored for a figure on
the road; the van for one standing inside it.

**REOPENED 2026-08-18, same day, by Dan reading the capture.** The valance
landed and works — proved by rendering the `counter` anchor with it on and
off: trousers and boots are plainly visible with it off and gone with it on,
and the pixel diff between the two arms is confined to a single band at
y 425-530. **But he then asked why McGrot's lower body is still in the van,
and he was reading the picture correctly.**

What is still visible is the APRON, not the legs, and the cause is a second
fault F24's own measurements never named. Measured from the `counter` camera:

| from camera at (8.12, 2.00, -12.33) | distance |
|---|---|
| McGrot's centre | **6.501 m** |
| the van's solid front panel (below the sill) | **6.539 m** |
| where a figure standing INSIDE the van would be | 7.734 m |

**He stands 3.8 cm in FRONT of the van's front panel**, not inside it. F24's
original note said he was "inside the van's plan footprint", which is true of
the x/z footprint and misleading about depth — he is at its very front edge,
proud of the body. So every part of him above the valance line (0.64 m)
renders OVER the van rather than behind it, and his apron hangs below the
serving sill (1.14 m) where a solid cream panel should be occluding him.

The valance therefore concealed the bottom 0.64 m of a figure standing in
front of the van. It did what it was asked; the request was aimed one fault
short. **Undecided — Dan's call**, and the options are the same three as
before plus one this measurement makes newly cheap: push him back along the
van's local +z until he is behind the front panel, which needs no geometry
change but does move the framing at the anchors that see him.

**DECIDED 2026-08-18: fix 1, the valance. Dan's call.** Built as G7o. The
reasoning that won it is the one below — it is the only option that leaves
every authored shot and every existing capture untouched, which matters
because the counter composition already reads well at `counter` and options 2
and 3 both move the framing at every anchor.

**It is a concealment, not a correction, and the record should stay honest
about that.** McGrot still stands at road level inside the van's plan
footprint; the valance hides the overlap rather than resolving it. If G8a or a
later unit gives the van an interior the player can see into, this decision
must be revisited rather than built on — the geometry underneath is still
wrong.

Three fixes, not equivalent, none measured yet:

1. **Hide the leg zone** — bring the van's lower body or a valance down toward
   the ground. Cheapest, preserves every authored shot and a composition that
   otherwise reads. Recommended for the PoC. **← chosen**
2. **Commit to a van you stand in** — raise him to 0.62 m and the counter to
   ~1.55 m, with props and price board. Most correct, but moves the framing at
   every anchor and will shift captures.
3. **Commit to a stall you stand behind** — drop the van floor to near ground
   level. Changes what the vehicle reads as.

Does not block G7; it is visible in the kill-criterion visit and should be
decided before G8a rebuilds the leads.

Things that are wrong, deliberately left, with enough detail to pick up cold.
Distinct from § 11, which is undecided questions rather than broken work.

### F25 — four regions gate on a proxy that was never measuring visibility (found 2026-08-18 by G7p)

**Severity: high, and it is a gate fault rather than a product one.** Found by
the `pushback` worker while doing something else, which is how the good ones
are found.

Four regions — `mcgrot`, `beats`, `taxman`, `valance` — share one technique:
measure what fraction of McGrot's own AABB actually draws, and treat that as a
proxy for "is he visible". F22 established it with a 20% floor and three more
regions adopted it.

**It was never measuring visibility. It was measuring whether a standing figure
is unoccluded**, and it held only while he stood in the open, in a natural band
of 29-34% of his own box. Put him deliberately behind a counter — which is
exactly what F24's fix requires — and roughly half his box is hidden on
purpose, so the number collapses to ~10% and **nine checks across those four
regions go red at once.**

That is one root cause, not nine bugs. Enumerated by G7p:

| region | checks | reading |
|---|---|---|
| `mcgrot` | F22, its "fix disabled" control, the rota-reader follow-up | 10.2% against a 20% floor |
| `beats` | `approach`, `settle` | idle motion now moves fewer pixels than their fixed margins require |
| `taxman` | two, at `wall` | 10.0%, same technique, same floor |
| `valance` | its "F22 unaffected" pair, at `counter` | inherits the drop |

**The geometry fix is correct and is NOT the defect.** G7p measured nine
candidate positions and found no middle distance — the crossover is a cliff,
not a slope, and it sits on the wrong side of the 20% floor. At every position
where F22 still clears 20%, the apron and both fists are still plainly drawn
below the counter shelf. At the chosen position the sill band drops from
20.9-24.3% to 0.6-5.0% at every anchor and all five captures read clean, with
no dim-face problem despite that being the named risk.

**Held unmerged on `g7p-pushback` deliberately**, so `main` stays green and
nothing false ships. Landing it needs the four regions' technique re-derived
first — a check on a figure who is *supposed* to be half hidden must measure
the part that should be visible, not the whole box. **Do not lower the floors
to fit.** That is the change that would make every one of these checks
permanently meaningless, and the floors are not the problem.

Belongs to the polish phase Dan asked for on 2026-08-18.

### F1 — The seated pose is wrong (G1; REOPENED 2026-08-12 by the G3 phase gate, CLOSED 2026-08-12 by G3e)

**Severity: high.** The player sits near the van and listens; this is the
posture the game is mostly in.

**Status: CLOSED (G3e, 2026-08-12).** G3c recorded this CLOSED on 2026-08-12
and it was not. The G3 phase gate re-measured it the same day and found two
live defects: the legs extend BACKWARDS, and the thighs are buried in the
capstone. Both are below, and both are now fixed together — see "G3e's fix"
at the end of this entry and `docs/MCGROTS-VALIDATION.md` § "G3e" for the
measurements, the fault injections, and what the fix does not settle.
Re-confirmed independently before this entry was rewritten — walking the actor
and sampling travel direction gives `facingAgreesWithPlusSinCos = 1.0000`, and
at full sit `thighL.rotation.x = +1.5466` puts the knee **0.3727 m behind** the
hip along that measured facing. What G3c genuinely did fix — `SEAT_HEIGHT`'s
derivation and the pelvis tilt — stands, and is kept below.

**Root cause of the first defect, measured rather than assumed** (`hips`
bone, `getWorldPosition`, both sitting anchors): the rig's hip joint has
**zero local x/z offset** from the actor's group origin, seated or standing —
the thighs swing the knee and foot forward as children, but the hip itself
never moves horizontally. G1's placeholder ledge was offset 0.3 m behind the
standing spot, a number chosen independently of this. G3c centred the ledge
exactly on the anchor, no offset.

**That removal was itself wrong**, and is part of the second open defect below.
The hip's own horizontal offset was never what the 0.3 m was for: its job was
to put the seat's FRONT EDGE under the buttocks so the thighs swing clear of
the stone, which derives from the seat's DEPTH (`SEAT_DEPTH/2 + CAP_OVERHANG` =
0.325 m), not from the hip. A correct rig measurement was used to delete a
number it had no bearing on — the trap being that the measurement really was
right, and really did refute the reason the code gave for the offset, while
saying nothing about the reason the offset was needed.

`anchors.js`'s `SEAT_HEIGHT` was stale twice over: its comment cited
`SEAT_DROP` as 0.26 (corrected to 0.22 in `f0982fc`, comment never revisited),
and even that derivation didn't match how the group hierarchy actually
composes — `SEAT_DROP`'s translation lands in the PARENT's units (already
metres) while the `hips` bone's own rest position is one level deeper and
does get the ×1.72 height scale. Measuring the live bone at full sit was the
only way to the real number: **0.5712 m**, now `SEAT_HEIGHT`.

**First open defect — the legs extend backwards.** G3c's brief warned that the
suggested diagnosis (the thigh's rotation sign) was reasoned rather than
checked, and G3c did check it: it rendered the walk cycle from a side profile,
read positive `rotation.x` as swinging the leg FORWARD, and made no sign flip.

**That reading was inverted, and why is worth keeping.** The profile camera was
placed using the STREET's facing formula, `(-sin yaw, -cos yaw)` — the one
`CLAUDE.md` documents — but McGrot's actor faces the opposite way, `(+sin yaw,
+cos yaw)` (§ 8). Every derivation from the street's formula
comes out mirrored, so a shot believed to be of the figure's left side was of
its right, and forward read as backward. The check was real, was rendered, and
was looked at; the frame of reference under it was wrong.

Measured against direction of travel, which needs no convention at all: the
correlation between `thighL.rotation.x` and the knee's along-travel offset is
**−1.000**; at `+0.55` the knee is 0.1978 m behind, at `−0.55` 0.1978 m ahead.
Positive swings the leg BACKWARD. The sit pose uses a positive thigh term, so
at full sit both thighs point behind the figure. Rendered confirmation: a
camera on the figure's true front shows the face and NO LEGS — from the front
the figure reads as standing in a booth behind a wall.

**The fix, demonstrated by the phase gate but deliberately not landed by it**
(it needs the second defect fixed alongside, since the sit pose can only be
judged once):

```js
const thigh = -sit * (Math.PI / 2) * 0.80;
const shin  =  sit * (Math.PI / 2) * 0.74;
```

Both signs are the mirror of the intent the code comment already states.
Flipping `thigh` alone puts the legs forward but hovering — the shin then
continues forward instead of dropping, so it must flip too.

**Second open defect — the thighs pass through the capstone.** A consequence of
how `SEAT_HEIGHT` was derived, so it survives the sign fix rather than being
cured by it. `SEAT_HEIGHT` is the HIP BONE's measured world height, 0.5712 m,
and the ledge's cap top is built at exactly that. Someone sitting on a wall
rests the thigh's UNDERSIDE on the surface, so the hip bone sits above the
stone by roughly the thigh's radius, not level with it. The thigh drops only
0.065 m over its 0.373 m run (re-measured here: `kneeBelowHip = −0.0656`),
leaving the cap's rear face at y = 0.5144, still inside the cap's 0.5112–0.5712
range. **The whole 0.325 m of thigh inside the ledge is buried in stone**, both
sides, both anchors. The along-facing offset struck above comes back with this
fix.

**Third defect (torso huddle).** This rig has no separate pelvis bone —
`hips` IS the pelvis, and is also the parent of `spine` and both thighs.
Added `hips.rotation.x = -sit * 0.15`, compensated on both thighs so their
world-space angle (already confirmed correct) is unchanged; only the spine's
world angle moves. **Modest improvement on re-render, not a dramatic one** —
recorded honestly rather than claimed as fixed outright.

Gate: `docs/MCGROTS-VALIDATION.md` § "G3c", `seat` region — the seated hip's
position against the ledge's actual `Box3`, at both `wall` and `kerb`, against
a standing-at-the-same-anchor control. Fault-injected (the old independent
`-0.3` offset restored) and confirmed red at both anchors, the control staying
green throughout; the first version of the check did NOT catch that fault
(footprint containment is generous enough that a 0.3 m mislocation still lands
inside the box) and was redesigned to distance-from-centre before it did.

**That gate is blind to both open defects** (§ F10). It measures the HIP, which
has zero horizontal offset in any pose, so flipping the thigh sign leaves the
suite 38/38 green. Worse, its vertical assert `Math.abs(hip.y - box.max.y) <=
HEIGHT_TOL` actively REQUIRES the bone to sit at the stone surface — it encodes
the second defect as the specification, and passes with zero margin used. The
check the phase gate names as the one that would have caught it: **knee offset
from hip, projected on the actor's facing, required positive**, at both sitting
anchors, standing at the same anchor as the control.

Captures opened by G3c: `wall.png`/`kerb.png`
(`docs/smoke/captures/mcgrots/g2/`), `arrived` column, under S2. G3c read the
seated hip as resting on the capstone and the legs as extending forward — the
first is true, the second is not. **An image was opened and the fault was still
missed**: at those anchor distances the legs are a few pixels and the figure
was read as plausible rather than examined. Opening a capture is necessary and
is not sufficient. What made it unmissable was the phase gate deliberately
parking a camera on the figure's front, which is not one of the five shots.

**G3e's fix (2026-08-12), landed as one commit with F10's replacement gate.**

Signs mirrored exactly as demonstrated above:

```js
const thigh = -sit * (Math.PI / 2) * 0.80;
const shin  =  sit * (Math.PI / 2) * 0.74;
```

Verified against travel, not a yaw formula: walking the actor and sampling its
own movement gives `dx·sin(yaw) + dz·cos(yaw) = 0.9999999999999999`.
`PELVIS_TILT`'s compensation needed no change — algebraically it cancels
`hips`' own tilt (`world = -sit·PELVIS_TILT + (thigh + sit·PELVIS_TILT) =
thigh`) regardless of `thigh`'s sign.

The along-facing offset came back, exactly as diagnosed: `main.js`'s ledge
holder is now `SEAT_DEPTH/2 + CAP_OVERHANG` = 0.325 m behind the anchor along
the holder's local `-z`, which its own `rotation.y = a.yaw` maps to the
actor's facing, reversed.

**Measured rather than guessed: does any leg vertex intersect the ledge's
solid volume.** Manually skinned every vertex weighted ≥50% to a thigh or
shin bone (bind matrix × blended bone matrices × inverse bind, matching
three.js's own vertex shader), transformed into the ledge's local frame, and
tested against the wall's base-course box and the cap's box separately: **zero
hits in either, at both `wall` and `kerb`**, 1010 leg vertices checked per
anchor. The along-facing offset alone cleared both defects — `SEAT_HEIGHT`
did not need lowering and the figure was not raised via `SEAT_DROP`; the
brief allowed either path and measurement decided neither was necessary.

Rendered and opened: a front view and a true side profile at both anchors,
camera parked from measured facing rather than a yaw formula, plus 600-frame
S2 renders at the real anchor distance. Seen: legs extend forward and down to
the ground, feet planted in front, thighs resting above the ledge rather than
through it, the seat's front edge under the buttocks. At the real anchor
distance the pose reads as sitting.

F10's gate replaced — knee offset from hip, projected on facing, required
positive, added; both fault-injected (F7's sign flip read **-0.373** at both
anchors, matching the phase gate's own -0.3727 m; F8's offset zeroed read
`along=0.000`, failing its own new check while every other check, including
the knee one, stayed green) and restored, 41/41. Full account, every check's
derivation and what the fix does not settle (the torso lean from G3c is
untouched): `docs/MCGROTS-VALIDATION.md` § "G3e".

### F2 — Feet slide (G1, judged 2026-08-12 — does not read, closed)

**Judged at the game's real anchor distances, not fixed — the brief's own
suggested and cheapest-possible good outcome.** Compared consecutive walk
frames approaching `wall` at its real camera distance: the actor's legs
occupy roughly 15–20 px there, and no sliding artefact is distinguishable
from ordinary stride motion at that scale — G1's review camera was
considerably closer, which is why this read as a problem there and does not
here. No foot IK built. If a future unit moves the camera markedly closer
than the current five anchors, this judgement should be re-taken, not
assumed to still hold.

### F3 — Only one archetype rendered (G1, complete 2026-08-11)

Generated the five missing biped sidecars with `scripts/rig-glb.mjs`; `rab` was
left untouched. The Chromium/Metal bake-off rendered all five walk strips and
pose strips successfully. The walk strips show readable knee motion, but the
per-archetype verdict is mixed: kenneth and slab stay continuous through the
whole stride, while morag has a flat light shard projecting forward from the
hip in frames 3, 4, 7 and 8, and runt has the same shard in frames 3 and 4.
Shoulder tearing is absent. Mcgrot has an angular lower-garment flap at maximum
extension, but not the same confirmed light hip shard. The adaptive neck
measurements span 0.75–0.89 as expected, and the per-archetype render
measurements now exist for the cast rather than for `rab` alone.

The sit strips still show dark angular hip/lower-coat deformation on morag, runt
and slab (with angular folds but no split on kenneth and mcgrot). This is a
known A1 pose limitation, not a reason to hide the measured walk result; G3's
real ledge and the open sitting fault still own the next decision. Pomplé is
excluded by design — a quadruped is not a biped and G6 gives him his own
treatment.

### F4 — The cel look renders the character black (G2, CLOSED 2026-08-11)

**Root cause: the actor's geometry has no `normal` attribute.**
`actors/skinned.js` builds the SkinnedMesh from the auto-rigged Trellis glb
with `position`, `uv`, `skinIndex`, `skinWeight` — no `normal`, ever (measured
directly off `mesh.geometry.attributes`). `MeshLambertMaterial` (and Phong,
Standard, Physical) silently compute derivative-based flat normals when a
geometry has none — three.js's `WebGLPrograms.getParameters` gates that
auto-`flatShading` fallback on those four material type names, literally, in
an `||` chain. `MeshToonMaterial` is not in that chain, so its shader still
declares and samples a `normal` attribute the buffer never provides; WebGL
supplies the attribute's default value, `(0,0,0)`, and every `dot(N,L)` in
both the direct and indirect diffuse terms is zero. Black, regardless of
colour, map, ramp, outline or cache key — which is exactly why the four
rulings below all held without ever finding the cause.

**Not what the brief suspected.** A constant `customProgramCacheKey` sharing
a program across a skinning-define mismatch was the leading hypothesis and it
is **refuted**: three folds `object.isSkinnedMesh` into the program cache
lookup independently of `customProgramCacheKey`, and dumping the compiled
program's own `parameters` object (the first argument to
`material.onBeforeCompile`, which carries far more than `.vertexShader`/
`.fragmentShader` text) showed `skinning: true` throughout. What it showed
instead was `vertexNormals: false` for the actor's compile and `true` for
every other cel-shaded mesh in the same frame.

**Fix:** `looks.js`'s `install()` calls `mesh.geometry.computeVertexNormals()`
once for any target mesh missing the attribute, before building its cel
material. Confined to `looks.js`; `actors/skinned.js` is untouched.

What had been ruled out, each visually confirmed in
`docs/smoke/captures/mcgrots/g2/`, and still correct — none of them touch
normals, which is consistent with the real cause:

- **Not the outline.** The blob is identical with `uThickness` at 0, which the
  suite captures as `s1-control-nothickness.png`.
- **Not the shade band.** `SHADE_BAND` 52 against 130 changes nothing.
- **Not the albedo.** The same texture on the same figure reads perfectly under
  the shipped Lambert path — compare `none-a.png` with `s1-inked.png` from the
  same run.
- **Not the lighting.** Same lights, same frame, same instant.

The bisecting probe that contradicted itself between runs (cast mean 15.5
then 1.8) was not used to re-verify this fix, for the reason recorded at the
time: hide-and-diff isolation collapses to a biased sample when the figure is
dark. Verified instead with pictures (`mcgrots-shot.mjs` captures, each
suspect removed in turn) and with the compiled shader's own parameters.

Gate: `docs/MCGROTS-VALIDATION.md` § G2, "S1 does not render the actor as a
flat black silhouette." Fault-injected (the `computeVertexNormals()` call
disabled) and confirmed red — torso patch stddev 0.0, max 0.0 — then
restored.

### F5 — S4's panel rendered empty (G2, CLOSED 2026-08-11)

**Root cause, measured: `#page` painted over the canvas.** `page.js`'s
`createPage()` appends `#page` (containing `.page-paper`, full-bleed by
design — see its own comment on why) to `document.body` AFTER the canvas.
Neither sets a `z-index`. Two `position`ed siblings with `z-index: auto`
paint in DOM order, later wins, so the paper painted over the canvas
everywhere the whole time `?page=on` was set — not just around the panel,
inside it too. `?page=on` painted cream, the panel rule and the caption
correctly; the panel itself held nothing.

**This was the brief's own leading suspect, and this time it was right** —
but only established by measuring it, per the brief's own warning that the
two briefs before it both named the wrong suspect. Confirmed by forcing the
canvas's `z-index` above `#page`'s and watching the scene appear.

**Neither existing S4 gate could have caught it.** "S4 insets the render
into a panel" reads the panel's geometry (`panelFraction`); "S4 renders at
the panel size" reads the drawing buffer's dimensions. Neither samples a
pixel inside the panel — the second candidate this session to render nothing
behind fully green numeric gates (F4 was the first, a black actor through a
full suite of green style checks).

**Fix:** kept `.page-paper` as one full-bleed surface (its own comment
explains why: alignment at a fractional device ratio, not four strips that
can drift apart) and cut the panel rect out of it with `clip-path`, computed
in `layout()` from the same `v` rect the canvas is already inset to. Did
**not** reparent the canvas into `#page`'s stacking context — moving a live
WebGL canvas on every page toggle is a context-loss risk for what is purely
a CSS fault.

**Two more real factors were needed before a CAPTURE showed the fix**,
neither a bug: the boot places the actor with a snap cut (there is no
previous shot, but a snap is still a snap — main.js), and the hold is real
wall-clock time (`page.js`: 130ms), deliberately not tied to the frozen rAF
clock the harness drives by hand. `.page-cut`'s own
`transition: opacity 60ms steps(1, end)` adds a further ~60ms of lag after
the hold's class clears before the PAINTED value actually reaches 0 — a
single-step transition holds the start value for the full duration and
snaps only at the end. Automated CDP round trips are typically faster than
either, so a capture taken right after boot lands mid-hold — legitimately
covered by the gutter paper, same as a real player's eye would be for that
beat. `scripts/mcgrots-shot.mjs` now waits for both before shooting or
evaluating; test-tooling only, no product change.

**The styleshots sheets' two empty S4 columns per anchor were a separate,
now-closed capture-timing fault** (`7ce2fc1`): that rig's own
`waitForPageCut()` waited a fixed 160ms, 30ms short of the ~190ms (130 hold +
60 steps-lag) a capture needs to land clear of the veil. It now waits on the
observable conditions, and the phase gate confirmed all three S4 columns carry
a scene. What was still empty in those sheets was the **actor**, at two
anchors, for a different reason entirely — F6 below, now also closed.

Gate: `docs/MCGROTS-VALIDATION.md` § G2, "S4 holds a scene in the panel, not
empty paper." Fault-injected (the `clip-path` assignment disabled) and
confirmed red — 98.4% of sampled panel pixels matched the paper colour —
then restored.

### F6 — the camera cut to the destination on frame 1 of a walk (G2, CLOSED 2026-08-12)

**Found by the G2 phase gate, 2026-08-12. Not introduced by G2 — it has been
true since G0 — but it was in front of everything G2 was judging, which is why
it surfaced there.** `goTo()` set `current` to the destination before the walk
started, and `placeCamera()` ran every frame off `current.camera`. So the shot
changed instantly and the player watched the walk from the shot they were
arriving at. Measured on one `goTo('far')` from `counter`, before the fix:

```
camera moved on frame 1:  10.324 m
actor  moved on frame 1:   0.020 m
```

The gate offered three staging options — cut on departure with the gutter,
cut on arrival, or leave it — and deliberately did not pick one, since G3 owns
composed shots. **Dan's call, same day, took a fourth option the gate didn't
offer: "let's just try and make any camera cuts smooth."** Not a cut on either
end — a glide, tied to the walk itself.

**Fix:** `actor.js` gained a read-only `progress` getter (0 at the start of
the current `walkTo`, 1 once arrived), derived from the same
target/position state `walkTo`/`update()` already track. `main.js`'s
`placeCamera()` now lerps camera eye and look from the anchor the walk left
to the one it's headed for, weighted by `smoothstep(actor.progress)` — zero
derivative at both ends, so the camera leaves and arrives at rest rather than
on a hard corner. The snap branch (`goTo(id, { snap: true })`) is untouched —
same code path as before this fix, `current.camera` assigned directly,
`actor.walking` false — so the boot call and S4's gutter cut are unaffected.

Consequences resolved by the fix, not separately:

- **The capture-review rig's motion cells now carry the actor.** Re-ran
  `npm run styleshots:mcgrots` and opened `counter.png` and `wall.png` — the
  two anchors the gate found worst (three of three columns missing the actor
  at `counter`, two of three at `wall`) now show it in all three columns,
  every row, at both.
- **S4's gutter-hold cut still never fires on a walk**, which is now simply
  correct rather than an oversight: a walk is no longer a cut of any kind, so
  there is nothing for a gutter to hold across. The cut remains exactly what
  it always was for the snap branch (the boot placement, and any future
  panel change that is genuinely a cut).
- **§ G2's "a gutter-hold cut on anchor change" is still not what the product
  does** — anchor changes glide now, they do not cut — but this is no longer
  a doc/product mismatch to flag, since gliding is the actual, chosen design.

**Dan's provisional S2-ahead ranking rested on five stills plus three anchors
of motion; two of five anchors now have real motion for the first time.**
Worth a second look before treating the ranking as settled, though re-judging
it is not this fix's job.

Gate: `docs/MCGROTS-VALIDATION.md` § G2, "a walk eases the camera — frame 1
is a small fraction of the total move", with the snap path as its control and
a third check on arrival. Fault-injected (`previous` forced to `null`,
collapsing the walk branch to the old cut) and confirmed red — frame-1 camera
move back to 100% of the total — while the snap control stayed green
throughout. Restored.

**F6 is closed only for a walk that starts from rest.** Re-targeting mid-walk
still cuts — see F11.

### F9 — the statue region gates existence, not visibility (G3 gate, CLOSED 2026-08-12 by G3f)

**Severity: medium, and it is a fault in a GATE rather than in the game.**
Injecting `statue.visible = false` in `buildStatue` left `--only=statue` at
2/2 and the full suite at **38/38**. Nothing was rendered at the Foot and every
check was green.

Both statue checks were blind by construction. One reads
`getObjectByName('statue:queen-victoria')` and the absence of
`statue-placeholder` — the scene graph, not the frame. The other projects the
authored centre against the five camera rays, a distance between two numbers
that a hidden object still has.

G3a's own validation entry names this gap in writing, and G3b landed the same
day, concurrently, without inheriting the rule. That is why it is § 8's
second invariant. The off-sightline check was kept — it guards a real
regression, the landmark becoming the subject — it is simply not a visibility
gate.

**Fixed, G3f.** The van region's AABB-projection technique transferred for the
AREA half but NOT for the CONTENT half — measured, not assumed: the statue's
projected rect overlaps the massing behind it at these anchors, and the van's
own corner-flatness control read the BUILDING as content, passing even with
`statue.visible = false` (`back` read statue=51.5 vs flat=0.0 with the statue
OFF). Replaced with a live on/off toggle in the same boot — the exact
technique and every number: `docs/MCGROTS-VALIDATION.md` § "G3f".

### F10 — the seat region cannot see F1's defect (G3 gate, CLOSED 2026-08-12 by G3e)

**Severity: medium, a gate fault.** Injecting F1's thigh sign flip — the entire
content of the fault — left the suite at **38/38**.

The region measured the hip and only the hip, and by G3c's own headline
measurement the hip has zero horizontal offset in any pose, so its position
was a function of the actor's group placement alone. The seated/standing
control separated 0.57 m from 0.79 m, which is `SEAT_DROP` — again not the
legs.

The region did prove two true things: the ledge is built at the anchor, and
the sit state applies its drop. Its own fault injection was honest and did go
red. The gap was between what it proved and what F1 claimed on the strength
of it.

**Fixed, G3e.** Added: knee offset from hip projected on the actor's facing,
required positive, both sitting anchors, standing as the control. Also
rewrote the ledge-placement checks' spec (lateral centring kept, along-facing
changed from "centred" to "offset behind the anchor" to match F8's real fix)
and replaced the vertical assert's exact-surface equality with a band that a
standing control can still fall outside of. Every new/changed assert was
fault-injected and confirmed red; full derivations in
`docs/MCGROTS-VALIDATION.md` § "G3e".

### F11 — the camera cuts when a walk is interrupted (G3 gate, CLOSED 2026-08-12 by G4a)

**Severity: medium**, and reachable on the shipped path. F6 eases the camera
only when a walk starts from rest; re-target mid-walk and it cuts.

Measured before the fix — parked at `back`, `goTo('far')`, 30 frames, then
`goTo('counter')`:

| | |
|---|---|
| frame-1 camera jump | 2.442 m |
| `far` → `counter` total | 10.324 m |
| fraction on frame 1 | **23.7%** — the region's own gate asserts < 10% |

`goTo` set `previous = from`, where `from` was `current` — the anchor being
*abandoned*, not where the camera actually was. Mid-walk the camera sat between
two shots, was snapped to the abandoned destination's eye, and eased from
there. `onPick` (bound to `pointerdown`) and the number-key handler both call
`goTo` with no guard on `actor.walking`, so a player clicking a second spot
before the first walk finishes is ordinary use. The `camera` region only ever
tested parked → walk, so it never entered this state.

**FIXED, G4a (2026-08-12), taking the suggested fix.** `previous` is now a
snapshot of `camera.position` and the look point `placeCamera()` last used
(`lastLook`, updated at the end of every `placeCamera()` call), captured in
`goTo()` at the instant a walk starts — not a reference to any anchor. This
also deletes the old `previous === null` special case: previous is always the
camera's live pose now, so there is nothing left to be null once the boot snap
has run (the `&& previous` guard in `placeCamera()` survives regardless, for
the debug API's raw `actor.walkTo()`, which bypasses `goTo` entirely — every
caller of that pairs it with `setReviewCamera()`, which returns before this
branch is reached, so the guard is dead in practice and only stops an
unpaired raw `walkTo()` from crashing).

Re-measured, same repro: frame-1 jump **0.001m of 10.553m (0.01%)**, against
the same < 10% gate. New gate, `anchors` region: "interrupting an
in-progress walk still eases, not cuts (F11)". Fault-injected by
reintroducing the exact bug (`const from = current` before reassignment,
`previous = from?.camera`) and re-running `--only=boot,camera,anchors`: 16/17,
frame-1 23.1% of the total move (matches the 23.7% recorded above), every
other check in the region unaffected. Restored and reconfirmed 17/17.

### F12 — G3d's grade numbers do not reproduce (G3 gate, CLOSED 2026-08-12 by G3g)

**Severity: medium, record integrity.** This document, `MCGROTS-VALIDATION.md`
and commit `4c3286d`'s subject line all carry "S2 6/3 mean 105.1, cast 17.2;
12/3 rejected at 134.5". Re-running the committed `scripts/mcgrots-grade.mjs`
unmodified gives 27 rows, which matches, and values that do not:

| setting | recorded | measured (albedo 0.7 / 1 / 1.35) |
|---|---|---|
| sun 6 hemi 3, frame mean | 105.1 | 72.2 / 72.3 / 72.5 |
| sun 6 hemi 3, cast mean | 17.2 | 10.8 / 21.4 / 24.0 |
| sun 12 hemi 3, frame mean | 134.5 | 92.9 / 93.1 / 93.2 |

The docs say the sweep was re-run "against the dressed pitch under S2". **The
script cannot do that**: it boots `mcgrots.html?body=skinned&archetype=rab`,
has no `--look` flag, and never calls `setLook`, and `main.js:61` defaults
`LOOK_KIND` to `'none'`. So the committed tool sweeps the UNSTYLED look.
`mcgrots-grade.mjs` is unchanged across the commit range, so it is the same
script throughout — most likely a local modification that was never committed.

**The decision survives and the hour does not change.** The phase gate's own
sweep has 0.00% blown at all 27 rows and 6/3 remains the darkest coherent
grade in the grid. What is wrong is the record, not the choice. Fix: give the
script a `--look` flag, re-derive, and correct the three documents. Commit
`4c3286d`'s subject line cannot be amended — note the correction in the docs
instead.

**FIXED, G3g (2026-08-12).** `mcgrots-grade.mjs` now takes `--look=<id>` and
prints the swept look in its own output header, so a bare run cannot silently
sweep the wrong style again. Re-run as `--look=aerial` (S2) against the
current pitch (statue, seat pose and ledge offset have all moved since G3d):
27-row sweep gives 6/3 (albedo 1) frame mean 105.6, cast mean 32.3, 0.00%
blown — the frame mean lands close to the old 105.1 despite the pitch having
moved; the cast mean does not (17.2→32.3), which is expected drift, not a
discrepancy. 12/3 at the same albedo: frame mean 135.3 (close to the old
134.5), cast mean 32.2 — essentially the same cast readability as 6/3 for a
substantially brighter, washed-out frame, so it stays rejected on the same
grounds as originally recorded. **6/3 is still the right pick; the hour is
unchanged.** Full numbers: `docs/MCGROTS-VALIDATION.md` § G3d and § "Faults in
the G3 GATES" F12. No new smoke gate: the existing contrast-floor picture gate
already covers the one product claim here (no shipped frame goes black or
blown) and re-confirmed passing (`--only=camera`, 5/5, worst stddev 44.5).

### F13 — the seated figure's feet do not reach the ground (G3f, PARKED)

**Severity: low as shipped, and deliberately not fixed.** Dan's call
2026-08-12: this needs its own phase rather than a quick patch.

G3f's posture change put the body properly back on the seat and lifted the feet
off the ground doing it. Measured across the change, `wall` and `kerb`
identical:

| | G3e | G3f |
|---|---|---|
| body depth on the 0.65 m seat | 0.3587 m | 0.4837 m |
| vertices touching the cap | 40 | 79 |
| knee ahead of hip | 0.340 m | 0.369 m |
| **lowest point of the model** | **−0.0142 m** (planted) | **+0.0743 m** (in the air) |

A 1.72 m figure on a 0.57 m wall should plant its feet comfortably, so this is
wrong rather than stylised. Deepening the thigh shortened the leg's vertical
reach without the shin compensating, so the naive fix is the same two
coefficients G3f moved — but the constraints interact, which is why it is
parked rather than attempted: lengthening the leg pushes the knee further
forward, `SEAT_DROP` moves the hip off the seat it was just placed on, and both
are gated now.

**Not visible on the shipped path.** The `wall` and `kerb` anchor cameras show
the figure from behind with the wall across him; the feet are out of frame.
This is the same ground F2 was closed on — a real defect the game never points
a camera at.

**What un-parks it: § 12.2, player-controlled camera rotation.** A free camera
finds this angle immediately, along with the two findings § 12.2 already names.
If that idea graduates, this fault comes with it and the phase should cover
both. Judged from `2-feet-off-the-ground.png`, regenerable with a low front
camera at the actor's facing — the anchor shots cannot show it.

### F19 — a fragment of Pomplé's head floats detached beside him (G6a, CARRIED to G8a)

**Severity: medium — visible on the shipped path, at the anchor the player is
nearest.** Found by the orchestrator's review on 2026-08-16, after `pomple`'s
own gate reported 5/5 and the full suite 76/76. Every number was correct; none
of them can see this.

`pomple.js` cuts its two-part rig on a Y-band at 0.74 of normalised height. That
cut sweeps a stray piece of geometry into the head part, and it renders as a
curved sliver floating clear of the body, roughly a body-width to his right.

Attributed by two controls rather than by inspection:

| Render | Sliver present |
|---|---|
| `counter` anchor, shipped | yes |
| same frame, whole `pomple` group hidden | no — so it is his, not the van's |
| same frame, `pomple:head` mesh hidden, body left visible | no — so it belongs to the head part |

**Carried, on Dan's 2026-08-16 ruling**, because G8a replaces this mesh and the
Y-band split with it. Fixing the current geometry buys nothing that survives.
Judged from `1-counter-detached-fragment.png` and its two controls; regenerable
by hiding each part in turn at the `counter` anchor.

### F20 — Pomplé is unreadable head-on at the counter, and the gate passes it (G6a, CLOSED 2026-08-16 by G7b)

**CLOSED.** Confirmed a symptom of F21, exactly as this entry's own
2026-08-16 revision predicted: fixing F21 and re-rendering `counter` shows
Pomplé with a crisp ink outline separating ears, snout and body, where the
pre-fix capture shows a flat brown mass with no edge. See
`docs/MCGROTS-VALIDATION.md` § G7b for the before/after. The remainder of
this entry is kept for the record of how F20 was originally found and why
it was mistaken for a lighting question.

**Severity: low, and partly a lighting question rather than a modelling one.**
At `counter` he turns to face the player — the head-turn working as designed —
and a dog seen head-on in the van's shadow reads as a dark mass rather than a
dog. At `kerb`, side-on and lit, he reads as a proper terrier.

The `pomple` region passes both: luminance stddev 35.0 against a flat control of
0.0. That is the limit the project already knows about — **a numeric check
cannot tell a legible dog from a smudge**, and G6a's own report reached "reads
as a legible dog" from scratch close-ups rendered outside the gate rather than
from the anchor captures the player actually sees. Recorded here so the next
session does not re-derive it from the same green numbers.

**What un-carries it:** G8a, which is where his silhouette gets judged against
the comics anyway. If it survives a real model, it is a lighting fix at the
pitch and not his geometry.

**Revised 2026-08-16, after F21 was confirmed independently: this is most
likely a SYMPTOM of F21, not a lighting fault and not a modelling one.** F21
says Pomplé carries no ink hull under any look. The ink outline is precisely
what separates a figure from a dark background in this style — it is the reason
McGrot stays legible standing in the same van shadow — so "a dark mass rather
than a dog" is the expected appearance of an un-inked Lambert dog in shade,
which is what he demonstrably is. Do not spend G8a's lighting budget on this
before fixing F21 and re-rendering `counter`; the cheapest test is that one
capture, and it may close F20 for free.

### F21 — Pomplé renders un-inked and un-cel-shaded under every look, silently (G6a, found by G6b.2, CLOSED 2026-08-16 by G7b)

**CLOSED.** `main.js` now awaits `pomple.ready` before `looks.install(...)`,
the same pattern used for `mcgrot.js`. Diagnostic confirms both meshes now
read `MeshToonMaterial` with their own ink hull under `?look=aerial`, and
still plain `MeshLambertMaterial` under `?look=none` (the control). New gate
in the `pomple` region: 7/7. Fault-injection needed an artificial delay on
Pomplé's own asset load to reproduce reliably — see
`docs/MCGROTS-VALIDATION.md` § G7b for why. The remainder of this entry is
kept for the record.

**Severity: low, cosmetic, and structural rather than accidental.** `looks.js`
traverses the scene once, at install, and never again — `main.js` awaits the
player's own `actor.ready` before calling `looks.install(...)`, but Pomplé is
built fire-and-forget at module scope, with nothing in `boot()` ever awaiting
his own readiness. Measured directly (reading `material.type` on the live scene
after boot, `?look=aerial`): his body and head are both `MeshLambertMaterial`,
with no ink hull, regardless of which look is installed. This has been true
since G6a landed; nothing in that region's own gate checks material type, so it
passed unnoticed.

**Found and fixed for McGrot** (`docs/MCGROTS-VALIDATION.md` § G6b.2), which
carried the identical risk (also built fire-and-forget) — the fix there is
`main.js` awaiting `mcgrot.ready` before `looks.install(...)`, the same pattern
the player's own actor already uses. **Not applied to Pomplé here** — his
geometry is carried to G8a alongside F19/F20, and this is one more item in that
same carry rather than a fix worth making to a mesh that is being replaced.

**What un-carries it:** the same event that un-carries F19/F20 — G8a's real
model. Whoever builds it should await its own readiness before
`looks.install(...)` from the start, per the pattern now in `main.js` for
McGrot.

**Confirmed independently by the orchestrator, 2026-08-16**, in a clean tree,
by reading the live scene rather than the code — the code reads as if the fix
applies to everyone, which is how this survived G6a:

```
node scripts/mcgrots-shot.mjs --look=aerial --frames=600 \
  -e "(()=>{const g=dbg.scene.getObjectByName('pomple');const o=[];g.traverse(m=>{if(m.isMesh)o.push([m.name,m.material?.type]);});return JSON.stringify(o);})()"
→ [["pomple:body","MeshLambertMaterial"],["pomple:head","MeshLambertMaterial"]]
```

The same expression against `mcgrot` returns `MeshToonMaterial`/`cel:unnamed`
for both meshes plus `hull:skinned` and `hull:mcgrot:beret`. Two figures, one
scene, one install — the difference is entirely whether `boot()` awaited them.
**That pair of commands is the diagnostic**, and it is worth running before
blaming any future "this character looks wrong" on its model.

**One consequence worth stating, because it changes what this fault costs:**
Pomplé has never once been rendered in the shipped style. Every judgement made
about his silhouette, his colour and his legibility — G6a's own review
included — was made on an un-inked Lambert dog. G8a should not treat those
judgements as evidence about the model.

### F22 — the player's own capsule occludes McGrot at the `counter` anchor (G6b.2, found in review, CLOSED 2026-08-16 by G7b)

**CLOSED**, in three parts. (1) The player's own body now hides when the
camera sits far enough behind it (`SELF_OCCLUDE_HIDE_DIST`), gated by a
visible-pixel-fraction floor with a named disabled-fix control. (2) Dan
re-measured after landing and found the fix's own gate-determinism pin had
hidden, not closed, a second fault: `rota.js`'s reader stood almost exactly
on McGrot's own position and occluded him on the real clock — moved
(`SPOT_LOCAL`), gated on real reader-present clocks. (3) The fix itself
introduced a third fault, also found by Dan: the player's body popped
visibility mid-walk, because the original version recomputed a live
distance every frame against a continuously-easing camera. Frozen to a
per-anchor decision resolved at walk start/end instead. All three gated,
all three fault-injected and confirmed to reproduce the reported symptom.
Full detail, numbers and captures: `docs/MCGROTS-VALIDATION.md` § G7b. The
remainder of this entry is kept for the record.

**Severity: medium, and it is the only one of these four that G7 cannot be run
around.** At `counter`, under `--look=aerial --frames=600`, the player's own
body capsule sits between the camera and McGrot and covers roughly the middle
third of him — part of the apron and one arm. He is still identifiable, but
only because the beret clears the top of the capsule.

This is not the model's fault and not G8a's to fix: it is where the `counter`
camera sits relative to the player's own mesh, and it would occlude any figure
standing at the serving opening. It went unnoticed because no earlier unit put
anything there to occlude — Pomplé stands off to the side.

**Why it blocks:** G7 is the kill criterion, and it seats Dan at this anchor
for six to eight readings. Judging whether McGrot is worth continuing with,
while a third of him is behind a featureless cream capsule, is not the test the
milestone intends. **This is not a judgement to schedule after G8a** — it is
cheap now and the answer changes what G8a is judged against.

**Candidate fixes, in the order they should be tried, none measured yet:** hide
or fade the player's own body at anchors where the camera is inside it (the
street already has the first-person precedent); move the `counter` eye offset;
or shift McGrot's stand position along the serving opening. The first is most
likely right and least likely to disturb an existing capture — but it touches
the anchor rig, so whoever takes it needs a control that shows the capsule
still renders where it should.

### F23 — the beret renders more saturated than the corpus draws it (G6b.2, found in review, CLOSED 2026-08-17 on Dan's confirmation)

**CLOSED.** Dan confirmed the retuned beret from the `counter` capture on
2026-08-17: "beret looks better". Note the entry's own title is the fault it
started from and is wrong — the divergence was hue, not saturation, and the
title is left as-written so the correction below is legible rather than
silently tidied away.

**RETUNED, then confirmed.** Checked the ramp first, per
this entry's own instruction: the lit band is unity gain, confirmed not the
cause by independently toggling tone mapping and the sun's colour. The real
divergence, measured in proper HSL rather than raw RGB: hue, not
saturation — the old value sits at 9.4° (near-red), the corpus averages
~28° (orange). `BERET_COLOUR` moved `0xa22c16` → `0x753d10`; rendered
sample `#c45711` (hue 23.5°, luma 105.1) against corpus hue ~28°, luma 107.
No new gate — this entry said "judged on a capture, not a hex value," and
that stands. Full derivation: `docs/MCGROTS-VALIDATION.md` § G7b.

**Severity: low, cosmetic, and an authoring/renderer split worth stating
precisely, because the obvious fix is aimed at the wrong end.** Dan flagged the
beret as "a bit bright" on the G6b.2 captures. Measured rather than argued:

| | colour | luma |
|---|---|---|
| authored material (`mcgrot:beret`) | `#a22c16` | 79 |
| as rendered, `--look=aerial --anchor=counter` | `#f44920` | 106 |
| corpus saturated red-orange, 60 comics | `#b06010` / `#a05010` (modal bins) | 107 |

**Brightness is not the problem — saturation is.** The render's luminance
(106) lands almost exactly on the corpus (107). What diverges is chroma: the
drawings' red-orange is a muted rust, the render is a vivid orange-red. So
whoever picked `#a22c16` picked sensibly from the corpus, and the toon ramp's
lit band is what pushes it up and out. **Do not "fix" this by darkening the
authored colour without first looking at the ramp** — that would trade a
correct source value for a compensating one and hide the cause.

**What the corpus row does and does not prove.** It samples every saturated
red-orange pixel across 60 comics, not berets specifically, so it includes
brick, the van's awning and the warm sepia strips. It is good evidence about
the palette the beret has to sit in, and weaker evidence about the beret alone.
A tighter measurement would isolate beret pixels per comic; nobody has done
that, and it may not be worth it given the fix is a single value either way.

Reproduce with:

```
node -e "…"  # sample /tmp/m-counter.png over the beret bbox (see § G6b.2 in
             # docs/MCGROTS-VALIDATION.md for the exact window)
node scripts/comic-palette.mjs --only=assets/comics/<id>.jpg
```

## 11. Still open

0.1 **HEARD AND PASSED FOR THE PoC (Dan, 2026-08-18). Refinement deferred, not
   waived.** His verdict verbatim: *"All seems ok so far audio-wise. Will need
   refined later but will do for now."*

   What he auditioned, in this order: the twelve complaint lines
   (`assets/audio/mcgrot/lines/`), the six Taxman exchange lines
   (`assets/audio/cast/`) played in **scene order** rather than filename order,
   the two voices back to back in isolation, and the synthesised bed in the
   running scene. Playlist: the `audition.sh` pattern — `afplay` in schedule
   order, with each line's text printed as it plays.

   **What this settles:** McGrot's voice (Algenib) holds up in 1–6s bursts and
   not only in the long readings he approved on 2026-08-12; the Taxman's voice
   (Schedar, picked from a description and never auditioned) is distinct enough
   to keep; the bed and its gull read acceptably on a 54s loop. None of the
   four groups needs re-rendering to proceed.

   **What this does NOT settle, and must not be read as settling.** He passed
   the audio as a whole and did not comment on the specific fault
   `docs/g7-taxman-scene.md` raises — that the exchange reads as radio dialogue
   over a diorama, because neither body moves. **That is a picture fault, not a
   sound one**, and a verdict on the audio cannot clear it. It stays open under
   the per-line head-turn unit, which remains unbriefed and unjustified by his
   ear either way.

   **"Refined later" is a real debt.** The register work (G5b) was done on the
   text, never on the delivery; no line has been auditioned against an
   alternative read of itself. Whoever picks that up should treat it as a
   voice-direction pass, not a re-generation.

   How, if it needs re-hearing: `npm run dev:mcgrots`, then
   `/mcgrots.html?ambience=on&visit=on`, and click the title card — WebAudio
   needs the gesture. The bed cycles every 54s with the gull at 19.8s.



0.5 **McGrot's voice — Dan curates this one.** Added 2026-08-12 on his call:
   a placeholder is fine for now, the real choice is his and comes later.

   **Largely superseded by G5d (2026-08-15) — see `docs/MCGROTS-VOICE.md`.**
   The description, the engine and six acceptance criteria are settled; what
   remains open is the pick itself, which still needs the audition and Dan's
   ear. Two assumptions below were measured and found wrong: this is not a
   choice among Gemini's 30 prebuilts (a voice can be *designed* from a written
   description on the FAL key already in `.env.local`), and the settled age is
   **early fifties**, not late 50s–60s. The paragraphs kept below are the ones
   that still hold — why he matters, and the constraint on the pick.

   He is the one voice that carries the visit, so a merely adequate pick is a
   worse outcome here than anywhere else in the cast. Everything else can run
   on a default.

   **Where it lives:** `scripts/generate-tts.mjs` reads
   `comic.npc.voiceName` and falls back to `'Algenib'`. 30 distinct Gemini
   prebuilt voices are already in use across the 156 vendor entries, so a
   principal wants one that is *not* among them or the street's crowd will
   echo him.

   **Placeholder, chosen not auditioned:** `Charon` — lowest usage of the
   deep-register prebuilts already in the catalog (5 entries), and the
   register suits `docs/CANON.md`'s McGrot: late 50s–60s, work-worn,
   grizzled, confrontational. **This has not been listened to.** It is a
   value to start from, not a recommendation.

   **One constraint on the eventual pick, and it is not negotiable:** do not
   clone or imitate a specific real person's voice. A generated voice styled
   on a *register* — Leith, sixties, roughened by work — is the goal; a
   recognisable impression of a named performer is not, whatever the tooling
   makes possible. Same reasoning as `docs/LEITH.md`'s sensitivity rules.

   Decide during G5, which is where the principals' dialogue is generated.
   Auditioning is cheap either way — but the route is now MiniMax Voice
   Design on the FAL key, not `generate-tts.mjs` against Gemini prebuilts.
   The audition set and the six criteria are in `docs/MCGROTS-VOICE.md`.
1. **Which six to eight comics.** The readings vary a lot in quality and the
   selection wants Dan's eye rather than a script's.
2. **Does the player pick their own body**, or is one assigned? E7b's ruling
   for the street was preset names and no user input, for moderation reasons
   that still apply.
3. **Whether G1's winner survives a dog.** See G6.
4. **How the statue gets made** — authored by hand, added to the Overpass
   fetch as a node query (which gets a position but no shape), or generated
   through the character pipeline. Nobody has looked at what reference exists.
5. **Whether the Foot's real buildings help or hurt.** 41 footprints within
   80 m is reference, not obligation; a stylised pitch may want less of it.
   G0 blocks them out precisely so this can be judged rather than assumed.

---

## 12. Parked ideas — Dan's list, not planned and not scheduled

Ideas dropped in ad hoc, kept here so they are not lost and not silently
promoted into work. **Nothing in this section is committed to.** An entry
graduates by being written up as a milestone in § 5 with a brief behind it;
until then it is a note, and the notes below deliberately record the first
obstacle rather than a plan.

Add to this list freely. Do not reorder it into priority — the order is
arrival, and pretending otherwise invents a decision nobody made.

### 12.1 An AI-generated soundtrack, derived from the comics' transcriptions

**Added 2026-08-12 (Dan).**

Music generated from the McGrot comics' transcribed text, so the score comes
out of the same source material as the readings rather than being laid over
the top of them.

What it touches: nothing that exists yet. McGrot's has **no audio at all** —
`src/ambience.js` is the street's and is not in this game's bundle. So this is
a new module, not a change to one.

First questions, none answered:

- **What generates it, and does the output license permit shipping?** This is
  the blocker, not the integration. Worth establishing before any design work.
- **Ambient bed, or per-station?** A single bed is far cheaper and does not
  compete with the readings. Per-station music and a voice reading at the same
  station will fight unless one ducks.
- **Does the verbatim rule reach the lyrics?** Yes, if any comic text is sung
  or spoken — quoted fragments are sacred, wrapper phrasing is not. A purely
  instrumental piece *derived* from the text does not engage the rule.
- **Budget.** The street's ~8 MB ceiling is a single-file-artifact constraint
  and McGrot's has no build or deploy path yet, so there is no number to hold
  to. That is a gap, not a licence to be careless.

### 12.2 Player control of the camera direction

**Carries § 10 F13 with it.** The seated figure's feet do not reach the ground;
the composed shots never show it and a free camera would.

**Added 2026-08-12 (Dan).** Wants to rotate the view around the character;
notes himself that boundaries would be needed.

What it touches: `anchors.js` and `placeCamera()` in `main.js` — and it is in
real tension with how this game is built, which is the interesting part.

**The five shots are composed, not generated.** G3d spent a unit deciding what
the player looks at from each anchor, and `anchors.js`'s header records that a
hand-authored version was already tried and replaced by a rule. Free rotation
does not extend that system; it partly replaces it. Both can coexist — an
authored default with a limited arc either side is the obvious shape — but the
size of that arc is the whole design question.

**Two known findings say what free rotation would expose**, and both are
already measured, so neither needs re-deriving:

- **The cast is dark from the unlit side.** `rab`'s texture averages RGB
  (44, 37, 31) and no lighting multiplier lifts it — built, swept and
  rejected, see `MCGROTS-VALIDATION.md`. The composed shots avoid the worst
  angles. A free camera finds them immediately. This is G8's asset problem and
  a free camera raises its priority rather than creating a new fault.
- **The middle distance is empty.** G3d recorded that the `back` wide has the
  van left, the statue right and bare ground between. A rotating camera crosses
  that gap at every anchor.

Also unresolved: how rotation interacts with F6's and F11's camera easing —
the camera currently belongs to the anchor system, and a player-owned yaw is a
second thing moving it. F11 (closed 2026-08-12) was exactly that kind of
conflict, between two anchors rather than a free yaw; the fix there — ease
from the camera's own live pose, never an anchor reference — is the shape a
rotation feature would need too.

### 12.3 The leads' costume varies by day, rather than being one fixed outfit

**Added 2026-08-16 (Dan), on reading G6b.1's extraction.** Some days McGrot
wears the beret, some days he does not. Same for the rest of the outfit, and
probably for other characters.

**This came out of a measurement, which is unusual for this section.** G6b.1
read 156 comics in two disjoint halves and both halves independently sorted the
leads' features into stable / variant / one-off. The variant bucket is large and
it is not noise — the drawings genuinely disagree with each other, comic to
comic. Treating that as something to average into one canonical outfit throws
away a real property of the source.

**It fits the architecture better than most ideas in this section**, which is
the reason to keep it rather than dismiss it. § 6's discipline is that the world
is a pure function of wall-clock time, and the project already derives McGrot's
presence that way — `mcgrotIsIn(dayKey)`. A costume keyed off the same day
seed costs nothing on the wire, needs no shared mutable state, and every client
computes the same McGrot for the same day without being told. It is the same
shape as the rota, not a new mechanism.

**First obstacles, none answered:**

- **It multiplies the asset work in G8a**, which is the phase that has to build
  him. One model with swappable parts is a different job from one model, and
  the swap points have to exist in the mesh before anything can vary.
- **What is allowed to vary, and what is identity?** The extraction's own
  finding is that beret-plus-head reads as McGrot even on an unrelated body. If
  the beret is what makes him recognisable, a beretless day may just read as a
  stranger. Variation and legibility pull against each other, and the stable
  bucket is the evidence for where the line sits.
- **Pomplé may not want this at all.** His variance is mostly colour, which is
  more likely to be drawing inconsistency than intent.

**What it changes now, before it graduates:** the merge of G6b.1's two halves
into `docs/CANON.md` **preserves the variant distribution with its counts**
rather than collapsing each feature to a single description. Collapsing is the
one step that would make this idea expensive to pick up later, and it costs
nothing to avoid.
