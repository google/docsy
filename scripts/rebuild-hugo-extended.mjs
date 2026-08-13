import { spawnSync } from 'node:child_process';
import path from 'node:path';
import { setTimeout as sleep } from 'node:timers/promises';
import { fileURLToPath } from 'node:url';

export const RETRY_DELAYS_SECONDS = [0, 2, 5, 10];
export const UNSAFE_HUGO_ENV = [
  'HUGO_BIN_PATH',
  'HUGO_FORCE_STANDARD',
  'HUGO_MIRROR_BASE_URL',
  'HUGO_NO_EXTENDED',
  'HUGO_OVERRIDE_VERSION',
  'HUGO_SKIP_CHECKSUM',
  'HUGO_SKIP_DOWNLOAD',
  'HUGO_SKIP_VERIFY',
];

export function runNpmRebuild({
  env = process.env,
  error = console.error,
  execPath = process.execPath,
  spawn = spawnSync,
} = {}) {
  const npmExecPath = env.npm_execpath;
  if (!npmExecPath) {
    error('npm_execpath is unavailable; run _rebuild:hugo through npm');
    return 1;
  }

  // Use npm's JavaScript CLI directly so Windows needs no command shell.
  const result = spawn(
    execPath,
    [npmExecPath, 'rebuild', 'hugo-extended', '--ignore-scripts=false'],
    { env, stdio: 'inherit' },
  );
  if (result.error) {
    error(`Unable to start the Hugo rebuild: ${result.error.message}`);
  }
  return result.status ?? 1;
}

export async function rebuildHugoExtended({
  env = process.env,
  error = console.error,
  log = console.log,
  run,
  wait = (delay) => sleep(delay * 1000),
} = {}) {
  for (const name of UNSAFE_HUGO_ENV) {
    if ((env[name] ?? '') !== '') {
      error(`${name} must be unset for the pinned Hugo rebuild`);
      return 1;
    }
  }

  const rebuild = run ?? (() => runNpmRebuild({ env, error }));
  const attemptCount = RETRY_DELAYS_SECONDS.length;
  for (const [index, delay] of RETRY_DELAYS_SECONDS.entries()) {
    if (delay > 0) {
      log(`Retrying Hugo install in ${delay}s...`);
      await wait(delay);
    }

    log(`Hugo install attempt ${index + 1}/${attemptCount}`);
    if (rebuild() === 0) return 0;
  }

  error(`Hugo install failed after ${attemptCount} attempts`);
  return 1;
}

const isMain =
  process.argv[1] &&
  path.resolve(process.argv[1]) === fileURLToPath(import.meta.url);
if (isMain) process.exitCode = await rebuildHugoExtended();
