// Script-runner LINT, not a security boundary: catches the careless bare
// npx/exec that agents habitually type (a bare `npx BIN` on an unpopulated
// tree falls back to the public registry and executes whatever package
// holds that name -- npm-squat; live near-miss 2026-08-10). One allowed
// dynamic-resolution form: `npx --no -- BIN` (--package=... may precede
// the --); everything else -- npm exec/x, alternate package managers'
// runners -- is denied outright rather than flag-parsed for safety.
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

const npxNotRefusal = /\bnpx\s+(?!--no\b)/;
const npmExec = /\bnpm\s+(exec|x)\b/;
const altRunner = /\b(yarn|pnpm|bunx?|corepack)\b/;
// The JS-API forms: a spawned `npx` needs the literal refusal flag first,
// and a spawned `npm` a literal array that doesn't reach the exec engine
// (a variable args array can't prove either).
const jsNpxSpawn = /['"`]npx['"`],(?!\s*\[\s*['"`]--no['"`])/;
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
        .filter((file) => /\.(sh|mjs|js|cjs|mts|pl)$/.test(file))
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
      assert.doesNotMatch(
        spliced,
        npxNotRefusal,
        `${id} uses the refusal form npx --no`,
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
    assert.doesNotMatch(
      code,
      npxNotRefusal,
      `${script} uses the refusal form npx --no`,
    );
    assert.doesNotMatch(code, npmExec, `${script} runs no npm-exec`);
    assert.doesNotMatch(
      code,
      altRunner,
      `${script} uses npm as its only package runner`,
    );
    if (/\.(mjs|js|cjs|mts)$/.test(script)) {
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
