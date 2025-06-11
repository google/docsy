---
title: Okta Group Rule Nomenclature
---

## Overview

Okta Groups Rules need to follow standardized naming conventions for better discovery, management, and auditing.

### Guide

When appropriate, a group rule name should be the same as the group it manages membership to.

> See [Okta Group Nomenclature](/handbook/security/corporate/systems/okta/group/nomenclature/) for more information about naming syntax.

**Example:**

- Group Rule: `app.google_worskpace.employees`
  - conditions: `user.userType=="Employee"`
  - groups: `app.google_workspace.employees`

When a group rule manages membership for multiple groups, the group rule name should descriptively and succinctly describe the group rule's purpose.

**Example:**

- Group Rules: `Corporate Security Department`
  - conditions: `user.department=="Corporate Security"`
  - groups: `dept.corporate_security`,`div.security`,`app.gitlab.corporate_security`
