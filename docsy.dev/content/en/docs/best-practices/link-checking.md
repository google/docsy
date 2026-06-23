---
title: Link checking
description:
  Check your site's links faster by stripping repeated navigation chrome.
cSpell:ignore: csr
---

A link checker that crawls your built site re-checks the repeated,
auto-generated _[chrome][]_ &mdash; the navbar, footer, and left-nav &mdash; on
_every_ page, even though those links are often identical site-wide. On a large
site that's the bulk of the work, and it inflates checker output.

Docsy's [client-side chrome rendering][csr] (CSR) build mode strips that
repeated chrome from the server output, so a checker reaches each unique link
once instead of once per page. It works with any external link checker and needs
no extra post-build pass.

Enable CSR for your link-checking builds &mdash; see [client-side chrome
rendering][csr] for how to turn it on, what it keeps reachable, and its
[experimental][] caveats. Because it's experimental, keep running occasional
full-site link checks as well.

<!-- prettier-ignore-start -->
[chrome]: https://www.nngroup.com/articles/browser-and-gui-chrome/
[csr]: /docs/content/csr/
[experimental]: /project/about/changelog/#experimental
<!-- prettier-ignore-end -->
