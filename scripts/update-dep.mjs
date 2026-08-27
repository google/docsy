// Shared guard under the update:hugo and update:theme-dep scripts: the
// scripts own target policy (the package, the flags that route it to
// its manifest, any follow-up steps); this helper owns the cross-target
// install invariants.

import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const repoRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  '..',
);

// Stable X.Y.Z only, leading zeros rejected: the pinned value is
// exactly the reviewed release.
export const STABLE_SEMVER = /^(0|[1-9]\d*)(\.(0|[1-9]\d*)){2}$/;

const USAGE = [
  'usage: npm run update:hugo -- X.Y.Z',
  '       npm run update:theme-dep -- PKG X.Y.Z',
].join('\n');

export function declaredDeps({ root = repoRoot } = {}) {
  const manifest = (relPath) =>
    JSON.parse(fs.readFileSync(path.join(root, relPath), 'utf8'));
  return {
    root: Object.keys(manifest('package.json').devDependencies ?? {}),
    theme: Object.keys(manifest('theme/package.json').dependencies ?? {}),
  };
}

const ALLOWED_FLAGS = ['-D', '-w', 'theme'];

/**
 * Plan the npm-install invocation that bumps a declared dependency to an
 * exact version. argv is `PKG [NPM_FLAGS...] X.Y.Z`: the npm scripts
 * prepend the package and its target flags, npm appends the version.
 * Returns the argument list, or an error string.
 */
export function planInstall(argv, { deps = declaredDeps() } = {}) {
  const [dep, ...rest] = argv;
  const version = rest.at(-1);
  const flags = rest.slice(0, -1);
  if (
    !dep ||
    !flags.every((flag) => ALLOWED_FLAGS.includes(flag)) ||
    !STABLE_SEMVER.test(version ?? '')
  ) {
    return USAGE;
  }
  const declared = flags.includes('-w') ? deps.theme : deps.root;
  if (!declared.includes(dep)) return `not a declared dependency: ${dep}`;
  return ['install', '-E', '--ignore-scripts', ...flags, `${dep}@${version}`];
}

export function updateDep(argv, { env = process.env, spawn = spawnSync } = {}) {
  const args = planInstall(argv);
  if (typeof args === 'string') {
    console.error(args);
    return 1;
  }
  // npm's JavaScript CLI directly, like rebuild-hugo-extended.mjs: no
  // command shell, and no PATH lookup an interposer could intercept.
  const npmExecPath = env.npm_execpath;
  if (!npmExecPath) {
    console.error('npm_execpath is unavailable; run this script through npm');
    return 1;
  }
  const result = spawn(process.execPath, [npmExecPath, ...args], {
    cwd: repoRoot,
    env,
    stdio: 'inherit',
  });
  return result.status ?? 1;
}

const isMain =
  Boolean(process.argv[1]) &&
  fs.realpathSync(process.argv[1]) ===
    fs.realpathSync(fileURLToPath(import.meta.url));
if (isMain) process.exitCode = updateDep(process.argv.slice(2));
