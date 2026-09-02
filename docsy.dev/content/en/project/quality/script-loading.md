---
title: Script loading
description:
  The golden, dispatch, loop-contract, and runtime nets, and how to refresh
  their goldens
---

<span class="badge bg-info text-bg-info">As of Docsy 0.18.0</span>

Four complementary nets pin the script-loading subsystem ([design][],
[implementation][]). The first three run in `npm run test:repo`; the runtime net
runs in `npm run test:visual`.

## Golden net

[`scripts-golden.test.mjs`][golden-test] pins, across fixture configurations:

- the rendered **script region** of selected pages, and
- **every locally built script**, byte-exact.

Fixture builds, region extraction, and the comparison form live in
[`lib/scripts-goldens.mjs`][goldens-lib]. The net was committed and verified
green against untouched `main` before the `scripts.html` decomposition, so the
refactor's no-output-change claim is machine-checked, not asserted.

The goldens are committed. After a reviewed, intended output change, refresh
them with:

```sh
npm run update:scripts-goldens
```

## Dispatch net

[`scripts-dispatch.test.mjs`][dispatch-test] pins the dispatcher's page-flag
wiring: the `.Page.Store`-gated partials (Mermaid, KaTeX) are dispatched on
flagged pages only. The real partials fetch remote assets at build time, so
fixture marker overrides stand in for them; what's pinned is exactly the
gate-to-partial wiring, offline.

## Loop-contract tests

[`plugins.test.mjs`][loop-test] pins the plugin loop's registry contract:
emission with `@params`, `enable`/`defer`/`pageGate` handling, both companions,
shape-guard warnings, name coercion, and fingerprint distinctness (duplicate
registrations publish distinct builds, in development too). Theme-plugin
shadowing gets its pin when the first theme plugin ships.

## Runtime net

[`js-runtime.test.mjs`][runtime-test] loads representative fixture pages in a
real browser and asserts that no uncaught exception or console error fires,
alongside behavior probes (search, diagrams, navbar). Markup and visual goldens
can't see JS runtime breakage -- a missing global, a botched conversion -- but
this net can, cheaply ([#1436][]).

Particulars:

- Two fixture variants cover both search bundles: `scripts.html` ships
  `offline-search.js` or `search.js`, never both.
- Pages load their real CDN script dependencies, so the net needs network
  access. Failed resource loads are filtered from the console tally: they're
  environment noise, and any JS breakage they cause still surfaces as a page
  error.

## Red-proof rationale

A net that passes for the wrong reason -- building nothing, matching an empty
region -- is worse than a red one: it hides breakage behind green. Each net
proves its signal:

- Every net was made to fail against a deliberately broken input before being
  trusted.
- Zero-output cases are asserted against: a golden's script region must be
  non-empty.
- The runtime net carries a built-in structural red-proof: an uncaught page
  exception must surface as the error collector's exact tally.

[#1436]: https://github.com/google/docsy/issues/1436
[design]: /project/design/script-loading/
[dispatch-test]:
  https://github.com/google/docsy/blob/main/tests/fixture-site/scripts-dispatch.test.mjs
[golden-test]:
  https://github.com/google/docsy/blob/main/tests/fixture-site/scripts-golden.test.mjs
[goldens-lib]:
  https://github.com/google/docsy/blob/main/tests/fixture-site/lib/scripts-goldens.mjs
[implementation]: /project/implementation/script-loading/
[loop-test]:
  https://github.com/google/docsy/blob/main/tests/fixture-site/plugins.test.mjs
[runtime-test]:
  https://github.com/google/docsy/blob/main/tests/visual/js-runtime.test.mjs
