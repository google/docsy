---
title: Engineering Communication
---

## Communication

GitLab Engineering values clear, concise, transparent, asynchronous, and frequent communication. Here are our most important modes of communication:

As part of a fully-distributed organization such as GitLab, it is important to stay informed about engineering-led initiatives.
We employ [multimodal communication](/handbook/communication/#multimodal-communication), which describes the minimum set of communication channels we'll broadcast to.

The Engineering Divison has a Google Group, [`engineering@gitlab.com`](https://groups.google.com/a/gitlab.com/g/engineering) (internal only), that all members of the division should become members as part of the onboarding process. If this is not the case for you, reach out to your manager. As GitLab, the company, primarily communicates via Slack, use this list mainly for Access Control to Google Drive/Docs/Sheets/Slides.

### GitLab Groups/Projects/MRs

- [**Engineering Division group**](https://gitlab.com/gitlab-com/engineering-division): This group may contain both public and private sub-groups and projects of various engineering teams.
- [**CTO Leadership Team issue tracker**](https://gitlab.com/gitlab-com/engineering-division/cto-leadership): Private project that is accessible to all GitLab team members, issues are internal to the company. The tracker hosts topics and initiatives important to the CTO Leadership Team.
- [**Engineering Division non-product issue tracker**](https://gitlab.com/gitlab-com/engineering-division/engineering): Public project that hosts non-product topics and initiatives important to the Engineering division.
- [**GitLab, the product, issue tracker**](https://gitlab.com/gitlab-org/gitlab/issues): Raise issues pertaining to GitLab product development.
- [**Start with a merge request**](/handbook/communication/#start-with-a-merge-request): The most effective way to make a change to the company is to make a proposal in the form of a merge request to the handbook and assign it to the [DRI](/handbook/people-group/directly-responsible-individuals/).

### Monitoring dashboards

- [**Monitoring dashboards**](/handbook/engineering/monitoring/): When we look to achieve a desired outcome, we must be able to quantify and measure progress towards that goal. By making the initial analysis that drives decision making repeatable, we continuously sanity check our initial assumptions along that journey.

### Synchronous meetings

- [**Engineering All-Hands**](/handbook/engineering/cto-leadership-team/#engineering-all-hands).
- **CTO Office Hours**: Each week the CTO holds open office hours on Zoom for questions, feedback, and handbook changes. Check the CTO's calendar and look for EMEA and APAC-friendly time slots.
- **Principal+ Engineering Demo**: this call is an opportunity for sync discussions between
  Principal+ ICs across the Engineering Division to highlight current ongoing efforts underway in the groups they support.
  - Focuses for the call include:
    - Technical roadmap planning: dependencies, cross-departmental upstream requirements,
      opportunities for downstream improvements based on current projects. Future initiatives.
    - Opportunities for cross-department alignment, reuse of tooling, modules, processes,
      standards, technology, documentation.
    - Discussions on improving the career development resources for Engineering ICs at all levels
  - All team members are welcome to join the call,
    but the emphasis is on Principal+ ICs in the Engineering Division to present
    and discuss the work they’re focused on, the problems they’re experiencing,
    and solutions they’re considering.
  - The call is recorded and available in [Google Drive](https://drive.google.com/drive/search?q=in:0APOeuCQrsm4KUk9PVA%20type:video%20title:principal).

### Asynchronous updates

#### Engineering Week-in-Review (EWIR) document

Every week a reminder is sent to the [`#engineering-fyi`](https://gitlab.enterprise.slack.com/archives/CJWA4E9UG) Slack channel to populate and read the latest updates. The agenda is internal only, please search in Google Drive for [`Engineering Week-in-Review`](https://drive.google.com/drive/search?q=engineering%20week%20in%20review) (internal only)

#### Slack

##### #engineering-fyi

[`#engineering-fyi`](https://gitlab.enterprise.slack.com/archives/CJWA4E9UG) is used for large scale announcements and to drive views of the engineering week in review document. Everyone can contribute an announcement as long as the following criteria are met:

- The announcement provides a link back to the appropriate item
- The announcement involves a majority of one or more departments
- The announcement is NOT to be company wide and does not need amplication for the department. In this situation use [`#company-fyi`](https://gitlab.enterprise.slack.com/archives/C010XFJFTHN)

The posting model here is one of trusting judgement of the individual making the announcement. You do not need to ask for permission to post.

##### Sending status updates to #engineering-fyi

If you'd like to send status updates to [`#engineering-fyi`](https://gitlab.enterprise.slack.com/archives/CJWA4E9UG), please following the following process:

1. For the top level program your reporting on, in the main epic create an issue named `${Program} Status Updates` and populate the description with `This issue contains status updates for ${Program}.`
1. In that issue, leave a "threaded" comment with a header `${Program} Status Update - YYYY-MM-DD` to make it clear that the status can be commented on
1. Populate the content of this comment with the update corresponding to that date
1. When you post to [`#engineering-fyi`](https://gitlab.enterprise.slack.com/archives/CJWA4E9UG) sharing this issue, please include 2-3 sentences that include the major updates on what was completed and what's blocked or at risk. Please `@` tag relevant stakeholders as needed.
1. If this update is the final update for the program, please close the issue after all relevant discussion has taken place.

##### DevOps Slack Channels

There are primarily two Slack channels which developers may be called upon to assist the production team
when something appears to be amiss with GitLab.com:

1. `#backend`: For backend-related issues (e.g. error 500s, high database load, etc.)
1. `#frontend`: For frontend-related issues (e.g. JavaScript errors, buttons not working, etc.)

Treat questions or requests from production team for immediate urgency with high priority.

##### Other Slack channels that are Engineering focused and are good sources of information

- [`#cto`](https://gitlab.enterprise.slack.com/archives/C9X79MNJ3)
- [`#development`](https://gitlab.enterprise.slack.com/archives/C02PF508L)
- [`#production`](https://gitlab.enterprise.slack.com/archives/C101F3796)
- [`#incidents`](https://gitlab.enterprise.slack.com/archives/C02HF90ME66)
- [`#s_developer_experience`](https://gitlab.enterprise.slack.com/archives/C07TWBRER7H)
- [`#support_gitlab-com`](https://gitlab.enterprise.slack.com/archives/C4XFU81LG)
- [`#support_self-managed`](https://gitlab.enterprise.slack.com/archives/C4Y5DRKLK)
- [`#s_platforms`](https://gitlab.enterprise.slack.com/archives/C02D1HQRTKQ)

There is no requirement to join all of these channels. It is up to the person sharing to ensure that the same message is shared across all channels. Ideally, this message should be a one sentence summary with a link to an issue to allow for a single source of truth for any feedback.
