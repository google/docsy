#!/usr/bin/env node
// Guards for the publish workflow (.github/workflows/publish.yaml): fail
// before `npm publish` on toolchain or tag mistakes that would otherwise
// surface as cryptic registry errors or an immutable mispublish. Pure checks
// exported for the colocated tests; only main() touches the environment.

import { execSync } from 'node:child_process';
import { readFileSync } from 'node:fs';
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

// Returns problem descriptions; an empty array means all guards hold.
export function checkGuards({
  tag,
  npmVersion,
  enginesNpmRange,
  themeVersion,
  themePublishConfig,
}) {
  const problems = [];

  const enginesFloor = floorOfEnginesRange(enginesNpmRange);
  for (const [floor, why] of [
    [OIDC_NPM_FLOOR, 'the OIDC trusted-publishing floor'],
    [enginesFloor, 'the engines floor'],
  ]) {
    if (cmpVersions(npmVersion, floor) < 0) {
      problems.push(`npm ${npmVersion} < ${floor} (${why})`);
    }
  }

  // Validate via parseVersion so the safe-integer and length bounds apply,
  // not just the regex shape.
  let stableVersion = false;
  try {
    parseVersion(themeVersion);
    stableVersion = true;
  } catch {
    // fall through to the problem report
  }
  if (!stableVersion) {
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

// The registry's `latest` may be a prerelease (e.g. 0.16.0-rc.1), so compare
// numeric cores only. Equal cores pass: the first stable shares its RC's
// core, and a true duplicate version already fails at the registry.
export function checkRegistryAdvance(candidate, registryLatest) {
  const m = /^(\d+\.\d+\.\d+)(?:[-+]|$)/.exec(registryLatest.trim());
  if (!m) {
    return [`unparseable registry latest version: '${registryLatest}'`];
  }
  try {
    if (cmpVersions(candidate, m[1]) < 0) {
      return [
        `candidate ${candidate} is below the registry latest ` +
          `${registryLatest}; publishing would regress the latest dist-tag`,
      ];
    }
  } catch {
    // A non-stable candidate is the stable-version guard's finding; report
    // (fail-closed) without masking it.
    return [
      `registry check cannot compare: candidate '${candidate}' is not stable`,
    ];
  }
  return [];
}

function main() {
  const repoRoot = path.resolve(
    path.dirname(fileURLToPath(import.meta.url)),
    '..',
  );
  const pkg = (p) =>
    JSON.parse(readFileSync(path.join(repoRoot, p, 'package.json'), 'utf8'));

  // --registry additionally asserts the candidate doesn't regress the
  // registry's latest (network read; run it in the publish job, post-approval,
  // where the answer is freshest). The root .npmrc scope pin applies via cwd.
  const withRegistry = process.argv[2] === '--registry';

  const input = {
    tag: process.env.TAG ?? '',
    npmVersion: execSync('npm --version', { encoding: 'utf8' }).trim(),
    enginesNpmRange: pkg('.').engines?.npm,
    themeVersion: pkg('theme').version,
    themePublishConfig: pkg('theme').publishConfig,
  };
  if (withRegistry) {
    // `version` resolves to the latest dist-tag's version; keep that true if
    // this command ever changes.
    input.registryLatest = execSync('npm view @docsy/theme version', {
      encoding: 'utf8',
      cwd: repoRoot,
    }).trim();
  }
  console.log(JSON.stringify(input, null, 2));

  const problems = [
    ...checkGuards(input),
    ...(withRegistry
      ? checkRegistryAdvance(input.themeVersion, input.registryLatest)
      : []),
  ];
  for (const p of problems) console.error(`GUARD FAILED: ${p}`);
  process.exit(problems.length ? 1 : 0);
}

if (process.argv[1] === fileURLToPath(import.meta.url)) main();
