<!--
  cSpell:ignore docsy
-->

# Changelog

Useful links: Docsy [releases][] & [tags][]. Jump to the [latest][] release.

For a list of issues targeted for the next release, see the [22Q2][] milestone.

## [0.5.0][] - next planned release (unpublished yet)

For the full list of the changes found in this release, see the [release
notes][0.5.0]. **BREAKING CHANGES** are documented below.

**After you update** your project's Docsy:

- Update your project setup (see [0.4.0][]) if you haven't already.
- Run `npm install`.

**New**:

- Projects can now install and use [Docsy as an NPM package][].

**Breaking changes**:

- **Upgraded Bootstrap** to v4.6.2, resulting in some style changes. For
  details, see [v4.6.2 release notes][].
- **[Upgraded FontAwesome][]** to v6.1.2 from v5. While many icons were renamed,
  the v5 names will still work. For all the details, see [What's changed][].

[v4.6.2 release notes]: https://github.com/twbs/bootstrap/releases/tag/v4.6.2
[docsy as an npm package]:
  https://www.docsy.dev/docs/get-started/other-options/#option-3-docsy-as-an-npm-package
[upgraded fontawesome]: https://fontawesome.com/docs/web/setup/upgrade/
[what's changed]: https://fontawesome.com/docs/web/setup/upgrade/whats-changed

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
[0.2.0]: https://github.com/google/docsy/releases/v0.2.0
[0.3.0]: https://github.com/google/docsy/releases/v0.3.0
[0.4.0]: https://github.com/google/docsy/releases/v0.4.0
[0.5.0]: https://github.com/google/docsy/releases/v0.5.0
[0.x.y]: #
[22q2]: https://github.com/google/docsy/milestone/3
[hugo modules]: https://gohugo.io/hugo-modules/
[latest]: https://github.com/google/docsy/releases/latest
[releases]: https://github.com/google/docsy/releases
[tags]: https://github.com/google/docsy/tags
