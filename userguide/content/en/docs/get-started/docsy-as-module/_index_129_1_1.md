---
title: Custom Models Group
description: "The Custom Models group focuses on additional, custom models that power GitLab Duo functionality in support of our customers unique data and use-cases."
---

## Vision

The Custom Models group focuses on additional, custom models that power GitLab Duo functionality in support of our customers unique data and use-cases.

## Organisation

The AI-powered:Custom Models team focuses on GitLab's suite of Custom Model features and is responsible for all backend aspects of the product categories that fall under the [Custom Models group](/handbook/product/categories/#custom-models-group) of the [AI Powered stage](/handbook/product/categories/#ai-powered-stage) of the [DevOps lifecycle](/handbook/product/categories/#devops-stages). Our Product direction is found on the [Category Direction - Custom Models Management](https://about.gitlab.com/direction/ai-powered/custom_models/) page.

The features we work with are listed on the [Features by Group Page](/handbook/product/categories/features/#custom-models).

### Team Members

**Engineering Manager & Engineers**

Engineering Manager: [@m_gill](https://gitlab.com/m_gill)
Acting Manager: [@eduardobonet](https://gitlab.com/eduardobonet)

{{< team-by-manager-slug manager="m_gill" team="AI-Powered:Custom Models" >}}

**Product, Design & Quality**

Product Manager: [@susie.bee](https://gitlab.com/susie.bee)

{{% engineering/stable-counterparts manager-role="Engineering Manager(.*)Custom Models" role="Custom Models" %}}

### How to reach us

- Issue Tracker: [`~group::custom models`](https://gitlab.com/dashboard/issues?sort=title_asc&state=opened&label_name[]=group::custom+models)
- Slack Channel: [#g_custom_models](https://gitlab.enterprise.slack.com/archives/C06DCB3N96F)
- Label Subscription: [`~group::custom models`](https://gitlab.com/groups/gitlab-com/-/labels?subscribed=&search=group%3A%3Acustom+models)

#### Organisational Labels

Issues owned by the Custom Models group should have these labels, as appropriate:

- `~"group::custom models"`
- `~"devops::ai-powered"`
- `~"section::data science"`
- `~"Category:Model personalization"`
- `~"Category:Self-Hosted models"`

In addition, issues should contain the relevant `~type:` and subtype labels.

## Team Milestone Planning Process

Custom Models follows the [Product Development Flow](/handbook/product-development/product-development-flow/) and [Cross Functional Prioritization](/handbook/engineering/cross-functional-prioritization/). The team uses a planning issue and boards to manage the planning process. [Planning automation](https://gitlab.com/gitlab-org/ai-powered/custom-models/custom-models/-/blob/main/doc/planning/index.md) scripts are available to make this process easier.
[Planning issues](https://gitlab.com/groups/gitlab-org/-/epics/13440) for each milestone are created by the PM and are used to coordinate upcoming work between the PM, EM and stable counterparts.

During each milestone, planning is completed for the next milestone. The following activities are undertaken:

- Creation of planning issues and boards (EM or PM)
- Refinement issues are created every week via [automation](https://gitlab.com/gitlab-org/ai-powered/custom-models/custom-models/-/merge_requests/95)
- Identification of candidate issues for the milestone and addition to Planning Board (PM, EM, SET)
- Team member capacity planning (EM)
- Estimation of effort using weights (Engineers and EM)
- Joint planning session to finialise the planning board (PM, EM, SET)
- Assignment of work to engineers, addition of the `~Deliverable` label, update to the planning issue (EM)

### Planning Issue

Each month a planning issue is created by the PM, using automation and the [Custom Models Planning template](https://gitlab.com/gitlab-org/ai-powered/custom-models/custom-models/-/blob/main/.gitlab/issue_templates/milestone-planning-template.md). This is the discussion area for the planning team members (PM, EM, and Software Engineer in Test (SET)) for a specific milestone and links to the Planning and Build Boards.

### Planning Board

The [Planning Board](https://gitlab.com/groups/gitlab-org/-/boards/7762631?milestone_title=17.7&label_name[]=group%3A%3Acustom%20models) is created for each milestone by the PM, and is a curated list of issues by category. The planning board can be overloaded with issues; the excess will be moved to the next milestone or to the Next 1-3 Milestones board during the planning call.

The PM marks issues with `~workflow::planning breakdown`, this signals to the EM to request engineers to review the issue description to ensure it is clear and ready for development. The engineer then assigns a weight and applies the `~workflow::ready for development` label.

### Automation for Issue Refinement

Every week, a new issue is created within [Custom Models project](https://gitlab.com/gitlab-org/ai-powered/custom-models/custom-models) to help with issue refinement.

Engineers refine issues weekly by reviewing tasks, estimating their complexity, and preparing them for development. During the refinement process, they evaluate the work required, add implementation plans when needed, add a [weight](#issue-weights), and mark issues as [ready for development](#ready-for-development-status). This process ensures issues are well-defined before development begins.

### Ready for Development Status

Issues that are ready to be worked on by an engineer are labeled `workflow::ready for development`. Only issues with this label should be assigned to an engineer as a Deliverable. If research is required, the `~spike` label is assigned, but the scope of the spike should be clearly stated in the issue and an outcome might be code written or a refined issue created.

### Capacity Planning Spreadsheet

The EM maintains a [Google Sheet](https://docs.google.com/spreadsheets/d/18LhwZpsJ6G-1GBv0EDOq0E7EIAMpgsHqEg8Dn5GJmz0/edit#gid=1428069441) _GitLab internal only_ for calculating team capacity, and the same Spreadsheet is also used to perform the process of assigning issues to the release based on weight and priority. The EM posts the team capacity on the Planning Issue.

### Build Board

The EM selects issues from the [Planning Board](#planning-board) based on:

- previous milestone slippage
- PM preference
- weight
- priority

The EM then applies the `~Deliverable` label to each issue in the Release and assigns then to an engineer. The issues are tracked throughout the release with the Build Board.

### Say / Do Ratio

The Say / Do ratio is calculated by the using formula `Completed Issues / Assigned Issues`.

- Issues added to the Build Board with the `~Deliverable` label are the Assigned Issues
- Issues closed by the end of the milestone are the Completed Issues

### Issue Weights

A weight is assigned to each issue as an estimation of work to close the issue. A weight of 1 is approximately 2 working days of effort. Generally issues are not weighted above a weight of 3: larger weights indicate the issue should be broken down further.

### Planning and Delivery Boards

All workflow statuses in the [Product Development Flow](/handbook/product-development/product-development-flow/) are valid, and the statuses and milestones tied to boards are below.

The [Next 1-3](https://gitlab.com/groups/gitlab-org/-/boards/7472817?milestone_title=Next%201-3%20releases&label_name[]=group%3A%3Acustom%20models) and [Next 4-6 milestones](https://gitlab.com/groups/gitlab-org/-/boards/7472821?milestone_title=Next%204-6%20releases&label_name[]=group%3A%3Acustom%20models) boards are used to house issues which need refinement or are ready to be worked on.

| Board       | Filters           | Columns            |
|-------------|-------------------|--------------------|
| Planning Board | Milestone, `~group::custom models` | `~type::bug`, `~type::maintenance`, `~type::feature` |
| Build Board    | Milestone, `~group::custom models`, `~Deliverable` | `~workflow::ready for development`, `~workflow::in dev`, `~workflow::in review`, `~workflow::awaiting security release`, `~workflow::blocked` |
| Next 1-3 Milestones | `%Next 1-3 Milestones` | `~workflow::problem validation`, `~workflow::problem validation`, `~workflow::design`, `~workflow::solution validation`, `~workflow::planning breakdown`, `~workflow::ready for development`     |
| Next 4-6 Milestones | `%Next 4-6 Milestones` | Same as `Next 1-3 Milestones`     |

### Issue Milestones

- Issues are assigned the current or next milestone if they are planned to be worked on or are currently being worked on.
- A milestone of `%Backlog` is assigned if issues are not intended to be worked on, although they may be addressed by a community contribution.
- Issues with a milestone of `%Awaiting Customer Feedback` may be worked on, pending customer interest.

The [issue triage report](https://gitlab.com/gitlab-org/quality/triage-reports/-/issues/17099) highlights issues which need a milestone assignment.

## Blog Posts

Blog posts written by Custom Model's team members

- [Developing GitLab Duo: How we validate and test AI models at scale](https://about.gitlab.com/blog/2024/05/09/developing-gitlab-duo-how-we-validate-and-test-ai-models-at-scale/) [@susie.bee](https://gitlab.com/susie.bee)
- [GitLab Duo Self-Hosted: Enterprise AI built for data privacy](https://about.gitlab.com/blog/2025/02/27/gitlab-duo-self-hosted-enterprise-ai-built-for-data-privacy/) [@susie.bee](https://gitlab.com/susie.bee)

## Communication

The Custom Models communicates based on the following guidelines:

1. Always prefer async communication over sync meetings.
1. Don't shy away from arranging a [sync call](#ad-hoc-sync-calls) when async is proving inefficient, however endevour record it to share with team members.
1. [Transparency by Default](/handbook/security/transparency-by-default/)
1. The primary channel for work-related communication is the [#g_custom_models](https://gitlab.enterprise.slack.com/archives/C06DCB3N96F) Slack channel.
1. Internal team issues and projects are namespaced under [`gitlab-org/ai-powered/custom-models`](https://gitlab.com/gitlab-org/ai-powered/custom-models)

## LLM Judges

In developing LLM-backed applications, the Custom Models team can use different LLMs as judges
for model evaluation purposes. The Custom Models team has been granted permission to use OpenAI models as Judges, with these requirements:

- With respect to inputs, be sure not to provide any proprietary, SAFE, or otherwise sensitive information as an input to OpenAI models, as OpenAI is permitted to use our inputs to improve their services.
- With respect to outputs, as per our usual restriction, please ensure that no ChatGPT- or GPT-generated outputs are added to GitLab issues, MRs, marketing materials, or other content.
- We can’t automatically or programmatically extract data or output from the models, i.e. likely no automated benchmarking. Similarly, we can’t interfere with or disrupt their services, including circumvent any rate limits or restrictions.
- We can opt out of OpenAI using our inputs/outputs to train their models so please do so by following the instructions [here](https://help.openai.com/en/articles/5722486-how-your-data-is-used-to-improve-model-performance).

See [this internal note](https://gitlab.com/gitlab-org/gitlab/-/issues/470559#note_1997562193) for more context.

## Asking for help

For supporting customers, create a [request for help issue](https://gitlab.com/gitlab-com/request-for-help/-/issues/new?description_template=SupportTemplateRequest-SelfHostedModels), and share on with the [#g_custom_models](https://gitlab.enterprise.slack.com/archives/C06DCB3N96F) Slack channel.

Don't hesitate to ask for help from other team members with the [#g_custom_models](https://gitlab.enterprise.slack.com/archives/C06DCB3N96F) Slack channel.

## Customer support

To better support calls with customers (existing and prospects), Custom Models provides engineers that will prioritize customer support requests. This ensures both
load and knowledge are shared across team members.

| First Date | Last Date | Lead engineer | Backup engineer |
|------------|-----------|---------------|------------------|
| Feb 10     | Feb 16    | @eduardobonet | @mhamda          |
| Feb 17     | Feb 23    | @mhamda       | @manojmj         |
| Feb 24     | Mar 2     | @manojmj      | @jpcyiza         |
| Mar 3      | Mar 9     | @jpcyiza      | @bcardoso-       |
| Mar 10     | Mar 16    | @bcardoso-    | @eduardobonet    |
| Mar 17     | Mar 23    | @eduardobonet | @mhamda          |
| Mar 24     | Mar 30    | @mhamda       | @manojmj         |
| Mar 31     | Apr 7     | @manojmj      | @jpcyiza         |
| Apr 8      | Apr 13    | @jpcyiza      | @bcardoso-       |
| Apr 14     | Apr 20    | @eduardobonet | @mhamda          |
| Apr 21     | Apr 27    | @mhamda       | @manojmj         |
| Apr 28     | May 4     | @manojmj      | @jpcyiza         |
| May 5      | May 11    | @jpcyiza      | @eduardobonet    |
| May 12     | May 18    | @eduardobonet | @mhamda          |
| May 19     | May 25    | @mhamda       | @manojmj         |
| May 26     | Jun 1     | @manojmj      | @jpcyiza         |

During on call period, support requests should be acknowledge within 24h.

### Responsibilities of lead engineer in support

- Triage [Requests for Help](https://gitlab.com/gitlab-com/request-for-help/-/issues/?sort=created_date&state=opened&label_name%5B%5D=group%3A%3Acustom%20models&first_page_size=20).
- Monitor income requests on [#g_custom_models](https://gitlab.enterprise.slack.com/archives/C06DCB3N96F) Slack channel.
- Make sure requests for help issues are created.
- Answer support questions on slack, redirecting to our documentation whenever possible.
- Join customer calls led by Solution Architects or Sales representatives when needed, and own the communication with the customer until it's resolved or handed over to a support engineer.
- Act on outcomes of problems faced:
   1. Can we add documentation to help SA's and customers be more self-sufficient?
   1. Could the issue be improved by better tooling? Create an issue with the changes needed.
   1. Was it a bug that we didn't caught? How can we avoid this the next time?
- Notify the engineering manager and a backup engineer in advance if you won't be available.
- Hand over the necessary context to the next engineer in support.

It is NOT expected for engineers in support to:

- To be available outside of their preferred working hours, but some requests might be urgent and should be tackled first thing on the next working day. Consult with the engineering manager and the product manager on those situations
- Lead customer calls, unless discussed otherwise for a specific case
- Present demos, unless discussed otherwise for a specific case

### Responsibilities of backup engineers

- Join customer calls as a shadow. Your main role is to observe and listen closely to the interactions and issues discussed, but also be prepared to assist the lead engineer upon request.
- Support the lead engineer in support in case they are not available due to unforseen circumstances.
- Carry over unfinished support tasks from previous week.

## Acknowledgement of Pings

If you are pinged by name in either Slack or GitLab, please acknowledge the ping by either:

- A threaded comment
- An emoji

## Time Off

Team members should add any [Paid Time Off](/handbook/people-group/paid-time-off/) in the "Workday" slack app, so that the Engineering Manager can use the proper number of days off during capacity planning. Where possible, try to add time off a full milestone in advance.

It is recognised there can always be last-minute, unplanned PTO needs. Please take any time you need, but enter it into Workday and communicate with the EM as soon as you can.

## Ad-hoc sync calls

We operate using async communication by default. There are times when a sync discussion can be beneficial and we encourage team members to schedule sync calls with the required team members as needed.
