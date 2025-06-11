---
title: "GitLab Education Services Support Handbook"
description: "This handbook will detail how to handle support inquiries for the Education Services team and the applicable systems that are used."
---

## Overview

This handbook will detail how to handle support inquiries for the Education Services team and the applicable systems that are used.

## Support Systems in Use

---

- [ZenDesk](https://gitlab.zendesk.com/agent)
- [LevelUp Google Group](https://groups.google.com/a/gitlab.com/g/levelup) (Inbox for <levelup@gitlab.com>)
- [Certification Grading Wiki](https://gitlab.com/gitlab-com/customer-success/professional-services-group/education-services/-/wikis/home)
- [Zapier](https://zapier.com/app/zaps/folder/840205)
- [Credly](https://www.credly.com/organizations/gitlab/badges/badges)

If you do not have access to these systems, please complete an [Access Request](/handbook/it/end-user-services/onboarding-access-requests/access-requests/). To see who owns these systems or who is able to provision these accounts, see the [GitLab Tech Stack](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/tech_stack.yml).

### Using ZenDesk

---

The education services team has limited licenses for ZenDesk full agent- which gives users access to respond to customer tickets. To determine who has full agent access on this team, please see [here](https://gitlab.com/gitlab-com/customer-success/professional-services-group/education-services/-/wikis/Education-Services-Support-Delegates).

1. To access ZenDesk, launch the application through your Okta account.
2. On the left-hand side, click the **Views** button.
3. You will see 4 views available, **My Assigned Tickets**, **Professional Services-Triage**, **Professional Services- Paid**, and **Professional Services- Free**.
4. You will start in the **My Assigned Tickets** section, this is where any tickets you were assigned or have already responded to are, this tickets should be addressed first.
5. For new tickets, move to the **Professional Services- Triage** view, this is owned and triaged by L&D and Education Services.
6. To respond/resolve a ticket, assign the ticket to yourself, and complete the form data with your response in the Public reply field and click **Submit** as button- you will select the appropriate status based on whether the ticket will be Solved or Pending.
7. If there are Open tickets that are unassigned, with all regions or your region of preferred support, assign to yourself, complete the form data, and make a public reply if you can.
8. If you are not able to make a public reply, please ask for assistance from your colleagues to drive the ticket forward.
    - If the ticket is not related to Level Up or Education Services and is about general questions around GitLab or Sales, click the **Apply Macro** button, and select the following: **General > Forms > Incorrect Form Used** and click **Submit**
    - If the ticket is regarding a Sales Training or Certification, reach out to the Field Enablement team in the following slack channel: #field-enablement-team and once you receive a resolution, respond to the ticket and close as Solved.
    - If the ticket is regarding a Learning and Development training or Certification such as Remote Foundations, TeamOps, etc, assign the ticket to the appropriate party listed [here](https://gitlab.com/gitlab-com/customer-success/professional-services-group/education-services/-/wikis/Education-Services-Support-Delegates).
9. The Education Services team only handles the Professional Services- Triage and Professional Services- Paid views, the Learning and Development team owns the Professional Services- Free view.

### Managing the LevelUp Inbox

---

All members of the GitLab Education Services team have access to the GitLab Level Up support inbox. If you are not able to access this group, please complete an [Access Request](/handbook/it/end-user-services/onboarding-access-requests/access-requests/). The team rotates responsibility for monitoring the inbox in weekly intervals, you can see who is currently assigned on the [GitLab Education Services Calendar](https://calendar.google.com/calendar/embed?src=c_2f86c1ceb88f08d428c3406c956335383e323ef8bbd19fde5379a8ab0f48b4b1%40group.calendar.google.com&ctz=America%2FDenver).

1. If you are a part of the Level Up support google group, you will receive all emails to the <Levelup@gitlab.com> inbox.
2. If it is your assigned week, respond to the support emails Monday through Friday during normal business hours.
    - Suggestion: [Create a filter](/handbook/tools-and-tips/#filters) to organize your inbox and separate out the support emails from your regular email.
3. In the Level Up inbox, you will receive a plethora of support inquiries ranging from system support for the platform itself, training issues, certification issues or demo cloud concerns.
4. We have prepared responses for most support scenarios. You can access them [here](https://docs.google.com/document/d/1IjXvfGfQ066jWbIom-ySGZKO2tFMzENkCJn3THNCAPQ/edit?usp=sharing).
5. If you are unable to answer the support inquiry using the responses above or the handbook, post the inquiry in the #edu_services_team channel in Slack.

### Zapier

---

In order to access Zapier, which is used for integrations and webhooks between systems (issuing badges, automated messaging), you need to have access to the Zapier 1Pass Vault. If you do not have access, please complete an [Access Request](/handbook/it/end-user-services/onboarding-access-requests/access-requests/).

All Zaps associated with the Education Services Team are found within the following folder in [Zapier](https://zapier.com/app/zaps/folder/840205).

### Credly

---

In order to access Credly, login to the site [here](https://info.credly.com/). If you do not have access, please complete an [Access Request](/handbook/it/end-user-services/onboarding-access-requests/access-requests/).

[GitLab Organization Profile](https://www.credly.com/organizations/gitlab/badges)

[Credly Issuer Support Center](https://credlyissuer.zendesk.com/hc/en-us)

1. [How to issue a badge](https://credlyissuer.zendesk.com/hc/en-us/articles/360027660772-How-do-I-issue-a-badge-to-a-single-earner-)
    - [Bulk Issuing Badges](https://credlyissuer.zendesk.com/hc/en-us/articles/360027660752-How-do-I-issue-badges-in-bulk-to-multiple-earners-)
    - All of our badges are triggered via Webhook in Zapier. If you can see a passing result in the [Certification Submissions](https://gitlab.com/gitlab-com/customer-success/professional-services-group/education-services/-/wikis/Certifications-form-submission-and-responses-link-centralisation), you can manually issue the badge, but please ping the #edu_services_team Slack channel so we can research the Integration issue.
1. Change the email on a badge
    - If the badge is Accepted:
        - You will have to click on the badge and click the Revoke button and then reissue to the new email.
    - If the badge is Pending:
        - You will be able to click on the badge and use the Replace button, you will see an edit icon next to the email field where you can change the email.
1. [Pulling analytics from Credly](https://credlyissuer.zendesk.com/hc/en-us/articles/360027938091-What-analytics-can-I-view-as-an-administrator-for-my-organization-)
    - We keep a track of certifications issued on a monthly basis and separated by audience on a Google Sheet located [here](https://docs.google.com/spreadsheets/d/1g1lhtYXXWS2P-Djfru03aRdbOF4a13La-WYQPjwVLks/edit?usp=sharing). It is updated every month by Education Services Managers.
1. [Creating a new badge template](https://credlyissuer.zendesk.com/hc/en-us/articles/360028654791-How-do-I-create-a-badge-template-)
    - When creating a new badge, please be sure you engage the marketing design team to create the badge image to ensure it fits GitLab Branding Guidelines. You can use this [issue template](https://gitlab.com/gitlab-com/marketing/corporate_marketing/corporate-marketing/-/issues/new?issuable_template=request-design-general&_gl=1*1k86ng8*_ga*Njk5OTc1OTcxLjE2NTg3ODM3ODE.*_ga_ENFH3X7M5Y*MTY3MzI5NTQwNi4xMzMuMS4xNjczMjk1NDEwLjAuMC4w) to open a request.
