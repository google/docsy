#!/usr/bin/env node
// @ts-check
/** Bump Hugo Extended semver across docsy.dev pins (see maintainer notes). */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const SEMVER = /^\d+\.\d+\.\d+$/;
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const paths = {
  hugoYaml: path.join(ROOT, 'docsy.dev/config/_default/hugo.yaml'),
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

  let yaml = fs.readFileSync(paths.hugoYaml, 'utf8');
  const yamlLine =
    /^(\s*hugoMinVersion:\s*&hugoMinVersion\s+)(\d+\.\d+\.\d+)(\s*)$/m;
  const ym = yaml.match(yamlLine);
  if (!ym) {
    console.error(`Missing hugoMinVersion anchor line in ${paths.hugoYaml}`);
    process.exit(1);
  }
  const prev = ym[2];
  yaml = yaml.replace(yamlLine, `$1${v}$3`);
  fs.writeFileSync(paths.hugoYaml, yaml, 'utf8');

  function setQuotedField(filePath, field) {
    let t = fs.readFileSync(filePath, 'utf8');
    const re = new RegExp(`^(\\s*"${field}":\\s*")([^"]+)(")`, 'm');
    if (!re.test(t)) {
      console.error(`Missing "${field}" in ${path.relative(ROOT, filePath)}`);
      process.exit(1);
    }
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
