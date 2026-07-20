// Sanity checks for the npm tarballs: the root GitHub-NPM package and the
// @docsy/theme registry package. Fast and offline; picked up by
// test:tooling / ci:post.

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

const TAR = 'package/';

// Contract per package. Limits are ceilings, not targets -- raise them when
// the theme grows intentionally.
const PACKAGES = {
  root: {
    dir: repoRoot,
    limits: { maxFiles: 280, maxCompressedBytes: 600_000 },
    required: [
      `${TAR}package.json`,
      `${TAR}LICENSE`,
      `${TAR}theme/scripts/gen-favicons/cli.mjs`,
      `${TAR}theme/scripts/gen-favicons/index.mjs`,
      `${TAR}theme/scripts/gen-favicons/README.md`,
      `${TAR}theme/hugo.yaml`,
      `${TAR}theme/go.mod`,
      `${TAR}theme/layouts/baseof.html`,
      `${TAR}theme/assets/scss/main.scss`,
    ],
    forbiddenPrefixes: [
      `${TAR}docsy.dev/`,
      `${TAR}scripts/`,
      `${TAR}tests/`,
      `${TAR}tasks/`,
      // Registry screenshots: only the git-based channels need them.
      `${TAR}theme/images/`,
      // Ephemeral theme-prepack artifact; a failed theme pack can strand it.
      `${TAR}theme/LICENSE`,
    ],
    forbiddenSubstrings: [
      'theme/node_modules',
      'theme/package-lock.json',
      '.test.mjs',
    ],
    // Mirror of package.json "files"; keep the two in sync.
    pkgFiles: [
      'theme',
      '!theme/LICENSE',
      '!theme/images',
      '!theme/node_modules',
      '!theme/package-lock.json',
      '!theme/scripts/**/*.test.mjs',
    ],
    bin: { 'gen-favicons': 'theme/scripts/gen-favicons/cli.mjs' },
    binTarget: `${TAR}theme/scripts/gen-favicons/cli.mjs`,
  },
  '@docsy/theme': {
    dir: path.join(repoRoot, 'theme'),
    limits: { maxFiles: 280, maxCompressedBytes: 600_000 },
    required: [
      `${TAR}package.json`,
      `${TAR}LICENSE`,
      `${TAR}README.md`,
      `${TAR}scripts/gen-favicons/cli.mjs`,
      `${TAR}scripts/gen-favicons/index.mjs`,
      `${TAR}scripts/gen-favicons/README.md`,
      `${TAR}hugo.yaml`,
      `${TAR}layouts/baseof.html`,
      `${TAR}assets/scss/main.scss`,
      `${TAR}i18n/en.yaml`,
      `${TAR}static/js/tabpane-persist.js`,
    ],
    // images/, theme.toml, and go.mod serve only the git-based channels
    // (Hugo themes registry, Hugo modules), so npm clients never need them.
    forbiddenPrefixes: [`${TAR}node_modules/`, `${TAR}images/`],
    forbiddenSubstrings: [
      'package-lock.json',
      '.test.mjs',
      'theme.toml',
      'go.mod',
    ],
    // Mirror of theme/package.json "files"; keep the two in sync.
    pkgFiles: [
      'assets',
      'hugo.yaml',
      'i18n',
      'layouts',
      'scripts/gen-favicons/cli.mjs',
      'scripts/gen-favicons/index.mjs',
      'scripts/gen-favicons/README.md',
      'static',
    ],
    bin: { 'gen-favicons': 'scripts/gen-favicons/cli.mjs' },
    binTarget: `${TAR}scripts/gen-favicons/cli.mjs`,
  },
};

/** @type {Map<string, {tarballPath: string, entries: string[]}>} */
const packed = new Map();

