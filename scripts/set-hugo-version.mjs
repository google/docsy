#!/usr/bin/env node
// @ts-check
/**
 * Bump the project's Hugo Extended build version (see maintainer notes).
 * Does NOT touch the theme floor or `params.hugoMinVersion`; those move
 * together, by explicit decision only (cf. scripts/hugo-floor-sync.test.mjs).
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const SEMVER = /^\d+\.\d+\.\d+$/;
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const paths = {
  docsyDevPkg: path.join(ROOT, 'docsy.dev/package.json'),
  rootPkg: path.join(ROOT, 'package.json'),
};

function usage(code = 0) {
  const out = code ? console.error : console.log;
  out(`Usage: npm run set:hugo:version -- X.Y.Z`);
  process.exit(code);
}

function main() {
  const v = process.argv[2];
  if (!v || v === '-h' || v === '--help') usage(v ? 0 : 1);
  if (!SEMVER.test(v)) {
    console.error(`Expected X.Y.Z semver, got: ${v}`);
    usage(1);
  }

  let prev = '';
  function setQuotedField(filePath, field) {
    let t = fs.readFileSync(filePath, 'utf8');
    const re = new RegExp(`^(\\s*"${field}":\\s*")([^"]+)(")`, 'm');
    const m = t.match(re);
    if (!m) {
      console.error(`Missing "${field}" in ${path.relative(ROOT, filePath)}`);
      process.exit(1);
    }
    prev = m[2];
    fs.writeFileSync(filePath, t.replace(re, `$1${v}$3`), 'utf8');
  }

  setQuotedField(paths.rootPkg, 'hugo_version');
  setQuotedField(paths.docsyDevPkg, 'hugo-extended');

  console.log(`set:hugo:version ${prev} → ${v}`);
  for (const p of Object.values(paths)) {
    console.log(`  ${path.relative(ROOT, p)}`);
  }
  console.log('Next: npm install');
}

main();
