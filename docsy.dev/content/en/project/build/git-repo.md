---
title: Git repository information
linkTitle: Git repos
cSpell:ignore: docsy hotfixes
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
  - All feature work and doc updates land here first.
  - Source of leading-edge theme version for downstream sites.

- `release` branch
  - Published & supported line of the theme and website.
  - Website production builds are deployed from this branch via Netlify.
  - An ancestor of `main` most of the time, diverged due to hotfixes on
    occasion.

No rebases and no history rewriting for either branch.

### Tags

- Tags are used for **official theme releases**
- Tags are attached to `main` commits, which are shared by `release` since the
  two branches sync on releases.

### Release flow

1. Work merges into `main`.
2. At release:
   - Tag the release commit on `main`.
   - Fast-forward `release` to that same commit.
3. Netlify deploys from `release`.

This keeps history mostly linear.

### Hotfixes (rare)

- If a fix lands on `release`, it must be forward-merged or cherry-picked to
  `main`.
- Next promotion fast-forwards `release` to `main` again.

Invariant: `release` should converge back to `main` ASAP.

## Why this model?

- Preserves a clean, mostly linear history.
- Allows website production deploys on release commits (and a rare hotfix).
- Keeps `main` free for ongoing theme + site development.
- Maintains clear, immutable release points for theme consumers via tags.

[Goldydocs]: <{{% param example_site_url %}}>
[Docsy example site repository]: <{{% param github_repo %}}-example>
[main Docsy repository]: <{{% param github_repo %}}>
