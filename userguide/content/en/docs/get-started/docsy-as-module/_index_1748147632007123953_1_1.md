---
title: Okta Group Nomenclature
---

## Overview

Okta Groups need to follow standardized naming conventions for better discovery, tracking, and automation potential.

### Syntax for user-metadata groups

`{department_slug}.{functional_team_slug}.{specific_role_if_applicable}`

**Example:** `sales.account_exec.amer`

### Syntax punctuation

- periods (.) as separators
- underscores (_) for spaces
- not using hyphens (-) or camelCase

### App assignments groups

`app.{system}.{environment}.{role/permission}`

**Example:** `app.salesforce.prod.account_exec_emea`

### App approver group

`corpsys.approver.{system}`

**Example:** `corpsys.approver.salesforce`

### App provisioner group

`corpsys.provisioner.{system}`

**Example:** `corpsys.provisioner.salesforce`
