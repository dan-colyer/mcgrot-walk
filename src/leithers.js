// Leithers — the ambient crowd. Non-reader NPCs who walk the pavements doing
// their shopping, sometimes stop to listen to a vendor mid-read, and sometimes
// comment on what they hear. The street's characters are the readers; the
// Leithers are the town that puts up with them.
//
// The comment bubbles quote assets/comic-lines.json — VERBATIM fragments of
// the actual comic being read (the wrapper phrasing is the Leither's own;
// the quoted text is sacred, same rule as the TTS).
//
// Layout (spawn chainage/side/build/colours) is seeded and identical on every
// reload; only the walking itself unfolds over time.

import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { clothMat } from './npcs.js';

const COUNT = 30;
const PAVEMENT_OFFSET = 7.6;  // outside the vendor line (6m), on the slabs
const WALK_MIN = 30;          // turn-around margins at the street ends
const WALK_END_MARGIN = 50;
const LISTEN_RANGE = 9;       // stop for a reader speaking within this range
const LISTEN_COOLDOWN = 25;   // seconds before the same Leither stops again
const MAX_BUBBLES = 3;        // concurrent comment bubbles, street-wide

const COAT_COLORS = [0x4c4a3c, 0x3f4238, 0x564c3e, 0x44403b, 0x50524a, 0x3a3c34];
const BAG_COLORS = [0x6b3a2e, 0x2e4a5a, 0x776b4a, 0x4a3a5a, 0x5a5a4a];

// The wrapper is the Leither's own voice; %Q is replaced with the verbatim
// comic fragment and must never be altered.
const COMMENT_TEMPLATES = [
  '"%Q" — whit?',
  'did ye hear that? "%Q"',
  '"%Q", says he',
  '"%Q" — aye, right',
  '"%Q"... ma nerves',
  "he's away wi it — \"%Q\"",
];

