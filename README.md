## In Example Project

The below will give you project that is set up and ready to use.

```bash
git clone --recurse-submodules --depth 1 https://github.com/bep/tech-doc-hugo-example.git
cd tech-doc-hugo-example
hugo server
```

Note that the theme is included as a Git submodule:

```bash
▶ git submodule
 a053131a4ebf6a59e4e8834a42368e248d98c01d themes/tech-doc-hugo-theme (heads/master)
```

If you want to do SCSS edits and want to publish these, you need to install `PostCSS` (not needed for `hugo server`):

```bash
npm install
```

## In Theme Project


```bash
git clone --recurse-submodules --depth 1 https://github.com/bep/tech-doc-hugo-theme.git
cd tech-doc-hugo-theme/exampleSite
HUGO_THEMESDIR="../.." hugo server
```


Note that the Hugo Theme Site requires the `exampleSite` to live in a subfolder of the theme itself. To avoid recursive duplication, the example site is added as a Git subtree:

```bash
git subtree add --prefix exampleSite https://github.com/bep/tech-doc-hugo-example.git  master --squash
```

To pull in changes, see `pull-deps.sh` script in the theme.