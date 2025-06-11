---
title: "Service Ping FAQ"
---

View the [CSM Handbook homepage](/handbook/customer-success/csm/) for additional CSM-related handbook pages.

---

## What is Service Ping

Service Ping generates customer analytics on self-managed instances that enable GitLab to collaborate with our customers to accelerate value attribution, achieve return-on-investment (ROI) goals, and accomplish business outcomes with the GitLab solution. Specifically, it helps GitLab understand product adoption to:

1. Ensure adoption is aligned to business outcomes (i.e., goals, timelines, etc).
1. Understand usage for industry and best practice recommendations
1. Recommend features or capabilities that maximize solution value based on:
   - Gaps in adoption
   - New features or capabilities that can be leveraged
1. Enable User Cohorts and GitLab DevOps Score that provides an overview of customers' adoption of  Concurrent DevOps from planning to monitoring
1. Track usage and adoption over time

For the definition of each metric, please see our [Service Ping Metrics Dictionary](https://metrics.gitlab.com).

[Links to other ways Service Ping is used by Customer Success](/handbook/customer-success/product-usage-data/using-product-usage-data-in-gainsight/)

## How Does Service Ping Help Me?

Service Ping provides insights into your teams' usage of GitLab to enable you to understand output, maturity, and potential improvement areas across your instance. In understanding these key platform usage metrics, we can together be strategic in our roadmap for enablement and growth planning.

- As a benefit of having the service ping active, GitLab lets you analyze the users' activities over time of your GitLab installation.
- As a benefit of having the service ping active, GitLab provides you with The DevOps Score, which gives you an overview of your entire instance's adoption of Concurrent DevOps from planning to monitoring.
- You will get better, more proactive guidance when working with a Customer Success Manager.
- You will get insight and advice into how to get the most value out of their investment in GitLab.
- You get a report that illustrates how they compare against other similar organizations (anonymized), with specific advice and recommendations on how to improve their DevOps processes.

## Commonly Asked Questions and Concerns

### 1. What information is sent  via service ping?

GitLab collects product usage data from self-managed GitLab instances (Community Edition and Enterprise Edition) through a service ping, you can view a [sample here](https://docs.gitlab.com/ee/development/internal_analytics/service_ping/#example-service-ping-payload). Please see [GitLab Privacy Policy](https://about.gitlab.com/privacy/) for additional details.

### 2. It's a corporate security policy that we don't send data to vendors

GitLab can collaborate with you to understand your security controls and regulatory requirements that you have to meet. We've seen several risk-mitigating solutions where similar concerns regarding "outbound data transfers", and data leaving a secured boundary. Are there specific team members from security/compliance/privacy organizations that might provide additional insights? We understand your concerns and would be happy to have a call with our respective security teams to help resolve issues you may have. Before our call, GitLab will request you provide the specific compliance requirements you may have.

### 3. Is there a way we can share this data manually so that we can review it before it goes out?

Yes, you are able to extract this information manually and review prior to sending to GitLab. Here are the steps:

1. Login to your GitLab instance as administrator
1. Navigate to the admin section of the Interface by clicking the "wrench" at the top navigation ribbon of the homepage
1. At the left navigation panel, hover over the "Settings" –> and click on "Metrics and Profiling"
1. When the Metrics and Profiling page populates, scroll down to the "Usage Statistics" segment of the page and click on the "Expand" button at the right-hand side.
1. Click on "Preview payload" button
1. A JSON formatted output of the data that is sent from GitLab instances to gitlab.com when allowed will be displayed in a pop-up.
Copy and paste this information into a text file, encrypt and send to GitLab or upload over SSH/HTTPS to the customer collaboration for your organization that's securely hosted on gitlab.com

### 4. Can customers visualize the data?

Yes. GitLab provides multiple ways to access and visualize Service Ping data:

- **Manual access via REST API**:  
  You can export the Service Ping data manually through [GitLab’s REST API](https://docs.gitlab.com/ee/api/usage_data.html#export-service-ping-data). This enables direct inspection of the raw payload.

- **GitLab Service Ping Dashboard**:  
  GitLab Customer Success has developed a dedicated [Service Ping Dashboard](https://gitlab.com/gitlab-com/cs-tools/gitlab-cs-tools/service-ping-dashboard) that allows you to track and visualize historical Service Ping metrics via a GitLab Pages site. The dashboard:
  - Fetches Service Ping data via the API.
  - Stores historical data over time.
  - Generates interactive graphs.
  - Updates weekly via GitLab CI/CD.
  - Categorizes metrics and includes search/autocomplete for easy exploration.
  - Automatically displays metric descriptions, trends and metadata.
  
  This tool helps customers gain deeper insights into adoption trends, monitor key DevOps metrics over time, and prepare visual reports for stakeholders.

### 5. How do we ensure that you don't change what's in the payload?

Our documentation shows all usage statistics and content that is sent back to GitLab. When we change / update product analytics you can view the exact JSON payload in the administration panel. To view the payload: Navigate to the Admin Area > Settings > Metrics and profiling. Expand the Usage statistics section. Click the Preview payload button.

### 6. Our security team will have to sign off first

You can inspect the data and have your security team review it. They can continue to monitor (via ELK stack) that GitLab is not breaking security policy with new releases. We invite you to ship this data to an internal ELK stack, and sanitize it before sending to your GitLab Customer Success Manager. If we can get your security team to review and approve, we can fully automate this process so you don't have to go to the trouble.

### 7. We have network isolation and there is no way for usage to get out of their network

We respect your organizations' network security policies and restrictions and understand there are situations where it is not feasible or technically possible to submit service ping over the Internet. If Service Ping is blocked by a firewall, load balancer, or proxy, you might consider [modifying](https://docs.gitlab.com/ee/administration/settings/usage_statistics.html#network-configuration) your network configuration to un-block the Service Ping payload from being sent to GitLab.

If you see value in sharing Service Ping data and it's not technically possible for you to do so directly, GitLab can provide you instructions to share the data manually, including allowing you to sanitize certain data as preferred.

### 8. How do I disable service ping?

**Free Self-Managed instances (CE and EE edition): If you want to deactivate this feature, go to the Settings page of your administration panel and uncheck the Service Ping checkbox.
**Paid Self-Managed instances (EE edition)**:  You may partially deactivate Service Ping by unchecking the Service Ping checkbox of your administration panel.  However, certain Service Ping metrics related to subscriptions and customer success services can only be deactivated via support or through a sales representative. Details can be found in our [Customer Product Usage Information](/handbook/legal/privacy/customer-product-usage-information/#service-ping-formerly-known-as-usage-ping).

You can view the payload at "/admin/application_settings/metrics_and_profiling" in the Usage Statistics section and press the "View Payload" button.

Product Documentation: Deactivate the Service Ping

**Important Documentation links**

1. [Admin Settings for Service Ping](https://docs.gitlab.com/ee/administration/settings/usage_statistics.html#service-ping)
1. [Usage Statistics Collected](https://docs.gitlab.com/ee/administration/settings/usage_statistics.html#usage-statistics-collected)
1. [Network Configuration](https://docs.gitlab.com/ee/administration/settings/usage_statistics.html#network-configuration)
1. [Accessing Service Ping through REST API](https://docs.gitlab.com/ee/api/usage_data.html#export-service-ping-data)
