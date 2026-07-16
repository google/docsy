---
title: Before you begin
date: 2021-12-08
weight: 1
description: >
  Prerequisites for building a site with Docsy as a Hugo Module.
---

This page describes the prerequisites for building a site that uses Docsy as a
Hugo Module.

## Install Hugo

You need a
[recent **extended** version](https://github.com/gohugoio/hugo/releases)
(version {{% param "hugoMinVersion" %}} or later) of [Hugo](https://gohugo.io/)
to do local builds and previews of sites (like this one) that use Docsy. If you
install from the release page, make sure to get the `extended` Hugo version,
which supports
[SCSS](https://sass-lang.com/documentation/file.SCSS_FOR_SASS_USERS.html); you
may need to scroll down the list of releases to see it.

For comprehensive Hugo documentation, see [gohugo.io](https://gohugo.io).

### On Linux

Be careful using `sudo apt-get install hugo`, as it
[doesn't get you the `extended` version for all Debian/Ubuntu versions](https://gohugo.io/installation/linux/#debian),
and may not be up-to-date with the most recent Hugo version.

If you've already installed Hugo, check your version:

```bash
hugo version
```

If the result is {{% param "hugoMinVersion" %}} or earlier, or if you don't see
`Extended`, you'll need to install the latest version. You can see a complete
list of Linux installation options in
[Install Hugo](https://gohugo.io/installation/linux/). The following shows you
how to install Hugo from the release page:

1.  Go to the [Hugo releases](https://github.com/gohugoio/hugo/releases) page.
2.  In the most recent release, scroll down until you find a list of
    **Extended** versions.
3.  Download the latest extended version.
4.  Create a new directory:

    ```bash
    mkdir hugo
    ```

5.  Extract the files you downloaded to `hugo`.

6.  Switch to your new directory:

    ```bash
    cd hugo
    ```

7.  Install Hugo:

    ```bash
    sudo install hugo /usr/bin
    ```

### On macOS

Install Hugo using [Brew](https://gohugo.io/installation/macos/#homebrew).

### As an `npm` module

You can conveniently install any Hugo version using [hugo-extended][] (replace
`latest` with the version you want to install):

```bash
npm install hugo-extended@latest --save-dev
```

## Install Go language

Hugo's commands for module management require that the Go programming language
is installed on your system. Check whether `go` is already installed:

```console
$ go version
go version go1.25.6
```

Ensure that you are using version 1.12 or higher.

If the `go` language is not installed on your system yet or if you need to
upgrade, go to the [download area](https://go.dev/dl/) of the Go website, choose
the installer for your system architecture and execute it. Afterwards, check for
a successful installation.

## Install Git VCS client

Hugo's commands for module management require that the `git` client is installed
on your system. Check whether `git` is already present in your system:

```console
$ git version
git version 2.52.0
```

If no `git` client is installed on your system yet, go to the
[Git website](https://git-scm.com/), download the installer for your system
architecture and execute it. Afterwards, check for a successful installation.

## Install Node.js

Docsy sources its Bootstrap and Font Awesome assets from npm, so you need
[Node.js](https://nodejs.org/) (which provides `npm`, the Node package manager)
to install them. Install or upgrade to the active [long-term support (LTS)
release][node-lts], then check your version:

```bash
node -v
```

You install these assets when you create your site, as described in the next
steps.

## Install PostCSS (optional) {#install-postcss}

This section applies to all [installation options](/docs/get-started/), not just
Hugo-module setups.

Docsy builds its CSS without [PostCSS](https://postcss.org/) by default, so most
sites don't need it. Install PostCSS only if:

- Your site has a **[right-to-left (RTL)][rtl]** language, or
- You post-process your own CSS with a project-root
  `postcss.config.{js,mjs,cjs}` file.

If either applies, install PostCSS from your project root:

```bash
npm install --save-dev autoprefixer postcss-cli
```

For more about this change, see [PostCSS is opt-in for non-RTL
sites][blog-postcss] in the 0.16.0 release notes.

## What's next?

With all prerequisites installed, choose how to start off with your new Hugo
site

- [Start with a prepopulated site (for beginners)](example-site-as-template/)
- [Start site from scratch (for experts)](start-from-scratch/)

<!-- prettier-ignore-start -->
[blog-postcss]: /blog/2026/0.16.0/#postcss
[hugo-extended]: https://www.npmjs.com/package/hugo-extended
[node-lts]: https://nodejs.org/en/about/releases/
[rtl]: /docs/language/#right-to-left-languages
<!-- prettier-ignore-end -->
