# Visual-regression suite

Pixel-compares screenshots of the fixture site (see
`../fixture-site/lib/markup-goldens.mjs`) against committed goldens, per region
× viewport (desktop, mobile) × color scheme (light, dark). The goldens are
generated snapshots, not hand-written mocks (see `../fixture-site/README.md`).
Part of the semantic-classes migration's check harness: the markup goldens pin
what the templates emit; these pin what the reader sees. Two kinds of shot:

- **region crops** — the element's box plus padding, so neighbor spacing is
  covered too; a failure names the region;
- a **full-page shot** — the coarse safety net for whatever the tracked regions
  don't cover.

## Running

`npm run install:browser` (once), then `npm run test:visual`. In CI, the
`visual` job runs this suite apart from the OS build matrix: it needs a browser
install and only Linux is enforced.

Rendering differs across OSs, so goldens are keyed by platform, one subfolder
per region, under `goldens/<platform>/<region>/`:

- **`linux/` is authoritative** — it's what CI enforces (the `visual` job). A
  missing or incomplete set **fails** on Linux/CI rather than skipping.
- `darwin/` is committed as a maintainer convenience for local checks.
- Other platforms (Windows included): the suite **skips** when
  `goldens/<platform>/` doesn't exist. Opt in by generating a local, uncommitted
  baseline: `npm run update:visual-goldens` (best-effort; gitignored).

## Refreshing goldens after a deliberate visual change

- Current platform: `npm run update:visual-goldens`.
- **Linux set, from any machine**: push your branch, let the `visual` CI job
  fail on the change, then `npm run update:visual-goldens:linux` — it downloads
  the failed run's `visual-diffs` artifact and installs the actual shots as the
  Linux goldens. Review, commit, push; CI must then go green.

## Failure output

Failures write `*-actual.png` and `*-diff.png` under `tmp/visual/` (CI uploads
them as the `visual-diffs` artifact).

Comparisons are bit-exact (pixelmatch threshold 0); same-platform rendering of
the fixture is engineered deterministic (see `lib/harness.mjs`). If CI ever
shows antialiasing flake, loosen deliberately and note it here.
