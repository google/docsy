---
title: 'Create a new site: start with a prepopulated site'
linkTitle: Start with a prepopulated site
description: >
  Clone the example site and adapt it: the fastest route to a working Docsy
  site.
weight: 2
cSpell:ignore: gitea
---

The [Docsy example site](https://github.com/google/docsy-example) gives you a
skeleton structure for your site, with top-level and documentation sections and
templates that you can modify as necessary.

If you prefer to create a site from scratch, follow [Start a site from
scratch][start-from-scratch].

## TL;DR: Setup for the impatient expert

With the [prerequisites][] installed (on Windows, including Bash on your
`PATH`), run:

```bash
git clone --depth 1 --branch {{% param tdVersion.latest %}} https://github.com/google/docsy-example.git my-new-site
cd my-new-site
npm run install:safe
npm run serve
```

Preview at <http://localhost:1313/>. If the build fails, see
[Troubleshooting][].

## Detailed Setup instructions

### Clone the Docsy example site

There are two routes to get a local clone of the example site:

#### Option 1: Using the command line (local copy only)

If you want to use a remote repository other than GitHub (such as
[GitLab](https://gitlab.com), [BitBucket](https://bitbucket.org/),
[AWS CodeCommit](https://aws.amazon.com/codecommit/),
[Gitea](https://gitea.io/)) or if you don't want a remote repo at all, simply
make a local working copy of the example site directly using `git clone`. As
last parameter, give your chosen local repo name (here: `my-new-site`):

```bash
git clone --depth 1 --branch {{% param tdVersion.latest %}} https://github.com/google/docsy-example.git my-new-site
```

#### Option 2: Using the GitHub UI (local copy + associated GitHub repo)

As the Docsy example site repo is a
[template repository](https://github.blog/2019-06-06-generate-new-repositories-with-repository-templates/),
creating your own remote GitHub clone of this Docsy example site repo is quite
easy:

1. Go to the repo of the
   [Docsy example site](https://github.com/google/docsy-example).

1. Use the dropdown for switching branches/tags to change to the latest released
   tag `{{% param tdVersion.latest %}}`.

1. Click the button **Use this template** and select the option
   `Create a new repository` from the dropdown.

1. Choose a name for your new repository (e.g. `my-new-site`) and type it in the
   **Repository name** field. You can also add an optional **Description**.

1. Click **Create repository from template** to create your new repository.

1. Make a local copy of your newly created GitHub repository by using
   `git clone`, giving your repo's web URL as last parameter.

   ```bash
   git clone https://github.com/me-at-github/my-new-site.git
   ```

> [!NOTE]
>
> Depending on your environment you may need to tweak the
> [module top-level settings](https://gohugo.io/configuration/module/#top-level-settings)
> in your `hugo.yaml` slightly, for example by adding a proxy to use when
> downloading remote modules.

### Preview your site

To build and preview your site locally, switch to the root of your cloned
project, install the project dependencies, and serve the site:

```bash
cd my-new-site
npm run install:safe
npm run serve
```

Preview at <http://localhost:1313/>. Hugo reloads the preview as you edit. Press
`Ctrl + c` to stop the server. If the build fails, see [Troubleshooting][].

## What's next?

- Add some [basic configuration](/docs/get-started/basic-configuration/)
- [Edit existing content and add more pages](/docs/content/)
- [Customize your site](/docs/content/lookandfeel/)
- [Publish your site](/docs/deployment/).

<!-- prettier-ignore-start -->
[prerequisites]: /docs/get-started/docsy-as-module/installation-prerequisites/
[start-from-scratch]: /docs/get-started/docsy-as-module/start-from-scratch/
[Troubleshooting]: /docs/get-started/troubleshooting/
<!-- prettier-ignore-end -->
