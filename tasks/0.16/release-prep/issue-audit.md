---
title: 0.16 issue audit
date: 2026-06-15
lastmod: 2026-06-15
range: v0.15.0..main
last-main-commit: f3128285
cSpell:ignore: favicons gohugoio
---

## Scope

Audit covers material changes in [v0.15.0...main][] through [f3128285][]. This
is the evidence pass behind the wrapup report, the [0.16.0 release report][],
the companion [Hugo 0.158+ upgrade guide][], and the changelog updates.

## Summary

- Candidate release themes:
  - **Theme folder move** (monorepo): the theme now lives in `theme/`.
  - **Hugo 0.158+ support**: theme minimum raised to 0.158.0; project build on
    0.163.1; language-API deprecation cleanup.
  - **Favicons**: default favicons removed; conventional `static/` filenames
    discovered and linked; `gen-favicons` CLI.
  - Repository packaging cleanup (workspaces) and release/maintainer tooling.
- Breaking / action-requiring items (all in the [0.16.0 release report][]):
  - **Theme folder move** ([#2641][], [#2645][]): one install-path line per
    install mode.
  - **Minimum Hugo 0.158.0** ([#2647][], [#2581][], [#2593][]): upgrade Hugo;
    optional language-config key renames.
  - **Default favicons removed** ([#2653][], [#2595][]): sites now supply their
    own icons.
- Content reconciliation done in this pass:
  - **[#2656][]** (square `favicon-NxN.png` / `apple-touch-icon-NxN.png`
    discovery and the configurable `gen-favicons` CLI) was implemented but not
    referenced in the release report or changelog. Added its reference to the
    blog favicon summary bullet and to the changelog **New** favicon entry.
  - **[#2650][]** (fixes the documented `@vv0.15.0` install command): a
    user-facing docs fix judged too minor for the changelog, which tracks
    breaking changes and highlights only. Omitted by design; recorded here.
  - **Report rollback NOTE**: fixed a broken `[Upgrade to Docsy 0.12.0]` link in
    the release report that was split across a stray nested blockquote.
- Release-page placeholders (`releases/tag/v0.16.0`, changelog `UNRELEASED`,
  `draft: true` on both blog posts) remain to be finalized at tag time.

### Docs/blog/changelog status summary

Values: **0** not started, **done** shipped with no further planned work on that
channel, **rel** shipped with follow-up expected on that channel, **N/A** not
applicable, **WIP** work in progress.

| Item                                               | Docs | Blog | CL   | Notes                                 |
| -------------------------------------------------- | ---- | ---- | ---- | ------------------------------------- |
| [#2630][]: Set version to v0.15.1-dev              | N/A  | N/A  | N/A  | Release-prep maintenance              |
| [#2632][]: Update examples page to 0.15.0          | done | N/A  | N/A  | Docs/site, internal-only              |
| [#2635][]: Update `start-from-scratch.md`          | done | N/A  | N/A  | Superseded by [#2650][]               |
| [#2637][]: Update maintainer notes                 | done | N/A  | N/A  | Release-process docs                  |
| [#2641][]: TOF — move theme into `theme/`          | done | done | done | Breaking install-path                 |
| [#2643][]: TOF tweaks — phase 4b                   | N/A  | N/A  | N/A  | Plan/status docs                      |
| [#2644][]: TOF plan docs — phase 4 done            | N/A  | N/A  | N/A  | Plan/status docs                      |
| [#2645][]: Restore/add npm workspaces              | done | done | done | Packaging cleanup                     |
| [#2646][]: Update repo-reorg task docs             | N/A  | N/A  | N/A  | Task docs                             |
| [#2647][]: Hugo 0.158.0; min bump; language APIs   | done | done | done | Breaking minimum Hugo                 |
| [#2648][]: Upgrade to Hugo 0.160.1                 | done | done | done | Hugo upgrade guide                    |
| [#2649][]: Upgrade project Hugo build to 0.163.1   | done | done | done | Hugo build + imaging migration        |
| [#2650][]: Fix double `v` on version documentation | done | N/A  | N/A  | User-facing docs fix; omitted from CL |
| [#2651][]: Switch Netlify badge to canonical URL   | done | N/A  | N/A  | Site cleanup, internal-only           |
| [#2653][]: Remove default theme favicons           | done | done | done | Breaking: default favicons removed    |
| [#2654][]: Discover/link favicons; helper          | done | done | done | New favicon discovery                 |
| [#2656][]: Favicon variants and `gen-favicons` CLI | done | done | done | Blog/CL refs added this pass          |

## Audit details

### Theme folder move (monorepo)

- Evidence: [#2641][], [#2645][]; trackers [#2617][] (open) and [#2436][]
  (closed predecessor).
- Status: shipped for 0.16. The canonical theme tree is now under `theme/`;
  `theme/package.json` owns Bootstrap and Font Awesome; the root orchestrates
  the `docsy.dev` and `theme` npm workspaces.
- Downstream/client impact: **breaking**. Every install mode needs a one-line
  path update:
  - Hugo module: import `github.com/google/docsy/theme`; release also publishes
    the nested `theme/vX.Y.Z` module tag.
  - npm `themesDir: node_modules`: `theme: docsy/theme`.
  - clone/submodule: `theme: docsy/theme`.
- Docs/Blog/CL: done. Covered in the [0.16.0 release report][] (Theme folder
  move) and the changelog breaking-change list.
- Follow-up: continued repository cleanup tracks under [#2617][] (post-0.16).

### Hugo 0.158+ support

- Evidence: [#2647][] (0.158.0 + min bump + language APIs), [#2648][] (0.160.1),
  [#2649][] (0.163.1); trackers [#2581][] (closed), [#2593][] (closed); golden
  tests [#726][]; contributor groundwork [#2578][], [#2594][].
- Status: shipped. Theme minimum is 0.158.0; the project build is validated with
  0.163.1. Theme templates and docs use the post-0.158.0 language APIs, so
  builds log zero deprecation notices.
- Downstream/client impact: **breaking** minimum-Hugo bump. Sites on Hugo
  0.157.x or earlier must upgrade. Old language config keys (`languageName`,
  `languageDirection`) still work but should be renamed to `label` /
  `direction`. Node 22+ is required for Hugo-managed Node tools from 0.161.x
  (Docsy recommends Node LTS 24). Security tightening (HTML content, symlinks,
  remote URLs) and a short-lived 0.159.x `&`-escaping regression are covered in
  the Hugo post.
- Docs/Blog/CL: done. The [0.16.0 release report][] links the dedicated [Hugo
  0.158+ upgrade guide][], which carries the per-version Hugo mechanics (DRY).
- Follow-up: none for 0.16; future Hugo upgrades track separately.

### Favicons

- Evidence: [#2653][] (remove defaults; modernize docsy.dev icons), [#2654][]
  (discover/link partial; shell helper), [#2656][] (square-variant discovery;
  npm `gen-favicons` CLI); issues [#2595][] (closed), [#2357][] (open, 26Q3);
  superseded PR [#2652][].
- Status: shipped for 0.16. The theme no longer bundles ~18 favicon files. The
  default partial discovers and links conventional files from `static/`
  (`favicon.ico`, `favicon.svg`, `apple-touch-icon.png`, and square
  `favicon-NxN.png` / `apple-touch-icon-NxN.png` variants). A `gen-favicons` CLI
  generates raster icons from a source SVG.
- Downstream/client impact: **breaking** (default favicons removed) and **new**
  (zero-partial discovery). Sites that relied on Docsy's bundled icons must add
  their own under `static/`; sites overriding `favicons.html` can often drop the
  override.
- Docs/Blog/CL: done. [#2656][] was not initially referenced in the report or
  changelog; references added in this pass (see Summary). User guide: [Add your
  favicons][].
- Follow-up: light/dark and broader favicon polish remain on [#2357][] (26Q3).

### Documentation, site, and tooling

- Evidence: [#2630][] (dev-version + UNRELEASED changelog stub + release-tooling
  hardening), [#2632][] (examples page to 0.15.0), [#2637][] (maintainer notes),
  [#2650][]/[#2635][] (version-doc `vv` fix), [#2651][] (Netlify badge),
  [#2643][]/[#2644][]/[#2646][] (TOF plan/status docs), [#2655][]
  (deprecation-probe test isolation).
- Status: shipped; mostly internal/maintainer-facing.
- Downstream/client impact:
  - [#2650][]: user-facing docs fix — the documented `hugo mod get …@vv0.15.0`
    command had a stray `v`. Now correct.
  - The rest are docsy.dev/site, release-tooling, or test-only changes with no
    theme-client impact.
- Docs/Blog/CL: docs done where applicable; omitted from blog/changelog as not a
  release highlight. The build/test guards (deprecation probe, mono-site
  fixtures) are summarized in the report's "Build and test guards" section.
- Follow-up: none for release blockers.

## Review Decisions

- Treat the theme folder move, minimum-Hugo bump, and default-favicon removal as
  the three breaking changes for 0.16; everything else is new/cleanup or
  internal.
- Keep Hugo mechanics in the [Hugo 0.158+ upgrade guide][] and link to it from
  the report and changelog (DRY).
- Reference [#2656][] from the favicon report/changelog entries (done).
- Omit [#2650][] from the changelog as a minor docs fix; the changelog tracks
  breaking changes and highlights only.
- Defer remaining monorepo ([#2617][]) and favicon ([#2357][]) work to post-0.16
  trackers; neither blocks the tag.

## References

- [Release 0.16.0 preparation #2615][#2615]
- [v0.15.0...main][]
- Commit inventory: [commit-inventory.md](commit-inventory.md)
- Issue mapping: [issue-mapping.md](issue-mapping.md)
- Milestone 24 review: [milestone-24-review.md](milestone-24-review.md)

[#726]: https://github.com/google/docsy/issues/726
[#2357]: https://github.com/google/docsy/issues/2357
[#2436]: https://github.com/google/docsy/issues/2436
[#2578]: https://github.com/google/docsy/pull/2578
[#2581]: https://github.com/google/docsy/issues/2581
[#2593]: https://github.com/google/docsy/issues/2593
[#2594]: https://github.com/google/docsy/pull/2594
[#2595]: https://github.com/google/docsy/issues/2595
[#2615]: https://github.com/google/docsy/issues/2615
[#2617]: https://github.com/google/docsy/issues/2617
[#2652]: https://github.com/google/docsy/pull/2652
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
[#2656]: https://github.com/google/docsy/pull/2656
[f3128285]: https://github.com/google/docsy/commit/f3128285
[v0.15.0...main]: https://github.com/google/docsy/compare/v0.15.0...main
[0.16.0 release report]: ../../../docsy.dev/content/en/blog/2026/0.16.0.md
[Hugo 0.158+ upgrade guide]:
  ../../../docsy.dev/content/en/blog/2026/hugo-0.158.0+.md
[Add your favicons]: ../../../docsy.dev/content/en/docs/content/iconsimages.md
