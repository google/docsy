---
title: Duo Chat case scenarios for support
description: "This documentation page provides an overview of common use cases for leveraging artificial intelligence (AI) to enhance and streamline support operations. It aims to help support teams and managers understand how AI can be effectively applied to solve various challenges in customer service, technical support, and user assistance."
category: AI
---

## Overview

Example use case scenarios that demonstrate how we can leverage Duo Chat in the Support team.

### Rephrasing

If a ticket is difficult to comprehend due to complexity or language barriers, we can prompt Duo Chat to rephrase the request.

#### Prompt

Please rephrase the following: "Detached HEAD state post-rebase causing phantom commits to resurface during fetch, leading to divergent branch tips despite clean working tree. Bisect fails to isolate culprit."

#### Duo Chat Output

After performing a rebase operation, the repository entered a detached HEAD state. During a subsequent fetch operation, some previously discarded or "phantom" commits unexpectedly resurfaced, causing the branch tips to diverge from the expected state, even though the local working tree was clean and up-to-date. Attempts to use the Git bisect tool to identify the commit that introduced the issue were unsuccessful.

### Issue searching

It can be difficult to think of highly accurate phrases when searching GitLab issues, specifically when looking for bugs.

#### Prompt

This is a bug report that was sent to us.  Please provide a search phrase that I can use to see if it already exists in our issues.

#### Duo Chat output

"Service account token expiration after rotation"

This search phrase captures the key elements of the bug:

1. It's about service accounts
2. It involves token expiration
3. The issue occurs after token rotation

You might also try variations like:

- "Service account non-expiring token rotation"
- "Forced expiration on service account token rotation"
- "Service account token loses non-expiring status after rotation"
