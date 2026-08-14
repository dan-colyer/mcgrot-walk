# McGrot dialogue — G5a text unit

This is the text-only landing for G5a. No audio was rendered, no voice was
selected, and no dialogue was wired into `src/mcgrots/`. The generated source
is [generated/mcgrots-dialogue.json](../generated/mcgrots-dialogue.json).

## Scope and output

The G5a brief says “McGrot and the five principals”, then names Pomplé, Keth
with One Eye, Mike English, the Taxman, and the Government Inspector after
McGrot. That is the scope used here: six entries total. `docs/CANON.md` also
has a Leith Badger entry, and the wider roadmap calls the Badger one of five
regulars; it is deliberately not in this sample because it is not one of the
five named by the brief. Resolve that cast-scope discrepancy before expanding
the dialogue corpus.

The generator produced 8 lines per entry, 48 lines total. Eight is enough to
read a small voice sample and compare principals without pretending this is a
finished corpus. Each character has 12 authored original line cards; a private
seeded selector chooses the requested count without touching any existing
project random sequence. The output is resumable:

```text
node scripts/generate-mcgrots-dialogue.mjs --count 8 \
  --out generated/mcgrots-dialogue.json
node scripts/generate-mcgrots-dialogue.mjs --count 12 \
  --out generated/mcgrots-dialogue.json --resume
```

The output carries `Audio Profile`, `Scene`, `Director's Notes`, and
`Performance` fields in the shape of the 205 files in `scripts/tts-prompts/`.
The generator counted 205 `.txt` briefs at generation time and refuses to run
if that source-style inventory changes unexpectedly.

## Sample for reading

These are the exact 8 selected lines for each entry. Delivery notes are kept
separate from the dialogue text so the plagiarism check judges only words that
would be spoken or shown as a sign.

### McGrot

- “Pomplé says the sauce needs mercy, which is why I keep him near it.”
- “An honest bowl should frighten the cautious and comfort whoever stayed.”
- “At the Gullet, every ladle earns its keep and every rumour gets reduced.”
- “Mind the steam, pal; it has opinions about anybody standing between me and lunch.”
- “I have buried better plans than this beneath a layer of onions.”
- “If the smoke rises straight, somebody important is about to misunderstand it.”
- “The council sent another form; I sent it back with gravy on the signature.”
- “Do not call it scraps; scraps are what the future leaves after dinner.”

The strongest McGrot material is the practical complaint turning into a small
philosophy, especially the tram-trench and scraps lines. The limitation is
that eight lines do not yet prove a full performance arc; the later voice pass
should test whether the repeated food metaphors stay vivid rather than become
a catchphrase.

### Pomplé

Pomplé’s lines are handwritten signs, not spoken dog dialogue, in accordance
with the canon’s dog / moral-compass / hats-and-signs facts.

- “SIT DOWN, PAL. THE STREET WILL STILL BE HERE.”
- “THE BANANA FLATS ARE A LANDMARK. STOP POINTING AT THEM.”
- “THIS IS A DOG’S OPINION, NOT A PUBLIC CONSULTATION.”
- “I HAVE HEARD WORSE FROM BETTER DRESSED ANIMALS.”
- “NO LADLE UNTIL THE OLD WOMAN HAS A SEAT.”
- “THE HAT IS NOT A LICENSE TO BE DAFT.”
- “THE STUDENT ASKED FOR AUTHENTICITY. I GAVE HIM A NAPKIN.”
- “YOU MAY CALL IT A PILGRIMAGE AFTER YOU HAVE HELPED CARRY SOMETHING.”

The sign format gives Pomplé a clean contrast with the talkers, and the Banana
Flats line treats the building as a landmark rather than a poverty joke. The
risk is aphorism density: “THE HAT IS NOT A LICENSE TO BE DAFT” is useful
timing but broad. Future writing needs more silent reactions and fewer signs,
not longer speeches.

### Keth with One Eye

- “A warning is a kindness with its coat buttoned against the rain.”
- “You can cross the Walk safely, provided you stop pretending it is empty.”
- “The sea gives nothing back unchanged, not even a rumour carried inland.”
- “Do not follow the hinge when it opens; it has learned the shape of visitors.”
- “Under the Walk, the old names keep dry. That is why they sound awake.”
- “If the gulls go quiet, count your footsteps instead of your blessings.”
- “Nether Leith keeps a light for strangers who know better than to knock.”
- “There is haar on the statue, and a second shadow where your map says none.”

