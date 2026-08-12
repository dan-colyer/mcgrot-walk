# G4b — playback: the readers speak

G4a landed the schedule and the walk in silence. This unit makes the reading
audible. It is the first time this game makes a sound at all.

**Read `docs/briefs/g4a-the-rota.md` first.** It is the unit you are building
on, and its camera ruling still binds.

## What already exists

- **`src/mcgrots/rota.js`** — `whoIsHere(now)` / `whatTheyAreDoing(now)`, pure
  functions of a wall-clock timestamp. `whatTheyAreDoing` already returns
  `{ id, phase, elapsed, duration }` while reading. **`elapsed` is the seek
  offset**; see "The thing most likely to be got wrong" below.
- **`assets/readings.json`** — 125 entries, all `anchored`. Mean duration
  39.7 s, range 16.7–80.2 s, 82.8 minutes total. `phrases[]` of
  `{ text, kind, start, end }`, 631 `vendor` and 961 `comic` across the pool.
- **`assets/audio/*.mp3`** — 136 files, **41 MB**, mean ~300 kB. The
  schedulable pool is the 125 that `rota.js` already computes.
- **`src/proximity-audio.js`** — the street's, and **paused**. Do not import
  it, do not edit it. Its header carries rulings that cost real sessions to
  learn; read them and re-derive what applies here.

## Two things this game does not have yet, and needs

### 1. There is no gesture surface

`src/mcgrots.html` is a canvas and nothing else. Every browser refuses to
start an `AudioContext` without a user gesture, so **something has to be
clicked before a sound can play**. The street solved this with a title card.

Build the minimum that works: a full-window overlay with the game's name and a
single click-anywhere-to-start affordance, dismissed on `pointerdown`, which
is where the context starts. **Its visual design is not this unit's business**
— `page.js` owns the game's furniture and G7 will restyle it. Make it plain
and get out.

**This has a blast radius and you must measure it, not reason about it.** All
54 checks boot this page. Anything that puts DOM over the canvas can move the
style region's panel measurements and any check that samples pixels. Run the
full suite before and after and say what moved. If a gate needs to dismiss the
card, dismiss it in the harness's boot path, once, rather than in each check.

### 2. There is no asset contract here

`src/mcgrots/foot.js` reaches its one asset through a local convention rather
than `src/assets.js`. Follow foot.js's shape for the mp3s. The dev server is
rooted at `src/` and `src/assets` symlinks to `../assets`, so `assets/audio/
<id>.mp3` resolves in dev. **There is no single-file build for this game yet**
— do not try to inline 41 MB, and do not build a bundling path. Note the gap
and move on; it belongs with the deploy work nobody has scoped.

**41 MB is not preloadable.** Load the current reading's file and at most the
next one. Say what your loading policy is and what it costs on a cold open.

## The thing most likely to be got wrong

**The rota is a pure function of the wall clock, so a player arriving
mid-reading must hear the middle of it.** Not the start. `whatTheyAreDoing`
already hands you `elapsed` — seek to it.

This is the entire payoff of § 6's design and it is invisible if you test only
by watching a reading begin. The obvious implementation — start playback when
the phase becomes `reading` — is correct for a fresh arrival and wrong for
every late join, and both look fine on a casual test. Gate it (below).

## The camera ruling still binds, in the other direction

**Dan, 2026-08-12: actors must not affect the camera.** G4a's bit-identical
gate is in the suite and must stay green.

Audio inverts the dependency safely: the listener rides the camera, the camera
never consults the reader. That is the correct direction and it is fine.
**Do not let it become circular** — no reframing toward a voice, no "turn to
face the speaker" convenience, and nothing in the audio path that writes to
`camera`. If the bit-identical check goes red, your audio is steering the
camera and the fix is the audio, not the check.

Positional audio for one nearby source is the right default. If you find a
reason it is not, say so with what you heard.

## The gate

**Numeric gates cannot hear a bad sound, exactly as they cannot see a bad
picture.** Assume everything you can gate here is a proxy, and say so.

Gate these, each with a named control and a fault injection proving it can go
red — **commit before injecting**:

- **Playback position tracks the rota clock.** Force a clock mid-reading,
  boot, and require playback to start near `elapsed` rather than near zero.
  The control is a *fresh* arrival at the same anchor, which must start near
  zero — without it the check passes for an implementation that always seeks
  to the same place.
- **One voice at a time.** G4a gates one *reader*; this gates one *source*.
  A reader leaving mid-file must stop, not fade out over the next arrival.
- **The file that plays is the comic that is scheduled.** Resolve the src and
  compare it to `whatTheyAreDoing(t).id`. The wrong-voice bug is silent to
  every other check here.
- **No sound before the gesture.** No context, no source, nothing constructed
  at boot. The street lost a session to a context built too early.
- **Console still clean** with audio driven — a missing file must stay silent
  rather than throw, per `CLAUDE.md`'s catalog rule.

Prefer a check that reads the shipped path over one that calls a helper.

## What Dan does

**He listens, on the dev server, and this unit is not done until he has.**
This is the audio analogue of opening a capture, and it is a step in the flow
now, not a courtesy. Leave the server running and tell him what to click and
what he should expect to hear — including that the pitch is correctly silent
about half the time.

Say what you heard yourself first: whether a reading starts cleanly, whether
a departure cuts awkwardly, whether the level sits right against silence.

## Scope

`src/mcgrots/`, `src/mcgrots.html`, and `scripts/smoke-mcgrots.mjs`. The
street is paused — `src/proximity-audio.js`, `src/ambience.js` and
`src/captions.js` are reference, not resources.

New module for the audio. `main.js` gets a call site and an updater hook,
nothing more — G4a's discipline held and this unit keeps it.

**Not yours:** captions and the read-along phrase highlight (the phrase
timings exist for G5/G6 reactions; putting text on screen is a separate
decision Dan has not made), generated dialogue (G5), McGrot's interjections
and his voice (G6 — the voice is Dan's curation call, § 11), the real cast
(G8), F13, `site.js`'s `LIGHT`, and the deploy/bundling gap named above.

Explicit pathspec on every commit. `scripts/daily-tts.sh`,
`scripts/catalog-batches/*.json` and `scripts/tts-prompts/` are not yours.

## Landing

Split if the gesture surface and the playback are separable — they should be,
and landing the card alone first lets its blast radius on 54 checks be
measured against a clean baseline rather than tangled with new audio checks.

Each commit: code, `docs/MCGROTS-VALIDATION.md` (including what you
deliberately did **not** gate and why — with audio that list will be long and
it is the honest part), `docs/MCGROTS-ROADMAP.md` § G4b, and a commit message
carrying the real numbers: the measurement, its control, what went red under
injection.

Rejected experiments get written down with their numbers too.
