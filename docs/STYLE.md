# The McGrot style bible

What generated content has to match, so that a 3D prop, a character texture or
a face made months apart still sits on the same page as the comics.

**Status.** Both sections are **decided and measured**. The palette is
measured from the comics; the grade is preset `b` after two judging rounds,
hardened into shader constants at E8 close. See `docs/ROADMAP.md` § E8 for how
each was chosen and what was rejected.

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

### Calibrated against the newest comic — and it did not move

"The Sandwich Incident" (2026-08-04, `assets/comics/WhatsApp Image 2026-08-04
at 06.51.18.jpeg`) was measured against the July corpus to check for style
drift. **There is none.** It sits inside the corpus distribution on every axis:

| | Newest comic | Corpus (42) | |
|---|---|---|---|
| `L*` | 41.2 | 50.5 (sd 10.6) | darker, under 1 sd |
| `a*` | +0.6 | −0.8 (sd 5.4) | both neutral |
| `b*` | +18.6 | +22.4 (sd 9.8) | warm, within 1 sd |
| cool pixels | **0.7%** | 1.7% | *less* cool, not more |

The last row is the one worth keeping. By eye that comic reads as having a
strong cool presence — navy night skies in three panels, a slate theatre
interior — and the eyeball conclusion was that the style had drifted cooler.
It has not: the navies are **visually salient but tiny in area**, 0.7% of
pixels, *below* the corpus average. Chasing that apparent drift would have
been chasing something that does not exist.

Practical effect: the corpus palette above stands as the reference. The only
adjustment is that the newest comic's paper is a slightly deeper cream —
`#e0c58c` / `#d6b575` rather than `#e4d5a1` — so anchor generated paper tones
there. Its whole-image saturation is 0.400 against the corpus 0.451, so if
anything, err **more muted**.

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

**Decided.** `b` — "fine-litho" — after two judging rounds (Dan, 2026-08-03
and 2026-08-04), hardened into shader constants at E8 close. The authority is
`STYLE` in `src/post.js`; the numbers appear once, and the GLSL is generated
from that object so the two cannot drift. This section is the prose form and
is the thing to read before changing one of them.

### The one rule above the other five

**The print is a texture on this world, not a filter over it.** Both judging
rounds rejected every candidate that made the printing more visible — coarser
screen, heavier halftone, warmer stock, more press lift — and rejected them
for the same reason each time: they competed with the street the player is
trying to look at. `b` is the lightest touch in either set of four and it won
twice. Any future change has to answer this, and "it reads as more printed" is
an argument *against* it.

### 1. Paper is the comics' cream, and it is a remap, not a tint

Nothing on a printed page is pure black or pure white, so the whole range is
remapped into an ink–paper pair: ink `(0.06, 0.05, 0.05)`, paper
`(0.98, 0.96, 0.92)`, at 35% (`stock`). Per channel, which keeps hue instead of
collapsing to a duotone — a duotone was round 1's `d`, and it ate the photo
façades, which is exactly what it was included to make visible.

Paper here is the *display-space* neighbour of § 1's cream `#e4d5a1`, not the
cream itself. § 1's cream is what an authored asset's albedo should be; this is
what the finished frame is printed onto after ACES has already lifted it.
Setting the paper to literal cream double-counts the warmth and reads as a
filter, which was round 2's `b1`.

### 2. One screen: 45 degrees, 2.6px cells, analytic dots

A single dot screen, rotated 45°, cell 2.6 screen pixels, mixed 35% over the
source (`halftone`). No second angle, no per-channel rosette: this is a
one-plate press, and the misregistration below is what carries the idea of
plates rather than an actual four-colour screen.

The dot is **analytic** (`fract`/`length`/`smoothstep` over rotated screen
coords), not a Bayer or blue-noise texture, and its antialias band is derived
from the cell size rather than read from `fwidth`. Both are deliberate: an
analytic dot has the driver stability a texture was wanted for *and* admits a
soft edge, and a hardware derivative is exactly the kind of driver-dependent
quantity this project's goldens can least afford. **No hashes, no derivatives,
no texture** — the same discipline as the grain.

