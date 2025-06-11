---
title: "Data Platform at GitLab"
description: "GitLab Data Platform Team Handbook"
---

The mission of the Data Platform team is to build a secure and trusted data platform that makes it possible for **everyone to be an analyst** so that our *only* limitations are the data or analysts themselves. We do this **by means of our [GitLab values](/handbook/values/)** and our **[Data Team Principles](/handbook/enterprise-data/#data-team-principles)**

## Data Platform Responsibilities

The Data Platform team is directly responsible for:

- Integrating new data sources to enable analysis of subject areas, activities, and processes
- Keeping the data sources running per established [Service Level Objectives and Tiers](/handbook/enterprise-data/platform/#data-sources)
- Expanding the scalability of pipelines and processes to meet growing data volumes
- Evaluating new technologies to help make our platform more scalable and efficient

## Handbook First on the Data Platform Team

At GitLab we are [Handbook First](/handbook/about/handbook-usage/#why-handbook-first). Any changes to our codebase or process should have a handbook MR created before the work is started or concurrently with the MR to change the code.

For example: If we are adding a data source, we would first create the merge request to update our [the extract and load](/handbook/enterprise-data/platform/) and [system diagram](/handbook/enterprise-data/platform/) sections of our handbook. This MR can be updated as the change is created and merged along with the change.

## Data Platform Team knowledge sessions

We as a Data Platform Team are always eager to gain more knowledge and looking for the latest solutions available. Therefore we allocate (half of) our Data Platform Team meeting every 2 months to invite external speakers. The Data Platform Team meeting is every Tuesday at 2PM UTC and we invite any solution provider to join every first Tuesday of every even month to talk with us about Data and Technology. Feel free to reach out to us pro-actively to join 1 of our Team meetings by opening an [issue](https://gitlab.com/groups/gitlab-data/engineers/-/issues) or contact any of the Data Platform Team members (by email or LinkedIn).

| Date | Discussion topic |
| ---------- | ------ |
| 2022-10-04 | t.b.d. |
| 2022-12-06 | t.b.d. |
| 2023-02-01 | t.b.d. |
| 2023-04-05 | t.b.d. |
| 2023-06-07 | t.b.d. |

---

## Data Platform Team Roles

In order to efficiently operate as a team we designate and assign the following responsibilities to members of the Data Platform team. These assignments are not permanent, but do create a Directly Responsible Individual on the team for these responsibilities. The assigned Engineer is responsible for both maintenance and iterative improvement over these responsibilities.

### Production Operations

Production operations is always our [top standing priority](/handbook/enterprise-data/how-we-work/#standing-priorities) on the Data Platform team and includes all technical operations that support or affect our production environment and the SLOs it supports. This includes, but is not limited to monitoring, testing, deployment, code reviews, and DevOps generally.

### Project Management and Planning

The Engineer assigned the Project Management and Planning responsibility oversees, directs, and improves our [workflow processes](/handbook/enterprise-data/how-we-work/#workflow-summary), [iteration planning](/handbook/enterprise-data/how-we-work/#quarterly-and-iteration-planning), and issue triaging. They ensure that work is getting planned and completed efficiently and that the work being done appropriately supports and enables the goals of both the Data Team and GitLab.

### User Experience

This engineer is responsible for the usability of our data platform. As stated in the Data Platform mission, we are building the platform for everyone. The assigned Engineer proactively finds and solutions around our data platform with special mind to those experiences that are the most difficult to use.

### Security, Compliance & Privacy

This role keeps our platform secure, private, and compliant and will be the point of contact for audit questions as well as the primary engineer responsible for reviewing changes that affect the security and privacy of our data platform. They should also be iteratively improving the security features of our platform.

### Data Warehouse Architecture

In order to keep our iterations inexpensive and increase the usability of our warehouse we have decided to implement a dimensional warehouse. This engineer is responsible for protecting the integrity of our warehouse architecture and leads the vision on where the architecture needs to be improved. All of these changes and protections should keep our customers, both internal an external, as their primary focus.
