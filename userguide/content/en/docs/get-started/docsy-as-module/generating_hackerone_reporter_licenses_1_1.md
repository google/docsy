---
title: Generating HackerOne Reporter Award Licenses
description: "How to generate a license for Hacker One reporter award recipients"
category: GitLab Self-Managed licenses
---

## Overview

As part of GitLab's [HackerOne program policy](https://gitlab.com/gitlab-com/gl-security/hackerone/configuration/-/blob/master/program-policy.md#L31-33), a reporter who has submitted three or more valid findings to the program is eligible to receive a one-year self-hosted Ultimate license, supporting up to five users. The request will originate from someone following the [Awarding Ultimate Licenses](/handbook/security/product-security/application-security/runbooks/hackerone-process#awarding-ultimate-licenses) runbook.

HackerOne at a corporate level has a triage team that GitLab employs for bug bounty triaging and validation.  To aid them with performing this work we issue them 2 Ultimate licenses on a yearly basis.  These licenses are generated as part of the [HackerOne Triage Team GitLab licenses](/handbook.gitlab.com/handbook/security/product-security/application-security/runbooks/hackerone-process/#hackerone-triage-team-gitlab-licenses) runbook and are sent to `analysts@managed.hackerone.com` and `analysts+1@managed.hackerone.com`.  Since the license does not change from year to year, the existing licenses can be duplicated for the purposes of the workflow.  When duplicating either of the licenses, please ensure the dates are adjusted for the year to come and the note is replaced with a link to the ticket in which the license is being requested.  As with other legacy licenses that are manually generated, each license needs to be requested in its own ticket for compliance and auditing purposes.

### Actioning the Request

The internal request will come through similar to [these](https://gitlab.zendesk.com/agent/tickets/293134) [examples](https://gitlab.zendesk.com/agent/tickets/293092) and should include:

- The contact's name, which will either be a full name OR their HackerOne 'handle'
- The contact's email, which should end with a `@wearehackerone.com` suffix.

With this information, follow the [procedure to create a new license](/handbook/support/license-and-renewals/workflows/self-managed/creating_licenses#create-a-new-license), and ensure you use the following:

- Name: (The contact's full name OR HackerOne 'handle')
- Company: `H1 Reporter Award`
- Email: (The contact's email)
- Users count: `5`
- Plan: `Ultimate`
- Trial: `Yes` (tick the checkbox)
- Starts at: (The current date)
- Expires at: (One year from the current date)
- Notes: (Include a link to the internal request ticket)

See [this generated license](https://customers.gitlab.com/admin/license/1023421) for an example of the completed license.

### Responding to the Request

Once you've generated the license, send a public response on the internal request including the requestor, who will be CC'd, confirming that the license has been generated and sent directly to the contact on the email address provided.
