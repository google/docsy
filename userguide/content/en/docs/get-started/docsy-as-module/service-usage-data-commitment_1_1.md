---

title: Our Commitment to Individual User Privacy in relation to Service Usage Data
---


## Our Commitment to Individual User Privacy in relation to Service Usage Data

While there are examples of data collection used for malicious intent, data collection and analysis has also allowed companies to improve their product or service, benefiting their end user/consumer. It is in this vein, that GitLab collects usage data about its products. We collect individual usage data in a pseudonymized manner at the namespace level and then use this information to power our product decisions and improve GitLab for you. We may also aggregate all this information to understand broadly how GitLab product is used.

### How we use Service Usage Data

On our [Product Performance Indicators page](/handbook/product/performance-indicators/), under each graph there is a `Lessons Learned` callout which summarizes insights and opportunities based on the usage data collected. The improvements made to the product through this process are largely attributable to usage data collection.

As an example, the [Package](/handbook/product/categories/#package-stage) team at GitLab watches the usage metrics related to the count of users who published a package to the Package Registry over time. To be clear, the data they are analyzing is in an aggregate form, no user-identifiable information is analyzed. As a result of digging into the trends they identified this insight:

>From a funnel perspective, we saw significant growth in the packages pulled using a deploy token or by a Guest. Both are signs that the Package Registry is being integrated into our customers production workflows.

Based on this analysis, the team prioritized two bug issues related to deploy tokens. This is an efficient and effective use of usage data which never put in jeopardy a person's identity, nor GitLab's credibility.

***This is the data space in which we operate and will continue to operate.***

### Our Commitment to GitLab Users

Over the past few years GitLab has made commitments to our community around the collection, processing, and use of [service usage data](/handbook/legal/privacy/customer-product-usage-information/). This page summarizes those commitments and provides guidance to team members working on projects that involve the collection of product analytics data from our customers.

1. We will not sell your [service usage data](/handbook/product/index.html.md).
1. GitLab will only add free JavaScript (as in [freedom](https://www.gnu.org/philosophy/free-sw.html)) to its core product. ([source](https://mikegerwitz.com/2016/01/google-analytics-removed-from-gitlabcom-instance))
1. We pseudonymize personally identifying information about you, the user.
1. We will transparently document the data we collect, how it is used and how it is pseudonymized.
1. We will alert the community when any changes to our [service usage data](/handbook/product/index.html.md) processes and/or policies occur.
1. We will not implement telemetry in our products which sends identifiable usage data to a third-party product analytics service [source](https://about.gitlab.com/blog/2019/10/10/update-free-software-and-telemetry/)

#### Definition of Analytics Data

Analytics Data can be too generic of a term. The list below are the specific types of Product data that is in scope:

- [Service Ping](/handbook/product/analytics-instrumentation-guide/#service-ping) - aggregate counts of product usage from a GitLab instance
- [Snowplow](https://snowplowanalytics.com/) Events - dynamic events collected from either a client or server.
- [Database events](/handbook/product/analytics-instrumentation-guide/#database-import) - using Database records from gitlab.com to measure and understand usage

## Data Pseudonymization

As many other organizations offering digital products, GitLab strives to get better understanding on utility of its offering. In order to build the best DevOps platform for everyone, we try to understand what are the most used areas, which get overlooked, which are in need of improvement, and which we can be proud of.

To get to such understanding, we look to collected [service usage data](/handbook/legal/privacy/customer-product-usage-information/). And as part of collecting usage data, we aim to provide robust privacy protection, and assurance that this data would not be ill-used. With that obligation in mind, we are working to prepare a privacy protection mechanism that would include technical tools and various policies.

### Pseudonymization Isn’t Perfect

While we will be pseudonymizing personal information for individual users, there are cases where a project or namespace could be identified. There are a few primary examples:

1. We will collect `project_ID`, it can be used to identify the project name via our APIs but this is only true for projects set to Public visibility where you are a member.
1. We will collect `namespace_ID`, it can be used to identify the namespace name (which may be a personal name) via our API you can only return namespace information for namespaces you are a member of.
1. In the case of single user subscribers, product usage activity can be tied back to an actual user (internally) via metadata in our enterprise applications.

### Analytics Instrumentation Roadmap

Our [pseudonymization process](https://gitlab.com/groups/gitlab-org/-/epics/6309#proposed-solution) to de-identify [personally identifiable data](https://gitlab.com/gitlab-org/gitlab/-/issues/336779#considered-data-for-pseudonymization) which relies on [one-way hashing](https://gitlab.com/groups/gitlab-org/-/epics/6309#one-way-hashing) is was released in milestone 14.4 (October 2021).

A key part of our process is pseudonymizing data at the [collection layer](https://gitlab.com/groups/gitlab-org/-/epics/6309#hashing-on-the-collector-layer), which allows GitLab to resolve any issues without a dependency for upgrading versions on your part.

Now that we have the ability to protect user privacy with the pseudonymization service in place, we have started collecting `Project_ID`, `Namespace_ID` and pseudonymized `User_ID`. Collecting these identifiers make the aggregated metrics we collect much more revealing. Now, instead of know there were 1000 clicks of some button, we can know things like: "Unidentified User "X" clicked a button, performed an action, then hit an error." This rich [user journey](/handbook/product/analytics-instrumentation-guide/#example-user-journey) will greatly improve GitLab's ability to improve our product for you, our end user.

Next up for our [roadmap](https://about.gitlab.com/direction/analytics/analytics-instrumentation/) includes modeling user journeys to better understand the features are users value most and implementing [events track in self-managed instances](https://gitlab.com/groups/gitlab-org/-/epics/6869).

## Related Content

1. [GitLab's Privacy Policy](https://about.gitlab.com/privacy/)
1. Updates to Pseudonymizing Service Usage Data blog post: *coming soon*
1. [Update on Free Software and Telemetry](https://about.gitlab.com/blog/2019/10/10/update-free-software-and-telemetry/)
1. [Product Usage Tracking Issue](https://gitlab.com/gitlab-com/www-gitlab-com/-/issues/5672)
1. [GitLab's Analytics Instrumentation Direction](https://about.gitlab.com/direction/analytics/analytics-instrumentation/)
