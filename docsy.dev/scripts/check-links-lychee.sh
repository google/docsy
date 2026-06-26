#!/bin/bash
#
# Run lychee over a built site's output under ./public, resolved to an absolute
# path (public/ may be a symlink). Bridges a GitHub token from the `gh` CLI when
# GITHUB_TOKEN isn't already set: lychee reads GITHUB_TOKEN (not gh's stored
# credentials), and a token raises the github.com rate limit. CI provides
# GITHUB_TOKEN directly. Extra args pass through to lychee.
#
# Usage: scripts/check-links-lychee.sh [lychee args...]

set -e
cd "$(dirname "$0")/.."

command -v lychee >/dev/null || {
  echo '[help] lychee not found. Install: https://github.com/lycheeverse/lychee#installation' >&2
  exit 1
}

public="$(cd public && pwd -P)"

# Resolve a GitHub token from gh when one isn't already in the environment, and
# pass it to lychee only (don't leak it into this script's environment).
token="${GITHUB_TOKEN:-}"
if [ -z "$token" ] && command -v gh >/dev/null; then
  token="$(gh auth token 2>/dev/null || true)"
fi

status=0
GITHUB_TOKEN="$token" lychee --config lychee.toml --root-dir "$public" "$@" "$public" || status=$?

# Normalize cache order (lychee writes .lycheecache nondeterministically) so
# reruns yield a byte-stable file and the committed cache diffs cleanly.
if [ -f .lycheecache ]; then
  LC_ALL=C sort -o .lycheecache .lycheecache
fi

exit "$status"
