---
title: Customer Emergency Retrospectives
category:
description: ""
---

The GitLab Support team puts a lot of effort into solving problems during customer emergencies. During emergencies, we sometimes identify challenges that are not limited to the specific customer we’re helping. Conducting retrospectives (or "retros") on these situations can help us to ensure we retain the insights we gain during these emergencies. The questions raised during retrospectives help us to improve our product and processes to the benefit of all.

## :feather: Retro Principles

A few key principles to keep in mind:

- It is not necessary to conduct a retro on every emergency.
  - If during an emergency you think "we really need a better way to deal with _that_ in the future", you should probably conduct a retro on that emergency.
- A retro is a [blameless opportunity](https://docs.gitlab.com/ee/tutorials/scrum_events/standups_retrospectives_velocity.html#sprint-retrospectives) for the team to identify process improvements.
- :feather: Retros should be as lightweight as possible.
  - The retro is not a comprehensive report for external consumption. "Don't let perfect be the enemy of the good." GitLab team members with access to the project can see [this retro](https://gitlab.com/gitlab-com/support/readiness/emergencies/-/issues/3616) as an example.
- :reminder_ribbon: [Not every problem should lead to a new process to prevent them.](/handbook/values/#accept-mistakes).
- :repeat: Retros should be synchronous when possible. It is recommended to conduct a synchronous retro because it can be easier to [establish a safe environment](/handbook/engineering/management/group-retrospectives/#establishing-a-safe-environment) and because biasing for asynchronous communication can reduce the efficiency of the retro.

## :musical_score: Conducting a Retro

Anyone can suggest that a retro should be conducted on an emergency (or other anomalous situation). To suggest that a retro should be completed, add the `retro` label to the emergency issue. Once it has been determined that a retro should be conducted on a particular emergency, this section should guide you.

Ideally, someone who was directly involved in the emergency identifies someone who was not actively involved in the emergency to lead the synchronous retro. A thirty minute session is typically sufficient. While retros do not need to be conducted immediately after the emergency, they should happen shortly after the emergency is resolved to ensure no context is missed.

The person conducting the retro should review the ticket and related Slack threads and issues before the retro. (The aim is to get enough context to make the retro efficient while keeping an open mind and refraining from drawing conclusions before the retro.)

Typically, the person who participated in the emergency does not need to do additional prep for the retro. The notes taken during the emergency should be sufficient.

During the synchronous portion of the retro:

1. Ensure that the `retro` label has been applied to the issue in [the tracker](https://gitlab.com/gitlab-com/support/readiness/emergencies/-/issues/?sort=created_date&state=opened&first_page_size=100)
1. the SE who responded to the emergency provides a brief timeline (while the person conducting the retro asks questions to fill in the gaps)
1. the person conducting the retro and the SE who responded to the emergency work through what went well, what could have gone better and suggestions for what we might do or change
1. if there are open questions or suggested possible action items in the retro issue
    1. apply the `retro-actions` label 
    1. use `/due in 1 week` to set a due date for the issue
    1. assign the issue to the manager of the SE who responded to the emergency

### Possible Retrospective Findings

The suggestions and findings of a retrospective will vary. Common findings include:

- new bug issue
- new feature proposal
- check-in with PM in an existing issue or feature proposal
- new knowledge base article
- update to processes in handbook
When opening issues or MRs related to a customer emergency retro, apply the `customer-retro` label. 

### Addressing Findings from Retros

The findings from retros should be reviewed and addressed. Every suggestion should be taken seriously. However, each action item is not an obligation. The correct response might be "yes, that is a problem but it is not a problem worth solving right now". Over time, trends in retro findings will help to inform which problems we choose to solve.

Typically, the Support Engineers who handled the emergency will work to highlight what went well, what needs to be fixed or improved, and what questions need to be answered. The SE should take action directly when appropriate and leave the remaining items for leadership to address.

For accountability purposes, a Support Manager will be the DRI for moving the questions and action items from a retro forward. Support Leaders are encouraged to review the [:rewind: Retros](https://gitlab.com/gitlab-com/support/readiness/emergencies/-/boards/9004657?label_name[]=retro) periodically to ensure retros with findings don't go stale.

## :robot:  Automation

A retrospective issue is automatically created in the [issue tracker](https://gitlab.com/gitlab-com/support/readiness/emergencies/-/issues/?sort=created_date&state=opened&first_page_size=100) for `gitlab-com/support/readiness/emergencies` for each incoming page for the [Customer Emergencies](customer_emergencies_workflows) rotation.

The automation is managed by Support Readiness. Start [with an RFC](/handbook/support/managers/change-management.md#start-with-a-request-for-comments-rfc) if you'd like to propose changes to this process.

GitLab team members with access can look at the [:rewind: Retros](https://gitlab.com/gitlab-com/support/readiness/emergencies/-/boards/9004657?label_name[]=retro) issue board.

## Additional Information

- [Group Retrospectives](/handbook/engineering/management/group-retrospectives.md)
