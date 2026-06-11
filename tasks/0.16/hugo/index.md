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
