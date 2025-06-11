---
title: "How the Red Team Operates"
no_list: true
---

## General operation guidelines

We aim to safely and effectively conduct operations in order to emulate relevant adversaries to GitLab.

- We work with the [Threat Intelligence team](../../threat-intelligence/) to identify the most relevant threats to emulate.
- We conduct operations ethically and responsibly [without causing harm](rules-of-engagement.md/#general-safety-guidelines) to GitLab or its team members.
- We maintain a **good trust relationship** with the rest of the Security division and the wider GitLab company.

It's important to us to intentionally and enthusiastically collaborate with the rest of the company, to balance out the semi-private, sometimes hidden nature of our work.

**Win together**: our goal is to improve security at GitLab, and that's the same goal our defensive teams have. We "win" when GitLab wins and security is improved - whether that's by us doing super 1337 hax or by SIRT stopping us in our tracks. We're not trying to establish "dominance" over defensive teams, we partner with them.

### 1. Initial access vector

There are several ways we emulate initial access:

- **Research**. We may conduct operations specifically looking for initial access vectors to exploit. These require substantial time and resources, so we ensure the investment is justified by the potential for security improvements and learning. For example, the [2024 Okta bypass](https://gitlab-com.gitlab.io/gl-security/security-tech-notes/red-team-tech-notes/okta-verify-bypass-sept-2024/) was researched by our team before being responsibly disclosed to Okta.
- **Opportunistic**. Red Team members can also hunt for ways to "break in" to GitLab at any time in the context of an [Opportunistic Attack](../#opportunistic-attacks). This allows us to draw attention to any discoveries and GitLab can quickly remediate. Successful intrusions can then be re-used in future stealth operations as proof of a realistic initial access vector.
- **Collaborative**. [Club Red](../opportunistic-attacks/#club-red) allows team members to collaborate with us to develop an initial access plan. We can leverage their domain knowledge for a greater overall security result for GitLab.
- **Assumed Breach**. Sometimes we create a scenario where we gain initial access to GitLab systems through a trusted insider. This is done in a realistic manner, leaving indicators of compromise ([IoCs](https://en.wikipedia.org/wiki/Indicator_of_compromise)) that reflect an actual breach. From there, we focus on post-exploitation tactics and techniques such as establishing persistence and elevating privileges.

### 2. Operation execution

All operations follow our [rules of engagement](rules-of-engagement.md). We try to leave realistic indicators of compromise to simulate a realistic attack by the chosen emulated attacker.

### 3. Internal disclosure or discovery

A given operation will continue until we are detected or until we disclose internally. Depending on what we find during an operation (for example, if we discover a significant security risk), we may disclose early to mitigate risk.

#### Social resolution

Sometimes our operations involve attacking infrastructure set up by a certain team, socially engineering individual team members, or compromising a system due to misconfiguration set up by a team member.
In any retrospective, we **always** aim to focus on improvements rather than assign blame.

If social engineering is involved, we must be careful to ensure that the individuals involved in the exercise feel well supported and not blamed.
We offer to meet with anyone involved in our social engineering efforts to reassure them and thank them for being part of our operation.

We **never** want anyone to feel like they did something wrong, since our operations test **processes**, not individuals.

### 4. Report and recommendations for security improvements

We then release a [report](#reporting) summarizing the operation and our recommendations for improving security posture. We create issues using the [issue template](https://gitlab.com/gitlab-com/gl-security/security-operations/redteam/redteam-public/resources/red-team-issue-templates), apply the relevant labels, and use this to track [metrics](#red-team-metrics). We then provide our tools and techniques to the Blue Team so they can create relevant detections.

We often work with [Signals Engineering](../../signals-engineering/) and [Security Incident Response Team (SIRT)](../../sirt/) to review our findings, attack steps and review detections and alerts.

### Reporting

All operations end with a final report. We use a publicly shared [issue template](https://gitlab.com/gitlab-com/gl-security/security-operations/redteam/redteam-public/resources/red-team-issue-templates).

Security risks affect everyone, and it is essential to make our reports approachable and consumable to a broad audience. Our goal is to ensure that anyone in the company can understand the reports, even if they don't have a technical or security background, so we strive to [use simple language](/handbook/communication/#simple-language).

If we feel it's needed, we also provide a short (five minutes or less) video summary.

For stealth or higher-visibility operations, it's beneficial to share the story with the entire company. In that case, we post the following to the Slack channel `#whats-happening-at-gitlab` and cross-post it in `#security`:

- A very short summary of the operation, including the video overview if there is one
- A link to the final report
- A link to the retrospective issue to solicit questions and feedback
- A disclaimer to keep the information [SAFE](/handbook/legal/safe-framework/#how-do-we-reinforce-safe).
- A tagged list of individual operation participants as well as the Security Incident Response Team (SIRT) as a whole for awareness since not all team members participate in an operation each time.

By doing this, we help foster a culture of security awareness throughout the organization and ensure that everyone can benefit from our work.

## Red Team Maturity Model

We use a custom maturity model to measure our progress and help guide our decisions. This is loosely based on the [Capabilities Maturity Model (CMM)](https://en.wikipedia.org/wiki/Capability_Maturity_Model). [Our model](https://gitlab.com/gitlab-com/gl-security/security-operations/redteam/redteam-internal/red-team-maturity-model/-/boards/5905165) (available internally only) contains five stages of maturity, each with very specific behaviors we strive to demonstrate and states we hope to achieve.

## Red Team Metrics

### Adoption Rate

A successful Red Team program strengthens an organization's security through recommendations that are accepted and implemented by the organization. We track the lifecycle of these recommendations through to implementation using GitLab.com, calling this metric our "Adoption Rate."

Recommendations start as GitLab.com issues in the project closest to the team that can address them. We classify recommendations using labels:

- Detections & Alerts (`RTRec::Detection`)
- Security Controls (`RTRec::Control`)
- Processes and Procedures (`RTRec::Process`)

We track what happens after a recommendation is delivered by adding a secondary label to the issue with its current status or final outcome:

- Under review (`RecOutcome::UnderReview`)
- Accepted and actively being worked on (`RecOutcome::InProgress`)
- Accepted but backlogged (`RecOutcome::Backlogged`)
- Accepted but blocked (`RecOutcome::Blocked`)
- Fully adopted and closed (`RecOutcome::Adopted`)
- Partially adopted and closed (`RecOutcome::PartiallyAdopted`)
- Not adopted and closed (`RecOutcome::NotAdopted`)

An outcome label is added to the issue within one week of delivering the recommendation. A scheduled CI pipeline checks issues with classification labels to ensure they have an outcome.

### MITRE ATT&CK Mapping

[MITRE ATT&CK](https://attack.mitre.org) is a framework for classifying and describing cyber attacks. We use ATT&CK extensively, because it helps us to align our operations to realistic threats and to speak a common language across security groups.

We use a combination of GitLab CI pipelines and GitLab Pages to build and host two reporting tools from MITRE:

- [MITRE ATT&CK Flow](https://github.com/center-for-threat-informed-defense/attack-flow)
  - [Our internal automation project](https://gitlab.com/gitlab-com/gl-security/security-operations/redteam/redteam-internal/automation/ci-attack-flow)
  - [Our internal build](https://flow.gl-redteam.com/)
- [MITRE ATT&CK Navigator](https://mitre-attack.github.io/attack-navigator/)
  - [Our internal automation project](https://gitlab.com/gitlab-com/gl-security/security-operations/redteam/redteam-internal/automation/ci-attack-navigator)
  - [Our internal build](https://navigator.gl-redteam.com/)
  - [Public blog describing the project](https://about.gitlab.com/blog/2023/08/09/gitlab-mitre-attack-navigator/)

For each completed operation, we build a flow chart to visualize the attack path and indicators of compromise. This chart can be exported as a [STIX 2.1 compliant](https://center-for-threat-informed-defense.github.io/attack-flow/language/) JSON file, meaning it is machine-readable and can be imported into other tools for analysis.

That same ATT&CK Flow file is imported into our ATT&CK Navigator project, which generates a heatmap visualizing our coverage across the ATT&CK matrix. We maintain a single heatmap for each operation, as well as a combined heatmap for all previous operations.

This is s great way to visualize the types of attack techniques we've emulated and helps us understand areas to focus in future operations.

## Is this the Red Team?

### Why we don't answer this question

The goal of a Red Team operation is often to test our policies and procedures when reacting to an actual threat. This includes identifying suspicious activity and following the appropriate runbook to investigate and respond to that threat.

If any team member, at any time, could simply ask _"Hey, this looks suspicious. Is this our Red Team?"_ then this opportunity would be lost. **Instead, all suspicious activity should be treated as potentially malicious and acted upon accordingly**.

We have private Slack channels in place where designated team members can ask the Red Team if a certain activity belongs to them. This helps us to provide realistic opportunities to practice detection and response without escalating too far. For example, we would not want an emulated attack to affect production operations or escalate to third parties.

Managers at GitLab can also [submit a "Red Team Disclosure Request"](https://gitlab.com/gitlab-com/gl-security/security-operations/redteam/redteam-internal/red-team-operations/-/issues/new?issuable_template=request-for-disclosure) at any time. If the request contains evidence related to an ongoing Red Team operation, we will discuss next steps in the Slack channels mentioned above.

You can read more about this process in the ["Requests for Disclosure" section](rules-of-engagement#requests-for-disclosure) of our rules of engagement.

### How the Red Team will respond to this question

If the Red Team is ever asked _"Is this you?"_ by someone other than the designated team members mentioned above, they will respond with the following text:

> Thanks for your vigilance! Any suspicious activity should be treated as potentially malicious. If you'd like to contact security, you can follow the process [here](../../sirt/engaging-security-on-call).
>
> Red Team operations provide an opportunity to practice detecting and responding to real-world attacks, and revealing an operation early might mean we miss out on that opportunity. Because of this, we have a policy to neither confirm nor deny whether an activity belongs to us. You can read more about this policy here: [[.](/handbook/security/security-operations/red-team/how-we-operate/./#is-this-the-red-team)](/handbook/security/security-operations/red-team/how-we-operate/./#is-this-the-red-team).

### How others should respond to this question

Because we want to treat all activity as potentially malicious, anyone else receiving this question should also use a consistent response. Feel free to use your own words. The following can be a guide:

> We want to treat any suspicious activity as potentially malicious. Let's continue following our normal procedures to report and investigate this. Any Red Team operation has controls in place to keep things from escalating too far. You can read more about this here: [[.](/handbook/security/security-operations/red-team/how-we-operate/./#is-this-the-red-team)](/handbook/security/security-operations/red-team/how-we-operate/./#is-this-the-red-team).

If the person receiving this question happens to be a Security Director or a trusted participant in an ongoing stealth operation, they can then use established channels to communicate with the Red Team.
