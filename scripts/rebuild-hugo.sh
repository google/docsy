#!/bin/bash

attempt=1
for delay in 0 2 5; do
  if [ "$delay" -gt 0 ]; then
    echo "Retrying Hugo install in ${delay}s..."
    sleep "$delay"
  fi

  echo "Hugo install attempt ${attempt}/3"
  if npm run __rebuild:hugo; then
    exit 0
  fi

  attempt=$((attempt + 1))
done

echo "Hugo install failed after 3 attempts" >&2
exit 1
