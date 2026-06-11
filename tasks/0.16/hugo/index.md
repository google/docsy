---
title: Hugo upgrade plan
date: 2026-06-11
status: complete (pending review)
---

## Upgrade summary

### 0.158.0

Detailed plan: `local/upgrades/0.158.0.md` — a maintainer-local file
([`tasks/**/local`](../../../.gitignore) paths are not committed).

- **Previous baseline:** Hugo extended 0.157.0, pinned in:
  - `package.json` → `config.hugo_version` (used by
    `docsy.dev/scripts/install-hugo.sh`)
  - `docsy.dev/package.json` → `hugo-extended` devDependency
  - `docsy.dev/config/_default/hugo.yaml` → `params.hugoMinVersion`
    (`&hugoMinVersion`, also feeds `module.hugoVersion.min` for the site)

#### Status

- **PR [#2647](https://github.com/google/docsy/pull/2647) open** against
  google/docsy (contributes to #2593).
- Pins bumped to 0.158.0; site config `languageName` → `label`; full test suite
  and minified-production spot checks pass. Smoke tests pass for all 3 site
  flavors, re-verified against the pushed branch so the theme changes were
  exercised.
- **Theme min Hugo version raised to 0.158.0** (`theme/theme.toml`,
  `theme/hugo.yaml`) — a 0.16 breaking change — and all deprecated language APIs
  migrated in theme templates. For the API rename details, see the
  [changelog](/project/about/changelog/).
- User-guide examples updated (`language.md`, `basic-configuration.md`);
  changelog updated with breaking-change entry and thanks to @deining (#2594,
  #2578).
- Automated guards added under `docsy.dev/tests/` (run via
  `npm run test:extra`): `test:hugo-build` fails the build on any Hugo
  deprecation notice (with a seeded-deprecation sanity case), and
  `test:alt-site` validates the offline-search index (entry count, shape, en+fr
  coverage). Smoke tests now default to the current branch's GitHub upstream.
- Deferred: manual check of the navbar language selector (disabled entries for
  untranslated languages) when upgrading docsy-example or otel to 0.16.
