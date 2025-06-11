---
title: "Tableau Project Leaders Guide"
description: "GitLab's Project Leader Guide"
---

A GitLab Tableau Project Leader is responsible for managing Tableau content within their assigned department. Their primary role is to ensure the integrity, security, and effectiveness of the department’s data and reporting. They oversee dashboards, workbooks, and data sources within the project, ensuring they meet organizational standards and are properly maintained.

Project Leaders collaborate with developers to manage content in Production, whether by promoting new content or updating existing content. They play a key role in maintaining high-quality reporting and ensuring that the department's data assets are reliable and accessible. Here is the contact list for [Tableau Department Project Leads](https://10az.online.tableau.com/#/site/gitlab/workbooks/2730535/views).

---

### **Project Leader Training**

Department staff interested in becoming Project Leaders must complete the [Tableau Project Lead Review & Responsibilities Training](https://drive.google.com/file/d/1LXPPyIwJ5k4MFsRfEY33nYVmWbuwDB30/view?usp=drive_link).

---

### **Project Lead Responsibilities**

1. **Data Department Leader**:
   * **Know Your Data**: Understand the data sources, schemas, and models your team uses. Ensure data accuracy, relevance, and alignment with business goals.
   * **Understand the Workbooks & Dashboards**: Have a thorough knowledge of the Tableau data sources, workbooks, and dashboards in your project. Ensure that they meet business requirements and are up to date.

2. **Validating and Approving Content**:
   * **Promotion Process with Issues:** Have all Tableau content promotions Production use the Tableau GitLab [Issue](https://gitlab.com/gitlab-data/tableau/-/issues/new) using the template `Tableau Publish to Production`.
   * **Production Validation**: Before promoting content to Production, ensure the data is accurate and meets the business’s needs. Double-check that the content is a trusted and validated source.
   * **Single Source of Truth**: Ensure usage of single source of truth (SSOT) for Certified and Published data sources. Also ensure that production content has one place for the users to access trusted dashboards and reports. Minimize redundant or conflicting workbooks that might confuse end users.

3. **Data Security and Compliance**:
   * **Protecting Sensitive Data**: Help safeguard sensitive data, including SAFE, MNPI (Material Non-Public Information), Restricted, and Personal Data. Ensure that sensitive workbooks and data sources are only accessible by authorized individuals.

---

### **Project Lead Abilities**

As a Project Lead, your main abilities are to move content from Development to Production. The following will cover Project Lead abilities as it’s essential to follow best practices to maintain a secure and well-organized environment.

1. **Sub-Folder Creation:** Project Leads have the ability to **create sub-folders** within their project folders. Sub-folders can help better organize content, especially in larger projects. Please **Inform the BI Team** when creating sub-folders to ensures that **permissions are set up properly** and are consistent with the overall structure of the project folder.

2. **Changing Content Owners:** Project Leads can change the content ownership to keep DRI for content accurate. This will be discussed later for updating content in Production.

3. **Setting Permissions in Project Folders:** Project Leads have the ability to **set permissions** within their designated project folders. However, Please **Do Not Alter Permissions** without consulting the BI Team. Incorrectly setting permissions can expose sensitive data or restrict access for users who need it. If you believe that permission adjustments are needed, please **contact the BI Team**. They will help ensure that permissions are configured correctly and securely.

Note that Project Leads do not have access to **Archive content.** Please reach out to the BI Team to have content moved to the Tableau Archived folder.

---

### **Publishing a Workbook to Production for the First Time**

Project Leaders have the ability to promote workbooks to Production. This process ensures only validated, accurate content reaches production, maintaining high standards for users.  After a content promotion issues has been reviewed and approved Project Leads should fulfill by completing the following:

1. Select **Move** by navigating to the ellipse to the right of the workbook
1. From the pop-up window select the appropriate department folder for the workbook promotion. Be sure to place sensitive workbooks in SAFE or restricted folders.
1. If the workbook title contains \[Draft\], rename the workbook and remove *Draft* from the title. The workbook may have a tag `Draft` which should also be removed by clicking the ellipse and selecting **Tags**. The associated tag can then be removed by clicking the `X` next to the tag.

### **Publishing Over an Existing Production Workbook (Updating Content)**

When updating content in production it is best to overwrite what is in Production. This will keep the content revision history, preserve metadata, viewership counts, and custom views intact.

1. Select **Edit Workbook**
1. Click on **Publish As**
1. Please make sure to name the workbook JUST AS it is currently named and select the corresponding Production folder.
1. Updating in this manner will retain revision history, viewership counts, and custom views. Although updating this way  will place the workbook in your name. To change the owner to the original developer complete the following:
   1. Click the ellipse next to the workbook title and click **Change Owner**
   1. Select the proper **owner** for the workbook
   1. When workbook ownership is changed in Tableau, for security reasons Tableau will drop data source credentials. In order to resolve this
      1. On the Workbook click **Data Sources**
      1. Click the ellipse next to each data source
      1. Click **Edit Connection**
      1. From the pop-up click **Embedded credentials in the connection**
      1. From the drop down select your name and select **Save**

   1. When updating a workbook to Production the original workbook in Development will remain. This is a duplicate workbook which can cause confusion for which content to use. This workbook can be removed by either archival or deletion. To Archive ask the BI Team to move to Archive. When deleting ensure you are removing the correct workbook and also know that deleted content cannot be restored.
