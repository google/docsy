#!/bin/bash
#
# Private script used by CI/CD workflows to install NPM packages necessary for
# the website and theme.
#
# Installs the Docsy repo-root packages (theme runtime deps + maintainer
# tooling) and then the docsy.dev packages (site-build tooling such as
# hugo-extended, autoprefixer, cross-env, …). The repo root currently has no
# `docsy.dev` workspace declared, so the two installs must be invoked
# explicitly.

set -euo pipefail

# IMPORTANT: this script must be run from the docsy.dev directory. Validate this:
if [[ $(basename "$PWD") != "docsy.dev" ]]; then
    echo "Error: _install.sh script run from the wrong directory. Run it from the docsy.dev directory." >&2
    exit 1
fi

# Change to repo root and verify we're in the correct location

cd .. || {
    echo "Error: Failed to change to parent directory" >&2
    exit 1
}

if [ ! -f package.json ] || [ ! -d docsy.dev ]; then
    echo "Error: Parent directory is not the repo root" >&2
    echo "Run _install.sh from the docsy.dev directory." >&2
    echo "You are currently in $(pwd)" >&2
    exit 1
fi

echo "Installing NPM packages for the Docsy repo root..."
npm install

echo "Installing NPM packages for the docsy.dev website..."
exec npm install -C docsy.dev

# cSpell:ignore docsy
