---
title: Product Data Insights
description: Product Data Insights team handbook
---

## Product Data Insights Handbook

The Product Data Insights group consists of a team of product analysts. This group reports to
the VP, Product Management and serves as a functional analytics team to support the GitLab R&D
Organization (Product and Engineering divisions), in addition to product data-related analysis
across GitLab.

In addition to supporting the Product and Engineering divisions, the Product Data Insights team is an active
contributor to the GitLab Data Program. In addition, the Product Data Insights team is part of the [Functional Analytics Center of Excellence (FACE)](/handbook/enterprise-data/how-we-work/functional-analytics-center-of-excellence/),
along with other functional analytics groups across the GitLab Data Program.

Read more about what we do at GitLab on our [Direction](https://about.gitlab.com/direction/product-analysis/) page.

### Team members

Product Data Insights is a small (but mighty) team. In order to support the Product and
Engineering divisions, each analyst is assigned to one or more sections or teams to support.

| Name | Title | Product Section or Team |
| --- | --- | --- |
| [Carolyn Braza](/handbook/company/team/#cbraza) | [Senior Manager, Product Data Insights](/job-families/product/product-analyst/#senior-manager-product-data-insights) | [Analytics](/handbook/product/categories/#analytics-section) |
| [Dani Deng](/handbook/company/team/#ddeng1) | [Product Analyst](/job-families/product/product-analyst/#product-analyst-intermediate) | [Growth](/handbook/product/categories/#growth-section), [Engineering](/handbook/engineering/) |
| [Nicole Hervas](/handbook/company/team/#nhervas) | [Senior Product Analyst](/job-families/product/product-analyst/#senior-product-analyst) | [CI](/handbook/product/categories/#ci-section), [CD](/handbook/product/categories/#cd-section) |
| [Lily Fisher](/handbook/company/team/#lmai1) | [Senior Product Analyst](/job-families/product/product-analyst/#senior-product-analyst) |  [Infrastructure Platforms](/handbook/product/categories/#infrastructure-platforms-section), [Engineering](/handbook/engineering/) |
| [Emma Fergen](/handbook/company/team/#efergen) | [Senior Product Analyst](/job-families/product/product-analyst/#senior-product-analyst) | [Data Science](/handbook/product/categories/#data-science-section) |
| [Matthew Petersen](/handbook/company/team/#matthewpetersen) | [Senior Product Analyst](/job-families/product/product-analyst/#senior-product-analyst) | [Dev](/handbook/product/categories/#dev-section)  |
| [Dave Peterson](/handbook/company/team/#dpeterson1) | [Staff Product Analyst](/job-families/product/product-analyst/#staff-product-analyst) | [Sec](/handbook/product/categories/#sec-section) |
| [Neil Raisinghani](/handbook/company/team/#nraisinghani) | [Senior Product Analyst](/job-families/product/product-analyst/#senior-product-analyst) | [Fulfillment](/handbook/product/categories/#fulfillment-section), [Pricing](https://internal.gitlab.com/handbook/product/pricing/) |

## Handbook contents

- [Dashboards, Analysis, & Insights](/handbook/product/groups/product-analysis/dashboards-analysis-insights/)
- [Team Processes](/handbook/product/groups/product-analysis/team-processes/)
- [Product Data Insights Data Models Cheat Sheet](/handbook/product/groups/product-analysis/data-model-cheat-sheet/)
- [Crash Course for Product Stage Resources (Including Section::Growth)](/handbook/product/groups/product-analysis/crash-course/)
- [Experimentation Design & Analysis](/handbook/product/groups/product-analysis/experimentation/)
- [dbt Cheat Sheet for Functional Analysts](/handbook/product/groups/product-analysis/dbt-cheat-sheet/)

## Working with us

The Product Data Insights group works in two-week iterations, which dictate how and when we
plan and prioritize work. Iterations start on Thursdays and end on Wednesdays.

You can see our current iteration [here](https://gitlab.com/groups/gitlab-data/-/boards/2973914).

### Issue intake

For all Product Data Insights requests, please create an issue in the
[Product Data Insights project](https://gitlab.com/gitlab-data/product-analytics/-/issues),
apply the `Team::PDI` and `product data insights` labels, and follow the guidelines below.

All data issues with the `Team::PDI` label will appear on the [Product Data Insights board](https://gitlab.com/groups/gitlab-data/-/boards/2959103).

#### Issue templates

Please select the appropriate template based on your type of request and answer as many of the
questions as you can. The more information and context we have up front, the faster we are able
to triage and begin work on the issue.

| Request Type | Template |
| --- | --- |
| Ad hoc / Default request | [Ad Hoc Request](https://gitlab.com/gitlab-data/product-analytics/-/issues/new?issuable_template=Ad%20Hoc%20Request) |
| Create new or update existing PI chart | [PI Chart Help](https://gitlab.com/gitlab-data/product-analytics/-/issues/new?issuable_template=PI%20Chart%20Help) |
| Experimentation analysis | [Experiment Analysis Request](https://gitlab.com/gitlab-data/product-analytics/-/issues/new?issuable_template=Experiment%20Analysis%20Request) |
| Iteration planning | [Iteration Planning](https://gitlab.com/gitlab-data/product-analytics/-/issues/new?issuable_template=Iteration%20Planning) |

#### Submission due date

In order to be considered for the upcoming iteration, please open all issues by EOD Monday
before the next iteration begins. We understand that urgent matters come up, but please try to
adhere to the submission due date for any planned work.

### Issue prioritization

The PDI team takes three different priorities into account when scheduling work, each captured
by a scoped label:

1. `section-priority::`
1. `pm-priority::`
1. `pdi-priority::`

#### Section priority

Section priority is ultimately determined by section leaders and product leadership. It should
align with overall product investments and business impact of the work. Analysts have default
guidelines to assign section priority, which then becomes part of the prioritization discussion
with section leadership.

Section priority labels will be added by product analysts or section leadership.

| Label | Definition |
| --- | --- |
| `section-priority::1` | Work supporting high-impact, high-investment stages or groups; cross-stage analysis |
| `section-priority::2` | General work supporting the section; help with PI charts; etc |
| `section-priority::3` | Low-impact work; "nice-to-haves" |

Most issues will fall under `section-priority::1` and `section-priority::2`.

#### PM priority

PM (Product Manager) priority captures the relative priority of the issue compared to any other
issues that the PM (or their group) have open in the backlog (if applicable). In general, the
issues that are more immediately actionable and impactful to the [company KPIs](/handbook/company/kpis/)
should be higher in priority.

We ask that PMs apply a `pm-priority::` label to issues to indicate relative priority of the
request.

| Label | Priority |
| ----- | -------- |
| `pm-priority::1` | High and/or urgent |
| `pm-priority::2` | Medium |
| `pm-priority::3` | Low, non-urgent |

#### PDI priority

PDI priority is owned by the individual analyst. The Senior Manager, Product Data Insights will
help refine priority based on importance and capacity. The team will work with the VP, Product
Management and/or Product leadership on trade-offs (if needed).

Section priority and PM priority are both inputs in determining PDI priority. However, the
scope of the team's work extends beyond section support (ex: cross-functional initiatives),
and therefore there are other considerations, as well.

PDI priority labels will be added by the Product Data Insights team as a part of triage and
planning.

| Label | Priority |
| ----- | -------- |
| `pdi-priority::1` | **High / Urgent Priority** Any analysis requests that are required to be completed within the current iteration. All requests that have Priority 1 should have a direct KPI and/or OKR that will be affected by the analysis. |
| `pdi-priority::2` | **Medium Priority** This is where most requests would fall into. This can be any net-new analysis, reporting (dashboard creation), or exploratory analysis that is needed for decision making. |
| `pdi-priority::3` | **Low Priority / Consultant:** This is for any analysis that does not have an immediate direct action as a result of the analysis and/or other low-level, non-urgent requests that can be placed in an analyst's backlog. |

Most issues will fall under `pdi-priority::2` and `pdi-priority::3`.

### Iteration planning

Final commitment and prioritization will occur during the iteration planning meeting, which
takes place the day before an iteration begins (every other Wednesday). The team will consider
new and existing issues, along with issues in progress. When selecting issues for the next
iteration, the team considers the following:

- Issue priority
- Issue weight
- Velocity
- Working days
- Target work breakdown

#### Issue priority

Analysts will use the different priority labels (as defined above) as inputs into planning.

#### Issue weight

Each issue is assigned a weight based on estimated time commitment.

If a single issue has a weight greater than the length of the iteration (2 weeks), it should be
broken into smaller units of work. (This could also be an indicator that the issue should be
converted to an epic).

| Weight Value | Estimated time to complete |
| --- | --- |
| 1 | < 1 hour |
| 2 | 2 hours |
| 3 | 4 hours |
| 5 | 1 day |
| 8 | 2-3 days |
| 13 | 1 week |
| 21 | 2+ weeks |
| 34 | 1+ month |

#### Velocity

Product Data Insights defines velocity as the amount of work (measured in issue weight) completed
by the team within a given iteration. While we recognize that this is an imperfect measurement
(partially-completed issues and [undocumented work](/handbook/product/groups/product-analysis/#undocumented-requests)
are not accounted for), it is a rough gauge of team output.

We aim to only commit to work we believe can be completed within the 2-week iteration. As such,
we will commit to *less than* our recent velocity and leave a buffer to account for urgent issues
and interruptions. To start, each analyst will leave a buffer of ~2 days worth of work (an
estimate based on the recent volume of unplanned work). High-priority issues exceeding the
allotted buffer will have a material impact on our ability to complete planned work, so please
plan ahead if you know that you will need assistance from the Product Data Insights team.

#### Working days

As GitLab team members, we are [encouraged to take PTO](/handbook/people-group/paid-time-off/) and observe public
holidays in order to maintain a healthy work-life balance. Analyst capacity should be adjusted
based on the number of days they are working in the iteration.

#### Target work breakdown

Product Data Insights groups work into three different buckets. During planning, analysts will
aim to maintain the following breakdown:

- Section-level priorities: 50%
  - Backlog DRI: Section leader and/or product leadership
  - This work can be identified with the `section-priority::1` label
- Other section work: 25%
  - Backlog DRI: Product analyst
  - This work can be identified with the `section-priority::2` or `section-priority::3` labels
- Cross-functional work and special projects: 25%
  - Backlog DRI: Senior Manager, PDI (based on the recommendations from the product analysts)

*The distribution of work will vary from iteration to iteration, but the 50/25/25 breakdown
is the target state.*

### Urgent issues

If an urgent matter comes up, please open an issue and tag your analyst contact (and/or `@cbraza`).
Please include why the issue is urgent, when it is needed by, what it will inform or how it will
be used, and who is the intended audience.

If you have not heard from the tagged analyst within 1 business day* (or earlier if the issue
requires a faster turn-around), please send a message in [#data](https://gitlab.enterprise.slack.com/archives/C8D1LGC23)
and feel free to tag `@cbraza`.

**Please keep in mind that we work across different time zones*

### Additional considerations

Please keep the following in mind when working with the Product Data Insights team:

#### Scope creep

[Scope creep](https://en.wikipedia.org/wiki/Scope_creep) is a problem everyone faces. Please keep
in mind that [team capacity](/handbook/product/groups/product-analysis/#capacity) is a zero-sum game,
so scope creep in one issue can mean that we are unable to complete other work planned for
that iteration.

Additional scope (change in requirements, additional follow-ups, etc) that adds a material amount
of work* to an issue will need to be captured as net-new work in a new issue. The new issue will
then go through the normal prioritization and planning process. The best way to avoid scope creep
is to have thorough, complete requirements in the issue when you initially open it. The issue
templates should help guide you to include all relevant information.

**The threshold for a "material amount of work" is to be determined by the analyst working on the issue.*

#### Blocked issues

If an issue is blocked and it requires additional work* to diagnose or troubleshoot
(ex: a data issue is uncovered), a new issue should be opened, assigned a weight and priority,
and linked to the original blocked issue. The new issue can be added to the current iteration
without going through the formal planning process at the analyst's discretion, but this can
impact our ability to complete all issues in the iteration.

**The threshold for "additional work" is to be determined by the analyst working on the issue.*

Experimentation analysis issues are naturally blocked by the experiment actually running (we have
to wait until we have sufficient data in order to perform the analysis). In order to enable a more
accurate measure of velocity, we will divide the work into 2 separate issues*:

1. Experiment prep (dashboard creation and data validation)
1. Experiment analysis

**At this time, PMs should continue to open a single issue and analysts will separate accordingly.*

#### Undocumented requests

Please open an issue for *all* Product Data Insights requests. Requests made via comments in
Google Drive are extremely difficult to track, and Slack history is gone after 90 days.
In addition, these requests are not planned or accounted for in team velocity. Your informal
request might mean that we are unable to complete work we committed to for another stakeholder.

By keeping a formal record of requests (via issues), we are able to identify frequently asked
questions (which could lead to building a self-service solution) and quickly replicate past work.

#### Capacity

The Product Data Insights team is tasked with supporting the entire Product organization, in
addition to other product-related data needs across GitLab. As such, team capacity can be
limited as we grow towards our [target gearing ratio](/handbook/product/groups/product-analysis/team-processes/#gearing-ratios).
However, limited capacity should not stop GitLab team members from [opening issues for Product Data Insights](https://gitlab.com/gitlab-data/product-analytics/-/issues/new?issuable_template=Ad%20Hoc%20Request),
it simply means that lower-priority requests will have to wait until resources are available.
As the group grows, so will our ability to turn around requests in a shorter period of time.

## Engaging the team

In addition to opening an issue, there are several other methods to engage with the team, both
sync and async.

### Office hours

In order to support more PMs across GitLab, the Product Data Insights team offers office hours.
Office hours are held every other Wednesday, alternating between <time datetime="16:00">4 pm UTC (11 am ET / 8 am PT)</time>
and <time datetime="21:00">9 pm UTC (4 pm ET / 1 pm PT)</time>. While our primary stakeholders
are PMs across the organization, all GitLab team members are welcome to join.

The intent of office hours is to give PMs faster access to the team and get support for smaller
tasks, brainstorming, and data self-service. More formal requests that answer more complex
questions are captured in issues and go through a more rigorous, structured prioritization process.

#### How to sign up

The [agenda](https://docs.google.com/document/d/1ZXS-eeZNuRUn7176dZFqsyhIU-DSWYvWuEhogpbTzys/edit#)
is first-come, first-served. Walk-ins/drop-ins are always welcome, but if possible, please
add your name and topic (or question) before office hours begins. This allows the team time
to review new agenda items ahead of time. If we are unable to cover a topic on the agenda,
it will be pushed to the following meeting.

Stakeholders are welcome to leverage office hours to discuss and define new issues,
which can help reduce async back-and-forth communication in the issue itself.

#### Example topics

Office hours are intended for smaller bodies of work, brainstorming, and assistance with
data self-service. Here are some examples of topics for office hours:

<details markdown="1"><summary>Example Topics</summary>

<details markdown="1"><summary>👍 Example Topic 1: Experiment Setup</summary>

I am interested in launching an experiment to see if we can increase adoption of Secure.

- How would you go about setting the experiment up?
- Can you help me calculate the sample size?
- Can you help me interpret the results?

</details>

<details markdown="1"><summary>👍 Example Topic 2: Approach to Analysis</summary>

I am trying to do an analysis on the relationship between users with SSO enabled and invite
acceptance rate.

- Which tables should I use? Can you help me understand this data source?
- What approach would you take?
- Would this metric answer the question?
- Can you help me understand this data source?

</details>

<details markdown="1"><summary>👍 Example Topic 3: Code Review</summary>

I wrote a query to calculate xMAU for namespaces that converted from a trial to a paid plan.

- Is this `JOIN` correct?
- Does this logic only include namespaces that had trials before converting?

**Note:** We are not able to accommodate all code reviews in the scope of office hours.
Please limit this type of topic to specific aspects of a query, whether you are using the correct
data source, etc.

</details>

<details markdown="1"><summary>👍 Example Topic 4: Dashboard Updates</summary>

I am looking to make some updates or enhancements to this existing dashboard.

- Can you help me incorporate a filter into this dashboard that would allow me to limit the charts
to activity within 30 days of namespace creation?
- Can you update this funnel to include this additional event?

</details>

<details markdown="1"><summary>👍 Example Topic 5: Follow-Up Questions</summary>

In the last key meeting, you presented an [analysis on early trial adoption](https://docs.google.com/presentation/d/1ESH797L8zwT_28n3Ypqp1xckKhvtt3jr-8eWpexgmto/edit#slide=id.ge35de508d3_0_0).

- Can you walk me through your methodology?
- Can you help me understand the implications of the data/analysis?

</details>

<details markdown="1"><summary>👍 Example Topic 6: Scope and Define New Issue</summary>

I am going to open an issue for a new analysis.

- Can we discuss the overall scope and details?
- What kind of information should I include in the issue?

</details>

</details>

If the topic you bring is too broad to be addressed during office hours, we can discuss the
work and will redirect you to [open an issue](https://gitlab.com/gitlab-data/product-analytics/-/issues/new?issuable_template=Ad%20Hoc%20Request).

#### FAQs

**What is the difference between topics for office hours and formal data requests?**

Office Hours is intended to help PMs with smaller tasks, provide a venue for brainstorming, and
help folks looking to learn more about data self-service. The benefit is that the agenda is
first-come, first-served, the prioritization process is bypassed, and the wait time is minimal.

Formal data requests and larger bodies of work are captured in issues in the [Product Data Insights project](https://gitlab.com/gitlab-data/product-analytics/-/issues/new?issuable_template=Ad%20Hoc%20Request).
They can help answer more complex questions, but go through more robust [intake](/handbook/product/groups/product-analysis/#issue-intake)
and [planning](/handbook/product/groups/product-analysis/#iteration-planning) processes. As such, there
is a longer turn-around time given team size and [capacity](/handbook/product/groups/product-analysis/#capacity).

**What if I don't know if my topic is best suited for office hours or whether I need to open an issue?**

Feel free to ask your analyst partner (if applicable) or in [#data](https://gitlab.slack.com/messages/data/).
When in doubt, come to office hours and the team can discuss there.

### Slack

#### Channels

1. [#data](https://gitlab.enterprise.slack.com/archives/C8D1LGC23) - For any type of data question, including
those related to product and/or the Product Data Insights team
1. [#data-tableau](https://gitlab.enterprise.slack.com/archives/C03RMCEHVCP) - For any questions related to Tableau
1. [#g_product_data_insights_daily](https://gitlab.enterprise.slack.com/archives/C0285NMCLBY) - For
the Product Data Insights team's asynchronous daily stand-up, powered by [Geekbot](https://geekbot.com/)

#### Aliases

1. `@product-analysts` - Notifies the entire Product Data Insights team
1. `@randdanalyticstriage` - Notifies the entire Product Data Insights team and the Data
team's Customer Product Adoption pod, per the [Enterprise Data Triage Program](/handbook/enterprise-data/how-we-work/triage/#enterprise-data-program-triage)
1. `@functional-data-analysts` - Notifies the entire Product Data Insights team and other functional
analysts across the GitLab Data Program

### GitLab groups

1. `@gitlab-data/product-analysts` - Notifies the entire Product Data Insights team

### YouTube playlist

1. [Product Data Insights](https://www.youtube.com/playlist?list=PL05JrBw4t0Kp32_hlHkH-wysq5seWicwL) -
Recordings from office hours, analysis/read-outs, etc

## Other helpful resources & links

1. [Data for Product Managers](/handbook/enterprise-data/organization/programs/data-for-product-managers/)
1. [Data Catalog/Data Guide Series](https://internal.gitlab.com/handbook/enterprise-data/data-governance/data-catalog/) (internal handbook)
1. [Data Team Handbook](/handbook/enterprise-data/)
