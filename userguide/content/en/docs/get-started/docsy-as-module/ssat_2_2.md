---
title: SSAT
description: Support Operations documentation page for Zendesk satisfaction surveys
canonical_path: "/handbook/support/readiness/operations/docs/zendesk/ssat"
---

## What is the Zendesk satisfaction survey?

As per
[Zendesk](https://support.zendesk.com/hc/en-us/articles/203660816-Customizing-your-customer-satisfaction-survey)

> One of Zendesk Support’s most popular features is our built-in customer
> satisfaction survey. Customer satisfaction allows you to track how well your
> agents and customer service organization as a whole are performing on a
> ticket by ticket basis. Because of our simplified approach, on average our
> customers see a roughly 21% response rate - which is fantastic! Zendesk
> Support provides some great defaults for the survey, but we get a lot of
> questions about how to further customize the customer satisfaction
> experience.

We shorthand the overall setup (survey and ticket ratings) as SSAT

## Zendesk Global setup

Zendesk Global uses an
[automation](https://gitlab.zendesk.com/admin/objects-rules/rules/automations/46784293)
to send out the satisfaction survey.

## Zendesk US Federal setup

Zendesk US Federal uses an
[automation](https://gitlab-federal-support.zendesk.com/admin/objects-rules/rules/automations/360094875892)
to send out the satisfaction survey.

## End-user experience when the SSAT survey is sent

Once the SSAT automation runs on the solved ticket, the user will receive the
SSAT survey email where they can rate their support experience directly from the
email message. A sample of this would look like:

![SSAT Survey Email](/handbook/support/readiness/operations/images/ssat_survey_sample.png)

Once the user clicks either of the two satisfaction links in the email message,
the rating will be submitted and they'll be redirected to another page where
they can add a comment about the rating if they'd like.

![Good rated SSAT](/handbook/support/readiness/operations/images/good_rated_ssat_sample.png)

In the event the user selects the `Bad, I'm unsatisfied` link, we ask them to
specify a reason for the dissatisfaction.

The options available are:

- The issue was not resolved
- GitLab doesn't meet my needs
- The answer wasn't delivered in a timely manner
- The answer wasn't helpful

![Bad rated SSAT](/handbook/support/readiness/operations/images/bad_rated_ssat_sample.png)