before(() => {
  fs.mkdirSync(packDir, { recursive: true });
  for (const [name, pkg] of Object.entries(PACKAGES)) {
    const dest = path.join(packDir, name.replace(/[@/]/g, '_'));
    fs.mkdirSync(dest, { recursive: true });
    const pack = spawnSync(
      'npm',
      ['pack', '--pack-destination', dest, '--silent'],
      {
        cwd: pkg.dir,
        encoding: 'utf8',
        // npm is npm.cmd on Windows, and .cmd files require a shell.
        shell: process.platform === 'win32',
      },
    );
    assert.equal(
      pack.status,
      0,
      `npm pack exits 0 for ${name}: ${pack.stderr || pack.stdout}`,
    );

    const tgzFiles = fs.readdirSync(dest).filter((f) => f.endsWith('.tgz'));
    assert.equal(
      tgzFiles.length,
      1,
      `exactly one .tgz in ${dest} (got: ${tgzFiles.join(', ') || 'none'})`,
    );
    const tarballPath = path.join(dest, tgzFiles[0]);

    const tar = spawnSync('tar', ['-tzf', tarballPath], { encoding: 'utf8' });
    assert.equal(tar.status, 0, `tar -tzf lists ${name}: ${tar.stderr}`);
    const entries = tar.stdout.trim().split(/\r?\n/).filter(Boolean);
    assert.ok(entries.length > 0, `${name} tarball has entries`);
    packed.set(name, { tarballPath, entries });
  }
});

after(() => {
  if (fs.existsSync(packDir)) {
    fs.rmSync(packDir, { recursive: true, force: true });
  }
});

function packDiff(pkg, entries) {
  const requiredSet = new Set(pkg.required);
  const isForbidden = (entry) =>
    !requiredSet.has(entry) &&
    (pkg.forbiddenPrefixes.some((p) => entry.startsWith(p)) ||
      pkg.forbiddenSubstrings.some((f) => entry.includes(f)));
  return {
    missing: pkg.required.filter((p) => !new Set(entries).has(p)),
    extra: entries.filter(isForbidden),
  };
}

// The registry version must equal the git tag at publish time, so the
// manifests must move together: root package.json is canonical and
// theme/package.json must match (kept in sync by set-package-version).
test('root and @docsy/theme manifests declare the same version', () => {
  const version = (dir) =>
    JSON.parse(fs.readFileSync(path.join(dir, 'package.json'), 'utf8')).version;
  assert.equal(
    version(PACKAGES['@docsy/theme'].dir),
    version(PACKAGES.root.dir),
    '@docsy/theme version matches the root package version',
  );
});

test('@docsy/theme: npm pack cleans up the materialized LICENSE', () => {
  assert.ok(
    !fs.existsSync(path.join(PACKAGES['@docsy/theme'].dir, 'LICENSE')),
    'materialized LICENSE is removed after a successful pack',
  );
});

for (const [name, pkg] of Object.entries(PACKAGES)) {
  test(`${name}: package.json declares expected files and bin`, () => {
    const manifest = JSON.parse(
      fs.readFileSync(path.join(pkg.dir, 'package.json'), 'utf8'),
    );
    if (name === 'root') {
      assert.equal(manifest.private, true, 'root package is private');
    } else {
      assert.equal(manifest.name, name, 'package name');
      assert.notEqual(manifest.private, true, `${name} is publishable`);
      assert.equal(
        manifest.publishConfig?.access,
        'public',
        'publishConfig.access is public',
      );
    }
    assert.deepEqual(manifest.files, pkg.pkgFiles, 'package.json "files"');
    assert.deepEqual(manifest.bin, pkg.bin, 'package.json "bin"');
    assert.ok(
      pkg.required.includes(pkg.binTarget),
      'the gen-favicons bin target is shipped in the tarball',
    );
  });

  test(`${name}: npm pack tarball matches contract`, () => {
    const { entries } = packed.get(name);
    const { missing, extra } = packDiff(pkg, entries);
    assert.deepEqual(missing, [], 'all required entries are packed');
    assert.deepEqual(extra, [], 'only allowed entries are packed');
  });

  test(`${name}: npm pack stays within file-count and size limits`, () => {
    const { tarballPath, entries } = packed.get(name);
    assert.ok(
      entries.length <= pkg.limits.maxFiles,
      `file count ${entries.length} is within the ${pkg.limits.maxFiles} limit`,
    );
    const compressed = fs.statSync(tarballPath).size;
    assert.ok(
      compressed <= pkg.limits.maxCompressedBytes,
      `compressed size ${compressed} is within ${pkg.limits.maxCompressedBytes} bytes`,
    );
  });
}
