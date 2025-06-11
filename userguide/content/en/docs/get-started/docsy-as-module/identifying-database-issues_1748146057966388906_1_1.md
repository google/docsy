---
title: Identifying Database Issues
description: "A basic guide to identifying the DRI for a database issue"
---

This guide is intended for folks who need to determine the DRI team when examining a database issue.

## Migrations

The easiest way is using `git`, from the [GitLab repository](https://gitlab.com/gitlab-org/gitlab), run:

```sh
git log --first-parent {path/to/migration.rb}
```

The code `path/to/migration.rb` can be found in the backtrace when the migration fails. Migration code files
start with a date-time stamp and are in [db/migrate/](https://gitlab.com/gitlab-org/gitlab/-/tree/master/db/post_migrate) or
[db/post-migrate/](https://gitlab.com/gitlab-org/gitlab/-/tree/master/db/post_migrate). Or, if you can find the date-time stamp,
for example `20240113071052`, anywhere in the log output from the customer, that will uniquely match a migration
filename in one of these locations.

That should give you an output that includes a link to the merge request where the migration was added.

If that doesn't give a clear answer, you can look at the tables involved in the migration and take a guess at the team. See [Finding a team by table name](#finding-a-team-by-table-name).

## Queries

It's a bit more complicated to determine query sources, because they come from a lot of places.

If the issue is related to a Rails controller, Sidekiq worker, API endpoint, or background migration, determine the feature category using details in our [feature categorization guide](https://docs.gitlab.com/ee/development/feature_categorization/), then use [reach out to the team listed in the lookup](#getting-a-team-from-a-feature-category) to contact the team.

If you don't have a source that includes a feature category, you'll need to make a guess based on the table name in the query. You can follow [Finding a team by table name](#finding-a-team-by-table-name).

## Finding a team by table name

Each database table has a documentation file that can be used to determine a corresponding group.

1. Look for the corresponding file named `{table_name}.yml` in [the database dictionary](https://gitlab.com/gitlab-org/gitlab/-/tree/master/db/docs)
1. In the file, find the list of related `feature_categories`
1. Using the feature category, [reach out to the team listed in the lookup](#getting-a-team-from-a-feature-category)
1. If there is more than one category, pick one from the list and start with that team

## Getting a team from a feature category

If you have a feature category, the best way to determine the team to contact is by using the [feature category lookup](../../../../product/categories/lookup.md).
