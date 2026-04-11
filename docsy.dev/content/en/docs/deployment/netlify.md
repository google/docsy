---
title: Deployment on Netlify
linkTitle: Netlify
description: Deploying your Docsy site on Netlify.
---

We recommend using [Netlify](https://www.netlify.com/) as a particularly simple
way to serve your site from your Git provider (GitHub, GitLab, or BitBucket),
with [continuous deployment][cd], previews of the generated site when you or
your users create pull requests against the doc repo, and more. Netlify is free
to use for Open Source projects, with premium tiers if you require greater
support.

Before deploying with Netlify, make sure that you've pushed your site source to
your chosen GitHub (or other provider) repo, following any setup instructions in
[Using the theme](/docs/get-started/docsy-as-module).

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
        specify `hugo`.
   2. Click **Show advanced**.
   3. In the **Advanced build settings** section, click **New variable**.
   4. Specify `NODE_VERSION` as the **Key** for the new variable, and set its
      **Value** to the [latest LTS version](https://nodejs.org/en/download/) of
      Node.js.
   5. In the **Advanced build settings** section, click **New variable**.
   6. Specify `HUGO_VERSION` as the **Key** for the new variable, and set its
      **Value** to the
      [latest version](https://github.com/gohugoio/hugo/releases) of Hugo.
   7. In the **Advanced build settings** section, click **New variable** again.
   8. Specify `GO_VERSION` as the **Key** for the new variable, and set its
      **Value** to the [latest version](https://go.dev/dl/) of Go.

   If you don't want your site to be indexed by search engines, you can add an
   environment flag to your build command to specify a non-`production`
   environment, as described in
   [Build environments and indexing](/docs/deployment/#build-environments-and-indexing).

1. Click **Deploy site**.

> [!NOTE]
>
> Netlify uses your site repo's `package.json` file to install any JavaScript
> dependencies (like `postcss`) before building your site. If you haven't just
> copied our example site's version of this file, make sure that you've
> specified all our [prerequisites][].
>
> For example, if you want to use a version of `postcss-cli` later than version
> 8.0.0, you need to ensure that your `package.json` also specifies `postcss`
> separately:
>
> ```
>   "devDependencies": {
>     "autoprefixer": "^10.4.19",
>     "postcss-cli": "^11.0.0",
>     "postcss": "^8.4.38"
>   }
> ```

Alternatively, you can follow the same instructions but specify your **Deploy
settings** in a [`netlify.toml` file][] in your repo rather than in the **Deploy
settings** page. For an example, see the [netlify.toml][] for the Docsy website
(though note that the build command here is a little unusual because the Docsy
user guide is _inside_ the theme repo).

[`netlify.toml` file]:
  https://docs.netlify.com/configure-builds/file-based-configuration/
[netlify.toml]: <{{% param github_repo %}}/blob/main/docsy.dev/netlify.toml>

If you have an existing deployment you can view and update the relevant
information by selecting the site from your list of sites in Netlify, then
clicking **Site settings** - **Build and deploy**. Ensure that **Ubuntu Focal
20.04** is selected in the **Build image selection** section - if you're
creating a new deployment this is used by default. You need to use this image to
run the extended version of Hugo.

[cd]: https://www.netlify.com/docs/continuous-deployment/
[Host on Netlify]: https://gohugo.io/hosting-and-deployment/hosting-on-netlify/
[Git submodule]:
  /docs/get-started/other-options/#option-1-docsy-as-a-git-submodule
[Hugo module]: /docs/get-started/docsy-as-module/
[prerequisites]: /docs/get-started/docsy-as-module/installation-prerequisites
