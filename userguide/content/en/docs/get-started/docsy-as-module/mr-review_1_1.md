---
title: "Merge Request Roles and Responsibilities"
description: "GitLab Data Team MR responsibilities"
---

## <i class="fas fa-users fa-fw color-orange font-awesome" aria-hidden="true"></i>Merge Request Roles and Responsibilities

### Reviewer

All GitLab data team members can, and are encouraged to, perform code review on merge requests of colleagues and community contributors.
If you want to review merge requests, you can wait until someone assigns you one, but you are also more than welcome to browse the list of open merge requests and leave any feedback or questions you may have.

Note that while all team members can review all merge requests, the ability to *accept* merge requests is restricted to code owners.

The responsibility of a reviewer is

- to review the technical implementation,
- to ensure the code achieves the business goals,
- to check the data quality of the data models created.

### Code owner

Code ownership is a [feature of GitLab](https://gitlab.com/help/user/project/code_owners) that links a project member to specific folders and files in a project. It is meant to answer the questions "who can I ask about this code?" and "who should review changes to this code?".  The goal is to assign 2 or 3 GitLab Team Members (max 4) to a set of folders and files (if possible).
With not assigning a big group of people to basically all of our code, we hope to define better ownership and drive better code reviews. To keep the efficiency we potentially will assign more code owners to Snowflake Workspace schemas since the workspaces are not subject to higher quality code reviews.

A code owner:

- is the first contact person to answer questions regarding the code,
- carries the ownership of the quality of the code,
- carries the ownership of the results that the code produces,
- performs MR reviews and accepts merge requests.

#### How to become a code owner

1. Create an MR to the [`CODEOWNERS` file](https://gitlab.com/gitlab-data/analytics/blob/master/CODEOWNERS) with the ownership change you wish to make
   - Explain in the MR body why they are ready to take on that responsibility.
   - Use specific examples of recent MR reviews that they have performed. MRs that introduce very simple changes are good, but should not be the only source of reviews.
1. Work with the other code owners that already cover the area you wish to join.

Requirements that should be taken into consideration to become a code owner:

- You should have an advanced understanding of the particular subject area.
- The MRs you've written consistently make it through reviewer and maintainer review without significant required changes.
- The MRs you've reviewed consistently make it through maintainer review without significant additionally required changes.

### Maintainer

A maintainer in any of the data team projects is not synonymous with any job title.
Here, the data team takes from the precedent set forward by the engineering division on [the responsibilities of a maintainer](/handbook/engineering/workflow/code-review/#maintainer).
Every data team project has at least one maintainer, but most have multiple, and some projects (like Analytics) have separate maintainers for dbt and orchestration.

The responsibility of a Maintainer is to ensure that

- Data team processes are followed,
- the MR is not conflicting with the broader Data Team architecture, procedures and processes,
- final review on the MR.

#### How to become a data team maintainer

We have guidelines for maintainership, but no concrete rules.
Maintainers should have an advanced understanding of the GitLab Data projects codebases.
Prior to applying for maintainership of a project, a person should gain a good feel for the codebase, expertise in one or more domains, and deep understanding of our coding standards. You're probably ready to become a maintainer when both of these statements feel true:

1. You are already a codeowner in multiple subject areas
1. The MRs you've reviewed consistently make it through maintainer review without significant additionally required changes
1. The MRs you've created consistently make it through reviewer and maintainer review without significant required changes

If those subjective requirements are satisfied, this is the process to add yourself as a maintainer:

1. Create an issue in the relevant project with the title "Add <user> as project maintainer"
1. Add documentation to the issue for the following:
    - Explain why you are ready to take on the maintainer responsibility
    - Explain the scope of your maintainership (entire project, dbt, python, etc.)
    - Recent MR's that you have created and reviewed that you believe show your readiness
1. Once the issue is created, tag all other maintainers
1. If denied, close the issue and work with your manager for a period of no less than 3 months before applying again
1. If approved, create a MR to add the maintainership to your team page entry
1. Assign the MR to your manager and mention the existing maintainers of the relevant project (Infrastructure, Analytics, etc) and area (dbt, Airflow, etc.).
1. If the existing maintainers do not have significant objections we've got ourselves a new maintainer!
1. An owner of the project will increase your privilege on the project

### Merge Request Workflow

Every MR follows the applicable MR template. When a MR is ready for review, assign a code owner for review. When a code owner approves the MR, the MR can be merged by a maintainer. This could be the same person if the code owner is also a maintainer. If not, a maintainer is tagged in the MR, asking for final review and merge.

#### Merge Request approval requirements

Because of quality and [security](/handbook/security/gitlab_projects_baseline_requirements/#mr-approval-rule-configurations) we require every MR to be approved before merged with multiple Team Members involved. By default the CODEOWNER file sets that an approval is needed and by who. But if a file or folder is not present in the CODEOWNER file a MR still can be merged without approval or without other Team Members involvement. To enforce the following 2 settings must be applied on each project within the [GitLab-Data Group](https://gitlab.com/gitlab-data/).

1. `Approvals required` = `1`
[setting 1](/handbook/business-technology/data-team/how-we-work/sett1.png)
2. `Prevent approval by author` is `TRUE`
[setting 2](/handbook/business-technology/data-team/how-we-work/sett2.png)

Note: The `Approvals required` project setting is also a workaround to make the CI variable `$CI_MERGE_REQUEST_APPROVED` work correctly, [see issue](https://gitlab.com/gitlab-data/analytics/-/issues/20383#note_1922395425) for more details.
