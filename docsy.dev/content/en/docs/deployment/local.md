---
title: Serving your site locally
linkTitle: Local
---

Depending on your deployment choice you may want to serve your site locally
during development to preview content changes. To serve your site locally:

1. Ensure you have an up to date local copy of your site files cloned from your
   repo.

1. Ensure you have the tools described in [Prerequisites and
   installation][prereq] installed on your local machine, including
   `postcss-cli` (you'll need it to generate the site resources the first time
   you run the server).
1. Run the `hugo server` command in your site root. By default your site will be
   available at <http://localhost:1313>.

Now that you're serving your site locally, Hugo will watch for changes to the
content and automatically refresh your site. If you have more than one local git
branch, when you switch between git branches the local website reflects the
files in the current branch.

[prereq]: /docs/get-started/docsy-as-module/installation-prerequisites
