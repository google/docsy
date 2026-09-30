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
- `release`: release and maintenance branch for the latest theme release.
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

- Release tags (`v*` and `theme/v*`) mark **official theme releases**.
- They never move: the `release-tag-integrity`
  [ruleset][release-tag-integrity ruleset] blocks their update and deletion,
  with no bypass.
- Only the designated releaser creates them, per the `release-tags`
  [ruleset][release-tags ruleset].

### Workflow

#### Overview

1. Theme and site work is done on `main`.

2. When ready to release:
   - [Release from `main`](#release-from-main) (the usual case).
   - [Patch on `release`](#patch-on-release) (when `main` carries work that
     isn't ready to release).

3. Publish site updates:
   - After a release from `main`: fast-forward `deploy/prod` from `main`.
   - After a patch on `release`: update `deploy/prod` from `release`.

4. Netlify deploys from `deploy/prod` and `doc-rooted`.

#### Release from `main`

1. If `release` or `deploy/prod` has commits that `main` doesn't (after a
   [patch on `release`](#patch-on-release), which also moves `deploy/prod`, or
   after a site-only change cherry-picked onto `deploy/prod`), first [restore
   the fast-forward path][].
2. At release time, fast-forward `release` to the release commit:

   ```sh
   git checkout release
   git merge --ff-only main
   git push upstream release
   ```

   Between releases, `release` stays at the latest release: it is the base for
   patches.

#### Patch on `release`

Fix on `main` first whenever the fix applies there. Then:

1. Open a PR against `release` that cherry-picks the relevant commits from
   `main`, together with the release-preparation changes, and merge it.
2. Bring release-facing site updates (for example changelog and release blog
   updates) back onto `main` from `release`.

A patch that doesn't apply to `main` lands only on `release`, by PR.

### Branch sync and invariants

`main`: for its rules and the merge gates, see [Merge requirements][].

`release`:

- Follows `main`: divergence lasts only from a patch on `release` to the next
  release from `main`.
- Every official release tag is reachable from it once its release is final.
- Never rewritten: no force pushes, no deletion (enforced by its
  [ruleset][release ruleset]).
- Receives content through [releases from `main`](#release-from-main) or
  [patches on `release`](#patch-on-release).
- Checks (including EasyCLA and workflow security analysis) run on PRs into
  `release` and report there; acting on them is the merging maintainer's call.
  An EasyCLA miss on `release` resurfaces at the next
  [restore][restore the fast-forward path], where EasyCLA is required.

`deploy/prod`:

- Reflects the current release's docs: follows `release` at release time (after
  a release from `main`, the same commit as `main`).
- Can include site-only improvements from `main` that are compatible with the
  current release.

## Why this model?

- Keeps theme releases predictable while `main` moves quickly.
- Keeps `release` a follower of `main`, so a patch never opens a second line of
  development.
- Protects `release` against rewriting without gating it: requiring `main`'s
  [PR-scoped gates][Merge requirements] there would refuse the fast-forward from
  `main`, whose content already passed them.
- Lets the website ship docs UX improvements without forcing a theme release.

[Goldydocs]: <{{% param example_site_url %}}>
[Docsy example site repository]: <{{% param github_repo %}}-example>
[dr-site]: https://doc-rooted--docsydocs.netlify.app
[main Docsy repository]: <{{% param github_repo %}}>
[Merge requirements]: /project/about/maintainer-notes/#merge-requirements
[next-site]: https://main--docsydocs.netlify.app
[prod-site]: https://www.docsy.dev
[release ruleset]: <{{% param github_repo %}}/rules/24234982>
[release-tag-integrity ruleset]: <{{% param github_repo %}}/rules/24262989>
[release-tags ruleset]: <{{% param github_repo %}}/rules/20660119>
[restore the fast-forward path]:
  /project/about/maintainer-notes/#restoring-the-fast-forward-path
