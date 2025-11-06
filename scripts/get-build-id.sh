#!/bin/bash
#
# Uses `git describe --tags main` to derive a build ID. This doesn't guarantee uniqueness,
# but it's a good enough approximation for our purposes.
#
# Examples of the script output for a given git-describe output:
#   - v0.12.0-38-g53cfee7 -> 38-g53cfee7
#   - v0.12.0 -> '' (empty string when the current commit is exactly on a tag)

set -euo pipefail

# Get the git describe output from the main branch
if ! git_describe=$(git describe --tags main 2>/dev/null); then
    echo "Error running git describe: command failed" >&2
    exit 1
fi

# Extract the suffix after the tag (everything after the last version prefix)
# Format: v0.12.0-38-g53cfee7
if [[ $git_describe =~ ^v?[0-9.]+-(.+)$ ]]; then
    echo "${BASH_REMATCH[1]}"
else
    # No suffix (exactly on a tag), return empty string
    echo ""
fi

