---

title: Team Processes
---







## Issue hygiene

### Must-haves

All issues must have the following:

- `Team::PDI` label
  - This is the label used to identify and track the team's work
- `product data insights` label
- Workflow label (ex: `workflow::1 - triage`)
- PDI priority label (ex: `pdi-priority::2`)
- Section priority label (ex: `section-priority::1`)
- Section label (ex: `section::dev`)
  - Answers the question "what section is this work supporting?"
- Stage label (ex: `devops::create`)
  - Answers the question "what stage is this work supporting?"
- Group label (ex: `group::code creation`)
  - Answers the question "what group is this work supporting?"
- Issue weight
- Iteration (once the issue is scheduled)

### Issue workflow

As mentioned above, all issues should have a workflow label. These should be kept up-to-date in
order to track the current status of an issue on our [board](https://gitlab.com/groups/gitlab-data/-/boards/2973914).
The Product Data Insights team uses a subset of the [workflow labels used by the Data team](/handbook/business-technology/data-team/how-we-work/#workflow-summary).

| Stage (Label) | Description | Completion Criteria |
| --- | --- | --- |
| `workflow::1 - triage` | New issue undergoes initial assessment | Requirements and business context are complete |
| `workflow::3 - refinement` | Issue is scoped and refined | Issue is fully scoped and refined |
| `workflow::4 - ready to develop` | Issue is waiting for development | Work starts on the issue |
| `workflow::5 - development` | Work is in-flight | Issue enters review |
| `workflow::6 - review` | Waiting for or in review | Issue meets [criteria for closure](/handbook/product/product-analysis/team-processes/#checklist-for-closing-an-issue) |
| `workflow::X - blocked` | Issue needs intervention that assignee can't perform | Work is no longer blocked |

### Blocked issues

When an issue becomes blocked:

- Apply the `workflow::X - blocked` label
- Add a comment with an explanation of why/how the issue is blocked, what is required for the
issue to be unblocked, and an estimated date of when it will be unblocked (if known)
- Link to the issue that unblocks the work (if applicable)

### Rolling over iterations

When we start a new iteration, any open issues from the previous iteration do not automatically
roll over. As such, we need to be diligent about updating issues to ensure that they do not fall
off the radar before they are completed.

At the end of an iteration, analysts should review any remaining open issues and update the
iteration value to ensure we can track the issue on [the iteration board](https://gitlab.com/groups/gitlab-data/-/boards/2973914).

### Unplanned work

Sometimes high-priority and/or urgent work comes up after an iteration starts. When an unplanned
issue is opened mid-iteration:

- Ask the stakeholder to document why the work needs to be prioritized in the issue
  - If it is unclear whether the unplanned work should be pulled into the current iteration, the
  Manager, Product Data Analysis will make the final decision on prioritization
- Apply the `Unplanned` label
- If the unplanned work is large enough to displace other planned issues, reach out to the
applicable stakeholder so they are aware that their issue is being delayed

### Issues in other projects

Sometimes issues are opened and assigned to analysts outside of the Product Data Insights and
Data team projects. As such, they are hard to track (since they will not appear on our board)
and do not count towards our velocity. In order to capture the work, analysts have the option
of opening a placeholder/tracking issue within the Product Data Insights project. The
placeholder/tracking issue should contain a link to the original issue, along with the standard
labels, iteration, weight, etc.

## Closing an issue

### Self-review

All code and issues should undergo self-review. While it may seem obvious, it is critical to
ensuring the team is producing high-quality, trustworthy work.

Self-review checklist:

- Code runs without error
- Results make logical sense
- Aggregated results match "known truths" (ex: total number of users, baseline conversion rate, etc.)
- Disaggregated version of results behaves as expected (when applicable)
  - If you follow a single entity (ex: your own activity) through the `JOIN`s and other
  manipulations, the results make sense

### Peer review

You should ask a peer to review your code and/or findings if:

- You are new to the team
- You are new to or unfamiliar with the data set
- The code is going to be reused or highly-visible (ex: Sisense snippets and dashboards)
- The code is going to be used to measure an experiment
- The output is informing a critical business decision
- You want extra eyes on it! Asking for a review is never a bad thing

Before submitting your code for peer review, please check the following:

- Code passes self-review
- Issue or code clearly specifies the objective and/or desired output
- Code is well-commented and easy to follow
  - This includes comments on `JOIN`s, values used in `WHERE` clauses, etc. When it doubt, add
    a comment
  - Consider adding aliases to column names to make references explicit
- Any specific concerns or areas to focus on are called out
  - Ex: "I want some extra eyes on this `LEFT JOIN`", "these are the two most complex CTEs", etc
  - If portions of the code have already been reviewed, call out what is new and what is unchanged

To request a review, [open an MR in the Product Data Insights project](https://gitlab.com/gitlab-data/product-analytics/-/merge_requests/new).

- Add a new directory under `code_reviews/` and use the issue number for the name
  - Ex: For a code review of issue # 60, the directory should be `code_reviews/60/`
- Add the query or code to a file within that new directory
  - Ex: `code_reviews/60/experiment_events_snippet.sql`
- Once the MR is opened, reach out to the team to see who has capacity to review
  - Do not merge the code until it has been reviewed and approved

Using MRs for reviews will allow for easy feedback and collaboration. However, the code in that
directory will become stale quickly (ex: additional changes may be made to a snippet in a
different issue), so the queries should not be considered the SSOT.

### Checklist for closing an issue

Use the following checklist before closing an issue:

- Code passed self-review and peer review (if applicable)
- Findings or results are documented in the issue
- Any additional communication through a different channel is memorialized in the issue (ex:
conversation on Slack, discussion in meeting, etc)
  - Include the actual text (even if in a screenshot) or write up a quick summary of the communication
  - Guideline: If a new team member looks at the issue in 6 months, all of the necessary context
  is included in the issue and the team member can understand the findings
- Code is included in (or linked to) the issue
  - Using a collapsed section in markdown is your friend here!
  <details markdown=1>
    <summary>Example collapsed section</summary>

    ```markdown
    <details markdown=1>
      <summary>This is the name of the section</summary>

      ```

      Add your code here

      ```

    </details>
    ```

    </details>
- Findings have been communicated to stakeholder
- Tag other DRIs (if applicable)
  - Ex: if finding has to do with Create, tag the applicable Create PM
- Stakeholder agrees that issue can be closed
  - Keep in mind rules surrounding [scope creep](/handbook/product/product-analysis/#scope-creep).
  If there are outstanding questions or follow-ups, they can be moved to a new issue and linked
- Open new issue with next steps or follow-ups and link to original issue (if applicable)

## Team velocity calculations

The Product Data Insights team uses two different measures of completed work to determine velocity,
one based in work done on issues completed during an iteration (Completed Issue Weight), and
one based on the volume of work that was done (even if the issue was not closed out) (Total
Issue Weight). In both cases, we use Analyst Working Days as the denominator.

**Completed Issue Velocity**

This is the more tradition velocity calculation outlined in on our [main handbook page](/handbook/product/product-analysis/#velocity).
It is tied exclusively to work done on issues closed during an iteration and does not account
for work on issues rolling over to the next iteration.

`Completed Issue Velocity = Completed Issue Weight / Analyst Working Days`

- "Completed issue weight" is defined as the sum of all work done on issues that were completed
during the iteration.

**Total Issue Velocity**

This is a less traditional adaptation of velocity and is used as an internal team metric. It is
intended to capture *all* work done by analysts during an iteration, even if the issue is not
closed out. Given the nature of our work, it is not uncommon for issues to roll over to the next
iteration, especially as [unplanned work](/handbook/product/product-analysis/team-processes/#unplanned-work)
comes up and shifts priorities. This version of velocity controls for those larger projects or
work that is started mid-iteration.

`Total Issue Velocity = Total Issue Weight / Analyst Working Days`

- "Total issue weight" is defined as the sum of all work done during the iteration, including
work on partially-completed issues.

Here are two examples:

1. An analyst starts an 8-point issue towards the end of an iteration and completes about a half
day (3 points) worth of work.
   - 0 points are counted towards Completed Issue Velocity
   - 3 points are counted towards Total Issue Velocity
1. In the next iteration, the analyst completes the remaining 5 points of work on the issue they
began in the previous iteration.
   - 5 points are counted towards Completed Issue Velocity
   - 5 points are counted towards Total Issue Velocity

## Workload calibration

Given the fluid nature of the Product division and shifts in company prioritization, PDI will
conduct a workload calibration twice per year. Broadly speaking, the goal of the calibration
is to ensure that the PDI workload is equitably distributed across the team. For example,
if there is a large shift in company prioritization leading to greater focus on an area of the
product, we should ensure that we are staffed such that a single analyst is not overloaded
with work.

### Goal of calibration

The workload calibration is intended to:

- Provide the best support possible to the Product division
- Set the analysts up for success by minimizing context switching and maintaining reasonable
expectations of deliverables
- Allow for a healthy work-life balance

This calibration is *not* an exercise in measuring analysts against one another with respect
to output.

### Considerations in calibration

There are several different items to consider during the calibration (not in priority order):

- Volume of incoming work
  - How often are stakeholders adding to the backlog and how much work needs to be delivered?
- Type and complexity of incoming work
  - Does incoming work mostly consist of ad hoc requests, PI chart updates, deep dives, etc?
- Relative urgency and expected turn-around time for incoming work
  - Can the analyst reasonably plan their work in advance or is there disproportionate amount
  of urgent, unplanned work?
- Volume of stakeholders
  - How many relationships does the analyst need to maintain?
- Required knowledge of the product
  - Does the analyst need to know in-depth details about vastly different features/areas of the
  product?
- Required knowledge of related data
  - Does the analyst need to be specialized in a specific data source? Does the analyst need to
  be an SME in multiple different types of data/data sources?
- Volume of "other" work
  - In addition to supporting PMs, is the analyst engaged in other cross-functional
  initiatives?
- Analyst feedback
  - Does the analyst feel like their workload is reasonable and balanced?
  - *This one is arguably the most important!*

### Mechanism of calibration

(The exact mechanism for the review is still a WIP)

Product analysts will provide input into all of the areas of consideration listed above. In
addition, PDI management will evaluate workload allocation against company priorities.

### Frequency of calibration

PDI will go through a calibration twice per year, leading into Q1 and leading into Q3. We will
aim to have calibration complete in time for analysts to appropriately engage in quarterly
planning with their stakeholders. Ideally the calibration occurs frequently enough to address
changes in priorities and imbalances in workload, but not so often that it is disruptive to
work.

Both frequency and timing of calibration can and will be revisited, if necessary.

## Style guidelines

The Product Data Insights group follows the Data team's [SQL Style Guide](/handbook/business-technology/data-team/platform/sql-style-guide/)
and best practices.

## Team meetings

1. Weekly Product Data Insights Knowledge Share & Iteration Planning
   - Attendees: Product Data Insights team
   - Goals: Weekly knowledge share and collective brainstorming. Every other week the meeting is
  extended to do iteration planning.
   - Agenda: [link](https://docs.google.com/document/d/1EdYlCOh29lENz7WB55ONHUohvUeVSXhyCcv-EAfth-I/edit?usp=sharing)
1. Product Data Insights Office Hours
   - See [main Product Data Insights handbook page](/handbook/product/product-analysis/#office-hours)

## Gearing ratios

At GitLab, we use gearing ratios as [Business Drivers](/handbook/finance/financial-planning-and-analysis/#business-drivers-also-known-as-gearing-ratios)
to forecast long term financial goals by function. The Product Data Insights group currently
focuses on one gearing ratio: Product Managers per Product Analyst. In the future, we may
consider other ratios (ex: Active Experiments per Product Analyst), but for the moment we are
focusing on the PM:Product Analyst ratio.

### Targets

The long-term target for the Product Managers per Product Analyst ratio is 3:1. The ability of
PMs to self-serve on day-to-day questions and activities is a critical component to finding
success at this ratio, and finding the best tool is a focus of the R&D Fusion Team in FY23 Q2-Q3.
In addition, we want to ensure that analysts are not spending more time context switching
(changing from one unrelated task to another) and learning the nuances of different data sets
then they are actually conducting analysis. We want our product analysts to spend their time
answering complex questions, developing or improving metrics, and making business-critical
recommendations.

In order to validate our target ratio, we looked at the practices of other large product
organizations, including LinkedIn, Intuit, HubSpot, Squarespace, iHeartRadio, and Peloton
Digital. We found that most maintained a ratio of 1.5-3 PMs per product analyst, in addition to
a self-service tool. As such, we feel comfortable setting a target of 3 PM:1 Product Analyst ratio.

### Closing the gap

The current PM:Product Analyst ratio is ~7:1 - 40 IC product managers (including current
openings) and 6 product analysts (5 ICs and 1 IC/Manager hybrid). As we work to close the gap and
move towards to the 3:1 target, we encourage PMs to leverage [office hours](/handbook/product/product-analysis/#office-hours).
