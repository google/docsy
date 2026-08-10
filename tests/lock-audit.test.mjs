// Committed lock audit: proves, from the committed manifests, locks,
// .npmrc, and workflows alone, that the supply-chain hardening invariants
// (#2700, #2702, #2712) still hold, so future integrity claims regenerate
// from this test instead of ad hoc audit runs. Fast and offline.

import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { parse } from 'yaml';

const repoRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  '..',
);

const readJSON = (relPath) =>
  JSON.parse(fs.readFileSync(path.join(repoRoot, relPath), 'utf8'));

const locks = {
  'package-lock.json': readJSON('package-lock.json'),
  'theme/package-lock.json': readJSON('theme/package-lock.json'),
};

// A lock key outside node_modules/ is a workspace source directory, and a
// link entry must point back into one: local code, not a registry fetch.
const workspaceDirs = new Set(['docsy.dev', 'theme']);

// The only dependencies allowed to bypass the npm registry: two reviewed
// markdownlint rules, commit-pinned from their author's repos. Everything
// else must carry a registry URL and an integrity hash.
const gitDependencyRepos = {
  'node_modules/markdownlint-rule-link-pattern':
    'chalin/markdownlint-rule-link-pattern',
  'node_modules/markdownlint-rule-no-shortcut-ref-link':
    'chalin/markdownlint-rule-no-shortcut-ref-link',
};

// Known-poisoned package@version pairs from the 2026-08 npm-worm campaign
// (Datadog Security Labs). A denylist only ever samples: the structural
// checks (registry + integrity, allowlists) are the load-bearing part.
// Refresh this list when intentionally updating dependencies.
const packageIocs = new Set([
  'keyv@6.0.0',
  '@cacheable/net@2.1.1',
  '@cacheable/node-cache@3.1.2',
  'cacheable@2.5.1',
  'flat-cache@6.1.24',
  'cacheable-request@13.0.20',
  '@cacheable/memory@2.2.1',
  'file-entry-cache@11.1.6',
  '@cacheable/utils@2.5.1',
  'cache-manager@7.2.10',
  'ecto@5.0.1',
]);

const lockEntries = (lock) =>
  Object.entries(lock.packages).filter(([key]) => key !== '');

test('locks: every package is registry+integrity, workspace-local, or an allowlisted git pin', () => {
  let registryPackages = 0;
  for (const [lockPath, lock] of Object.entries(locks)) {
    for (const [key, pkg] of lockEntries(lock)) {
      const id = `${lockPath} ${key}`;
      if (!key.startsWith('node_modules/')) {
        assert.ok(workspaceDirs.has(key), `${id} is a workspace directory`);
      } else if (pkg.link) {
        assert.ok(
          workspaceDirs.has(pkg.resolved),
          `${id} links to a workspace directory`,
        );
      } else if (key in gitDependencyRepos) {
        assert.match(
          pkg.resolved ?? '',
          new RegExp(
            `^git\\+ssh://git@github\\.com/${gitDependencyRepos[key]}\\.git#[0-9a-f]{40}$`,
          ),
          `${id} is commit-pinned to its reviewed repo`,
        );
      } else {
        assert.match(
          pkg.resolved ?? '',
          /^https:\/\/registry\.npmjs\.org\//,
          `${id} resolves to the npm registry`,
        );
        assert.match(
          pkg.integrity ?? '',
          /^sha512-/,
          `${id} carries an sha512 integrity hash`,
        );
        registryPackages += 1;
      }
    }
  }
  assert.ok(registryPackages > 0, 'registry packages were audited');
});

test('locks: every package version is absent from the campaign IOC list', () => {
  assert.ok(packageIocs.size > 0, 'the IOC denylist has entries');
  let checked = 0;
  for (const [lockPath, lock] of Object.entries(locks)) {
    for (const [key, pkg] of lockEntries(lock)) {
      if (!key.includes('node_modules/') || !pkg.version) continue;
      const name = key.slice(
        key.lastIndexOf('node_modules/') + 'node_modules/'.length,
      );
      checked += 1;
      assert.ok(
        !packageIocs.has(`${name}@${pkg.version}`),
        `${lockPath} ${name}@${pkg.version} is absent from the IOC list`,
      );
    }
  }
  assert.ok(checked > 0, 'locked package versions were audited');
});

