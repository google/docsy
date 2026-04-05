#!/usr/bin/env bash
# Refresh golden files from the latest build output.
# The goldens/ directory is its own manifest: this script walks it and copies
# the corresponding file from public/ for each golden found.

set -euo pipefail
cd "$(dirname "$0")"

find goldens -name '*.md' | while read -r golden; do
  rel="${golden#goldens/}"
  cp "../../public/$rel" "$golden"
  echo "updated: $golden"
done
