---
title: Handling data as a Support Engineer
description: This is a guide to data handling best practices in Support
category: References
---

### Overview

Working directly with customers has the average Support Engineer working with some of the most sensitive data that our business handles. Proper data handling is crucial not only for maintaining customer trust but also for meeting our legal and regulatory obligations. This workflow outlines best practices for Support team members to ensure secure and efficient data handling.

#### Data Classification Standard

The [Data Classification Standard](/handbook/security/data-classification-standard/) is the most important framework for day-to-day operations in Support. Knowing which data is allowed in which system is vital as you collaborate with colleagues.

Both Data _and_ Systems have data classifications. When _data_ has a classification standard, it represents the impact of disclosing that data. When a system has a data classification standard associated with it, it represents what classification of data is allowed in that system.

Systems within the Tech Stack are authorized to process the level of data associated to them per the [Data Classification Standard](/handbook/security/data-classification-standard/). Storing or processing sensitive data in an unauthorized system poses a risk to our customer's security and privacy and could have legal and/or regulatory consequence. Examples may include a breach of contract or failure to meet our GDPR or SOX obligations.

References:

- [Data classification examples](https://internal.gitlab.com/handbook/security/data_classification/) (GitLab Internal Handbook - Team Members only)
- [Tech Stack](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/tech_stack.yml)
- [GitLab Data Subprocesors](https://about.gitlab.com/privacy/subprocessors/)

### What does it mean for a Support team member?

The standards themselves are important to be familiar with, but for Support generally:

- Be aware of the data classification standard for any data you're working with
- NEVER move data to a system with a lower classification
- Think through confidentiality levels and the [SAFE framework](/handbook/legal/safe-framework/) when working in public.  For example, GitLab.com may be cleared for RED data, but you might still expose that data by posting it in a public project, or forgetting that an issue is public

#### Examples

The following are examples only - the single source of truth for system classifications is the [Tech Stack](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/tech_stack.yml)

##### Slack (ORANGE)

During the course of working emergency tickets, you may be tempted to copy verbatim troubleshooting data such as relevant logs (potentially RED) or screenshots (potentially RED) from a ticket from Zendesk (RED) into a troubleshooting Slack (ORANGE) thread.
This would be inappropriate because RED data is not allowed in ORANGE systems.

Instead, consider sharing the troubleshooting data by:

- Putting the relevant log snippets in an internal note in the ticket
- Sharing the information through a GitLab issue (for example, [a Fieldnote issue](/handbook/support/workflows/fieldnote_issues/))

If you see RED data being shared in Slack, ask the team member who posted it to remove it.

##### GitLab.com (RED)

During the course of discussion issues, you might have a relevant example screenshot that lists a customer name or a quote from a customer directly that identifies them. These are examples of ORANGE data, and GitLab.com is cleared for RED.

However, posting ORANGE data in a _public_ issue would go against the confidentiality levels for that data, so would be inappropriate.

Instead, consider sharing the data by:

- making the issue confidential
- creating a confidential comment

If you see internal-only data being shared publicly, you can:

- edit the comment to remove the data
- toggle the Issue to confidential
- remind the team member who posted it about data classification and confidentiality levels

##### Building an integration between systems

As a productivity boost, you're considering creating a Slack workflow that will grab any negative customer comments and post them into Slack.

To do this, you're going to scrape Zendesk (RED) using GitLab CI (RED) then post the resulting data into Zapier (YELLOW) which will post in a channel in Slack (ORANGE).

Here, you're moving data between systems that aren't cleared for the classification of data you're likely to be sending.

If you see an integration like this, declare a SIRT.

In addition, if you need assistance with integrations, please reach out to the following teams. For any integrations related to Google, Slack, Zoom, Okta etc., please reach out to the Corp Sec team [here](https://internal.gitlab.com/handbook/it/end-user-services/app-integrations/?search=integration+request). For anything Enterprise application related, please reach out to this team [here](https://internal.gitlab.com/handbook/it-enterprise-applications/enterprise-applications/enterprise-applications-integrations/).

### Take-aways

- Know the classification level of data you're working with and which systems are cleared for which data.
- Avoid moving data between systems whenever possible: if you can share data within the system it's already contained in keep it there!
- Don't expose your teammates to data they aren't authorized to see: keep limited access data to those to whom it should be limited.
