---
title: Hugo upgrade plan
date: 2026-06-11
status: draft
---

## Upgrade summary

### 0.158.0

For the plan, see [`0.158.0.md`](./local/upgrades/0.158.0.md).

- **Current baseline:** Hugo extended 0.157.0, pinned in:
  - `package.json` → `config.hugo_version` (used by
    `docsy.dev/scripts/install-hugo.sh`)
  - `docsy.dev/package.json` → `hugo-extended` devDependency
  - `docsy.dev/config/_default/hugo.yaml` → `params.hugoMinVersion`
    (`&hugoMinVersion`, also feeds `module.hugoVersion.min` for the site)

#### Status: complete (pending review)

- Pins bumped to 0.158.0; site config `languageName` → `label`; full test suite
  and minified-production spot checks pass. Smoke tests pass for all 3 site
  flavors, re-verified against the pushed branch so the theme changes were
  exercised.
- **Theme min Hugo version raised to 0.158.0** (`theme/theme.toml`,
  `theme/hugo.yaml`) — a 0.16 breaking change — and all deprecated language APIs
  migrated in theme templates (`Lang` → `Name`, `LanguageName` → `Label`,
  `LanguageDirection` → `Direction`), including the 0.156-era `.Site.Languages`
  (navbar-lang-selector, via `hugo.Sites`) and `.Site.AllPages`
  (offline-search-index) usages. Builds now log zero deprecation notices at
  `--logLevel info`.
- User-guide examples updated (`language.md`, `basic-configuration.md`);
  changelog updated with breaking-change entry and thanks to @deining (#2594,
  #2578).
