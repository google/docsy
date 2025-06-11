---
title: "Infrastructure Escalations"
---

## Infrastructure Engineering Team Process for Incident Management

Please reference Infrastructure's Incident Management [Handbook Page](/handbook/engineering/infrastructure/incident-management/)
 for a definitive record of roles & responsibilities, communication and workflow
 around infrastructure incidents when they occur.

## Customer Communications for Infrastructure Incidents

For any incident declared as `~severity::1`/`~severity::2`, an [incident review](/handbook/engineering/infrastructure/incident-review/#review-criteria)
 is required. Incident reviews are authored asynchronously in the incident issue,
 and their workflow is tracked on the [Production Incidents Board](https://gitlab.com/gitlab-com/gl-infra/production/-/boards/1717012?label_name[]=incident).
 For full detail of the incident review process, please reference Infrastructure's
 [incident review process](/handbook/engineering/infrastructure/incident-review/).  CSMs can self-serve updates on SaaS incidents by reviewing the SaaS weekly meeting, the agenda for which, and additional steps for CSMs when a topic is not listed, can be found in the [infrastructure handbook section found here](/handbook/engineering/infrastructure/incident-review/#review-of-root-causes-and-corrective-actions).

Customer Success will seek to use the incident issue as the single source of truth (SSOT)
 and encourage CSMs and their customers to reference the issue for updates. This aims
 to ensure that duplicated information does not become stale.

In the event that an incident issue is confidential, CSMs should leverage the
 publicly-available communications such as those shared by the CMOC on https://status.gitlab.com.

Immediately following the resolution of an incident, asynchronous work to author
 an Incident Review is started within the incident issue. Within seven working days,
 the Incident Review should be complete, and the last Incident Manager assigned to the response is responsible for labelling
 it appropriately and adding it to the agenda for Infrastructure's
 [Synchronous Review Meeting](/handbook/engineering/infrastructure/incident-review/#synchronous-review-meeting-sessions)
 held weekly on Tuesdays, and published in the GitLab Team Meetings calendar.

For S1/S2 incidents where a CSM has reason to believe their customer has been impacted,
 it is highly recommended that the CSM reach out proactively to their customer(s)to better understand
 if and how the customer has impacted and to determine next steps. For most customers,
 proactive CSM communication, in addition to the platform notifications and incident
 issue updates, will be sufficient.

### Incidents Impacting All Customers

For our top ARR customers or those significantly impacted by an incident, a customer-facing
 [Incident Review](/handbook/engineering/infrastructure/incident-review/#review-of-root-causes-and-corrective-actions)
 may be requested by the customer or by CSM/GitLab leadership. This customer-facing review
 should only proceed after the incident has been internally reviewed during a weekly review.
 A CSM should interface with the Incident Manager to ensure timelines are clear and to coordinate a
 customer-facing meeting. In the instances that a CSM is asked by a customer for
 an RCA with the GitLab team, or feels that one is required, the CSM is to work
 with their CSM Manager on next steps. For the sake of efficiency, we seek to keep
 these meetings to a minimum.

If a CSM or CSMs believe that a written executive summary is required for their customer(s),
 they are to request this summary of CSM management, who will work with Infrastructure management
 to craft the summary and make it available to all CSMs to send to their impacted customers.

### Incidents Impacting One or a Small Subset of Customers

When an incident impacts a single or small subset of customers, the relevant CSM(s)
 are welcome to attend the Tuesday synchronous review meeting to contribute and
 determine the next steps for their customer.

If at any point in the above scenarios an incident creates the requirement for a
 customer escalation, the CSM is to follow our [defined escalation process](/handbook/customer-success/csm/escalations/#definitions-of-severity-levels).
