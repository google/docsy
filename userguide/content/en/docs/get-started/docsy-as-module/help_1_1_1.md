---
title: Database Help Workflow
description: "A basic workflow for requesting help during database related incidents or emergencies"
---

This guide is for Reliability and Support engineers to quickly and easily find the help they need on database-related emergencies.

{{% alert title="Note" color="primary" %}}
This page is intended for helping find resources during emergencies. If this isn't an emergency (IE: S1/S2 issue), instead ensure there are appropriately labeled issues so they can be triaged by the team.
{{% /alert %}}

### Non-Emergencies

1. Label your issue to be triaged by the right team:

   - For operational or configuration issues, label them `~"team::Database Reliability"`
   - For issues related to the packaged Postgres in Omnibus/Charts, label them `~"group::distribution"`
   - For application issues, label them for the team responsible for that feature.
   - If you're not sure, take a look at the guide below for help identifying the right team.

1. If the issue is blocking or you need to escalate:

   - For application issues, Post a detailed message in the channel for the team that is responsible for the related feature.
   - For operational or configuration issues, post in [#g_infra_database_reliability](https://gitlab.enterprise.slack.com/archives/C02K0JTKAHJ) (internal)
   - For issues related to the packaged Postgres in Omnibus/Charts, post in [#g_distribution](https://gitlab.enterprise.slack.com/archives/C1FCTU4BE) (internal)

### 1. Start

If the emergency is related to configuration or operations like:

- Emergencies related to operating Postgres
- Connection errors
- Replication errors
- SSL Errors

Proceed to step [2. Configuration Errors](#2-configuration-or-operational-errors)

If not, proceed to step [3. Application Errors](#3-application-errors)

### 2. Configuration or Operational Errors

If the emergency is related to an ongoing incident on gitlab.com or Dedicated customer, Follow the [DBRE Escalation Process](/handbook/engineering/infrastructure-platforms/data-access/database-framework-reliability/dbre-escalation-process/)

If the emergency is related to a self-managed customer, reach out to the [Distribution Team](../systems/distribution/) in [#g_distribution](https://gitlab.enterprise.slack.com/archives/C1FCTU4BE) (internal) who manages self-managed configuration.

### 3. Application Errors

If the emergency is related to a single query, page, or endpoint, for example:

- A page (or class of pages) has a 500 and Sentry identifies it as a PG Timeout Error
- A long running transaction is identified as coming from a sidekiq worker
- A single query is identified as taking 10s on production and slowing down the site
- A migration is failing or has resulted in an emergency

Go to step [4. Single Source Issues](#4-single-source-issues)

If not, go to [5. Widespread Issues](#5-widespread-issues)

### 4. Single Source Issues

If the emergency is from an error that includes a feature category, go to [8. Reach out to a team based on feature category](#8-reach-out-to-a-team-based-on-feature-category). As subject matter experts for a given feature, backend engineers are typically familiar with the involved database patterns and are typically best suited to solve issues related to their features even when the issue is related to database actions.

If the emergency is related to a migration, see [6. Determine Migration Source](#6-determine-migration-source)

If the emergency is related to a Rails controller, Sidekiq worker, API endpoint, or background migration, determine the feature category using details in our [feature categorization guide](https://docs.gitlab.com/ee/development/feature_categorization/), then go to [8. Reach out to a team based on feature category](#8-reach-out-to-a-team-based-on-feature-category)

If you need assistance to identify the source, go to [9. Escalating assistance](#9-escalating-assistance)

### 5. Widespread Issues

If the application (or component a major component ex: Sidekiq) is down or unresponsive due to what you believe to be a database related incident, that's an "All hands on deck".

1. [Activate Development On-Call](/handbook/engineering/on-call/#development-team-on-call-rotation). While it may seem unnecessary, many backend developers are familiar enough with the application and database that they should be able to help isolate a source while trying to get database experts involved.
1. Reach out in the [#database](https://gitlab.enterprise.slack.com/archives/C3NBYFJ6N), [#g_database](https://gitlab.enterprise.slack.com/archives/CNZ8E900G), and [#g_infra_database_reliability](https://gitlab.enterprise.slack.com/archives/C02K0JTKAHJ) channels (internal) for expert help using the `@db-team` (database capability) or `@dbre` (database reliability) group handles.

### 6. Determine Migration Source

The easiest way is using `git`, from the gitlab repository, run:

```sh
git log --first-parent {path/to/migration.rb}
```

That should give you an output that includes a link to the merge request where the migration was added.

If that doesn't give a clear answer, you can look at the tables involved in the migration and take a guess at the team. See [7. Determine Source based on a Table](#7-determine-a-source-based-on-a-table-name)

If it's still unclear what team to contact, go to [9. Escalating assistance](#9-escalating-assistance)

### 7. Determine a source based on a Table Name

Each database table has a documentation file that can be used to determine a corresponding group.

1. Look for the corresponding file named `{table_name}.yml` in https://gitlab.com/gitlab-org/gitlab/-/tree/master/db/docs
1. In the file, find the list of related `feature_categories`
1. Using the feature category, go to [8. Reach out to a team based on feature category](#8-reach-out-to-a-team-based-on-feature-category)
1. If there is more than one category, pick one from the list and start with that team
1. If it's still unclear what team to contact, go to [9. Escalating assistance](#9-escalating-assistance). Be sure to include details about the table that's causing the issue, and why you believe it's involved.

### 8. Reach out to a team based on feature category

Even if the emergency is related to the database or has database words in it, the best first step is to contact the team responsible for that area of the application. The easiest way to figure out what team is responsible for that area is by feature category.

1. Using the feature category check the corresponding group in the [Category-Team mappings](/handbook/product/categories/#categories-a-z)
1. Reach out in that team's slack channel, and `@mention` the team's manager for assistance
1. If the team doesn't respond, go to [9. Escalating assistance](#9-escalating-assistance).

### 9. Escalating assistance

When escalating an emergency, be as specific as possible and provide as many details as possible. Per [communication guidelines](/handbook/communication/#writing-style-guidelines), avoid acronyms whenever possible.

Always include:

- A link to the issue, Sentry error, incident, or Zendesk ticket
- The text of any error messages
- Links to any applicable charts
- Details about the query, migration, or issue

#### For Ongoing GitLab.com or Dedicated Incidents

1. [Activate Development On-Call](/handbook/engineering/on-call/#development-team-on-call-rotation)
1. If development on-call needs additional database expertise, reach out in [#database](https://gitlab.enterprise.slack.com/archives/C3NBYFJ6N)
1. If there's no response within 15 minutes, or the request is urgent, tag `@db-team` (Application) or `@dbre` (Infrastructure/Operations) in a thread on the original message
1. If there's no response to the ping within 15 minutes, and the request is urgent, use slack to find the phone number of the Database or DBRE manager and text or call them.

#### For Support Escalations

1. File a [request for help issue](https://gitlab.com/gitlab-com/enablement-sub-department/section-enable-request-for-help/)
1. Reach out in [#database](https://gitlab.enterprise.slack.com/archives/C3NBYFJ6N), include a link to the request for help
