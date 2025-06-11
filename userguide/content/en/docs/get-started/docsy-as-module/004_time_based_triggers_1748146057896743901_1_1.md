---
title: "Compliance Frameworks ADR 004: Time Based Triggers"
toc_hide: true
---

## Context

As [outlined previously](./001_triggering_checks.md), we decided to enqueue Sidekiq workers for processing
compliance with framework requirements and their checks. In the previous ADR it was decided to trigger a compliance
evaluation when toggling relevant project or group settings, however there are several disadvantages to using such an
approach.

### Challenge 1: Requirements that do not map directly to settings

Certain requirements do not map 1-1 with project or group settings, for example ensuring all vulnerabilities
have been triaged within a 30-day SLO. To perform such a check we need to evaluate a time-based sliding window,
which requires enqueuing the compliance evaluation on recurring basis.

### Challenge 2: Identifying settings to tie to callbacks

By relying on individual settings we can either (1) evaluate compliance with any settings modification or (2) maintain a
mapping of compliance-relevant settings.

Tying evaluation to any settings modification leads to unnecessary evaluations. Maintaining a setting mapping adds
a maintenance burden.

### Challenge 3: Application load spikes

By relying on project setting modifications we can experience variable load patterns on our infrastructure, for example
updating a group setting with 100,000 projects would lead to 100,000 enqueued evaluations. By relying instead on a time-based
syncing mechanism, we can eliminate the burstiness by having more predictable traffic patterns and controlling the concurrency
of the evaluation workers.

## Decision

Instead of using Sidekiq workers that rely solely on setting modification callbacks, we decided to perform recurring
project compliance evaluations via a scheduled cron worker. An initial execution will be performed when a compliance framework is
first applied to a project, and then via cron for subsequent evaluations.

The frequency of the cron evaluation worker will initially be set at 12hour intervals (i.e. a given project is evaluated
twice a day against each framework to which it's associated).
