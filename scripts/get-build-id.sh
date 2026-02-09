#!/bin/bash
#
# Uses `git describe --tags main` to derive a build ID. This doesn't guarantee uniqueness,
# but it's a good enough approximation for our purposes.
#
# Examples of the script output for a given git-describe output:
#   - v0.12.0-38-g53fee71 -> 38-g53fee71-or-later-commit
#   - v0.12.0 -> '' (empty string when the current commit is exactly on a tag)

set -euo pipefail

# Get the git describe output from the main branch
if ! git_describe=$(git describe --tags main 2>/dev/null); then
  echo "Error running git describe: command failed" >&2
  exit 1
fi

# Extract the suffix after the tag (everything after the last version prefix)
# Format: v0.12.0-38-g53fee71
if [[ $git_describe =~ ^v?[0-9.]+-(.+)$ ]]; then
  commit_hash="${BASH_REMATCH[1]}"
  # Our git-describe based version IDs are always one or more commit hashes
  # behind the actual commit hash, so add a suffix to indicate that.
  echo "${commit_hash}-or-later-commit"
else
  # No suffix (exactly on a tag), return empty string
  echo ""
fi
