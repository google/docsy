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
- `docsy.dev/scripts/_install.sh` updated (and its comment refreshed) to install
  both the repo-root packages and the `docsy.dev` packages, since `docsy.dev` is
  no longer a workspace of the root. Netlify's
  `scripts/_install.sh && npm run build:preview` sequence works under that
  shape.

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

Netlify deploy preview verification (the second half of the Phase 1 exit
criterion) is still pending.

## Phase 2: NPM (GitHub) — pending under current architecture

The Phase 2 work (`make-site.sh -s NPM`, `-s HUGO_MODULE`, and the non-module
`themes/docsy/` install) is still to be run against the current architecture.
`make-site.sh` itself has been updated for the `/theme` suffix in both NPM and
HUGO_MODULE paths, but the runs themselves have not yet been executed.

Note: an earlier iteration in this spike tested an `npm pack` + consumer install
flow under a different architecture (root as a thin shim with a
`files: [theme, …]` whitelist, no devDeps, and a `prepare` script that synced
theme deps to root). That architecture was deferred to a follow-on plan; the
consumer-install footprint under the current shipped architecture needs to be
re-measured as part of Phase 2.

## Phase 3: GitHub CI — pending

To be recorded during Phase 3 work.
