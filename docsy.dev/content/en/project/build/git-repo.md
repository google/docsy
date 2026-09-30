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
- `release`: release and maintenance branch for the current stable theme version
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

- Tags mark **official theme releases**; every release tag is reachable from
  `release`.
- Tags never move: the `release-tags` [ruleset][release-tags ruleset] blocks
  updates and deletion.

### Workflow

#### General workflow

1. Theme and site work is done on `main`.

2. When ready to release:
   - Stable release: fast-forward `release` from `main`.
   - Patch release: see [Patch release workflow](#patch-release-workflow).

3. Publish site updates:
   - Fast-forward `deploy/prod` from `main` when possible.
   - Otherwise (usually because `release` was patched), update it from
     `release`.

4. Netlify deploys from `deploy/prod` and `doc-rooted`.

This keeps theme releases and site deploys coordinated, but not tightly coupled.

#### Patch release workflow

Fix on `main` first whenever the fix applies there. Then:

1. Open a PR against `release` that cherry-picks the relevant commits from
   `main`, together with the release-preparation changes; merge it.
2. Bring release-facing site updates (for example changelog and release blog
   updates) back onto `main` from `release`.
3. Update `deploy/prod` from `release`.

A patch that doesn't apply to `main` lands on `release` alone, by PR.

### Branch sync and invariants

Repository [rulesets][] enforce the following:

`main`:

- Changes land only through pull requests, with linear history: squash or rebase
  merges, no merge commits.

`release`:

- The theme release and maintenance branch, from which every release tag is
  reachable.
- Never rewritten: no force pushes, no deletion.
- Receives content by fast-forward from `main` or by PR. Patches may be code
  that isn't on `main`.

Both branches:

- PRs need the `EasyCLA` check (the Docsy organization's rule).
- PRs must pass the workflow-security scan at the rulesets' thresholds (see
  [Merge requirements][]).

`deploy/prod`:

- Reflects the current release's docs: follows `release`.
- Can include site-only improvements from `main` that are compatible with the
  current release.

## Why this model?

- Keeps stable theme releases predictable while `main` moves quickly.
- Lets the website ship docs UX improvements without forcing a theme release.
- Preserves clear release tags for theme consumers.
- Keeps branch responsibilities explicit for a small maintainer team.

[Goldydocs]: <{{% param example_site_url %}}>
[Docsy example site repository]: <{{% param github_repo %}}-example>
[dr-site]: https://doc-rooted--docsydocs.netlify.app
[main Docsy repository]: <{{% param github_repo %}}>
[Merge requirements]: /project/about/maintainer-notes/#merge-requirements
[next-site]: https://main--docsydocs.netlify.app
[prod-site]: https://www.docsy.dev
[release-tags ruleset]: <{{% param github_repo %}}/rules/20660119>
[rulesets]: <{{% param github_repo %}}/rules/>
