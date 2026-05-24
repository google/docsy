---
title: TOF compatibility spike notes
date: 2026-05-21
status: in-progress
companion: ./theme-only-folder.execution.md
cSpell:ignore: fontawesome themesdir devdeps
---

## About

Living log of the TOF compatibility spike. Records the exact consumer-facing
config edits, the maintainer-side changes that made them possible, and any
observations. Read by the release-notes drafting work in Phase 5.

## Repo state at start of spike

- Branch: `chalin-m24-monorepo-2026-0520`
- Hugo version: 0.157.0
- Starting layout: theme files at repo root, `docsy.dev/` is the website
  workspace, repo root carries theme runtime deps + repo-wide maintainer
  tooling.

## Refined repo layout (settled during the spike)

The spike converged on a four-folder shape that is the new "TOF + thin root":

```text
.
├── theme/         # canonical theme + theme/package.json (source of truth)
├── docsy.dev/     # website; its own node_modules with site-build tooling
├── _dev/          # maintainer-orchestration folder; devDeps incl. hugo-extended
├── tasks/         # planning, spike notes, release prep
└── package.json   # thin publishable shim; name "docsy"; files: [theme]
```

Each of `theme/`, `docsy.dev/`, and `_dev/` carries an independent
`package.json` and is installed independently (no npm workspaces are declared
anywhere). The repo root is **not** a workspace root; it is the consumer-facing
publishable manifest only.

Key invariant: a consumer installing `docsy` (from GitHub or, later, npm) gets
exactly `theme/` + a handful of top-level docs files, **never** any of `_dev/`,
`docsy.dev/`, or maintainer tooling.

## Phase 1: `docsy.dev` (Hugo, classic themesDir + theme)

### Consumer-side change

```diff
# docsy.dev/config/_default/hugo.yaml
-theme: [docsy]
+theme: [docsy/theme]
```

That is the entire consumer-facing edit for `docsy.dev`'s use of Docsy. The
`_hugo --themesDir ../..` setting in `docsy.dev/package.json` was unchanged.
**Result: one-line change.**

### Maintainer-side changes (Phase 0 + 1 combined)

The following were necessary to land the consumer-side one-line change. Captured
here for traceability; they are not user-facing.

- `git mv` of canonical theme files into `theme/`: `assets`, `i18n`, `images`,
  `layouts`, `static`, `hugo.yaml`, `theme.toml`, `go.mod`, `go.sum`.
- `theme/go.mod` `module` declaration changed to
  `github.com/google/docsy/theme`.
- `theme/hugo.yaml`: the legacy `../../node_modules/*` escape mounts were
  dropped. Hugo's `nodeModulesRoot` helper (`modules/collect.go`, see Hugo issue
  #14083) normalises both `node_modules/X` and `../../node_modules/X` to the
  same form and then performs a dual lookup — first under the theme directory,
  then under the consumer site's working directory. The escape form is pure
  backwards compatibility for pre-existing configs; under TOF the simple
  `node_modules/X` mount is canonical and covers both cases.
- `theme/package.json` created. Source of truth for theme runtime deps
  (`bootstrap`, `@fortawesome/fontawesome-free`). Postinstall delegates to
  `theme/scripts/mkdirp-hugo-mod.js` so that a future split where `theme/`
  becomes its own repo needs no further script moves.
- `scripts/mkdirp-hugo-mod.js` moved to `theme/scripts/mkdirp-hugo-mod.js`
  (rides along inside the published theme package).
- New `_dev/` folder created as the maintainer-orchestration root. Holds
  maintainer-only devDeps (`hugo-extended`, `prettier`, `markdownlint-*`,
  `@cspell/dict-fr-fr`) and all orchestration scripts.
  `git mv scripts _dev/scripts` preserves history.
- `_dev/scripts/sync-root-deps.mjs` added. Reads `theme/package.json`'s
  `dependencies` and writes them to the root `package.json` so the consumer's
  install graph reflects the theme's runtime deps. Idempotent.
