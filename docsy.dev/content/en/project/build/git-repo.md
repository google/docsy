---
title: Git repo info and branch model
linkTitle: Git repos and branches
cSpell:ignore: hotfixes
---

## Monorepo

The [main Docsy repository][] is effectively a **monorepo** containing the
Docsy:

- **Theme** at the repo root
- **Website** in the `docsy.dev` directory. The website uses the Docsy theme, of
  course, with extra styling.

These two projects are kept in sync at release points, but they may diverge
between releases, usually to allow the website to ship doc content and UX
improvements without forcing a theme release.

The main Docsy example site is [Goldydocs][], located in the [Docsy example site
repository][].

## Branch model

This repository's branch model is as follows:

- `main`: development branch for the next theme release and next site content.
- `release`: release and maintenance branch for the current theme version.
- `deploy/prod` and `doc-rooted`: publishing branches used by Netlify. These
  branches determine what is published (see the table below); they are not
  feature development branches.

The Goldydocs repo has the same model, except for `doc-rooted` which is not
used.

### Published sites

Netlify publishes the following site variants. A variant's version identity
(`version` and related params) comes from its config directory under
`docsy.dev/config/`:

| Site variant                         | Publishing branch | Version params |
| ------------------------------------ | ----------------- | -------------- |
| [Latest release][prod-site]          | `deploy/prod`     | `production/`  |
| [Next (dev)][next-site]              | `main`            | `_default/`    |
| [Doc-rooted (experimental)][dr-site] | `doc-rooted`      | `doc-rooted/`  |

PR deploy previews build like the Next variant.

### Tags

- Tags mark **official theme releases**.
- Release tags never move: the `release-tag-integrity`
  [ruleset][release-tag-integrity ruleset] blocks updates and deletion of `v*`
  and `theme/v*` tags, with no bypass; a second ruleset restricts their creation
  to the releaser.

### Workflow

#### Overview

1. Theme and site work is done on `main`.

2. When ready to release:
   - [Release from `main`](#release-from-main) (the usual case).
   - [Patch on `release`](#patch-on-release) (when `main` carries unreleased
     work).

3. Publish site updates:
   - Fast-forward `deploy/prod` from `main` when possible.
   - Otherwise (usually because `release` was patched), update it from
     `release`.

4. Netlify deploys from `deploy/prod` and `doc-rooted`.

This keeps theme releases and site deploys coordinated, but not tightly coupled.

#### Release from `main`

1. If `release` carries a patch that `main` doesn't (from a
   [patch on `release`](#patch-on-release)), first [restore the fast-forward
   path][].
2. Fast-forward `release` from `main` (`git merge --ff-only`).

#### Patch on `release`

Fix on `main` first whenever the fix applies there. Then:

1. Open a PR against `release` that cherry-picks the relevant commits from
   `main`, together with the release-preparation changes, and merge it.
2. Bring release-facing site updates (for example changelog and release blog
   updates) back onto `main` from `release`.

A patch that doesn't apply to `main` lands on `release` alone, by PR.

### Branch sync and invariants

`main`: governed by its [ruleset][main ruleset]; for its rules and the merge
gates, see [Merge requirements][].

`release`:

- Follows `main`: divergence lasts only from a patch on `release` to the next
  release from `main`.
- Every official release tag is reachable from it.
- Never rewritten: no force pushes, no deletion (enforced by its
  [ruleset][release ruleset]).
- Receives content by fast-forward from `main` or by PR.
- Checks (including EasyCLA and workflow security analysis) run on PRs into
  `release` and report there; acting on them is the merging maintainer's call.

`deploy/prod`:

- Reflects the current release's docs: follows `release` at release time.
- Can include site-only improvements from `main` that are compatible with the
  current release.

## Why this model?

- Keeps theme releases predictable while `main` moves quickly.
- Keeps `release` a follower of `main`, so a patch never opens a second line of
  development.
- `release` is protected against rewriting, not gated: any check required on it
  would also refuse the fast-forward from `main`, and content arriving that way
  was already gated on `main`.
- Lets the website ship docs UX improvements without forcing a theme release.
- Preserves clear release tags for theme consumers.
- Keeps branch responsibilities explicit for a small maintainer team.

[Goldydocs]: <{{% param example_site_url %}}>
[Docsy example site repository]: <{{% param github_repo %}}-example>
[dr-site]: https://doc-rooted--docsydocs.netlify.app
[main Docsy repository]: <{{% param github_repo %}}>
[main ruleset]: <{{% param github_repo %}}/rules/23697379>
[Merge requirements]: /project/about/maintainer-notes/#merge-requirements
[next-site]: https://main--docsydocs.netlify.app
[prod-site]: https://www.docsy.dev
[release ruleset]: <{{% param github_repo %}}/rules/24234982>
[release-tag-integrity ruleset]: <{{% param github_repo %}}/rules/24262989>
[restore the fast-forward path]:
  /project/about/maintainer-notes/#restoring-the-fast-forward-path
