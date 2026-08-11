// The colour KEYS. G2, and a correction to how this project has been using
// docs/STYLE.md's twelve swatches.
//
// STYLE.md pools 786,816 pixels across 60 comics and clusters them into twelve.
// That is the right measurement for the question it was asked — "what colours
// does this corpus use" — and the wrong palette to quantise a frame against,
// because NO SINGLE COMIC USES TWELVE COLOURS. Measured at k=5 on five pages
// picked for being visibly single-key (`node scripts/comic-palette.mjs
// --only=<comic> --k=5`), each page is five swatches, and the five differ
// page to page:
//
//   cb674f4e  mean saturation 0.653, mean luma 0.427   the hot gold one
//   6f7e5c8e  0.401, 0.485                             the green one
//   58e960b3  0.412, 0.443                             the grey dockside one
//   9bc5c5e1  0.385, 0.365                             the darkest
//   0021ea9d  0.376, 0.566                             the lightest, warm stone
//
// So the pooled twelve contains swatches that never co-occur on a page, and
// quantising to it mixes a gold page's mustard into a green page's mid. That is
// the measured reason the first `posterise` mode read muddy rather than
// printed: it was not the dither and it was not the strength.
//
// Every key here has the same STRUCTURE, which is the part that generalises:
// one paper note, two or three mids, one dark, and at most one saturated
// accent. Ordered dark → paper, so index 0 is always the ink end and the last
// entry is always the page. A shader can rely on that ordering.
//
// These are raw measurements. Do not hand-tune them — remeasure the page.

// hex, in the order the shader wants: darkest first, paper last.
export const KEYS = [
  {
    id: 'stone',
    label: 'Warm stone — the lightest',
    source: '0021ea9d',
    luma: 0.566,
    saturation: 0.376,
    swatches: [0x484a2e, 0x867849, 0xbe9c51, 0xb4a87e, 0xecd4a3],
  },
  {
    id: 'dock',
    label: 'Dockside grey-green',
    source: '58e960b3',
    luma: 0.443,
    saturation: 0.412,
    swatches: [0x434327, 0x7d592b, 0x716a44, 0xa0905f, 0xd8c69b],
  },
  {
    id: 'green',
    label: 'The green one',
    source: '6f7e5c8e',
    luma: 0.485,
    saturation: 0.401,
    swatches: [0x373b1c, 0x5e5f36, 0x99946f, 0xcd9e59, 0xe7dbae],
  },
  {
    id: 'gold',
    label: 'Hot gold — the most saturated',
    source: 'cb674f4e',
    luma: 0.427,
    saturation: 0.653,
    swatches: [0x1c350e, 0x4d501c, 0x695f1a, 0xa59856, 0xdec162],
  },
  {
    id: 'deep',
    label: 'Deep green — the darkest',
    source: '9bc5c5e1',
    luma: 0.365,
    saturation: 0.385,
    swatches: [0x2e3e27, 0x445032, 0x636742, 0x8b7635, 0xc6b580],
  },
];

// The default key. `dock` rather than the prettier `gold`: this is the Foot of
// the Walk in the afternoon, and `dock` is the one measured off the page that
// is literally a dockside. `gold` is a mood, and G2 chooses the mood.
export const DEFAULT_KEY = 'dock';

export const keyById = (id) => KEYS.find((k) => k.id === id) || KEYS.find((k) => k.id === DEFAULT_KEY);

// Every key is exactly five, dark → paper. The gate suite asserts this rather
// than trusting it, because a hand-edited key with six entries would silently
// half-fill a fixed-size uniform array and quantise against black.
export const KEY_SIZE = 5;

export const toRgbTriplets = (key) => key.swatches.map((hex) => [
  (hex >> 16) & 0xff,
  (hex >> 8) & 0xff,
  hex & 0xff,
]);
