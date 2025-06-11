---
title: "People Analytics Data Governance"
---

As data becomes more central to decision-making, it is essential to establish a robust data governance framework to ensure the accuracy, completeness, and confidentiality of data.

## Importance of Data Governance in People Analytics

Data governance in people analytics is essential for several reasons. First, it ensures that data is accurate and reliable. Accurate data is critical to making informed decisions about hiring planning, recruitment, retention, and engagement. Second, data governance ensures that data is consistent across different systems and platforms, making it easier to analyze and compare data. Third, data governance ensures that data is secure and confidential, protecting the privacy of team members.

## Data Governance Elements

### Data Quality

Data quality is critical to the success of people analytics. It involves ensuring that data is accurate, complete, consistent, and timely.

### Data Security

Data security is essential to protect the privacy and confidentiality of team member data. It involves implementing measures such as access controls, data encryption, and data masking to prevent unauthorized access to personal and sensitive data.

### Data Ownership

Data ownership involves defining roles and responsibilities for managing data. It includes identifying data stewards and data custodians and defining their responsibilities for managing data. At GitLab, we use the [hub and spoke model](/handbook/enterprise-data/#how-data-teams-work-together) as a way to share data ownership between the Functional Teams, in this case the People Analytics team, and the central Data Team.

### Data Retention

Data retention involve defining policies for storing and preserving data. It includes defining retention periods for different types of data and ensuring that data is securely archived when it is no longer needed.

## Data Governance at GitLab

At GitLab, access to *all* data in our warehouse is restricted to the Data Platform Team as the data custodians. Besides the data platform team, only Analytics Engineers and Data Analysts who have a business reason and are approved by the People Team, as the data owners, can access the People Data.

Access to people data is processed through an access request, which is approved by the VP, People Operations and Technology before being provisioned.

### Conditions to process People Data

Here are some guidelines that the GitLab Data and other functional teams follow for management of people data:

1. Only collect data that is necessary for the intended purpose. Avoid collecting excessive data that is not needed. You can read more about this topic in our [Data Minimization page](/handbook/enterprise-data/how-we-work/new-data-source/#data-minimisation)
1. Ensure that the data collected is accurate and up-to-date. Outdated or inaccurate data should be deleted or updated.
1. Limit access to personal data to only those who have a business need-to-know.
1. Retain personal data for only as long as necessary for the intended purpose. Personal data should be deleted or anonymized when it is no longer needed.

By following these guidelines, we can ensure that we are only collecting and processing personal data that is necessary for our business needs, and that we are protecting the privacy and security of our team members.

When collecting and processing personal data related to people data analytics at GitLab, it is important to determine the lawful basis for processing. You can read more about this topic in [GitLab's Employee Privacy Policy](/handbook/legal/privacy/employee-privacy-policy/). In the data team, we use [Slowly Changing Dimensions](/handbook/enterprise-data/platform/edw/#slowly-changing-dimensions--snapshots) to cover both the current and historical view of the data in the warehouse. Depending on the type of People Data collected, we use different slowly changing dimensions.

- Where consent is the lawful basis

Where Team Members have given clear consent to process their personal data for a *specific purpose*. Examples include: Gender, nationality, ethnicity, gender dropdown, pronouns, political affiliation, sexual orientation, religion, medical or health related info, trade union info, among others.

When these fields are loaded into the warehouse, the Data Team uses a [type 1 Slowly Changing Dimension](/handbook/enterprise-data/platform/edw/#slowly-changing-dimensions--snapshots) because any change to the field is a withdrawal of consent for the use of that old value.

- Where Strong Legitimate Interest is the Lawful Basis

All fields where the Team Member can edit/change the field's info in the source system. Examples include: Home address, mobile or home phone, personal email, emergency contact information, among others.

When these fields are loaded into the warehouse, the Data Team uses a [type 1 Slowly Changing Dimension](/handbook/enterprise-data/platform/edw/#slowly-changing-dimensions--snapshots) because processing old historical values runs up against their Right to Correct data under privacy laws. If we need to keep history of these fields, a strong business justification that outweighs the Team Member's Right to Correct Data needs to be provided.

- Where Legal Obligation or Legitimate Interest is the Lawful Basis

All fields where the Team Member cannot edit the field in the source system. These fields are usually required to run the company or to satisfy regulations. Examples include: Information we have to collect related to job title, bonuses, salary, turnover, department changes, among others.

When these fields are loaded into the warehouse, the Data Team uses a [type 1 or a type 2 Slowly Changing Dimension](/handbook/enterprise-data/platform/edw/#slowly-changing-dimensions--snapshots), depending on whether we have a business justification to keep the history of the fields in the warehouse.

### Access to People Data in Business Intelligence Software

As part of our data program,  GitLab team members can have access to pre-built dashboards in Sisense. People Data is considered sensitive and it is therefore not readily available in Tableau by default. You can read more about this topic in our [Data Storage section](/handbook/enterprise-data/platform/#data-storage).

However, in the current business landscape, data is the key to unlock insights and make informed decisions. The same principle applies to people data, where people analytics plays a critical role in driving organizational success.

GitLab recognizes the importance of privacy and security. As such, Sisense has access to mostly aggregated personal data, which means that individual team members remain anonymous. By aggregating personal data, we can make data-driven decisions that benefit both the team members and the company. This data can be used to identify patterns and trends, measure employee engagement, and make predictions about future team member behavior. It also allows HR professionals to monitor and improve diversity and inclusion efforts and identify areas for training and development.

In addition to protecting team member's privacy, aggregating personal data can also provide valuable insights into team member's behavior and trends. This can help us make informed decisions about how to improve workplace productivity and satisfaction.
