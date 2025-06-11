---
title: "Salesforce Config"
description: "The purpose of this page is to document configuration of our instance of Salesforce at GitLab. This will serve as the go-to place to check in regards to questions on our general Salesforce configuration."
---

## Salesforce Config

The purpose of this page is to document configuration of our SFDC org. This will serve as the "go-to" place to check in regards to questions on our general configuration.

### Salesforce Provisioning

For roles that should automatically receive Salesforce access your account and permissions will be automatically created by Okta. For anyone else who needs Salesforce access for their job responsibilities, please open an [Access Request](/handbook/it/end-user-services/onboarding-access-requests/access-requests/).

### Salesforce De-Provisioning

- User Off-Boarding - Users will be automatically deactivated by OKTA based on off-boarding issues. If OKTA is not able to deactivate users, a systems issue will be created to unblock the dependency and system team members will manually deactivate the users.
- Salesforce Licence Harvesting - User Management Team will run a monthly user report for last login > 60 Days. Based on the inactivity, users list will be provided to OKTA Team to de-activating users. Related AR issue will be created and the deactivated users will be communicated through `Salesforce Licence Harvesting` Slack Channel.
- Service Account(s) - Service Account user will be manually de-activated by Systems Team and OKTA will not be able to de-provision integration user(s).

### Salesforce Installed Packages

This has moved to the [Internal Handbook](https://internal.gitlab.com/handbook/sales/sales-systems/#sfdc-installed-packages)

### SFDC Certificates And Updating Expiring Certificates

#### Salesforce Certificates

Learn more about Salesforce Certificates and Keys [here](https://help.salesforce.com/s/articleView?id=sf.security_keys_about.htm&type=5)

#### Updating Expiring Certificates

The Salesforce knowledge base has [a resource](https://help.salesforce.com/s/articleView?id=000385781&type=1) that addressed what to do and how to handle Expiring certificates. Currently in Salesforce our certificate is located in two places and needs to be updated in both. In order to update please follow the below steps and update in the following locations.

- Create a new certificate by searching for `Certificate and Key Management` in setup. From there create a self-signed certificate and ensure that the options match the certificat you are replaceing. Please note that the information in the `Certificate` field will be slightly differnt between the old an new certificate. Then update the certificate in the following locations
  - [SAML Single Sign-On Settings](https://gitlab.my.salesforce.com/0LE4M0000004J63)
    - To update the certificate here update the certificate in the `Request Signing Certificate` picklist. (Do not upload the Salesforce Created Certificate into the file `Identity Provider Certificate`)
  - [Identity Provider](https://gitlab.my.salesforce.com/setup/secur/idp/IdpPage.apexp)
    - To update the certificate here update the certificate in the `Label` picklist

### Critical SFDC Permissions

| Critical Permission   | Systems Administrator | Sales Operations | All Other Profiles | Permission Set Assigned to Individuals |
|-----------------------|-----------------------|------------------|--------------------|----------------------------------------|
| Deploy Change Sets    | Yes                   | No               | No                 | No                                     |
| Customize Application | Yes                   | No              | No                  | No                                     |
| Manage Users          | Yes                   | Yes              | No                 | [Yes](https://gitlab.my.salesforce.com/005?id=0PS4M00000113lT&isUserEntityOverride=1&SetupNode=PermSets) - Sales Comp Team|

### SFDC Backups

Our Salesforce Backup solution is [Ownbackup](https://www.owndata.com/). There compliance information is located [here](https://www.owndata.com/trust).
