// Visual goldens for chrome regions: pixel-compares element crops of the
// fixture site against committed, platform-keyed goldens. Catches the CSS
// side of the semantic-classes migration (google/docsy#783), which the
// markup goldens can't see: a class swap whose styles fail to follow shows
// up here as a pixel diff while the markup diff stays clean.
//
// Goldens are keyed by process.platform: rendering differs across OSs, so
// each platform compares against its own goldens; CI (linux) is the
// authoritative set. Refresh: npm run update:visual-goldens.

import { test, before, after } from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, mkdirSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { PNG } from 'pngjs';
import { buildFixture } from '../fixture-site/lib/markup-goldens.mjs';
import {
  compareToGolden,
  launchBrowser,
  serveDir,
  shootRegion,
} from './lib/harness.mjs';

const here = path.dirname(fileURLToPath(import.meta.url));
const goldenDir = path.join(here, 'goldens', process.platform);
const outDir = path.resolve(here, '../../tmp/visual');
const update = !!process.env.UPDATE_VISUAL_GOLDENS;

const viewports = {
  desktop: { width: 1280, height: 800 },
  mobile: { width: 375, height: 667 },
};

// One entry per golden-tracked region; grows with the migration. Padded
// element crops localize a failure to a region; the selector-less full-page
// entry is the coarse safety net for everything the crops don't track.
const regions = [
  {
    name: 'breadcrumb',
    path: 'docs/getting-started/install/',
    selector: 'nav[aria-label="breadcrumb"]',
  },
  { name: 'page', path: 'docs/getting-started/install/' },
];

const shots = regions.flatMap((region) =>
  Object.entries(viewports).flatMap(([viewportName, viewport]) =>
    ['light', 'dark'].map((scheme) => ({
      name: `${region.name}-${viewportName}-${scheme}`,
      region,
      viewport,
      scheme,
    })),
  ),
);

let server, browser;

// No golden set for this platform (e.g. Windows): skip rather than fail.
// Creating a local, uncommitted baseline opts a platform in:
// npm run update:visual-goldens.
const optedOut = !update && !existsSync(goldenDir);

before(async () => {
  if (optedOut) return;
  const build = buildFixture();
  [server, browser] = await Promise.all([
    serveDir(path.join(build.site, 'public')),
    launchBrowser(),
  ]);
});

after(async () => {
  await Promise.all([browser?.close(), server?.close()]);
});

for (const { name, region, viewport, scheme } of shots) {
  test(
    `visual golden: ${name}`,
    {
      skip:
        optedOut &&
        `no ${process.platform} goldens; see tests/visual/README.md`,
    },
    async () => {
      const actual = await shootRegion(browser, {
        url: `${server.origin}/${region.path}`,
        selector: region.selector,
        viewport,
        scheme,
      });
      if (update) {
        mkdirSync(goldenDir, { recursive: true });
        const file = path.join(goldenDir, `${name}.png`);
        writeFileSync(file, PNG.sync.write(actual));
        console.log(`wrote ${path.relative(process.cwd(), file)}`);
        return;
      }
      const failure = compareToGolden(
        name,
        actual,
        path.join(goldenDir, `${name}.png`),
        outDir,
      );
      assert.equal(failure, null, `${name} matches its golden`);
    },
  );
}
