---
title: Change Management in GitLab Support
description: Decision Making and Change Management in the GitLab Support Leadership Team
---

## Decision Making and Change Management in the GitLab Support Leadership Team

The GitLab Support Team may very well be unique among the many teams within the
company in that its multiple sub-teams each have the same charter. Making
decisions and managing change within this structure come with equally unique
challenges not faced by the other teams. Specifically, managers must determine
the appropriate scope - whether to act individually or in coordination with the
other managers - when they want to make a decision or introduce a process
change. And the worldwide support management team must agree that the scoping
is correct. We define here our most current processes for determining scope,
gathering data and feedback, choosing a path forward, rolling out a change,
managing adoption, and reviewing results for future improvements.

We'll talk about two different types of changes:

1. [Process changes](#process-changes)
1. [Individual assignment and responsibilities changes](#individual-assignment-and-responsibilities-changes)

## Process changes

### This process is not limited to the GitLab Support Leadership Team

If you're looking to roll out a global change (see definition below), you might
have been directed to this process. Global changes are commonly but not
exclusively handled by the GitLab Support Leadership Team. For that reason, this
process is documented within the "Managers" handbook section.

This does not mean the process should only be followed by managers. If you're
having trouble with any part of it, reach out for guidance – either to your
manager or to SEs who followed the process before.

Examples of SEs using the process:

- [Slack groups per region](https://gitlab.com/gitlab-com/support/support-team-meta/-/issues/4618#gitlab-support-process-change-rollout-plan)
- [Limit PagerDuty Notifications in `#support_self-managed` to Triggered Events](https://gitlab.com/gitlab-com/support/support-team-meta/-/issues/5090)

### Start with a Request for Comments (RFC)

An RFC is a safe space for a lively discussion where all contributors bring
their own context and knowledge to determine the pros and cons of potential
solutions.

In an RFC *everyone* contributes equally, **regardless of their title**.

If you have an idea (or have noticed a problem) but aren't ready to propose specific changes yet, you can start
with the [Request for Comments](https://gitlab.com/gitlab-com/support/support-team-meta/-/issues/new?issuable_template=Request%20for%20Comments)
issue template. The template includes guidance on how to make your RFC.

### Determining the Scope

One of the most important considerations when looking to make a change is what
the scope of the change will be.

#### Local Change or Global Change?

When thinking about whether a change should be local or global, you might be
tempted to focus on the size of the change (number of lines of code changed,
number of lines of text in a doc that changed, etc.). But that's actually a
different type of scope that isn't relevant to this discussion.

Instead, begin with the idea that for the sake of consistency and simplicity,
you should lean toward making your change globally unless it doesn't even make
sense for, or apply to, other regions. If you're considering making the change
locally, be sure that you can answer "no" to **all** of these questions about
potential impacts of making a local change:

1. Will it create a meaningful inconsistency with the rest of the global team?
   Examples:
   1. Your local work products become incompatible with those of the other teams
   1. Terminologies or workflows diverge between your local team and the others,
      inhibiting collaboration
   1. Other teams can't work in concert with yours because they don't have
      access to new tools and resources yours is using
1. Will customers notice the local change?
   If so:
   1. Will customers be inconvenienced or even just annoyed by having to work
      differently in some way with your team than with the other teams?
   1. Will customers' expectations of "normal" service continue to be met?
   1. Will customers like your change enough to be dissatisfied when other teams
      or regions don't do the same thing?
1. Will it create different job descriptions or performance measures between
   your team and the other regions?

### Communicating a Change Proposal

Whether you're making a local change, based on the decision criteria above, or
proposing a global one, it's important to communicate your plans with the rest
of the Support Leadership Team.

#### Creating a Requested Change Issue and/or MRs

The first step toward making a change is to
[create a Requested Change issue](https://gitlab.com/gitlab-com/support/support-team-meta/-/issues/new?issuable_template=Requested%20Change)
in the [support-team-meta project](https://gitlab.com/gitlab-com/support/support-team-meta).
Using the linked template (Requested Change), it will ensure you supply the
required information (DRI, problem statement, ways to measure success, etc.),
helping to speed the process along.

This issue is used for presenting the problem that you are working to solve, for hosting
a discussion around that topic, and for documenting the testing phase.

As soon as possible, create the documentation MR(s) and/or [companion issues for Customer Support Operations](/handbook/support/workflows/working_with_support_ops) to present the actual proposed changes.

Include at least the following in the MRs:

- The decision and the reasoning behind it (such as data and test results
  that led to the decision)
- Summarize the testing, both what tests were run and what the results were
- Link to the [Message Plan Issue](#the-process-change-rollout-plan)
- Add the label ~"Manager Attention" to ensure that the support management team are informed about the proposed change
- As an additional guardrail also add the group `@gitlab-com/support/managers` to the issue to ensure that the support management team are informed about the proposed change

We use the rollout issue template to get acknowledgement of awareness of a new workflow or process.

*NOTE: If there's any part of the proposed changes that cannot be presented through
a MR, place the information in the issue instead.*

#### Communicating a Local Change Proposal

Inform the leadership team as an "inform" item in the agenda for the next
[leadership sync meeting](/handbook/support/managers/#organization-of-support-leadership-meetings).
Why?

- Someone else might have a suggestion for you
- Someone else might be interested in what you're doing
- It aligns well with our Transparency value

#### Communicating a Global Change Proposal

Engage the leadership team in a conversation through your issue and through a full agenda
topic in the [leadership sync meeting](/handbook/support/managers/#organization-of-support-leadership-meetings):

- Describe the problem you're working to solve
- Let the team know if you are the DRI, or are seeking a DRI
- Let the team know whether you're proposing a solution based on compelling
  existing data or you're planning to conduct one or more tests (trials) to
  determine which solution to propose.
- Add the label ~"Manager Attention" to ensure that the support management team are informed about the proposed change
- As an additional guardrail also add the group `@gitlab-com/support/managers` to ensure that the support management team are informed about the proposed change
  - If you will be testing, then it's suggested that you:
    - Present potential solutions and discuss which of them will be tried
    - Discuss any likely impacts of the tests
    - Gain general agreement that you can proceed with your tests
    - If the tests will be large and long running, consider opening an issue for
      each test and link them all to your issue
  - Otherwise, it's suggested that you:
    - present data both demonstrating the need for the change and supporting the
      solution you've chosen
    - propose your solution via a Merge Request (linked to your issue) and
      invite feedback with a reasonable deadline
- Describe how you plan to measure the success of the change (not just the
  tests)

#### Constructing a Valuable Test Plan

We make data driven decisions whenever possible. If your proposed change doesn't
have any supporting data, you'll run one or more localized trials. Be frugal if
there is a cost and always be sensitive to disrupting existing workflows:

- If you are not confident or comfortable designing a test, work with other
    managers to flesh out ideas.
- Keep in mind that there's a difference between the scope (local or global)
    of a change and the scope of a test. A global change most likely will
    **not** require a global test.
- Run the tests just long enough to get the data you need
- Involve only as many people, teams and regions as you need to make the tests
    legitimate
- If a test in the production environment would be problematic, look for a way
    to run it in a sandbox instead
- If running more than one trial:
  - try to run them in parallel with each other to save time
  - limit your testing to the two or three most likely potential solutions

### Standard Timelines

For future iterations:

1. Do we want to have standard timelines for certain steps in a rollout?
    - Initial discussion length
    - Days from rollout start to adoption complete

1. Do we want to weigh the impact of changes to ensure that we aren't changing too many complex things at once?

### Rolling Out a Change

#### Roles in Change Management

During the rollout, use these terms and their provided descriptions to
communicate clearly about the different roles people can play in the change
process.

| Role | Description |
| --- | --- |
| Champion | Person who will advocate for the change due to their strong interest in, and possible responsibility for, the success of the change. Most of the time champions are managers. |
| User | Person who uses the processes, documents and resources that are being changed. |
| Impacted Non-User | Person who is not an actual user of the processes, documents and resources that are being changed, yet who will experience changes in the behaviors of the users. <br>*E.g.* Support Engineers may notice managers responding differently to escalations, though they themselves do not need to do anything new. |

#### The Process Change Rollout Plan

When it's time at last to make the change, create a
[Process Change Rollout Plan issue](https://gitlab.com/gitlab-com/support/support-team-meta/-/issues/new?issuable_template=support-change-rollout).
The process change rollout plan template contains instructions to guide you through filling in all the appropriate details. And the issue itself then describes your full action plan.

---

## Individual assignment and responsibilities changes

These types of changes are almost always local and small. An example:

- Changing the workload balance of an SE to have them spend more time sharing
  knowledge and less time taking tickets

The motivation for these changes could come from a need to manage individual
performance and development, balance resources, improve expertise distribution,
or address other similar items.

Although planning of such a change tends to occur outside of issues (for
confidentiality reasons), and to be conducted between managers and directors,
if it will impact people other than those directly involved, consider taking
one or more of the following actions before making the change:

1. Explain your plan and ask for concerns and questions in your region's next
   managers' sync.
1. Host two separate cross-regional meetings, one with each of the regions
   other than your own, to explain your plan and ask for concerns and questions.
