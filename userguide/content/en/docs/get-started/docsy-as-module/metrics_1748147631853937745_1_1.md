---
title: "Metrics & Tableau Dashboards"
description: Learn about the dashboards that are used in community-related dashboards!
---

### Dashboards we use

To view the dashboard your browser must allow third-party cookies.

- [Wider Community PIs](https://us-west-2b.online.tableau.com/t/gitlabpublic/views/WiderCommunityPIsPart1/WiderCommunityPIsDashboardPart1)
  - Unique Wider Community Contributors per Month
  - Amount of MRs created, merged & closed
  - Time between MR created and merged (OCMA)
  - Time between MR ready for review & reviewed
- [Leading Organizations PIs](https://us-west-2b.online.tableau.com/t/gitlabpublic/views/LeadingOrganizationsPIsPart1/LeadingOrganizationsPIsPart1)
  - Time to review SLO
  - Open MRs from Leading Organizations & their age
- [MRARR Dashboard](https://10az.online.tableau.com/t/gitlab/views/MRARRDashboard_17055242209630/MRARRDashboard)
  - Customers ARR * Number of MRs
  - Shows how we are doing towards the target
- [MRARR Diagnostics](https://10az.online.tableau.com/t/gitlab/views/MRARRDiagnostics/MRARRDiagnostics)
  - Identifies MRs from customers that are not being tracked yet
  - Identifies projects with contributions that are not being tracked yet
  - See [Contributing Orgs tracker](/handbook/marketing/developer-relations/contributor-success/contributing-org-tracker/) for details

## Tableau dashboard

### `product_community_contribution_mrs`

Merge requests with ~"Community contribution" label, opened in
[projects that are part of the product](/handbook/product/groups/product-analysis/engineering/dashboards/#projects-that-are-part-of-the-product).

The results include MR type, MR age, MR labels, MR stage, MR group, MR section.

#### Finding the absolute Merge Request URL

It includes 4 joins of the `gitlab_dotcom_groups_xf` table. This is because it is hard to understand the entire hierarchy from the namespace itself. A namespace can be nested within a group of a group of a group, or deeper. So it's important to find the entire hierarchy so we can re-assemble the full URL path of this particular Merge Request.

The end result could be, in the maximum form: `https://gitlab.com/group4/group3/group2/group1/project_path/merge_requests/merge_request_id`

#### Categorization of MRs

Given that not all MRs have type labels yet, we try to guess the type based on existing labels. In the snippet you can clearly see the 3 types being represented (feature, maintenance, bug).

#### Last Active Date

The snippet also goes to great lengths to find out when a merge request was last active. Given that the state could either be open, merged or closed, it has a different logic for each state to understand what the last active date was. Using this date, it can then be used to understand the amount of days the merge request was or is open for, also known as Merge Request Age.

#### Excluding users from the report

There are certain authors or MRs that are excluded from the reports as they belong to the GitLab organization and should not be accounted for when looking at our Community MR metrics. If you do see authors that should be excluded, they should be added to this snippet so they can be excluded from the metrics in the future. Example users are the GitLab Bot, Release Bot, Reviewer/Recommender Bot, etc...

### `community_contributions_base`

Similar to `product_community_contribution_mrs`, but the results include MR lifecycle data (time to triage, time to first review, projected days to merge etc).
