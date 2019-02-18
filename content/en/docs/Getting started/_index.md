
---
title: "Getting Started"
linkTitle: "Getting Started"
weight: 2
date: 2018-07-30
description: >
  This page tells you how to get started with the Docsy theme, including installation and basic configuration.
---


## Prerequisites and installation

### Install Hugo 

You need a [recent version](https://github.com/gohugoio/hugo/releases) of Hugo to do local builds and previews of sites (like this one) that use Docsy. If you install from the release page, make sure to get the `extended` Hugo version, which supports SCSS: you may need to scroll down the list of releases. Hugo can be installed via Brew if you're running MacOs. If you're a Linux user, do not use `sudo apt-get install hugo`, as it currently doesn't get you the `extended` version.

For comprehensive Hugo documentation, see [gohugo.io](https://gohugo.io/)

### Install PostCSS

If you want to make any stylesheet changes, you will also need `PostCSS` to create the final assets:

```
npm install -D --save autoprefixer
npm install -D --save postcss-cli
```

You can also install these tools globally on your computer:

```bash
npm install -g postcss-cli
npm install -g autoprefixer
```


## Using the theme

To use the Docsy Hugo theme, you can either copy and edit our example site, or build your own site using the theme.

### Clone the Docsy example site.

Copy the [example site's repo](https://github.com/google/docsy-example). Using this approach also gives you a skeleton structure for your top-level and documentation sections to modify as much as you like. The example site uses Docsy as a Git submodule so it's easy to [keep up to date](#keeping-the-theme-up-to-date). 

Don't forget when using your local copy to download the project's submodules (Docsy itself uses submodules for Bootstrap and Font Awesome) or you won't pull down some of the code you need to generate a working site.

To copy the example site:

1.  Make a local working copy of the example site directly using `git clone` (we won't get the submodules yet as this can confuse Git when setting our new origin repo in the next step):

    ```bash
    $ git clone https://github.com/google/docsy-example.git
    ```

    {{% alert title="Tip" %}}
If you've already cloned the example site with `--recurse-submodules --depth 1` and want to set a new origin repo, worry not! The following is one way to un-confuse Git and you can then proceed with the next step as normal. You can remove the `old` remote once you've pushed to your repo.

    git remote add old https://github.com/google/docsy-example.git
    git fetch unshallow old

    {{% /alert %}}

1.  Then to store your site files in GitHub, create a new empty repo in your account and change your local copy's `origin` to your new repo (otherwise you'll be trying to push changes to our example site):

    ```bash
    $ git remote remove origin
    $ git remote add origin https://github.com/my/example.git
    $ git push -u origin master
    ``` 
  
1. Get local copies of the project submodules so you can build and run your site locally:

    ```bash
    git submodule update --init --recursive
    ```

Alternatively, the following simple approach also works (though note this creates a link in GitHub between your project and the example site project):

1.  Fork the example site repo to your own GitHub account using the GitHub web UI by clicking **Fork** in [the example site's repo page](https://github.com/google/docsy-example). 
1.  Rename your new fork appropriately by selecting **Settings** in its repo page and updating the **Repository name**.
1.  Make your own local working copy of your repo using `git clone`, recursing into the submodules:

    ```
    $ git clone --recurse-submodules --depth 1 https://github.com/my/example.git
    ```

Once you have your local copy and GitHub repo, you can then edit away locally, pushing any changes you make to your GitHub repo using `git push`.

### Use the Docsy theme in your own site

Specify the [Docsy theme](https://github.com/google/docsy) like any other Hugo theme when creating or updating your site. This gives you all the theme-y goodness but you'll need to specify your own site structure. 

    $ hugo new site myproject
    $ cd myproject
    $ git init
    $ git submodule add https://github.com/google/docsy.git themes/docsy
    $ echo 'theme = "docsy"' >> config.toml
    $ git submodule update --init --recursive


You can either use the theme as a submodule like the example site, as shown above (our recommended approach for easy updates), or can just [clone the theme](https://gohugo.io/themes/installing-and-using-themes/#install-a-single-theme) into your project's `themes` subdirectory. For simplicity we recommend copying and editing our [example site configuration](#configuring-your-site) for your project or you may get Hugo errors for missing parameters and values when you try to build your site.

### Preview your site

Whichever approach you take, we recommend running Hugo locally and taking a look at your site before you do anything else to make sure it works. You can find out how to do this in [Serving your site locally](/docs/deployment/#serving-your-site-locally). Once your site is working, you can start [adding your own content and customizations](/docs/adding-content/).


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
* Get some ideas from our [Example Site](https://github.com/google/docsy-example) and other [Examples](/docs/examples/).
* [Publish your site](/docs/deployment/).


	
