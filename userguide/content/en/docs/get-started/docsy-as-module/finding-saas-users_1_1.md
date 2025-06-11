---
title: "Finding SaaS users"
description: "How we target SaaS research participants to meet specific criteria"
---

## Finding SaaS (GitLab.com) users

### When to look for users in the data warehouse

We have a variety of methods for identifying and [recruiting participants for research studies](/handbook/product/ux/ux-research/recruiting-participants), including Respondent.io and recruiting via social media. However, there are situations where these methods aren't suitable and you need to be able to find users based on a very specific criteria backed by objective usage data rather than self-reported or inferred data. The best way to do this is to take advantage of the usage and demographic data we have in our data warehouse.

**A non-exhaustive list of examples of when finding users via the data warehouse would be appropriate:**

- You are looking for users with a certain volume of usage of a feature or stage rather than simply being users of a stage
- You are looking for users that have interacted with a specific type of object or content on GitLab (ex: epics, snippets, wiki, etc.)
- You need to understand the broader context of the group or project the user is working within (ex: users in groups with less than 30 users, users in Gold plan groups, users in projects with no repository usage)

### Pre-requisites

1. You query the data warehouse using Structured Query Language (SQL). There are countless guides to learning SQL available for free on the Web. There are many different flavors of SQL, and the one we use is [Snowflake](https://docs.snowflake.com/en/index.html). However, most basic functionality is consistent among the major variations of SQL, so don't feel like you need to seek out Snowflake-specific resources.
1. In order to query the data warehouse, you'll need Editor access to Sisense (formerly Periscope). This requires completing an [access request](/handbook/business-technology/end-user-services/onboarding-access-requests/access-requests/).
1. [Data for Product Managers](/handbook/business-technology/data-team/programs/data-for-product-managers/) provides an overview of how the gain access to the SQL Explorer in Sisense where you will write and execute your queries, as well as providing a high level over view of how the warehouse is structured.
1. The Data team [documents individual data warehouse tables](https://dbt.gitlabdata.com/#!/overview) using a tool called dbt. Some tables are better documented and contain purpose descriptions and explanations of different columns, and some unfortunately do not. However, documentation does improve over time.

### SaaS-specific tables

Our data warehouse contains data for a variety of different areas. For our purposes, we're interested in the data detailing user information and usage of GitLab.com (SaaS).

Most of the tables housing data related to SaaS use the prefix `gitlab_dotcom_*`, though not all. A good starting point would be to explore the different tables with this prefix and look at what data they contain.

### Users Table

The our overall users table for SaaS is `gitlab_dotcom_users_xf`. It contains the most complete picture of individual users, including information such as account creation date, days active, role, and highest paid plan (if any). This should be your starting point and your source of truth. the `user_id` variable found in this table is our primary identifier for [GitLab.com](http://gitlab.com) users, and is used in other tables to identify the user with which a record is associated. For example, the `gitlab_dotcom_merge_requests_xf` table houses records of MRs created on GitLab.com, and contains a column called `author_id` to identify the author of a given MR. This `author_id` is a GitLab.com user ID, and you'd be able to connect the author of that merge request to the record in the users table (or any other table) using that `user_id` variable.

You can use this table to find GitLab.com user IDs for 100 users that created their account in the last seven days:

```sql
SELECT user_id FROM analytics.gitlab_dotcom_users_xf
WHERE account_age >= 7
LIMIT 100
```

### Object Tables (projects, issues, merge requests, etc)

We have a tables containing records for all of our "top level" objects in GitLab, among others:

- projects
- groups
- issues
- merge requests
- epics

If you can create it on GitLab.com, there is probably a table for it. These tables follow the same structure as other SaaS tables. For example:

- `gitlab_dotcom_issues_xf`
- `gitlab_dotcom_epics_xf`
- `gitlab_dotcom_merge_requests_xf`

The records in these tables are not full fidelity. They may not include all data shown when the object is rendered in the interface. When you load an issue in the GitLab.com UI, you see comments and all sorts of metadata. Much of this data will not be found in the issues table in the warehouse, and is either not accessible or stored in separate tables to keep tables to a reasonable size. Additionally, we do not expose data in the warehouse that would otherwise be private. For example, while you can see titles and descriptions for issues that are public on GitLab.com (just as you would if you viewed them on the Web), you will not be able to see that information for non-public issues.

These tables are good for when you want to understand how many of something a user or a group has created or interacted with, or if you want to start with a certain type of entity (say, an issue that was promoted to an epic) and then see what users have interacted with such an entity. These tables do not provide event level data, so you will not necessarily be able to tell when or exactly how a user created or interacted with something, just that they did (or did not).

For example: You're researching issue weights and you want to find the user IDs for 100 users who have created an issue with a weight assigned in the last 30 days. You also need to know how many of those issues they've created over that period. You would use this query:

```sql
SELECT
  author_id,
  COUNT(1) as num_issues
FROM analytics.gitlab_dotcom_issues_xf
WHERE
  weight IS NOT NULL
  AND issue_created_at >= DATEADD(day, -30, current_timestamp)
GROUP BY 1
LIMIT 100
```

### Stage Monthly Active Users

We don't log user IDs on specific event records, so you can't find out exactly when a certain user completed a specific action. However, we do log how many times per month and days per month a user interacts with different high level features and stages in the `gitlab_dotcom_monthly_stage_active_users` table. This is good for criteria where you're looking for "light" or "heavy" users of certain features or stages, or when you want to make sure you get users with at least some minimum recent usage of a stage.

For example: You need to find user IDs for 50 users who interacted with CI pipelines at least 17 times OR on 9 different days in a certain month (or more accurately, the last 28 days of a certain month):

```sql
SELECT user_id
FROM analytics.gitlab_dotcom_monthly_stage_active_users
WHERE
 event_name='ci_pipelines'
 AND (event_count >= 17 OR event_day_count >= 9)
 AND smau_month='2020-04-01'
LIMIT 50
```

### How to get help

- For questions on where you can find certain data in the warehouse, the #data channel on Slack can address them.
- If you require a very in depth SQL query, you can reach out to the [Product Data Insights team](/handbook/product/product-analysis/#working-with-us) to see if they have availability to assist you.
