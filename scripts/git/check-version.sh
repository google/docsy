#!/bin/sh
# Common logic for git hooks that check package version

action_name="$1"  # "commit" or "push"
hook_name="pre-$action_name"

output="$(npm run -s fix:version -- --silent 2>&1)"
status=$?

if [ $status -ne 0 ]; then
  echo "$hook_name: action failed; aborting $action_name." >&2
  printf '%s\n' "$output" >&2
  exit $status
fi

if [ -n "$output" ]; then
  echo "$output" >&2
  echo >&2
  abort_action="$(echo "$action_name" | tr '[:lower:]' '[:upper:]')"
  echo "$abort_action ABORTED! Why?" >&2
  echo 'Just to let you know that the package build ID has been updated. ' >&2
  if [ "$action_name" = "push" ]; then
    echo 'Commit and push again if you are ok with the new ID.' >&2
  else
    echo 'Commit again if you are ok with the new ID.' >&2
  fi
  exit 1
fi

