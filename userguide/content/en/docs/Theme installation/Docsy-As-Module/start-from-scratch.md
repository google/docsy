---
title: "Route 2: Start your new hugo site from scratch (for experts)"
linkTitle: "Start site from scratch (experts)"
date: 2021-12-08T09:21:54+01:00
weight: 3
description: >
  Instructions on how to start a hugo site from scratch using Docsy theme as Hugo module which is automatically pulled in.
---

As an expert, you may prefer your new site from scratch. This approach gives you a minimum skeleton structure for your site only, so that you build and extend your site step by step. The first step is adding the Docsy theme as a [Hugo module](https://gohugo.io/hugo-modules/) to your site. If needed, you can easily [update](/docs/updating/) the module to the latest version of the Docsy GitHub repo.


## TL;DR: Setup for the impatient expert

At your command prompt, issue:

{{< tabpane >}}
{{< tab header="Unix shell" >}}
hugo new site my-new-site
cd  my-new-site
hugo mod init github.com/me/my-new-site
hugo mod get github.com/google/docsy@v0.2.0-pre
hugo mod get github.com/google/docsy/module@v0.2.0-pre
cat >> config.toml <<EOL
[module]
[[module.imports]]
path = "github.com/google/docsy"
[[module.imports]]
path = "github.com/google/docsy/module"
EOL
hugo server
{{< /tab >}}
{{< tab header="Windows command line" >}}
hugo new site my-new-site
cd  my-new-site
hugo mod init github.com/me/my-new-site
hugo mod get github.com/google/docsy@v0.2.0-pre
hugo mod get github.com/google/docsy/module@v0.2.0-pre
(echo [module]^

[[module.imports]]^

path = "github.com/google/docsy"^

[[module.imports]]^

path = "github.com/google/docsy/module")>>config.toml
hugo server
{{< /tab >}}
{{< /tabpane >}}


You now can preview your new site inside your browser at [http://localhost:1313](http://localhost:1313/).

## Detailed Setup instructions

Specifying the [Docsy theme](https://github.com/google/docsy) as Hugo module for your minimal site gives you all the theme-y goodness, but you'll need to specify your own site structure.

### Create your new skeleton site

To create a new Hugo site project and then add the Docs theme as a submodule, run the following commands from your project's root directory.

```shell
hugo new site my-new-site
cd  my-new-site
```

This will create a minimal site structure, containing the folders `archetypes`, `content`, `data`, `layouts`, `static`, and `themes` and a configuration file, `config.toml.

### Import the Docsy theme module as a dependency of your site

Only sites that are hugo modules themselves can import other hugo modules. So turn your site into a Hugo Module by executing the following commands from within your newly created site directory:

```
hugo mod init github.com/me/my-new-site
```

This will create two new files, `go.mod` for the module definitions and `go.sum` which holds the checksums for module verification.

Afterwards, declare the docsy theme module as a dependency for your site. Also declare the submodule `module` as a second dependency. The submodule will pull in both a workaround for a bug in Go's module management and the dependencies `bootstrap` and `Font-Awesome`.

```
hugo mod get github.com/google/docsy@v0.2.0-pre
hugo mod get github.com/google/docsy/module@v0.2.0-pre
```

These commands will add both the docsy theme module and the submodule to your definition file `go.mod`.

### Add theme module configuration settings

Next, add the settings given in the code box below at the end of your site configuration file (default: `config.toml`).

{{< tabpane >}}
{{< tab header="config.toml" >}}
[module]
  # uncomment line below for temporary local development of module
  # replacements = "github.com/google/docsy -> ../../docsy"
  [module.hugoVersion]
    extended = true
    min = "0.73.0"
  [[module.imports]]
    path = "github.com/google/docsy"
    disable = false
  [[module.imports]]
    path = "github.com/google/docsy/module"
    disable = false
{{< /tab >}}
{{< tab header="config.yaml" >}}
module:
  hugoVersion:
    extended: true
    min: 0.73.0
  imports:
    - path: github.com/google/docsy
      disable: false
  imports:
    - path: github.com/google/docsy/module
      disable: false
{{< /tab >}}
{{< tab header="config.json" >}}
{
  "module": {
    "hugoVersion": {
      "extended": true,
      "min": "0.73.0"
    },
    "imports": [
      {
        "path": "github.com/google/docsy",
        "disable": false
      },
      {
        "path": "github.com/google/docsy/module",
        "disable": false
      }
    ]
  }
}
{{< /tab >}}
{{< /tabpane >}}

 Store the file, and your site configuration is finished.

### Preview your site

To build and preview your site locally:

```
hugo server
```

By default, your site will be available at [http://localhost:1313](http://localhost:1313/). When encountering problems, have a look at the [known issues](/docs/getting-started/known_issues/#macos) on MacOS.

You may get Hugo errors for missing parameters and values when you try to build your site. These errors will go away once you did your basic site configuration as described in the next chapter.

## Basic site configuration

Site-wide configuration details and parameters are defined in your project's `config.toml` file. These include your chosen Hugo theme (Docsy, of course!), project name, community links, Google Analytics configuration, and Markdown parser parameters. See the examples with comments in [`config.toml` in the example project](https://github.com/google/docsy-example/blob/master/config.toml) for how to add this information. **We recommend copying this `config.toml` and editing it.**. Please note that this file is not bound to the Docsy example site, it will be useful for your project, too.

You may want to remove or customize some defaults of the copied `config.toml` file straight away:

### Internationalization

The copied `config.toml` file defines content in English, Norwegian and Farsi. You can find out more about how Docsy supports multi-language content in [Multi-language support](/docs/language/).

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
