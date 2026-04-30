---
title: 0.15 issue audit
date: 2026-04-25
lastmod: 2026-05-01
range: v0.14.3..main
last-main-commit: 466bd327
cSpell:ignore: afdocs overpromising
---

## Scope

Draft audit covers material changes in [v0.14.3...main][] through [466bd327][].
This is an evidence pass for review before writing the wrapup report, release
blog post, or changelog updates.

## Summary

- Major candidate release themes:
  - experimental agent support with Markdown outputs and `llms.txt`
  - doc-rooted site support and documentation
  - version and variant menu improvements
  - community/footer link behavior fixes
  - deployment and release-process documentation improvements
  - i18n additions and translation updates
- Known likely breaking or action-requiring items:
  - [#2580][] changes multilingual community/footer path interpretation to
    site-relative paths.
  - [#2585][] raises the repository-supported Hugo version to 0.157.0 and keeps
    release guidance on Node LTS 24.
- Reclassified during release prep:
  - [#2565][] (`card` shortcode rendering: `markdownify` →
    `$.Page.RenderString`) was originally listed as **breaking** but was
    reclassified to **new behavior** during release prep. Rationale: the change
    enables page-context resolution of relative links/images and page-context
    Markdown render hooks — a capability that wasn't available before. To the
    project's best knowledge, no client relied on the previous resolution
    behavior in a way that would break under 0.15.0, and no issue requested the
    new capability prior to its inclusion in [#2565][]. The judgement call is
    documented in the 0.15.0 release blog (Card shortcode rendering section) and
    the upgrade manifest's `new[]` entry, both of which note that the item will
    be reclassified back to **breaking** if a regression is reported.
- Changelog / blog: refreshed for **0.15** through [#2616][] and follow-on prep
  ([#2618][], [#2619][], [#2620][], [#2621][]). Final tagging pass still
  replaces prerelease/release-page placeholders as needed.
- Link check: the agent-support user-guide page is now on `main` via [#2611][];
  the earlier blog-link blocker is resolved.

### Docs/blog/changelog status summary

Each PR and commit in scope of this release may require updates to the docs, or
require an entry in the changelog or blog. Here is a summary of the status of
each of these for Docs, Blog, and Changelog (CL). Table entry values include:

- **0**: not started
- **done**: Shipped for this release **and** no further planned work on **that
  channel** (docs, blog, or changelog) to carry into a later release.
- **rel**: Shipped for this release **and** follow-up on **that channel** is
  expected or tracked for a future release (see audit detail **Follow-up
  needed**).
- **N/A**: not applicable
- **WIP**: work in progress

| Item                                                       | Docs | Blog | CL   | Notes                                      |
| ---------------------------------------------------------- | ---- | ---- | ---- | ------------------------------------------ |
| [#2082][]: Add Azerbaijan language                         | done | done | done | Internationalization                       |
| [#2555][]: Set version to 0.14.3-dev                       | N/A  | N/A  | N/A  | Release-prep maintenance                   |
| [#2556][]: Reorg deployment docs, normalize links          | done | done | done | Documentation/process cleanup              |
| [#2557][]: Add version menu to site                        | done | done | done | New / potentially breaking [^ver-menu]     |
| [#2558][]: Replace placeholder locale by French            | done | done | done | Site-only i18n setup                       |
| [#2559][]: Document `deploy/prod` branch                   | done | done | done | Documentation/process cleanup              |
| [#2560][]: Update bug report template                      | N/A  | N/A  | N/A  | Admin                                      |
| [#2562][]: Ensure `.td-main > .row` grows vertically       | done | done | done | Already covered by v0.14.3                 |
| [#2563][]: Add doc-rooted example version and guidance     | done | done | done | Doc-rooted sites                           |
| [#2564][]: Use `TD_BUILD_CTX` for doc-rooted builds        | rel  | done | done | Doc-rooted sites                           |
| [#2565][]: Update doc-rooted configs and `card` rendering  | rel  | done | done | Includes client-impacting `card` change    |
| [#2567][]: Remove `sidebar_root_for` user-guide docs       | rel  | done | done | Doc-rooted cleanup                         |
| [#2568][]: Dedup site homepages for doc-rooted sites       | rel  | done | done | Doc-rooted sites                           |
| [#2571][]: Update `deploy/prod` to 0.14.3                  | N/A  | N/A  | N/A  | Branch maintenance                         |
| [#2572][]: Clarify release process and branch model        | done | done | done | Documentation/process cleanup              |
| [#2573][]: Sync `release` and `deploy/prod` branches       | N/A  | N/A  | N/A  | Branch maintenance                         |
| [#2574][]: Link release branches back into main ancestry   | N/A  | N/A  | N/A  | Branch maintenance                         |
| [#2575][]: Format project about docs and add project link  | done | done | done | Documentation/process cleanup              |
| [#2576][]: Fix footer/community link target and `rel`      | done | done | done | Community/footer links                     |
| [#2577][]: Record ancestry with release branches           | N/A  | N/A  | N/A  | Branch ancestry                            |
| [#2579][]: Use canonical URL to contributing page          | done | done | done | Documentation/process cleanup              |
| [#2580][]: Resolve community/footer links under permalinks | done | done | done | Potentially breaking multilingual behavior |
| [#2583][]: Add Romanian locale                             | done | done | done | Internationalization                       |
| [#2584][]: Add site-local URL markdownlint rule            | done | done | done | Documentation/process cleanup              |
| [#2585][]: Update NPM packages and Hugo tooling            | done | done | done | Final versions reflected in blog           |
| [#2586][]: Update version and variant menu                 | done | done | done | New / potentially breaking [^ver-menu]     |
| [#2587][]: Finalize doc-rooted configuration explanation   | done | done | done | Doc-rooted sites                           |
| [#2591][]: Add German alert-label translations             | done | done | done | Internationalization                       |
| [#2597][]: Add Markdown output phase 1                     | done | done | done | Experimental agent support                 |
| [#2599][]: Drop Docsy-defined `Markdown` output format     | done | done | done | Experimental agent support                 |
| [#2600][]: Trim Markdown output titles and descriptions    | done | done | done | Experimental agent support                 |
| [#2601][]: Add View Markdown page-meta link                | done | done | done | Experimental agent support                 |
| [#2602][]: Add `post_view_markdown` to i18n files          | done | done | done | Agent support and i18n                     |
| [#2603][]: Add Romanian View Markdown translation          | done | done | done | Internationalization                       |
| [#2604][]: Create `az.yaml` from TOML                      | done | done | done | Internationalization                       |
| [#2605][]: Add LLMS output and `llms.txt`                  | done | done | done | Experimental agent support                 |
| [#2606][]: Allow Markdown output for project docs          | done | done | done | Experimental agent support                 |
| [#2610][]: 0.15 release-prep omnibus                       | done | done | done | Blog, changelog, refcache, reports, links  |
| [#2611][]: Agent support UG and release-prep refresh       | done | done | done | Resolves agent-support blog-link blocker   |
| [#2616][]: Update 0.15 release blog, CL, and docs          | done | done | done | Final release-content refresh              |

[^ver-menu]:
    The docsy.dev navbar **version / variant** menu was visible (including
    **`main`** / **`0.14.4-dev`**) before any Blog/changelog note; **0.15**
    documents it ([#2616][]):
    [Version menu entries](/blog/2026/0.15.0/#version-menu).

Raw commits in scope without PR numbers in their commit subjects:

| Item                                                 | Docs | Blog | CL   | Notes                         |
| ---------------------------------------------------- | ---- | ---- | ---- | ----------------------------- |
| `40bef3c7`: Record ancestry with release             | N/A  | N/A  | N/A  | Covered by branch maintenance |
| `21a1ff37`: Record ancestry with deploy/prod         | N/A  | N/A  | N/A  | Covered by branch maintenance |
| `5f0b2c86`: Use canonical URL to contributing page   | done | done | done | Covered by [#2579][]          |
| `df519b49`: Resolve community and footer links paths | done | done | done | Covered by [#2580][]          |
| `e91cf749`: Add markdownlint rule and fix link       | done | done | done | Covered by [#2584][]          |
| `ca5deb63`: Update NPM packages and Hugo to 0.157.0  | done | done | done | Covered by [#2585][]          |
| `2ad607a8`: Update package.json                      | done | done | done | Covered by [#2585][]          |
| `28d44d1f`: Use bash `cp` instead of NPM `cpy-cli`   | done | done | done | Covered by [#2585][]          |

## Audit details

### Agent support: Markdown output and `llms.txt`

- Evidence: [#2597][], [#2599][], [#2600][], [#2601][], [#2602][], [#2605][],
  [#2606][]; tracker [#2596][]; golden-test tracker [#726][].
- Status: resolved for 0.15 phase 1. The basic Markdown output, `llms.txt`,
  "View Markdown" link, user-guide page, and scorecard documentation are merged.
  Phase-1 tracker [#2596][] is closed; future work moved to [#2614][].
- Downstream/client impact:
  - Adds opt-in theme support through Hugo output formats and templates.
  - Adds a visible "View Markdown" page-meta link when Markdown alternate output
    exists.
  - Includes new i18n key `post_view_markdown`.
- Docs impact:
  - Status: **done** for phase 1 (no further docs/blog/changelog carry-forward
    required for this release).
  - Feature planning is in `tasks/0.15/agent-support.plan.md`.
  - Golden-test planning exists in `tasks/0.15/md-output-golden-tests.plan.md`.
  - `docsy.dev` is configured to enable Markdown and LLMS outputs.
  - Dedicated user-guide page `docsy.dev/content/en/docs/content/agent-support/`
    exists on `main` via [#2611][].
- Changelog impact:
  - Status: **done** for phase 1.
  - The 0.15 changelog entry includes this under Experimental.
- Blog inclusion:
  - Status: **done** for phase 1.
  - Included as a major experimental feature, with a link to the user guide and
    [#2614][] for later phases.
- Release-post treatment: experimental.
- Follow-up (later releases, not release-channel carry-forward for 0.15):
  - Track further agent-support work in [#2614][].

### Doc-rooted site support

- Evidence: [#2563][], [#2564][], [#2565][], [#2567][], [#2568][], [#2579][],
  [#2580][], [#2586][], [#2587][]; tracker [#2504][]; closed issues [#2492][]
  and [#2499][].
- Status: resolved for 0.15. [#2492][] and [#2499][] are closed through
  [#2563][], and the overall [#2504][] tracker is closed.
- Downstream/client impact:
  - Adds a concrete configuration pattern for documentation-first sites.
  - May affect users with custom docs-only/doc-rooted configurations.
  - `card` shortcode rendering now uses `$.Page.RenderString` instead of
    `markdownify`, which renders shortcode fields in the page context — a
    capability (page-relative link/image resolution and page-context Markdown
    render hooks) that wasn't available before. **Reclassified during release
    prep** from breaking to new behavior; see the Summary section of this audit
    for the rationale. Override authors may still want to diff their local
    `card.html` against the v0.15.0 partial.
- Docs impact:
  - Status: **rel** on the summary table for ongoing doc-rooted refinements;
    baseline guidance and examples shipped for 0.15.
  - `docsy.dev/content/en/docs/content/adding-content.md` now documents
    doc-rooted sites and links the doc-rooted example.
  - `docsy.dev/config/doc-rooted/` adds a doc-rooted site configuration.
  - `docsy.dev/content/en/project/build/git-repo.md` documents the `doc-rooted`
    branch.
- Changelog impact:
  - Status: done.
  - The 0.15 changelog entry includes doc-rooted sites and `card` shortcode
    rendering.
- Blog inclusion:
  - Status: done.
  - Included as a major improvement, with migration notes for projects that
    previously used docs-only patterns.
  - The `card` shortcode rendering change is called out as a breaking/action
    review item.
- Follow-up needed:
  - Use 0.16+ issues for any remaining doc-rooted refinements.

### Community and Footer Link Behavior

- Evidence: [#2576][], [#2580][]; closed issues [#1380][] and [#2133][]; tracker
  [#2504][].
- Status: resolved for [#1380][] and [#2133][]. [#2580][] contributes to
  [#2504][] and carries a potentially breaking behavior note.
- Downstream/client impact:
  - Footer links now support `rel`.
  - Community/footer links only open in a new target for external links.
  - Community/footer links resolve under custom permalinks.
  - Potentially breaking: multilingual sites now interpret paths as
    site-relative; use the default language code prefix to force a default
    language target.
- Docs impact:
  - Status: **done** (guidance links to the existing community-page
    configuration docs).
- Changelog impact:
  - Status: done.
  - The 0.15 changelog entry includes this as a breaking change.
- Blog inclusion:
  - Status: done.
  - Included in the breaking/action section.
- Guidance:
  - Review community and footer link path values on multilingual sites.
  - Paths are now interpreted as site-relative so they resolve correctly under
    custom permalinks.
  - To force a link to the default language, prefix the path with the default
    language code.
- Follow-up (optional polish): richer multilingual examples only if triage
  requests them; not required on docs/blog/changelog channels for 0.15.

### Version and Variant Menus

- Evidence: [#2557][], [#2586][]; [#2586][] contributes to [#2504][].
- Downstream/client impact: Version/variant menu markup; `tdVersion` structure;
  v-prefix normalization (`0.14.4-dev` → `v0.14.4-dev`); version menu is no
  longer hidden on smaller viewports. Blog/CL timing for docsy.dev: [^ver-menu].
- Docs impact: done — `docsy.dev/content/en/docs/content/versioning.md`,
  `docsy.dev/content/en/docs/content/navigation.md`, maintainer-notes, version
  scripts.
- Changelog / Blog: done for **0.15** — [^ver-menu].
- Follow-up: none.

### Layout Fixes

- Evidence: [#2562][]; closed issue [#2561][].
- Status: resolved. This fix is also part of the 0.14.3 patch-release story.
- Downstream/client impact: fixes `.td-main > .row` vertical growth.
- Docs impact:
  - Status: done for 0.15.
  - No user-guide action expected.
- Changelog impact:
  - Status: done.
  - Already documented under v0.14.3; do not duplicate in 0.15.
- Blog inclusion:
  - Status: done for 0.15.
  - Omit from 0.15 highlights. It belongs to the 0.14.3 patch story, and keeping
    0.15 lean avoids duplicating 0.14 material.
- Follow-up needed: none identified.

### Deployment and Release Process Docs

- Evidence: [#2556][], [#2559][], [#2572][], [#2575][], [#2579][], [#2584][].
- Status: implemented.
- Downstream/client impact: primarily documentation quality.
- Docs impact:
  - Status: done.
  - Deployment docs were split into provider-specific pages.
  - Branch model now documents `main`, `release`, `deploy/prod`, and
    `doc-rooted`.
  - Markdownlint now checks for site-local `docsy.dev` external URLs.
- Changelog impact:
  - Status: done for 0.15.
  - Draft 0.15 changelog entry briefly mentions deployment and branch-model
    docs.
- Blog inclusion:
  - Status: done for 0.15.
  - Omitted from the refreshed 0.15 post except where relevant as supporting
    links. The changelog carries the terse process-docs note.
- Follow-up needed: none identified for release blockers.

### Dependencies and Tooling

- Evidence: [#2585][].
- Status: implemented.
- Downstream/client impact:
  - Updates NPM packages.
  - Updates Hugo to 0.157.0.
  - Drops `cpy-cli` in favor of a shell `cp` call.
- Docs impact:
  - Status: done.
  - Supported-version references were refreshed in [#2616][].
- Changelog impact:
  - Status: done.
  - The 0.15 changelog entry mentions `hugo-extended` 0.157.0.
- Blog inclusion:
  - Status: done.
  - The upgrade section now lists Docsy 0.15.0, Hugo 0.157.0, and Node LTS 24.
- Follow-up needed:
  - Replace release-page placeholders when tagging.

### Internationalization

- Evidence: [#2558][], [#2583][], [#2603][], [#2082][], [#2604][], [#2591][],
  [#2602][].
- Status: implemented.
- Downstream/client impact:
  - Adds French homepage setup for the site.
  - Adds Romanian locale and "View Markdown" translation.
  - Adds Azerbaijan language YAML.
  - Adds missing German alert-label translations.
  - Adds `post_view_markdown` values across i18n files.
- Docs impact:
  - Status: done for 0.15.
  - No release-blocking docs found.
- Changelog impact:
  - Status: done.
  - The 0.15 changelog entry includes i18n highlights.
- Blog inclusion:
  - Status: done.
  - Included as "Internationalization" under other notable changes.
- Follow-up needed: invite native-speaker review for generated or assisted
  translations if desired.

## Review Decisions

- Treat agent support Markdown output and `llms.txt` support as experimental in
  the 0.15 release report.
- Omit 0.14.3-only fixes from 0.15 highlights. They are covered by the 0.14
  release resources, including the v0.14.3 changelog entry.
- [#2504][] and [#2596][] are now closed for 0.15. Use [#2614][] and the 0.16
  tracker for follow-up that should not block the tag.

## References

- [Release 0.15.0 preparation #2501][#2501]

[#1380]: https://github.com/google/docsy/issues/1380
[#2082]: https://github.com/google/docsy/pull/2082
[#2133]: https://github.com/google/docsy/issues/2133
[#2492]: https://github.com/google/docsy/issues/2492
[#2499]: https://github.com/google/docsy/issues/2499
[#2501]: https://github.com/google/docsy/issues/2501
[#2504]: https://github.com/google/docsy/issues/2504
[#2555]: https://github.com/google/docsy/pull/2555
[#2556]: https://github.com/google/docsy/pull/2556
[#2557]: https://github.com/google/docsy/pull/2557
[#2558]: https://github.com/google/docsy/pull/2558
[#2559]: https://github.com/google/docsy/pull/2559
[#2560]: https://github.com/google/docsy/pull/2560
[#2561]: https://github.com/google/docsy/issues/2561
[#2562]: https://github.com/google/docsy/pull/2562
[#2563]: https://github.com/google/docsy/pull/2563
[#2564]: https://github.com/google/docsy/pull/2564
[#2565]: https://github.com/google/docsy/pull/2565
[#2567]: https://github.com/google/docsy/pull/2567
[#2568]: https://github.com/google/docsy/pull/2568
[#2571]: https://github.com/google/docsy/pull/2571
[#2572]: https://github.com/google/docsy/pull/2572
[#2573]: https://github.com/google/docsy/pull/2573
[#2574]: https://github.com/google/docsy/pull/2574
[#2575]: https://github.com/google/docsy/pull/2575
[#2576]: https://github.com/google/docsy/pull/2576
[#2577]: https://github.com/google/docsy/pull/2577
[#2579]: https://github.com/google/docsy/pull/2579
[#2580]: https://github.com/google/docsy/pull/2580
[#2583]: https://github.com/google/docsy/pull/2583
[#2584]: https://github.com/google/docsy/pull/2584
[#2585]: https://github.com/google/docsy/pull/2585
[#2586]: https://github.com/google/docsy/pull/2586
[#2587]: https://github.com/google/docsy/pull/2587
[#2591]: https://github.com/google/docsy/pull/2591
[#2596]: https://github.com/google/docsy/issues/2596
[#2597]: https://github.com/google/docsy/pull/2597
[#2599]: https://github.com/google/docsy/pull/2599
[#2600]: https://github.com/google/docsy/pull/2600
[#2601]: https://github.com/google/docsy/pull/2601
[#2602]: https://github.com/google/docsy/pull/2602
[#2603]: https://github.com/google/docsy/pull/2603
[#2604]: https://github.com/google/docsy/pull/2604
[#2605]: https://github.com/google/docsy/pull/2605
[#2606]: https://github.com/google/docsy/pull/2606
[#2610]: https://github.com/google/docsy/pull/2610
[#2611]: https://github.com/google/docsy/pull/2611
[#2614]: https://github.com/google/docsy/issues/2614
[#2616]: https://github.com/google/docsy/pull/2616
[#2618]: https://github.com/google/docsy/pull/2618
[#2619]: https://github.com/google/docsy/pull/2619
[#2620]: https://github.com/google/docsy/pull/2620
[#2621]: https://github.com/google/docsy/pull/2621
[#726]: https://github.com/google/docsy/issues/726
[466bd327]: https://github.com/google/docsy/commit/466bd327
[v0.14.3...main]: https://github.com/google/docsy/compare/v0.14.3...main
