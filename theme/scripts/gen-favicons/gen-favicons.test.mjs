import test from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { existsSync, mkdtempSync, readdirSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

import { hasMagick, parseSizes } from './index.mjs';

const cli = fileURLToPath(new URL('./cli.mjs', import.meta.url));
const magickSkip = hasMagick() ? false : 'ImageMagick (magick) not installed';

function run(args, cwd) {
  return spawnSync('node', [cli, ...args], { cwd, encoding: 'utf8' });
}

function seedSvg(dir) {
  const svg = join(dir, 'favicon.svg');
  writeFileSync(
    svg,
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">' +
      '<rect width="16" height="16" fill="#0099cc"/></svg>\n',
  );
  return svg;
}

function icoFrames(file) {
  const r = spawnSync('magick', ['identify', '-format', '%wx%h\n', file], {
    encoding: 'utf8',
  });
  assert.equal(r.status, 0, r.stderr);
  return r.stdout.trim().split('\n');
}

// --- parseSizes (pure) -----------------------------------------------------

test('parseSizes parses, de-dupes, and numerically sorts a size list', () => {
  assert.deepEqual(parseSizes('32,16,32,48', '--ico'), [16, 32, 48]);
});

test('parseSizes treats "none" as an empty (skip) list', () => {
  assert.deepEqual(parseSizes('none', '--png'), []);
});

test('parseSizes rejects non-positive-integer sizes', () => {
  assert.throws(() => parseSizes('16,x', '--png'), /not a positive integer/);
  assert.throws(() => parseSizes('0', '--png'), /not a positive integer/);
});

// --- CLI argument handling (no ImageMagick needed) -------------------------

test('CLI --help prints usage and exits 0', () => {
  const r = run(['--help']);
  assert.equal(r.status, 0);
  assert.match(r.stdout, /Usage: gen-favicons/);
});

test('CLI without a source argument prints usage and exits 2', () => {
  const r = run([]);
  assert.equal(r.status, 2);
  assert.match(r.stderr, /Usage: gen-favicons/);
});

test('CLI rejects an unknown option', () => {
  const r = run(['--bogus', 'favicon.svg']);
  assert.equal(r.status, 2);
  assert.match(r.stderr, /unknown option: --bogus/);
});

test('CLI rejects an invalid size value', () => {
  const r = run(['--png', 'huge', 'favicon.svg']);
  assert.equal(r.status, 2);
  assert.match(r.stderr, /not a positive integer/);
});

// --- end-to-end generation (ImageMagick-gated) -----------------------------

test(
  'CLI writes the default icon set from an SVG',
  { skip: magickSkip },
  () => {
    const dir = mkdtempSync(join(tmpdir(), 'docsy-gen-favicons-'));
    const svg = seedSvg(dir);
    const r = run([svg, dir]);
    assert.equal(r.status, 0, r.stderr);

    assert.ok(existsSync(join(dir, 'favicon.ico')), 'favicon.ico written');
    assert.ok(existsSync(join(dir, 'favicon-16x16.png')), '16px PNG written');
    assert.ok(existsSync(join(dir, 'favicon-32x32.png')), '32px PNG written');
    assert.ok(
      existsSync(join(dir, 'apple-touch-icon.png')),
      'apple-touch-icon.png written',
    );

    for (const size of ['16x16', '32x32', '48x48']) {
      assert.ok(
        icoFrames(join(dir, 'favicon.ico')).includes(size),
        `favicon.ico bundles a ${size} frame`,
      );
    }
  },
);

test(
  'CLI honors per-family size flags, including "none"',
  { skip: magickSkip },
  () => {
    const dir = mkdtempSync(join(tmpdir(), 'docsy-gen-favicons-'));
    const svg = seedSvg(dir);
    const r = run([
      '--ico',
      'none',
      '--png',
      '24,64',
      '--apple',
      '152,180',
      svg,
      dir,
    ]);
    assert.equal(r.status, 0, r.stderr);

    const files = readdirSync(dir);
    assert.ok(!files.includes('favicon.ico'), 'favicon.ico skipped via "none"');
    assert.ok(files.includes('favicon-24x24.png'), '24px PNG written');
    assert.ok(files.includes('favicon-64x64.png'), '64px PNG written');
    assert.ok(
      !files.includes('favicon-16x16.png'),
      'default PNG sizes are replaced, not merged',
    );
    // Unsized primary (largest) plus a sized companion per requested size.
    assert.ok(files.includes('apple-touch-icon.png'), 'unsized Apple icon');
    assert.ok(
      files.includes('apple-touch-icon-152x152.png'),
      '152px Apple icon',
    );
    assert.ok(
      files.includes('apple-touch-icon-180x180.png'),
      '180px Apple icon',
    );
  },
);
