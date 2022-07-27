# Changelog

Useful links: Docsy [releases][] & [tags][]. Jump to the [latest][] release.

For a list of issues targeted for the next release, see the [22Q2][] milestone.

## [0.5.0][] - next planned release (unpublished yet)

For a full list of the changes to this release, see the [release notes][0.5.0].

**New**:

- Projects can now install and use [Docsy as an NPM package][].

**Breaking changes**:

- ...

[docsy as an npm package]:
  https://www.docsy.dev/docs/get-started/other-options/#option-3-docsy-as-an-npm-package

## [0.4.0][]

For a full list of the changes to this release, see the [release notes][0.4.0].

**Breaking changes**:

- Docsy no longer uses git submodules for Bootstrap and FontAwesome. If your
  project uses [Hugo Modules][], then this change doesn't impact you.

  For projects with [other Docsy setups][], use the NPM packages of Bootstrap
  and FontAwesome. Migrate your site by following these steps (execute commands
  from your project's root directory):

  1.  Update Docsy to 0.4.0.
  2.  Delete obsolete Docsy Git submodules:
      ```console
      $ rm -Rf themes/docsy/assets/vendor
      ```
  3.  Get Docsy dependencies:
      ```console
      $ (cd themes/docsy && npm install)
      ```
  4.  (Optional) If your site uses NPM, consider getting Docsy dependencies via
      a [prepare][] script as follows:
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
  5.  Proceed as usual to build or serve your site.

[hugo modules]: https://www.docsy.dev/docs/get-started/docsy-as-module/
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
