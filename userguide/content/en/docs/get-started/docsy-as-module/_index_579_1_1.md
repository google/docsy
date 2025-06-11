---
title: "Developer Relations Workflows and Tools"
---

## Workflows

<!-- Keep this incoming anchor for compatibility -->
<a id="community-response-workflows"></a>

### Team Workflows

- [Code of Conduct Enforcement](/handbook/marketing/developer-relations/workflows-tools/code-of-conduct-enforcement/)
- [Team Budgets](/handbook/marketing/developer-relations/workflows-tools/team-budgets)
- [Developer Advocate Community Response Process](/handbook/marketing/developer-relations/developer-advocacy/community-response/)
- [Community Operations: Automated Community Programs](/handbook/marketing/developer-relations/community-programs/community-programs-workflows/#automated-applications-workflow-overview)
- [Swag operations](/handbook/marketing/developer-relations/workflows-tools/swag/)
- [Content Review / Fix Fridays](/handbook/marketing/developer-relations/workflows-tools/content-review/)

### Community platforms

- [Forum](/handbook/marketing/developer-relations/workflows-tools/forum/)
- [Discord](/handbook/marketing/developer-relations/workflows-tools/discord/)
- [Reddit](/handbook/marketing/developer-relations/workflows-tools/reddit/)
- [StackOverflow](/handbook/marketing/developer-relations/workflows-tools/stackoverflow/)

### Integrations

- [Zapier](/handbook/marketing/developer-relations/workflows-tools/zapier/)

### Communication

- [Zendesk](/handbook/marketing/developer-relations/workflows-tools/zendesk/)
- [Email](/handbook/marketing/developer-relations/workflows-tools/e-mail/)
- [Twitter](/handbook/marketing/developer-relations/workflows-tools/twitter/)

## Tool Stack Overview

These are the tools the Developer Relations team is the DRI for:

{{< workflows-tools >}}

### Community Operations Tool Stack (deprecated)

{{% alert color="warning" %}}
<i class="fas fa-hand-point-right" aria-hidden="true" style="color: rgb(138, 109, 59)
;"></i> This overview is currently being deprecated as we attempt to migrate from
the manually-generated list to one automatically-generated from the `data/tech_stack.yml` file.
Please use the [automatically-generated table instead](#tool-stack-overview)
{{% /alert %}}

<details>
<summary markdown="span">Click to show deprecated table</summary>

These are the tools the Developer Relations team is the DRI for:

| Tool Name | Description | How We Use |
|-------------|-------------|-----------|
| Crowdin | [Crowdin](https://translate.gitlab.com/) is the platform for the wider community to collaboratively contribute translations for GitLab | [How we use Crowdin](https://docs.gitlab.com/ee/development/i18n/translation.html) |
| Discourse | [Discourse](https://www.discourse.org) is the platform on which the [GitLab forum](https://forum.gitlab.com) is run. | [How we use Discourse](/handbook/marketing/developer-relations/workflows-tools/forum/#administration)|
| Discord | [Discord](https://discord.gg/gitlab) is the instant messaging platform the GitLab community communicates on (in addition to GitLab.com itself) | popular channels are #contribute, #general and the support channels |
| SheerId | [SheerId](https://www.sheerid.com/) is the platform we use to automatically qualify applications to our community programs | |
| Zapier | [Zapier](https://zapier.com) is an automation tool used to identify mentions and to route them into Zendesk as tickets, and also to Slack in some cases | [How we use Zapier](/handbook/marketing/developer-relations/workflows-tools/zapier) |
| Zendesk | [Zendesk](https://www.zendesk.com/support/) is the tool Community Ops, EDU & OSS work their program cases and applications | [How we use Zendesk](/handbook/marketing/developer-relations/workflows-tools/zendesk/)|

</details>

### Tools pending addition to tech stack

The Developer Relations team is also the DRI for these tools which are [pending addition to the tech stack](/handbook/business-technology/tech-stack-applications/#add-new-system-to-the-tech-stack):

| Tool | Description | How we use it |
|---|---|---|
| SheerId | [SheerId](https://www.sheerid.com/) is the platform we use to automatically qualify applications to our community programs | |

### Other tools we rely on

These are the tools that are essential to some Community programs, but the Developer Relations team are not the DRI for:

| Tool Name       | Description                                                                                                                                                                                                                               | How We Use                                                                                                                                                                                                                                                                             |
|-----------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Customer Portal | [CustomersDot](https://gitlab.com/gitlab-org/customers-gitlab-com/-/tree/staging/doc/architecture#customersdot) - Web portal where customers can manage their subscriptions and account information, generate and manage GitLab licenses. | To help troubleshoot issues with community program applications. To create and manage licenses for community program applications and for [GitLab EE contributors](/handbook/marketing/developer-relations/contributor-success/community-contributors-workflows/#contributing-to-the-gitlab-enterprise-edition-ee) |
| Marketo         | [Marketo](/handbook/marketing/marketing-operations/marketo/)                                                                                                                                                                              | Powers each intake form for our ([Education](https://about.gitlab.com/solutions/education/), [Open Source](https://about.gitlab.com/solutions/open-source/), and [Startups](https://about.gitlab.com/solutions/startups/)) programs. It is an integration which inserts the application record into Salesforce.                                                |
| Printfection    | [Printfection](https://www.printfection.com/) is our swag management platform                                                                                                                                                             | [How we use Printfection](/handbook/marketing/brand-and-product-marketing/brand/merchandise-handling)                                                                                                                                                                                                |
| Salesforce      | [Salesforce](https://www.salesforce.com) is our [CRM](https://en.wikipedia.org/wiki/Customer_relationship_management)                                                                                                                     | We use Salesforce (SFDC) to [support the Education, Open Source and Startup Programs](/handbook/marketing/developer-relations/community-programs/community-program-applications)                                                                                                     |
| Canva           | [Canva](https://www.canva.com/) is the tool we use to create a lot of our GitLab-branded materials.                                                                                                                                       | Community team members should creat an account using their `@gitlab.com` email and [request access](/handbook/it/end-user-services/onboarding-access-requests/access-requests/) to Canva Enterprise from the Design team.                                        |

### Adding a new tool to the Developer Relations tool stack

1. Please follow the procurement process as you would for [adding any new tool to GitLab's tech stack](/handbook/business-technology/tech-stack-applications/#add-new-system-to-the-tech-stack).
1. Ensure that the `group_owner` field on the tech stack file entry is set to `Developer Relations`. This will make the tool to be automatically listed on the [Developer Relations toolstack](#tool-stack-overview).
