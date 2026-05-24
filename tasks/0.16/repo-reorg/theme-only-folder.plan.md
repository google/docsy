---
title: Theme-Only Folder (TOF) plan for 0.16
date: 2026-05-21
status: draft
issue: https://github.com/google/docsy/issues/2617
cSpell:ignore: fontawesome
---

## About this plan

Keep this document lean and readable for a junior developer. It describes the
intended end state, key boundaries, and acceptance criteria, not every command
or step needed to do the work. Add detail only when it prevents a likely mistake
or clarifies a compatibility decision.

## Motivation

The Docsy theme currently lives at the repo root, entangled with website
tooling, repo-wide tooling, and release tooling. The result is an install shape
that needs ongoing repair:

- The root `hugo.yaml` carries `../..` escape mounts to reach the consumer's
  `node_modules`, plus a vendored-Bootstrap-SCSS mount to work around a Go
  modules bug.
- A `postinstall` script runs on every consumer install to create empty
  Hugo-module directories outside the package.
- A scrollspy-patch toolchain must be applied during maintenance before the
  theme is usable, with generated artifacts committed to keep consumers off the
  toolchain.
- The root `package.json` mixes theme runtime dependencies with repo-wide
  formatting, link-checking, and other tooling.

Each of these exists because the canonical theme tree, the maintainer toolchain,
and the consumer-visible install shape are all the same tree. The fix is
structural: give the theme its own folder that **is** the install shape, and let
the repo root hold only repo-wide tooling.

