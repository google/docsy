---
title: Changelog
description: Docsy repository changelog
weight: 99999
# prettier-ignore
cSpell:ignore: blockssection deining docsy FOUC gitmodules gtag katex lookandfeel mhchem navs notoc tabpane
---

We only document **breaking changes** and release **highlights** in this page.
For the full list of changes of any particular release, see the [release
notes][releases].

Useful links:

- [Releases] & [tags]. Jump to the [latest] release.
- [Milestones]

[latest]: https://github.com/google/docsy/releases/latest
[milestones]: https://github.com/google/docsy/milestones
[releases]: https://github.com/google/docsy/releases
[tags]: https://github.com/google/docsy/tags

> Note to authors: Start each detailed change entry with a verb in the past
> tense. Examples include "Added", "Changed", "Deprecated", and "Fixed". It's ok
> to follow that with "you can now...". For additional guidance, see
> [Keep a Changelog](https://keepachangelog.com)[^1].
>
> [^1]:
>     Old entries might not follow this guidance; feel free to update them as
>     needed.

## Breaking change

A **breaking change** is a backward-incompatible change to Docsy’s _public
contract_ that requires client projects to update their configuration, content,
or customizations in order to:

- Build successfully (without errors), or
- Preserve existing, significant site functionality or user experience,
  including visual design

See [semver].

> **Notes**:
>
> - The term _public contract_ refers to the templates, styles, configuration
>   patterns, and runtime behavior that client projects reasonably rely on.
> - A new build warning alone is not considered a breaking change, but it may
>   indicate a future breaking change, such as signaling a deprecation.

[semver]: https://semver.org/

<!-- TODO: look into https://www.conventionalcommits.org/en/v1.0.0/#summary -->

## v0.14.0 or v0.13.1 {#v0.14.0}

> **UNRELEASED: this planned version is still under development**

For the full list of changes, see the [0.X.Y] release page.

**Breaking changes**:

- ...

**New**:

**Other changes**:

[0.X.Y]: https://github.com/google/docsy/releases/latest?FIXME=v0.X.Y

## v0.13.0 {#v0.13.0}

**Resources**:

- [Release 0.13.0 report and upgrade guide][0.13.0-blog]
- [0.13.0] release page for the full list of changes

**Breaking changes**:

- **Language menu**: changed visibility, see [Language menu
  visibility][0.13.0-blog-lang-menu] ([#2303]).
- **Alert shortcode**: Markdown content processing changed, see [Alert shortcode
  improvements][0.13.0-blog-alert] ([#941]).

**New**:

- [Active TOC entry tracking][0.13.0-blog-toc] using Bootstrap ScrollSpy
  ([#2366]).
- [Section sidebar root][0.13.0-blog-sidebar] feature ([#2364]).

**Other changes**:

- **Improved accessibility**: [color contrast and
  typography][0.13.0-blog-accessibility] ([#2285]).
- **Dark mode** fixes and improvements:
  - [Flash Of Unstyled Content][0.13.0-blog-fouc] (FOUC) ([#2332]).
  - Improved TOC entry color contrast in dark mode ([#2376], [#2379]).
- **Mobile navbar**: Added scroll indicators for overflow navigation ([#2406]).
- Better **NPM support**: resolved optional and peer dependency issues
  ([#2115]). See [breaking changes][0.13.0-blog-breaking] in the blog post.
- **Dependency updates**: Bootstrap 5.3.8, Hugo 0.152.2, Node LTS ≥24.
- **Updated translations**: added Occitan locale ([#2173]) and refreshed
  Simplified Chinese ([#2313]) and Ukrainian ([#2331]).
- **TOC visibility control**: Documented the `notoc` page parameter (available
  since 2016) for hiding the table of contents on specific pages ([#2405]).
- **Build-time rendering of mathematical and chemical formulae**: now using
  Hugo's embedded KaTeX engine ([#2276], [#2394], [#2395]). For details, see
  [LaTeX support with KaTeX][diagrams-formulae].

**Experimental**:

- **Dark mode**. Added support for:
  - Google search integration ([#2387]).
  - Sample support for color-contrast adjustments: for details, see [How to pick
    colors with good color-contrast][] ([#2384]).
- New `_param` shortcode with support for parameter substitution ([#2371]).

[#2115]: https://github.com/google/docsy/issues/2115
[#2173]: https://github.com/google/docsy/issues/2173
[#2276]: https://github.com/google/docsy/pull/2276
[#2285]: https://github.com/google/docsy/issues/2285
[#2303]: https://github.com/google/docsy/pull/2303
[#2313]: https://github.com/google/docsy/issues/2313
[#2331]: https://github.com/google/docsy/issues/2331
[#2332]: https://github.com/google/docsy/issues/2332
[#2364]: https://github.com/google/docsy/pull/2364
[#2366]: https://github.com/google/docsy/pull/2366
[#2371]: https://github.com/google/docsy/pull/2371
[#2376]: https://github.com/google/docsy/pull/2376
[#2379]: https://github.com/google/docsy/pull/2379
[#2384]: https://github.com/google/docsy/pull/2384
[#2387]: https://github.com/google/docsy/pull/2387
[#2394]: https://github.com/google/docsy/pull/2394
[#2395]: https://github.com/google/docsy/pull/2395
[#2405]: https://github.com/google/docsy/pull/2405
[#2406]: https://github.com/google/docsy/pull/2406
[#941]: https://github.com/google/docsy/pull/941
[0.13.0]: https://github.com/google/docsy/releases/v0.13.0
[0.13.0-blog]: /blog/2025/0.13.0/
[0.13.0-blog-lang-menu]: /blog/2025/0.13.0/#language-menu-visibility
[0.13.0-blog-alert]: /blog/2025/0.13.0/#alert-shortcode
[0.13.0-blog-toc]: /blog/2025/0.13.0/#active-toc-entry-tracking
[0.13.0-blog-sidebar]: /blog/2025/0.13.0/#section-sidebar-root
[0.13.0-blog-accessibility]: /blog/2025/0.13.0/#accessibility
[0.13.0-blog-fouc]: /blog/2025/0.13.0/#accessibility
[0.13.0-blog-breaking]: /blog/2025/0.13.0/#breaking-changes
[diagrams-formulae]:
  /docs/content/diagrams-and-formulae/#latex-support-with-katex
[How to pick colors with good color-contrast]:
  /docs/content/lookandfeel/#pick-good-color-contrast

## v0.12.0 {#v0.12.0}

For the full list of changes, see the [0.12.0] release page.

**Breaking changes**:

- Renames the default Docsy heading render hook and heading self-link partials.
  This is a breaking change only if your project uses this feature. For details,
  see [Heading self links][] ([#2223]).
- Relocates and adapts layouts in response to Hugo's [new template system][].
  For details, see [Adapt to new template system in Hugo v0.146.0 #2243][#2243].
- **IMPORTANT**: if your project overrides any of the layout files mentioned in
  [#2243], then apply the same name changes in your project files. In
  particular, note that:
  - Taxonomy-related layout files: names have been _swapped_, and `terms.html`
    is now singular ([#2257]):
    - Renames `_default/taxonomy.html` to `term.html` (singular)
    - Renames `_default/terms.html` to `taxonomy.html`
  - Renames `layouts/**/content.html` by adding a `_td-` filename prefix
    ([#2259]).

[#2257]: https://github.com/google/docsy/pull/2257
[#2259]: https://github.com/google/docsy/pull/2259
[new template system]: https://gohugo.io/templates/new-templatesystem-overview/

**Potential breaking changes**:

- Removes shortcode `figure`, hugo's built-in shortcode `figure` can/will be
  used instead.

**New**:

- **[Breadcrumb navigation]** support has been enhanced and adjusted:
  - Added `ui.breadcrumb_disable` configuration parameter to disable breadcrumbs
    for an entire project, individual pages, or section. For details, see
    [Breadcrumb navigation][].
  - **Blog** pages now also have breadcrumbs by default ([#1788]).
  - Index-page single-element breadcrumb lists are hidden by default ([#2160]).
- Support for a [_td-content-after-header.html] page-content render hook, which
  can be [content type][] specific ([#2192]). For details, see the [User
  Guide][before-page-content].

**Other changes**:

- **Blog** section index page content and title used to be ignored, they are now
  displayed ([#1787]). To recover the old behavior use the following style
  override: `.td-section.td-blog .td-content { display: none; }`.
- Adds a `comment` shortcode, as a drop-in replacement for the one removed from
  Hugo.

[0.12.0]: https://github.com/google/docsy/releases/v0.12.0
[#1787]: https://github.com/google/docsy/issues/1787
[#1788]: https://github.com/google/docsy/issues/1788
[#2160]: https://github.com/google/docsy/pull/2160
[#2192]: https://github.com/google/docsy/pull/2192
[#2223]: https://github.com/google/docsy/pull/2223
[#2243]: https://github.com/google/docsy/pull/2243
[before-page-content]: /docs/content/lookandfeel/#before-page-content
[Breadcrumb navigation]: /docs/content/navigation/#breadcrumb-navigation
[content type]: https://gohugo.io/quick-reference/glossary/#content-type
[Heading self links]: /docs/content/navigation/#heading-self-links
[_td-content-after-header.html]:
  https://github.com/google/docsy/blob/main/layouts/_td-content-after-header.html

## v0.11.0 {#v0.11.0}

For the full list of changes, see the [0.11.0] release page.

**New**:

- Support for Right-To-Left (RLT) languages is reintroduced via [Bootstrap's
  support for RTL][bs-rtl]. For details, see [Right-to-left languages][rtl].
- The URL to your project's contribution guidelines is configurable. For
  details, see [Adding a community page].
- When a section's sidebar entries are truncated because there are more than
  [params.ui.sidebar_menu_truncate] section entries, a warning is issued.

[0.11.0]: https://github.com/google/docsy/releases/v0.11.0
[bs-rtl]: https://getbootstrap.com/docs/5.3/getting-started/rtl/
[Adding a community page]: /docs/content/adding-content/#adding-a-community-page
[params.ui.sidebar_menu_truncate]: /docs/content/navigation/#side-nav-options
[rtl]: /docs/language/#right-to-left-languages

## v0.10.0 {#v0.10.0}

For an introduction to this release, see the [0.10.0 release report]. For the
full list of changes, see the [0.10.0] release page.

**New**: color themes and dark-mode support! For details, see [Color themes and
dark-mode support][dark-mode].

**Breaking changes**:

- Removes shortcode `card-code` that was [deprecated in 0.7.0](#v0.7.0); use
  shortcode `card` with named parameter `code=true` instead.
- The following SCSS variables are inlined in favor of dark-mode compatible
  styling: `$border-color`, `$td-sidebar-tree-root-color`,
  `$td-sidebar-bg-color`, `$td-sidebar-border-color` ([#1952])

**Style changes** (potentially breaking):

- The style of various shortcode and elements have been adjusted so that they
  are compatible with light/dark mode. For details see, **Important style
  changes** in [Color themes and dark-mode support][dark-mode].

[#1952]: https://github.com/google/docsy/pull/1952
[0.10.0]: https://github.com/google/docsy/releases/v0.10.0
[0.10.0 release report]: /blog/2024/0.10.0/
[dark-mode]: /blog/2024/0.10.0/#color-themes-and-dark-mode-support

## v0.9.1 {#v0.9.1}

Patch release. For details, see [0.9.1].

[0.9.1]: https://github.com/google/docsy/releases/v0.9.1

## v0.9.0 {#v0.9.0}

For an introduction and commentary, see the [0.9.0 release report]. For the full
list of commits, see the [0.9.0] release page. The most significant changes of
this release are listed next.

**Breaking changes**:

- **[Repository Links]** now work for [multi-language] sites ([#1744]).

  For any given page, repository links are now computed from a page's _resolved_
  `File` path &mdash; as resolved _through_ mount points, if any. That is, the
  path used is the one that refers to the file's actual location on disk, not
  it's logical path in Hugo's [union file system].

  This is a breaking change for pages of sites that use mounts and
  [path_base_for_github_subdir]. Projects will need to adjust the value of
  [path_base_for_github_subdir] to be relative to the file's physical location.

- Class names to disable [repository links] were misnamed with a suffix of the
  form `--KIND`. The new suffix is `__KIND`. For details, see [Disabling links].

- **Heading self-link** support has been reimplemented and projects must now
  explicitly enable the feature. For details, see [Heading self
  links][0.9.0:hsl].

**Footer changes**: refactoring, for easier customization, and simplification.
For details concerning all footer changes, see [#1818].

- **Footer layout** has been factored into parts: _left_, _right_, and _center_,
  with _copyright_ a subpart of center. For details see [Footer layout]
- **Footer copyright**, supports date-range, and site copyright fallback. For
  details, see [Footer copyright].
- **Footer streamlined**: the About-page footer link and All-rights-reserved
  text are now hidden by default. For details, see [Footer streamlined].

**Other changes**:

- The latest release of **[Mermaid] resources** are now fetched at build time
  ([#1410]).
- [Look and feel] updates.

[0.9.0]: https://github.com/google/docsy/releases/v0.9.0
[0.9.0 release report]: /blog/2024/0.9.0/
[#1410]: https://github.com/google/docsy/pull/1410
[#1744]: https://github.com/google/docsy/pull/1744
[#1818]: https://github.com/google/docsy/pull/1818
[disabling links]: /docs/content/repository-links/#disabling-links
[Footer layout]: /blog/2024/0.9.0/#footer-layout
[Footer copyright]: /blog/2024/0.9.0/#footer-copyright
[Footer streamlined]: /blog/2024/0.9.0/#footer-streamlined
[0.9.0:hsl]: /blog/2024/0.9.0/#heading-self-links
[look and feel]: /blog/2024/0.9.0/#look-and-feel
[mermaid]: /docs/content/diagrams-and-formulae/#diagrams-with-mermaid
[multi-language]: /docs/language/
[path_base_for_github_subdir]:
  /docs/content/repository-links/#path_base_for_github_subdir-optional
[Repository Links]: /docs/content/repository-links/
[union file system]:
  https://gohugo.io/getting-started/directory-structure/#union-file-system

## v0.8.0 {#v0.8.0}

For the full list of changes, see the [0.8.0] release page.

**Breaking changes**:

- Docsy is packaged as a **single Hugo module** ([#1120]). For details, see [Use
  Docsy as a Hugo Module].
- **Important**: non-Hugo-module projects should be aware of the [Docsy NPM
  install side-effect]. Also, for guidance on Hugo-reported "failed to load
  modules" error, see [Docsy as an NPM package].
- **Page feedback**, or [User feedback]:
  - In support of projects configuring analytics outside of Docsy, feedback
    functionality is enabled regardless of whether
    `site.Config.Services.GoogleAnalytics.ID` is set ([#1727]).
  - Feedback-event attribute changes ([#1726]):
    - Event `name` is `page_helpful`rather than`click`
    - Event `value` for "yes" is 100 by default, rather than 1, allowing for
      more response options in the future. To override the default set
      `params.ui.feedback.max_value`.
- SCSS: `@function prepend()` and file `assets/scss/support/_functions.scss`
  have been dropped. Instead use the more general SASS/SCSS list `join()`
  function ([#1385]).

[#1120]: https://github.com/google/docsy/issues/1120
[#1385]: https://github.com/google/docsy/issues/1385
[#1726]: https://github.com/google/docsy/pull/1726
[#1727]: https://github.com/google/docsy/pull/1727
[0.8.0]: https://github.com/google/docsy/releases/v0.8.0
[Docsy as an NPM package]:
  /docs/get-started/other-options/#option-3-docsy-as-an-npm-package
[Docsy NPM install side-effect]:
  /docs/get-started/other-options/#docsy-npm-install-side-effect
[Use Docsy as a Hugo Module]: /docs/get-started/docsy-as-module/
[User feedback]: /docs/content/feedback/#user-feedback

## v0.7.2 {#v0.7.2}

For the full list of changes, see the [0.7.2] release page. We mention some
noteworthy changes here:

- **Algolia**
  - [#1651] DocSearch fixed for mobile and for sites with two search boxes (in
    the top and left navs).
  - [#1662] DocSearch is supported by Docsy through site config.
  - For details, see [Algolia DocSearch].
- **[Tabbed panes]**:
  - `persistLang` is deprecated, use `persist` instead
  - Persistence is enabled by default (independent of the old `persistLang`
    parameter value) ; to disable use `persist=disabled`
  - Various fixes and enhancements, with more to come; for details, see [#1641]
    and [Tabbed panes].
- **Left-nav**, and **right-nav** (TOC + page meta): spacing issues have been
  resolved; for details, see [#1661].

[#1641]: https://github.com/google/docsy/issues/1641
[#1651]: https://github.com/google/docsy/pull/1651
[#1661]: https://github.com/google/docsy/pull/1661
[#1662]: https://github.com/google/docsy/pull/1662
[0.7.2]: https://github.com/google/docsy/releases/v0.7.2
[Algolia DocSearch]: /docs/content/search/#algolia-docsearch
[Tabbed panes]: /docs/content/shortcodes/#tabbed-panes

## v0.7.1 {#v0.7.1}

For the full list of changes, see the [0.7.1] release page.

Followup changes to **Bootstrap (BS) 5.2 upgrade** ([#470]):

- `td-blog-posts-list__item` and `td-blog-posts-list__body` replace the `.media`
  and `.media-body` classes, dropped by BS 5 [#1560].
- Docsy test for Bootstrap version has been made more robust, and can be
  disabled. For details, see [#1579].

[#1560]: https://github.com/google/docsy/issues/1560
[#1579]: https://github.com/google/docsy/issues/1579
[0.7.1]: https://github.com/google/docsy/releases/v0.7.1

## v0.7.0 {#v0.7.0}

For the full list of changes, see the [0.7.0] release page.

**New**:

- **Click to copy button for Chroma-highlighted code blocks**: If you already
  implemented this functionality on your website, you can disable it. For
  details see [Chroma highlighting docs][chroma-docsy].

**Breaking changes:**

- [**Hugo** release][hugo-releases] **0.110.0** or later is required.
- **Upgraded Bootstrap ([#470])** to v5.2. For a list of Bootstrap's breaking
  changes, see the [Bootstrap migration page][bsv5mig]. Docsy-specific changes:
  - Clean up of unused, or rarely used, variables, functions, and mixins:
    - Dropped `$primary-light`
    - Dropped `color-diff()`
    - Dropped `bg-gradient-variant()` mixin ([#1369])
  - Docsy's RTL support has been removed because it is incompatible with BSv5.
    For progress on the reintroduction of RTL support, see [#1442].
- **Shortcodes**:
  - Now using Hugo's native support for processing HTML & markdown, not file
    extension testing. ([#906])
  - Dropped support for pre-Hugo-0.54.x behavior of [shortcodes with markdown],
    `{{%/*...*/%}}`. ([#939])
  - `blocks/section`: **default** and accepted values of the `type` argument
    have changed! For details, see [blocks/section] ([#1472]).
  - **Card shortcodes** ([#1376])]:
    - Renamed CSS class `td-card-deck` to `td-card-group`.
    - `card`, `card-code`: markup of inner content (HTML/markdown) now depends
      on the syntax of the calling shortcode, not on extension of page file any
      more [#906].
    - `card-code` is deprecated; use `card` with named parameter `code=true`
      instead.

[chroma-docsy]: /docs/content/lookandfeel/#code-highlighting-with-chroma
[shortcodes with markdown]:
  https://gohugo.io/content-management/shortcodes/#shortcodes-with-markdown

- **Detection of draw.io diagrams** is now **disabled** by default [#1185]

**Other changes**:

- `$list-inline-padding` is increased in support of footer icons ([#1523]). If
  this global adjustment is a problem for your project, let us know and we can
  contextualize the adjustment to the footer.
- Non-breaking changes that result from the Bootstrap v5 upgrade:
  - Draw.io diagram edit button: replaced custom colors by BS's outline primary.

[#1185]: https://github.com/google/docsy/issues/1185
[#1369]: https://github.com/google/docsy/issues/1369
[#1376]: https://github.com/google/docsy/issues/1369
[#1442]: https://github.com/google/docsy/issues/1442
[#1472]: https://github.com/google/docsy/issues/1472
[#1523]: https://github.com/google/docsy/pull/1523
[#470]: https://github.com/google/docsy/issues/470
[#906]: https://github.com/google/docsy/issues/906
[#939]: https://github.com/google/docsy/issues/939
[0.7.0]: https://github.com/google/docsy/releases/v0.7.0
[blocks/section]: /docs/content/shortcodes/#blockssection
[bsv5mig]: https://getbootstrap.com/docs/5.2/migration/
[hugo-releases]: https://github.com/gohugoio/hugo/releases

## v0.6.0 {#v0.6.0}

For the full list of changes, see the [0.6.0] release page.

With this release we declare a feature freeze while we migrate to the newest
Bootstrap version. See [the announcement][bs-announcement] for more information.

**New**:

- **Simplified use of mermaid diagrams**: when using a `mermaid` code block on
  your page, mermaid is now automatically enabled (needs hugo version >=
  0.93.0). For existing sites build with hugo 0.93.0+, parameter
  `mermaid.enable` can be removed from site config.

- **Add render hook for chem code blocks**: add auto-activation of `math` and
  `chem` blocks via KaTeX and mhchem. Support for formula rendering activation
  on individual pages only. Hugo version >= 0.93.0 required.

[0.6.0]: https://github.com/google/docsy/releases/v0.6.0
[bs-announcement]: https://github.com/google/docsy/discussions/1308

## v0.5.1 {#v0.5.1}

For the full list of changes, see the [0.5.1] release page. **BREAKING CHANGES**
are documented below.

**After you update** your project's Docsy:

- Update your project setup (see [0.4.0]) if you haven't already.
- Run `npm install`.

**New**:

- Projects can now install and use [Docsy as an NPM package].

**Breaking changes**:

- **Tabbed panes, text display**. By default, the content of a tab inside a
  tabbed pane is shown as code. As of version 0.4 of the shortcode, you can add
  the parameter `code=false` to your `tabpane` or `tab` shortcode in order to
  render tab content(s) as text (markdown or html). As of version 0.5 the name
  of this parameter was changed, we now use `text=true` in order to mark content
  as text.
- **Display logo by default**. Most projects show their logo in the navbar. In
  support of this majority, Docsy now displays a logo by default. For details on
  how to hide the logo (or your brand name), see [Styling your project logo and
  name][].
- **Upgraded Bootstrap** to v4.6.2 from v4.6.1, resulting in some style changes
  (such as an adjustment in the size of `small`). For details, see [v4.6.2
  release page].
- **[Upgraded FontAwesome to v6][]** from v5. While many icons were renamed, the
  v5 names still work. For details about icon renames and more, see [What's
  changed in v6][].
- **Search-box**: the HTML structure and class names have changed, due to the
  Font Awesome upgrade, for both online and offline search. This may affect your
  project if you have overridden search styling or scripts.

**Other changes**:

- By default, Docsy now uses the [gtag.js] analytics library for all site tags.
  For details, see [Adding Analytics > Setup].

[0.5.1]: https://github.com/google/docsy/releases/v0.5.1
[adding analytics > setup]: /docs/content/feedback/#setup
[v4.6.2 release page]: https://github.com/twbs/bootstrap/releases/tag/v4.6.2
[gtag.js]: https://support.google.com/analytics/answer/10220869
[styling your project logo and name]:
  /docs/content/lookandfeel/#styling-your-project-logo-and-name
[upgraded fontawesome to v6]: https://docs.fontawesome.com/v6/web/setup/upgrade
[what's changed in v6]:
  https://docs.fontawesome.com/v6/web/setup/upgrade/whats-changed

## v0.5.0 {#v0.5.0}

Unpublished.

## v0.4.0 {#v0.4.0}

For the full list of changes, see the [0.4.0] release page. Potential **BREAKING
CHANGES** are documented below.

**After you update** your project's Docsy, run `npm install`.

### Update your project setup

If your project uses Docsy as follows:

- [Hugo Module], then this change doesn't impact you.
- For [other Docsy setups], this is a **BREAKING CHANGE** -- read on.

Docsy now fetches Bootstrap and FontAwesome as NPM packages rather than git
submodules. This has an impact on your project-build setup. To migrate your
site, follow these steps (execute commands from your project's root directory):

1.  Delete obsolete Docsy Git submodules:
    ```sh
    git rm themes/docsy/assets/vendor/Font-Awesome
    git rm themes/docsy/assets/vendor/bootstrap
    ```
    These commands remove the submodules from Git's tracking, from the
    `.gitmodules` file, and deletes the submodule files under
    `themes/docsy/assets/vendor`.
2.  Get Docsy dependencies:
    ```sh
    (cd themes/docsy && npm install)
    ```
3.  Update your build scripts to fetch Docsy dependencies automatically. For
    example, if your site build uses NPM scripts, consider getting Docsy
    dependencies via a [prepare] script as follows:
    ```json
    {
      "name": "my-website",
      "scripts": {
        "prepare": "cd themes/docsy && npm install",
        "...": "..."
      },
      "...": "..."
    }
    ```
4.  (Optional) Build script cleanup. If your project uses Docsy as a git
    submodule, Docsy updates no longer require the `--recursive` flag when
    running `git submodule update`. Consider dropping the flag if you have no
    other recursive git submodules.

Proceed as usual to build or serve your site.

[0.4.0]: https://github.com/google/docsy/releases/v0.4.0
[hugo module]: /docs/get-started/docsy-as-module/
[other docsy setups]: /docs/get-started/other-options/
[prepare]:
  https://docs.npmjs.com/cli/v10/using-npm/scripts#prepare-and-prepublish

## v0.3.0 {#v0.3.0}

For the full list of changes, see the [0.3.0] release page.

**Breaking changes**:

- Upgrade to
  [Algolia DocSearch v3](https://docsearch.algolia.com/docs/v3/docsearch). If
  your site uses the deprecated DocSearch v2, you must
  [update your DocSearch code](https://docsearch.algolia.com/docs/v3/migrating-from-v2).
- (**Edit**) [#1009] inadvertently changed the base [Bootstrap styles for
  cards][bs4cards], as well as the Docsy `highlight` style. For details, see
  [issue #1154]. Release [0.5.1] includes a fix.

[0.3.0]: https://github.com/google/docsy/releases/v0.3.0
[bs4cards]: https://getbootstrap.com/docs/4.1/components/card/
[#1009]: https://github.com/google/docsy/pull/1009
[issue #1154]: https://github.com/google/docsy/issues/1154

## v0.2.0 {#v0.2.0}

For the full list of changes, see the [0.2.0] release page.

**New**:

- Add official Docsy support for [Hugo modules]. Many thanks to the dedicated
  and patient efforts of [@deining], who researched, experimented, and
  implemented this feature. Thanks to [@deining] and [@LisaFC] for the doc
  updates.

  For details, see
  [Migrate to Hugo Modules](/docs/updating/convert-site-to-module/).

[@deining]: https://github.com/deining
[@lisafc]: https://github.com/LisaFC
[0.2.0]: https://github.com/google/docsy/releases/v0.2.0
[hugo modules]: https://gohugo.io/hugo-modules/

<!-- ENTRY TEMPLATE ------------------------------------------------------

```
## v0.X.Y

> **UNRELEASED: this planned version is still under development**

For the full list of changes, see the [0.X.Y] release page.

**Breaking changes**:

- ...

**New**:

**Other changes**:

[0.X.Y]: https://github.com/google/docsy/releases/latest?FIXME=v0.X.Y
```

---------------------------------------------------------------------------->
