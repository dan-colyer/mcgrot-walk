# The McGrot style bible

What generated content has to match, so that a 3D prop, a character texture or
a face made months apart still sits on the same page as the comics.

**Status.** The palette section below is **decided and measured**. The grade
section is **not yet written** — `b` is the standing candidate after two
judging rounds but is not a keeper, `uStyle` still ships at 0, and nothing is
hardened into shader constants. See `docs/ROADMAP.md` § E8.

---

## 1. The palette

Measured from the comics themselves, not picked by eye:
`node scripts/comic-palette.mjs`. Twelve clusters over 60 comics (786,816
pixels), k-means in CIELAB, deterministic seeding — the numbers reproduce.

| Swatch | Hex | Share | Role |
|---|---|---|---|
| cream | `#e4d5a1` | 12.7% | the paper. Every light area lands here, not at white. |
| deep olive | `#2e391f` | 11.9% | the darkest greens — foliage, dark cloth, shadowed stone |
| dark brown | `#504726` | 10.1% | the workhorse shadow |
| khaki gold | `#a08f51` | 9.1% | mid stone, worn brick, weathered timber |
| olive grey | `#737157` | 9.0% | the low-chroma mid — most of the built world |
| moss | `#555d29` | 8.9% | the greener mid |
| warm stone | `#aca07c` | 8.7% | lit masonry |
| bronze | `#7b682e` | 8.5% | metal, rust-adjacent timber |
| mustard | `#d3b05a` | 8.0% | the brightest saturated note — signage, lamplight |
| near-black | `#212020` | 6.6% | ink. Note it is a *neutral*, not a warm black. |
| near-white | `#d6d7da` | 3.4% | the only cool colour with any share — highlights, paper edge |
| rust | `#8b4e28` | 3.1% | the accent. Used sparingly and it is the only strong hue. |

### The three rules that actually constrain a generator

Measured across 42 comics sampled through the corpus (per-image mean CIELAB):

1. **Warm, always.** `b*` mean **+22.4** (sd 9.8), and **41 of 42 comics are
   net-warm**. This is the single most consistent property of the corpus. A
   generated asset that is neutral or cool will not sit on the page.
2. **Neutral on the green/red axis.** `a*` mean **−0.8** (sd 5.4). The palette
   is a *warmth* axis, not a spread of hue families — everything is a version
   of cream-to-brown, and the greens are dark and desaturated rather than
   green. Ask a generator for "olive and ochre", never for "colourful".
3. **Cool is an accent, not a colour.** Pixels with `b* < −8` are **1.7% of
   the corpus on average**. Blues and teals exist — a night sky, a shopfront
   — but at a few percent. This is why a pooled palette of the whole corpus
   contains no blue at all, and that absence is a real property rather than a
   measurement artefact: it survived switching the clustering from weighted
   RGB to CIELAB, which was done specifically because the first weighting
   would have hidden a navy.

### What the palette does NOT dictate: lightness

The comics sit at `L*` **50.5** (sd 10.6) — a light-to-mid medium. The game's
rendered frames sit far darker: measured median display luminance **0.139 at
noon overcast, 0.055 at night rain**.

**That gap is deliberate and must not be closed.** Two judging rounds rejected
every grade candidate that lifted the game toward the comics' lightness; the
one that survived twice is the one that barely lifts at all. The street is a
dark place and the print is a texture on it, not a filter over it.

So: match the comics' **hue and chroma** discipline, and ignore their
lightness. A generated asset should be authored warm, low-chroma and
cream-to-brown, and then be allowed to sit in the dark.

### Author cream-forward (Dan, 2026-08-04: "keep it all as creamy as possible")

A standing bias for every generated asset: **prefer the cream / warm-stone /
khaki end of the palette over the deep-olive / near-black end.** When in doubt,
go creamier.

This is not only taste — it is what the renderer requires, for two compounding
reasons already recorded in `CLAUDE.md`:

1. **The scene supplies the darkness.** Frames sit at median display luminance
   0.139 at noon and 0.055 at night. An asset authored at the palette's dark
   end arrives in a dark scene and reads as black mush; the tonality it was
   authored with is simply not visible. The dark end of the palette describes
   where things *land*, not where they should be *painted*.
2. **ACES lifts, and canvas bakes double-convert.** Procedural tones must be
   picked far darker than looks right on paper, and an SRGB-tagged canvas
   converts again — the failure mode that has produced silhouettes before.
   Cream-forward source art has the headroom to survive both; a dark source
   does not have anywhere to go.

The check is the same either way: put it in the scene and measure it, not in a
viewer.

### Using this on generated assets

- Put the hex list in the prompt, not the adjectives. "Aged cream `#e4d5a1`,
  olive `#555d29`, warm dark brown `#504726`" beats "vintage comic palette".
- Check the result rather than trusting it:
  `node scripts/comic-palette.mjs --only=<file> --swatch=<out.png>` reports the
  same numbers for one image. A generated asset whose `b*` is negative, or
  whose saturation is far above the corpus mean of **0.451**, is off-page.
- ACES lifts everything (see `CLAUDE.md`): a texture picked to look right on
  paper will render too bright and too saturated in-scene. Author darker than
  looks right, and check in-scene rather than in a viewer.

---

## 2. The grade

Not yet written. Pending a keeper — see `docs/ROADMAP.md` § E8 and
`docs/VALIDATION.md` § "The style prototype loop".