Issue [#2617][] follows up [#2436][] and asks for the theme to live in its own
folder.

[#2617]: https://github.com/google/docsy/issues/2617
[#2436]: https://github.com/google/docsy/issues/2436

## Goal: theme-only folder (TOF)

Move the canonical Docsy theme into a folder named `theme/`, whose contents are
**only** what a consuming site needs from Docsy, nothing else.

We expect this to be a structural change with one consumer-facing edit per
install mode. It trades a small documented migration for a clean, predictable
install shape and it should remove the install-time workarounds listed above.

## TOF repo layout

```text
.
├── theme/
│   ├── assets/
│   ├── i18n/
│   ├── images/        # theme images only
│   ├── layouts/
│   ├── static/
│   ├── scripts/
│   │   └── mkdirp-hugo-mod.js
│   ├── hugo.yaml      # canonical theme config (mounts, mediaTypes, outputFormats)
│   ├── theme.toml     # canonical
│   ├── go.mod         # module path: github.com/google/docsy/theme
│   ├── go.sum
│   └── package.json   # source of truth for theme runtime deps
├── docsy.dev/         # website; its own node_modules for the site build
├── _dev/              # maintainer-orchestration folder (not published)
│   ├── scripts/       # all maintainer-only scripts (incl. sync-root-deps.mjs)
│   └── package.json   # devDeps (hugo-extended, prettier, markdownlint, …)
├── tasks/
└── package.json       # thin publishable shim; name "docsy"; files: [theme, …]
```

Key properties:

- `theme/` is what NPM ships and what Hugo modules resolve to. Its
  `package.json` is the **single source of truth** for theme runtime deps.
- The repo root is the **publishable manifest only**. It still carries
  `name: "docsy"` (this is the consumer-facing package), but its `files`
  whitelist allows only `theme/` and the top-level docs files into the tarball,
  and it declares **no** `devDependencies`. A `prepare` script mirrors theme
  runtime deps from `theme/package.json` to the root manifest so consumers'
  transitive-install graphs are correct.
- `_dev/` is where maintainers run commands from. It owns the monorepo-wide
  tooling and the Hugo version (single source). No npm workspaces are declared
  anywhere; each of `theme/`, `docsy.dev/`, and `_dev/` is its own independent
  install root.
- No facades, escape mounts, or workaround `postinstall` scripts in `theme/`
  beyond `mkdirp-hugo-mod.js`, which Hugo-module consumers need.
- Anything generated (vendored Bootstrap SCSS, scrollspy patch output, chroma
  styles, `go.sum`) is committed under `theme/` so consumers never run the
  generators.

## User-facing migration

TOF accepts one documented one-line config change per install mode in exchange
for a clean install shape. The exact migration text comes from the
[Compatibility spike](#compatibility-spike); the table below shows the shape of
the change.

| Install mode     | What the user edits                                                     |
| ---------------- | ----------------------------------------------------------------------- |
| Hugo module      | Module import path gains a `/theme` suffix                              |
| NPM (GitHub)     | Hugo `theme:` value gains a `/theme` suffix (or equivalent `themesDir`) |
| Non-module theme | Hugo `theme:` value gains a `/theme` suffix                             |

The release-note migration section pairs each install mode with its exact
before/after snippet, derived from the spike. There should be exactly **one
line** to change per install mode. If any mode requires more, iterate on TOF
before merging.

## Compatibility spike

Before the move lands on `main`, validate TOF on a feature branch. The three
documented install modes below must each build a runnable site from the branch
with at most a one-line consumer config change.

The values in the table are the working hypothesis to be confirmed by the spike.

| #   | Install mode     | Consumer command (example)                         | Consumer config after TOF                                 | Theme location Hugo reads   |
| --- | ---------------- | -------------------------------------------------- | --------------------------------------------------------- | --------------------------- |
| 1   | Hugo module      | `hugo mod get github.com/google/docsy/theme@<rev>` | `module.imports: [{path: github.com/google/docsy/theme}]` | Hugo module cache           |
| 2   | NPM (GitHub)     | `npm install github:google/docsy#<rev>`            | `theme: docsy/theme`, `themesDir: node_modules`           | `node_modules/docsy/theme/` |
| 3   | Non-module theme | `git clone` into `themes/docsy/`                   | `theme: docsy/theme`                                      | `themes/docsy/theme/`       |

Validation harness, all run against the spike branch:

- `docsy.dev` builds locally and in CI using the TOF Hugo module path.
- `docsy-example` builds against the branch with the one-line module update.
- `scripts/make-site.sh -s NPM` and `-s HUGO_MODULE` pass on Windows and Ubuntu
  after the smoke script is updated for the new path.
- A minimal `hugo new site` with Docsy cloned into `themes/docsy/` builds with
  the one-line `theme:` edit.

For each mode, record in a spike notes file: the exact commands used, the exact
one-line config edit, and whether the result is "one-line change" or "needs more
design". Any "needs more design" result blocks the merge until the design is
iterated.

## Package boundary

Each `package.json` carries a clearly-scoped set of dependencies. The four
manifests are:

| File                       | Role                                | Notable contents                                                                                       |
| -------------------------- | ----------------------------------- | ------------------------------------------------------------------------------------------------------ |
| `theme/package.json`       | Source of truth, theme runtime deps | `bootstrap`, `@fortawesome/fontawesome-free`; `postinstall: mkdirp-hugo-mod.js`                        |
| `package.json` (repo root) | Publishable shim                    | `files: [theme, …]`, `prepare: sync-root-deps.mjs`, `postinstall: mkdirp-hugo-mod.js`. **No devDeps.** |
| `docsy.dev/package.json`   | Website's site-build / site-tooling | `autoprefixer`, `postcss-cli`, `cross-env`, `rtlcss`, `afdocs`, `netlify-cli`, `npm-check-updates`     |
| `_dev/package.json`        | Maintainer-orchestration            | `hugo-extended`, `prettier`, `markdownlint-cli2`, `markdownlint-rule-*`, `@cspell/dict-fr-fr`          |

Keep docs-site, CI, release, formatting, link-checking, and test-only
dependencies out of `theme/package.json`.

The GitHub/NPM install path is a key use case. Installing Docsy from GitHub
through NPM must not fetch maintainer or `docsy.dev` dev dependencies or execute
maintainer-only generators. The shape of that install is enforced by:

- `files: ["CHANGELOG.md", "LICENSE", "README.md", "theme"]` at the root — the
  tarball contains nothing else.
- Zero `devDependencies` at the root — git-URL installs see no dev workflow to
  run, so npm does not install a maintainer toolchain in the clone.
- A `postinstall` at the root that only runs `theme/scripts/mkdirp-hugo-mod.js`
  to create the empty Hugo module placeholder dirs the consumer's Hugo expects.
- All generated theme assets committed under `theme/` so consumers never run a
  generator.

The `prepare` script at the root delegates to `_dev/scripts/sync-root-deps.mjs`,
which mirrors `theme/package.json`'s `dependencies` onto the root manifest. The
committed root manifest is kept in sync with `theme/` (the sync script is
idempotent); `prepare` runs as a safety net during `npm pack` and during git-URL
installs in the consumer-side clone.

## Package versioning

Both the root (publishable as `docsy`) and `theme/` carry a `version`, plus
`docsy.dev/` and `_dev/` carry their own private versions. The question is which
one is the **canonical** version, and how it propagates.

**Open question.** Two viable patterns:

- **Theme-only canonical version.** `theme/package.json` is the canonical
  source. The sync script (already used for `dependencies`) is extended to
  mirror `version` from `theme/` onto the root manifest at `prepare` time. The
  root commits a synced value to keep maintainer working trees clean.
- **Root-canonical version.** Maintainers bump the root `version` and the
  release tooling propagates it to `theme/package.json`. The two are kept
  aligned by tooling. Preserves continuity with the current setup (where release
  tooling already targets the root version).

Either way, the released artifact (the tarball whose root `package.json`
declares `name: "docsy"`) is what consumers see, so the **effective**
user-facing version is whatever the root carries at pack time. The choice is
primarily about maintainer ergonomics and which file the release tooling treats
as authoritative.

To be resolved during the spike or early in Phase 5 (docs and release notes).

## Maintainer workflow

The lead maintainer (and other contributors) coordinate theme and website
changes from the repo. `docsy.dev` is Docsy's primary end-to-end test of theme
changes, so coordinated edits across both happen daily.

Orchestration commands run from `_dev/`:

```sh
cd _dev
npm run install:all   # installs theme/, docsy.dev/, and _dev/ in sequence
npm run build         # builds docsy.dev against the local theme/
npm run serve         # docsy.dev dev server with live reload
npm run check         # repo-wide format + markdown checks
npm run fix           # auto-fix
```

The maintainer's shell sits in `_dev/`; edits happen across `theme/`,
`docsy.dev/`, and `_dev/` as needed, and one orchestration command from `_dev/`
exercises the cross-folder loop. The repo root is **not** the maintainer's
working directory; it is the publishable manifest only.

## Tooling versions

Each shared tool has exactly one declaration in the repo:

- `hugo-extended` lives in `_dev/devDependencies`. The `hugo` binary lands at
  `_dev/node_modules/.bin/hugo` after `cd _dev && npm install`, and is on PATH
  for nested `npm run -C ../docsy.dev …` invocations via npm-script PATH
  inheritance. Bumping the Hugo version is a single edit.
- `prettier`, `markdownlint-cli2`, the markdownlint rule plugins, and
  `@cspell/dict-fr-fr` likewise live in `_dev/devDependencies`.
- Site-build tools (`autoprefixer`, `postcss-cli`, `cross-env`, `rtlcss`) and
  site-tooling (`afdocs`, `netlify-cli`, `npm-check-updates`) live in
  `docsy.dev/devDependencies` because that is where they are used.
- Theme runtime deps (`bootstrap`, `@fortawesome/fontawesome-free`) live in
  `theme/package.json` and are mirrored to the root manifest by the sync script.

## Test boundary

The new layout leaves room for a larger test suite — HTML goldens, screenshot
goldens, browser-based checks — without bloating the installed theme package.
Test fixtures, generated goldens, and test-only dependencies live in `docsy.dev`
(current) or a repo-level `tests/` folder (future). Root commands make the suite
easy for maintainers to run; theme users never install the test toolchain.

## Work areas

1. **Move the theme into `theme/`.** Move `assets/`, `i18n/`, `images/`,
   `layouts/`, `static/`, `hugo.yaml`, `theme.toml`, `go.mod`, `go.sum`, and the
   `mkdirp-hugo-mod.js` postinstall helper into `theme/`. Update the `module`
   declaration in `theme/go.mod` to `github.com/google/docsy/theme`. Update
   generators and patch scripts that have moved to `_dev/scripts/` to write to
   the new paths under `theme/`.

2. **Carve out `_dev/`.** Create `_dev/` and `git mv scripts _dev/scripts` so
   maintainer scripts retain history. Move repo-wide devDeps from the old root
   `package.json` to `_dev/package.json`. Move `hugo-extended` here as the
   single Hugo source. Add `_dev/scripts/sync-root-deps.mjs` for the theme-deps
   mirror.

3. **Reshape the root.** Root `package.json` becomes a thin publishable shim:
   `name: "docsy"`, a `files` whitelist, `prepare` + `postinstall` hooks, no
   `devDependencies`, no workspaces. Keep `Dockerfile`, `docker-compose.yaml`,
   `.editorconfig`, `.prettierrc.json`, `.markdownlint*`, `.nvmrc`,
   `.gitattributes`, `.gitignore` at the root.

4. **Update `docsy.dev`.** Pin to the new Hugo module path
   (`github.com/google/docsy/theme`) or the classic `theme: docsy/theme` form.
   Remove `hugo-extended` from `docsy.dev/package.json` (it now lives in
   `_dev/`). The website becomes a real first-class consumer of the theme.

5. **Update `docsy-example`.** Land a coordinated PR that bumps the import path.
   Confirms the example continues to work as the canonical user reference.

6. **Update CI and smoke tests.** `_dev/scripts/make-site.sh` and the GitHub
   Actions workflows must exercise the new install paths. Keep the existing
   matrix (NPM × HUGO_MODULE × Windows × Ubuntu) green.

7. **Update docs and release notes.** Document the one-line config change per
   install mode. The release blog post must include exact before/after snippets,
   and the user-guide get-started pages must reflect the new import path.

## Acceptance criteria

- The [Compatibility spike](#compatibility-spike) has been run for all three
  install modes on a feature branch, and its results are recorded, before the
  canonical move merges to `main`.
- `docsy.dev` builds from `theme/`.
- A new site can use Docsy as a Hugo module with the documented one-line config
  change.
- A new site can use Docsy through the GitHub/NPM install path with the
  documented one-line config change.
- Non-module theme usage works with the documented one-line config change.
- `theme/package.json` contains only theme runtime dependencies and the
  `mkdirp-hugo-mod.js` postinstall helper. No other lifecycle scripts.
- The root `package.json` has no `devDependencies` and a `files` whitelist so
  that `npm install github:google/docsy#<rev>` brings the consumer only
  `theme/` + a handful of top-level docs files, plus `bootstrap` and
  `@fortawesome/fontawesome-free` as transitive deps. Installing Docsy this way
  does not install `docsy.dev` dev dependencies, does not install maintainer
  tooling, does not execute `_prepare`, and does not build the whole repo.
- All generated theme assets (vendored Bootstrap SCSS, scrollspy patch output,
  chroma styles, `go.sum`) are committed under `theme/`.
- HTML, screenshot, and other golden tests can be added without increasing the
  installed theme package surface.
- CI and smoke tests pass against the new layout on Windows and Ubuntu.
- Release notes include the exact before/after migration snippet for each
  install mode.

## Non-goals

- Do not split the theme into core/extras or community packages in this change.
  TOF makes that possible later but does not require it.
- Do not redesign theme behavior or visual styling.
- Do not upgrade Bootstrap or Font Awesome as part of this migration unless the
  normal dependency update process calls for it.
- Do not ship a root-facade compatibility shim to preserve the current Hugo
  module path. The cost of carrying a fragile facade outweighs the value of "no
  config change" for one release.
- Do not change the Hugo theme name (`docsy`).
