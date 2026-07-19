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
project's `PATH`:

```sh
npx gen-favicons static/favicon.svg static/
```

For all options, run `npx gen-favicons --help`. For the full workflow, including
how to run the CLI from a Hugo module or Git submodule install, see [Generate
favicons][docs].

[docs]: https://docsy.dev/docs/content/iconsimages/#generate-favicons
[imagemagick]: https://imagemagick.org
[partial]: https://docsy.dev/docs/content/iconsimages/#add-your-favicons
