---
title: Git repository information
linkTitle: Git repos
cSpell:ignore: hotfixes
---

## Monorepo

The [main Docsy repository][] is effectively a **monorepo** containing the
Docsy:

- **Theme** at the repo root
- **Website** in the `docsy.dev` directory. The website uses the Docsy theme, of
  course, with extra styling.

The main Docsy example site is [Goldydocs], located in the [Docsy example site
repository][].

## Branch model

Both the Docsy and Goldydocs repositories use the same branch model:

- `main`: development branch
  - All feature work and documentation updates land here first.
  - Source of the _leading-edge_ theme and website versions.

- `deploy/*`: publishing branches used by Netlify
  - `deploy/prod`: production site
  - `deploy/docs-only`: docs-only site variant
  - These branches determine what is published. They are not development
    branches. Changes must originate from `main` and are typically
    fast-forwarded here.

### Tags

- Tags are used for **official theme releases**
- Tags are attached to `main` commits, which are shared by `deploy/prod` since
  the two branches sync on releases.

### Release flow

1. Work merges into `main`.
2. At release:
   - Tag the release commit on `main`.
   - Fast-forward `deploy/prod` to that same commit.
3. Netlify deploys from `deploy/prod`.

This keeps history mostly linear.

### Hotfixes (rare)

- If a fix lands on `deploy/prod`, it must be forward-merged or cherry-picked to
  `main`.
- Next promotion fast-forwards `deploy/prod` to `main` again.

Invariant: `deploy/prod` should converge back to `main` ASAP.

## Why this model?

- Preserves a clean, mostly linear history.
- Allows website production deploys on release commits (and a rare hotfix).
- Keeps `main` free for ongoing theme + site development.
- Maintains clear, immutable release points for theme consumers via tags.

[Goldydocs]: <{{% param example_site_url %}}>
[Docsy example site repository]: <{{% param github_repo %}}-example>
[main Docsy repository]: <{{% param github_repo %}}>
