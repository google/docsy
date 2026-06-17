---
title: Extra analysis for the theme-subfolder monorepo plan
date: 2026-05-20
status: draft
issue: https://github.com/google/docsy/issues/2617
companion: ./theme-only-folder.plan.md
cSpell:ignore: webfonts cutover bikeshedding
---

## About This Doc

Companion notes to [theme-only-folder.plan.md][plan]. This doc collects concrete
pitfalls, open questions, and acceptance-criteria additions found while
reviewing the plan against the current repo. The parent plan should stay lean;
this doc is the working scratchpad and reviewer reference.

This is historical pre-merge analysis. For current status, use
[README.md](./README.md).

[plan]: ./theme-only-folder.plan.md

## TL;DR

The plan is well-framed. The one decision that will make or break 0.16 is **how
a non-module NPM install resolves theme files when the canonical layout sits
under `theme/`**. That answer drives `go.mod` location, mount math, smoke tests,
release notes, and the user-facing migration story.

Strong recommendation: do a **compatibility spike** on a feature branch before
merging the move. Build the website, the example site, and the
`scripts/make-site.sh` smoke matrix against the new layout first.

## Top Issues

### 1. The non-module NPM install path is under-specified

Today, sites using `themesDir: node_modules` plus `theme: docsy` expect Hugo to
find `node_modules/docsy/{assets,layouts,i18n,static}/` directly. If those move
into `theme/`, the same install puts them at `node_modules/docsy/theme/...`.
Hugo's non-module theme loader does not transparently understand the deeper
shape; mounts declared in `theme/hugo.yaml` do not help here because non-module
themes are loaded against the consuming site's config.

Pick one and write it into the plan:

- **(a) Root stays the theme root for NPM consumers.** Root `package.json`
  remains `name: "docsy"`. The "canonical files live in `theme/`" statement
  becomes a code-organization claim, with the root layout exposed via facades,
  symlinks, or mounts so the public install shape does not change.
- **(b) Document a one-line config edit** for non-module users
  (`theme: docsy/theme` or a `themesDir` adjustment). Breaks "no config change
  for module users beyond the usual version update" only for non-module users.
- **(c) Drop non-module install support.** Out of scope per the current
  non-goals.

Preferred: (a). It is the only option compatible with the existing compatibility
promise.

### 2. Only one `go.mod` is meaningful

The proposed shape diagram shows both a root `go.mod` and a `theme/go.mod`. For
a given module path on a given branch, Go resolves to a single `go.mod`. Two
`go.mod` files only make sense if you intend two import paths
(`github.com/google/docsy` and `github.com/google/docsy/theme`), which
contradicts the compatibility goal.

Action: drop `theme/go.mod` and `theme/go.sum` from the proposed shape, or
annotate them as "only if a second public module path is introduced".

The same applies to `hugo.yaml`: be explicit about which file Hugo reads in each
install mode (module, NPM non-module, classic non-module clone) and which file
is the canonical source.

### 3. The `../../node_modules/...` mount math will shift

The root `hugo.yaml` contains:

```49:64:hugo.yaml
    # Mounts for projects using Docsy as an NPM package. The source path prefix
    # "../.." moves out of themes/docsy so that Docsy can find its dependencies.
    - source: ../../node_modules/bootstrap
      target: assets/vendor/bootstrap
    - source: ../../node_modules/@fortawesome/fontawesome-free
      target: assets/vendor/Font-Awesome
    - source: ../../node_modules/@fortawesome/fontawesome-free/webfonts
      target: static/webfonts
    # Mounts for module installations,
    # needed to work around a known bug in Go's module management.
    - source: assets/_vendor/bootstrap/scss
      target: assets/vendor/bootstrap/scss/vendor
```

`../..` is counted from the theme root. If the consumer-visible theme root is
deeper after the move (for example `node_modules/docsy/theme/`), the escape may
need to be `../../../`. The same goes for Hugo module cache paths. Validate with
a real consuming site before landing the TOF move. This validation is now
complete; see [README.md](./README.md).

### 4. The `postinstall` lifecycle story is the live one

Current root `package.json` has:

```json
"postinstall": "npm run _mkdir:hugo-mod"
```

It runs on every consumer `npm install`. The script reads `go.mod` via
`path.join(__dirname, '..', 'go.mod')`. After the move, decide:

- Where the script lives (with the theme package).
- Whether its `go.mod` path lookup is still correct.
- Whether it should run at all in the chosen install shape.

Codify the maintainer-only `_prepare` (underscore) convention in the acceptance
criteria:

> Installing Docsy from NPM or GitHub does not execute `_prepare`, `_cp:bs-rfs`,
> `_prepare:scrollspy-patch`, `_gen-chroma-styles`, or `get:hugo-modules`.

