// Unit tests for the Lychee check wrapper's pure helpers: GitHub-token
// resolution and byte-exact .lycheecache normalization. The lychee invocation
// itself is exercised by tests/lychee/lychee-sanity.test.mjs (needs the
// binary). See thoughtry projects/link-checking/lychee/docsy for rationale.

import { test } from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

import { resolveToken, sortCacheText } from './index.mjs';

// --- resolveToken ---

test('resolveToken prefers a token already in the environment', () => {
  let ghCalled = false;
  const token = resolveToken({
    env: { GITHUB_TOKEN: 'env-token' },
    runGh: () => {
      ghCalled = true;
      return 'gh-token';
    },
  });
  assert.equal(token, 'env-token', 'the environment token wins');
  assert.equal(ghCalled, false, 'gh is left alone when the env has a token');
});

test('resolveToken falls back to gh when the environment has none', () => {
  const token = resolveToken({ env: {}, runGh: () => 'gh-token' });
  assert.equal(token, 'gh-token', 'the gh token is used as a fallback');
});

test('resolveToken yields an empty string when no source has a token', () => {
  const token = resolveToken({ env: {}, runGh: () => '' });
  assert.equal(token, '', 'empty when unauthenticated');
});

test('resolveToken treats a blank environment token as absent', () => {
  const token = resolveToken({
    env: { GITHUB_TOKEN: '  ' },
    runGh: () => 'gh-token',
  });
  assert.equal(token, 'gh-token', 'whitespace is not a usable token');
});

// --- sortCacheText ---

test('sortCacheText orders lines and keeps one trailing newline', () => {
  assert.equal(sortCacheText('c\na\nb\n'), 'a\nb\nc\n', 'lines sorted');
});

test('sortCacheText appends a trailing newline when the input lacks one', () => {
  assert.equal(sortCacheText('b\na'), 'a\nb\n', 'output is newline-terminated');
});

test('sortCacheText is idempotent on already-sorted text', () => {
  const sorted = 'a\nb\nc\n';
  assert.equal(
    sortCacheText(sorted),
    sorted,
    'sorting a sorted cache is a no-op',
  );
});

test('sortCacheText returns empty for empty input', () => {
  assert.equal(sortCacheText(''), '', 'an empty cache stays empty');
});

test('sortCacheText sorts by byte value (C locale), not UTF-16 code unit', () => {
  // U+E000 (private-use, BMP) is the single UTF-16 unit 0xE000; U+1F600 is the
  // surrogate pair 0xD83D 0xDE00. A naive String `<` sort orders by the lead
  // surrogate (0xD83D < 0xE000) and would put U+1F600 first; LC_ALL=C / UTF-8
  // byte order puts U+E000 first. Buffer.compare matches the committed cache.
  const a = '\uE000,200,1\n';
  const b = '\u{1F600},200,1\n';
  assert.equal(sortCacheText(b + a), a + b, 'byte order keeps U+E000 first');
});

// --- CLI: --help short-circuits before the lychee check ---

test('--help prints usage and exits 0 without needing lychee', () => {
  const script = fileURLToPath(new URL('./index.mjs', import.meta.url));
  const r = spawnSync(process.execPath, [script, '--help'], {
    encoding: 'utf8',
  });
  assert.equal(r.status, 0, 'help exits 0');
  assert.match(r.stdout, /Usage: lychee-norm-cache/, 'help prints usage');
});
