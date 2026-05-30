// Sanity checks for the GitHub-NPM tarball (package.json "files").
// Fast and offline; picked up by test:tooling / ci:post.

import test, { after, before } from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const repoRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  '..',
);
const packDir = path.join(repoRoot, 'tmp', 'npm-pack');

// Ceilings — not targets. Raise when the theme grows intentionally.
const LIMITS = {
  maxFiles: 280,
  maxCompressedBytes: 1_200_000,
};

const REQUIRED = [
  'package/package.json',
  'package/LICENSE',
  'package/theme/hugo.yaml',
  'package/theme/go.mod',
  'package/theme/layouts/baseof.html',
  'package/theme/assets/scss/main.scss',
];

const FORBIDDEN_PREFIXES = [
  'package/docsy.dev/',
  'package/scripts/',
  'package/tests/',
  'package/tasks/',
];

const FORBIDDEN_SUBSTRINGS = ['theme/node_modules', 'theme/package-lock.json'];

let tarballPath;
/** @type {string[]} */
let entries;

before(() => {
  fs.mkdirSync(packDir, { recursive: true });
  const pack = spawnSync(
    'npm',
    ['pack', '--pack-destination', packDir, '--silent'],
    { cwd: repoRoot, encoding: 'utf8' },
  );
  assert.equal(
    pack.status,
    0,
    `npm pack failed: ${pack.stderr || pack.stdout}`,
  );

  const tgzFiles = fs.readdirSync(packDir).filter((f) => f.endsWith('.tgz'));
  assert.equal(
    tgzFiles.length,
    1,
    `expected one .tgz in ${packDir}, got: ${tgzFiles.join(', ')}`,
  );
  tarballPath = path.join(packDir, tgzFiles[0]);

  const tar = spawnSync('tar', ['-tzf', tarballPath], { encoding: 'utf8' });
  assert.equal(tar.status, 0, `tar -tzf failed: ${tar.stderr}`);
  entries = tar.stdout.trim().split('\n').filter(Boolean);
});

after(() => {
  if (fs.existsSync(packDir)) {
    fs.rmSync(packDir, { recursive: true, force: true });
  }
});

test('package.json declares private and theme-only files with exclusions', () => {
  const pkg = JSON.parse(
    fs.readFileSync(path.join(repoRoot, 'package.json'), 'utf8'),
  );
  assert.equal(pkg.private, true);
  assert.ok(Array.isArray(pkg.files));
  assert.ok(pkg.files.includes('theme'));
  assert.ok(pkg.files.includes('!theme/node_modules'));
  assert.ok(pkg.files.includes('!theme/package-lock.json'));
});

test('npm pack includes essential GitHub-NPM paths', () => {
  const set = new Set(entries);
  for (const p of REQUIRED) {
    assert.ok(set.has(p), `missing ${p}`);
  }
});

test('npm pack excludes maintainer and locally-installed paths', () => {
  for (const entry of entries) {
    for (const prefix of FORBIDDEN_PREFIXES) {
      assert.ok(
        !entry.startsWith(prefix),
        `forbidden prefix ${prefix} matched by ${entry}`,
      );
    }
    for (const fragment of FORBIDDEN_SUBSTRINGS) {
      assert.ok(
        !entry.includes(fragment),
        `forbidden fragment ${fragment} in ${entry}`,
      );
    }
  }
});

test('npm pack stays within file-count and compressed-size limits', () => {
  assert.ok(
    entries.length <= LIMITS.maxFiles,
    `file count ${entries.length} > ${LIMITS.maxFiles}`,
  );
  const compressed = fs.statSync(tarballPath).size;
  assert.ok(
    compressed <= LIMITS.maxCompressedBytes,
    `compressed ${compressed} bytes > ${LIMITS.maxCompressedBytes}`,
  );
});