- Root `package.json` slimmed to a publishable shim: `name: "docsy"`, `version`,
  `repository`, `license`,
  `files: ["CHANGELOG.md", "LICENSE", "README.md", "theme"]`, two lifecycle
  scripts (`prepare` runs `sync-root-deps.mjs`; `postinstall` runs
  `theme/scripts/mkdirp-hugo-mod.js ..`). No `devDependencies`, no workspaces,
  no maintainer scripts.
- `docsy.dev/package.json` kept its site-build/site-tooling deps but
  `hugo-extended` was removed (now lives in `_dev/`).

### Observations

- **Hugo's mount-source validation for themes/modules** rejects sources
  containing `..` segments unless they match a special-cased prefix. The only
  special-cased prefix is `../../node_modules/` (kept for backwards
  compatibility with pre-Hugo-0.152 configs). Deepening to
  `../../../node_modules/` is **not** recognised and falls through to the
  `filepath.IsLocal` rejection. Relevant code: `nodeModulesRoot` in
  `modules/collect.go`; see Hugo issue #14083.
- **The simple `node_modules/X` mount form is canonical under TOF.** After
  normalisation, Hugo tries the source first relative to the theme directory and
  then relative to the consumer site's working directory. This dual lookup is
  what the escape form was buying; under TOF we spell it the modern way. Net
  effect: the `../../node_modules/*` block in `theme/hugo.yaml` was redundant
  and could be dropped.
- **Hugo module `imports:` alone is not sufficient** to replace the local
  `node_modules/*` mounts when the theme is loaded via classic
  `themesDir + theme` (which `docsy.dev` does today). SCSS resolution failed
  without the local mounts even though `imports:` was configured.
- **npm workspaces were tried and abandoned.** An earlier iteration declared
  workspaces at `_dev/package.json` (`["..", "../docsy.dev"]`) to give
  maintainers a single `npm install`. With root listed as a workspace, npm
  recognised it but did **not** install the workspace members' declared deps
  (`bootstrap`, site-tooling); only the workspace-root's own devDeps were
  installed. Reducing to `["../docsy.dev"]` did not help. The clean alternative
  is to keep each of `theme/`, `docsy.dev/`, and `_dev/` as independent package
  installs with no workspaces declared anywhere.
- **Hugo's theme-local lookup is what makes the no-workspaces design work.**
  With `cd theme && npm install`, `bootstrap` lands at
  `theme/node_modules/bootstrap`. Hugo's dual lookup finds it on the
  theme-relative first pass; nothing is needed in `docsy.dev/node_modules/`. No
  symlinks. No deps duplicated in `docsy.dev/package.json`.
- **`hugo-extended` is on PATH for `docsy.dev` builds via npm-script
  inheritance.** When `cd _dev && npm run build` calls
  `npm run -C ../docsy.dev build`, the inner npm process inherits the outer
  process's PATH (which already includes `_dev/node_modules/.bin/`). The `hugo`
  binary is found there. This is the single source of the Hugo version across
  the monorepo.
- **Postinstall lives at the published-package boundary.** The root
  `postinstall` runs `node theme/scripts/mkdirp-hugo-mod.js ..` inside the
  consumer's `node_modules/docsy/` after install, creating the empty
  `github.com/*` placeholder dirs Hugo expects when the theme is loaded as a
  module. `theme/package.json` carries the same postinstall for the future split
  where `theme/` becomes its own published repo.

### Status

**Phase 1 exit criterion met.** `docsy.dev` builds locally from `theme/` with
the one-line consumer config change (223 EN pages, 218 FR pages) **and** with no
symlinks anywhere. The build chain works with a clean three-install maintainer
setup:

```sh
cd theme && npm install        # theme runtime deps (bootstrap, fontawesome)
cd docsy.dev && npm install    # site build deps (autoprefixer, postcss-cli, …)
cd _dev && npm install         # hugo-extended + monorepo maintainer tooling
cd _dev && npm run build       # green
```

