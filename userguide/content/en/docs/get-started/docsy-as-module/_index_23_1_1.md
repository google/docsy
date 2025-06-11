---
title: "Identity Access Requests"
description: "The access request process has been automated with Identity Roles and Identity Groups. This page explains the processes that are used to update the role and group policies in accessctl, or adding additional roles and groups to applications with Terraform."
---

{{% alert title="Not Live Yet" color="warning" %}}
You are viewing a preview of documentation for the future state of GitLab Identity v3 (mid 2024). See the <a href="/handbook/security/security-and-technology-policies/access-management-policy/">Access Management Policy</a> for the GitLab Identity v2 current state with baseline entitlements and access requests. See the roadmap in the <a href="https://gitlab.com/groups/gitlab-com/gl-security/identity/eng/-/roadmap?state=all&sort=start_date_asc&layout=QUARTERS&timeframe_range_type=THREE_YEARS&group_path=gitlab-com/gl-security/identity/eng&progress=WEIGHT&show_progress=true&show_milestones=false&milestones_type=ALL&show_labels=true">epics gantt chart</a>.
{{% /alert %}}

## Access Requests

If a user needs access to an application, there are several approaches:

1. The user's attributes **match the existing criteria** of a role or organization unit that has already been attached to the Okta application. Access is automatically granted without a request.

1. The **organization unit group** policy `CODEOWNER` (ex. division leader or department manager or Executive Business Assistant) can update the policy in `accessctl` to include the additional role. The manifest of users for the organization unit is automatically recalculated and the users will be added to the organization unit Okta group that has already been attached to the application.

1. The application CODEOWNER can add the additional **role group** to the application using Terraform.

This provides improved maintenance since the division and department leaders or their delegate (ex. Executive Business Administrator) centrally manage the policies for organization unit groups and which roles are members.

Since the *users* that are attached to each group are managed by `accessctl` policies and REST API calls (not Terraform), the changes to Terraform state management are far and few between which simplifies auditability.
