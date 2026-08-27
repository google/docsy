---
title: 'Create a new site: Start a new site from scratch'
linkTitle: Start a site from scratch
date: 2021-12-08T09:21:54+01:00
weight: 3
description: >
  For experienced Hugo users who need a custom site structure
cSpell:ignore: batchfile
---

Creating a site from scratch gives you Docsy's look and feel, navigation, and
other features, but you specify your own site structure. These instructions give
you a minimum file structure only, so that you build and extend your actual site
step by step. The first step is adding the Docsy theme as a
[Hugo Module](https://gohugo.io/hugo-modules/) to your site. If needed, you can
easily [update](/docs/update/) the module to the latest revision from the Docsy
GitHub repo.

## TL;DR: Setup for the impatient expert

At your command prompt, run the following:

<!-- prettier-ignore-start -->
{{< tabpane >}}
{{< tab header="CLI:" disabled=true />}}
{{< tab header="Unix shell"  lang="Bash" >}}
hugo new site my-new-site
cd  my-new-site
hugo mod init github.com/me/my-new-site
hugo mod get github.com/google/docsy/theme@{{% param tdVersion.latest %}}
cat >> hugo.toml <<EOL
[module]
proxy = "direct"
[[module.imports]]
path = "github.com/google/docsy/theme"
EOL
hugo mod npm pack
npm install
npm install --save-exact --save-dev sass-embedded@{{% sass-embedded-version %}}
npm pkg set scripts.hugo=hugo
npm run hugo -- server
{{< /tab >}}
{{< tab header="Windows command line" lang="Batchfile" >}}
hugo new site my-new-site
cd  my-new-site
hugo mod init github.com/me/my-new-site
hugo mod get github.com/google/docsy/theme@{{% param tdVersion.latest %}}
(echo [module]^

proxy = "direct"^

[[module.imports]]^

path = "github.com/google/docsy/theme") >> hugo.toml
hugo mod npm pack
npm install
npm install --save-exact --save-dev sass-embedded@{{% sass-embedded-version %}}
npm pkg set scripts.hugo=hugo
npm run hugo -- server
{{< /tab >}}
{{< /tabpane >}}
<!-- prettier-ignore-end -->

Preview at <http://localhost:1313/>.

## Detailed Setup instructions

### Create your new skeleton project

To create a new Hugo site project and then add the Docsy theme as a Hugo module,
run the following commands from your project's root directory.

```bash
hugo new site my-new-site
cd  my-new-site
```

This will create a minimal site structure, containing the folders `archetypes`,
`content`, `data`, `layouts`, `static`, and `themes` and a configuration file
(default: `hugo.toml`).

### Import the Docsy theme module as a dependency of your site

Only sites that are Hugo Modules themselves can import other modules. To turn
your site into a Hugo Module, run the following commands in your newly created
site directory:

```bash
hugo mod init github.com/me/my-new-site
```

This creates a `go.mod` file for your site's module definitions.

Next declare the Docsy theme module as a dependency for your site.

```bash
hugo mod get github.com/google/docsy/theme@{{% param tdVersion.latest %}}
```

This command adds the `docsy` theme module to your definition file `go.mod` and
records the module checksums in `go.sum`.

### Add theme module configuration settings

Add the settings in the following snippet at the end of your site's
[configuration file] (default: `hugo.toml`) and save the file.

<!-- prettier-ignore-start -->
{{< tabpane >}}
{{< tab header="Configuration file:" disabled=true />}}
{{< tab header="hugo.toml"  lang="toml" >}}
[module]
  proxy = "direct"
  # uncomment line below for temporary local development of module
  # replacements = "github.com/google/docsy/theme -> ../../docsy/theme"
  [module.hugoVersion]
    extended = true
    min = "{{% param "hugoMinVersion" %}}"
  [[module.imports]]
    path = "github.com/google/docsy/theme"
    disable = false
{{< /tab >}}
{{< tab header="hugo.yaml" lang="yaml" >}}
module:
  proxy: direct
  hugoVersion:
    extended: true
    min: {{% param "hugoMinVersion" %}}
  imports:
    - path: github.com/google/docsy/theme
      disable: false
{{< /tab >}}
{{< tab header="hugo.json"  lang="json" >}}
{
  "module": {
    "proxy": "direct",
    "hugoVersion": {
      "extended": true,
      "min": "{{% param "hugoMinVersion" %}}"
    },
    "imports": [
      {
        "path": "github.com/google/docsy/theme",
        "disable": false
      }
    ]
  }
}
{{< /tab >}}
{{< /tabpane >}}
<!-- prettier-ignore-end -->

You can find details of what these configuration settings do in the
[Hugo modules documentation](https://gohugo.io/configuration/module/#top-level-settings).
Depending on your environment you may need to tweak them slightly, for example
by adding a proxy to use when downloading remote modules.

### Install npm dependencies {#install-theme-npm-dependencies}

Docsy sources its Bootstrap and Font Awesome assets from npm. Consolidate the
theme's npm dependencies into your project's `package.json` and install them,
along with the [Dart Sass][] compiler:

```bash
hugo mod npm pack
npm install
npm install --save-exact --save-dev sass-embedded@{{% sass-embedded-version %}}
```

Re-run `hugo mod npm pack` whenever you
[update Docsy](/docs/update/hugo-module/); Hugo warns when the dependency set
drifts. For background, see [Bootstrap and Font Awesome via npm][blog-npm-deps]
in the 0.16.0 release notes.

### Preview your site

To build and preview your site locally, run Hugo through an [npm
script][npm scripts] so that the `sass` CLI is on its `PATH` (see [Install Dart
Sass][]):

```bash
npm pkg set scripts.hugo=hugo
npm run hugo -- server
```

By default, your site will be available at
[http://localhost:1313](http://localhost:1313/). For common issues, such as the
build failing with a missing Bootstrap import, see [Troubleshooting][].

You may get Hugo errors for missing parameters and values when you try to build
your site. This is usually because you're missing default values for some
configuration settings that Docsy uses - once you add them your site should
build correctly. You can find out how to add configuration in
[Basic site configuration](/docs/get-started/basic-configuration/) - we
recommend copying the example site configuration even if you're creating a site
from scratch as it provides defaults for many required configuration parameters.

## What's next?

- Add some [basic configuration](/docs/get-started/basic-configuration/)
- [Add content and customize your site](/docs/content/)
- Get some ideas from our
  [Example Site](https://github.com/google/docsy-example) and other
  [Examples and templates](/examples/).
- [Publish your site](/docs/deployment/).

<!-- prettier-ignore-start -->
[blog-npm-deps]: /blog/2026/0.16.0/#npm-deps
[configuration file]: https://gohugo.io/configuration/introduction/#configuration-file
[Dart Sass]: https://sass-lang.com/dart-sass/
[Install Dart Sass]: /docs/get-started/docsy-as-module/installation-prerequisites/#install-dart-sass
[npm scripts]: https://docs.npmjs.com/cli/v11/using-npm/scripts
[Troubleshooting]: /docs/get-started/troubleshooting/
<!-- prettier-ignore-end -->
