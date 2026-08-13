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

// A bare `npx BIN` on an unpopulated tree falls back to the public registry
// and executes whatever package holds that name (npm-squat); `--no-install`
// refuses the fallback, and a plain bin name resolves only through PATH.
// `npm exec`/`npm x` is the same install-on-miss engine under another name
// (options tolerated before the subcommand), as are the alternate package
// managers' runners. Text-level guards: interpolation and indirection
// (`$N ci`) can outrun any grep, so these are regression guards against
// careless reintroduction; deliberate obfuscation is review's job.
const bareNpx = /\bnpx\s+(?!--no-install(?:\s|$))/;
// One home for the option prelude: values may be quoted, so a quoted
// value can't shield the subcommand from the scan.
const npmOptions = String.raw`(?:-{1,2}[\w-]+(?:[= ]("[^"]*"|'[^']*'|\S+))?\s+)*`;
const npmExec = new RegExp(String.raw`\bnpm\s+${npmOptions}(exec|x)\b`);
const altRunner = /\b(yarn|pnpm|bunx?|corepack)\b/;
// The JS-API forms: a spawned `npx` needs the fallback refusal as its
// literal first argument, and a spawned `npm` a literal array that doesn't
// reach the exec engine (a variable args array can't prove either).
const jsNpxSpawn = /['"`]npx['"`],(?!\s*\[\s*['"`]--no-install['"`])/;
const jsNpmExec = /['"`]npm['"`],(?!\s*\[\s*['"`](?!exec['"`]|x['"`]))/;

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

// See the bareNpx/npmExec rationale above.
test('package scripts and script files run no npm-exec or bare npx', () => {
  const manifests = ['package.json', 'docsy.dev', 'theme'].map((dir) =>
    dir.endsWith('.json') ? dir : `${dir}/package.json`,
  );
  const scriptFiles = [
    'docsy.dev/scripts',
    'docsy.dev/tests',
    'scripts',
    'tests',
    'theme/scripts',
  ]
    .flatMap((dir) =>
      fs
        .readdirSync(path.join(repoRoot, dir), { recursive: true })
        .filter((file) => /\.(sh|mjs|js|cjs|mts|pl)$/.test(file))
        .map((file) => `${dir}/${file}`),
    )
    // Not this file: an audit can't police its own source (an editor could
    // as easily drop the assertion), and self-scanning only forces the
    // patterns here into self-dodging shapes that weaken them.
    .filter((file) => file !== 'tests/lock-audit.test.mjs');
  assert.ok(
    scriptFiles.some((file) => file.endsWith('.sh')) &&
      scriptFiles.some((file) => file.endsWith('.mjs')),
    'shell and node scripts were found',
  );

  // The lookahead accepts the exact flag only: --no-install-anything is not
  // a fallback refusal. Quote-stripped variants too: `"npx"` runs npx.
  for (const manifest of manifests) {
    for (const [name, command] of Object.entries(readJSON(manifest).scripts)) {
      const spliced = command.replace(/\\\r?\n/g, ' ');
      for (const text of [spliced, spliced.replace(/["']/g, '')]) {
        const id = `${manifest} script ${name}`;
        assert.doesNotMatch(text, bareNpx, `${id} resolves bins locally`);
        assert.doesNotMatch(text, npmExec, `${id} runs no npm-exec`);
        assert.doesNotMatch(
          text,
          altRunner,
          `${id} uses npm as its only package runner`,
        );
      }
    }
  }
  for (const script of scriptFiles) {
    // Executable text only: comment lines may name npx in prose. Backslash-
    // newline splices first: `npx\` + continuation is a live invocation.
    const code = fs
      .readFileSync(path.join(repoRoot, script), 'utf8')
      .replace(/\\\r?\n/g, ' ')
      .split('\n')
      .filter((line) => !/^\s*(#|\/\/)/.test(line))
      .join('\n');
    for (const text of [code, code.replace(/["']/g, '')]) {
      assert.doesNotMatch(text, bareNpx, `${script} resolves bins locally`);
      assert.doesNotMatch(text, npmExec, `${script} runs no npm-exec`);
      assert.doesNotMatch(
        text,
        altRunner,
        `${script} uses npm as its only package runner`,
      );
    }
    if (/\.(mjs|js|cjs|mts)$/.test(script)) {
      assert.doesNotMatch(
        code,
        jsNpxSpawn,
        `${script} passes --no-install to spawned npx`,
      );
      assert.doesNotMatch(code, jsNpmExec, `${script} spawns no npm-exec`);
    }
  }
});

// node --test errors on unresolved paths only when nothing at all matches:
// a stale name that rides with matching ones is silently skipped. Resolve
// every argument here so a rename can't empty a test:repo suite unnoticed.
test('manifests: every test:repo argument resolves to test files', () => {
  const { scripts } = readJSON('package.json');
  assert.match(
    scripts['test:repo'],
    /^node --test /,
    'test:repo uses the node test runner',
  );
  const args = scripts['test:repo']
    .replace(/^node --test /, '')
    .split(' ')
    .map((arg) => arg.replace(/^'(.*)'$/, '$1'));
  for (const arg of args) {
    // globSync also returns directories, which node --test can't run.
    const testFiles = fs
      .globSync(arg, { cwd: repoRoot })
      .filter(
        (match) =>
          match.endsWith('.test.mjs') &&
          fs.statSync(path.join(repoRoot, match)).isFile(),
      );
    assert.ok(
      testFiles.length > 0,
      `test:repo argument ${arg} matches test files`,
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
    'npm rebuild hugo-extended --ignore-scripts=false && npm run install:theme-deps',
    'the post-install step re-enables scripts for hugo-extended alone',
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

  let runSteps = 0;
  let checkouts = 0;
  let safeInstalls = 0;
  for (const file of files) {
    const workflow = parse(
      fs.readFileSync(path.join(workflowsDir, file), 'utf8'),
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
      // Env can invert the audited config: NPM_CONFIG_* outranks .npmrc,
      // and the shell scripts honor a HUGO override.
      for (const env of [workflow.env, job.env]) {
        for (const key of Object.keys(env ?? {})) {
          assert.ok(
            !/^npm_config_/i.test(key) && key !== 'HUGO',
            `${id} env ${key} leaves npm config and HUGO untouched`,
          );
        }
      }
      for (const step of job.steps) {
        for (const key of Object.keys(step.env ?? {})) {
          assert.ok(
            !/^npm_config_/i.test(key) && key !== 'HUGO',
            `${id} step env ${key} leaves npm config and HUGO untouched`,
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
        // command; scan a quote-stripped variant too, since the shell runs
        // `"npm" ci` as npm.
        const run = step.run.replace(/\\\r?\n/g, ' ');
        for (const text of [run, run.replace(/["']/g, '')]) {
          // Deny npm's tree-reifying/executing subcommands in raw run
          // steps: the one sanctioned install is the reviewed install:safe
          // script, counted below. `npm run` wrappers resolve to reviewed
          // scripts, and `npm pack`/`npm publish`/`npm init` install
          // nothing.
          assert.doesNotMatch(
            text,
            new RegExp(
              String.raw`\bnpm\s+${npmOptions}(install(-test|-ci-test|-clean)?|isntall(-clean)?|clean-install(-test)?|add|i|in|ins|inst|insta|instal|isnt|isnta|it|cit|sit|ic|ci|dedupe|ddp|update|up|upgrade|udpate|rebuild|rb|exec|x)\b`,
            ),
            `${id} run step installs only via reviewed npm scripts`,
          );
          assert.doesNotMatch(text, /\bnpx\b/, `${id} run step avoids npx`);
          assert.doesNotMatch(
            text,
            altRunner,
            `${id} run step uses npm as its only package manager`,
          );
          // GITHUB_ENV writes poison later steps' env past the map checks
          // above; GITHUB_PATH prepends, so a writer could shadow npm
          // itself -- pin its one reviewed use (the lychee install).
          assert.doesNotMatch(
            text,
            /GITHUB_ENV/,
            `${id} run step leaves later steps' env untouched`,
          );
          for (const line of text.split('\n')) {
            if (!line.includes('GITHUB_PATH')) continue;
            const lycheeLine = 'echo "$HOME/.local/bin" >> "$GITHUB_PATH"';
            assert.equal(
              line.trim(),
              text === run ? lycheeLine : lycheeLine.replace(/["']/g, ''),
              `${id} run step writes GITHUB_PATH only via the reviewed lychee line`,
            );
          }
        }
        safeInstalls += (run.match(/npm run install:safe\b/g) ?? []).length;
      }
    }
  }
  assert.ok(runSteps > 0, 'workflow run steps were audited');
  assert.ok(checkouts > 0, 'checkout steps were audited');
  assert.ok(safeInstalls > 0, 'CI installs go through install:safe');
});
