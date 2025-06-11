---
title: Support Team Handbook
description: The GitLab Support Team Handbook is the central repository for why and how we work the way we do.
---

## Welcome to the GitLab Support Team Handbook

The GitLab Support Team provides technical support to GitLab.com and Self-Managed GitLab customers. The GitLab Support Team Handbook is the central repository for why and how we work the way we do.

| If you are | Your Need | Where You Should Look |
| ---------- | --------- | --------------------- |
| A customer, or an advocate for a customer | Technical assistance | Public [Support Page](https://about.gitlab.com/support/), which describes the best way to get the help you need and lists GitLab's paid service offerings |
| GitLab team member | Technical assistance | [Internal Support for GitLab Team Members page](internal-support) |
| New Support Team member | Onboarding / Learning | [Support Engineer Responsibilities](/handbook/support/support-engineer-responsibilities) page and [Support Learning Pathways](/handbook/support/training/) |
| New Support Manager | Onboarding / Learning | [Support Manager Responsibilities](/handbook/support/managers/manager-responsibilities) page and [Support Manager Pathways](/handbook/support/training/#support-manager-onboarding-pathway) |

Know someone who might be a great fit for our team? Please refer them to the job-family descriptions below.

- [Support Engineering Job Family](/job-families/engineering/support-engineer/)
- [Support Management Job Family](/job-families/engineering/support-management/)
- [Support Operations Job Family](/job-families/engineering/support-readiness-specialist/)

## What does the Support Team do?

### We care for our customers

- Always assume you are the person responsible for ensuring success for the customer.
- When supporting a customer, any issue, incident or loss is *GitLab's loss*.
  - When a customer experiences trouble or downtime, take action with the same urgency you'd have if GitLab were experiencing downtime.
  - When a customer is losing productivity, take action with the same urgency you'd have if GitLab were losing productivity.
  - A customer with 2,500 users whose instance is down, gets the same urgency as if GitLab were losing $1,000,000 per day.
- Escalate early. Visibility across GitLab, up to and including the CEO, is always better earlier rather than later. Ensure all resources needed are on the case for customers early.

Remember, as members of the support team we are the first to interact with someone when they have a problem or question. As such it is up to us to represent the company and make sure we present ourselves properly. Therefore we are expected to:

- Always be friendly and respectful.
- Be open to new ideas and points of view.
- Be OK if you don't know something. You can always ask someone else.
- Be comfortable saying no to a customer (but try to suggest a workaround and escalate to a Senior if necessary).

#### We are not commissioned or bonused

Our goal is to provide guidance that will lead to the best results for our customers as they use GitLab. In that, we will often point to documentation, product functionality, or open bugs/feature requests.
However, there are times when customers will be best served through one of our commercial offerings.

Support is part of the [Engineering Department](/handbook/engineering/) and Support Engineers are not commissioned or bonused for upsell for additional services, customer purchases, or lead generation.
If you recommend [Professional Services](https://about.gitlab.com/services/) or moving to a different tier or offering you may link to this section in your recommendation to give the customer assurance you're doing so with no mixed motivations.

### Our role within GitLab

GitLab Support is part of the [Engineering division](/handbook/engineering/).
While most engineering departments are part of the R&D [cost center](/handbook/finance/financial-planning-and-analysis/#cost--reporting-structure),
Support is part of the Cost of Sales (or sometimes Cost of Goods Sold (COGS)) cost center.

This unique arrangement is expressed in our [Key Performance Indicators](/handbook/support/performance-indicators/),
which are largely focused around pursuing customer success and satisfaction
while driving efficiency by increasing output while keeping costs within a
predefined range.

This is also why [Support Engineer responsibilities](/handbook/support/support-engineer-responsibilities)
include contributing code and documentation and working alongside Product
Managers on our products: By using the knowledge gained from interacting with
our customers to make our products or docs better, we solve problems before
they become one. This reduces support case load while increasing efficiency for
the wider GitLab organization. For example, the Sales department can rely on
our docs to answer customer queries instead of leaning on Support or Customer
Success for help, freeing up more time to close sales.

#### Building customer empathy

Part of Support's role is to amplify the voice of the customer. One way of doing this is inviting other GitLab team members into
experiences that will help them understand customer challenges with the product or our own obstacles in helping customers overcome those challenges.

Before you start, make sure you get [light-agent access in Zendesk](/handbook/support/internal-support/#viewing-support-tickets) so that you can view Support tickets.

If you're looking to get more exposure to customers, there are a few ways to get involved with Support:

##### Support Shadow Program

GitLab team members interested in learning about the GitLab Support team and our responsibilities are encouraged to participate in the Support Shadow Program. The Support Shadow Program is a way that team members outside of Support can spend time shadowing, learning, collaborating, and working together with the GitLab Support team.

If you're not part of the Support team and you'd like to participate in this program, open [a Support Shadow Program issue](https://gitlab.com/gitlab-com/support/support-team-meta/-/issues/new?issuable_template=Support%20Shadow%20Program) in the `support-team-meta` project. This issue will be used to organize, plan, and track progress toward this program.

GitLab Support uses Calendly to facilitate scheduling Shadow pairing sessions with participants. If you're part of the Support team and you'd like to volunteer to host Support Shadow Pairing sessions with folks outside of Support, please [open a Schedule update request issue](https://gitlab.com/gitlab-com/support/support-ops/other-software/calendly/-/issues/new?issuable_template=Schedule%20update%20request) requesting that Support Ops add you to the Support Shadow Program Calendly rotation.

##### Join Support Calls

Support calls are published on the [GitLab Support Calendar](#google-calendar). There are:

- **Customer calls** between customers and engineers. The description will include a ticket ID. Go to `https://gitlab.zendesk.com/agent/tickets/<id>` to view the ticket.
- **Pairing sessions** between two or more engineers working on one or more tickets.
- **Office hours / Help sessions** where more experienced Support engineers share their knowledge.
- **Training sessions** where a member of the support team is presenting on a specific topic

##### Join an Emergency Call

A great way to get involved is to join a customer emergency call. You can monitor `#support_self-managed` for PagerDuty alerts. Alternatively,
if you have access to PagerDuty you can be scheduled into a [shadow rotation](/handbook/support/on-call/#your-first-on-call-shift).

### How our team helps fellow team members at all levels -- Helping Hierarchy

If you go through the responsibilities for each role in Support you can piece together how the organization works. We wanted to make a simple clear way to think about how the roles work together to solve problems:

- Support Engineers help solve customer problems via tickets, merge requests, and other customer facing activities.
- Managers help solve Support Engineer problems by removing obstacles, joining in on customer facing activities, and working with support engineers to build systems that work to reduce friction and enable results and efficiency.
- Senior Leaders help resolve and avoid scaling problems by addressing team performance to KPIs, prioritizing initiatives and being responsible for the achievement of global results.
- VP of Support helps resolve and avoid company wide problems, by identifying growth and team design challenges, and reporting on progress to the Executives and Board.

This simple list helps to give an easy way to set expectations and align problem solving in different roles.

### How we measure our performance

We use [Key Performance Indicators](/handbook/support/performance-indicators/) (KPIs) to keep track of how well each Engineering Department is doing, including the Support team, as a whole.

The KPI measurements can be found under the `Reporting` tab in Zendesk if you have the appropriate access, but progress on meeting these KPIs is also tracked via the aforementioned KPI link.

We review these KPIs weekly in the [Support Week-in-Review](/handbook/support/#support-week-in-review).

#### Our Success Pillars

In service of achieving our KPIs and OKRs, there are three key pillars that we must balance to achieve success:

- People: Continue to hire excellent engineers and managers, at the right time, and the right places. Support our existing engineers and work with each team member towards realizing their full potential through professional development and smart tooling.
- Process: Iterate on existing processes and develop new, simplified processes that enable global scaling.
- Performance: People understand how their contributions help the global team attain our results, with guidance on what these contributions look like in practice.

At various times it's easy to over-optimize on one of the pillars to solve a problem, but considering all three is key to avoiding short-sighted decision making.

### About the Support Team

The [Single Source of Truth](/handbook/company/culture/all-remote/remote-work-glossary/#single-source-of-truth-ssot)
for information about Support Team Members - everything from email address and
personal interests to product skills and group memberships - is the
[support-team project](https://gitlab.com/gitlab-support-readiness/support-team).
The [Support Team Home Page](https://gitlab-support-readiness.gitlab.io/support-team/) is
built from the information in that file. Many other Support tools and
automations make use of it also. See the
[Support team entry page](https://gitlab.com/gitlab-support-readiness/support-team/-/wikis/Support-team-entry)
of the [Support Team wiki](https://gitlab.com/gitlab-support-readiness/support-team/-/wikis/home)
for details of the structure of the file.

Information for and about the different parts of the Support Team can be found in the following sections of the Support Handbook:

- [/support/engineering](/handbook/support/engineering/) is content that is for Support Engineers. Think: Zendesk workflows and technical resources.
- [/support/license-and-renewals](/handbook/support/license-and-renewals/) is content for the Licensing and Renewals Support Engineers and Managers. Think: [customers.gitlab.com](https://customers.gitlab.com) and working with the Fulfillment Product Team.
- [/support/managers](/handbook/support/managers/) is content that is for Support Managers. Think: how to manage issues, run 1:1s and leadership sync information.
- [/support/readiness](/handbook/support/readiness/) is the landing page for Support Readiness. Think: how is the support team preparing for X?
  - [/support/support-ops](/handbook/support/readiness/operations/) is content that is for Support Operations. Think: how to change Zendesk forms and fields, and other ops details.

Below we also have some commonly referenced pages:

- [Support Engineer responsibilities](/handbook/support/support-engineer-responsibilities)
- [Support Engineer knowledge areas](/handbook/support/workflows/knowledge_areas)
- [Support Engineer career path](/handbook/support/support-engineer-career-path)
- [Support Manager responsibilities](/handbook/support/managers/manager-responsibilities)

---

## FY25 Direction

GitLab Support's vision is to deliver a consistent, "delightful" experience to our customers. Our team members will collaborate across all timezones to seamlessly deliver the results our customers care about while continuing to strengthen and scale the team.

The overall direction for Support in FY25 will continue to build from the foundations laid in FY24. We will continue to focus on KPI achievement and evolve and iterate our approach to support, keeping the customer centered in our outcomes. Following on to the company's overall [strategic objectives](/handbook/company/strategy/), specific areas of focus are:

- [Our ability to achieve business aligned results for our customers](#improving-our-ability-to-achieve-results-for-our-customers)
- [How our team structure supports that ability](#team-structure-and-how-it-supports-our-ability-to-achieve-results)
- [Maintaining and augmenting the culture of our team](#team-culture-and-how-it-supports-our-ability-to-achieve-results)
- [Delighting our customers](#delight-our-customers)

While our [publicly visible OKR page](/handbook/company/okrs/) and [Key Performance Indicators](/handbook/support/performance-indicators/#key-performance-indicators) reflect the focus and progress for the current quarter, the following provides more detail on the items included in the themes for the entire FY25.

### Improving our ability to achieve results for our customers

FY24 was a challenging year in many aspects. As the workload and customer expectations grew, we needed to look at how we could improve efficiency and create a differentiated Support experience. FY25 is a year to focus and align on our customer needs and put our customers at the center of our understanding of their situations, perceptions, and expectations. To that end, we will:

- Iterate our support model, keeping our customer experience and business vision at the forefront of our decision making.
- Adopt a prioritization strategy incorporating our customers' business impact and GitLab business need, while building an understanding within the Support team for the why behind it.
- Examine and shape the macro and micro trends in group performance and individual efficiency.
- Build a compelling customer digital support experience that will improve the customer journey and reduce toil for our team.

### Team structure and how it supports our ability to achieve results

In FY23 / FY24 we moved towards dividing the team into globally distributed groups of engineers. In FY25 we'll build on that foundation and extend towards differentiating support offerings to better align with customer requirements. This year, we will:

- Progress enhanced support offerings while partnering more closely with the Customer Success Team to meet our customers' business needs.
- Improve how we route and address customer tickets to an appropriate expert with a mind for growing individual engineers from just starting their support journey to complete stewardship of the support journey experience.

### Team culture and how it supports our ability to achieve results

As GitLab grows, Support's influence within the company as advocates for customers must also grow. We need to continue to strengthen the Values-driven cultural attributes that promote efficient collaboration and results for customers while maintaining GitLab Support as a great place to work. In FY25 we will:

- Build leaders and influencers within GitLab as advocates for customers.
- Expand our enablement, training, and education to prepare the current and future generations of Support Engineers to meet the needs of our customers.

### Delight our customers

FY24 was a year of better understanding the needs of our customers. In FY25 we will focus on *delighting* them. We will:

- Pair with our customers and train engineers in setting and exceeding customer expectations.
- Improve our ways to serve customers and resolve their problems before a ticket is even opened while keeping that context to enrich tickets for Support Engineers if a ticket *is* needed.
- Improve our understanding of Support Delivery Quality and how we can consistently provide world class service.

---
{{% include "includes/we-are-also-product-development.md" %}}

## Dogfooding in Support

Citing our [dogfooding](/handbook/values/#dogfooding) operating principle, people sometimes ask why GitLab Support doesn't use [Service Desk](https://docs.gitlab.com/user/project/service_desk/).

Dogfooding is using a piece of GitLab *for its intended purpose*. For example, one *could* use GitLab issues as a newsletter (and we do! See: [Support Week in Review](#support-week-in-review)), but creating merge requests to help Issues serve as a newsletter more effectively wouldn't be dogfooding unless that improvement also helps its core use case.

In other words: Dogfooding is using the product in the way that our customers would use it to the end of discovering and solving pain points that they have. Dogfooding supports [customer results](/handbook/values/#customer-results).

At GitLab Support we use Service Desk to process [Personal Data Requests](/handbook/legal/privacy/gdpr/), but not for our global support because the customer for Service Desk is primarily small teams soliciting [*bug reports, feature requests, or general feedback*](https://docs.gitlab.com/user/project/service_desk/). Through our use of Service Desk in this smaller setting we've been able to influence product direction towards adding features like [internal notes](https://docs.gitlab.com/user/discussions/#add-an-internal-note).

We continually evaluate product features for use-cases within Support and provide feedback and feature requests where blockers exist. Support will always prioritize [customer results](/handbook/values/#customer-results) over any other consideration.

## OKRs

### Current Quarter

These were previously populated via a tool we are no longer using.
TODO: Replace with current GitLab implementation

### Previous Quarter

These were previously populated via a tool we are no longer using.
TODO: Replace with current GitLab implementation

## Hazards and Challenges

See [Managers/Hazards page](/handbook/support/managers/hazards-and-challenges)

## Communications

The GitLab Support Team is part of the wider Engineering function. Be sure to check the
[communications section in the Engineering handbook](/handbook/engineering/#communication)
for tips on how to keep yourself informed about engineering announcements and initiatives.

Here are our most important modes of communication:

- [Support Week in Review](#support-week-in-review). Important updates for everyone in support.
The SWIR is expected reading/listening for all support team members. You should try to check the SWIR at least once a week. If you have something to share with the entire team this is the best place to do it. For example, if you have an issue for a common bug, an issue that requires feedback, or an issue about an external project you're working on.
- [Slack channels](#slack) for ["informal"](/handbook/communication/#slack) communication.
Due to our data retention policy in Slack, things shared there will eventually be deleted. If you want to share something there, please make sure it also has a more permanent place in our docs, handbook, issue tracker, etc.
- [Meta issue tracker](https://gitlab.com/gitlab-com/support/support-team-meta/issues/) for any issues regarding workflows,
general team suggestions, tasks or projects related to support, etc.

Where we want to ensure that important messages are passed to the global support team, we will use this [messaging template](https://gitlab.com/gitlab-com/support/managers/leadership-sync/-/blob/master/.gitlab/issue_templates/support-message-plan.md). This ensures that these messages are delivered across our communications channels in a structured and documented manner.

### GitLab.com

#### Groups

We use the following GitLab Groups to notify or add support team members to issues and merge requests on
GitLab.com.

| Group | Who |
| ----- | --- |
| [@gitlab-com/support](https://gitlab.com/groups/gitlab-com/support/-/group_members?with_inherited_permissions=exclude&sort=last_joined) | All Support Team members |
| [@gitlab-com/support/amer](https://gitlab.com/groups/gitlab-com/support/amer/-/group_members?with_inherited_permissions=exclude&sort=last_joined) | AMER Support |
| [@gitlab-com/support/apac](https://gitlab.com/groups/gitlab-com/support/apac/-/group_members?with_inherited_permissions=exclude&sort=last_joined) | APAC Support |
| [@gitlab-com/support/emea](https://gitlab.com/groups/gitlab-com/support/emea/-/group_members?with_inherited_permissions=exclude&sort=last_joined) | EMEA Support |
| [@gitlab-com/support/dotcom](https://gitlab.com/groups/gitlab-com/support/dotcom/-/group_members?with_inherited_permissions=exclude&sort=last_joined) | Support members with primary SaaS focus and GitLab.com admin access |
| [@gitlab-com/support/dotcom/console](https://gitlab.com/groups/gitlab-com/support/dotcom/console/-/group_members?with_inherited_permissions=exclude&sort=last_joined) | Support members with GitLab.com console access |
| [@gitlab-com/support/customers-console](https://gitlab.com/groups/gitlab-com/support/customers-console/-/group_members?with_inherited_permissions=exclude&sort=last_joined) | Support members with CustomersDot console access |
| [@gitlab-com/support/licensing-subscription](https://gitlab.com/groups/gitlab-com/support/licensing-subscription/-/group_members?with_inherited_permissions=exclude&sort=last_joined) | Support members focused on License and Renewals |
| [@gitlab-com/support/managers](https://gitlab.com/groups/gitlab-com/support/managers/-/group_members?with_inherited_permissions=exclude&sort=recent_last_activity) | All support managers |
| [@gitlab-com/support/managers/amer](https://gitlab.com/groups/gitlab-com/support/managers/amer/-/group_members?with_inherited_permissions=exclude&sort=recent_last_activity) | All AMER support managers |
| [@gitlab-com/support/managers/apac](https://gitlab.com/groups/gitlab-com/support/managers/apac/-/group_members?with_inherited_permissions=exclude&sort=recent_last_activity) | All APAC support managers |
| [@gitlab-com/support/managers/emea](https://gitlab.com/groups/gitlab-com/support/managers/emea-managers/-/group_members?with_inherited_permissions=exclude&sort=recent_last_activity) | All EMEA support managers |

#### Projects

Our team projects and issue trackers can be found in the [Support parent group](https://gitlab.com/gitlab-com/support). Here are some selected projects
which are relevant to team communications.

| Project | Purpose |
| ------- | ------- |
| [support-team-meta](https://gitlab.com/gitlab-com/support/support-team-meta) | Issues to discuss and improve Support processes |
| [support-training](https://gitlab.com/gitlab-com/support/support-training) | Courses and training for Support team including onboarding |
| [support-pairing](https://gitlab.com/gitlab-com/support/support-pairing) | Record of pairing sessions where we work together on tickets |
| [feedback](https://gitlab.com/gitlab-com/support/feedback) | Collects SSAT survey responses from Zendesk in the form of issues |
| [support-operations](https://gitlab.com/gitlab-com/support/support-ops/support-ops-project) | Support Operations team project |
| [support-readiness](https://gitlab.com/gitlab-com/support/readiness/) | Support Readiness project |

##### Support team meta issue tracker

We use the [Support meta issue tracker](https://gitlab.com/gitlab-com/support/support-team-meta/issues) for tracking issues
and creating issues that may require feedback around support.

If you're interested in working on a project or task related to
support feel free to create an issue and link to any external issues or projects so that we can:

- Be transparent to the entire team what we're working on
- Have the opportunity to collaborate on external projects or tasks with other team members who are interested
- Avoid having team members do duplicate work

Issues regarding documentation or features for GitLab, our FOSS project or any of the GitLab
components should not go in this issue tracker, but in their appropriate issue tracker.

If you have a proposed solution that is actionable, it's best to [start a merge request](/handbook/communication/#start-with-a-merge-request), tag the team for feedback and link in the [Support Week in Review](#support-week-in-review).

### Slack

We follow GitLab's [general guidelines for using Slack](/handbook/communication/#slack)
for team communications. As only 90 days of activity will be retained, make sure
to move important information into the team handbook, product documentation,
issue trackers or customer tickets.

#### spt_vs. support_ prefix

When naming channels, "spt" is meant for internal channels, meaning those that will be of use to the Support Team mainly. They should be public so others may join if they choose. If a channel has a "support" prefix, it is meant as a public interface where other teams will interact with the Support Team.

#### Daily Stand-up bot

The [Support Daily Slackbot](https://gitlab.com/gitlab-com/support/toolbox/support-daily-slackbot)
is an automated tool designed to facilitate daily standup Slack threads across
various teams and regions at GitLab. It posts customized messages to specific
Slack channels based on type and target. For further details of the different
variations, please refer to the [README file](https://gitlab.com/gitlab-com/support/toolbox/support-daily-slackbot/-/blob/main/README.md?ref_type=heads).

#### Channels

| Channel | Purpose |
| ------- | ------- |
| [#support_team-chat](https://gitlab.slack.com/archives/CCBJYEWAW) | Support team lounge for banter, chat and status updates |
| [#support_gitlab-com](https://gitlab.slack.com/archives/C4XFU81LG) | Discuss GitLab.com tickets and customer issues |
| [#support_self-managed](https://gitlab.slack.com/archives/C4Y5DRKLK) | Discuss self-managed tickets and customer issues |
| [#support_gitlab-dedicated](https://gitlab.enterprise.slack.com/archives/C058LM1RL3V) | Discuss GitLab Dedicated tickets and customer issues |
| [#support_licensing-subscription](https://gitlab.slack.com/archives/C018C623KBJ) | Discuss Licensing & Renewals tickets and customer issues |
| [#support_ticket-attention-requests](https://gitlab.slack.com/archives/CBVAE1L48) | Discuss escalated tickets with the Support Manager On-Call |
| [#support_operations](https://gitlab.slack.com/archives/C018ZGZAMPD) | Discuss operational items related to how Support works |
| [#support_leadership](https://gitlab.slack.com/archives/C01F9S37AKT) | Discuss support team internal matters which require support managers' attention |
| [#recruiting-support-engineering](https://gitlab.slack.com/archives/CE9S6JW4S) | Discuss support team hiring-related matters |
| [#spt_amer_global](https://gitlab.enterprise.slack.com/archives/C07EYM9NNE4) | Discuss topics specific to Global SEs in AMER |
| [#spt_emea](https://gitlab.enterprise.slack.com/archives/C07N48KHCR0) | Discuss topics specific to Global SEs in EMEA |
| [#spt_apac](https://gitlab.enterprise.slack.com/archives/C07EJ2L3P7E) | Discuss topics specific to Global SEs in APAC |
| [#spt_pairing](https://gitlab.slack.com/archives/C03UW0HPBGD) | Used when working together on tickets and issues |
| [#spt_us-government](https://gitlab.slack.com/archives/C03RTN3JEJ2) | Discussion about topics pertaining to US Fed Support |

##### Private Channels

At GitLab we are to be [public by default](/handbook/communication/confidentiality-levels/#not-public) unless there is a valid reason for it to not be public. While Slack
is not public, the spirit of opening up discussions so that *everyone can contribute* means that private channels should be kept to a minimum.

The following private channels are permanent fixtures in support. Usage estimates are approximate based on traffic in Feb 2022.

| Channel | Who is in it | Purpose | How often is it used?  |
| ---- | ---- | ---- | ---- |
| `#spt-vp-directors` | Directors+ | Used for Senior leadership to discuss and coordinate on sensitive topics / budget / etc. | 3-4 threads per week |
| `#spt_managers-internal` | Managers+  | Used for sensitive topics that are applicable to managers that aren't appropriate for public channels | 4-5 threads per week |
| `#spt_managers-internal-apac` | APAC Managers+ | Used for sensitive topics that are applicable to APAC managers that aren't appropriate for public channels | 3-4 threads per week |
| `#spt_managers-emea` | EMEA Managers+ | Used for sensitive topics that are applicable to EMEA managers that aren't appropriate for public channels | 4-5 threads per week |
| `#spt_managers-amer` | AMER Managers+ | Used for sensitive topics that are applicable to AMER managers that aren't appropriate for public channels | 1-2 threads per week |
| `#spt_hiring-mgmt` | Managers+, Recruiting, Finance | Used for coordinating offers and discussing hiring specifics that can be shared in the public channel | 1-2 threads per week |
| `#fy23_support_promotions` | Managers+, People Business Partner | Used for coordinating and planning promotions in FY23 | 0 threads per week, mostly informational |
| `#spt_leadership_internal` | Managers+, Staff+ | Private version of `#support_leadership`, used for sensitive topics where Staff and Managers are the appropriate audience | rarely used |

Before starting a new private channel, ask yourself *Why **can't** everyone contribute here?* Appropriate answers might be:

- this channel will be used to discuss material, non-public information that may affect designated insider status.
- this channel will be used to discuss something that would negatively affect the privacy of an individual or group of individuals, such as performance, compensation or other sensitive matters

Private channels are not appropriate for:

- Reducing noise (create a new public channel for this)
- Long-lasting discussions (unless included in the table above)
- Getting materials ready for public comment

Values are only values if you do them when it is hard. See more discussion on [how to scale the business while preserving GitLab Values](/handbook/values/#how-to-scale-the-business-while-preserving-gitlab-values).

#### User Groups

| Group | Who |
| ----- | --- |
| `@support-dotcom` | Support Team Members with GitLab.com Admin Access |
| `@support-selfmanaged` | Support Team focused on Self-Managed tickets |
| `@support-team-apac` | Support Team APAC |
| `@support-team-emea` | Support Team EMEA |
| `@support-team-americas` | Support Team AMER |
| `@supportmanagers` | Support Managers |
| `@support-managers-apac` | Support Managers APAC |
| `@support-managers-emea` | Support Managers EMEA |

If you need to be added to one or more of these groups, please open an issue in
the [access requests project](https://gitlab.com/gitlab-com/access-requests).

### Google Calendar

We use the following team calendars to coordinate events and meetings:

- [GitLab Support](https://calendar.google.com/calendar/embed?src=gitlab.com_9bs159ehrc5tqglur88djbd51k%40group.calendar.google.com) Calendar ID `gitlab.com_9bs159ehrc5tqglur88djbd51k@group.calendar.google.com`
- [Support - Time off](https://calendar.google.com/calendar/embed?src=gitlab.com_as6a088eo3mrvbo57n5kddmgdg%40group.calendar.google.com) Calendar ID `gitlab.com_as6a088eo3mrvbo57n5kddmgdg@group.calendar.google.com`
- [Support - Customer Events](https://calendar.google.com/calendar/embed?src=c_8d5a8e9b8c3fc74901bad1799b18e8eafc9e499f7805f9c82f79f9d1e1f9ac4b%40group.calendar.google.com) - EXPERIMENTAL: see [support-team-meta#5153](https://gitlab.com/gitlab-com/support/support-team-meta/-/issues/5153)

Add these calendars to your GitLab Google calendar by clicking on the "+" sign next to "other calendars", and choose "subscribe to calendar". Enter the relevant ID mentioned above. If you need access to these calendars, ask a support team member for help.

### Zoom

#### Zoom name format

Please use the following formats for your name in Zoom as described in [adding your title to your name in Zoom](/handbook/tools-and-tips/zoom/#adding-your-title-to-your-name). As a primarily customer facing team, these formats were chosen to help identify you by vendor and role in calls
where customers are present.

For the sub-department, use the smallest unit you belong to. Again, bias for customer understanding over technical correctness.

For example,

- Customer Support -> Support Engineering (use Support Engineering)
- Customer Support -> Support Readiness -> Support Operations (use Support Operations)
- Customer Support -> Support Engineering -> US Federal Support (use US Federal Support)

##### Examples

- Intermediate Support Engineer: `Name | Support Engineer | GitLab` - `Luciana de Santos | Support Engineer | GitLab`
- Support Readiness Specialist - Ops: `Name | Support Ops Specialist | GitLab`  - `Barka Adamec | Support Ops Specialist | GitLab`
- Senior Support Engineer:  `Name | Sr. Support Engineer | GitLab`  -  `Shen Hua Li | Sr. Support Engineer | GitLab`
- Staff Support Engineer: `Name | Staff Support Engineer | GitLab` - `Jabulani Achebe | Staff Support Engineer | GitLab`
- Support Manager: `Name | Manager, Sub-department | GitLab` - `Sneha Sharma | Manager, Support Operations | GitLab`
- Senior Support Manager: `Name | Sr. Manager, Sub-department | GitLab` | `Joo Hee Ko | Sr. Manager, US Federal Support | GitLab`
- Director: `Name | Director, Sub-department | GitLab` | `Noémie Blanchet | Director, Support Engineering | GitLab`
- Vice President: `Name | VP, Department | GitLab` - `Kalina Nowak | VP, Customer Support | GitLab`

### Weekly Meetings

The Support Team has several meetings each week. These allow us to coordinate and
help us all grow together. Each meeting has its own agenda and is led by a different member of the team each week.

Discussions are encouraged to be kept in issues or merge requests so the entire team can collaborate, regardless of time zone.

Any demos or announcements that need to be shared with the entire team should be shared in the [Support Week in Review](#support-week-in-review).

All Zoom and agenda links can be found on the relevant calendar entry in the [Support Calendar.](/handbook/support/#google-calendar).

#### Support Team Call

Support team members in some regions meet up regularly.
Details of these calls are on the [Weekly Support Team Call workflow page](/handbook/support/workflows/team/weekly_team_call).

#### Support Leadership Meetings

The Support management team meets regularly. Details of these calls are on the [Support Managers page](/handbook/support/managers)

#### Support Regional Team Meetings

Some regional Support teams have meetings oriented around company news, Support initiatives, training plans, and connectedness.

| Weekday | Region | Meeting Name | Purpose |
| :-----: | :----: | :----------: | :-----: |
| Wednesday | EMEA | Weekly News | For team members reporting to Rebecca S |

#### Senior Support Engineer Office Hours

Senior and Staff Support Engineers are encouraged to host office hours. These office hours are intended to strengthen
the team through mentoring. It is up to each Senior/Staff Support Engineer whether they schedule office hours, and how
often. Please see the "GitLab Support" Team calendar to view office hours and invite yourself.

We encourage hosts to include what they will cover in the calendar event description and optionally a document to track.

Some ideas of what one can expect at a Senior/Staff Support Engineers' office hour:

- Troubleshooting a difficult ticket
- Trying out a GitLab feature (Geo, CI, SAST, k8s, etc.) or a new workflow
- Reproducing a particular bug
- Fixing a bug
- Creating or updating documentation
- Thinking through a particular problem
- Hosting a ticket crush session

### Creating a Meeting

You may wish to host a sync call. To do so, you can create an event on the [Support Calendar.](/handbook/support/#google-calendar). To invite team members to the event, you can use the appropriate [Support email alias](https://internal.gitlab.com/handbook/support/#support-email-aliases) (internal Handbook, GitLab team members only)

### Support Week in Review

Every Friday, we do a week in review, inspired by the [greater Engineering organization week in review](https://drive.google.com/drive/u/0/search?q=type:document%20title%20%22Engineering%20week-in-review%22).  You can add topics any time by using the SWIR [topic form](https://gitlab-com.gitlab.io/support/toolbox/forms_processor/SWIR/).

Any workflow changes or announcements should be shared in the SWIR and we recommend you check at least once a week to stay up to date on recent changes. Ideally, the information shared here should have a permanent location such as an issue or merge request.

#### How to read/listen to the SWIR

- You can read the Support Week in Review by viewing the [more recent issue](https://gitlab.com/gitlab-com/support/readiness/support-week-in-review/-/issues/?sort=created_date&state=all&label_name%5B%5D=SWIR%3A%3ADigest&first_page_size=20) with the `SWIR::Digest` label in the [SWIR project](https://gitlab.com/gitlab-com/support/readiness/support-week-in-review).
- You can subscribe to this label to be notified when the latest SWIR has been generated.
- For audio editions recorded after 2022/07/01, you can find a link to the audio edition of the SWIR within the respective issue (this is so we comply with the [SAFE framework](/handbook/legal/safe-framework/). An archive of all audio editions can be found in the [Support Week in Review - Audio Edition folder](https://drive.google.com/drive/search?q=support%20week%20in%20review%20-%20audio%20edition) on Google Drive (internal only).

We encourage anyone in the team to share.

#### SWIR Topics

We currently have the following topics, each in its own section in the SWIR:

- **Actionable**. For items that require a decision to be made or action to be taken (such as, asking for feedback on an issue).
- **Things to know about**. Share items that you would like to share with the team, like projects you're working on, known bugs, new workflows, cool articles you found, etc.
- **Team Member updates**. New team members, internal transfers and nother news about our team members!
- **What Did we Learn this Week**. A space to share things you've discovered (or rediscovered!) and learnt.
- **Support Operations Corner**. Announcements and information from the Support Operations team
- **Kudos**. Give a special kudos to other team members or highlight something they did.
   -**SSAT**. A selection of the positive SSAT feedback received from customers during the week
- **Metrics report**. Review the support metrics for the span of the week.

#### SWIR Labels

SWIR Issues can also have their own Tags or Labels in the GitLab project. These are used to highlight specific Areas of Focus (L&R, SaaS...). Labels are used on the Issues only, they do not appear in the digest Issue nor in the Google doc.

One label, `Manager Attention`, is used for policy changes or other topics of
which Support Managers should specifically be made aware. You can find the
`Manager Attention` label
[here](https://gitlab.com/gitlab-com/support/readiness/support-week-in-review/-/labels?search=manager+attention)]
and subscribe to it.

You can read about the origins of the auto-generated SWIR [in this issue](https://gitlab.com/gitlab-com/support/support-team-meta/issues/1394).

### Cross-Department Roles

The Support Team collaborates with many other departments throughout GitLab -
Sales, Channel, Product and Legal, to name a few. And we have created two
different roles to help those collaborations to be as effective and efficient
as possible.

#### Support Stable Counterpart

The Support Stable Counterpart role is designed to provide a strong connection
between a product or non-product team and Support. The purpose is discussing
product issues, sharing product knowledge and representing customer needs, as
well as sharing knowledge about each team's work and developing processes and
documentation to allow the two teams to work together well. If you are interested
in becoming a Support Stable Counterpart, or would like to learn more about the
role, read the
[Support Stable Counterparts](/handbook/support/support-stable-counterparts)
page.

## Processes

### Updating Support Team documents using merge requests

The Support Team records our institutional knowledge, processes and workflows
in multiple places, such as the handbook and project issues templates. When
updating such documents, make sure to have visible artifacts of approval on
your merge requests before merging even if you have received approval somewhere
else. This avoids the impression of changes being made without any oversight
or accountability.

Artifacts of approval can include:

- Getting a peer or manager to review and merge your MR
- A peer or manager showing their approval using [MR approvals](https://docs.gitlab.com/user/project/merge_requests/approvals/)
- A peer or manager commenting "looks good to me"

### Support Workflows

- [Support Workflows](/handbook/support/workflows)
  - [Internal Policies and Procedures Wiki](https://gitlab.com/gitlab-com/support/internal-requests/-/wikis/home)
  - [How to Work with Tickets](/handbook/support/workflows/working-on-tickets)
  - [How to Submit issues to Product/Development](/handbook/support/workflows/working-with-issues)
  - [How to Submit Code to the GitLab Application](https://gitlab.com/gitlab-org/gitlab-ce/blob/master/CONTRIBUTING.md)
  - [How to Submit Docs when working on customer issues](https://docs.gitlab.com/development/documentation/styleguide/#docs-first-methodology)
- [License & Renewals Workflows](/handbook/support/license-and-renewals/workflows)

### Slack Workflows

Each Slack channel within Support has a number of [Workflows](https://slack.com/help/articles/360035692513-Guide-to-Workflow-Builder) attached to them that are used to provide information to users. The source files for each workflow live in the [slack-workflows](https://gitlab.com/gitlab-com/support/toolbox/slack-workflows) project.

#### Issue Notification

Some workflows are meant to notify the team of new issues created in the relevant project.
In these cases, a [project webhook](https://docs.gitlab.com/user/project/integrations/webhooks/) passes information to [Zapier](https://zapier.com/app/zaps/folder/210292),
which then sends the information to a Slack workflow.

- `#support_gitlab-com`
  - CMOC [GitLab Project](https://gitlab.com/gitlab-com/support/dotcom/cmoc-handover/), [Zap](https://zapier.com/app/zap/100087156), [Slack workflow](https://gitlab.com/gitlab-com/support/toolbox/slack-workflows/-/blob/master/cmoc_handover.slackworkflow)
- `#support_licensing-subscription`
  - L&R related internal requests [GitLab Project](https://gitlab.com/gitlab-com/support/internal-requests/), [Zap](https://zapier.com/app/zap/98925072), [Slack workflow](https://gitlab.com/gitlab-com/support/toolbox/slack-workflows/-/blob/master/support_licensing_subscription_internal_requests.slackworkflow)

#### Emoji Reaction

Providing information by reacting to a message with a specific emoji.

- `#support_escalations`
  - [Ticket Escalation](https://gitlab.com/gitlab-com/support/toolbox/slack-workflows/-/blob/master/support_managers_ticket_escalation.slackworkflow) - `:escalate:` - Directs the user to follow the proper procedure to escalate a support ticket or internal issue.
- `#support_gitlab-com`
  - [Ticket Escalation](https://gitlab.com/gitlab-com/support/toolbox/slack-workflows/-/blob/master/support_gitlab_com_ticket_escalation.slackworkflow) - `:escalate:` - Directs the user to follow the proper procedure to escalate a support ticket or internal issue.
  - [Question Redirect](https://gitlab.com/gitlab-com/support/toolbox/slack-workflows/-/blob/master/support_gitlab_com_question_redirect.slackworkflow) - `:leftwards_arrow_with_hook:` - Directs the user to post their question in a more appropriate Slack channel.
  - [Remove Link Preview](https://gitlab.com/gitlab-com/support/toolbox/slack-workflows/-/blob/master/support_gitlab_com_remove_link_preview.slackworkflow) - `:slack:` - Politely asks the user to remove any unfurled link previews in their message.
  - [Welcome](https://gitlab.com/gitlab-com/support/toolbox/slack-workflows/-/blob/master/support_gitlab_com_welcome.slackworkflow) - This automated workflow automatically sends a direct message to new members of the channel that contains helpful information.
  - Contact Management - `:admission_tickets:` - Direct the user to follow the proper procedure to manage the support contacts for a Zendesk Global organization.
- `#support_self-managed`
  - [Ticket Escalation](https://gitlab.com/gitlab-com/support/toolbox/slack-workflows/-/blob/master/support_self_managed_ticket_escalation.slackworkflow) - `:escalate:` - Directs the user to follow the proper procedure to escalate a support ticket or internal issue.
- `#support_licensing-subscription`
  - [Ticket Escalation](https://gitlab.com/gitlab-com/support/toolbox/slack-workflows/-/blob/master/support_licensing_subscription_ticket_escalation.slackworkflow) - `:escalate:` - Directs the user to follow the proper procedure to escalate a support ticket or internal issue.

### Time Off

*See the [Support Time Off page](/handbook/support/support-time-off)*

### Onboarding

*See the [Support Onboarding page](/handbook/support/training)*

### Promotion

After getting promoted, make sure to update your title in:

- our [Support team page](https://gitlab.com/gitlab-support-readiness/support-team), and the change would be reflected in Zendesk
- the company team page following the same steps in [Add yourself to the Team Page](/handbook/about/editing-handbook/#add-yourself-to-the-team-page)

Consider updating the title on Slack and on Zoom, following the guidelines in [Zoom name format](#zoom-name-format).

### Support Pods

In GitLab Support, we use `Support Pods` to organize support engineers as they
work. Each Support Pod is a cross-region, single skill group of engineers who
are interested in their Support Pod's specific product area. They are engineer-
lead. To join or start a Support Pod you can read more below.

*See the [Support Pods handbook page](/handbook/support/support-pods) and the [Working with Support Pods workflow page](/handbook/support/workflows/working-with-pods).*

### Improving our processes - 'Active Now' issue board

The Support team uses ['support-team-meta' project issues](https://gitlab.com/gitlab-com/support/support-team-meta/issues/) to track ideas and initiatives to improve our processes. The ['Active Now' issue board](https://gitlab.com/gitlab-com/support/support-team-meta/-/boards/580661) shows what we're currently working on. It uses three labels:

1. **Blocked** - waiting for another team or external resource before we can move ahead
1. **Discussing this week** - under active discussion to arrive at a decision
1. **In Progress** - actively being worked on

Some principles guide how these labels are used:

1. A **maximum of six issues** at any time for each label (18 total issues)
1. All issues with one of the above labels must be **assigned** to one or more support team members
1. All issues with one of the above labels must have a **due date** no longer than a week ahead
1. If an issue is too big to complete in a week it should be **split into smaller parts that can be completed in a week** (a larger 'parent' issue is OK to keep in the project, but it shouldn't make it onto the 'In Progress' column)

**Each week we look at the board and discuss the issues to keep things moving forward.**

By keeping a maximum of six issues for each label, we **limit work in progress** and make sure things are completed before starting new tasks.

**Adding and managing items on the board:**

Support managers will regularly review the board to keep items moving forward.

1. The team can **vote on issues not on the board** by giving a 'thumbs up' emoji so we can see [popular issues](https://gitlab.com/gitlab-com/support/support-team-meta/issues?sort=popularity&state=opened).
1. Support managers will look at popular issues and add them to the board when there is room.
1. Support managers will **curate** issues to prevent a large backlog. Unpopular or old issues can be closed / merged to keep the backlog manageable.

#### Support Slackbot

The [Support Slackbot (archived)](https://gitlab.com/gitlab-com/support/toolbox/gitlab-support-bot) has been retired.

## <i aria-hidden="true" class="fas fa-book fa-fw icon-color font-awesome"></i>Support Resources

### Handbook links

- [GitLab Team page](/handbook/company/team/)
- [Product Categories](/handbook/product/categories/) - Find out what team handles what
- [Statement Of Support](https://about.gitlab.com/support/statement-of-support/)
- [Support Managers](/handbook/support/managers/)
- [Support Hiring](/handbook/support/managers/hiring/)
- [Support Channels](/handbook/support/channels/)
- [On-Call](/handbook/engineering/on-call/)
- [License & Renewals](/handbook/support/license-and-renewals/)
- [Support Ops](/handbook/support/readiness/operations/)
- [Advanced Topics](/handbook/support/advanced-topics/)

### Documentation

- GitLab
  - [GitLab.com Status](https://status.gitlab.com/)
  - [GitLab Releases](https://about.gitlab.com/releases/categories/releases/)
- Writing docs
  - [GitLab Documentation guidelines](https://docs.gitlab.com/development/documentation/)
  - [Documentation Style Guide](https://docs.gitlab.com/development/documentation/styleguide/)
  - [GitLab Markdown](https://docs.gitlab.com/user/markdown/)
- Setting up GitLab
  - [GitLab Architecture Overview](https://docs.gitlab.com/development/architecture/)
  - [Requirements](https://docs.gitlab.com/install/requirements/)
  - [Installation methods for GitLab](https://about.gitlab.com/install/)
  - [Backing up and restoring GitLab](https://docs.gitlab.com/administration/backup_restore/)
  - [Omnibus configuration settings](https://docs.gitlab.com/omnibus/settings/)
  - [Omnibus Configuration options](https://docs.gitlab.com/omnibus/settings/configuration.html)
  - [Omnibus Database settings](https://docs.gitlab.com/omnibus/settings/database.html#seed-the-database-fresh-installs-only)
- Debugging GitLab
  - [Log system](https://docs.gitlab.com/administration/logs/)
  - [Rake tasks](https://docs.gitlab.com/raketasks/)
  - [Maintenance Rake Tasks](https://docs.gitlab.com/administration/raketasks/maintenance/)
  - [Debugging resources for GitLab Support Engineers](https://docs.gitlab.com/administration/#support-team-docs)
  - [GitLab Rails Console Cheat Sheet](https://docs.gitlab.com/administration/troubleshooting/gitlab_rails_cheat_sheet/)
- GitLab features
  - [Install GitLab Runner](https://docs.gitlab.com/runner/install/)
  - [GitLab CI example projects](https://gitlab.com/gitlab-examples)
  - [Elasticsearch](https://docs.gitlab.com/integration/advanced_search/elasticsearch/)
  - [Connecting GitLab with a Kubernetes cluster](https://docs.gitlab.com/user/project/clusters/)
- Developing GitLab
  - [GitLab development utilities](https://docs.gitlab.com/development/utilities/)
  - [Feature flags](https://docs.gitlab.com/development/feature_flags/)
  - [What requires downtime?](https://docs.gitlab.com/update/with_downtime/)
