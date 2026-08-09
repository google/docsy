#!/usr/bin/env node
// Guards for the publish workflow (.github/workflows/publish.yaml): fail
// before `npm publish` on toolchain or tag mistakes that would otherwise
// surface as cryptic registry errors or an immutable mispublish. Pure checks
// exported for the colocated tests; only main() touches the environment.

import { execSync } from 'node:child_process';
import { existsSync, readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// Below this, the npm CLI cannot mint OIDC credentials for trusted
// publishing. The engines floor is stricter today, but it serves installs and
// could legitimately move without this publish-specific bound in mind.
export const OIDC_NPM_FLOOR = '11.5.1';

const STABLE_VERSION_RE = /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)$/;

export function parseVersion(v) {
  const s = v.trim();
  // Strict semver normal form: no leading zeros; npm also caps versions at
  // 256 characters and rejects components beyond the safe-integer range.
  const m = s.length <= 256 && STABLE_VERSION_RE.exec(s);
  const parts = m ? m.slice(1).map(Number) : [];
  if (!m || !parts.every(Number.isSafeInteger)) {
    throw new Error(`unparseable version: '${v}'`);
  }
  return parts;
}

export function cmpVersions(a, b) {
  const [pa, pb] = [parseVersion(a), parseVersion(b)];
  for (let i = 0; i < 3; i++) {
    if (pa[i] !== pb[i]) return pa[i] < pb[i] ? -1 : 1;
  }
  return 0;
}

// The engines entries use the plain '>=X.Y.Z' form; anything else means the
// manifest changed shape and this parser needs updating: fail, don't guess.
export function floorOfEnginesRange(range) {
  const m = /^>=\s*(\d+\.\d+\.\d+)$/.exec(range ?? '');
  if (!m) throw new Error(`unsupported engines range: '${range}'`);
  return m[1];
}

// publishConfig may carry any npm config key (registry, tag, provenance, ...)
// and outranks env-level config at publish time, so pin it to the one
// reviewed shape; the publish command's CLI flags are the outranking backstop.
const PUBLISH_CONFIG_JSON = '{"access":"public"}';

// The publish workflow's own contract. Running lifecycle scripts at publish
// time is safe only while the job is install-free (first-party code only),
// minimally permissioned, and pinned to the two reviewed actions; these
// checks fail the run loudly if an edit breaks that coupling. Checked in
// test:tooling at edit time and re-checked by main() in the publish job
// itself, which also covers tags on commits that skipped PR CI.
export function checkWorkflowContract(text) {
  const problems = [];
  const prose = text
    .split('\n')
    .filter((line) => !/^\s*#/.test(line))
    .join('\n');

  const install =
    /\b(npm\s+(ci|i|install|update|rebuild|exec)|npx|pnpm|yarn|corepack)\b/.exec(
      prose,
    );
  if (install) problems.push(`workflow runs an install command: ${install[0]}`);

  for (const m of prose.matchAll(/uses:\s*([^\s#]+)/g)) {
    if (!/^actions\/(checkout|setup-node)@[0-9a-f]{40}$/.test(m[1])) {
      problems.push(`workflow action not allowlisted + SHA-pinned: ${m[1]}`);
    }
  }

  const perms = [...prose.matchAll(/^\s*([\w-]+):\s*(read|write)\s*$/gm)]
    .map((m) => `${m[1]}: ${m[2]}`)
    .sort();
  const wanted = ['contents: read', 'id-token: write'];
  if (JSON.stringify(perms) !== JSON.stringify(wanted)) {
    problems.push(`workflow permissions [${perms}] != [${wanted}]`);
  }

  for (const required of [
    'permissions: {}',
    'environment: npm-publish',
    'persist-credentials: false',
    'package-manager-cache: false',
    '--ignore-scripts=false',
    'npm publish',
  ]) {
    if (!prose.includes(required)) {
      problems.push(`workflow is missing '${required}'`);
    }
  }

  return problems;
}

// Returns problem descriptions; an empty array means all guards hold.
export function checkGuards({
  tag,
  npmVersion,
  enginesNpmRange,
  themeVersion,
  themePublishConfig,
  ignoreScripts,
  installFree,
}) {
  const problems = [];

  // Lifecycle-scripts-on is safe only while nothing third-party can run:
  // the two invariants below and the workflow contract travel together.
  if (!installFree) {
    problems.push(
      'dependencies are installed (node_modules present); ' +
        'the publish job must stay install-free',
    );
  }

  // The theme prepack must run at publish time (it materializes LICENSE), so
  // any config layer suppressing lifecycle scripts malforms the artifact.
  // The publish command also forces --ignore-scripts=false; this names the
  // misconfiguration instead of leaving a missing-LICENSE contract failure.
  if (ignoreScripts !== 'false') {
    problems.push(
      `effective npm ignore-scripts is '${ignoreScripts}', not 'false'; ` +
        'publishing needs the theme prepack lifecycle',
    );
  }

  const enginesFloor = floorOfEnginesRange(enginesNpmRange);
  for (const [floor, why] of [
    [OIDC_NPM_FLOOR, 'the OIDC trusted-publishing floor'],
    [enginesFloor, 'the engines floor'],
  ]) {
    if (cmpVersions(npmVersion, floor) < 0) {
      problems.push(`npm ${npmVersion} < ${floor} (${why})`);
    }
  }

  if (!STABLE_VERSION_RE.test(themeVersion)) {
    problems.push(
      `theme version '${themeVersion}' is not a stable X.Y.Z version; ` +
        'prereleases are published manually, not from CI',
    );
  }

  if (tag !== `v${themeVersion}`) {
    problems.push(`tag '${tag}' != stamped theme version 'v${themeVersion}'`);
  }

  const pcJson = JSON.stringify(themePublishConfig);
  if (pcJson !== PUBLISH_CONFIG_JSON) {
    problems.push(`theme publishConfig ${pcJson} != ${PUBLISH_CONFIG_JSON}`);
  }

  return problems;
}

function main() {
  const repoRoot = path.resolve(
    path.dirname(fileURLToPath(import.meta.url)),
    '..',
  );
  const pkg = (p) =>
    JSON.parse(readFileSync(path.join(repoRoot, p, 'package.json'), 'utf8'));

  const input = {
    tag: process.env.TAG ?? '',
    npmVersion: execSync('npm --version', { encoding: 'utf8' }).trim(),
    enginesNpmRange: pkg('.').engines?.npm,
    themeVersion: pkg('theme').version,
    themePublishConfig: pkg('theme').publishConfig,
    // npm resolves project config at the workspace root even when publishing
    // from theme/ (workspace members' .npmrc files are ignored, and npm
    // config refuses workspace cwds with ENOWORKSPACES), so sample from the
    // repo root.
    ignoreScripts: execSync('npm config get ignore-scripts', {
      encoding: 'utf8',
      cwd: repoRoot,
    }).trim(),
    installFree: ['node_modules', 'theme/node_modules'].every(
      (d) => !existsSync(path.join(repoRoot, d)),
    ),
  };
  console.log(JSON.stringify(input, null, 2));

  const problems = [
    ...checkGuards(input),
    ...checkWorkflowContract(
      readFileSync(
        path.join(repoRoot, '.github/workflows/publish.yaml'),
        'utf8',
      ),
    ),
  ];
  for (const p of problems) console.error(`GUARD FAILED: ${p}`);
  process.exit(problems.length ? 1 : 0);
}

if (process.argv[1] === fileURLToPath(import.meta.url)) main();
