---
title: Sharding GitLab with CitusDB
---

## Sharding GitLab with CitusDB

This is a working document to outline the decision making process with respect to using CitusDB as a database sharding solution for GitLab on GitLab.com.

### Citus Community

We were exploring the [Citus Community](https://www.citusdata.com/product/community) offering as part of our efforts to [explore CitusDB as a sharding solution](https://gitlab.com/gitlab-org/gitlab/issues/207833).  Citus Community is licensed under the [GNU Affero General Public License v3.0 (GNU AGPLv3)](https://github.com/citusdata/citus/blob/main/LICENSE).  GNU AGPLv3 is listed in our handbook as an [unacceptable license](https://docs.gitlab.com/ee/development/licensing.html#unacceptable-licenses) requiring legal approval for use.

On April 15, 2020 we sought advice from our legal counsel.  There were enough questions and concerns about the GNU AGPLv3 license that we decided to discontinue our usage research into Citus Community.  *Notes and agenda can be found [here](https://docs.google.com/document/d/1wzcpd10uOgY41fub8HZBN0E5VusrRKIgWiS9X-klJpY/edit)(only accessible to GitLab team-members).*

### Citus Enterprise

April 20, 2020 - Due to licensing costs we have decided not to pursue Citus Enterprise for a sharding solution.  We will focus our efforts on PostgreSQL Partitioning with foreign data wrappers (FDW).
