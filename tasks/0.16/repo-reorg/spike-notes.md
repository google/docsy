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

## Migration snippets for Phase 5

Use this section as the release-facing source of truth. The rest of this file is
the engineering record behind these snippets.

### Hugo module

Before:

```yaml
module:
  imports:
    - path: github.com/google/docsy
```

After:

```yaml
module:
  imports:
    - path: github.com/google/docsy/theme
```

Upgrade command:

```sh
hugo mod get github.com/google/docsy/theme@<version>
hugo mod tidy
```

### NPM from GitHub

Before:

```yaml
theme: docsy
themesDir: node_modules
```

After:

```yaml
theme: docsy/theme
themesDir: node_modules
```

Install command shape is unchanged except for the Docsy version:

```sh
npm install --save-dev google/docsy#semver:<version> --omit=peer
```

### Clone or Git submodule

Before:

```yaml
theme: docsy
```

After:

```yaml
theme: docsy/theme
```

Setup commands after TOF:

```sh
cd themes
git clone -b <version> https://github.com/google/docsy
(cd docsy/theme && npm install)
(cd docsy && node scripts/mkdirp-hugo-mod.js ..)
cd ..
npm install --save-dev autoprefixer postcss-cli
```

For a Git submodule install, keep the existing submodule workflow but run the
same `docsy/theme` npm install and `mkdirp-hugo-mod.js` commands after updating
the submodule.

## Repo state at start of spike

- Branch: `chalin-m24-monorepo-2026-0520`
- Hugo version: 0.157.0
- Starting layout: theme files at repo root; `docsy.dev/` is the website
  workspace; repo root carries theme runtime deps + repo-wide maintainer
  tooling.

## Repo layout after Phase 0 (current)

```text
.
├── theme/                  # canonical theme tree (assets, layouts, i18n,
│                           #   static, hugo.yaml, theme.toml, go.mod, go.sum)
│   └── package.json        # private mirror of theme runtime deps
├── docsy.dev/              # website; its own node_modules
├── scripts/                # maintainer scripts (chroma, scrollspy patch,
│                           #   sync-theme-deps.mjs, …)
├── tasks/
└── package.json            # canonical for theme runtime deps + repo-wide
                            #   maintainer tooling (Prettier, mdl, cSpell dict)
```

Key invariants of the current implementation:

- The repo root `package.json` is the **single source of truth** for theme
  runtime dependency versions. `theme/package.json` is a private mirror
  (`"private": true`) kept aligned by `scripts/sync-theme-deps.mjs`.
- No npm workspaces are declared at the repo root yet; the `workspaces` array is
  intentionally empty (with a `workspaces-todo` comment marker). `docsy.dev`'s
  `_install-theme-deps` postinstall handles the cross-folder install instead.
- `theme/hugo.yaml` uses the canonical `node_modules/<pkg>` mount form. The
  legacy `../../node_modules/*` escape mounts were dropped.

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
- `theme/package.json` created as a **private mirror** (`"private": true`) of
  the root's theme runtime deps (`bootstrap`, `@fortawesome/fontawesome-free`).
  Kept aligned with the root by `scripts/sync-theme-deps.mjs`.
- `scripts/sync-theme-deps.mjs` added (with `scripts/sync-theme-deps.test.mjs`
  picked up by `test:tooling`). Wired into `_prepare`, `postupdate:dep`, and
  `postupdate:packages`. A maintainer can also invoke it directly:
  `npm run _sync:theme-deps`.
- Repo-root `package.json` script paths updated to point at the new theme
  locations: `_check:format` now globs `theme/assets *.md theme/i18n …`,
  `_cp:bs-rfs` writes to `theme/assets/_vendor/bootstrap/scss/`, etc.
  `mkdirp-hugo-mod.js`, `_gen-chroma-style.sh`, `refresh-sass-variables.pl`,
  `scrollspy-patch/*`, `getHugoModules/index.mjs`, and `make-site.sh` similarly
  updated.
- `.prettierignore` updated from `/assets/...` to `/theme/assets/...` so the
  same files are skipped as before. `.markdownlint-cli2.yaml`'s `!layouts/**`
  glob updated to `!theme/layouts/**`.
- `docsy.dev/package.json` gained `_install-theme-deps`:
  `npm install ../theme --install-links --no-save && rm -rf node_modules/theme`,
  wired in as a `postinstall`. The `--install-links` flag tells npm to treat the
  local `../theme` package as a tarball, which has the side effect of installing
  `theme/`'s declared runtime deps (Bootstrap, Font Awesome) into
  `docsy.dev/node_modules/`. The `rm -rf` line then drops the now-redundant copy
  of the theme tree itself.
