<!--
  cSpell:ignore deining docsy gtag lookandfeel
-->

# Changelog

Useful links: Docsy [releases][] & [tags][]. Jump to the [latest][] release.

For a list of issues targeted for the next release, see the [23Q1][] milestone.

## 0.7.0 - next planned release (unpublished yet)

**New**:

**Breaking changes**:

- **[Upgraded Bootstrap ([#470][])** to v5. For a list of Bootstrap breaking
  changes, see the [Bootstrap migration guide][bsv5mig]. Other, Docsy-specific
  changes are listed below:
  - Clean up of unused, or rarely used, variables and functions:
    - Dropped `$primary-light`.
    - Dropped `color-diff()`.
  - BSv4 RTL support, being incompatible with BSv5, has been removed. For
    progress in RTL support, see [#1442][].
  - Dropped the `bg-gradient-variant()` mixin. [#1369][].

**Other changes**:

- Non-breaking changes that result from the Bootstrap v5 upgrade:
  - Draw.io diagram edit button: replace custom colors by BS's outline primary.

[#470]: https://github.com/google/docsy/issues/470
[#1369]: https://github.com/google/docsy/issues/1369
[#1442]: https://github.com/google/docsy/issues/1442
[bsv5mig]: https://getbootstrap.com/docs/5.2/migration/

## [0.6.0][]

For the full list of the changes found in this release, see the [release
notes][0.6.0].

With this release we declare a feature freeze while we migrate to the newest
Bootstrap version. See [the announcement][bs-announcement] for more information.

**New**:

- **Simplified use of mermaid diagrams**: when using a `mermaid` code block on
  your page, mermaid is now automatically enabled (needs hugo version >= 0.93.0).
  For existing sites build with hugo 0.93.0+, parameter `mermaid.enable`
  can be removed from site config.

- **Add render hook for chem code blocks**: add auto-activation of `math` and
  `chem` blocks via KateX and mhchem. Support for formula rendering activation
  on individual pages only. Hugo version >= 0.93.0 required.

## [0.5.1][]

For the full list of the changes found in this release, see the [release
notes][0.5.1]. **BREAKING CHANGES** are documented below.

**After you update** your project's Docsy:

- Update your project setup (see [0.4.0][]) if you haven't already.
- Run `npm install`.

**New**:

- Projects can now install and use [Docsy as an NPM package][].

**Breaking changes**:

- **Tabbed panes, text display**. By default, the content of a tab inside a tabbed
  pane is shown as code. As of version 0.4 of the shortcode, you can add the
  parameter `code=false` to your `tabpane` or `tab` shortcode  in order to render
  tab content(s) as text (markdown or html). As of version 0.5 the name of this
  parameter was changed, we now use `text=true` in order to mark content as text.
- **Display logo by default**. Most projects show their logo in the navbar. In
  support of this majority, Docsy now displays a logo by default. For details on
  how to hide the logo (or your brand name), see [Styling your project logo and
  name][].
- **Upgraded Bootstrap** to v4.6.2 from v4.6.1, resulting in some style changes
  (such as an adjustment in the size of `small`). For details, see [v4.6.2
  release notes][].
- **[Upgraded FontAwesome][]** to v6 from v5. While many icons were renamed, the
  v5 names still work. For details about icon renames and more, see [What's
  changed][].
- **Search-box**: the HTML structure and class names have changed, due to the
  Font Awesome upgrade, for both online and offline search. This may affect your
  project if you have overridden search styling or scripts.

**Other changes**:

- By default, Docsy now uses the [gtag.js][] analytics library for all site
  tags. For details, see [Adding Analytics > Setup][].

[Adding Analytics > Setup]: https://www.docsy.dev/docs/adding-content/feedback/#setup
[v4.6.2 release notes]: https://github.com/twbs/bootstrap/releases/tag/v4.6.2
[docsy as an npm package]:
  https://www.docsy.dev/docs/get-started/other-options/#option-3-docsy-as-an-npm-package
[gtag.js]: https://support.google.com/analytics/answer/10220869
[styling your project logo and name]:
  https://www.docsy.dev/docs/adding-content/lookandfeel/#styling-your-project-logo-and-name
[upgraded fontawesome]: https://fontawesome.com/docs/web/setup/upgrade/
[what's changed]: https://fontawesome.com/docs/web/setup/upgrade/whats-changed

## [0.5.0][]

Unpublished.

## [0.4.0][]

For a full list of the changes to this release, see the [release notes][0.4.0].
Potential **BREAKING CHANGES** are documented below.

**After you update** your project's Docsy, run `npm install`.

### Update your project setup

If your project uses Docsy as follows:

- [Hugo Module][], then this change doesn't impact you.
- For [other Docsy setups][], this is a **BREAKING CHANGE** -- read on.

Docsy now fetches Bootstrap and FontAwesome as NPM packages rather than git
submodules. This has an impact on your project-build setup. To migrate your
site, follow these steps (execute commands from your project's root directory):

  1.  Delete obsolete Docsy Git submodules:
      ```console
      $ rm -Rf themes/docsy/assets/vendor
      ```
  2.  Get Docsy dependencies:
      ```console
      $ (cd themes/docsy && npm install)
      ```
  3.  Update your build scripts to fetch Docsy dependencies automatically. For
      example, if your site build uses NPM scripts, consider getting Docsy
      dependencies via a [prepare][] script as follows:
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

[hugo module]: https://www.docsy.dev/docs/get-started/docsy-as-module/
[other docsy setups]: https://www.docsy.dev/docs/get-started/other-options/
[prepare]:
  https://docs.npmjs.com/cli/v8/using-npm/scripts#prepare-and-prepublish

## [0.3.0][]

For a full list of the changes to this release, see the [release notes][0.3.0].

**Breaking changes**:

- Upgrade to
  [Algolia DocSearch v3](https://docsearch.algolia.com/docs/DocSearch-v3). If
  your site uses the deprecated DocSearch v2, you must
  [update your DocSearch code](https://docsearch.algolia.com/docs/migrating-from-v2).
- (**Edit**) [PR #1009][] inadvertently changed the base [Bootstrap styles for
  cards][bs4cards], as well as the Docsy `highlight` style. For details, see
  [issue #1154][]. Release [0.5.0][] includes a fix.

[bs4cards]: https://getbootstrap.com/docs/4.1/components/card/
[pr #1009]: https://github.com/google/docsy/pull/1009
[issue #1154]: https://github.com/google/docsy/issues/1154

## [0.2.0][]

**New**:

- Add official Docsy support for [Hugo modules][]. Many thanks to the dedicated
  and patient efforts of [@deining][], who researched, experimented, and
  implemented this feature. Thanks to [@deining][] and [@LisaFC][] for the doc
  updates.

  For details, see
  [Migrate to Hugo Modules](https://www.docsy.dev/docs/updating/convert-site-to-module/).

**Details**:

- For a full list of the changes to this release, see the [release notes][0.2.0]

## [0.X.Y][] - next planned release (unpublished yet)

For a full list of the changes to this release, see the [release notes][0.x.y].

**Breaking changes**:

- ...

[@deining]: https://github.com/deining
[@lisafc]: https://github.com/LisaFC
[0.6.0]: https://github.com/google/docsy/releases/v0.6.0
[0.5.1]: https://github.com/google/docsy/releases/v0.5.1
[0.5.0]: https://github.com/google/docsy/releases/v0.5.0
[0.4.0]: https://github.com/google/docsy/releases/v0.4.0
[0.3.0]: https://github.com/google/docsy/releases/v0.3.0
[0.2.0]: https://github.com/google/docsy/releases/v0.2.0
[0.x.y]: #
[23q1]: https://github.com/google/docsy/milestone/6
[hugo modules]: https://gohugo.io/hugo-modules/
[latest]: https://github.com/google/docsy/releases/latest
[releases]: https://github.com/google/docsy/releases
[tags]: https://github.com/google/docsy/tags
[bs-announcement]: https://github.com/google/docsy/discussions/1308
