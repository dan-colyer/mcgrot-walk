# Comic feature extraction — set C

Source: `docs/briefs/g7d-audit-the-remaining-comics.md`. Nominal target: the 53
of `docs/g7-reading-shortlist.md`'s 115 clean candidates that fall outside
`docs/comic-features-set-a.md`'s 78-comic audit. **The actual count, derived
below, is 1 — not 53.** `docs/comic-features-set-b.md` landed between the
brief being written and this unit starting and already covers 52 of those 53;
only `13dc6c45` was genuinely unopened.

## Deriving the list

The brief's arithmetic (115 − 62 already audited by set-a = 53) is right for
what it measures, but set-a is not the only audit that has since happened.
`docs/comic-features-set-b.md` — a second, independent 78-comic batch — has
also landed, and its ID list happens to overlap the clean-115 pool heavily.

Reproduced fresh, not trusted from either file's own prose:

```bash
node -e "
const c = require('./assets/catalog.json').comics;
const fs = require('fs');
const withNpc = c.filter(x => x.npc);
const withAudio = withNpc.filter(x => x.audio && fs.existsSync('assets/'+x.audio));
const broken = ['088546cf','23c90e9b','0d4feb3c','0e21d212','166a4573','090b09a1','10bd3bab','156f9d41','15ff40d0','1af1be83','1f6380d3','12f55a90','13f572c6','2db7525f'];
const dup = ['231b4a7b','51834c74','0be124f7','5acf1728','315d8c0e','22871dff'];
const excluded = new Set([...broken, ...dup]);
const clean = withAudio.filter(x => !excluded.has(x.id));
console.log(withNpc.length, withAudio.length, clean.length);
"
# -> 156 135 115   (matches g7-reading-shortlist.md's own funnel table exactly)

grep -oE '^\| [A-Za-z0-9]+ \|' docs/comic-features-set-a.md | tr -d '| ' | sort -u > /tmp/seta_ids.txt
grep -oE '^\| [A-Za-z0-9]+ \|' docs/comic-features-set-b.md | tr -d '| ' | sort -u > /tmp/setb_ids.txt
comm -12 <(sort /tmp/clean115.txt) /tmp/seta_ids.txt | wc -l   # -> 62 (matches shortlist's "62 already audited")
comm -12 <(sort /tmp/clean115.txt) /tmp/setb_ids.txt | wc -l   # -> 52
comm -23 <(sort /tmp/clean115.txt) <(cat /tmp/seta_ids.txt /tmp/setb_ids.txt | sort -u)   # -> 13dc6c45, and nothing else
```

115 clean candidates. 62 already covered by set-a, 52 already covered by
set-b, one overlap-free (`22871dff` sits in the *excluded* set, not this
count — see the shortlist's own duplicate-performance table). Union: 114 of
115. The remainder is **one comic**: `13dc6c45`.

This is itself a result worth flagging: G6b's two batches were drawn (per
their own headers) from separate, independently-generated ID lists
(`g6b-set-a.txt`, `g6b-set-b.txt`), yet together they accidentally cover 114
of the 115-strong reading-candidate pool. Whatever generated those two
156-comic samples was not drawing uniformly across the 418 — it was heavily
weighted toward comics that also carry transcribed audio, which is exactly
the `npc`-block subset the reading shortlist draws from. Worth knowing before
anyone assumes a *third* unaudited-remainder batch would find much: the easy
part of this 418-comic corpus has now been opened almost to exhaustion.

## Part 1 — per-comic record

| id | McGrot | Pomplé | Observed features |
|---|---|---|---|
| 13dc6c45 | no (referenced, not depicted as protagonist) | no | "Grot Loompas For Change" — six-panel strip, genuine multi-panel comic (not a broken/screenshot asset). A trio of identical protest-figures in orange-red berets and dark green plaid/checked shirts (Oompa-Loompa-parody staging: three near-identical bodies, uniform poses) carry a placard reading "MCGROT IS WRONG", chant "DOWN WITH THE MINCER-IN-CHIEF!" from a soapbox/podium, gather a small crowd of matching figures, then one casts a ballot ("VOTE"). The costume elements (beret, plaid shirt) are McGrot's standard palette, reused here for a set of protestors campaigning *against* a "McGrot" who is talked about but never drawn on-panel — the sign and chant are the only reference to him. No dog present in any panel. Whole-frame palette (`node scripts/comic-palette.mjs --only=assets/comics/13dc6c45.jpg`): dominated by dark olive-green (`#2c4d19` 16.1%, `#224317` 9.3%) and pale mustard/parchment (`#e8ca6f` 14.6%, `#caa33d` 12.3%), with the beret's rust-orange as a minor accent (`#a65a18` 3.5%) — consistent with set-a's found palette (olive/khaki + cream, not canon's soot-black/dark-red), see set-a's synthesis. |

## Synthesis

**n = 1, so no distribution claims are possible from this set alone.** The
value of this unit is the derivation above, not a feature census — with one
comic there is nothing to say about "what's stable across these 53" or
"what varies," because there aren't 53.

**What this one comic does add:** a strip in the corpus where the beret+plaid
costume is worn by figures that are explicitly *not* McGrot — used instead to
draw a crowd of look-alike protestors campaigning against him. That's a data
point for `docs/CANON.md`'s claim that the beret is McGrot's defining,
uniquely-identifying feature (set-a: "present in 68 of 71 non-anomalous
appearances... the one feature that survives every costume reskin"): it's
consistent with the beret being iconic enough to signal "McGrot's world" even
when reused on non-McGrot figures, but it also means beret+plaid alone is not
sufficient to identify McGrot *as a specific character* in a panel — this
comic proves the art style can put it on generic crowd figures. Not a
contradiction of set-a's finding, a boundary case worth having on record next
to it.

**Not obviously better than anything on the G7a shortlist** — no McGrot, no
Pomplé, and the gag (a protest movement against McGrot) needs the reader to
already know who McGrot is, which cuts against a ten-minute first encounter.
Noted per the brief; the shortlist stands.

**On the brief's own premise:** the "53 unaudited" gap it identified was real
when set-a was the only completed audit. It closed itself when set-b landed
before this unit started — worth the orchestrator knowing for future
gap-sizing: check `comic-features-set-*.md`'s current count, not a number
written into a brief, before sizing the next audit unit.
