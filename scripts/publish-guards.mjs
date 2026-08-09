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
  };
  console.log(JSON.stringify(input, null, 2));

  const problems = checkGuards(input);
  for (const p of problems) console.error(`GUARD FAILED: ${p}`);
  process.exit(problems.length ? 1 : 0);
}

if (process.argv[1] === fileURLToPath(import.meta.url)) main();
