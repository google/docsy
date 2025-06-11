---

title: "Helping Customers Decide to Migrate to SaaS"
---
 




View the [CSM Handbook homepage](/handbook/customer-success/csm/) for additional CSM-related handbook pages.

---

## Moving to SaaS From Self-Managed

Many customers are interested in migrating to our SaaS platform. Typically their reasons for doing so are:

- **Infrastructure Cost Savings**
  - They do not need to pay for infrastructure to host their GitLab instance, or employees to manage this infrastructure
- **Mitigate Administration Issues**
  - Customers do not necessarily want to manage being a GitLab admin
- **Have Latest Features**
  - Customers will always be on the latest version of GitLab
  - Don't need to perform upgrades
  - Always up to date

If a customer poses an interest in moving to SaaS, it is important that they know the differences between the two platforms: namely, the presence or absence of administrative control. On self-managed, Admin users can access the Admin Panel, and have the ability to impersonate users, remove personal access tokens created by users, and make use of other features only Admins can use. On SaaS, users have more control and there are no Admins, thus, there is less access control. Also, some APIs cannot be used on SaaS, as they require the user conducting the request to have administrative privileges.

### Process For Moving a Customer From Self-Managed to SaaS

1. Identify decision-maker for moving to SaaS
1. Optional: Identify security team contact
1. Ask [Discovery Questions](/handbook/customer-success/csm/risk-mitigation/self-managed-vs-saas/#discovery-questions) on cadence call
1. Suggest a Self Managed vs. SaaS comparison discussion on next cadence call
1. Conduct offer comparison discussion using [slide deck template](https://docs.google.com/presentation/d/1mNCUCNgtxwXsINjpHxYK32os9D6JLJ9oGIuISCANPtY/edit?usp=sharing)
1. Follow up with decision maker on move to SaaS
1. Suggest PS for migration

## Discovery Questions

We recommend asking champions some discovery questions during a cadence call to gauge why they want to move to SaaS and ensure that certain access control items, features, and APIs are not currently of utmost importance to the business before kicking off the migration process.

### Discovery Questions

1. What prompted this move to SaaS?
1. What are you hoping to accomplish as a result of moving to SaaS?
   - Infrastructure cost savings?
   - Automatic GitLab version upgrades to stay up-to-date?
   - *If the customer does not give these reasons, we should explore their reasoning to see if it is worth them moving to SaaS.*
1. What features are you using on the admin panel?
   - Are these accessible on SaaS?
   - Are you utilizing the GitLab API to do things that require admin privileges?
   - *If the customer switches to SaaS, they will not be able to use the admin panel OR perform API calls that require admin access.*
1. Have you completed a security audit of our SaaS solution to ensure it is compliant to your organization’s standards?
   - *If the customer answers NO, we recommend their security team performs any required audits in advance to ensure SaaS is compliant with their security requirements.*
1. What are your access control security requirements?
1. What are you using for authentication?
   - SAML SSO? LDAP?
1. What is your process for Provisioning and deprovisioning?
1. How do you handle access management?
1. Are you using a provider such as Okta?
   - *If the customer answers YES, they could restrict IP access at the identity provider level via a setting in Okta or a similar tool.*
1. Are you using 2-Factor Authentication?
1. Do any of your employees use Personal Access Tokens (PATs) to perform git actions?
   - *If the customer answers YES, we should discuss:*
   - How we cannot restrict PATs to certain IP addresses
   - How on SaaS you cannot view or revoke any PATs except the ones you own
   - How on SaaS you cannot programmatically revoke PATs via the API
1. Do you use a VPN?
1. What requirements do you have around accessing code bases outside of the corporate network?
1. Do your employees ever need to access your code base off of the corporate network?
   - *If the customer answers YES, we DO NOT need to explore gitlab-sshd and the IP allowlisting bug, since they would be accessing the code base outside of an allow-listed VPN.*
