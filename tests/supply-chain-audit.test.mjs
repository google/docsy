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
    normalized !== 'NODE_OPTIONS' &&
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
    [
      'package-lock.json node_modules/hugo-extended',
      'package-lock.json node_modules/puppeteer',
    ],
    'hugo-extended and puppeteer are the only locked packages with install scripts',
  );

  // The allowScripts entries are version-pinned, so they must track the
  // locked versions: a stale pin fails npm ci under strict-allow-scripts,
  // and this assertion names the fix in the bump PR itself (#2712).
  // puppeteer's postinstall (browser download) is deliberately denied:
  // the visual suite installs its browser on demand (install:browser).
  const lockedVersion = (name) =>
    locks['package-lock.json'].packages[`node_modules/${name}`].version;
  const { allowScripts } = readJSON('package.json');
  assert.deepEqual(
    allowScripts,
    {
      [`hugo-extended@${lockedVersion('hugo-extended')}`]: true,
      [`puppeteer@${lockedVersion('puppeteer')}`]: false,
    },
    'allowScripts covers exactly the locked install-script packages',
  );

  // npm takes a key's last assignment, so spot-checks can be reversed by
  // a later line, and any unpinned addition (node-options=--require …,
  // ignore-scripts=false) changes install behavior: pin the full
  // assignment set. Each setting's rationale lives beside it in .npmrc.
  assert.deepEqual(
    fs
      .readFileSync(path.join(repoRoot, '.npmrc'), 'utf8')
      .split('\n')
      .map((line) => line.trim())
      .filter((line) => line !== '' && !line.startsWith('#')),
    [
      'engine-strict=true',
      'strict-allow-scripts=true',
      'script-shell=bash',
      '@docsy:registry=https://registry.npmjs.org/',
    ],
    '.npmrc carries exactly the reviewed npm settings',
  );
  // npm resolves workspace config at the root, but --prefix/-C runs read
  // the target directory's .npmrc as project config: their absence keeps
  // the root file the one audited home.
  for (const dir of ['docsy.dev', 'theme']) {
    assert.ok(
      !fs.existsSync(path.join(repoRoot, dir, '.npmrc')),
      `${dir} has no workspace .npmrc`,
    );
  }
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
  assert.equal(
    scripts['install:browser'],
    'node node_modules/puppeteer/install.mjs',
    'install:browser invokes the locked dependency entry point directly',
  );
  // Cross-root anchoring: this file and the wiring guard ride the tests
  // glob, so scripts/suite-anchor.test.mjs pins that glob and the
  // tests-root guards from the scripts glob; anchor it and the wiring
  // guard back from here.
  for (const guard of [
    'scripts/suite-anchor.test.mjs',
    'tests/test-wiring.test.mjs',
  ]) {
    assert.ok(
      fs.existsSync(path.join(repoRoot, guard)),
      `structural guard ${guard} exists`,
    );
  }
  // npm wraps every script in implicit pre<name>/post<name> hooks: a hook
  // sibling would run unreviewed code inside the pinned chain.
  for (const name of [
    'install:safe',
    'install:theme-deps',
    '_install:safe:post',
    'install:browser',
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
  // Netlify [build.environment] feeds the same install and build
  // processes the workflow env screen guards: screen every env-shaped key
  // the same way, and pin NPM_FLAGS exactly -- it is what constrains
  // Netlify's automatic install to resolution only (its comment in
  // netlify.toml).
  let netlifyEnvKeys = 0;
  for (const [, key, value] of netlifyConfig.matchAll(
    /^\s*([A-Z][A-Z0-9_]*)\s*=\s*(.*)$/gm,
  )) {
    netlifyEnvKeys += 1;
    assert.ok(
      envLeavesInstallConfigUntouched(key),
      `Netlify env ${key} leaves npm, Node, and Hugo config untouched`,
    );
    if (key === 'NPM_FLAGS') {
      assert.equal(
        value,
        '"--dry-run --ignore-scripts"',
        'NPM_FLAGS constrains the Netlify auto-install to resolution only',
      );
    }
  }
  assert.ok(netlifyEnvKeys > 0, 'Netlify env keys were audited');
  // Netlify command chains are execution entry points the runner lint
  // doesn't scan (TOML): exact-pin them.
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
      // the shell scripts honor a HUGO override, and NODE_OPTIONS injects
      // code into every Node process.
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
        // nothing (`npm audit fix` and `npm link` do).
        assert.doesNotMatch(
          run,
          /\bnpm\s+(install(-test|-ci-test|-clean)?|isntall(-clean)?|clean-install(-test)?|add|i|in|ins|inst|insta|instal|isnt|isnta|isntal|it|cit|sit|ic|ci|dedupe|ddp|update|up|upgrade|udpate|rebuild|rb|exec|x|audit|link|ln)\b/,
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
