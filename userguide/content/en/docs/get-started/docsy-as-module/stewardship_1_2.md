---
title: Our stewardship of GitLab
description: "GitLab have an open core business model and generate almost all our revenue with subscriptions to paid tiers. Learn more!"
canonical_path: "/company/stewardship/"
---

## Business Model

GitLab Inc. is a for profit company that balances the need to improve the open source code of GitLab with the need to add source-available features in order to generate income. We have an [open core](https://en.wikipedia.org/wiki/Open_core) business model and generate
almost all our revenue with [subscriptions to paid tiers](https://about.gitlab.com/pricing/). We
recognize that we need to balance the need to generate income and with the
needs of the open source project.

We have tried different business models, and many didn’t work. As a company, we realized we needed recurring revenue to continue our mission, and we introduced source available code that is proprietary. Initially there was a worry we would stop working on the open source code but the community saw we were able to accelerate the work on open-source code too.

## Promises

We promise that:

1. When a feature is open source we won't move that feature to a paid tier. Features might be removed from the open source codebase in other cases, for example when combining features from multiple tiers into one new feature. To be clear, this promise only applies to open sourced features, features in paid tiers might move to a higher tier.
1. We won't introduce features into the open source codebase with a fixed delay, if a feature is planned to land in both it will be released simultaneously in both.
1. We will always release and open source [all tests](https://techcrunch.com/2012/08/18/oracle-makes-more-moves-to-kill-open-source-mysql/) that we have for a open source feature.
1. The open source codebase will have all the features that are essential to running a large 'forge' with public and private repositories.
1. The open source codebase will not contain any artificial limits (repositories, users, size, performance, [requiring a trademarked header](https://news.ycombinator.com/item?id=28110610), etc.).
1. All stages of the DevOps lifecycle (plan, create, verify, package, release, configure, monitor) will have some open source features.
1. The majority of new features made by GitLab Inc. will be open source.
1. The product will be available for install and/or download in the menu of the website.
1. You can install it without you having to submit an email address or sign in.
1. We will always allow you to [benchmark the performance](https://news.ycombinator.com/item?id=18103162) of GitLab.
1. We will make our Free tier easily discoverable.
1. We will always make it clear what is proprietary and what is open source code. This will be implemented with a [separate directory for EE code](https://gitlab.com/gitlab-org/gitlab/-/tree/master/ee) and a [Git repo downstream that is open source only](https://gitlab.com/gitlab-org/gitlab-foss).

## Software as a Service

Our stewardship promise applies only to the GitLab open source codebase, not to GitLab, Inc services such as GitLab Software as a Service (SaaS).
For ​GitLab SaaS, we may add limits around usage (e.g., storage, compute, traffic) or proxies for usage (e.g., number of users in a group) as we seek to optimize costs and revenues.
Our stewardship promise allows other companies and organizations to provide a SaaS offering based on the GitLab open source codebase.

## What Features Are Paid-Only

To determine what is open source and what not we ask ourselves: **[Who cares the most about the feature](/handbook/company/pricing/#buyer-based-open-core)**.
If the likely buyer is an individual contributor the feature will be open source, otherwise it will be source-available (proprietary).

There aren't any features that are only useful to managers, directors, and executives.
So for every source-available feature there will be an individual contributor who cares about it.
We're not saying that there aren't any individual contributors that care about the feature,
just that we think that other buyers are relatively more likely to care about it.
The more of GitLab that you use the more likely it is that you benefit from a higher tier.
Even a single person using GitLab might be best off using our highest tier.

It is hard to get [the tier](/handbook/marketing/strategic-marketing/tiers/) right, and if we put something in a tier that is too high we won't hesitate to [open-source](https://about.gitlab.com/releases/2016/12/24/were-bringing-gitlab-pages-to-community-edition/) [it](https://news.ycombinator.com/item?id=10931347) or move it to a lower tier. We listen to our community in order to find what we feel is the right balance, and we iterate and make changes based on their feedback. At the same time, the premium product needs to hold value, and we believe we provide that.

All stages of the [DevOps lifecycle](https://about.gitlab.com/direction/#scope) have at least some features available in GitLab Core. There are companies using GitLab Core with more than 10,000 users.

If people ask us why a certain feature is paid we might reply with a [link to this section of the handbook](/handbook/company/stewardship/). We do not mean to imply you don't need the feature. Feel free to [make the argument](/handbook/company/pricing/#changing-tiers-and-pricing-changes) for moving it to another tier, we're listening.

If the wider community contributes a feature that is currently source-available we use the process linked in
[Contributing an existing feature to open-source it](#contributing-an-existing-feature-to-open-source-it).

## Why Release Simultaneously In Both

Sometimes people suggest having features in EE for a limited time.
An example of a limited time release strategy is the [Business Source License](https://mariadb.com/bsl) that keeps features proprietary for 3 years.

At GitLab we want to give everyone access to most of the features (and all the essential ones) at the date they are announced.
We want to give people the option to both run and contribute to an open source edition that is maintained and that includes the most recent security fixes.

From time to time we do open source a feature that was previously proprietary.
We do this when we realize we made a mistake applying our criteria, for example
when we learned that a branded homepage was an [essential feature](https://news.ycombinator.com/item?id=10931347) or
when we [brought GitLab Pages to the Community Edition](https://about.gitlab.com/releases/2016/12/24/were-bringing-gitlab-pages-to-community-edition/).

Our plan is to become the most popular tool for people’s own git hosting service; we’ve managed that so far. Secondarily, we want to get to be the one with the most revenue. Thirdly, we want to become the most popular tool for hosting private repos. Once we’ve reached that, we want to be the most popular tool for hosting public repos. And, lastly, we want to be the number one tool for people to host not just code but books, tech papers, visual models, movies, etc. More info on this is on our [strategy page](/handbook/company/strategy/).

## How Open Source Benefits From Open Core

GitLab Inc. has an open core business model that includes source-available code and selling subscriptions.
This benefits the open source part of GitLab in the following ways:

1. New features being made by GitLab Inc. that are open source
1. [Responsible disclosure](https://about.gitlab.com/security/disclosure/) process and security fixes
1. Release management including a monthly release and patches
1. Packaging GitLab in our [Omnibus packages](https://gitlab.com/gitlab-org/omnibus-gitlab)
1. Running a [packages server](https://packages.gitlab.com/gitlab/)
1. Dependency upgrades (Rails, gems, etc.)
1. Performance improvements

## Common Criticisms Of Open Core

There are valid criticisms of Open Core.
At Open Core Summit in 2019, [Deb Bryant of Red Hat highlighted](https://twitter.com/blatanterror/status/1174711840598716417) the following four:

**Participation Is Constrained.**
Open Core companies may limit participation to keep premium features from being contributed. -
We actively work to grow participation since our missions is that [Everyone can Contribute](/handbook/company/mission/#mission).
Also, [we do not say no by-default to having existing paid features contributed to our open source project](#contributing-an-existing-feature-to-open-source-it).

**Vendor Lock-In.**
Premium features make it more difficult to switch workflows. -
GitLab the product [plays well with others](/handbook/product/gitlab-the-product/#plays-well-with-others). As we outline,
> Many other applications [integrate with GitLab](https://about.gitlab.com/partners/technology-partners/integrate/), and we are open to adding new integrations to our [technology partners page](https://about.gitlab.com/partners/technology-partners/). New integrations with GitLab can vary in richness and complexity; from a simple webhook, and all the way to a [Project Service](https://docs.gitlab.com/ee/user/project/integrations/project_services.html).
> GitLab [welcomes and supports new integrations](https://about.gitlab.com/partners/technology-partners/integrate/) to be created to extend collaborations with other products. GitLab plays well with others by providing APIs for nearly anything you can do within GitLab. GitLab can be a [provider of authentication](https://docs.gitlab.com/ee/integration/oauth_provider.html) for external applications. **GitLab is open source so people are very welcome to add anything that they are missing.**

**Community Is Devalued.**
Community is seen as a marketing tool instead of as participants working to make the product better together. -
We care deeply about our community and depend on all GitLabbers to help us improve our [category and stage maturity](https://about.gitlab.com/direction/maturity/).
We have [Merge Request Coaches](/job-families/expert/merge-request-coach/) who help contributors get their merge requests to meet the [contribution acceptance criteria](https://docs.gitlab.com/ee/development/contributing/merge_request_workflow.html#contribution-acceptance-criteria),
and [wider community contributions per release](/handbook/marketing/developer-relations/performance-indicators/#wider-community-merged-mrs-per-release) is [a GitLab KPI](/handbook/company/kpis/#gitlab-kpis).

**Deployment Constrained.**
Customers are afraid of confusing or unsanctioned licenses entering a business environment. -
 We don't use a limiting license such as SSPL. As we highlight [in our docs](https://docs.gitlab.com/ee/development/licensing.html),
[GitLab Community Edition (CE)](https://gitlab.com/gitlab-org/gitlab-foss/) is licensed under the terms of the [MIT License](https://gitlab.com/gitlab-org/gitlab-foss/blob/master/LICENSE), which is an official Open Source license as defined by the [Open Source Initative](https://opensource.org/licenses/alphabetical).

## Existing Contributed Open Source Features Will Not Become Source-Available

[We never move existing features already in GitLab FOSS into a paid tier](#promises).
This applies regardless of whether the feature was created by GitLab team members or the wider community of contributors.
On occasion, the reverse does happen where we open source a previously source-available feature.

On occasion, we might change the product in a way that bundles functionality together or refactor functionality that was in different tiers.
Sometimes the new bundle will go to the Core/Free tier and sometimes to the paid tiers.

## Contributing An Existing Feature To Open-Source It

When someone contributes an *existing* source-available feature to open-source code base, we have a hard
decision to make. We encourage contributors to focus on new features not
already existing, so that both codebases of GitLab
benefit from the feature, and we can avoid any difficult decisions.

We encourage contributors visit our [direction page](https://about.gitlab.com/direction/)
to see features that are welcomed and also review [CONTRIBUTING.md](https://gitlab.com/gitlab-org/gitlab/blob/master/CONTRIBUTING.md).

When someone contributes an *existing* feature to open-source it, we weigh a number of factors to decide in accepting it, including:

1. What is the quality of the submitted code?
1. Is it a complete replacement of the source-available functionality?
1. Does it meet the [contribution acceptance criteria](https://docs.gitlab.com/ee/development/contributing/merge_request_workflow.html#contribution-acceptance-criteria)?
1. Is it [more relevant for mid-market organizations or larger](/handbook/product/gitlab-the-product/#paid-tiers)?
1. Is the person or organization submitting this using GitLab in an [SMB](/handbook/sales/#market-segmentation)?
1. Did the person or organization submitting this contribute to GitLab before?
1. Is it something that many of our existing customers chose our paid tiers for?
1. Is it relevant for running a large open source forge?
1. Is it an original work or based on the source-available code?
1. Is there an actively maintained fork that incorporates this?
1. How many organizations are using this code in production?
1. How frequently has this functionality been requested and by whom?

We'll weigh all factors and you can judge our stewardship of the open source codebase based on the outcome. As of Dec 4, 2018, we had only two cases: One had low code quality and the other one copied the source-available code down to the last space. If you find these or other examples please link them here so people can get an idea of the outcome.

## Contributing A Not-Yet-Existing Feature

When someone contributes a *not yet existing* feature on the [issue tracker](https://gitlab.com/gitlab-org/gitlab/issues) that has a paid tier label,
and it has met the [contribution acceptance criteria](https://docs.gitlab.com/ee/development/contributing/merge_request_workflow.html#contribution-acceptance-criteria),
we will accept it under whatever license (open-source or source-available) they prefer, provided that GitLab Inc. has not already started working on the feature. (The contribution
should not contain any *already existing* source-available features in it.) We encourage contributors to @-mention the [relevant product manager](/handbook/product/categories/#devops-stages) earlier in the development process (in the issue or merge request) to ensure GitLab team-members are not already working on the feature in order to avoid conflicts.

## How We Think About Contributing More To Open Source

Some companies try to support "20% time" for contributing to open source projects or other self-directed work. While this has been discussed several times within GitLab, we intentionally do not implement something like this for the following reasons:

1. It is [really 120% time](https://www.businessinsider.com/google-20-percent-time-policy-2015-4).
1. It increases context switching and inadvertently leads to a decline in throughput as people split focus across disparate projects with different goals. The more work in progress at any one point in time, the longer it will take to drive any single item to completion. The end result is less open source over time.

Instead of optimizing locally across many different projects, we are able to create much more value and impact for the open source community by singularly focusing on our [vision](/handbook/company/vision/#vision). Doing so creates a virtuous cycle that enables us to:

**Make More Improvements Upstream.**
GitLab is open core built entirely with open source. We rely on [thousands of dependencies](https://gitlab.com/gitlab-org/gitlab/dependencies) and always try to contribute our improvements upstream.

**Build More Open Source As Part Of GitLab.**
Shipping as much open source as possible is critical to our [business model](#business-model) because it increases the velocity of our [flywheels](/handbook/company/strategy/#dual-flywheels). The faster they spin, the more we can contribute back.

**Contribute At Scale.**
GitLab is a single application for the entire DevOps lifecycle. By [freely providing](https://about.gitlab.com/solutions/open-source/join/) the top tier of GitLab to [open source projects](https://about.gitlab.com/solutions/open-source/projects/), we are enabling them to be more efficient, secure, and productive.

The combination of the above leads to global optimization on a much larger scale than anything we could contribute with a small portion of our time working on things that don't directly move our vision forward.

{{% include "includes/take-gitlab-for-a-spin.md" %}}
