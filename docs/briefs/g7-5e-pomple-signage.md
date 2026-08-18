# G7.5e — Pomplé's signage: five options, rendered for Dan to pick

Roadmap: `docs/MCGROTS-ROADMAP.md` § 5, G7.5 item 5 — which the G7 phase gate
deliberately put **out** of scope. **Dan overrode that on 2026-08-18**: he wants
to see what it could look like and to experiment. His call, and it is the reason
this unit exists.

**The gate's reasoning still stands and shapes the unit.** Pomplé's body is
replaced in G8a, so any geometry you attach to the current mesh is temporary.
That is why this unit's deliverable is **a decision Dan can make from pictures**,
not a committed piece of modelling. Build the options well enough to judge; do
not polish the one that wins.

## What is wrong today

`src/mcgrots/pomple.js` builds `signGroup` as a sibling of his body group, at a
fixed world offset (`SIGN_FORWARD` 0.55m ahead, `SIGN_SIDE` 0.70m to the side,
`SIGN_UP` 0.55m off the ground) with a fixed yaw. It is a plane hanging in the
air near a dog. The gate's words: it reads as a board beside him rather than one
he holds. Nothing connects it to the animal.

He is a dog with a two-part rig — a rigid body and a head that pivots. He does
not walk. The head-turn is real and already driven by attention (McGrot, or the
player when close). **That pivot is the most interesting thing available to you**
and three of the options below use it.

## Scope — files you own

- `src/mcgrots/pomple.js`
- any new module you add under `src/mcgrots/`
- a new `docs/g7-5e-pomple-signage.md` carrying the options and your reading of
  each

**Do not touch `scripts/smoke-mcgrots.mjs`** — a concurrent worker owns it
entirely. **Do not touch `src/mcgrots/main.js`** — a second concurrent worker
owns that.

**The shipped default must not change.** Every option goes behind
`?sign=<name>`, with today's behaviour as the default, so no golden moves and
the `signs` region stays green. Verify that: `--only=signs` must still pass
with no parameter, and the full suite must be unchanged at 153/153.

## The five options

Build all five as switchable variants. Where a dimension is not specified, pick
something plausible, then sweep it and keep the best — say what you swept.

1. **`mouth`** — gripped crosswise in his snout, parented to the **head** part
   so it swings when he looks at you. Likely the strongest "he is presenting
   this to you" read, and it animates for free off a pivot that already exists.
   Watch for the board clipping through the snout or the ground at full head
   deflection.
2. **`board`** — a sandwich board hung over his back and shoulders, parented to
   the body. A working dog in uniform. Does not move with the head, which may
   read as calmer or as deader — that is the thing to judge.
3. **`stake`** — on a proper post driven into the ground beside him: post, base,
   a slight lean. This one deliberately *owns* the "beside him" reading instead
   of fighting it, and it is the cheapest and most robust to G8a replacing his
   mesh. Include it honestly; it may well win.
4. **`propped`** — leaning against the van or a crate, resting on the ground at
   an angle, as if he set it down. He sits beside it.
5. **`collar`** — a small board hanging from his collar under the chin, moving
   with the head. Quieter than `mouth`, and it survives him looking away.

## How to render them so Dan can actually choose

- **Same text, same anchor, same time, every option.** Pin the sign line so all
  five carry identical wording — a different line in each frame makes them
  incomparable. `signGroup.userData.setClock` already exists for pinning.
- Render each option at **`counter` and `far`** at minimum. `counter` is where
  the player reads it; `far` is where it has to register as an object at all.
- Add one frame per head-parented option (`mouth`, `collar`) **with his head
  turned**, so Dan sees the motion's effect rather than a neutral pose.
- Name the files so the option is obvious: `/tmp/sign-mouth-counter.png`.
- `node scripts/mcgrots-shot.mjs --frames=600` — the default 90 can be an
  unsettled scene.

## What to report

Your document names, for each option: what it looks like, what it does when he
turns his head, where it breaks, and how much of it survives G8a replacing the
mesh. Then **your own recommendation with a reason** — you will have looked at
these more than anyone else, and an unranked list of five is work handed back
rather than done.

Describe what you SAW in each capture, not what you concluded.

## Rules that bite here

- **The sign text is verbatim comic text and is never edited**, anywhere,
  including anything you generate. The garbled wording is the point.
- **No PRNG.** This module is deterministic off its own `t` accumulator by
  design and has no seeded generator; do not introduce one.
- **Actors must not affect the camera** (Dan, 2026-08-12). `update()` gets the
  player's position as a plain read and is never given the camera.
- **A presence check built on `Box3().setFromObject` passes on an invisible
  object** — proven twice on this project, once with G7l's own sign. If you
  assert anything about a variant being visible, measure a rendered frame.
- `pomple.js` faces `(+sin yaw, +cos yaw)`, the opposite of the street's
  convention. Copying the street's formula mirrors every direction you derive.

## Reporting

`.herdr/<your-name>.md`, one entry per step, newest last. Ping control only on
QUESTION or DONE — and this unit is likelier than most to have a real QUESTION,
so ask it rather than guessing. Never ping and then idle.

Commit on your branch when the five render and the default is unchanged.
