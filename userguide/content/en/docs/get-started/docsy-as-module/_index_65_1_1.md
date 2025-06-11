---
title: GitLab Product Management
---

This document describes what Product Management does, where, when, and how to engage with the product management team.

## What does Product Management do?

At GitLab, the PMs lead their specialization. That is, the Create PM decides what the Create group works on, for which release, and makes sure this furthers our goals. This includes bugs, features, and architectural changes.

The PM can't be expected to parse every single bug or issue that comes by, so they have to rely heavily on the input of the various stakeholders. To be able to achieve this, both the PM and the stakeholders have to actively work together. It's a two-way street.

In general terms, if you require something to happen with the product or if you need engineering staff for a particular change, you approach a PM. Preferably through creating an issue (the GitLab way), and mentioning them there.

In the same vein, PMs are required to ask for feedback from the stakeholder on particular changes. If a change will affect GitLab.com and its maintenance, a PM should proactively reach out to infrastructure engineers to help with the scope, design, and decisions regarding this change.

It is then up to the PM to weigh all these inputs and decide on a prioritization. It is to be expected that they are the best equipped to make this prioritization, while also keeping in mind all goals of GitLab.

## How to engage Product Managers

### Where to reach Product Managers

- **[Public Issue Tracker (for Product)](https://gitlab.com/gitlab-com/Product/issues)**; please use confidential issues for topics that should only be visible to team members at GitLab.
- **[Chat channel](https://gitlab.slack.com/archives/product)**; please use the `#product` chat channel for questions that don't seem appropriate for the issue tracker.

### Which Product Manager should I contact?

Please see the [Product Categories](/handbook/product/categories/) to know which product manager handles which category.

### How do I share feedback?

Generally speaking, all product feedback should be provided via issues. For detailed overview of how to create an issue, please [read this section on the process](/handbook/product/product-processes/#issues). If you have any product-related questions, comments, input, or otherwise, the Product Manager is the primary person you should talk to, *if creating an issue does not suffice*.

Creating an issue includes, but is not limited to, features, bugs, and other changes that need to be prioritized, changed, discussed, or need more attention. Product Managers will reach out to stakeholders when making or communicating any decision. The pressure of balancing priorities while ensuring we build excellent software is on the product managers and they need all the input they can get to achieve this. Paid features fall under their respective PMs, not under one PM in particular. For instance, [Service Desk](https://docs.gitlab.com/user/project/service_desk/) falls under the [Plan PM](/handbook/product/categories/features/#project-management).

All feedback must follow the [GitLab Community Code of Conduct](https://about.gitlab.com/community/contribute/code-of-conduct/). Failure to do so will result in the issues or comment being deleted.

#### Customer feature requests

If a customer has a feature request that doesn't already exist, refer to the [process to create an issue](/handbook/product/product-processes/#issues) in the [gitlab-org issue tracker](https://gitlab.com/gitlab-org/gitlab/-/issues) and choose the [Feature Proposal](https://gitlab.com/gitlab-org/gitlab/-/issues/new?issuable_template=Feature%20Proposal%20-%20lean) template, following the instructions and providing as much information as possible. Once you've created the issue,  make sure to add the appropriate labels for the [product stage and/or group](/handbook/product/categories/) (e.g `~"devops::plan"`) if known and add a comment tagging the appropriate Product Manager. If an issue already exists, make a comment on the issue with their information and use case.

Whenever you're sharing feedback on an issue (e.g. "Customer X wants this"), please make sure to do the following:

- Link to the source. Usually, this is a link to Salesforce or Zendesk
  - Use the Salesforce Account URL when it's a paying customer and you want to relate the ARR
  - Use the Salesforce Opportunity URL when it's related to a prospect or significant growth opportunity
- Provide context: if a customer wants this feature, include *why* they are interested in this. If you don't know, make sure to ask or bring the relevant PM in contact with the customer
- Include any further useful context (e.g. what kind of software is this customer building, or how they will use the feature)
- Mention the [Product Manager](/handbook/product/categories/)
  - Feel free to ask them anything that isn't clear to you (e.g. it's not clear what the status is of the issue, etc)

If a customer expresses interest by simply mentioning an issue number or e.g. "an integration with X", that is not sufficient information. Before creating or commenting on an issue, make sure to ask them:

- Why do you want this?
- What problem are you trying to solve?
- What parts of this issue/integration are important to you and why?
- Have you tried workarounds?
- How important is this to you?

The Product Manager is responsible for figuring all of this out, but being one step ahead of them will speed things up.

If a customer is a member of our Product [Customer Advisory Board](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/customer-advocacy/), the CSM should add two labels: `~CAB Takeaway` and `~CAB Takeaway Qx FY20xx` to the issue.

It is highly recommended to use the feedback template below to make this easier.

#### Feedback template

You can copy/paste this to make sure you don't miss anything or [create a comment template](https://docs.gitlab.com/user/profile/comment_templates/#create-comment-templates) for reusability:

```markdown
<!-- Select the appropriate subscription and product text below and remove the others (note: do not add them as labels)>
<!-- Click on ~customer priority:: below to select an appropriate label 1 through 10 with 10 being the highest>

The following ~customer is interested in this capability

- Subscription: ~"GitLab Ultimate" OR ~"GitLab Premium" OR ~"GitLab Free"
- Product: ~"self-managed" OR ~"gitlab.com" OR ~"GitLab Dedicated"
- Link to request:
- Priority: ~customer priority::
- Why interested:
- Problem they are trying to solve:
- Current solution for this problem:
- Impact to the customer of not having this:
- Questions:
- PM to mention:
- CSM to mention:
```

The `~customer priority::*` labels are inputs for the prioritization model powering the customer issue prioritization framework dashboard:

- [Customer Requested Issues](https://10az.online.tableau.com/#/site/gitlab/workbooks/2015827/views)

These dashboards represent the relative importance of a given issue to the specific customer. 1 is the lowest priority and 10 is the highest. These can be updated at any point in time and will be reflected in the model within 24 hours. You can find more context about priority labels on the [customer issues prioritization framework handbook page](/handbook/product/product-processes/customer-issues-prioritization-framework/#priority-points).

##### Good example

> A customer with more than 1000 users mentioned they are interested in this feature to be able to do their sprint planning more effectively. The problem they are trying to solve is that with the current implementation, they can't X and need to do so because Y. They are using software X to do this today, but would be able to move to GitLab if we would do this.
>
> @productmanager this issue doesn't have a milestone right now, are we planning to address this in the near term?

##### Bad example

> salesforce.com/blabla

#### Customer collaboration projects

Customers that are assigned a Customer Success Manager typically have a [collaboration project](/handbook/customer-success/csm/customer-collaboration-project/) on GitLab.com, which is used to share information, document customer details, and track issues in a place that both the GitLab team and the customer's team can access.

Generally, CSMs maintain a main issue and/or enable the [CS-Tool - TAM issue tracker](https://gitlab.com/gitlab-com/cs-tools/gitlab-cs-tools/tam-issue-tracking), which lists out all feature requests the customer is interested in with links to the public GitLab issue.

When a customer expresses interest in a feature, the CSM should capture that in the public GitLab issue, as well as add it as an entry in the main feature tracking issue of the [customer's collaboration project](/handbook/customer-success/csm/customer-collaboration-project/).

The feature tracking issue should be maintained regularly by updating priority (elaborated on below) and milestones as the single source of truth on customer product needs. It can also be used for reviewing metrics of previously delivered feature requests.

If there is a lot of discussion with the customer about a specific feature request, create an issue on the customer [collaboration project](/handbook/customer-success/csm/engagement/) about it and list that issue as a related issue on the main GitLab issue. This is another signal of the main product issue of customer interest and also allows discussion with the customer and internal GitLab team members about their needs and concerns.

#### How do I escalate a feature request?

If you have followed the process of creating/commenting on issues and have not gotten traction, confirm that [all of the necessary information is included in the issue](/handbook/product/product-management/#feedback-template). Follow up with the Product Manager again in the issue and in the product stage Slack channel (linking to the issue) to get additional attention and team member involvement.

If a customer has identified an issue that is high priority for them, such as a work-stoppage bug or a feature required for the customer to meet a deadline, follow the expected steps for logging and tracking customer feature requests above by adding the customer's interest in a GitLab issue and including it in the collaboration project issue. In addition, [reach out to the Product Manager](/handbook/product/product-management/#where-to-reach-product-managers) who is [responsible for the corresponding group](/handbook/product/product-management/#which-product-manager-should-i-contact) and discuss it with them directly. A general idea of high priority is that the customer needs a particular feature as soon as possible.

**Critical Priority Requests** are extremely rare, but, when they occur, they are agreed upon by both Product and Engineering, with the CSM facilitating the request. If a customer is unable to continue using GitLab without a specific feature, the CSM should begin the [triaging the account](/handbook/customer-success/csm/health-score-triage/), follow the process to indicate customer interest in the issue, then set up regular check-ins with the Product and Engineering teams to assess the status of the feature, expectations, and potential secondary plans. For the product & engineering process, please refer to the details of a [critical customer merge request](https://docs.gitlab.com/development/code_review/#customer-critical-merge-requests).

### Why do product teams prefer we ask about the problem rather than the solution?

The following part of [this UX design article](https://uxdesign.cc/wanting-a-faster-horse-doesnt-mean-the-customer-is-wrong-90b1bed8b7e) sums it up well:

Listening to the right customers at the right time is a great first start, but you also need to make sure you are interpreting their feedback/requests correctly. The reason for that is generally customers ask for something to be better, not different — **they interpret their problems through existing solutions**. A customer is unlikely to tell you what new product to create (that's your company's job!) but they will tell you what problem that product needs to solve.

To do this you need to get to the underlying why behind the feature request — what is the basic problem to be solved, and then think about how to solve that problem in a fundamentally better (e.g., 10x faster, easier, cheaper) way.

This concept is best described by the (most likely misattributed) quote by the founder of the Ford Motor Company, Henry Ford: "If I had asked people what they wanted, they would have said faster horses."

> When the customer asks for a faster horse, you should then ask why. You would invariably hear things like:
> I'd like to shorten my commute from home to work
> I'd like to be able to sell my widgets to more cities
> I'd like to win the Kentucky Derby
> **Now that you understand the basic problem to be solved (of which there are many solutions including a faster horse), its your job to think of a fundamentally better way to solve it** — e.g., what does a 10x faster horse look like? And one potential solution to that is obviously a car.

### Feedback Examples

#### Examples: A customer has a feature request

If you hear a feature request from a customer, and they do not have a CSM assigned to their account, you should follow the normal procedure: create an issue and label it correctly. Let's say the customer requests an enhancement to Issues. You know by reading above that you'll have to label this with `Discussion` and you can mention or reach out to the Plan PM to expedite this if warranted.

A salesperson for an organization asking for a paid-tier feature request shall work with the product manager to arrange conversations to further explore the feature request and desired outcome. The process will be:

- Sales schedules 1-hour zoom meeting with the product manager, customer, and themselves. Call recorded if the customer gives permission.
- Product Manager prepares any additional questions they would like answered, beyond what is below.
  - What version of GitLab are you currently using? CE / Premium / Ultimate?
  - How are you currently doing source code management? GitLab merge requests or another tool? How about CI/CD?
  - How are you currently doing issue management? How are you using HP ALM? Agile/Kanban? What do your sprint/iterations look like? 1 week? 1 month? 2 months?
  - What is the integration like between issue management and source code management?
  - How do teams manage multiple repos? Does a team typically work on one repo at a time? Or do they work on multiple repos at the same time?
- Sales sends questions to the customer prior to the meeting.
- Meeting is created in Salesforce.com
- Sales creates a Google document for notes from previous calls with customer. Google Doc shared with product manager and sales manager
- Sales and product manager schedule 15-minute pre-meeting to share what we know about the customer thus far, so as to not waste time asking questions we already know the answer to. Notes from this pre-meeting are added to the Google document.
- Sales adds a link to the Google document under the account object as a note.

In the event that a paid customer is willing to pay for us to develop a specific feature, we should still respond as above. It's great that they're willing to pay for it: that means they really need it. However, we will not make a custom version of GitLab; even gitlab.com is running on GitLab Ultimate, and we move faster that way by minimizing technical complexity to determine features to follow after, it's a trade-off to make. This doesn't mean that "no" is always going to stay "no." We keep an open mind to improvements.

#### Example: Customer is looking for prescriptive advice for setting up GitLab

For example, they need support configuring a self-managed runner with a SaaS license.

If you need support with a specific customer and your Customer Success Manager is unable to configure what is being requested or you are being asked to provide very specific guidelines for use of GitLab, we suggest creating an issue using the [Product Support Request](https://gitlab.com/gitlab-com/Product/-/blob/main/.gitlab/issue_templates/Product-Support-Request.md), and following the steps suggested in the issue.

To remain focused on [customer results](/handbook/values/#results) and [efficiency](/handbook/values/#efficiency), we recommend setting a due date on the issue in 5 business days and assigning the issue to the Product Leader of the section for triage.

#### Example: Many support requests come in about a bug with CI

Same as before, make sure an issue is made and make your case with the PM that this is becoming a problem and needs to be fixed. The PM will make sure that this is fixed or resolved in some other way.

#### Example: I think creating new files is slow

Everything in GitLab should be fast and creating files falls under the repository, so you create an issue and make the PM aware of it by mentioning it.

The PM in turn will investigate whether this is a general problem or one specific to GitLab.com, in collaboration with infrastructure and others, and schedule any necessary changes for an upcoming release.

### Tableau

The Product team maintains a [Tableau dashboard](https://10az.online.tableau.com/#/site/gitlab/workbooks/2015827/views) to aggregate issues and customer interest in those issues. Information is automatically gathered from [GitLab issues](https://gitlab.com/gitlab-org/gitlab/issues) by scanning for Salesforce customer account links. The same dashboard can be used by Sales and CS.

The Tableau page automation will detect when Salesforce links are added and use the customer's Salesforce data, such as Total Account Value and seat licenses, to add them to the page. This also maintains a customer's privacy on public issues, since Salesforce links are only accessible to GitLab employees with proper credentials.

### Reporting Bugs

If your customer would like to report a bug, refer to the [example of how to express the customer's interest](/handbook/product/product-management/#customer-feature-requests) in an issue and use the [Bug](https://gitlab.com/gitlab-org/gitlab/-/issues/new?issuable_template=Bug) template, following the instructions and the same steps as above.

You can refer to the following steps if a medium priority bug has become stale on the Product Management [triage board](https://gitlab.com/groups/gitlab-org/-/boards/1075672?&label_name[]=type::bug&label_name%5B%5D=customer). Another potentially helpful view is the [triage report label](https://gitlab.com/gitlab-org/gitlab/-/issues?scope=all&utf8=%E2%9C%93&state=opened&search=triage+report).

Follow the same steps as for logging and tracking bugs as with feature requests, but be sure that steps to reproduce and workarounds are included whenever possible.

## Product and CSM Collaboration

It is essential for the Product team and the CSM team to have a close working relationship, so that the business has a pulse on customer interests, feedback, and sentiment.

### Product Collecting Customer Feedback

If you are on the Product team and seeking feedback from customers, you should consult with the Customer Success Management organization, as CSMs have direct access and regular communication with customers across all regions, tiers, use cases, and industries.

To request a meeting with a customer, open an issue in the [CSM project](https://gitlab.com/gitlab-com/customer-success/csm) and use the [Product Engagement](https://gitlab.com/gitlab-com/customer-success/csm/-/issues/new?issuable_template=Product%20Engagement) issue template, filling out the appropriate fields. If you have a specific customer in mind that you'd like feedback from, please share the customer name in the issue and tag the CSM assigned if you know who it is (you can find this information in Salesforce if you have access; otherwise, someone else will check for you).

The CSM team gets notified via Slack whenever a new issue is opened, and they will respond in the issue with specific customers when they are available. If you don't receive a response within a week (allowing the CSM to review with their customers), feel free to ping the <code>[@timtams](https://gitlab.com/timtams)</code> group in the issue.

### CSMs Sharing Customer Feedback

One of the responsibilities of CSMs is collaborating with the Product team to help prioritize features by indicating demand from customers and relaying customers' use cases and experiences.

Following the process described below will ensure that customer interest in features is shared with Product properly, so that Product can take appropriate action. Through following the documented process, we are able to increase our efficiences, decrease back-and-forth communication, build a better product, and get answers and resolutions to customers faster.

## Product Joining Customer Calls

It can be very helpful for both Product and customers to be on a call together to discuss feedback, roadmaps, etc. Take the following steps to ensure an efficient and productive meeting:

### Collect Customer Context

In advance to the product call, have a conversation with the customer about expectations and their background.

Ask the following questions, as applicable:

- What features and/or functionality do they want to discuss?
- How familiar are they with those features and/or functionality?
- Have they had a demo of the features already or is this their first exposure?
- Are they actively using the features in production, in a POC, or have they not yet tried the features themselves?
- Are they more interested in an overview of the functionality that already exists or in future roadmap functionality?
- What are their goals for this call?

### Contact the Appropriate PM

It is best practice to ask for a PM to join your call through the slack channel for their [group or category](/handbook/product/categories/#devops-stages). Direct messages are problematic because it is hard to loop in other PMs if the right person for the call is not included in the DM, and it limits visibility into topics that may be discussed. If you are unsure about the right group to reach out to, you can ask in the general [#product](https://gitlab.slack.com/archives/C0NFPSFA8) channel.

Before reaching out to the PM, fill out the [PM Customer Meeting Briefing Document](https://docs.google.com/document/d/1TPJwjJTOrlrtuJ_srs631ndL6dkiwl9yIi3PPtgStos/edit#heading=h.sujaka5bd7jl) and send it to the PM along with your request. The PM will review the doc and let you know if they are able to attend the meeting. PMs may decline meeting requests if they do not receive the context doc or if it is only partially complete. We recommend sending this context along with your request at least 3 business days before the meeting. The PM will review the document and provide feedback to ask for further clarity if needed.

In addition, once the call is scheduled, make sure you have a detailed agenda set at least 24 hours before the call that is shared with both the customer and the Product team.

### EBR Preparation

CSMs regularly hold [Executive Business Reviews](/handbook/customer-success/csm/ebr/) with their customers and often request involvement from Product Managers. When a CSM is looking for Product involvement, they will reach out to the PM (in their group Slack channel) with the date, time, and desired topic.

The CSM will involve the PM in preparation for the EBR, working with them to ensure expectations of content, timing, and desired outcomes are fully established.

EBRs are usually quite long (60-90 minutes) and the product presentation is only a small portion (15-20 minutes) of the overall EBR, so the PM is welcome to only join when they will be speaking. Of course, if they want to join and/or participate in the full call, that is definitely welcome, as customers often share product feedback and requests throughout an EBR.

## Requests for Product Support

Throughout the customer lifecycle, customer-facing teams (Support, Account Executives, CSMs, Solutions Architects, Professional Services, Renewals Managers, etc.) may need the assistance of a Product Manager. This can include a detailed discussion of our direction, and how to address specific use cases, or gaps in functionality, within an organization.

To ensure these requests can be quickly triaged, easily scheduled, and later tracked, there is a standardized request process based on issues.

### Requesting support from Product

For time-sensitive and high-impact requests, please paste a link to the issue in the `#product` Slack channel, and `@mention` the recommended PM's in the template.

### Working with support requests

When a support request is opened, labels will automatically be assigned to categorize the request.

Three fields are particularly important when triaging requests:

- Priority: How time critical the request is, `urgent` requests should be treated with a high priority
- Impact: Potential impact to the business, based on [total contract value (TCV)](/handbook/sales/sales-term-glossary/)
- Stage: Which stage the request relates to

All Product Managers should ensure they are set up to receive label notifications for their respective stages:

1. List the [product project's labels](https://gitlab.com/gitlab-com/Product/-/labels)
2. Subscribe to relevant stage labels

## Guide for Product Managers Engaging with Other Teams

### Product group counterparts

GitLab is designed and developed in a unique way.

Consistent with our value of [Efficiency](/handbook/values/#efficiency)
the product is developed with [directly responsible individuals](/handbook/people-group/directly-responsible-individuals/) from Product, UX, Quality and Development working together.

| Product Managers | Engineering Managers | UXers | SETs |
| :--------------: | :------------------: | :---: | :---: |
| Set [milestone priorities](/handbook/product/product-processes/cross-functional-prioritization/#planning-for-the-milestone) and define what features Engineering works on | Own the definition of done; decide what gets merged into Product. Prioritizes maintenance work | Proactively identify small and large strategic UX needs to aid Product Management prioritization | Own and identify test strategy and requirements to complete the definition of done |

At GitLab, we develop our product for self-managed as well as SaaS-hosted customers. We realize that while we have DRIs there are many stakeholders who must have input, including Engineering, Quality, UX, Product, Security, and Infrastructure. For example, the Security team often has the deeper context of what it takes to run a secure SaaS system. Similarly, the Infrastructure team has insights into what we should build into the product to reduce toil and enable efficient, reliable, performant, and scalable systems.

We call this the [Product Group](/handbook/company/structure/#product-groups) model. It is an extension of the classic quad concept at the leadership level and is currently comprised of Development, Quality, User Experience, Infrastructure, Product, and Security.

The Product Group can be used to facilitate a [global optimization](/handbook/values/#efficiency-for-the-right-group), including product-wide [technical debt](/handbook/engineering/workflow/#technical-debt).

### Working with Product Management across the company

There are many counterparts that PMs work with. Here are some best practices for working across the organization.

#### Working with Finance Business Partners

In some cases, Product Managers may have items that incur expenses toward the budget. These can be related to external vendors for research, contractors for development staffing, and infrastructure. The CProdO is the DRI for the product budget and all changes or requests for budget spend must be approved through them.

To request a forward-looking new budget item, open an issue in the Product project using the [Product Budget Request Template](https://gitlab.com/gitlab-com/Product/-/tree/main/.gitlab/issue_templates/Product-Budget-Request.md) and assign it to the CProdO and manager. Budgets are planned annually and quarterly, so approval may not be immediately given because it depends on the timing of budget planning. The CProdO will bring the budget request to the next budget planning session with Finance.

To request approval for an increase in the expected spend for a pre-existing item, open an issue in the Product project using the [Product Budget Request Template](https://gitlab.com/gitlab-com/Product/-/tree/main/.gitlab/issue_templates/Product-Budget-Request.md) assign to the CProdO and tag your manager. The CProdO will review, approve or decline the budget change. The CProdO will then notify the Finance Business Partner of changes for forecast updates.

### Working with Content Marketing

Content marketers and Product Managers can partner together when using a Blog to communicate product changes and engaging the market with thoughtful changes. See the [blog post handbook page](/handbook/marketing/brand-and-product-marketing/content/content-marketing/#blog-post) for guidelines on when and how to start engaging Content Marketing for creating a blog post for a feature.

### Working with Product Marketing (PMM)

Product marketers and managers should be joined at the hip. Just as a feature without documentation
should not be considered shipped, benefits of GitLab that we're not actively talking about might
as well not exist.

Product marketers rely on product managers to be guided to what is important and high impact.
In general, you should:

- always mention the [appropriate PMM](/handbook/product/categories/) on epics and high level issues
- regularly meet/talk async with the PMM that is aligned with your product area
- proactively reach out for input when contemplating new features
- involve PMM as early as possible with work on important changes

{{% include "includes/usecase-competitive-content.md" %}}

### Working with marketing

When working on the release of larger features or new capabilities, it is important the product manager consider various aspects of the go to market plan and  inform or partner with the appropriate stable counterparts for strategic and logistical considerations.

#### Marketing materials

As a PM you're responsible for making sure changes you've shipped are well represented
throughout GitLab's documentation and marketing materials. This means that on
release, [`features.yml`](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/features.yml) is updated, documentation is merged and deployed, and
any existing content is updated where necessary.

It's not acceptable to do this after the release. GitLab is very complex, and features
and functions are easily missed, even those that provide significant value to customers
(e.g. the many ways you can authenticate with GitLab).

You can recruit the help of the marketing and technical writing team if needed,
but it's highly recommended to do small updates yourself. This takes less time
and overhead than communicating what needs to be done to someone else.

##### Pages that read from `features.yml`

It's important to keep [`features.yml`](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/features.yml) updated because there are a number of different pages (internal-facing and external-facing) that read from that file. These include:

**External**

- [Pricing](https://about.gitlab.com/pricing/)
- [Features](https://about.gitlab.com/features/)
- [Why GitLab Premium?](https://about.gitlab.com/pricing/premium/)
- [Why GitLab Ultimate?](https://about.gitlab.com/pricing/ultimate/)
- [Feature Comparison](https://about.gitlab.com/pricing/feature-comparison/)
- [DevOps Lifecycle](https://about.gitlab.com/stages-devops-lifecycle/)
- [DevOps Tools Landscape](https://about.gitlab.com/why-gitlab/)

**Internal**

- [SaaS vs. Self-managed](https://about.gitlab.com/features/)
- [Features by tier](https://about.gitlab.com/features/by-paid-tier/)

### Working with User Experience (UX)

The standard for working as a team at GitLab is the [Product Development Workflow](/handbook/product-development/product-development-flow/). Product Managers and Product Designers should work together as strategic counterparts to better understand the problem and discover user needs. The Product Designer and the Product Manager will pair to understand the target audience, their challenges when using a particular feature and then designing a solution that helps users solve them.

It's important to remember that User Experience (UX) does not only relate to visual features or interface design. UX is the intangible design of a strategy that brings us to a solution, so it also refers to the experience of writing code, working with .yml files, designing APIs, working with a CLI, etc. All of those functionalities are meant to be read and used by people. Involving a Product Designer into their planning and development can be highly beneficial. A guide to consider is: anytime a person is interacting with something, there is an opportunity for that interaction to be designed.

#### Assessing user workflows

As the GitLab product matures, we know we must make important workflows easier to use through feedback-loop mechanisms as is captured in the "Improve" section of the [Product Development Flow](/handbook/product-development/product-development-flow/#outcomes-and-activities-7). We can use the [Category Maturity Scorecards](/handbook/product/ux/category-maturity/category-maturity-scorecards/) and [UX scorecards](/handbook/product/ux/ux-scorecards/) as mechanisms to provide insights into how might be able to improve these user workflows.

#### What if there is a conflict with the product direction plan and solution proposal?

For areas with minimal maturity, or low/internal-only adoption, iteration and quickly adapting the product is the priority. In cases where the product experience desired would take longer to implement than required for the current maturity stage, it is advised the Product Manager work with the Product Designer and/or Engineering Manager to scope an iteration plan to ensure the experience is delivered incrementally over time to provide value quickly with quality.

For areas with more adoption, or beyond viable maturity, we recommend using the below escalation path if there is a disagreement on the approach to solve for the product direction and experience for users/customers.

As a team, there may be cases where a proposal exceeds the expected time to market to achieve the optimal customer experience. As this impacts potential business results, product managers are the [DRIs](/handbook/people-group/directly-responsible-individuals/) of the decision.

As DRIs, it is important to consider the input from other team members and to know when to trust in their experience and judgment. It is advised to use an [opportunity canvas lite](/handbook/product/product-processes/#opportunity-canvas-lite). The PM is expected to compile the canvas lite with inputs from the Product Designer and/or Engineering Manager. The PM then makes a decision after weighing input from the product designer and engineering, as appropriate. The PM should then share the decision, articulating the costs of waiting, and shipping earlier with less polish, as well as why no smaller iteration exists as part of this decision.

In the event that a decision is made to build something that is less polished, has a lesser user experience, or otherwise doesn't live up to our standards of where we want this UI to end up the team should generate follow-up [Deferred UX](/handbook/product/ux/performance-indicators/#deferred-ux) issues to be addressed in the next upcoming milestone(s).

If a quad member remains concerned and in strong disagreement with the decision made by the PM DRI, the quad member should exercise our [disagree, commit, and disagree value](/handbook/values/#disagree-and-commit), by initiating an [escalation](/handbook/leadership/#effective-escalations) to bring in management layers above into the decision.

Results are the most important aspect to consider for the business and our users. If there is a perceived risk to potentially harm the business financially, reduce customer satisfaction or value, or lead to legal trouble, teammates are empowered to seek an alternative perspective for the product decision. Within the Product Division, we recommend escalating first to the management layer immediately above where the disagreement is happening for input and further escalating to PLT and ultimately the Chief Product Officer.

#### What if your team doesn't have a designer?

Product Designer assignments are listed in the team.yml file. Unfortunately, we are currently unable to assign a dedicated Product Designer for every group. Instead, Product Designers are assigned to the areas of highest business priority and will continue to provide focused support to those priorities throughout the year. Due to the limited capacity, we are also not able to do UX reviews on MRs for groups without a designer.

If there isn't a designer listed for a group, then that team is expected to be self-sufficient in taking responsibility for the design needs of their product area. Product Design does not have the capacity to review complex proposed design solutions or provide design solutions for unsupported groups.

If you have questions or need support you can do so in the following ways:

- PMs who need to create designs can request access to Figma by creating an [Access Request issue](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new). **Note:** We cannot grant an Editor seat by requesting an upgrade within Figma. An access request issue is required.
- Review and follow the [Pajamas guidelines](https://design.gitlab.com/).
- If you have a small design question, or the Pajamas guidance is not clear, reach out via the `#ux` or `#ux_coworking` Slack channel.
- If you have a Community Contribution MR that needs a design review, follow the process for [MR Reviews for Groups without a Designer](/handbook/product/ux/product-designer/mr-reviews/#what-if-a-team-doesnt-have-a-designer).

### Working with Product Management external to the company

Here are some practices for how PMs work with groups outside of GitLab.

#### Working with community contributors

Product managers are the DRI for their group's [product direction](/handbook/product/product-processes/#managing-your-product-direction)
which must include delivering on our greater company strategy of [dual flywheels](/handbook/company/strategy/#dual-flywheels).
[Community contributions](https://about.gitlab.com/community/contribute/) are a critical
part of the product direction.
To support contributions product managers may consider the following guidelines:

1. Aim to review and respond to community contributions within 4 working days- see [review response SLO](/handbook/engineering/workflow/code-review/#review-response-slo).
   Contributions for well-defined `~direction` or `%Backlog` issues will be prioritised.
1. For contributions that impact user experience, following the [contribution guidelines](https://about.gitlab.com/community/contribute/),
   the Product Designer for the group should review the MR and provide feedback on the MR.
1. For contributions that are for features we do not want in the product (either because
   of conflicts with our product direction, poor UX, maintenance concerns, or security reasons)
   the Product Manager should review the MR and provide feedback on the MR so the contributor
   understands this feature is not being accepted by GitLab.
1. If not involved earlier, tag the PM of the group reviewing the MR before merging the MR.
   This is to ensure that the PM stays informed about changes affecting their area and to
   allow them communicate the change via a release post, if necessary.
   Remember to practice our CREDIT values when communicating with contributors.
