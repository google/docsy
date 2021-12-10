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
cat >> config.toml <<EOL
[module]
[[module.imports]]
path = "github.com/google/docsy"
[[module.imports.mounts]]
source = "assets"
target = "assets"
[[module.imports.mounts]]
source = "assets/bootstrap/scss/vendor"
target = "assets/vendor/bootstrap/scss/vendor"
[[module.imports.mounts]]
source = "i18n"
target = "i18n"
[[module.imports.mounts]]
source = "layouts"
target = "layouts"
[[module.imports.mounts]]
source = "static"
target = "static"
EOL
hugo server
{{< /tab >}}
{{< tab header="Windows command line" >}}
cd  my-existing-site
hugo mod init github.com/me-at-github/my-existing-site
hugo mod get github.com/google/docsy
(echo [module]^

[[module.imports]]^

path = "github.com/google/docsy"^

[[module.imports.mounts]]^

source = "assets"^

target = "assets"^

[[module.imports.mounts]]^

source = "assets/bootstrap/scss/vendor"^

target = "assets/vendor/bootstrap/scss/vendor"^

[[module.imports.mounts]]^

source = "i18n"^

target = "i18n"^

[[module.imports.mounts]]^

source = "layouts"^

target = "layouts"^

[[module.imports.mounts]]^

source = "static"^

target = "static")>config.toml
hugo server
{{< /tab >}}
{{< /tabpane >}}


## Detailed Setup instructions

### Add the Docsy theme module to your site

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

### Add theme module configuration settings

Next, add the settings given in the code box below at the end of your site configuration file (default: `config.toml`).

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
  [[module.imports.mounts]]
    source = "assets"
    target = "assets"
  [[module.imports.mounts]]
    source = "assets/bootstrap/scss/vendor"
    target = "assets/vendor/bootstrap/scss/vendor"
  [[module.imports.mounts]]
    source = "i18n"
    target = "i18n"
  [[module.imports.mounts]]
    source = "layouts"
    target = "layouts"
  [[module.imports.mounts]]
    source = "static"
    target = "static"
{{< /tab >}}
{{< tab header="config.yaml" >}}
module:
  hugoVersion:
    extended: true
    min: 0.75.0
  imports:
    - path: github.com/google/docsy
      disable: false
      mounts:
        - source: assets
          target: assets
        - source: assets/bootstrap/scss/vendor
          target: assets/vendor/bootstrap/scss/vendor
        - source: i18n
          target: i18n
        - source: layouts
          target: layouts
        - source: static
          target: static
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
        "disable": false,
        "mounts": [
          {
            "source": "assets",
            "target": "assets"
          },
          {
            "source": "assets/bootstrap/scss/vendor",
            "target": "assets/vendor/bootstrap/scss/vendor"
          },
          {
            "source": "i18n",
            "target": "i18n"
          },
          {
            "source": "layouts",
            "target": "layouts"
          },
          {
            "source": "static",
            "target": "static"
          }
        ]
      }
    ]
  }
}
{{< /tab >}}
{{< /tabpane >}}

 Store the file, and you conversion is done.

### Remove theme and submodule leftovers

Since your site makes now use of hugo modules, your previous used themes directory can be removed: 

```
rm -rf /path/to/your/theme/*
```

If your docsy theme was installed as submodule, you may delete the hidden submodule definition file `.gitmodules`, too.

```
rm .gitmodules
```

Finally, you may clean up the internal directory that git used to store your git submodules:

```
rm -rf .git/modules
```


{{% alert title="Attention" color="warning" %}}
Be careful when using the `rm -rf` command, make sure that you don't inadvertently delete any productive data files!
{{% /alert %}}
