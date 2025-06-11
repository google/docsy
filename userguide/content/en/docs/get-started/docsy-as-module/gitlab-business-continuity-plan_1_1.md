---
title: "Business Continuity Plan"
controlled_document: true
---

## Purpose

Business Continuity Plan is the process involved in creating a system of prevention and recovery from potential threats to GitLab. The plan ensures that personnel and assets are protected and are able to function quickly in the event of a disaster.

## Scope

GitLab, by its remote-only nature, is not easily affected by typical causes of business disruption, such as local failures of equipment, power supplies, telecommunications, social unrest, terrorist attacks, fire, or natural disasters. System data from the [Business Impact Analysis](/handbook/security/security-assurance/security-risk/storm-program/business-impact-analysis.html) may be leveraged as part of business continuity planning and testing. Additionally, the BCP works in conjunction with the [Disaster Recovery Plan (DRP)](https://gitlab.com/gitlab-com/gl-infra/readiness/-/blob/master/library/disaster-recovery/index.md).

## Roles & Responsibilities

| Role | Responsibility |
|-----------|-----------|
| GitLab Team Members | Responsible for following the requirements in this procedure |
| Business Technology | Responsible for implementing and executing this procedure |
| Business Technology Management (Code Owners) | Responsible for approving significant changes and exceptions to this procedure |
| Security Risk| Responsible for conducting periodic Business Impact Analysis and applying Critical System Tiers to Tech Stack Systems |

## Procedure

### BCP for Remote Workers

In case of an all-remote company like GitLab, it is sufficient to have simple contingency plans in the form of service-level agreements with companies that host our data and services. The advantage of an all-remote workforce like GitLab is that if there are clusters of people or systems that are unavailable, the rest of the company will continue to operate normally.

The exception to this would be a scenario of a single point of failure, (for example, if one of the Engineering heads who should sign off on triggering the plan is unavailable due to a disaster). In this case we would need an alternate plan in place that covers how to get in contact with the person or people affected by the disaster and trigger this business continuity plan.

### Recovery Time Objective (RTO) and Recovery Point Objective (RPO)

RTO and RPO are two of the most important parameters of a Business Continuity Plan. These are objectives to guide GitLab Infrastructure team in choosing the optimal data backup plan. The RTO/RPO provides the basis for identifying and analyzing viable strategies for inclusion in the business continuity plan. Viable strategy options include any which would enable resumption of a business process in a time frame within the RPO/RTO.

#### What is a Recovery Point Objective?

Recovery Point Objective (RPO) is the interval of time that might pass during a disruption before the quantity of data lost during that period exceeds the Business Continuity Plan’s maximum allowable threshold.

#### What is a Recovery Time Objective?

The Recovery Time Objective (RTO) is the duration of time a service level or business process must be restored after a disaster, in order to avoid risks associated with a break in continuity.

### What triggers the Business Continuity Plan

For a business continuity plan to be effective, it needs to be triggered as soon as possible; too early or late can reduce its efficacy. Key decision points to consider when a BCP has to be triggered or invoked are given below:

- When an incident turns into an event like a disaster, breach, or something which classifies as a [Severity 1](/handbook/security/engaging-with-security/#severity-and-priority-labels-on-security-issues)
- When the estimated time of resolution for a potential breach is greater than the normal estimated time for regular [security incidents](/handbook/security/security-operations/sirt/sec-incident-response.html)
- When the recovery of an incident is uncertain, a decision must be made to invoke the business continuity plan if the disruption cannot be resolved within the specified [incident recovery timelines](/handbook/security/security-operations/sirt/sec-incident-response.html)
- When resolution of an incident with critical customers, depending on their service-level agreements is delayed, then the BC plan must be triggered

### Data Continuity System

This section provides details about the production environment that must be available for GitLab.com (for both SaaS services Dedicated and Commercial) to run effectively:

GitLab.com and customers.gitlab.com are hosted on Google Cloud Platform. Dedicated is hosted on AWS.

**Priority::1: Outage would have immediate impact on GitLab customer/user operations**

1. Disruption of service of Google Cloud Platform and AWS, specifically the region in which `GitLab.com`, `dev.gitlab.org` and `ops.gitlab.net` are hosted (for both Dedicated and GitLab.com).
    - Effect: a loss or degradation of service, of either Google Cloud Platform or AWS means that GitLab.com or GitLab Dedicated are not available. This affects anyone who uses GitLab.com or GitLab Dedicated to host their repositories and may prevent GitLab team members from completing their work. GitLab.com is also the primary server where GitLab CE and EE source code and packages are hosted.
    - Solution(s): Ensure that `ops.gitlab.net` and `dev.gitlab.org` mirror critical repositories necessary for operating GitLab.com and GitLab Dedicated, and that they are running from different regions. Ensure that there are many other servers across the globe where GitLab CE/EE is readily available.
    - Effect: Security releases are developed on `GitLab.com` and staged on `dev.gitlab.org` before being brought to production on GitLab.com; Parts of these may be lost or unavailable for the duration of the disruption.
    - Solution(s): Depending on the duration and nature of the disruption, the solution is to wait for service to be restored (minimal duration), or build a new set of servers. Leverage database snapshots, and initiate recovery from backup as it is relatively quick.

1. Unavailability of support staff in case of a customer emergency.
    - Effect: emergency response times are greater than intended.
    - Solution(s): The team is distributed geographically (except during team get-togethers). Customer emergencies are handled by *any* person who is in the [on-call rotation](/handbook/engineering/on-call/). The on-call load is distributed at many levels, service engineers, production engineers, and even developers can be summoned when we have an outage or a customer incident. Emergencies also trigger automatic notifications on our internal chat system, alerting the entire company. There is also an ongoing effort to publish our [runbooks](https://gitlab.com/gitlab-com/runbooks), explaining how we manage our infrastructure and how we deal with outage cases.

1. Disruption of service of ZenDesk.
    - Effect: support workflows are disrupted. New tickets cannot be created,
      existing tickets cannot be responded to.
    - Solution(s): If the outage has lasted for more than 4 hours, Support will
      update the GitLab status page to indicate the support system is down and
      to direct all requests to a temporary inbox. Support agents will work via
      this inbox for the duration of the outage. Agents will log the emails
      worked. After service is restored, Support Readiness will work to get the
      data from the emails back into the support system.

**P2: Outage would have immediate impact on GitLab ability to continue business**
Malicious Software attack and hacking or other Internet attacks.

- Effect: depends on attack.
- Solution(s): We log and track any access that happens on any server in the fleet using logstash/kibana at log.gprd.gitlab.net.

**P3: Outage greater than 72 hours would have impact on GitLab ability to continue to do business**
Disruption of service from Salesforce.com, Zuora, NetSuite, Google Workspace

- No failover plan currently.

**P4: Non critical system**
Disruption of service from TripActions or internal chat tool (Slack).

- When TripActions is down, team members can use their own travel booking tool and expense it to GitLab with reason for exception
- When Slack is down, team members can use Zoom Chat as [outlined here](/handbook/communication/#slack-is-down).

### Communication Plan and Role Assignments

When it comes to a disaster, communication is of the essence. A plan is essential because it puts all team-members on the same page and clearly outlines all communication. Documents should all have updated team-member contact information and team-members should understand exactly what their role is, in the days following the triggering of the BC plan. Assignments like setting up workstations, assessing damage, redirecting phones and other tasks will need assignments if you don’t have some sort of technical resource to help you sort through everything.

Each GitLab team should be trained and ready to deploy in the event of a disruptive situation requiring plan activation. The plan of action steps, procedures, and guidelines will be documented in their team runbooks page (currently under development) and should be available offline. This should have detailed steps on recovery capabilities, and instructions on how to return the system to normal operations.

More details on this will be covered in the `BC plan - roles & responsibilities section which is in development`.

### Backup check

[Make sure that backups are performed daily](https://gitlab.com/gitlab-com/gl-infra/readiness/-/blob/master/library/disaster-recovery/index.md), and include running an additional full local backup on all servers and data in the Business Continuity preparation plan. Run them as far in advance as possible tp ensure that they’re backed up to a location that will not be impacted by the disaster. [Alternate storage provisioning](https://gitlab.com/gitlab-com/gl-infra/readiness/-/blob/master/library/disaster-recovery/index.md).

### Distribute and Verify the Plan / Approval from Senior management

- GitLab documentation related to all procedure and guidelines detailing the Business Continuity and Disaster Recovery must be reviewed, updated, and formally approved by [GitLab leadership](/handbook/leadership/)
- After developing basic guidelines, this plan will be distributed as a work in progress to the core team
- The core team will review to verify that all technical details are covered and deficiencies exist
- The core team will review and add guidelines so that all related [DRIs](/handbook/people-group/directly-responsible-individuals/) are clear on what is required in all situations
- GitLab team members must be asked to confirm their current details, such as phone numbers and emergency contacts on an annual basis
- Managers or team leads will share the relevant parts of the plan to all GitLab team members based on their role and department, and verify that they know what to do in the event of an emergency

### Vendor communication and service restoration plan

A plan cannot be successful without restoring customer confidence. As a final step, ensure that there is a detailed vendor communication plan as part of the Business continuity preparation plan. This plan will check for all the systems and services to ensure normal operations have resumed as intended once the damage is repaired in the area. Also, include the section to check with the main service providers on restoration and access.

### Root Cause Analysis

Any time the business continuity plan is activated, a root cause analysis should be performed to identify lessons-learned. The root cause analysis should review the trigger of the event and recommend remediations that prevent future occurrences of the issue. Additionally, if opportunities for improvements in the response to the specific business continuity scenario are identified, the business continuity plan and applicable procedures should be updated to reflect those lessons learned.

## Business Continuity Test

After formalizing the business continuity plan, or BCP,  the next important step is to test the plan. Testing verifies the effectiveness of the plan, trains plan participants on what to do in a real scenario, and identifies areas where the plan needs to be strengthened. A test of the plan review, has to be conducted at least annually.

GitLab's first test of the business continuity plan was performed in April 2020 and tests will be conducted at least annually or when significant business changes occur.

### Why Business continuity testing is important

- To ensure that the current backup facilities and procedures are feasible and compatible to achieve the determined RTO.  Can backup systems withstand a cyberattack.
- To confirm that your continuity objectives are met (RTO and RPO). Accordingly provide training to the team managers and team members.
- To evaluate the company’s response to various kinds of disruptive events .. Emergency communication strategy, is it functioning as expected. - How quickly can everyone be informed about an incident.
- To identify areas in the plan that need modification. Improve systems and processes based on test findings. And accordingly maintain and update the BC plan.

### Testing the plan

Testing can present a lot of challenges. It requires investing time and resources. With that in mind, to start with, it may make more sense to conduct a tabletop test at a conference room, rather than involving the entire organization in a full-blown drill.
Also an initial "dry run" of the plan can be performed, by conducting a structured walk-through test of the approved BC plan. The initial testing is done in sections and after normal business hours to minimize disruptions.
Subsequent tests can occur during normal business hours. An actual test-run can be performed eventually.
Based on the gaps and weaknesses learnt from the testing, underlying problems should be corrected and the plan updated accordingly.
The various types of tests that can be conducted include: checklist tests, simulation tests, parallel tests, and full interruption tests
Not testing the plan will put both the business and customer confidence at risk.

### Business Continuity Plan Testing Scenarios

There are several types of tests, such as a plan review, a tabletop test, or a simulation test, which was detailed in the previous section.
Some testing scenarios that can be performed, are given below:

1. Data Loss/Breach

    - One of the most prevalent workplace disasters today. Cause of data loss or breach could be due to any of the following:
        - Ransomware and cyberattacks
        - Unintentionally erased files or folders
        - Server/drive crash
        - Datacenter outage
    - Data is mission-critical and losing it can have many serious consequences, such as significantly impacting sales and logistics applications.
    - The goal is to regain access to that data as soon as possible. Restoring backup is the solution. However, who’s responsible for that? What’s the communication plan in this case? What are the priorities? Who needs to be contacted right away? Are there any vendors involved? These and many other questions will be answered during this test.

1. Data Recovery Testing

    - This testing scenario, is used to make sure that the backup and recovery  systems work as intended. To prove that, run a test that involves losing a bulk of data, and then try to recover it.
    - Some of the elements to be evaluated include the RTO, and whether the team met its objectives.
    - Also make note of, if there were any damage to the files during recovery? Was the backup stored in the cloud, recovered successfully and on time.

1. Emergency Communication

    - Being able to communicate during a disaster or an emergency is crucial. Yet, the most disruptive events can leave with no traditional means of staying in contact.
    - For these scenarios, the BC plan needs to outline the actions to be taken. An alternate mode of communication should be tested for its reliability and efficiency, for a company like GitLab which has team members all around the globe.
    - Regular updates to all GitLab team members contact information, so that all of them can receive timely notifications thus streamlining the disaster scenario process.

## Exceptions

Exceptions to this procedure will be tracked as per the [Information Security Policy Exception Management Process](/handbook/security/controlled-document-procedure/#exceptions).

## References

- Parent Policy: [Information Security Policy](/handbook/security/)
- [Business Impact Analysis](/handbook/security/security-assurance/security-risk/storm-program/business-impact-analysis.html)
- [Disaster Recovery Plan (DRP)](https://gitlab.com/gitlab-com/gl-infra/readiness/-/blob/master/library/disaster-recovery/index.md)
