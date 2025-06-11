---
title: "git"
---

You know what `git` is. 😄

## Making sense of refs

- Get the current branch name
  - `git rev-parse --abbrev-ref HEAD`

## Listing files

- List files from the HEAD commit
  - `git diff-tree --no-commit-id --name-only -r HEAD`
- List files in the current working tree
  - `git diff --name-only`
- List files changed from `master`
  - `git diff --name-only master`

## Finding commits

- Find the merge commit for the given commit
  - `commit=$0 git rev-list $commit..HEAD --ancestry-path | grep -E $(git rev-list $commit..HEAD --first-parent | paste -s -d \"|\" -) | tail -1`

## Pushing commit

- Push your commits, but [skip executing CI pipeline](https://docs.gitlab.com/ee/ci/pipelines/#skip-a-pipeline)
  - `git push -o ci.skip`
