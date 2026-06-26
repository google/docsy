#!/bin/bash
#
# Run lychee over the built docsy.dev site. Resolves an absolute `public/` path
# (public/ is a symlink to the publish repo) and bridges a GitHub token from the
# `gh` CLI when GITHUB_TOKEN isn't already set: lychee reads GITHUB_TOKEN (not
# gh's stored credentials), and a token raises the github.com rate limit. CI
# provides GITHUB_TOKEN directly. Extra args pass through to lychee.
#
# Usage: scripts/check-links-lychee.sh [lychee args...]

set -e
cd "$(dirname "$0")/.."

command -v lychee >/dev/null || {
  echo '[help] lychee not found. Install: https://github.com/lycheeverse/lychee#installation' >&2
  exit 1
}

public="$(cd public && pwd -P)"

if [ -z "${GITHUB_TOKEN:-}" ] && command -v gh >/dev/null; then
  GITHUB_TOKEN="$(gh auth token 2>/dev/null || true)"
  export GITHUB_TOKEN
fi

exec lychee --config lychee.toml --root-dir "$public" "$@" "$public"
