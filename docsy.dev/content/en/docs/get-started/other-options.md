---
title: Other setup options
description: >-
  Install Docsy as a Git submodule, a clone, or the @docsy/theme npm package,
  for sites not using Hugo modules.
date: 2021-12-08
cSpell:ignore: hugo myproject
weight: 2
---

<!-- markdownlint-disable no-blanks-blockquote -->

If [Docsy as a Hugo Module](/docs/get-started/docsy-as-module/) doesn't suit
your site -- for example, if you don't want to install Go -- choose from these
setup options:

- [Option 1: Docsy as a Git submodule](#option-1-docsy-as-a-git-submodule)
- [Option 2: Clone the Docsy theme](#option-2-clone-the-docsy-theme)
- [Option 3: Docsy as an NPM package](#option-3-docsy-as-an-npm-package)

## Prerequisites

### Install Hugo

You need a
[recent **extended** version](https://github.com/gohugoio/hugo/releases)
(version {{% param "hugoMinVersion" %}} or later) of [Hugo](https://gohugo.io/)
to do local builds and previews of sites (like this one) that use Docsy. If you
install from the release page, make sure to get the `extended` Hugo version,
which supports
[SCSS](https://sass-lang.com/documentation/file.SCSS_FOR_SASS_USERS.html); you
may need to scroll down the list of releases to see it.

For the tool versions that Docsy officially supports, see [Official
support][official-support]. For comprehensive Hugo documentation, see
[gohugo.io](https://gohugo.io/).

#### On Linux

If you've already installed Hugo, check your version:

```sh
hugo version
```

If the result is earlier than {{% param "hugoMinVersion" %}}, or if you don't
see `Extended`, you'll need to install the latest version. You can see a
complete list of Linux installation options in
[Install Hugo](https://gohugo.io/installation/linux/). The following shows you
how to install Hugo from the release page:

1.  Go to the [Hugo releases](https://github.com/gohugoio/hugo/releases) page.
2.  In the most recent release, scroll down until you find a list of
    **Extended** versions.
3.  Download the latest extended version.
4.  Create a new directory:

    ```sh
    mkdir hugo
    ```

5.  Extract the files you downloaded to `hugo`.

6.  Switch to your new directory:

    ```sh
    cd hugo
    ```

7.  Install Hugo:
    ```sh
    sudo install hugo /usr/bin
    ```

#### On macOS

Install Hugo using [Brew](https://gohugo.io/installation/macos/#homebrew).

#### Hugo-extended NPM package {#hugo-extended-npm}

You can install Hugo as an NPM module using
[hugo-extended](https://www.npmjs.com/package/hugo-extended):

```sh
npm install hugo-extended --save-dev
```

### Node: Get the latest LTS release

If you have Node installed already, check your version of Node. For example:

```sh
node -v
```

Install or upgrade your version of Node to the **active [LTS release][]**. We
recommend using **[nvm][]** to manage your Node installation (Linux command
shown):

```sh
nvm install --lts
```

### Install PostCSS (optional) {#install-postcss}

See [Install PostCSS][].

## Option 1: Docsy as a Git submodule

If you are using Docsy as a
[Git submodule](https://git-scm.com/book/en/v2/Git-Tools-Submodules) but would
like to migrate to Hugo Modules, see our
[migration guide](/docs/update/convert-site-to-module/).

### For a new site

To create a **new site** and add the Docsy theme as a Git submodule, run the
following commands:

1.  Create the site:

    ```shell
    hugo new site myproject
    cd myproject
    git init
    ```

2.  Follow the instructions below for an existing site.

### For an existing site

To add the Docsy theme to an **existing site**, run the following commands from
your project's root directory:

1.  Install Docsy as a Git submodule:

    ```sh
    git submodule add https://github.com/google/docsy.git themes/docsy
    cd themes/docsy
    git checkout {{% param tdVersion.latest %}}
    ```

    To work from the development version of Docsy (_not recommended_), run the
    following command instead:

    ```sh
    git submodule add --depth 1 https://github.com/google/docsy.git themes/docsy
    ```

2.  Add Docsy as a theme, for example:

    ```sh
    echo 'theme: docsy/theme' >> hugo.yaml
    ```

3.  Get Docsy dependencies:

    ```sh
    (cd themes/docsy && npm run postinstall)
    ```

    > [!NOTE]
    >
    > Run `npm run postinstall`, not `npm install`: `postinstall` installs only
    > the theme's runtime dependencies; a plain `npm install` inside
    > `themes/docsy/` also pulls the repository's maintainer workspaces, an
    > install more than an order of magnitude larger.

4.  (Optional but recommended) To avoid having to repeat the previous step every
    time you update Docsy, consider adding [NPM scripts][] like the following to
    your project's `package.json` file:

    ```json
    {
      "...": "...",
      "scripts": {
        "get:submodule": "git submodule update --init --depth 1",
        "_prepare:docsy": "cd themes/docsy && npm run postinstall",
        "prepare": "npm run get:submodule && npm run _prepare:docsy",
        "...": "..."
      },
      "...": "..."
    }
    ```

    Every time you run `npm install` from your project root, the `prepare`
    script will fetch the latest version of Docsy and its dependencies.

From this point on, build and serve your site using the usual Hugo commands, for
example:

```sh
hugo serve
```

## Option 2: Clone the Docsy theme

If you don't want to use submodules (for example, if you want to customize and
maintain your own copy of the theme directly, or your deployment choice requires
you to include a copy of the theme in your repository), you can clone the theme
into your project's `themes` subdirectory.

To clone Docsy at {{% param tdVersion.latest %}} into your project's `themes`
folder, run the following commands from your project's root directory:

```sh
cd themes
git clone -b {{% param tdVersion.latest %}} https://github.com/google/docsy
cd docsy
npm run postinstall
```

As with the [submodule option](#option-1-docsy-as-a-git-submodule), set
`theme: docsy/theme` in your site configuration. The note above about
`npm run postinstall` versus `npm install` applies here as well.

To work from the development version of Docsy (not recommended unless, for
example, you plan to upstream changes to Docsy), omit the
`-b {{% param tdVersion.latest %}}` argument from the clone command above.

Then consider setting up an NPM [prepare][] script, as documented in Option 1.

For more information, see
[Theme Components](https://gohugo.io/hugo-modules/theme-components/) on the
[Hugo](https://gohugo.io) site.

## Option 3: Docsy as an NPM package

Docsy is published to the npm registry as [`@docsy/theme`][]. To create a new
site that uses the Docsy NPM package:

1.  Create your site:

    ```sh
    hugo new site --format yaml myproject
    cd myproject
    ```

2.  Install Docsy:

    ```sh
    npm init -y
    npm install --save-dev @docsy/theme
    ```

    > [!TIP] Hugo install tip
    >
    > To also install Hugo as an NPM package, see
    > [Hugo-extended NPM package](#hugo-extended-npm).

3.  Add Docsy as your site's theme by including the following in your project's
    `hugo.yaml`:

    ```yaml
    theme: '@docsy/theme'
    themesDir: node_modules
    ```

4.  Build or serve your new site using the usual Hugo commands. For example,
    build your site as follows:

    ```console
    $ hugo
    Start building sites …
    ...
    ```

To update Docsy later, see
[Update your Docsy NPM package](/docs/update/npm-package/).

### Development versions of Docsy

Use only [official Docsy releases][official-support] in production. For Docsy
development or testing, you can also install:

- A pre-release, when one is available, through the `next` [dist-tag][]:

  ```sh
  npm install --save-dev @docsy/theme@next
  ```

- Docsy directly from GitHub:

  ```sh
  npm install --save-dev google/docsy
  ```

  This installs the repository's default branch (`main`). To pin a tagged
  version:

  ```sh
  npm install --save-dev google/docsy#semver:{{% param tdVersion.latest %}}
  ```

  For other revision selectors, see [npm install][]. The GitHub package is named
  `docsy` and contains the theme files in a subfolder, so with this install form
  use `theme: docsy/theme` in your site configuration.

## Preview your site

To preview your site locally:

```sh
cd myproject
hugo server
```

By default, your site will be available at <http://localhost:1313>. For common
issues, see [Troubleshooting](/docs/get-started/troubleshooting/).

You may get Hugo errors for missing parameters and values when you try to build
your site. This is usually because you’re missing default values for some
configuration settings that Docsy uses - once you add them your site should
build correctly. You can find out how to add configuration in
[Basic site configuration](/docs/get-started/basic-configuration/) - we
recommend copying the example site configuration even if you’re creating a site
from scratch as it provides defaults for many required configuration parameters.

## What's next?

- Add some [basic site configuration](/docs/get-started/basic-configuration/)
- [Add content and customize your site](/docs/content/)
- Get some ideas from our
  [Example Site](https://github.com/google/docsy-example) and other
  [Examples and templates](/examples/).
- [Publish your site](/docs/deployment/).

[Install PostCSS]:
  /docs/get-started/docsy-as-module/installation-prerequisites/#install-postcss
[`@docsy/theme`]: https://www.npmjs.com/package/@docsy/theme
[dist-tag]: https://docs.npmjs.com/cli/v11/commands/npm-dist-tag/
[lts release]: https://nodejs.org/en/about/releases/
[npm install]: https://docs.npmjs.com/cli/v11/commands/npm-install#description
[nvm]:
  https://github.com/nvm-sh/nvm/blob/master/README.md#installing-and-updating
[npm scripts]: https://docs.npmjs.com/cli/v10/using-npm/scripts
[official-support]: /project/about/changelog/#official-support
[prepare]:
  https://docs.npmjs.com/cli/v10/using-npm/scripts#prepare-and-prepublish
