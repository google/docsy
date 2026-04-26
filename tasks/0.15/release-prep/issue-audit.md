---
title: 0.15 issue audit
date: 2026-04-25
lastmod: 2026-04-25
range: v0.14.3..main
last-main-commit: ee79b52c
cSpell:ignore: afdocs overpromising
---

## Scope

Draft audit covers material changes in [v0.14.3...main][] through [ee79b52c][].
This is an evidence pass for review before writing the wrapup report, release
blog post, or changelog updates.

## Summary

- Major candidate release themes:
  - experimental agent-friendly content generation with Markdown outputs and
    `llms.txt`
  - doc-rooted site support and documentation
  - version and variant menu improvements
  - community/footer link behavior fixes
  - deployment and release-process documentation improvements
  - i18n additions and translation updates
- Known likely breaking or action-requiring items:
  - [#2580][] changes multilingual community/footer path interpretation to
    site-relative paths.
  - [#2565][] changes `card` shortcode rendering from `markdownify` to
    `$.Page.RenderString`, which may affect some client overrides or shortcode
    content rendering.
  - [#2585][] raises the repository-supported Hugo version to 0.157.0.
- Changelog status: draft 0.15.0 entry exists and needs final review before
  release.
- Blog status: draft release report exists at
  `docsy.dev/content/en/blog/2026/0.15.0.md`.

## Audit details

### Agent-friendly Markdown output and `llms.txt`

- Evidence: [#2597][], [#2599][], [#2600][], [#2601][], [#2602][], [#2605][],
  [#2606][]; tracker [#2596][]; golden-test tracker [#726][].
- Status: partial. The basic Markdown output and `llms.txt` implementation is
  merged, but tracker [#2596][] intentionally remains open while additional 0.15
  follow-up work is still undecided.
- Downstream/client impact:
  - Adds opt-in theme support through Hugo output formats and templates.
  - Adds a visible "View Markdown" page-meta link when Markdown alternate output
    exists.
  - Includes new i18n key `post_view_markdown`.
- Docs impact:
  - Status: WIP.
  - Feature planning exists in `tasks/0.15/agent-friendly-support.plan.md`.
  - Golden-test planning exists in `tasks/0.15/md-output-golden-tests.plan.md`.
  - `docsy.dev` is configured to enable Markdown and LLMS outputs.
  - User-facing guide documentation for enabling Markdown outputs and `llms.txt`
    still needs release-facing review.
- Changelog impact:
  - Status: WIP.
  - Draft 0.15 changelog entry includes this under Experimental.
- Blog inclusion:
  - Status: WIP.
  - Include as a major experimental feature. Explain what is available now, what
    is opt-in, and what remains experimental.
- Release-post treatment: experimental.
- Follow-up needed:
  - Add user-guide or release-blog guidance for enabling Markdown output and
    `llms.txt`.
  - Note any measured `afdocs` caveats without overpromising support.

### Doc-rooted site support

- Evidence: [#2563][], [#2564][], [#2565][], [#2567][], [#2568][], [#2579][],
  [#2580][], [#2586][], [#2587][]; tracker [#2504][]; closed issues [#2492][]
  and [#2499][].
- Status: partial. [#2492][] and [#2499][] are closed through [#2563][], but the
  overall [#2504][] tracker remains open. Current expectation is that [#2504][]
  will close for 0.15, but confirm before finalizing release content.
- Downstream/client impact:
  - Adds a concrete configuration pattern for documentation-first sites.
  - May affect users with custom docs-only/doc-rooted configurations.
  - `card` shortcode rendering now uses `$.Page.RenderString` instead of
    `markdownify`, which renders shortcode fields in the page context. This may
    affect clients that depend on the previous rendering behavior or override
    the shortcode.
- Docs impact:
  - Status: done for 0.15.
  - `docsy.dev/content/en/docs/content/adding-content.md` now documents
    doc-rooted sites and links the doc-rooted example.
  - `docsy.dev/config/doc-rooted/` adds a doc-rooted site configuration.
  - `docsy.dev/content/en/project/build/git-repo.md` documents the `doc-rooted`
    branch.
- Changelog impact:
  - Status: WIP.
  - Draft 0.15 changelog entry includes doc-rooted sites and `card` shortcode
    rendering.
- Blog inclusion:
  - Status: WIP.
  - Include as a major feature or improvement, with migration notes for projects
    that previously used docs-only patterns.
  - Mention the `card` shortcode rendering change as an internal behavior change
    that may affect some client projects.
- Follow-up needed:
  - Confirm which [#2504][] checklist items remain before calling doc-rooted
    support complete.

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
  - Status: not started.
  - No dedicated user-guide update found in the first pass.
- Changelog impact:
  - Status: WIP.
  - Draft 0.15 changelog entry includes this as a breaking change.
- Blog inclusion:
  - Status: WIP.
  - Include in the breaking/action section as a potentially breaking change.
- Guidance:
  - Review community and footer link path values on multilingual sites.
  - Paths are now interpreted as site-relative so they resolve correctly under
    custom permalinks.
  - To force a link to the default language, prefix the path with the default
    language code.
- Follow-up needed: add this guidance to release notes and, if appropriate,
  user-guide examples for multilingual path prefixes.

### Version and Variant Menus

- Evidence: [#2557][], [#2586][].
- Status: implemented; no linked issue found except [#2586][] contributes to
  [#2504][].
- Downstream/client impact:
  - No client-facing release-note impact expected for 0.15.
  - Updates version/variant menu behavior and markup.
  - Introduces `tdVersion` YAML structure.
  - Version v-prefix use changed: old config used bare values such as
    `0.14.4-dev`; new config consistently uses values such as `v0.14.4-dev`.
- Docs impact:
  - Status: done.
  - `docsy.dev/content/en/docs/content/navigation.md` includes version menu
    guidance.
  - `docsy.dev/content/en/project/about/maintainer-notes.md` and package version
    scripts were updated.
- Changelog impact:
  - Status: done for 0.15.
  - Omit from client-facing release notes unless later release review identifies
    a downstream effect.
- Blog inclusion:
  - Status: done for 0.15.
  - Omit from client-facing highlights unless later release review identifies a
    downstream effect.
- Follow-up needed: none for release notes.

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
  - Status: WIP.
  - Include only if the 0.15 post has an "Other notable docs updates" section.
- Follow-up needed: none identified for release blockers.

### Dependencies and Tooling

- Evidence: [#2585][].
- Status: implemented.
- Downstream/client impact:
  - Updates NPM packages.
  - Updates Hugo to 0.157.0.
  - Drops `cpy-cli` in favor of a shell `cp` call.
- Docs impact:
  - Status: WIP.
  - Supported-version references need review before final release.
- Changelog impact:
  - Status: WIP.
  - Draft 0.15 changelog entry mentions `hugo-extended` 0.157.0, but final
    supported-version wording needs confirmation.
- Blog inclusion:
  - Status: WIP.
  - Include in upgrade/runtime section if Hugo 0.157.0 becomes the official 0.15
    Hugo requirement.
- Follow-up needed:
  - Confirm final Hugo and Node support matrix before release.
  - Check whether `cpy-cli` removal affects consumers or only repo tooling.

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
  - Status: WIP.
  - Draft 0.15 changelog entry includes i18n highlights.
- Blog inclusion:
  - Status: WIP.
  - Include as "Internationalization" under other notable changes.
- Follow-up needed: invite native-speaker review for generated or assisted
  translations if desired.

## Review Decisions

- Treat agent-friendly Markdown output and `llms.txt` support as experimental in
  the 0.15 release report.
- Omit 0.14.3-only fixes from 0.15 highlights. They are covered by the 0.14
  release resources, including the v0.14.3 changelog entry.
- Check [#2504][] before finalizing 0.15. It is expected to close, but confirm
  whether any remaining tasks need separate follow-up.

## References

- [Release 0.15.0 preparation #2501][#2501]

[#1380]: https://github.com/google/docsy/issues/1380
[#2082]: https://github.com/google/docsy/pull/2082
[#2133]: https://github.com/google/docsy/issues/2133
[#2492]: https://github.com/google/docsy/issues/2492
[#2499]: https://github.com/google/docsy/issues/2499
[#2501]: https://github.com/google/docsy/issues/2501
[#2504]: https://github.com/google/docsy/issues/2504
[#2556]: https://github.com/google/docsy/pull/2556
[#2557]: https://github.com/google/docsy/pull/2557
[#2558]: https://github.com/google/docsy/pull/2558
[#2559]: https://github.com/google/docsy/pull/2559
[#2561]: https://github.com/google/docsy/issues/2561
[#2562]: https://github.com/google/docsy/pull/2562
[#2563]: https://github.com/google/docsy/pull/2563
[#2564]: https://github.com/google/docsy/pull/2564
[#2565]: https://github.com/google/docsy/pull/2565
[#2567]: https://github.com/google/docsy/pull/2567
[#2568]: https://github.com/google/docsy/pull/2568
[#2572]: https://github.com/google/docsy/pull/2572
[#2575]: https://github.com/google/docsy/pull/2575
[#2576]: https://github.com/google/docsy/pull/2576
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
[#726]: https://github.com/google/docsy/issues/726
[ee79b52c]: https://github.com/google/docsy/commit/ee79b52c
[v0.14.3...main]: https://github.com/google/docsy/compare/v0.14.3...main
