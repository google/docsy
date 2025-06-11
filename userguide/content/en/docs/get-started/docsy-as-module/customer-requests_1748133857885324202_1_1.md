---
title: Providing assistance to GitLab.com customers during customer-based security incidents
description: Process outline on how to provide assistance to GitLab.com customers that have experienced a security incident as a the result of their implementation or use of GitLab.com
---

We at GitLab are committed to helping our customers succeed. When a GitLab.com customer reaches out for assistance with a security incident that is the result of their implementation or use of GitLab, we will do our best to assist with the investigation by providing additional information surrounding the event, if available.

## What type of assistance can GitLab provide to customers if they experience a security incident?

If a GitLab.com customer determines that the information available through the [Audit Events](https://docs.gitlab.com/ee/administration/audit_event_reports.html) feature doesn't provide sufficient information about activities taken on the customer's account, GitLab may provide reasonable assistance by performing additional log-dives under certain [conditions and requirements](#conditions-and-requirements).

## To whom does this apply?

This applies to all paying GitLab.com SaaS customers on [Premium or Ultimate](https://about.gitlab.com/pricing/) plans. See [conditions and requirements](#conditions-and-requirements) for more information.

## Who is involved in this process?

Customer Success Managers (CSMs) and GitLab Support are our customers' main contacts at GitLab. These teams will ensure that the communication with the customer takes place as efficiently as possible, will provide status updates regarding the log request, and ultimately hand out any artefacts that might result from the request to the customer.

GitLab Support handles non-complex application log requests that are within a 7-day time window from the time of the request, and which don't disclose
Personal Data, such as user names and IP addresses.

GitLab's Security Incident Response Team handles complex, extensive requests according to an internal [runbook](https://internal.gitlab.com/handbook/security/cross_functional_runbooks/customer_security_incidents/) for customer response operations. In order to maximize efficiency and provide results in a timely manner, customers will not be able to interface with the relevant security team directly during these requests. All communication with the customer is channelled through GitLab Support or the dedicated CSM.

## Process outline

1. Customer contacts GitLab Support or CSM with a request that meets the required [conditions and requirements](#conditions-and-requirements).
1. GitLab Support or CSM triggers the workflow from Slack with the command `/security` to automatically create a confidential SIRT issue.
1. This newly created SIRT issue tags `@gitlab-com/gl-security/sirt` directly. The requesting customer **must not** be added to the issue.
1. Approval from GitLab Legal `@lasayers` should only be requested if an exception is required.
1. GitLab Support or CSM verifies that the requesting customer complies with our [conditions and requirements](#conditions-and-requirements) for the request.
1. The relevant team (either GitLab Support or GitLab Security) starts working on the case, depending on the type of requests. The issue is updated with every new finding.
1. GitLab Support or CSM provides status updates to the customer based on the updates captured in the issue on a 12-hour/business day best-effort cadence.
1. Once the requested artefacts (i.e. log entries) are collected, GitLab Security and GitLab Legal review them.
1. Once reviewed and approved, GitLab Support or CSM share the artefacts with the requesting customer.
1. The team that performed the log-dive [creates an issue](https://gitlab.com/gitlab-org/gitlab/-/issues) with ~"Category:Audit Events" and ~"Enterprise Edition" labels to document the gap in [Audit Events](https://docs.gitlab.com/ee/administration/audit_event_reports.html) that forced the customer to request our assistance. This is to ensure that the missing functionality in the product is added in the future.

## Conditions and requirements

Each request for assistance should comply with the conditions outlined in this section

### Customer is on the GitLab Premium or Ultimate plan

The assistance outlined on this page only applies to paying GitLab.com customers on the [Premium or Ultimate](https://about.gitlab.com/pricing/) plans. It does not apply to free accounts, trial accounts, accounts on deprecated support plans, or accounts that are not subject to payment for other reasons.

### Account scope and ownership

Requests for assistance can only apply to the GitLab.com account that the customer owns. GitLab will not be providing assistance or information about GitLab.com accounts that the requesting customer does not own.

If a specific request applies to a GitLab.com account that is not owned by the requesting customer, a legal subpoena will be required. For such cases, the customer should reach out to [GitLab Legal](mailto:legal@gitlab.com).

### Time window and Scope of the log-dive request

At this time, GitLab is unable to perform log-dives exceeding a 1-month time window from the time of the request. The scope of the request should be specific and as narrow as possible. If it is determined by GitLab that the scope is too broad and excessive, GitLab may request for the scope to be narrowed, or inform the customer of the cost they will incur in performing the investigation.

Please note that because of the amount of logs that GitLab.com generates daily, log-dives exceeding a 7-day time window from the time of the request will take longer to complete.

### List of relevant GitLab namespaces, projects and users

The request should contain a list of specific GitLab.com resources of interest - projects, users, groups. If the list is considered excessive, GitLab will ask for the request to be re-scoped. This is to ensure that the request is handled in a timely and resource-efficient manner.

### Type of relevant events

The request should contain a list of specific GitLab.com events of interest. If the list is considered excessive, GitLab will ask for the request to be re-scoped. This is to ensure that the request is handled in a timely and resource-efficient manner.

## Expectations

### Receiving updates on the status of the request

Log-dives can be time consuming. The GitLab teams performing the log-dives will be providing updates through the designated issue. GitLab Support/Account Owner/CSM will relay the updates to the customer. Attempts to contact GitLab Security or its individuals on the status of the request will be unanswered. This applies to out-of-band communication as well (i.e. social media, personal e-mails, phone calls).

#### Access logs

Due to the volume of `access logs` generated daily on GitLab.com, we are currently not able to perform log-dives on `access logs` (i.e. HTTP requests) directly. Instead, we're relying on application logs and logs generated by other componenets of our production stack.

Information provided from logs should be redacted to ensure that we are not disclosing (i) GitLab Confidential or system information or (ii) any information pertain to accounts other than those subject to the request.

## FAQ

### What about GitLab's self-managed customers?

This process applies to GitLab.com only. GitLab is unable to produce logs for self-managed customers.

### Why is this available only to GitLab.com customers that are on Premium or Ultimate plans?

GitLab Premium or Ultimate plans provide access to the [Audit Events](https://docs.gitlab.com/ee/administration/audit_event_reports.html) feature, which should provide the required information to help advanced customers to monitor the security and health of their GitLab.com accounts. This process is an extension of that feature that will:

- Help the customers get out of a tough situation.
- Ensure that the product provides functionalities that are important to customers.
