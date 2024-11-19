#!/bin/bash
#
# Create empty Hugo module directories for Docsy dependencies in support of
# using Docsy as an NPM module. For details, see
# https://www.docsy.dev/docs/get-started/other-options/#docsy-npm-install-side-effect

set -e

MODULE_PATH_PREFIX=${1:-..}

echo "Will create empty directories under"
echo " MODULE_PATH_PREFIX: $MODULE_PATH_PREFIX"
echo "  which resolves to: $(cd "$MODULE_PATH_PREFIX"; pwd)\n"

# Extract module paths from go.mod file, ignoring any that start with the local module prefix
DIRECTORIES=$(grep -E '^\s+github' go.mod | awk '{print $1}')

# Create given directory if it doesn't exist
function create_directory() {
  local TARGET="$MODULE_PATH_PREFIX/$1"
  if [[ ! -e "$TARGET" ]]; then
    (set -x; mkdir -p "$TARGET")
  else
    echo "> Directory already exists: $TARGET"
  fi
}

# Iterate over each directory and create it if it does not exist
for dir in $DIRECTORIES; do
  create_directory "$dir"
done