- `docsy.dev/scripts/_install.sh` removed. `docsy.dev/package.json` gained
  `install:all` (`npm install -C .. && npm install`). Netlify runs
  `npm run install:all && npm run build:preview` (and `build:production` in
  production) per `docsy.dev/netlify.toml`.

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
- **npm workspaces were tried and abandoned for this PR.** Variants were
  explored (root with `["docsy.dev"]`, with `["theme", "docsy.dev"]`, and with
  `[]`). Each variant had a trade-off between hoisting behaviour and the
  cross-folder install of theme runtime deps into `docsy.dev/node_modules/`. The
  shipped design declares `workspaces: []` (with a `workspaces-todo` comment
  marker for the follow-on plan) and relies on `docsy.dev`'s
  `_install-theme-deps` postinstall for the cross-folder hand-off.
- **`hugo-extended` continues to live in `docsy.dev/devDependencies`.** No
  change from the pre-TOF layout. The maintainer-tooling-folder reorganisation
  considered during the spike was deferred to a follow-on plan.

### Status

**Phase 1 exit criterion met for local build.** `docsy.dev` builds locally from
`theme/` with the one-line consumer config change (223 EN pages, 218 FR pages)
**and** with no symlinks anywhere. The build chain works with this maintainer
setup:

```sh
npm install                  # repo-root deps (theme runtime + maintainer tools)
npm run docsy.dev-install    # docsy.dev deps (site build + hugo-extended);
                             #   postinstall runs _install-theme-deps
npm run build                # green
```

