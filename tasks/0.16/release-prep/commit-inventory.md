---
title: 0.16 commit inventory
date: 2026-06-15
lastmod: 2026-06-15
range: v0.15.0..main
last-main-commit: f3128285
---

## Scope

Inventory covers commits in [v0.15.0...main][] through [f3128285][].

- First-parent commits: 18
- Raw commits in range: 18
- Baseline: latest official release tag, [v0.15.0][]

All commits in range are squash-merged PRs (one commit per PR), so the
first-parent spine and the raw range are identical. Every commit subject carries
its `(#NNNN)` PR number.

## User-facing changes

### Theme folder move (monorepo)

- `843c5345` [#2641][] Repo-reorg theme-only folder (TOF): move theme into
  `theme/` (phases 0–4b)
- `94f94145` [#2645][] Restore/add npm workspaces and simplify theme-deps
  install

### Hugo 0.158+ support

- `5c5733de` [#2647][] Upgrade to Hugo 0.158.0; raise theme min Hugo version;
  fix language-API deprecations
- `3e76f1f2` [#2648][] Upgrade to Hugo 0.160.1
- `f22a352d` [#2649][] Upgrade project Hugo build to 0.163.1

### Favicons

- `acf3453b` [#2653][] Remove default theme favicons and modernize docsy.dev's
  icons
- `c0f2ddc8` [#2654][] Discover and link site favicons from the default partial,
  and add an icon-generation helper
- `f3128285` [#2656][] Favicons: discover square size variants and ship a
  configurable `gen-favicons` CLI

### Documentation fixes (user-facing)

- `4f544377` [#2650][] Fix double `v` on version documentation
- `c2b2c7ad` [#2635][] Update `start-from-scratch.md` (superseded by [#2650][])

## Documentation and site content

- `de60b6db` [#2632][] Update examples page to 0.15.0, adjust maintainer notes
- `33ce90f0` [#2637][] Update maintainer notes
- `9eedc5a7` [#2651][] Switch Netlify badge to the documented canonical URL
- `cfc90204` [#2646][] Update repo-reorg task docs after monorepo cleanup
- `d8bd0760` [#2644][] TOF plan docs & status update — phase 4 done
- `e20fbd8f` [#2643][] TOF tweaks and plan + status updates — phase 4b

## Dependencies, tooling, and maintenance

- `ce9942b8` [#2630][] Set version to v0.15.1-dev
- `f5167068` [#2655][] Isolate the deprecation-probe test from production output

## Mixed-change commits needing review

- [#2641][] and [#2645][] together deliver the **theme folder move**: an
  install-path **breaking change** for all consuming sites, bundled with
  workspace/tooling reorganization and `theme/package.json` ownership of
  Bootstrap and Font Awesome. Treat the install-path change as user-facing; the
  workspace mechanics are maintainer-facing.
- [#2647][] combines a **breaking** minimum-Hugo bump (0.146.0 → 0.158.0),
  language-API deprecation cleanup, a deprecation-notice build guard, and docs.
- [#2649][] bumps the project Hugo build to 0.163.1 and migrates docsy.dev off
  the deprecated global `imaging.quality` config; it also regenerates md-output
  goldens for Hugo's resized-image cache-key churn.
- [#2653][] is **breaking** (removes ~18 bundled favicon files) and also
  modernizes docsy.dev's own icons and adds a golden test.
- [#2654][] and [#2656][] add the **new** favicon discovery behavior plus the
  `gen-favicons` CLI, with user-guide and test updates. [#2656][] also discovers
  square `favicon-NxN.png` / `apple-touch-icon-NxN.png` variants.
- [#2630][] continues release prep: dev-version stamps, an UNRELEASED changelog
  stub, and `set-package-version` hardening (release tooling).

[#2630]: https://github.com/google/docsy/pull/2630
[#2632]: https://github.com/google/docsy/pull/2632
[#2635]: https://github.com/google/docsy/pull/2635
[#2637]: https://github.com/google/docsy/pull/2637
[#2641]: https://github.com/google/docsy/pull/2641
[#2643]: https://github.com/google/docsy/pull/2643
[#2644]: https://github.com/google/docsy/pull/2644
[#2645]: https://github.com/google/docsy/pull/2645
[#2646]: https://github.com/google/docsy/pull/2646
[#2647]: https://github.com/google/docsy/pull/2647
[#2648]: https://github.com/google/docsy/pull/2648
[#2649]: https://github.com/google/docsy/pull/2649
[#2650]: https://github.com/google/docsy/pull/2650
[#2651]: https://github.com/google/docsy/pull/2651
[#2653]: https://github.com/google/docsy/pull/2653
[#2654]: https://github.com/google/docsy/pull/2654
[#2655]: https://github.com/google/docsy/pull/2655
[#2656]: https://github.com/google/docsy/pull/2656
[f3128285]: https://github.com/google/docsy/commit/f3128285
[v0.15.0...main]: https://github.com/google/docsy/compare/v0.15.0...main
[v0.15.0]: https://github.com/google/docsy/releases/v0.15.0
