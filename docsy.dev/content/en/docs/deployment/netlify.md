---
title: Deployment on Netlify
linkTitle: Netlify
description: Deploying your Docsy site on Netlify.
---

We recommend using [Netlify][] as a particularly simple way to serve your site
from your Git provider (GitHub, GitLab, or BitBucket), with [continuous
deployment][cd], previews of the generated site when you or your users create
pull requests against the doc repo, and more. Netlify is free to use for Open
Source projects, with premium tiers if you require greater support.

Before deploying with Netlify, make sure that you've pushed your site source to
your chosen GitHub (or other provider) repo, following any setup instructions in
[Using the theme][].

Then follow the instructions in [Host on Netlify][] to set up a Netlify account
(if you don't have one already) and authorize access to your GitHub or other Git
provider account. Once you're logged in:

1. Click **New site from Git**.
1. Click your chosen Git provider, then choose your site repo from your list of
   repos.
1. In the **Deploy settings** page:
   1. Specify your **Build command**. The exact build command depends on how you
      have chosen to use Docsy:
      - If you are using Docsy as a [Git submodule][], specify
        `cd themes/docsy && git submodule update -f --init && cd ../.. && hugo`.
        You need to specify this rather than just `hugo` so that Netlify can use
        the theme's submodules.
      - If you are using Docsy as a [Hugo module][] or NPM package, you can just
        specify `hugo`. Netlify installs dependencies automatically when your
        site's [base directory][] includes your Node dependency files (such as
        `package.json` and lock files).
   2. Click **Show advanced**.
   3. In the **Advanced build settings** section, click **New variable**.
   4. Specify `NODE_VERSION` as the **Key** for the new variable, and set its
      **Value** to the [latest LTS version][node-lts] of Node.js.
   5. In the **Advanced build settings** section, click **New variable**.
   6. Specify `HUGO_VERSION` as the **Key** for the new variable, and set its
      **Value** to the [latest version][hugo-releases] of Hugo.
   7. In the **Advanced build settings** section, click **New variable** again.
   8. Specify `GO_VERSION` as the **Key** for the new variable, and set its
      **Value** to the [latest version][go-dl] of Go.

   If you don't want your site to be indexed by search engines, you can add an
   environment flag to your build command to specify a non-`production`
   environment, as described in [Build environments and indexing][].

1. Click **Deploy site**.

You can also put the build command and environment variables in a
[`netlify.toml`][netlify-toml-docs] instead of the Deploy settings UI. See the
[Docsy website's `netlify.toml`][netlify.toml] for an example.

If you have an existing deployment you can view and update the relevant
information by selecting the site from your list of sites in Netlify, then
clicking **Site settings** > **Build and deploy**.

<!-- prettier-ignore-start -->
[Build environments and indexing]: /docs/deployment/#build-environments-and-indexing
[base directory]: https://docs.netlify.com/build/configure-builds/overview/#definitions
[cd]: https://www.netlify.com/docs/continuous-deployment/
[Git submodule]: /docs/get-started/other-options/#option-1-docsy-as-a-git-submodule
[go-dl]: https://go.dev/dl/
[Host on Netlify]: https://gohugo.io/hosting-and-deployment/hosting-on-netlify/
[Hugo module]: /docs/get-started/docsy-as-module/
[hugo-releases]: https://github.com/gohugoio/hugo/releases
[Netlify]: https://www.netlify.com/
[netlify-toml-docs]: https://docs.netlify.com/configure-builds/file-based-configuration/
[netlify.toml]: <{{% param github_repo %}}/blob/main/docsy.dev/netlify.toml>
[node-lts]: https://nodejs.org/en/download/
[Using the theme]: /docs/get-started/docsy-as-module/
<!-- prettier-ignore-end -->
