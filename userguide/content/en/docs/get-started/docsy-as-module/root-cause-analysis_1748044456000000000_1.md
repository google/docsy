---
title: Blameless Root Cause Analyses
category: Internal
---
At the conclusion of each project, we will conduct a root cause analysis using the template below.  The purpose of these is to identify areas for improvement, as well as wins to make sure to highlight.  The team generally works on independent projects and with diverse customer groups, so mutual learning is important to how the Professional Services Engineering team lives up to the [GitLab values](/handbook/values/) of Collaboration and Iteration.

## Scheduling a Root Cause Analysis

1. Create an issue.
1. Use the [RCA](/handbook/engineering/root-cause-analysis/).  Changes to that template can be added as an MR to the Professional Services project.
1. Ensure that the `Root Cause Analysis` label is applied to the issue.
1. Create a calendar event for the root cause analysis, including a link the issue and this page.

   - Include the Strategic Account Executive (SAE), Customer Success Manager (CSM), Professional Service Engineer (PSE), your manager, and any other interested GitLab parties.

## Conducting a Root Cause Analysis

Each root causes analysis meeting should follow (roughly) this agenda here.

### Agenda

#### Meeting Purpose

1. This is a blameless root causes analysis.
1. We will not focus on the past events as they pertain to "could've," "should've," etc. However, we can make suggestions for what to do "next time."
1. We will focus on reinforcing [GitLab Values](/handbook/values/), specifically items such as

   - **Address behavior, but don't label people**
   - **People are not their work** Always make suggestions about examples of work, not the person. Say, "you didn't respond to my feedback about the design," instead of, "you never listen." And, when receiving feedback, keep in mind that feedback is the best way to improve and that others want to see you succeed.
   - **Directness** is about being transparent with each other. We try to channel our inner Ben Horowitz by being both straightforward and kind. Feedback is always about your work and not your person. That doesn't mean it will be easy to give nor receive it.
   - [Say Thanks](/handbook/communication/#say-thanks)
   - **No ego** Don't defend a point to win an argument or double-down on a mistake. You are not your work; you don't have to defend your point. You do have to search for the right answer with help from others.
   - **Make a proposal** If you need to decide something as a team make a proposal instead of calling a meeting to get everyone's input. Having a proposal will be a much more effective use of everyone's time.

#### Discussion

1. Go through the [root causes analysis](https://gitlab.com/gitlab-org/gitlab/-/blob/master/.gitlab/issue_templates/rca.md).

   - Identify key demographics for the engagement (customer contacts, GitLab team-members, dates, etc.)
   - Ensure to update links to the SOW for this engagement as well as the customer folder on Google Drive
   - Capture any remaining customer-facing action items and assign an owner

1. Lessons learned

   - What went well?
   - What went wrong?
   - Any suggestions for next time

1. Assign any action items for implementing suggestions and create issues/MR as needed
1. Ensure any IaC lessons learned are created as an MR to the mainline IaC repository

#### Assign Action Items

All follow-up action items will be assigned to a team/individual before the end of the meeting. If the item is not going to be a top priority leaving the meeting, don't make it a follow up item.

### Sources

- [Google SRE Handbook](https://landing.google.com/sre/book/chapters/postmortem.html)
- [SAFe Iteration Retrospectives](https://scaledagileframework.com/iteration-retrospective/)
