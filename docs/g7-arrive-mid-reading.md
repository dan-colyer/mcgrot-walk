# G7m — you arrive in the middle of something, and you can say one thing

Brief: `docs/briefs/g7m-arrive-mid-reading.md`. This is the landing record:
what was built, what was measured, and one correction found by the suite
rather than by review.

## What this unit built

Two changes, sharing `visit.js`/`main.js` because they share a file, not
because they share a mechanism.

**Part 1 — a reading is already underway when you arrive.** `visit.js`'s cue
windows were a running sum of `dur`, strictly sequential by construction, so
a reading could never start before the walk cue ahead of it had finished —
every arrival at an anchor was a wait, never a mid-sentence join. Fixed with
one new field, `earlyStart`: an authored, absolute cycle-second (same units
as the cumulative `start` the schedule already computes, not a relative
offset), present only on cues that overlap the walk cue directly before them.
Two landed — cue 4 (`19f35bc7`, kerb) and cue 14 (`022bcde2`, kerb), both
starting 3.0s early — out of five walk-then-something transitions in the
table; the other three are walk-into-complaint, not walk-into-reading, and
the brief asked for readings specifically.

**Part 2 — one input, and the answer is "Naw."** `mcgrot-03` (measured
1.05s) now plays on the `n` key, routed through the SAME `readerAudio`
channel the scheduled readings already use — no second `<audio>` element, no
queue. It only fires when nothing scheduled is currently playing; a real cue
always wins the channel. 6s cooldown, chosen at ~5.7x the clip's own length.

`audio.js` — not this unit's file — is unchanged. Its `elapsed`-always seek
(F14) already did everything Part 1 needed; it had simply never been asked
to seek to a positive elapsed for a cue whose nominal position hadn't arrived
yet, because nothing before this unit fed it one.

## The `earlyStart` mechanism, briefly

Every OTHER cue's `start`/`end` is still the plain cumulative sum of `dur` —
untouched, so the cycle length (600.6s), every other cue's boundary, and the
`beats`/`taxman` regions' own pinned instants are bit-for-bit what they were
before this unit. Only the two overlap cues' left edge moves earlier, into
the preceding walk cue's own tail. `cueAt(t)` resolves the resulting overlap
window by keeping the LAST match in a single forward pass over the cue
table, rather than returning on the first hit — an authored overlap only
ever reaches back into the cue immediately before it, never forward, so one
pass is enough and no second lookahead was needed.

## Found by the suite, not by review

**The overlap's own value was wrong on the first pass.** `earlyStart: 3.0`
was written meaning "3.0s of overlap" — but the field is an ABSOLUTE
cycle-second, not a duration, and `cueAt` read it as "active from t=3.0s",
which covers nearly the whole cycle for both overlap cues. The full sweep
went from 28 distinct cues to 15, jumping straight from cue 0 to cue 14 on
the first step — caught immediately by the existing "every cue fires, in
order" check, before any of this unit's own new gates ran. Fixed to the
actual absolute values (36.9 and 295.0: each cue's old nominal start minus
3.0s).

**A join-position poll returned before the real seek had landed.** The first
version of the mid-reading-join gate treated `currentTime !== null` as its
readiness signal — but the element's `currentTime` starts at `0`, a valid
non-null number, so the poll exited immediately, before `audio.js`'s own
async `loadedmetadata`-gated seek (F14) had actually run. Both the mid pin
and its boundary control read exactly 0, and the control happened to pass
for the wrong reason. Replaced with a fixed 500ms wait — the file's own
existing idiom for "let a transition actually land" — rather than a poll
against a signal that can't distinguish "not yet" from "already zero".

**A single audio sample can land on a word gap.** The swallow gate's first
version sampled RMS once, at a fixed delay, to prove a reading's own output
was unchanged by a swallowed press. It read 0.006 — barely over the 0.005
pass threshold — against a baseline of 0.105 moments earlier, on a page
where nothing had actually gone wrong: `2b2110bb` is spoken audio with
natural pauses between words, and the snapshot landed in one. Replaced with
the same `waitForAudible` poll-for-a-loud-moment technique the region's own
pre-existing audible check already used.

## The gates, and what going red looked like

9 checks, folded into the existing `visit` region (13 -> 22), all
fault-injected and restored — see `docs/MCGROTS-VALIDATION.md`'s own G7m
section for the full table, numbers, and which checks moved together under
each injection. In short: disabling `earlyStart` took the overlap-purity and
overlap-audible checks red together (both read the same field); forcing
`cueAt`'s `elapsed` to zero took the mid-reading-join and overlap-purity
checks red together (both read the same return value); removing the
reading/complaint swallow guard took three checks red as a cascade (a
corrupted play-count baseline, not three separate faults); and the cooldown
check, injected in isolation, went red alone.

`visit` region standalone: 22/22 in ~5.3s. Full suite: 140/140 in ~28s, own
worktree.

## What should change elsewhere (not this unit's to edit)

- `docs/MCGROTS-ROADMAP.md` § 6's "arriving mid-something is correct
  behaviour, not an edge case" bullet already argues for exactly this
  feature in the abstract — worth a one-line pointer to this section once
  landed, so a future reader doesn't have to rediscover that the capability
  now has a caller.
- Of the five walk-then-cue transitions in the table, three are still
  untouched by this unit on purpose (the brief named readings specifically):
  two walk-into-complaint (cues 9 and 21) and one walk-into-silence (cue 17).
  The same `earlyStart` mechanism covers a complaint the same way it covers a
  reading with no new code; a walk-into-silence transition has nothing to
  overlap into and would need a different feature.