### 5. Generated, committed artifacts have hard-coded paths

These files are generated and committed today. Their generators encode the
paths:

- `assets/_vendor/bootstrap/scss/*.scss` (from `_cp:bs-rfs`)
- `assets/_cache/bootstrap/scrollspy-method.js*` (from the scrollspy patch flow)
- Chroma styles (from `_gen-chroma-styles`)
- `go.sum` (from `get:hugo-modules`)

After the move, update the generators in `scripts/` and
`scripts/scrollspy-patch/` to write to the new paths, and keep `_diff:check`
working in CI.

### 6. Smoke matrix must cover the new layout end-to-end

`scripts/make-site.sh` exercises NPM and `HUGO_MODULE` installs on Windows and
Ubuntu. Add to acceptance criteria:

> The existing smoke matrix (NPM x HUGO_MODULE x Windows x Ubuntu) passes
> against the new layout **without changes** to the consuming-site config. If
> any change is required, the exact diff is documented in the release notes.

Also touch `docsy.dev/package.json`:

```json
"_hugo": "hugo --cleanDestinationDir --logLevel info --themesDir ../.."
```

That `--themesDir ../..` assumption becomes wrong after the move.

## Smaller Things Worth Adding

### `docsy-example` is a first-class consumer

Build `docsy-example` against the new layout on a branch and confirm the
smallest possible `go.mod`/`hugo.yaml` change. Ideally zero. Add a Work-Area
bullet for it.

### Branch-model impact during the cutover

After the move lands on `main`, every cherry-pick from `main` to `release` for a
0.15.x patch conflicts on most paths. Plan for it:

- Land the move **early** in 0.16 so the release branch settles.
- Either freeze 0.15.x patch acceptance after a date, or accept the cherry-pick
  overhead.
- The existing `git merge -s ours release` ancestry-recording trick matters more
  post-move; keep it on schedule.

### Pre-decide repo-vs-package boundaries for ambiguous files

To avoid review bikeshedding:

- `postcss.config.js` (root): historically for consumer sites; most consumers
  ship their own. Suggest moving into `docsy.dev/` or deleting if unused there,
  plus a documented snippet in the user guide.
- `Dockerfile`, `docker-compose.yaml`: repo dev tooling, stay at root.
- `.editorconfig`, `.prettierrc.json`, `.markdownlint*.yaml`, `.nvmrc`,
  `.gitattributes`, `.gitignore`: repo level, stay at root.
- `images/` at the root: clarify whether these are theme assets (move) or repo
  marketing (stay).

### Tests and goldens scope for 0.16

Either say "tests stay under `docsy.dev/tests/` for now; a top-level `tests/`
workspace is deferred", or explicitly create the top-level slot. Avoid the
in-between.

### Node `engines` for the installed theme

Root currently declares `engines.node >= 24`. That is a maintainer constraint
that should not be imposed on every consumer. Set `engines.node` on the
installed theme package deliberately, ideally as loose as practical or omitted.

### State the repo-split non-goal explicitly

People will ask. One line in Non-Goals:

> The theme stays in the same git repo for 0.16. A separate-repo split, if any,
> is out of scope.

### Release-note size as a design check

If the user-facing migration text grows past a short section in the 0.16 release
blog, take it as a signal the compatibility design is not done yet.

## Suggested Plan Edits

- Update the Proposed Shape diagram so it shows only the canonical `go.mod` and
  `hugo.yaml` (root, per the chosen answer in #1 and #2).
- Add a Compatibility Spike subsection that names the three install modes (Hugo
  module, NPM from GitHub, classic non-module theme), states the consumer's
  expected layout for each, and commits to validating all three on a feature
  branch before the canonical move.
- Expand the Compatibility table with rows for "NPM install command the consumer
  types" and "Hugo `theme:` value the consumer uses", with their preserved
  values, so "no config change" is unambiguous.
- Add the acceptance-criteria additions above (postinstall scope, smoke matrix,
  generator paths).

## Validation Checklist (Pre-Merge)

- [ ] `docsy.dev` builds locally against the new layout.
- [ ] `make-site.sh -s NPM` passes against a PR branch of the new layout.
- [ ] `make-site.sh -s HUGO_MODULE` passes against a PR branch.
- [ ] `docsy-example` builds with no `hugo.yaml`/`go.mod` change beyond the
      usual version update.
- [ ] `_diff:check` is clean after `_prepare` runs at the new paths.
- [ ] No `_prepare`/`postinstall` work runs in consumer installs.
- [ ] Release-blog upgrade section fits in one short section.

<!-- cSpell:ignore docsy fortawesome fontawesome twbs -->
