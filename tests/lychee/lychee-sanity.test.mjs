// Sanity tests for the Lychee link checker and our use of it, ahead of the
// htmltest -> Lychee switch (see thoughtry projects/link-checking/lychee-docsy).
//
// They pin the behavior the switch depends on: Lychee is installed, and it
// passes/fails local paths, local fragments, external URLs, and external
// fragments as expected. The external cases target docsy.dev itself -- a site we
// control -- so the "good" target is stable; a canary test fails loudly if that
// target ever moves. Set LYCHEE_SANITY_NO_NET=1 to skip the network cases.

import { test, before, after } from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { mkdtempSync, mkdirSync, writeFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';

const noNet = process.env.LYCHEE_SANITY_NO_NET === '1';

// A stable, controlled external target on our own site.
const DOCSY_URL = 'https://www.docsy.dev/docs/get-started/';
const DOCSY_FRAGMENT = 'installation-options'; // a get-started heading id

// Inline fixtures, written to a temp dir at setup.
const FILES = {
  'target.html': '<!doctype html><meta charset=utf-8><h2 id="known">known</h2>',
  'links-ok.html':
    '<a href="target.html">path</a> <a href="target.html#known">fragment</a>',
  'links-bad-path.html': '<a href="missing.html">missing path</a>',
  'links-bad-fragment.html': '<a href="target.html#absent">absent fragment</a>',
  // A Hugo-style pretty URL: the page lives at pretty/index.html but is linked
  // as pretty/. Used by the --index-files fragment tests below.
  'pretty/index.html': '<!doctype html><meta charset=utf-8><h2 id="pa">pa</h2>',
  'links-pretty-fragment.html': '<a href="pretty/#pa">pretty fragment</a>',
  'external-ok.html': `<a href="${DOCSY_URL}">url</a> <a href="${DOCSY_URL}#${DOCSY_FRAGMENT}">fragment</a>`,
  'external-bad-url.html':
    '<a href="https://www.docsy.dev/this-page-does-not-exist-canary/">missing</a>',
  'external-bad-fragment.html': `<a href="${DOCSY_URL}#absent-fragment-canary">absent</a>`,
};

let dir;

before(() => {
  dir = mkdtempSync(path.join(tmpdir(), 'lychee-sanity-'));
  for (const [rel, html] of Object.entries(FILES)) {
    const abs = path.join(dir, rel);
    mkdirSync(path.dirname(abs), { recursive: true });
    writeFileSync(abs, html);
  }
});

after(() => rmSync(dir, { recursive: true, force: true }));

const fx = (f) => path.join(dir, f);

// Run lychee with JSON output; returns { status, json, stderr }.
function runLychee(args) {
  const r = spawnSync(
    'lychee',
    ['--format', 'json', '--no-progress', ...args],
    { encoding: 'utf8' },
  );
  let json = null;
  try {
    json = JSON.parse(r.stdout);
  } catch {
    /* non-JSON output (e.g. --version) */
  }
  return { status: r.status, json, stderr: r.stderr };
}

const OFFLINE = ['--offline', '--include-fragments'];
const ONLINE = ['--include-fragments'];

test('lychee binary is installed and reports a version', () => {
  const r = spawnSync('lychee', ['--version'], { encoding: 'utf8' });
  assert.equal(r.status, 0, 'lychee --version exits 0 (install lychee if not)');
  assert.match(
    r.stdout,
    /lychee \d+\.\d+/,
    'a lychee version string is printed',
  );
});

test('a valid local path link passes', () => {
  const r = runLychee([...OFFLINE, fx('links-ok.html')]);
  assert.equal(r.json.errors, 0, 'valid local links are reachable');
});

test('a broken local path link is reported', () => {
  const r = runLychee([...OFFLINE, fx('links-bad-path.html')]);
  assert.ok(r.json.errors >= 1, 'a missing local target is an error');
  assert.notEqual(r.status, 0, 'lychee exits non-zero on a broken local link');
});

test('a valid local fragment passes', () => {
  const r = runLychee([...OFFLINE, fx('links-ok.html')]);
  assert.equal(r.json.errors, 0, 'a present local fragment is reachable');
});

test('a broken local fragment is reported', () => {
  const r = runLychee([...OFFLINE, fx('links-bad-fragment.html')]);
  assert.ok(r.json.errors >= 1, 'a missing local fragment is an error');
});

test(
  'valid external URL and fragment on docsy.dev pass (canary: fails if the target moves)',
  { skip: noNet ? 'network disabled' : false },
  () => {
    const r = runLychee([...ONLINE, fx('external-ok.html')]);
    assert.equal(
      r.json.errors,
      0,
      `${DOCSY_URL} and its #${DOCSY_FRAGMENT} anchor still resolve`,
    );
  },
);

test(
  'a broken external URL is reported',
  { skip: noNet ? 'network disabled' : false },
  () => {
    const r = runLychee([...ONLINE, fx('external-bad-url.html')]);
    assert.ok(r.json.errors >= 1, 'a 404 external URL is an error');
  },
);

test(
  'a broken external fragment is reported',
  { skip: noNet ? 'network disabled' : false },
  () => {
    const r = runLychee([...ONLINE, fx('external-bad-fragment.html')]);
    assert.ok(r.json.errors >= 1, 'a missing external fragment is an error');
  },
);

// Hugo emits pretty URLs (`/foo/`) backed by `foo/index.html`. Offline, Lychee
// resolves a directory link to its index file only when told which index file
// names to use, via `--index-files`. With it, a fragment on a pretty-URL page
// resolves correctly; without it, lychee checks the directory path and reports
// the fragment missing. otel.io's generated lychee.toml sets this (and
// `include_fragments`) for the same reason. See lychee #1751, #1718.
test('offline fragment check resolves a Hugo pretty-URL directory via --index-files', () => {
  const r = runLychee([
    ...OFFLINE,
    '--index-files',
    'index.html',
    '--root-dir',
    dir,
    fx('links-pretty-fragment.html'),
  ]);
  assert.equal(
    r.json.errors,
    0,
    'a fragment on a pretty-URL page is reachable',
  );
});

// Guard the failure mode: without --index-files, the same link is reported
// missing. This pins *why* the option is required, so a future lychee that
// resolves directory indexes by default turns this into a green-light signal.
test('without --index-files, a pretty-URL fragment is (still) reported missing', () => {
  const r = runLychee([
    ...OFFLINE,
    '--root-dir',
    dir,
    fx('links-pretty-fragment.html'),
  ]);
  assert.ok(
    r.json.errors >= 1,
    'documents that --index-files is required for pretty-URL fragments',
  );
});
