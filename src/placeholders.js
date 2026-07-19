// Name-on-stone placeholders for the walk-fronting businesses we have no photo
// for (271 of ~295). Dan's call: where we can't source a real façade, write the
// real business name on the shopfront and mark it for later AI generation — an
// accurate LAYOUT even where we lack accurate photography.
//
// buildNameAtlas(names) bakes one canvas atlas of stone-and-signage tiles, one
// per unique business name, and returns a UV lookup. shopfronts.js samples it
// for placeholder buildings' ground band, in a second merged mesh (one extra
// draw call). Procedural + deterministic, like the Phase-4 road/sky textures —
// no committed image, byte-identical every load.

import * as THREE from 'three';

const TILE_W = 256;
const TILE_H = 128;      // 2:1, matching the photo atlas so the engine's segTarget holds
const COLS = 16;         // 319 names → 20 rows → 4096×2560, inside the 4096² limit

// D5/W3: fascia colour, lettering and ground-floor detail all vary per
// business (seeded on the name) so a row of AI-generated buildings reads as
// distinct shops rather than the same template repeated — D5's blind eval
// flagged whole stretches (chainage 1315, 1400) as "the same generic
// shutter texture, distinguished only by the name label".
const FASCIA_COLOURS = [
  '#0e0c0b', '#120f1a', '#101512', '#12100a', '#0a1210', '#150d0d', '#0c1015',
];
const FONT_STACKS = [
  '"Arial Narrow", "Helvetica Neue", Arial, sans-serif',
  '"Futura", "Century Gothic", "Helvetica Neue", sans-serif',
  'Georgia, "Times New Roman", serif',
];

