---
title: Style guide
description: Writing and formatting conventions for Docsy project documentation.
# Maintainer note: this is partly an experiment to see to what degree
# agents can help support enforcing this style guide.
---

This project follows
[Google's developer documentation style guide](https://developers.google.com/style/),
and uses Prettier and Markdownlint to enforce basic formatting rules.

## Front matter

- Do not quote string values unless doing so would otherwise cause ambiguity or
  unintended type interpretation.
- Drop `linkTitle` when it is the same as `title`.

## Content

For lists:

- Use periods when list items are complete sentences (including imperative
  steps).
- Omit periods when list items are fragments, labels, or link-only bullets.
- Keep punctuation consistent within each list. When this isn't possible, ask
  the author how they prefer reworking the list item text: e.g., by making all
  sentences complete.
