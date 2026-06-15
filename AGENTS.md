# AGENTS.md — Docsy repo guide for AI agents

For detailed information about the Docsy project structure, branching model, and
release process, etc., see:

- The website content tree `docsy.dev/content/en/project/` ([project][])
- Note in particular [git-info.md][].

Agents should treat those documentation pages as the authoritative source for
project CI/CD, release process, etc.

[project]: docsy.dev/content/en/project/_index.md
[git-info.md]: docsy.dev/content/en/project/build/git-repo.md

## Code, test, and documentation conventions

- Assume that the maintainers and readers of the code you write are senior web
  developers and designers who know the site's tools, including Hugo, Bootstrap,
  etc.
- Brevity is good — in code, comments, and commit messages.
- When you write, think lean and DRY.
- Don't use comments to explain the obvious; use self-explanatory names and
  short names when the context is clear.
- This project has a long history; look for existing helpers (partials,
  shortcodes, SCSS mixins, and similar) before adding new ones.

## User guide

Enforce the [style guide][] when reviewing user guide additions or
modifications.

[style guide]: docsy.dev/content/en/project/style-guide.md

## Separation of concerns

Note this partitioning of concerns in the docs (to keep things lean and DRY):

- Changelog: see guidelines at the top. Very terse listing of changes; will link
  to posts to for "Details" links.
- Upgrade blog posts: help clients (humans and agents), know what has changed,
  what needs upgrading, and when upgrading is needed (for each change)
- The Docs reflect the current Docsy design. No or little historical notes.
- Release message links to the changelog and upgrade blog posts, and lists the
  actual Git history since the last release.

## Monorepo layout

The repo root orchestrates two npm workspaces:

- `theme/` — the Docsy theme module (the published Hugo module). Consuming sites
  import `github.com/google/docsy/theme`; npm/clone installs use
  `theme: docsy/theme`. `theme/package.json` owns Bootstrap and Font Awesome.
- `docsy.dev/` — the project website (this content tree).

Releases publish a nested module tag `theme/vX.Y.Z` alongside `vX.Y.Z`.

## Release prep

Release prep is driven by the `docsy-release-artifacts` skill, with a living
workspace under `tasks/VERSION/release-prep/` (release coordinates, a coverage
ledger, and a wrapup). It tracks every change since the last release and routes
each into the right artifact (changelog, release post, Hugo post). Refresh the
workspace as commits land; see the skill for the process.

## Pull requests

- Before the final push of a PR branch, run `npm run set:version:git-info` to
  refresh the package build ID. A pre-push hook also runs this and will abort
  the push if the ID changed, so doing it yourself avoids a failed push.
