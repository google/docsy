---
title: "Migrate to Hugo Modules"
linkTitle: "Migrate to Hugo Modules"
weight: 3
description: >
  Convert an existing site to use Docsy as a Hugo Module
---

## TL;DR: Conversion for the impatient expert

Run the following from the command line:

{{< tabpane >}}
{{< tab header="Unix shell" >}}
cd /path/to/my-existing-site
hugo mod init github.com/me-at-github/my-existing-site
hugo mod get github.com/google/docsy@v0.2.0
sed -i '/theme = \["docsy"\]/d' config.toml
cat >> config.toml <<EOL
[module]
[[module.imports]]
path = "github.com/google/docsy"
[[module.imports]]
path = "github.com/google/docsy/dependencies"
EOL
hugo server
{{< /tab >}}
{{< tab header="Windows command line" >}}
cd  my-existing-site
hugo mod init github.com/me-at-github/my-existing-site
hugo mod get github.com/google/docsy@v0.2.0
findstr /v /c:"theme = [\"docsy\"]" config.toml > config.toml.temp
move /Y config.toml.temp config.toml
(echo [module]^

[[module.imports]]^

path = "github.com/google/docsy"^

[[module.imports]]^

path = "github.com/google/docsy/dependencies")>>config.toml
hugo server
{{< /tab >}}
{{< /tabpane >}}


## Detailed conversion instructions

### Import the Docsy theme module as a dependency of your site

At the command prompt, change to the root directory of your existing site.

```
cd /path/to/my-existing-site
```

Only sites that are Hugo Modules themselves can import other Hugo Modules. Turn your existing site into a Hugo Module by running the following command from your site directory, replacing `github.com/me/my-existing-site` with your site repository:

```
hugo mod init github.com/me/my-existing-site
```

This creates two new files, `go.mod` for the module definitions and `go.sum` which holds the checksums for module verification.

Next declare the Docsy theme module as a dependency for your site.

```
hugo mod get github.com/google/docsy@v0.2.0
```

This command adds the `docsy` theme module to your definition file `go.mod`.

### Update your config file

In your `config.toml` file, update the theme setting to use Hugo Modules. Find the following line:

```
theme = ["docsy"]
```

Change this line to:

```
theme = ["github.com/google/docsy", "github.com/google/docsy/dependencies"]
```

Alternatively, you can omit this line altogether and replace it with the settings given in the following snippet:

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
    path = "github.com/google/docsy/dependencies"
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
    - path: github.com/google/docsy/dependencies
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
        "path": "github.com/google/docsy/dependencies",
        "disable": false
      }
    ]
  }
}
{{< /tab >}}
{{< /tabpane >}}

{{% alert title="Attention" color="warning" %}}
If you have a multi language installation, please make sure that the section `[languages]` inside your `config.toml` is declared before the section `[module]` with the module imports. Otherwise you will run into trouble!
{{% /alert %}}

### Check validity of your configuration settings

To make sure that your configuration settings are correct, run the command `hugo mod graph` which prints a module dependency graph:

```
hugo mod graph
hugo: collected modules in 1092 ms
github.com/me/my-existing-site github.com/google/docsy@v0.2.0
github.com/me/my-existing-site github.com/google/docsy/dependencies@v0.2.0
github.com/google/docsy/dependencies@v0.2.0 github.com/twbs/bootstrap@v4.6.1+incompatible
github.com/google/docsy/dependencies@v0.2.0 github.com/FortAwesome/Font-Awesome@v0.0.0-20210804190922-7d3d774145ac
```

Make sure that three lines with dependencies `docsy`, `bootstrap` and `Font-Awesome` are listed. If not, please double check your config settings.

{{% alert title="Tip" %}}
In order to clean up your module cache, issue the command `hugo mod clean`

```
hugo mod clean
hugo: collected modules in 995 ms
hugo: cleaned module cache for "github.com/FortAwesome/Font-Awesome"
hugo: cleaned module cache for "github.com/google/docsy"
hugo: cleaned module cache for "github.com/google/docsy/dependencies"
hugo: cleaned module cache for "github.com/twbs/bootstrap"
```
{{% /alert %}}

## Clean up your repository

Since your site now uses Hugo Modules, you can remove `docsy` from the `themes` directory, as instructed below.
First, change to the root directory of your site:

```
cd /path/to/my-existing-site
```

### Previous use of Docsy theme as git clone

Simply remove the subdirectory `docsy` inside your `themes` directory: 

```
rm -rf themes/docsy
```

### Previous use of Docsy theme as git submodule

If your Docsy theme was installed as submodule, use git's `rm` subcommand to remove the subdirectory `docsy` inside your `themes` directory: 

```
git rm -rf themes/docsy
```

You are now ready to commit your changes to your repository: 

```
git commit -m "Removed docsy git submodule"
```

{{% alert title="Attention" color="warning" %}}
Be careful when using the `rm -rf` command, make sure that you don't inadvertently delete any productive data files!
{{% /alert %}}
