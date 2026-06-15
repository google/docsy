---
title: 0.16 milestone 24 review
date: 2026-06-15
lastmod: 2026-06-15
range: v0.15.0..main
last-main-commit: f3128285
---

## Scope

Hygiene review of the [0.16.0 milestone (#24)][milestone] ahead of tagging.
Issues only (PRs excluded). As of this pass: **6 open**, **5 closed**.

## Closed (shipped in 0.16)

| Issue                                             | Resolved by                      |
| ------------------------------------------------- | -------------------------------- |
| [#2595][]: Theme should not have default favicons | [#2653][], [#2654][]             |
| [#2593][]: Hugo 0.158.0 deprecation warnings      | [#2647][]                        |
| [#2581][]: Upgrade to Hugo from 0.157.0 to latest | [#2647][], [#2648][], [#2649][]  |
| [#2598][]: Netlify badge icon returning 404       | [#2651][]                        |
| [#2431][]: Hugo 0.153+ upgrade & issues           | Closed; predecessor of [#2581][] |

## Open — disposition before/at release

| Issue                                                 | Type        | Shipping in 0.16? | Recommendation                                        |
| ----------------------------------------------------- | ----------- | ----------------- | ----------------------------------------------------- |
| [#2615][]: Release 0.16.0 preparation                 | tracker     | n/a               | Keep; close when 0.16.0 is tagged and published.      |
| [#2617][]: Finalize monorepo setup — 26Q2             | tracker     | partial (TOF)     | Keep open; remaining cleanup is post-0.16.            |
| [#2614][]: AI-agent doc consumption (tracker)         | tracker     | no (phase 2+)     | Move off the 0.16 milestone; phase 1 shipped in 0.15. |
| [#2554][]: Use 'note' role instead of 'alert'         | enhancement | no                | Reassign to a later milestone (e.g. 26Q3 / 0.17).     |
| [#2403][]: View-page URL should use `blob` not `tree` | bug         | no                | Reassign to a later milestone.                        |
| [#1987][]: i18n for dark-mode menu button             | enhancement | no                | Reassign to a later milestone.                        |

## Hygiene actions

- Before tagging, every milestone-24 issue except the release tracker [#2615][]
  should be **closed** (shipped) or **moved** to a later milestone.
- Move the three unaddressed feature/bug issues ([#2554][], [#2403][],
  [#1987][]) off 0.16 so the milestone reflects only delivered work.
- The two non-release trackers ([#2617][], [#2614][]) are meta-issues:
  - [#2617][] may stay (its 0.16 slice — the theme folder move — shipped) or
    move its open checklist items to a follow-up; decide at tag time.
  - [#2614][] has no 0.16 commits; move it to its phase-2 milestone.
- Confirm the milestone's closed list matches the [commit inventory][] and
  [issue audit][] before publishing.

[milestone]: https://github.com/google/docsy/milestone/24
[commit inventory]: commit-inventory.md
[issue audit]: issue-audit.md
[#1987]: https://github.com/google/docsy/issues/1987
[#2403]: https://github.com/google/docsy/issues/2403
[#2431]: https://github.com/google/docsy/issues/2431
[#2554]: https://github.com/google/docsy/issues/2554
[#2581]: https://github.com/google/docsy/issues/2581
[#2593]: https://github.com/google/docsy/issues/2593
[#2595]: https://github.com/google/docsy/issues/2595
[#2598]: https://github.com/google/docsy/issues/2598
[#2614]: https://github.com/google/docsy/issues/2614
[#2615]: https://github.com/google/docsy/issues/2615
[#2617]: https://github.com/google/docsy/issues/2617
[#2647]: https://github.com/google/docsy/pull/2647
[#2648]: https://github.com/google/docsy/pull/2648
[#2649]: https://github.com/google/docsy/pull/2649
[#2651]: https://github.com/google/docsy/pull/2651
[#2653]: https://github.com/google/docsy/pull/2653
[#2654]: https://github.com/google/docsy/pull/2654
