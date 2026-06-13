# AGENTS.md — Docsy repo guide for AI agents

For detailed information about the Docsy project structure, branching model, and
release process, etc., see:

- The website content tree `docsy.dev/content/en/project/` ([project][])
- Note in particular [git-info.md][].

Agents should treat those documentation pages as the authoritative source for
project CI/CD, release process, etc.

[project]: docsy.dev/content/en/project/_index.md
[git-info.md]: docsy.dev/content/en/project/build/git-repo.md

## Code, test, and documentation conventions

- Assume that the maintainers and readers of the code you write are senior web
  developers and designers who know the site's tools, including Hugo, Bootstrap,
  etc.
- Brevity is good — in code, comments, and commit messages.
- When you write, think lean and DRY.
- Don't use comments to explain the obvious; use self-explanatory names and
  short names when the context is clear.
- This project has a long history; look for existing helpers (partials,
  shortcodes, SCSS mixins, and similar) before adding new ones.

## User guide

Enforce the [style guide][] when reviewing user guide additions or
modifications.

[style guide]: docsy.dev/content/en/project/style-guide.md
