---
title: Support Engineer Resources
description: If you want to learn more about what support engineers do and how they do it, this is the place.
---

### A Day in the Life of a Support Engineer

As a Support Engineer at GitLab, the majority of your time will be focused on helping customers solve problems. This happens mostly through tickets, but can also happen through issues, screen sharing calls, and emergencies.

### Getting Help

While working through various customer problems, you may need help. We have a wide and talented team that can help you at many levels:

- Managers: If your problem is related to process, or understanding direction, or cross-team collaboration, consider talking to your direct manager, or another manager whom may be working more directly on that problem. Managers in Support Engineering should be able to point you in the right direction and enable you to find the right help.
- Senior/Staff Support engineers: If your problem is debugging related, consider reaching out to a Senior+ Engineer. At the Senior+ level, engineers are expected to be acting as mentors, and technical experts. See our [Mentoring page for more information about how Senior+ Engineers are expected to help](/handbook/support/engineering/mentorship)

### Zendesk Instances

At GitLab, the Customer Support Operations team currently manages 2 different Zendesk Instances:

1. GitLab Support Instance:  [gitlab.zendesk.com](https://gitlab.zendesk.com)
1. GitLab US Federal Support Instance: [gitlab-federal-support.zendesk.com](https://gitlab-federal-support.zendesk.com)

- Customer URL: [federal-support.gitlab.com](https://federal-support.gitlab.com), CNAME for full link (above).
- Only Support Engineers who are US Citizens inside of the US have access.

### Ticketing Style Guide

We recommend reviewing the best practices and suggestions for [styling and responding to Zendesk tickets](/handbook/support/workflows/how-to-respond-to-tickets).

### What if I feel that a customer is not following our Code of Conduct?

Just as Support team members are expected to adhere to GitLab's [Code of Conduct](/handbook/legal/gitlab-code-of-business-conduct-and-ethics/), we also expect customers to treat the Support Team with the same level of respect. The [GitLab Community Code of Conduct](https://about.gitlab.com/community/contribute/code-of-conduct/) outlines the standards to which we hold the wider GitLab Community.

If you notice a ticket where you believe the customer to be violating the Code of Conduct, please tag the [Manager On-Call](/handbook/support/on-call/#manager-on-call) to respond with the following guidelines in our [Statement of Support](https://about.gitlab.com/support/general-policies/#please-dont-use-language-intended-to-threaten-or-harass).

### Support Team Contributions

We encourage all engineers to contribute to the product to help improve the customer experience directly.
When you are creating merge requests (in the gitlab-org group) for code or for documentation, the
`Support Team Contributions` label is applied automatically so that we can track product contributions by support team
members.

Additionally, if the code change is specifically to improve the team's efficiency
(such as changes to admin for faster support), then add the `~"Support Efficiency"` label.

We also recommend using weight labels (frontend, backend, docs) to track the effort required for MRs.
While you can look at how others have labeled their MRs, the most important thing is that you are consistent in applying the labels to your own MRs
so that you can see which MRs required the most effort and your overall progress.
The number of MRs and their total weight are included in the [1:1 generator reports](https://gitlab.com/gitlab-com/support/toolbox/1-1-issue-generator).

An issue is created in the `support-team-meta` issue tracker at the
end of each week with a list of support team contributions merged in the past week. View the
[list of summary issues here](https://gitlab.com/gitlab-com/support/support-team-meta/issues?label_name%5B%5D=Support%20Team%20Contributions).

### Internal tools

- [Support Toolbox](https://gitlab.com/gitlab-com/support/toolbox) - Includes tools such as [Green Hat](https://gitlab.com/gitlab-com/support/toolbox/greenhat) (SOS/log analyzer), [fast-stats](https://gitlab.com/gitlab-com/support/toolbox/fast-stats) (generate performance statistics from logs), [strace-parser](https://gitlab.com/gitlab-com/support/toolbox/strace-parser) (analyze raw `strace` output), [gitlabsos](https://gitlab.com/gitlab-com/support/toolbox/gitlabsos) and [kubeSOS](https://gitlab.com/gitlab-com/support/toolbox/kubesos) (get all logs and other data from customers), etc.
  - [Support Team Bot](https://api.slack.com/apps/A07DSM5C2H5) - A Slack integration owned by the Support team, mainly used to provide webhooks so other projects in the Support Toolbox can post to Slack in an automated way ([Support Daily Slackbot](https://gitlab.com/gitlab-com/support/toolbox/support-daily-slackbot), [SWIR-Slack Bridge](https://gitlab.com/gitlab-com/support/toolbox/swir-slack-bridge), [cmoc-handover-message](https://gitlab.com/gitlab-com/support/toolbox/cmoc-handover-message)). The main owner is [@manuelgrabowski](https://gitlab.com/manuelgrabowski), [@kslaats](https://gitlab.com/kslaats) and [@bcarranza](https://gitlab.com/bcarranza) also have access.
- [GitLab Sandbox Cloud](/handbook/company/infrastructure-standards/realms/sandbox/#how-to-get-started) - Create test instances, see [guidance](../workflows/test_env.md#gitlab-sandbox-cloud-for-gcp-preferred)
- [GitLab Development Kit](https://gitlab.com/gitlab-org/gitlab-development-kit)
- [CustomersDot admin](https://customers.gitlab.com/admin/) - Where to manage Self-Managed licenses and where customers manage their subscriptions.

### External tools

- [ExplainShell](https://explainshell.com/) - Break down a terminal command
- [Espanso](https://espanso.org/) - Versatile text expander (a.k.a. text replacer or canned response tool)
  - Be sure to check out the [GitLab Support Espanso package](https://gitlab.com/gitlab-com/support/toolbox/espanso/) for a bunch of ready-to-use expansions!
- [Insomnia](https://insomnia.rest/) - Build, debug, and test API queries, and generate the code for them
- [iTerm2](https://iterm2.com/) (macOS) - Terminal emulator with robust theming and customization options
- [Itsycal](https://www.mowglii.com/itsycal/) (macOS) - Menu bar calendar with more flexibility than the system widget
- [LanguageTool](https://languagetool.org/) - Free, **offline** grammar, spelling, and style checker
- [Obsidian](https://obsidian.md/) - Super customizable markdown notetaking app with tons of themes and addons
- [Raycast](https://www.raycast.com/) (macOS) - Omnibox helper with tons of plugins for emoji, clipboard history, unit conversions, calculations, search, a confetti effect, and more
- [Zed](https://zed.dev/) - Lightweight but powerful IDE
- Menu bar clocks (macOS)
  - [iStat Menus](https://bjango.com/mac/istatmenus/) - Robust system monitor for the toolbar, including highly customizable clock options
  - [UTC Time](https://sindresorhus.com/utc-time) - Simple app for displaying UTC time, with options to copy various date formats

### Useful Browser Extensions

- Copy As Markdown - Used to copy the element in current page as markdown format ([Chrome](https://chrome.google.com/webstore/detail/copy-as-markdown/fkeaekngjflipcockcnpobkpbbfbhmdn)/[Firefox](https://addons.mozilla.org/en-US/firefox/addon/copy-as-markdown/))
- Zendesk Download Router - Automatically routes Zendesk downloads into separate folders by ticket number ([Chrome](https://chrome.google.com/webstore/detail/zendesk-download-router/pgfhacdbkdeppdjgighdeejjfneifkml)/[Firefox](https://addons.mozilla.org/en-GB/firefox/addon/zendesk-download-router/))
- GitLab Web Debugger - Aides in identifying the root cause of page load errors on GitLab.com and internal GitLab instances ([Chrome](https://gitlab.com/gitlab-com/gl-infra/gitlab-web-debugger))
- [Zendesk Quicktab](https://support.zendesk.com/hc/en-us/articles/6443360776346-Installing-the-Quicktab-Google-Chrome-extension) - Opens Zendesk tickets in a single browser tab ([Chrome](https://chrome.google.com/webstore/detail/quicktab-for-zendesk-by-t/hhbimbckgheipimadcknkfogegmpoibj))
- Calendly Meeting Scheduling Software - ad-hoc meetings, one-click booking ([Chrome](https://chrome.google.com/webstore/detail/calendly-meeting-scheduli/cbhilkcodigmigfbnphipnnmamjfkipp))
- GitLab Screen share mode - allows to hide confidential information on your GitLab screen ([Chrome](https://gitlab.com/leipert-projects/gitlab-screen share-mode#chrome)/[Firefox](https://gitlab.com/leipert-projects/gitlab-screen share-mode#firefox))
