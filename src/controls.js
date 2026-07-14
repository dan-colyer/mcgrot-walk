// First-person controls for McGrot Walk.
//
// - WASD / arrow keys walk on the XZ plane at WALK_SPEED.
// - Look: mouse/touch drag by default (Pointer Events cover both, and this
//   works inside sandboxed iframes where pointer lock is blocked). Pointer
//   lock is opportunistically requested on canvas click as an enhancement —
//   feature-detected, never required.
// - Player is soft-clamped within MAX_OFFSET metres of the street
//   centreline: if a move would push further away, it's pulled back to the
//   boundary radially, so the player can still slide along the corridor.

const WALK_SPEED = 14; // m/s
const EYE_HEIGHT = 1.7;
const MAX_OFFSET = 16; // metres from street centreline
const LOOK_SENSITIVITY = 0.0035; // radians per pixel (drag)
const POINTER_LOCK_SENSITIVITY = 0.0025;
const MAX_PITCH = Math.PI / 2 - 0.05;

const MOVE_KEYS = {
  KeyW: 'forward',
  ArrowUp: 'forward',
  KeyS: 'backward',
  ArrowDown: 'backward',
  KeyA: 'left',
  ArrowLeft: 'left',
  KeyD: 'right',
  ArrowRight: 'right',
};

export function createControls(camera, domElement, { nearestStreetPoint, spawn }) {
  let yaw = spawn.yaw || 0;
  let pitch = 0;

  camera.position.set(spawn.x, EYE_HEIGHT, spawn.z);
  camera.rotation.order = 'YXZ';
  applyLook();

  const pressed = new Set();
  let dragging = false;
  let lastX = 0;
  let lastY = 0;
  let pointerLocked = false;
  let enabled = true; // gated off while the comic overlay is open

  function applyLook() {
    camera.rotation.set(pitch, yaw, 0);
  }

  function onKeyDown(e) {
    if (!enabled) return;
    if (MOVE_KEYS[e.code]) {
      pressed.add(MOVE_KEYS[e.code]);
      e.preventDefault();
    }
  }

  function onKeyUp(e) {
    if (MOVE_KEYS[e.code]) {
      pressed.delete(MOVE_KEYS[e.code]);
    }
  }

  function onPointerDown(e) {
    if (!enabled) return;
    dragging = true;
    lastX = e.clientX;
    lastY = e.clientY;
    domElement.setPointerCapture?.(e.pointerId);

    // Pointer lock is an opportunistic enhancement, never required.
    if (!pointerLocked && domElement.requestPointerLock) {
      try {
        const result = domElement.requestPointerLock();
        // Some browsers return a Promise; ignore rejection silently (common
        // in sandboxed iframes where pointer lock is disallowed).
        if (result && typeof result.catch === 'function') result.catch(() => {});
      } catch {
        // no-op: fall back to drag-to-look
      }
    }
  }

  function onPointerMove(e) {
    if (pointerLocked) {
      yaw -= (e.movementX || 0) * POINTER_LOCK_SENSITIVITY;
      pitch -= (e.movementY || 0) * POINTER_LOCK_SENSITIVITY;
      pitch = clamp(pitch, -MAX_PITCH, MAX_PITCH);
      applyLook();
      return;
    }
    if (!dragging) return;
    const dx = e.clientX - lastX;
    const dy = e.clientY - lastY;
    lastX = e.clientX;
    lastY = e.clientY;
    yaw -= dx * LOOK_SENSITIVITY;
    pitch -= dy * LOOK_SENSITIVITY;
    pitch = clamp(pitch, -MAX_PITCH, MAX_PITCH);
    applyLook();
  }

  function onPointerUp(e) {
    dragging = false;
    domElement.releasePointerCapture?.(e.pointerId);
  }

  function onPointerLockChange() {
    pointerLocked = document.pointerLockElement === domElement;
  }

  window.addEventListener('keydown', onKeyDown);
  window.addEventListener('keyup', onKeyUp);
  domElement.addEventListener('pointerdown', onPointerDown);
  window.addEventListener('pointermove', onPointerMove);
  window.addEventListener('pointerup', onPointerUp);
  document.addEventListener('pointerlockchange', onPointerLockChange);

  function setEnabled(v) {
    enabled = !!v;
    if (!enabled) {
      // Drop any held keys so the player doesn't keep drifting once re-enabled.
      pressed.clear();
      dragging = false;
    }
  }

  // Programmatic forward-press, for the on-screen hold-to-walk button on
  // touch devices (drag-look already works via the pointer handlers above).
  function setForward(v) {
    if (!enabled) return;
    if (v) pressed.add('forward');
    else pressed.delete('forward');
  }

  function update(dt) {
    if (!enabled) return;
    let moveX = 0;
    let moveZ = 0;
    if (pressed.has('forward')) moveZ -= 1;
    if (pressed.has('backward')) moveZ += 1;
    if (pressed.has('left')) moveX -= 1;
    if (pressed.has('right')) moveX += 1;

    if (moveX !== 0 || moveZ !== 0) {
      const len = Math.hypot(moveX, moveZ);
      moveX /= len;
      moveZ /= len;

      // Forward/right vectors from yaw only (ground-plane movement,
      // independent of camera pitch).
      const sinY = Math.sin(yaw);
      const cosY = Math.cos(yaw);
      const forwardX = -sinY;
      const forwardZ = -cosY;
      const rightX = cosY;
      const rightZ = -sinY;

      const dx = (forwardX * -moveZ + rightX * moveX) * WALK_SPEED * dt;
      const dz = (forwardZ * -moveZ + rightZ * moveX) * WALK_SPEED * dt;

      let nx = camera.position.x + dx;
      let nz = camera.position.z + dz;

      const { point, distance } = nearestStreetPoint(nx, nz);
      if (point && distance > MAX_OFFSET) {
        const scale = MAX_OFFSET / distance;
        nx = point[0] + (nx - point[0]) * scale;
        nz = point[1] + (nz - point[1]) * scale;
      }

      camera.position.x = nx;
      camera.position.z = nz;
    }
  }

  function dispose() {
    window.removeEventListener('keydown', onKeyDown);
    window.removeEventListener('keyup', onKeyUp);
    domElement.removeEventListener('pointerdown', onPointerDown);
    window.removeEventListener('pointermove', onPointerMove);
    window.removeEventListener('pointerup', onPointerUp);
    document.removeEventListener('pointerlockchange', onPointerLockChange);
  }

  return { update, dispose, setEnabled, setForward };
}

function clamp(v, min, max) {
  return Math.max(min, Math.min(max, v));
}
