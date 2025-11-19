#!/usr/bin/env node

// Script to prune refcache.json entries with StatusCode >= 400 (error responses).
// This removes entries for URLs that returned 4xx or 5xx status codes.

import { readFileSync, writeFileSync } from 'fs';

const refcacheFile = 'static/refcache.json';

console.log(
  `Pruning ${refcacheFile} to remove entries with StatusCode >= 400 ...`,
);

const data = JSON.parse(readFileSync(refcacheFile, 'utf8'));

// Filter entries where StatusCode < 400
const pruned = Object.fromEntries(
  Object.entries(data).filter(([_, value]) => value.StatusCode < 400),
);

writeFileSync(refcacheFile, JSON.stringify(pruned, null, 2) + '\n');

console.log('Done.');
