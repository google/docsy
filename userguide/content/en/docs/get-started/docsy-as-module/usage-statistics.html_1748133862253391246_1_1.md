---
title: "GitLab Usage Statistics"
description: "This page outlines our usage statistics and SFDC instance information."
---

---

## Adoption - GitLab Usage Statistics

Using [GitLab Version Check](/handbook/sales/process/version-check/), GitLab usage data is pushed into Salesforce for both CE, EE and EE trial users.
Once in Salesforce application, you will see a tab called "Usage Statistics".
Using the drop down view, you can select CE, EE trails or EE to see all usage data sent to GitLab.
Since version check is pulling the host name, the lead will be recorded as the host name.  Once you have identified the correct company name, please update the company name.
Example: change gitlab.boeing.com to Boeing as the company name.

To view the usage, click the hyperlink under the column called "Usage Statistics".
The link will consist of several numbers and letters like, a3p61012001a002.
You can also access usage statistics on the account object level within Salesforce.
Within the account object, there is a section called "Usage Ping Data", which will contain the same hyperlink as well as a summary of version they are using, active users, historical users, license user count, license utilization % and date data was sent to us.

A few example of how to use Usage Statistics to pull insight and drive action?

- If prospecting into CE users, you can sort by active users to target large CE instances.
You can see what they are using within GitLab, like issues, CI build, deploys, merge requests, boards, etc.
You can then target your communications to learn how they are using GitLab internally and educate them on what is possible with EE.
- For current EE users who are below their license utilization, you can engage the customer to understand their plan to rollout GitLab internally and how/where we can help them with adoption.
- For current EE users who are above their license utilization, you can leverage the data to engage the customer.
Celebrate the adoption of GitLab within their organization.  Ask why the adoption took off?  How they are using it (use cases)? Engage them in amending their contract right now for the add-on?
Update the renewal opportunity to reflect the increase in usage for the true-up and new renewal amount.
- For current EE users who are not using a EE feature, i.e. CI or issues, you can engage the customer to understand why they are not using it.
Do they know we offer it?
Are they using a competitive tool?
Have the integrated their current tool into GitLab?
Are they open to learning more about what we offer to replace their current tool?
- For EE trials.
What EE features are they using and not using?
If using a EE feature, what are they trying to solve and evaluate?
If not using, why and are they open to evaluating that feature?

Take a look at a Training Video to explain in greater detail by searching for the "Sales Training" folder on the Google Drive.

## Open Source users - GitLab CE Instances and CE Active Users on SFDC Accounts

In an effort to make the [Usage/Version ping data](https://docs.gitlab.com/ee/administration/settings/usage_statistics.html) simpler to use in SFDC, there are 2 fields directly on the account layout - "CE Instances" and "Active CE Users" under the "GitLab/Tech Stack Information" section on the Salesforce account record.

The source of these fields is to use the latest version ping record for and usage record for each host seen in the last 60 days and combine them into a single record.
The hosts are separated into domain-based hosts and IP-based hosts.
For IP based hosts, we run the IP through a [reverse-DNS lookup](https://en.wikipedia.org/wiki/Reverse_DNS_lookup) to attempt to translate to a domain-based host.
If no reverse-DNS lookup (PTR record) is found, we run the IP through a [whois lookup](https://en.wikipedia.org/wiki/WHOIS) and try to extract a company name, for instance, if the IP is part of a company's delegated IP space.
We discard all hosts that we are unable to identify because they have a reserved IP address (internal IP space) or are hosted in a cloud platform like GCP, Alibaba Cloud, or AWS as there is no way to identify those organizations through this data.
For domain-based hosts, we use the Datafox &/or DiscoverOrg domain lookup API to identify the company and firmographic data associated with the organization and finally the [Google Geocoding API](https://developers.google.com/maps/documentation/geocoding/start) to parse, clean, and standardize the address data as much as possible.

These stats will be aggregated up and only appear on the Ultimate Parent account in SFDC when there are children (since we don't really know which host goes to which child).

To see a list of accounts by # of CE users or instances, you can use the [CE Users list view](https://na34.salesforce.com/001?fcf=00B61000004XccM) in SFDC.
To filter for just your accounts, hit the "edit" button and Filter for "My Accounts".
Make sure to save it under a different name so you don't wipe out the original.
These fields are also available in SFDC reporting.

A few caveats about this data:

- The hosts are mapped based on organization name, domain, and contact email domains to relate the instances to SFDC accounts as accurately as possible, but we may occasionally create false associations.
Let the Data & Analytics team know when you find errors or anomalies.
- Both fields can be blank, but the organization can still be a significant CE user.
Both fields being blank just means that there are no instances sending us version or usage pings, not necessarily that there are no active instances.
- Users can be the same person in multiple instances, so if a user exists in several instances at an organization with the usage ping on, they are counted each time they appear in an instance.
Users may also be external to an organization, so the number of users may not represent employees and can thus be higher than the number of employees.
- These numbers represent the minimum amount that GitLab is likely being used within the organization, since some instances may have these pings turned on and some off.
They also may have just the version ping on, in which case we won't see the number of users.
This should not be interpreted as having instances but no users.

For the process of working these accounts, appending contacts from third-party tools, and reaching out, please refer to the [business operations](/handbook/business-technology/) section of the handbook.
