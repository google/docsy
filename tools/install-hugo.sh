#!/bin/bash
#
# Install the hugo-extended NPM package if not already present.

set -e

PKG_JSON=${1:-package.json}

if ! npm ls hugo-extended; then
  _HUGO_EXTENDED_PKG=`perl -ne 'print "$1\@$2" if /"(hugo-extended)":\s*"\D*(.+?)"/' $PKG_JSON`
  (set -x && npm install --save-exact -D $_HUGO_EXTENDED_PKG --omit=optional)
fi
