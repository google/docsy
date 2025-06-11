---
title: Becoming and Being an ASE
description: Information about the ASE role for new and potential ASEs
---

## Becoming and Being an ASE

### Basic job information

The first thing to do if you're contemplating a move to an ASE role is to take
a look at two topics on the Support Engineer job family page in the Handbook:

1. [The ASE role](/job-families/engineering/support-engineer/#the-ase-role)
1. [What is it like to be an ASE (video)](/job-families/engineering/support-engineer/#what-is-it-like-to-be-an-ase)

You might also find it helpful to review the
[ASE performance factor worksheet template](LINK COMING SOON)

### Onboarding tasks for new ASEs

1. Ask an existing ASE or ASE Manager to:
   1. invite you to the `#support_assigned-support-eng` Slack channel
   1. invite you to both of the recurring ASE Team meetings
1. Submit an MR to update your personal yaml file in the
   [Support Team project](https://gitlab.com/gitlab-support-readiness/support-team/-/tree/master/data/agents):
   1. Look for the `focuses:` header
   1. Add a new focus after your existing ones:

      ```yaml
      - name: ASE
        percentage: [percent]
        zendesk: [instance]
        organizations:
        - id: [org_a ID]
          percentage: [org_b percentage]
        - id: [org_b ID]
          percentage: [org_b percentage]
      ```

      1. where `[percent]` is 25 times the number of accounts you have - if you have 2 accounts, put 50
      1. where `[instance]` is either "global" or "us_gov", according to
         whether your ASE accounts work with Global or US Gov Support
      1. where `[org_a ID]` is the organization ID, in Zendesk, for your first account (Handbook [topic](/handbook/support/readiness/operations/docs/zendesk/searching/#example-3)
      for finding the correct ID), `[org_b ID]` is the same for your second
      account, and so on
      1. where `[org_a percentage]` is the percentage of your ASE time that
         will be spent on org_a, `[org_b percentage]` is the same thing for your
         second account, and the sum of the org percentages is 100
1. Change your job title in Zoom
1. Update your signature in Zendesk to indicate that you are an ASE

### On-call responsibilities

ASEs with two or more accounts are not expected to participate in either the
[Customer Emergencies On-Call (CEOC)](/handbook/support/workflows/customer_emergencies_workflows/)
or [Communication Manager On-Call (CMOC)](/handbook/support/workflows/cmoc_workflows/) rotations.

Participating in these on-call rotations creates an ongoing risk of conflict for the ASE between
high-priority work from their assigned accounts and their on-call responsibilities. This risk
becomes too great to manage when an ASE has two or more accounts.

ASEs who have been rostered for CEOC or CMOC responsibilities from their time in global support
should continue participating in these on-call rotations until they have two assigned accounts. At
that point, the ASE and their manager should create a plan for the ASE to transition off the COEC or
CMOC rotation that minimizes disruption to the team.

###

**<<<< COMING SOON >>>>**

- Balancing between ASE and Global
  - on-call rotation
  - ticket queue
  - pairings and help sessions
- Learn about how to work with your account (manager 1:1s for now, presentation eventually)
  - managing customer expectations
  - stepping out of the SE box - change your way of thinking about what you should
    or shouldn't do
  - prioritize and re-prioritize all the time
  - only attend account meetings in which you will learn or contribute
  - get to know the people as people
    - do lots of Zooms with them and chat as you work a ticket
  - get to know what they're doing with GitLab and why
- Link to the customer onboarding page (customer-onboarding.html)
- Tips from ASEs
