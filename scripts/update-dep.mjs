import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const repoRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  '..',
);

// Stable X.Y.Z only: tags, ranges, prereleases, and leading-zero
// components are all rejected, so the pinned value is exactly the
// reviewed release.
export const STABLE_SEMVER = /^(0|[1-9]\d*)(\.(0|[1-9]\d*)){2}$/;

export function declaredDeps({ root = repoRoot } = {}) {
  const manifest = (relPath) =>
    JSON.parse(fs.readFileSync(path.join(root, relPath), 'utf8'));
  return {
    root: Object.keys(manifest('package.json').devDependencies ?? {}),
    theme: Object.keys(manifest('theme/package.json').dependencies ?? {}),
  };
}

/**
 * Plan the npm invocations that bump `argv`'s `[PKG, X.Y.Z]` to the exact
 * version: an install targeting the manifest that declares PKG, then for
 * theme deps the lock sync, tree restore, and ScrollSpy reminder.
 * Returns the argument lists, or an error string.
 */
export function planUpdate(argv, { deps = declaredDeps() } = {}) {
  const [dep, version] = argv;
  if (argv.length !== 2 || !STABLE_SEMVER.test(version ?? '')) {
    return 'usage: npm run update:dep -- PKG X.Y.Z';
  }
  if (deps.root.includes(dep)) {
    return [['install', '-DE', '--ignore-scripts', `${dep}@${version}`]];
  }
  if (!deps.theme.includes(dep)) return `not a declared dependency: ${dep}`;
  return [
    ['install', '-E', '--ignore-scripts', '-w', 'theme', `${dep}@${version}`],
    ['run', '-s', '_sync:theme-lock'],
    ['run', '-s', 'install:theme-deps'],
    ['run', '-s', 'update::post'],
  ];
}

export function updateDep(argv, { env = process.env, spawn = spawnSync } = {}) {
  const plan = planUpdate(argv);
  if (typeof plan === 'string') {
    console.error(plan);
    return 1;
  }
  // npm's JavaScript CLI directly, like rebuild-hugo-extended.mjs: no
  // command shell, and no PATH lookup an interposer could intercept.
  const npmExecPath = env.npm_execpath;
  if (!npmExecPath) {
    console.error('npm_execpath is unavailable; run this script through npm');
    return 1;
  }
  for (const args of plan) {
    const result = spawn(process.execPath, [npmExecPath, ...args], {
      cwd: repoRoot,
      env,
      stdio: 'inherit',
    });
    if ((result.status ?? 1) !== 0) return result.status ?? 1;
  }
  return 0;
}

const isMain =
  Boolean(process.argv[1]) &&
  fs.realpathSync(process.argv[1]) ===
    fs.realpathSync(fileURLToPath(import.meta.url));
if (isMain) process.exitCode = updateDep(process.argv.slice(2));
