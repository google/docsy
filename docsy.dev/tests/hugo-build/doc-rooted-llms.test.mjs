// The doc-rooted variant's cascade (config/doc-rooted) gives the docs landing
// page the LLMS output. A page's `outputs` replace its kind's list, so the
// cascade restates `_default`'s section formats and must track them; this
// pins what it must produce (docsy/docsy#2834).

import test from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import {
  existsSync,
  globSync,
  mkdirSync,
  mkdtempSync,
  readFileSync,
  rmSync,
} from 'node:fs';
import { join, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const siteDir = fileURLToPath(new URL('../../', import.meta.url));
const tmpDir = join(siteDir, 'tmp');

// Throwaway destination under the gitignored tmp/, so the published public/
// that test:base produces stays intact.
function buildDocRooted() {
  mkdirSync(tmpDir, { recursive: true });
  const destDir = mkdtempSync(join(tmpDir, 'doc-rooted-llms-'));
  const res = spawnSync(`npm run build -- -d "${destDir}"`, {
    cwd: siteDir,
    shell: true,
    encoding: 'utf8',
    env: {
      ...process.env,
      TD_BUILD_CTX: 'doc-rooted',
      BASE_URL: 'http://localhost',
    },
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

  const llmsFiles = globSync('**/llms.txt', { cwd: destDir })
    .map((f) => f.split(sep).join('/'))
    .sort();
  assert.deepEqual(llmsFiles, ['fr/llms.txt', 'llms.txt']);
  for (const [llms, home] of [
    ['llms.txt', 'index.md'],
    ['fr/llms.txt', 'fr/index.md'],
  ]) {
    const content = readFileSync(join(destDir, llms), 'utf8');
    assert.ok(
      content.startsWith('# Docsy\n'),
      `${llms} opens with the site title`,
    );
    assert.ok(
      content.includes(`- [Home page](http://localhost/${home})`),
      `${llms} links the root Markdown version as the home page`,
    );
  }

  for (const [page, llms] of [
    ['index.html', '/llms.txt'],
    ['fr/index.html', '/fr/llms.txt'],
  ]) {
    assert.ok(
      readFileSync(join(destDir, page), 'utf8').includes(
        `For AI agents: the site's llms.txt is at ${llms}`,
      ),
      `${page} directive points at ${llms}`,
    );
  }

  for (const file of [
    'index.html',
    'index.xml',
    'index.md',
    '_print/index.html',
  ]) {
    assert.ok(existsSync(join(destDir, file)), `root publishes ${file}`);
  }
});
