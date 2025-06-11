---
title: Dogfooding for R&D
---

### Dogfood everything

The best way to understand how GitLab works is to **use it for as much of your job as possible**.
Avoid [dogfooding antipatterns](/handbook/engineering/development/principles/#dogfooding-antipatterns)
and try to find ways to leverage GitLab (instead of an external tool) whenever
possible. _For example:_ try to use Issues instead of documents or spreadsheets
and try to capture conversation in comments instead of Slack threads.

As a PM, but also as any GitLab team member, you should actively use every feature,
_or at minimum_, all the features for which you are responsible. That includes
features that are not directly in GitLab's UI but require server configuration.

If you can't understand the documentation, or if you struggle to install
something, would anyone else bother to do it? This hands-on experience
is not only beneficial for understanding what the pain points are, but it also
helps you understand what can be improved and what features GitLab is missing.

#### When do we dogfood?

The Dogfooding process should begin [during the validation phase](/handbook/product-development-flow/#validation-phase-1-validation-backlog) of the Product Development flow. PMs should set up conversations with [internal customers](#internal-customer-dris) to gather their feedback on the problem and possible solutions. This helps the group by providing feedback from teams deeply familiar with GitLab, and allows internal customer requirements to be considered from the beginning. We've seen that features that have been dogfooded internally are more successful than those that have not gone through this process, and internal usage is [required to achieve Viable maturity](https://about.gitlab.com/direction/#maturity).

When a feature is <b>_minimal_</b> and moving toward <b>_viable_</b>, designated
GitLab team members (and anyone else interested!) should be using the feature
extensively and actively providing feedback to the PM and team developing it.

When a feature is <b>_viable_</b> and moving toward <b>_complete_</b>, designated
GitLab team members should be using the feature **exclusively**, and actively
providing direct feedback to the PM in situations where exclusive use is not
possible.

**Exceptions to dogfooding:**

When a feature is <b>_planned_</b> and/or moving towards <b>_minimal_</b>, dogfooding
is not required; although, the initial conversation to seek feedback from internal customers should [occur](#when-do-we-dogfood).

GitLab _the company_ works in a specific way, but GitLab _the product_ is
designed to work for lots of different companies and personas. When we have
_validated through research_ that the wider GitLab community wants a feature
that doesn't align with how our organization works, dogfooding is not required.

#### For R&D Team Members

As an R&D organization, it's also our responsibility to ensure that the entire company dogfoods our product. This is aligned to [understanding our customers](/handbook/values/#understand-our-customers), [delivering a product that we love ourselves](/handbook/company/mission/#contribute-to-gitlab-application), and [using our own product to surface improvements.](/handbook/values/#dogfooding).

1. Add the [`Dogfooding`](https://gitlab.com/gitlab-org/gitlab/-/issues/?label_name%5B%5D=Dogfooding) and [`Dogfooding::Promote Feature`](https://gitlab.com/groups/gitlab-com/-/issues?label_name%5B%5D=Dogfooding%3A%3APromote+Feature) label to the issue tracking the feature. Ensure a feedback thread has been started on the issue.
   {{% note %}}
   In the future we intend to add tracking and visibility to see what features are [requesting dogfooding](https://gitlab.com/groups/gitlab-com/-/issues?label_name%5B%5D=Dogfooding%3A%3APromote+Feature) and the engagement associated.
   {{% /note %}}
1. Promoting features internally when they are ready for everyday use to get as
many internal users as possible. This is particularly valuable when you can get
relevant teams using your feature in their daily work. This can be done by
recording a demo of the new functionality and sharing it with the team,
running through examples of usage on Product calls, or identifying current
workflows or processes the feature could help improve.
1. Including top internal user issues in the relevant [category epics](/handbook/product/product-processes/#category-direction)
when they align with our strategy.
1. Maintaining a set of [internal customer DRIs](#internal-customer-dris) who represent GitLab team members
who use GitLab for the purposes of developing and operating GitLab and GitLab.com.

Working with internal stakeholders comes with the added benefit of getting
immediate feedback that reduces cycle times and de-risks early investments in
new categories and features. Beyond feature velocity, internal dogfooding saves
the money that we would spend on third-party tools.

Internal users can help quickly identify where workflows might break down or
where potential usability or performance issues must be explored. We should
heavily weigh internal feedback to shape our perspective on customer needs,
and then compare it to what we know about both large and small customers
(and if we're unsure, then we should proactively ask).

#### Internal Customer DRIs

Internal Customer DRIs are the simplest way to use [Reference Customers](https://www.svpg.com/the-power-of-reference-customers/) as we design and build our product categories.
We define specific DRIs in the [categories.yml](https://gitlab.com/gitlab-com/www-gitlab-com/edit/master/data/categories.yml) file.
Below are the responsibilities of an Internal Customer DRI:

1. Actively work to improve dogfooding of the features within your internal function and provide proactive feedback to the product managers
1. Be the authoritative voice on what is required to begin dogfooding a feature within your function, and the combined input from your function into prioritization
1. Respond to issue mentions in a timely fashion
1. Periodic meetings between DRI and product development group
1. Stay up to date on the changes in that feature area (i.e. watch the kickoff video / read the release post)

##### Best practices

It's recommended to

- Identify Internal Customer DRIs early in the discovery/delivery of a new direction, and follow the processes described there.
- Reach out to the wider team around the Internal Customer DRIs regularly to best internalize all their insights.
