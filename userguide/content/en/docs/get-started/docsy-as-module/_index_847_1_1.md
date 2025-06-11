---
title: Database Framework Group
---

## Vision

Developing solutions for scalability, application performance, data growth and
developer enablement especially where it concerns interactions with the
database.

## Mission

Focusing on the database, our mission is to provide solutions that allow us to
scale to our customer's demands.  To provide tooling to proactively identify
performance bottlenecks to inform developers early in the development lifecycle.
To increase the number of database maintainers and provide database best
practices to the community contributors and development teams within GitLab.

## Team Members

The following people are permanent members of the Database Team:

{{< team-by-departments "Database BE Team" >}}

## Stable Counterparts

The following members of other functional teams are our stable counterparts:

| **Name**                                                 | **Role** |
| -------------------------------------------------------- | -------- |
| [Sampath Ranasinghe](/handbook/company/team#sranasinghe) | [Senior Product Manager, Geo and Database](/job-families/product/product-manager) |
| [Ben Prescott](/handbook/company/team#ben-prescott) | [Staff Support Engineer](/job-families/engineering/support-engineer/) |

### Stable Counterparts to other teams

The Database Group is often called upon to provide consulting to other groups.
To more efficiently support these requests we have created this [stable counterparts table](stable.html).

## Meetings

Whenever possible, we prefer to communicate asynchronously using issues, merge
requests, and Slack. However, face-to-face meetings are useful to establish
personal connection and to address items that would be more efficiently
discussed synchronously such as blockers.

- Database Group Sync every Tuesday and Thursday at 1:00 PM UTC
  - Tuesdays - we start with any `~infradev` issues requiring reviews, then we
    focus on weekly priorities.
  - Thursdays - are optional and open agenda. Anyone can bring topics to the
    team to discuss. Typically we reserve the first Thursday after the milestone
closes to hold a synchronous retrospective.
- [Database Office Hours](https://docs.google.com/document/d/1wgfmVL30F8SdMg-9yY6Y8djPSxWNvKmhR5XmsvYX1EI/edit#heading=h.oyp8amyknnr8)
(internal link); [YouTube recordings](https://www.youtube.com/playlist?list=PL05JrBw4t0Kp-kqXeiF7fF7cFYaKtdqXM)
  - Wednesdays, 3:30pm UTC (bi-weekly)
  - (APAC) Thursdays, 3:30am UTC (bi-weekly, alternating)

## Work

We follow the GitLab [engineering workflow](/handbook/engineering/workflow/)
guidelines.  To bring an issue to our attention please create an issue in the
relevant project.  Add the `~"group::database"` label along with any other
relevant labels.  If it is an urgent issue, please reach out to the Product
Manager or Engineering Manager listed in the [Stable Counterparts](/handbook/engineering/infrastructure-platforms/data-access/database-framework/)
section above.

### What we do

The team is responsible for the PostgreSQL application interactions to enable
high performance queries while offering features to support scalability and
strengthen availability.  PostgreSQL is the heart of Rails application, and
there is no shortage of work to make GitLab more performant, scalable, and
highly available from database perspective.  Some of the current priorities
include implementing partitioning to improve query performance and creating
tooling to enable development teams to implement their own partitioning
strategies more easily.  We are working on tools that will help developers
"shift left" in their migration testing prior to deployment.  We are always
looking for ways to continuously care for the performance of our databsae and
improve our developer documentation.  For more in-depth details of what we are
working on please review our [Roadmap](#roadmap) section below.

In order to follow what the database group is currently working on, we recommend
watching our [group's kickoff presentations for new milestones](https://www.youtube.com/playlist?list=PL05JrBw4t0KqP3MYrcoQHrqPUqn_jJZSN)
and [the respective milestone planning issues](https://gitlab.com/gitlab-org/database-team/team-tasks/-/issues?scope=all&state=all&search=database+group+planning).

### Activity Log

Since end of 2021, we maintain an [activity log](activity-log.html) to keep
track of past projects and outcomes.

## Planning

We use a [planning issue](https://gitlab.com/gitlab-org/database-team/team-tasks/-/blob/master/.gitlab/issue_templates/Planning.md)
to discuss priorities and commitments for the milestone.  This happens largely
asynchronously, but when we do need to discuss synchronously we discuss during
the Tuesday team [meeting](#meetings) timeslot.

### Issue Weights

The database group is experimenting with using expected merge request count as
an issue weight. Before each milestone starts, we'll ping each assigned issue
without a weight and ask folks to add weights to them.

We decided to use merge request count as an issue weight for a few reasons:

- The process encourages folks to consider ahead how an issue could be broken
  down more and enumerate it in advance
- It's easy to describe and learn, making it easier for the team to come to a
  shared understanding
- Merge request rate is one of the main ways our team is measured

#### Process for weighting Issues

1. With an emphasis towards smaller more iterative changes rather than large
   changes that may take longer to review and merge, consider how many merge
requests could this be broken into.
1. Add a comment enumerating the expected merge requests. For example:

   > Just one merge request to documentation
   >
   > One to gitlab for database changes, one for new functionality, one for
   > documentation changes, and one to omnibus

1. Add the count as a weight. For example, if you think there could be one to
   gitlab for database changes, one for new functionality, one for documentation
changes, and one to omnibus - you would assign `/weight 4`

#### Timeline for implementation

15.4 - 15.7: We'll ping each issue in the milestone without a weight and ask
folks to add one to collect data
15.8 +: TBD

### Triage rotation

We have a fairly simple triage rotation. Each week one team member is dedicated
to triaging incoming issues for the database group. This allows for the rest of
the team to focus on their current priorities with fewer interruptions. Each
week, a bot will file an issue that gets automatically assigned to next team
member in the rotation. We order the triage rotation by alpha-order based on
first name to keep it very simple. If a team member is on PTO the week they are
assigned, the issue will be re-assigned to the next person.

Issues needing triage can come in through many different paths. Some common
areas to monitor while on triage:

- Newer issues (< 7 days old) with the `~database` label that are not assigned
  to a group. [Example search](https://gitlab.com/groups/gitlab-org/-/issues?label_name%5B%5D=database&scope=all&sort=created_date&state=opened&utf8=%E2%9C%93)
- Newer issues that were assigned `~group::database` but do not have a
  throughput label or `~database::triage` labels. [Example search](https://gitlab.com/dashboard/issues?scope=all&state=opened&label_name[]=group%3A%3Adatabase&not[label_name][]=type%3A%3Abug&not[label_name][]=type%3A%3Afeature&not[label_name][]=type%3A%3Amaintenance&not[label_name][]=type%3A%3Aignore)
- Newer issues that were assigned `~database::triage` and have not previously
  been reviewed
- When we get pinged on the #g_database slack channel for assistance

When the triage team member discovers an issue requiring team attention some of
the possible outcomes are:

- Directly address the issue if it is a simple fix
- Direct to our customer support counterparts as appropriate
- Add the `~database::triage` label and review during team sync meeting
- Add a milestone and ping the manager, or label the issue
  `~workflow::scheduling`
- Close as duplicate and link to the duplicate issue

The goal is to keep the number of issues for triage low and manageable.

Tip: In order to remove closed issues from the triage board, use [this search](https://gitlab.com/gitlab-org/gitlab/-/issues?scope=all&state=closed&label_name[]=group%3A%3Adatabase&label_name[]=database%3A%3Atriage)
and edit multiple issues at once to remove the `~database::triage` label.

### Boards

[Database by Milestone](https://gitlab.com/groups/gitlab-org/-/boards/1318796?&label_name%5B%5D=group%3A%3Adatabase)
The Milestone board gives us a "big picture" view of issues planned in each
milestone.

[Database: Build · Boards · GitLab.org · GitLab](https://gitlab.com/groups/gitlab-org/-/boards/1324138) The build board
gives you an overview of the current state of work for `group::database`. These
issues have already gone through validation and are on the [Product Development Build Track](/handbook/product-development-flow/#build-track). Issues are added
to this board by adding the current active milestone and `group::database`
labels. Issues in the `workflow::ready for development` column are ordered in
priority order (top down). Team members use this column to select the next item
to work on.

[Database: Validation](https://gitlab.com/groups/gitlab-org/-/boards/2305758?scope=all&utf8=%E2%9C%93&label_name[]=group%3A%3Adatabase&label_name[]=database%3A%3Avalidation)
The validation board is a queue for incoming issues for the Product Manager to
review. A common scenario for the Database Team validation board is when an
issue is created that requires further definition before it can be prioritized.
The issue typically states a big picture idea but is not yet detailed enough to
take action. The Database Team will then go through a refinement process to
break down the issue into actionable steps, create exit criteria and prioritize
against ongoing efforts. If an issue becomes too large, it will be promoted to
an epic and small sub-issues will be created.

[Database: Triage](https://gitlab.com/groups/gitlab-org/-/boards/2305765?scope=all&utf8=%E2%9C%93&label_name[]=database%3A%3Atriage)
The triage board is for incoming issues that require further investigation for
team assignment, prioritization, previously existing issues, etc. Within the
Database Group we have implemented a weekly triage rotation where one team
member is responsible for monitoring this board for timely responses.

#### Say/Do Ratio

We use the `~Deliverable` label to track our Say/Do ratio.  At the beginning of
each milestone, during a Database Group Weekly meeting, we review the issues and
determine those issues we are confident we can deliver within the milestone.
The issue will be marked with the `~Deliverable` label.  At the end of the
milestone the successfully completed issues with the `~Deliverable` label are
tracked in two places.  We have a dashboard in Tableau that will calculate how
many were delivered within the milestone and account for issues that were moved.
Additionally, our milestone retro issue lists all of the `~Deliverable` issues
shipped along with those that missed the milestone.

#### Roadmap

The Database Group
[Roadmap](https://gitlab.com/groups/gitlab-org/-/roadmap?scope=all&utf8=%E2%9C%93&state=opened&label_name[]=Roadmap&label_name[]=group%3A%3Adatabase)
gives a view of what is currently in flight as well as projects that have been
prioritized for the next 3+ months.

### Weekly Team Updates

The enablement section is using status issues in order to provide regular status
updates. Each week, the team's engineering manager posts general announcments,
and members of the team post updates on their in progress projects.

These issues can be found [here (internal)](https://gitlab.com/gitlab-org/enablement-section/enablement-status-update/-/issues/?sort=created_date&state=opened&label_name%5B%5D=group%3A%3Adatabase&first_page_size=100).

### Documentation

We document our insights, road maps and other relevant material in this section.

1. [Database Lexicon - terms and definitions relating to our Database](doc/lexicon.html)
1. [Database Strategy: Guidance for proposed database changes](doc/strategy.html)
1. [On table partitioning](doc/partitioning.html) (February 2020)
1. [Postgres: Sharding with foreign data wrappers and partitioning](doc/fdw-sharding.html)
1. [Sharding GitLab by top-level namespace](doc/root-namespace-sharding.html)
1. [Sharding with CitusDB](doc/citus.html) (April 2020)
1. [Table partitioning: Issue group search as an example](doc/issue-group-search-partitioning.html) (March 2020)
1. [Working with the GitLab.com database for developers](doc/gitlab-com-database.html)
1. [Database schema proposals for Container Registry](doc/container-registry.html) (September 2020)
1. [Workload analysis for GitLab.com](doc/workload-analysis.html) (October 2020)
1. [Multi-database Background migrations](doc/multidb-bg-migrations.html)
   (October 2021)

### Performance Indicators (Internal)

1. [Enablement::Database - Performance Indicators Dashboard](https://10az.online.tableau.com/#/site/gitlab/workbooks/2326872/views)
1. Average Query Apdex for GitLab.com
   - Master
     - [Target: 100ms - Tolerable 250ms](https://tinyurl.com/64e6acku)
     - [Target: 50ms - Tolerable 100ms](https://tinyurl.com/4mjw5azv)
   - Replicas
     - [Target: 100ms - Tolerable 250ms](https://tinyurl.com/yde68e2k)
     - [Target: 50ms - Tolerable 100ms](https://tinyurl.com/42wc7n2z)

### Common Links

- Slack Channel
  [#g_database](https://gitlab.slack.com/app_redirect?channel=g_database) -
Official Business
- Slack Channel
  [#db-lounge](https://gitlab.slack.com/app_redirect?channel=db-lounge) - Team Chat
- [Database Epics](https://gitlab.com/groups/gitlab-org/-/epics?scope=all&utf8=%E2%9C%93&state=opened&label_name[]=group%3A%3Adatabase)
- [Database Subgroup](https://gitlab.com/gitlab-org/database-team) - Issues and
  templates related to team processes.
- [Product Development Timeline](/handbook/engineering/workflow/#product-development-timeline)
- [YouTube: Database Team Playlist](https://www.youtube.com/watch?v=BqwsRDpknfg&list=PL05JrBw4t0KoxfN-uO2YfvQUabp2kdUYT)
- [YouTube: Database Office Hours Playlist](https://www.youtube.com/watch?v=p3ful2h8H-c&list=PL05JrBw4t0Kp-kqXeiF7fF7cFYaKtdqXM)

## Dashboards

{{< tableau height="600px" toolbar="hidden"
src="https://us-west-2b.online.tableau.com/t/gitlabpublic/views/TopEngineeringMetrics/TopEngineeringMetricsDashboard"
>}}
  {{< tableau/filters "GROUP_LABEL"="database" >}}
{{< /tableau >}}

{{< tableau height="600px"
src="https://us-west-2b.online.tableau.com/t/gitlabpublic/views/MergeRequestMetrics/OverallMRsbyType_1"
>}}
  {{< tableau/filters "GROUP_LABEL"="database" >}}
{{< /tableau >}}

{{< tableau height="600px"
src="https://us-west-2b.online.tableau.com/t/gitlabpublic/views/Flakytestissues/FlakyTestIssues"
>}}
  {{< tableau/filters "GROUP_NAME"="database" >}}
{{< /tableau >}}

{{< tableau height="600px"
src="https://us-west-2b.online.tableau.com/t/gitlabpublic/views/SlowRSpecTestsIssues/SlowRSpecTestsIssuesDashboard"
>}}
  {{< tableau/filters "GROUP_LABEL"="database" >}}
{{< /tableau >}}
