---
title: Product Management Tips and Tricks
---

## Overview

This section of the handbook is a collection of product management processes that can leveraged in your practice as product management. Some of these are best practices and suggestions that are not required in your day to as product manager, while others are highly recommended workflows that are tried and true paths leading to successful results. These are sourced by our Product Management Department and regularly reviewed by our Director+ Product Management leaders.

## Tips and Tricks

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
