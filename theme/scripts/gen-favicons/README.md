# gen-favicons

<!-- markdownlint-disable no-docsy-dev-external-urls -->

Generate the raster favicons that Docsy's [favicons partial][partial] discovers
— `favicon.ico`, the `favicon-NxN.png` variants, and `apple-touch-icon.png` —
from a single source SVG. Hugo can't rasterize SVG or write `.ico`, so these are
produced ahead of time with [ImageMagick][].

For the workflow, see [Generate favicons][docs]. For all options, run the CLI
with `--help`.

[docs]: https://docsy.dev/docs/content/iconsimages/#generate-favicons
[imagemagick]: https://imagemagick.org
[partial]: https://docsy.dev/docs/content/iconsimages/#add-your-favicons
