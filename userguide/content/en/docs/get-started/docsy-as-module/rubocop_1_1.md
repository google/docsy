---
title: "RuboCop"
---

[RuboCop](https://rubocop.org/) is used for running static code analysis on your [Ruby](https://www.ruby-lang.org/en/) code.

## "Magic" one-liners

### RuboCop-ing a set of files

You can combine the tips about listing files on the [Git page](/handbook/tools-and-tips/git/#listing-files) with RuboCop.

- To RuboCop the current commit - `git diff-tree --no-commit-id --name-only -r HEAD --diff-filter AMT | xargs bundle exec rubocop`
- To RuboCop the working tree changes - `git diff --name-only --diff-filter AMT | xargs bundle exec rubocop`
- To RuboCop all of the changes from the branch - `git diff --name-only master --diff-filter AMT | xargs bundle exec rubocop`