The second half of the Phase 1 exit criterion — a green Netlify deploy preview —
is confirmed on [#2640](https://github.com/google/docsy/pull/2640).

### Note: `docsy.dev` is a distinct (sibling-folder) install shape

`docsy.dev` consumes Docsy as an **in-repo sibling folder**, which is a fourth
shape beyond the three smoke modes (NPM, Hugo module, non-module clone):

- **Theme access:** Hugo runs from `docsy.dev/` with `--themesDir ../..` (the
  parent of the repo) and `theme: [docsy/theme]`, so `docsy/theme` re-descends
  into the sibling `theme/` of the same repo. (Relies on the repo dir being
  named `docsy`.)
- **Theme deps:** `docsy.dev`'s `postinstall` → `_install-theme-deps`
  (`npm install ../theme --install-links --no-save && rm -rf node_modules/theme`)
  installs the theme's runtime deps into `docsy.dev/node_modules/`, where Hugo's
  `node_modules/bootstrap` mount resolves via the consumer-cwd lookup.
- **Module placeholders:** the theme's `imports:` resolve to the empty
  `github.com/...` dirs the repo-root `npm install` postinstall creates at `..`
  (the parent of the repo), which is exactly where `--themesDir ../..` looks.

This shape is **already exercised** every time the `docsy.dev` site builds (it
is the Phase 1 exit criterion), so it is covered — just not in the `node:test`
smoke driver. For now it is treated as a maintainer/in-repo shape. It could
later be surfaced and documented as a supported **power-user** consumer setup
(and, if so, get its own smoke case); deferred until we decide to document it as
such.

## Phase 2: local smoke tests (CI emulation)

Ran all three install modes locally against the integration branch
(`google/docsy@task/repo-reorg-2026-05`). Each mode built a runnable site with
full styling (the compiled `main.min.css` is ~370 KB and the Font Awesome
`webfonts/` are emitted, confirming the Bootstrap + Font Awesome SCSS resolved —
not just an empty CSS shell).

Local-run detail: `make-site.sh` defaults `HUGO` to `node scripts/run-hugo.mjs`
(see Phase 3), which resolves `docsy.dev`'s extended Hugo — so a local run needs
no manual Hugo setup beyond `npm run install:all` (an explicit `HUGO=` export
still overrides it).

### Result matrix

| #   | Install mode     | Consumer config edit (the one line)                               | Builds? | Result                                                     |
| --- | ---------------- | ----------------------------------------------------------------- | ------- | ---------------------------------------------------------- |
| 1   | Hugo module      | import path `github.com/google/docsy` → `…/docsy/theme`           | ✅      | one-line change                                            |
| 2   | NPM (GitHub)     | `theme: docsy` → `theme: docsy/theme` (`themesDir: node_modules`) | ✅      | one-line change                                            |
| 3   | Non-module clone | `theme: docsy` → `theme: docsy/theme`                             | ✅      | one-line config; setup procedure gained a step (see below) |

### Mode 2 — NPM (GitHub)

```sh
mkdir -p tmp && cd tmp
# CI does: ../scripts/make-site.sh -s NPM -r $PR_REPO -v $BRANCH
../scripts/make-site.sh -s NPM -r google/docsy -v task/repo-reorg-2026-05
```

The consumer-facing edit is the single `theme:` line. Under the hood:
`npm install` of the GitHub package lands the whole repo at
`node_modules/docsy/`, so `theme: docsy/theme` + `themesDir: node_modules`
resolves the theme at `node_modules/docsy/theme/`. The root `postinstall`
(`_mkdir:hugo-mod`) ran in the installed package and created the empty
Hugo-module placeholder dirs `node_modules/github.com/twbs/bootstrap` and
`node_modules/github.com/FortAwesome/Font-Awesome` (the documented "NPM install
side-effect"), so the theme's `imports:` resolve; the real SCSS comes from the
`node_modules/bootstrap` / `node_modules/@fortawesome/fontawesome-free` mounts
(brought in as deps of the `docsy` package). `mkdirp-hugo-mod.js` already reads
`theme/go.mod`, so no change was needed there. **Result: one-line change.**

### Mode 1 — Hugo module

```sh
cd tmp
# CI does: ../scripts/make-site.sh -s HUGO_MODULE -r $PR_REPO -v $BRANCH
../scripts/make-site.sh -s HUGO_MODULE -r google/docsy -v task/repo-reorg-2026-05
```

The consumer-facing edit is the module import path gaining the `/theme` suffix:

```diff
 module:
   imports:
-    - path: github.com/google/docsy
+    - path: github.com/google/docsy/theme
```

Bootstrap and Font Awesome are supplied by the theme's own Hugo-module
`imports:` (`github.com/twbs/bootstrap`, `github.com/FortAwesome/Font-Awesome`),
so no `node_modules` are needed in this mode. With `-r google/docsy` (the
canonical module path) `make-site.sh` runs
`hugo mod get github.com/google/docsy/theme@<rev>` directly. (For a fork whose
branch lives off the canonical path, it instead clones the fork and writes a
`replace … => ./tmp/docsy/theme` directive — a harness mechanism, not part of
the user-facing migration.) **Result: one-line change.**

### Mode 3 — non-module clone into `themes/docsy/`

The Hugo **config** edit is one line (`theme: docsy` → `theme: docsy/theme`),
and the clone still lands at `themes/docsy/`. But the **setup procedure**
changed versus pre-TOF and needs a doc update in Phase 5. Exact working flow
(run from the site root; site created with `hugo new site --format yaml`):

```sh
# 1. Clone the theme (whole repo) into themes/docsy
cd themes
git clone -b <version> https://github.com/google/docsy
# 2. Install the theme's runtime deps INTO the theme/ subfolder
(cd docsy/theme && npm install)
# 3. Create the empty Hugo-module placeholder dirs under themesDir (themes/)
(cd docsy && node scripts/mkdirp-hugo-mod.js ..)
cd ..
# 4. PostCSS at the site root (unchanged prerequisite)
npm install --save-dev autoprefixer postcss-cli
# 5. config: theme: docsy/theme
```

Why steps 2 and 3 are now separate (pre-TOF, a single
`cd themes/docsy && npm install` did both):

- The theme root Hugo sees is now `themes/docsy/theme/`, one level deeper.
  Hugo's `node_modules/bootstrap` mount is resolved theme-dir-relative first, so
  the deps must be installed at `themes/docsy/theme/node_modules/`. Verified:
  with the deps one level up at `themes/docsy/node_modules/` the build fails
  with
  `File to import not found or unreadable: ../../vendor/bootstrap/scss/functions`;
  moving them into `themes/docsy/theme/node_modules/` fixes it.
- `theme/package.json` is a script-less private mirror (no `postinstall`), by
  design (acceptance criteria: "No other lifecycle scripts"). So the empty
  `github.com/...` placeholder dirs that the root `postinstall` used to create
  must now be generated explicitly with `mkdirp-hugo-mod.js` (step 3), which
  writes them under `themesDir` (`themes/github.com/...`) where Hugo looks up
  the theme's `imports:` for a non-module site.

**Result: one-line config change ✅, builds ✅** (8 pages, ~370 KB CSS, webfonts
emitted). The config promise holds. The get-started "clone" docs (Option 2 in
`other-options.md`) need the updated multi-step install above — tracked for
Phase 5. No design change is required for the move to land; the clone path works
as documented here.

### Phase 2 exit criterion — met (with Phase 3)

All three install modes build with the same Hugo-resolution mechanism CI uses
(`run-hugo.mjs`, no `HUGO` override), and the CI smoke matrix is green (see
Phase 3). The earlier local-only passes had relied on an ad-hoc `HUGO` override,
which masked the CI gap that `run-hugo.mjs` + `install:all` then closed — so
Phases 2 and 3 closed together, as the same install matrix on two surfaces.
Standing follow-up for Phase 5: get-started clone docs.

## Phase 3: GitHub CI — resolved (decision E); CI matrix green

**Symptom:** the smoke matrix (`smoke.yaml`) fails on both OSes because the
throwaway site cannot find a Hugo executable.

**Root cause:** `docsy.dev` used to be an npm **workspace**, so root
`npm install` hoisted `hugo-extended` (declared in `docsy.dev/devDependencies`)
up into the repo-root `node_modules/.bin/`. The smoke test runs `make-site.sh`
from `tmp/`, and its default `npx hugo` walks _up_ the tree, resolving
`repo-root/node_modules/.bin/hugo`. Under TOF, `workspaces: []`, so root
`npm install` no longer pulls `docsy.dev`'s deps — `hugo-extended` is gone from
root `node_modules`, and `npx hugo` resolves nothing.

**Solution options under discussion** (constraints: single source of truth for
the Hugo version — `package.json` `config.hugo_version`; and ideally a mechanism
reusable by the planned local test harness across the dev's own OS):

- **A. Restore workspace hoisting** (`workspaces: ["docsy.dev"]`). Smallest diff
  but reopens the deferred `workspaces-todo` trade-off.
- **B. Declare `hugo-extended` at the repo root** (pinned to
  `config.hugo_version`). Duplicates the declaration the plan keeps only in
  `docsy.dev`.
- **C. Smoke site installs its own Hugo**
  (`npm i hugo-extended@<config.hugo_version>` into the throwaway site). Most
  faithful to a real consumer; identical in CI and the local harness on any OS.
  Adds an install per run; `make-site.sh` must read the version.
- **D. Job-level setup action** (`peaceiris/actions-hugo`, extended). Fast and
  standard but CI-only — does not help the local harness.
- **E. Pass `HUGO` from an installed binary** (the local workaround). Reuses
  `docsy.dev`'s single declaration but makes the consumer smoke test reach into
  `docsy.dev`.

**Decision: E, made cross-OS.** Added `scripts/run-hugo.mjs` — a Node helper
that locates an installed `hugo-extended` (searching `docsy.dev/node_modules`
first, then the repo root) and execs its `dist/cli.mjs` bin wrapper via the
current `node`. It is portable by construction: it relies on Node plus
`hugo-extended`'s own JS wrapper to pick the platform binary, so there is no
dependency on POSIX symlinks or Windows `.cmd`/`.ps1` shims. The Hugo _version_
stays single-sourced — the helper runs whatever `docsy.dev` installed, which is
pinned via `package.json` `config.hugo_version` (currently 0.157.0).

`make-site.sh` now defaults to it: `: "${HUGO:=node $SCRIPT_DIR/run-hugo.mjs}"`
(an explicit `HUGO=` export still wins, e.g. `HUGO='npx hugo'`).

Implementation notes:

- Resolve the package by its `node_modules/hugo-extended` path, **not**
  `require.resolve('hugo-extended/package.json')` — the latter is blocked by the
  package's `exports` map (`ERR_PACKAGE_PATH_NOT_EXPORTED`).
- Verified locally (macOS) with **no `HUGO` override**: `make-site.sh -s NPM`
  and `-s HUGO_MODULE` against `google/docsy@task/repo-reorg-2026-05` both build
  green (369 KB `main.min.css` each); `node scripts/run-hugo.mjs version`
  reports extended 0.157.0 from any cwd.

**CI step — done; matrix green.** The helper reuses `docsy.dev`'s
`hugo-extended`, but `smoke.yaml`'s setup previously ran only root
`npm install`. Added an `install:all` root script
(`npm run docsy.dev-install && npm install` — `docsy.dev-install` first so
`test.yaml`'s `install:all -- --omit=optional` applies the flag to the final
root `npm install`) and switched the smoke job's "Setup workspace" step to
`npm run install:all`, so `docsy.dev` (and its `hugo-extended`) is installed
before `make-site.sh`. Chose `install:all` over a lighter targeted install —
consistency across jobs and a useful onboarding command outweigh the few seconds
saved. **Confirmed on CI** ([#2640](https://github.com/google/docsy/pull/2640)):
`test` (build) and `smoke` (new-site NPM + HUGO_MODULE) pass on ubuntu-latest
and windows-latest, plus a green Netlify deploy preview.
