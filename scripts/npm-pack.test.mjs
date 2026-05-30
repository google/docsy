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

const TAR = 'package/';
const SCRIPTS = `${TAR}scripts/`;

// Spot-check paths inside the tarball (package/ prefix).
const REQUIRED = [
  `${TAR}package.json`,
  `${TAR}LICENSE`,
  `${SCRIPTS}mkdirp-hugo-mod.js`,
  `${TAR}theme/hugo.yaml`,
  `${TAR}theme/go.mod`,
  `${TAR}theme/layouts/baseof.html`,
  `${TAR}theme/assets/scss/main.scss`,
];

const FORBIDDEN_PREFIXES = [
  `${TAR}docsy.dev/`,
  `${SCRIPTS}`,
  `${TAR}tests/`,
  `${TAR}tasks/`,
];

const FORBIDDEN_SUBSTRINGS = ['theme/node_modules', 'theme/package-lock.json'];

const REQUIRED_SET = new Set(REQUIRED);

// package.json "files" entries derived from the lists above.
const PKG_FILES = [
  'theme',
  ...FORBIDDEN_SUBSTRINGS.map((s) => `!${s}`),
  ...REQUIRED.filter((p) => p.startsWith(SCRIPTS)).map((p) =>
    p.slice(TAR.length),
  ),
];

let tarballPath;
/** @type {string[]} */
let entries;

function isForbidden(entry) {
  if (REQUIRED_SET.has(entry)) return false;
  return (
    FORBIDDEN_PREFIXES.some((p) => entry.startsWith(p)) ||
    FORBIDDEN_SUBSTRINGS.some((f) => entry.includes(f))
  );
}

function packDiff(packed) {
  const set = new Set(packed);
  return {
    missing: REQUIRED.filter((p) => !set.has(p)),
    extra: packed.filter(isForbidden),
  };
}

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
  assert.equal(pkg.private, true, 'package is private');
  assert.deepEqual(pkg.files, PKG_FILES, 'package.json "files"');
});

test('npm pack tarball matches GitHub-NPM contract', () => {
  const { missing, extra } = packDiff(entries);
  assert.deepEqual(missing, [], 'missing from npm pack tarball');
  assert.deepEqual(extra, [], 'extra in npm pack tarball');
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
