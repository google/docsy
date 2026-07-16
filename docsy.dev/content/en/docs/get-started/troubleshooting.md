---
title: Troubleshooting and known issues
linkTitle: Troubleshooting
weight: 60
description: >
  Troubleshooting and known issues when installing and using Docsy.
aliases: [known_issues]
cSpell:ignore: TOCSS maxfiles maxfilesperproc
---

## Troubleshooting

### Missing theme npm dependencies

For any Docsy install mode, if the theme's npm packages aren't available, Hugo
fails while compiling SCSS with an error like:

```text
TOCSS: failed to transform "/scss/main.scss" (text/x-scss):
File to import not found or unreadable: ../../vendor/bootstrap/scss/functions.
```

To fix this, install the theme's npm dependencies for your [setup][], then
rebuild. Example-site-based projects: run `npm install` in your site root. Hugo
module sites from scratch: see [Install theme npm dependencies][theme-npm-deps].

## Known issues

The following issues are known on [MacOS](#macos) and on
[Windows Subsystem for Linux](#windows-subsystem-for-linux-wsl):

### MacOS

#### Errors: `too many open files` or `fatal error: pipe failed`

By default, MacOS permits a small number of open File Descriptors. For larger
sites, or when you're simultaneously running multiple applications, you might
receive one of the following errors when you run
[`hugo server`](https://gohugo.io/commands/hugo_server/) to preview your site
locally:

- POSTCSS v7 and earlier:

  ```
  ERROR 2020/04/14 12:37:16 Error: listen tcp 127.0.0.1:1313: socket: too many open files
  ```

- POSTCSS v8 and later:

  ```
  fatal error: pipe failed
  ```

##### Workaround

To temporarily allow more open files:

1. View your current settings by running:

   ```
   sudo launchctl limit maxfiles
   ```

2. Increase the limit to `65535` files by running the following commands. If
   your site has fewer files, you can choose to set lower soft (`65535`) and
   hard (`200000`) limits.

   ```shell
   sudo launchctl limit maxfiles 65535 200000
   ulimit -n 65535
   sudo sysctl -w kern.maxfiles=200000
   sudo sysctl -w kern.maxfilesperproc=65535
   ```

Note that you might need to set these limits for each new shell.
[Learn more about these limits and how to make them permanent](https://www.google.com/search?q=mac+os+launchctl+limit+maxfiles+site%3Aapple.stackexchange.com&oq=mac+os+launchctl+limit+maxfiles+site%3Aapple.stackexchange.com).

### Windows Subsystem for Linux (WSL)

If you're using WSL, ensure that you're running `hugo` on a Linux mount of the
filesystem, rather than a Windows one, otherwise you may get unexpected errors.

<!-- prettier-ignore-start -->
[setup]: /docs/get-started/
[theme-npm-deps]: /docs/get-started/docsy-as-module/start-from-scratch/#install-theme-npm-dependencies
<!-- prettier-ignore-end -->
