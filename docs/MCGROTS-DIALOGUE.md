# McGrot dialogue — G5a/G5b text units

This is the text-only landing for G5 (dialogue). No audio was rendered, no
voice was selected, and no dialogue was wired into `src/mcgrots/`. The
generated source is
[generated/mcgrots-dialogue.json](../generated/mcgrots-dialogue.json).

## G5b: the register fix

G5a's 48 lines were competent and shared one voice. Measured against
`docs/LEITH.md`'s documented dialect kit and the comics' own texture, the
fault was systemic:

| Measurement | G5a (48 lines) | G5b (72 lines) |
|---|---|---|
| Dialect kit words used | 1 of 15 rows — "pal", twice | 24/72 lines (33%) carry a kit word |
| "the fit o' the Walk" | 0 uses | 3 uses |
| Lines under 7 words | 0/48 | 20/72 (28%) |
| Mean line length | 12.1 words, range 8–15 | mixed — one-word replies to 16-word lines |
| Noun-then-abstract-lift shape | almost every line | 13/72 (18%) still fit it |

The tic: almost every G5a line was one balanced sentence — a concrete noun
followed by an abstract lift ("the sauce needs mercy", "the ladle earns its
keep"). Fine individually; six characters deep, it was one writer's habit
wearing six hats. McGrot is canonically *grizzled, confrontational* — that
means interruptions, repetition, four-word sentences, not polished
aphorisms.

**What changed: form, not content.** `docs/CANON.md`'s characterisations
were right and G5a read them correctly. The fix constrained three mechanical
properties of the line cards in `scripts/generate-mcgrots-dialogue.mjs`:
dialect actually present, and unevenly — Mike English (an outsider per
canon) uses less of it than McGrot, not the same amount; a real fraction of
lines under seven words, including fragments and one-word replies; and the
balanced-sentence shape capped rather than the default. All three are gated
mechanically in `smoke-mcgrots.mjs`'s `dialogue` region — see
`MCGROTS-VALIDATION.md` § G5b.

**What survived unchanged, because it already worked:** Pomplé's
handwritten-sign device; the Government Inspector's "The risk assessment is
thorough; the risk has declined to participate."; and
`scripts/check-mcgrots-dialogue.mjs`, the plagiarism gate, untouched.

**No model call.** `scripts/generate-mcgrots-dialogue.mjs` is 72
hand-authored line cards (12 per principal) and a seeded shuffler — there is
no `fetch`, no API. Dan ruled 2026-08-14 to stay with authored cards for
this unit: proving the register is fixable by hand is the cheaper
experiment. Model generation is not rejected, only deferred — see
`docs/briefs/g5b-register.md` for the fork, which stays live. It would make
the plagiarism gate load-bearing rather than a formality: a model handed
comic text as style context is exactly what the gate exists to catch, and
more dialect already made this measurably true for the authored cards —
sharing more of the comics' own Scots vocabulary raises seven-word collision
risk. Watched for, not assumed: all 72 rewritten lines were re-checked and
still pass with 0 violations.

## The Leith Badger: seven characters, one that doesn't speak

`docs/CANON.md` lists the Badger as one of the roadmap's five regulars; G5a
carried six entries and flagged the discrepancy rather than guess. Dan ruled
2026-08-14 that the Badger joins the cast.

**It has no lines here, and that is the finding, not a gap.** Two devices
were available and both were rejected:

- **Speech.** Canon establishes Pomplé's ability to communicate — "dog,
  moral role, hats and signs" is *established*. The Badger's canon entry has
  no equivalent: "wildlife undermining the Gullet... persistent, practical,
  territorial, unimpressed" establishes behaviour, not a prop-holding or
  literate capability. Giving it spoken or written lines invents a faculty
  canon doesn't support.
- **Signs.** Even if it could hold one, this would be Pomplé's device worn
  by a second character. The brief was explicit that this makes both
  weaker — a silent-character trick only reads as a trick once.

No third device was found that wasn't a variant of one of those two. The
Badger's established prop-cost canon — mud, a stolen food wrapper, a scrap
of warning tape, undermined cobbles — is texture the game can build without
dialogue at all: the burrow, the damage, the wrapper are the "line". That is
outside this unit's scope (game wiring is not G5's), but it means the
Badger's cast entry is complete as a non-speaking character rather than an
unwritten one. `generated/mcgrots-dialogue.json` stays at 6 principals × 12
lines; the `scope` field in the generator's own output records why the
Badger isn't a seventh.

## Sample for reading

