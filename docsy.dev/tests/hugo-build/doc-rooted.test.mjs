// The doc-rooted variant (config/doc-rooted), built once in `shared` chrome
// mode, pinned on two fronts:
// - llms.txt: the variant's cascade gives the docs landing the LLMS output. A
//   page's `outputs` replace its kind's list, so the cascade restates
//   `_default`'s section formats and must track them (docsy/docsy#2834).
// - chrome: the navbar and footer donor page is each language's root page, the
//   docs landing, since the link-only home renders nothing. Before 0.19 this
//   build exited 0 with no navbar or footer anywhere (docsy/docsy#2875's
//   companion defect). Theme-level fixture: tests/fixture-site/chrome-doc-rooted.

import test, { after } from 'node:test';
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

// Builds to a throwaway destination, so the published public/ that test:base
// produces stays intact. One build serves every test in this file.
let built;
function docRooted() {
  if (built) return built;
  mkdirSync(tmpDir, { recursive: true });
  const destDir = mkdtempSync(join(tmpDir, 'doc-rooted-'));
  const res = spawnSync(`npm run build -- -d "${destDir}"`, {
    cwd: siteDir,
    shell: true,
    encoding: 'utf8',
    env: {
      ...process.env,
      TD_BUILD_CTX: 'doc-rooted',
      HUGO_PARAMS_TD_CHROME: 'shared',
      BASE_URL: 'http://localhost',
    },
  });
  const output = `${res.stdout ?? ''}\n${res.stderr ?? ''}`;
  assert.equal(res.status, 0, `doc-rooted build exits 0; output:\n${output}`);
  assert.ok(
    !/WARN/.test(output),
    `doc-rooted build is warning-free; output:\n${output}`,
  );
  built = {
    destDir,
    file: (rel) => readFileSync(join(destDir, rel), 'utf8'),
  };
  return built;
}
after(() => {
  if (built) rmSync(built.destDir, { recursive: true, force: true });
});

const chrome = {
  navbar: (h) => /class="td-navbar/.test(h),
  footer: (h) => /class="td-footer/.test(h),
  placeholder: (h, region, donor) =>
    new RegExp(
      `class="td-chrome-placeholder" data-chrome-donor="${donor}" data-chrome-region="${region}"`,
    ).test(h),
};

test('doc-rooted variant publishes llms.txt at each language root only', () => {
  const b = docRooted();
  const llmsFiles = globSync('**/llms.txt', { cwd: b.destDir })
    .map((f) => f.split(sep).join('/'))
    .sort();
  assert.deepEqual(llmsFiles, ['fr/llms.txt', 'llms.txt']);
  for (const [llms, home] of [
    ['llms.txt', 'index.md'],
    ['fr/llms.txt', 'fr/index.md'],
  ]) {
    const content = b.file(llms);
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
      b.file(page).includes(`For AI agents: the site's llms.txt is at ${llms}`),
      `${page} directive points at ${llms}`,
    );
  }

  for (const file of [
    'index.html',
    'index.xml',
    'index.md',
    '_print/index.html',
  ]) {
    assert.ok(existsSync(join(b.destDir, file)), `root publishes ${file}`);
  }
});

test('doc-rooted shared build keeps the navbar and footer on each language root', () => {
  const b = docRooted();
  for (const [root, donor] of [
    ['index.html', '/'],
    ['fr/index.html', '/fr/'],
  ]) {
    const h = b.file(root);
    assert.ok(chrome.navbar(h), `navbar kept on the root page ${root}`);
    assert.ok(chrome.footer(h), `footer kept on the root page ${root}`);
    assert.ok(
      !chrome.placeholder(h, 'navbar', donor) &&
        !chrome.placeholder(h, 'footer', donor),
      `root page ${root} carries no chrome placeholder`,
    );
  }

  for (const inner of [
    'content/adding-content/index.html',
    '_print/index.html',
  ]) {
    const h = b.file(inner);
    assert.ok(!chrome.navbar(h) && !chrome.footer(h), `${inner} drops both`);
    assert.ok(
      chrome.placeholder(h, 'navbar', '/') &&
        chrome.placeholder(h, 'footer', '/'),
      `${inner} placeholders name the root as donor page`,
    );
  }
});