test('locks and manifests: install scripts stay inventoried and version-pinned', () => {
  const withInstallScript = [];
  for (const [lockPath, lock] of Object.entries(locks)) {
    for (const [key, pkg] of lockEntries(lock)) {
      if (pkg.hasInstallScript) withInstallScript.push(`${lockPath} ${key}`);
    }
  }
  assert.deepEqual(
    withInstallScript,
    ['package-lock.json node_modules/hugo-extended'],
    'hugo-extended is the only locked package with an install script',
  );

  // The allowScripts entry is version-pinned, so it must track the locked
  // version: a stale pin fails npm ci under strict-allow-scripts, and this
  // assertion names the fix in the bump PR itself (#2712 round-3 review).
  const hugoVersion =
    locks['package-lock.json'].packages['node_modules/hugo-extended'].version;
  const { allowScripts } = readJSON('package.json');
  assert.deepEqual(
    allowScripts,
    { [`hugo-extended@${hugoVersion}`]: true },
    'allowScripts allows exactly the locked hugo-extended version',
  );

  const npmrc = fs.readFileSync(path.join(repoRoot, '.npmrc'), 'utf8');
  assert.match(
    npmrc,
    /^strict-allow-scripts=true$/m,
    '.npmrc enforces the allowScripts policy',
  );
  assert.match(
    npmrc,
    /^engine-strict=true$/m,
    '.npmrc hard-fails npm versions that would ignore allowScripts',
  );
});

test('manifests: git dependencies are tag-pinned to their reviewed repos', () => {
  const { devDependencies } = readJSON('package.json');
  for (const repo of Object.values(gitDependencyRepos)) {
    const name = repo.split('/')[1];
    assert.match(
      devDependencies[name] ?? '',
      new RegExp(`^github:${repo}#v\\d+\\.\\d+\\.\\d+$`),
      `${name} is tag-pinned to ${repo}`,
    );
  }
});

test('manifests: the install path keeps its locked, script-free form', () => {
  const { scripts } = readJSON('package.json');
  assert.match(scripts['install:safe'], /^npm ci /, 'install:safe is lock-enforced');
  for (const flag of ['--omit=optional', '--ignore-scripts']) {
    assert.ok(
      scripts['install:safe'].includes(` ${flag}`),
      `install:safe carries ${flag}`,
    );
  }
  assert.match(
    scripts['install:theme-deps'],
    /^npm ci --prefix theme /,
    'install:theme-deps is lock-enforced against the theme lock',
  );
  assert.ok(
    scripts['install:theme-deps'].includes(' --ignore-scripts'),
    'install:theme-deps carries --ignore-scripts',
  );
  assert.equal(
    scripts['_install:safe:post'],
    'npm rebuild hugo-extended --ignore-scripts=false && npm run install:theme-deps',
    'the post-install step re-enables scripts for hugo-extended alone',
  );
});

test('workflows: installs are locked and credential-isolated', () => {
  const workflowsDir = path.join(repoRoot, '.github/workflows');
  const files = fs
    .readdirSync(workflowsDir)
    .filter((file) => /\.ya?ml$/.test(file));
  assert.ok(files.length > 0, 'workflow files were found');

  let runSteps = 0;
  let checkouts = 0;
  let safeInstalls = 0;
  for (const file of files) {
    const workflow = parse(
      fs.readFileSync(path.join(workflowsDir, file), 'utf8'),
    );
    for (const [jobId, job] of Object.entries(workflow.jobs ?? {})) {
      const id = `${file} ${jobId}`;
      for (const step of job.steps ?? []) {
        if (step.uses?.startsWith('actions/checkout@')) {
          checkouts += 1;
          assert.equal(
            step.with?.['persist-credentials'],
            false,
            `${id} checkout sets persist-credentials false`,
          );
        }
        if (typeof step.run !== 'string') continue;
        runSteps += 1;
        // npm's installing/executing subcommands (aliases included) stay out
        // of workflows: dependency installation goes only through the
        // reviewed install:safe path. `npm pack`/`npm publish`/`npm init`
        // install nothing.
        assert.doesNotMatch(
          step.run,
          /\bnpm\s+(install|add|i|in|ins|inst|insta|instal|isnt|isnta|isntall|ci|update|up|upgrade|udpate|rebuild|rb|exec|x)\b/,
          `${id} run step installs only via reviewed npm scripts`,
        );
        assert.doesNotMatch(step.run, /\bnpx\b/, `${id} run step avoids npx`);
        safeInstalls += (step.run.match(/npm run install:safe\b/g) ?? [])
          .length;
      }
    }
  }
  assert.ok(runSteps > 0, 'workflow run steps were audited');
  assert.ok(checkouts > 0, 'checkout steps were audited');
  assert.ok(safeInstalls > 0, 'CI installs go through install:safe');
});