The full 72 lines — all 12 cards per principal, not a shuffled 8-line
sample, since the register itself is what's under review this time.

### McGrot

- "Awright pal. Sauce is extra, opinions are free."
- "Naw."
- "Radge, the pair of you — queueing for a smell."
- "Chum me doon the fit o’ the Walk and I’ll show ye a queue that means something."
- "Persevere, it says on the bin. Persevere, I say back."
- "Mingin? Come back when your own kitchen’s had a shift like mine."
- "Do not call it scraps."
- "Pomplé says the sauce needs mercy, and I believe the dog."
- "I’ve buried better plans than this under a layer of onions, ken."
- "Steamboats or stone sober, my queue’s still the longest at the fit o’ the Walk."
- "Away and get your messages first — then tell me that’s shan."
- "Extra sauce, every time. That’s not negotiable, pal."

Confrontational now in the mechanical sense too: "Naw." is a complete reply,
and "Do not call it scraps." lands as a flat five-word rejection rather than
the old semicolon-joined aphorism. The dialect is thick and used casually,
not glossary-checked ("radge", "chum... doon the fit o' the Walk", "ken",
"steamboats", "messages... shan" — six of twelve lines). The risk carried
over from G5a: food-metaphor density. "Layer of onions" and "extra sauce"
both do the job the old corpus over-relied on; a full voice pass should
watch whether that's now a second tic.

### Pomplé

Still handwritten signs, not spoken dog dialogue — the one device that
already worked, kept unchanged in form.

- "SIT DOWN."
- "THE HAT IS NOT A LICENSE."
- "I HAVE HEARD WORSE FROM BETTER DRESSED ANIMALS."
- "NO LADLE UNTIL SHE HAS A SEAT."
- "AWRIGHT. NOW MOVE."
- "STOP POINTING AT THE FLATS."
- "PERSEVERE MEANS SOMETHING DIFFERENT WHEN YOU HAVE PAWS."
- "THAT IS SHAN, AND YOU KNOW IT."
- "A KINDNESS COSTS NOTHING. TRY ONE."
- "THE STUDENT WANTED AUTHENTICITY. I GAVE HIM A NAPKIN."
- "CHUM HIM DOON THE WALK YOURSELF."
- "THE QUEUE REMEMBERS WHO WAS KIND."

The sign format was already the strongest register in the corpus, and it
turns out to be a natural fit for the length quota too: a sign that has to
stay legible from across a pavement wants to be short, so 7 of 12 land under
seven words with no extra effort, and none of the twelve fit the old
balanced-sentence shape at all — blunt statements don't have room for a
noun-then-lift pivot. The risk to watch in a voice pass: several of the
former aphorism-density signs are gone, and it is worth checking the
replacements ("A KINDNESS COSTS NOTHING. TRY ONE.") don't just reintroduce
the same habit in two sentences instead of one.

### Keth with One Eye

- "Watch the hinge."
- "The haar’s in early. That’s your first warning, no your last."
- "Doon the Walk, aye, but no past the yellow barrier."
- "Naw."
- "A warning is a kindness, coat buttoned against the rain."
- "The gulls have gone quiet. Count your footsteps instead of your blessings."
- "Ken the tramworks? They’ve buried newer things than cables."
- "There’s a second shadow at the fit o’ the Walk where your map says none."
- "Barry, is it, the new bridge? Ask it what it ate to get here."
- "Nether Leith keeps a light for strangers who know better than to knock."
- "Chum ye doon the Walk myself, if you’re the type who listens."
- "The map’s honest. It’s the ground that’s started improvising."

Keth's cryptic register survives, and now interrupts itself the way a
watcher who doesn't finish a thought would — "Watch the hinge." and "Naw."
sit beside the longer warnings rather than being filed among them. "Barry,
is it, the new bridge?" is new: sarcasm delivered in dialect rather than
atmosphere, which G5a's version of this voice didn't attempt.

### Mike English

- "Napkins first. Always napkins first."
- "One napkin per portion. We are preserving civilisation in manageable squares."
- "The students taught me ‘ken.’ I am still deciding whether to use it."
- "Fine. The Walk wins."
- "I am not pretending to be English. I am demonstrating a market position."
- "Fair play to McGrot; the man can season a queue."
- "The crowd went east for the match. Somehow it improved my customer service."
- "Rupert. Never say ‘ken’ again unless a local invites you to survive the sentence."
- "I can share a pavement without sharing my branding, surely."
- "Observe the service: brisk, hygienic, and pronounced correctly for international confidence."
- "Your queue has taste, McGrot, though its standards require gentle refurbishment."
- "I have revised the accent, the napkins, and one opinion about this place."

