---
title: Contribution guidelines
description: >-
  Issues, pull requests, previews, and formatting checks, for the Docsy theme
  and this guide
aliases: [contribution-guidelines]
weight: 9
---

> [!CAUTION] A note for **students** and **prospective mentees**
>
> We welcome your contributions but note that:
>
> - We cannot guarantee _when_ your [pull requests][pr] (PRs) will be reviewed.
> - Review does not guarantee acceptance or merging.
> - We may reject PRs with content (e.g., AI-generated) that does not meet our
>   quality standards.

> [!NB] Maintainers, see [Maintainer notes](/project/about/maintainer-notes/).

## Contributing to Docsy

- **Contributor License Agreement**: Docsy contributions require the [CNCF
  Contributor License Agreement][cncf-cla], enforced on every PR through
  [EasyCLA][].
- **Code of conduct**: this project follows the [LF Projects Code of Conduct][].
- **Code reviews**: all submissions, including those from project members, are
  reviewed as [pull requests][pr].
- **Issues**: to request a feature or report a problem, [open an issue][issues].
  For a page of this guide, the **Create Issue** button at the top right opens
  one with the page prefilled.
- **Previewing theme changes**: Docsy is a theme, so it can't be served on its
  own. Test your changes through a site that uses them: the [example site][dex]
  against your local Docsy ([Develop against a local Docsy][dex-local]), or this
  guide, built from the same repo ([below](#previewing-your-changes-locally)).

## Contributing to these docs

This guide's source is the [`docsy.dev/` directory][monorepo] of the Docsy repo.
Every pull request gets a Netlify deploy preview (the `deploy/netlify` check's
**Details** link); open a draft PR when you're not ready for review.

### Updating a single page

**Edit this page** (top right) opens the page's source in your fork on GitHub,
ready for a pull request.

### Previewing your changes locally

From a clone of your fork in a directory named `docsy`, with [Node.js][] and Git
installed (npm provides Hugo and Dart Sass; on Windows, Git Bash's `bash` on
your `PATH`), install and serve:

```sh
npm run install:safe
npm run serve
```

### Formatting and checks

Before pushing, run `npm run check` (Prettier and Markdownlint); `npm run fix`
applies the fixes it can. CI runs the full [test suites][]. Writing and
formatting conventions: the [style guide][].

Prettier doesn't understand Hugo shortcodes, so wrap them:

```go-html-template
<!-- prettier-ignore-start -->
{{</* tabpane */>}}
...
{{</* /tabpane */>}}
<!-- prettier-ignore-end -->
```

For a single block, `<!-- prettier-ignore -->` on the line before it suffices.

<!-- prettier-ignore-start -->
[cncf-cla]: https://github.com/cncf/cla
[dex]: https://github.com/docsy/docsy-example
[dex-local]: https://github.com/docsy/docsy-example/blob/main/CONTRIBUTING.md#develop-against-a-local-docsy
[EasyCLA]: https://docs.linuxfoundation.org/lfx/easycla/v2-current/contributors
[issues]: https://github.com/docsy/docsy/issues
[LF Projects Code of Conduct]: https://lfprojects.org/policies/code-of-conduct/
[monorepo]: /project/build/git-repo/#monorepo
[Node.js]: /docs/get-started/docsy-as-module/installation-prerequisites/#install-nodejs
[PR]: https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request
[style guide]: /project/style-guide/
[test suites]: /project/about/maintainer-notes/#test-suites
<!-- prettier-ignore-end -->
