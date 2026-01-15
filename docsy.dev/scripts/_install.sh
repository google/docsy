#!/bin/bash
#
# Private script used by CI/CD workflows to install NPM packages necessary for
# the website and theme.
#
# Since docsy.dev is a workspace of the Docsy repo root, we only need to install
# the Docsy repo root dependencies. That will automatically install the
# dependencies for docsy.dev.

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

# Temporary while we're transitioning to our new build configuration.
if [ ! -e public ]; then
    ln -s docsy.dev/public .
else
    echo "INFO: public directory already exists." >&2
fi

echo "Installing NPM packages for Docsy website and theme..."
exec npm install

# cSpell:ignore docsy