const rand = (() => {
  let s = 0x1e17e4;
  return () => {
    s |= 0; s = (s + 0x6d2b79f5) | 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
})();

export function buildLeithers(assets, world, scene, readers) {
  const streetLine = world.streetLine || [];
  if (streetLine.length < 2) return { update() {} };
  const lines = assets.comicLines || {};
  const streetLen = chainLength(streetLine);
  const usable = streetLen - WALK_MIN - WALK_END_MARGIN;
  if (usable < 50) return { update() {} };

  const group = new THREE.Group();
  group.name = 'leithers';
  scene.add(group);

  const walkers = [];
  for (let i = 0; i < COUNT; i++) {
    const w = buildLeither();
    w.s = WALK_MIN + rand() * usable;
    w.side = rand() < 0.5 ? 1 : -1;
    w.dir = rand() < 0.5 ? 1 : -1;
    w.speed = 0.55 + rand() * 0.5;
    w.offset = PAVEMENT_OFFSET + rand() * 1.6;
    w.state = 'walk';
    w.listenT = 0;
    w.cooldown = rand() * LISTEN_COOLDOWN;
    w.phase = rand() * 10;
    w.bubble = null;
    w.bubbleT = 0;
    group.add(w.group);
    walkers.push(w);
  }

  let bubbleCount = 0;
  let scanIdx = 0;

  function update(dt, time) {
    for (let i = 0; i < walkers.length; i++) {
      const w = walkers[i];
      if (w.cooldown > 0) w.cooldown -= dt;

      if (w.state === 'fetch') {
        // Striding toward an orphaned comic the player just read.
        const it = w.fetchItem;
        const gap = it.chainage - w.s;
        if (Math.abs(gap) > 2) {
          w.dir = Math.sign(gap);
          w.s += w.dir * w.speed * 1.5 * dt; // hurrying — this is IMPORTANT
        } else {
          w.state = 'approach';
          w.approachT = 0;
          const g = w.group.position;
          w.approachFrom = { x: g.x, z: g.z };
        }
      } else if (w.state === 'approach') {
        // Leave the pavement path and close on the comic itself.
        w.approachT = Math.min(1, w.approachT + dt / 1.6);
        const it = w.fetchItem;
        const t = w.approachT;
        const tx = it.x + 0.75, tz = it.z; // stand just off the page
        w.group.position.set(
          w.approachFrom.x + (tx - w.approachFrom.x) * t,
          Math.abs(Math.sin((w.s + t * 8) * 2)) * 0.03,
          w.approachFrom.z + (tz - w.approachFrom.z) * t
        );
        w.group.rotation.y = Math.atan2(it.x - w.group.position.x, it.z - w.group.position.z);
        if (t >= 1) {
          w.state = 'readaloud';
          w.readQueue = (w.fetchItem.lines || []).slice(0, 8);
          w.readT = 0.5;
        }
        continue; // position handled here, skip the chain reposition below
      } else if (w.state === 'readaloud') {
        // Reading the found comic aloud: its printed lines, VERBATIM, one
        // bubble at a time — no wrapper, this is a recital not a heckle.
        w.readT -= dt;
        if (w.readT <= 0 && !w.bubble) {
          const line = w.readQueue.shift();
          if (line == null) {
            w.state = 'walk';
            w.fetchItem.adopted = false; // the page stays where it lay
            w.fetchItem = null;
            w.cooldown = LISTEN_COOLDOWN;
          } else {
            w.bubble = makeBubble('"' + line + '"');
            w.bubble.position.set(0, w.headTopY + 0.5, 0);
            w.group.add(w.bubble);
            w.bubbleT = 4.2;
            bubbleCount++;
            w.readT = 0.6; // small beat between pages
          }
        }
        if (w.bubble) {
          w.bubbleT -= dt;
          if (w.bubbleT <= 0) {
            w.group.remove(w.bubble);
            w.bubble.material.map.dispose();
            w.bubble.material.dispose();
            w.bubble = null;
            bubbleCount--;
          }
        }
        continue; // stays put, facing the page
      } else if (w.state === 'listen') {
        w.listenT -= dt;
        if (w.listenT <= 0 || !(w.target && w.target.speaking)) {
          w.state = 'walk';
          w.target = null;
          w.cooldown = LISTEN_COOLDOWN;
        }
      } else {
        w.s += w.dir * w.speed * dt;
        if (w.s < WALK_MIN || w.s > WALK_MIN + usable) {
          w.dir *= -1;
          w.s = Math.max(WALK_MIN, Math.min(WALK_MIN + usable, w.s));
        }
      }

      // Reposition along the chain (also while listening — they stand still,
      // but the pose still needs computing once; cheap enough to just do).
      const sm = sampleChain(streetLine, w.s);
      if (sm) {
        const [tx, tz] = sm.tangent;
        const px = sm.point[0] + -tz * w.side * w.offset;
        const pz = sm.point[1] + tx * w.side * w.offset;
        w.group.position.set(px, 0, pz);
        if (w.state === 'listen' && w.target) {
          const t = w.target.group.position;
          w.group.rotation.y = Math.atan2(t.x - px, t.z - pz);
        } else {
          w.group.rotation.y = Math.atan2(tx * w.dir, tz * w.dir);
          // Walk bob: a little bounce and sway, enough to read as walking.
          const ws = time * (4.6 * w.speed) + w.phase;
          w.group.position.y = Math.abs(Math.sin(ws)) * 0.045;
          w.group.rotation.z = Math.sin(ws) * 0.03;
        }
      }

      // Comment bubble lifecycle.
      if (w.bubble) {
        w.bubbleT -= dt;
        if (w.bubbleT <= 0) {
          w.group.remove(w.bubble);
          w.bubble.material.map.dispose();
          w.bubble.material.dispose();
          w.bubble = null;
          bubbleCount--;
        }
      }
    }

    // Stagger the (mildly pricey) reader-proximity scan: a few walkers per frame.
    for (let n = 0; n < 4; n++) {
      const w = walkers[scanIdx++ % walkers.length];
      if (w.state !== 'walk' || w.cooldown > 0) continue;
      const g = w.group.position;
      for (const r of readers) {
        if (!r.speaking) continue;
        const p = r.group.position;
        if (Math.hypot(p.x - g.x, p.z - g.z) > LISTEN_RANGE) continue;
        w.state = 'listen';
        w.target = r;
        w.listenT = 6 + rand() * 9;
        // Half the listeners pipe up, quoting the actual comic.
        const frags = lines[r.comic.id];
        if (frags && frags.length && bubbleCount < MAX_BUBBLES && rand() < 0.6) {
          const quote = frags[Math.floor(rand() * frags.length)];
          const tpl = COMMENT_TEMPLATES[Math.floor(rand() * COMMENT_TEMPLATES.length)];
          w.bubble = makeBubble(tpl.replace('%Q', quote));
          w.bubble.position.set(0, w.headTopY + 0.5, 0);
          w.group.add(w.bubble);
          w.bubbleT = 7;
          bubbleCount++;
        }
        break;
      }
    }
  }

  // The comics-as-litter hook: the player just read an orphaned comic — a
  // free walker within earshot takes it upon themselves to come and read it
  // aloud. Returns true if someone's coming.
  function summonReader(item) {
    if (!item || item.adopted || !(item.lines && item.lines.length)) return false;
    let best = null;
    let bd = 70; // don't summon from beyond ~a block away
    for (const w of walkers) {
      if (w.state !== 'walk') continue;
      const g = w.group.position;
      const d = Math.hypot(g.x - item.x, g.z - item.z);
      if (d < bd) { bd = d; best = w; }
    }
    if (!best) return false;
    item.adopted = true;
    best.state = 'fetch';
    best.fetchItem = item;
    return true;
  }

  return { walkers, update, summonReader };
}

// ---------------------------------------------------------------------------
// One walker — a smaller, humbler cousin of the vendor rig: hooded, no face
// photo (the readers are the characters; the crowd stays anonymous), carrier
// bag in hand.
// ---------------------------------------------------------------------------

function buildLeither() {
  const H = 1.5 + rand() * 0.35;
  const G = 0.8 + rand() * 0.45;
  const coat = COAT_COLORS[Math.floor(rand() * COAT_COLORS.length)];

  const group = new THREE.Group();
  const coatM = clothMat(coat, false);
  const hoodM = clothMat(multScalarHex(coat, 0.62), true);
  const bootM = new THREE.MeshLambertMaterial({ color: 0x181610, flatShading: true });

  const bootH = 0.1;
  const legH = H * 0.32;
  const bodyW = 0.44 * G;
  const bodyD = 0.3 * G;
  const bodyH = H * 0.44;
  const headSize = 0.26;
  const legTopY = bootH + legH;
  const bodyTopY = legTopY + bodyH;
  const headTopY = bodyTopY + headSize + 0.02;

  const coatGeos = [];
  for (const sx of [-1, 1]) {
    const leg = new THREE.BoxGeometry(bodyW * 0.34, legH, bodyD * 0.7);
    leg.translate(sx * bodyW * 0.24, bootH + legH * 0.5, 0);
    coatGeos.push(leg);
    const arm = new THREE.BoxGeometry(0.11, bodyH * 0.7, 0.11);
    arm.translate(sx * (bodyW * 0.5 + 0.05), bodyTopY - bodyH * 0.62, 0);
    coatGeos.push(arm);
  }
  const torso = new THREE.BoxGeometry(bodyW, bodyH, bodyD);
  torso.translate(0, legTopY + bodyH * 0.5, 0);
  coatGeos.push(torso);
  group.add(new THREE.Mesh(mergeGeometries(coatGeos), coatM));

  const boots = [];
  for (const sx of [-1, 1]) {
    const b = new THREE.BoxGeometry(bodyW * 0.36, bootH, bodyD * 1.3);
    b.translate(sx * bodyW * 0.24, bootH * 0.5, bodyD * 0.15);
    boots.push(b);
  }
  group.add(new THREE.Mesh(mergeGeometries(boots), bootM));

  // Hooded head, face in shadow — a dark plane, not a photo.
  const shadowM = new THREE.MeshLambertMaterial({ color: 0x221e18, flatShading: true });
  const headMats = [hoodM, hoodM, hoodM, hoodM, shadowM, hoodM];
  const head = new THREE.Mesh(new THREE.BoxGeometry(headSize, headSize, headSize * 0.9), headMats);
  head.position.set(0, bodyTopY + headSize * 0.5 + 0.02, 0);
  group.add(head);

  // The messages: a carrier bag (sometimes two) hanging at hand height.
  const bagM = new THREE.MeshLambertMaterial({ color: BAG_COLORS[Math.floor(rand() * BAG_COLORS.length)], flatShading: true });
  const bagSides = rand() < 0.3 ? [-1, 1] : [rand() < 0.5 ? -1 : 1];
  for (const sx of bagSides) {
    const bag = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.24, 0.11), bagM);
    bag.position.set(sx * (bodyW * 0.5 + 0.1), legTopY + bodyH * 0.12, 0.02);
    group.add(bag);
  }

  return { group, headTopY };
}

