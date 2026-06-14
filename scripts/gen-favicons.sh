#!/bin/bash
#
# Generate the raster favicons that Docsy's default favicons partial discovers
# (favicon.ico and apple-touch-icon.png) from a single source SVG. Hugo cannot
# rasterize SVG or write .ico, so these are built ahead of time with ImageMagick.
# Keep your favicon.svg alongside the output; the partial links it directly.
#
# Usage:
#   scripts/gen-favicons.sh SOURCE.svg [OUTPUT_DIR]
#
# OUTPUT_DIR defaults to the current directory; point it at your site's static/.

set -euo pipefail

src="${1:-}"
out="${2:-.}"

if [[ -z "${src}" ]]; then
  echo "Usage: $0 SOURCE.svg [OUTPUT_DIR]" >&2
  exit 2
fi

if ! command -v magick >/dev/null 2>&1; then
  echo "error: ImageMagick (magick) not found; install it from https://imagemagick.org" >&2
  exit 1
fi

if [[ ! -f "${src}" ]]; then
  echo "error: source SVG not found: ${src}" >&2
  exit 1
fi

mkdir -p "${out}"
tmp="$(mktemp -d)"
trap 'rm -rf "${tmp}"' EXIT

# favicon.ico: 16/32/48, transparent.
for s in 16 32 48; do
  magick -background none "${src}" -resize "${s}x${s}" "${tmp}/ico_${s}.png"
done
magick "${tmp}/ico_16.png" "${tmp}/ico_32.png" "${tmp}/ico_48.png" "${out}/favicon.ico"

# apple-touch-icon: 180x180, opaque white. iOS masks the corners and composites
# transparency against black, so the background must be opaque.
magick -background white "${src}" -resize 160x160 \
  -gravity center -extent 180x180 -depth 8 -strip "${out}/apple-touch-icon.png"

echo "wrote: ${out}/favicon.ico ${out}/apple-touch-icon.png"
