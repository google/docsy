---
title: Link checking
description:
  Check your site's links faster by stripping repeated navigation chrome.
cSpell:ignore: csr
---

Most of the effort in link-checking a large site goes into re-checking the
navigation _[chrome][]_ that repeats on every page. Build with Docsy's
[`shared` chrome mode][csr] for your link-checking builds: it emits that chrome
on one donor page per locale instead of on every page, so any external link
checker reaches each unique link once instead of once per page.

`shared` mode is [experimental][], so keep running occasional full-site checks
too. See [chrome build modes][csr] for setup, what it keeps reachable, and its
caveats.

<!-- prettier-ignore-start -->
[chrome]: https://www.nngroup.com/articles/browser-and-gui-chrome/
[csr]: /docs/deployment/chrome-modes/
[experimental]: /project/about/changelog/#experimental
<!-- prettier-ignore-end -->
