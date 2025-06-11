---

title: Customer Success Reporting and Dashboarding framework
description: This page describes the underlying philosophy and framework for how to consider and build toward the long term goal of effective and efficient reporting and dashboarding
---








## Problem statement

We have multiple systems (Salesforce, Gainsight, Tableau) where reporting can take place. Confusion and inefficiencies are created in the Field and Operations for when to use which tool and why. Furthermore, we need clear, crisp definitions to empower Ops and Strategy to guide stakeholders on reporting best practices.

## Vision

Each tool has a different value driver. Each report must address, “what is the primary purpose of the report/dashboard? To be operationalized or develop visuals/insights?”

### Framework

- Operationalize: Use Gainsight and Salesforce when the purpose is to operationalize, such as a list of contacts to engage or CTAs to update. Typically for front-line and managers
- Insights and recommendations: Use Sisense/Tableau for slide deck visualizations, trend analyses, and to develop insights and recommendations. Typically for Leadership and deck preparation

### Example design

#### Tableau

Deliver insights: Field-wide C360 view of contract info, usage data, health data, Marketing campaigns, attribution data, PtC/PtE. *Generally for exec/BOD and analytical reporting

- *QBR prep*: create dashboards to help CSM Managers and SA leaders create quantitative QBR stories - users: CS management/leadership
- *CS KPIs*: core CS KPIs - users: CS Analytics/CS Leadership+
- *Coverage*: CSM/usage data coverage dashboards - users: CS Analytics/Leadership+
- *Detailed usage reporting*: usage dashboards - users: CSM/leadership+
- *Top customer report*: exec level reporting - users: CS Analytics/exec/BOD

#### Gainsight

Drive action: CSM-specific reporting for actioning CTAs, Success Plans, burn-down dashboard. For CSM teams to use (CSM Managers to start/end their day in Gainsight)

- *Drive action*: CSM portfolio/proactive planning required that day - users: CSM/CSMM
- *Drive action*: at-risk customer reporting to update and act on - users: CSM/CSMM
- *Customer onboarding*: which customers are in onboarding and next steps - users: CSM
- *Customer health*: overall health is calculated in Gainsight - CSM/CSMM
- *Stage enablement and expansion*: in Gainsight for detailing required actions and missing customers; data integrated for Tableau to provide aggregated analysis and attribution - users: CSM

### Guiding principles

1. **Clarity** around which tools to use for which purposes
1. **Mitigate duplication** across reporting tools (some duplication is necessary and encouraged)
1. **Actionable** for end-users where applicable to drill down and complete tasks or update activity logs
1. **Visually designed** to ensure clarity of recommendations
