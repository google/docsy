---
title: GitLab the Product
description: "About GitLab the product"
---

{{% include "includes/product-handbook-links.md" %}}

## GitLab the Product

### Single application

We believe that a single application for the DevOps lifecycle
based on [convention over configuration](/handbook/product/product-principles/#convention-over-configuration) offers a superior user experience. The
advantage can be quoted from the [Wikipedia page for convention over](https://en.wikipedia.org/wiki/Convention_over_configuration)
configuration:
"decrease the number of decisions that developers need to make, gaining
simplicity, and not necessarily losing flexibility". In GitLab you only have to
specify unconventional aspects of your workflow. The happy path is
**frictionless from planning to monitoring**.

We're doubling down on our product for concurrent DevOps which brings the entire
lifecycle into one application and lets everyone contribute. We are leaning into
what our customers have told us they love: our single application strategy, our
pace of iteration, and our deep focus on users.

Consider opportunities to take advantage of this unique attribute in early
iterations. Integrating features with different parts of the application can
increase the adoption of early iterations. Other advantages:

- A minimal viable feature that is well integrated can be more useful than a
sophisticated feature that is not integrated.

Although not every feature needs to be integrated with other parts of the
application, you should consider if there are unique or powerful benefits for
integrating the feature more deeply in the second or third iteration.

### GitLab.com

GitLab.com runs GitLab Enterprise Edition.

To keep our code easy to maintain and to make sure everyone reaps the benefits
of all our efforts, we will not separate GitLab.com codebase from the Enterprise Edition codebase.

To avoid complexity, [GitLab.com tiers and GitLab self-managed tiers](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/tiers/) are named the same.

#### GitLab.com subscription scope and tiers

GitLab.com subscriptions work on a namespace basis, which can mean:

- personal namespace, e.g. `JaneDoe/*`
- group namespace, e.g. `gitlab-org/`

This means that group-level features are only available on the group namespace.

Public projects get Ultimate for free.
Public groups _do not_ get Ultimate for free. Because:

- This would add significant additional complexity to the way we structure our features, licenses and groups. We don't want to discourage public groups, yet it wouldn't be fair to have a public group with only private projects and for that group to still get all the benefits of Ultimate. That would make buying a license for GitLab.com almost entirely moot.
- All value of group level features is aimed at organisations, i.e. managers and up (see our [stewardship](/handbook/company/stewardship/)). The aim with giving all features away for free is to enable and encourage open source projects. The benefit of group-level features for open source projects is significantly diminished, therefore.
- Alternative solutions are hard to understand, and hard to maintain.

Admittedly, this is complex and can be confusing for product managers when implementing features.
Ideas to simplify this are welcome (but note that making personal namespaces equal to groups is not one of
them, as that introduces other issues).

For more guidance on feature tiers and pricing, visit [tiering guidance for features](/handbook/product/product-processes/tiering-guidance-for-features/)

### Deprecations & Removals Policy

#### Definitions

See the [terminology of deprecations](https://docs.gitlab.com/ee/update/terminology.html).

#### Is this a breaking change?

By definition, a removal is a breaking change. With a [few exceptions](#exceptions-for-breaking-changes), if the answer is yes to any of the following questions, the change is to be considered a breaking change and should be avoided other than for critical business risk.

- Does this change require an action from the customer to ensure continuity of function? (For example, removing background upload for object storage meant users needed to migrate objects to a supported object storage provider)
- Does this change cause a disruption to a customer's workflows or tasks? (For example, removing support for the "WIP" prefix in MRs meant users would need to use the "Draft:" prefix instead)
- Does this change cause other parts of the product to fail? (For example, removing certificate-based cluster integration means users can no longer install additional applications via GitLab Managed Apps)

For special definitions of what constitutes a breaking change for our APIs, see:

- [REST API breaking changes](https://docs.gitlab.com/ee/development/api_styleguide.html#what-is-a-breaking-change).
- [GraphQL API breaking changes](https://docs.gitlab.com/ee/development/api_graphql_styleguide.html#breaking-changes).

For `Experiment` or `Beta` features, please see [Support for experiment, beta, and generally available features](https://docs.gitlab.com/ee/policy/experiment-beta-support.html).

#### Exceptions for breaking changes

Introducing a **breaking change in a minor release is against policy** because it can disrupt our customers, however there are some rare exceptions:

- When GitLab establishes that delaying a breaking change would overall have a _significantly_ more negative impact to customers compared to shipping it in a minor release.
- If an integrated service shuts down, the integration can be removed during a minor release.

In all cases, the PM or EM must [follow the Request a Breaking Change process](https://docs.gitlab.com/ee/development/deprecation_guidelines/#requesting-a-breaking-change-in-a-minor-release).

#### Deprecating and removing features

Deprecating and removing a feature needs to follow a specific process because it is important that we minimize disruption for our users. As you move through the process, use the language `deprecated` or `removed` to specify the current state of the feature that is going to be or has been removed.

#### Process for deprecating and removing a feature

Please follow the [process outlined in the docs](https://docs.gitlab.com/ee/development/deprecation_guidelines/#requesting-a-breaking-change-in-a-minor-release).

#### Breaking Change Windows on GitLab.com

We deploy changes to GitLab.com many times a day. Because they are part of a continuous delivery process, these changes, including breaking changes, are not as predictable for customers.

Starting from GitLab 17.0, we introduced fixed windows during which breaking changes are rolled out to GitLab.com. The fixed windows are set as the Monday, Tuesday and Wednesday of the three weeks preceding the major release date, typically following the X.11 release date. A detailed example of what this looks like can be found in [our 17.0 introduction issue](https://gitlab.com/gitlab-com/Product/-/issues/13238).

Breaking changes should only be enabled during the breaking change windows. This means that where breaking changes are behind feature flags, the changes (feature flag) should only be switched during one of these windows to ensure customers workflows are not impacted outside of these communicated periods.

Product Managers will be responsible for making sure that as part of the deprecations and removals process, where applicable the deprecation/removal is aligned with a publicly communicated Breaking Change Window.

In June of 2023, we changed the process so that all deprecations and removals are displayed on [the Deprecations page](https://docs.gitlab.com/ee/update/deprecations.html).
The announcements are grouped by the milestone they will be removed in. The deprecation announcement date is listed below each individual item.

#### Syntax deprecation process

{{% include "includes/syntax-deprection.md" %}}

### Naming features

Naming new features or [renaming existing features](https://docs.gitlab.com/development/renaming_features/) is notoriously hard and sensitive to many opinions.

#### Factors in picking a name

- It should clearly express what the feature is, in order to avoid the [AWS naming situation](https://expeditedsecurity.com/aws-in-plain-english/).
- It should follow [usability heuristics](https://www.designprinciplesftw.com/collections/10-usability-heuristics-for-user-interface-design) when in doubt.
- It should be common in the industry.
- It should not overlap with any other existing concepts in GitLab.
- It should have as few words as possible (so people won't use a shortened name).
- If you remove words from the name, it is still unique (helps to give it as few words as possible).
- We should also give products descriptive, not distinctive, names, and use prepositions when referring to third-party products and services in names. See our [Product Principles](/handbook/product/product-principles/#product-and-feature-naming-guidelines) for more information.

#### Process

- It's highly recommended to start discussing this as early as possible.
- Seek a broad range of opinions and consider the arguments carefully.
- The PM responsible for the area involved should make the final decision and not delay the naming.
- Naming should definitely not be a blocker for a feature being released.
- Reaching consensus is not the goal and not a requirement for establishing a name.

#### Renaming

The bar for renaming existing features is extremely high, especially for long-time features with a lot of usage.
Some valid but not exclusive reasons are:

- New branding opportunities
- Reducing confusion as we introduce new adjacent features
- Reducing confusion as we re-factor existing features

When renaming features follow the process [to rename a category](/handbook/product/categories/#changing-category-name) starting with an MR to change the name in [`data/features.yml`](https://gitlab.com/gitlab-com/www-gitlab-com/blob/master/data/features.yml). Request review by the Product Director and Engineering Director of your Section for approval. Optionally, add a comment including your technical writer, engineering manager, product design manager, and product designer for transparency.

When renaming a feature other items to consider are updates to documentation, blogs, direction pages and competitive information.

### Using What's New to communicate updates to users

What's New is a feature that is part of GitLab.com and Self-managed GitLab that is used to communicate highlights from each release. After each major release, a [yaml file is published](/handbook/marketing/blog/release-posts/#creating-an-mr-for-whats-new-entries) that contains 3-10 highlights from the release along with links to the relevant documentation to get started using them.

A small notification dot appears above the "?" icon, and when users click on "What's new" in the menu, a drawer containing the updates slides into view.

The goal of What's New is to make it easy for users to be aware of the most important changes in GitLab so we can help them stay up-to-date on all of our changes and feature updates.

### Permissions in GitLab

Use this section as guidance for using existing features and developing new ones.

1. Guests are not active contributors in private projects. They can only see, and leave comments and issues.
1. Reporters are read-only contributors: they can't write to the repository, but can on issues.
1. Developers are direct contributors, and have access to everything to go from idea to production,
unless something has been explicitly restricted (e.g. through branch protection).
1. Maintainers are super-developers: they are able to push to master, deploy to production.
This role is often held by maintainers and engineering managers.
1. Admin-only features can only be found in `/admin`. Outside of that, admins are the same as the highest possible permission (owner).
1. Owners are essentially group-admins. They can give access to groups and have
destructive capabilities.
1. Auditor cannot access `/admin`, group settings, and project settings. Auditor has read-only access to all other areas.

To keep the permissions system clear and consistent we should improve our roles to match common flows
instead of introducing more and more permission configurations on each resource, if at all possible.

For big instances with many users, having one role for creating projects, doing code review and managing teams may be insufficient.
So, in the long term, we want our permission system to explicitly cover the next roles:

1. An owner. A role with destructive and workflow enforcing permissions.
1. A manager. A role to keep a project running, add new team members etc.
1. A higher development role to do code review, approve contributions, and other development related tasks.

All the above can be achieved by iteratively improving existing roles.

[Documentation on permissions](https://docs.gitlab.com/user/permissions/)

### Security Paradigm

You can now find our [security paradigm](https://about.gitlab.com/direction/application_security_testing/#security-paradigm) on the [Secure Strategy](https://about.gitlab.com/direction/application_security_testing/) page.

Also see our [Secure Team engineering handbook](/handbook/engineering/development/sec/secure/).

### Statistics and performance data

Traditionally, applications only reveal valuable information about usage and
performance to administrators. However, most GitLab instances only have a handful of
admins and they might not sign in very often. This means interesting data is rarely
seen, even though it can help to motivate teams to learn from other teams,
identify issues or simply make people in the organisation aware of adoption.

To this end, performance data and usage statistics should be available to all users
by default. It's equally important that this can be optionally restricted to admins-only,
as laws in some countries require this, such as Germany.

### Internationalisation

GitLab is developed in English, but supports the contribution of other
languages.

GitLab will always default to English. We will not infer the language /
location / nationality of the user and change the language based on that.
You can't safely infer user preferences from their system settings either.
Technical users are used to this, usually writing software in English,
even though their language in the office is different.

### Performance

Fast applications are better applications. Everything from the core user experience,
to building integrations and using the API is better if every query is quick, and
every page loads fast. When you're building new features, performance has to be top of mind.

We must strive to make every single page fast. That means it's not acceptable for new
pages to add to performance debt. When they ship, they should be fast.

You must account for all cases, from someone with a single object, to thousands of objects.

Read the handbook page relating to [performance of GitLab.com](/handbook/engineering/performance), and note the Speed Index target shown there
(read it thoroughly if you need a detailed overview of performance). Then:

- Make sure that new pages and interactions meet the Speed Index target.
- Existing pages should never be significantly slowed down by the introduction of new features
or changes.
- Pages that load very slowly (even if only under certain conditions) should be sped up by
prioritizing work on their performance, or changes that would lead to improved page load speeds
(such as pagination, showing less data, etc).
- Any page that takes more than 4 seconds to load (speed index) should be considered too slow.
- Use the [availability & performance priority labels](/handbook/engineering/performance/#availability-performance-labels)
to communicate and prioritize issues relating to performance.

You must prioritize improvements according to their impact (per the [availability & performance priority labels](/handbook/engineering/performance/#availability-performance-labels)).
Pages that are visited often should be prioritized over pages that rarely have any visitors.
However, if page load time approaches 4 seconds or more, they are considered no longer
usable and should be fixed at the earliest opportunity.

#### Restriction of closed source JavaScript

In addition, to meet the [ethical criteria of GNU](https://www.gnu.org/software/repo-criteria-evaluation.html),
all our JavaScript code on GitLab.com has to be free as in freedom.
Read more about this on [GNU's website](https://www.gnu.org/philosophy/javascript-trap.html).

### Why cycle time is important

The ability to monitor, visualize and improve upon cycle time (or: time to
value) is fundamental to GitLab's product. A shorter cycle time will allow you
to:

- respond to changing needs faster (i.e. skate to where the puck is going to be)
- ship smaller changes
- manage regressions, rollbacks, bugs better, because you're shipping smaller changes
- make more accurate predictions
- focus on improving customer experience, because you're able to respond to their needs faster

When we're adding new capabilities to GitLab, we tend to focus on things that
will reduce the cycle time for our customers. This is why we choose
[convention over configuration](/handbook/product/product-principles/#convention-over-configuration)
and why we focus on automating the entire software development lifecycle.

All friction of setting up a new project and building the pipeline of tools you
need to ship any kind of software should disappear when using GitLab.

### Plays well with others

We understand that not everyone will use GitLab for everything all the time,
especially when first adopting GitLab. We want you to use more of GitLab because
you love that part of GitLab. GitLab plays well with others, even when you use
only one part of GitLab it should be a great experience.

GitLab ships with built-in integrations to many popular applications. We aspire
to have the world's best integrations for Slack, JIRA, and Jenkins.

Many other applications [integrate with GitLab](https://about.gitlab.com/partners/technology-partners/integrate/), and we are open to adding new integrations to our [technology partners page](/partners/technology-partners/). New integrations with GitLab can vary in richness and complexity; from a simple webhook, and all the way to a [Project Service](https://docs.gitlab.com/user/project/integrations/).

GitLab [welcomes and supports new integrations](https://about.gitlab.com/partners/technology-partners/integrate/) to be created to extend collaborations with other products.
GitLab plays well with others by providing APIs for nearly anything you can do within GitLab.
GitLab can be a [provider of authentication](https://docs.gitlab.com/integration/oauth_provider/) for external applications.

There is some natural tension between GitLab being a single-application for the
entire DevOps lifecycle, and our support for better user experience via integration
with existing DevOps tools. We'll prioritize first our efforts to improve the single-application
experience, second to enable a rich ecosystem of partners, and third to improve integration with the broader ecosystem
to other tools. GitLab is open-source so this should not prohibit contributors adding
integrations for anything that they are missing - as long as it fits with GitLab product vision.

If you don't have time to contribute and are a customer we'll gladly work with you to design the API addition or integration you need.
