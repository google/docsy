// Tests for the Lychee refcache helper (list / prune / summary). See the
// maintainers' link-checking notes (internal ref `link-checking/lychee`; ask
// the dev lead) for rationale.

import { test } from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { mkdtempSync, rmSync, symlinkSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

import {
  parseArgs,
  parseCache,
  resolvePruneCount,
  selectOldest,
  computeStats,
  formatStats,
  runOps,
} from './index.mjs';

const DAY = 86400;
const NOW = 1_000_000_000; // fixed reference epoch (seconds)

// Build a cache line: `URL,STATUS,UNIX_TIMESTAMP`.
const line = (url, status, ageDays) =>
  `${url},${status},${NOW - ageDays * DAY}`;

const SAMPLE = [
  line('https://a.example/', 200, 0),
  line('https://b.example/', 200, 10),
  line('https://c.example/', 404, 60),
  line('https://d.example/', 200, 200),
  line('https://e.example/', 301, 400),
].join('\n');

// --- parseArgs ---

test('parseArgs preserves flag order across list and prune', () => {
  assert.deepEqual(parseArgs(['-l', '2', '-p', '1']).ops, [
    { kind: 'list', value: '2' },
    { kind: 'prune', value: '1' },
  ]);
  assert.deepEqual(parseArgs(['-p', '1', '-l', '2']).ops, [
    { kind: 'prune', value: '1' },
    { kind: 'list', value: '2' },
  ]);
});

test('parseArgs treats long and short flags the same', () => {
  assert.deepEqual(
    parseArgs(['--list', '3', '--prune', '50%', '--summary']).ops,
    [
      { kind: 'list', value: '3' },
      { kind: 'prune', value: '50%' },
      { kind: 'summary' },
    ],
  );
});

test('parseArgs rejects a repeated flag', () => {
  assert.throws(
    () => parseArgs(['-s', '--summary']),
    /repeated/,
    'a flag may not appear twice',
  );
});

test('parseArgs rejects a flag missing its value', () => {
  assert.throws(() => parseArgs(['-l']), /value/, '--list needs a count');
});

test('parseArgs rejects an unknown flag', () => {
  assert.throws(() => parseArgs(['--bogus']), /unknown/, 'unknown flags error');
});

test('parseArgs validates the prune amount', () => {
  assert.throws(() => parseArgs(['-p', 'abc']), /prune/, 'NUM or NUM% only');
  assert.deepEqual(parseArgs(['-p', '12%']).ops, [
    { kind: 'prune', value: '12%' },
  ]);
});

test('parseArgs defaults the path and yields no ops when none given', () => {
  const { ops, path } = parseArgs([]);
  assert.deepEqual(ops, [], 'no flags means no ops');
  assert.equal(path, '.lycheecache', 'default refcache path');
});

test('parseArgs captures a positional refcache path', () => {
  assert.equal(parseArgs(['other.cache', '-s']).path, 'other.cache');
});

// --- parseCache ---

test('parseCache counts entries and tallies malformed lines', () => {
  const p = parseCache(`${SAMPLE}\nnot-a-line`);
  assert.equal(p.entries.length, 5, 'valid lines become entries');
  assert.equal(p.malformed, 1, 'malformed lines are tallied');
});

test('parseCache reads url, status and timestamp from a quoted URL', () => {
  const p = parseCache(`"https://x.example/?a=1,2,3",200,${NOW - 5 * DAY}`);
  assert.equal(p.entries.length, 1, 'a quoted URL with commas is one entry');
  assert.equal(p.entries[0].status, '200', 'status read from the tail');
  assert.equal(p.entries[0].ts, NOW - 5 * DAY, 'timestamp read from the tail');
  assert.match(p.entries[0].url, /x\.example/, 'url is the quoted head');
});

// --- resolvePruneCount ---

test('resolvePruneCount reads an absolute count', () => {
  assert.equal(resolvePruneCount('100', 938), 100);
});

test('resolvePruneCount floors a percentage of the total', () => {
  assert.equal(resolvePruneCount('10%', 938), 93, '10% of 938 floors to 93');
});

test('resolvePruneCount clamps to the total', () => {
  assert.equal(resolvePruneCount('500', 5), 5, 'never prunes more than exist');
});

// --- selectOldest ---

test('selectOldest returns the n oldest, oldest first', () => {
  const { entries } = parseCache(SAMPLE);
  const oldest = selectOldest(entries, 2);
  assert.deepEqual(
    oldest.map((e) => e.ts),
    [NOW - 400 * DAY, NOW - 200 * DAY],
    'two oldest by timestamp ascending',
  );
});

test('selectOldest returns all entries when n exceeds the count', () => {
  const { entries } = parseCache(SAMPLE);
  assert.equal(
    selectOldest(entries, 99).length,
    5,
    'capped at the entry count',
  );
});

// --- computeStats / formatStats ---

test('computeStats summarizes counts, extremes and an adaptive histogram', () => {
  const { entries } = parseCache(SAMPLE);
  const s = computeStats(entries, { now: NOW });
  assert.equal(s.count, 5, 'every entry counted');
  assert.equal(s.oldest.ageDays, 400, 'oldest age in days');
  assert.equal(s.newest.ageDays, 0, 'newest age in days');
  assert.deepEqual(
    s.byStatus,
    [
      ['200', 3],
      ['301', 1],
      ['404', 1],
    ],
    'status counts sorted by count desc then status asc',
  );
  assert.equal(s.ageBuckets.length, 5, 'five adaptive age buckets');
});

test('formatStats shows entries, a local timestamp and a status', () => {
  const out = formatStats(
    computeStats(parseCache(SAMPLE).entries, { now: NOW }),
    {
      now: NOW,
    },
  );
  assert.match(out, /Entries:\s*5/, 'entry count shown');
  assert.match(out, /\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}/, 'timestamp shown');
  assert.match(out, /\b200\b/, 'a status code shown');
});

