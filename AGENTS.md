# AGENTS.md: Docsy repo guide for AI agents

The website content tree `docsy.dev/content/en/project/` ([project][]) is the
authoritative source for project structure, branching model, CI/CD, and release
process; note in particular [git-info.md][].

[project]: docsy.dev/content/en/project/_index.md
[git-info.md]: docsy.dev/content/en/project/build/git-repo.md

## Code, test, and documentation conventions

- Assume the maintainers and readers of the code you write are senior web
  developers and designers who know the site's tools, including Hugo and
  Bootstrap.
- Write lean and DRY, in code, comments, and commit messages.
- Don't use comments to explain the obvious; use self-explanatory names and
  short names when the context is clear.
- This project has a long history; look for existing helpers (partials,
  shortcodes, SCSS mixins, and similar) before adding new ones.
- In site content, `version` is the published variant's identity, not always a
  git ref; anything needing a resolvable release ref (install commands, etc.)
  uses `tdVersion.latest` (`docsy.dev/config/_default/params.yaml`).
- Add an explicit heading ID (`{#id}`) only when it differs from the ID that
  Hugo generates; verify against the rendered HTML, not by guessing. Nuances:
  - Icon/badge shortcodes and inline HTML are ID-transparent (no explicit ID
    needed): `## Ready to upgrade? <a id="legacy"></a>` and
    `### {{%/* _param FAS square-check primary */%}} Sanity checks` generate
    `ready-to-upgrade` and `sanity-checks`.
  - Literal punctuation between shortcodes is not:
    `## {{%/* _param BREAKING */%}} / {{%/* _param NEW */%}} Favicons` generates
    `--favicons`, so keep `{#favicons}`.
  - Keep deliberate short or stable IDs that inbound links rely on (e.g.
    `{#check}` on "Check your site", `{#update-order}` surviving retitles).

## User guide

Enforce the [style guide][] when reviewing user guide additions or
modifications.

[style guide]: docsy.dev/content/en/project/style-guide.md

## Separation of concerns

To keep the docs lean and DRY:

- Changelog: see guidelines at the top. Very terse listing of changes, with
  "Details" links to posts.
- Upgrade blog posts: help clients (humans and agents) know what has changed,
  what needs upgrading, and when upgrading is needed (for each change).
- The Docs reflect the current Docsy design, with few or no historical notes.
- Release message links to the changelog and upgrade blog posts, and lists the
  actual Git history since the last release.

## Monorepo layout

The repo root orchestrates two npm workspaces:

- `theme/`: the Docsy theme module (the published Hugo module). Consuming sites
  import `github.com/google/docsy/theme`; npm/clone installs use
  `theme: docsy/theme`. `theme/package.json` owns Bootstrap and Font Awesome.
- `docsy.dev/`: the project website (this content tree).

Releases publish a nested module tag `theme/vX.Y.Z` alongside `vX.Y.Z`.

Site builds resolve the theme through the checkout's parent directory
(`--themesDir ../..` with `theme: docsy/theme`), so the checkout directory must
be named `docsy`. From a checkout named differently (a git worktree, for
example), either run npm scripts through the `wt` helper (`npm run wt -- test`),
or set `HUGO_THEME=`_`DIR_NAME`_`/theme`, where _`DIR_NAME`_ is the checkout's
directory name.

## Release prep

Release prep is driven by the `docsy-release-artifacts` skill, with a living
workspace kept outside the repo. The canonical process is the maintainer notes'
[Release-prep audit][] section; the skill operationalizes it.

[Release-prep audit]:
  docsy.dev/content/en/project/about/maintainer-notes.md#release-prep-audit

## Pull requests

- Before the final push of a PR branch, run `npm run set:version:git-info` to
  refresh the package build ID. A pre-push hook also runs this and will abort
  the push if the ID changed, so doing it yourself avoids a failed push.
