---
title: "Route 1: Start with a clone of the prepopulated Docsy example site (for beginners)"
linkTitle: "Start with a prepopulated site"
date: 2021-12-08T09:21:54+01:00
weight: 2
description: >
  Start off with your new hugo site using a clone of the prepopulated Docsy example site theme as starting point.
---

As beginner, it is recommended that you use the sources of the [Docsy example site](https://github.com/google/docsy-example) as starting point of your new site. This approach gives you a skeleton structure for your site, with top-level and documentation sections and templates that you can modify as necessary. The example site automatically pulls in the Docsy theme as a [Hugo module](https://gohugo.io/hugo-modules/), so it's easy to [keep up to date](/docs/updating/updating-hugo-module/).

## TL;DR: Setup for the impatient expert

At your Unix shell or your Windows command line, issue:

```
git clone https://github.com/google/docsy.git my-new-site
cd  my-new-site
hugo server
```

You now can preview your new site inside your browser at [http://localhost:1313](http://localhost:1313/).

## Detailed Setup instructions

### Clone the Docsy example site

The [Example Site](https://example.docsy.dev) gives you a good starting point for building your docs site and is
pre-configured to automatically pull in the Docsy theme as Hugo module.
There are two different routes to get a local clone of the Example Site:
If you want to create a local site repo only, choose route 1.
If you do have a GitHub account and additionally want to create a remote GitHub repo associated with your local site repo go for route 2.

*  [Route 1: Using the command line (local site repo only)](#using-the-command-line)
*  [Route 2: Using the GitHub UI (local site repo + associated remote GitHub repo)](#using-the-github-ui) 

#### Route 1: Using the command line (local site repo only)

If you want  to use a remote repository different from GitHub (e.g. [GitLab](https://gitlab.com), [BitBucket](https://bitbucket.org/), [AWS CodeCommit](https://aws.amazon.com/codecommit/), [Gitea](https://gitea.io/) or alike) or if you don't want a remote rpo at all, simply make a local working copy of the example site directly using `git clone`. As last parameter, give your local repo name (here: `my-new-site`):

```
git clone https://github.com/google/docsy-example.git my-new-site
```

#### Route 2: Using the GitHub UI (local site repo + associated remote GitHub repo)

As the Docsy example site repo is a [template repository](https://github.blog/2019-06-06-generate-new-repositories-with-repository-templates/), creating your own remote GitHub clone of this Docsy example site repo is quite easy:

1. Go to the [Docsy example site repo](https://github.com/google/docsy-example) and click **Use this template**.

1. Chose a name for your new repository (e.g. `my-new-site`) and type it in the **Repository name** field. You can also add an optional **Description**.

1. Click **Create repository from template** to create your new repository. Congratulations, you justed created your remote Github clone which now serves as starting point for your own site!

1. Make a local copy of your newly created GitHub repository, using git's `clone` subcommand, give your repo's web URL as last parameter.

    <pre>
    git clone <em>https://github.com/me-at-github/my-new-site.git</em>
    </pre>

Now you can make local edits and test your copied site locally with Hugo.

### Preview your site

To build and preview your site locally, switch to the root of your cloned project and use hugos's `server` subcommand::

```
cd my-new-site
hugo server
```

Preview your site in your browser at: [http://localhost:1313](http://localhost:1313/).
Thanks to Hugo's live preview, you can immediately see the effect of changes that you are making to the source files of your local repo.
Use `Ctrl + c` to stop the Hugo server whenever you like.
[See the known issues on MacOS](/docs/getting-started/known_issues/#macos).

## What's next?

* [Edit existing content and add more pages](/docs/adding-content/)
* [Customize your site](/docs/adding-content/lookandfeel/)
* [Publish your site](/docs/deployment/).
