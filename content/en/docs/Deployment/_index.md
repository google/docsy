---
title: "Previews and Deployment"
linkTitle: "Previews and Deployment"
weight: 7
description: >
  Deploying your Docsy site.
---

There are multiple possible options for deploying a Hugo site, including Netlify, Firebase Hosting, Bitbucket with Aerobatic, and more; you can read about them all in [Hosting and Deployment](https://gohugo.io/hosting-and-deployment/). Hugo also makes it easy to deploy your site locally for quick previews of your content.

## Serving your site locally

Depending on your deployment choice you may want to serve your site locally during development to preview content changes. To serve your site locally:

1.  Ensure you have an up to date local copy of your site files cloned from your repo. Don't forget to use `--recurse-submodules` or you won't pull down some of the code you need to generate a working site.

    ```
    git clone --recurse-submodules --depth 1 https://github.com/my/example.git
    ```
   
    {{% alert title="Note" color="primary" %}}
If you've just added the theme as a submodule in a local version of your site and haven't committed it to a repo yet,  you must get local copies of the theme's own submodules before serving your site.
    
    git submodule update --init --recursive
    {{% /alert %}}

1.  Ensure you have the tools described in [Installation and Prerequisites](#installation-and-prerequisites) installed on your local machine, including `postcss-cli` (you'll need it to generate the site resources the first time you run the server).
1.  Run the `hugo server` command in your site root. By default your site will be available at http://localhost:1313/.

Now that you're serving your site locally, Hugo will watch for changes to the content and automatically refresh your site.

## Deployment with Netlify

We recommend using [Netlify](https://www.netlify.com/) as a particularly simple way to serve your site from GitHub, with [continuous deployment](https://www.netlify.com/docs/continuous-deployment/) from GitHub, previews of the generated site when you or your users create pull requests against the doc repo, and more. Netlify is free to use for Open Source projects, with premium tiers if you require greater support.

Follow the instructions in [Host on Netlify](https://gohugo.io/hosting-and-deployment/hosting-on-netlify/) to deploy your site. Specify at least the 0.53 version of Hugo when configuring your deployment as earlier versions won't work with this theme.

{{% alert title="Warning" color="warning" %}}
At the moment due to Netlify system limitations, Netlify does not support the "extended" version of Hugo needed to use SCSS, which is used by our theme. This is a known issue and the fix will be rolled out in future versions of Netlify. A workaround until then is to build the site on your local machine with "extended" Hugo, and then commit the generated `resources/` folder to your site repo on GitHub.  To do this:

1.  Ensure you have an up to date local copy of your site files cloned from your repo. Don't forget to use `--recurse-submodules` or you won't pull down some of the code you need to generate a working site.

    ```
    git clone --recurse-submodules --depth 1 https://github.com/my/example.git
    ```

1.  Ensure you have the tools described in [Installation and Prerequisites](#installation-and-prerequisites) installed on your local machine, including `postcss-cli`: you'll need it to generate the site resources.
1.  Run the `hugo` command in your site root.
1.  Add the generated `resources/` directory using `git add -f resources`, and commit back to the repo.

You should now be able to serve the complete site from GitHub using Netlify. Please check our docs for updates on when you will no longer need this workaround.
{{% /alert %}}

## RSS feeds

Hugo will, by default, create an RSS feed for the home page and any section. For the main RSS feed you can control which sections to include by setting a site param in your `config.toml`. This is the default configuration:

```toml
rss_sections = ["blog"]
```