Keth’s warning register is distinct and uses the canon’s local knowledge and
Nether Leith reference without inventing a subterranean playable location. The
“kindness” line is the most helpful version of the ominous voice; several of
the others are atmosphere-first and will need scene context to avoid sounding
like generic fantasy prophecy.

### Mike English

- “Call it rivalry if you like; I call it a shared frontage with excellent tension.”
- “The crowd went east for the match and somehow improved my customer service.”
- “Fine, the Walk has won me over. Please do not put that on the menu.”
- “One napkin per portion. We are preserving civilisation in manageable squares.”
- “A proper menu leaves room for surprise, but not for sauce on the waistcoat.”
- “I have revised the accent, the napkins, and one opinion about this place.”
- “Your queue has taste, McGrot, though its standards require gentle refurbishment.”
- “Observe the service: brisk, hygienic, and pronounced correctly for international confidence.”

Mike has the clearest built-in movement from status performance toward being won
over. “International confidence” is intentionally a little pompous, but it is
also the most generic line in this sample and needs a stronger Leith-specific
scene partner before it is treated as finished.

### The Taxman

- “The audit will conclude when the numbers stop behaving like folklore.”
- “A cash box is not a philosophy, despite the evidence submitted this morning.”
- “Your receipts describe a philosophy, not a taxable transaction.”
- “Every missing penny leaves a paper trail, usually damp and faintly savoury.”
- “Your business model has more exceptions than my department has patience.”
- “You may appeal this assessment after demonstrating where the money went.”
- “This receipt is illegible, but its confidence is unfortunately clear.”
- “I have reviewed the sauce and found three unregistered layers of ambition.”

The Taxman is strongest when the literal office register meets an absurd object;
the “three layers” line is the cleanest example. The sample does not yet test
the two-actor rhythm with McGrot, which is where the canon says this character
belongs.

### The Government Inspector

- “Please do not call the inspection a conversation until it has passed review.”
- “I am not closing anything today. I am merely standing very near the possibility.”
- “If the sauce moves again, I will record it as an unplanned stakeholder.”
- “Please keep the ladle still while I establish whether it is a utensil or witness.”
- “I have brought the correct forms, although none of them anticipated this smell.”
- “This temperature is within tolerance, which is not the same as reassuring.”
- “The risk assessment is thorough; the risk has declined to participate.”
- “Your hygiene plan has diagrams, arrows, and one deeply concerning prophecy.”

The Inspector’s voice is readable as procedural bewilderment, and “the risk
has declined to participate” is the best compact line in the set. As with the
Taxman, the next review should judge exchange timing rather than isolated
lines.

## Plagiarism and sensitivity gate

`scripts/check-mcgrots-dialogue.mjs` is the named G5a control. It combines all
514 lines in `assets/comic-lines.json` and all 961 `kind: "comic"` phrases in
`assets/readings.json`, normalizes case, apostrophes, punctuation, and spacing,
then indexes every seven-word window. A generated line is rejected when any
seven-word window matches. This is “more than six words” mechanically: an
eight-word match also contains a matching seven-word window.

The checker also has a conservative lexical backstop for the hard sensitivity
rules: sectarian terms are absent; addiction pathology terms are absent; and
the small list of explicit poverty-punching terms is absent. This is not a
substitute for reading. It cannot recognize a close paraphrase, a joke that
punches down without those words, or harm hidden in context. It also cannot
catch a copied fragment shorter than seven normalized words.

The generated output was checked with:

```text
node scripts/check-mcgrots-dialogue.mjs --file generated/mcgrots-dialogue.json
Corpus: 1475 source lines, 6531 normalized words, 541 unique seven-word windows
Control: every generated line is checked against normalized seven-word windows (more than six words)
Checked: 48 candidate lines
PASS: 0 plagiarism violations; 0 lexical sensitivity violations
```

The output has not been quoted from the comics. Comic text remains sacred and
verbatim wherever it is used elsewhere in the project.

## Verification record and outstanding work

- The generator wrote 48 lines from seed `1511506142`, and verified the
  repository still contained 205 director briefs.
- Resumability was exercised by generating 18 lines at `--count 3`, then
  extending the same output to 48 lines at `--count 8 --resume`; the resumed
  file also passed the checker.
- No audio was rendered or listened to. Voice selection remains Dan’s call.
- No game module was changed.
- The G5a roadmap and validation entries are intentionally outstanding: the
  brief reserves `docs/MCGROTS-ROADMAP.md` and `docs/MCGROTS-VALIDATION.md` for
  the orchestrator after the shared tree is free. This document carries the
  unit’s implementation, numbers, limitations, and rejected-quality findings
  until then.
