#!/bin/bash
#
# Applies the method.patch to the cached Bootstrap method and saves the patched version
# to scrollspy-method-patched.js. This file is committed and used to verify the patched
# method matches what's expected.
#
# cSpell:ignore scrollspy

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/../.." && pwd)"

CACHE_DIR="$PROJECT_ROOT/assets/_cache/bootstrap"
CACHED_METHOD_FILE="$CACHE_DIR/scrollspy-method.js"
PATCH_FILE="$CACHE_DIR/method.patch"
PATCHED_DEST_FILE="$CACHE_DIR/scrollspy-method-patched.js"

function restore_from_backup() {
  local backup_file="$1"
  cp "$backup_file" "$CACHED_METHOD_FILE"
  rm -f "$backup_file"
}

function validate_prerequisites() {
  # Check if patch command is available
  if ! command -v patch >/dev/null 2>&1; then
    echo "ERROR: 'patch' command not found" >&2
    echo "  Install it with: brew install patch (macOS) or apt-get install patch (Linux)" >&2
    exit 1
  fi

  # Check if cached method exists
  if [ ! -f "$CACHED_METHOD_FILE" ]; then
    echo "ERROR: Cached method not found: $CACHED_METHOD_FILE" >&2
    echo "  Run: npm run _cp:bs-scrollspy" >&2
    exit 1
  fi

  # Check if patch file exists
  if [ ! -f "$PATCH_FILE" ]; then
    echo "ERROR: Patch file not found: $PATCH_FILE" >&2
    exit 1
  fi
}

function main() {
  validate_prerequisites

  # Note: patch modifies files in-place, so make a backup copy first
  TEMP_BACKUP_FILE="$CACHED_METHOD_FILE.backup"
  cp "$CACHED_METHOD_FILE" "$TEMP_BACKUP_FILE"

  # Apply patch in the cache directory (patch file references scrollspy-method.js)
  # patch modifies files in-place, so scrollspy-method.js will be permanently changed
  if ! patch -p0 -d "$CACHE_DIR" < "$PATCH_FILE" >/dev/null 2>&1; then
    echo "ERROR: Failed to apply patch" >&2
    echo "  The patch may no longer be compatible with the cached method" >&2
    echo "  Review $PATCH_FILE and update it if needed" >&2
    echo "  For details, see scripts/scrollspy-patch/README.md" >&2
    restore_from_backup "$TEMP_BACKUP_FILE"
    exit 1
  fi

  # Save the patched method to output file
  cp "$CACHED_METHOD_FILE" "$PATCHED_DEST_FILE"

  # Restore original from backup copy
  restore_from_backup "$TEMP_BACKUP_FILE"
}

main "$@"
