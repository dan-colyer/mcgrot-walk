# G7j — the Taxman turns up

Brief: `docs/briefs/g7j-taxman-scene.md`. This is the landing record: what was
built, what was measured, and what the render actually shows.

## What this unit built

Six lines, already written in `generated/mcgrots-dialogue.json`
(`mcgrot-exch-taxman-{01,02,03}` and `taxman-exch-taxman-{01,02,03}`), had no
audible partner and could never be heard (docs/g7-visit-shape.md § 2). This
unit gives both halves a voice and a body, and plays the exchange inside the
wall/101.8s silence row — the longest gap in the ten-minute visit.

- `src/mcgrots/taxman.js` — the Taxman: a capsule stand-in body
  (`actors/capsule.js`, reused as-is — no new body work, per § 9's "bodies may
  be stand-ins"), a pure `sceneCueAt(elapsed)` schedule, and a fixed position
  beside the van.
- `scripts/generate-cast-tts.mjs` + `scripts/tts-prompts/cast/*.txt` — renders
  all six lines: the Taxman's three on a new voice, McGrot's three on his own
  established one. Output: `assets/audio/cast/*.mp3`.
- One field added to `src/mcgrots/visit.js`'s CUES table (`beat: 'taxman'` on
  the wall/101.8s row) and a contained branch in `src/mcgrots/main.js`'s
  `frame()` — see those files' own comments for the diff.
- One region in `scripts/smoke-mcgrots.mjs` (`taxman`, 13 checks), one entry
  in `REGIONS`.

## The voice pick

Algenib (McGrot's own, `docs/MCGROTS-VOICE.md`) for his three exchange lines
— no second choice for the same character. For the Taxman: **Schedar**
("Even" in Google's own prebuilt-voice table). His `audioProfile` calls for
"thin, rigid... clipped, humourless" — a flat, unvarying cadence reads as
exactly that, and it is tonally the opposite of Algenib's own "Gravelly",
which is the distinctness the brief asked for. Not auditioned, as instructed
— picked and moved on.

## Position, and why it does not occlude McGrot

`TAXMAN_LOCAL = [-2.6, 1.55]` — pitch-local, opposite side of the van from
Pomplé (`POMPLE_LOCAL` x=+2.6), a touch further out. Verified by render at
the `wall` anchor (where his scene actually plays), not by the coordinates
alone:

- Toggling him on/off with the render pinned mid-scene changes 0.586% of the
  whole frame — confined to his own silhouette.
- The identical toggle diffed **inside McGrot's own projected rect** reads
  0.0000 mean absolute luminance difference. He does not touch McGrot's
  pixels at all, not merely "not enough to fail a threshold".
- McGrot's own visible-pixel fraction (the `mcgrot` region's F22 technique)
  reads 29.2% with the Taxman present and 29.2% with him absent — inside the
  established 20% floor either way, and identical between arms.

## The gate-only override, and why it exists

`taxman.group.visible` is reasserted from `sceneCueAt(cue.elapsed)` on
**every frame** — deliberately, so his arrival is a pure function of the
pinned clock rather than a latch that could survive a clock jump. That
design choice broke the suite's usual toggle-then-diff technique on first
attempt: `scene.getObjectByName('taxman').visible = false` followed by
`stepFrames(1)` got silently reasserted `true` on that very frame, and the
gate's own on/off capture pair came back pixel-identical (found by running
it, not reasoned about — see the region's own comment). `taxman.setForceHidden(v)`
is the escape hatch, the same shape as `selfOcclusionEnabled`/
`setSelfOcclusion` already in `main.js`.

A second instance of the same class of bug, also found by running rather
than reasoning: the gate's own sweep helper wrote `{ elapsed: e, ...c }` to
record the sweep time, not noticing that `sceneCueAt`'s own return value
already carries an `elapsed` field (elapsed *within the current line*) which
silently clobbered it via object-spread key order. Every derived pin landed
around 0.15-0.3s into the cue — the shared opening gap before any line — so
the arrival gate "passed" against the wrong moment and the audio gate failed
outright (all six lines read `playing=false rms=0.000`, because the pins
never actually landed inside a line). Fixed by giving the sweep key its own
name (`sweepAt`).

## The four gates, measured

Fault-injected each in turn, `git status --short` clean before every
injection (this unit's own landing commit came first), watched red, restored,
re-verified green with `npm run smoke:mcgrots -- --only=taxman`.

| # | Claim | Fault injected | Result |
|---|---|---|---|
| 1 | He is rendered, not merely in the scene graph | `taxman.group.visible = false` forced permanently (bypassing the schedule) | rect-toggle check went from `diff=24.9` to `diff=0.0` — red |
| 2 | He does not occlude McGrot | `TAXMAN_LOCAL` moved to `[0.35, 2.6]` (on McGrot's own approach line) | McGrot's visible fraction dropped from 29.2% to well under the 20% floor — red |
| 3 | All six lines are audible | `dir: 'cast/'` changed to `'mcgrot/'` in `sceneCueAt`'s return (points at the wrong tree, 404s) | all six lines read `rms=0.000` — red |
| 4 | Arrival is deterministic | `GAP` changed from a constant to `Math.random() * 2` | the purity check ("same instant twice") went red on the second of the two identical pins |

Exact commands and full before/after check output for each: see the fault
commit that follows this one and is then reverted — `git log -p` on
`src/mcgrots/taxman.js` and `scripts/smoke-mcgrots.mjs` around this landing
carries every injection verbatim.

## The render, opened

`docs/smoke/captures/mcgrots/g0/taxman-{a,b,c}-*.png` — a McGrot line, a
Taxman line, and a gap with both present.

**Honest answer: it does not yet read as two people talking.** The audio is
genuinely right — positional, alternating, synced to the correct figure, and
McGrot's readable "one flare of temper" comparison lands (Algenib on both his
solo lines and these). But neither body performs. The Taxman is a static
capsule and McGrot's own stand-in has no per-line gesture, so all three
captures are pixel-for-pixel the same composition — nothing on screen
indicates who is speaking at any given moment beyond which channel PannerNode
is favouring the listener's ear (which the harness measures; a player relies
on their own two ears and a plausible position). This reads as scripted radio
dialogue played over a diorama, not as two people arguing. That is a fair
description of what "bodies may be stand-ins, voices may not" actually buys:
the voice half of the claim is real; the body half was never asked to carry
performance, and it does not.

A cheap next step this unit did NOT take (out of scope, not a design
decision): a per-line head-turn toward whoever is currently speaking, the way
Pomplé's own head tracks the player. That would cost little against the
existing rig and would likely close most of the gap above — flagged here for
whoever next touches this scene.

## Scope discipline

`scripts/generate-mcgrot-tts.mjs`, `audio.js`, `rota.js`, `mcgrot.js`,
`assets/catalog.json` — read, not touched. `pomple.js` — not touched (G7i's).
`docs/g7-visit-shape.md` — not touched; it already carries its own
superseded-as-data notice from G7h. `visit.js`/`main.js` — one field, one
branch each, as small as the brief asked for.
