#!/usr/bin/env node

// Link-check matrix: compares a FULL build against a LEAN build
// (params.td.lean_render=remove) over the docsy.dev site, reporting both:
//
//   - speed:  wall-clock for build + htmltest, per cell;
//   - parity: the set of unique link targets each build exposes to the checker.
//             A lean build is a strict subset of the full build's HTML (it only
//             drops repeated chrome), so any target present in FULL but missing
//             from LEAN is a link the checker would no longer reach.
//
// Both cells build into isolated temp dirs and run htmltest via a per-cell
// config (a copy of .htmltest.yml with DirectoryPath repointed), so the working
// `public/` tree and the committed refcache are left untouched.
//
// Usage: node scripts/link-check-matrix.mjs [options]
//   --skip-external   Pass --skip-external to htmltest (faster, internal only).
//   --keep            Keep the temp build dirs under tmp/matrix/.
//   --out FILE        Also write the Markdown report to FILE.
//   --help, -h        Show this help.

import { spawnSync } from 'node:child_process';
import {
  cpSync,
  mkdirSync,
  readFileSync,
  readdirSync,
  rmSync,
  writeFileSync,
} from 'node:fs';
import path from 'node:path';

const args = process.argv.slice(2);
if (args.includes('--help') || args.includes('-h')) {
  const src = readFileSync(new URL(import.meta.url))
    .toString()
    .split('\n');
  const help = [];
  for (const l of src.slice(1)) {
    if (!l.startsWith('//')) break; // leading comment block only
    help.push(l.replace(/^\/\/ ?/, ''));
  }
  console.log(help.join('\n'));
  process.exit(0);
}
const skipExternal = args.includes('--skip-external');
const keep = args.includes('--keep');
const outFile =
  args[args.indexOf('--out') + 1] && args.includes('--out')
    ? args[args.indexOf('--out') + 1]
    : null;

const MATRIX_DIR = 'tmp/matrix';
const HTMLTEST = './tmp/bin/htmltest';
const REFCACHE_SRC = 'static/refcache.json';
const HTMLTEST_CACHE_DIR = 'tmp/.htmltest';

// Top-level output subdirs htmltest ignores (see .htmltest.yml); excluded from
// the parity scan so it mirrors what the checker actually inspects.
const IGNORE_SUBDIRS = [/^fr$/];
const IGNORE_PATH = /\/page\/\d+\//; // paginated list pages

