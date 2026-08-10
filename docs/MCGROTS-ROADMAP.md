# McGrot's — implementation plan

A second, small game in this repo. One pitch, McGrot's van, a handful of canon
characters arriving and leaving, read aloud. Third person, anchored spots, a
permanent world you drop into.

**Status: nothing built. G0 is the next unit of work.**

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
| The street | Fully paused. Daily TTS launch agent stopped and disabled 2026-08-10. |

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

### G0 — Scaffold and the empty stage

The harness G1 needs in order to compare anything.

Deliverables:

1. `src/mcgrots.html` + `src/mcgrots/main.js` booting a `THREE.Scene` with
   flat ground, one directional key light and ambient. No street modules
   imported.
2. **Three-person camera and the anchor set.** Four to six fixed, composed
   camera positions covering the pitch. Tapping or clicking an anchor walks
   the actor there; the camera cuts to that anchor's shot. Point-and-click
   adventure staging — you author the shots, so the world only has to hold up
   from angles you chose.
3. A placeholder actor (a capsule) that translates between anchors at walking
   pace, so G1's candidates have something to replace.
4. `scripts/smoke-mcgrots.mjs` with regions `boot`, `camera`, `anchors`.
   Reuse `scripts/launch.mjs` for the GPU browser — do **not** extend the
   street's 7,066-line `smoke.mjs`.
5. A debug probe equivalent to `scripts/probe.mjs` pointed at
   `/mcgrots.html`, or a flag on the existing one.

Acceptance: the suite boots the page, asserts the anchor count and that each
camera shot passes the contrast floor (`docs/VALIDATION.md` § E2g.1 — "the
frame is a picture"). Prove the contrast gate can go red by fault-injecting a
black material, watch it fail, restore, and commit *before* injecting anything
(`CLAUDE.md` § Gotchas).

### G1 — The animation bake-off ← **start here after G0**

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

Candidates, from the 2026-08-10 conversation:

1. **Inked comic / toon** — cream ground, near-black outlines, halftone.
2. **Posterised to the 12 measured swatches** (`docs/STYLE.md`) — post pass only.
3. **Low-res / PS1 chunk** — small render target, vertex jitter, dithered upscale.
4. **Risograph misregistration** — two or three ink plates slightly out of
   register, drift tied to depth not time, paper grain. No outlines, all tone.
5. **One material, no textures** — matte clay, one warm key light. Makes the
   crude meshes read as deliberate.
6. **Stop-motion** — segmented plasticine figures animated on twos or threes,
   visible thumb marks, slight pop between poses. Wants exactly what G1's
   segmented and flat candidates produce, and animating on threes is a third
   of the work while looking better than smooth.

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

### G3 — The pitch

The van (from `gullet.js`), the ground, the dressing, the composed shots
finalised against the chosen style. `mcgrotIsIn(dayKey)` already exists and
already decides whether he is in — 3 days in 8.

### G4 — The rota

Arrivals as a pure function of **wall-clock time** (§ 6). One reader at a time,
which is the whole reason this works: on the street 156 people talk at once and
none of them land. Audio and reactions driven off `readings.json` phrase
timings.

### G5 — McGrot's complaints

Generate his dialogue from the corpus in § 3, styled on the 205 director
briefs in `scripts/tts-prompts/`, then TTS through the existing
`scripts/generate-tts.mjs`.

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

### G7 — Ship on GitHub Pages

A dozen comics and their mp3s. Single-file artifact via `build.mjs` if it comes
free; otherwise the multi-file site. Deploying stays Dan's explicit call.

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

## 9. Still open

1. **How many comics in the prototype**, and which. A dozen is the working
   assumption; the selection has not been made and probably wants Dan's eye —
   the readings vary a lot in quality.
2. **Does the player pick their own body**, or is one assigned? E7b's ruling
   for the street was preset names and no user input, for moderation reasons
   that still apply.
3. **What the pitch actually is.** "A small patch of land" — a car park, a
   corner, waste ground, the Foot. Affects the composed shots and the dressing.
4. **Whether G1's winner survives a dog.** See G6.
