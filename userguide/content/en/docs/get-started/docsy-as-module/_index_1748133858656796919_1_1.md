---
title: Signals Engineering Team (SET)
---

## Engaging Signals Engineering

Teams can engage Signals Engineering by heading over to the #signals-engineering slack channel. SIRT can also engage Signals Engineering for detection and alert tuning needs by selecting the "report a bug" feature in GUARD.

## Our Vision

Ensuring cybersecurity incidents never go undetected by building and maintaining a best in class signal development and detection engineering program. 

## Our Mission Statement

Build and Mature A Best In Class Detection Engineering Program

- Constantly tracking and pursuing KPI goals, including: Detection coverage, detection precision and sensitivity and time to detection
- Building and maintaining automations with Threat Intelligence and the Red Team to programmatically evaluate detection capabilities and improve our threat resilience

Reducing Time to Detection

- Improving detection context and quality
- Reducing the time to detect through comprehensive detection coverage 

Improving Security Observability

- Partnering with the Product, Engineering and Infrastructure teams to improve GitLab security signals
- Partnering with CorpSec and ProdSec to improve security signals in corporate, cloud, and identity infrastructure

Providing Customer Value

- Improving customer facing detection capabilities and offerings
- Identifying & partnering stakeholders to implement customer observability needs

## The Team & Priorities

### Team Members

| Team Member | Role |
|---|---|
| Matt Coons | [Security Manager](/job-families/security/security-leadership/) |
| Harjeet Sharma | [Staff Security Engineer, Signals Engineering](/job-families/security/security-engineer/#signals-engineering) |
| Evan Baltman | [Security Engineer, Signals Engineering](/job-families/security/security-engineer/#signals-engineering) |

### Our Stakeholders

While Signals Engineering has dedicated engineers focussed on advancing projects and handling operational duties, there are a number of stakeholders both within the Security Division and beyond that Signals Engineering collaborate with to drive results.

| Stakeholder | Shared Responsiblities/Dependencies |
|---|---|
| SIRT | Detection tuning, new detections, GUARD DaC framework |
| T&S | Omamori integration |
| Security Logging | Security logging capabilities & collaboration |
| Threat Intel | Threat driven detections, Top threat actor detections |
| GitLab Customers | Consumer of customer facing detections |
| Product team | Collaboration to improve security signal capabilities |
| CorpSec | Collaboration to collect signals from purchased tooling |
| Security Identity Team | Collaboration to collect signals from purchased tooling |
| Red Team | Collaboration to collect signals from purchased tooling |
| Product Security | Collaboration to collect signals from purchased tooling |

### Current Priorities

In the first 6 months (FY25Q4 - FY26Q1), we are focusing on "Low hanging fruit" and establishing the Signals Engineering program.

Some highlights include:

1. Reducing alert false positives & improving FP alerting/handling workflow
2. Initial metrics creation & label standardization
3. Improving customer facing detection creation & sharing process
4. Writing new detections to close identified detection gaps

As the program matures, we will expand our focus to improve our automation and maturity as well as bolstering our customer detection capabilities.

## What we've Built & Services we Offer

### GUARD

GUARD (GitLab Universal Automated Response and Detection) is the Security Team's Detections as Code (DaC) pipeline and alerting automation framework. GUARD hands off an alert to the SIRT incident handling process stops when an alert is converted into a SIRT incident.

GUARD is a shared responsibility model between Signals Engineering and SIRT - Both SIRT and Signals Engineering build threat detections and have the ability to commit new and maintain existing detections in GUARD.

#### Threat Detection Tuning

When SIRT identifies a threat detection that needs to be tuned, tuning requests are submitted to the Signals Engineering team for improvements.

#### Threat Detection Creation

The Signals Engineering team tracks detection coverage and builds new threat detections based on several needs:

1. Gaps in detection capabilities as identified by SIRT or Signals Engineering
2. Collaboration with T&S to improve the ability to identify potential abuse on the GitLab platform
3. New detections for new log sources that can be queried in GitLab's SIEM
4. New attacker TTPs
5. Collaboration with the Red Team as part of purple team or stealth engagements

### Signals & Detection Research

Signals engineers conduct deep dive research into potential observability gaps and signals enhancement opportunities, identified in the GitLab product and 3rd party tools GitLab uses. Such research assignments have a target deliverable of new detections as well as improved observability capabilities.

## How We Measure Success

We measure the success of Signals Engineering by collecting and reporting on key performance indicators, through metrics collected from MRs, issues and alerting metrics.

Initial metrics we report on are listed below:

### Alerting & Tuning

1. TP/FP ratio + trending
2. Alert Bug report volume

### Incidents

1. Number of S1 incidents with signal gaps

### Value for Customers

1. Number of public detections

### Detection coverage

1. MITRE coverage
2. Coverage by log sources
3. MTTDC (Mean time to detection creation)
4. Coverage by threat actor

### Metric Labels

- `SET::Detection-New`
- `SET::Detection-Maintenance`
- `SET::Research`
- `SET::Signals-Improvement`
- `SET::Cross-Functional`
- `SET::Signal-Gap`
