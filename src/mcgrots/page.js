// S4 — THE PAGE. G2.
//
// The one candidate that is not a way of colouring pixels. Reading the corpus,
// the page furniture is not decoration around the comic; it is a large part of
// why the comic reads as one. Every page has:
//
//   - a cream margin, always, on all four sides
//   - a dark rule around each panel, and cream between panels
//   - a title bar ABOVE the panels, set in heavy condensed capitals
//   - on many pages a caption bar BELOW them, on the paper
//
// So this puts the 3D viewport inside a panel on a page, rather than filling
// the window with it. That is a real claim about the game and not only about
// the look, because this project's staging is already panel-shaped: G0 fixed
// one camera per anchor and made the camera CUT rather than fly (anchors.js).
// A cut between two fixed shots with paper around it is a panel transition. The
// game was already doing the hard half of this without naming it.
//
// WHAT THIS DELIBERATELY DOES NOT DO: draw a multi-panel grid. A page with six
// live panels is six renders of the same scene, and the frame cost of that is
// the reason it is not being prototyped now — one panel answers whether the
// framing helps at all, and it answers it at the same cost as no framing.
//
// It is DOM, not a shader, and that is the cheap correct choice: the margin is
// flat colour and the lettering is type. Rendering type through a WebGL pass to
// get a border would be paying for an atlas to draw a rectangle.

// Measured off the corpus rather than picked. Sampled pages put the margin at
// 5.5-7% of the shorter edge and the panel rule at roughly 0.7% — a heavy line,
// not a hairline. `dock`'s paper is the ground (keys.js), so the furniture
// changes with the key instead of sitting on a fixed cream that fights it.
export const PAGE = {
  margin: 0.062,      // fraction of the shorter viewport edge
  rule: 0.0075,
  paper: '#d8c69b',   // `dock` key's paper note
  ink: '#211f1c',
  cutMs: 130,         // panel transition; see below for why it is this short
};

// The cut is 130ms of paper. Not a fade and not a wipe:
//
// A comic does not transition between panels at all — the reader's eye jumps,
// and the gutter is what makes the jump legible rather than jarring. The
// closest thing to that in motion is a brief hold on the gutter colour, so the
// eye is given the paper for a beat and then the next shot. A crossfade would
// be a film grammar borrowed into a form that has its own, and it also destroys
// the one thing the fixed cameras buy, which is that two shots are separate
// rather than continuous.
//
// 130ms is above the ~100ms where it reads as a dropped frame and below the
// ~200ms where it reads as a scene change.

export function createPage({ canvas, onResize }) {
  const root = document.createElement('div');
  root.id = 'page';
  root.setAttribute('aria-hidden', 'true');   // furniture, not content
  root.innerHTML = `
    <div class="page-paper"></div>
    <div class="page-title"></div>
    <div class="page-frame"></div>
    <div class="page-caption"></div>
    <div class="page-cut"></div>
  `;
  document.body.appendChild(root);

  const elPaper = root.querySelector('.page-paper');
  const elTitle = root.querySelector('.page-title');
  const elFrame = root.querySelector('.page-frame');
  const elCaption = root.querySelector('.page-caption');
  const elCut = root.querySelector('.page-cut');

  let on = false;
  let cutTimer = null;

  // The viewport rect the renderer should draw into, in CSS pixels. When the
  // page is off this is the whole window, which is what keeps `none` a genuine
  // no-op — the renderer is not asked to do anything different.
  function viewport() {
    const w = window.innerWidth, h = window.innerHeight;
    if (!on) return { x: 0, y: 0, w, h };
    const m = Math.round(Math.min(w, h) * PAGE.margin);
    // Title above and caption below both live in the margin, so the panel is
    // inset further vertically than horizontally. That asymmetry is what the
    // pages actually look like; an even inset reads as a picture frame.
    const top = m * 2.1;
    const bottom = m * 1.7;
    return { x: m, y: top, w: Math.max(1, w - m * 2), h: Math.max(1, h - top - bottom) };
  }

  function layout() {
    const v = viewport();
    const rule = Math.max(1, Math.round(Math.min(window.innerWidth, window.innerHeight) * PAGE.rule));
    for (const el of [elFrame, elCut]) {
      el.style.left = `${v.x}px`;
      el.style.top = `${v.y}px`;
      el.style.width = `${v.w}px`;
      el.style.height = `${v.h}px`;
    }
    elFrame.style.borderWidth = `${rule}px`;
    // The canvas is inset to the panel rather than the renderer being
    // scissored. Same result, and it means the drawing buffer is exactly the
    // panel — so a golden of the panel is not a golden of a window with a hole.
    canvas.style.left = `${v.x}px`;
    canvas.style.top = `${v.y}px`;
    canvas.style.width = `${v.w}px`;
    canvas.style.height = `${v.h}px`;
    elTitle.style.height = `${v.y}px`;
    elCaption.style.top = `${v.y + v.h}px`;
    onResize?.(v);
  }

  function setEnabled(next) {
    if (on === next) return;
    on = next;
    root.classList.toggle('on', on);
    document.body.classList.toggle('paged', on);
    if (!on) {
      canvas.style.left = canvas.style.top = '';
      canvas.style.width = canvas.style.height = '';
    }
    layout();
  }

  window.addEventListener('resize', layout);

  return {
    get enabled() { return on; },
    setEnabled,
    viewport,
    layout,
    setTitle(text) { elTitle.textContent = on ? (text || '') : ''; },
    setCaption(text) { elCaption.textContent = on ? (text || '') : ''; },

    // Hold the gutter for a beat, run `swap` behind it, then reveal. The swap
    // happens while the paper is up, so the camera never moves on screen — the
    // shot is simply different afterwards, which is the panel grammar.
    //
    // Returns a promise so a capture script can await the settle rather than
    // sleep for a number it guessed.
    cut(swap) {
      if (!on) { swap?.(); return Promise.resolve(); }
      clearTimeout(cutTimer);
      elCut.classList.add('on');
      return new Promise((resolve) => {
        cutTimer = setTimeout(() => {
          swap?.();
          elCut.classList.remove('on');
          resolve();
        }, PAGE.cutMs);
      });
    },

    // A gate needs to assert the furniture is actually on screen, not that
    // setEnabled returned. These are read off the live layout.
    stats: () => {
      const v = viewport();
      return {
        enabled: on,
        viewport: v,
        // Fraction of the window the panel occupies. If the furniture is on and
        // this is 1, the inset silently did nothing.
        panelFraction: +((v.w * v.h) / (window.innerWidth * window.innerHeight)).toFixed(4),
        cutting: elCut.classList.contains('on'),
      };
    },
  };
}
