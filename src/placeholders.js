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

// A closed Leith shopfront: dark stone frame, a fascia sign carrying the name,
// shutter/window below. Kept DARK because ACES tone mapping (exposure 1.46)
// lifts and warms everything — the same reason the photo atlas is pre-graded down.
function drawTile(ctx, x, y, name, seed) {
  const rnd = mulberry32(seed);
  ctx.save();
  ctx.beginPath();
  ctx.rect(x, y, TILE_W, TILE_H);
  ctx.clip();

  // shopfront recess
  ctx.fillStyle = '#171410';
  ctx.fillRect(x, y, TILE_W, TILE_H);

  // stone pilasters framing the unit
  const pil = 10 + Math.floor(rnd() * 6);
  for (const px of [x, x + TILE_W - pil]) {
    ctx.fillStyle = '#332e28';
    ctx.fillRect(px, y, pil, TILE_H);
    for (let i = 0; i < 40; i++) { // grain
      ctx.fillStyle = `rgba(0,0,0,${0.05 + rnd() * 0.12})`;
      ctx.fillRect(px + rnd() * pil, y + rnd() * TILE_H, 1 + rnd() * 2, 1 + rnd() * 2);
    }
  }

  const innerX = x + pil, innerW = TILE_W - pil * 2;

  // shutter or dark window below the fascia
  const fasciaBot = y + TILE_H * 0.40;
  if (rnd() < 0.55) {
    for (let sy = fasciaBot; sy < y + TILE_H; sy += 4) { // corrugated shutter
      ctx.fillStyle = sy % 8 < 4 ? '#211d18' : '#15110d';
      ctx.fillRect(innerX, sy, innerW, 4);
    }
  } else {
    ctx.fillStyle = '#0d0f10'; // dark glass
    ctx.fillRect(innerX, fasciaBot, innerW, y + TILE_H - fasciaBot);
    ctx.fillStyle = 'rgba(120,130,140,0.05)'; // faint reflection
    ctx.fillRect(innerX, fasciaBot, innerW, 6);
  }

  // fascia sign band
  const fy = y + TILE_H * 0.08, fh = TILE_H * 0.30;
  const fascia = ['#0e0c0b', '#120f1a', '#101512'][Math.floor(rnd() * 3)];
  ctx.fillStyle = fascia;
  ctx.fillRect(innerX, fy, innerW, fh);
  ctx.strokeStyle = 'rgba(0,0,0,0.6)';
  ctx.lineWidth = 1;
  ctx.strokeRect(innerX + 0.5, fy + 0.5, innerW - 1, fh - 1);

  // the name
  ctx.fillStyle = '#cdbf9f';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  try { ctx.letterSpacing = '0.5px'; } catch { /* older engines */ }
  fitSignText(ctx, name.toUpperCase(), innerX + innerW / 2, fy + fh / 2, innerW - 12, fh - 6);

  // a little grime over the whole thing
  for (let i = 0; i < 6; i++) {
    ctx.fillStyle = `rgba(0,0,0,${0.05 + rnd() * 0.08})`;
    const gx = x + rnd() * TILE_W;
    ctx.fillRect(gx, y, 1 + rnd() * 3, TILE_H);
  }
  ctx.restore();
}

// Shrink-to-fit, wrapping to at most two lines; ellipsise anything still too long.
function fitSignText(ctx, text, cx, cy, maxW, maxH) {
  for (let size = 22; size >= 8; size--) {
    ctx.font = `bold ${size}px "Arial Narrow", "Helvetica Neue", Arial, sans-serif`;
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
  ctx.font = `bold 8px "Arial Narrow", Arial, sans-serif`;
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
    drawTile(ctx, x, y, name, strHash(name));
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
