---
title: Engaging the Security Engineer On-Call
description: How to Engage the Security Engineer On-Call
---

## Overview

The [Security Incident Response Team (SIRT)]({{< ref "sirt" >}}) is on-call [24/7/365](/handbook/engineering/on-call/#security-team-on-call-rotation) to assist with any security incidents. This handbook provides guidance to help identify the scope and severity of a potential security incident, followed by instructions on how to engage the Security Engineer On-Call (SEOC) if needed.

Information about SIRT responsibilities and incident ownership is available in the [SIRT On-Call Guide]({{< ref "secops-oncall" >}}).

## Incident Severity

Before engaging the SEOC, please review [our severity and priority levels]({{< ref "severity-matrix" >}}) to ensure that the incident has been assigned the appropriate level of response.

For phishing related issues, see [Phishing](#phishing). For other non-urgent issues, see [Low Severity Issues](#low-severity-issues)/

Note: Additional information on Recovery Time Objective (RTO) and Recovery Point Objective (RPO)is available on the [BPC Handbook page](/handbook/business-technology/gitlab-business-continuity-plan/)

The following items are out of scope for SIRT and should be escalated to the respective teams mentioned below:

- **Vulnerability reports and HackerOne**: please escalate to [Application Security]({{< ref "engaging-with-security#vulnerability-reports-and-hackerone" >}})
- **Abuse reports and DMCA notices**: please escalate to [Trust & Safety]({{< ref "trustandsafety" >}})
- **General Customer Inquiries**: please escalate to [Field Security]({{< ref "../../security-assurance/field-security" >}})
- **Self-Managed Instances**: please escalate to [TBD]

## Low Severity Issues

For general Q&A, GitLab Security is available in the `#security` channel in GitLab Slack.

For low severity, non-urgent issues, [SIRT]({{< ref "sirt" >}}) can be reached by mentioning `@sirt-members` in Slack or by opening an issue with `/security` in Slack.

Please be advised the SLA for Slack mentions is **6 hours** on business days.

## Phishing

If you suspect you've received a phishing email and have not engaged with the sender, please see: [What to do if you suspect an email is a phishing attack]({{< ref "phishing#what-to-do-if-you-suspect-an-email-is-a-phishing-attack" >}}).

If you have engaged a phisher by replying to an email, clicking on a link, have sent and received text messages, or have purchased goods requested by the phisher, please [engage the SEOC](#engage-the-security-engineer-on-call).

## Engage the Security Engineer On-Call

If you have identified a security incident or you need immediate assistance from the SIRT:

- **Slack**: use the `/security` slash command

The Slack command triggers SIRT's Escalation Workflow. You will be sent a link to file a security incident using a Tines webform. This form asks questions about the incident that help the SIRT automatically determine *severity* and *priority*. Depending on which labels get assigned, the SEOC will be paged.

For more information on how the form is processed and labels are assigned, consult SIRT's [incident classification]({{< ref "severity-matrix" >}}) methodology.

The workflow uses your answers to create a new issue and track the reported incident. Please provide as many details as possible when answering the open questions to aid the SEOC in their investigation of the incident. If you do not receive a link to the incident issue, please contact a SIRT engineer.

If the security incident prevents you from accessing Slack:

- **Email**: send an email with a brief description of the issue to `panic@gitlab.com`

The SEOC will engage in the relevant issue within the appropriate [SLA](/handbook/engineering/on-call/#security-team-on-call-rotation). If the SLA is breached, the [Security Manager On-Call (SMOC)](/handbook/engineering/on-call/#security-managers) will be paged. Paging the SEOC via email also creates a new issue to track the incident being reported. You may provide a detailed explanation of the incident directly in the issue.

If paged, the SEOC will typically respond within **15 minutes** and may have questions which require synchronous communication from the incident reporter. It is important when paging the SEOC that the incident reporter be prepared and available for this synchronous communication in the initial stage of the incident response.
