#!/bin/bash

unsafe_hugo_env=(
  HUGO_BIN_PATH
  HUGO_FORCE_STANDARD
  HUGO_MIRROR_BASE_URL
  HUGO_NO_EXTENDED
  HUGO_OVERRIDE_VERSION
  HUGO_SKIP_CHECKSUM
  HUGO_SKIP_DOWNLOAD
  HUGO_SKIP_VERIFY
)
for name in "${unsafe_hugo_env[@]}"; do
  if [ -n "${!name:-}" ]; then
    echo "$name must be unset for the pinned Hugo rebuild" >&2
    exit 1
  fi
done

attempt=1
for delay in 0 2 5 10; do
  if [ "$delay" -gt 0 ]; then
    echo "Retrying Hugo install in ${delay}s..."
    sleep "$delay"
  fi

  echo "Hugo install attempt ${attempt}/4"
  if npm run __rebuild:hugo && npm run -s _check:hugo; then
    exit 0
  fi

  attempt=$((attempt + 1))
done

echo "Hugo install failed after 4 attempts" >&2
exit 1
