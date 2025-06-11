### Cross-Functional Prioritization

#### Purpose

1. Achieve and maintain an optimal balance of new features, security fixes, availability work, performance improvements, bug fixes, etc. via a framework that helps drive conversations and alignment. Balance across these categories will allow GitLab to operate in a way that will allow us to meet revenue goals and maintain the stability of our platform.
1. Give voice to everyone in the quad (PM, Development, Quality, and UX)
1. Provide transparency into prioritization and work status to internal and external stakeholders so they can advocate for their work items

#### Implementation Philosophy

The quad members (UX/Design, Quality, Product Management, Development) utilizing this process should focus on:

- Achieving the key results of the process
- Ensuring that there is transparency in both the quad for the group and with interested parties outside the group

As long as the quad achieves these goals, they are encouraged to apply the process as appropriate based any unique characteristics of their group and also tailor the process based on how the team prefers to operate.

#### Cross-functional milestone planning

To support GitLab's long-term product health and stability while keeping the pace of new features for users, teams are asked to plan their milestones with an appropriate ratio of `type::feature`, `type::maintenance`, and `type:bug` work.  When labeling if the label selection for an issue or merge request isn't obvious, don't spend more than 60 seconds to decide and make a best effort to choose the most appropriate label.

If one of these labels clearly doesn't apply for an issue, consider using the `type::ignore` label. This will exclude the issue from automation and dashboards used to do cross-functional prioritization and metrics tracking for the product. It is highly important we have accurate data, so please only use this label if the issue clearly does not pertain directly to Engineering changes to the product itself. This label will typically apply to issues used for planning or to track a process. For example, you could use the `type::ignore` label for a milestone planning issue where the issue's purpose is organization and will not have MRs directly associated with it.

A team's ratio might change over time and different teams may have different ratios. Factors that influence what ratio is appropriate for a given team include the [product category maturity](https://about.gitlab.com/direction/maturity/), the area of the product they are working in, and the evolving needs of GitLab the business. Teams should review labeling for accuracy and minimize the number of `type::undefined` items. This allows us to review the plans at the group, section, and company level with team members to ensure we appropriately prioritize based on cross-functional perspectives.

