---
title: "Vue 3 Quarantined Tests Compatibility Task Group"
description: "Learn more about the Vue 3 compatibility for quarantined jest tests"
---

## Attributes

| Property | Value |
| -------- | ----- |
| Date Created | 2025-02-28 |
| Target End Date | 2025-08-31 |
| Slack | [#tg_vue3_quarantined_tests](https://gitlab.enterprise.slack.com/archives/C08FCG25CCE) |

## Context

A major effort is underway to ensure that the [GitLab](https://gitlab.com/gitlab-org/gitlab) unit tests are passing and compatible with Vue compat.
A major cause of the current failures is a compatibility issue in how tests are written.

There is no single reason for tests to fail but most of the known reasons and how to handle it were gathered under epic [#Fix failing jest unit tests for Vue.js 3 in gitlab-org/gitlab](https://gitlab.com/groups/gitlab-org/-/epics/11740) |

## Goal

Fix all tests that are currently failing due to incompatibility.

The list of tests suites that need be fixed will be maintained in this [quarantined list](https://docs.gitlab.com/development/testing_guide/testing_vue3/#quarantine-list). More user friendly representation can be found on this [page](https://gitlab-org.gitlab.io/frontend/playground/jest-speed-reporter/vue3) to keep this up to date.

The strategy for fixing these tests has been documented in the [epic](https://gitlab.com/groups/gitlab-org/-/epics/11740).

## Non-goals

* There is separate working group [Vue 3 Router 4 Test Compatibility Task Group](vue3-router4-tests.md), dedicated specifically for fixing tests with Vue router compatibility errors

## Exit Criteria

* [Tests](https://docs.gitlab.com/development/testing_guide/testing_vue3/#quarantine-list) issuing any compatibility errors fixed (where applicable, see non-goals above).

## Roles and Responsibilities

| Task Group Role | Person | Title |
| --------------- | ------ | ----- |
| DRI | Artur Fedorov | Sr. Frontend Engineer, Security Policies |
| Member | Alexander Turinske | Staff Frontend Engineer, Security Policies |
