#!/bin/bash
#
# Create empty Hugo module directories for Docsy dependencies in support of
# using Docsy as an NPM module. For details, see
# https://www.docsy.dev/docs/get-started/other-options/#docsy-npm-install-side-effect

set -e

MODULE_PATH_PREFIX=${1:=..}

echo "MODULE_PATH_PREFIX:\n  $MODULE_PATH_PREFIX, which resolves as"
echo "  $(cd "$MODULE_PATH_PREFIX"; pwd)"

TARGET="$MODULE_PATH_PREFIX/github.com/FortAwesome/Font-Awesome"

if [[ ! -e "$TARGET" ]]; then
  (set -x; mkdir -p "$TARGET")
fi

TARGET="$MODULE_PATH_PREFIX/github.com/twbs/bootstrap"

if [[ ! -e "$TARGET" ]]; then
  (set -x; mkdir -p "$TARGET")
fi