// htmltest applies IgnoreURLs to link targets; mirror that so the parity diff
// counts only links the checker would actually have followed. htmltest sees
// internal links without their leading slash, so we strip one before matching.
function parseIgnoreURLs() {
  const yaml = readFileSync('.htmltest.yml', 'utf8').split('\n');
  const start = yaml.findIndex((l) => /^IgnoreURLs:/.test(l));
  const patterns = [];
  if (start >= 0) {
    for (const l of yaml.slice(start + 1)) {
      if (!/^\s+-\s/.test(l)) break; // end of the list
      const pat = l
        .replace(/^\s+-\s+/, '')
        .replace(/\s+#.*$/, '')
        .trim();
      if (pat) patterns.push(new RegExp(pat));
    }
  }
  return patterns;
}

const IGNORE_URLS = parseIgnoreURLs();

function isChecked(link) {
  const normalized = link.replace(/^\//, '');
  return !IGNORE_URLS.some((re) => re.test(normalized));
}

const CELLS = [
  { mode: 'full', env: {} },
  { mode: 'lean', env: { HUGOxPARAMSxTDxLEAN_RENDER: 'remove' } },
];

function run(cmd, cmdArgs, { env = {} } = {}) {
  const t0 = performance.now();
  const r = spawnSync(cmd, cmdArgs, {
    encoding: 'utf8',
    env: { ...process.env, ...env },
    maxBuffer: 64 * 1024 * 1024,
  });
  return { ...r, ms: performance.now() - t0 };
}

function buildSite({ mode, env }) {
  const dest = path.join(MATRIX_DIR, mode, 'public');
  rmSync(dest, { recursive: true, force: true });
  const r = run(
    'npx',
    [
      'hugo',
      '--cleanDestinationDir',
      '--logLevel',
      'info',
      '--themesDir',
      '../..',
      '-e',
      'dev',
      '-DFE',
      '--baseURL',
      'http://localhost',
      '--destination',
      dest,
    ],
    { env },
  );
  if (r.status !== 0) {
    throw new Error(`hugo build (${mode}) failed:\n${r.stdout}${r.stderr}`);
  }
  return { dest, ms: r.ms };
}

function checkLinks({ mode }, dest) {
  // Per-cell config: copy .htmltest.yml, repoint DirectoryPath at this cell.
  const conf = path.join(MATRIX_DIR, mode, '.htmltest.yml');
  const base = readFileSync('.htmltest.yml', 'utf8').replace(
    /^DirectoryPath:.*$/m,
    `DirectoryPath: ${dest}`,
  );
  writeFileSync(conf, base);
  const r = run(HTMLTEST, [
    '--conf',
    conf,
    '--log-level',
    '1',
    ...(skipExternal ? ['--skip-external'] : []),
  ]);
  const out = `${r.stdout}${r.stderr}`.trim();
  const tail = out.split('\n').slice(-3).join(' ').slice(0, 200);
  return { pass: r.status === 0, ms: r.ms, summary: tail || '(no output)' };
}

function* walkHtml(dir, rel = '') {
  for (const ent of readdirSync(dir, { withFileTypes: true })) {
    const childRel = rel ? `${rel}/${ent.name}` : ent.name;
    if (ent.isDirectory()) {
      if (rel === '' && IGNORE_SUBDIRS.some((re) => re.test(ent.name)))
        continue;
      yield* walkHtml(path.join(dir, ent.name), childRel);
    } else if (
      ent.name.endsWith('.html') &&
      !IGNORE_PATH.test(`/${childRel}`)
    ) {
      yield path.join(dir, ent.name);
    }
  }
}

// Unique link targets (href/src) exposed across a build, restricted to those
// the checker would actually follow (pure fragments and IgnoreURLs removed).
function collectLinks(dir) {
  const links = new Set();
  for (const file of walkHtml(dir)) {
    const html = readFileSync(file, 'utf8');
    for (const m of html.matchAll(/\b(?:href|src)\s*=\s*"([^"]*)"/g)) {
      const v = m[1].trim();
      if (!v || v.startsWith('#') || v.startsWith('javascript:')) continue;
      if (isChecked(v)) links.add(v);
    }
  }
  return links;
}

function fmtMs(ms) {
  return ms >= 1000 ? `${(ms / 1000).toFixed(1)}s` : `${Math.round(ms)}ms`;
}

function main() {
  mkdirSync(MATRIX_DIR, { recursive: true });
  // Seed htmltest's cache from the committed refcache (read-only: we never copy
  // it back, so static/refcache.json stays as committed).
  mkdirSync(HTMLTEST_CACHE_DIR, { recursive: true });
  cpSync(REFCACHE_SRC, path.join(HTMLTEST_CACHE_DIR, 'refcache.json'));

  const results = {};
  for (const cell of CELLS) {
    const { dest, ms: buildMs } = buildSite(cell);
    const links = collectLinks(dest);
    const check = checkLinks(cell, dest);
    results[cell.mode] = { dest, buildMs, links, check };
  }

  const { full, lean } = results;
  // Parity: targets in full but not in lean = links lean stops surfacing.
  const dropped = [...full.links].filter((l) => !lean.links.has(l)).sort();
  const ext = dropped.filter((l) => /^[a-z]+:\/\//.test(l));
  const internal = dropped.filter((l) => !/^[a-z]+:\/\//.test(l));

  const lines = [];
  lines.push('# docsy.dev link-check matrix: full vs lean', '');
  lines.push(`Run: ${new Date().toISOString()}`);
  lines.push(`External checks: ${skipExternal ? 'skipped' : 'enabled'}`, '');
  lines.push('| Cell | Build | htmltest | Total | Unique links | Result |');
  lines.push('| ---- | ----- | -------- | ----- | ------------ | ------ |');
  for (const mode of ['full', 'lean']) {
    const r = results[mode];
    const total = r.buildMs + r.check.ms;
    lines.push(
      `| ${mode} | ${fmtMs(r.buildMs)} | ${fmtMs(r.check.ms)} | ` +
        `${fmtMs(total)} | ${r.links.size} | ` +
        `${r.check.pass ? 'pass' : 'FAIL'} |`,
    );
  }
  lines.push('');
  lines.push('## Parity', '');
  lines.push(
    `Unique link targets in **full** but not **lean**: ` +
      `**${dropped.length}** (${internal.length} internal, ${ext.length} external).`,
    '',
  );
  if (dropped.length) {
    lines.push(
      'Dropped targets (lean no longer surfaces these to the checker):',
      '',
    );
    for (const l of dropped.slice(0, 50)) lines.push(`- \`${l}\``);
    if (dropped.length > 50) lines.push(`- … and ${dropped.length - 50} more`);
  } else {
    lines.push('No links dropped — lean reaches every unique target. ✅');
  }
  lines.push('');

  const report = lines.join('\n');
  console.log(report);
  if (outFile) {
    writeFileSync(outFile, report);
    console.log(`\nReport written to ${outFile}`);
  }
  if (!keep) {
    for (const mode of ['full', 'lean']) {
      rmSync(path.join(MATRIX_DIR, mode), { recursive: true, force: true });
    }
  }
}

main();
