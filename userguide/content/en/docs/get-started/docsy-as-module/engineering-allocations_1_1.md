### Engineering Allocation

While we have moved to the [cross-functional prioritization process](/handbook/product/cross-functional-prioritization/) to empower teams to determine the optimal balance of all types of issues, we will keep Engineering Allocations as a way to allow teams to quickly shift to a critical priority, designating the EM as the DRI to drive the effort.

Engineering is the DRI for mid/long term team efficiency, performance, security (incident response and anti-abuse capabilities), availability, and scalability. The expertise to proactively identify and iterate on these is squarely in the Engineering team. Whereas Product can support in performance issues as identified from customers. In some ways these efforts can be viewed as risk-mitigation or revenue protection. They also have the characteristic of being larger than one group at the stage level. Development would like to conduct an experiment to focus on initiatives that should help the organization scale appropriately in the long term.  We are treating these as a percent investment of time associated with a stage or category. The percent of investment time can be viewed as a prioritization budget outside normal Product/Development assignments.

Engineering Allocation is also used in short-term situations in conjunction and in support of maintaining acceptable Error Budgets for GitLab.com and our [GitLab-hosted first](/direction/#gitlab-hosted-first) theme.

Unless it is listed in this table, the Engineering Allocation for a stage/group is 0% and we are following normal [prioritization](/handbook/product/product-processes/#prioritization). Refer to this [page](/handbook/engineering/engineering-allocation/) for Engineering Allocation charting efforts. Some stage/groups may be allocated at a high percentage or 100%, typically indicating a situation where all available effort is to be focused on Reliability related (top 5 priorities from [prioritization table](/handbook/product/product-processes/#prioritization)) work.

During an Engineering Allocation, the EM is responsible for recognizing the problem, creating a satisfactory goal with clear success criteria, developing a plan, executing on a plan and reporting status.  It is recommended that the EM collaborate with PMs in all phases of this effort as we want PMs to feel ownership for these challenges.  This could include considering adding more/less allocation, setting the goals to be more aspirational, reviewing metrics/results, etc.   We welcome strong partnerships in this area because we are one team even when allocations are need to resolving issues critical to our business.

During periods of Engineering Allocation, the PM remains the interface between the group and the fields teams & customers. This is important because:

- It allows Engineering to remain focused on the work at hand
- It maintains continuity for the field teams - they should not have to figure out different patterns of communication for the customer
- It keeps PMs fully informed about the product's readiness

| Group/Stage | Description of Goal | Justification | Maximum % of headcount budget | People | Supporting information | EMs / DRI | PMs |
|-------------|---------------------|---------------|-------------------------------|--------|------------------------|-----------|-----|
|             |                     |               |                               |        |                        |           |     |

#### Broadcasting and communication of Engineering Allocation direction

Each allocation has a [direction page](/handbook/product/product-processes/#managing-your-product-direction) maintained by the Engineering Manager. The Engineering Manager will provide regular updates to the direction page. Steps to add a direction page are:

1. Open an MR to the [direction content](https://gitlab.com/gitlab-com/www-gitlab-com/blob/master/source/direction/)
1. Add a directory under the correct stage named for the title Engineering Allocation
1. Add a file for the page named `index.html.md` in the newly created directory

To see an example for an Engineering Allocation Direction page, see [Continuous Integration Scaling](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/source/direction/verify/continuous_integration_scaling/index.html.md). Once the Engineering Allocation is complete, delete the direction page.

#### How to get a effort added to Engineering Allocation

One of the most frequent questions we get as part of this experiment is "How does a problem get put on the Engineering Allocation list?".  The short answer is someone makes a suggestion and we add it.  Much like everyone can contribute, we would like the feedback loop for improvement and long terms goals to be robust.  So everyone should feel the empowerment to suggest an item at any time.

To help with getting items that on the list for consideration, we will be performing a survey periodically.  The survey will consist of the following questions:

1. If you were given a % of engineering development per release to work on something, what would it be?
1. How would you justify it?  Have you tried leveraging [cross-functional prioritization process](/handbook/product/cross-functional-prioritization/) before considering an engineering allocation?

We will keep the list of questions short to solicit the most input.  The survey will go out to members of the Development, Quality, Security.  After we get the results, we will consider items for potential adding as an Engineering Allocation.

#### Closing out Engineering Allocation items

Once the item's success criteria are achieved, the Engineering Manager should consult with counterparts to review whether the improvements are sustainable. Where appropriate, we should consider adding monitoring and alerting to any areas of concern that will allow us to make proactive prioritizations in future should the need arise. The Engineering Manager should close all related epics/issues, reset the allocation in the above table to the floor level, and inform the Product Manager when the allocated capacity will be available to return their focus to product prioritizations.

When reseting a groups Engineering Allocation in the table above, the goal should be set as `floor %`, the goal should be `empower every SWEs from raising reliability and security issues`, percentage of headcount allocated should be `10%`, and `N/A` in place of a link to the Epic.

All engineering allocation closures should be reviewed and approved by the [VP of Development](https://about.gitlab.com/handbook/engineering/development/#team-members).
