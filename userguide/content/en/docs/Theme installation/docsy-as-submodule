---
title: "Other setup options"
linkTitle: "Other setup options"
date: 2021-12-08T09:22:27+01:00
weight: 2
description: >
  Create a new Docsy site with Docsy as a Git submodule or cloned theme
---

If you don't want to use [Docsy as a Hugo Module](docs/theme-installation/docsy-as-module/) (for example if you do not want to install Go) but still don't want to copy the theme files into your own repo, you can **use Docsy as a [Git submodule](https://git-scm.com/book/en/v2/Git-Tools-Submodules)**. Using submodules also lets Hugo use the theme files from Docsy repo, though is more complicated to maintain than the Hugo Modules approach. This is the approach used in older versions of the Docsy example site, and is still supported. If you are using Docsy as a submodule but would like to migrate to Hugo Modules, see our [migration guide]().

Alternatively if you don’t want Hugo to have to get the theme files from an external repo (for example, if you want to customize and maintain your own copy of the theme directly, or your deployment choice requires you to include a copy of the theme in your repository), you can **clone the files directly into your site source**.

This guide provides instructions for both these options, along with common prerequisites.

## Prerequisites and installation

### Install Hugo 

You need a [recent **extended** version](https://github.com/gohugoio/hugo/releases) (we recommend version 0.73.0 or later) of [Hugo](https://gohugo.io/) to do local builds and previews of sites (like this one) that use Docsy. If you install from the release page, make sure to get the `extended` Hugo version, which supports [SCSS](https://sass-lang.com/documentation/file.SCSS_FOR_SASS_USERS.html); you may need to scroll down the list of releases to see it. 

For comprehensive Hugo documentation, see [gohugo.io](https://gohugo.io/).

#### On Linux

Be careful using `sudo apt-get install hugo`, as it [doesn't get you the `extended` version for all Debian/Ubuntu versions](https://gohugo.io/getting-started/installing/#debian-and-ubuntu), and may not be up-to-date with the most recent Hugo version.

If you've already installed Hugo, check your version:

```
hugo version
```
If the result is `v0.73` or earlier, or if you don't see `Extended`, you'll need to install the latest version. You can see a complete list of Linux installation options in [Install Hugo](https://gohugo.io/getting-started/installing/#linux). The following shows you how to install Hugo from the release page:
    
1.  Go to the [Hugo releases](https://github.com/gohugoio/hugo/releases) page.
2.  In the most recent release, scroll down until you find a list of
    **Extended** versions.
3.  Download the latest extended version (`hugo_extended_0.9X_Linux-64bit.tar.gz`).
4.  Create a new directory:

        mkdir hugo

5.  Extract the files you downloaded to `hugo`.

6.  Switch to your new directory:

        cd hugo

7.  Install Hugo:

        sudo install hugo /usr/bin    

#### On macOS

Install Hugo using [Brew](https://gohugo.io/getting-started/installing/#homebrew-macos).

#### As an `npm` module

You can install Hugo as an `npm` module using [`hugo-bin`](https://www.npmjs.com/package/hugo-bin). This adds `hugo-bin` to your `node_modules` folder and adds the dependency to your `package.json` file.  To install the extended version of Hugo:

```
npm install hugo-extended --save-dev
```

See the [`hugo-bin` documentation](https://www.npmjs.com/package/hugo-bin) for usage details.

### Install PostCSS

To build or update your site's CSS resources, you also need [`PostCSS`](https://postcss.org/) to create the final assets. If you need to install it, you must have a recent version of [NodeJS](https://nodejs.org/en/) installed on your machine so you can use `npm`, the Node package manager. By default `npm` installs tools under the directory where you run [`npm install`](https://docs.npmjs.com/cli/v6/commands/npm-install#description):

```
npm install -D autoprefixer
npm install -D postcss-cli
```

Starting in [version 8 of `postcss-cli`](https://github.com/postcss/postcss-cli/blob/master/CHANGELOG.md), you must also separately install `postcss`:

```
npm install -D postcss
```

Note that versions of `PostCSS` later than 5.0.1 will not load `autoprefixer` if installed [globally](https://flaviocopes.com/npm-packages-local-global/), you must use a local install.

## Use the theme as a submodule

To create a new Hugo site project and then add the Docsy theme as a submodule, run the following commands from your project's root directory.

```shell
hugo new site myproject
cd myproject
git init
git submodule add https://github.com/google/docsy.git themes/docsy
echo 'theme = "docsy"' >> config.toml
git submodule update --init --recursive
```

To add the Docsy theme to an existing site, run the following commands from your project's root directory:

```
git submodule add https://github.com/google/docsy.git themes/docsy
echo 'theme = "docsy"' >> config.toml
git submodule update --init --recursive
```

## Clone the Docsy theme to your project's `themes` subdirectory

If you don't want to use a submodules (for example, if you want to customize and maintain your  own copy of the theme directly, or your deployment choice requires you to include a copy of the theme in your repository), you can clone the theme into your project.




To clone Docsy into your project's `theme` folder, run the following commands from your project's root directory:

```
cd themes
git clone https://github.com/google/docsy
```

If you want to build and/or serve your site [locally](/docs/deployment/#serving-your-site-locally), you also need to get local copies of the theme’s own submodules:

```
git submodule update --init --recursive
```

For more information, see [Theme Components](https://gohugo.io/hugo-modules/theme-components/) on the [Hugo](https://gohugo.io) site.

## Preview your site

To build and preview your site locally:

```
cd myproject
hugo server
```
    
By default, your site will be available at http://localhost:1313/. [See the known issues on MacOS](#known-issues).

## Basic site configuration

Site-wide configuration details and parameters are defined in your project's `config.toml` file. These include your chosen Hugo theme (Docsy, of course!), project name, community links, Google Analytics configuration, and Markdown parser parameters. See the examples with comments in [`config.toml` in the example project](https://github.com/google/docsy-example/blob/master/config.toml) for how to add this information. **We recommend copying this `config.toml` and editing it even if you're just using the theme and not copying the entire Docsy example site**.

The Docsy example site comes with some defaults you may want to remove or customize straight away:

### Internationalization

The Docsy example site supports content in English, Norwegian and Farsi. You can find out more about how Docsy supports multi-language content in [Multi-language support](/docs/language/).

If you don't intend to translate your site, you can remove the language switcher by removing the following lines from `config.toml`:

```
[languages.no]
title = "Docsy"
description = "Docsy er operativsystem for skyen"
languageName ="Norsk"
contentDir = "content/no"
time_format_default = "02.01.2006"
time_format_blog = "02.01.2006"

[languages.fa]
title = "اسناد گلدی"
description = "یک نمونه برای پوسته داکسی"
languageName ="فارسی"
contentDir = "content/fa"
time_format_default = "2006.01.02"
time_format_blog = "2006.01.02"
```

To remove the translated source files, delete both the `docsy-example/content/no` and the  `docsy-example/content/fa` directory.

### Search

By default, the Docsy example site uses its own [Google Custom Search Engine](https://cse.google.com/cse/all). To disable this site search, delete or comment out the following lines:

```
# Google Custom Search Engine ID. Remove or comment out to disable search.
gcs_engine_id = "011737558837375720776:fsdu1nryfng"
```

To use your own Custom Search Engine, replace the value in the `gcs_engine_id` with the ID of your own search engine. Or [choose another search option](/docs/adding-content/navigation/#site-search-options).


## What's next?

* [Add content and customize your site](/docs/adding-content/)
* Get some ideas from our [Example Site](https://github.com/google/docsy-example) and other [Examples](/docs/examples/).
* [Publish your site](/docs/deployment/).
