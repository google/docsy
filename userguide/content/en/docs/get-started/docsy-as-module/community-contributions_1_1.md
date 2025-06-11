---

title: Cultivating Contributions from the Wider Community
---








## Impact of wider community contributions

GitLab's commitment to fostering a thriving environment for [wider community contributions](https://about.gitlab.com/community/contribute/), has been a significant factor in its success and appeal. Contributions from the wider community naturally prevent silos, boost velocity, and encourage engineers to uphold a higher standard of maintainability.

Our Editor Group has a lot to gain from cultivating wider community contributions within our slice of the GitLab product.

## State of wider community contributions for the Editor Group

At the time of writing this, less than 2% of all GitLab community contributions target the Editor Group's codebase
([see editor contributions](https://gitlab.com/gitlab-org/gitlab/-/merge_requests?label_name%5B%5D=Community+contribution&label_name%5B%5D=group%3A%3Aeditor&scope=all&state=merged), [see all contributions](https://gitlab.com/gitlab-org/gitlab/-/merge_requests?scope=all&utf8=%E2%9C%93&state=merged&label_name[]=Community%20contribution)).
For just the `devops::create` stage, the Editor Group has around 15% of all GitLab community contributions ([see create stage](https://gitlab.com/gitlab-org/gitlab/-/merge_requests?scope=all&utf8=%E2%9C%93&state=merged&label_name[]=Community%20contribution&label_name[]=devops%3A%3Acreate)).

It appears that the Editor Group has a very small slice of all community contributions. This could be a symptom of a more underlying problem, and/or a missed opportunity.

## Problem analysis

> **PLEASE NOTE:** For this analysis, we assume that GitLab as a whole has a healthy base of wider community contributions. We are only interested in considering issues that arise from the Editor Group specifically.

Here is an interdependency graph breaking down this problem into possible contributing factors and their relationships with possible solutions.

> **suggestion:** When reading the graph, look for nodes with multiple arrows pointing away. These are areas where a small difference can have a significant spreading effect.

![low community contributions problem analysis](../images/low_community_contributions_analysis.png)

### Graph explanations

- **Lack of issue visibility:** Issues represent the primary Work-To-Be-Done for our organization. If our Editor Group's issues are not visible to the wider community, then naturally we will have low community contributions.
- **Lack of contributor motivation:** Community members that find Editor Group issues may lack motivation to pick them up. This may be caused by the relevant feature itself (for example, it is niche and doesn't have wide adoption), or simply by the way the issue is triaged and written (for example, it lacks weighting or assumes some prior knowledge).
- **Lack of ability to contribute:** If a community member is motivated to pick up an issue, they may still be blocked by an inability to make any progress. This can be caused by issues with unclear objectives, unclear implementation steps, and/or a codebase that is hard to understand and modify by newcomers.
- **Issues not newcomer friendly:** This problem describes situations where issues are focused and written in such a way that cannot be easily understood or picked up by newcomers. This can happen because the issue description has unclear requirements, assumes prior-information, and/or the issue weight is tailored towards specific people.
- **Code not newcomer friendly:** When our codebase cannot be easily understood and modified by newcomers, then wider community contributions will be naturally discouraged since the Cost-To-Contribute is high.
- **Lack of feature adoption:** If a feature has low user adoption, then the perceived pay-off for a community contribution can be relatively smaller than the pay-off of other issues.

### Symptom of a silo

A codebase that evolves in [a silo](https://en.wikipedia.org/wiki/Information_silo) is difficult to maintain in the long run.

Silos are systems which generate knowledge, but keep that knowledge within themselves. This can create a single-point-of-failure for an organization. It also threatens to deteriorate quality overtime, because the system cannot receive external feedback, nor knowledge foreign to the system.

When there is a healthy stream of contributions from the wider community, the codebase is naturally protected from growing in a silo. On the other hand, a lack of wider community contributions could be an indicator that the codebase will exhibit other silo-like behavior (most notably, a decline in maintainability). This further prevents outside involvement, creating a negative feedback loop.

## Solutions

The following sections describe possible solutions that address the above problems. These solutions **are not** mutually exclusive and should be prioritized and adopted as needed.

1. [Treat wider community as primary audience](#treat-wider-community-as-primary-audience)
2. [Improve Hackathon presence](#improve-hackathon-presence)
3. [Improve code maintainability](#improve-code-maintainability)

### Treat wider community as primary audience

The most significant impact towards fostering wider community contributions is to treat the wider community as the primary audience for issues. This directly improves a contributor's motivation for picking up an issue. Issues written this way:

- Are clear and concise (e.g., the most relevant information is kept [above the fold](https://en.wikipedia.org/wiki/Above_the_fold) and not buried in discussion comments)
- Do not assume prior knowledge (e.g., a code refactoring that references a new pattern by name without any links or details)
- Are weighted and the weight is decoupled from time estimates and specific assignees ([see relevant guideline](https://docs.gitlab.com/ee/development/contributing/issue_workflow.html#issue-weight)). When issues are weighted for specific individuals, we discourage the wider community from participating and [reinforce silos](#symptom-of-a-silo).

With the wider community as the primary audience, the issue writer is forced to consider that someone who picks up an issue may not even know where to get started. This is an incredible motivator to investigate and leave an **implementation guide**.

**What goes into an implementation guide?**

This guide can be very brief. It simply contains the result of a informal investigation into related lines of code and possible actions that could resolve the issue. It can also contain steps for breaking up the MR's into iterative chunks.

At the end of the day, the implementation guide guides the implementor, but gives enough flexibility and room for their discretion and creativity.

**What if the author isn't equipped to leave an implementation guide?**

The issue author does not have to be the one to investigate and leave an implementation guide. Instead, the author should ask someone with domain knowledge for help.

```text
@<NAME_HERE>, could you please help me investigate and leave a brief implementation guide for this issue? Thanks!
```

**This seems like a lot of work.**

If someone with domain knowledge cannot feasibly and quickly formulate an implementation guide for an issue, then it's a good sign that there might be a requirements gap or even some unique challenges. These unique challenges should be captured in the implementation guide, so that contributors are aware of the entire picture.

This effort of leaving an implementation guide (and specifically the investigation effort) goes along way to informing all stakeholders about the true nature of the issue - from planning, weight estimating, implementing, reviewing, and testing.

### Improve Hackathon presence

The [GitLab Hackathon](https://about.gitlab.com/community/hackathon/) is an amazing virtual event of distributed velocity and productivity. It attracts many veteran and first-time contributors.

Participants of the GitLab Hackathon have an incentive to create a lot of MR's during this event, so they are looking for MR's with very clear requirements, a very clear implementation guide, and a low-level of effort. Across GitLab's Frontend, we've had amazing progress made in large project-wide efforts ([example](https://gitlab.com/groups/gitlab-org/-/epics/2412), [another example](https://gitlab.com/groups/gitlab-org/-/epics/956)) during Hackathons. This is because the relevant issues and epics are geared towards the wider community and leveraging that scale.

**How can we improve the Editor Group's issue presence during Hackathon's?**

- [Write issues and epics with the wider community as the primary audience](#treat-wider-community-as-primary-audience).
- Look for opportunities to scope issues such that applying the [`quick win`](https://gitlab.com/groups/gitlab-org/-/issues/?sort=created_date&state=opened&label_name%5B%5D=quick%20win&first_page_size=50) label is appropriate.
- Organize large refactorings into a single epic with clear instructions and an issue for each directory / file ([example](https://gitlab.com/groups/gitlab-org/-/epics/895)).

**This seems like a lot of work. What do we expect to gain?**

The Hackathon attracts new and veteran contributors, and is a great way to mentor people to not only contributing to GitLab, but contributing to the Editor Group's relevant issues. When contributors have a positive experience, they tend to gravitate towards similar experiences (e.g., searching for issues with similar labels or people involved).

An investment in the Hackathon is an investment into fostering a longer-term community.

### Improve code maintainability

An issue may be well written and attractive for a new contributor, but contributing to some codebases is simply just difficult. When we think of maintainability, we usually think of our future selves and ask, "Are we able to keep maintaining this"? When it comes to open source software, we should look beyond ourselves and ask, "Would someone completely outside my group be able to keep maintaining this?"

**How do we keep a codebase maintainable beyond ourselves?**

- **Testability**. When a change is made, it shouldn't require special knowledge to know if it's broken something or not - the test suite should fail.
- **Modifiability**. Is it easy to tweak and make changes to the codebase? Is there high coupling between certain modules? Do single responsibilities live in a single cohesive module?
- **Understandability**. Does a module make sense to someone with no context? If context is required, is there traceability to that context?
