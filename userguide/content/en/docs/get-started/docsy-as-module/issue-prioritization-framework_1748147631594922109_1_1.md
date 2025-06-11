---
title: "Issue Prioritization Framework"
description: "Improve our Issue Prioritization Framework be factoring in Business goals, IACV, Cost into a common quantifiable representation"
status: active
---

## Attributes

| Property        | Value           |
|-----------------|-----------------|
| Date Created    | August 6, 2020  |
| Target End Date | Dec 30, 2022   |
| Slack           | [#wg_issue-prioritization](https://join.slack.com/share/zt-etotbmm9-FzhcHH0BGbw3~D4Xe5rAyg) (only accessible from within the company) |
| Google Doc      | [Working Group Agenda](https://docs.google.com/document/d/1oBWNxBSOJKrh3ubHwN5pI8243vBjJ-Y_Cax17A5abII/edit) (only accessible from within the company) |
| Docs            | [Handbook Page](/handbook/product/product-processes/customer-issues-prioritization-framework) |
| Related Issue   | [Adding context to customer's requests](https://gitlab.com/gitlab-com/sales-team/field-operations/sales-operations/-/issues/907) |
| Associated OKRs | [Increase TMAU and Paid TMAU](https://gitlab.com/gitlab-com/office-of-the-ceo/cos-team/-/issues/80) |

## Problem To Solve

- We currently do not distinguish between "nice to have", "blocker", and "this will likely cause a downgrade/churn/prevent upsell." One customer may view Feature ABC as nice to have, whereas another customer desperately needs it. The time necessary to collect this information, transfer it, and then disseminate it among departments is likely to be inefficient and error prone. It also does not solve the problem of a standardized model for determining relative priority across all stages based on quantifiable data such as impact to retained ARR or net new ARR.
- We are [currently proposing](https://gitlab.com/gitlab-com/customer-success/okrs/-/issues/23) that we establish a highly manual process where individuals will act as bridges to transfer information across departments.
- We are not leveraging our existing data to the fullest extent. Let's understand why and solve for this.

## Business Goal

- Create a standardized prioritization framework based on quantifiable data that enables us to determine urgency/value per issue/epic at scale and speed so that Product, Sales, and Customer Success can use a common language and model when discussing prioritization trade-offs.
- Product DRIs have more accurate inputs to help them globally optimize their delivery backlogs resulting in increased customer retention and acquisition.
- Positively impact Net ARR growth and improve retention of existing ARR.
- Improve the accuracy of the prioritization feedback among departments.
- Further operationalize the process of creating effective bridges between Customer Success, Sales, and Product.

### Exit Criteria

 (✅ Done, ✏️ In-progress)

#### Step 1:Determine a viable model `=> 90%`

[Issue](https://gitlab.com/gitlab-com/Product/-/issues/1457)

- ✅  `Cost of Delay / Duration` will serve as the primary model to run a pilot against.
- ✅  We've determined how to assign monetary value for issues with links to SFDC.
- ✏️ [Determine model inputs for issues that do not have SFDC links](https://gitlab.com/gitlab-com/Product/-/issues/1639).
- ✅ [Define CSM inputs](https://gitlab.com/gitlab-com/Product/-/issues/1635).

#### Step 2: Implement & validate model `=> 100%`

[Issue](https://gitlab.com/gitlab-com/Product/-/issues/1563)

- ✅ Design initial pilot and break down into tasks and DRIs.
- ✅ Identify a DRI that can complete the data related tasks.
- ✅ [Implement pilot](https://gitlab.com/gitlab-com/Product/-/issues/1563).
- ✅ Assess results and outcomes. If pass, move to Step 3. If fail, exit WG or cycle back to Step 1.

#### Step 3: Verify at scale and measure outcomes `=> 15%`

[Issue](https://gitlab.com/gitlab-com/Product/-/issues/3546)

TL;DR: Once validated, we drive adoption across Product/CS/Sales and collect measurements to confirm that this model is producing the desired business outcomes. If not, decide to go back to Step 1 or Exit.

Limited pilot (select IC PMs):

- 100% of stages participating in the pilot.
  - Current: `0 / 15`
- Process for mapping issues/epics to themes and product investments is finalized, documented, and has the support of Product, Sales, and Customer Success.
  - Current: `No`

Scaled pilot (IC PM / CSM focused) measures of success:

- `> 80%` of Product Managers regularly use the dashboards powered by the framework and find the prioritization framework an invaluable sensing mechanism as measured by quarterly survey responses.
  - Current: N/A
- `> 80%` of Customer Success Managers regularly use the dashboards powered by the framework and report a `> 30%` efficiency gain of reporting on customer requested issues as a result of utilizing the CSM dashboard as measured by quarterly survey responses.
  - Current: N/A

Verify and measure at scale:

- Improve lead time for the top 25% of customer requested issues from `x` to `y`.
  - Current: N/A
- The prioritization model and dashboard(s) are adopted as an effective replacement to using spreadsheets to manage and track Top ARR drivers.
  - Current: N/A
- `20%` increase of feature requests tagged month-over-month or quarter-over-quarter.
  - Current: N/A
- `20%` increase of Sales team members tagging feature requests month-over-month or quarter-over-quarter.
  - Current: N/A

## Roles and Responsibilities

| Working Group Role    | Person                   | Title                          |
|-----------------------|--------------------------|--------------------------------|
| Executive Sponsor     | David Sakamoto           | VP Customer Success         |
| Facilitator           | Gabe Weaver              | Senior Product Manager, Plan    |
| Functional Lead       | Israel Weeks               | Manager, Data |
| Functional Lead       | Jeff Beaumont            | Senior Manager, CS Ops |
| Functional Lead       | TBD (Sales)              | TBD |
| Member                | Patrick Harlan           | Manager, Customer Success Managers (Commercial) |
| Member                | Sophie Pouliquen         | Senior Techical Account Manager |
| Member                | Martin Brümmer         | Senior Techical Account Manager |
| Member                | Mek Stittri              | Director of Quality Engineering |
| Member                | Farnoosh Seifoddini      | Product Operations |
| Member                | Jonathan Fullam          | Solutions Architecture |
| Member                | Sherrod Patching         | Director, Customer Success Managers |

## Meetings

This working group meets bi-weekly (every other week.)

Meetings are recorded and available on YouTube in the [Working Group - Issue Prioritization Framework](https://www.youtube.com/playlist?list=PL05JrBw4t0KrKoeXjf5Bdtapu9Cl3T7gI) playlist.
Due to the subject matter of this working group and the high probability that every syncronous meeting will discuss sensitive customer information, the playlist is private and accessible by GitLab team members only.
