---
title: Audits
description: Operations workflow for audits
canonical_path: "/handbook/security/customer-support-operations/workflows/audits"
---

## What are audits

Audits are what we call the process (and core responsibility) that involves reviewing who has what access to various platforms.

## Why do we perform audits

There are a good number of reasons that could be made for doing audits, but the biggest ones for us are:

- Ensure no security issues are occurring in the agent/user space.
- Ensure we have accurate information for procurements and renewals.
- Ensure we follow best practices for reviewing who is using the various systems we manage.

## How to perform an audit

On the 1st day of each quarter, issues will be generated via our [System Audits](https://gitlab.com/gitlab-support-readiness/system-audits) project. The schedule pipeline there will do many checks and verifications for us and generate issues with the reports of what it founds. The ones the issues are assigned to are responsible for reviewing the found results and acting on any items that need to be rectified.

## What is checked for each audit

- Calendly
  - Number of people with Owner role is 1
  - All members of Customer Support Operations are admins
  - No one outside of Customer Support Operations are admins
  - All Support team members have accounts
  - The calendly URL in the support-team.yaml is correct for each person
  - No one outside of Support team members have accounts
- GitLab
  - Memberships for gitlab-support-readiness/all-readiness
  - Memberships for gitlab-support-readiness/all-developers
  - Memberships for gitlab-support-readiness/all-reporters
  - Memberships for gitlab-support-readiness/readiness-us-gov-only
  - Memberships for gitlab-support-readiness/developers-us-gov-only
  - Memberships for gitlab-support-readiness/reporters-us-gov-only
- Zendesk Global
  - All Support team members have accounts
  - Report all full agents outside of Support team members that have accounts
  - The Zendesk data in the support-team.yaml is correct for each person
  - Checks for any agents in the suspended state
- Zendesk US Government
  - All Support team members with US Government focus have accounts
  - Report all full agents outside of Support team members with US Government focus that have accounts
  - The Zendesk data in the support-team.yaml is correct for each person
  - Checks for any agents in the suspended state
