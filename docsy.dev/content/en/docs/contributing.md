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

## Before you start

- **Contributor License Agreement**: Docsy contributions require the [CNCF
  Contributor License Agreement][cncf-cla], enforced on every PR through
  [EasyCLA][].
- **Code of conduct**: this project follows the [LF Projects Code of Conduct][].
- **Code reviews**: all submissions, including those from project members, are
  reviewed as [pull requests][pr].

## Making a change

To request a feature or report a problem, [open an issue][issues]; for a page of
this guide, the **Create Issue** button at the top right opens one with the page
prefilled.

To change the theme or the guide: the Docsy repo is a [monorepo][], the theme in
`theme/`, this guide in `docsy.dev/`. Fork it and open a pull request, as a
draft when you're not ready for review. For a page of this guide, **Edit this
page** (top right) opens its source in your fork, ready for a pull request.

To preview a change: every pull request gets a Netlify deploy preview (the
`deploy/netlify` check's **Details** link). Locally, a theme can't be served on
its own: test through the [example site][dex] against your local Docsy ([Develop
against a local Docsy][dex-local]), or build this guide, which the repo builds
with its own theme ([Local build][]).

## Formatting and checks

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
[Local build]: /project/build/git-repo/#local-build
[monorepo]: /project/build/git-repo/#monorepo
[PR]: https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request
[style guide]: /project/style-guide/
[test suites]: /project/about/maintainer-notes/#test-suites
<!-- prettier-ignore-end -->
