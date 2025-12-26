#!/usr/bin/env node

// Script to unescape refcache.json, which is necessary because of a bug in htmltest.
// See https://github.com/wjdp/htmltest/issues/239

import { readFileSync, writeFileSync } from 'fs';

const refcacheFile = 'static/refcache.json';

console.log(
  `Unescaping ${refcacheFile}, which is necessary because of a bug in htmltest ...`,
);

const data = JSON.parse(readFileSync(refcacheFile, 'utf8'));
writeFileSync(refcacheFile, JSON.stringify(data, null, 2) + '\n');

console.log('Done.');
