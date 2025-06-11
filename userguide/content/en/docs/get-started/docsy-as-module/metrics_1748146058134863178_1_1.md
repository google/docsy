---
title: "Engineering Metrics"
description: Overview of key Engineering Productivity metrics
---

## Engineering Analytics Dashboard Inventory

Several dashboards have been published to the Engineering project in the Tableau environment. Below is a brief overview of some of the dashboards created and where you can find them.

### Centralized Engineering Metrics

Please refer to our Centralized Engineering Metrics page [here](/handbook/product/groups/product-analysis/engineering/dashboards/).

### Tableau Dashboards

You can find published dashboards in [Production/Engineering/General](https://10az.online.tableau.com/#/site/gitlab/projects/367732). These dashboards are safe for general use by the Tableau User population here at GitLab.

## Productivity Engineering Metrics

### Overview

To help our teams work better and faster, we track specific metrics that measure how efficiently we handle merge requests (MRs). These metrics focus on all **product-related MRs**, ensuring we capture contributions that directly impact the product. These metrics give us a clear picture of how long it takes for MRs to go through the review process, how quickly reviewers respond, and how much our teams are contributing overall.

#### What’s Included?

* Our metrics includes all MRs affecting the product.
* The specific projects included in the dataset are listed in [this seed file](https://gitlab.com/gitlab-data/analytics/-/blob/master/transform/snowflake-dbt/seeds/seed_engineering/projects_part_of_product.csv?ref_type=heads). 

By using this consistent dataset, we can ensure our metrics reflect the work that matters most for product development and improvement.

This section explains four key metrics we use—**Review Time to Merge (RTTM)**, **Reviewer First Engagement Time (RFET)**, **Merge Request Rates (MR Rates)**, and **Mean Time to Merge (MTTM)**. These metrics highlight areas where we’re doing well and where we can improve.

### Review Time to Merge (RTTM)

[Tableau Link](https://10az.online.tableau.com/#/site/gitlab/workbooks/2162529/views)

#### What It Means

* This measures how long it takes from when a merge request is first assigned to a reviewer until it’s merged into the codebase.
* It doesn’t check if the reviewer actually engaged—it simply tracks the time starting from the first review assignment.

#### Why It Matters

* RTTM tells us how efficient our review process is overall.
* If RTTM is consistently high, it might mean there are delays or bottlenecks that we need to address.

### Reviewer First Engagement Time (RFET)

[Tableau Link](https://10az.online.tableau.com/#/site/gitlab/workbooks/2889679/views)

#### What It Means

* This tracks how long it takes for a reviewer to respond after being assigned to an MR.
* A “response” could mean leaving a comment, giving feedback, or taking action on the MR.

#### Why It Matters

* RFET helps us understand how quickly reviewers start engaging with their assignments.
* It’s a good way to measure responsiveness and ensure timely collaboration.

### Merge Request Rates (MR Rates)

[Tableau Link](https://10az.online.tableau.com/#/site/gitlab/workbooks/2284105/views)

Merge Request (MR) Rate is a measure of productivity and efficiency. The numerator is a typically a collection of merge requests to a set of projects.  The denominator is a collection of people based on the `job title specialty` field in Workday. Both are tracked over time (usually monthly). The [stages.yml file](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/stages.yml) is the SSOT for group names. We rely on a mapping between the group name in this file to the job title specialty field in Workday. A mismatch between the two would cause team members or MRs not to be counted.

You can use [this MR Rate troubleshooting dashboard](https://10az.online.tableau.com/#/site/gitlab/views/DevelopmentEmbeddedDashboard_17017859046500/MergeRequestRates) to check the number of team members that are counted each month. If the monthly team member count is less than expected, refer to the table to see which team member is missing.

To update the job title speciality field, please refer to the guidelines listed [here](/handbook/people-group/promotions-transfers/#job-title-specialty-changes)

#### What It Means

When looking at how productive a team is with their Merge Requests (MRs), we use two different ways to calculate MR rates:

1. MR Rate by Group Label:
   * This metric looks at all MRs that match a specific group label (e.g., "code review" or "container registry") and compares that to the total number of team members associated with that group. Team member information comes from the Workday job title speciality field.
   * This metric gives you a **high-level view** of how active a group is in contributing MRs. It includes MRs made by anyone who used the group label, even if they’re not part of the official team. This makes it a broader measure that reflects overall output tied to a group’s work. In other words, it’s a focused way to see how much work is being done within a particular group.
2. Team MR Rate:
   * This metric focuses only on MRs that match the group label and are authored by members of that team. It divides those MRs by the number of team members officially listed in that group. Team member information comes from the Workday job title speciality field.
   * This metric shows the direct contributions of the team itself. It removes outside contributions, giving you a clearer picture of the team's internal activity.

#### Why Have Two Metircs?

Having both metrics allows you to see productivity from two angles:

1. The Big Picture (MR Rate by Group Label):
   * Helps you understand how much work is being done overall within a group’s area of focus, regardless of who is contributing.
   * Useful for spotting trends in how much attention or effort is being put into a specific group label, even if it’s by contributors outside the official team.
2. The Team Focus (Team MR Rate):
   * Provides insight into how active the team itself is in contributing to their group’s goals.
   * Highlights whether the team is meeting expectations or if external contributors are carrying the bulk of the work. Are certain teams being overworked? Do other teams need more support?

#### When to Use Each Metric

* Use **MR Rate by Group Label** when you want a broad view of a group’s impact, including all contributors.
* Use **Team MR Rate** when you need to evaluate the specific contributions and productivity of the team itself.

### Understanding Department-Level MR Rates

#### Development Department MR Rate

For the Development Department, we include team members from **Development**, **Core Development**, and **Expansion**. The numerator for this metric is the **total number of product MRs (all MRs tied to the product)**, and the denominator is the **number of team members across these combined departments**. Unlike more focused metrics (e.g., Team MR Rate), this metric doesn’t filter by group or author. It simply tracks all MRs affecting the product, ensuring no contributions are overlooked.

#### Understanding MR Rates for Departments Outside Development

For departments outside the Development Department, such as Support, Core/Internal Infrastructure, and others, we take a different approach to measuring MR rates. This is because these departments often lack distinct labels to identify whether an MR aligns with their work.

For these departments, the MR rate is calculated as the **number of MRs authored by team members within the department**, divided by the **total number of team members in that department**.

* Why we measure this way:
  * No Distinct Labels:
    * Unlike Development, these departments don’t have group labels that clearly indicate which MRs belong to them. Using authored MRs ensures we’re accurately capturing their work.
  * Focuses on Team-Specific Contributions:
    * This approach highlights the contributions of team members within the department, providing a clearer picture of their productivity.

### Review Rates

[Tableau Link](https://10az.online.tableau.com/#/site/gitlab/views/AverageReviewTime/ReviewStatsbyUser)

#### What It Means

Review rates measures the number of code reviews a team member completes within a specific timeframe. While merge request rate tracks how many changes are integrated into the codebase and it is an important productivity measurement, review rate is another important productivity metric and it keeps the records of reviews a team member provides. Data team maintains a table of review activities on merge requests. A review is counted as long as the code review was conducted no matter whether the team member remained in the `Reviewers` list or not.

#### Why It Matters

Code review often takes significant amount of time and it's a critical step of moving merge requests to completion. Counting review rates recognizes the contribution of reviwers and encourages team members to provide thorough code reviews which in turn ensures our product quality.

### Mean Time to Merge (MTTM)

[Tableau Link](https://10az.online.tableau.com/#/site/gitlab/workbooks/2372920/views)

#### What It Means

* MTTM tracks the time from when a merge request is created to when it’s merged into the codebase.
* This is a broader metric that includes both the review process and any additional delays before the MR is merged.

#### Why It Matters

* MTTM gives us a big-picture view of the overall time it takes to merge code, capturing inefficiencies or bottlenecks across the entire lifecycle of an MR.
* A high MTTM may suggest issues in areas like MR creation, review assignment, or the actual merge process.

Do you have any suggestions to improve these metrics? Feel free to drop us a note by creating a new [Product Data Insights issue](https://gitlab.com/gitlab-data/product-analytics/-/issues/new).

### Work Type Classification

We use the following type labels to classify our Issues and Merge Requests.

The 3 types (Bug, Feature & Maintenance) is key to our report to industry analysts. It is important for GitLab to communicate effort spent into a format that is easily understandable widely in the industry. We provide this [metric](https://10az.online.tableau.com/#/site/gitlab/workbooks/2228822/views) to our leadership reporting and improve the accuracy with subtypes categorization. The 3 top level types can be applied without having to apply a sub-category type.

1. `~"type::bug"`: Defects in shipped code and fixes for those defects. Read more about [features vs bugs](/handbook/product/product-processes/#issues).
   * `~"bug::performance"`: Performance defects or response time degradation
   * `~"bug::availability"`: Defects related to GitLab SaaS availability. See [the definition](/handbook/engineering/infrastructure/engineering-productivity/issue-triage/#availability) for more guidance.
   * `~"bug::vulnerability"`: Defects related to Security Vulnerabilities
   * `~"bug::mobile"`: Defects encountered on Mobile Devices
   * `~"bug::functional"`: Functional defects resulting from feature changes
   * `~"bug::ux"`: Unexpected and unintended behavior that is detrimental to the user experience.
   * `~"bug::transient"`: Defects that are transient.
   * _Note:_ **New** documentation or **new** feature flags that relate to `~"type::bug"` are considered `~"type::bug"`.
1. `~"type::feature"`: Effort to deliver new features, feature changes & improvements. Read more about [features vs bugs](/handbook/product/product-processes/#issues).
   * `~"feature::addition"`: The first MVC that gives GitLab users a foundation of new capabilities that were previously unavailable. Includes [good user value, usability, and tests](https://about.gitlab.com/blog/2021/12/01/dont-confuse-these-twelve-shortcuts-with-iteration/). For example, these issues together helped create the first MVC for our Reviewer feature: [Create a Reviewers sidebar widget](https://gitlab.com/gitlab-org/gitlab/-/issues/237921), [Show which reviewers have commented on an MR](https://gitlab.com/gitlab-org/gitlab/-/issues/10294), [Add reviewers to MR form](https://gitlab.com/gitlab-org/gitlab/-/issues/216054), [Increase MR counter on navbar when user is designated as reviewer](https://gitlab.com/gitlab-org/gitlab/-/issues/255102)
   * `~"feature::enhancement"`: Subsequent user-facing improvements that refine the initial MVC by adding additional capabilities that make it more useful. Includes [good user value, usability, and tests](https://about.gitlab.com/blog/2021/12/01/dont-confuse-these-twelve-shortcuts-with-iteration/). For example, these issues enhance the existing Reviewer feature: [Show MRs where user is designated as a Reviewer on the MR list page](https://gitlab.com/gitlab-org/gitlab/-/issues/237922), [Display which approval rules match a given reviewer](https://gitlab.com/gitlab-org/gitlab/-/issues/233736), [Add Reviewers quick action](https://gitlab.com/gitlab-org/gitlab/-/issues/241244)
   * `~"feature::consolidation"`: Merging a feature into an existing feature for simplification. For example, [Workspace project: (Consolidate Groups and Projects)](https://gitlab.com/groups/gitlab-org/-/epics/6473) and [Combine Top Navigation Menu](https://gitlab.com/groups/gitlab-org/-/epics/5645) are good examples of such work.
   * _Note:_ **New** documentation or **new** feature flags that relate to `~"type::feature"` are considered `~"type::feature"`.
1. `~"type::maintenance"`: Upkeeping efforts & catch-up corrective improvements that are not Features nor Bugs. This includes removing or altering feature flags, removing whole features, merge requests that only include new specs or tests, documentation updates/changes (not including new documentation), restructuring for long-term maintainability, stability, reducing technical debt, improving the contributor experience, or upgrading dependencies and packages. For example: [Refactoring the CI YAML config parser](https://gitlab.com/gitlab-org/gitlab-foss/-/issues/15060), [Updating software versions in our tech stack](https://gitlab.com/gitlab-org/ci-cd/codequality/-/issues/22), [Recalculating UUIDs for vulnerabilities using UUIDv5](https://gitlab.com/gitlab-org/gitlab/-/issues/212322)
   * `~"maintenance::refactor"`: Simplifying or restructuring existing code or documentation
   * `~"maintenance::removal"`: Deprecation and removal of a functionality when it's no longer needed.
   * `~"maintenance::dependency"`: Dependency updates and their version upgrades
   * `~"maintenance::scalability"`: Modification to improve the scalability of GitLab that is not a user facing change or performance improvement. For example changing a column from INT to BIGINT.
   * `~"maintenance::usability"`: General improvements to product usability that are unrelated to feature prioritization. For example, [UI component](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/80903) and [UI text](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/80457) updates for consistency with Pajamas and [usability improvements](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/79888).
   * `~"maintenance::test-gap"`: Test coverage improvements that were not included in feature prioritization.
   * `~"maintenance::pipelines"`: Pipeline related changes.
   * `~"maintenance::workflow"`: Improvements of the engineering tooling like Danger, RuboCop, linters, issue templates, etc.
   * `~"maintenance::performance"`: Non-defect performance improvements such as load time for a specific page or component, or run time for a specific process.
   * `~"maintenance::release"`: Release management related changes.

If these labels are missing, it will be tracked in the `undefined` bucket instead.
The Engineering Manager for each team is ultimately responsible for ensuring that these labels are set correctly. If you do not feel the purpose of this issue matches one of the types, you may apply the `~type::ignore` label to exclude it from type tracking metrics and future prompts, this can be good for issues marked `~Planning Issue`.

Classifying work types may require context. All work to deliver a feature with security, performance and quality meeting the [definition of done](https://docs.gitlab.com/development/contributing/merge_request_workflow/#mr-merge) should be classified as feature work. For example if you are anticipating the performance needs of a feature and implement an application limit as part of the introduction of that feature it should be classified as `feature:addition`. If you discovered an issue scaling an existing feature and implemented an application limit that issue would likely start as a bug and the associated MR would be classified as `bug:performance`.

#### More examples of classifications

Below are additional examples to guide you when questions arise about classifying your MRs. These edge cases are designed to help clarify the distinctions between categories, ensuring that each piece of work is accurately captured. Refer to these scenarios to better understand how to categorize tasks that may not fit neatly into standard classifications.

* `~"type::feature"`
  * An addition made to an available feature that was not part of the original acceptance criteria
  * A change made to a feature (including fixes for defects) while the greater feature is still behind a default-off feature flag
  * Additions to an API
  * Iterative MRs created to complete a full feature
* `~"type::bug"`
  * Missing functionality that was part of original acceptance criteria
* `~"type::maintenance"`
  * Infrastructure scaling initiatives that do not involve direct
    customer-facing updates
  * Upgrade of a dependency
  * Bumping a version without code changes
  * Docs only update

### Type labels on merged MRs

As of %16.7, with certain [internal projects](https://gitlab.com/gitlab-com/Product/-/issues/12779), type labels are locked once an associated MR is merged. More details can be found in the [feature implementation issue](https://gitlab.com/gitlab-org/gitlab/-/issues/408676).

### Spike work

Large efforts will occasionally undergo a spike to identify & research technical approaches to complete the work. Spike efforts shall be classified with the following guidelines:

1. Classifying the spike based on type of work that the spike will result in. For example:
   * A spike to enhance a feature should be classified as `~"feature::enhancement"` and `~"type::feature"`
   * A spike to update dependencies, upgrade versions of underlying libraries should be classified as `~"maintenance::dependency"` and `~"type::maintenance"`
1. If the spike will result in multiple types of work, choose the type that is of the majority of the resulting work (e.g. more than half).

### Additional guidance

#### `~"Community contribution"`

`~"Community contribution"` was intended to track community contributions as a top-level type, but it's now only a facet label and a merge request should always get a proper type label set in addition.

Community contributions are welcome in all areas of GitLab, so any type label can be set on `~"Community contribution"` merge requests.

#### `~"security"`

`~"security"` was intended to track security-related merge requests as a top-level type, but it's now only a facet label and a merge request should always get a proper type label set in addition.

This guidance may be helpful if you are wondering the go-forward type label based on your use case for applying `~"security"`:

* `~"type::feature"` for new security features that aren't fixing an existing vulnerability
* `~"type::bug"` for any other security changes

#### `~"documentation"`

`~"documentation"` was intended to track documentation-only merge requests as a top-level type, but it's now only a facet label and a merge request should always get a proper type label set in addition.

This guidance may be helpful if you are wondering the go-forward type label based on your use case for applying `~"documentation"`:

* `~"type::feature"` for new feature documentation (this type would usually be already set on merge requests that introduce a new feature)
* `~"type::maintenance"` for any other documentation changes

#### `~"backstage"`

`~"backstage"` was intended to be changes that were done to keep product development running smoothly. Over time, `~"backstage"` was also being used for pre-feature work and has become unclear and confusing. `~"backstage"` was deprecated as part of <https://gitlab.com/gitlab-org/quality/team-tasks/-/issues/488>. This will be removed with <https://gitlab.com/gitlab-org/quality/triage-ops/-/issues/483>.

This guidance may be helpful if you are wondering the go-forward type label based on your use case for applying `~"backstage"`:

* `~"type::maintenance"`
  * for industry standard and refactoring changes such as: `~"technical debt"`, `~"railsx.y"`, `~"Architecture Decision"`, non-`~"security"` `~"dependency update"`
  * for addition or updates to specs for existing GitLab features
* `~"type::feature"`
  * and `~"feature::addition"` for all changes related to the release of a new feature
  * and `~"feature::enhancement"` for user-facing improvements that refine the initial MVC to make it more useful and usable.
* `~"maintenance::workflow"` for changes to engineering workflows such as `~"Danger bot"`, `~"static analysis"`, release tooling, Docs tooling changes
* `~"maintenance::pipelines"` for changes to project pipeline configurations

### Stage and Group labels

In the spirit of "Everyone can Contribute" it's natural that members in a group will contribute to another group.

We allow flexibility where the parent `devops::xxx` and child `group::xxx` label may not match. For example:

* In the case where labelling was corrected by a human.
* When working on shared `frontend`, `backend` components or `type::tooling` work that spans multiple groups.

If a contribution happens across groups, we leave it to the discretion of the engineering and product manager to change the `group::xxx` label to reflect which group worked on it.
They can also decide if they want to move over the `devops::xxx` as well or keep it to reflect the product area.
The [triage bot](https://gitlab.com/gitlab-org/quality/triage-ops/) automatic labelling will not override existing labels.

## Projects that are part of the product

In the MR Rate and Volume of MR calculations, we consider MRs from projects that contributes to the overall product efforts.

The current list of projects are identified in the [`gitlab-data/analytics`](https://gitlab.com/gitlab-data/analytics) project for the following system databases:

| System Database | File |
|-----------------|------|
| GitLab.com      | [`projects_part_of_product.csv`](https://gitlab.com/gitlab-data/analytics/-/blob/master/transform/snowflake-dbt/seeds/seed_engineering/projects_part_of_product.csv) |
| ops.gitlab.net  | [`projects_part_of_product_ops.csv`](https://gitlab.com/gitlab-data/analytics/-/blob/master/transform/snowflake-dbt/seeds/seed_engineering/projects_part_of_product_ops.csv) |
