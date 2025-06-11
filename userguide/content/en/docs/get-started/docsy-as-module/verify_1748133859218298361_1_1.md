---
title: "Verify Product Group"
description: "The Verify Product Group wants to increase sharing, findability, and encourage bias for async communication."
---

### Verify

<figure class="video_container">
  <iframe src="https://www.youtube.com/embed/9iF9zWAxdH0" frameborder="0" allowfullscreen="true"> </iframe>
</figure>

### Intent of this page

The Verify Product Group wants to increase [sharing](/handbook/values/#share), [findability](/handbook/values/#findability), and encourage [bias for async communication](/handbook/values/#bias-towards-asynchronous-communication). We will use this handbook page as forum for showcasing our team processes while also providing an opportunity to encourage a open discussion between team members on our processes for retrospective.

### Where can I reach you?

Slack: #s_verify

GitLab Project: [Verify](https://gitlab.com/gitlab-org/verify-stage)

Verify teams:

- [Verify:Pipeline Execution](/handbook/engineering/development/ops/verify/pipeline-execution/)
- [Verify:Pipeline Authoring](/handbook/engineering/development/ops/verify/pipeline-authoring/)
- [Verify:Runner](/handbook/engineering/development/ops/verify/runner/)
- [Verify:Pipeline Security](/handbook/engineering/development/sec/software-supply-chain-security/pipeline-security/)

### What do y'all do?

The purpose of this product group are described by the [Verify stage direction](https://about.gitlab.com/direction/ops/#verify). This is inclusive, though not limited to, the pipeline experience, creating or authoring .gitlab-ci.yml files, executing jobs in a pipeline, and various testing capabilties in CI/CD.

![Verify Banner](/images/product/groups/verify_groups_banner.jpg)

#### Continuous Integration and Runner Boundaries (Ownership/DRI's)

While generally the functions of Continuous Integration and Runners are interdependent (runners are the build agents that execute CI jobs), as Verify categories they represent distinct feature areas. However, it is sometimes difficult to discern which team or product manager is the DRI for a feature or capability that doesn't seem to fit neatly within the high-level categories and this section aims to clarify those boundaries.

At GitLab, using [RADCIE](/handbook/people-group/directly-responsible-individuals/#radcie) to assign responsibilities means everyone is Consulted and Informed, but to highlight critical team members who must be consulted the table below specifies who explicitly.

The noted DRI still owns decision-making and is still responsible for notifying/consulting critical team members, however the 'Must be Consulted' designee(s) takes the guesswork out of who to involve when these team members may not be part of the core engineering team aligned to the DRI product manager.

| Category| Code Base|Description|PM DRI|EM DRI|Must be consulted|
| ------ | ------ |------ |------ |------ |------ |
| Runner Core |runner|Development of features for the core runner code base for use by self-managed customers on various compute platforms and architectures (runner binary, docker images)|Runner PM - Darren Eastman|Runner EM - Nicole Williams|N/A|
| Runners Fleet |RAILS|Development of features for the configuration, use and administration of runners in the GitLab UI.|Runner PM - Darren Eastman|Runner EM - Nicole Williams|tbd|
| Runner SaaS |autoscaler|SaaS Runners (Linux, Windows, macOS) and internal GitLab Runner fleet|Runner PM - Gabriel Engel|Runner EM - Nicole Williams| Infrastructure Mgr. - David Smith|
|Compute Minutes Management for SaaS runners|RAILS|Changes to compute minutes configuration for customers on GitLab SaaS in the scope of SaaS runners.|SaaS runners PM Gabriel Engel|Runner EM - Nicole Williams|N/A|
|CI Pipeline Execution and Performance|RAILS|Features and capabilities for running or triggering a pipeline in the GitLab UI.|CI PM |CI EM - Cheryl Li|N/A|
|CI/CD Queueing GitLab SaaS and Self-Managed|RAILS|CI jobs queueing architecture.| Pipeline Execution PM |Lead engineers: Kamil Trzciński , Grzegorz Bizon, Stan Hu| |
|CI/CD Fair Scheduling GitLab SaaS |RAILS|CI jobs fair scheduling architecture and configuration.|Pipeline Execution PM |Lead engineers: Kamil Trzciński , Grzegorz Bizon, Stan Hu| |

### Workflow

We work in a Kanban-style aligning with Milestones and [GitLab's Product Development Flow](/handbook/product-development/product-development-flow/).

### Cross-Functional Partnership

We work across other teams often and are striving to get better at engaging with others. If you are interested in being a part of this dialogue - drop a line our #s_verify slack group!

#### Product Marketing Enagement

We partner really closely with [Product Marketing Management](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/core-product-marketing/). In the Verify Stage, we have a stable counterpart assigned, as defined in the [PMM Team Structure](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/core-product-marketing/#pmm-team-structure), which aligns to the [CI Use Case](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/usecase-gtm/ci/).

We have four main processes:

1. Semi-annual Stage-wide GTM & Strategy Positioning
1. Quarterly Sales Enablement
1. Quarterly Roadmap Alignment for Product Groups
1. Monthly Release Post and Market Positioning for Product Groups

##### Stage-wide GTM & Strategy Positioning

- **Frequency**: Twice a year
- **Audience**: Internal
- **Assets Produced**: Deck, Recording, and Issue Boards
- **Goal**:  Deliver a 30-minute recording that aligns the half-year product strategy of the stage with the GTM sales motion and competitive landscape. Include any assets that will be helpful to sales teams for pitches and product managers for early selling in prospect calls.

We recently conducted our first joint stage-wide PMM and Product Positioning for F[Y22 1H](https://youtu.be/B03ke3WlnaE), alongside a [deck](https://docs.google.com/presentation/d/1K0QXBtW48UbG7uQMaTa83X99RIbDXuY0tFYynSyuSGo/edit).

##### Sales Enablement

- **Frequency**: Quarterly
- **Audience**: Internal
- **Assets Produced**: Deck and Recording
- **Goal**:  Deliver 10-30 minute recordings on various product topics for use in field enablement.

We recently participated in a discussion of building the bench for technical topics via [cs-skill#116](https://gitlab.com/gitlab-com/sales-team/cs-skills-exchange/-/issues/116). These types of sessions would then be used in partnership with PMM to help build compelling stories for the Field.

##### Roadmap Alignment for Product Group

- **Frequency**: Quarterly
- **Audience**: External
- **Assets Produced**: Recording
- **Goal**:  Deliver 10-30 minute recordings on various product topics for use in webinars, partner calls, or whitepapers.

These are intended to help guide themes and present opportunities to build stories in the market and not commitments, otherwise, these would be scheduled for a milestone.

##### Release Post & Market Postioning for Features

- **Frequency**: Monthly
- **Audience**: External
- **Assets Produced**: Copy/text
- **Goal**:  Deliver written communication in Merge Requests with Product Manager in the Release Post Items or blog posts.

We sometimes ship feature specific blog posts such as [Moving CI to Lovable...again](https://about.gitlab.com/blog/2021/02/22/continuously-improving-ci-lovability/) or this expose on [the Pipeline Editor](https://about.gitlab.com/blog/2021/02/22/pipeline-editor-overview/). These are great opportunities to include PMM alongside the [Release Post review and positioning](/handbook/marketing/blog/release-posts/#pmm-reviewers).

#### Customer Success & Renewal Engagement

We have a CS <> Product feedback loop for Customer Success (SA/CSM) and Product Managers to sync on product feedback from prospects and customers. On a monthly cadence, we meet to discuss problems to solve as captured in issues created in the [cs-product-feedback](https://gitlab.com/gitlab-com/cs-product-feedback) project and consolidated on this [issue board](https://gitlab.com/gitlab-com/cs-product-feedback/-/boards).

#### Alliances Engagement

More details to come

### Community Contributions

We want to encourage and support our open source community as nuch as possible. We have two measures of success:

1. Merged MRs from the community in the [Verify Stage](https://gitlab.com/groups/gitlab-org/-/merge_requests?scope=all&utf8=%E2%9C%93&state=merged&label_name[]=devops%3A%3Averify&label_name[]=Community%20contribution)
1. [MRARR](/handbook/engineering/infrastructure/performance-indicators/#mrarr)

Our process for enabling merge requests from the community can be found on the Verify Team Page.
