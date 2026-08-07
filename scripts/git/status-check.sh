#!/bin/sh
#
# Fail if the working tree has any change: staged, unstaged, or untracked.
# Guards install steps, which must not touch the tree at all. For checking
# regeneration drift mid-work, use the lighter `npm run _diff:check`.

out="$(git status --porcelain --untracked-files=all)"
[ -z "$out" ] || { echo "$out" >&2; exit 1; }