function multScalarHex(hex, k) {
  const r = Math.round(((hex >> 16) & 255) * k);
  const g = Math.round(((hex >> 8) & 255) * k);
  const b = Math.round((hex & 255) * k);
  return (r << 16) | (g << 8) | b;
}

// ---------------------------------------------------------------------------
// Comment bubble — same canvas-sprite recipe as the vendor name plates.
// ---------------------------------------------------------------------------

function makeBubble(text) {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 160;
  const ctx = canvas.getContext('2d');

  // Wrap to ~30 chars/line, max 3 lines.
  const words = text.split(' ');
  const lines = [''];
  for (const word of words) {
    if ((lines[lines.length - 1] + ' ' + word).trim().length > 30 && lines.length < 3) lines.push('');
    lines[lines.length - 1] = (lines[lines.length - 1] + ' ' + word).trim();
  }

  ctx.fillStyle = 'rgba(20, 22, 16, 0.82)';
  ctx.strokeStyle = 'rgba(200, 200, 180, 0.5)';
  ctx.lineWidth = 3;
  const bh = 34 + lines.length * 34;
  ctx.beginPath();
  ctx.roundRect(8, 80 - bh / 2, 496, bh, 14);
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = '#d8d4c0';
  ctx.font = 'italic 26px Georgia, serif';
  ctx.textAlign = 'center';
  lines.forEach((l, i) => ctx.fillText(l, 256, 80 - bh / 2 + 44 + i * 32));

  const tex = new THREE.CanvasTexture(canvas);
  const sprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, transparent: true, depthTest: true }));
  sprite.scale.set(1.9, 0.59, 1);
  return sprite;
}

// ---------------------------------------------------------------------------
// Chain helpers (same shapes npcs.js uses).
// ---------------------------------------------------------------------------

function chainLength(line) {
  let len = 0;
  for (let i = 1; i < line.length; i++) {
    len += Math.hypot(line[i][0] - line[i - 1][0], line[i][1] - line[i - 1][1]);
  }
  return len;
}

function sampleChain(line, target) {
  let acc = 0;
  for (let i = 0; i < line.length - 1; i++) {
    const [ax, az] = line[i];
    const [bx, bz] = line[i + 1];
    const dx = bx - ax, dz = bz - az;
    const L = Math.hypot(dx, dz);
    if (acc + L >= target) {
      const t = L > 0 ? (target - acc) / L : 0;
      return { point: [ax + dx * t, az + dz * t], tangent: [dx / (L || 1), dz / (L || 1)] };
    }
    acc += L;
  }
  return null;
}
