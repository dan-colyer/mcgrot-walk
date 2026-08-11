# McGrot's — implementation plan

A second, small game in this repo. One pitch, McGrot's van, a handful of canon
characters arriving and leaving, read aloud. Third person, anchored spots, a
permanent world you drop into.

**Status: G0 and G1 landed 2026-08-10. G2's four candidates are BUILT, isolated
and gated (2026-08-11). The cast-albedo fault and fault F4 (the cel look
rendering the character black) are both FIXED — S1 and S2 can now be ranked.
See § G2 and § 10 fault F4 (closed).**

Gates and their limits: `docs/MCGROTS-VALIDATION.md`. Run it with
`npm run smoke:mcgrots` (26 checks, 1.3s); boot the game with
`npm run dev:mcgrots` and open `/mcgrots.html`.

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
    reader.js           audio + readings.json phrase timing
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

**G2 has NOT closed**, and what remains is one specific fault rather than the
whole milestone.

Done: all four candidates built, isolated and gated (13 checks,
`--only=style`), four fault injections recorded, and both blocking faults
fixed — the **cast-albedo fault** (`src/mcgrots/actors/texture.js` lifts the
character textures at load) and **F4** (the actor's geometry had no `normal`
attribute; `MeshToonMaterial` doesn't get three's auto-flatShading fallback
that `MeshLambertMaterial` gets for free — see § 10 fault F4). Suite 26/26.
S1 and S2 can now be ranked against each other; the character is legible and
cel-shaded, not a black blob, under both.

Still owed by G2: **which fixed hour**, and it should be settled together
with the key (S3) rather than separately.

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

### G6 — Pomplé

The relationship. He needs a state you can move — fed, near, watching you,
watching McGrot — and he has to be legible without dialogue, because he is a
dog. **His silhouette and head-turn are the load-bearing animation in the whole
game**, and that should have been a G1 judging criterion; if G1 has already
run, re-check the winner against a dog before committing.

### G7 — Judge against the kill criterion

Stop and apply the bar before spending anything on the real cast. The visit
should be playable end to end on stand-in bodies with real voices. Dan sits
through it. If he does not want a second run, the honest outcome is to say so
and stop — a measured rejection is delivered work, not a shortfall.

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

Things that are wrong, deliberately left, with enough detail to pick up cold.
Distinct from § 11, which is undecided questions rather than broken work.

### F1 — The seated pose is wrong (G1, open)

**Severity: high.** The player sits near the van and listens; this is the
posture the game is mostly in.

Fixed so far (commit `f0982fc`): the figure no longer folds double, the coat no
longer binds to the leg bones, and the seat drop is derived rather than picked.
What remains wrong, from the 2026-08-11 review capture:

- The figure sits **in front of** the ledge rather than on it, and lower than
  its top surface. The anchor position and the ledge position are set
  independently (`anchors.js` places the ledge 0.3 m behind the standing spot),
  so nothing guarantees the hip lands over the seat.
- The legs read as folding **under** the body — a kneel — rather than forward
  off the edge. Worth checking the sign of `rotation.x` on the thigh against
  the actor's facing: positive reads as forward in the walk, so if it reads as
  backward when seated, the two are not in the same frame.
- The torso still pitches forward into a huddle.

What it needs, and why it was not done now: a pelvis that rotates back
independently of the spine, and a ledge height fixed by **G3's real dressing**
rather than a placeholder box. Tuning a pose against a guessed wall height is
work that gets thrown away. **Do this in G3, with the real wall.**

Boot it with `npm run dev:mcgrots`, `?body=skinned`, then press 2.

### F2 — Feet slide (G1, open)

No foot IK on any candidate, so the feet slip rather than plant. Whether it
reads at the game's actual camera distances is unjudged — the G1 review camera
is closer than any anchor shot. Revisit once G3 fixes the shots.

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

---

## 11. Still open

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
