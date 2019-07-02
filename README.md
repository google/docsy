# Docsy

Docsy is a [Hugo](https://gohugo.io/) theme for technical documentation sets, providing simple navigation, site structure, and more.

This is not an officially supported Google product. This project is actively being maintained.


## Prerequisites and installation

The following high-level list includes the basic prerequisites for using Docsy in your site. 

<!-- TODO: Update to docsy.dev URL -->
See the 
[Docsy Getting Started Guide](https://docsydocs.netlify.com/docs/getting-started/) for a complete list of the
prerequisites and details about the various installation options.

To use the Docsy theme in your site, you must meet the following prerequisites:

- Install a recent release of the Hugo "extended" version (we recommend version 0.53 or later). If you install from the 
  [release page](https://github.com/gohugoio/hugo/releases), you must ensure to download the `hugo_extended` version 
  which supports SCSS.

- Get the Docsy theme:

  - (Recommended) Start with the Docsy Example project and use Docsy as a submodule. If you clone the Docsy Example site, 
    you can modify and customize a pre-configured site, into your own Docsy themed site. 
    [Learn more...](https://github.com/google/docsy-example)
  
  - Add docsy to your exsiting site. You can either add Docsy as a submodule, or clone the Docsy repo into your site.
    See the complete list of [Docsy installation options](https://docsydocs.netlify.com/docs/getting-started/) .
  
    For example, to clone Docsy into the `theme` directory of your project, you run the following command from 
    your project's root directory:
    
    ```
    git clone --recurse-submodules --depth 1 https://github.com/google/docsy.git themes/docsy
    ```

- Install `PostCSS` so that the site build can create the final CSS assets. You can install it locally by running 
  the following commands from the root directory of your project:

  ```
  sudo npm install -D --save autoprefixer
  sudo npm install -D --save postcss-cli
  ```

## Usage and documentation


<!-- TODO: Update to docsy.dev URL -->
You can find an example project that uses Docsy in the [Docsy Example Project repo](https://github.com/google/docsy-example). The Docsy Example Project is hosted at [https://goldydocs.netlify.com/](https://goldydocs.netlify.com/).

To use the Docsy theme, you can either:

* Copy and edit the example project’s repo, which will also give you a skeleton structure for your top-level and documentation sections, or
* Specify the Docsy theme like any other [Hugo theme](https://gohugo.io/themes/installing-and-using-themes/)
 when creating or updating your site. This gives you all the theme-y goodness but you’ll need to specify your own site structure.


<!-- TODO: Update to docsy.dev URL -->
Docsy also has its own user guide (using Docsy, of course!), which you can find at [https://docsydocs.netlify.com/](https://docsydocs.netlify.com/). Alternatively you can use Hugo to generate and serve a local copy (also useful for testing local theme changes), making sure you have installed all the prerequisites listed below:

```
git clone --recurse-submodules --depth 1 https://github.com/google/docsy.git
cd docsy/userguide/
hugo server --themesDir ../..
```

Note that you need the `themesDir` flag because the site files are inside the theme repo.

<!-- TODO: Update to docsy.dev URL -->
You can find out much more about using Docsy in the [user guide](https://docsydocs.netlify.com/).

