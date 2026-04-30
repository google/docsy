#!/bin/bash
#
# Build ID for dev versions: next patch after latest semver tag on main, plus
# commit offset and SHA. If package.json already declares a higher X.Y.Z core
# (e.g. 0.15.0-dev during release prep), that core is kept so set:version:git-info
# does not downgrade semver.
#
# Example:
#   - Tag on main: v0.14.0 — git-derived core 0.14.1 — output like:
#     0.14.1-dev+001-over-main-617b5960
#   - Same tag but package.json version 0.15.0-dev — core stays 0.15.0:
#     0.15.0-dev+001-over-main-617b5960

set -euo pipefail

base_branch="main"

# Numeric max of two X.Y.Z cores (stdout). Empty second arg → first arg.
semver_max_core() {
  local a="$1" b="$2"
  [[ -z "${b}" ]] && {
    echo "${a}"
    return
  }
  local a1 a2 a3 b1 b2 b3
  IFS=. read -r a1 a2 a3 <<<"${a}"
  IFS=. read -r b1 b2 b3 <<<"${b}"
  ((b1 > a1)) && {
    echo "${b}"
    return
  }
  ((b1 < a1)) && {
    echo "${a}"
    return
  }
  ((b2 > a2)) && {
    echo "${b}"
    return
  }
  ((b2 < a2)) && {
    echo "${a}"
    return
  }
  ((b3 > a3)) && {
    echo "${b}"
    return
  }
  echo "${a}"
}

# Get the latest semver-like tag on main.
if ! base_tag=$(git describe --tags --abbrev=0 --match 'v[0-9]*.[0-9]*.[0-9]*' "${base_branch}" 2>/dev/null); then
  echo "Error: couldn't find a semver tag on ${base_branch}" >&2
  exit 1
fi

# Parse tag and compute next patch (git-derived dev-line core).
version="${base_tag#v}"
IFS=. read -r major minor patch <<<"${version}"
next_patch=$((patch + 1))
git_core="${major}.${minor}.${next_patch}"

repo_root="$(git rev-parse --show-toplevel)"
pkg_json="${repo_root}/package.json"
pkg_core=""
if [[ -f "${pkg_json}" ]]; then
  pkg_line="$(PACKAGE_JSON="${pkg_json}" node -e "console.log(require(process.env.PACKAGE_JSON).version)" 2>/dev/null || true)"
  if [[ "${pkg_line}" =~ ^([0-9]+)\.([0-9]+)\.([0-9]+) ]]; then
    pkg_core="${BASH_REMATCH[1]}.${BASH_REMATCH[2]}.${BASH_REMATCH[3]}"
  fi
fi

core="$(semver_max_core "${git_core}" "${pkg_core}")"

# Count commits atop the base tag on main, then shift to 1-based and zero-pad.
commit_count=$(git rev-list --count --first-parent "${base_tag}..${base_branch}")
build_num=$((commit_count + 1))
build_num_padded=$(printf "%03d" "${build_num}")

# Pin the base to the current main tip hash.
release_sha=$(git rev-parse --short=8 "${base_branch}")

echo "${core}-dev+${build_num_padded}-over-${base_branch}-${release_sha}"
