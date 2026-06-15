# gen-favicons

<!-- markdownlint-disable no-docsy-dev-external-urls -->

Generate the raster favicons that Docsy's [favicons partial][partial] discovers
— `favicon.ico`, the `favicon-NxN.png` variants, and `apple-touch-icon.png` —
from a single source SVG. Hugo can't rasterize SVG or write `.ico`, so these are
produced ahead of time with [ImageMagick][].

## Requirements

- [ImageMagick][] (the `magick` command) on your `PATH`.
- A source `favicon.svg` (or any SVG).

## Usage

For a site that installs Docsy as an npm package, the command is on your
project's `PATH`. Save your source SVG as `static/favicon.svg` so the theme
links it directly, then write the raster icons alongside it:

```sh
npx gen-favicons static/favicon.svg static/
```

For a Hugo module or Git submodule install, run the CLI directly:

```sh
node path/to/docsy/scripts/gen-favicons/cli.mjs static/favicon.svg static/
```

The second argument is the output directory (default: the current directory);
point it at your site's `static/` so the icons publish at the site root, where
browsers and the favicons partial expect them.

Run `gen-favicons --help` for the icon sizes you can choose and all other
options.

[partial]: https://docsy.dev/docs/content/iconsimages/#add-your-favicons
[imagemagick]: https://imagemagick.org
