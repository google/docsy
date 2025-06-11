---
title: Product Processes
description: >-
  As a Product Organization, we work to create a flexible yet concise product
  development framework for developing products that customers love and value.
---

{{% include "includes/product-handbook-links.md" %}}

## Our Product philosophy

As a Product Organization, we work to create a flexible yet concise product development framework for developing products that customers love and value. The [Product Principles](/handbook/product/product-principles/) section is where you can learn about our strategy and philosophy regarding product development, here we discuss the processes we use tactically.

### Product Development Flow

Introducing changes requires a number of steps, with some overlap, that should be completed in order. GitLab follows a dual-track [product development flow](/handbook/product-development-flow/) spanning product, engineering, UX, and quality. We [use GitLab to power product development flow](/handbook/product/product-processes/planning-with-gitlab). When changes are released, we follow the [release post process](/handbook/marketing/blog/release-posts/#pm-contributors) to communicate externally about new capabilities.

This process should be both up front and on an on-going basis when building features.

### The Importance of Direction

Documenting a Section, Stage, Group and Category direction is critical to communicating where we are heading and why to all of our stakeholders. We document our direction in direction pages. Read more about related processes under [Planning and Direction](#planning-and-direction).

### Understanding Milestones and Releases

- [Interpreting release dates](/handbook/product/interpreting-release-dates/) clarifies how product teams use milestones and labels to indicate the likelihood of feature delivery within certain time frames.
- The [release definitions](/handbook/engineering/releases/) are maintained by the Engineering Team and we run the end of each Milestone on the [release date](/handbook/engineering/releases/).

### Relevant links

- [Engineering release definitions](/handbook/engineering/releases/)
- [Feature flag lifecycle](/handbook/product-development-flow/feature-flag-lifecycle/)
- [Product Launch process](/handbook/product/product-processes/product-launch)

## Communication

### Product Org Communication Touchpoints

In November 2024 we adjusted our communicated touch points based on feedback from our [FY25-Q2 Engagement Survey](https://gitlab.com/groups/gitlab-com/-/epics/2402), AMAs, skip levels, and 1:1s. The two key areas we are prioritizing:

- Embedding more asynchronous touchpoints to reach team members across time zones
- Implementing additional opportunities to cascade information from E-Group and PLT

#### Synchronous Product Org Communication Touch Points

- Product All-Team Meeting: We have a quarterly synchronous meeting for the Product Org. As of Nov 2024, we are expanding on the existing content and structure to ensure key strategic updates from each PLT department head are effectively cascading through the organization regularly.
- Product Key Review: We follow the company wide key-review format which covers key updates to the product division and is shared with cross-functional stakeholders.

#### Asynchronous Product Org Communication Touch Points

- CPO Fortnightly Update: David posts a slack message in #product-private every two weeks. This is a way for him to share what is top of mind for E-group and across the product team.
- New Hire Intros: New hires to the product org are encouraged to post their introduction in the #new-team-members slack channel. Once per month, a member of our Product Leadership Team will post a consolidated list of new hires and their intros into the #product-private slack channel.
- Monthly Showcase: On a 4-week cadence we have an async monthly showcase, facilitated in the #product-private channel, where people can share what they're working on with the rest of the Product Org. This is a low-key competition with prizes to incentivize folks to contribute videos. Team members can add videos throughout the month, then the entire Product Org can vote on their favorite video via google form. At the end of the 4-week period, there will be a prize for the winner, announced in David's fortnightly update. In the case of a tie in number of views, David will make the final call on who wins. We hope that this encourages team members to share their wins and exciting developments in their feature areas! Note: We’re doing this on a 4-week cadence (rather than calendar month) so that it aligns with David’s fortnightly updates, which are posted every other week. This should still be roughly aligned to the calendar month.

### Other Communication Channels

- [**Product Function Issue Tracker**](https://gitlab.com/gitlab-com/Product/issues) - please use
confidential issues for topics that should only be visible to team members at GitLab.
- [**Product Function GitLab Group - @gl-product**](https://gitlab.com/groups/gl-product/-/group_members)
- [**Product Management GitLab Group - @gl-product-pm**](https://gitlab.com/groups/gl-product/-/group_members)
- [**Chat channel - #product-private**]. This is a private slack channel for members of the product-org; new team members are automatically added to this channel as part of onboarding.
- [**Chat channel - #product**](https://gitlab.slack.com/archives/product). All GitLab internal team members can use the `#product` channel for any product-related questions but you'll also find more direct assistance in the various [Product Group](/handbook/product/categories/) channels.

### Communicating with the Entire Product Management Function At Once

When communicating change or a request for action to the entire product function, utilize the following levels and corresponding activities.

| Level | Description | Activities |
| ----- | ----------- | ---------- |
| One | Suggestion for review from interested PMs and FYI | Post MR/issue in `#product` |
| Two | Request for action from all PMs | Post in `#product` and mention `@gl-product-pm` in MR/issue with specific action instructions. |
| Three | Confirmation of understanding | Post in `#product` and mention `@gl-product-pm`; checkbox for each `@gl-product-pm` member in an MR/issue description to confirm; assign MR/issue to all `@gl-product-pm` members |

### Internal and external evangelization

Before shipping a new or updated feature, you are responsible for championing
it, both internally and externally. When something is released, the
following teams need to be aware of it as they will all need to do something
about it:

- Marketing: depending on the importance of the feature, we need the help of
marketing to promote this feature on our different communication channels.
- Sales: sales needs to know what's new or changed in the product so they can
have better arguments to convince new or existing customers during their sales
process.
- Support: as they are in constant contact with our users and customers,
support should know exactly how our products work.

You can promote your work in several ways:

- start with documenting what will be released and share this documentation with
the different teams
- schedule meetings, if you think it's important, with the teams listed above.

When referencing issues in written communication using just the issue number `#123456` and a link is not [low-context communication](/handbook/company/culture/all-remote/effective-communication/#understanding-low-context-communication). Instead use the title of the issue and the link or the issue number and description of the problem that issue will solve:

- Good: `We will next be working on [Detect and display code coverage reports on MR](https://gitlab.com/gitlab-org/gitlab/-/issues/21549)`. OR `We will next be working on [gitlab#21549](https://gitlab.com/gitlab-org/gitlab/-/issues/21549) which will help developers view code coverage reports directly in GitLab instead of losing context by looking in another tool while reviewing an MR`.
- Avoid: `We will next be working on #21549.`.

In order to support [findability](/handbook/values/#findability) and to clearly [articulate when we change our minds](/handbook/values/#articulate-when-you-change-your-mind) especially when it comes to product direction, category changes, shifts in investment themes, or priorities for engineering, Product Managers must evangelize these changes in multi-modal communication channels to ensure our users and customers aware.

Some **internal** methods for communication include:

- Sharing the updates various product-based Slack channels such as: `#product`, `#s_`, `#g_`, or `#f_` Slack channels
- Cross-posting changes in direction or categories into #customer-success and if they impact [use cases](/handbook/marketing/use-cases/) tag `@cs-leadership` for awareness
- Recording a quick video and sharing with Customer Success that discusses direction updates. Use sync meetings [as needed](/handbook/company/culture/all-remote/asynchronous/#when-to-start-synchronous-first) to facilitate efficient communication.
- [Collaborate with the Field Communications team](/handbook/sales/field-communications/#field-communications-playbook) to determine if a larger internal communications plan/approach is necessary for the Field (Sales, Customer Success, Channel & Alliances) team.
- Aggregating and sharing highlights of monthly direction page updates at the Section-level across the organization

**External** channels for consideration linking direction pages to:

- Twitter, LinkedIn, or other social accounts
- Sharing outreach emails via account teams
- Recording walkthroughs on Unfiltered and promoting on social accounts
- Writing a blog about the changes, if they are significant or disruptive

### Writing to inspire action

As a PM, it is important to remember a [bias towards action](/handbook/values/#bias-for-action) (and other value actions like [sense of urgency](/handbook/values/#sense-of-urgency), [make a proposal](/handbook/values/#make-a-proposal), [boring solutions](/handbook/values/#boring-solutions), [write things down](/handbook/values/#write-things-down), [don't wait](/handbook/values/#dont-wait), [make two way doors decisions](/handbook/values/#make-two-way-door-decisions) and [accepting uncertainty](/handbook/values/#accepting-uncertainty)
which enables PMs to drive an async discussion to being action oriented. Every time you write a comment or create an issue ask yourself: Will this allow us to take an action and move us forward?

### Writing about features

As PMs we need to constantly write about the features and upgrades we ship: in a blog post,
internally to promote something, and in emails sent to customers. There are some
guidelines that one should take into account when writing about features,
the most important being a clear communication of the problem we're solving for users.

When writing about a feature, make sure to cover [these messaging guidelines](/handbook/marketing/blog/release-posts/#messaging-review)
which help produce clear internal and external
messaging. Please also keep in mind that we should avoid using acronyms that others my not recognize, such as "MVC" for Minimal Valuable Change. For more guidance you can visit our [writing style guidelines](/handbook/communication/#writing-style-guidelines).

Let's highlight the messaging guidelines mentioned above with a concrete example, Preventing Secrets in your repositories,
that [we shipped in 8.12](https://about.gitlab.com/releases/2016/09/22/gitlab-8-12-released/#preventing-secrets-in-your-repositories-ee).

- Start with the context. Explain what the current situation is without the
feature. Describe the pain points and connect back to our [Value Drivers](/handbook/marketing/#go-to-market-value-drivers-and-customer-use-cases) (in this case `Reduce Security and Compliance Risk`).

> It's a bad idea to commit secrets (such as keys and certificates) to your
> repositories: they'll be cloned to the machines of anyone that has access to the
> repository. If just a single one is insecure, the information will be
> compromised. Unfortunately, it can happen quite easily. You write
> `git commit -am 'quickfix' && git push` and suddenly you've committed files that
> were meant to stay local!

- Explain what we've shipped to fix this problem.

> GitLab now has a new push rule that will prevent commits with secrets from entering the repository.

- Describe how to use the feature in simple terms.

> Just check the checkbox in the repository settings, under push rules and
> GitLab will prevent common unsafe files such as .pem and .key from being committed.

- Point to the documentation and any other relevant links (previous posts, etc).

Here are some additional examples of well written release blog posts for inspiration:

- [Issue Board Work In Progress Limits](https://about.gitlab.com/releases/2020/02/22/gitlab-12-8-released/#issue-board-work-in-progress-limits)
- [Parent-Child Pipelines](https://about.gitlab.com/releases/2020/01/22/gitlab-12-7-released/#parent-child-pipelines)
- [Drag-and-drop Design badges](https://about.gitlab.com/releases/2020/02/22/gitlab-12-8-released/#drag-and-drop-design-badges)
- [Render charts in GitLab issues using a Grafana URL](https://about.gitlab.com/releases/2019/11/22/gitlab-12-5-released/)

### Recording videos to showcase features

In addition to the written medium, video is an important medium that caters to the different goals you are trying to accomplish and learning styles of your audience.
Depending on the type of video you are recording, there are some guidelines to keep in mind.

As our documentation guidelines [actively encourage](https://docs.gitlab.com/development/documentation/styleguide/#videos) linking video content,
please consider following the [Documentation Style Guide section on language](https://docs.gitlab.com/development/documentation/styleguide/#language),
and working with your technical writing team to include links to your speed runs, walk-throughs and demos at relevant locations in the product documentation.

#### Using GIFs

Animated GIFs are an awesome way of showing of features that need a little more than just an image, either for marketing purposes or explaining a feature in more detail. Checkout our guide to [Making Gifs](/handbook/product/product-processes/making-gifs/)!

#### Speed Run

Speed runs are informal videos meant to focus on a single workflow and the experience for performing that workflow. It should not require much planning and is typically short in duration (less than 5 min.). This video type is meant to inform and not necessarily to influence buyers.

Examples:

- [GitLab Unfiltered Speed Runs Playlist](https://www.youtube.com/playlist?list=PL05JrBw4t0KqSF4RAEzwC0qCBrM85OP7r)
- [Remove docker images via CI/CD speed run](https://youtu.be/jDlFCrH9H7g)

#### Demo

Demos are scripted recordings meant to influence buyers. Generally has higher production value and typically involves both a slide-style presentation and/or live screen-sharing. Duration varies depending on the topics being covered.

Examples:

- [GitLab for the Enterprise Demo](https://youtu.be/aIYLxMXQiLI)

#### Walk-through

Product walk-throughs are informal videos meant primarily for an internal audience as a recorded, visual form of product critique. Walk-throughs typically focus on the user experience across categories and workflows within a Product Manager's [product scope](/handbook/product/categories/). There are particular benefits to walk-throughs which span [product hierarchy](/handbook/product/categories/#hierarchy) boundaries (multi-category, multi-stage, multi-section) as they help highlight disjointed experiences across our single-application.

Walk-throughs are typically longer in length as they cover more ground and often involve some "live" troubleshooting and are best performed with no planning. Use the [Product walk-through issue template](https://gitlab.com/gitlab-com/Product/issues/new?issuable_template=Product-Walk-Through) when creating a walk-through.

Examples:

- [Auto DevOps setup and usage walk-through](https://youtu.be/V4NX2j2HQAs)

### QA Release Candidates on staging and elsewhere

After the feature freeze, it's expected of each product manager to test their own features and perform quality assurance
to the best of their ability and follow up where necessary.

Product managers can use the staging environment once the release managers have deployed a release candidate (RC) to staging.
Release managers should post in the `#product` channel in Slack that a new release candidate is available. Product managers
can also use other environments as needed, such as GitLab provisioned on Kubernetes with GKE.

### Feature assurance

Before a new feature is shipped, the PM should test it out to make sure it
solves the original problem effectively. This is not about quality assurance
(QA), as developers are responsible for the quality of their code. This is about
feature assurance (FA). FA is necessary because sometimes there are
misunderstandings between the original issue proposal and the final
implementation. Sometimes features don't actually solve the intended problem,
even though it seemed like it would, and sometimes solutions just don't feel as
useful as intended when actually implemented.

If you can test out the feature during development, pulling down branches
locally (or with a review app!), that's great. But sometimes it's not feasible
to test a feature until it's bundled into a release candidate and deployed to
GitLab.com. If so, make sure to test out features as soon as possible so any new
issues can be addressed before final release. Also, take the FA cycle into
account when scheduling new milestone work.

If you are looking to test code that has not been merged to GitLab.com or is not yet
part of an RC, you can pull the branch down locally and test it using the [GitLab](https://gitlab.com/gitlab-org/gitlab-development-kit)
Development Kit (GDK).

### Dealing with security issues

Quality Engineering Managers (QEM) are the DRIs for prioritizing bugs. These include security issues which are prioritized in conjunction with the security team. Product Managers must work with their QEM to set Milestones for issues marked with the `bug::vulnerability` [type label](/handbook/product/groups/product-analysis/engineering/metrics/#work-type-classification) to guarantee they are shipped by their due date, as defined in the [Security Team process](/handbook/security/engaging-with-security/#severity-and-priority-labels-on-security-issues).

While Product Managers are the DRIs for [milestone planning](/handbook/product/product-processes/cross-functional-prioritization/#planning-for-the-milestone), they must respect the prioritization order for bugs and maintenance issues as determined by their QEM and EM, respectively. As such they should deeply understand the implications and risks of security-related issues and balance those when prioritizing a milestone work. Addressing a serious security issue by its due date may require temporarily adjusting the desired work type ratio for one or more milestones. Priority labels and Due Date designations for security issues should never be modified by Product Managers as they are directly managed by the Security Team and used to track metrics and progress.

### Foundational Requirements

When thinking about new features, we must not only think about the functional requirements of a feature (defining what the feature will do), but also to think about foundational requirements (defining how the feature works). At the highest level, foundational requirements define items such as performance, scalability, compatibility, maintainability and usability characteristics of a feature. It is important to have foundational requirements in place up front, as this is much easier than trying to add them later and change expectations, or break existing workflows. Our [definition of done](https://docs.gitlab.com/development/contributing/merge_request_workflow/#definition-of-done) contains specific areas of consideration that are required for the acceptance of new contributions.

For an in depth review of foundational requirements (often referred to as non-functional requirements), see [this resource](https://www.altexsoft.com/blog/non-functional-requirements/).

To deliver features, we must have both functional and foundational requirements defined.

#### Introducing application limits

To enhance availability and performance of GitLab, configurable limits should be put in place for features which utilize storage, or scale in a manner which could impact performance. For example, we [limit the number of webhooks per project](https://docs.gitlab.com/user/project/integrations/webhooks/), and we allow admins to set [rate limits on raw endpoints](https://docs.gitlab.com/administration/settings/rate_limits_on_raw_endpoints/). These limits ensure more consistent performance, reduce the likelihood of outages, and offer admins tools to limit abuse or enforce specific standards. While these limits can be configurable, sensible default limits should be defined for our GitLab SaaS and GitLab dedicated offerings.

There is a guide about [developing application limits](https://docs.gitlab.com/development/application_limits/) in the GitLab Docs.

##### When implementing application limits

Application limits should be enabled by default. If we are considering enabling or changing a limit, we should do the following (applies to GitLab.com and self-managed):

- **Evaluate if GitLab.com and self-managed should match** - Usually, the [limits on GitLab.com should be a good match for self-managed](/handbook/product/product-principles/#configuration-principles) but there may be situations in which limits on GitLab.com are not a good match for our self-managed customers. For example, the artifact expiration on GitLab.com was put in place to control costs and this did [not apply equally to self-managed customers](https://gitlab.com/groups/gitlab-org/-/epics/7097).
- **Evaluate the impact to current users** - How many users will be affected by this change? How much of an impact will they feel? If you need help pulling data for GitLab.com, [create an issue on the Infrastructure project](https://gitlab.com/gitlab-com/gl-infra/infrastructure/issues/)
- **Communicate limits in advance of implementation** - Create an issue and facilitate community discussion about the impact the change might have. Raise awareness of the change via social media or a blog post. If the limit will result in a breaking change, do several announcements over a period of time to ensure that everyone has advance notice.
- **Communicate the limits in advance to the Quality teams** - Quality runs tests against various environments that reuse users and as a result tend to hit limits as a false positive. As a result, Quality needs to be informed to ensure that tests can be adjusted accordingly.
- **Proactively notify Customer Success and Support of the change** - Reach out in `#customer-success` and `#support_escalations` to announce the upcoming change, and consider discussing in the next `All CS Team Call` to solicit feedback.
- **Ensure Customer Success and Support are equipped to help users** - Make sure that Customer Success and Support has access to the documentation that they need to help customers who contact them regarding the limit.
- **Document the limits on docs.gitlab.com**
  - Make sure that the limit is documented on the page for the feature and include details such as if it's configurable, what the default value is, and what impact this can have on the end user.
  - Document the limit for customers on the [instance limits](https://gitlab.com/help/administration/instance_limits.md) help page, ensuring the limit for gitlab.com is specified. Include instructions on how the limit can be changed on self-managed instances.
  - If the limit is time based, link to that section from the [Rate limits page](https://docs.gitlab.com/security/rate_limits/)
- **Communicate the limits in the release post** - When the limit is rolled out, make sure to document this change in the next release post.
- **Communicate directly to affected users** - Especially if the limit is going to have a significant impact to users, consider reaching out directly to notify those users of the change, and any available remedies, workarounds, or best practices that may help mitigate that impact. To send out an email to affected users, [work with Support to create an email request](/handbook/support/workflows/internal_requests/#contact-request).

#### Managing data lifecycle and growth

As we continue to scale our product, we need to consider the amount of data being stored for new features. Data storage is not an infinite resource, so we should think carefully about what data needs persistent storage to provide the desired user experience. We also need to consider the cost implications around data storage. Everything we store impacts our bottom line, and we should therefore be careful to ensure we are only storing necessary data for well thought out time-frames. We are working on [defining a sustainable data retention policy](https://gitlab.com/groups/gitlab-org/-/epics/13693), and will iterate on this section as more general guidelines are developed.

Data storage comes in three main forms for GitLab -- object storage, database storage, and Git repository storage. While we have dedicated teams devoted to ensuring we can scale these storages appropriately, it is in our best interest to only store what is required for a feature to perform as intended. Additionally, there are situations where storage should be subject to data retention policies.

##### Considerations around data storage

When evaluating feature data storage, the following data storage topics should be considered.

- **What quantity data needs to be stored?** - What amount of data will need to be stored for the feature to function as intended. Is this level of data storage bounded, or is there a potential for unbounded growth? Unbounded growth should be avoided if possible.
- **How long should data be retained?** - We should consider carefully the need to store data indefinitely. For many features, removing certain data after a specified time period won't impact the functionality of the feature. In these instances, we should put retention policies in place. These retention polices should have a sane default value which is considered best practice for operating the feature long term. _Note: it is easier to iterate toward longer data retention time frames, but far harder to reduce retention time frames. Consider starting out with a conservative time frame._
- **How often will this data be accessed?** - Much like the quantity of data stored can lead to scalability issues, so can the increased load on the data stores when the data is accessed frequently. There are ways to ease the burden on our infrastructure by properly forming queries, caching often used data, or carefully considering how repository data is accessed. If there are questions, consider reaching out to the [Database Group](/handbook/product/categories/#database-group) or the [Git Group](/handbook/product/categories/#git-group) for assistance.

A good example where we've successfully evaluated data storage is our CI/CD Artifacts. We've set some sane default values for both [maximum artifact size](https://docs.gitlab.com/administration/settings/continuous_integration/#maximum-artifacts-size) and for [default artifacts expiration](https://docs.gitlab.com/administration/settings/continuous_integration/#default-artifacts-expiration), while making these both configurable for administrative users.

### Cross-stage features

See [this page](/handbook/product/cross-stage-features/) for details on working across stages at GitLab.

### Stages, Groups, and Categories

[Stages, groups, and categories](/handbook/product/product-processes/#stages-groups-and-categories) serve as a common framework for organizing and communicating the scope of GitLab.

## How to work as a PM

If you follow the principles and workflow above, you won't be writing long, detailed
specs for a part of the product for next year. So how should you be
spending your time?

Invest the majority of your time (say 70%) in deeply understanding the problem.
Then spend 10% of your time writing the spec _for the first iteration only_ and
handling comments, and use the remaining 20% to work on promoting it.

A problem you understand well should always have a (seemingly) simple or obvious
solution. Reduce it to its simplest form (see above) and only ship that.

### Prioritization

See the [Cross-Functional Prioritization page](/handbook/product/cross-functional-prioritization) for more information.

#### Prioritization Framework

{{% include "includes/master-prioritization-list.md" %}}

{{% include "includes/engineering-allocations.md" %}}

{{% include "includes/feature-change-locks.md" %}}

Please also note the corresponding [Engineering handbook section](/handbook/engineering/development/principles/#prioritizing-technical-decisions) about the relative importance and prioritization of availability, security, and feature velocity. To ensure we're providing an appropriate focus on security, data loss, and availability, PMs should consider:

- **tracking the appropriate labels for each prioritization category**: Use a standing item to discuss these issues with an engineering manager and ensure you understand the impact of related issues in your area before planning a release.
- **optimizing for quality once a merge request is ready for review**: This means ensuring that Engineering has sufficient time to meet our [definition of done](https://gitlab.com/gitlab-org/gitlab-foss/blob/master/doc/development/contributing/merge_request_workflow.md#definition-of-done) - including a [high-quality code review](/handbook/engineering/workflow/code-review/) - without cutting corners to get something into production.

#### Prioritization sessions

To help PMs plan, stage group stable counterparts can participate in prioritization sessions. They serve mainly as an [internal sensing mechanism](/handbook/product/product-processes/sensing-mechanisms/#internal/) for PMs to make more informed prioritization decisions for different planning horizons. Usually, teams focus on the _product releases_ horizon, but can also focus on the _FY themes_ or _strategy_ horizons. This group exercise also boosts team morale, improves communication and empathy, and broadens individual's perspectives. Besides, it can be a more informal and joyful way of connecting the team and discussing work.

The output of these sessions is a [priority matrix](https://www.nngroup.com/articles/prioritization-matrices/) that shows the relative priority of a set of items based on two weighted criteria. Generally, the criteria are _importance_ and _feasibility_, each one visualized as an axis of the matrix. You can change the criteria depending on the planning horizon or goals. To better understand how the sessions work, see an example [mural](https://app.mural.co/t/gitlab2474/m/gitlab2474/1644233739498/018f4f87c17c9a8e7ecf1d8ce2834a72c4d8e34b) and [session recording](https://youtu.be/xgeXUEzOpUY).

Always consider [asynchronous sessions](/handbook/values/#bias-towards-asynchronous-communication) first, in an effort to be more inclusive and respectful of others time. That said, if possible, synchronous sessions can be ideal, as they allow limiting the time spent and make great use of the activities' momentum for a more efficient discussion and voting.

Use our [Mural template for prioritization sessions](https://app.mural.co/t/gitlab2474/template/1c2480fb-073f-45aa-a179-75a5e9a72740), built for product releases but adaptable for other planning horizons or criteria.

<details markdown="1">
<summary markdown="span">Process template</summary>

Adapt this process as needed, and consider changing it to an asynchronous mode of communication. For example, participants can review the items async, add questions as [comments in Mural](https://support.mural.co/en/articles/2113811-add-comments-and-tag-collaborators), and vote using [dot voting](https://www.nngroup.com/articles/dot-voting/) or in [voting sessions](https://support.mural.co/en/articles/2113758-run-a-voting-session) held on different days for each criterion.

1. Before:
   1. The facilitator creates a mural from our [template for prioritization sessions](https://app.mural.co/t/gitlab2474/template/1c2480fb-073f-45aa-a179-75a5e9a72740), with the stage group and milestone in its name.
   1. The facilitator invites the stage group counterparts for a 50-minute call, scheduled sometime before the team finalizes the release scope (see the [product development timeline](/handbook/engineering/workflow/#product-development-timeline)). Includes the URL of the mural and planning issue in the event description.
   1. The facilitator shares the preparation work with the participants, preferably in the group's planning issue (see the template after this list and an [example](https://gitlab.com/gitlab-org/create-stage/-/issues/12980#note_834155059).
   1. Participants do the preparation work (see the template after this list).
1. During (see an [example session recording](https://youtu.be/xgeXUEzOpUY)):
   1. The facilitator starts [recording the call](/handbook/tools-and-tips/zoom/#recording-in-zoom).
   1. **Present**: For each participant, the facilitator [sets the timer](https://support.mural.co/en/articles/3029991-using-the-timer) for 10 minutes (adapt per the no. of participants). A participant then presents their issues, preferably using the [RICE framework](#using-the-rice-framework). Only after the participant presents all issues should other attendees ask questions. Once in a while, the facilitator announces how much time remains. When the timer goes off, repeat this for another participant.
   1. **Vote**: After all participants have presented, the facilitator [runs two voting sessions](https://support.mural.co/en/articles/2113758-run-a-voting-session): first for _importance_, and then for _feasibility_. Each participant has 5 votes (adapt per the no. of issues). The facilitator sets the timer for 2 minutes, repeating for each voting session.
   1. **Visualize**: [Review your voting session results](https://support.mural.co/en/articles/2113758-run-a-voting-session#h_7cb8e4f588) and everyone helps place the stickies on the matrix, depending on their number of votes for each criterion.
   1. If there's still time, discuss the most-voted issues as a group.
1. After:
   1. The facilitator [uploads the recording to GitLab Unfiltered](/handbook/marketing/marketing-operations/youtube/#uploading-conversations-to-youtube), sets its visibility (see [SAFE framework](/handbook/legal/safe-framework/)), adds to relevant playlists, and includes the URL of the mural and planning issue in the description.
   1. The facilitator shares the recording URL and voting results in the planning issue, preferably with a screenshot of the matrix and links to the highest voted issues (see an [example](https://gitlab.com/gitlab-org/create-stage/-/issues/12980#note_843540512).

<details markdown="1">
<summary markdown="span">Preparation work template</summary>

```markdown
## :map: Prioritization session

`@-mention participants` for our [prioritization session](/handbook/product/product-processes/#prioritization-sessions), here's the [**Mural**](URL) for us to add the issues we want to see in **MILESTONE**. I scheduled our 50-minute session for **DATE**.

1. Add your issues to the Mural before the call. Let's try to limit to **5 issues per person**, so it's easier to vote on them and keep things focused. You can find instructions on how to add them in the "Outline" panel on the right side of the Mural UI.
1. Try not to add Security or Availability issues. This is also noted in the [product processes page](/handbook/product/product-processes/#prioritization), as those issues have forced prioritization with SLAs/SLOs.
1. If you can, mark issues that appeared in previous sessions by changing their sticky color to **orange**.

Thanks and see you soon :bow:
```

</details>

</details>

### Using the RICE Framework

[RICE](https://www.productplan.com/glossary/rice-scoring-model/) is a useful framework for prioritization that can help you stack rank your issues. The RICE framework is a great tool for prioritizing many issues that seem to be of equal value at first glance. In order to drive clarity and alignment in the prioritization of work across the entire DevOps platform, and to help prioritize items that may compete for resources from different teams, we have set a standard for the RICE factors so all prioritization decisions based on RICE are using the same metric.

**Reach** How many customers will benefit in the first quarter after launch? Data sources to estimate this might include qualitative customer interviews, customer requests through [Support/CS/Sales](https://10az.online.tableau.com/#/site/gitlab/workbooks/2015827/views), upvotes on issues, surveys, etc.

Higher reach means a higher RICE score:

- 10.0 = Impacts the vast majority (~80% or greater) of our users, prospects, or customers
- 6.0 = Impacts a large percentage (~50% to ~80%) of the above
- 3.0 = Significant reach (~25% to ~50%)
- 1.5 = Small reach (~5% to ~25%)
- 0.5 = Minimal reach (Less than ~5%)

**Impact** How much will this impact customers and GitLab? Impact could take the form of increased revenue, decreased risk, and/or decreased cost (for both customers and GitLab). This makes it possible to compare revenue generating opportunities vs. non-revenue generating opportunities. Potential for future impact should also be taken into account as well as the impact to the GitLab brand (for example unlocking free-to-paid conversion opportunities).

Higher impact means a higher RICE score:

- Massive = 3x
- High = 2x
- Medium = 1x
- Low = 0.5x
- Minimal = 0.25x

**Confidence** How well do we understand the customer problem? How well do we understand the solution and implementation details? Higher confidence means a higher RICE score.

- High = 100%
- Medium = 80%
- Low = 50%

**Effort** How many person months do we estimate this will take to build? Lower effort means a higher RICE score.

**Calculating RICE Score**

These four factors can then be used to calculate a RICE score via the formula:

(Reach x Impact x Confidence) / Effort = RICE

Here is an example RICE calculation you can use to help prioritize work in your area. Feel free to embed this at the Epic level to provide context for why you did or did not prioritize.

| **RICE Factor** | **Estimated Value** |
| ----------- | --------------- |
| Reach | `10.0` |
| Impact | `.5` |
| Confidence | `80%` |
| Effort | `2 month` |
| ------ | ------ |
| Score | (10.0 x .5 x .80) / 2 = **2.0** |

Other important considerations:

- Is this in support of a company or team [OKR](/handbook/company/okrs/)?
- Does it bring our [vision](https://about.gitlab.com/direction/#vision) closer to reality?
- Does it help make our community safer through [moderation tools](https://gitlab.com/gitlab-org/gitlab/issues/15326)?
- Does it meaningfully improve the user experience of an important workflow?
- Is it something we need ourselves?
- Is it particularly [important to customers](#issues-important-to-customers)?
- The technical complexity is acceptable. We want to preserve our ability to make
changes quickly in the future so we try to avoid complex code, complex data structures, and optional settings.
- It is orthogonal to other features (prevents overlap with current and future features).
- The requirements are clear.
- It can be achieved within the scheduled milestone. Larger issues should be split up, so that individual steps can be achieved within a single milestone.
- Refer to [research participant gratuities](/handbook/product/ux/ux-research-coordination/participation-gratuities/) section to understand [if your study qualifies for incentive distribution](/handbook/product/ux/ux-research-coordination/participation-gratuities/#study-qualification).

We schedule a prioritized issue by assigning it a milestone; for more on this see
Planning a Future Release.

#### Async RICE Exercise

Conducting a RICE prioritization exercise with your cross-functional counterparts is a powerful way to make the process more inclusive and improve the quality of your rankings. Consider making this an async-first process to accommodate team members across different timezones. For an example of how to do this async-first, see [this issue that the Geo team used to collaborate on a RICE prioritization exercise.](https://gitlab.com/gitlab-org/geo-team/discussions/-/issues/5015) This [blank async RICE template](https://docs.google.com/spreadsheets/d/13VgIHJ8y4RrvkNIyhY-gqb4VH9nsY5jrweMikYBXHhU) is also available for you to copy for your own async prioritization exercise.

### Issues important to customers

For prioritizing most issues, we should utilize the RICE framework noted [above](#prioritization), which will capture an aggregate of customer demand. You can also augment RICE scores with the [Customer Issues Prioritization Framework Dashboards](/handbook/product/product-processes/customer-issues-prioritization-framework):

[Customer Requested Issues (Product)](https://10az.online.tableau.com/#/site/gitlab/workbooks/2015827/views) for product managers
[Customer Requested Issues (CSM)](https://10az.online.tableau.com/#/site/gitlab/workbooks/2015827/views) for  Sales, CS and CSM

These dashboards provide several inputs for calculating RICE and aggregate all customer requested issues and epics into a single dashboard. These dashboards are not meant as a replacement or sole input for [Top ARR Drivers for Sales/CS](https://docs.google.com/document/d/1TxcJqOPWo4pP1S48OSMBnb4rysky8dRrRWJFflQkmlM/edit#heading=h.t3hg8c37s87g). Further requirements such as the [integration of themes](https://gitlab.com/gitlab-com/Product/-/issues/3907) need to be implemented before this framework can be used to fully inform or replace tools such as the [Top ARR tracker](https://docs.google.com/spreadsheets/d/1JdtaZYO90pR4_NQgSZRu9qdGuMrFj_H6qkBs5tFMeRc/edit#gid=0).

In some cases however, we may become aware of a feature which is particularly important to deliver on by a certain date. Examples of this could include an issue necessary to embark on a new GitLab rollout, a feature needed by a partner to launch an integration, or a method to import data from a service which is being discontinued. In these instances, the responsible PM can apply the `customer` or `customer+` label along with a `due date` and initial `milestone`. This set of labels can serve to indicate externally that the issue is particularly important, as well as a reminder for internal teams of its importance.

It is important to note that the `customer` and/or `customer+` label does not constitute a promise for the issue to be delivered in any given milestone or time frame.

### Community Considerations

GitLab is open-source, encouraging and promoting a large ecosystem of contributors is critical to our success. When making prioritization decisions,
it's important to heavily weight activities which will encourage a stronger community of contributors. Some of those activities are:

- The creation of small primitives that can be utilized and iterated on by community members
- The building of integration points which can entice independent third parties to contribute an integration
- The addition of tools or features which make the contribution experience easier

Product managers are not responsible for prioritizing contributions outside of their group. These contributions should be
[reviewed and merged swiftly](https://docs.gitlab.com/development/contributing/#contribution-flow) allowing everyone
to contribute, including non-product teams at GitLab.

### SaaS-First Framework

The [SaaS-First product investment theme](https://about.gitlab.com/direction/#saas-first) will put us in a better position to support our customer base who is expected to accelerate adoption of SaaS products in the coming years. Features will also end up more secure, resilient, performant, and scalable for our self-managed customers if initially built to the expectations of SaaS. Therefore, it is important for PMs to understand and prioritize needs related to the SaaS business. When prioritizing SaaS related issues, we follow the same [guidelines above](#prioritization). Within those guidelines there are a few areas that are especially important for PMs to focus on to ensure the success of our SaaS users.

#### Availability

Downtime of GitLab.com has a material impact on our customers. From a 2014 report [Gartner estimates](https://web.archive.org/web/20230709185836/https://blogs.gartner.com/andrew-lerner/2014/07/16/the-cost-of-downtime/) that downtime costs companies on average "$5,600 per minute, which extrapolates to well over $300K per hour." Furthermore, SaaS downtime can severely disrupt the productivity of GitLab Inc since we rely heavily on GitLab.com to run our business. Finally, downtime can also lead to customer churn and damage to our reputation. Thus, it is crucial as a company we collectively work towards consistently maintaining our [99.95% SLA on GitLab.com](https://dashboards.gitlab.net/d/general-slas/general-slas?orgId=1&from=1614038400000&to=1616630399000). There are a few things that PMs can do in partnership with their engineering team to help ensure overall Availability for GitLab.com.

- Make sure each new feature that gets built has full end-to-end test coverage.
- Before rolling out a new service to support a major new feature launch, ensure that your team has gone through the [readiness review process](/handbook/engineering/infrastructure/production/readiness/#starting-a-proposal). The effort and timing for a readiness review will vary depending on the complexity of the feature. It is recommended to start this process as early as practical when a significant number of the questions can be answered but not too late to further develop the feature based on learnings from the review.
- Ensure there are [application limits](/handbook/product/product-processes/#introducing-application-limits) for your product areas enabled on GitLab.com to reduce [abuse vectors](/handbook/security/security-operations/trustandsafety/#examples-of-common-forms-of-abuse-include-but-are-not-limited-to).

#### Infradev

The [infradev process](/handbook/engineering/workflow/#infradev) is used to triage issues requiring priority attention in support of SaaS availability and reliability. As part of the broader effort to responsibly manage tech debt across the company, PMs should partner with their EMs to identify and [incorporate](/handbook/engineering/workflow/#product-management) infradev labeled issues of [all severities](/handbook/engineering/infrastructure/engineering-productivity/issue-triage/#severity). Note, issues labeled with a severity must be mitigated and resolved within [specific time frames](/handbook/engineering/infrastructure/engineering-productivity/issue-triage/#availability) to meet the SLO. As EMs are the DRIs for prioritizing infradev work, PMs should familiarize themselves with the [infradev process](/handbook/engineering/workflow/#infradev) and [Board](https://gitlab.com/groups/gitlab-org/-/boards/1193197?label_name%5B%5D=infradev).

Other resources PMs can consult to identify and prioritize Infradev issues include:

- [Error Budgets](/handbook/engineering/error-budgets/#what-are-error-budgets) and [associated dashboards](https://dashboards.gitlab.net/d/stage-groups-configure/stage-groups-group-dashboard-configure-configure?folder=current&orgId=1&search=open)
- The weekly triage report emailed to PMs [now includes infradev items](https://gitlab.com/gitlab-org/quality/triage-ops/-/issues/661) to prevent missing SLOs.
- [Largest Contentful Paint](/handbook/engineering/development/performance-indicators/#largest-contentful-paint-lcp) metrics to monitor application performance.

While not required, PMs are encouraged to listen in on [Incident Management](/handbook/engineering/infrastructure/incident-management/#incident-management) calls for incidents related to their product areas to 1) build empathy with the SRE team by gaining insight into how they handle incidents 2) gain a better sense of the impact of the incident to their customer base, and 3) identify improvements to their product areas, whether technical or feature-related, that could have prevented the incident. PMs are not expected to be in the decision-making path on actions taken to resolve the incident. They are there to listen and learn rather than attempting to decide/influence the course of resolution. After incidents involving their product area, PMs are also encouraged to engage in the [Incident Review](/handbook/engineering/infrastructure/incident-review/), including attendance at the [Sync Incident Review](/handbook/engineering/infrastructure/incident-review/#synchronous-review-meeting-sessions) call if their incident is scheduled. PMs can periodically review incidents via the [Production Incident Board](https://gitlab.com/gitlab-com/gl-infra/production/-/boards/1717012?label_name%5B%5D=incident)

#### Enterprise Customer Needs

Enterprise customers interested in adopting SaaS may have common hard requirements to be able to use the product. For example, large enterprises may need certain security related features, such as Audit Logs, available before their security team will agree to the use of GitLab.com. This can also be about more than just features; it may include how and where we apply features so they can administrate their GitLab instance at enterprise-scale. For instance, permission management and shared configurations are best implemented top-down first instead of Project-up to meet the requirements of large organizations who may have 100s or 1000s of projects and only a small handful of people to perform these system-wide administrative tasks. In order to encourage more Enterprise adoption of GitLab.com, prioritize these common "hard-blockers" to adoption over "nice to have" features. PMs can use customer interviews to hone in on which issues are hard blockers to adopting SaaS vs more "nice to have" features that can be delivered later.

To track hard adoption blockers, use the ~"GitLab.com Enterprise Readiness" label within the [GitLab-Org](https://gitlab.com/groups/gitlab-org/-/boards/2037713?label_name%5B%5D=GitLab.com%20Enterprise%20Readiness) and [GitLab-com](https://gitlab.com/groups/gitlab-com/-/boards/2037722?label_name%5B%5D=GitLab.com%20Enterprise%20Readiness) groups.

#### SaaS Features

There are a few special considerations when it comes to delivering features for SaaS. In order to achieve [parity between SaaS and Self-managed installations](/handbook/product/product-principles/#parity-between-saas-and-self-managed-deployments) PMs should prioritize efforts to eliminate existing feature gaps that exist [across the two installations](https://about.gitlab.com/features/). Additionally, new features should ship for SaaS and self-managed at the same time. Features should be implemented at the group level first, before being implemented at the instance level, so that they will work across [both self-managed and SaaS](https://about.gitlab.com/direction/foundations/#gitlabcom). Finally, in order for new features to be adequately monitored, they should include [appropriate logging and observability](https://gitlab.com/gitlab-com/gl-infra/readiness/blob/master/.gitlab/issue_templates/production_readiness.md#monitoring-and-alerts), which makes troubleshooting much easier.

### Working with Your Group

As a product manager, you will be assigned as the [stable counterpart](/handbook/company/structure/#specialists-experts-and-mentors) to a single [group](/handbook/company/structure/#groups). At GitLab we abide by
unique, and extremely beneficial guidelines when interacting with our groups. These include:

1. Product managers are the [DRIs](/handbook/people-group/directly-responsible-individuals/) for overall work prioritization but work collaboratively with their EM, UX, and QEM stable counterparts to ensure the right priorities from each [work type](/handbook/product/groups/product-analysis/engineering/metrics/#work-type-classification) are considered as each has a different DRI. Product Managers are responsible for communicating overall priority.
1. Product Managers provide the what and when for feature work. Engineering (UX, Backend, Frontend, Quality) provide the how. This process is documented as part of our monthly [product](/handbook/product-development-flow/), [engineering](/handbook/engineering/workflow/#product-development-timeline) and [UX](/handbook/product/ux/product-designer/) cadence. We [define stable counterparts for each of these functions](/handbook/product/categories/) within a group.

As an all-remote company, our crispness when it comes to responsibilities throughout the Product Delivery process was born out of necessity, but it pays untold dividends. Some of the benefits include:

- We avoid the ambiguity in handoffs between teams
- We avoid the confusion of many responsible individuals
- We avoid the slowness of consensus driven decision making
- We avoid the disruption of frequent context switching
- We gain the rigidity to be consistent
- We gain the freedom to iterate quickly

#### From Prioritization to Execution

As described above, prioritization is a multi-faceted problem. In order to
translate the priorities of any given group into action by our engineering
teams, we need to be able to translate this multi-faceted problem into a flat
list of priorities for at least the next release cycle. Product Managers are
[responsible for taking all these prioritization considerations](/handbook/product/product-processes/cross-functional-prioritization/#planning-for-the-milestone) and creating a
clear, sequenced list of next priorities. This list should be represented as an [issue board](https://docs.gitlab.com/user/project/issue_board/)
so that each team has a clear interface for making decisions about work. From
this list, Product Designers, Engineering Managers and Product Managers can work together to
determine what items will be selected for work in the immediate future.

This does not mean that items will be addressed in strict order - Product Designers, EMs and PMs
need to be cognizant of dependencies, available skill sets, and the [rock/pebbles/sand](https://www.developgoodhabits.com/rock-pebbles-sand/)
problem of time management to make the best decisions about selecting work.

#### Reviewing Build Plans

Together with your Engineering Manager, you will have an important role in ensuring that the Build Plans defined for issues are created with iteration in mind. Iteration is highly valuable for the following reasons:

1. It can result in discovering ways to parallelize effort, resulting in less team WIP and increase throughput
1. It can result in shipping something of value during an iteration rather then delaying everything
1. It can re-risk unknown unknowns by bringing them to light sooner in the development process

#### Prioritizing for Predictability {#prioritize-predictability}

As a company we emphasize [velocity over predictability](/handbook/engineering/development/principles/#velocity-over-predictability). As a product manager this means
you focus on prioritizing, not scheduling issues. Your engineering [stable counterparts](/handbook/leadership/#stable-counterparts) are
responsible for velocity and delivery. However, there are instances when there is desire for predictability, including:

- [Security](#dealing-with-security-issues), Bugs and Infra priorities with SLOs
- [Customer Commitments](https://gitlab.com/groups/gitlab-org/-/labels?utf8=%E2%9C%93&subscribed=&search=planning+priority)
- Infrastructure projects with IACV driver impact or those that result in significant cost savings for gitlab.com
- Infrastructure projects with customer commitment or heavily upvoted should be given a priority indicative of other customer commitments
- Vision or Direction items for a launch

As the DRI for [milestone prioritization](/handbook/product/product-processes/cross-functional-prioritization/#planning-for-the-milestone), it is the Product Manager's job to prioritize for predictability when it is needed. You should do so by ensuring you prioritize a deliverable, and its dependencies, so that it can reasonably be expected to be delivered by any committed dates. If there is time pressure to hit a date, the PM should also explore de-scoping the issue to meet the deadline, rather than pressuring engineering to move abnormally fast or cut corners.

#### Private tools and dashboards for monitoring and KPI tracking

These information sources may be useful to help you prioritize.

- [Feature usage](https://redash.gitlab.com/dashboard/feature-adoption)
- [EE usage](https://version.gitlab.com/): dev.gitlab.org account
- [Grafana](https://dashboards.gitlab.net): Google gitlab.com account
- [Kibana](https://log.gprd.gitlab.net): dev.gitlab.org account
- [S3stat](https://www.s3stat.com): GitLab 1Password account
- [Sentry](https://sentry.gitlab.net): dev.gitlab.org account

### Global Prioritization {#prioritize-global}

Individual product managers must consider, and advocate for [global optimizations](/handbook/values/#results)
within the teams they are assigned to. If your assigned team requires expertise
(remember [everyone can](/handbook/engineering/development/principles/#collaboration)
contribute)
outside the team you should make all reasonable efforts to proceed forward
without the hard dependency while advocating within the product management team
for increased prioritization of your now soft dependencies.

Execution of a Global prioritization can take many forms.  This is worked with both Product and Engineering Leadership engaged.  Either party can activate a proposal in this area.  The options available and when to use them are the following:

- [Rapid action](/handbook/product/product-processes/pm-procedures/#rapid-action) - use when reassignment isn't necessary, the epic can have several issues assigned to multiple teams
- [Borrow](/handbook/product/product-processes/pm-procedures/#borrow) - use when a temporary assignment (less than 6 months) to a team is required to help resolve an issue/epic
- [Scope Reassignment](/handbook/product/product-processes/pm-procedures/#scope-reassignment) - use when scope that will take longer than 6 months to deliver is a high priority and the team member reporting structure does not need to change to accomplish the effort.
- [Realignment](/handbook/people-group/promotions-transfers/#realignment-of-team-members-impacting-multiple-teams) - use when a permanent assignment to a team is required to resolve ongoing challenges. This has the highest impact to team members and should be considered if other options cannot achieve the desired goal. We strive to hire team members in the groups that will need them most.

We have found the following methods less successful in ensuring completion of work that warrants global prioritization:

- [Working Groups](/handbook/company/working-groups/) - This method involves convening a group of individuals who maintain full-time responsibility to other [Product Groups](/handbook/company/structure/#product-groups) and completing work as part of the working group structure. This method isn't preferred for completing product improvements, instead it can be utilized to scope work, or determine plans for future product delivery.
- Fan Out Prioritization - This method of prioritization involves communicating a global prioritization to a number of [Product Groups](/handbook/company/structure/#product-groups) in an effort to ensure each individual product group's PM prioritizes the work in the time frame you'd prefer.  This method requires significant coordination costs and puts delivery at risk due to the lack of central prioritization responsibility. In most cases it is preferred to execute a scope reassignment, borrow or realignment to complete the improvements.

### Planning and Direction

As a PM, you must plan for the near term milestones (more detailed) as well as for the long
term strategy (more broad), and everything in between.
While monthly milestone planning is done in GitLab, longer horizon planning (1-3 years) is done in direction pages.
This will enable you to efficiently communicate both internally and externally
how the team is planning to deliver on the [product vision](https://about.gitlab.com/direction/#vision).

#### Managing your Product Direction

Documenting a Section, Stage, Group and Category direction is critical to communicating where we are heading and why to all of our stakeholders. This is especially important to the members of your Product Group. Establishing a direction for stakeholders (including team members) to participate in, and contribute to ensures there is a concrete connection to "Why" we are iterating and how it furthers [GitLab's mission](/handbook/company/mission/#mission). Here are some of those connections:

- Improving Product Performance Indicators - Usage represents market capture (whether paying or not), and the start of our dual fly-wheel. For existing customers that market capture in new capabilities also represents increased retention and because of the benefits of a single application - user satisfaction.
- Improving Competitiveness against [alternative DevOps tools](https://about.gitlab.com/why-gitlab/) - Leads to increased Stages Per user, and sales as they add to our "Increase Operational Efficiency"

As a Product Manager you can highlight these connections in:

- Direction Content and Overview Videos
- Weekly Meetings
- Individual Issue Descriptions
- Planning Issues
- Kickoff Videos
- Customer Discovery Interview Summaries

Communicating this connection requires a multi-channel approach. We should strive to [share](/handbook/values/#share) and communication about the connection to our Direction warrants consistent reinforcement.

##### Section and Stage Direction

Section leaders are responsible for maintaining Direction pages that lay out the strategy and plan for their respective section and stages. The direction pages should include topics outlined in this [template](https://gitlab.com/gitlab-com/www-gitlab-com/blob/master/doc/templates/product/section_direction_template.html.md).

##### Category Direction

A category strategy is required which should outline various information about
the category including overall strategy, status, what's next, and the competitive landscape.
The category strategy should be documented in a handbook page, which allows for version control
of the category strategy as well as the ability to embed video assets.
One of the most important pieces of information to include in the category strategy is a tangible next step or MVC
and a clear description of focus and out-of-focus/maintenance areas.

Your category strategies should contain short paragraphs with lots of references to specific epics and issues.
Referencing topics, instead of features is encouraged as it's more stable over time.

We use this [category strategy template](https://gitlab.com/gitlab-com/www-gitlab-com/blob/master/doc/templates/product/category_direction_template.html.md)
as the outline for creating the handbook pages. If additional headings are needed you are empowered
to create and populate them in your category strategy. You must keep these categories in sync with `categories.yml` and for
new categories.

Category direction should be reviewed on a regular basis (at least monthly) by the responsible product
manager. To indicate the last time a category direction page was reviewed, please ensure pages
include `Content Last Reviewed: yyyy-mm-dd` at the top of the category content. Update this date with every
review, even if other content on the direction page has not changed.

You should link to your category strategy from your stage strategy page.
For categories that have already shipped, and that have a marketing
product page, `categories.yml` should link to the product page.

Inside of the `categories.yml` file there are dates assigned for either achieved or anticipated maturity achievement. These should be kept inline with communicated dates for achievement and updated as required.

If the category has developed a [UX Roadmap](/handbook/product/ux/product-design/ux-roadmaps/) we recommend the product designer to create a merge request to incorporate UX Roadmap themes into the category direction page roadmap. Assign the MR to the PM for review and merge.

##### Navigating cross-stage or cross-section direction pages

In some cases there may be direction pages that span multiple stages or sections. A direction page that summarizes the collective vision as well as all the contributors of that direction is critical to maintain transparency and adequate assignment of ownership.

There are several examples of these types of direction pages today:

1. [Software Supply Chain Security Direction](https://about.gitlab.com/direction/supply-chain/)
1. [AutoDevOps Direction](https://about.gitlab.com/direction/delivery/auto_devops/)
1. [Monorepo Product Direction](https://about.gitlab.com/direction/gitaly/monorepos/)
1. [Versioned Dependencies Direction](https://about.gitlab.com/direction/versioned-dependencies/)
1. [Customizable Dashboards Direction](https://about.gitlab.com/direction/customizable-dashboards/)

The steps for creating and managing a cross-section or stage direction are:

1. Create a direction page merge request adding the direction page to the [GitLab direction directory](https://gitlab.com/gitlab-com/www-gitlab-com/-/tree/master/source/direction)
1. Select the category change template in the merge request
1. Follow the process for [category changes](/handbook/product/categories/#changes)
1. Add [CODEOWNERS](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/.gitlab/CODEOWNERS) by adding an entry with the direction page link and the page DRI GitLab Handle.
1. Once approved, `@` all relevant product managers on the addition

Once the direction page has been added, there needs to be an assigned DRI for maintaining monthly updates for the page. It is the DRIs responsibility to ensure the shared direction page is regularly reviewed and is up to date. This requires cross-section / cross-stage collaboration from the DRI.

##### What makes a Product Direction issue?

You should use the `~direction` label together with category and section labels to mark epics and issues that fall into the given direction.

Product Direction items (i.e., with the label) should be direction-level items that move the strategy forward meaningfully. This is up to the PM to set the bar for, but there should be a clear step forward with real user value.

It's important to note here that your plan _is not_ simply a list of new features and innovation.
Those are included for sure, but so are issues related to all of your [sensing mechanisms](/handbook/product/product-processes/sensing-mechanisms/).
A category upgrade from minimal to viable or delivery of a top customer issue (for example) can contribute to your plan just as much as a brilliant new innovative feature can. It's up to PMs to balance this through a coherent longer-term strategy.
Conversely, in a broad sense anything could move the plan forward in a general way.

Finally, issues are the substance of your plan. Ensure you are applying the label to both revelant epics _and_ its issues.

#### Communicating dates

As product managers, a core job is to set the correct expectations. We do this typically through discussing our direction and assigning issues to milestones. When you need to communicate specific dates, it's recommended doing it with limited visibility internally or directly to the customers. When you need to communicate specific dates use [calendar year (CY) dates](/handbook/communication/#writing-style-guidelines). Fiscal year (FY) does not translate well outside the company.

Accordingly, the direction pages are expected to refer to specific issues only for the next 3-4 months. Everything beyond that should discuss the topic, not specific issues.

#### Planning is indispensable but adjust, iterate

Creating a thoughtful direction for your section, stage, or category is a useful thought exercise that can help focus efforts, aid in prioritization, and get large groups of people on the same page. But beware of simply executing your long term plan. Our industry is incredibly dynamic, and we learn new things every day that can and should cause us to re-think our long term plans.

#### Delivery follows discovery

We should ship what brings value to our customers, not what is easy to ship. Stay focused on creating value each and every milestone, and be quick to adjust your longer term direction as you learn more.

1. When working on a larger theme, you should start with validating the end state knowing that it will change as you start shipping features and you learn more from actual usage.
1. Once the final vision is validated, you should work with your designer and engineering counterparts to break it down to the smallest possible iterations in order to ship value quickly.
1. You might still prefer to validate the first "milestone" before getting into delivery.
1. It's totally fine to never ship the initial vision and refine the vision after every iteration. A feature not built is much more valuable than a feature that is built but never used.

#### Maturity Plans

For each category, we recommend tracking the improvements required to advance to the next level of [maturity](https://internal.gitlab.com/handbook/product/investment/maturity/). You are welcome to track maturity plans either with `~maturity::...` labels or maturity issues.

Maturity plans are highly encouraged - but not required - for non-marketing categories.

#### Planning and OKRs

[GitLab users quarterly OKRs](/handbook/company/okrs/) that cascade into [Product OKRs](/handbook/product/product-okrs/) and product group OKRs.
You should have plans for the next three months in terms of driving specific product metrics through discovery and delivery actions.
You should discuss the product metrics with your manager, your design and engineering counterparts and the actions to reach the results with your design and engineering counterparts.

You can read more about the OKR process at GitLab at the two links shared above.

#### Planning Issue for Milestone

For each milestone, the planning quads come together to scope and plan work for the group for the upcoming milestone. Planning begins asynchronously with the creation of the planning issue. The planning issue is the SSOT for communication and all resources that are needed to plan a successful milestone. There are many ways to achieve to plan a milestone that should be curated based on the needs of the team. Below are a few examples of planning issues from groups acorss R&D to aid you in creating one that works best for your team.

- [Verify::Pipeline Execution](https://gitlab.com/gitlab-org/ci-cd/pipeline-execution/-/blob/main/.gitlab/issue_templates/milestone_planning.md)
- [Verify::Testing](https://gitlab.com/gitlab-org/ci-cd/testing-group/-/blob/master/.gitlab/issue_templates/ReleasePlan.md)
- [Monitor::Respond](https://gitlab.com/gitlab-org/monitor/respond/-/blob/master/.gitlab/issue_templates/planning-issue.md)
- [Create::Code Review](https://gitlab.com/gitlab-org/create-stage/-/blob/master/.gitlab/issue_templates/code-review-planning.md)
- [Create::Editor](https://gitlab.com/gitlab-org/create-stage/-/blob/master/.gitlab/issue_templates/editor-planning.md)
- [Data Stores::Database](https://gitlab.com/gitlab-org/database-team/team-tasks/-/blob/master/.gitlab/issue_templates/Planning.md)

As you adapt your own issue, it is recommended you apply the label `planning issue` to aid in tracking and to incorporate our [Product Principles](/handbook/product/product-principles/) into the process.

#### Managing Upcoming Releases

Refer to the [Product Development Timeline](/handbook/engineering/workflow/#product-development-timeline)
for details on how Product works with UX and Engineering to schedule and work on
issues in upcoming releases.

#### Planning for Future Releases {#planning-future-release}

There are two non-exclusionary ways to plan and communicate work for future releases

##### Planning with boards

As a Product Manager you can maintain prioritization of your groups issues using
a fully prioritized issue board where the ordering of the issues reflects their priority.

##### Planning with milestones

Product Managers can assign milestones to issues to indicate when an issue is likely
to be scheduled and worked on.
Still, whether an issue can be delivered within a milestone is the decision of the engineering team.
As we consider more distant milestones, the certainty of
the scope of their assigned issues and their implementation timelines is increasingly
vague. In particular, issues may be moved to another project, disassembled, or merged
with other issues over time as they bounce between different milestones.

The milestone of an issue can be changed at any moment. The current assigned milestone
reflects the current planning, so if the plan changes, the milestone should be updated
as soon as possible to reflect the changed plan. We make sure to do this ahead
of starting work on a release. Capacity is discussed between the PMs and the
engineering managers.

There are helper labels to signals these plans like `~next::1-3 releases` and its variants.

###### Special milestones

In addition, we have two special milestones: `Backlog` and `Awaiting further demand`.
Product Managers assign these issues to milestones that they have reviewed and
make sense, but do not fit within the upcoming release milestones due to either
a lack of comparative urgency or because we have not yet seen enough user
demand to prioritize the item yet. The best way to demonstrate urgency on
either of these items is to vote on them and, if possible, add comments
explaining your use case and why this is important to you.

**Recommendation for when to change 'Awaiting further demand':**
Always focus on the overall value of the feature.
Do you have a good understanding of the user problem?
Do you have a good understanding of the impacted user base?
Was the proposed solution validated?
Issues with the 'Awaiting further demand' label often mean poorly understood requests that require more information from our users and the market.

Often public feedback only comes from a small percentage of people using or evaluating a feature or product.
You should always consider reaching out directly to our users to learn more about their use cases.

**Recommendation when changing a previously planned issue to `Backlog`:** When moving
a previously planned issue to `Backlog`, especially one planned for within the next release or two,
consider the message that this may be sending to parties that were interested in this feature.
In some cases, they may have been depending or planning upon the issue to be delivered around
the assigned milestone, and with the change to `Backlog` that is now unlikely to occur. In these instances,
it is best to concisely explain the rationale behind the change in a comment, so
the community can understand and potentially respond with additional justification or
context. It is also encouraged to move the issue to the `Backlog` as soon as it is clear that it will not be scheduled in the near future. This will help with understanding the change, as it will not seem like a last minute change.

Communicating clearly changing priorities might encourage the community to contribute the issue to GitLab.

Again, the milestone of an issue can be changed at any moment, including for both
of these special milestones.

#### Shifting commitment mid-iteration

From time to time, there may be circumstances that change the ability for a team
to ship the features/issues they committed to at the beginning of the iteration.
These steps also apply when an issue is broken into multiple issues.
When this happens, as a PM you must coordinate with your EM counterpart that
 the impacted issues and their milestones
are updated to reflect the new reality (for example, remove `deliverable`
tag, update `milestone`, etc.). Additionally, notify your manager of the shift.

#### Utilizing our design system to work autonomously

Our [design system](https://design.gitlab.com) provides the means to work
autonomously, without always needing UX insight, feedback and design. When problems can
be solved using an already documented paradigm, you don't need to wait for UX
approval to bring an issue to a reasonable state within a first iteration.

If lingering questions remain, subsequent iterations can address any shortcomings
the feature might have.

Always consider that with a dedicated product designer, it's much faster and cheaper to iterate on a design than to re-implement it.
At the same time, not everything needs a design, and the design system is here to support your engineers and you in those cases.

### Iteration Strategies

Iteration is a core value of GitLab, and product management has a central role to play in it. Iteration should be apparent as we deliver new features in MVCs, but it has implications for discovery too. As solution validation can move much faster than delivery, we should aim to validate features before building them. At this point, the feature validated is likely way bigger than an MVC if we would build it. We should pay special attention as product managers to still aim at iterative delivery after a bigger feature-set got validated, as delivered features provide the final validation. For example, once a direction is validated, we can start the delivery by documentation. As product managers we should aim to iterate as part of solution validation, and while delivering already validated solutions too.

Here are several strategies for breaking features down into tiny changes that can be developed and released iteratively. This process will also help you critically evaluate if every facet of the design is actually necessary.

#### Workflow steps

As part of design and discovery, you likely created a minimal user journey that contains sequential steps a user is going to take to "use" the feature you are building. Each of these should be separated. You can further by asking yourself these questions:

- Can/is it desirable to perform this action via the UI or can we use a non-UI approach as a start (for example, CLI, API or .csv download of data)? This is a great starting point before adding UI components that achieve the same thing.
- Will there be different UI paths to perform the same task? Identify which are the most useful and which are the easiest to implement. Weight both factors when determining which to start with, and build from there.

#### User operations

View, Create, Update, Remove and Delete are actions users take while interacting with software. These actions naturally provide lines along which you can split functionality into smaller features. By doing this, you prioritize the most important actions first. For example, users will likely need to be able to visually consume information before they can create, update, remove, or delete.

#### Functional criteria

Often, the criteria for features are built on is implicit. It can help to use a test-driven development mindset where you write the tests and the outcomes you need from the software before building the software. Writing these tests can uncover the different criteria you need the development team to meet when building the new feature. Once you've outlined these tests, you may be able to use them to continue to break down the feature into smaller parts for each test. Here are a few examples:

- What is the default behavior when there is no data (empty/null state)?
- Are there automatic actions or events that occur as part of your feature? Write them down, and identify those that can be done manually by the user before adding automation.
- Will users of different roles have unique experiences? Can you prioritize and build one of these experiences first? (for example: guest, user, developer, maintainer).
- Do users want to be able to customize their view of information? Define all of the customizations you want to offer, and build them one at a time (for example, toggle on/off, filter, sort, search).

#### Exception & error cases

Software often fails and can fail in different ways depending upon how it is architected. It is always best to provide the user with as much information as possible as to why something did not behave as expected. Creating and building different states to handle all possible errors and exceptions can easily be broken down into individual issues. Start by creating a generic error state to display when anything goes wrong, and then add on to handle different cases one by one. Remember to always make error messages [useful](https://design.gitlab.com/content/ui-text/#clear-error-messages), and add additional error messages as you identify new error states.

#### Breaking down the UI

Breaking down a design into pieces that can be released iteratively is going to depend on what you are building. Here are a few helpful questions to guide that process:

- What components already exist that you can reuse to go faster?
- What constitutes "extra styling"? Is there a way to display the information you need to display plainly and then add details later?
- Do you have lots of interactions in the design that make the UX lovable? Can you pull those out into separate issues and add them iteratively? (e.g. hover states, drag & drop, toggles, options to show/hide info, collapse/expand, etc)

#### Refactors

Continuously improving the software we write is important. If we don't proactively work through [technical debt](/handbook/engineering/workflow/#technical-debt) and [Deferred UX](/handbook/engineering/workflow/#deferred-ux) as we progress, we will end up spending more time and moving slower in the long run. However, it is important to strike the right balance between technical debt, deferred UX, and iteratively developing features. Here are some questions to consider:

- What is the impact if we do not refactor this code right now?
- Can we refactor some of it? Is a full re-write necessary?
- Why do we need to use that new technology? (You may need to ask WHY multiple times to get to the root of the problem)

#### Separate announcement from launch

For large projects, consider separating the announcement from the actual feature launch. By doing so, it can create more freedom to iterate during the customer rollout. For example, you could announce in advance to give customers ample notice, and then roll it out to new customers first, then to existing Free customers, then to existing paid customers. Or you could do the opposite, and roll it out to customers first, before announcing broadly, to ensure the user experience is great before making a marketing splash.

When considering dates for a product announcement or launch that may impact our Field team, consider the [blockout restrictions](/handbook/sales/field-communications/#field-communications-playbook-flowchart) recognized by the Field team to ensure there won't be any major disruption to the business near quarter end.

#### Four phase transition

Sometimes the objective is to cut over from one experience, or one system, to another. When doing so, consider having four transition phases rather than a hard cut over. The phases are: 1) Old experience. 2) Run the old experience and new experience side-by-side, with the old experience the default, and the new experience is gradually rolled out to a subset of users. 3) Run them side-by-side, with the new experience the default for the majority, but the old experience is still available as a fallback in case of problems. 4) Deprecate the old experience and offer only the new experience. This strategy enables teams to have more flexibility and demonstrate more iteration in the rollout, with reduced risk.

#### Iterate to go faster

When something is important, it is natural to want to launch it all at once to get to the end game faster. However, big bang style launches tend to need everything perfect before they can happen, which takes longer. With iteration you get feedback about all the things that aren't a problem and are done enough. It's better to launch in small increments, with a tight feedback loop, so that the majority of users have a great experience. This tends to speed up the overall timeline, rather than slow it down.

#### Remote Design Sprint

A [Design Sprint](https://www.gv.com/sprint/), is a 5-day process used to answer critical business questions through design, prototyping and testing ideas with customers. This method allows us to [reduce cycle time](/handbook/values/#reduce-cycle-time) when coming up with a solution.

As an all-remote company we run [Remote Design Sprints (RDS)](/handbook/product/ux/design-sprint/). Check out our [guidelines for running an RDS](/handbook/product/ux/design-sprint/#when-to-opt-for-a-remote-design-sprint) to determine if it's the right approach for the problem at hand.

#### Spikes

If you're faced with a very large or complex problem, and it's not clear how to most efficiently iterate towards the desired outcome, consider working with your engineers to build an experimental [spike solution](https://www.jamesshore.com/v2/books/aoad1/spike_solutions). This process is also sometimes referred to as a "technical evaluation." When conducting a spike, the goal is write as little code within the shortest possible time frame to provide the level of information necessary the team needs to determine how to best proceed. At the end of the spike, code is usually discarded as the original goal was to learn, not build production-ready solutions. This process is particularly useful for major refactors and creating [architecture blueprints](/handbook/engineering/architecture/workflow/).

#### Feedback issues

When launching a feature that could be controversial or in which you want to get the audience's feedback, it is recommended to create a feedback issue.

Timeline:

- Create the issue and include in the release post.
- If announcing in Slack or doing dogfooding, include a link to the feedback issue
- Leave the issue open for at least 14 days after launch
- Respond and catalog the feedback into separate issues
- Close the issue once the time frame has passed and summarize the learnings from the feedback issue

Here are some examples of feedback issues:

- [WebIDE](https://gitlab.com/gitlab-org/gitlab/-/issues/385787)
- [Fonts](https://gitlab.com/gitlab-org/gitlab/-/issues/386205)
- [`master` -> `main`](https://gitlab.com/gitlab-org/gitlab/-/issues/221164)

##### Feedback issue considerations

Feedback issues are intended to collect feedback from the wider community and users. In some cases, internal user will be posting on behalf of users and customers. As a result we need to consider the following:

1. Feedback issues that are public cannot contain [SAFE](/handbook/legal/safe-framework/#what-is-safe) information
1. A linked confidential issue for Field feedback can be used, if needed, to support the exchange of customer details and feedback
1. Leverage [internal comments](https://docs.gitlab.com/user/discussions/#add-an-internal-note) as needed if customer details are being shared

#### Other best practice considerations

Consider the following to improve iteration:

- Successfully iterating should mean you're delivering value in the most efficient way possible. Sometimes, this can mean fixing an underlying technical issue prior to delivering a customer facing feature.
- Wherever possible, consider reuse of components that already exist in the product. A great example of this was our approach to creating our Jira importer, which reused the Jira service integration. Reuse also aligns well with our efficiency value.
- Avoid technical dependencies across teams, if possible. This will increase the coordination cost of shipping and lead to a slow down in iteration. Break down silos if you notice them and consider implementing whatever you need yourself.
- Consider a quick POC that can be enabled for small portion of our user base, especially on GitLab.com. An example of this was search, where it was originally enabled just for a few groups to start, then slowly rolled out.
- Great collaboration leads to great iteration. Amazing MVCs are rarely created simply by product managers, they often arise out of collaboration and discussion between product, engineering, design, quality, etc.
- Keep the initial problem statement front and center for the team. Tight problem statements enable the team to identify a tight, iterative solution.
- Bring data to the table early to help the team triangulate on the smallest iteration that will have the largest impact in solving the identified problem.
- If the project is multi-phase, consider iterative targets and guardrails to help the team focus on the next iterative milestone, rather than the final end state goal.
- If your team needs to do repetitive work on behalf of customers, partners, or other GitLab teams, consider using a framework approach so that dependent teams can self-serve.

### Community participation

Engaging directly with the community of users is an important part of a PM's job. We
encourage participation and active response alongside GitLab's [Developer Relations team](/handbook/marketing/developer-relations/).

#### Conferences

A general list of conferences the company is participating in can be found on our
[corporate marketing](https://gitlab.com/gitlab-com/marketing/corporate_marketing/corporate-marketing/-/issues?label_name%5B%5D=Corporate+Event&sort=due_date) project.

There are a few notable conferences that we would typically always send PMs to:

- [KubeCon](https://events.linuxfoundation.org/)
- [Atlassian Summit](https://events.atlassian.com/team22/)
- [GitHub Universe](https://githubuniverse.com/)
- [DevOps Enterprise Summit](https://itrevolution.com/events/)
- [Google Next](https://cloud.withgoogle.com/next)
- [AWS Reinvent](https://reinvent.awsevents.com/)
- [Velocity](https://www.oreilly.com/conferences/velocity-software-architecture/)

If you're interested in attending, check out the issue in the corporate marketing
site and volunteer there, or reach out to your manager if you don't see it listed
yet.

### Stakeholder Management

#### What is a Stakeholder?

A stakeholder, or stable counterpart, is someone that is outside of your direct team who meets one or more of the following:

- Is directly or indirectly impacted
- Has the ability to stop, delay, or cancel

Examples of stakeholders include Leadership, Sales, Marketing, Customer Support, and Customer Success. You may have stakeholders in any area of GitLab depending on your focus area and the specific issue. Stakeholders are also present outside of GitLab, for example, when a feature is being developed for a specific customer or set of customers. If you're not sure who the stakeholder is to collaborate with or keep informed, visit [product sections, stages, groups, and categories](/handbook/product/categories/).

#### Updated SSOT for stakeholder collaboration

Stakeholder collaboration and feedback is a critical competitive advantage here
at GitLab. To ensure this is possible, and facilitate collaboration, you should
maintain an updated single source of truth (SSOT) of your stage direction, category
strategies, and plan, at all times. This equips anyone who wants to contribute to
your stage's product direction with the latest information in order to effectively
collaborate. Some sections and teams use the [scheduled Direction Update issue template](https://gitlab.com/gitlab-com/Product/blob/master/templates/DIRECTION-UPDATES.md.erb) to
remind themselves of this task.

Actively and regularly reach out to stakeholders. Encourage them to view and collaborate
on these artifacts via these (non-exhaustive) opportunities:

- Engage with users in epics, issues, and merge requests on GitLab.com.
- [Meet with customers directly.](#customer-meetings)
- Participate in the [CAB](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/customer-advocacy/#gitlab-devops-customer-advisory-board).
- Talk with GitLab team-members using GitLab.
- Talk with GitLab team-members in [group conversations](/handbook/company/group-conversations/).
- Talk with other PMs and [Product leadership](/handbook/product/product-leaders/product-leadership/) to align your stage's product direction with the rest of GitLab.

Here is some guidance for new PMs to ensure your stage direction, category strategies and plan
are up-to-date and visible to critical stakeholders:

- Seek feedback from the [CAB](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/customer-advocacy/#gitlab-devops-customer-advisory-board) once every six months.
- Present your plan to your manager once a month.
- Present the plan and stage/category strategies to your stable counterparts
- Present your stage strategy and plan in a [customer meeting](#customer-meetings) once every two weeks.
- Present changes to your stage strategy, category strategies, and plan to your
stage group weekly meeting once a month.

### Working with customers

#### Customer meetings

It's important to get direct feedback from our customers on things we've built, are building, or should be building. Some opportunities to do that will arise during [sales support meetings](#sales-support-meetings). As a PM you should also have dedicated[customer discovery meetings](#customer-discovery-meetings) or [continuous interviews](/handbook/product/product-processes/continuous-interviewing) with customers and prospects to better understand their pain points. As a PM you should facilitate opportunities for your engineering group to hear directly from customers too. Try to schedule customer meetings at times that are friendly to your group, invite them, and send them the recording and notes.  If you're looking for other ways to engage with customers here is a video on [finding, preparing for, and navigating Customer Calls as a Product Manager at GitLab](https://www.youtube.com/watch?v=HyVR_ybRkCY).

##### Sales support meetings

**Before the meeting**, ensure the Sales lead on the account has provided you with sufficient
background documentation to ensure a customer doesn't have to repeat information they've already
provided to GitLab.

**During the meeting**, spend most of your time listening and obtaining information.
It's not your job to sell GitLab, but it should be obvious when it's the time
to give more information about our products.

For message consistency purposes, utilize the [Value Drivers](/handbook/marketing/#go-to-market-value-drivers-and-customer-use-cases) framework when posing questions and soliciting information.

After the meeting:

- [Create an interview snapshot](https://gitlab.com/gitlab-com/user-interviews/-/issues/new?issuable_template=user-interview)
summarizing the meeting in the [gitlab-com/user-interviews](https://gitlab.com/gitlab-com/user-interviews) project.
This project is private so that detailed and unredacted feedback can be shared internally.
- Link the Google Doc where detailed notes were taken.
- Create or update related issues to publicly document feedback.
The synthesis of feedback from multiple meetings should happen publicly in an epic or issue.

##### Customer discovery meetings

Customer discovery meetings aren't UX Research. Target them to broad-based needs
and plan tradeoff discussions, not specific feature review. There are
two primary techniques for targeting those topics:

- **Top Competitors** - Identify the top 3 competitors in your categories and talk to
customers using those competitor asking: What is missing to have you switch from
X to us? We're not aiming for feature parity with competitors, and we're not
just looking at the features competitors talk about, but we're talking with
customers about what they actually use, and ultimately what they _need_.
- **User Need** - Identify GitLab users from key customers of your group's
categories and features. Solicit them for what they love about the features and
ask about their current pain points with both the features as well as the surrounding
workflows when using those components of GitLab?

Follow the below guidance to prepare and conduct Customer Discovery Meetings:

**Set up a meeting:**

- Identify what you're interested in learning and prepare appropriately
- You can find information about how customers are using GitLab through Sales and version.gitlab.com. Sales and support should also be able to bring you into contact with customers
- There is no formal internal process to schedule a customer meeting, however you can check [this template](https://docs.google.com/document/d/1XcBgdOFPXHhS3XAkYucOUDGQR8CIy1C2W5_L8mulBYQ/edit#heading=h.14axtw861pm1) for gathering questions from interested parties and for capturing the notes during the customer discovery meetings.

**During the meeting:**

- Spend most of your time listening and documenting information
- Listen for pain points, delightful moments and frustrations
- Read back and review what you've written down with the customer to ensure you've captured it correctly.

**After the meeting:**

- Document your findings. Create a folder (sharable only within GitLab) in [Google Drive](https://drive.google.com/drive/folders/0AH_zdtW5aioNUk9PVA) with a structure as follows:
  - Customer Meetings
    - Customer Name A
      - 2020-04-01
        - agenda (Google Doc)
        - artifacts (folder for docs, images, etc.)
      - 2020-10-03
    - Customer Name B
  - Competitive Research
    - Vendors
      - Vendor A
        - summary (Google Doc, optional)
        - 2020-04-01
        - 2020-10-03
      - Vendor B
    - Projects
      - product-10132-code-scan-results (reference GitLab issue number)
      - ux-13840-selector-widget
- Share your findings with your fellow product managers and the sales and customer success account teams for the customer
- Make appropriate adjustments to category strategies, feature epics, and personas

You can find some additional guidance on conducting Customer Discovery Meetings from these resources:

- [How to Interview Your Customers](https://customerdevlabs.com/2013/11/05/how-i-interview-customers/)
- [Effective User Interviews](https://www.productmanagerhq.com/agile/product-management/effective-user-interviews/)

#### Sourcing customers

PMs should also feel free to collect and evaluate customer feedback independently. Looking at [existing](/handbook/product/ux/ux-research/#how-to-find-existing-research)
research can yield helpful
themes as well as potential customers to contact. You can use the following techniques to source customers directly:

**GitLab Solution Architects** know our customers the best, especially from a technical perspective.

**GitLab Issues** customers will often comments on issues, especially when the problem described by the issue
is a problem they are experiencing firsthand. The best strategy is to capture their feedback directly on the issue,
however, there are times when this is not possible or simply doesn't happen. You can find alternative contact info by clicking on the user's handle to see their
GitLab user page; this page often includes contact information such as Twitter or LinkedIn. Another option is to
directly mention users in issues to engage async. In popular issues you can just leave a general comment that you're looking for people to interview and many will often volunteer.

**Customer Issues Prioritization Dashboards:** The [customer issues prioritization framework](/handbook/product/product-processes/customer-issues-prioritization-framework) aggregates customer data with the issues and epics that they have requested. When [viewing the dashboard](https://10az.online.tableau.com/#/site/gitlab/workbooks/2015827/views), double click on the issue or epic of interest within the "priority score by noteable" table then scroll down to "QA Table - User request weighting by customer" to see the specific customers that are interested in the issue or epic.

**GitLab.com Broadcast Messages** Broadcast Messaging is a great tool for acquiring customer feedback from within the product. You can leverage [this workflow](/handbook/product/product-processes/pm-procedures/#gitlabcom-in-app-messages-broadcast-messaging) to use broadcast messaging.

**GitLab Sales and Customer Success** You can ask for help in [Slack customer success channel](https://gitlab.slack.com/archives/C5D346V08/p1583438272202100/)
or join the Field Sales Team Call and the All CS Team Call to present a specific request via the Zoom call.

**Customer Success Managers (CSM)** If a customer has a dedicated CSM, they may also have a regular meeting with a CSM. These meetings are a great opportunity to spend 15 minutes getting high-level feedback on an idea or problem. In Salesforce, CSMs are listed in the Customer Success section in the customer's account information. CSMs are also very familiar with the feature requests submitted by their customers and can help identify customers that may be interested in the feature you are working on.

**Zendesk** is a great tool to find users who are actively making use of a feature and either came across a
question or an issue. Users who've had recent challenges using the product really appreciate PMs taking the time to learn from
their experience. This establishes that we are willing to listen to users, even if they are not having a great experience.
This is also a great opportunity to discuss the roadmap and provide context so that users understand what we are going to improve.

The best way to request a chat is through the support ticket; however, you can also click
on the user that initiated the interaction and their contact information will display on the left hand side panel.

If you don't have a Zendesk account, see [how to request a light agent Zendesk account](/handbook/support/internal-support/#submitting-internal-license-request-extensions-and-viewing-support-tickets).

You can use [Zendesk's trigger feature](https://support.zendesk.com/hc/en-us/articles/4408893545882-Ticket-trigger-conditions-and-actions-reference) to receive email alerts when specific keywords relevant
to your product area are mentioned in a support ticket. Additionally, it is possible to create a simple dashboard that lists all the currently active support tickets that match the trigger. Reach out
in #support_escalations to receive some help in setting this up.

**Social Media** can also be effective. If your personal account has a reasonable number of connections/followers, you can post your desire to connect with users on a specific question directly. When posting, remember to include the subject you want to discuss as well as how people can reach out. You can also reach out to the `#social-media` channel to have your tweet retweeted by the @gitlab account.

![twitter-contactpng](/images/product/twitter-contact.png)

If you want to reach a wider audience, consider asking a community advocate to re-post using the official GitLab account for the relevant platform.
You can reach advocates on the `#community-advocates` Slack channel.

You can also reach out to authors of articles related to tech your team is working on, via various publications such as [Medium](https://medium.com). A clear and brief email
via the publication website or LinkedIn is a good way to engage.

You're able to request a [LinkedIn Recruiter license](/handbook/hiring/sourcing/#upgrading-your-linkedin-account). This [Unfiltered video](https://youtu.be/rc2IX1e2sQ8) and [slide deck](https://docs.google.com/presentation/d/1LI9qXLRQSnikPiHztDQBapGrDn5Nimsf-K8g1r3j9Do/edit#slide=id.g29a70c6c35_0_68) provide an overview on how to use LinkedIn Recruiter to source participants for your study.

If you've tried these tactics and are still having challenges getting the customer feedback you need, connect with your manager for support and
then consider leveraging the [UX Research team](/handbook/product/ux/ux-research/#how-ux-research-and-product-management-work-together-on-problem-validation-research-single-stage-group-initiatives).
Additionally, you can connect with Product Operations directly or by attending Product Operations Office Hours for troubleshooting support.

**Non-users** are often more important than GitLab users. They can provide the necessary critical view to come up with
ideas that might turn them into GitLab users in the end. The best non-users are the ones who don't even plan on switching
to GitLab. You can reach these people at local meetups, conferences or online groups like, Hacker News. In every such case,
you should not try to interview the user on spot, instead organize a separate meeting where nobody will be distracted, and
both of you can arrive prepared.

#### Customer Advisory Board meetings

One specific, recurring opportunity to get direct feedback from highly engaged customers
is the [GitLab DevOps Customer Advisory Board](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/customer-advocacy/#gitlab-devops-customer-advisory-board).
You may be asked by the CAB to present your stage at these meetings. Here are
some guidelines when doing so:

- Since it will be sent out in advance of your presentation, take the opportunity to update your stage strategy video
- Start the presentation with an overview of your stage strategy
- Emphasize the importance of feedback and dialog in our [prioritization process](#prioritization)
- Highlight recently completed plan items that were driven by customer feedback
- Come prepared with five questions to facilitate a discussion about industry trends,
plan tradeoffs, pain points and existing features
- Don't simply look for places to improve, seek to clarify your understanding of what customers
currently value and love

#### Working with (customer) feature proposals

When someone requests a particular feature, it is the duty of the PM to investigate
and understand the need for this change. This means you focus on what is the problem
that the proposed solution tries to solve. Doing this often allows you to find that:

1. An existing solution already exists within GitLab
1. Or: a better or more elegant solution exists

Do not take a feature request and just implement it.
It is your job to find the underlying use case and address that in an elegant way that is orthogonal to existing functionality.

This prevents us from building an overly complex application.

Take this into consideration even when getting feedback or requests from colleagues.
As a PM you are ultimately responsible for the quality of the solutions you ship,
make sure they're the (first iteration of the) best possible solution.

### Competition channel

When someone posts information in the `#competition` channel that warrants
creating an issue and/or a change in `features.yml`, follow this
procedure:

- Create a thread on the item by posting `I'm documenting this`
- Either do the following yourself, or [link](#competition-channel)
to this paragraph for the person picking this up to follow
- If needed: create an issue
- Add the item to the `features.yml`
- If GitLab does not have this feature yet, link to the issue you created
- Finish the thread with a link to the commit and issue

#### Reaching out to specific users or accounts based on GitLab usage

You may want to interview a specific account because they are exhibiting atypical usage patterns or behaviors. In this case, [request Support to contact GitLab.com user(s) on your behalf](../../support/internal-support/#contacting-users-about-gitlab-incidents-or-changes).

If it is the weekend, and the contact request is urgent as a result of an action that might affect a users' usage of GitLab, [page the CMOC](/handbook/engineering/infrastructure/incident-management/#how-to-engage-the-eoc-im-or-cmoc)

### Assessing opportunities

#### Opportunity canvas

One of the primary artifacts of the validation track is the Opportunity Canvas. The Opportunity Canvas introduces a lean product management philosophy to the validation track by quickly iterating on level of confidence, hypotheses, and lessons learned as the document evolves. At completion, it serves as a concise set of knowledge which can be transferred to the relevant issues and epics to aid in understanding user pain, business value, the constraints to a particular problem statement and rationale for prioritization. Just as valuable as a validated Opportunity Canvas is an invalidated one. The tool is also useful for quickly invalidating ideas. A quickly invalidated problem is often **more valuable** than a slowly validated one.

Please note that an opportunity canvas is not required for product functionality or problems that already have well-defined [jobs to be done (JTBD)](/handbook/product/ux/ux-resources/#jobs-to-be-done-jtbd). For situations where we already have a strong understanding of the problem and its solution, it is appropriate to skip the opportunity canvas and proceed directly to solution validation. It might be worth using the opportunity canvas template for existing features in the product to test assumptions and current thinking, although not required.

##### Reviews

Reviewing opportunity canvases with leadership provides you with an opportunity to get early feedback and alignment on your ideas. To schedule a review:

1. Contact the CProdO EBA to schedule a 25 minute meeting. Let the EBA know if you are scheduling a comparative or singular Opportunity Review
1. The VCProdO and VP of UX should be included as required attendees.
1. The Product Section Leader, Direct Manager, UX counterpart and Product Operations should be included as optional attendees.
1. Complete the Opportunity Canvas(es) at least one business day before the meeting to give attendees an opportunity to review content.  The attendees will review the canvas(es) in advance and will add questions directly to the canvas document(s).
1. When the Opportunity Canvas(es) is complete, inform the meeting participants by tagging them in a post in Slack #product. Include a direct link to the canvases.
1. During the review, feel free to present anything you'd like. For comparative reviews it's helpful to start with your proposal for which Opportunity to pursue first. For singular reviews it's fine to go straight to Q&A since the attendees should have reviewed the canvas in advance.

**References**:

- [Opportunity Canvas Template](https://docs.google.com/document/d/1pTEMcwH10xWilQEnVc65oC6PdC3VMjn2XoARfNTaHkc/edit#)
- [Completed Opportunity Canvas Reviews](https://drive.google.com/drive/u/0/folders/19ryr0HFXpkchh65MQ2JQv3f9dYBCC01q)
- [Opportunity Canvas YouTube Playlist](https://www.youtube.com/playlist?list=PL05JrBw4t0KqqGtUIbnmAaE5kNymwifZ1)
- [Example Opportunity Canvas - Fine Grained Access Control (GoogleDoc)](https://docs.google.com/document/d/1c_FPLZ8W7Gjl0tvZSybEKWvcCzJ3AgxlQNFvwm92IHo/edit#heading=h.4mt5fmtn0ax4)
- [Example Opportunity Canvas - Error Tracking (Mural)](https://app.mural.co/t/gitlab2474/m/gitlab2474/1568925801645/71e7e6352180a1492a19a3d3ed6f96d48fefd597)

#### Opportunity canvas lite

Opportunity Canvases are a great assessment for ill-defined or poorly understood problems our customers are experiencing that may result in net new features. As noted previously, opportunity canvases are helpful for existing features, except they are tailored for new feature development which is where the [`Product-Opportunity-Opportunity-Canvas-Lite`](https://gitlab.com/gitlab-com/Product/-/issues/new?issuable_template=Product-Opportunity-Canvas-Lite) issue template delivers. This template offers a lightweight approach to quickly identify the customer problem, business case, and feature plan in a convenient issue. The steps to use the template are outlined in the [Instructions](https://gitlab.com/gitlab-com/Product/-/blob/main/.gitlab/issue_templates/Product-Opportunity-Canvas-Lite.md#instructions) section and for clarity, one would create this issue template for an existing feature they are interested in expanding. For example, this template would be great to use if you are evaluating the opportunity to add a third or fourth iteration to an MVC. This issue should leverage already available resources and be used to collate details to then surface to leadership for review. Once you fill out the template, you will assign to the parties identified in the issue and you can always post in the `#product` channel for visibility.

### Analyst engagement

Part of being a product manager at GitLab is maintaining engagement with
analysts, culminating in various analyst reports that are applicable to your
stage. In order to ensure that this is successful and our products are rated
correctly in the analyst scorecards, we follow a few guidelines:

- Spend time checking in with the analysts for your area so they are familiar with our story and features earlier, and so we can get earlier feedback. This will ensure better alignment of the product and the way we talk about it will already be in place when review time comes. Remember, analysts maintain a deep understanding of the markets they cover, and your relationship will be better if it is bi-directional. Inquire with analysts when you have questions about market trends, growth rates, buyer behavior, competitors, or just want to bounce ideas off of an expert.
- Make paying attention to analyst requests a priority, bringing in whoever you need to ensure they are successful. If you have a clear benefit from having executives participate, ask. If you need more resources to ensure something is a success, get them. These reports are not a "nice to have", ad-hoc activity, but an important part of ensuring your product areas are successful.
- When responding to the analyst request, challenge yourself to find a way to honestly say "yes" and paint the product in the best light possible. Often, at first glance if we think we don't support a feature or capability, with a bit of reflection and thought you can adapt our existing features to solve the problem at hand. This goes much smoother if you follow the first point and spend ongoing time with your analyst partners.
- Perform retrospectives after the analyst report is finalized to ensure we're learning from and sharing the results of how we can do better.

It's important to be closely connected with your product marketing partner,
since they own the overall engagement. That said, product has a key role to play
and should be in the driver's seat for putting your stage's best foot forward in
the responses/discussions.

### Engage with internal customers

Product managers should take advantage of the internal customers that their
stage may have, and use them to better understand what they are really using,
what they need and what they think is important to have in order to replace
other products and use GitLab for all their flows.

We want to meet with our internal customers on a regular basis, setting up
recurring calls (e.g., every two weeks) and to invite them to share their
feedback.

This is a mutual collaboration, so we also want to keep them up to date with the
new features that we release, and help them to adopt all our own features.

### USAT responder outreach

Each quarter, we reach out to [User Satisfaction (USAT)](/handbook/product/ux/performance-indicators/usat) survey responders who opted-in to speak with us. This is a fantastic opportunity to build bridges with end users and for Product Managers and Product Designers to get direct feedback for their specific product area. If a user has taken the time to share a verbatim with us and offered to have a conversation, they deserve to be followed up with - especially if that user is dissatisfied with GitLab.

When we speak to users directly during this workflow, we must be mindful of [Product Legal guidance](/handbook/product/product-processes/product-safe-guidance/) and the [SAFE framework](/handbook/legal/safe-framework/), just as we would be with any other documentation or communication within Product.

#### Overall process

1. UX Researcher DRI opens a Responder Outreach issue and notifies Product team members in the comments that the issue is ready.
1. Product team members go through the list of USAT responders who have agreed to a follow up conversation. Those team members either sign up for outreach or tag in Product Managers or Product Designers where appropriate.
1. Product team members then view the sheet and confirm who they want to talk with.
1. Product team members reach out to users and schedule interviews.
1. Product team members add notes and video recordings from the interviews to the `USAT` column in this [Dovetail project](https://gitlab.dovetailapp.com/projects/36nmGVKvkaT7SGMXtUeHVg/v/70xPTo5RzTRZnCNEVz1fWH).
1. Product team members mark which users they interviewed, the link to the session recording, and include any additional notes about the session in the follow up users sheet.
1. As Product team members create or continue to work on issues related to USAT follow up interviews, they should the following label ([USAT::Responder Outreach](https://gitlab.com/groups/gitlab-org/-/labels?subscribed=&sort=relevance&search=usat)) to help the UX Research team track the impact of those interviews.

**Note:** GitLab Customer Success Managers can also follow the process above, so please be mindful to coordinate with them if they reach out or if they've already signed up to speak with a user. Users should never be contacted by more than one GitLab team member. Users should never be contacted more than twice if they do not respond to an outreach email.

#### Instructions for product leaders

1. Look at the `USAT Follow Up Users` Google Sheet that will be shared with you in an issue. Identify any users you think a Product Manager or Product Designer from your group would be interested in speaking to. Assign the specific Product Manager or Product Designer to reach out to that user by putting their name in the appropriate column. This will also serve as a "hold" on the user and if others are interested they will need to coordinate with that team member.
1. If you think another Product Manager or Product Designer in your group or another group would be interested in speaking to the same user, consider notifying that team member for the sake of efficiency.
1. If you're interested in having one of your Product Managers or Product Designers speak with a user that has already been "claimed" by another GitLab team member, have your Product Manager or Product Designer reach out to that team member so they can coordinate a joint conversation. **We need to be mindful of our users' time and should limit this outreach to a single conversation rather than successive conversations.**

#### Instructions for Product Managers and Product Designers

1. Another GitLab team member may put your name next to users they felt were relevant for you to speak with.
1. If you are unable or unwilling to speak with the user, please either remove your name or find a replacement.
1. If you see other users that have not been assigned to another team member and you feel may be relevant to speak with, assign that user to yourself.
1. If you see other users that have been assigned to another team member, reach out to that team member and coordinate a joint conversation. It is very important you do not reach out to users that have been assigned to other team member as we want to be mindful of our users time and not risk negative sentiment due to over-communication. We are limiting these conversations to one per user for these reasons.

#### Process for reaching out to users

1. Calendly is the best method for scheduling users. [Set up your free Calendly account](https://calendly.com/signup) if you haven't done so. Add details to the invite description describing yourself and the conversation purpose. Also add your personal Zoom link, either via connecting your Zoom account or pasting in your personal Zoom URL.
1. You'll need to add three extra questions to the invite form in order to ask for consent to record, example below. Please use these questions as written in the example as they closely mirror the content that has been validated by the UX Research Team.
1. Draft an email that you'll send to users. Example copy is below. You can re-phrase things as you wish but make sure you still cover the same points as the example.
1. **BE ON TIME TO YOUR CALL**. Better yet, be 2 minutes early. Be ready to coach people through getting Zoom to work properly. Make sure everyone on the call introduces themselves.
1. If people have agreed to recording, still ask them once again if it's OK if you record before turning it on. Obviously, do not record people who did not give consent.
1. See our training materials on [facilitating user interviews](/handbook/product/ux/ux-research/facilitating-user-interviews/).

**Example email copy**:

> Hello,
> My name is X and I'm the Product Manager/Designer for X at GitLab. Thank you for giving us the opportunity to follow up on your response to our recent survey.
>
> I would be very interested in speaking further about some of the points you raised in your survey response. Would you be willing to do a 30 minute Zoom call to give us some more detailed feedback on your experience using GitLab? You'd be able to schedule the call at a time convenient to you.
>
> Schedule a time for the call using this link:
> `https://calendly.com/yourname/30min`
>
> Thank you for your feedback and let me know if you have any questions.
>
> Best,
> Your name

**Copy for three extra questions in Calendly invite**:

> To make sure we correctly represent what you say in any followup issues or discussions, we would like to record this conversation. Please indicate if you give permission to record this conversation.
>
> Yes, you may record our conversation.
>
> No, you MAY NOT record our conversation.
>
> At GitLab, we value transparency. We would love to share the recording of conversation publicly on GitLab. Please indicate whether you give your permission for the recording to be shared on GitLab.
>
> Yes, you may share the recording publicly on GitLab.
>
> No, you MAY NOT share the recording publicly on GitLab.
>
> I agree that by participating in this, and any future, research activities with GitLab, GitLab B.V. will retain all intellectual property rights in any suggestions, ideas, enhancement requests, feedback, or other recommendations I provide which are hereby assigned to GitLab B.V.
>
> Yes
>
> No

#### After the call

1. If multiple GitLab employees are on the call, it can be beneficial to debrief immediately afterwards.
1. Collect all notes that were taken and Zoom recording from the interview and add them to the `USAT` column in this [Dovetail project](https://gitlab.dovetailapp.com/projects/36nmGVKvkaT7SGMXtUeHVg/v/70xPTo5RzTRZnCNEVz1fWH).
1. If you told the user you'd follow up on anything or promised to send them further information, make sure you do so, ideally within two business days.
1. Go back to the spreadsheet and mark that you spoke to a user in the _Status_ column and add a link to the recording in Dovetail.
1. If you create any epics/issues to address feedback gathered in the calls, add the label [USAT::Responder Outreach](https://gitlab.com/groups/gitlab-org/-/labels?subscribed=&sort=relevance&search=usat) and link them to the corresponding USAT responder outreach issue from that quarter.

Note: It's important to tag your USAT related issues to help tracking/reporting such as the [improvement slides](https://docs.google.com/presentation/d/1ZXEfR1lo5y5tpRi0i5l-OSX3v3wMe6jepjJcZfKyTvw/edit#slide=id.ge2b883c896_6_0) in Product Key Reviews.

### Cost profile and user experience

Every Product Manager is responsible for the user experience and cost profile of their product area regardless of how the application is hosted (self-managed or gitlab.com). If a feature is unsustainable from a cost standpoint, that can erode the margins of our SaaS business while driving up the total cost of ownership for self-managed customers. If a feature is slow, it can impact the satisfaction of our users and potentially others on the platform.

There are a few questions a Product Manager should ask when thinking about their features:

- What are the costs associated with my product area? What is the impact on the margin for each tier of GitLab.com?
  - Consider network, compute, and storage costs
- Are there tools in place to help GitLab, Inc and self-managed admins optimize the cost footprint for running GitLab (e.g. node rebalancing, transitioning objects to less costly storage classes, garbage collection capabilities)
- Are there features and default settings that help users stay within their [CI and Storage limits](https://about.gitlab.com/pricing/)?
- Are there configurable [application limits](/handbook/product/product-processes/#introducing-application-limits) in place for admins to enhance the availability and performance of GitLab and reduce [abuse vectors](/handbook/security/security-operations/trustandsafety/#examples-of-common-forms-of-abuse-include-but-are-not-limited-to)?
- What is the experience of users when interacting with these features on GitLab.com? Is it fast and enjoyable?

These items do not all need to be implemented in an MVC, though potential costs and application limits should be considered for deployment on GitLab.com.

Product Managers should also regularly assess the performance and cost of features and experiences that they are incrementally improving. While the MVC of the feature may be efficient, a few iterations may increase the cost profile.

#### Tools to understand operational costs

There are a few different tools PM's can utilize to understand the operational costs of their features. Some of these are maintained by Infrastructure, based on the operational data of GitLab.com. Others tools, like service ping, can be utilized to better understand the costs of our self-managed users. Ultimately, each product group is responsible for ensuring they have the data needed to understand and optimize costs.

- Useful Dashboards to Visualize Infrastructure Costs:
- [Access to Billing Console](https://console.cloud.google.com/billing/) ([Access Request](/handbook/it/end-user-services/onboarding-access-requests/access-requests/) required)
- [Service ping](https://docs.gitlab.com/development/internal_analytics/service_ping/)
- Your Engineering Manager, #infrafin on Slack, and the broader GitLab team

#### Links to learn more about infrastructure cost management initiatives

- [Infrafin Board Workflow](https://gitlab.com/groups/gitlab-com/-/boards/1502173?label_name%5B%5D=infrafin)
- [Infrafin Board by Group](https://gitlab.com/groups/gitlab-com/-/boards/2054211?label_name%5B%5D=infrafin)
- [Infrafin Board by Savings Amount](https://gitlab.com/groups/gitlab-com/-/boards/992233?&label_name%5B%5D=infrafin)
- [Infrafin Cost Management Handbook Page](/handbook/engineering/infrastructure/cost-management/)

#### Tools to understand end user experience

- [Snowplow data](/handbook/enterprise-data/platform/snowplow/) on GitLab.com
- Quarterly USAT and SUS surveys
- [Page load performance](../product-processes/#page-load-performance-metrics)

## Life Support PM Expectations

When performing the role of Life Support PM only the following are expected:

- Management of next three milestones
- Attend group meetings or async discussion channels
- Provide prioritization for upcoming milestones
- MVC definition for upcoming milestones
- Increase fidelity of scheduled issues via group discussion
- Ensure features delivered by the group are represented in the release post

Some discouraged responsibilities:

- Long-term MVC definition
- One year plan
- Category Strategy updates
- Direction page updates
- Analyst engagements
- CAB presentations

### Build vs "Buy"

As a Product Manager you may need to make a decision on whether GitLab should engineer a solution to a particular problem, or use off the shelf software to address the need.

First, consider whether our users share a similar need and if it's part of GitLab's scope. If so, strongly consider [building as a feature in GitLab](/handbook/values/#dogfooding):

- [Evaluate open source options](#evaluating-open-source-software) to utilize.
- If time to market is an issue, a [global optimization issue](/handbook/values/#global-optimization) may also be opened to assist with prioritization.
- For a potential acquisition, follow the [acquisition process](/handbook/acquisitions/acquisition-process/).

If the need is specific to GitLab, and will not be built into the product, consider a few guidelines:

- Necessity: Does this _actually_ need to be solved now? If not, consider proceeding without and gathering data to make an informed decision later.
- Opportunity cost: Is the need core to GitLab's business? Would work on other features return more value to the company and our users?
- Cost: How much are off the shelf solutions? How much is it to build, given the expertise in-house and opportunity cost?
- Time to market: Is there time to engineer the solution in-house?

If after evaluating these considerations buying a commercial solution is the best path forward:

1. Consider [who owns the outcome](/handbook/finance/#how-spend-is-allocated-to-departments), as the spend will be allocated to their department. Get their approval on the proposed plan.
1. Have the owning party [open a finance issue](https://gitlab.com/gitlab-com/finance/issues/new) using the `vendor_contracts` template, ensure the justification above is included in the request.

#### Evaluating Open Source Software

When considering open source software in build vs. "buy" decisions we utilize the following general criteria to decide whether to integrate a piece of software:

- **Compatibility** - Does the software utilize a [compatible open source license](https://docs.gitlab.com/development/licensing/#acceptable-licenses)?
- **Viability** - Is the software, in its current state, viable for the use case in question?
- **Velocity** - Is there a high rate of iteration with the software? Are new features or enhancements proposed and completed quickly? Are security patches applied regularly?
- **Community** - Is there a diverse community contributing to the software? Is the software governed by broader communities or by a singular corporate entity? Do maintainers regularly address feedback from the community?

## Analytics instrumentation guide

Please see [Analytics Instrumentation Guide](/handbook/product/analytics-instrumentation-guide)

## Post Launch Instrumentation Guide

**Goal:**
Increase product instrumentation across our offerings to deliver greater product insights. There is a need to retroactively evaluate what features have been instrumented and need instrumentation from past feature launches. Post launch implementation will allow us to gather insights and allow better visibility into feature usage + adoption that may not currently be captured.

**Tasks:**

1. Issue Request
   - PM:
     - Following the [Product Data Insights handbook](/handbook/product/groups/product-analysis/#working-with-us), create an issue focused on instrumentation of products at a category level [using the Post-Launch Instrumentation template](https://gitlab.com/gitlab-data/product-analytics/-/issues/new?issuable_template=Post-Launch%20Instrumentation%20Audit).
     - Assign the issue to your Product Data Insights counterpart. Carolyn Braza (`@cbraza`) will automatically be added for visibility.
   - Alignment
     - PM/PDI: Once all stakeholders have been added to the issue, Product Data Insights team will set time with the PM counterpart to align on:
       - Goals
       - Priorities
       - Milestones
     - TPgM may assist in implementation of planning documentation.
1. Category Inventory & Instrumentation Mapping
   - PM/PDI: Work together to outline a category inventory using [this spreadsheet template](https://docs.google.com/spreadsheets/d/1sqoGOM3MIOF0ntfxgJ3cuKVyY3MLT8Cfvxi5xBvgfws/edit?usp=sharing).
     - Category level implementation should be prioritized by most utilized features and the areas we believe have the largest impact on the business.
     - From there, PM and Product Data Insights counterparts will utilize labels outlined here in step 3 for markers of implementation status.
     - The PM will lead mapping of instrumentation at a category level, in close partnership with the Product Data Insights counterpart.
   - For any metric or event that has been identified to contribute to a categories instrumentation the correct `product_category` should be set in the definition file.
1. Audit & Review
   - PM/PDI: will audit implementation/review implementation to quality check and ensure accuracy async. TPgM may assist in QA.
1. Update Categories yaml file
   - PM: Update the categories.yml file with the applicable implementation status (see below) Utilizing the categories.yml file, the Product Data Insights team will create a Tableau dashboard to track implementation at a category level over time.
     - Complete -  Instrumentation complete and satisfactory
     - Incomplete - Some instrumentation, but not complete
     - None - No instrumentation - instrumentation needed
     - Not needed - Instrumentation not needed
1. Analytics Instrumentation
   - PM/PDI: Once category instrumentation audit has been completed. For categories marked as either red (needing implementation) or yellow (some instrumentation, not complete),
   - PM/EM: will create an instrumentation issue with the label `analytics instrumentation` and utilizing the [usage data instrumentation template](https://gitlab.com/gitlab-org/gitlab/-/issues/new?issuable_template=Usage+Data+Instrumentation).

## Page load performance metrics

In order to better understand the perceived performance of GitLab, there is a synthetic page load performance testing framework available based on [sitespeed.io](https://www.sitespeed.io).

A [Grafana dashboard](https://dashboards.gitlab.net/d/product-create/product-performance-create?orgId=1) is available for each stage, tracking the [Largest Contentful Paint](https://web.dev/articles/lcp) and first/last visual change times. These metrics together provide high-level insight into the experience our users have when interacting with these pages.

### Adding additional pages to performance testing

The Grafana dashboards are managed using [grafonnet](https://github.com/grafana/grafonnet-lib), making it easy to add additional pages and charts.

Testing a new set of pages requires just 2 steps:

1. Add the desired URL's to the sitespeed [unauthenticated](https://gitlab.com/gitlab-org/frontend/sitespeed-measurement-setup/-/blob/master/gitlab/desktop/urls/desktop.txt) or [authenticated](https://gitlab.com/gitlab-org/frontend/sitespeed-measurement-setup/-/blob/master/gitlab/desktop/loggedinurls/desktop.txt) testing list. Add a new line with the URL, then a space, and an alias of the form `[Group]_[Feature]_[Detail]`. The alias needs to be one word, an example MR is [here](https://gitlab.com/gitlab-org/frontend/sitespeed-measurement-setup/-/merge_requests/29). Note the authenticated user account does not have any special permissions, it is simply logged in.
1. Open the relevant stage's [grafonnet dashboard file](https://gitlab.com/gitlab-com/runbooks/-/tree/master/dashboards/product). Find the section corresponding to the desired group, and add an additional call to `productCommon.pageDetail`. The call arguments are `Chart Title`, `Alias` from above, and the tested `URL`. Ensure the JSON formatting is correct, the easiest way is to simply copy/paste from another line. A sample MR is available [here](https://gitlab.com/gitlab-com/runbooks/-/merge_requests/2719/diffs).

Assign both MR's to a maintainer. After they are merged, the stage's Grafana dashboard will be automatically updated. A [video walkthrough](https://youtu.be/sGdzWKzMKpY) is available as well.
