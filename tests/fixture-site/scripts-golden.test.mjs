// Golden-output net for the scripts.html decomposition: the rendered script
// region and the built js/main.js bundle must match their goldens across
// the refactor. Fixtures, region extraction, and comparison form:
// lib/scripts-goldens.mjs.
// Refresh: npm run update:scripts-goldens

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
    // Exact bytes: the bundle is data, and normalize would also collapse
    // whitespace inside JS string literals, a real behavior change.
    assert.equal(
      bundle,
      golden,
      `bundle matches scripts-goldens/${name}--main.js.txt`,
    );
  });
}
