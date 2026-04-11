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

The main Docsy example site is [Goldydocs], located in the [Docsy example site
repository][].

## Branch model

This repository's branch model is as follows:

- `main`: development branch for the next theme release and next site content.
- `release`: release and maintenance branch for the current stable theme version
- Publishing branches used by Netlify:
  - `deploy/prod`: production site for the current stable release docs.
  - `doc-rooted`: production branch for the doc-rooted site variant.
  - These branches determine what is published. They are not feature development
    branches.

The Goldydocs repo has the same model, except for `doc-rooted` which is not
used.

### Tags

- Tags are used for **official theme releases**.
- Tags are created from `release`.

### Workflow

#### General workflow

1. Theme and site work is done on `main`.

2. When ready to release:
   - Stable release: fast-forward merge from `main` to `release`.
   - Patch release: create and merge a release PR from `main` to `release`,
     e.g., by cherry-picking relevant commits.

3. Publish site updates:
   - Fast-forward `deploy/prod` from `main` when possible.
   - Otherwise (usually because of `release` was patched),

   - Bring release-facing site updates (for example changelog and release blog
     updates) onto `main` from `release`.

4. Netlify deploys from `deploy/prod` and `doc-rooted`.

This keeps theme releases and site deploys coordinated, but not tightly coupled.

#### Patch release workflow

For patches to the theme or website, generally prefer making the changes to
`main` first, though you can apply them to `release` then merge back to `main`.
Assuming the former, the patch-release workflow is as follows:

1. Cherry-pick relevant commits from `main` to `release`.
2. Create a and merge a release PR from `main` to `release`.
3. Bring release-facing site updates (for example changelog and release blog
   updates) back onto `main` from `release`.
4. Update `deploy/prod` from `main` by fast-forward merging if possible, if not
   then selectively bring in release relevant changes.

### Branch sync and invariants

`release`:

- The theme release and maintenance branch.
- Theme tags come from this branch.
- Flow is usually from `main` to `release` via fast-forward merge, when
  possible, cherry-picking otherwise (on patch releases)
- Periodically, after a patch release, record branch ancestry without taking
  content by periodically running `git merge -s ours release` on `main`.

`deploy/prod`:

- Reflects the current release docs baseline
- Can include site-only improvements that are compatible with the current
  release

## Why this model?

- Keeps stable theme releases predictable while `main` moves quickly.
- Lets the website ship docs UX improvements without forcing a theme release.
- Preserves clear release tags for theme consumers.
- Keeps branch responsibilities explicit for a small maintainer team.

[Goldydocs]: <{{% param example_site_url %}}>
[Docsy example site repository]: <{{% param github_repo %}}-example>
[main Docsy repository]: <{{% param github_repo %}}>
