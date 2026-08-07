#!/bin/sh
#
# Predicate: succeed only when the working tree has no change at all --
# staged, unstaged, or untracked. `git diff --exit-code` alone is blind to
# staged and untracked files, and `git status` has no exit-code mode.

out="$(git status --porcelain --untracked-files=all)"
[ -z "$out" ] || { echo "$out" >&2; exit 1; }
