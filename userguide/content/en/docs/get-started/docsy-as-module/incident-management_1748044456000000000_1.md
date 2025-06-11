---
title: "Proposed Use Case - Incident Management"
description: "Downtime is expensive and you can lower MTTR with GitLab Incident Management."
---

<!--

-->

#### Who to contact

| PMM | PM |
| ---- | --- |
| @supadhyaya  | @abellucci |

## The Market Viewpoint

## Incident Management

Downtime is expensive. The cost of downtime also compounds because customers lose trust every time your product is not available or is unreliable. It behooves organizations to not just build resilient applications that are available 24x7, but also enable an incident response capability that is efficient and reliable.

Because downtime is expensive. There is high pressure for the team responsible for incident management. When the team lacks the right tools to respond to incidents, their jobs become unnecessarily stressful and burn-out occurs. This snowballs into more outages leading to poor business outcomes.

Incident Management is a critical tool in your DevOps toolbox. The right incident management tool helps incident responders to be notified, streamlines communication and coordination, assists in diagnosing problems, facilitates remediation, and helps your entire organization to learn and to improve.

## Personas

### User Persona

- [Devon the DevOps Engineer](/handbook/product/personas/#devon-devops-engineer)
- [Allison in Application Ops](/handbook/product/personas/#allison-application-ops)
- [Priyanka the Platform Engineer](/handbook/product/personas/#priyanka-platform-engineer)

### Buyer Personas

Buyers are going to be Senior Managers or Directors of engineering, infrastructure, operations, or reliability teams. They typically lead 10-100 people depending on the set up of the company.

## Industry Analyst Resources

Incident Management is frequently referred to as Incident Response from the analyst perspective. Sometimes it is categorized under [ITSM](https://en.wikipedia.org/wiki/IT_service_management) (IT Service Management)

- Gartner
- Forrester
- 451

## Market Requirements

### Integrate alerting sources

Ability to integrate with any alerting source and consume alerts for IT service disruptions or outages. Alerts can be received in HTTP or email formats. Often tools will provide proprietary

- Typical features
  - Integrate via HTTP
  - Integrate via Email
  - Proprietary integrations with popular monitoring tools
  - View credentials for integrations
  - Ability to reset auth tokens
- Value: Aggregate alerts from all sources saving the response team time because they have a single tool to check when something goes wrong.

### Alert Triage

All incoming alerts are aggregated in a list to streamline triage. Each alert has a detail page that shows the payload and an audit trail of actions taken on the alert. The status of an alert can be changed to show state and progress and alerts can be assigned to demonstrate ownship.

- Typical features
  - List of alerts that shows high-level details
  - Alert payload
  - Links to metrics and logs
  - Ability to change status
  - Ability to assign an alert
  - Audit trails showing actions taken on alerts
- Value: Notification from monitoring tool that there is a problem. Provide details on service outage or disruption to aid the responder in starting their investigation.

### Incident Response

All incidents are aggregated in a list to streamline triage. They also show up in Issue lits and on issue boards to fit the unique workflows of different teams. Incidents can be created manually or automatically from an alert. When an incident is created from an alert, it contains all of the alerts details. Incidents coordinate response and collboration.

- Typical features
  - Link to originating alert
  - Alert payload
  - Description
  - Timeline
  - Discussion
  - Ability to assign
  - Ability to set severity
  - Slack integration
- Value: Coordinate response workflows by providing a SSOT for collaboration, communicating with stakeholders, and collecting findings

### On-call Schedule Management

Set-up schedules for responding on-call. Admins have flexible options for creating schedules and adding responders to the schedules. Schedules are used in Escalation policies to identify who is on-call when an alert is triggered. Responders get to set up paging policies with preferred paging methods.

- Typical features
  - Rotations
  - Escalation Policies
  - Schedules Overrides
  - Personal paging policies
- Value: Provide peace of mind to response teams that critial alerts and incidents will reach the right person at the right time. Help teams distribute and rotate on-call responsibilities which is a very stressful job.

### Post Incident Review

Review what happened during a fire-fight in a blameless setting. Walk through the incident timeline and notate it with learnings, places to improve, and things to investigate. Create after action items to continuously improve.

- Typical features
  - Create post incident review linked to incident
  - Ability to annotate incident timeline
  - Create after action items
- Value: Faciliate post incident review to help build a blameless culture focused on continuous improvement and documentation.

## The GitLab Solution

## How GitLab Meets the Market Requirements

| Market Requirements | How GitLab Delivers Today | Demos |
| ------------------- | ------------------------- |-------|
|Integrate alerting sources | We offer the ability to create HTTP endpoints for customers to send alert to. We offer a proprietary Prometheus integrations that receives alerts from AlertManager | TBD |
|Alert Triage|Users can triage alerts in the alerts list with column sorting capabilities to filter to the most important ones. Clicking on an alert takes the user to the alert details where the user can view the payload, change the status, and assign it to someone. All actions taken on the alert appear as a system note in the audit trail for the alert.|TBD|
|Incident Response|Users can create incident manually or set up a project to have them created automatically for all alerts that are created in GitLab. Incidents contain alert details, an editable description, and comments so users can collaborate during a fire fight. A user can promote the incident to an externally facing status page to communicate with external stakeholders.|TBD|
|On-call schedule management|[On-call schedule management MVC](https://gitlab.com/groups/gitlab-org/-/epics/4544) is planned to release in 13.10. The MVC will enable users to create a single schedule in a project that contains multiple rotations. All alerts received to that project will email the on-call responder in the scehdule.|TBD|
|Post Incident Review|Users can create an issue and link it to a closed Incident to execute the Post Incident Review. After action items can be created as additional issues.|TBD|

## Top 3 Differentiators and Key Features

| Differentiator | Value | Proof Point  |
|----------------|-------|--------------|
| On-call schedule management integrated with your dev platform | Easily transition your development to being on-call for the code that they write | TBD |
| Triage alerts and incidents in the same platform where you will deploy the fix |Shorten time to resolution. Easily associate incidents and patches + after actions items |TBD|

## Competitive Comparison

|Competitor|Market Position|Strengths|Weaknesses|
|----------|---------------|---------|----------|
|PagerDuty|Stand-alone incident management tool. Entrenched in the enterprise. We are starting to see them lose their foothold as the market shifts towards workflow tools including incident management versus companies relying on one specific tool.|Came into market on the right wave. Has a large customer base that is entrenched in the tool and it is hard to get a company to switch incident management platforms. Robust feature set. Cloud based HA solution.|Considered very expensive. Stand alone tool that does nothing else. Must be integrated with everything. Has a rap for poor customer service/success.|
|Opsgenie|Part of the Atlassian product suite - acquired in 2018. Less market share than PagerDuty - we rarely hear of GitLab customers using it. Considered "more progressive". One example of an Incident Management company becoming an offering of a workflow tool.|Very flexible tool with an intutive interface. Strong brand.|TBD|
|ServiceNow|Huge workflow tool that is entrenched in the enterprise. Has been slowly developing out-of-the-box incident management workflows for the last several years. Leans towards enabling traditional ITSM/ITL workflows.|Very flexible tool that offers users options to customize everything. Can easily expand to on-call teams because it is likely being used in other parts of the business.|Requires a lot of set up. People are not going to purchase it just for Incident Management. Lacks Incident Management specialized experience and features.|
|Splunk On-call|Formed by the VictorOps acquisition in 2018. Rebranded to Splunk On-call at the end of 2020. Is one part of three that makes up the Splunk Observability suite. Has a small marketshare.|VictorOps & Splunk have a very strong brand and a following. |Splunk has divested in Splunk on-call and reduced team responsible for it. Users are not going to purchase Splunk just fo Splunk on-call. Splunk itself is very expensive. Tool is inflexible and is difficult for large teams to use.|
|Xmatters||||
|DataDog Incident Management|A relatively new addition to DataDog's observability platform, introduced in 2020.|It has the advantage of having monitoring and incident response all housed within one integrated application. DataDog is a market leader in the Monitoring space and has a large pre-existing customer base to expand into. |Relatively new. Does not have on-call schedule management meaning that someone would also need an incident management tool to use it. Is proprietary to DataDog. |

## Enablement & Training

## Use Cases

This table shows the recommended use cases to adopt, links to product documentation, the respective subscription tier for the use case, and product analytics metrics.

| Use Case | Description | Links to documentation | Applicable Subscription Tier | Metrics |
|----------|-------------|------------------------|------------------------------|---------|
|SRE team|This is a team of 10-30 people at a progressive company. In addition to responding on-call to incidents, they are involved in the architecture and maintenance of the infrastructure of the cloud-native services their company provides. They are agile and effective. They are committed to continuous improvement and have post-incident reviews built into their regular practices. They evangelize DevOps throughout their organization. They try to automate as much of their workfflows as possible. This type of team will be the ones submitting the most feaure requests and really pushing us (GitLab) to be more innovative.|Ultimate|TBD| |
|Development team|This team can range from 10-500 people. This is a team of engineers who are responsible for developing the software. They have recently been asked to be on-call as their organization moves through the DevOps transformation. They will rarely solve an incident themselves, they are much more likely to be paged to join a fire-fight with operations team members. More progressive organizations will have figured out a way to page engineers based on the area of the code-base they contribute to. In these teams it is common to find a lot of single points of failure (i.e. Senior team members that has a lot of domain knowledge)|Premium, Ultimate|TBD| |
|Support team|This team is typically 5-20 people and usually belongs to a much larger Support department. Support teams are reactive to customer reported outages and are the liasion between the company and the customer during a fire-fight. They handle stakeholder communication. We find these teams as traditional and progressive companies alike. Support teams are going to be satisfied with a "just-good-enough" solution. |Premium, Ultimate|TBD| |

## Discovery Questions

**Question - What tools are you using for Incident Management today?**

- Answer: "Home-grown. We built and maintain our own solution."
- Response and Follow-up Questions: Wow! Seems like a lot of work to create an maintain. Tell me about your system.
- Things to listen for: Maintenance is time consuming and unreliable, we couldn't afford a real tool.

   -OR-

- Answer: "We use PagerDuty/Opsgenie/ServiceNow."
- Response and Follow-up Questions: Tell me about your experience using that tool.
- Things to listen for: It's expensive, we are using the free or cheapest tier, customer support is poor, it is missing feature X.

## Resources

### Direction

Check out the [Incident Management category direction page](https://about.gitlab.com/direction/service_management/incident_management/) for future vision and plans.

### Documentation

[Incident Management documentation](https://docs.gitlab.com/ee/operations/incident_management/)

### Presentations

- [Sales Enablement Deck](https://docs.google.com/presentation/d/1-RhyNLc325DrswPu11nX1NKksHsLQhv_WqPaYryWCD0/edit?usp=sharing)
- [Customer Pitch Deck](https://docs.google.com/presentation/d/1Q9feGGgOjqHQ2CzUnHbgINrybr-qVU5UFPKfe4jXTqw/edit?usp=sharing)
