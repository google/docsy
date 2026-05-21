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
│   ├── hugo.yaml      # canonical theme config (mounts, mediaTypes, outputFormats)
│   ├── theme.toml     # canonical
│   ├── go.mod         # module path: github.com/google/docsy/theme
│   ├── go.sum
│   └── package.json   # theme runtime deps + minimal lifecycle scripts only
├── docsy.dev/         # website + dev/test tooling
├── scripts/           # repo-wide maintainer scripts
├── tasks/
└── package.json       # repo-wide tooling; not the theme
```

Key properties:

- `theme/` is what NPM ships and what Hugo modules resolve to.
- The repo root is no longer a Docsy theme. Its `package.json` no longer carries
  `name: "docsy"`, and it holds no theme runtime files.
- No facades, escape mounts, or workaround `postinstall` scripts in `theme/`.
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

`theme/package.json` includes only what installed theme users need:

| Dependency or tool                                                          | Owner                      |
| --------------------------------------------------------------------------- | -------------------------- |
| `bootstrap`                                                                 | theme runtime              |
| `@fortawesome/fontawesome-free`                                             | theme runtime              |
| `autoprefixer`, `postcss-cli`                                               | user/site build dependency |
| `hugo-extended`                                                             | site/dev dependency        |
| `prettier`, `markdownlint*`, `afdocs`, `netlify-cli`, `rtlcss`, `cross-env` | repo or website tooling    |

Keep docs-site, CI, release, formatting, link-checking, and test-only
dependencies out of `theme/package.json`.

The GitHub/NPM install path is a key use case. Installing Docsy from GitHub
through NPM must not fetch `docsy.dev` dev dependencies or execute
maintainer-only generators. In particular:

- No `prepare` script in `theme/package.json`.
- No `postinstall` side-effects that touch paths outside `theme/`.
- All generated theme assets are committed.

Ideally, theme users need no theme dev dependencies at all.

## Maintainer workflow

The lead maintainer (and other contributors) coordinate theme and website
changes from the repo root. `docsy.dev` is Docsy's primary end-to-end test of
theme changes, so coordinated edits across both happen daily.

The root remains the maintainer-orchestration layer:

- The root `package.json` keeps NPM workspace declarations and exposes commands
  such as `npm run serve`, `npm run check`, and `npm run fix`. These delegate to
  the workspace that owns each tool.
- Maintainers can edit theme code under `theme/` and see effects in the website
  under `docsy.dev` from a single shell at the root.
- Theme runtime concerns stay under `theme/`; orchestration concerns stay at the
  root.

## Tooling versions

Maintainers still need a predictable local toolchain. There is one clear source
for each shared tool version, so CI, local development, and release work do not
drift. Root commands stay as convenient entry points and delegate to the
workspace that owns each tool.

## Test boundary

The new layout leaves room for a larger test suite — HTML goldens, screenshot
goldens, browser-based checks — without bloating the installed theme package.
Test fixtures, generated goldens, and test-only dependencies live in `docsy.dev`
(current) or a repo-level `tests/` folder (future). Root commands make the suite
easy for maintainers to run; theme users never install the test toolchain.

## Work areas

1. **Move the theme into `theme/`.** Move `assets/`, `i18n/`, `images/`,
   `layouts/`, `static/`, `hugo.yaml`, `theme.toml`, `go.mod`, `go.sum`, and the
   theme-runtime parts of `package.json` into `theme/`. Update the `module`
   declaration in `theme/go.mod` to `github.com/google/docsy/theme`. Update all
   generators and patch scripts in `scripts/` to write to the new paths under
   `theme/`.

2. **Reshape the root.** Root `package.json` becomes repo-level only; its `name`
   is no longer `docsy`. Remove the `postinstall` side-effect script. Move or
   delete `postcss.config.js` based on consumer guidance. Keep `Dockerfile`,
   `docker-compose.yaml`, `.editorconfig`, `.prettierrc.json`, `.markdownlint*`,
   `.nvmrc`, `.gitattributes`, `.gitignore` at the root.

3. **Update `docsy.dev`.** Pin to the new Hugo module path
   (`github.com/google/docsy/theme`). Update the `_hugo --themesDir` assumption.
   The website becomes a real first-class consumer of the theme.

4. **Update `docsy-example`.** Land a coordinated PR that bumps the import path.
   Confirms the example continues to work as the canonical user reference.

5. **Update CI and smoke tests.** `scripts/make-site.sh` and the GitHub Actions
   workflows must exercise the new install paths. Keep the existing matrix (NPM
   × HUGO_MODULE × Windows × Ubuntu) green.

6. **Update docs and release notes.** Document the one-line config change per
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
- `theme/package.json` contains only theme runtime dependencies and minimal
  lifecycle scripts. No `prepare` or `postinstall` scripts that affect
  consumers.
- Installing Docsy from GitHub through NPM does not install `docsy.dev` dev
  dependencies, does not execute `_prepare`, and does not build the whole repo.
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
