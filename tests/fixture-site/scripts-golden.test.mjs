// Golden-output net for the scripts.html decomposition: the rendered script
// region and every locally built script must match their goldens. Rationale
// and refresh: https://www.docsy.dev/project/quality/script-loading/

import { test } from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import path from 'node:path';
import {
  buildScriptsFixtures,
  byteGoldens,
  extractScriptRegion,
  goldenDir,
  normalize,
  scriptPath,
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

  for (const golden of byteGoldens) {
    test(`scripts golden: ${name} ${golden.name} bytes`, () => {
      const html = build.publicFile('index.html');
      const goldenFile = path.join(goldenDir, `${name}--${golden.name}.txt`);
      if (!golden.re.test(html)) {
        // Not part of this config (e.g. prism replaces click-to-copy);
        // a stale golden file would silently pin nothing.
        assert.ok(
          !existsSync(goldenFile),
          `${name} has no stale ${golden.name} golden`,
        );
        return;
      }
      const bytes = build.publicFile(scriptPath(html, golden));
      assert.ok(bytes.length > 0, `${golden.name} is non-empty`);
      // Exact bytes: normalize would also collapse whitespace inside JS
      // string literals, a real behavior change.
      assert.equal(
        bytes,
        readFileSync(goldenFile, 'utf8'),
        `bytes match scripts-goldens/${name}--${golden.name}.txt`,
      );
    });
  }
}
