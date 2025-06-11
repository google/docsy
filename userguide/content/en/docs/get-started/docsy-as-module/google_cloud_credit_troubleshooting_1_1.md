---

title: Google Cloud Credit Troubleshooting
category: License and subscription
description: "Support Engineering workflow when a customer reports an inability to utilize their Google Cloud Credit (GCP Credit)"
---

## Overview

Use this workflow when user reports an inability to utilize their Google Cloud Credit (GCP Credit).

---

## Workflow

1. Ask user if they've used the following URL when they applied for the credit: <https://cloud.google.com/partners/partnercredit/?pcn_code=0014M00001h35gDQAQ#contact-form>
    1. If no, ask them to try the link and report any issues.
    1. If yes, follow the below directions.
1. Ask user for the following information related to their GCP account
    1. Google Billing ID
    1. Complete name
    1. Email address
1. Submit [this form](https://docs.google.com/forms/d/e/1FAIpQLScKgwz-P8wcBpQ-SprEEQDzxHoVyoBlaYqStlP9LsVUvHTTQQ/viewform) on behalf of the user
    FIRST PAGE:
    1. Email Address: your (support engineer) email address
    1. What is your role? Partner
    SECOND PAGE:
    1. Your Name: user's name
    1. Email Address: user's email
    1. Company Name: GitLab
    1. Partner Type: `Alliance / Technology / Vertical (excl. Healthcare) Partner`
    1. Billing Account ID: user's Google billing ID
    1. Your Google Sales Rep's email: <manverma@google.com>
    1. Select SUBMIT
1. Attach a copy of the form to the Zendesk ticket for reference
1. Reply with [`General::Google Cloud Credit Troubleshooting Form Submitted`](https://gitlab.com/search?utf8=%E2%9C%93&group_id=2573624&project_id=17008590&scope=&search_code=true&snippets=false&repository_ref=master&nav_source=navbar&search=id%3A+360073423299) macro letting them know that you have submitted the form.
1. Once confirmation is received, update user and close ticket.

### Additional Reference

1. Reference tickets: [ZD#133164](https://gitlab.zendesk.com/agent/tickets/133164) & [ZD#117290](https://gitlab.zendesk.com/agent/tickets/117290)
1. If no reply is received from Google and the user does not have any credit, contact product marketing in Slack for escalation assistance
