#!/bin/sh
#
# Git hook helper used to check and update the package build ID / version.

action_name="$1"  # "commit" or "push"
hook_name="pre-$action_name"

# Skip version check if on main or release branch
current_branch="$(git branch --show-current 2>/dev/null)"
case "$current_branch" in
  main|release) exit 0 ;;
esac

if [ -n "${SKIP_VERSION_CHECK:-}" ]; then
  exit 0
fi

new_version="$(scripts/get-build-id.sh)"
output="$(npm run -s set:version -- --version "$new_version" --silent 2>&1)"
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
  echo 'Just to let you know that the package version has been updated.' >&2
  if [ "$action_name" = "push" ]; then
    echo 'Commit and push again if you are ok with the new ID.' >&2
  else
    echo 'Commit again if you are ok with the new ID.' >&2
  fi
  echo >&2
  echo "Don't want the version to be changed, maybe because this is a release" >&2
  echo "branch? Set SKIP_VERSION_CHECK=1" >&2
  echo >&2
  exit 1
fi
