#!/bin/bash
#
# Creates a build ID from `main` using the latest semver tag on `main` as a base,
# and the parts returned by `git describe --tags` over the current branch.
#
# Example, from:
#   - main at v0.14.0 (617b5960)
#   - `git describe --tags` v0.14.0-1-g8047f659
#   We get: 0.14.1-dev+001-over-main-617b5960

set -euo pipefail

# Get the latest semver-like tag from main.
if ! base_tag=$(git describe --tags --abbrev=0 --match 'v[0-9]*.[0-9]*.[0-9]*' main 2>/dev/null); then
  echo "Error: couldn't find a semver tag on main" >&2
  exit 1
fi

# Parse the version and compute next patch.
version="${base_tag#v}"
IFS=. read -r major minor patch <<<"${version}"
next_patch=$((patch + 1))

# Count commits atop the base tag on main, then shift to 1-based and zero-pad.
commit_count=$(git rev-list --count --first-parent "${base_tag}..main")
build_num=$((commit_count + 1))
build_num_padded=$(printf "%03d" "${build_num}")

# Pin the base to the current main tip hash.
main_sha=$(git rev-parse --short=8 main)

echo "${major}.${minor}.${next_patch}-dev+${build_num_padded}-over-main-${main_sha}"
