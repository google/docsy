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
hugo mod get github.com/google/docsy
sed -i '/theme = \["docsy"\]/d' config.toml
cat >> config.toml <<EOL
[module]
[[module.imports]]
path = "github.com/google/docsy"
EOL
mkdir -p assets/vendor/bootstrap/scss/vendor
wget -P assets/vendor/bootstrap/scss/vendor https://raw.githubusercontent.com/twbs/bootstrap/v4.6.1/scss/vendor/_rfs.scss
hugo server
{{< /tab >}}
{{< tab header="Windows command line" >}}
cd  my-existing-site
hugo mod init github.com/me-at-github/my-existing-site
hugo mod get github.com/google/docsy
findstr /v /c:"theme = [\"docsy\"]" config.toml > config.toml.temp
move /Y config.toml.temp config.toml
(echo [module]^

[[module.imports]]^

path = "github.com/google/docsy"^)>>config.toml
md assets\vendor\bootstrap\scss\vendor
cd assets\vendor\bootstrap\scss\vendor
REM Windows 10 only
curl.exe -O --url https://raw.githubusercontent.com/twbs/bootstrap/v4.6.1/scss/vendor/_rfs.scss
cd ..\..\..\..\..
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

This will create two new files, `go.mod` for the module definitions and `go.sum` which helds the checksums for module verification.

Afterwards, declare the docsy module as a dependency for your site:

```
hugo mod get github.com/google/docsy
```

This will add the docsy theme module to your definition file `go.mod`.

### Alter the docsy theme definition from local install to Hugo module

Inside your `config.toml, identify the following line:

```
theme = ["docsy"]
```

Remove this line and replace it with the settings given in the code box below:

{{< tabpane >}}
{{< tab header="config.toml" >}}
[module]
  # uncomment line below for temporary local development of module
  # replacements = "github.com/google/docsy -> ../../docsy"
  [module.hugoVersion]
    extended = true
    min = "0.75.0"
  [[module.imports]]
    path = "github.com/google/docsy"
    disable = false
{{< /tab >}}
{{< tab header="config.yaml" >}}
module:
  hugoVersion:
    extended: true
    min: 0.75.0
  imports:
    - path: github.com/google/docsy
      disable: false
{{< /tab >}}
{{< tab header="config.json" >}}
{
  "module": {
    "hugoVersion": {
      "extended": true,
      "min": "0.75.0"
    },
    "imports": [
      {
        "path": "github.com/google/docsy",
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
github.com/me/my-existing-site github.com/deining/docsy@v0.0.0-20220114173756-13dd72fd59ba
github.com/google/docsy@v0.0.0-20220114173756-13dd72fd59ba github.com/twbs/bootstrap@v4.6.1+incompatible
github.com/google/docsy@v0.0.0-20220114173756-13dd72fd59ba github.com/FortAwesome/Font-Awesome@v0.0.0-20210804190922-7d3d774145ac
```

Make sure that three lines with dependencies `docsy`, `bootstrap` and `Font-Awesome` are listed. If not, please double check your config settings.

{{% alert title="Tip" %}}
In order to clean up your module cache, issue the command `hugo mod clean`

```
hugo mod clean
hugo: collected modules in 995 ms
hugo: cleaned module cache for "github.com/FortAwesome/Font-Awesome"
hugo: cleaned module cache for "github.com/google/docsy"
hugo: cleaned module cache for "github.com/twbs/bootstrap"
```
{{% /alert %}}

### Work around a known bug in Go's module management

When using `bootstrap` dependency as module, we are affected by a [known](https://github.com/golang/go/issues/37397) bug in Go's core module library. This bug won't be fixed, fortunately we can work around it:

All we have to do is to place a file `_rfs.scss` at the bottom of a new directory structure inside our site:

```
my-existing-site
│
└───assets
    │
    └───vendor
        │
        └───bootstrap
            │
            └───scss
                │
                └───vendor
                    │
                    └───_rfs.scss

```

First we create the needed directory structure using the `mkdir` command:

```shell
mkdir -p assets/vendor/bootstrap/scss/vendor
```

Then we download the file `_rfs.scss` using the `wget` command line utility:

```shell
wget -P assets/vendor/bootstrap/scss/vendor https://raw.githubusercontent.com/twbs/bootstrap/v4.6.1/scss/vendor/_rfs.scss
```


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
