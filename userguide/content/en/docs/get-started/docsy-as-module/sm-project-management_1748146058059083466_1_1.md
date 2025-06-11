---
title: "Product and Solution Marketing Project Management Overview"
---

### Project management overview

In Product and Solution Marketing, we have several processes to manage the work the team does

1. [Commitment management](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/getting-started/sm-project-management/#commitment-management) - how do we know what we're committed to
1. [Epics (larger projects)](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/getting-started/sm-project-management/#epics-and-milestones---planning-and-tracking-our-work) - how do we plan big projects
1. [Monitoring and reporting progress](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/getting-started/sm-project-management/#metrics-and-kpis-gitlab-insights) - how do we track progress
1. [Using Labels and keeping them clean](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/getting-started/sm-project-management/#labels-and-label-hygiene) - how do we keep our labels
1. [Priority](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/getting-started/sm-project-management/#priority-and-prioritization) - how do we indicate what's most important
1. [Managing Workflow](#example-of-managing-our-workflow) - how do we manage our workflow

### Commitment management

We are often asked / requested to work on multiple efforts, across the company.  For example,

- An event, needs booth messaging
- A campaign, needs positioning/messaging and perhaps a gated white-paper
- A campaign, needs a customer case study
- A team wants an analyst inquiry

Either way, a real challenge is how to manage and track our commitments to support other workstreams.

We've established the following  workflow/process in order for us to consistently capture **requests** and manage our **commitments**.

**The bottom line:**  If we don't have a SM_Request Issue that captures our **Commitment**, then it's invisible and not really a 'commitment'.

#### SM Request Process

**The process is simple:**

![SM Request Flow](/images/marketing/brand-and-product-marketing/product-and-solution-marketing/SM_Request_FLow_V5.png)

Here's a short overview of the process:
<iframe width="560" height="315" src="https://www.youtube.com/embed/cuIHNintg1o" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

The process is simple:

1. Anyone can **[open an SM Support Request Issue](https://gitlab.com/gitlab-com/marketing/product-marketing/issues/new?issuable_template=A-SM-Support-Request)** this link will the *A-SM-Support-Request* template.

1. The Product and Solution Marketing leadership team will review the request(Daily), assign it to the ideal SM Team, prioritize the work and plan how to support your requests.

![sm_reqest board](/images/marketing/brand-and-product-marketing/product-and-solution-marketing/sm-request-board.png)

#### SM Request Process Flow

**Strategic marketing request review and assignment flow** (note: the label `sm_request` indicates a request for Product and Solution Marketing support)

1. **New requests** start with the label `sm_req::new_request`.
New requests will generally EITHER be assigned to a team and team member or put in the strategic marketing backlog
   1. **Backlog** `sm_req::backlog` for future scheduling, sequencing, and implementation.  *note: add issue to the SM_Backlog milestone for tracking.* **NOTE: Issues in the backlog are NOT yet committed to be done!**
   1. **Assigned** `sm_req::assigned` to team members.   When an issue is assigned, it is added to the quarter **milestone** so we can track status of all the work in flight. **NOTE: Assigned issues should be considered committed to be done!**
      1. **Assigned-Queue** `sm_req::assigned::Queue` are issues in an individual team member's personal backlog/ queue.  They are managing their work flow and this issue **is in their queue** to add to a sprint/milestone and then deliver.
      1. **Assigned-In Progress** `sm_req::assigned::InProgress` are issues that the team member is **actively working**.   They SHOULD be in a specific **milestone**.
      1. **Assigned-Waiting** `sm_req::assigned::Waiting` These issues are in progress, but **are blocked, waiting** for some other contribution in order to progress.  (such as waiting for an external approval, a design, draft, engineering, etc.)  These issues SHOULD typically be in a **milestone**, and would typically move to the next **milestone** if the blocker is not resolved.
   1. When **complete**, the team member will update the issue with `sm_req::completed` and **Close** the issue
1. Exceptions.   There are several cases where an issue is not completed, but should be closed.
   1. *transferred* `sm_req::transferred` for requests that belong in a different team (Field Marketing, Sales, Ops, etc). Once an issue is transferred, it should be **closed**
   1. *declined* `sm_req::declined` - when an issue is in the backlog and it is no longer relevant or does not make sense anymore.  **Close** the issue when you *decline* it.
   1. *canceled* `sm_req::canceled` - when an issue is in the backlog and it is no longer relevant or does not make sense anymore.  **Close** the issue when you *decline* it.

1. **Triage Standup**.   15 min standup, where the leadership team reviews **New Requests** to triage them to the most appropriate team.   From there, team leads either move to the backlog or assign for immediate work.

#### Managing the request process

GitLab provides several ways to visualize and manage our work:

1. [SM Request Board](https://gitlab.com/gitlab-com/marketing/product-marketing/-/boards/1237365?&label_name[]=sm_request) provides a way to visualize the tracks status of requests grouped by labels.  There are several limitations: - lots of scrolling, no sorting, only one action when dragging.   So - these different views may be more useful:
1. **List Views**: enable you to view multiple issues in a common status and you can sort, filter, and make mutliple updates to multiple issues in one step.  See the **Edit Issue** button at the top right.
   1. [Strategic NEW REQUEST List View](https://gitlab.com/gitlab-com/marketing/product-marketing/issues?scope=all&utf8=%E2%9C%93&state=opened&label_name[]=sm_req%3A%3Anew_request) This view provides a way to see ALL the New Requests in one list for all of Product and Solution Marketing.
   1. [Product and Solution Marketing TRIAGE view](https://gitlab.com/gitlab-com/marketing/product-marketing/issues?scope=all&utf8=%E2%9C%93&state=opened&label_name[]=sm_req%3A%3Atriage) This view is all of the Triaged issues.
   1. [Product and Solution Marketing ASSIGNED view](https://gitlab.com/gitlab-com/marketing/product-marketing/issues?scope=all&utf8=%E2%9C%93&state=opened&label_name[]=sm_req%3A%3Aassigned) This view of all the issues assigned.
   1. [Product and Solution Marketing Backlog view](https://gitlab.com/gitlab-com/marketing/product-marketing/issues?scope=all&utf8=%E2%9C%93&state=opened&label_name[]=sm_req%3A%3Abacklog)
   1. [Assigned and PMM view](https://gitlab.com/gitlab-com/marketing/product-marketing/issues?scope=all&utf8=%E2%9C%93&state=opened&label_name[]=sm_req%3A%3Aassigned&label_name[]=pmm) View shows all the PMM team issues that are currently assigned.
1. **Milestones**: Milestones give us the ability to track issue completion over time.   Milestones also make it easy to look at the related issues based on specific labels and on who the issues are assigned to. Currently, GitLab ONLY allows for one milestone per issue, a limitation that will change in the 12.7 release of GitLab release. In Product and Solution Marketing, we're using two different Milestones to visualize status:
   1. [Current Quarter Work in progress](https://gitlab.com/gitlab-com/marketing/product-marketing/-/milestones/4) - this is a **PRIMARY VIEW** to see what we're working on and the progress toward closure for the overall team.  At the end of the quarter, we will create a new milestone for the next quarter **and** move any unfinished issues to the new milestone.  (and potentially label them as being from a previous milestone.)
   1. [Product and Solution Marketing Backlog](https://gitlab.com/gitlab-com/marketing/product-marketing/-/milestones/5) - this is a view of our current backlog which makes it easy to navigate to groups of related issues based on label such as (Priority, team, or usecase)
1. [**Quick Actions**](https://gitlab.com/help/user/project/quick_actions): - Quick actions are commands that you can enter into a comment on an issue and quickly update the status of the issue.  Through quick actions you can

- add or remove a label
- assign or unassign the issue to someone
- add or remove from a milestone
- open or close the issues

Quick actions are **very,very** helpful and efficient when you want to make multiple changes to an issue and have the issue open. Here are a few handy quick actions for Product and Solution Marketing:

|  **Step / Action** |  **Quick Action Code** |
|-----|------|
| **Triage** for the **PMM team** |  `/Label ~"sm_req::triage" ~pmm`  |
| **Triage** for the **Tech PMM team**  | `/Label ~"sm_req::triage" ~tech_pmm`  |
| **Triage** for the **Partner Marketing team** |  `/Label ~"sm_req::triage" ~"Partner Marketing"` |
| **Triage** for the **Competitive Intel team** |  `/Label ~"sm_req::triage"  ~"Competitive Intelligence"` |
| **Triage** for **Market Research/Customer Ref Team** |  `/Label ~"sm_req::triage" ~mrci` |
| **Moving to backlog** |  `/Label ~"sm_req::backlog"` <br> `/Milestone %"SM - Backlog"` |
| **Assigning to a team member** |  `/Label ~"sm_req::assigned" ~"status::wip"` <br> `/Milestone %Q4FY20` <br> `/Assign @<TeamMember>`|
| **Completing an issue** |  `/Label ~"sm_req::completed"` <br> `/close` |

#### SM Request insights

 We are actively working to leverage GitLab insights in order to monitor how the process is working, learn, and improve over time.

- SM Request Overall - the whole processes

![SM Request Overall](/images/marketing/brand-and-product-marketing/product-and-solution-marketing/sm-req-overall.png)

![SM Request Overall-by team](/images/marketing/brand-and-product-marketing/product-and-solution-marketing/sm-req-overall-by-team.png)

![SM Request Assigned-by team](/images/marketing/brand-and-product-marketing/product-and-solution-marketing/sm-req-assigned-by-team.png)

[GitLab Product and Solution Marketing PMM Insights](https://gitlab.com/gitlab-com/marketing/product-marketing/insights/#/smCharts)

### Epics and Milestones - planning and tracking our work

#### Regular Work

- Milestones for each quarter to track progress of 'assigned' work

For example, in order to visualize all our regular work in a given quarter, we have a "Quarter Milestone" that makes it possible to visualize and summarize all the work within a given quarter.   This is an experiment to decide how to best use milestones in our regular work.   In the near future (12.10 or 13.0), GitLab will support assigning **Multiple** milestones to a given issue, which will open the door to both managing real "Sprints", and other topics through the Milestone feature in GitLab.  (Today - the limit is 1 Milestone per Issue)

The first time we applied a milestone to regular work was in [Q4-FY20](https://gitlab.com/gitlab-com/marketing/product-marketing/-/milestones/4), where we saw the pattern of new work flowing in, while other work was completed and closed.

![SM Q4FY20 Milestone](/images/marketing/brand-and-product-marketing/product-and-solution-marketing/sm-q4fy20-milestone.png)

In [Q1-FY21](https://gitlab.com/gitlab-com/marketing/product-marketing/-/milestones/6), we are continuing to use a milestone to track regular work, and as we learn about our patterns and flow, we believe we will be able to increase our velocity and flow.

As of 13 April:

- 332 total issues
- 173 open and
- 159 closed

![SM Q1FY21 Milestone](/images/marketing/brand-and-product-marketing/product-and-solution-marketing/sm-q1fy21-milestone.png)

#### Complex projects

When we have large and complex projects, we manage the work through:

- **Epics**  - Define major initiatives with inter-related work streams
- **Sub Epics** - Sub work streams for different components of a major initiative
- **Issues** - Specific deliverables / outputs
- **Milestones** - define time windows to track completion of deliverables.

For example the UseCase GTM Project to build out the messaging, demos, comparisons, case studies and proof points for the Use Cases. Here specific the Epic for a given use case is broken down into sub epics, and then issues are created and associated with the correct epic.

- An Overall Epic - [UseCase GTM Epic](https://gitlab.com/groups/gitlab-com/marketing/-/epics/654)
- and then child Epics for each UseCase - for example:
  - [SCM UseCase Epic](https://gitlab.com/groups/gitlab-com/marketing/-/epics/655)
  - [CI UseCase Epic](https://gitlab.com/groups/gitlab-com/marketing/-/epics/661)
- And then we broke each epic into Months so we could see the associated
  - [SCM Month 1 Epic](https://gitlab.com/groups/gitlab-com/marketing/-/epics/665)

![epic](/images/marketing/brand-and-product-marketing/product-and-solution-marketing/epic.png)

<iframe width="560" height="315" src="https://www.youtube.com/embed/D74xKFNw8vg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

We've organized our UseCase GTM work by month, and have a Monthly "Sprint"/Milestone that helps us track completion of the issues/deliverables.

For example this "Milestone" - shows a summary of ALL the usecase work in the Month of April.

![milestone](/images/marketing/brand-and-product-marketing/product-and-solution-marketing/milestone.png)

Here is a link to the current [UseCase 2020-3](https://gitlab.com/gitlab-com/marketing/product-marketing/-/milestones/13) milestone.

### Workflow - Refine, Sprint, Retrospective

The Product and Solution Marketing team uses a 2-week sprint model, scoping and weighting work items (Issues) to produce the greatest increment of value at the end of each sprint. While our process is similar in many regards
to Scrum, we do not practice [Scrum Events](https://www.scrumalliance.org/about-scrum) as separate ceremonies, instead working them into our existing meeting workflow.

We plan, manage, and track our work in the [Product Marketing - Overview Issue Board](https://gitlab.com/gitlab-com/marketing/product-marketing/-/boards/1074672).

On an ongoing basis, individual DRIs update the status of all active items that are assigned to them as the DRI in the Product Marketing backlog. Before the end of one Sprint, they will estimate which
items are most appropriate for the following Sprint ([Sprint Planning](https://www.agilealliance.org/glossary/sprint-planning/)) and confirm this Sprint Backlog with their manager in
a weekly 1:1 meeting.

#### Refine

In order to plan future work it is important to ensure that the request is a) Clearly written and unambiguous, b) What "Done" for the issue is clearly defined. b) The issue/work is free of constraints, and d) the request can be completed in a 2 week sprint.   Issues are "Refined" when these questions have been addressed.

#### Refinement Status

Where ANY issue that has not been **refined** (DRI, clarity, completable, unconstrained, achievable, prioritized) would start with **"unrefined"**

- refine::unrefined   - The issue is not ready to be worked
- refine::refined     - The issue is ready

#### Refinement Standards

The first step is to identify a [DRI](/handbook/people-group/directly-responsible-individuals). The DRI then owns checking the remaining boxes for the issue.

```yml

#### Refinement

- [ ] **DRI**: Has a DRI been identified and do they accept responsibility?
- [ ] **Clear**: Are the expectations and work required unambiguous and clearly defined?
- [ ] **Completable**: Is there a clearly-stated definition of done?
- [ ] **Unconstrained**: Is the work free of blockers and dependencies? *If not, address blockers first or leave in Product Backlog until blockers are removed.*
- [ ] **Achievable**: Is the issue something that can be completed within a 2-week timebox? *If not, decompose it.*

set the refined label
```

#### Prioritization

Has the value of the feature been assessed based on input from key stakeholders?

**Priority**

- priority::1
- priority::2
- priority::3

Once an Issue has been labeled **'defined'** and assigned a **'priority'** it is ready for inclusion in a sprint.

#### Sprint

The goal of the 2 weeks sprint is to agree on what can be completed in the sprint, and commit to delivery.  The goal is to limit adding new work in progress and focus on delivering the committed scope of work in the sprint.  Urgent and unexepected stuff happens, so we will always need to have flexiblity in our approach and capacity on our team to respond to short notice changes.  But, the general patern should be that we don't add scope to the sprint, unless all the work is completed.

To provide insight and clarity on status we will leverage [Issue/Epic Health Status](https://docs.gitlab.com/ee/user/project/issues/index.html#health-status) on priority issues.

At the beginning of the Sprint, DRIs will assign the 'On Track' status to agreed-upon priority issues. As work progresses, anyone contributing to the work should update the Health Status as appropriate to surface risk or concerns as quickly as possible, and to jumpstart collaboration on getting an issue back to "On Track".

#### Retrospective

After each sprint, the team should reflect and document learnings about what worked, what didn't work and how to improve.
Asynchronously, we will document what we learn in this [retrospective document](https://docs.google.com/document/d/1oEJlMfygihEnyKeE7qit2ABMCALknVlPOZItONgrhfU/edit#) and improve.

### Metrics and KPIs (GitLab Insights)

We are experimenting how to utilize [GitLab Insights](https://docs.gitlab.com/ee/user/project/insights/)

For example, one experiment in Product Marketing is tagging our work based on specific outputs / domain.  We're using [scoped labels "pmm::xyz"](https://gitlab.com/gitlab-com/marketing/product-marketing/-/labels?utf8=%E2%9C%93&subscribed=&search=pmm%3A%3A) to tag issues based on the type of output and objective:

- `pmm::AR`                    Analyst Relations (briefing, inquiry, and research)
- `pmm::collateral`            Developing collateral such as white papers, data sheets, etc.
- `pmm::Deck`                  Developing slides and presentations
- `pmm::Enable`                Developing and delivering enablement (mainly to the field)
- `pmm::Events`                Developing and delivering content at events (online and in person)
- `pmm::messaging`             Developing positioning and messaging
- `pmm::PR`                    Briefing and updating press and media
- `pmm::Research`              Planing and conducting market research
- `pmm::Sales`                 Direct support of sales with customers
- `pmm::Web`                   Developing content for web pages (blogs, web pages, etc)
- `pmm::other`                 Other work that doesn't fit above

- Using the GitLab triage bot, we can automatically assign the work into a different set of scoped labels "pmM::External" or "pmM::Internal".  Where "External" means it directly is related to engaging prospects and customers, building and accelerating pipeline.   And "Internal" indirectly helps us grow and improve.

Through this, we can track our work and improve our balance and focus:

### PMM Insights - (Internal vs External)

![pmm insights Internal vs External](/images/marketing/brand-and-product-marketing/product-and-solution-marketing/pmm-insights-IvE.png)

### PMM Insights (External details)

![pmm insights External Details](/images/marketing/brand-and-product-marketing/product-and-solution-marketing/pmm-insights-external-details.png)

### PMM Insights (Details)

![pmm insights Details](/images/marketing/brand-and-product-marketing/product-and-solution-marketing/pmm-insights-details.png)

[GitLab Product and Solution Marketing PMM Insights](https://gitlab.com/gitlab-com/marketing/product-marketing/insights/#/pmmCharts)

<iframe width="560" height="315" src="https://www.youtube.com/embed/OMTfPsLa98I" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Labels and Label Hygiene

We have adopted the GitLab Triage bot as a way to establish clear policies for labels and issue hygiene.  This allows us to create a set of process *rules* and *policies* and then automatically apply them to our issues.   This helps us to keep issues in the expected state with the expected labels.

See this summary of how to set up and use the [GitLab Triage Bot](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/getting-started/105)

<iframe width="560" height="315" src="https://www.youtube.com/embed/Tp79e5sgpao?start=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Priority and Prioritization

At this point, we have three "Priority" labels in Product and Solution Marketing.   These are both `scoped` labels (so you can't have both `priority::1` and `priority::2`) at the same time.  The labels are also defined as "Priority", so they will sort issues where they are assigned.

1. `priority::1`
1. `priority::2`
1. `priority::3`

Over time, we will be establishing guidelines about how we consistently use these labels to communicate priority within the team.

### Example of managing our workflow

Some of us in the team use **GitLab Issue Boards** to manage our workflow. Using the issue board and scoped labels such as `Open`, `To-Do`, `Doing`, `Waiting`, `Closed`, the issue board gives us a visual representation of issues assigned to us.

1. Label `Closed` : Issues that have already been completed and closed
1. Label `Waiting` : Issues that are waiting for input from other teams
1. Label `Doing` : Issues that we are currently actively working on
1. Label `To-Do` : Issues that we will pick up next
1. Label `Open` : Issues in our backlog

![pmm Issue Board](/images/marketing/brand-and-product-marketing/product-and-solution-marketing/pmm-issue-board.png)

We move issues across these stages based on the progress and order them within the stage based on our priority of working on them. This helps team members to manage the issues assigned to them better as well as managers to asynchronously get a view of what's in progress and what's blocked.
