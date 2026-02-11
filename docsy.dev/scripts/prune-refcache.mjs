#!/usr/bin/env node

// Script to prune refcache.json entries with StatusCode >= 400 (error responses).
// By default this removes entries for URLs that returned 4xx or 5xx status
// codes. Optional flags:
//
//   -k                 Keep all statuses (disable status-code pruning)
//   -n N               Remove N oldest entries by LastSeen timestamp

import { readFileSync, writeFileSync } from 'fs';

const refcacheFile = 'static/refcache.json';
const args = process.argv.slice(2);

function usage(exitCode = 0) {
  console.log(
    [
      'Usage: node scripts/prune-refcache.mjs [options]',
      '',
      'Prunes refcache.json entries. ',
      'By default removes entries for URLs that returned 4xx or 5xx status codes.',
      '',
      'Options:',
      '  -k           Keep all statuses (disable status-code pruning).',
      '  -n N         Remove N oldest entries by LastSeen.',
      '  --help, -h   Show this help.',
    ].join('\n'),
  );
  process.exit(exitCode);
}

function parseArgs(argv) {
  const parsed = { keepAllStatuses: false, dropOldest: 0 };

  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];
    if (arg === '--help' || arg === '-h') {
      usage(0);
    } else if (arg === '-k') {
      parsed.keepAllStatuses = true;
    } else if (arg === '-n') {
      const value = argv[++i];
      if (value === undefined) {
        console.error(`Missing value for ${arg}.`);
        usage(1);
      }
      const n = Number.parseInt(value, 10);
      if (!Number.isInteger(n) || n < 0) {
        console.error(
          `Invalid value for ${arg}: ${value}. Expected integer >= 0.`,
        );
        usage(1);
      }
      parsed.dropOldest = n;
    } else {
      console.error(`Unknown option: ${arg}`);
      usage(1);
    }
  }

  return parsed;
}

function parseLastSeenToMillis(lastSeen) {
  const ms = Date.parse(lastSeen);
  return Number.isFinite(ms) ? ms : Number.NEGATIVE_INFINITY;
}

const { keepAllStatuses, dropOldest } = parseArgs(args);
const data = JSON.parse(readFileSync(refcacheFile, 'utf8'));
const entries = Object.entries(data);

console.log(
  `Pruning ${refcacheFile} (${entries.length} entries): keepAllStatuses=${keepAllStatuses}, dropOldest=${dropOldest} ...`,
);

const keepByStatus = (statusCode) => keepAllStatuses || statusCode < 400;
const statusPruned = entries.filter(([_, value]) =>
  keepByStatus(value.StatusCode),
);
const removedByStatus = entries.length - statusPruned.length;

let finalEntries = statusPruned;
let removedByOldest = 0;

if (dropOldest > 0 && statusPruned.length > 0) {
  const sortedOldestFirst = statusPruned
    .map(([url, value], index) => ({
      url,
      index,
      lastSeenMillis: parseLastSeenToMillis(value.LastSeen),
    }))
    .sort((a, b) => a.lastSeenMillis - b.lastSeenMillis || a.index - b.index);

  const dropSet = new Set(
    sortedOldestFirst
      .slice(0, Math.min(dropOldest, sortedOldestFirst.length))
      .map((entry) => entry.url),
  );

  removedByOldest = dropSet.size;
  finalEntries = statusPruned.filter(([url]) => !dropSet.has(url));
}

const pruned = Object.fromEntries(finalEntries);
writeFileSync(refcacheFile, JSON.stringify(pruned, null, 2) + '\n');

console.log(
  `Done. Kept ${finalEntries.length}/${entries.length} entries ` +
    `(${removedByStatus} removed by status, ${removedByOldest} removed by oldest).`,
);
