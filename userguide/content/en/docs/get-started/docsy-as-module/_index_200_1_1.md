---
title: CustomersDot revenue impacting and Salesforce error monitoring & improvements
status: proposed
creation-date: "2024-09-02"
authors: [ "@shreyasagarwal", "@aish.sub", "@vshumilo" ]
coaches:
dris: [ "@ppalanikumar", "@jameslopez" ]
owning-stage: "~devops::fulfillment"
participating-stages: []

toc_hide: true
---

<!-- This renders the design document header on the detail page, so don't remove it-->
{{< engineering/design-document-header >}}

## Summary

CustomersDot is a powerful platform designed for customers to seamlessly purchase and manage their subscriptions. For SaaS applications, CustomersDot communicates with GitLab.com through API calls to update subscription details in real-time. For self-managed (SM) applications and dedicated instances, it generates a license for installation on the customer's system. The latest version enhances this process by enabling license installation through the cloud, offering greater convenience and flexibility.

CustomersDot integrates with several third-party tools, such as [Zuora](../../../../business-technology/enterprise-applications/guides/zuora/) and Salesforce. Zuora is an end-to-end order-to-revenue SaaS platform that drives GitLab's quoting, billing, revenue collection, revenue recognition, and subscription metrics reporting. It also supports the back-office teams responsible for these operations.

## Motivation

From a SOX compliance perspective, it is crucial to identify and track any errors that occur during the purchase, update and provisioning of subscriptions within the CustomersDot application. Currently, we utilize the [Provision Tracking System](https://gitlab.com/gitlab-org/customers-gitlab-com/-/blob/de36e3ddef5c875aa2c675b3d9e0f34767a43bfc/doc/provision_tracking_system/failure_monitoring.md) to monitor the provisioning process after a subscription is created or updated. However, there is a tracking gap for certain revenue recognition-impacting errors that occur before a subscription purchase or update. It is crucial to address this gap to ensure comprehensive error tracking and improve the accuracy of revenue recognition processes.

### Goals

The goal is to deliver a tracking and monitoring system for revenue-impacting errors that occur during the purchase, update, renewal, and reconciliation flows. This will cover the following aspects of CustomersDot integrations (Zuora, Salesforce for Q3 & others in Q4 2025).

A spike issue for the proposal can be found at gitlab-org/customers-gitlab-com#10430.

* Enhanced visibility for stakeholders (Accessing different systems to verify data)
* Document edge cases
* Automated error monitoring/Alerting system
* Document fixes or processes for 3rd party errors (like Zuora unavailability etc)

## Proposal

The [Fulfillment Platform group](../../../development/fulfillment/fulfillment-platform/) currently handles the manual process of monitoring the described errors. Each week, an engineer is assigned to a [Job monitoring issue](https://gitlab.com/gitlab-org/customers-gitlab-com/-/blob/main/.gitlab/issue_templates/Job%20monitoring%20weekly.md?ref_type=heads), where they must gather a collection of errors daily by running a script. These errors are then reviewed individually to identify actionable items, such as those not related to user validation, payment method validation, or location issues. The engineer manually resolves these errors with the use of console or Admin panel.

To improve efficiency and results, we need to automate this process.

* **Develop a new system for error tracking** to improve the monitoring of provisioning and revenue recognition errors.
  * **Create a new database table** to store error logs.
  * **Add a new view in the admin panel** to display and manage these errors.
* **Enhance the codebase** to automatically store relevant errors in the new database.
* Implement **Slack notifications** to alert the team whenever a new error is encountered.
* **Automate issue creation**:
  * Generate a daily issue summarizing new errors encountered each day.
  * Generate a weekly issue summarizing all errors encountered throughout the week.
* **Set up a cron job** to run daily as an audit, tracking reconciliations and renewals that failed to process, and add them to the error log.

## Design and implementation details

### DB schema

```mermaid
erDiagram
  "ErrorMonitorings" {
    integer id PK
    type string "null:false"
    text message "null:false"
    string code
    string error_type "limit: 1000"
    string status "null:false"
    string gitlab_issue_iid
    string detailed_gitlab_issue_iid
    text backtrace
    jsonb payload
    text notes
    datetime created_at "null:false"
    datetime updated_at "null:false"
  }
```

The `error_monitorings` table is designed to store meaningful errors that are valuable for monitoring as they occur. Most of the columns are self explanatory. Taking an example of the [current logging in google cloud](https://console.cloud.google.com/logs/query;query=resource.type%3D%22gce_instance%22%0Aseverity%3DERROR%0AinsertId%3D%22va7ahf34wc3i%22;cursorTimestamp=2024-09-06T03:18:44.840Z;aroundTime=2024-09-06T03:18:44.840Z;duration=PT24H?project=gitlab-subscriptions-prod).

* `code` -> VALIDATION_ERROR
* `error_type` -> This code is not valid. Try re-entering the code from your email.
* `message` -> Subscription update failed

The `error_monitorings` table uses [Single Table Inheritance (STI)](https://martinfowler.com/eaaCatalog/singleTableInheritance.html) to store different types of errors. In Rails, the type column enables this STI pattern, allowing multiple error types to be stored in the same table.

Currently, we are using two types: 'RevenueImpact' and 'SalesforceErrors', both of which inherit from the base `ErrorMonitoring` model.

We are tagging error messages with `fulfillment_job_monitoring` to store the Revenue Impact errors within the codebase and using GCloud to look up and resolve them individually.

We are tagging Salesforce error messages with `salesforce_error_monitoring` to store the errors related to Salesforce within the codebase.

Errors will continue to be addressed individually. As soon as an error is encountered, we send an immediate notification to the designated Slack channel, through the background job, to ensure timely resolution.

#### Error states

The status column stores the state of the error encountered.

```mermaid
flowchart TD
    A[Error encounterd] -->|Save it in database| B(State - Needs Attention)
    B --> |Nothing needs to be done| D[Ignored]
    B --> |Error being looked into| F[State - In Progress]
    F --> C[Create/Link GitLab Issue, optional]
    F --> |Issue Closed| G[State - Resolved]
```

### Workflow

```mermaid
sequenceDiagram
  autonumber
  actor C as Customer
  participant CD as CustomersDot
  participant Z as Zuora
  participant ER as Error reporting System
  participant S as Slack
  participant G as GitLab
  actor E as Engineer

  C->>CD: Initiates subscription purchase/update
  CD->>Z: API callback for subscription purchase/update
  Z-->>CD: Returns error
  CD-->>C: Indicates system error
  CD->>ER: Creates error_monitoring record within database
  ER->>S: Feeds Slack notification
  E->>CD: Visits admin page & debug the error
  E->>G: Creates GitLab issue (optional)
  E->>ER: Changes Status of error_monitoring record
  par
    E->>G: Triage issue and status update
    G->>ER: Auto-updates error_monitoring record on resolution
  end
```
