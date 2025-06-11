---
title: "Security Awareness Training Program"
---

## Security awareness training program

The GitLab security awareness training program provides ongoing training to GitLab team members that enhances knowledge and identification of cybersecurity threats, vulnerabilities, and attacks. Security awareness training is provided by [ProofPoint](https://gitlab.ws01-securityeducation.com/), GitLab's third party provider, and will help satisfy external regulatory requirements and bolster customer assurance. The training campaigns designed to provide GitLab team members with the information they need to protect themselves and GitLab from loss or harm, highlight their role in securing GitLab on a daily basis, and empower them to make the right decisions with security best practices.

## When will security awareness training occur?

New Hire security awareness training is required to be completed during onboarding. New Hire security training will be automatically assigned to you on day 1 of orientation as soon as you access the [ProofPoint](https://gitlab.ws01-securityeducation.com/) tile via Okta.

Annual security awareness training will occur in the second quarter of each fiscal year. Additional role-based awareness training may be assigned as needed. Prior to the security awareness training taking place, a general notification to the GitLab organization will be posted to the `#whats-happening-at-gitlab` Slack channel.

## Who will receive the security awareness training?

The successful completion of new hire and annual security awareness training is a compliance requirement for GitLab, Inc. As part of these requirements, 100% of active GitLab team members, contractors/Temporary Service Providers (TSPs), and others with access to [Red, Orange and Yellow data]({{< ref "data-classification-standard#data-classification-levels" >}}) are required to successfully complete this training.

Exceptions will be made for any individuals on extended leave at the time the campaign is launched. Upon their return from extended leave, they will be added to a catch-up campaign at a later date.

Contractors/TSPs that are able to show evidence of equivalent training completion within the calendar year will also be marked as an exception to the campaign.

For annual security awareness training, all team members hired prior to May 1 of the current year will receive an email via ProofPoint from GitLab Security <awareness@securityeducation.com> that will contain a link to access the training(s). GitLab team members hired after May 1 of the current year will have undergone New Hire security orientation training as part of their onboarding and therefore will not be required to take the annual security awareness training until the following year.

An additional [Secure Coding]({{< ref "secure-coding-training#gitlab-secure-coding-training" >}}) training module must also be completed by 100% of all active GitLab team members + contractors/TSPs.

By default, GitLab team members within the Engineering Department and the sub-departments of Cost of Sales, Development, Incubation Engineering, Infrastructure and Quality that have titles with `Engineer` or `Developer` **AND** write code as part of their role (even Infra-as-code) will be assigned the additional training.

Other departments outside of Engineering such as Finance and Marketing also include team members that write code and will be required to complete training.

### Contractors (Temporary Service Providers)

Internal Contractors/TSPs (with a GitLab email address) and external Contractors/TSPs (non-GitLab email address) that have access to production data are required to complete new hire security training during onboarding and the annual security awareness training thereafter.

Internal contractors/TSPs will be assigned training via ProofPoint. External contractors/TSPs will be sent an email with a training video and handbook links to review.

#### Training exceptions

- Contractors/TSPs that do **NOT** have access to any internal systems or sensitive data are **NOT** required to complete GitLab's annual training. However, they must complete training during onboarding.
- Contractors/TSPs that have been offboarded are not required to complete training, but an [offboarding issue](https://gitlab.com/gitlab-com/temporary-service-providers/lifecycle/-/issues) must be provided as proof of termination.
- Contractors/TSPs that are able to show evidence of equivalent training completion within the calendar year will be marked as an exception to the campaign.  An [exception request](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-compliance-commercial-and-dedicated/sec-compliance/exceptions/-/issues) must previously exist or be created.

## What if a Team Member is on Extended Leave and should be marked as an Exception?

People Ops + Security Governance are collaborating to create an automated process to mark exceptions for team members that are on extended leave. However, as this is currently a manual process, the list may not be real-time. The report is provided 1 week prior to the launch of the training campaign, and the team members included on the report will be removed from the current training campaign and marked as an exception.

If a team member is not able to complete their training by the active campaign due date, an [exception request](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-compliance-commercial-and-dedicated/sec-compliance/exceptions/-/issues) is required to be submitted and acknowledged by People Ops. The team member will be marked as an exception and removed from the active campaign.

If you are a manager and are notified that one of your direct reports has not completed training, but they are on extended leave, please submit an [exception request](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-compliance-commercial-and-dedicated/sec-compliance/exceptions/-/issues), tag @sec-governance, and provide an update. We will follow the correct procedure to remove the team member from the active campaign.

## How long will the training take?

The security awareness training(s) have been limited to 30 minutes in an effort to find the best return of security investment from team members' time.

## What will be covered in the training?

Security awareness training is a critical component of GitLab's security program and key to ensuring that GitLab team members are continuously educated in security core competencies.

A GitLab customized handbook first training is provided via ProofPoint. To receive full credit, the training + annual policy reviews must be completed to identify what you have learned.

## What happens if training is not completed?

Team members will have up to 15 days to complete the training. If the training is not completed, Security Governance will send weekly reminder notifications requesting completion of the training.
If required, we will communicate incomplete assigned trainings to managers for assistance with completion and escalations to VPs if required. Demonstration of a completed training supports compliance with the Security awareness training program and will strengthen our regulatory requirements.

We are required to reach 100% participation for regulatory purposes. Team members that do not complete training within the required timeframe (minus exceptions) may have repercussions of their access being disabled until training has been completed. Further penalties may be incurred on a case by case basis.

## Security awareness training metrics

The Security Governance team will track the annual security awareness training completion metrics and publish them in a GitLab Issue. Once the training campaign has completed, the Security Governance team will provide results in the [Security Awareness Training Program](https://gitlab.com/gitlab-com/gl-security/security-assurance/governance/security-awareness-training) project.

## Security awareness training program maturity model

GitLab leverages the SANS Security Awareness Maturity Model to gauge the maturity of its program. GitLab's current maturity level is **Stage 2 - Compliance Focused.**

![SANS Security Awareness Maturity Model](/handbook/security/security-assurance/images/sansmaturitymodel.png "SANS Security Awareness Maturity Model")

### Questions and Answers

*Why are we using an external vendor?*

- GitLab's internal learning platform doesn't yet have the features required to support security training requirements. The decision was made to utilize an external solution that would be able to provide robust training and a consistent process that we could rely on. We are now collaborating with ProofPoint to run our annual FY2x Security awareness training campaigns.

*How will I access training?*

- All users will have the [ProofPoint](https://gitlab.ws01-securityeducation.com/) tile added to their Okta account dashboard and managed via Single Sign-On.  When training is assigned, all users will receive a personalized link to access their assigned training.

*Why was I chosen?*

- All GitLab team members, contractors and anyone with access to data that is [NOT publicly shareable, and could expose GitLab or its customers to any harm or material impact]({{< ref "data-classification-standard#data-classification-levels" >}}) will be required to complete our security awareness trainings whether it be during new hire orientation or annually.

*I just took New Hire training, why do I have to take it again?*

- We realize that recently onboarded team members have gone through the new hire security training, but there is additional content in the annual security awareness training that we think is valuable to everyone, so anyone hired prior to May 1, will be required to complete the training.

*I don't want to be included, how do I remove myself?*

- All GitLab team members have the responsibility to help keep themselves, team members, the company and the customer secure; all are required to complete assigned training.

*Will my training status be posted publicly?*

- No, we will never post or create metrics which will directly associate a team member's success or failure with a training. If we release metrics company-wide, we will generate non-identifying metrics to be shared internally and public-facing.

*How can I provide Feedback on my experience?*

- Please feel free to add any feedback, comments, concerns on this [feedback issue](https://gitlab.com/gitlab-com/gl-security/security-assurance/governance/security-awareness-training/security-awareness-training-program/-/issues/16).

### Additional Questions, Comments, Concerns?

Please reach out to the [Security Governance Team!]({{< ref "governance" >}})
