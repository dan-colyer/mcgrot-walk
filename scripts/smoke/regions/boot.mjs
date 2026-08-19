export async function run(ctx) {
  const { page, consoleErrors, check } = ctx;
  const info = await page.evaluate(() => ({
    buildings: window.__mcgrotsDebug.buildingCount,
    anchors: window.__mcgrotsDebug.anchorIds(),
    booted: document.body.classList.contains('booted'),
  }));

  // 41 is measured, not assumed: the footprints within MASSING_RADIUS (80 m)
  // of the Foot. If this moves, either leith.json changed or the radius did.
  check('the Foot stands up 41 real building footprints',
    info.buildings === 41, `buildingCount=${info.buildings}`);
  check('five anchors resolve',
    info.anchors.length === 5, info.anchors.join(', '));
  check('boot completes (body.booted)', info.booted, `booted=${info.booted}`);
  check('console is clean through boot',
    consoleErrors.length === 0, consoleErrors.slice(0, 3).join(' | ') || 'no errors');
}
