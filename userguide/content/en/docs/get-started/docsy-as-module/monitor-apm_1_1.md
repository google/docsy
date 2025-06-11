---

title: Monitor APM Single-Engineer Group
---







## Monitor APM Single-Engineer Group

Monitor APM is a [Single-Engineer Group](/handbook/company/structure/#single-engineer-groups) within our [Incubation Engineering Department](/handbook/engineering/development/incubation/).

Our aim is to integrate monitoring and observability into our DevOps Platform in order to provide a convenient and cost effective solution that allows our customers to monitor the state of their applications, understand how changes they make can impact their applications performance characteristics and give them the tools to resolve issues that arise.  APM is a core part of the DevOps workflow as it shows the direct impact of deployed changes.

This effort will be [SaaS first](https://about.gitlab.com/direction/#saas-first) and we will iterate by leveraging open source agents for auto-instrumentation.

Due to the size and complexity of our vision, we may split this SEG into three subgroups that will focus on each part of the architecture:

**Monitor APM:Agent**

Use the open-source DataDog agent to collect metrics from production applications.  The DataDog agent is written in Go and will need to be integrated with our preferred storage solution to send metrics and events in a periodic batch payload.

**Monitor APM:Storage**

Store the metrics, logging and events in a queryable event series database.  We need to balance memory and CPU usage, against timeliness of data, and efficiency in querying.

**Monitor APM:Visualisation**

Integrate an open-source visualation tool that has takes care of all the analytics.  The aim is to provide the ability to query, visualize, set up alerts and understand the data from our users applications.

### Monitoring and Observability Strategy

GitLab users can currently monitor their services and application by leveraging GitLab to install Prometheus to a GitLab managed cluster. Similarly, users can also install the ELK stack to do log aggregation and management. The advantage of using GitLab with these popular tools is users can collaborate on monitoring in the same application they use for building and deploying their services and applications.

What we've learned since that makes this particular strategy challenging are the following:

1. **Not working by default** - GitLab has to first manage the cluster, get users to install additional applications, setup Prometheus exporters, before being able to see a chart. Compared this to a vendor that has an agent that auto instruments an application, the high bar is a barrier for adoption.
1. **Mostly self-service** - Users are responsible for managing, scaling, and operating their Prometheus fleet, and ELK stack in order to use GitLab metrics and logging. Not having to manage and pay for the associated infrastructure and people are some main reasons organization outsource these tasks to vendors. When an organization chooses to manage monitoring on their own, many are perfectly happy just using the open source tools on their own, without GitLab as an additional layer that does not provide additional value currently.
1. **Wrong market** - We targeted SMBs to use our tools as a cheaper solution relative to other vendors. The problem is the total cost of ownership was not necessarily lower. Furthermore, since GitLab's solution was based on having GitLab manage the customer's Kubernetes cluster, and there wasn't necessarily a significantly large overlap between SMB customers and those that used Kubernetes, it meant our solutions was constrained to a smaller target audience.

We are intentionally shifting our strategy to account for what we learned:

1. Start with [SaaS first](https://about.gitlab.com/direction/#saas-first), even for self-managed instances.
1. Leverage open-source agents for auto-instrumentation. Our previous attempts at using OpenTelemetry did not succeed due to limited platform availability and low number of collected metrics, so we're aiming to use the open-source Datadog agent.
1. Move away from Prometheus (and things like Cortex) for storage in favor or Clickhouse.  Our previous attempts at using Prometheus caused delays and resulted in a product that did not meet customer needs.
1. Use an open-source visualisation tool such as iFraming Grafana, rather than building out manual charts ourselves with E-charts.

We anticipate that our initial entry to this market will be a set of open-source tools that we can leverage within GitLab.com to offer a rudimentary APM solution to users, before we iterate to improve usability and functionality.  Our technical approach will start with collecting metrics, before adding logging and then tracing.

### GitLab Project Links

- [https://gitlab.com/gitlab-org/gitlab/-/issues/329594](https://gitlab.com/gitlab-org/gitlab/-/issues/329594)
- [https://gitlab.com/gitlab-org/incubation-engineering/apm](https://gitlab.com/gitlab-org/incubation-engineering/apm)

### Performance Indicator (formerly known as NSM)

The APM group's mission is to help our customers decrease the frequency and severity of their production issues. As such, we've defined the team's Performance Indicator (PI) to be the total number of metrics and log views. The decision to use this NSM is the following:

- Metric views are the entry point to monitoring - The more useful our dashboards are, the more likely users are to come back and not default to some other tool to help them understand what is happening in their system.
- Log views - Logs help teams correlate an event to the system's internal logs as part of the Triage workflow. The more views we'll have, the more likely that teams are resolving their production issues using our tools.

Since the PI is a single metric, we've decided to combine those two metrics into a single one, representing the team's PI.

### Accessing PI data

We expect to track the journey of users through the following funnel:

``` mermaid
classDiagram
  Acquistion --|> Activation
    Acquistion : Are users aware of the product or feature set?
    Acquistion: Measurement (Total Count of metrics and log Views)
  Activation --|> Retention
    Activation : Are users applying the feature?
    Activation: Measurement (Count of Projects with active Prometheus)
  Activation: Measurement (Count of Projects with active Elastic stack)
  Retention --|> Revenue
    Retention : Are users applying the feature over time?
    Retention: Measurement (Count of projects where custom dashboards are been created)
  Revenue --|> Referral
    Revenue : Are users paying for the features?
    Revenue: Measurement (Total count of projects with multiple Prometheus)
  Referral --|> Acquistion
    Referral : Are users encouraging others to use the feature?
    Referral: Measurement (TBD)
```

### Glossary

- **Metrics** are numeric values tracked over time, such as memory usage, CPU usage and network speed.

- **Monitoring** is the ability to understand, and alert on, an applications usage and performance.

- **Observability** (abbreviated as “o11y”) allows you to answer questions about the state of your application by observing data coming from your application.

- **Trace** is the relationship between events coming from your system, visualised by using timing data to display the relationships between events.

### Reading List

Handbook:

- [Product Direction - Monitor](https://about.gitlab.com/direction/monitor/)
- [Product Direction - Monitor:APM](https://about.gitlab.com/direction/monitor/observability/)

Literature:

- [Google SRE Handbook](https://sre.google/sre-book/table-of-contents/)
- [Google SRE Workbook](https://sre.google/workbook/table-of-contents/)
- [The SLO Book, Alex Hidalgo](https://www.alex-hidalgo.com/the-slo-book)
- [My Philosophy On Alerting, Rob Ewaschuk](https://docs.google.com/document/d/199PqyG3UsyXlwieHaqbGiWVa8eMWi8zzAn0YfcApr8Q)

Products:

- [Opstrace: Showcase and ideas for APM](https://docs.google.com/document/d/1pksrG344JyXWcJ9zgKJ6gl6fe6bLGsi6FPEsFrFf078/edit)
- [Opstrace: Introducing a Datadog-compatible HTTP API](https://opstrace.com/blog/introducing-datadog-compatible-http-api)
- [Noble9 SLO Platform](https://nobl9.com/platform/)

Community:

- [OpenTelemetry](https://opentelemetry.io/)
- [OpenSLO](https://openslo.com/)

Internal:

- [Monitor:APM Lessons Learned and Go Forward Strategy (Internal)](https://docs.google.com/presentation/d/1Iw79oaSZg1OVAmubIhXQZOAsKd_snxKUXrLCjSsawzs)
- [GitLab Service Level Monitoring, V2 (Internal)](https://docs.google.com/document/d/1MwhjrrEAL52DzFR22fnDtjNGTgCayBbJuPI78nt1020)
