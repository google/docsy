// Golden-output net for the scripts.html decomposition (js-plugins spike):
// the rendered script region (everything between the footer and </body>) and
// the built js/main.js bundle stay byte-identical, modulo whitespace, across
// the refactor. Two configs: theme defaults, and a feature-rich variant that
// lights up every offline-safe loading mechanism in scripts.html.
// Refresh: node tests/fixture-site/update-scripts-goldens.mjs

import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import path from 'node:path';
import {
  buildScriptsFixtures,
  extractScriptRegion,
  goldenDir,
  mainBundlePath,
  normalize,
} from './lib/scripts-goldens.mjs';

const builds = buildScriptsFixtures();

for (const { name, build, pages } of builds) {
  test(`scripts fixture builds: ${name}`, () => {
    assert.equal(build.status, 0, `hugo build succeeds:\n${build.stderr}`);
  });

  for (const page of pages) {
    test(`scripts golden: ${name} ${page}`, () => {
      const region = extractScriptRegion(build.publicFile(page));
      assert.ok(region.length > 0, 'script region is non-empty');
      const goldenFile = `${name}--${page.replaceAll('/', '-')}.txt`;
      const golden = readFileSync(path.join(goldenDir, goldenFile), 'utf8');
      assert.equal(
        normalize(region),
        normalize(golden),
        `script region matches scripts-goldens/${goldenFile}`,
      );
    });
  }

  test(`scripts golden: ${name} js/main.js bundle`, () => {
    const bundle = build.publicFile(
      mainBundlePath(build.publicFile('index.html')),
    );
    assert.ok(bundle.length > 0, 'main.js bundle is non-empty');
    const golden = readFileSync(
      path.join(goldenDir, `${name}--main.js.txt`),
      'utf8',
    );
    assert.equal(
      normalize(bundle),
      normalize(golden),
      `bundle matches scripts-goldens/${name}--main.js.txt`,
    );
  });
}