Deliberately the lowest dialect fraction in the corpus (2/12, against
McGrot's 9/12) — Mike doesn't use the kit, he reports on it, at arm's
length: "the students taught me 'ken'", "never say 'ken' again" — the word
appears as an object he's examining, not something he says. That is the
outsider status doing its job mechanically, not just in the character
notes. "Fine. The Walk wins." replaces the old, longer surrender line and
reads more like a man who has actually run out of things to say.

### The Taxman

- "Stamped."
- "This is not a philosophy. It is a receipt."
- "Your books say ‘barry.’ Barry is not a category I recognise."
- "Denied."
- "I have reviewed the sauce and found three unregistered layers of ambition."
- "Persevere is not a defence against an audit."
- "The clipboard is impartial. Your explanation is making it difficult."
- "Every missing penny leaves a trail, usually damp, faintly savoury, and unclaimed."
- "Appeal in writing."
- "This receipt is illegible, but its confidence is unfortunately clear."
- "The audit concludes when the numbers stop behaving like folklore."
- "Your business model has more exceptions than my department has patience, frankly."

Stamps make excellent one-word lines: "Stamped." and "Denied." didn't exist
in G5a and are the two shortest, flattest replies in the whole corpus, which
is exactly right for a character whose entire job is issuing verdicts. The
one dialect intrusion, "Your books say 'barry.' Barry is not a category I
recognise.", is the Taxman quoting someone else's word back at them with
open contempt — dialect as evidence, not voice.

### The Government Inspector

- "The risk assessment is thorough; the risk has declined to participate."
- "Closed. Pending further review, obviously."
- "I am not closing anything today."
- "The form doesn’t recognise ‘ken’ as a temperature."
- "Please keep the ladle still, ken."
- "This temperature is within tolerance. That is not the same as reassuring."
- "I require a clear answer, a clean surface, and one minute outside."
- "The van has written its own address on the licence."
- "Noted."
- "If the sauce moves again, I will record it as an unplanned stakeholder."
- "I have brought the correct forms, although none of them anticipated this smell."
- "Your hygiene plan has diagrams, arrows, and one deeply concerning prophecy."

"The risk has declined to participate" is kept exactly as G5a wrote it — the
best compact line in the set, and the reason G5b's rewrite rule was
constrain form, not re-plan content. "Please keep the ladle still, ken." is
new: the "Leith edge under stress" `CANON.md` already names, made literal —
the one line where the Inspector's dialect slips through, under pressure,
exactly once.

## Plagiarism and sensitivity gate

Unchanged from G5a — `scripts/check-mcgrots-dialogue.mjs` combines all 514
lines in `assets/comic-lines.json` and all 961 `kind: "comic"` phrases in
`assets/readings.json`, normalizes case, apostrophes, punctuation, and
spacing, then indexes every seven-word window. A generated line is rejected
when any seven-word window matches — "more than six words" mechanically,
since an eight-word match also contains a matching seven-word window.

Re-run against the full 72-line G5b corpus:

```text
node scripts/check-mcgrots-dialogue.mjs --file generated/mcgrots-dialogue.json
Corpus: 1475 source lines, 6531 normalized words, 541 unique seven-word windows
Checked: 72 candidate lines
PASS: 0 plagiarism violations; 0 lexical sensitivity violations
```

More dialect shares more vocabulary with the comics' own Scots, which
raises seven-word collision risk rather than lowering it — that interaction
was watched for, not assumed, and the clean result above is the answer: 0
violations at 33% dialect density, against 0 violations at 2% density in
G5a. `MCGROTS-VALIDATION.md` § G5a still carries the original fault
injection (a genuine `readings.json` line, three matching windows, exit 1);
§ G5b re-runs that same control from inside the suite.

## Verification record and outstanding work

- G5a: seed `1511506142`, 48 lines, 205 director briefs verified. G5b:
  same seed, `--count 12` (all cards, not a shuffled subset — the register
  fix needed to be checkable against the whole rewritten pool, not a sample
  of it), 72 lines, 205 director briefs re-verified.
- No audio was rendered or listened to. Voice selection remains Dan's call.
- No game module was changed.
- `MCGROTS-ROADMAP.md` and `MCGROTS-VALIDATION.md` carry the G5b landing
  numbers; this document is the readable sample and the register/Badger
  reasoning behind it.
