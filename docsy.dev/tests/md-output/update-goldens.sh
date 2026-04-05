#!/usr/bin/env bash
# Refresh golden files from the latest build output.
# Reads goldens.json as the manifest of files to update.

set -euo pipefail
cd "$(dirname "$0")"

for path in $(node -e "
  const m = JSON.parse(require('fs').readFileSync('goldens.json','utf8'));
  m.forEach(e => console.log(e.path));
"); do
  cp "../../public/$path" "goldens/$path"
  echo "updated: goldens/$path"
done
