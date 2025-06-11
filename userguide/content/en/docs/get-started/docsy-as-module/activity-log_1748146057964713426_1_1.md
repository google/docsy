---
title: Database Group Activity Log
---

## Overview

This page captures the database group's activity and documents the outcomes, key results and some takeaways (most recent first). We've started doing this towards the end of 2021.

### 2022

#### March 2022

Starting in November 2021, we performed a migration file cleanup with these goals:

- Improve the performance of GitLab CI jobs.
- Remove maintenance cost for old migrations.
- Improve initialization speed for new GitLab instances.

We decided to remove all of the migration files before version 14. We implemented a script that squashed multiple migrations files into one file (`init_schema`).

We drastically reduced the number of migration files. Using a migration squashing strategy, we deleted thousands of regular migrations, post-migrations, background migrations, and RSpec files. In the future, when building a new database from scratch, the system does not need to open and parse all migrations before version 14 because they are squashed into one file. This change contributed to a performance improvement.

After the cleanup deployment, we saw a performance optimization in our CI, which led to a significant time reduction of the `rspec migration` job.

![image](https://gitlab.com/gitlab-com/www-gitlab-com/uploads/b50030d66e3e4f30b31d7fb8e1d0902a/gitlaborggitlabrspecmigrationjobmeanduration.png)

### 2021

#### November 2021

This month, we shipped three changes to GitLab.com which led to a 20% reduction in total database size (about 3.3 TB total reduction):

1. [Priority reindexing](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/73480) and reindexing support for very large btree and GIN indexes
1. [Drop deprecated tables](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/73841)
1. [Partitioning-based retention strategy for time-decay data](https://gitlab.com/gitlab-org/gitlab/-/issues/332199)

We implemented priority reindexing which allows us to target specific indexes as needed. This helped to [reduce index bloat built up throughout a large data migration](https://gitlab.com/gitlab-org/database-team/team-tasks/-/issues/208#note_726520964). It reduced GitLab.com index bloat by >500 GB total, which translates to reducing relative btree bloat across the site from 25% to 17% and freeing up 500 GB worth of disk space in the cluster. This has [stabilized the longer-term index bloat forecast](https://gitlab.com/gitlab-org/database-team/team-tasks/-/issues/201#note_733223631).

We released a data retention strategy for time-decay data which is based on dropping partitions rather than deleting records. This solves a major problem on GitLab.com, where a deletion-based strategy hasn't been able to keep up and generated load. After switching on the new strategy, we immediately dropped 2 TB worth of data in `web_hook_logs`.

![gitlab.com size reduction](/images/engineering/infrastructure-platforms/data-access/database-framework/2021-11-15_gitlabcom_size_reduction.png)
