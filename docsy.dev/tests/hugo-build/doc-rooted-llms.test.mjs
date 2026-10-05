// The doc-rooted variant (config/doc-rooted) makes home link-only and gives the
// docs landing page, which then publishes each language's root, the LLMS
// output through a cascade. Pins what that cascade must produce: one llms.txt
// per language root, the directive on the root pages, and no index anywhere
// else, since a page's `outputs` replace its kind's list and the cascade
// restates `_default`'s section formats (docsy/docsy#2834).

import test from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import {
  existsSync,
  mkdirSync,
  mkdtempSync,
  readFileSync,
  rmSync,
} from 'node:fs';
import { join, relative } from 'node:path';
import { globSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const siteDir = fileURLToPath(new URL('../../', import.meta.url));
const tmpDir = join(siteDir, 'tmp');

// Builds the doc-rooted variant to a throwaway destination under the gitignored
// tmp/, so the published public/ that test:base produces stays intact.
function buildDocRooted() {
  mkdirSync(tmpDir, { recursive: true });
  const destDir = mkdtempSync(join(tmpDir, 'doc-rooted-llms-'));
  const res = spawnSync('npm run build -- -d ' + destDir, {
    cwd: siteDir,
    shell: true,
    encoding: 'utf8',
    env: { ...process.env, TD_BUILD_CTX: 'doc-rooted' },
  });
  return { res, destDir, output: `${res.stdout ?? ''}\n${res.stderr ?? ''}` };
}

test('doc-rooted variant publishes llms.txt at each language root only', (t) => {
  const { res, destDir, output } = buildDocRooted();
  t.after(() => rmSync(destDir, { recursive: true, force: true }));
  assert.equal(res.status, 0, `doc-rooted build exits 0; output:\n${output}`);
  assert.ok(
    !/WARN/.test(output),
    `doc-rooted build is warning-free; output:\n${output}`,
  );

  const indexes = globSync('**/llms.txt', { cwd: destDir }).sort();
  assert.deepEqual(indexes, ['fr/llms.txt', 'llms.txt']);
  for (const [index, home] of [
    ['llms.txt', 'index.md'],
    ['fr/llms.txt', 'fr/index.md'],
  ]) {
    const content = readFileSync(join(destDir, index), 'utf8');
    assert.ok(
      content.startsWith('# Docsy\n'),
      `${index} opens with the site title`,
    );
    assert.ok(
      content.includes(`- [Home page](http://localhost/${home})`),
      `${index} links the root Markdown alternate as the home page`,
    );
  }

  for (const [page, index] of [
    ['index.html', '/llms.txt'],
    ['fr/index.html', '/fr/llms.txt'],
  ]) {
    assert.ok(
      readFileSync(join(destDir, page), 'utf8').includes(
        `For AI agents: a documentation index is available at ${index}`,
      ),
      `${page} directive points at ${index}`,
    );
  }

  // The landing page keeps the section formats the cascade restates.
  for (const file of [
    'index.html',
    'index.xml',
    'index.md',
    '_print/index.html',
  ]) {
    assert.ok(existsSync(join(destDir, file)), `root publishes ${file}`);
  }
  t.diagnostic(`Inspected ${relative(siteDir, destDir)}`);
});
