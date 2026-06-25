---
title: Link checking
description:
  Check your site's links faster by stripping repeated navigation chrome.
cSpell:ignore: csr
---

Most of the effort in link-checking a large site goes into re-checking the
navigation _[chrome][]_ that repeats on every page. Enable Docsy's [client-side
chrome rendering][csr] for your link-checking builds: it strips that chrome from
the rendered HTML, so any external link checker reaches each unique link once
instead of once per page.

CSR is [experimental][], so keep running occasional full-site checks too. See
[client-side chrome rendering][csr] for setup, what it keeps reachable, and its
caveats.

<!-- prettier-ignore-start -->
[chrome]: https://www.nngroup.com/articles/browser-and-gui-chrome/
[csr]: /docs/content/csr/
[experimental]: /project/about/changelog/#experimental
<!-- prettier-ignore-end -->
