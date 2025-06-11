---
title: "Compliance Frameworks ADR 007: External Custom Requirements"
toc_hide: true
---

## Context

Allow users to create controls to expand on what GitLab offers by default.

## External Requirements

- Since we can't reliably predict what kinds of data will be useful for external
  services, we will initially start out by pinging external services with just
  project settings attached.
- To avoid complicating role design and needing to control privileges
  specifically for external controls, we will use the shared HMAC secret for
  authentication.

## Constraints

1. We aim to use the built-in delayed worker execution in Sidekiq to handle defaulting ending status checks to
   fail after the timeout is hit. In case of an incident where the worker queue list would have to be
   cleared, we accept that there would be controls in pending state (for longer than the regular timeout)
   until the next regular schedule triggers a new round of evaluation (currently set at every 12 hours).
   Worst case should be that status is stale for 11h30m (schedule - regular timeout).

## Decision

We decided to let external services post the status of their controls back to us in an async manner, allowing for
more time to let them perform more complex checks. This will be especially
helpful if they need to request additional data to evaluate (from GitLab itself
or other sources).
