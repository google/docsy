#!/bin/bash
#
# Install the hugo-extended NPM package if not already present.

set -e

PKG_JSON=${1:-package.json}

if ! npm ls hugo-extended; then
  _HUGO_EXTENDED_VERS=`node -p "require('./$PKG_JSON').config.hugo_version"`
  set -x
  if ! npm install --save-exact -D hugo-extended@$_HUGO_EXTENDED_VERS --omit=optional; then
    echo "Trying fork instead:"
    npm install --save-exact -D chalin/hugo-extended#v$_HUGO_EXTENDED_VERS --omit=optional
  fi
fi

# cSpell:ignore chalin
