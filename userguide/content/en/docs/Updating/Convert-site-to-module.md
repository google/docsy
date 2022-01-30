---
title: "Convert an existing site to Docsy hugo module"
linkTitle: "Convert existing site to Docsy hugo module"
weight: 3
description: >
  Convert an existing site, turning Hugo Docsy theme into a hugo module.
---

## TL;DR: Conversion for the impatient expert

At your command prompt, issue:

{{< tabpane >}}
{{< tab header="Unix shell" >}}
cd /path/to/my-existing-site
hugo mod init github.com/me-at-github/my-existing-site
hugo mod get github.com/google/docsy@v0.2.0-pre
hugo mod get github.com/google/docsy/module@v0.2.0-pre
sed -i '/theme = \["docsy"\]/d' config.toml
cat >> config.toml <<EOL
[module]
[[module.imports]]
path = "github.com/google/docsy"
[[module.imports]]
path = "github.com/google/docsy"
EOL
hugo server
{{< /tab >}}
{{< tab header="Windows command line" >}}
cd  my-existing-site
hugo mod init github.com/me-at-github/my-existing-site
hugo mod get github.com/google/docsy@v0.2.0-pre
hugo mod get github.com/google/docsy/module@v0.2.0-pre
findstr /v /c:"theme = [\"docsy\"]" config.toml > config.toml.temp
move /Y config.toml.temp config.toml
(echo [module]^

[[module.imports]]^

path = "github.com/google/docsy"^

[[module.imports]]^

path = "github.com/google/docsy")>>config.toml
hugo server
{{< /tab >}}
{{< /tabpane >}}


## Detailed Conversion instructions

### Import the Docsy theme module as a dependency of your site

At the command prompt, change to the root directory of your existing site.

```
cd /path/to/my-existing-site
```

Only sites that are hugo modules themselves can import other hugo modules. So turn your existing site into a Hugo Module by executing the following commands from within your site directory:

```
hugo mod init github.com/me/my-existing-site
```

This will create two new files, `go.mod` for the module definitions and `go.sum` which holds the checksums for module verification.

Afterwards, declare the docsy theme module as a dependency for your site. Also declare the submodule `module` as a second dependency. The submodule will pull in both a workaround for a bug in Go's module management and the dependencies `bootstrap` and `Font-Awesome`.

```
hugo mod get github.com/google/docsy@v0.2.0-pre
hugo mod get github.com/google/docsy/module@v0.2.0-pre
```

This will add the docsy theme module to your definition file `go.mod`.

### Alter the docsy theme definition from local install to Hugo module

Inside your `config.toml, identify the following line:

```
theme = ["docsy"]
```

Change this line to:

```
theme = ["github.com/google/docsy", "github.com/google/docsy/module"]
```

Alternatively, you may this line altogether and replace it with the settings given in the code box below:

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

### Check validity of your configuration settings

To make sure that your configuration settings are correct, issue the command `hugo mod graph` which prints a module dependency graph:

```
hugo mod graph
hugo: collected modules in 1092 ms
github.com/me/my-existing-site github.com/google/docsy@v0.2.0-pre
github.com/me/my-existing-site github.com/google/docsy/module@v0.2.0-pre
github.com/google/docsy/module@v0.2.0-pre github.com/twbs/bootstrap@v4.6.1+incompatible
github.com/google/docsy/module@v0.2.0-pre github.com/FortAwesome/Font-Awesome@v0.0.0-20210804190922-7d3d774145ac
```

Make sure that three lines with dependencies `docsy`, `bootstrap` and `Font-Awesome` are listed. If not, please double check your config settings.

{{% alert title="Tip" %}}
In order to clean up your module cache, issue the command `hugo mod clean`

```
hugo mod clean
hugo: collected modules in 995 ms
hugo: cleaned module cache for "github.com/FortAwesome/Font-Awesome"
hugo: cleaned module cache for "github.com/google/docsy"
hugo: cleaned module cache for "github.com/google/docsy/module"
hugo: cleaned module cache for "github.com/twbs/bootstrap"
```
{{% /alert %}}

### Remove theme and submodule incl. leftovers

Since your site makes now use of hugo modules, your previously used `themes` directory can be removed: 

```
rm -rf /path/to/your/theme
```

If your docsy theme was installed as submodule, you may remove the themes submodule:

```
git rm --cached /path/to/your/submodule/theme
git add .
```

With your submodule deleted, now delete the relevant line form the hidden submodule definition file `.gitmodules`, too. If this is the only line, you can delete the file altogether.

```
rm .gitmodules
```

Finally, you can delete the now untracked submodule files and also clean up the internal directory that git used to store your git submodules:

```
rm -rf /path/to/your/submodule/theme
rm -rf .git/modules
```


{{% alert title="Attention" color="warning" %}}
Be careful when using the `rm -rf` command, make sure that you don't inadvertently delete any productive data files!
{{% /alert %}}