// TILE_W/TILE_H are explicit params so the same drawing logic can render at
// this module's 256x128 (the live in-engine placeholder atlas) and at the
// 128x64 signage-atlas.jpg used to overlay real names onto AI elevations
// (scripts/apply-signage.mjs) — see that script's header for the recipe.
function drawTile(ctx, x, y, w, h, name, seed) {
  const rnd = mulberry32(seed);
  ctx.save();
  ctx.beginPath();
  ctx.rect(x, y, w, h);
  ctx.clip();

  // shopfront recess
  ctx.fillStyle = '#171410';
  ctx.fillRect(x, y, w, h);

  // stone pilasters framing the unit
  const pil = Math.round(w * (0.04 + rnd() * 0.024));
  for (const px of [x, x + w - pil]) {
    ctx.fillStyle = '#332e28';
    ctx.fillRect(px, y, pil, h);
    for (let i = 0; i < 40; i++) { // grain
      ctx.fillStyle = `rgba(0,0,0,${0.05 + rnd() * 0.12})`;
      ctx.fillRect(px + rnd() * pil, y + rnd() * h, 1 + rnd() * 2, 1 + rnd() * 2);
    }
  }

  const innerX = x + pil, innerW = w - pil * 2;

  // an awning over the fascia, angled canted stripes — one of three ground-
  // floor treatments (with shutter/glazing below) so neighbouring AI shops
  // don't all read as the identical closed-up unit.
  const groundStyle = rnd();
  const hasAwning = groundStyle < 0.3;
  const fasciaTop = y + h * (hasAwning ? 0.2 : 0.08);
  if (hasAwning) {
    const awnY = y + h * 0.06, awnH = fasciaTop - awnY;
    const stripeA = ['#3a2420', '#243a2e', '#2a2438'][Math.floor(rnd() * 3)];
    const stripeB = '#d8d0c0';
    const stripeW = Math.max(3, Math.round(w * 0.045));
    for (let sx = innerX; sx < innerX + innerW; sx += stripeW) {
      ctx.fillStyle = ((sx - innerX) / stripeW) % 2 < 1 ? stripeA : stripeB;
      ctx.beginPath();
      ctx.moveTo(sx, fasciaTop);
      ctx.lineTo(Math.min(sx + stripeW, innerX + innerW), fasciaTop);
      ctx.lineTo(Math.min(sx + stripeW - awnH * 0.35, innerX + innerW), awnY);
      ctx.lineTo(Math.max(sx - awnH * 0.35, innerX), awnY);
      ctx.closePath();
      ctx.fill();
    }
    ctx.fillStyle = 'rgba(0,0,0,0.25)';
    ctx.fillRect(innerX, fasciaTop - 2, innerW, 2); // shadow line where it meets the fascia
  }

  // shutter or dark window below the fascia
  const fasciaBot = y + h * 0.40;
  if (groundStyle < 0.55) {
    for (let sy = fasciaBot; sy < y + h; sy += Math.max(2, h * 0.03)) { // corrugated shutter
      ctx.fillStyle = Math.round((sy - fasciaBot) / Math.max(2, h * 0.03)) % 2 === 0 ? '#211d18' : '#15110d';
      ctx.fillRect(innerX, sy, innerW, Math.max(2, h * 0.03));
    }
  } else {
    // Dark glass shopfront window. A flat rect here (the old version) reads —
    // once ACES exposure 1.46 lifts it — as a dropped texture rather than a
    // window: register D0 #25/#40/#44/#49, "flat near-black panel where the
    // shutter should be". Mullions + a diagonal sky-reflection streak give it
    // unambiguous window structure so it reads as an intentional variant.
    const glassBot = y + h;
    ctx.fillStyle = '#14181a';
    ctx.fillRect(innerX, fasciaBot, innerW, glassBot - fasciaBot);
    const panes = 3 + Math.floor(rnd() * 2);
    ctx.strokeStyle = 'rgba(0,0,0,0.65)';
    ctx.lineWidth = 2;
    for (let p = 1; p < panes; p++) {
      const px = innerX + (innerW / panes) * p;
      ctx.beginPath(); ctx.moveTo(px, fasciaBot); ctx.lineTo(px, glassBot); ctx.stroke();
    }
    ctx.strokeStyle = 'rgba(0,0,0,0.5)';
    ctx.lineWidth = 1;
    const midY = fasciaBot + (glassBot - fasciaBot) * 0.55;
    ctx.beginPath(); ctx.moveTo(innerX, midY); ctx.lineTo(innerX + innerW, midY); ctx.stroke();
    // A grazing reflection of the overcast sky — the one cue that reads as
    // glass rather than a painted-over panel.
    ctx.fillStyle = 'rgba(150,158,160,0.12)';
    ctx.beginPath();
    ctx.moveTo(innerX, fasciaBot);
    ctx.lineTo(innerX + innerW * 0.42, fasciaBot);
    ctx.lineTo(innerX + innerW * 0.14, glassBot);
    ctx.lineTo(innerX, glassBot);
    ctx.closePath();
    ctx.fill();
    // Stallriser — a low kickplate distinguishing this from a bare glass
    // sheet down to the pavement, another real-shopfront cue.
    const riserH = (glassBot - fasciaBot) * 0.16;
    ctx.fillStyle = ['#2b2016', '#1c231e', '#241c26'][Math.floor(rnd() * 3)];
    ctx.fillRect(innerX, glassBot - riserH, innerW, riserH);
  }

  // fascia sign band
  const fy = fasciaTop, fh = fasciaBot - fasciaTop;
  const fascia = FASCIA_COLOURS[Math.floor(rnd() * FASCIA_COLOURS.length)];
  ctx.fillStyle = fascia;
  ctx.fillRect(innerX, fy, innerW, fh);
  ctx.strokeStyle = 'rgba(0,0,0,0.6)';
  ctx.lineWidth = 1;
  ctx.strokeRect(innerX + 0.5, fy + 0.5, innerW - 1, fh - 1);

  // the name — seeded font stack, weight and casing so neighbouring fasciae
  // don't all set the same typeface in the same case.
  const fontStack = FONT_STACKS[Math.floor(rnd() * FONT_STACKS.length)];
  const weight = rnd() < 0.75 ? 'bold' : '900';
  const titleCase = rnd() < 0.3;
  const text = titleCase
    ? name.replace(/\w\S*/g, (t) => t.charAt(0).toUpperCase() + t.slice(1).toLowerCase())
    : name.toUpperCase();
  const textShade = 200 + Math.floor(rnd() * 30);
  ctx.fillStyle = `rgb(${textShade},${textShade - 15},${textShade - 45})`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  try { ctx.letterSpacing = '0.5px'; } catch { /* older engines */ }
  fitSignText(ctx, text, innerX + innerW / 2, fy + fh / 2, innerW - 12, fh - 6, fontStack, weight);

  // a little grime over the whole thing
  for (let i = 0; i < 6; i++) {
    ctx.fillStyle = `rgba(0,0,0,${0.05 + rnd() * 0.08})`;
    const gx = x + rnd() * w;
    ctx.fillRect(gx, y, 1 + rnd() * 3, h);
  }
  ctx.restore();
}

