---
title: GitLab Dedicated Switchboard Troubleshooting
category: GitLab Dedicated
description: "GitLab Dedicated Support - Switchboard"
---

## Overview

Switchboard is a portal customers use to manage their GitLab Dedicated instance. Select GitLab team members have access to Switchboard.
Read more about what the goals of Switchboard are on the [Category Direction page](https://about.gitlab.com/direction/saas-platforms/switchboard/).

## Accessing Switchboard

GitLab Support Engineers can access the [Switchboard](https://about.gitlab.com/direction/saas-platforms/switchboard/) application via [Okta](/handbook/it/okta/).

1. Log in to Okta at `https://gitlab.okta.com`
1. Search for and click on the **Switchboard (production)** app
1. Click **Sign in**
1. Under **Sign in with your corporate ID**, select **Okta**

You should now be in **Switchboard**.

During [onboarding](https://docs.gitlab.com/administration/dedicated/#onboarding-to-gitlab-dedicated-using-switchboard), GitLab Dedicated customers get access to Switchboard. Temporary credentials are sent to these customers via email. If these credentials expire, customers may open a Support ticket. Support Engineers should open a [request for help](https://gitlab.com/gitlab-com/request-for-help/-/issues/new?issuable_template=SupportRequestTemplate-Switchboard) with Switchboard.

### Customers with Dedicated Preprod deployments

GitLab Support Engineers can access [Switchboard for Preprod](https://console.gitlab-dedicated.systems/) deployments. Look for the **Switchboard Preprod Dedicated** tile in Okta.

### Password reset

There is currently no self-serve option for switchboard users to reset their passwords. This feature is being worked on in [issue 3982](https://gitlab.com/gitlab-com/gl-infra/gitlab-dedicated/team/-/issues/3982) (internal).
Until this feature is implemeted, please raise a [Request for help issue for the Switchcboard team](https://gitlab.com/gitlab-com/request-for-help/-/issues/new?issuable_template=SupportRequestTemplate-Switchboard).

## Accessing customer configuration

When launching Switchboard, you should default to the `/tenants` page with a list of tenant customers.
**Name**, **Identifier**, **Internal reference**, and **External URL** are listed in a table.
Click on **Manage** to view settings for that customer.

### Version information

Check the `Tenant Details` collapsible section.

### Maintenance schedule

Check the `Maintenance` collapsible section.

### Opensearch links

These are available to Support team members on the Tenant Overview page.

### Customer contacts

Check the `Customer Communication` section on the Tenant Overview page.

Customer CSM (formerly TAM) is also included in this section.

### AWS regions

Check the Tenant Overview page.

### View history

- Click the **Audit Logs** link at the top of the page.
- Filter for `Tenant`.
- Check the **Tenant#<tenant_id>** records to view changes.