A convenience `npm run install:all` in `_dev/` runs the three installs in
sequence.

### Open question

- Package versioning: see
  [the plan's section](./theme-only-folder.plan.md#package-versioning).
  Currently both root and theme carry the same `version`; the policy is
  unresolved.

## Phase 2: NPM (GitHub) — pack/install smoke test

This phase exercises the install path a consumer would hit with
`npm install github:google/docsy#<rev>`, locally and with the spike branch.

### Smoke test

Run `npm pack` at the repo root, inspect the tarball, then install it into a
fresh consumer directory:

```sh
# at repo root
npm pack
# -> docsy-0.15.1-dev+002-over-main-ce9942b8.tgz

CONSUMER=$(mktemp -d)
cd "$CONSUMER"
echo '{"name":"c","version":"0.0.0","private":true}' > package.json
npm install /path/to/docsy-*.tgz
```

### Results

- The pack ran `prepare` → `_dev/scripts/sync-root-deps.mjs`, which copied
  `bootstrap` and `@fortawesome/fontawesome-free` from `theme/package.json` into
  the root `package.json`'s `dependencies`. Idempotent: re-running with the
  committed synced state is a no-op.
- Tarball top-level entries: `CHANGELOG.md`, `LICENSE`, `README.md`,
  `package.json`, `theme/`. No `_dev/`, no `docsy.dev/`, no maintainer scripts,
  no devDeps. Total: 2879 files, 8.0 MB (≈ the theme tree).
- Consumer `node_modules/` after install:
  - `node_modules/docsy/` containing exactly `CHANGELOG.md`, `LICENSE`,
    `README.md`, `package.json`, `theme/`.
  - `node_modules/bootstrap/` (transitive).
  - `node_modules/@fortawesome/fontawesome-free/` (transitive).
  - `node_modules/@popperjs/` (transitive via bootstrap).
  - **0 vulnerabilities reported** by npm audit.
  - 4 packages added in total.
- Consumer postinstall ran. `node_modules/github.com/FortAwesome/Font-Awesome`
  and `node_modules/github.com/twbs/bootstrap` placeholder dirs created so
  Hugo's module loader does not error.

### Phase 2 observations

- **The `files` whitelist is the linchpin.** Pre-spike, root had no `files`
  field, so `npm install github:google/docsy` brought the entire monorepo into
  the consumer's `node_modules/docsy/`. With `files: ["theme", …]` the tarball
  contains only what a consumer needs.
- **No `devDependencies` at root means git-URL installs do not trigger a dev
  install.** npm's docs note that the presence of a `prepare` script in a
  package being installed from git triggers a `npm install` of `dependencies
  - devDependencies` in the clone before pack. Because root carries no devDeps,
    that step is a no-op. The headache that pre-spike consumers hit (entire
    maintainer toolchain dragged into their install) is gone.
- **`prepare` is the right hook (not `prepack`).** `prepack` only runs on
  `npm pack` / `npm publish`. `prepare` runs on those **and** during the git-URL
  install workflow in the clone before the tarball is built. The sync script
  must run in both places, so `prepare` is the correct lifecycle pick. The cost
  of `prepare` (devDeps install in the clone) is zero here because root has no
  devDeps.
- **Working-tree cleanliness after pack.** Because root commits the synced deps
  (kept aligned with `theme/package.json` by the sync script), the `prepare`
  write during a maintainer's `npm pack` is a no-op and the working tree stays
  clean. The script doubles as a CI guard against drift.

### Phase 2 status

**Phase 2 exit criterion met for the NPM-tarball install path.** Outstanding
work for Phase 2: validate the same flow via `make-site.sh -s NPM`, then
exercise `-s HUGO_MODULE` and the non-module `themes/docsy/` install. Those
remain unchanged in the execution plan.

## Phase 3: GitHub CI — pending

To be recorded during Phase 3 work.
