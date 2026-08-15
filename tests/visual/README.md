# Visual-regression suite

Pixel-compares element crops of the fixture site (see
`../fixture-site/lib/markup-goldens.mjs`) against committed goldens, per region
× viewport (desktop, mobile) × color scheme (light, dark). Part of the
semantic-classes migration's check harness: the markup goldens pin what the
templates emit; these pin what the reader sees.

- **Run**: `npm run install:chrome` (once), then `npm run test:visual`.
- **Goldens** live under `goldens/<platform>/` — text rendering differs across
  OSs, so each platform compares only against its own set. The **Linux set is
  authoritative** (it's what CI enforces); other platforms are a local
  convenience.
- **Refresh** after a deliberate visual change: `npm run update:visual-goldens`
  (regenerates the current platform's set; refresh the Linux set from a Linux
  run, e.g. the CI failure artifact).
- **Failures** write `*-actual.png` and `*-diff.png` under `tmp/visual/` (CI
  uploads them as the `visual-diffs` artifact).
- Comparisons are exact (zero differing pixels, pixelmatch threshold 0.1).
  Same-platform rendering of the fixture is deterministic: off-origin requests
  (web fonts included) are blocked and animations disabled at capture time. If
  CI ever shows antialiasing flake, loosen deliberately and note it here.
