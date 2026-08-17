# G7k — the ambient bed under the visit's silence

Write-up for the unit. Brief: `docs/briefs/g7k-ambience.md`. Gates:
`scripts/smoke-mcgrots.mjs`'s `ambience` region, 9 checks.

## Why

§ 9's kill criterion is one ten-minute visit. 386 of the 600 seconds are
silence, and `src/mcgrots/` shipped no ambient audio at all before this unit
— verified before starting: no ambience module, no import of one, the only
audio in the bundle was `createReaderAudio()` (voices).

## What shipped

`src/mcgrots/ambience.js` — pure WebAudio synthesis, zero audio assets, its
own `AudioContext` (never `readerAudio`'s — see the module's header for why
sharing wasn't attempted). Three layers:

- **Rumble** — two detuned sine oscillators through a lowpass filter whose
  cutoff wobbles on a slow LFO ("slowly modulated," per the brief).
- **Mid band** — bandpass-filtered looping noise, gives the bed "somewhere to
  sit" between the rumble and the events.
- **Four deterministic discrete events** — dog, gull, door, tram — a small
  hand-authored table (`EVENTS`), the same shape as `visit.js`'s `CUES`, wrapped
  over a 54s cycle unrelated to the visit's own 600.7s one. `eventWindowAt(now)`
  is a pure function of the wall clock; no PRNG anywhere in the module.

**The gull is the prominent event**, per the mid-turn addition from the
ideation session (`docs/g7-ideas.md` § D2, 2026-08-17): "a gull cry carries a
silence on its own" and is a cheaper "something you notice" than anything the
dog can be made to do. Its gain (1.8) is more than 7× any other event's, it is
the only event with its own single-tap echo, and — per D2's structural
instruction — it lives inside this module rather than a second audio module
competing with `audio.js`'s one-voice rule.

Ducking: `main.js`'s frame loop calls `ambience.setDucked(!!(info &&
info.phase === 'reading'))` every frame, reusing the exact signal
`readerAudio` already consumes — this module never reads `rota.js` or
`visit.js` directly, so it structurally cannot disagree with them about who
is reading.

## Landing shape

Two commits, as the brief specified:

1. The module behind `?ambience=on` / `window.__mcgrotsForceAmbience`,
   shipped OFF.
2. This follow-up: `AMBIENCE_ON` flipped to default ON (`?ambience=off` or
   `window.__mcgrotsForceAmbience = false` still opts out) — same shape as
   G7h's own `LOOK_KIND` default flip.

Landing 2 needed one gate fix: the region's "ambience off" control boot
(`armOff`) had omitted the `ambience` param, relying on the old default. Once
the default flipped, omitting it means ON, and the control silently stopped
controlling — caught by re-running the full suite after the flip: check 1
read `off: peak=0.094 rms=0.011` instead of zero. Fixed to pass
`&ambience=off` explicitly.

Full suite: **110/110 both before and after** the default flip. Every other
region's numbers shift slightly between the two runs (ambience is now audibly
running alongside their own boots in real time) but nothing crosses a
threshold — same shape as G7h's own follow-up note on `LOOK_KIND`.

## The four gates, plus one addition

### 1. The bed is audible; control: ambience off reads zero

Taps the AudioContext's real output via a WebAudio technique generalised from
the `audio` region's own F15 fix (wrap `AudioNode.prototype.connect`, mirror
every `.connect(ctx.destination)` into a `MediaStreamAudioDestinationNode`,
read it with a real `AnalyserNode`) — across however many `AudioContext`s a
boot creates, since `ambience.js` deliberately never shares `readerAudio`'s.

`on: peak=0.109 rms=0.069` / `off: peak=0.000 rms=0.000`.

**Fault-injected**: `MASTER_GAIN` set to 0. Went red (`on: peak=0.000
rms=0.000`, indistinguishable from the control). Restored, re-verified green.

### 2. Ducking happens; control: disabled, indistinguishable

`unducked rms≈0.070, ducked rms≈0.019` (ratio ≈0.27, must be <0.75) — real,
audible ducking.

**The control is gated on the raw `GainNode.gain` value, not RMS.** First
attempt gated the control on RMS too (reading-vs-silence with ducking
disabled) and it flaked — ratio read anywhere from 0.46 to 0.65 across
repeat runs, looking exactly like a working duck. Traced rather than
loosened: a direct read of `ambience.gainValue` (the master `GainNode`'s own
`AudioParam`) held exactly `MASTER_GAIN` (0.14) in both states, every run —
the mechanism was never at fault. The two pages this region always has open
(`armOn`, `armOff`, both driving real continuous playback) compete for the
same real-time audio pipeline, and that contention measurably moves the
BED's own rendered RMS independent of anything ducking does. RMS stays in
the check's detail line as supporting colour; the pass/fail gate is the gain
node.

**Fault-injected**: the `setDuckingEnabled` boolean is exercised live by
check 2 itself every run (not a separate injection) — its own control arm
IS the fault-injected-and-restored state.

### 3. The bed does not damage the voice (brief: "the most important of the four")

Two arms, same pinned reading, voice-only tap: `on: rms=0.0182` / `off:
rms=0.0182` (relative delta 0.3-3.3% across runs, must be <10%).

**Getting a stable, comparable number here took two real fixes**, both kept
as comments in the gate:

- **Fresh-seek before every sample, not just re-pinning the clock.**
  `audio.js` only seeks when the schedule's id *changes* — re-pinning to the
  same `readingT` with the same id already current is a no-op, so the
  element just kept playing forward in real wall-clock time. Three samples
  taken minutes apart, nominally all "at readingT," read 0.0186 / 0.0132 /
  0.0092 — comparing different *words* in the reading, not the presence or
  absence of the bed. Fixed by bouncing through a known-silent moment first
  (resets `currentId` to `null` via `audio.js`'s own `stopPlayback`), then
  re-pinning — a genuine id-changed transition, which does reseek to the same
  deterministic `elapsed` every time.
- **The RMS-threshold-first-crossed bug.** The fault-injection/restore steps
  rebuild the 'voice' analyser from scratch each time, and a freshly built
  analyser reads a real but artificially low RMS for roughly its first
  second while the MediaStream pipeline settles. `waitForRMS`'s predicate was
  `rms > 0.005` — F15's own floor — which let it return the moment the
  settling curve first crossed that floor, not once it reached the reading's
  real level. Measured: a restore read `rms=0.0074` against a same-content
  baseline of `0.0318` — a false "damaged" reading with nothing actually
  wrong. Raised to `0.015` (below steady-state ≈0.03, above the settling
  artefact) across all four voice measurements in this check.

**Fault-injected, and built into the suite itself (runs every time, not a
one-off manual check)**: a second, independent `AudioContext` synthesises a
loud 300Hz tone into its own `MediaStreamAudioDestinationNode`, and that
stream is added as a *second* tap index feeding the SAME analyser as the
voice — proven necessary the hard way: the first attempt tried merging both
streams' tracks into one `MediaStream` (`new MediaStream([...a.getAudioTracks(),
...b.getAudioTracks()])`), and it silently did nothing (injected rms barely
moved, 0.0328→0.0322) — `createMediaStreamSource` on a multi-track stream is
spec'd to use only one track, implementation-defined which. Two separate
source nodes connected into the same analyser mix correctly, because that's
how WebAudio actually sums signals. With the fault live: `injected rms=0.56,
delta 1600-3000%`. Restored (rebuild 'voice' from the clean tap alone):
`delta 0.2-4.3%`, back in tolerance.

### 4. Deterministic; control: two different pinned moments differ

Pure — no audio needed. `ambience.eventAt(t)` compared across two genuinely
separate page boots at the same `t`: identical every run. A different `t` on
the same boot: different event, every run.

**Fault-injected**: `wrap()` temporarily perturbed with
`Math.random() * CYCLE_S`. Went red — sometimes on the primary comparison
directly (two boots disagreeing on the same `t`), sometimes the primary
happened to read `null`/`null` by chance while the **control** (two different
`t`s must differ) caught it instead — confirmed by re-running three times,
watching both failure shapes actually occur. Restored, re-verified green.

### 5. The gull reads as more prominent (addition, ideation session D2)

Measured as a delta above the continuous bed's own baseline peak, not a raw
peak — the first attempt (raw peak, gull gain 0.65, bandpass Q=3, with a
stereo panner) read `gull=0.086, door=0.078` against a baseline of `0.094`:
both events were *quieter* than the continuous bed's own peak, not because
they weren't firing but because the signal chain was losing real energy
(Q=3 rejected a meaningful fraction of the gull's own 700-1900Hz sweep, and
the continuous layers were louder than either event's post-filter output).

Fixed in `ambience.js`, not by loosening the check: rumble/mid-band gains
turned down (0.6→0.35, 0.16→0.10), the gull's bandpass widened (Q 3→1.1),
its stereo panner dropped entirely (measured as a second, smaller loss —
equal-power panning redistributes L/R and this analyser reads a down-mixed
signal, so panning bought nothing and cost real gain), and its own gain
raised (0.65→1.8). Final: `baseline peak≈0.06, gull peak≈0.15-0.20 (delta
0.09-0.13), door peak≈0.05 (delta 0.000)` — gull clears the `>0.05` floor and
the `>1.4× door's delta` margin comfortably across every run.

**Fault-injected**: gull's gain temporarily set equal to door's (0.12). Went
red (`gull delta=0.000`). Restored, re-verified green.

## Listening

**Not done — this session cannot play audio.** Same call G7e and G7g made,
and the brief names it as the right one, not a failure. Everything above is
measured (RMS, peak, the gain node's own value); none of it is a substitute
for someone actually hearing the bed, the duck, and the gull. **This is the
one thing Dan needs to check by ear** — `npm run dev:mcgrots`, then
`/mcgrots.html?ambience=on&visit=on`.

## Worth flagging, not fixing

After this unit and G7h's style flip, the intended visit needs three URL
parameters (`?visit=on`, `?ambience=on` — now on by default, so really just
`?look=aerial`, already defaulted — plus whatever G7h's own flip left).
Something should collapse the intended-visit configuration to one flag or one
default. Not this unit's scope; the brief said to say so and move on, so:
said.
