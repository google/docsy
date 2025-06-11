---
title: "Keep Around Refs Working Group"
description: "The keep-around refs working group addresses the problem of unbounded keep around references"
status: active
---

## Attributes

| Property       | Value                                                        |
| -------------- | ------------------------------------------------------------ |
| Date Created   | July 8, 2024                                                 |
| End Date       | TBD                                                          |
| Slack          | [#wg_keep-around-refs](https://gitlab.slack.com/archives/C076Z1ADEQP) (only accessible from within the company) |
| Google Doc     | [Working Group Agenda](https://docs.google.com/document/d/1ePsKix5IescNQHh2EPhiwlioX1h8HD0JhBp72ATVMB0/edit#heading=h.i8vgmxvelcff) |
| Issue Board    | [Working Group Issue Board](https://gitlab.com/groups/gitlab-org/-/boards/7601653?label_name[]=WG%3A%3AKeepAroundRefs) |
| Overview & Status | [Main Epic](https://gitlab.com/groups/gitlab-org/-/epics/12961) |

### Scope and Definitions

In the context of this working group:

1. keep-around refs: Git references [created through Gitaly](https://docs.gitlab.com/ee/development/gitaly.html#gitlab-specific-references) to ensure certain Git
   data does not get pruned by Gitaly.

### Exit criteria

1. Rails tracks keep-around references it creates as well as the entities that depend on
   the Git objects it holds onto.
1. Rails removes keep-around references when they are no longer needed by any
   entity.
1. Rails prevents keep-around references from being created in an unbounded way.

## Overarching Goals

1. Git operations are performant even for large repositories with many merge
   requests, pipelines, etc.

## Future goals

1. A retention policy is set for keep around refs.
1. Migrate existing and unneeded keep around refs on GitLab.com:
   - Dependencies between existing keep-around references and the database
      entities are recorded and maintained.
   - Existing unneeded keep-around references are removed.

## Roles and Responsibilities

| Working Group Role     | Person                           | Title                                                 |
|------------------------|----------------------------------|-------------------------------------------------------|
| Executive Stakeholder  | [Tim Zallmann](@timzallmann)      | Senior Director, ~"Department::Development"           |
| Facilitator/DRI        | [James Fargher](@proglottis)     | Senior Backend Engineer, ~"group::gitaly"             |
| Product DRI            | [Mark Wood](@mjwood)             | Product Manager, ~"group::gitaly"                     |
| Member                 | [Sami Hiltunen](@samihiltunen)   | Staff Backend Engineer, ~"group::gitaly"              |
| Member                 | [John Cai](@jcaigitlab)          | Engineering Manager, ~"group::gitaly"                 |
| Member                 | [David Kim](@dskim_gitlab)       | Senior Backend Engineer, ~"group::code review"        |
| Member                 | [Kai Armstrong](@phikai)         | Principal Product Manager, ~"group::code review"      |
| Member                 | [Hordur Freyr Yngvason](@hordur) | Senior Backend Engineer, ~"group::pipeline execution" |
| Member                 | [Vasilii Iakliushin](@vyaklushin)| Staff Backend Engineer, ~"group::source code"         |
| Member                 | [Furkan Ayhan](@furkanayhan)     | Senior Backend Engineer, ~"group::pipeline authoring" |