// Shrink-to-fit, wrapping to at most two lines; ellipsise anything still too long.
function fitSignText(ctx, text, cx, cy, maxW, maxH, fontStack, weight) {
  fontStack = fontStack || '"Arial Narrow", "Helvetica Neue", Arial, sans-serif';
  weight = weight || 'bold';
  for (let size = 22; size >= 8; size--) {
    ctx.font = `${weight} ${size}px ${fontStack}`;
    if (ctx.measureText(text).width <= maxW) { ctx.fillText(text, cx, cy); return; }
    // try two lines
    const lines = wrapTwo(ctx, text, maxW);
    if (lines && size <= 18 && lines.length === 2) {
      const lh = size * 1.05;
      if (lh * 2 <= maxH) {
        ctx.fillText(lines[0], cx, cy - lh / 2);
        ctx.fillText(lines[1], cx, cy + lh / 2);
        return;
      }
    }
  }
  // last resort: ellipsise on one small line
  ctx.font = `bold 8px ${fontStack}`;
  let t = text;
  while (t.length > 3 && ctx.measureText(t + '…').width > maxW) t = t.slice(0, -1);
  ctx.fillText(t + (t.length < text.length ? '…' : ''), cx, cy);
}

function wrapTwo(ctx, text, maxW) {
  const words = text.split(' ');
  if (words.length < 2) return null;
  for (let i = 1; i < words.length; i++) {
    const a = words.slice(0, i).join(' ');
    const b = words.slice(i).join(' ');
    if (ctx.measureText(a).width <= maxW && ctx.measureText(b).width <= maxW) return [a, b];
  }
  return null;
}

function mulberry32(a) {
  return function () {
    a |= 0; a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function strHash(s) {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); }
  return h >>> 0;
}

// Build the atlas from a list of business names. Deduped; the returned uvFor maps
// a name → its tile's UV rect (flipY-default: canvas row 0 is at V=1).
export function buildNameAtlas(names) {
  const uniq = [...new Set(names)];
  const rows = Math.max(1, Math.ceil(uniq.length / COLS));
  const canvas = document.createElement('canvas');
  canvas.width = COLS * TILE_W;
  canvas.height = rows * TILE_H;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = '#171410';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  const uvFor = new Map();
  uniq.forEach((name, i) => {
    const col = i % COLS, row = Math.floor(i / COLS);
    const x = col * TILE_W, y = row * TILE_H;
    drawTile(ctx, x, y, TILE_W, TILE_H, name, strHash(name));
    uvFor.set(name, {
      u0: x / canvas.width,
      u1: (x + TILE_W) / canvas.width,
      vTop: 1 - y / canvas.height,
      vBot: 1 - (y + TILE_H) / canvas.height,
    });
  });

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 4;
  return { texture, uvFor, count: uniq.length };
}
