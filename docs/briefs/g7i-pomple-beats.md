# G7i — Pomplé does something you notice

**Read `AGENTS.md` first, then `docs/MCGROTS-ROADMAP.md` § 9, then
`src/mcgrots/pomple.js` end to end including its header.** Your context is
fresh.

---

## Why this unit exists

§ 9's kill criterion lists five things the visit must contain to be judged at
all. Four are built. The fifth is **"Pomplé doing something you notice"**, and
`docs/g7-visit-shape.md` § 3 item 5 is blunt about where that stands: pomple.js
has ambient behaviour only — idle settling, head-turn, attention — and nothing
that takes a cue and does a specific, once-off, noticeable thing at a chosen
moment.

The visit budgets three windows for this. They are currently budget, not
action.

## The interface is already frozen

The sequencer (G7h, live in `main.js` right now) calls:

```js
pomple.playBeat?.('notice' | 'approach' | 'settle')
```

Optional-call, guarded, so it lands whether or not you exist yet. **Implement
exactly that name and exactly those three beat names.** Do not rename them, do
not add a fourth, and do not change the call shape — `main.js` is not yours and
the guard is what lets both units land independently.

`playBeat` is fire-and-forget from the caller's side: it starts a beat and
returns. The beat plays out over subsequent `update()` calls, the same way the
existing behaviours do.

## The three beats

Settled here so you do not have to invent them. Dan's standing direction for
this phase: *"once we have a scene we can sit and watch and listen to, we can
move on to finessing."* These are first drafts meant to be watched.

1. **`notice`** — he lifts his head and holds a look at the player, noticeably
   longer than the ambient head-turn already does. **The hard part is that it
   must not read as the ambient behaviour**, which already turns his head. Hold
   it long enough, and commit the body to it enough, that a viewer reads intent
   rather than idling.
2. **`approach`** — he gets up and moves a short distance toward the counter,
   then stops. **pomple.js's header says his behaviours are "not locomotion",
   so this is the one that adds a capability rather than extending one.** Keep
   it small: a few steps, a stop, no pathfinding, no collision. If it turns out
   locomotion is a much bigger job than a short scripted translation, say so
   and propose the cheaper thing rather than building a movement system.
3. **`settle`** — he lies back down and turns away. The visit's closing beat.

**Do not make these random.** They fire on a cue, at an authored moment, and the
same cue must produce the same beat every time — the sequencer is now a pure
function of the wall clock (Dan's ruling, 2026-08-17) and a nondeterministic
beat would break that. If a beat needs variation, it owns its own seeded
generator; **never add or reorder a draw in an existing PRNG sequence.**

## The gate

**This is the reason this unit is not low effort, and it is where the project
has actually failed before.**

`getObjectByName(...)` being non-null proves a function ran. `statue.visible =
false` once passed the statue region 2/2 and the full suite 38/38 with nothing
drawn at all. A beat that sets a state flag and animates nothing would pass any
scene-graph check you could write.

So: **project Pomplé's AABB into screen space and measure the rendered pixels
inside it.** The `van` region has the working example of the technique, and the
`mcgrot` region has a pixel-counting variant added yesterday.

- **The claim to gate is that a beat CHANGES what is on screen**, materially,
  compared with the same moment without the beat.
- **The named control is the same pinned moment with no beat fired** — ambient
  behaviour only. That is what isolates the beat's own contribution from "the
  dog is on screen", which is true either way.
- Pin the clock. A gate on the real wall clock flakes in bursts here — the
  `mcgrot` region lost half a day to exactly that on 2026-08-16, because a rota
  reader stood in front of McGrot for roughly half of any real-time window.
- **Fault-inject each check, watch it go red, restore, re-verify green. Commit
  before injecting** — `git checkout <paths>` restores nothing if any path in
  the list is untracked.

**Then render each beat and open the captures.** Numeric gates cannot see a bad
picture; every fault found in G2 was found by opening an image after the numbers
said green. A beat that measures as a large pixel change and reads as a twitch
has failed, and saying so is the most useful thing you can report.

Say plainly, for each of the three, whether you think a viewer would notice it.
That is a judgement and it is wanted — label it as one.

## One invariant this unit is likely to trip

**McGrot's actor faces `(+sin yaw, +cos yaw)` — the OPPOSITE of the street.**
Copying the street's formula mirrors every direction derived from it, including
where you park a review camera; G3c rendered a shot of the seated figure, opened
it, and read backwards as forwards. Where you can, derive direction from travel:
move him and watch where he goes.

## Scope

**Yours:** `src/mcgrots/pomple.js`, `scripts/smoke-mcgrots.mjs`, and
`docs/g7-pomple-beats.md` for your write-up.

**`scripts/smoke-mcgrots.mjs` is shared and another worker is in it right
now.** You are in your own worktree so you cannot damage their copy, but the
merge is mine to resolve, so make it cheap: **add your region as one new block
at the END of the file, and add exactly one entry to the `REGIONS` array on
line 38.** Do not reorganise, do not reformat, do not tidy anything you did not
write.

**Not yours:** `src/mcgrots/main.js` and `src/mcgrots/audio.js` and
`src/mcgrots/visit.js` belong to `sequencer` (G7h) — read them, change nothing.
`docs/MCGROTS-VALIDATION.md` is also theirs; write your verification into your
own doc and the orchestrator folds it in. `docs/MCGROTS-ROADMAP.md`, `CANON.md`,
`AGENTS.md`, `CLAUDE.md` — report what should change.

Note the working tree carries unrelated modifications and untracked files from
the daily TTS job. They are not yours; commit by explicit pathspec.

## Landing

Commit by explicit pathspec, with the actual numbers: the measured change per
beat, its control, and what went red under fault injection. Name the captures
you opened and say what you saw in them. **Never push.**

Report into `.herdr/<your-name>.md` per `AGENTS.md`. Ping on QUESTION or DONE
only, and never ping and then idle.
