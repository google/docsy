---
title: Product Designer Priorities and Capacity Management
description: "Here are some guidelines to help Product Designers prioritize their work and manage their capacity at GitLab."
---

## Planning and managing capacity

Product Designers are assigned to work within their stage group and take on responsibilities across the broader UX department. The following guidelines can assist in effectively managing responsibilities:

**Product Designers**

- Ensure discipline peers know about UX team assignments, such as UX OKRs, and what you'll need from them to succeed.
- Account for time off (yours and others') during milestone planning.
- Inform your manager immediately if you think you won't complete your work on time. Early notification increases the likelihood of resolving the issue and managing expectations.
- Optionally, use UX issue weights to better understand your capacity and facilitate conversations with your Product Manager.

**Product Design Managers**

- If requested, help Product Designers set a baseline capacity for stage- and UX-team-assigned work each milestone.
- Quantify strategy work with clear time-to-complete (TTC) expectations, measurable goals, and due dates.
- Resolve team questions, concerns, and blockers quickly.
- Ensure cross-functional partners are aware of UX OKRs and their dependencies.

### Priorities

Designers are responsible for managing their own capacity and are a [manager of one](/handbook/values/#managers-of-one). The following categories help prioritize work throughout a milestone:

Must do:

- Merge request (MR) reviews, including community contributions. See [MR Reviews guidelines](/handbook/product/ux/product-designer/mr-reviews/).
- Feedback requests from other designers (issues, MRs, Figma, [`#ux-coworking`](https://gitlab.slack.com/app_redirect?channel=ux_coworking) Slack channel).
- Adjustments to issues in the current release milestone and labeled `Deliverable`.
- Issues assigned with labels `workflow::problem validation`, `workflow::solution validation`, or `workflow::design`.
- Planning and prioritization of UX issues in the next release milestone. See [Milestone planning](/handbook/product/ux/product-designer/).
- Sharing work with the team through UX Forums, Slack posts, UX meetings.

Should do:

- [UX OKRs](/handbook/company/okrs/).
- Tasks that improve understanding of users and their workflows (e.g. [UX Scorecards](/handbook/product/ux/ux-scorecards/)).
- Issues in the current release milestone and labeled `Stretch`.
- Issues labeled `Pajamas`, `pajamas::define`, `pajamas::design`, `pajamas::build`, or `pajamas::integrate`. See [Pajamas component lifecycle](https://design.gitlab.com/get-started/lifecycle/) and the [Pajamas issue tracker](https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/issues).
- Completeing [ToDo blocks in Pajamas](https://gitlab.com/search?group_id=5387503&project_id=4456656&scope=blobs&search=todo) for components or examples not fully specified.

Nice to do:

- [Beautifying our UI](/handbook/product/ux/product-design/#beautifying-our-ui).
- Addressing issues labeled [`Seeking community contributions`](https://gitlab.com/groups/gitlab-org/-/issues?state=opened&label_name%5B%5D=Seeking+community+contributions&label_name%5B%5D=UX) or other low-hanging usability problems.
- Issues in future milestones (e.g., next release or [Backlog](https://gitlab.com/groups/gitlab-org/-/issues?state=opened&milestone_title=Backlog&label_name%5B%5D=UX)).
- Popular issues with no milestone (based on comments or upvotes).
- [Other issues labeled `UX`](https://gitlab.com/groups/gitlab-org/-/issues?state=opened&label_name%5B%5D=UX).
- [Socializing design work](/handbook/product/ux/product-designer/#socialize-your-work) outside GitLab (blog posts, social media, conferences).

#### Supporting Product Management

To aid Product Management in their prioritization efforts, we provide insights into UX needs, identifying both quick wins and larger strategic initiatives.

#### Engagement with Single Engineer Groups (SEGs)

The Engineering Department uses [Single Engineer Groups](/handbook/company/structure/#single-engineer-groups) (SEGs) to quickly develop "new market" initiatives. SEGs may request temporary design support for high-usage product areas.

Product Designers and managers should provide in-depth design critiques in issues and during MR reviews, collaborating with Incubation Engineering to ensure a great user experience.

**Design reviews/critiques**

- SEGs handle their [design ideation](/handbook/product/ux/product-designer/#ideate-and-iterate). Product Designers are not responsible for solving customers problems or creating design assets for SEGs.
- SEGs can request feedback at any phase (early ideations, wireframes, high-fidelity mockups) by contacting the relevant Product Design Manager.
- Ideally, SEGs provide advance notice for design reviews for better planning and capacity management.

**Reviewing SEG merge requests**

- All MRs with user-facing changes require a designer review.
- Treat SEG MRs like [community contributions](/handbook/product/ux/product-designer/mr-reviews/#community-contributions), with the nearest area designer collaborating with the SEG.
- For new product areas without direct stage group impact, use [GitLab Roulette](https://gitlab-org.gitlab.io/gitlab-roulette/) to help assign a Product Designer to an MR for review. Manually spin the wheel to identify the designer.

### UX Issue Weights

Issue weights are optional but useful for planning. They help Product Designers understand their capacity, evaluate the impact of time off, facilitate trade-off discussions with Product Managers, and identify teams needing more UX support.

#### Using UX Issue Weighting

1. Review upcoming issues and break down the work.
1. Assign an issue weight using the provided chart. Collaborate with the Product Manager for clarity if needed.
1. Record your issue weight using your team's preferred method.
    - List issues and weights in Google docs.
    - Create a linked issue for the UX work and add a weight (close it after completion).
    - Use [design-weight labels](https://gitlab.com/gitlab-org/gitlab/-/labels?utf8=%E2%9C%93&subscribed=&search=design-weight).
1. Communicate your capacity and total issue weights when planning iterations or milestones.
1. Review weights post-milestone to improve future planning accuracy.

**Additional Notes:**

- Most UX issues, including research and Pajamas related issues can be weighted, if desired.
- Consider visual reviews, meetings, and other non-weighted responsibilities when determining capacity.
- Do not weight very small issues (less than 1).
- A weight of 8 or 13 indicates that the issue may be too large.
- Add weights to unplanned work during a milestone and discuss trade-offs with the Product Manager.

> Milestone Capacity Template:
>
> - **Total weights completed last milestone:** 10
> - **Average capacity (average of weights completed last 3 months):** 10
> - **Estimated capacity for current milestone:** 7 (use your average capacity and subtract planned time off)
> - **Total current weights:** 10

#### UX Weight Definitions

| Weight | Design Tasks | User Research Tasks |
| ------ | ------------ | ------------------- |
| 1 | Mostly small UI changes leading to small incremental UX improvements. No users’ workflow involved in these changes. Requirements are clear and there are no unanswered questions. <i>For example: A copy experiment or changing a button styling.</i> | Synthesizing previous research findings and generating recommendations based on them. |
| 2 | Simple UI or UX change where we understand all of the requirements but may need to find solutions to known questions/problems. These changes should blend in with an actual user workflow. <i>For example: [Simplify Sign in / Register process the in trial flow](https://gitlab.com/gitlab-org/growth/product/-/issues/1471)</i>. | Running a first click test or other type of unmoderated research study |
| 3 | A well-understood change but the scope of work is bigger. Several pages are involved and/or we're starting to design/redesign small flows or connect existing flows between each other. Designers may conduct extensive background research (previous issues, support tickets, review past user research, review analytics, etc). Some unknown questions may arise during the work. <i>For example: [Update the CustomersDot checkout page to allow subscription and billing information input](https://gitlab.com/gitlab-org/growth/team-tasks/-/issues/96), [Experiment with adding a contact sales option in app](https://gitlab.com/gitlab-org/gitlab/-/issues/197235)</i>. | A moderated, narrowly scoped research study with specific questions to answer, such as a usability review of a single page |
| 5 | A complex change where input from group members is needed as early as possible. Spans across multiple pages, and we're working on medium-sized flows that potentially connect with another area of the product There are significant open questions that need to be answered. The product designer may need to do some research on their own or in collaboration with a researcher, but this isn't always the case. Possible research activities might be to find and/or validate a Job To Be Done, conduct user testing or card-sorting, or do a survey. <i>For example: UX Scorecard, [How can we improve the dismiss action in upgrade moments](https://gitlab.com/gitlab-org/gitlab/-/issues/213344)</i>. | A research study evaluating the usability of an end-to-end flow or multiple related features, or a usability study with a minor exploratory component |
| 8 | Complicated changes introducing a new user flow that connects with other large flows and may require input from other designers, product managers, or engineers from the same or another stage group. This is the largest flow design/redesign that we would take on in a single milestone. This requires research where the designer may or may not be working with a researcher to plan and conduct exploratory interviews or user testing sessions. <i>For example: [Onboard new signs up through an onboarding issue board](https://gitlab.com/gitlab-org/growth/product/-/issues/107)</i>. | An exploratory study investigating broad-based behaviors related to a single stage, including one or more distinct user groups |
| 13 | Highly significant changes impacting multiple user flows, a large new feature, and/or a complete redesign. This issue could significantly impact product strategy and would require critical input from others (the wider GitLab community, e-group, customers), and there are many unknowns. This necessitates research where the designer could team up with a researcher and other designers to gather input data, plan and conduct exploratory interviews, lead user testing sessions… It's unlikely we would commit to complete this issue in a milestone, and the preference would be to further clarify requirements and/or break it into smaller issues planned in several milestones. <i>For example: [An improved free trial sign-up experience for GitLab.com SaaS users](https://gitlab.com/groups/gitlab-org/-/epics/377)</i>. | An exploratory study investigating broad-based behaviors across multiple stages and multiple types of users, potentially involving team members from the different stages. |
