---

title: Dogfooding for Product Managers
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

The Dogfooding process should begin [during the validation phase](/handbook/product-development-flow/#validation-phase-1-validation-backlog) of the Product Development flow. PMs should set up conversations with [internal customers](#internal-customer-dris) to gather their feedback on the problem and possible solutions. This helps the group by providing feedback from teams deeply familiar with GitLab, and allows internal customer requirements to be considered from the beginning. We've seen that features that have been dogfooded internally are more successful than those that have not gone through this process, and internal usage is [required to achieve Viable maturity](https://about.gitlab.com/direction/maturity/).

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

#### For Product Team Members

As a Product organization, it's also our responsibility to ensure that the
entire company dogfoods our product. We do this by:

1. Promoting features internally when they are ready for everyday use to get as
many internal users as possible. This is particularly valuable when you can get
relevant teams using your feature in their daily work. This can be done by
recording a demo of the new functionality and sharing it with the team,
running through examples of usage on Product calls, or identifying current
workflows or processes the feature could help improve.
1. Including top internal user issues in the relevant [category epics](/handbook/product/product-processes/#category-direction) when they align with our strategy.
1. Maintaining a set of [internal customer DRIs](#internal-customer-dris) who represent GitLab team members
who use GitLab for the purposes of developing and operating GitLab and
GitLab.com.

Working with internal stakeholders comes with the added benefit of getting
immediate feedback that reduces cycle times and de-risks early investments in
new categories and features. Beyond feature velocity, internal dogfooding saves
the money that we would spend on third-party tools.

Internal users can help quickly identify where workflows might break down or
where potential usability or performance issues must be explored. We should
heavily weigh internal feedback to shape our perspective on customer needs,
and then compare it to what we know about both large and small customers
(and if we’re unsure, then we should proactively ask).

#### Internal Customer DRIs

We define specific DRIs in the [categories.yml](https://gitlab.com/gitlab-com/www-gitlab-com/edit/master/data/categories.yml) file.
Below are the responsibilities of an Internal Customer DRI:

1. Actively work to improve dogfooding of the features within your internal function and provide proactive feedback to the product managers
1. Be the authoritative voice on what is required to begin dogfooding a feature within your function, and the combined input from your function into prioritization
1. Respond to issue mentions in a timely fashion
1. Periodic meetings between DRI and product development group
1. Stay up to date on the changes in that feature area (i.e. watch the kickoff video / read the release post)

#### Dogfooding Process

1. **Any GitLab team member** can create an issue labeled `Dogfooding` and spur a discussion with PM. This label should
never be removed so that the decision-making process gets memorialized on the [Dogfooding board](https://gitlab.com/groups/gitlab-org/-/boards/1212116).
When creating a Dogfooding issue, consider using the [Dogfooding Issue Template](https://gitlab.com/gitlab-org/gitlab/-/blob/master/.gitlab/issue_templates/Dogfooding.md)
for existing features that need Dogfooding or the [Feature Proposal template](https://gitlab.com/gitlab-org/gitlab/-/blob/master/.gitlab/issue_templates/Feature%20proposal%20-%20detailed.md) for new features.
1. **PMs** will consider the issue, make an explicit decision, and **add** an appropriate label for next steps:
    1. `Dogfooding::Build in GitLab` when a new feature should be built into GitLab
    1. `Dogfooding::Rebuild in GitLab` when there is existing work (outside of GitLab) that needs to be rebuilt _inside_ of GitLab
    1. `Dogfooding::Keep Outside GitLab` when a feature is okay to build _outside_ GitLab because they don't align with product vision
    1. `Dogfooding::Use Existing Feature`: when a feature _already exists_, but isn't being used internally yet for whatever reason
    1. Note: _Please do not remove the original `Dogfooding` label when adding the new scoped label._
    1. Note: _A good rule of thumb when considering effort to build in GitLab compared to building a tool outside is to use the '5x' rule. The '5x' rule states that if the effort to build the tool **inside of** GitLab is less than five times the effort to build it **outside of** GitLab, you should choose to build it inside of GitLab._
1. If the decision is to `Build in GitLab` or `Rebuild in GitLab`:
    1. **PMs** will provide an estimate of when a feature can be delivered, and Internal customers should be prepared to contribute to that effort in order to accelerate delivery.
    1. **Internal Customers** can track the progress of the issue through the [Product Development flow](/handbook/product-development-flow/)
1. If the feature existed and was identified as `Use Existing Feature`:
    1. **PMs** should interview team members to understand why they weren't using that feature already
    1. Based on that feedback, the PM should create and execute a plan to solve those problems, such as:
    - Creating additional documentation in the handbook or product docs site
    - Recording walkthroughs or demos of the feature
    - Writing a blog post about how the feature works or can be used to solve a problem
1. Finally, when the feature is ready for internal consumption:
    1. **PMs** should change the label to `Dogfooding::Promote Feature` and promote these features in the weekly Product call and in other relevant channels
    1. **Product Directors/Group managers** should be actively promoting these features to other leaders throughout the company
    1. **Designated team members** should work to provide immediate feedback to ensure the feature is serving our team's needs
1. On an ongoing basis, **product Directors/Group managers** should be reviewing the [Dogfooding Board](https://gitlab.com/groups/gitlab-org/-/boards/1212116) to:
    1. Ensure that issues marked as `Dogfooding::Build in GitLab` or `Dogfooding::Rebuild in GitLab` are getting prioritized appropriately
    1. Be aware of new issues marked as `Dogfooding::Keep Outside GitLab` to understand why these features are explicitly staying out of the product
    1. Be aware of new issues marked as `Dogfooding::Use Existing Feature` to help their PMs promote these issues for internal usage

To see all the `Dogfooding` work that is happening, [here is a board that collects all the scoped labels](https://gitlab.com/groups/gitlab-org/-/boards/1212116).

Check out this 10 minute discussion about dogfooding:

##### Example: configuring GitLab

Most of GitLab is configured through the file `gitlab.rb`. It's tempting to
add a new parameter in this file - it's easy, fast to do, and won't require
adding a new UI element to allow the configuration of this new setting. However,
changing this file requires you to reconfigure GitLab. To do that, you have to
login to your server and type in commands to reconfigure your instance,
possibly multiple times if you have more than one server.

This is not something that we can ask our customers to do. Only by using your
own product and features will you realize that some practices should be avoided
as much as possible.