For more details on these three work types, please see the section on [work type classification](https://about.gitlab.com/handbook/engineering/metrics/#work-type-classification).  The development EM is the DRI to ensure that the merge requests are accurateliy labeled.

#### Prioritization for feature, maintenance, and bugs

Our backlog should be prioritized on an ongoing basis. Prioritization will be done via quad planning (collaboration between product, development, quality, UX) with PM as the DRI for the milestone plan. PMs, EMs, Quality, and UX will provide the following:

1. Product Manager provides prioritized `type::feature` issues
1. Engineering Manager in development provides prioritized `type::maintenance` issues
1. [Test Platform Managers](https://about.gitlab.com/handbook/engineering/infrastructure/test-platform/#milestone-planning) provide prioritized `type::bug` issues using the [bug prioritization dashboard](https://10az.online.tableau.com/t/gitlab/views/OpenBugAgeOBA/BugPrioritizationDashboard)

*Note: UX-related work items would be prioritized in accordance with the appropriate sub-types. UX related bugs are included in the automated process (S1/2 and so on), UX-related maintenance items will be included in the EM's prioritized list, Product (feature) UX items will have been included as part of our normal [Product Development Flow](https://about.gitlab.com/handbook/product-development-flow/).*

The DRIs of these three core areas will work collaboratively to ensure the overall prioritization of the backlog is in alignment with [section direction](https://about.gitlab.com/direction/#devops-stages) or any other necessary product and business needs. If a team is not assigned a Product Designer then there is no UX counterpart needed for prioritization purposes. PMs will prioritize the final plan for a given milestone.

#### Planning for the milestone

The Product Manager is responsible for planning each milestone. Product Managers are also responsible for ensuring that their team's target ratios are maintained over time.

1. The PM keeps the overall prioritized backlogs (roughly) following the agreed-upon type ratios and guidance from their EM, QEM, and UX counterparts. The engineering team picks the issues from the backlog into the milestone without changing the prioritization.
   1. Pick based on what you think a common backlog would look like and note the expected ratio of features/maintenance/bugs.
   1. Teams working on net-new product functionality may have a much higher feature work percentage.
   1. Conversly, teams with more mature product categories may have more maintence work.
1. Sequencing of work within the milestone should reflect that we [plan ambitiously](/handbook/product/product-principles/#how-this-impacts-planning). This means not every issue will be delivered. Be aware that this can skew your ratios over time if subsequent milestones are not properly re-balanced.

Add the `milestone` ([example](https://gitlab.com/groups/gitlab-org/-/boards/4309441?label_name[]=group%3A%3Athreat%20insights&milestone_title=15.1)) to review the milestone plan. The board will show the number of issues and cumulative issue weights for `type::feature`, `type::maintenance`, and `type::bug` issues.

#### Cross-Functional Dashboard Reviews

Cross-functional reviews will be done at the group, stage/section, and company level.

##### When to review?

When the data is up-to-date and accurate.  See the [timeline](https://about.gitlab.com/handbook/engineering/workflow/#product-development-timeline)

##### What to review in advance?

Review the [dashboard](https://10az.online.tableau.com/t/gitlab/views/DRAFTIssueTypesDetail/MilestoneIssuesDashboard) filtered for the review scope (group, section, etc).

##### Questions to ask

Context:

1. What groups/sections does this review cover?
1. Is the dashboard accurate? Are the number of issues in the dashboard within 5% of the SSOT (the issues themselves)?  If not, what needs to be done to correct?

Maintenance/quality:

1. Are the % of undefined issues < 1% for the timeframe being analyzed?  If not, what should be done to correct?
1. Are the % of undefined merge requests < 1% for the timeframe being analyzed?  If not, what should be done to correct?
1. How do error budgets look?
1. Are past due bugs being prevented/prioritized as appropriate?
1. Are usability issues being prioritized as appropriate?
1. Are security issues being prioritized as appropriate?
1. Are infrastructure backlog issues being prioritized as appropriate?
1. Are maintenance priorities from the engineering development manager being prioritized as appropriate?

Features:

1. How is the group addressing the product investment themes?
1. How do revenue drivers impact plans for this group?
1. How are customer requests being addressed for this group?

Trends:

1. Evaluate the percentage ratios of completed work (feature / maintenance / bug) for the previous milestone/timeframe against the team's planned ratio for that milestone.
1. Is there predictability from milestone to milestone (number of issues or issue weight per release)?
1. Compare the planned milestone with the previous months [merge request trends](https://10az.online.tableau.com/t/gitlab/views/DRAFTMergeRequestTypes/MergeRequestTypes) for the team.  Any trends to note?
1. What overall trends does the group want to highlight?
1. What flags do you want to raise?  What won't happen?

##### Group level review

The review collaboration can be done in a way that's most effective for the group, either synchronously (e.g. scheduled recurring call) or asynchronously (e.g. such as in retrospective issues).

Required collaborators from the quad for the group are:

- Product designer
- Quality lead
- Product manager
- Engineering development manager

The managers of the required collaborators should be included as optional participants.

##### Stage/section level review

The stage/section review is coordinated by each direct report of the VP of Development.

Required collaborators from the quad for the stage/section are:

- Product designer leader(s) for the stage/section
- Quality lead leader(s) for the stage/section
- Stage product leader(s) for the stage/section
- Engineering development directors/senior managers(s) for the stage/section

Optional collaborators who should be invited but not required to participate:

- The managers of the required collaborators should be optional participants.
- The [functional leads for the next prioritization working group](/handbook/company/working-groups/cross-functional-prioritization/#roles-and-responsibilities).

The collaboration should be async first but include an optional sync review amongst stakeholders.

The name of the meeting and associated agenda document should be clearly defined so that the invitees can decide if they should attend.

##### Company-wide review

The company-wide review is coordinated by the VP of Development.

Required collaborators from the quad for the stage/section are:

- CTO
- VP of Product
- VP of UX
- VP of Quality
- VP of Development
- VP of Security
- VP of Infrastructure

Optional collaborators who should be invited but not required to participate:

- The [functional leads for the next prioritization working group](/handbook/company/working-groups/cross-functional-prioritization/#roles-and-responsibilities).
