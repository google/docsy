// Visual goldens for chrome regions: pixel-compares element crops of the
// fixture site against committed, platform-keyed goldens. Catches the CSS
// side of the semantic-classes migration (google/docsy#783), which the
// markup goldens can't see: a class swap whose styles fail to follow shows
// up here as a pixel diff while the markup diff stays clean.
//
// Platform policy and refresh flows: tests/visual/README.md.

import { test, before, after } from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, mkdirSync, readdirSync, writeFileSync } from 'node:fs';
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

// Update mode in CI would write goldens instead of comparing and exit 0 —
// a silent bypass of the authoritative net. GITHUB_ACTIONS is checked
// because CI is mutable from a workflow step; GITHUB_-prefixed vars are
// not.
if (update && (process.env.CI || process.env.GITHUB_ACTIONS)) {
  throw new Error('update mode is refused in CI');
}

const viewports = {
  desktop: { width: 1280, height: 800 },
  mobile: { width: 375, height: 667 },
};

// One entry per golden-tracked region; grows with the migration. The
// single-crumb variant is display:none (no element box), so the home of
// its visual proof is the docs/ page shot.
const regions = [
  {
    name: 'breadcrumb',
    path: 'docs/getting-started/install/',
    selector: 'nav[aria-label="breadcrumb"]',
  },
  {
    name: 'breadcrumb-mid',
    path: 'docs/getting-started/',
    selector: 'nav[aria-label="breadcrumb"]',
  },
  { name: 'page', path: 'docs/getting-started/install/' },
  { name: 'page-single', path: 'docs/' },
  // Term page: _taxonomy.scss couples article-teaser styling to breadcrumb
  // classes; only a term shot can see that mapping regress.
  { name: 'page-term', path: 'tags/setup/' },
];

const shots = regions.flatMap((region) =>
  Object.entries(viewports).flatMap(([viewportName, viewport]) =>
    ['light', 'dark'].map((scheme) => ({
      name: `${region.name}-${viewportName}-${scheme}`,
      // Golden path: one subfolder per region, so the set stays browsable
      // as the migration adds regions.
      rel: path.join(region.name, `${viewportName}-${scheme}.png`),
      region,
      viewport,
      scheme,
    })),
  ),
);

let server, browser;
let compared = 0;

// Linux is the authoritative set (CI enforces it): a missing golden dir
// there must fail loud, not skip — all-skipped exits 0, so the skip path
// would let a PR delete the goldens and stay green.
const authoritative =
  process.platform === 'linux' ||
  !!process.env.CI ||
  !!process.env.GITHUB_ACTIONS;
const optedOut = !update && !authoritative && !existsSync(goldenDir);

before(async () => {
  if (optedOut) return;
  // Own fixture name: buildSite starts by wiping its directory, so sharing
  // markup-golden's would race a concurrent test:repo run. Resources are
  // retained as each settles: with Promise.all, a browser-launch rejection
  // would strand the already-listening server and hang the run.
  const build = buildFixture('visual-goldens');
  server = await serveDir(path.join(build.site, 'public'));
  browser = await launchBrowser();
});

after(async () => {
  await Promise.all([browser?.close(), server?.close()]);
  // Execution guard: filename bijection can't see quarantined (skipped)
  // shot tests — on the authoritative platform every comparison must
  // actually have run.
  if (!update && !optedOut && authoritative) {
    assert.equal(compared, shots.length, 'every shot comparison executed');
  }
});

for (const { name, rel, region, viewport, scheme } of shots) {
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
      const file = path.join(goldenDir, rel);
      if (update) {
        mkdirSync(path.dirname(file), { recursive: true });
        writeFileSync(file, PNG.sync.write(actual));
        console.log(`wrote ${path.relative(process.cwd(), file)}`);
        return;
      }
      const failure = compareToGolden(name, actual, file, outDir);
      compared += 1;
      assert.equal(failure, null, `${name} matches its golden`);
    },
  );
}

// Structural guard: the golden set mirrors the shot list exactly, so a
// deleted golden, an emptied region list, or a stale extra file fails loud.
test(
  'visual goldens: golden files match the shot list',
  { skip: optedOut && 'no local goldens' },
  () => {
    assert.ok(shots.length > 0, 'shot list is non-empty');
    if (update) return;
    const tracked = shots.map(({ rel }) => rel).sort();
    const committed = readdirSync(goldenDir, { recursive: true })
      .filter((f) => f.endsWith('.png'))
      .sort();
    assert.deepEqual(
      committed,
      tracked,
      `goldens/${process.platform}/ matches the shot list`,
    );
  },
);
