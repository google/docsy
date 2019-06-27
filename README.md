# Docsy

Docsy is a [Hugo](https://gohugo.io/) theme for technical documentation sets, providing simple navigation, site structure, and more.

This is not an officially supported Google product. This project is currently maintained.


## Installation and prerequisites

You need a recent version of Hugo to build sites using this theme (preferably 0.45+). If you install from the [release page](https://github.com/gohugoio/hugo/releases), make sure to get the `extended` Hugo version which supports SCSS. Alternatively, on macOS you can install Hugo via Brew.

You'll also need `PostCSS` to create the final CSS assets when building your site. You can install it locally with:

```
npm install
````

To use a local version of the theme files, clone the repo using:

```
git clone --recurse-submodules --depth 1 https://github.com/google/docsy.git
```


## Usage and documentation

You can find an example project that uses Docsy in the [Docsy Example Project repo](https://github.com/google/docsy-example). The Docsy Example Project is hosted at [https://goldydocs.netlify.com/](https://goldydocs.netlify.com/).

To use the Docsy theme, you can either:

* Copy and edit the example project’s repo, which will also give you a skeleton structure for your top-level and documentation sections, or
* Specify the Docsy theme like any other [Hugo theme](https://gohugo.io/themes/installing-and-using-themes/)
 when creating or updating your site. This gives you all the theme-y goodness but you’ll need to specify your own site structure.

Docsy also has its own user guide (using Docsy, of course!), which you can find at [https://docsydocs.netlify.com/](https://docsydocs.netlify.com/). Alternatively you can use Hugo to generate and serve a local copy (also useful for testing local theme changes), making sure you have installed all the prerequisites listed below:

```
git clone --recurse-submodules --depth 1 https://github.com/google/docsy.git
cd docsy/userguide/
hugo server --themesDir ../..
```

Note that you need the `themesDir` flag because the site files are inside the theme repo.

You can find out much more about using Docsy in the [user guide](https://docsydocs.netlify.com/).