test('formatStats reports the prune delta when entries were pruned', () => {
  const { entries } = parseCache(SAMPLE);
  const s = computeStats(entries.slice(2), { now: NOW, pruned: 2 });
  const out = formatStats(s, { now: NOW });
  assert.match(out, /Pruned:\s*2/, 'pruned count shown');
  assert.match(out, /5 → 3/, 'before and after totals shown');
});

// --- runOps (ordered execution) ---

test('runOps with list before prune lists the pre-prune oldest', () => {
  const parsed = parseCache(SAMPLE);
  const { output, writeLines, pruned } = runOps(
    parsed,
    [
      { kind: 'list', value: '2' },
      { kind: 'prune', value: '1' },
    ],
    { now: NOW },
  );
  assert.match(output, /e\.example/, 'the oldest (to be pruned) is listed');
  assert.match(output, /d\.example/, 'the second oldest is listed');
  assert.equal(pruned, 1, 'one entry pruned');
  assert.equal(writeLines.length, 4, 'one line removed from the file');
  assert.ok(
    !writeLines.some((l) => l.includes('e.example')),
    'the pruned oldest is gone from the written file',
  );
});

test('runOps with prune before list lists the post-prune oldest (look-ahead)', () => {
  const parsed = parseCache(SAMPLE);
  const { output } = runOps(
    parsed,
    [
      { kind: 'prune', value: '1' },
      { kind: 'list', value: '1' },
    ],
    { now: NOW },
  );
  assert.ok(
    !output.includes('e.example'),
    'the just-pruned oldest is not in the look-ahead list',
  );
  assert.match(output, /d\.example/, 'the next-oldest is listed instead');
});

test('runOps summary after a prune includes the prune delta', () => {
  const parsed = parseCache(SAMPLE);
  const { output } = runOps(
    parsed,
    [{ kind: 'prune', value: '2' }, { kind: 'summary' }],
    { now: NOW },
  );
  assert.match(output, /Pruned:\s*2/, 'summary reports the prune');
  assert.match(
    output,
    /Entries:\s*3/,
    'summary reflects the remaining entries',
  );
});

test('runOps without a prune does not rewrite the file', () => {
  const parsed = parseCache(SAMPLE);
  const { writeLines, pruned } = runOps(parsed, [{ kind: 'summary' }], {
    now: NOW,
  });
  assert.equal(pruned, 0, 'nothing pruned');
  assert.equal(writeLines, null, 'no write when nothing changed');
});

// --- CLI entry point ---

test(
  'runs when invoked through a bin symlink (npx)',
  { skip: process.platform === 'win32' ? 'POSIX symlink bins only' : false },
  () => {
    // A naive `file://${argv[1]}` guard misses the symlink and silently skips
    // main(), so `npx refcache` would do nothing.
    const script = fileURLToPath(new URL('./index.mjs', import.meta.url));
    const dir = mkdtempSync(join(tmpdir(), 'refcache-'));
    const link = join(dir, 'refcache');
    symlinkSync(script, link);
    try {
      const r = spawnSync(process.execPath, [link, '--help'], {
        encoding: 'utf8',
      });
      assert.equal(r.status, 0, 'help exits 0');
      assert.match(r.stdout, /Usage: refcache/, 'main ran via the symlink');
    } finally {
      rmSync(dir, { recursive: true, force: true });
    }
  },
);
