---
title: Theme-Only Folder (TOF) plan for 0.16
date: 2026-05-21
status: draft
issue: https://github.com/google/docsy/issues/2617
cSpell:ignore: postupdate
---

## About this plan

Keep this document lean and readable for a junior developer. It describes the
intended end state, key boundaries, and acceptance criteria — not every command.
Add detail only when it prevents a likely mistake or clarifies a compatibility
decision.

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
structural: give the theme its own folder so the theme tree, the maintainer
toolchain, and the published shape can each evolve on their own timeline.

Issue [#2617][] follows up [#2436][] and asks for the theme to live in its own
folder.

[#2617]: https://github.com/google/docsy/issues/2617
[#2436]: https://github.com/google/docsy/issues/2436

## Goal: theme-only folder (TOF)

Move the canonical Docsy theme into a folder named `theme/`, whose contents are
**only** what a consuming site needs from Docsy.

We expect this to be a structural change with one consumer-facing edit per
install mode. It trades a small documented migration for a clean, predictable
install shape. Mapping the four [Motivation](#motivation) workarounds to this
PR:

| Workaround                                | This PR             |
| ----------------------------------------- | ------------------- |
| `../../node_modules/*` escape mounts      | **Fixed**           |
| `postinstall` mkdirp helper               | Kept; deferred      |
| `_prepare` scrollspy + vendored SCSS      | Kept; deferred      |
| Root `package.json` mixes theme + tooling | Partially; deferred |

"Partially" because `theme/package.json` now declares the theme runtime deps (as
a synced mirror), giving us a clean boundary to push the rest of the cleanup
through. The thin-shim refactor that fully separates the manifests is
[scoped out](#tof-repo-layout) and lives in a follow-on plan.

## TOF repo layout

```text
.
├── theme/
│   ├── assets/
│   ├── i18n/
│   ├── images/        # theme images only
│   ├── layouts/
│   ├── static/
│   ├── hugo.yaml      # canonical theme config (mounts, mediaTypes, outputFormats)
│   ├── theme.toml     # canonical
│   ├── go.mod         # module path: github.com/google/docsy/theme
│   ├── go.sum
│   └── package.json   # private mirror of theme runtime deps (see below)
├── docsy.dev/         # website; its own node_modules for the site build
├── scripts/           # maintainer scripts (scrollspy patch, sync-theme-deps, …)
├── tasks/
└── package.json       # repo root: canonical for theme runtime deps + repo-wide tooling
```

Key properties:

- `theme/` is what Hugo module resolves to. GitHub-NPM still ships the full repo
  (see below).
- The repo root `package.json` is the **single source of truth** for theme
  runtime dependency versions and continues to host repo-wide maintainer tooling
  (Prettier, markdownlint, cSpell French dict). The `theme/` `package.json` is a
  small **private mirror** so that file/tarball installs of `theme/` (notably
  `docsy.dev`'s postinstall — see [Maintainer workflow](#maintainer-workflow))
  see the right versions.
- The mirror is kept in sync by `scripts/sync-theme-deps.mjs` (run by
  `_prepare`, `postupdate:dep`, and `postupdate:packages`). Maintainers should
  not edit `theme/package.json`'s `dependencies` by hand.
- Theme-only configuration moved to `theme/`: `hugo.yaml`, `theme.toml`,
  `go.mod`/`go.sum`. The `theme/go.mod` module path becomes
  `github.com/google/docsy/theme`.
- The mounts inside `theme/hugo.yaml` are spelled the canonical way:
  `node_modules/<pkg>`. Hugo's loader does a theme-local-first, then
  consumer-cwd lookup, so the legacy `../../node_modules/*` escape form is no
  longer needed and is removed.
- Generated artifacts (vendored Bootstrap SCSS, scrollspy patch output, chroma
  styles, `go.sum`) continue to be committed under `theme/` so consumers never
  run the generators.

What this plan **does not** change (deferred to a follow-on plan):

- The repo root keeps `devDependencies` for repo-wide maintainer tooling and
  keeps `bootstrap` + `@fortawesome/fontawesome-free` as runtime deps. There is
  no `files` whitelist yet and no thin-shim refactor.
- There is no dedicated `_dev/` (or similar) maintainer-orchestration folder
  yet. Maintainers continue to work from the repo root.
- NPM-registry publication remains future work; the immediate consumer surface
  is the existing GitHub-NPM install path.

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
line** to change per install mode. The spike confirmed that shape before TOF
merged.

## Release tagging

`theme/` is a nested Hugo/Go module with module path
`github.com/google/docsy/theme`. Users can request the normal version string,
for example:

```sh
hugo mod get github.com/google/docsy/theme@v0.16.0
```

For that to resolve, the release process must also create a subdirectory module
tag at the same commit, for example `theme/v0.16.0`. This is not a separate
repository or separate theme release artifact; it is an additional Git tag in
the same repo.

## Compatibility spike

TOF was validated on the task branch before it landed on `main` via [#2641][].
The three documented install modes below each built a runnable site with at most
a one-line consumer config change.

The values in the table are the validated migration shape.

| #   | Install mode     | Consumer command (example)                         | Consumer config after TOF                                 | Theme location Hugo reads   |
| --- | ---------------- | -------------------------------------------------- | --------------------------------------------------------- | --------------------------- |
| 1   | Hugo module      | `hugo mod get github.com/google/docsy/theme@<rev>` | `module.imports: [{path: github.com/google/docsy/theme}]` | Hugo module cache           |
| 2   | NPM (GitHub)     | `npm install github:google/docsy#<rev>`            | `theme: docsy/theme`, `themesDir: node_modules`           | `node_modules/docsy/theme/` |
| 3   | Non-module theme | `git clone` into `themes/docsy/`                   | `theme: docsy/theme`                                      | `themes/docsy/theme/`       |

Validation covered:

- `docsy.dev` builds locally and in CI using the TOF Hugo module path.
- `docsy-example` builds against the task branch with the one-line module
  update.
- `scripts/make-site.sh -s NPM` and `-s HUGO_MODULE` pass on Windows and Ubuntu
  after the smoke script is updated for the new path.
- A minimal `hugo new site` with Docsy cloned into `themes/docsy/` builds with
  the one-line `theme:` edit.
- Local smoke tests pass on `main` after the TOF merge.

The exact commands and one-line config edits are recorded in
`tasks/0.16/repo-reorg/spike-notes.md`.

For the order in which Phase 0 (move) and Phases 1–5 (consumer validation,
release) are run, see the [execution plan][exec].

[exec]: ./theme-only-folder.execution.md

## Package boundary

Each `package.json` carries a clearly-scoped set of dependencies. The three
manifests are:

| File                       | Role                                              | Notable contents                                                                                                                                |
| -------------------------- | ------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| `package.json` (repo root) | Canonical theme deps + repo-wide maintainer tools | `bootstrap`, `@fortawesome/fontawesome-free`; `prettier`, `markdownlint-cli2`, markdownlint rule plugins, `@cspell/dict-fr-fr`; `postinstall`   |
| `theme/package.json`       | Private mirror of theme runtime deps              | Same `dependencies` as root (kept in sync by `sync-theme-deps.mjs`); `"private": true`                                                          |
| `docsy.dev/package.json`   | Website's site-build / site-tooling               | `autoprefixer`, `postcss-cli`, `cross-env`, `rtlcss`, `afdocs`, `netlify-cli`, `npm-check-updates`, `hugo-extended`; `_install-theme-deps` hook |

Keep docs-site, CI, release, formatting, link-checking, and test-only
dependencies out of `theme/package.json`.

## Maintainer workflow

The lead maintainer (and other contributors) coordinate theme and website
changes from the repo root. `docsy.dev` is Docsy's primary end-to-end test of
theme changes, so coordinated edits across both happen daily.

Orchestration commands continue to run from the repo root:

```sh
npm run install:all      # repo root deps + docsy.dev (incl. hugo-extended)
npm run build            # builds docsy.dev against theme/
npm run serve            # docsy.dev dev server with live reload
npm run check            # repo-wide format + markdown checks
npm run fix              # auto-fix
npm run test:smoke       # local NPM / Hugo-module / non-module-clone smoke
```

`docsy.dev`'s `postinstall` runs `_install-theme-deps` (see
`docsy.dev/package.json`), which creates `theme/`'s declared runtime deps into
`docsy.dev/node_modules/` so Hugo's consumer-cwd lookup finds them during the
build. The mechanics (`--install-links` flag and the cleanup line) are recorded
in [spike-notes][].

[spike-notes]: ./spike-notes.md

## Tooling versions

Each shared tool has exactly one declaration in the repo:

- `hugo-extended` lives in `docsy.dev/devDependencies`. The `hugo` binary lands
  at `docsy.dev/node_modules/.bin/hugo` after `npm run docsy.dev-install` and is
  invoked by `docsy.dev`'s `_hugo` scripts. Bumping the Hugo version is a single
  edit (see `scripts/set-hugo-version.mjs`).
- `prettier`, `markdownlint-cli2`, the markdownlint rule plugins, and
  `@cspell/dict-fr-fr` live in the **repo-root** `devDependencies` because they
  are run from the repo root.
- Site-build tools (`autoprefixer`, `postcss-cli`, `cross-env`, `rtlcss`) and
  site-tooling (`afdocs`, `netlify-cli`, `npm-check-updates`) live in
  `docsy.dev/devDependencies` because that is where they are used.
- Theme runtime deps (`bootstrap`, `@fortawesome/fontawesome-free`) live in the
  repo-root `dependencies` and are mirrored into `theme/package.json` by
  `scripts/sync-theme-deps.mjs`.

## Test boundary

The new layout leaves room for a larger test suite — HTML goldens, screenshot
goldens, browser-based checks — without bloating the installed theme package.
Test fixtures, generated goldens, and test-only dependencies live in
`docsy.dev/` (current) or a repo-level `tests/` folder (future). Root commands
make the suite easy for maintainers to run; theme users never install the test
toolchain.

## Acceptance criteria

- The [Compatibility spike](#compatibility-spike) has been run for all three
  install modes and its results are recorded.
- `docsy.dev` builds from `theme/`.
- A new site can use Docsy as a Hugo module with the documented one-line config
  change.
- A new site can use Docsy through the GitHub/NPM install path with the
  documented one-line config change.
- Non-module theme usage works with the documented one-line config change.
- `theme/package.json` contains only theme runtime dependencies (mirrored from
  root) and is marked `"private": true`. No other lifecycle scripts.
- All generated theme assets (vendored Bootstrap SCSS, scrollspy patch output,
  chroma styles, `go.sum`) are committed under `theme/`.
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

[#2641]: https://github.com/google/docsy/pull/2641
