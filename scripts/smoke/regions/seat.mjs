// G3c built this region on "nothing guarantees the hip lands over the
// seat", which is true but incomplete: the hip has ZERO local x/z offset
// in ANY pose (measured, § F1), so a check that only looks at the hip is
// blind to the LEGS — flip the thigh's sign and this region stayed 38/38
// (G3e brief, § F10). Rewritten to also measure the knee, which is where
// F1's actual defect lived. Own navigation (skinned body: the
// capsule/segmented/flats candidates have no `hips` bone to measure), so
// this does not inherit whatever body the `anchors` region above left the
// page on.

export async function run(ctx) {
  const { page, port, consoleErrors, check } = ctx;
  await page.goto(`http://127.0.0.1:${port}/mcgrots.html?body=skinned&archetype=rab`,
    { waitUntil: 'load' });
  await page.waitForFunction(() => !!window.__mcgrotsDebug, null, { timeout: 15000 });
  await page.evaluate(() => window.__mcgrotsDebug.card.dismiss());
  await page.evaluate(() => window.__mcgrotsDebug.pauseAuto());

  // Reads the SHIPPED scene, not a helper that recomputes the ledge's own
  // offsets: the seat's world box comes from `THREE.Box3().setFromObject`
  // on the actual mesh group `main.js` builds, and the hip/knee come from
  // `getWorldPosition` on the actual skeleton bones — same technique as the
  // van region's AABB-projection check (G3a), for the same reason. A helper
  // that re-derives "where the ledge should be" from the same constants the
  // product uses would pass even if the product's own placement code had a
  // sign error, since it would be checking the constants against
  // themselves. `fx`/`fz` come from the anchor's own `yaw` (anchors.js,
  // independent of main.js's ledge-placement code), not from a copy of
  // `SEAT_DEPTH`/`CAP_OVERHANG`.
  const measure = (anchorId, sit) => page.evaluate(({ anchorId, sit }) => {
    const d = window.__mcgrotsDebug;
    // `d.snapTo` runs `goTo(id, { snap: true })`, which sets `current` to
    // this anchor — and `frame()` (main.js) re-asserts `'sit'` every frame
    // whenever `current.sit` is true and the actor isn't walking ("Park
    // state resolves on arrival, so a sitting spot only sits once
    // reached"). That auto-resit stomped the very first version of this
    // control: forcing `'idle'` here looked like it worked for one frame
    // and then silently reverted, so standing measured the SAME hip height
    // as seated. Positioning the actor directly (bypassing `goTo`, so
    // `current` never becomes this anchor) is what makes `'idle'` actually
    // stick for the control.
    const a = d.anchors.find((x) => x.id === anchorId);
    d.actor.snapTo(a.pos.x, a.pos.z, a.yaw);
    d.setActorState(sit ? 'sit' : 'idle');
    d.stepFrames(150);
    let mesh = null;
    d.scene.traverse((o) => { if (o.isSkinnedMesh) mesh = o; });
    const bones = mesh.skeleton.bones;
    const hips = bones.find((b) => b.name === 'hips');
    const shinL = bones.find((b) => b.name === 'shinL');
    const shinR = bones.find((b) => b.name === 'shinR');
    const wp = new d.THREE.Vector3();
    hips.getWorldPosition(wp);
    const kneeL = new d.THREE.Vector3();
    shinL.getWorldPosition(kneeL);
    const kneeR = new d.THREE.Vector3();
    shinR.getWorldPosition(kneeR);
    // McGrot's actor faces (+sin yaw, +cos yaw) — the OPPOSITE of the
    // street's (-sin yaw, -cos yaw) that CLAUDE.md documents (AGENTS.md §
    // invariants). Confirmed by walking the actor and sampling travel,
    // which needs no convention: `facingAgreesWithPlusSinCos = 1.0000`.
    const fx = Math.sin(a.yaw), fz = Math.cos(a.yaw);
    const px = -fz, pz = fx;
    const along = (p) => (p.x - wp.x) * fx + (p.z - wp.z) * fz;
    const seatGroup = d.scene.getObjectByName(`seat:${anchorId}`);
    const b3 = seatGroup ? new d.THREE.Box3().setFromObject(seatGroup) : null;
    const centre = b3 ? { x: (b3.min.x + b3.max.x) / 2, y: (b3.min.y + b3.max.y) / 2, z: (b3.min.z + b3.max.z) / 2 } : null;
    return {
      hip: { x: wp.x, y: wp.y, z: wp.z },
      kneeAlong: (along(kneeL) + along(kneeR)) / 2,
      box: b3 ? { min: { x: b3.min.x, y: b3.min.y, z: b3.min.z }, max: { x: b3.max.x, y: b3.max.y, z: b3.max.z } } : null,
      // The box's AABB centroid coincides with the true centroid of the
      // holder's own (Y-rotated) footprint, whatever that rotation is —
      // rotation about a shape's own centroid does not move it. So this is
      // the built ledge's real world position, not a re-derived one.
      lateralFromCentre: centre ? (wp.x - centre.x) * px + (wp.z - centre.z) * pz : null,
      alongFromCentre: centre ? (wp.x - centre.x) * fx + (wp.z - centre.z) * fz : null,
    };
  }, { anchorId, sit });

  const rows = [];
  for (const id of ['wall', 'kerb']) {
    rows.push({ id, seated: await measure(id, true), standing: await measure(id, false) });
  }

  // THE CHECK THAT WOULD HAVE CAUGHT F1 (§ F10): the knee's offset from the
  // hip, projected on the actor's facing, required POSITIVE — a backward
  // thigh sign puts this negative regardless of where the ledge sits, which
  // is exactly the fault the old hip-only check could not see (the hip has
  // zero horizontal offset in every pose, § F1). Measured at full sit:
  // ~0.34 m forward, both anchors.
  const KNEE_MIN = 0.15; // comfortably between 0 (no swing) and the ~0.34 m measured
  const kneeBad = rows.filter((r) => r.seated.kneeAlong <= KNEE_MIN);
  check('the seated knee sits forward of the hip, at both sitting anchors',
    kneeBad.length === 0,
    rows.map((r) => `${r.id} knee-along-facing=${r.seated.kneeAlong.toFixed(3)}`).join(' / '));

  // CONTROL: standing at the same anchor. The rest pose has (near) zero
  // thigh rotation, so this metric reads close to zero rather than
  // positive — proving the check is reading the SIT pose's thigh swing,
  // not some fixed property of the rig or the anchor.
  const KNEE_STAND_TOL = 0.05;
  const kneeControlBad = rows.filter((r) => Math.abs(r.standing.kneeAlong) > KNEE_STAND_TOL);
  check('standing knee stays near the hip, at both sitting anchors (control)',
    kneeControlBad.length === 0,
    rows.map((r) => `${r.id} standing knee-along-facing=${r.standing.kneeAlong.toFixed(3)}`).join(' / '));

  // THE LEDGE-PLACEMENT CHECKS G3c ORIGINALLY WROTE — honest, and kept:
  // they prove the ledge is built at the anchor and that the sit state
  // applies its drop. What changed is the SPEC each asserts, not their
  // job. Lateral (across the seat, perpendicular to facing) is unaffected
  // by G3e's along-facing offset and stays a tight centring check.
  // Along-facing can no longer be "centred" — the offset deliberately
  // moves the ledge so its FRONT edge, not its centre, sits under the
  // hip (§ F8) — so this only proves the offset exists, is behind the
  // actor (not in front, and not zero), by checking sign and a
  // comfortably-below-measured floor rather than pinning the exact
  // SEAT_DEPTH/CAP_OVERHANG arithmetic main.js itself derives it from.
  const LATERAL_TOL = 0.10;
  const ALONG_MIN = 0.15; // measured ~0.325 m; floor is well short of it
  const placementBad = rows.filter((r) => Math.abs(r.seated.lateralFromCentre) > LATERAL_TOL
    || r.seated.alongFromCentre === null || r.seated.alongFromCentre <= ALONG_MIN);
  check('the ledge is centred laterally and offset behind the anchor, at both sitting anchors',
    placementBad.length === 0,
    rows.map((r) => `${r.id} lateral=${r.seated.lateralFromCentre?.toFixed(3)} along=${r.seated.alongFromCentre?.toFixed(3)}`).join(' / '));

  // Vertical: NOT equality against the cap top (§ F10 — that "requires the
  // hip bone to sit at the stone surface", encoding the second open defect
  // as the spec). A band instead: the hip must not sink below the cap top
  // at all, and stays within a margin well short of standing's ~0.22 m
  // gap, so the band still tells seated from standing apart without
  // demanding the exact-surface reading that caused F8.
  const HIP_BAND_MIN = -0.02;
  const HIP_BAND_MAX = 0.15;
  const heightBad = rows.filter((r) => {
    if (!r.seated.box) return true;
    const d = r.seated.hip.y - r.seated.box.max.y;
    return d < HIP_BAND_MIN || d > HIP_BAND_MAX;
  });
  check('the seated hip sits at or just above the ledge top, at both sitting anchors',
    heightBad.length === 0,
    rows.map((r) => `${r.id} hip.y=${r.seated.hip.y.toFixed(2)} ledge-top=${r.seated.box ? r.seated.box.max.y.toFixed(2) : 'missing'}`).join(' / '));

  // CONTROL for the height band: standing's ~0.22 m gap (SEAT_DROP) must
  // fall OUTSIDE the same band, or the band is too loose to mean anything.
  const heightControlBad = rows.filter((r) => {
    if (!r.standing.box) return false;
    const d = r.standing.hip.y - r.standing.box.max.y;
    return d >= HIP_BAND_MIN && d <= HIP_BAND_MAX;
  });
  check('standing at the same anchor falls outside the seated height band (control)',
    heightControlBad.length === 0,
    rows.map((r) => `${r.id} standing hip.y=${r.standing.hip.y.toFixed(2)} ledge-top=${r.standing.box ? r.standing.box.max.y.toFixed(2) : 'missing'}`).join(' / '));

  check('console clean after driving the seat region',
    consoleErrors.length === 0, consoleErrors.slice(0, 3).join(' | ') || 'no errors');
}
