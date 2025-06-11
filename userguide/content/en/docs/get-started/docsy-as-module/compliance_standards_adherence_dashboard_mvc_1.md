---
title: "Compliance Standards Adherence Dashboard MVC"
toc_hide: true
---

## Context

We recently released [compliance standards adherence dashboard](https://gitlab.com/groups/gitlab-org/-/epics/11052) MVC.
In this iteration we introduced the concept of standard and checks. In the initial iteration we started with
[GitLab](#gitlab-standard) and [SOC 2](#soc-2-standard) standards.

### GitLab Standard

The GitLab standard consists of three checks:

- [Prevent authors as approvers](https://docs.gitlab.com/ee/user/compliance/compliance_center/compliance_standards_adherence_dashboard.html#prevent-authors-as-approvers)
- [Prevent committers as approvers](https://docs.gitlab.com/ee/user/compliance/compliance_center/compliance_standards_adherence_dashboard.html#prevent-committers-as-approvers)
- [At least two approvals](https://docs.gitlab.com/ee/user/compliance/compliance_center/compliance_standards_adherence_dashboard.html#at-least-two-approvals)

### SOC 2 Standard

The SOC 2 standard consists of one check:

- [At least one non-author approval](https://docs.gitlab.com/ee/user/compliance/compliance_center/compliance_standards_adherence_dashboard.html#at-least-one-non-author-approval)

## Approach

1. We would create a service class for each of these checks and this class would be invoked by a Sidekiq worker in
the background.
1. These workers are invoked whenever a project is added, or an associated project or group setting is changed. The
scan is run on that project to update the standards adherence for that project.
1. We planned to store the results of these checks in a database table with the following schema:

    ```mermaid
        classDiagram
    class namespaces {
        id: bigint
        name: text
        path: text
        ...(more columns)
    }
    class projects {
        id: bigint,
        name: text
        path: text
        description: text
        ...(more columns)
    }

    class project_compliance_standards_adherence {
        id: bigint
        created_at: timestamp
        updated_at: timestamp
        project_id: bigint
        namespace_id: bigint
        check_name: smallint
        status: smallint
        standard: smallint
    }

    namespaces --> projects : has_many
    namespaces <-- projects : belongs_to
    projects --> project_compliance_standards_adherence : has_many
    projects <-- project_compliance_standards_adherence : belongs_to
    ```

1. `check_name` is Enum and stores the names of the checks. Eg: "prevent_approval_by_merge_request_author",
"prevent_approval_by_merge_request_committers", "at_least_two_approvals", etc.
1. `standard` column stores the name of the standard to which the check belongs to, like SOC 2, GitLab, etc.

## Conclusion

We received good feedbacks from the users after the MVC was released, however, some users also expressed their concerns
around the checks being rigid and the inability to configure them as per their requirement. For example: Some of the
users didn't have a requirement to get their merge requests approved by two users. They want the ability to change the
count of required approvers to 1 for their projects. We plan to work on these in the next iteration and have created an
architectural decision record for [custom adherence report](decisions/002_custom_adherence_report.md).
