---
title: "Customer Issues Prioritization Framework"
---

## Context

The Customer Prioritization Framework was developed by the [Issue Prioritization Framework Working Group](/handbook/company/working-groups/issue-prioritization-framework/) as a way to improve the efficiency of the feedback loops among Sales, Customer Success, and Product. It provides a comprehensive system to categorize and measure customer, and prospective customer, demand for capabilities within GitLab. This page covers how the first iteration of the model works and how to interact with and interpret, the [not public, internal-only](/handbook/communication/confidentiality-levels/#not-public) dashboards that it powers.

The outcomes the framework is aimed at providing:

1. **Collaboration & Transparency:** Provide quantitative data at scale that enables various GitLab departments and teams to evaluate and discuss customer and prospect needs in an "apples to apples" manner.
1. **Efficiency:** Increase the efficiency of GitLab team members by leveraging a single model to replace many manual, tedious, and time-consuming processes such as maintaining the Top ARR Spreadsheet, Customer Success Managers tracking customer requests in issue descriptions within collaboration projects or external spreadsheets, and product managers scouring dozens issues and many external sources to gather information about customer priorities.
1. **Results:** Establish a fair "influence economy" across all customers and prospects to help keep the focus on delivering results that are inclusive of all customers. Provide GitLab leadership with simple mechanisms to change the global prioritization of customer issues across R&D depending on the desired growth and retention outcomes.

## Where to provide feedback

- [Product Feedback](https://gitlab.com/gitlab-com/Product/-/issues/3546)
- [Customer Success Feedback](https://gitlab.com/gitlab-com/Product/-/issues/3545)
- [Sales Feedback](https://gitlab.com/gitlab-com/Product/-/issues/3895)

## Use cases this framework was designed to support

### Product

> "What problems should I prioritize solving that would have the greatest impact on ARR retention and growth?"
>
> "How can I easily find all of the customers interested in a given issue or all of the issues a given customer cares about?"
>
> "Where should we consider investing additional resources relative to customer needs?"
>
> "Which groups are critical to retaining ARR and which are critical to growing ARR?"
>
> "How can I most easily influence global prioritization of customer related needs across all of Product?"

### Sales

> "What is the ratio of net new ARR to renewable ARR that is driving product feature requests?"
>
> "How much existing account ARR is at stake vs. potential new opportunity net ARR?"
>
> "How can I communicate my prospect's needs such that they are appropriately prioritized in a timely manner?"

### Customer success

> "How can I easily see and track a list of issues requested by my customers without having to manually compile and maintain a list that requires constantly check-in on when solutions are expectd to be shipped."
>
> "How can I most efficiently and effectively communicate the relative priorities of my customer's needs to Product?"
>
> "How can I raise the visibility of, and escalate appropriately, my customer's support tickets?"

## Quickstart

1. To view a list of requested issues by customer, stage, CSM, or category, visit the [Customer Requested Issues (Product) dashboard](https://10az.online.tableau.com/#/site/gitlab/workbooks/2015827/views) and apply the relevant filters.
1. To add a customer or opportunity to an open issue or epic, follow the process outlined below in ["Customer Links"](/handbook/product/product-processes/customer-issues-prioritization-framework/#customer-links).
1. Optionally, watch the [walk-through (10m 20s)](https://www.youtube.com/watch?v=ZUxIxp_Pv5k&list=PL05JrBw4t0KrKoeXjf5Bdtapu9Cl3T7gI&index=17&pp=sAQB).

## Framework Inputs and Outputs

The customer prioritization framework is loosely based on concepts rooted in [cost of delay](https://en.wikipedia.org/wiki/Cost_of_delay) and [CD3](https://blackswanfarming.com/cost-of-delay-divided-by-duration/). **Important:** While ARR is a key input to determining value, the scores are derivitive measurements and should not be conflated with the notion that if a given issue or epic is delivered, GitLab's ARR will increase by the derivative score amount or the customer is guaranteed to continue buying GitLab.

There are many inputs to the framework with the underlying goal of segmenting and measuring the value of an open issue on the basis of how it will contribute to the retention of current ARR and/or growth of net new ARR, and to do so within the context of every other issue in order to get a better understanding of what customer requested issues we could prioritize within R&D to significantly impact retaining existing customers or growing net ARR via landing or expanding.

The model is re-calculated on a daily basis to incorporate the dynamic nature of the inputs. Changes made to issues/epics on any given day will be reflected in the dashboards the following day.

The framework is powered by a model that consists of several key components:

- Customer links
- Priority points
- Priority point value
- Retention score
- Growth score
- Combined Score
- Priority Score
- Weighted priority score

### Customer links

To link an account, opportunity, or support ticket to an issue or epic, [use the feedback template and Salesforce/Zendesk link](/handbook/product/product-management/#a-customer-expressed-interest-in-a-feature) to add a comment to the issue or epic in `gitlab-org` or any project or sub-group within this top-level namespace (ex: `/gitlab-org/gitlab`). For best results, only include one Salesforce or Zendesk link per comment. If you want to "unlink" an account from an issue or epic, simply remove the Salesforce or Zendesk link from the respective comment(s) on the issue or epic.

Supported link types:

- **Zendesk Ticket:** Use the link of a Zendesk ticket to connect a customer support request to an issue or epic. This will map the issue or epic to the customer's `CARR (total)` field value in Salesforce.
- **Salesforce Opportunity (Growth):** Use the link of a Salesforce opportunity when the opportunity represents net new ARR. Typically this would map to the following order types in Salesforce: `1. New - First Order`, `2. New - Connected`, and `3. Growth`. This will map the issue or epic to the Net ARR in the linked opportunity.
- **Salesforce Account (Retention):** Use the link of a Salesforce account for all other use cases that don't directly correlate to net new ARR. This will map the issue or epic to the customer's `CARR (total)`

#### Edge cases worth highlighting

1. If there is no `~customer priority::` label present, a default value of `1` is assigned.
1. There can only be one `~customer priority::` label per description or comment. If there are multiple Salesforce or Zendesk links referenced in the same comment or description, we will attribute the first `~customer priority::` label to all of the links found in the comment or description.
1. If multiple comments or references on an issue link to the same account or opportunity, the most recently updated comment is used.
1. If an issue is marked as a duplicate of another issue, the GitLab team member will need to add the comment with the link and `~customer priority::` label to the respective open issue.
1. For completeness sake, `/gitlab-org/...` issues that are referenced in a customer's collaboration project creates an automated link between the account and the issue/epic, but the recommended path to take full advantage of the model is to add a comment directly to the `/gitlab-org/...` issue as `~customer priority::` can't be defined from a collaboration project.

### Theme labels

You can add any number of `~theme:...` labels to issues or epics to enable aggregating priority score grouped by theme labels within the dashboard. Using theme labels is a helpful for tool for segmenting different groups of related customer requested issues. **Note:** Aggregate values are not de-duplicated among all theme labels. For example, if the priority score of Issue A is 100 and it has two theme labels, the value aggregated for each theme label will be 100.

### Priority points

You can think about a priority point representing a "vote" on an issue or epic. Each customer or prospective customer starts with a retention priority point pool and growth priority pool of 0. When a Salesforce or Zendesk link is added to an issues or epic, we default to attributing 1 "vote" to the issue to either the retention or growth priority point pool depending on which type of link was referenced.

Optionally using the `~customer priority::2` through `~customer priority::10` label in the same comment as the Salesforce or Zendesk link provides a mechanism to cast additional votes (up to 10) on a single issue. There is no upper bound on how many retention or growth priority points a customer can "vote" in total across all issues. The fewer points, the more value each point will represent. The converse is also true. The more points that are distributed across issues, the less value each point will carry.

If you are adding a link to an issue or epic, here are some guidelines on how to think about which `customer priority::` label to use:

1. Priority should be a function of the customer or prospect's ability to fully realize the value of GitLab to solve their business needs.
1. The needs of customers evolve over time, so it's a good idea to regularly update comments with existing links to reflect the changes of the priority of the given issue or epic to a customer.
1. When in doubt, ask the customer or prospect something along the lines of, "On a scale of 1-10, how important is a solution to your particular use case in terms of being able to effectively utilize GitLab to solve your immediate business needs"?

| Label | Impact |
| ----- | ------ |
| `~customer priority::10` | **Blocker:** The account is likely to churn or we will not be able to win the opportunity because the customer or prospect is unable to address their business needs.  |
| `~customer priority::9` | |
| `~customer priority::8` | |
| `~customer priority::7`  | **Critical:** Not having an adequate solution to the problem is causing a significant loss of productivity or inability to achieve the desired business outcomes.|
| `~customer priority::6` | |
| `~customer priority::5` | |
| `~customer priority::4`  | **Major:** There is currently a workaround, but it's not ideal and should be addressed in the near future. |
| `~customer priority::3` | |
| `~customer priority::2` | |
| `~customer priority::1`  | **Low:** Purely a quality of life improvement but does not prevent the customer or prospect from realizing the value of GitLab. |

### Priority point value

The value of one retention or growth priority point where the value is unique to each account as it represents a distribution of the account CARR for retention or total open opportunity net ARR for growth. It is calculated by counting the total number of retention and growth priority points an account has across all issues and epics to which they are linked.

`retention priority point value = account CARR / SUM(retention priority points)`

`growth priority point value = open opportunity net ARR / SUM(growth priority points)`

### Retention score

The score of an issue or epic taking into account all retention priority points and their respective values from all accounts that are linked to the issue. This effectively represents all account CARR evenly distributed across all linked issues in a non-duplicated manner.

The value for each account is calculated on a per issue basis as follows:

`account retention score = ~customer priority::1-10 x retention priority point value`

Once we have the scores for each unique account that is linked to an issue or epic, we sum them to get the retention score for the issue:

`retention score = SUM(account retention score, account retention score, ...)`

### Growth score

The score of an issue or epic taking into account all growth priority points and their respective values from all open opportunities that are linked to the issue. This effectively represents all open opportunity net ARR evenly distributed across all linked issues in a non-duplicated manner.

The value for each opportunity is calculated on a per issue basis as follows:

`account growth score = ~customer priority::1-10 x growth priority point value`

Once we have the scores for each unique account's opportunities that are linked to an issue or epic, we sum them to get the growth score for the issue:

`growth score = SUM(account growth score, account growth score, ...)`

### Combined Score

This represents the combined score for growth and retention:

`combined score = SUM(retention score, growth score)`

### Priority Score

Urgency allows us to incorporate the dimension of time into the overall prioritization model. The value ranges can be updated at any point in time depending on how GitLab leadership would like to globally influence prioritization across all product teams.

Retention urgency is a function of a customer's [overall health as defined in Gainsight](/handbook/customer-success/csm/health-score-triage/) and their renewal date.

| Overall Health | Renewal > 18 mo. | Renewal > 12 mo. | Renewal > 6 mo. |
|---------------|------------------|------------------|-----------------|
| Unknown       | 1                | 1                | 1               |
| Green         | 1                | 1                | 1               |
| Yellow        | 1.5              | 2                | 2.5             |
| Red           | 2                | 3                | 4               |

Growth urgency is a function of an opportunity close date and win probability. The value ranges were determined based on the observed distribution of probabilities and close dates across all open opportunities.

| Opportunity Probability (%) | Close Date > 6 mo. | Close Date = 3-6 mo. | Close Date = 0-3 mo. |
|---------------|------------------|------------------|-----------------|
| Unknown       | 1                | 1                | 1               |
| 61-100%       | 1                | 1                | 1               |
| 40-60%        | 1.25             | 1.5              | 2.0             |
| 0-39%         | 1.5              | 2.0              | 2.5             |

Priority score is calculated similar to how retention score, growth score, and combined score but layers in the dimension of retention and growth urgency to the model.

1. Calculate account retention scores with urgency for an issue - `account retention score with urgency = account retention score x account urgency`
1. Aggregate account retention scores with urgency - `retention score with urgency = SUM(account retention score with urgency, account retention score with urgency, ...)`
1. Calculate account growth scores with urgency for an issue - `account growth score with urgency = account growth score x opportunity urgency`
1. Aggregate account growth scores with urgency - `growth score with urgency = SUM(account growth score with urgency, account growth score with urgency, ...)`
1. Lastly, calculate the priority score by summing retention and growth urgency scores - `priority score = SUM(account score with urgency, account score with urgency, ...)`

### Weighted Priority Score

The priority score of the issue or epic that is inclusive of effort where effort is the weight of the issue or the sum of all issues within an epic. If there is no weight defined, a `Input Weight` message will be shown which links to the issue or epic that needs to be estimated by the relevant product group.

`weighted priority score = priority score / weight`

The higher the value, the higher the return that will be realized relative to the investment required.

### Practical Example

Please refer to [this spreadsheet for a practical example](https://docs.google.com/spreadsheets/d/1XxmnF4FqFWpGxA-t4iifWwoTiWumxGD4jVw-EksArLU/edit#gid=0) of how the model calculates each of the computed fields. In the example, there is only a single customer, but the same methodology applies to how scores are aggregated for a given issue or epic across all customers and prospective customers.

## Dashboards

### Product user requested issue prioritization

[View dashboard in Tableau](https://10az.online.tableau.com/#/site/gitlab/workbooks/2015827/views)

Column definitions:

- `Notable ID`: The ID of the issue or epic.
- `Notable Type`: If the link is on an issue or epic.
- `Notable Title`: The title of the issue or epic.
- `Group`: The relevant [product group](/handbook/product/categories/#hierarchy) that is the DRI for the issue or epic.
- `Stage`: The relevant [stage](/handbook/product/categories/#hierarchy) to which the issue or epic belongs.
- `Category`: The relevant [category](/handbook/product/categories/#hierarchy) to which the issue or epic belongs.
- `Notable Weight`: The weight of the issue or the aggregate weight of all issues within an epic.
- `Milestone`: The milestone to which the issue is currently assigned or the furthest out milestone to which an issue within an epic is assigned.
- `Upvote Count`: The number of 👍 an issue or epic currently has.
- `Unique Accounts`: The number of unique SFDC accounts linked to the issue or epic.
- `Customer Reach`: The number of total licenses across all SFDC accounts linked to an issue.
- `Retention Score`: [See "Retention score"](#retention-score)
- `Growth Score`: [See "Growth score"](#growth-score)
- `Combined Score`: [See "Combined score"](#combined-score)
- `Priority Score`: [See "Priority score"](#priority-score)
- `Weighted Priority Score`: [See "Weighted priority score"](#weighted-priority-score)

Filters:

- Notable ID
- Customer Heath Score
- Product Group
- Product Section
- Product Stage
- Salesforce Account Name
- Customer Success Manager
- Strategic Account Executive / Account Owner
- Sales Segment
- Aggregation
- Date Range

### CSM user requested issue prioritization

[View dashboard in Tableau](https://10az.online.tableau.com/#/site/gitlab/workbooks/2015827/views)

Column definitions:

- `Link Last Updated Date:` The date the comment or descrption containing the link on the issue or epic was last updated.
- `Milestone:` The milestone the issue or epic is scheduled to be completed.
- `Deliverable:` Whether or not the relevant engineering team has committed to delivering the issue or epic within the scheduled milestone.
- `CRM Account Name:` The customer or prospect name from their respective SFDC account.
- `Issue Epic Title:` The title of the issue or epic.
- `User Request Link:` Which type of link is referenced on the issue. Account and ZenDesk ticket are retention while an opportunity is growth.

Filters:

- Customer Success Manager
- Salesforce Account Name
- Strategic Account Executive / Account Owner
- Sales Segment
- Notable Type
- Notable ID
- Customer Health Score
- Product Stage
- Product Section
- Product Group
- Customer/Account

## Roadmap

1. [v1.1 Improvements](https://gitlab.com/gitlab-com/Product/-/issues/4170)
1. [Provide snapshots of the data](https://gitlab.com/gitlab-com/Product/-/issues/3361) to better understand historical trends.
1. [Explore how incorporate non-customer issues and epics](https://gitlab.com/gitlab-com/Product/-/issues/1639) such as longer horizon market opportunities and other types of work items (bugs, infradev, security, and so on) that product managers routinely need to schedule.
1. Determine the best method for [pushing prioritization data back into GitLab](https://gitlab.com/gitlab-com/Product/-/issues/1637).

## Resources

- [Issue Prioritization Framework Working Group](/handbook/company/working-groups/issue-prioritization-framework/)
- Slack channel: `#wg_issue_prioritization`
- [Top-level epic](https://gitlab.com/groups/gitlab-com/-/epics/928)
- [Unfiltered (private) playlist](https://www.youtube.com/playlist?list=PL05JrBw4t0KrKoeXjf5Bdtapu9Cl3T7gI)
- [Case study on the "Cost of Delay / Duration" methodology](https://gitlab.com/gitlab-com/Product/uploads/fb6e33af006253cb7420689f83fcf644/black-swan-farming__3_.epub)
