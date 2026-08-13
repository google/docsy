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

retry_delays=(0 2 5 10)
attempt_count=${#retry_delays[@]}
for index in "${!retry_delays[@]}"; do
  attempt=$((index + 1))
  delay=${retry_delays[$index]}
  if [ "$delay" -gt 0 ]; then
    echo "Retrying Hugo install in ${delay}s..."
    sleep "$delay"
  fi

  echo "Hugo install attempt ${attempt}/${attempt_count}"
  if npm run __rebuild:hugo && npm run -s _check:hugo; then
    exit 0
  fi
done

echo "Hugo install failed after ${attempt_count} attempts" >&2
exit 1
