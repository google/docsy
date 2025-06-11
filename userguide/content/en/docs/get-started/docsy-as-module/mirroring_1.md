---
title: Mirroring
description: Operations workflow page for the GitLab mirroring setup
canonical_path: "/handbook/security/customer-support-operations/workflows/gitlab/mirroring"
---

## Process

To setup mirroring in a secure and scalable way, use the following steps:

1. Login as the `gl-support-bot` user
1. Navigate to the source project
1. Add a new mirror
   - Git repository URL: `ssh://gitlab.com/full/path/to/project.git`
   - Mirror direction: `Push`
   - Authentication method: `SSH public key`
   - Username: `git`
   - Keep divergent refs: unchecked
   - Mirror branches: `Mirror only protected branches`
1. Copy SSH public key from new mirror
1. Navigate to the target project
1. Add a new deploy key (under `Settings > Repository > Deploy Keys`)
   - Title: `full/path/to/project`
   - Key: The value copied in step 4
   - Grant write permissions to this key: checked
   - Expiration date (optional): leave it blank
1. Navigate to the source project
1. Force an update on the mirror (under `Settings > Repository > Mirroring repositories`)
