---
title: 0.13 issue resolution audit
date: 2025-11-12
cSpell:ignore: docsy lookandfeel userguide
---

> Report refreshed for commits through `f016114` on `main`.

Assessment of issues addressed by [commits since
v0.12.0][commits since v0.12.0].

## #941 – Markdown-friendly alert shortcode

- **Commits**: `b3e4ccf`, `433ddb6`, `82d492b`
- **Status**: Resolved; new shortcode implementation and follow-up doc polish
  merged.
- **User Guide**: Updated (`docsy.dev` and legacy `userguide` pages covering
  alert usage and styling).
- **Changelog**: Entry added under 0.12.1/0.13.0 breaking changes describing the
  new shortcode.
- **Client impact**: Yes — theme users should switch to the Markdown-friendly
  syntax.
- **Follow-up**: Ensure `docsy-example` adopts new shortcode syntax and drop
  legacy guidance.

## #2173 – Add Occitan locale

- **Commits**: `627a0df`
- **Status**: Resolved; new `i18n/oc.toml` locale added.
- **User Guide**: Not required (translation addition only).
- **Changelog**: No entry yet; optional to mention under “Other changes”.
- **Client impact**: Low — only projects targeting Occitan need the new locale.
- **Follow-up**: Spot-check locale in example site build.

## #2285 – Accessibility color & typography defaults

- **Commits**: `aa0f617`
- **Status**: Resolved; color contrast improvements landed.
- **User Guide**: Updated (`userguide/content/en/docs/content/lookandfeel.md`,
  tests page).
- **Changelog**: No coverage yet — should be captured under accessibility
  improvements.
- **Client impact**: Yes — visual adjustments land automatically; projects may
  want regression checks.
- **Follow-up**: Add changelog highlight; rerun visual regression checks.

## #349 / #2289 – TOC scrollspy & navigation indication

- **Commits**: `4323d09`, `3a5cfea`, `55db259`, `2cb3725`, `0571623`
- **Status**: Feature shipped; ScrollSpy + TOC polish in place with
  comprehensive documentation.
- **User Guide**: Expanded documentation in `navigation.md` covering ScrollSpy
  behavior, tuning options (`ui.scrollSpy.rootMargin`), and configuration
  guidance.
- **Changelog**: Entry added in 0.12.1/0.13.0 "Other changes" section.
- **Client impact**: Yes — default TOC behavior changes; verify site-specific
  overrides.
- **Follow-up**: Complete.

## #2035 / #2001 – Language menu visibility & styling

- **Commits**: `aa8a701`, `d8f54d5`
- **Status**: Resolved; navbar dropdown always visible, sidebar styling fixed.
- **User Guide**: Updated navigation doc & `hugo.yaml`.
- **Changelog**: Breaking-change entry added (language menu visibility).
- **Client impact**: Yes — menu visibility changes across breakpoints; adjust
  custom themes/screenshots.
- **Follow-up**: Double-check narrow viewport screenshots; confirm sidebar
  opt-in instructions are clear.

## #2115 – NPM optional/peer dependency errors

- **Commits**: `2139e32`, `1b961c9`
- **Status**: Resolved; dependency graph restructured.
- **User Guide**: Adjusted references to renamed `docsy.dev` sample and scripts.
- **Changelog**: Covered under “Other changes”.
- **Client impact**: Yes — npm consumers benefit from cleaner installs; note in
  release guidance.
- **Follow-up**: Update downstream tooling documentation (e.g., release process
  or dev setup guides) if needed.

## #2313 – Simplified Chinese translation refresh

- **Commits**: `26120fc`
- **Status**: Resolved; translations updated.
- **User Guide**: Not required.
- **Changelog**: Not recorded; optional note in release summary.
- **Client impact**: Minimal — only zh-CN locales affected.
- **Follow-up**: Confirm translation bundle builds cleanly.

## #2331 – Ukrainian translation refresh

- **Commits**: `b2e919e`
- **Status**: Resolved; translations updated.
- **User Guide**: Not required.
- **Changelog**: Not recorded; optional note in release summary.
- **Client impact**: Minimal — only uk locales affected.
- **Follow-up**: Same verification as #2313.

## #2328 – Sidebar root feature (`sidebar_root_for`)

- **Commits**: `b23e453`, `2e5ebc4`, `cf3a3d7`, `f0c0575`, `84526b3`, `2523a8b`,
  `468c081`
- **Status**: Core feature merged; both `children` and `self` variants
  implemented, warning UX refined for docs-only root sections, and documentation
  added.
- **User Guide**: Documentation added in `navigation.md` covering usage,
  configuration options, and examples.
- **Changelog**: Entry added in 0.12.1/0.13.0 "New" section.
- **Client impact**: Yes — new optional feature; enablement steps and warning
  behavior documented.
- **Follow-up**: Complete.

## Dark-mode FOUC fix (no issue ID referenced)

- **Commits**: `e1bdb4e`, `1b8ccc3`
- **Status**: Fix validated in code; no formal issue linked.
- **User Guide**: Not applicable.
- **Changelog**: Missing; consider short note under “Other changes”.
- **Client impact**: Yes — improves UX for sites using dark mode.
- **Follow-up**: Capture regression test to prevent future flashes.

## #2266 – Release process enhancements

- **Commits**: `0e2ad18`, `595b25e`, `2523a8b`
- **Status**: Guidance updated (scripts, instructions), `fix:version` tooling
  now works in pre-commit hooks, and wrapup planning/reporting structure
  established.
- **User Guide**: Release docs updated within repo (not user-facing).
- **Changelog**: Not needed.
- **Client impact**: No direct impact; relevant mainly for maintainers.
- **Follow-up**: Sync milestone tracker; ensure new scripts referenced in
  release checklist and hook instructions.

## #2349 – Blog: upgrading to Docsy 0.12.0 from 0.11.0

- **Commits**: `3722bf7`
- **Status**: Blog published; provides upgrade guidance for the previous
  release.
- **User Guide**: Links to existing docs; no additional guide updates required.
- **Changelog**: Not applicable (blog-only change).
- **Client impact**: Indirect — helpful resource for users on older releases.
- **Follow-up**: Cross-link from the forthcoming 0.13 upgrade article; monitor
  for user feedback.

## #2356 – Upgrade blog title & slug consistency

- **Commits**: `95de91f`
- **Status**: Titles/slugs aligned across upgrade posts.
- **User Guide**: N/A (metadata-only change).
- **Changelog**: Not needed.
- **Client impact**: No — navigation/title housekeeping only.
- **Follow-up**: Ensure navigation and references use the updated slugs; adopt
  the convention for future posts.

[commits since v0.12.0]: https://github.com/google/docsy/compare/v0.12.0...main
