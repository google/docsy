// Refresh tests/visual/goldens/linux/ from CI: downloads the visual-diffs
// artifact of the current HEAD's completed test-workflow run (the visual
// job uploads it when it fails) and installs the actual shots as the Linux
// goldens. One-command refresh for devs without a Linux machine; requires
// the GitHub CLI (gh, ≥ 2.40 for --commit) to be authenticated.
// Run via: npm run update:visual-goldens:linux

import { spawnSync } from 'node:child_process';
import {
  copyFileSync,
  mkdirSync,
  mkdtempSync,
  readdirSync,
  rmSync,
} from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const goldenDir = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  'goldens',
  'linux',
);

function run(cmd, args) {
  const r = spawnSync(cmd, args, { encoding: 'utf8' });
  if (r.status !== 0) {
    throw new Error(`${cmd} ${args.join(' ')} failed:\n${r.stdout}${r.stderr}`);
  }
  return r.stdout.trim();
}

const headSha = run('git', ['rev-parse', 'HEAD']);

// PR workflows run in the base repository, not the fork a contributor
// clone points at, and gh's repo autodetection needs an interactive
// `gh repo set-default` in multi-remote clones. Derive the repo from the
// remotes instead (fork model: upstream is the base; direct clones have
// origin only).
const remoteUrl = (name) => {
  const r = spawnSync('git', ['remote', 'get-url', name], {
    encoding: 'utf8',
  });
  return r.status === 0 ? r.stdout.trim() : undefined;
};
const baseUrl = remoteUrl('upstream') ?? remoteUrl('origin');
// Repo names may contain dots (docsy.dev): strip trailing slashes and a
// terminal .git only. Optional port covers ssh:// forms; host and .git
// match case-insensitively.
const repoMatch = baseUrl
  ?.replace(/\/+$/, '')
  .replace(/\.git$/i, '')
  .match(/github\.com(?::\d+)?[/:]([^/\s]+\/[^/\s]+)$/i);
if (!repoMatch) throw new Error(`no GitHub base repo found in ${baseUrl}`);
const repo = repoMatch[1];

// The run must belong to the current HEAD and be completed: the branch's
// latest failed run may predate an in-flight push, and installing its
// artifact would silently baseline stale shots. A green HEAD run fails
// below at download (no visual-diffs artifact): also loud.
const runs = JSON.parse(
  run('gh', [
    'run',
    'list',
    '--repo',
    repo,
    '--workflow',
    'test',
    '--commit',
    headSha,
    '--limit',
    '1',
    '--json',
    'databaseId,status',
  ]),
);
const headRun = runs[0];
if (!headRun) {
  throw new Error(`no ${repo} test run found for HEAD ${headSha}`);
}
if (headRun.status !== 'completed') {
  throw new Error(`test run for HEAD is ${headRun.status}; wait for it`);
}
const runId = String(headRun.databaseId);
console.log(`downloading visual-diffs from ${repo} run ${runId}`);

const tmp = mkdtempSync(path.join(os.tmpdir(), 'visual-diffs-'));
try {
  run('gh', [
    'run',
    'download',
    runId,
    '--repo',
    repo,
    '-n',
    'visual-diffs',
    '-D',
    tmp,
  ]);
  const actuals = readdirSync(tmp).filter((f) => f.endsWith('-actual.png'));
  if (actuals.length === 0) {
    throw new Error('artifact contains no *-actual.png shots');
  }
  for (const f of actuals) {
    // Shot name REGION-VIEWPORT-SCHEME maps to golden path
    // REGION/VIEWPORT-SCHEME.png; the viewport-scheme tail is the fixed
    // vocabulary, the region prefix may itself contain hyphens.
    const m = f.match(/^(.+)-(desktop|mobile)-(light|dark)-actual\.png$/);
    if (!m) throw new Error(`unrecognized artifact shot name: ${f}`);
    const golden = path.join(goldenDir, m[1], `${m[2]}-${m[3]}.png`);
    mkdirSync(path.dirname(golden), { recursive: true });
    copyFileSync(path.join(tmp, f), golden);
    console.log(`wrote ${path.relative(process.cwd(), golden)}`);
  }
  console.log('review the images, then commit and push; CI must go green');
} finally {
  rmSync(tmp, { recursive: true, force: true });
}
