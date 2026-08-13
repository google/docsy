// Script-runner LINT, not a security boundary: catches the careless bare
// npx/exec that agents habitually type (a bare `npx BIN` on an unpopulated
// tree falls back to the public registry and executes whatever package
// holds that name: npm-squat; live near-miss 2026-08-10). One allowed
// dynamic-resolution form, in exactly one order:
// `npx --no [--package=PKG] -- BIN`. Everything else (npm exec/x, other
// npx flag spellings -- `--no-fund` and friends are config negations that
// still install, adversarial round 11 -- and alternate package managers'
// runners) is denied outright rather than flag-parsed for safety.
// Deliberate evasion (interpolation, option preludes like `npm -s exec`)
// outruns any grep and is review's job.

import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const repoRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  '..',
);

const readJSON = (relPath) =>
  JSON.parse(fs.readFileSync(path.join(repoRoot, relPath), 'utf8'));

// The sanctioned suffix accepts exactly `--no [--package=PKG] -- `: a
// `--no\b` test would bless every `--no-*` config flag, which npm parses
// as negations (fund=false), not refusals (adversarial round 11).
// Horizontal whitespace only, so refusal tokens on a later line (a
// separate shell command) can't clean an earlier npx (round 12).
const sanctionedNpxSuffix =
  /^[ \t]+--no[ \t]+(?:--package=\S+[ \t]+)?--(?:[ \t]|$)/;
const quoteChars = new Set(["'", '"', '`']);

// Token scan, not one lookahead: every standalone `npx` occurrence is
// classified by its neighbors, so quoted shapes (`"npx" BIN`) and a bare
// trailing `npx` can't slip past a whitespace-anchored regex. Neighbors
// in [\w-] mean part of a longer name (--npx-cache); a quote-wrapped
// token in a JS file is a string literal owned by the JS vector checks.
function unsanctionedNpx(text, { jsLiterals = false } = {}) {
  const hits = [];
  for (const match of text.matchAll(/npx/g)) {
    const before = text[match.index - 1] ?? '';
    const after = text[match.index + 3] ?? '';
    if (/[\w-]/.test(before) || /[\w-]/.test(after)) continue;
    if (jsLiterals && quoteChars.has(before) && before === after) continue;
    if (sanctionedNpxSuffix.test(text.slice(match.index + 3))) continue;
    hits.push(
      text.slice(Math.max(0, match.index - 20), match.index + 40).trim(),
    );
  }
  return hits;
}

const npmExec = /\bnpm\s+(exec|x)\b/;
const altRunner = /\b(yarn|pnpm|bunx?|corepack)\b/;
// The JS-API forms: a spawned `npx` needs the literal refusal vector
// `['--no', ('--package=PKG',)? '--', ...]` -- the first element alone
// isn't enough, since a later `--yes` overrides the refusal (adversarial
// round 12) -- and a spawned `npm` a literal array that doesn't reach the
// exec engine (a variable args array can't prove either).
const jsNpxSpawn =
  /['"`]npx['"`],(?!\s*\[\s*['"`]--no['"`]\s*,\s*(?:['"`]--package=[^'"`\s]+['"`]\s*,\s*)?['"`]--['"`])/;
const jsNpmVariableArgs = /['"`]npm['"`](?=\s*,)\s*,(?!\s*\[)/;
const jsNpmExec = /['"`]npm['"`]\s*,\s*\[[^\]]*['"`](exec|x)['"`]/;

// The deny-pattern definition files: a lint can't police its own source
// (an editor could as easily drop the assertion), and self-scanning only
// forces the patterns into self-dodging shapes that weaken them. The
// supply-chain audit carries its own copies for workflow run steps.
const denyPatternFiles = new Set([
  'tests/runner-lint.test.mjs',
  'tests/supply-chain-audit.test.mjs',
]);

test('lint: package scripts and script files use only sanctioned runner forms', () => {
  const manifests = ['package.json', 'docsy.dev', 'theme'].map((dir) =>
    dir.endsWith('.json') ? dir : `${dir}/package.json`,
  );
  const scriptFiles = [
    'docsy.dev/scripts',
    'docsy.dev/tests',
    'scripts',
    'tests',
    'theme/scripts',
  ]
    .flatMap((dir) =>
      fs
        .readdirSync(path.join(repoRoot, dir), { recursive: true })
        .filter((file) => /\.(sh|mjs|js|cjs|ts|mts|cts|pl)$/.test(file))
        .map((file) => `${dir}/${file}`),
    )
    .filter((file) => !denyPatternFiles.has(file));
  assert.ok(
    scriptFiles.some((file) => file.endsWith('.sh')) &&
      scriptFiles.some((file) => file.endsWith('.mjs')),
    'shell and node scripts were found',
  );

  for (const manifest of manifests) {
    for (const [name, command] of Object.entries(readJSON(manifest).scripts)) {
      const spliced = command.replace(/\\\r?\n/g, ' ');
      const id = `${manifest} script ${name}`;
      assert.deepEqual(
        unsanctionedNpx(spliced),
        [],
        `${id} uses only the sanctioned npx refusal form`,
      );
      assert.doesNotMatch(spliced, npmExec, `${id} runs no npm-exec`);
      assert.doesNotMatch(
        spliced,
        altRunner,
        `${id} uses npm as its only package runner`,
      );
    }
  }
  for (const script of scriptFiles) {
    // Executable text only: comment lines may name npx in prose. Backslash-
    // newline splices first: `npx\` + continuation is a live invocation.
    const code = fs
      .readFileSync(path.join(repoRoot, script), 'utf8')
      .replace(/\\\r?\n/g, ' ')
      .split('\n')
      .filter((line) => !/^\s*(#|\/\/)/.test(line))
      .join('\n');
    const isJs = /\.(mjs|js|cjs|ts|mts|cts)$/.test(script);
    assert.deepEqual(
      unsanctionedNpx(code, { jsLiterals: isJs }),
      [],
      `${script} uses only the sanctioned npx refusal form`,
    );
    assert.doesNotMatch(code, npmExec, `${script} runs no npm-exec`);
    assert.doesNotMatch(
      code,
      altRunner,
      `${script} uses npm as its only package runner`,
    );
    if (isJs) {
      assert.doesNotMatch(
        code,
        jsNpxSpawn,
        `${script} passes the --no refusal to spawned npx`,
      );
      assert.doesNotMatch(
        code,
        jsNpmVariableArgs,
        `${script} passes npm a literal argument array`,
      );
      assert.doesNotMatch(code, jsNpmExec, `${script} spawns no npm-exec`);
    }
  }
});
