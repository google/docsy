// Committed supply-chain audit: proves, from the committed manifests,
// locks, .npmrc, Netlify config, and workflows alone, that the hardening
// invariants (#2700, #2702, #2712) still hold, so future integrity claims
// regenerate from this test instead of ad hoc audit runs. Fast and
// offline. Companion guards: tests/runner-lint.test.mjs (sanctioned
// runner forms in scripts) and tests/test-wiring.test.mjs (suite wiring).

import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { parse } from 'yaml';

import { UNSAFE_HUGO_ENV } from '../scripts/rebuild-hugo-extended.mjs';

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

// Deliberately duplicated from runner-lint.test.mjs: one regex line beats
// a cross-test-file import.
const altRunner = /\b(yarn|pnpm|bunx?|corepack)\b/;
// One home for the unsafe-installer-control names: the runtime helper
// exports the list; its unit test pins the content literally.
const unsafeHugoEnv = new Set(UNSAFE_HUGO_ENV);
const envLeavesInstallConfigUntouched = (key) => {
  const normalized = key.toUpperCase();
  return (
    !normalized.startsWith('NPM_CONFIG_') &&
    normalized !== 'HUGO' &&
    !unsafeHugoEnv.has(normalized)
  );
};

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
          /^sha512-[A-Za-z0-9+/]{86}==$/,
          `${id} carries a full sha512 integrity hash`,
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
      // Both identities: the lock key names what's installed, pkg.name (npm
      // aliases) what it really is; a spoofed name field must not clear the
      // key-derived one.
      const keyName = key.slice(
        key.lastIndexOf('node_modules/') + 'node_modules/'.length,
      );
      for (const name of new Set([keyName, pkg.name ?? keyName])) {
        checked += 1;
        assert.ok(
          !packageIocs.has(`${name}@${pkg.version}`),
          `${lockPath} ${name}@${pkg.version} is absent from the IOC list`,
        );
      }
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

  // npm takes a key's last assignment, so presence isn't enough: a later
  // `KEY=false` line would win while the `=true` line still matches.
  const npmrcLines = fs
    .readFileSync(path.join(repoRoot, '.npmrc'), 'utf8')
    .split('\n')
    .map((line) => line.trim());
  for (const [key, why] of [
    ['strict-allow-scripts', 'enforces the allowScripts policy'],
    ['engine-strict', 'hard-fails npm versions that would ignore allowScripts'],
    ['@docsy:registry', 'pins the @docsy scope to the npm registry'],
  ]) {
    const expected =
      key === '@docsy:registry'
        ? `${key}=https://registry.npmjs.org/`
        : `${key}=true`;
    assert.deepEqual(
      npmrcLines.filter((line) => new RegExp(`^${key}\\s*=`).test(line)),
      [expected],
      `.npmrc ${why} via a single ${expected}`,
    );
  }

  // Pin rationale: the .npmrc comment beside the setting (two-shell quoting
  // divergence); same last-assignment guard as the loop above.
  assert.deepEqual(
    npmrcLines.filter((line) => /^script-shell\s*=/.test(line)),
    ['script-shell=bash'],
    '.npmrc runs npm scripts under Bash on every platform',
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

// Exact pins: prefix/flag matching would accept an appended `&& npm
// install …` rider on a script the workflow audit trusts by name.
test('manifests: the install path keeps its locked, script-free form', () => {
  const { scripts } = readJSON('package.json');
  assert.equal(
    scripts['install:safe'],
    'npm ci --omit=optional --ignore-scripts --no-audit --no-fund && npm run _install:safe:post',
    'install:safe is the reviewed lock-enforced, script-free command',
  );
  assert.equal(
    scripts['install:theme-deps'],
    'npm ci --prefix theme --ignore-scripts --omit=dev --omit=peer --no-audit --no-fund',
    'install:theme-deps is the reviewed lock-enforced, script-free command',
  );
  assert.equal(
    scripts['_install:safe:post'],
    'node scripts/rebuild-hugo-extended.mjs && npm run install:theme-deps',
    'the post-install step uses the retrying Hugo rebuild helper',
  );
  // Cross-pin: the wiring guard polices test:repo membership, so its own
  // presence there is asserted here, in an independently wired file --
  // dropping either requires editing the other (adversarial round 12).
  assert.ok(
    scripts['test:repo'].includes(' tests/test-wiring.test.mjs'),
    'test:repo runs the suite-wiring guard',
  );
  // npm wraps every script in implicit pre<name>/post<name> hooks: a hook
  // sibling would run unreviewed code inside the pinned chain.
  for (const name of [
    'install:safe',
    'install:theme-deps',
    '_install:safe:post',
  ]) {
    for (const hook of [`pre${name}`, `post${name}`]) {
      assert.equal(
        scripts[hook],
        undefined,
        `${hook} stays absent, so ${name} runs exactly as pinned`,
      );
    }
  }

  // Safe smoke predicts a permissive Docsy install only while permissive
  // installs add no consumer-facing lifecycle behavior.
  for (const manifest of ['package.json', 'theme/package.json']) {
    const consumerScripts = readJSON(manifest).scripts ?? {};
    for (const hook of ['preinstall', 'install', 'postinstall', 'prepare']) {
      assert.equal(
        consumerScripts[hook],
        undefined,
        `${manifest} declares no consumer ${hook} hook`,
      );
    }
  }
});

test('workflows: installs are locked and credential-isolated', () => {
  const workflowsDir = path.join(repoRoot, '.github/workflows');
  const files = fs
    .readdirSync(workflowsDir)
    .filter((file) => /\.ya?ml$/.test(file));
  assert.ok(files.length > 0, 'workflow files were found');
  const netlifyConfig = fs.readFileSync(
    path.join(repoRoot, 'docsy.dev/netlify.toml'),
    'utf8',
  );
  for (const name of unsafeHugoEnv) {
    assert.doesNotMatch(
      netlifyConfig,
      new RegExp(`^\\s*${name}\\s*=`, 'im'),
      `Netlify leaves ${name} unset`,
    );
  }
  // Netlify command chains are execution entry points the runner lint
  // doesn't scan (TOML): exact-pin them (adversarial round 12).
  assert.deepEqual(
    netlifyConfig
      .split('\n')
      .filter((line) => /^\s*command\s*=/.test(line))
      .map((line) => line.trim())
      .sort(),
    [
      'command = "npm run _netlify:prepare && npm run -C docsy.dev build:preview"',
      'command = "npm run _netlify:prepare && npm run -C docsy.dev build:production"',
    ].sort(),
    'Netlify build commands are the two reviewed chains',
  );

  let runSteps = 0;
  let checkouts = 0;
  let safeInstalls = 0;
  for (const file of files) {
    const workflow = parse(
      fs.readFileSync(path.join(workflowsDir, file), 'utf8'),
    );
    assert.equal(
      workflow.defaults?.run?.shell,
      undefined,
      `${file} uses the default workflow shell`,
    );
    for (const [jobId, job] of Object.entries(workflow.jobs ?? {})) {
      const id = `${file} ${jobId}`;
      // A stepless job (a reusable-workflow call, say) would escape this
      // scan; extend the audit deliberately instead.
      assert.ok(
        Array.isArray(job.steps),
        `${id} is a steps job this audit scans`,
      );
      // Mutable images run external code around every step, outside the
      // action-pin invariant.
      assert.equal(job.container, undefined, `${id} runs container-free`);
      assert.equal(job.services, undefined, `${id} runs service-free`);
      assert.equal(
        job.defaults?.run?.shell,
        undefined,
        `${id} uses the default job shell`,
      );
      // Env can invert the audited config: NPM_CONFIG_* outranks .npmrc,
      // and the shell scripts honor a HUGO override.
      for (const env of [workflow.env, job.env]) {
        for (const key of Object.keys(env ?? {})) {
          assert.ok(
            envLeavesInstallConfigUntouched(key),
            `${id} env ${key} leaves npm and Hugo config untouched`,
          );
        }
      }
      for (const step of job.steps) {
        for (const key of Object.keys(step.env ?? {})) {
          assert.ok(
            envLeavesInstallConfigUntouched(key),
            `${id} step env ${key} leaves npm and Hugo config untouched`,
          );
        }
        if (step.shell !== undefined) {
          assert.equal(
            step.shell,
            'bash',
            `${id} uses the reviewed bash shell`,
          );
        }
        if (step.uses?.startsWith('actions/checkout@')) {
          checkouts += 1;
          assert.equal(
            step.with?.['persist-credentials'],
            false,
            `${id} checkout sets persist-credentials false`,
          );
        }
        // Local actions and unpinned refs run code this audit doesn't walk.
        if (step.uses) {
          assert.match(
            step.uses,
            /^[\w-]+\/[\w.-]+(\/[\w./-]+)?@[0-9a-f]{40}$/,
            `${id} uses a SHA-pinned marketplace action`,
          );
        }
        if (typeof step.run !== 'string') continue;
        runSteps += 1;
        // Splice continuations first: `npm\` + newline + `ci` is one
        // command.
        const run = step.run.replace(/\\\r?\n/g, ' ');
        // Deny npm's tree-reifying/executing subcommands in raw run
        // steps: the one sanctioned install is the reviewed install:safe
        // script, counted below. `npm run` wrappers resolve to reviewed
        // scripts, and `npm pack`/`npm publish`/`npm init` install
        // nothing.
        assert.doesNotMatch(
          run,
          /\bnpm\s+(install(-test|-ci-test|-clean)?|isntall(-clean)?|clean-install(-test)?|add|i|in|ins|inst|insta|instal|isnt|isnta|it|cit|sit|ic|ci|dedupe|ddp|update|up|upgrade|udpate|rebuild|rb|exec|x)\b/,
          `${id} run step installs only via reviewed npm scripts`,
        );
        assert.doesNotMatch(run, /\bnpx\b/, `${id} run step avoids npx`);
        assert.doesNotMatch(
          run,
          altRunner,
          `${id} run step uses npm as its only package manager`,
        );
        // GITHUB_ENV writes poison later steps' env past the map checks
        // above; GITHUB_PATH prepends, so a writer could shadow npm
        // itself; pin its one reviewed use (the lychee install).
        assert.doesNotMatch(
          run,
          /GITHUB_ENV/,
          `${id} run step leaves later steps' env untouched`,
        );
        for (const line of run.split('\n')) {
          if (!line.includes('GITHUB_PATH')) continue;
          assert.equal(
            line.trim(),
            'echo "$HOME/.local/bin" >> "$GITHUB_PATH"',
            `${id} run step writes GITHUB_PATH only via the reviewed lychee line`,
          );
        }
        safeInstalls += (run.match(/npm run install:safe\b/g) ?? []).length;
      }
    }
  }
  assert.ok(runSteps > 0, 'workflow run steps were audited');
  assert.ok(checkouts > 0, 'checkout steps were audited');
  assert.ok(safeInstalls > 0, 'CI installs go through install:safe');
});
