---
title: JiHu guidelines for database changes
aliases:
- /handbook/ceo/office-of-the-ceo/jihu-support/jihu-database-change-process/
- /handbook/ceo/chief-of-staff-team/jihu-support/jihu-database-change-process/
---

## JiHu guidelines for database changes

For JiHu contributions that contain database migrations (for PostgreSQL), there are two routes to consider:

1. Upstream fully: Contribute the code change including database migrations upstream into GitLab
1. Upstream migrations only: Only upstream database migrations without the code change (e.g. for a JiHu proprietary feature)

The following details guidelines and background for (2): Upstream database migrations only, without the relevant code change.

For changes that are going to be fully upstreamed including code changes, we follow the regular GitLab contribution workflow and the following does *not* apply.

### Schema changes

For structural changes, we choose to send all database migrations to the upstream project. In order to facilitate upgrade paths between
GitLab CE/EE and JiHu releases, we intend to keep the database schema exactly the same across both GitLab and JiHu.

This is an extension of the pattern we already apply for GitLab CE/EE: There is only one database schema for both editions.

For JiHu-specific database objects, like columns, tables and index, we annotate those objects with a PostgreSQL comment. This will allow us to reason about the relevance
of the object in a regular GitLab environment (e.g. we can ignore JiHu-specific columns there) and help us to signal-boost why the object exists in the first place (even though there is no code using it in GitLab).
See [gitlab-org/database-team/team-tasks#192](https://gitlab.com/gitlab-org/database-team/team-tasks/-/issues/192) for details.

We distinguish the following cases:

#### Column additions

A JiHu contribution may add columns to existing GitLab tables. However, those columns won't be used in the GitLab codebase. We
take the following measures for clarity:

1. Annotate columns with a PostgreSQL comment to indicate the column is JiHu-specific.
1. Based on the annotations, we don't expose JiHu-specific columns to ActiveRecord in a regular GitLab environment. This will be switched off in a JiHu environment.
1. Added columns can *only* be set nullable (`NULL`) or not-null with a default `NOT NULL DEFAULT x`

#### Table/view additions

When adding new tables in a JiHu contribution, we annotate the table with a PostgreSQL comment to indicate the table is JiHu-specific. We'll have measures to prevent
usage of those tables through ActiveRecord models in a regular GitLab environment.

It is fine to add foreign keys to existing tables. However, a foreign key to an existing GitLab table has to be qualified with
a `ON DELETE` clause, which ensures cascading deletes continue to work. This is particularly important to support migrations between GitLab
and JiHu (and back), where any leftover data would break cascading deletes without this clause.

#### Index additions

Indexes can be added to JiHu-specific tables without additional considerations.

In order to add indexes to a JiHu-specific column on a GitLab table, the index must be turned into
a partial index to reduce its size on GitLab, for example:

```sql
CREATE INDEX user_details_phone ON user_details (phone_number) WHERE phone_number IS NOT NULL
```

Adding indexes to an existing GitLab column will need to be reviewed by the [database group](/handbook/engineering/infrastructure/core-platform/data_stores/database/) on a case-by-case basis.

In all cases, we annotate the index with a PostgreSQL comment to indicate the index is JiHu-specific.

Optional: In order to reduce the overhead on GitLab.com, we may want to choose to ignore creating indexes that are JiHu-specific.

#### Additional objects

Other types of database objects, e.g. triggers, functions, extensions, etc., will need to be reviewed by the [database group](/handbook/engineering/infrastructure/core-platform/data_stores/database/) on a case-by-case basis.

### Data migrations

A migration that mutates existing data is also merged into the upstream project. However, we'd like to avoid executing JiHu-specific data migrations in a regular GitLab environment, particularly on GitLab.com.

Any JiHu-specific data migration (including background migrations) is encouraged to target JiHu environments only and will need to go through the standard [database review process](https://docs.gitlab.com/ee/development/database_review.html).

### Switching between GitLab and JiHu

With the exact same schema across GitLab and JiHu, switching from GitLab to JiHu become seamless.

However, we acknowledge that semantics for switching from JiHu to GitLab has not yet been defined. Even though we can switch back to GitLab given the same database schema, we have not yet decided how to treat existing JiHu-specific data in that situation. Once switched back to GitLab, there will be no code anymore that maintains JiHu-specific data - which might cause issues e.g. because of constraint violations or inconsistent data in case the installation is later moved back to JiHu again.

### Tradeoffs/Discussion

We recognize that this pattern has the following disadvantages (with mitigations):

| Disadvantage | Mitigation |
|---|---|
| We add database objects to GitLab that are unused in the codebase. | By annotating objects, we keep track of this to reduce confusion. |
| We accept overhead for any GitLab installation, including GitLab.com,<br />to create and maintain JiHu-specific database objects that are not strictly in use by or necessary for GitLab. | For GitLab.com, we may choose to ignore JiHu-specific indexes (we don't need to be able to upgrade to JH). |
| Always having to go through GitLab to add database migrations limits flexibility for JiHu. | We expect benefits from collaborating closely on database design in terms of knowledge exchange. |
| Code review overhead: Without accompanying code, it is often difficult to provide meaningful feedback for database design. | We ask to link relevant code changes and provide as much information as possible upfront. |

#### Alternative: JiHu specific migrations (not chosen)

We considered an [alternative approach is to keep JiHu specific migrations separate](https://gitlab.com/gitlab-com/www-gitlab-com/-/merge_requests/90336).

JiHu may want to implement mechanics to allow for JiHu-specific migrations that are not going to be merged into the upstream project. This would allow for more flexibility and autonomy in terms
of database changes, at the expense of increasing the complexity to support various upgrade paths between GitLab CE/EE and JiHu editions. Since there can be conflicts between GitLab and JiHu migrations
over time [much like a Git timeline, examples in (issue #161)](https://gitlab.com/gitlab-jh/gitlab/-/issues/161]), JiHu would need to provide schema migrations specifically to each supported upgrade path from GitLab.

We didn't choose this option at this point in time to allow for quicker turnaround, less complexity and ability to seamlessly switch between GitLab and JiHu.

### Considerations for database review by GitLab team members

Reviewing changes with database migrations but without the related code changes has proven to be difficult for database reviewers and maintainers.
In order to help GitLab reviewers to understand the context in more detail, we ask to have the related code change ready and reviewed, before asking for a database review.
The related code change should be linked from the merge request, along with any useful background information.

Otherwise we follow the same process as outlined in [How to prepare the merge request for database review](https://docs.gitlab.com/ee/development/database_review.html#how-to-prepare-the-merge-request-for-a-database-review).

### Sending merge requests with database migrations from a fork

In order to increase the review efficiency when creating a merge request from a fork, we suggest to [configure the `DANGER_GITLAB_API_TOKEN`](https://docs.gitlab.com/ee/development/dangerbot.html#limitations) in the forked project. This will allow to run Danger, which is going to suggest relevant reviewers among other helpful content relevant for review.

### Questions?

Please engage with the [database group](/handbook/engineering/infrastructure/core-platform/data_stores/database/) for any questions and support.
