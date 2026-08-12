# G3c — the real ledge, and the seated pose that stands on it

The game is mostly a person sitting near a van, listening. F1 calls the seated
pose "the most load-bearing posture in the piece" and it has been wrong since
G1. It waited deliberately: tuning a pose against a guessed wall height is work
you throw away. G3a and G3b have landed, so the wall can now be real.

Style is settled: **S2 · Aerial flatten**. Do not re-open it.

## The gap this unit closes, which the G3 plan missed

`main.js:143` builds a placeholder box at each sitting anchor — a `BoxGeometry`
in a Lambert material, dropped in during G1 so the pose could be looked at
at all. Its own comment says "G3 dresses the pitch properly; this exists now
because a sit pose with nothing under it reads as a crouch."

**Neither G3a nor G3b replaced it.** The van brief covered the van, the board
and the ground; the statue brief covered Victoria. The wall fell between them.
That is an orchestration miss, not a worker's, and closing it is the first half
of this unit — the pose cannot be judged against a placeholder any more than it
could in G1.

## What to build

**1. The real ledge.** Whatever a person actually perches on at the Foot of the
Walk. `docs/LEITH.md` is the reference and the real-geometry rule applies:
never "correct" something real because it composes badly. It should look like
it belongs to the same place as the van and the junction, not like a bench
dropped in.

`anchors.js` has `LEDGE_H = 0.45` with a comment saying it must agree with
whatever is built, and calls it "a low wall — the height you perch on rather
than sit back into". **You may change that constant if the real dressing argues
for a different height, but if you do, change it in one place and say what the
new number is derived from.** Do not move an anchor's position; the five
standing spots are G3d's, not yours.

**2. The seated pose.** F1 in `docs/MCGROTS-ROADMAP.md` § 10 lists three
specific defects from the review capture, and they are your acceptance list:

- The figure sits **in front of** the ledge and lower than its top surface.
  The anchor and the ledge are positioned independently — `main.js` offsets the
  ledge 0.3 m behind the standing spot — so nothing guarantees the hip lands
  over the seat. Make that relationship derived, not two numbers that happen to
  agree.
- The legs read as folding **under** the body, a kneel, rather than forward off
  the edge. F1 suggests checking the sign of `rotation.x` on the thigh against
  the actor's facing: positive reads as forward in the walk, so if it reads as
  backward when seated, the two are not in the same frame. **Check it; do not
  assume that diagnosis is right** — it was reasoned, not measured.
- The torso pitches forward into a huddle. F1's stated requirement is a pelvis
  that rotates back independently of the spine.

**3. Judge F2 while you are here.** Feet slide; there is no foot IK. It has
never been judged at the game's real camera distances, only at G1's closer
review camera. Look at it in the finished shots and **report whether it reads**.
Do not build IK — this is a judgement, and the answer "it does not read at
these distances, close F2" is a perfectly good result and a cheap one.

## The gate

The seated pose is a picture, and pictures are where every G2 fault hid. But
one relationship here is genuinely numeric and worth gating: **the hip lands
over the seat**. Assert the seated hip's position against the ledge's top
surface and footprint, at both sitting anchors, from the shipped scene — not
from a helper that recomputes the same offsets the product uses.

Name a **control** that isolates it. Standing at the same anchor is the obvious
one and it is a real, separate branch. **Fault-inject** it — restoring the old
independent offset should turn it red. **Commit before you inject**;
`git checkout <paths>` restores nothing if any path in the list is untracked.

## What Dan looks at

This is a posture. No number will tell you it looks like a person sitting on a
wall. Render `wall` and `kerb` under S2 at 600 frames, open the captures, and
say what you **saw** — where the hip is relative to the seat, which way the
knees point, whether the back is straight. If it still reads as a crouch, say
so; a half-fixed pose reported as fixed is the exact failure the contract
exists to catch, and F1 has already been "partly fixed" once.

## Scope

`src/mcgrots/` only — the street is paused.

**You are the only worker in the tree for this unit**, so the shared-tree
pathspec rule in `AGENTS.md` § Landing is less pressing — follow it anyway,
the TTS files in the tree are not yours either.

Not yours, and deliberately: the five camera positions, the van's framing
spread across the anchors, and the fixed hour. Those are **G3d**, which runs
after this, because composing a shot around a figure whose posture is wrong
means composing it twice. You will see the wide shot's empty middle distance
at `back` — leave it, and say if it bothers you.

Land as one unit: code, `docs/MCGROTS-VALIDATION.md`, `docs/MCGROTS-ROADMAP.md`
§ G3c with F1 closed or its remainder restated, and a commit message carrying
the real numbers and the injection result.
