# Contributing to InferESG

Welcome to InferESG! We appreciate your interest in contributing.
Before you get started, please take a moment to review this guide.

NOTE - this currently refers to the Parent Project InferGPT / LLM. We will update on the InferESG fork in the near future.

## Ways to Contribute

See the [project Kanban board](https://github.com/users/WaitThatShouldntWork/projects/1) for issues that can be worked on. 
Be sure to include as much detail as possible, including steps to reproduce the issue.

## Branching

Development should follow a consistent branching pattern. 
Major milestones are tracked under a parent `release/<release-desc>` branch, which is merged into using `feature/<change-desc>` and `bugfix/<bug-desc>` branches.

```
- main
  - release/goal-bot
    - feature/create-director
    - feature/initialise-frontend
    - bugfix/change-markdown-file-link
```

Branch protection rules in place include
- All branches named `release`
  - must have 2 approvals before merging into
  - cannot be force pushed to 
  - cannot be deleted
- All branches named `feature`
  - must have 2 approvals before merging into
  
**Please branch off the current `release/` branch**. 
New work should be under a new branch prefixed with `/feature`, excluding bugfixes which should be against branches prefixed with `/bugfix`.

## Backend

Backend changes should follow the PEP-8 Python code format. 
Please run `pycodestyle /backend` and ensure you have no warnings before raising a PR.
