---
title: "FAQ - Customer Product Usage Events"
description: "Answers to common questions about product usage event data"
---
This page answers frequently asked questions about customer product usage [event data collection](https://docs.gitlab.com/administration/settings/event_data).

**Important Notes:**

- The information in this FAQ only pertains to event collection for **GitLab Self-Managed and Dedicated.**
- When we refer to event collection in this FAQ, we are talking about product usage events for all features, excluding those related to GitLab Duo. For more information, see our Customer Product Usage Information [page](/handbook/legal/privacy/customer-product-usage-information/).
- This FAQ is intended to address additional questions that are not already covered in our [documentation](https://docs.gitlab.com/administration/settings/event_data). 
For foundational details about event data collection, configuration steps, and privacy practices, please refer to the [documentation](https://docs.gitlab.com/administration/settings/event_data) and the related [blog post](https://about.gitlab.com/blog/2025/03/26/more-granular-product-usage-insights-for-gitlab-self-managed-and-dedicated/).

## Frequently Asked Questions

### Q: Does event-level data include source code or other customer-created content stored within GitLab?

**A:** No. Event data does not include source code nor any customer-created content.  
For more on what is and isn’t collected, see our [documentation](https://docs.gitlab.com/administration/settings/event_data).

---

### Q: We need to minimize compliance risks, can event data collection be opt-in?

**A:** While data collection is set as opt-out, we want to ensure customers can manage their data sharing preferences before default sharing begins. 

In GitLab 17.11, customers have the opportunity to disable data sharing proactively. Since version 18.0 is a major version, customers must first upgrade to 17.11 before moving to 18.0. This gives customers the opportunity to turn off data sharing in advance and retain full control over data collection before it starts.  For additional details, see the section on customer controls in our [blog post](https://about.gitlab.com/blog/2025/03/26/more-granular-product-usage-insights-for-gitlab-self-managed-and-dedicated/#you-stay-in-control-of-your-data).

---

### Q:Will event-level insights be shared only via CSMs, or also in the GitLab UI or portal?

**A:** Once event collection begins, CSMs will have access to this data and can use it to provide tailored insights.  We do plan to surface this data back to our customers in the future. We’ll share more details and timelines as they become available.

---

### Q: What are the implications of opting-out of event-level data collection?

**A:** There are no immediate adverse impacts if you choose to opt-out.  Participation is entirely optional.  

However, in the future, when we provide a customer-facing view of product usage data, customers who have opted-out will not have data available to explore in that view.

---

### Q: How long is event data retained by GitLab?

**A:** Event data will not be retained beyond 3-years from the point of collection.

---

### Q: How frequently is data submitted to GitLab?

**A:** Please refer to our [documentation](https://docs.gitlab.com/administration/settings/event_data).

---

### Q: What's the expected volume or amount of data for a given deployment?

**A:** Please refer to our [documentation](https://docs.gitlab.com/administration/settings/event_data).

---

### Q: Is the data encrypted in any way during transmission?

**A:** Yes. Snowplow event data is encrypted during transmission. Snowplow uses HTTPS/TLS to securely transmit data from the client to the collector endpoint, ensuring that data is encrypted in transit.  

Since all systems involved in Snowplow collection and transfer are GitLab-controlled, encryption in transit is a standard practice under our security and compliance program.

---

### Q: How can customer security teams inspect the data that is transmitted?

**A:** We plan to make logs available in 18.0 so that customers can inspect the data that is transmitted. Documentation will be available [here](https://docs.gitlab.com/administration/settings/event_data) once this is released.

*Note:* While these logs provide thorough visibility into data transmission, they're designed specifically for inspection by security teams rather than feature usage analysis.  

For insights into feature usage, we recommend waiting for our upcoming in-product adoption reports, which are purpose-built for feature usage analytics.

---

### Q: Are there situations where event data is opt-out for Self-Managed by default?

**A:** Yes, we will not collect events data by default from instances where one of the following applies:

- The instance is on an [offline license](https://about.gitlab.com/pricing/licensing-faq/cloud-licensing/);
- The instance is air-gapped; or
- The instance has already been approved by either its Sales representative or Customer Support for disablement of [Operational Service Ping Data](https://about.gitlab.com/pricing/faq-improved-billing-and-subscription-management/#operational-data). 
