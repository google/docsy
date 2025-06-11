---
title: "Follow the Sun Coverage - Development Department"
description: "How the development department uses follow the sun coverage and pairing"
---

Follow the Sun Coverage, also known as Follow-the-Sun Model, is a strategy commonly used by global organizations or teams that operate in different time zones. It aims to ensure continuous support and productivity by leveraging time zone differences.

In the Follow the Sun Coverage approach, teams are organized across multiple regions or locations around the world, typically spanning different time zones. As one team's workday comes to an end, another team in a different region takes over seamlessly, ensuring round-the-clock coverage and uninterrupted progress on critical deliverables.

The main idea behind Follow the Sun Coverage is to maximize efficiency and reduce turnaround time by leveraging the availability of team members across different time zones. This allows for work to be passed on from one team to another, ensuring that projects or tasks keep moving forward even when individuals in a particular region are not actively working.

## How GitLab uses Follow the Sun Coverage

- **Support and Issue Management**: GitLab may organize its support teams across different regions to provide continuous assistance to users, customers, and clients. By following the sun, they can ensure that support coverage is available during business hours across multiple time zones, minimizing response times and providing a seamless experience.
- **Development and Collaboration**: GitLab's development teams, spread across different regions, can leverage Follow the Sun Coverage to ensure continuous progress on projects. This approach enables developers to seamlessly hand off work to team members in other time zones, ensuring that development efforts proceed without interruption and taking advantage of the diverse expertise and perspectives available.
- **Incident Response**: In the event of critical incidents or emergencies, GitLab can employ Follow the Sun Coverage to have incident response teams available around the clock. By having teams distributed across different time zones, they can respond promptly to incidents and minimize the impact on customers and services.
- **Project Management**: GitLab may utilize Follow the Sun Coverage to enable effective project management across global teams. With team members working in different time zones, project updates, coordination, and decision-making can happen continuously, ensuring smooth progress and reducing bottlenecks caused by time zone differences.

## Follow-the-Sun Pairing

In time-sensitive situations, we employ a "[Follow-the-Sun](https://www.lucidchart.com/blog/follow-the-sun-model) Pairing" strategy to expedite the delivery of critical deliverables across EMEA, APAC, and AMER regions.

This approach involves forming a group of multiple individuals, each representing one of the regions, to collaboratively author the deliverable. By leveraging time zone variances, the group ensures continuous progress on the deliverable, with one team member seamlessly taking over as another's workday ends. This promotes uninterrupted work throughout the day, maximizing efficiency.

The group members may come from different stages or sub-departments, fostering cross-functional collaboration and drawing upon diverse expertise and perspectives. This strategy reflects our commitment to global collaboration and effective time management, enabling us to accelerate deliverables while ensuring comprehensive support across all regions.

This way of pairing is **less efficient** but faster than if one person worked on the deliverable. The hand off must be **context-rich**. The first pair has to describe all design decisions in detail so the second pair knows which choices were deliberate. This will prevent rework by the second pair. This differs from normal code review, where less context means that the reviewer asks a question (which is significantly less overhead than re-implementing part of the feature).

To ensure effective hand offs and coordination between team members, we have implemented an organizational structure and designated a "Follow-the-Sun DRI" (Directly Responsible Individual) for overseeing the process. The Follow-the-Sun DRI is responsible for coordinating the hand off between regions and facilitating communication among team members.

Note: It's important to assess the suitability of the "follow-the-sun" approach. This approach is best used in the event of escalations or high priority tasks that come up. Examples of this may include (but are not limited to):

- Critical customer fixes
- High severity security issues or
- Corrective actions related to a high severity incident

With this level of urgency to be confirmed by the group's leadership (e.g. Engineering Manager and Product Manager).

## Futher reading and examples

- [Verify - Managing Urgent Priorities](/handbook/engineering/development/ops/verify/#managing-urgent-priorities)
- [MVC - GitLab WebIDE support - Code Suggestions](https://gitlab.com/groups/gitlab-org/-/epics/10549)
