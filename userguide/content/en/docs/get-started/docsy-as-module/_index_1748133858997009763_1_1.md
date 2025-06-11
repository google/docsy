---
title: "Data Team Organization"
description: "GitLab Data Team Organization"
---

---

## Data Team Organization

The Data Team Organization model is guided by five primary business needs:

1. The need for **bespoke data solutions** unique to the GitLab business.
1. The need for **high-performance and reliable data storage and compute** platform to support distributed analyst teams.
1. The need for centers of excellence for **data technologies** and **advanced analytics**.
1. The need for flexible data solutions driven by varying **urgency and quality** requirements.
1. The need to foster **trust, compliance and value driven** insights. 

Based on these needs, the Data Team is organized in the following way:

1. **[Analytics Engineering](/handbook/enterprise-data/#analytics-engineering-team):** Transform raw data into clean, structured, and usable formats for data decision-making. The Lead Analytics Engineer serves as a stable counterpart for business departments and functional analytics teams.
1. **[Data Platform & Engineering Team](/handbook/enterprise-data/#the-data-platform--architecture-team):** **Center of Excellence** for data technologies, including owning and operating the Data Stack
1. **[Data Science Team](/handbook/enterprise-data/#the-enterprise-insights--data-science-team):** **Center of Excellence** for advanced analytics, including delivery of data science projects to the business
1. **[Data Governance and Data Quality Team](/handbook/enterprise-data/):** Help build robust data governance practices and establish data quality frameworks for data quality monitoring and data quality improvement. 

## Data Team Operating Model

The Enterprise Data Team collaborates internally via Key Results. Key Results are planned on a quarterly basis and various team members from the four pillars of the Team can be assigned to a Key Result. The Key Result has a DRI who is the Directly Responsible Individual for the business outcome of the Key Result and leading the Team to success. Each respective pillar on the Team has flexibility to establish their own pillar specific ceremonies as well as processes on how they triage and assign P1-Ops and P3-Other issues that come up. 

It is optional for team members to attend the ceremonies of other pillars. Team members are encouraged to attend other pillar ceremonies where attendance adds value. 

At times, a pillar in the Enterprise Data Team may require collaboration and support from another pillar on an extended basis, lasting multiple quarters, and requiring consistent and deep support across P1, P2, and P3 issues. In these cases, a team member can be assigned as a stable counterpart to the pillar for an extended period of time with an end date established for the commitment where that team member will provide dedicated support across P1, P2, and P3 issues for the pillar. Expectations and capacity will be agreed at the start of the assignment and could change throughout in collaboration and agreement. 

Below are the expectations of the DRI assigned to the Key Result:

1. Ensure completion of the opportunity canvas and ask for help when needed.
2. Schedule a work breakdown session with the Key Result Team. This can be either asynchronous or synchronous depending on the Key Result.
3. Schedule recurring stand-ups and working sessions as needed with the Key Result Team. This can be either asynchronous or synchronous and at a frequency that makes sense for the Key Result.
4. Provide a monthly update in the Key Result Issue in the OKR Project. Include percent complete and health status of the Key Result.
5. Raise risks and dependencies for successful completion of the Key Result with the data management team.

## Analytics Engineering - Team and Stable Counterpart Assignments

| Department / Division | Functional Analytics Team | Analytics Engineer      | Analytics Engineering Sub-Team |
| ---------------- | --------------------------------- | ----------------------- | ---------- |
| Sales            |  Revenue Strategy and Analytics   |  @j_kim @dantenel       | GTM |
| Marketing        |  Marketing Strategy and Analytics |  @dantenel              | GTM |
| Finance          |  FP&A Analytics                   |  @annapiaseczna         | Finance |
| Customer Success |  CS Strategy and Analytics        |  @mdrussell (Acting)    | R&D |
| Product          |  Product Data Insights            |  @michellecooper        | R&D |
| Engineering      |  Engineering Analytics            |  @michellecooper        | R&D |
| Security         |  Engineering Analytics            |  @michellecooper        | R&D |
| Support          |  N/A                              |  TBD                    | TBD |
| People           |  People Analytics                 |  @rakhireddy            | People |

## Data Program Recruiting

Recruiting great people is critical to our success and we've invested much effort into making the process efficient. Here are some reference materials we use:

- [Data Roles and Career Development](/handbook/enterprise-data/organization/#data-roles-and-career-development) to help existing team members and prospects understand growth opportunities
- a [Take Home Test](/handbook/enterprise-data/organization/#data-roles-and-career-development) that we ask each candidate to complete; this test is good for the candidate and for us because it represents the type of work we perform regularly and if the candidate is not interested in this work it helps them make a more informed decision about their application

## Data Roles and Career Development

### Data Internships

See [Data Team Internships](/handbook/enterprise-data/organization/internships/).

### Data Platform

- [Data Engineering Job Family](/job-families/marketing/enterprise-data/data-engineer/)

```mermaid
  graph LR;
  subgraph Data Engineering Roles
    supe:jde(Junior Data Engineer)-->supe:de(Data Engineer);
    supe:de(Data Engineer)-->supe:sde(Senior Data Engineer);
    supe:sde(Senior Data Engineer)-->supe:fde(Staff Data Engineer);
    supe:fde(Staff Data Engineer)-->supe:pde(Principal Data Engineer);
  end

  click supe:jde "https://handbook.gitlab.com/job-families/marketing/enterprise-data/data-engineer/#junior-data-engineer";
  click supe:de "https://handbook.gitlab.com/job-families/marketing/enterprise-data/data-engineer/";
  click supe:sde "https://handbook.gitlab.com/job-families/marketing/enterprise-data/data-engineer/#senior-data-engineer";
  click supe:fde "https://handbook.gitlab.com/job-families/marketing/enterprise-data/data-engineer/#staff-data-engineer";
  click supe:pde "https://handbook.gitlab.com/job-families/marketing/enterprise-data/data-engineer/#prinicipal-data-engineer";
```

#### Intermediate and Senior Data Engineer Onboarding Timeline

| By Day 30 | By Day 60 |  By Day 90 | By Day 120 |
| ------ | ------ |------ |------ |
| Complete People and Data Onboarding | Perform [triage](/handbook/enterprise-data/how-we-work/triage/) activities | Extract [new data sources](/handbook/enterprise-data/how-we-work/new-data-source/) | Own a specific area of the data platform |
| Create a MR to contribute to handbook or templates | Investigate incidents and issues | Work on [OKR assignments](/handbook/enterprise-data/how-we-work/planning/#quarterly-okr-planning) | Propose new ideas and come up with Data Platform improvement initiatives |
| Understand the current setup of the data platform | Make small/corrective changes to the platform infrastructure or data pipelines | Contribute on work breakdown | |

### Data Analyst

- [Data Analyst Job Family](/job-families/marketing/enterprise-data/data-analyst)

```mermaid
  graph LR;
  subgraph Data Analyst Roles
    supe:ida(Data Analyst Intern)-->supe:jda(Junior Data Analyst);
    supe:jda(Junior Data Analyst)-->supe:da(Data Analyst);
    supe:da(Data Analyst)-->supe:sda(Senior Data Analyst);
    supe:sda(Senior Data Analyst)-->supe:fda(Staff Data Analyst);
  end

  click supe:ida "https://handbook.gitlab.com/job-families/marketing/enterprise-data/data-analyst#data-analyst-intern";
  click supe:jda "https://handbook.gitlab.com/job-families/marketing/enterprise-data/data-analyst#junior-data-analyst";
  click supe:da "https://handbook.gitlab.com/job-families/marketing/enterprise-data/data-analyst#data-analyst";
  click supe:sda "https://handbook.gitlab.com/job-families/marketing/enterprise-data/data-analyst#senior-data-analyst";
  click supe:fda "https://handbook.gitlab.com/job-families/marketing/enterprise-data/data-analyst#staff-data-analyst";
```

#### Intermediate and Senior Data Analyst Onboarding Timeline

| By Day 30 | By Day 60 |  By Day 90 | By Day 120 |
| ------ | ------ |------ |------ |
| Complete People and Data Onboarding | Extend an existing Tableau dashboard or complete the triage phase for a dbt issue | Run a project end-to-end as DRI | Create ERDs/Data Artifacts (e.g. dashboards) or complete a product evaluation|
| Complete First Issue: S to M T-Shirt Size  |  |  |  |

### Data Science

- [Data Science Job Family](/job-families/marketing/enterprise-data/data-science)

```mermaid
  graph LR;
  subgraph Data Science Roles
    supe:ds(Data Scientist)-->supe:sds(Senior Data Scientist)-->supe:stds(Staff Data Scientist)-->supe:pds(Principal Data Scientist);
  end

  click supe:ds "https://handbook.gitlab.com/job-families/marketing/enterprise-data/data-science/#data-scientist-intermediate";
  click supe:sds "https://handbook.gitlab.com/job-families/marketing/enterprise-data/data-science/#senior-data-scientist";
  click supe:stds "https://handbook.gitlab.com/job-families/marketing/enterprise-data/data-science/#staff-data-scientist";
  click supe:pds "https://handbook.gitlab.com/job-families/marketing/enterprise-data/data-science/#principal-data-scientist";
```

#### Intermediate and Senior Data Scientist Onboarding Timeline

| By Day 30 | By Day 60 |  By Day 90 | By Day 120 |
| ------ | ------ |------ |------ |
| Complete People and Data Onboarding | Meet stakeholders across the organization | Re-train or enhance an existing data science model |  Make a contribution to improve the Data Science handbook, packages, or processes |
| Start attending Data Science Team meetings | Refine/improve one data science dashboard | Work on [OKR assignments](/handbook/enterprise-data/how-we-work/planning/#quarterly-okr-planning) | Take ownership of at least one quarterly OKR |
| Understand the current data science systems and processes |  | |  |

### Analytics Engineering

- [Analytics Engineering Job Family](/job-families/marketing/enterprise-data/analytics-engineer)

```mermaid
  graph LR;
  subgraph Analytics Engineer Roles
    supe:aae(Associate Analytics Engineer)-->supe:ae(Analytics Engineer);
    supe:ae(Analytics Engineer)-->supe:sae(Senior Analytics Engineer);
    supe:sae(Senior Analytics Engineer)-->supe:fae(Staff Analytics Engineer);
    supe:fae(Staff Analytics Engineer)-->supe:pae(Principal Analytics Engineer);
  end

  click supe:ae "https://handbook.gitlab.com/job-families/marketing/enterprise-data/analytics-engineer/#associate-analytics-engineer";
  click supe:ae "https://handbook.gitlab.com/job-families/marketing/enterprise-data/analytics-engineer#analytics-engineer-intermediate";
  click supe:sae "https://handbook.gitlab.com/job-families/marketing/enterprise-data/analytics-engineer#senior-analytics-engineer";
  click supe:fae "https://handbook.gitlab.com/job-families/marketing/enterprise-data/analytics-engineer#staff-analytics-engineer";
  click supe:pae "https://handbook.gitlab.com/job-families/marketing/enterprise-data/analytics-engineer#principal-analytics-engineer";
```

#### Intermediate and Senior Analytics Engineer Onboarding Timeline

| By Day 30 | By Day 60 |  By Day 90 | By Day 120 |
| ------ | ------ |------ |------ |
| Complete People and Data Onboarding  | Extend an existing dbt [Trusted Data Models](/handbook/enterprise-data/how-we-work/data-development/#trusted-data-development) | Run a project end-to-end as DRI | Create ERDs/Data Artifacts|
| Start attending Business Team synchronous meetings | Perform [triage](/handbook/enterprise-data/how-we-work/triage/) activities | | |
| Complete First Issue: S to M T-Shirt Size  |  |  |  |

### Data Governance and Data Quality

#### Data Governance and Quality Analyst Job Family

- [Data Governance and Quality Analyst Job Family](/job-families/marketing/enterprise-data/data-governance-and-quality-analyst)

```mermaid
  graph LR;
  subgraph Data Governance and Quality Analyst Roles
    supe:adgq(Associate Data Governance and Quality Analyst)-->supe:dgq(Senior Data Governance and Quality Analyst);
    supe:dgq(Data Governance and Quality Analyst)-->supe:sdgq(Senior Data Governance and Quality Analyst);
    supe:sdgq(Senior Data Governance and Quality Analyst)-->supe:sfdgq(Staff Data Governance and Quality Analyst);
  end

  click supe:adgq "https://handbook.gitlab.com/job-families/marketing/enterprise-data/data-governance-and-quality-analyst/#data-governance-and-quality-analyst-associate";
  click supe:dgq "https://handbook.gitlab.com/job-families/marketing/enterprise-data/data-governance-and-quality-analyst/#data-governance-and-quality-analyst-intermediate";
  click supe:sdgq "https://handbook.gitlab.com/job-families/marketing/enterprise-data/data-governance-and-quality-analyst/#senior-data-governance-and-quality-analyst";
  click supe:sfdgq "https://handbook.gitlab.com/job-families/marketing/enterprise-data/data-governance-and-quality-analyst/#staff-data-governance-and-quality-analyst";
```

#### Intermediate and Senior Data Governance and Quality Analyst Onboarding Timeline

| By Day 30 | By Day 60 |  By Day 90 | By Day 120 |
| ------ | ------ |------ |------ |
| Complete People and Data Onboarding | Take up tasks related to assigned program | Own epic / KR from planning to execution | Own specific data domain for data governance and data quality improvement |
| Fully understand the data governance and data quality program, priorities and its strategy | Investigate incidents and issues | Work on [OKR assignments](/handbook/enterprise-data/how-we-work/planning/#quarterly-okr-planning) | Collaborate cross functionally and identify areas for improvement |
| Create a MR to contribute to handbook or templates |  |  |  |

### Data Governance and Quality Program Manager Job Family

- [Data Governance and Quality Analyst Job Family](/job-families/marketing/enterprise-data/data-governance-and-quality-program-manager)

```mermaid
  graph LR;
  subgraph Data Governance and Quality Program Manager Roles
    supe:dgqp(Data Governance and Quality Program Manager)-->supe:sdgqp(Senior Data Governance and Quality Program Manager);
    supe:sdgqp(Senior Data Governance and Quality Program Manager)-->supe:sfdgqp(Staff Data Governance and Quality Program Manager);
  end

  click supe:dgq "https://handbook.gitlab.com/job-families/marketing/enterprise-data/data-governance-and-quality-program-manager/#data-governance-and-quality-program-manager";
  click supe:sdgq "https://handbook.gitlab.com/job-families/marketing/enterprise-data/data-governance-and-quality-program-manager/#senior-data-governance-and-quality-program-manager";
  click supe:sfdgq "https://handbook.gitlab.com/job-families/marketing/enterprise-data/data-governance-and-quality-program-manager/#staff-data-governance-and-quality-program-manager";
```

### Data Management

- [Data Management Job Family](/job-families/marketing/enterprise-data/manager-data/)

```mermaid
  graph LR;
  subgraph Data Management Roles
    supe:md(Manager, Data)-->supe:smd(Senior Manager, Data);
    supe:smd(Senior Manager, Data)-->supe:dd(Director, Data);
    supe:dd(Director, Data)-->supe:sdd(Senior Director, Data);
  end

  click supe:md "https://handbook.gitlab.com/job-families/marketing/enterprise-data/manager-data/#manager-data-intermediate";
  click supe:smd "https://handbook.gitlab.com/job-families/marketing/enterprise-data/manager-data/#manager-data-intermediate";
  click supe:dd "https://handbook.gitlab.com/job-families/marketing/enterprise-data/data-and-insights-executive/#director-data-and-insights";
  click supe:sdd "https://handbook.gitlab.com/job-families/marketing/enterprise-data/data-and-insights-executive/#senior-director-data-and-insights";
```

#### Data Manager Onboarding Timeline

| By Day 30 | By Day 60 |  By Day 90 | By Day 120 |
| ------ | ------ |------ |------ |
| Complete People, Data, and Manager Onboarding | Meet everyone on the team and business data champions | Complete a Team Assessment | Draft a people development Roadmap |
| Understand the current setup of the data platform | Work on [OKR assignments](/handbook/enterprise-data/how-we-work/planning/#quarterly-okr-planning) and map them to the data platform | Lead discussions with Users/Stakeholders on initiatives and OKRs | Draft a program development Roadmap (Process Improvements /Future State) |
| Add a new page to the handbook | Make regular contributions to the handbook spanning your area of management | Become DRI for major portions of the Data Handbook | System/Application Change Control Management of one or more modules |

## Tool Technology Tandem

Tool Technology Tandems (TTT) are supporting to get the maximum value out of business opportunities we have in the Data Program. TTT are experts in a specific (software) tool or technology to support business opportunities or challenges we have by leveraging the tool or technology to the maximum. Although this is not the goal, we want to get the maximum value out of our technology stack. At the moment we see that we are not leveraging our technology stack to the maximum, where there are useful features or opportunities in our technology that could support in fulfilling business opportunities.

The reason is that from the technology side we don't know the business and from the business side we don't know the technology. The TTT will bridge this gap by understanding the needs and bring this together in a technological way. We expect from TTT to do consulting, guiding and educating.

Note: TTT will **not** search for business opportunities to use any tool feature. TTT has to understand business opportunities and translate this into what software could bring to the table.

A single TTT consists of minimum 2 and maximum 3 GitLab Team Members with different roles. There are no requirements in which team a Team Member is part  of(so this could be outside of the central Data Team as well) as long as the TTT meets the expectations described below.

| Tool / Technology | Tandem |
| ----------------- | ------ |
| Snowflake         | t.b.d. |
| Monte Carlo       | t.b.d. |
| dbt               | t.b.d. |
| Tableau           | t.b.d. |

### What do we expect from TTT

- We expect TTT to get in touch with our business partners and all functions that contribute to the data program or work with our Data Platform, to understand their challenges.
- We expect TTT to get up to date with the latest in their area. They understand the full capabilities of the tool / technology, have regular touchpoints with the respective vendor and have a good understanding of the latest released features.
- TTT will guide and educate our business partners.
- TTT will initiate [design-spikes](/handbook/enterprise-data/how-we-work/#design-spike) for quarterly [planning](/handbook/enterprise-data/how-we-work/planning/).
