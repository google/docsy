---
title: "OKRs in GitLab"
description: "How to enter and organize OKRs in the GitLab platform."
weight: 2
---

Watch this video for a demo on how to use GitLab for OKR management:

{{< youtube "OgJI_Yf4zXs" >}}

## Creating Objectives

The objectives for the quarter are defined on this page.
To add new objectives in GitLab, follow the steps below:

1. In the [GitLab OKRs project](https://gitlab.com/gitlab-com/gitlab-OKRs), navigate to OKRs by selecting **Issues** on the left sidebar.
1. In the top right corner of the **Issues** screen, select the down arrow next to **New issue** in the top right corner and then select **New objective** from the menu. Next, select the **New objective** button to [create an Objective](https://docs.gitlab.com/ee/user/okrs#create-an-objective).
1. Enter a short but descriptive title for the objective then click **Create objective**.
    1. When referring to a division, use the division name, not the e-group leader's position. For example, use "Marketing OKRs" (not "CMO OKRs").
1. Select the objective from the list to open in an editable view and add more details:
    1. Identify the owner for the objective and assign them.
         1. Ensure that only one [DRI](/handbook/people-group/directly-responsible-individuals/) is assigned to the objective. If there is a case of multi-ownership, it's likely that the OKR/KR can be simplified or broken down further.
    1. Identify the quarter for the objective and set the corresponding milestone.
    1. Add labels so objective is [searchable/filterable](#search-and-filter-okrs):
        1. Add `OKR` label.
        1. Add [division label](https://gitlab.com/gitlab-com/gitlab-OKRs/-/labels?subscribed=&search=division) to assign to the relevant division (i.e. Sales, Product, etc).
            1. Company OKRs are designated with a division::CEO scoped label.
        1. Only Product & Engineering cascade OKRs below division level, so for Product & Engineering OKRs, in addition to division labels, follow [stage labels](https://docs.gitlab.com/ee/development/labels/index.html#stage-labels) to add the Section/Stage/Group scoped labels to assign the OKR to the relevant parts of [Product Hierarchy](/handbook/product/categories/#hierarchy).
        1. Each part of hierarchy should have a label. For example, an OKR for a group would have a division label, a section label, a stage label, and a group label.
1. Review the objective against the [SAFE Framework](/handbook/legal/safe-framework/) to ensure it is information that can be shared. Review to ensure that the objective should not be [limited access](/handbook/communication/confidentiality-levels/#internal). If the information is limited access, use code name if relevant or link to a supporting issue that is limited access.

## Creating Key Results

Each [Objective](#creating-objectives) will contain one or more sub-objectives or key results. Sub-objectives are only used to cascade OKR down a level in [organizational structure](/handbook/company/structure/#layers) while [Key Results are the measure](okrs-basics.md#what-are-okrs) which helps us understand if we've met our objective and can be cascaded down a level of organization structure to become an objective one level down. Key Results must be created as part of an Objective and cannot be created independent of an Objective since Key Results [should be linked](/handbook/company/okrs/#criteria-for-key-results:~:text=Linked%20%2D%20Be%20aligned%20to%20an%20Objective%20and%20be%20relevant%20to%20teams%20one%20level%20down%3B%20this%20alignment%20also%20allows%20KRs%20to%20easily%20roll%20down%20to%20become%20objectives%20one%20level%20down.) to an Objective.

Since [Key Results are the measure](okrs-basics.md#what-are-okrs) that helps us understand if we've met our Objective, Key Results are aligned to the same, single layer of the [organizational structure](/handbook/company/structure/#layers) as their parent Objective and not a Key Result for multiple layers of organizational structure. However, Key Results can be cascaded down from this single organizational structure layer by becoming Objectives in the next organizational level down - see [Cascading OKRs](#cascading-okrs-and-how-to-align-division-okrs-to-the-company-okrs).

To add new key results in GitLab, follow the steps below:

1. Navigate to the objective that you want to add a child key result to by opening the [GitLab OKRs project](https://gitlab.com/gitlab-com/gitlab-OKRs), selecting **Issues** on the left sidebar, then clicking on the target objective.
1. [Add new key result](https://docs.gitlab.com/ee/user/okrs#add-a-child-key-result) by clicking **Add** in the **Child objectives and key results** section of an objective and then select **New key result**. Use the [SAFE framework](/handbook/legal/safe-framework/) to determine whether it needs to have limited access.
1. Enter a short but descriptive title for the key result then click **Create key result**.
    1. When referring to a division, use the division name, not the e-group leader's position. For example, use "Marketing KR" (not "CMO KR").
1. Select the key result from the list in the **Child objectives and key results** section to open in an editable view and add more details:
    1. Identify the owner for the key result and assign them.
        1. Ensure that only one [DRI](/handbook/people-group/directly-responsible-individuals/) is assigned to the KR. If there is a case of multi-ownership, it's likely that the OKR/KR can be simplified or broken down further.
    1. Identify the quarter for the key result and set the start date as the first date of that quarter and set the due date to the last day of that quarter.
    1. Add labels so that KR is [searchable/filterable](#search-and-filter-okrs):
        1. Add `OKR` label.
        1. Add [division label](https://gitlab.com/gitlab-com/gitlab-OKRs/-/labels?subscribed=&search=division) to assign to the relevant division (i.e. Sales, Product, etc). Company OKRs are designated with a `division::CEO` scoped label.
        1. Only Product & Engineering cascade OKRs below division level. For Product & Engineering OKRs, in addition to division labels, follow [stage labels](https://docs.gitlab.com/ee/development/labels/index.html#stage-labels) to add the Section/Stage/Group scoped labels to assign the OKR to the relevant parts of [Product Hierarchy](/handbook/product/categories/#hierarchy).
        1. Each part of hierarchy should have a label. For example, an OKR for a group would have a division label, a section label, a stage label, and a group label.
1. Review the key result against the [SAFE Framework](/handbook/legal/safe-framework/) to ensure it is information that can be shared. Review to ensure that information should not be [limited access](/handbook/communication/confidentiality-levels/#internal). If the information is limited access, use code name if relevant or link to a supporting issue that is limited access.
1. Optionally, [turn on check-in reminders](https://docs.gitlab.com/ee/user/okrs.html).
1. The key result now appears in the **Child objectives and key results** section of the corresponding parent objective.

Watch this video for a demo on how to create objectives and key results:

{{< youtube "QmOM7J0Tu0o" >}}

## Cascading OKRs and how to Align Division OKRs to the company OKRs

Cascading is the process by which top-level company OKRs cascade down from company-level to division, department, team, and sometimes individual level.
The OKRs that are directly aligned with Company KRs should be tied to the Company KRs in such a way as to allow scoring.

At GitLab, we typically create OKRs at each level where some OKRs align with the levels above, but not all.

Based on the current methodology and feature set in the product, there are two ways to align OKRs to company OKRs:

1. [Add relevant OKRs as related items](#method-1-add-relevant-okrs-as-related-items). Most of the time, this is what teams use.
1. [Have all relevant OKRs as children of a Company KR](#method-2-add-all-okrs-as-children-of-company-kr).

The second method should be used only if *all* relevant OKRs can be added as children, because **Progress** is automatically scored based on the children if any exist.

In the future, when [manual scoring is available](https://gitlab.com/gitlab-org/incubation-engineering/okr/meta/-/issues/38), a mix of the two methods can be used for a single KR.

If an OKR is related, but does not score towards the Company KR, edit the description to add a note.

### Creating company OKRs

To allow for division, department, or team objectives to be added as child objectives or KRs, the Company key results should be created as an objective, not as a key result, as GitLab functionality doesn't allow for a KR to have child OKRs.

The Office of the CEO does the following:

1. Create the Company objective.
1. Create the Company key results as child objectives of the Company objective.

Once company OKRs are created, other divisions and departments following one of the two methods *for team OKRs that score towards company OKRs*.

### Method 1: Add relevant OKRs as related items

Typically at GitLab, divisions create OKRs to automatically have progress score towards division objectives.
To indicate that a division KR should also show progress of a Company KR, add the division KR as a related item of the Company KR following these instructions:

1. Click on the [relevant Company KR](https://gitlab.com/gitlab-com/gitlab-OKRs/-/issues/?state=opened&label_name%5B%5D=CEO%20OKR) to [add related items](https://docs.gitlab.com/ee/user/okrs.html#linked-items-in-okrs).
1. Click **Add** in the **Linked items** section.
1. Click inside of **the following item(s)** text field.
1. Find (enter text to filter) and select 1 or more objective(s) or KR(s) that should score to the Company KR.
1. Click **Add** to add the selected OKR(s).

Do this for all OKRs that contribute to company OKRs.
However, be careful not to link an OKR to multiple Company KRs.

When this method is used, the Office of the CEO will update the score manually based on the scoring of all related items.

A hypothetical example where division KRs score directly to division objectives, and should also progress a Company KR:

1. Company Objective: Retain and grow top talent -- automatically scores from KRs including KR1
   1. KR 1: Have 10% of managers enrolled in leadership program -- manually scored based on related items
      1. Related: Sales OKR: Have 10% of managers enrolled in leadership program -- child of and automatically scores to CRO Objective
      1. Related: Marketing OKR: Have 10% of managers enrolled in leadership program -- child of and automatically scores to CMO Objective

#### Method 2: Add all OKRs as children of Company KR

This method should only be used if all OKRs that will score towards the Company KR can be children of the KR,
because the Company KR progress is automatically scored based on its children.
The hierarchy looks similar to this:

1. Company objective
    1. Company KR (a GitLab objective)
        1. Division objective
            1. Division KR
            1. Division KR

To add the division OKRs as children of the relevant Company KR:

1. Click on the Company KR you want to be the new parent for an objective/key result.
1. Click **Add** in the **Child objectives and key results** section of the Company KR.
1. Create team objective or KR as a child objective of the relevant Company KR (Company KR will be a GitLab objective).
1. If the team objectives or KRs already exist, [find the objective or key result for alignment](https://docs.gitlab.com/ee/user/okrs#child-objectives-and-key-results) by typing the name of the OKR in the search bar that appears in the **Child objectives and key results** section. See [documentation to add a child objective](https://docs.gitlab.com/ee/user/okrs#add-a-child-objective).
1. If applicable, add the team key results as children inside of the team objective.
1. Ensure they have an assignee, labels, etc. [following guidelines on Creating Key Results](#creating-key-results).

A hypothetical example where division OKRs score directly to a company OKR:

1. Company Objective: Retain and grow top talent -- automatically scores from KRs including KR1
   1. KR 1: Have 10% of managers enrolled in leadership program -- automatically scores from child OKRs
      1. CRO OKR: Have 10% of managers enrolled in leadership program
      1. CMO OKR: Have 10% of managers enrolled in leadership program
      1. etc. (all divisions participating should be added)

Note: Using this method, if you need to track the team objective or KRs separately, you can take a look at [Engineering's guidance on tracking department OKRs](/handbook/engineering/okrs/#tracking-department-okrs). If you need the team objective or KRs to score to another parent objective, duplicating the OKR is currently the only way to do so.

## Search and Filter OKRs

1. You can use the List view to filter by the assignee or by your team using labels. For example:
    1. [This view](https://gitlab.com/gitlab-com/gitlab-OKRs/-/issues/?sort=created_date&state=opened&label_name%5B%5D=division%3A%3AEngineering&first_page_size=100) shows all engineering division OKRs. Division::engineering label can be swapped out for any other division/stage/section/group scoped label.
    1. [This view](https://gitlab.com/gitlab-com/gitlab-OKRs/-/issues/?sort=created_date&state=opened&assignee_username%5B%5D=sytses&first_page_size=100) shows all OKRs assigned to `@sytses`
1. You can bookmark or share the URL for future reference.

Watch this video for a demo on how to find the OKRs you're looking for:

{{< youtube "-wFJqtJQMHo" >}}
