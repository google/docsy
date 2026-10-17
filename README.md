# Docsy

[![npm version][npm-badge]][npm-package]

<!-- markdownlint-disable no-docsy-dev-external-urls -->

Docsy, a [Linux Foundation][] project, is a [Hugo][] theme for technical
documentation sites. This repo holds the theme (`theme/`, published as a Hugo
module and as the [`@docsy/theme`][npm-package] npm package) and its user guide
(`docsy.dev/`, published at [docsy.dev][]).

To use Docsy in your site, see the user guide's [Get started][] section; for a
site to copy, see the [example project][]; for sites built with Docsy, see
[Examples][].

> [!IMPORTANT]
>
> The `main` branch is under development and not officially supported; use
> official Docsy [releases][]. For full support details, see [Official support
> limits][official-support].

## Build the user guide locally

The user guide uses the theme from this checkout, so this is also how to preview
theme changes. Install [Node.js][] and Git (npm provides Hugo and Dart Sass),
then:

```sh
git clone --depth 1 https://github.com/docsy/docsy.git
cd docsy
npm run install:safe
npm run serve
```

npm scripts run under Bash on every platform (`script-shell` pin in `.npmrc`):
on Windows, make sure Git Bash's `bash` is on your `PATH`.

## Contributing

Docsy is governed by its [Technical Charter][] as Docsy a Series of LF Projects,
LLC, and follows the LF Projects [code of conduct][]. For how to contribute, see
the [contributing guide][]; maintainers, see the [maintainer notes][].

Thank you to all past, present, and future [contributors][]!

## Licenses

- Code: [Apache-2.0][]
- Documentation: [CC-BY-4.0][]

[Apache-2.0]: https://github.com/docsy/docsy/blob/main/LICENSE
[CC-BY-4.0]: https://github.com/docsy/docsy/blob/main/LICENSE-DOCS
[code of conduct]: https://lfprojects.org/policies/code-of-conduct/
[contributing guide]: https://www.docsy.dev/docs/contributing/
[contributors]: https://github.com/docsy/docsy/graphs/contributors
[docsy.dev]: https://www.docsy.dev/
[example project]: https://github.com/docsy/docsy-example
[Examples]: https://www.docsy.dev/examples/
[Get started]: https://www.docsy.dev/docs/get-started/
[Hugo]: https://gohugo.io
[Linux Foundation]: https://www.linuxfoundation.org/
[maintainer notes]: https://www.docsy.dev/project/about/maintainer-notes/
[Node.js]:
  https://www.docsy.dev/docs/get-started/docsy-as-module/installation-prerequisites/#install-nodejs
[npm-badge]: https://img.shields.io/npm/v/%40docsy%2Ftheme
[npm-package]: https://www.npmjs.com/package/@docsy/theme
[official-support]:
  https://www.docsy.dev/project/about/changelog/#official-support
[releases]: https://github.com/docsy/docsy/releases
[Technical Charter]:
  https://github.com/docsy/docsy/blob/main/docsy-technical-charter.pdf

<!-- cSpell:ignore docsy -->
