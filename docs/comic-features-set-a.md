# Comic feature extraction — set A (78 comics)

Source: `docs/briefs/g6b-comic-feature-extraction.md`. IDs from
`docs/briefs/g6b-set-a.txt`. Images at `assets/comics/<id>.jpg`, read directly.

Colour values, where given, come from `node scripts/comic-palette.mjs
--only=assets/comics/<id>.jpg --swatch=<out>` — a whole-frame k-means sample,
not a garment-only crop, so a hex value is the panel's palette, not an isolated
swab of one costume piece. It is read off against what the panel shows and
named only when a swatch plausibly matches a described area. Source is a JPEG
of a drawing viewed on a screen, not a colour-managed original — treat hex
values as approximate register, not print-spec.

## Part 1 — per-comic record

| id | McGrot | Pomplé | Observed features |
|---|---|---|---|
| 0021ea9d | yes (×2, doppelgangers) | yes (puppy) | "The Man in the Second Beret". Orange-red beret, dark bottle-green checked/plaid shirt, dark green bib dungarees, no visible apron. Muted outdoor field setting (bare trees, grey sky) — the two McGrots are visually identical. Puppy is light tan/cream, floppy ears, blue collar in one panel. Ladle-like spoon and a wrapped brown-paper parcel as props. |
| 00f88d65 | yes | yes | "Bunion Broth". Same beret/plaid/dungarees. Stirs a cauldron containing a human foot (bunion, verbatim gross-out). Pomplé: small cream dog, watches from beside the counter, tan/cream, floppy ears. |
| 0121c47c | yes | yes (puppy) | "The Extra Side". Beret, plaid shirt, dark teal-green dungarees, black work boots. Van "THE GULLET" — olive-green body, rust/patina patches, wood crates stacked round it, dockside/harbour background (crane, ship). Puppy: cream, dark-tipped ears, sits by the van in every panel. |
| 01b27ac5 | yes | yes (cameo, hooded) | "The Leith Walk Drop" — zipline gag. Beret, plaid shirt, dungarees, dark gloves. Street background: tenement fronts, van's-eye view of Leith Walk (shop signage "ELM NOW", "FO SUFFRY"). Pomplé appears in panel 1 wearing a small green hood/mask (one-off — no hood in any other set-a comic so far). |
| 021b6bd3 | yes | yes | "The Week with Nae Delivery". Desaturated, near-monochrome palette (night/underground scene). Beret, plaid, dungarees unchanged. Ghostly pale-faced "surface folk" figures (featureless white/grey ovoid heads) share a table with him in the last two panels — a recurring background-crowd type, not named. Pomplé: cream, sits beside him throughout. |
| 022bcde2 | yes | yes | Kart-racing full-bleed crossover panel (no borders/speech gag panels) — **different art style** from the other set-a comics: flatter, brighter, "arcade game HUD" framing (lap counter, mushroom icon). McGrot: beret, dark green jacket, driving a kart labelled MCGROT. Pomplé: cream/tan dog driving a smaller kart labelled "POMPLE OF LEITH". Also features two "KEITH" karts (adult + a caged smaller one) — likely Keith with One Eye, not in `docs/CANON.md`'s single-eye form here. |
| 03347596 | yes | yes | "The Dandy Crossover" with Beano/Dandy-style guest characters (a Desperate-Dan-like figure, a striped-jumper girl, a Korky-the-Cat-like black cat). **Different, flatter art style** again. McGrot: beret, dark plaid shirt, stirs a cauldron with dark oven mitts (dungarees not visible below frame). Pomplé: cream/tan, droopy/unimpressed expression, wears a "CROSSIWESS COMPLIANCE UNIT" tabard (one-off costume). |
| 03985281 | yes | yes (small, background) | Fourth-wall-breaking strip ("browser history" gag), flat colour, solid pale-blue background, no van/street. Beret, plaid shirt. Holds a meat parcel drawn with a face (eyes, dripping mouth) — recurring "sentient food" gag prop. Pomplé: small, cream, appears only in the final panel beside a fire/pot. |
| 0403c106 | yes | yes | "The Flavour of Pralognan" — Alpine hiking trip. Cap here reads as a dark green/olive tweed-plaid flat cap, **not** the usual orange-red beret (variant, one-off in this batch). Green plaid shirt, hiking backpack tagged "ALPINE FLAVOUR ENFORCEMENT". Pomplé: cream dog with a green neckerchief, hikes alongside. |
| 05f9656f | yes | yes (cameo) | "First Contact" — rainy night, meets a bald bespectacled man in a suit (political figure, "Holyrood" name-check). Whole strip rendered in a warm brown/sepia monochrome (no green in this palette at all — an outlier). Beret, plaid shirt still legible under the sepia tint. Pomplé: tan/gold dog, only in final panel. |
| 06122553 | yes | yes | "McGrot Buys a Calmac Car" — buys an orange car styled on Caledonian MacBrayne ferry branding (red/black roundel "C" logo, "GALMAC"/"aMac"/"Cal·Mar" signage gags). Beret, plaid shirt/dungarees unchanged. Pomplé: tan/cream, rides in the passenger seat and sits beside the car. |
| 06e581d2 | yes | yes (cameo) | "The Pothole Parley" — negotiates with council/hi-vis figures over a collapsed pothole. Beret, plaid shirt. Muted daylight urban palette (grey pavement, brick). Pomplé: small cream dog, appears only in the last panel beside the table. |
| 0738152e | yes | yes (cameo) | "The Bayeux Tastie-Pie" — **Bayeux Tapestry pastiche, wholly different art style** (embroidered/tapestry rendering, ornate decorative border, pseudo-Latin verbatim title text). McGrot in a red/green tartan tunic-and-trousers with a matching flat cap (not the usual beret+plaid-shirt+dungarees combo — a full period reskin). Serves a basket containing a tentacled sea creature to a king and court. Pomplé: small tan/cream dog, bottom-left corner only. |
| 081eb3ed | yes | yes | "The Ant Deception" — "flying ant day" street-food gag, serves ants as "sky protein" to an unsuspecting customer. Beret, plaid shirt, dark bib/apron over it while cooking. Pomplé: tan dog, present throughout, next to a jar labelled "NEXT YEARS BATCH". |
| 08469d72 | yes | yes | "Bus Egg" — commuter-bus scene, eating from a lunchbox on the first day back after Christmas. Beret, plaid shirt, dungarees. Pomplé: tan/cream puppy, seated beside him on the bus throughout, walks with him off the bus in the final panel ("THE GULLET" van visible through the window). |
| 088546cf | — not a comic — | — not a comic — | **Broken asset, not a McGrot strip.** A screenshot of a ChatGPT-style mobile chat UI: prompt text "AI bubble about to burst image McGrot pomplè and plaid krankura special poster. Generate no quibbles. Engage. Do not ask me anything" over a blank grey "Getting started" placeholder. No McGrot/Pomplé artwork present — looks like a leftover generation-prompt screenshot that ended up in the comics corpus. Flagged, not counted as an appearance either way. |
| 08d846d0 | yes | yes | "The Laird's Parlour Parade" — period/manor setting, horse-drawn "THE GULLET — MOBILE DIPLOMACY UNIT" cart, confronts a "Laird" over unpaid dues, stews with hooves. Beret, plaid shirt/dungarees unchanged. Pomplé: tan/cream dog, present beside the horse and cart in most panels. |
| 090b09a1 | yes | no | **Meme/reaction-image format** — real wildfire photo (smoke, hillside) with a flat vinyl-toy-style full-body McGrot figure composited on top, "MCGROT" printed on the shirt. No panels, no dialogue. Clearest **full standing silhouette** in the set: red beret, dark green plaid jumper/shirt, and — new detail — plain **dark/black trousers**, not the bib dungarees seen elsewhere. No Pomplé. |
| 092d29b1 | yes | yes | "The No Phase / The Why Phase" — van "THE GULLET" and a crowd of onlookers. Beret, plaid shirt, dungarees. Pomplé: tan/cream dog, present throughout. |
| 09e40236 | yes | yes (cameo) | "Leith in Strings" — puppeteer gag, dark muted green palette, McGrot controlled on marionette strings by a shadowy figure. Beret, plaid, dungarees, stirs a pot labelled "OFFAL MIST ROLL". Pomplé: small tan dog, first panel only. |
| 0a4659f8 | yes | yes | "Milk of the Loch" — rowing boat, Nessie cameo. **McGrot has a full bushy ginger-brown beard here** (one-off/variant — clean-shaven or stubble-only in every other set-a comic so far), wears a red/dark tartan shirt with a knotted neckerchief plus the usual red beret. Pomplé: small cream dog, sits in the boat with him. |
| 0b977fb5 | yes | yes (cameo) | "The Flute of Flavours" — plays pan-pipes assembled from parts ("Brine Custard", "Gristle Plum", "Offal Whip" notes). Beret, plaid shirt, dungarees. Pomplé: small white/cream dog, first two panels only ("ACK!"). |
| 0c60b3de | yes | yes (cameo) | "The Birth of a Battle Jacket" — denim-jacket-customising parody, patches read "BONE SHARD BURGER!", "FREE POMPLÉ", "FERAL BUT FAIR". Beret, plaid shirt/dungarees. Pomplé: cream dog, panel 2 and final panel. |
| 0be124f7 | yes | yes | "The Accountability Chute" — dark bureaucratic-maze/underground chase, muted brown-green palette ("DODGE RESPONSIBILITY", "PASS THE BUCK" signage). Beret, plaid, dungarees. Pomplé: tan puppy, present in most panels, whines. |
| 0c83063f | yes | yes | "Flea Offers" — Pomplé-focused grooming strip. **Pomplé drawn shaggier and lighter here**: off-white/cream fur with visible brown patches and a fluffier, unkempt coat ("walking flea village"), collar visible — a hairier variant than the smooth tan dog in most other appearances. McGrot: beret, plaid, dungarees, appears only in the last two panels. |
| 0d19a6e5 | yes | yes | "Broken Broth" — injures his thumb, builds a splint/prosthetic tool to keep stirring. Beret, plaid, dungarees, "THE GULLET" van signage. Pomplé: tan dog, present throughout, reacts to the injury. |
| 0d4feb3c | no | no | **Not a McGrot asset.** Real photo/render: a Trump-likeness head on a wheeled chassis wearing a foil "golden dome" crown topped with a cross. No McGrot, Pomplé, or comic-strip content at all. |
| 0da7cd5d | yes | yes | "Mission: Calmacbrayne" — space parody, McGrot in a spacesuit (beret visible through/over the helmet) piloting a rocket branded "Culiedanian MACBRANE", a burning "HOLYROOD" building on a planet below. Pomplé: also suited, tan dog, floats/walks beside him. |
| 0ddabb98 | yes | yes (cameo) | "The Kyiv Conundrum" — political-satire strip (Trump/Putin, "Chicken Kyiv" news clipping), cooks a dockside "Kyiv" dish. Beret, plaid, dungarees. Pomplé: tan dog, two panels. |
| 0e21d212 | no | no | **Not a McGrot asset.** Real-photo composite: a Star-Trek-uniformed actor and a Trump-likeness flank a fabric-textured creature/puppet figure. No McGrot, Pomplé, or drawn content. |
| 10bd3bab | yes (meme stickers) | no | **Meme/sticker composite**, same format as 090b09a1 — a real photo (Edinburgh Fringe street scene, a costumed performer, a Trump-likeness cameo) with several small flat vinyl-toy McGrot stickers pasted on top in jumping poses. Confirms the sticker format: red beret, dark green shirt with "McGrot" printed on it, dark trousers, stub arms/legs. No Pomplé. |
| 11529e6b | yes | yes | "McGrot vs. The Mighty Boosh" — crossover with recognisable Mighty Boosh characters (Vince Noir/Howard Moon likenesses, the psychedelic "nipple antennae" creature gag). Beret, plaid shirt, dark green dungarees unchanged. Pomplé: tan/cream dog, present in most panels. |
| 117ba457 | yes | yes (cameo) | "Leith Links Grot Sauna — Treatments & Tonics Menu" — spa-menu parody poster, four illustrated vignettes (steam detox, exfoliation, "Tattie Steep Immersion", "Sewer Descent Ritual"). Beret, plaid, dungarees in every vignette. Pomplé: cream/tan dog, appears in the "Tattie Steep Immersion" and "Sewer Descent Ritual" vignettes only. |
| 11822fc8 | yes | yes | "The AI Slop Terror" — AI-training-data satire, ghostly skull/binary imagery over the cauldron. Beret, plaid, dungarees. Pomplé: tan/golden dog, noticeably bigger and more retriever-like here, present throughout. |
| 11d1a01e | yes | yes | "Horns of the Links" — ibex/goats-in-the-park parody, "PHASE ONE: ACCLIMATISATIO" signage. Pomplé is name-tagged on screen ("POMPLE" on a sign), tan dog, present in the outdoor playground panels alongside the goats. Beret, plaid shirt on McGrot. |
| 124327ee | yes | yes | "Braveheart of Leith (Dream Sequence Edition)" — Braveheart pastiche: blue woad face paint, kilt/tartan warrior dress, sword and torch — but **keeps the red beret on even in full warrior costume**. Returns to the usual green plaid shirt in the framing panels. Pomplé: tan dog, present in both the dream-sequence and real-world panels. |
| 12efa91a | yes | yes | "The Ghost of 2025 Flavours" — A Christmas Carol pastiche, a spectral glowing "2025" ghost visits. Beret, plaid shirt, dark bib/apron while cooking. Pomplé: tan/cream dog, present in most panels. |
| 12f55a90 | no (text only) | no | "McGrot Top Ten Dishes" — text-only menu poster (olive-green background, no character artwork at all). Title logo text only; no drawn appearance by either character. |
| 13f572c6 | yes (anomalous) | yes (anomalous, ×2) | **"Ancient-aliens"-style meme chart** ("Greys / Nordics / McGrot / Mantid / Anunnaki / Pomplē / Kitchen / Pomplē"), realistic-portrait art style completely unlike every other set-a comic. "McGrot" here is a **bearded, ruddy, no-beret, no-plaid human portrait** — consistent with the beard seen in 0a4659f8 but otherwise off-model. "Pomplé" is labelled on **two different green/grey goblin-or-troll humanoid portraits**, not a dog at all in either. Recorded as a real asset in the corpus but flagged as **not representative** of the character designs seen everywhere else — likely a joke image reusing the names rather than a canon appearance. |
| 14b3e69a | yes | yes | "Hat Compliance Pending" — McGrot is stiff/hurting ("that sounded... internal"), sits down to recover. Beret, plaid, dungarees. Pomplé: tan/cream dog with a dark-green neckerchief, worried expression, present throughout. |
| 14ef4956 | yes | ambiguous | "Assimilation o' the Gullet" — Star Trek Borg pastiche, a glowing green "assimilating" rival van ("resistance is pointless", "meat is inevitable"). Beret, plaid, dungarees. Pomplé: a "woof" sound-effect bubble in panel 1 implies he's present, but he is not clearly drawn in that panel; a small pale shape at the edge of panel 3 may be him — the least certain Pomplé sighting so far. |
| 156f9d41 | yes (as masks) | no | **Real-photo composite** — a night-time crowd protest, every person wearing a photoreal McGrot **face mask** (moulded beret included), placards read "FREE McGROT" / "PRO McGrot" plus two small inset comic panels ("Guilt is a natural preservative"). The mask is a useful clean head reference: round, pale/cream skin (lighter and more uniform than canon's "weathered pale... ruddy nose"), thick black eyebrows, small closed mouth, no visible hair (beret moulded on, no hair edge showing), no beard. No Pomplé. |
| 15ff40d0 | yes | no | **Real photo** of a liveried delivery van with a large McGrot decal on the rear door: standard design — red beret, green plaid shirt, thumbs-up gesture, speech-bubble logo "McGrot", sign "YIELD YE PILE". A small round McGrot face sticker also visible bottom-right of the photo. Corroborates the standard comic design against a non-comic source. No Pomplé. |
| 1644c350 | yes | ambiguous | "Threads Left On" — post-apocalyptic/rationing dystopia (muted sepia, "remain indoors" TV screen, "SOUP" stall, "ONE LADLE PER PERSON NO QUESTIONS" sign). Beret, plaid, dungarees, serving soup from a stall rather than the usual van. A small white/cream puppy sits beside a **customer**, not beside McGrot, in the queue panel — possibly Pomplé, possibly just a customer's dog; unlike every other sighting he is not positioned next to McGrot here. |
| 166a4573 | no | no | **Not a McGrot asset.** Real photo: a Keir-Starmer likeness, oil-covered, working an oil-well valve. No McGrot, Pomplé, or comic content. |
| 19f35bc7 | yes | yes | "Scree Ski" — skiing down scree, warm sepia/orange illustrated palette (different rendering from the flat-colour main style). **McGrot has a thick moustache here** (third facial-hair variant alongside 0a4659f8's full beard) — beret retained, dark green ski outfit. Pomplé: tan dog, runs alongside throughout. |
| 1a29e4f5 | yes | yes | "The Office That Paid Him Nothing" — office-temp-work satire. Beret, plaid, dungarees. Pomplé: tan dog wearing a "TEMP" name tag, present throughout. |
| 1abdb3c4 | yes | ambiguous (×2 dogs) | Untitled confession-booth strip, muted browns, church setting. Beret, plaid, holds a mug/pot. Final panel shows **two** dogs — a shaggy brown one and a smaller white one wearing rosary beads — neither clearly tagged as Pomplé; could be Pomplé plus a second, unnamed dog, or a customer's dog. Recorded as uncertain rather than assumed. |
| 1af1be83 | yes | no | **Real photo** of a newsstand rack: a "McGrot: Walking the Water of Leith" comic-magazine cover next to Beano and other titles. Cover art: green jumper, walking pose, standard round-head cartoon style — a clean full-body walking reference. No Pomplé on this cover. |
| 1c835438 | yes | yes | "McGrot's Peeled Croissants". Beret, plaid, dungarees. Pomplé: cream/white dog, small round collar tag (text not legible), first panel only. Final panel shows the van signed "MGROT" — a misspelling in the comic itself, kept verbatim. |
| 1c9b7f2a | yes | yes + one-off cameo | "Return o' McGrot" — exile/return story, muted browns, rival-vendor signage ("MIKE ENGLISH", "DANIEL SHEARN'S TAPAS VAN"). Beret, plaid, dungarees. Pomplé: tan dog, beside him in the street panel. A **separate** cream dog wearing a small white chef's hat appears once in the crowd panel — a one-off background cameo, not clearly the same individual as Pomplé. |
| 1d192b46 | yes | yes (costumed) | "Ferry Bad Idea" — ferry-repair parody. McGrot wears green-tinted welding goggles pushed up over the beret (prop variant). Pomplé: tan/brown dog dressed in a **yellow hi-vis vest and peaked cap** (workwear costume, one-off) throughout. |
| 1d47233d | yes | yes (×2, one costumed) | "The Ozempic Siphon" — weight-loss-industry satire ("GLUCOWELL INDUSTRIES", masked "OZHEADS" figures). Beret, plaid, dungarees. Pomplé: white/cream dog with a collar tag, present in most panels; a second, smaller dog wearing an eye-mask/bandana ("OZHEADS" costume) also appears — unclear if meant as the same dog in a mask or a distinct one-off. |
| 1e5ae33b | yes | yes | "The Marrow Quest" — beret, plaid, dungarees, reads from a book titled "Deep Book". Pomplé: tan/cream dog, present in every panel, wearing a small vest/sign reading "MARROW [...] UNIT" in two panels — a recurring faux-bureaucratic "compliance unit" tabard gag, seen previously on Pomplé in 0c60b3de and 03347596. |
| 1f0b7125 | yes | yes | "Thress Threshold" — meta/fourth-wall strip ("some men worry about bills, McGrot worries about..."), ends with a cloaked figure and the line "Leith wiz never real, Pomplé... it's aw been soup kitchens" plus a "WOOF." caption. Beret, plaid, dungarees. Pomplé: cream dog, clearly drawn in the first and fourth panels (present, not just implied), absent from the cloaked-figure final panels. |
| 1f6380d3 | yes | yes | **Real photo** of a boxed board game/action-figure set ("Match", styled on a football ring-toss game): box art and figures show the standard green-plaid-shirt, red-beret McGrot with a "McGrot" chest tag, brown boots — several identical figures around a circular green board. One tan Pomplé figure also present on the board. Merchandise photo, not a story panel; corroborates the standard design. |
| 21d24e35 | yes | yes | **Phone-screenshot format** — an Instagram-story-style post from "mcgrotcomic" (app chrome visible: clock, battery, "Added to episode 15"). Strip: "Tooth is meat's memory" / sharp teeth, eating "beak-bits". Beret, plaid, dungarees. Pomplé: tan/brown dog, final panel, beside a "do not engage if wearing feathers" warning sign. |
| 22251ca2 | yes | yes | "Lasso of the Links" — superhero pastiche, monochrome warm-sepia rendering, a glowing energy lasso. Beret, plaid shirt legible under the tint. Pomplé: small tan dog, most panels; wears a "MORAL VICTORY" ribbon/medal in the final panel. |
| 22871dff | yes | yes (costumed) | "28 Grots Later: Part Deux" — zombie-film pastiche (28 Days Later), decayed green palette, pale "blessed" townsfolk. **McGrot wears a white cook's smock/jacket here, not the usual green plaid** — a genuine clothing variant. Verbatim note: the ritual location is spelled two different ways in the same strip — "St. Zappino's" (panel 2) and "St. Zanpino's" (panel 3) — kept as printed. Pomplé: tan dog wearing a small red fez-style hat throughout. |
| 231b4a7b | yes | yes | "The Endless Pull-up" — exercise parody, dark night palette. Beret; shirt reads as dark/plain rather than clearly plaid under the low lighting. Pomplé: small tan dog, first and last panels only, waits beside a steaming cup and a bone in the final panel. |
| 2366d360 | yes | yes (×2?) | "The Council Accounting" — council-bureaucracy satire, "EVIDENCE" folder prop. Beret, plaid, dungarees. Pomplé: tan dog beside "LEITH CHAMBERS" in panel 1; final panel shows **two** dogs together (a bigger tan one and a smaller cream puppy) — possibly Pomplé plus a second dog, not disambiguated. |
| 23c90e9b | — not a comic — | — not a comic — | **Broken asset, not a McGrot strip** — same pattern as 088546cf: a ChatGPT screenshot, "Can I voice chat with McGrot?" / assistant reply about writing a script, no artwork at all. |
| 23e8272e | yes | yes (×2?) | "The Buy-oot o' Leith Books" — corporate-takeover-of-the-bookshop satire ("PageCorp" vs. "Regional Culture"). Beret, plaid, dark bib apron while cooking "Broth Glue". Final panel again shows **two** dogs (cream Pomplé-sized dog + a smaller white puppy) scattered among toppled books, "WOOF!" bubble. |
| 24946925 | yes | yes | "The August Invasion" — Edinburgh Fringe Festival satire, crowd of bohemian performer-types (mimes, stilt walkers). Beret, dark apron/vest over the plaid. Pomplé: tan dog, present beside him in most panels. |
| 25ce7fb3 | yes | yes | **"MGROT's Flavour Warehouse"** — dark, painterly/near-photoreal rendering, a third distinct off-model art style (alongside 0d19a6e5's flat style and the tapestry/kart/Dandy crossovers). Signage again misspells the name **"MGROT"** (verbatim, matching the same typo seen on the van in 1c835438). Bright red-orange beret, dark teal-toned plaid shirt, ladle/scale prop, conveyor belt producing a burger. Pomplé: cream/white dog with a reddish collar, sits beside barrels labelled "OFFAL" and "BLENDED ROADKILL". |
| 26105508 | yes | yes | "The Doorstep Testimony" — religious-canvasser satire, offers a "Bowe Shard Burrite" (verbatim). Beret, plaid, dungarees. Pomplé: tan/cream dog, panel 1 and final panel only. |
| 26210448 | yes | yes | "The Organoid Engine" — bio-computer/organoid satire, dark green palette. Beret, plaid, dungarees. Pomplé: tan dog, present in most panels. |
| 2647648d | yes | yes (costumed) | **"Night of the Leith Deadt: Part 2: Part 2"** — dialogue and scenario are **near-identical to 22871dff** ("28 Grots Later: Part Deux"): same "They came back for chips and closure" / "Blessed in the fryer of St. Zappino's" / "St. Zanpino's" (same two-spellings inconsistency) / "The ritual complete. The soul basted" lines, same white cook's-smock variant, same tan dog in a small red fez. Recorded as a near-duplicate pair under two different titles — a corpus-quality note for whoever counts "how many distinct McGrot stories" rather than "how many image files". |
| 26abbf13 | yes | yes | "The Renewable Docks" — docks-industry nostalgia, warm sepia tone, "CONFIGURABLE BROTH" barrel. Beret, plaid, dungarees. Pomplé: tan/cream puppy, present throughout. |
| 27ba44cf | yes | yes | "The Bayeux Retrieval" — Bayeux-Tapestry-**themed plot** (France vs. Scotland, "cloth guarding") but drawn in the **normal flat comic style**, not the tapestry pastiche seen in 0738152e — the two are visually distinct despite the shared reference. A "GROT-COOLED CARRY SYSTEM" robot/pallet gag appears. Beret, plaid/dark shirt, dungarees. Pomplé: tan/cream dog, panel 1 and final panel. |
| 298379fb | yes | no clear sighting | "Honour at the Links" — medieval-knights parody, full armour on the guest characters. Beret, plaid shirt, dungarees, ladle/pie props. No dog clearly drawn in any panel — a small pale shape by the van in panel 1 is too ambiguous to call as Pomplé. |
| 2a0e56d4 | yes | yes | "The Wrapspanner" — Christmas gift-wrapping-machine parody, dark yellow/olive palette. Beret, plaid. Pomplé: cream/tan dog wearing a bow/ribbon collar, panel 1 only. |
| 2a5609ea | yes | yes | "McGrot at the Leith Poetry Slam" — poetry-slam satire, ladle used as a microphone. Beret, plaid, dungarees. Pomplé: tan/cream dog with a reddish collar/bandana, present in every panel. |
| 2ad5f32c | yes | yes (costumed) | **"McGrot Fleet Academy"** — Star Trek pastiche, painterly sepia poster style (a fourth distinct off-model render, alongside the tapestry/kart/Dandy crossovers). Starfleet tunic and cape over the usual beret; insignia is ladle-shaped. Pomplé: tan puppy in a small Starfleet-style vest/pack. Lower panel: a spacesuited figure with a guitar beside a cauldron, and a small McGrot meeting a robed king-like figure with a dog. |
| 2add0549 | yes | yes (mostly) | "McGrot Tunnels to Fife" — tunnel-digging story, warm brown/earth palette throughout. Beret, plaid, dungarees. Pomplé: tan/orange dog, present in every panel **except the last**, where a pale ghostly hand/shape appears in his place. |
| 2aef315d | yes | no | **"Uniform o' the Republic — McGrot"** — single full-body poster portrait. A **militarised uniform variant**: dark green tactical/police-style uniform, star badge, chest name tag "McGrot", belt, holstered knife, baton in hand; beret kept but reshaped closer to a peaked military cap. No plaid shirt, no dungarees — a costume variant not documented in `docs/CANON.md`'s McGrot-variant list. No Pomplé. |
| 2b05b3fb | yes | yes | **"Edinburgh Festival Fringe — McGrot: Ladle to the Core"** — promotional poster, clean canonical pose: beret, dark green plaid shirt, dungarees, dark gloves, ladle raised over a pot, "STEW INCOMING" sign. Pomplé: tan/cream dog with a green neckerchief, sad/droopy expression, seated beside the sign. One of the clearest single-figure references in the set. |
| 2b2110bb | yes | yes | **"McGrot: 28 Grots Later"** — a third, related-but-distinct entry in the same "zombie parody" sub-series as 22871dff and 2647648d (different dialogue this time: "The risen ones stir, Pomale. Fetch", "Got any roll and square?"). Note the **verbatim misspelling "Pomale"** for Pomplé in the dialogue. Beret, off-white/khaki smock (matching the smock variant in the other two zombie strips). Pomplé: small tan dog, final panel only. |

## Counting the set

78 IDs total. Five are not McGrot content at all — real-world/political-meme
images or app screenshots that carry no McGrot or Pomplé artwork: **088546cf**,
**0d4feb3c**, **0e21d212**, **166a4573**, **23c90e9b**. One more (**12f55a90**)
is a text-only menu poster with no character artwork. That leaves **73**
comics that actually depict something.

- **McGrot appears in 72 of the 73** (all but 12f55a90). Of those 72, one
  (**13f572c6**) is an off-model "ancient-aliens" meme portrait, flagged
  separately below rather than folded into the counts that follow.
- **Pomplé** is clearly present in **62 of 73**; ambiguous (present but not
  confidently identifiable as him specifically) in **3** (14ef4956, 1644c350,
  1abdb3c4); and not shown, or shown with no clear sighting, in **8**
  (090b09a1, 10bd3bab, 156f9d41, 15ff40d0, 1af1be83, 2aef315d, 298379fb,
  12f55a90 — several of these are real-photo/poster/merch formats rather than
  story strips, which is most of why he's missing from them).

## Part 2 — synthesis

Counts below are against the **71** comics that show McGrot in his normal
design (72 appearances minus the one off-model anomaly, 13f572c6).

### McGrot — stable

- **Red/orange-red beret.** Present in **68 of 71**. The three exceptions are
  each a full costume reskin, not a redesign: 0403c106 (Alpine trip, dark
  green tweed-plaid flat cap), 0738152e (Bayeux tapestry pastiche, matching
  tartan flat cap), and 2aef315d (military poster, reshaped into a peaked cap
  but still dark red). This is the single most consistent identifying
  feature in the corpus — more consistent than the shirt.
- **Round, bald, pale/cream head with simple black-line features** (dot/oval
  eyes, thin brow, small closed or open mouth). Universal wherever the face
  is shown at all, including on real-world formats (156f9d41's photoreal
  mask, 15ff40d0's van decal, 1f6380d3's merchandise figure).
- **Green plaid/checked shirt as the default torso garment.** Present in
  roughly **60 of 71**. The clearest exceptions are the three zombie-parody
  strips (22871dff, 2647648d, 2b2110bb — white/khaki cook's smock) plus
  one-off costume strips: 0738152e (tapestry tunic), 2aef315d (military
  uniform), 2ad5f32c (Starfleet tunic). Separately, 081eb3ed/12efa91a/
  23e8272e/24946925 add a dark bib/apron *over* the plaid while actively
  cooking, which is not a replacement and so not counted against the shirt
  count above.
- **Ladle or spoon as the default held prop**, used constantly across
  ordinary, historical, sci-fi and superhero-parody strips alike — the most
  reliable "verb" prop.
- **"THE GULLET" branded van**, olive-green body with rust/patina, whenever a
  vehicle appears at all (0121c47c, 0d19a6e5, 092d29b1, 08469d72, and others).

### McGrot — variant

- **Lower body: dark green bib dungarees vs. plain dark trousers.** Dungarees
  are what's drawn whenever the strip is set at the van/stall and the whole
  figure is shown (0021ea9d, 0121c47c, 021b6bd3, 092d29b1, 0d19a6e5, 08d846d0,
  and most others). But the single clearest **full standing** reference in
  the set — 090b09a1's meme sticker figure — shows plain dark/black
  trousers, no dungaree straps at all. This is a genuine, unresolved split
  between "default van outfit" and "the cleanest full-body art available",
  worth flagging rather than silently picking one for the model.
- **Facial hair.** Clean-shaven/plain in the large majority, but a full
  ginger-brown beard appears in 0a4659f8 ("Milk of the Loch") and a thick
  moustache in 19f35bc7 ("Scree Ski") — two independent one-offs, not a
  single recurring look, but enough that "always clean-shaven" would be
  overstating it.
- **Apron/bib over the shirt while actively cooking** — seen in four strips
  (081eb3ed, 12efa91a, 23e8272e, 24946925) as a dark layer added over the
  plaid shirt, never as a replacement for it, and never off-white as
  `docs/CANON.md` describes (see contradictions below).
- **Full costume reskins** — kilt-and-woad "Braveheart" warrior (124327ee,
  beret kept on throughout), spacesuit (0da7cd5d), Starfleet uniform
  (2ad5f32c), tactical/police uniform (2aef315d), Bayeux tapestry tunic
  (0738152e), welding goggles pushed up over the beret (1d192b46). Each is a
  one-off, but the *pattern* of "reskin the outfit, keep the beret and the
  face" recurs often enough to be a variant class in its own right, not a
  set of unrelated one-offs.

### McGrot — one-off

- Sentient/faced food prop (03985281).
- Two visually-identical McGrots as a doppelganger gag (0021ea9d).
- Off-model "ancient-aliens" portrait, bearded, no beret (13f572c6) — see
  contradictions section.

### McGrot — the silhouette

At range, with no detail legible, McGrot reads as a **short, wide, low
silhouette**: a round head sitting almost directly on wide shoulders with
little visible neck, a boxy thick torso, and a beret breaking the top of the
head into a small flattened dome rather than a point. The stance is
grounded and stiff-armed rather than lithe. This shape survives every
costume swap in the corpus — Starfleet cape, tactical webbing, Braveheart
kilt — which is exactly what makes it the load-bearing silhouette: whatever
a 3D stand-in is dressed in, it has to keep this proportion (big low head,
square shoulders, short thick limbs, minimal neck) or it stops reading as
McGrot the moment detail is lost.

### McGrot — the head

The single most-drawn feature set is the **beret + round bald cream head +
simple black eyes and brow**, confirmed independently by the non-comic
formats in this set (the photoreal protest mask in 156f9d41, the van decal in
15ff40d0, the toy figure in 1f6380d3) — three sources that were never meant
to be read next to each other and land on the same design regardless. The
expression is almost always a flat, faintly suspicious deadpan; the mouth is
a short closed or slightly open line, never a wide grin. No ears are ever
drawn showing under the beret. Facial hair (beard, moustache) is rare enough
to be a variant rather than part of this core read.

### Pomplé — stable

- **Small-to-medium dog, smooth tan/cream/golden coat, floppy ears.** This is
  the design in the overwhelming majority of clear sightings — a
  labrador/terrier-cross read, not the "scruffy dark-charcoal and
  dirty-cream" breed canon describes (see contradictions).
- **Positioned beside or very near McGrot**, almost always at ground level,
  looking toward him or toward whatever he's reacting to. The one strip
  where this breaks (1644c350 — the puppy sits with a customer, not McGrot)
  reads as an anomaly precisely because the positioning is otherwise so
  consistent.
- **Reactive rather than active** — Pomplé is drawn watching, whining, or
  making a one-word interjection ("ACK!", "woof"); he is essentially never
  the one performing the strip's central gag.

### Pomplé — variant

- **Costume/prop accessories tied to that strip's joke**, each a one-off on
  its own but recurring as a *pattern*: a green hood (01b27ac5), a
  neckerchief in several colours (0403c106, 14b3e69a, 2b05b3fb), a hi-vis
  vest and cap (1d192b46), a small red fez (22871dff, 2647648d), a
  Starfleet vest (2ad5f32c), and — recurring **three separate times** with
  the same joke — a faux-bureaucratic "compliance unit" tabard/sign
  (03347596, 0c60b3de, 1e5ae33b).
- **A shaggier, patchier coat** in the one strip that puts him in close-up
  for a grooming gag (0c83063f) — plausibly an exaggeration for that joke
  rather than a genuine alternate design, but it is the one clear
  counter-example to "always smooth-coated".
- **A second, unnamed dog** appears alongside what looks like Pomplé in at
  least four strips (1c9b7f2a, 2366d360, 23e8272e, 1abdb3c4) — never
  disambiguated by name, so treated here as background-crowd dogs rather
  than a second named character.

### Pomplé — one-off

- Appearing twice in the same off-model "ancient-aliens" chart (13f572c6) as
  a green/grey goblin-like humanoid, not a dog at all — flagged, not folded
  into the design record.

### Pomplé — the silhouette

Low, compact, and close to the ground — a small rounded body on short legs,
topped with two floppy triangular ears that are often the single most
legible part of him at a distance. He reads as "a small dog sitting or
standing very close to a much bigger figure," which is itself as much a part
of his silhouette as his own shape: he is essentially never drawn alone or
at a distance from McGrot.

### Pomplé — the head

Floppy ears and a rounded muzzle are the most-drawn feature set — expression
is usually a simple worried, watchful, or unimpressed look (a lowered brow
line, occasionally an open panting mouth), never the "tired judgemental
stare" of exaggerated brows canon describes; the brows in the drawings are
implied by the angle of a simple eye-line, not a distinct heavy shaggy brow
shape.

## Where the drawings contradict `docs/CANON.md`

- **CANON:** *"Stained off-white vest, battered dark apron... heavy dockside
  coat in cold scenes."* **DRAWINGS:** the default outfit across nearly every
  set-a comic is a **green plaid/checked shirt over dark green bib
  dungarees** — there is no off-white vest anywhere in this set, and no
  dockside coat either. A dark apron/bib does appear, but only situationally
  over the shirt while actively cooking (081eb3ed, 12efa91a, 23e8272e,
  24946925), never as the base outfit, and never off-white. See rows for
  those IDs plus the full record above.
- **CANON does not mention a beret anywhere.** **DRAWINGS:** the red/orange
  beret is present in 68 of 71 non-anomalous appearances (see "McGrot —
  stable" above) — more consistent than the shirt itself, and the one
  feature that survives every costume reskin in the set, including
  Starfleet, tactical uniform, and Braveheart warrior dress. Any model that
  omits it is missing the most identifying single feature in the corpus.
- **CANON:** *"greasy iron-grey hair swept back."* **DRAWINGS:** hair is never
  shown — the beret is drawn as covering the head completely in every
  sighting, including the photoreal mask (156f9d41), which moulds the beret
  onto the head rather than showing hair beneath it.
- **CANON:** *"small grey-green eyes, heavy bags, suspicious squint."*
  **DRAWINGS:** eyes are drawn as simple black dots or short ovals with a
  thin brow line — no visible under-eye bags, no distinct squint beyond a
  generally flat, faintly suspicious deadpan expression. Too simple a
  drawing style to carry that much detail either way, but nothing in the set
  reads as "bags" specifically.
- **CANON palette:** *"soot black, dirty cream, rust brown, congealed
  mustard, dark red."* **DRAWINGS:** measured whole-frame palettes for 0021ea9d
  and 0121c47c (`node scripts/comic-palette.mjs --only=...`, see method note
  at the top of this file) are dominated by **olive/khaki green and cream
  parchment** tones — greens the canon list omits entirely — with browns and
  mustard present but soot-black and dark-red minor or absent. This is a
  whole-frame measurement (background included), so treat it as directional,
  not a garment-only swatch; but green being McGrot's actual dominant
  clothing colour, unlisted in canon's palette, is a real gap.
- **CANON Pomplé:** *"scruffy dark-charcoal and dirty-cream fur."*
  **DRAWINGS:** Pomplé is overwhelmingly a **smooth tan/cream/golden** dog —
  charcoal colouring essentially never appears. The one strip with a
  shaggier, patchier coat (0c83063f) shows brown patches on cream, not
  charcoal, and reads as a grooming-gag exaggeration rather than his settled
  design.
- **CANON Pomplé:** *"large brown eyes, tired judgemental stare; shaggy brow,
  muzzle and ears."* **DRAWINGS:** the muzzle and floppy ears are right, but
  there is no distinct heavy "shaggy brow" drawn — his expression comes from
  a simple eye-line angle, and "tired judgemental" is closer to "watchful and
  a little worried" in most sightings.
