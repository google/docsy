
---
title: "Getting Started"
linkTitle: "Getting Started"
weight: 3
date: 2018-07-30
description: >
  This page tells you how to get started with the Docsy theme, including installation and basic configuration.
---


## Installation and prerequisites 

You need a [recent version](https://github.com/gohugoio/hugo/releases) of Hugo to build and run sites (like this one) that use Docsy locally. If you install from the release page, make sure to get the `extended` Hugo version, which supports SCSS: you may need to scroll down the list of releases. Hugo can be installed via Brew if you're running MacOs. If you're a Linux user, do not use `sudo apt-get install hugo`, as it currently doesn't get you the `extended` version.

If you want to do stylesheet changes, you will also need `PostCSS` to create the final assets:

```
npm install -D --save autoprefixer
npm install -D --save postcss-cli
```

You can also install these tools globally on your computer:

```bash
npm install -g postcss-cli
npm install -g autoprefixer
```

To use a local version of the theme files during site development, clone the repo using:

```
git clone --recurse-submodules --depth 1 https://github.com/google/docsy.git
```

For comprehensive Hugo documentation, see [gohugo.io](https://gohugo.io/)

## Using the theme

To use the Docsy Hugo theme, you can either:

*  Copy and edit the [example site's repo](https://github.com/google/docsy-example), which will also give you a skeleton structure for your top-level and documentation sections to modify as much as you like. The example site uses Docsy as a Git submodule so it's easy to [keep up to date](#keeping-the-theme-up-to-date).
*  Specify the [Docsy theme](https://github.com/google/docsy) like any other Hugo theme when creating or updating your site. This gives you all the theme-y goodness but you'll need to specify your own site structure. 

    ```bash
    hugo new site myproject
    cd myproject
    git init
    git submodule add https://github.com/google/docsy.git themes/docsy
    echo 'theme = "docsy"' >> config.toml
    ```

    You can either use the theme as a submodule like the example site, as shown above (our recommended approach for easy updates), or you can just [clone the theme](https://gohugo.io/themes/installing-and-using-themes/#install-a-single-theme) into your project's `themes` subdirectory.

Whichever approach you take, we recommend running Hugo locally and taking a look at your site before you do anything else to make sure it works. You can find out how to do this in [Serving your site locally](/docs/deployment/#serving-your-site-locally).

## Keeping the theme up to date

We hope to continue to make improvements to the theme along with the Docsy community. If you have cloned the example site (or are otherwise using the theme as a submodule), you can update the theme submodule yourself as follows:

1. In your local copy of your project, run:

    ```
    git submodule update --remote
    ```
    
1. Then add and commit your change:

    ```
    git add themes/
    git commit -m "Updating theme submodule"
    ```

1. Finally, push the change back to the project repo.

    ```
    git push origin master
    ```
    
If you've cloned the theme yourself, use `git pull origin master` in the theme root directory to get the latest version.

## Configuring your site

Like all Hugo sites, you specify site-wide configuration details and parameters in your project's `config.toml` file. These include your chosen Hugo theme (Docsy, of course!), project name, community links, Google Analytics configuration, and Markdown parser parameters.

See the examples with comments in [`config.toml` in the example project](https://github.com/google/docsy-example/blob/master/config.toml) for how to add this information. We recommend copying this `config.toml` and editing it even if you're just using the theme and not copying the entire Docsy example site.

## What's next?

* Now you have a working site, you probably want to add some content and otherwise customize it for your project! Find out how to make a Docsy site your own in [Content and Customization](/docs/adding-content/).
* Get some ideas from our [Example Site]() and other [Examples](/docs/examples/).
* [Share your site with the world](/docs/deployment/).


	
