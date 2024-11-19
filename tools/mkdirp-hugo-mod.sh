#!/bin/bash
#
# Create empty Hugo module directories for Docsy dependencies in support of
# using Docsy as an NPM module. For details, see
# https://www.docsy.dev/docs/get-started/other-options/#docsy-npm-install-side-effect

set -e

DIRECTORIES=(
  "github.com/FortAwesome/Font-Awesome"
  "github.com/twbs/bootstrap"
)

MODULE_PATH_PREFIX=${1:-..}

echo "Will create empty directories under"
echo " MODULE_PATH_PREFIX: $MODULE_PATH_PREFIX"
echo "  which resolves to: $(cd "$MODULE_PATH_PREFIX"; pwd)\n"

# Create given directory if it doesn't exist
function create_directory() {
  local TARGET="$MODULE_PATH_PREFIX/$1"
  if [[ ! -e "$TARGET" ]]; then
    (set -x; mkdir -p "$TARGET")
  else
    echo "> Directory already exists: $TARGET"
  fi
}

for dir in "${DIRECTORIES[@]}"; do
  create_directory "$dir"
done
