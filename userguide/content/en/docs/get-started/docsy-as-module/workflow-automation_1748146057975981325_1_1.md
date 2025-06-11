---
title: "Workflow Automation"
---

The Engineering Productivity team owns the tooling and processes for GitLab's internal workflow automation. [Triage-ops](https://gitlab.com/gitlab-org/quality/triage-ops) is one of the main projects the EP team maintains, which empowers GitLab team members to triage issues, MRs and epics automatically.

## One-off label migrations

In the event of team structure changes, we often need to run a one-off label migration to update labels on existing issues, MRs and epics. We encourage every team member to perform the migrations themselves for maximum efficiency. For the fastest result, please follow these instructions below to get started on a label migration merge request. The EP team can then help review and run the migrations if needed.

### Getting started with label migrations

These one-off label migrations happen within the triage-ops pipelines. Create an MR in [triage-ops](https://gitlab.com/gitlab-org/quality/triage-ops) with a one-off label migration policy.

See [One-off Policies](https://gitlab.com/gitlab-org/quality/triage-ops/-/blob/master/doc/scheduled/index.md#one-off-policies) for documentation and examples.

### Common scenarios and how to create MRs

#### Group/Category/Stage rename

Example:

- [Rename `category:Pods` to `category:Cell`](https://gitlab.com/gitlab-org/quality/triage-ops/-/issues/1270)

Group G is renamed to Group A, where A is a newly created group name. Required actions:

1. Locate the [`group::G` label](https://gitlab.com/groups/gitlab-org/-/labels) in the Labels page and update the title and description.
2. No label migration needs to run because the new label didn't exist before and we do not need to keep the old label name.

#### Group/Category/Stage merge

Examples:

- [`group::organization` merging into `group::pods`](https://gitlab.com/gitlab-org/quality/triage-ops/-/merge_requests/2049)
- [Merge `Category:Authentication and Authorization` and `Category:Permissions` into `Category:System Access`](https://gitlab.com/gitlab-org/quality/triage-ops/-/merge_requests/2022)

Group G is merging into group B, where B is an existing group label. Required actions:

1. Migrate all resources labeled with group G by applying `group::B` and removing `group::G`.
2. Deprecate the [group::G label](https://gitlab.com/groups/gitlab-org/-/labels?search=group::G) by appending `[DEPRECATED]` to the title, update the label description and schedule a date for removal.
3. Running on-off label migration is necessary because Group B already exists, so we cannot simply rename group::G to group::B.

#### Group changing Stage or Category

Example:

- [Update CI Variables from pipeline authoring to pipeline security](https://gitlab.com/gitlab-org/quality/triage-ops/-/merge_requests/2053)

Group G used to belong to stage S, and was responsible for category C. After the structure changes, group G became a part of stage T, and is responsible for category CC. Required actions:

1. Find all resources labeled with Group G, remove `devops::S` and `Category:C`, and add `devops::T` and `Category:CC`

### How to Run Label Migrations

Once a merge request is created containing the one-off policy, start the label migrations with a dry-run job which is created within the migration pipeline. The dry-run allows us to preview which and how many resources will be impacted by this migration. Locate the `dry-run` job in the MR pipeline and run it. Once we validate that the affected resources listed in the dry-run look correct, you can proceed to the actual migration job.

If you need assistance locating the dry-run jobs, you can look at [an example pipeline](https://gitlab.com/gitlab-org/quality/triage-ops/-/pipelines/801902517). Go to the `one-off` stage of the pipeline and you should see two migration jobs with one of them marked as `dry-run`.

Please follow the [One-off Policies documentation](https://gitlab.com/gitlab-org/quality/triage-ops/-/blob/master/doc/scheduled/index.md#one-off-policies) to ensure the job names are defined correctly.
