---
title: How to Get Help
category: Handling tickets
description: Workflow for Support Engineers on how to get help when working on a ticket.
---

## Getting Help on a Ticket

When [working on tickets](/handbook/support/workflows/working-on-tickets), collaboration is critical, especially when troubleshooting complex issues, or technical areas of focus that fall outside of your experience level. Asking for help means having a [low level of shame](/handbook/values/#low-level-of-shame), and also shows that you are putting the customer first because you are working towards resolving their problem.

### How to Get Help Workflow

If you are stuck on a ticket, the following workflow seeks to help Support Engineers realize and utilize all of the resources available to progress a ticket to resolution. This workflow lists some common resources, you can lean on to get the help you need.

**If you’re stuck on a ticket…..**

Identify what's causing you to get stuck. Some examples are:

- I don't have the right knowledge to progress this ticket.
- The customer's query is out of scope, but they expect us to resolve this.
- There is a deep technical issue which needs a development expert's consult.

Then consider these options to help unblock you. And remember that
[escalating to unblock](/handbook/values/#escalate-to-unblock)
is an operating principle of Results.

#### Ask in your SGG

Ask in [your group's Slack channel](/handbook/support/support-global-groups/#slack) for help. You might get all the help you
   need in responses right there, or you might open up the group's Zoom room
   for an impromptu pairing session to work on the ticket. And remember:

   1. Be sure to provide a link to the ticket
   1. Be specific about the help you need
      - For example: "Kubernetes Runner help needed: user is running into X
        error, logs are saying Y, and we've tried Z. What else could it be?"

#### Bring the ticket before a group of peers

Other Support Engineers are a great resource to help out with tickets. To get help from peers, you can try one or more of the following:

1. Attend crush or help sessions such as those noted below (see the [GitLab Support calendar](https://calendar.google.com/calendar/u/0?cid=Z2l0bGFiLmNvbV85YnMxNTllaHJjNXRxZ2x1cjg4ZGpiZDUxa0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t) for times):
    - AMER Senior SE Help Sessions
    - APAC/AMER or EMEA/AMER crush sessions
    - APAC or EMEA crush / collaboration sessions
    - Senior Support Office Hours (varying times)
1. Ask for help in one of the broader
   [Support Slack channels](/handbook/support/#slack).
1. Initiate a [Branch Out session](/handbook/support/support-global-groups/branch-out-sessions)
   - This is like a crush session, with the specific intention of helping 1 or 2
     groups with FRTs

#### Expand to Support Pods and other subject matter experts

You can also do one or more of the following:

1. See if there is a [Support Pod]({{< ref "working-with-pods" >}}) that covers the area your ticket is in and ask one of the Pod members for help.
1. Ask an expert within Support. You can check the [Skills by Subject](https://gitlab-com.gitlab.io/support/team/skills-by-subject)
   Support page to see who might have the skills to assist, or reach out
   to the [Support Stable Counterpart]({{< ref "support-stable-counterparts" >}})
   for the appropriate product area. Mention those
   people in the thread and in the ticket to let them know you think they can help.
1. [Request help from the relevant GitLab Development Team](#how-to-formally-request-help-from-the-gitlab-development-team).
   Gather what information you have and fill in as much detail as possible for the dev team in the issue. To get more attention, you can post in the relevant group Slack channel with a message and link to the issue.
   If you don't get a response within the SLO, contact the listed engineering manager in the project readme.
   See [below](#how-to-formally-request-help-from-the-gitlab-development-team) for more details.
   If you have a reproducible issue, then go straight to a bug issue in the appropriate [GitLab product tracker](https://gitlab.com/gitlab-org).

#### Bring the ticket to managers

Especially if you feel you're stalled on a ticket and need assistance identifying next steps:

1. Always feel free to reach out to any available manager (such as your manager, or the [Support Manager On-call](/handbook/support/workflows/support_manager-on-call) in the `#support_leadership` channel. They will help you to determine next steps.
   - Avoid messages with no identified DRI for responding in `#support_leadership` as they can be missed or be a victim to the bystander effect.
1. [Open a STAR](/handbook/support/internal-support/support-ticket-attention-requests#submitting-a-support-ticket-attention-request-star--starring-a-ticket) in situations where getting help is urgent and important because:
   - the customer has expressed unhappiness with the service we're delivering via the ticket
   - the support engineer has noticed a correlation between several of a customers tickets that could use a more cohesive response
   - there is an urgent need for action in a different region (for example, finding a ticket owner or scheduling a call)

### How to formally Request Help from the GitLab Development Team

To enhance collaboration between the support and development teams, GitLab has implemented the Request for Help (RFH) process. This allows support engineers to formally request assistance from the specific GitLab development groups responsible for the relevant functionality when facing technical challenges that impede ticket resolution. This section outlines the necessary steps to effectively utilize the RFH process.

It's important to note that this process is part of a broader, iterative strategy aimed at deploying this workflow across all development sections and groups at GitLab. If the RFH template for a particular development group is not yet available, please reach out to [John Lyttle](https://gitlab.com/jlyttle) to initiate the creation of the required RFH template.

#### Are you requesting for Dev help too soon?

NO! To drive this point home, here's what our Devs have to say about this:

> [...] _it's almost never too soon and every dev I've talked to about it has nothing but mountains of respect for support folks [...]_

  -- **James Nutt**

> _I always love it when anyone from the support team reaches out to me. It's not a bother at all; in fact, it has given me a lot of great ideas before.I actually wrote an [article](https://medium.com/popmenu-engineering/popmenus-culture-of-cross-functional-collaboration-dcc19bba3ea9) about how working with our support team helped get good outcomes for customers at a previous company_

  -- **Lesley Razzaghian**

> _Most are happy to help anytime. My only suggestion is to search docs first. That’s really helpful for devs because we might link you to docs anyway. But then it’s also helpful to know “the docs didn’t address my question”. Or they did but not clearly enough. These conversations give all involved a basis for improving docs once the question is answered._

  -- **Drew Blessing**

> _[...] If you stumble through and figure it out, and never tell us that you (or the customer) struggled, we don't get the feedback that we need to do better (which in many cases includes prioritizing doing better). And most of us want to do better._
>
>_Personally I wish Support would escalate to devs much sooner than they do on average. If that means that we get inundated with support requests that make it hard to focus on other work, then that's a sign that we need to deprioritize other features to focus on UX and docs (which are also features)._

  -- **David Nelson**

> _I'm never annoyed by support friends reaching out. It's you + me vs the problem after all!_
_Devs love a puzzle, so I'm always keen.[...]_

  -- **Charlie Ablett**

> _If both Support and the Customer are confused about what the next steps are, at a minimum it’s an indicator that something is lacking, either in our docs or support processes, and this is an opportunity to improve those areas._

  -- **Chad Woolley**

#### How to find the correct Development Section and Group to reach out for help

The easiest way to determine the correct place for a Support Request for Help issue is to use the docs pages. One possible workflow is as follows:

1. Locate a documentation page for the feature or topic on which you need help.
1. Scroll down to the bottom of the page and click on either the "Edit this page" link.
1. This will open up the `.md` source file of that docs page, which contains both the `stage` and `group` responsible for it noted on the top.
1. Now go to the [Product Categories handbook page](/handbook/product/categories/) and search for the Development Section to which the group identified on the previous step belongs to.
1. Use the table and workflow below to create a Request for Help issue in the project identified above.

Alternatively, if you have set up the [Support dotfiles](https://gitlab.com/gitlab-com/support/toolbox/dotfiles), you can use the `gls_request_for_help` command to quickly retrieve the "New issue" link with the correct issue template.

_NOTE:_ A video recording of a similar workflow as the one described above can be found in the [Support Training repository](https://gitlab.com/gitlab-com/support/support-training/-/blob/main/Support%20Specific%20Trainings/training-videos/Support%20Request%20for%20Help%20Workflow.mp4)

#### List of Development Sections and corresponding links to the Projects for requesting help

Note: Some sections are not yet available.
If a section is not listed, consider a confidential issue in the GitLab project tracker and post in the relevant Slack channel.
Please follow [support epic #222](https://gitlab.com/groups/gitlab-com/support/-/epics/222) for more information.

| Development Section | Section Product and Group Breakdown | Link to the GitLab Project for requesting help |
| ----------- | -------------- | -------- |
| Ops (CI, CD) Section | [Ops Section Breakdown](/handbook/product/categories/#ops-section)| [Section Ops Request for Help](https://gitlab.com/gitlab-com/ops-sub-department/section-ops-request-for-help/) |
| Dev Section | [Dev Section Breakdown](/handbook/product/categories/#dev-section) | [Section Dev Request for Help](https://gitlab.com/gitlab-com/dev-sub-department/section-dev-request-for-help/) |
| Sec Section | [Sec Section Breakdown](/handbook/product/categories/#sec-section) | [Section Sec Request for Help](https://gitlab.com/gitlab-com/sec-sub-department/section-sec-request-for-help) |
| Enablement Section | [Enablement Section Breakdown](/handbook/product/categories/#enablement-section) | [Section Enablement Request for Help](https://gitlab.com/gitlab-com/enablement-sub-department/section-enable-request-for-help) |
| Fulfilment Section | [Fulfilment Section Breakdown](/handbook/product/categories/#fulfillment-section) | [Section Fulfilment Request for Help](https://gitlab.com/gitlab-com/fulfilment-sub-department/section-fulfilment-request-for-help) |
| SaaS Section (GitLab Dedicated) | [GitLab Dedicated Breakdown](/handbook/engineering/infrastructure/team/gitlab-dedicated/) | [GitLab Dedicated Request for Help Template](https://gitlab.com/gitlab-com/gl-infra/gitlab-dedicated/team/-/issues/new?issuable_template=support_request) |

**Please note:** GitLab Dedicated is the first iteration for implementing a Request For Help Section for the SaaS section of GitLab development, therefore at the moment the GitLab project structure and workflows may not be consistent with the other development sections in the above table. You can find out more information on GitLab Dedicated internal processes by visiting the [Dedicated Team's ReadMe](https://gitlab.com/gitlab-com/gl-infra/gitlab-dedicated/team/-/blob/main/README.md).

#### Research prior to opening an issue

Use the following repositories and resources for identifying similar issues or requests:

1. Zendesk for related tickets.
1. Previous GitLab Application [bugs and feature requests](https://gitlab.com/gitlab-org/gitlab/-/issues).
1. Previously logged GitLab.com issues.
1. Discuss with knowledge experts and support stable counterparts.
1. Search for previously opened issues in the relevant Development Section Project on GitLab.com.

#### Create a detailed issue

1. Open the corresponding Development Section Project as [defined in the above table](#list-of-development-sections-and-corresponding-links-to-the-projects-for-requesting-help).
1. Review the Development groups and corresponding templates section.
   - Use the provided GitLab Handbook Section Breakdown link at the bottom of the Project ReadMe file if you are unsure about which Section Sub Group and corresponding template to use.
1. Make sure to use the correct corresponding issue template when creating a new issue.
1. Complete all the fields in the issue template and attach all necessary files.
1. Ensure that an appropriate severity is set as defined by the [support impact](https://about.gitlab.com/support/definitions/#definitions-of-support-impact). You should set the approriate label `severity::1`, `severity::2`, `severity::3`, `severity::4` so that it corresponds with the priority level in Zendesk.
1. If the Zendesk ticket is escalated then add the label `Support::escalated`.
1. Add a 'Customer Impact' statement if necessary, advocating for the customer.
1. Ensure to follow any instructions on the template itself, such as who to assign the issue to (if not automatically assigned).
1. Ensure that a link to the corresponding issue is added to the Zendesk ticket as an internal note and also to the ticket field named `GitLab Issues`.

#### Tips on getting timely responses

1. Review the Opening a request for help to ensure all steps were covered.
1. Mention the engineer who is helping or assigned with _every_ comment where you need them to review or respond.
1. If an issue is moved to another group (through a label change or moving to another project), check the corresponding template for the new group to see who to assign or mention in a comment.
1. When linking to Kibana, also upload a copy of relevant entries, a screenshot of the graph, etc. as logs rotate out after 7 days. If possible, also link to the relevant Sentry entry.

#### Escalate to unblock a request

If you encounter any problems, such as obtaining a timely response from Development, then please take one or more of the following steps:

1. Check if the engineer(s) assisting with the request is on PTO through Slack or their GitLab status. If they are on PTO, mention the contacts (listed in the issue template) in the issue, or their backups if they are also on PTO, requesting an update via the issue. Backups are listed in a coverage issue, or in Slack.
1. Make the corresponding Development group Engineering Manager aware by mentioning them in the issue. You can identify the relevant Engineering Manager by checking the Development Group Handbook Page from each Projects Readme Section which provides a section named `Development Groups with their corresponding templates and labels`.
1. Feel empowered to ping the contacts and/or Engineering Manager in the corresponding product/development group Slack channel along with a link to the issue, requesting an update.
1. Reach out to a Support Engineering Manager for further guidance directly or in the `#support_leadership` Slack channel.

#### Closing: Document and knowledge share

1. Once you receive all the necessary assistance, ensure to close the issue and add a comment explaining why it is being closed.
1. Consider whether the solution or information contained within the issue can be used to update the GitLab documentation.
   1. If you have updated the GitLab documentation, add the label `documentation::created` and link the merge request.
   1. Otherwise, add the label `documentation::candidate`, and create a GitLab issue to update the relevant documentation.

### Quick Links and Resources

- [Needs Collaboration view](https://gitlab.zendesk.com/agent/filters/360080204660) in ZenDesk.
- Create a Support [pairing session issue](https://gitlab.com/gitlab-com/support/support-pairing).
- [Support Workflows](/handbook/support/workflows/) to follow relevant troubleshooting workflow.
- [Support Documentation links](/handbook/support/#documentation) for quick references to helpful GitLab documentation.
- [Skills by Subject](https://gitlab-com.gitlab.io/support/team/skills-by-subject) to find a Support Engineer scoped to the skill set needed for help.
- [DevOps Stages](/handbook/product/categories/#devops-stages) to find the right development or product team to reach out to.
- [Emergency runbooks](https://gitlab.com/gitlab-com/support/emergency-runbook/-/tree/master/.gitlab/issue_templates) with troubleshooting tips, even if not an emergency.
- See which [manager is on-call](https://gitlab.pagerduty.com/escalation_policies#PGNLUZ1) if guidance is needed on something urgent.

#### General Troubleshooting Resources

Every problem is a little bit different. Sometimes it makes sense to try a different troubleshooting technique. These resources talk about general purpose approaches to troubleshooting:

- Julia Evans' [comics](https://wizardzines.com/comics/), especially the ones about debugging
- [The Pocket Guide to Debugging (PDF)](https://store.wizardzines.com/products/the-pocket-guide-to-debugging-pdf)
- [General Purpose Troubleshooting Principles](https://brie.dev/troubleshooting/)