2.6px is a floor as much as a value. Round 2's `b2` took it to 3.6 and was
rejected as visually distracting.

### 3. The plate is re-exposed before it is screened, and the exposure follows the weather

A printed page is a *light* object — mostly paper, with ink where the picture
is. This scene is a dark one: median display luminance **0.139 at noon
overcast, 0.055 at night rain**. Screening the scene's own tonality gives a dot
that nearly fills its cell everywhere and a highlight gate that never fires, so
the tone is re-exposed for the plate first (`tone = luminance ^ press`), which
is what a repro camera did.

**Press is not a constant.** It is interpolated between `pressNight` 0.95 and
`pressDay` 0.72 by `renderer.toneMappingExposure` — the number `atmosphere.js`
already sets every frame from the per-hour, per-weather palette stops. Read
live from the renderer inside `post.render()`, not pushed from atmosphere,
because atmosphere is not the only thing that drives exposure: the ending
sequence takes it over for about ten seconds, and a pushed value would print
those ten seconds at the wrong tone.

The direction is the counter-intuitive one: **a darker moment gets a *higher*
press, meaning less lift.** A night panel in a comic is mostly ink. Round 1
measured what happens when you argue otherwise — `a`, `c` and `d` all turned
22:00 rain into flat milky grey and the night stopped being night.

Measured mapping: 13:00 overcast exposure 1.378 → press 0.740; 08:00 clear
1.150 → 0.794; 03:00 haar 0.592 → 0.928; 22:00 rain 0.520 → 0.945.

### 4. Dots live in the shadows and mids; highlights stay clean paper

The halftone is gated off above luminance 0.60 (`highCut`), with an 0.18-wide
ramp below it. This gating is the whole difference between reading as
*printing* and reading as an *effect*: ungated, every highlight gets dots and
the frame becomes a filter.

**What never gets halftoned**, therefore: paper. Anything the press exposure
puts above the gate — sky, lit render, lamp glow, a bright fascia — is clean
stock. That is a property of tone, not of object type, and deliberately so:
there is no depth or normal buffer in this pipeline (E2d's design) and nothing
here may acquire one.

### 5. Palette pull, never posterise

Saturation compresses to 0.85 and the tonal ends are pushed apart in
temperature — shadows `(0.97, 0.99, 1.03)`, highlights `(1.04, 1.01, 0.96)`,
lerped by tone. Hard quantisation stays off the frame entirely: it turns brick
and mullions to mush, and the photographed façades are the thing this project
spent the most effort getting real.

Note that the pull runs *with* § 1's constraints rather than restating them:
the frame is already warm because the world is, and the split-tone is ±3–4%,
not a colour grade.

### And the two that are not colour

- **Misregistration** — plates drift apart toward the sheet edge and are in
  register at the centre: 0.7px at the frame edge, radially, applied as the
  *difference* between a shifted and an unshifted tap so the grade underneath
  survives rather than being resampled away. One tap per channel,
  unconditionally stable.
- **Press artefacts** — sparse specks at 0.05 depth on a slow reseed (6 Hz,
  3px blocks). Low-rate is the point: resampled every frame it reads as video
  noise rather than as a press. Same reasoning as the existing 24fps grain.

### Line weight, and why there is none

No inked outlines anywhere. The roadmap's optional adjunct — inverted-hull
outlines on props and characters — was not built, and the boundary markers
around it stand: **no true contour or silhouette outlines, no
surface-orientation hatching, no depth-graded line weight**, because there is
no depth or normal buffer to derive them from and adding one would re-author
the fog (`src/post.js` explains at length). Screen-space colour-Sobel ink over
photographed brick turns mullions to mush; it is not an accent worth having.

The comic read that outlines would have bought is carried by furniture
instead — the caption boxes and the cover-styled title card (E8 close), which
is where the survey said most of it comes from anyway.

### Changing any of this

Edit `STYLE` in `src/post.js`, run `npm run style` to see it on the judging set
(the sheet's columns are now grade-off and grade-on), and recapture every
golden. There is no live-tuning surface any more and that is the point: two
rounds decided this, and the cost of re-opening it should be the cost of
recapturing the goldens it moves.
