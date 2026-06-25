---
title: CSR (0.16) — case registry
date: 2026-06-24
issue: https://github.com/google/docsy/issues/2659
# prettier-ignore
cSpell:ignore: csr doctree footgun greppable pagelinks
---

**Client-side rendering (CSR) of chrome** is the experimental build mode that
drops the repeated navbar, footer, and left-nav from the build output and
restores them in the browser. This is the **case registry**: every way a
CSR-restored page can differ from a full build — each a **case** with a stable
`CSR-NN` ID — and where a test covers it.

- **User docs:** [Client-side chrome rendering](/docs/content/csr/).
- **Tracking issue:** [#2659][].
- Tests cite their case ID in a header comment, so the ID ↔ test link is
  greppable both ways (`grep -rn CSR-13 tests/`).

IDs are stable and append-only — never reused or renumbered. **Status** is
_restored_ (matches a full build) or _deferred_ (known, not yet handled). The
**Tests** column names fixture-site tests (drop the `.test.mjs` suffix), under
`tests/fixture-site/`; `—` means no dedicated test yet.

| ID     | Case / wrinkle                                                    | Status   | Tests                              |
| ------ | ----------------------------------------------------------------- | -------- | ---------------------------------- |
| CSR-01 | `csr_enable` param normalization (env/config `"false"` footgun)   | restored | `csr-render`                       |
| CSR-02 | Kept reference instances (one navbar/footer/side-nav; donor)      | restored | `csr-render`, `csr-build`          |
| CSR-03 | Navbar restore from the home donor                                | restored | `csr-equivalence`                  |
| CSR-04 | Footer restore (verbatim, page-invariant)                         | restored | `csr-equivalence`                  |
| CSR-05 | Left side-nav restore from the section donor (+ cache)            | restored | `csr-nav`, `csr-equivalence`       |
| CSR-06 | Active state: active link + active-path + foldable reveal         | restored | `csr-nav`                          |
| CSR-07 | Non-foldable reveal (`.show` on siblings/children)                | restored | —                                  |
| CSR-08 | Cached/shared inline nav hydration (large sites, CSR off too)     | restored | `csr-nav`, `csr-cached-sidebar`    |
| CSR-09 | Navbar version selector per-page links (`version_menu_pagelinks`) | restored | `csr-selectors`, `csr-equivalence` |
| CSR-10 | Navbar language selector per-page links (prefix-swap)             | restored | `csr-selectors`                    |
| CSR-11 | Navbar cover/theme per-page traits                                | restored | `csr-cover-theme`                  |
| CSR-12 | Scoped sidebar re-root, functional (`sidebar_root_for`)           | restored | `csr-scoped`                       |
| CSR-13 | Scoped root markers (`data-sidebar-root-id`, up-icon)             | restored | `csr-scoped`                       |
| CSR-14 | Scoped root structural residual (wrapper, `ul`-level renumber)    | deferred | —                                  |
| CSR-15 | Print `_print/*` canonical URL                                    | restored | `csr-canonical`                    |
| CSR-16 | Paginated `/page/N/` canonical URL                                | restored | `csr-canonical`                    |
| CSR-17 | Out-of-tree active-path (`toc_hide`)                              | restored | `csr-out-of-tree`                  |
| CSR-18 | `no-left-sidebar` layout (`body_class`)                           | restored | `csr-no-left-sidebar`              |
| CSR-19 | Sidebar placeholder whitespace trim                               | restored | —                                  |

## Open items

- **CSR-07** (non-foldable reveal), **CSR-10** (language-link exactness), and
  **CSR-14** (scoped-root structural residual) lack dedicated unit coverage.
  CSR-14 is browser-invisible — it shows only in a serialized-HTML diff, not the
  rendered nav — and gates reinstating the docsy.dev `sidebar_root_for` example;
  a JSON doctree that re-renders the subtree would close it.
- **Donor-fetch failures** in `csr-nav.js` currently `console.warn` and leave
  the placeholder in place. A richer recovery (retry, visible fallback) is
  deferred while CSR stays experimental; revisit if CSR is promoted.
- **No end-to-end coverage** yet — a single real-browser smoke test (served CSR
  site, assert restored regions) would guard the jsdom-vs-browser gap.

[#2659]: https://github.com/google/docsy/issues/2659
