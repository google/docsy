---
title: "Tableau"
description: "Tableau at GitLab"
---

| Quick Links | Developer Resources  | Communications |
| ---         | ---        | ---            |
| [Tableau Cloud - GitLab](https://10az.online.tableau.com/#/site/gitlab/home) | [GitLab Tableau Developer Guide](/handbook/enterprise-data/platform/tableau/tableau-developer-guide/) | [Internal Slack channel](https://app.slack.com/client/T02592416/C03RMCEHVCP)  |
| [Tableau eLearning Portal](https://elearning.tableau.com) |  [Tableau Style Guide](/handbook/enterprise-data/platform/tableau/tableau-developer-guide/tableau-style-guide/)  | [External Slack channel](https://app.slack.com/client/T02592416/C031QE95QJU)   |
| [Tableau Customer Portal](https://customer-portal.tableau.com/s/) | [Developer Tips and Tricks](/handbook/enterprise-data/platform/tableau/tableau-developer-guide/tips-and-tricks-for-developers/) | |
| [Tableau Status Page](https://trust.salesforce.com/) | [Tableau Embedding to Handbook](/handbook/enterprise-data/platform/tableau/embed-demo/) | |

## Tableau

Tableau is our Enterprise Business Intelligence tool. It is a [leader](https://www.tableau.com/asset/gartner-magic-quadrant-2024) in the Business Intelligence space. We are applying the [Tableau Blueprint](https://help.tableau.com/current/blueprint/en-us/bp_overview.htm) to launch our Tableau production environment. The Tableau Blueprint outlines the processes and best practices from thousands of Tableau customers. We will apply these processes and best practices in accordance with GitLab's TeamOps and culture.

<details markdown=1>

<summary><b>Tableau Terms and Definitions</b></summary>

- **Connections:** The method Tableau used to communicate with a source of data.
  - **Direct to Source:** When Tableau uses a built in connector to communicate with source of data like Snowflake or Google Drive.
  - **Virtual Connection:** A curated connection where the communication to the source of data has been set by the admin team.  Will generally simulate a Direct to Source connection.
  - **Published Data Source:** A curated connection to a single tableau that is the result of data modeling. It is stored on Tableau Cloud.
  - **Connect to A File:** A method of getting data from the files in your system into Tableau. This includes Excel files, CSV, PDF, etc.
  - **Connect to A Server (Cloud):** A method of connecting to a data source. This includes any connection to any online data sources, including Tableau Cloud and Snowflake
- **Connection Credentials:** The information used to certify connection to a source of data.
  - **Embedded:** Credentials are saved as part of the connection.
  - **Prompt User:** Credentials must be input every time the connection is used.
- **Connection Freshness:** Determines how often a connection will communicate with the source of data.
  -**Live:** Will send a query to the source of data each time the data is needed.
  - **Extract:** Well send a query when prompted to the source of data storing the result in custom micro database.
  - **Scheduled Extract:** An extract hosted on Tableau Cloud that will, on a fixed frequency, communicate with the source of data and update the stored data.
- **Data Modeling:** The method of combining multiple tables of data into a single result table.
  - **Data Warehouse:** The query to combine the table is stored in the data warehouse repository and is materialized in the data warehouse.
  - **Tableau Data Modeling:** Relationships are defined between tables, in the connection interface, directly in Tableau.
  - **Tableau Blending:** Relationships between data sources defined in the visualization construction interface.
  - **Custom SQL:** Using SQL within a connection to define the relationships between tables.
- **Tableau Objects:** The elements that a developer will work with to create visualizations.
  - **Project:** The folder structure maintained in Tableau Cloud.  This is where content permissions are administered.
  - **Data Source:** A collection of connections and data modeling that results in a single result table that can be published and a stand alone file.
  - **Flow:** A collection of connections and transformation steps that will typically result in creating one or more Data Sources. A Flow is created using the Tableau application called Prep which performs data transformations. Some individuals may use the works Prep and Flow interchangeably. At GitLab we prefer all transformations go through DBT at the Data Warehouse Level.
  - **Workbook:** The base file time for creating visitations.
    - **View:** The element that represent a chart or other visualization.
    - **Dashboard:** A collection of views and layout elements.
    - **Story:** A collection of views and layout elements where the views can be set to a specific filter or parameter value and displayed in a sequential structure.

</details>

## Governance Model

Governance is the combination of controls, roles, and repeatable processes that creates trust and confidence in data and analytics. Both IT and business stakeholders on the project team are responsible for defining data and content governance together. In a successful self-service environment, the appropriate levels of governance create accountability and enable, rather than restrict, access to trusted content for users at GitLab. Governance is a spectrum, different kinds of data and content require different kinds of governance. It's not a one-time effort because skills and expectations will evolve. Periodically evaluating governance processes will allow us to evolve and delegate more responsibilities as new analytical skills and use cases develop.

We use a self-governing model at GitLab. In a self-governing model, there is strong collaboration between IT and business users. Certified content and data sources are available, and one off content is being created regularly by Creators and Explorers. Viewers understand the delineation between certified, one off, and sandbox content states. The process of validation, promotion, and certification is well-defined and well-understood by users of all skill levels. With increasing analytical skills across the organization, the boundaries between the roles of the Modern Analytics Workflow are fluid as users switch from consuming to creating to promoting content with the appropriate level of permissions.

## BIOps

Our Tableau self-governing model is administered and enforced in the [GitLab Tableau Project](https://gitlab.com/gitlab-data/tableau) using BIOps. The BIOps approach will leverage GitLab's repository, maintainer and code review functionality to administer the governance model. Tableau does not currently have a Git integration so our BIOps is not fully automated and there are some limitations. The README file is coming soon which will describe the BIOps workflow. We will iterate on this approach with the GTM and Finance teams during Q1 and Q2 and adjust and adapt as needed.

### Tableau Project Architecture

The Project Architecture in Tableau Cloud is replicated and governed in the GitLab Tableau Project. Please see the [GitLab Tableau Project](https://gitlab.com/gitlab-data/tableau) for more details. Below are descriptions of the project folders and a sample of the project architecture found in Tableau Cloud.

The top-level folders in our Tableau Project, and their corresponding levels of governance, include:

- `Development`: content in this folder intentionally includes no governance, in order to enable users to quickly prototype. As such it should be considered to be sandbox content.
- `Production`: The Tableau Production folder environment is a designated area where validated, high-quality content is published and accessible to end users for business-critical reporting. Content in this folder has been reviewed and approved by Project Leaders.

<details markdown=1>

<summary><b>Project and Sub-Project Folder Descriptions</b></summary>

- **Top Level Project Folders:** **The top level project provides what the purpose of the workbook is.** There are two top level projects; Production, Development. This is the highest folder level that the Tableau user lands on. These folders guide the user either down a Production path to view certified content or development path to view sandbox content.
  - **2nd Level Sub-Project Folders:** **The 2nd level project provides who the primary owner of the workbook is.** This level of the architecture contains sub-projects for each department and cross-functional business motion such as the Go To Market Motion. Each department and cross-functional business motion will have their own sub-project. This gives us flexibility to create different types of security at the sub-project level based on specific departmental and business motion needs.
    - **3rd Level Sub-Project Folders:**  **The 3rd level project provides security around who can see the workbook.** Our SAFE Data Program is applied on this level of the architecture. This allows us flexibility to apply more security controls, by department, in the future to include enhanced SAFE Data program controls, row and column level security, and security around confidential information. Applying the security at this level will allow for customized, and scalable security programs by department and business motion.

</details>

<details markdown=1>

<summary><b>Project Architecture</b></summary>

1. **Development** (Sandbox Environment)
    1. **Customer Success**
        1. **General**
            1. Data Source Name
            2. Workbook Name
        1. **SAFE**
            1. Data Source Name
            2. Workbook Name
        1. Workbook Name
    2. **Data Team**
    3. **Engineering**
    4. **Finance**
    5. **Go To Market**
    6. **Marketing**
    7. **People**
    8. **Product**
    9. **Sales**
    10. **Security**
1. **Production** (Maps to our [Trusted Data Development Process](/handbook/enterprise-data/how-we-work/data-development/#trusted-data-development)
    1. **Customer Success**
        1. **General**
            1. Data Source Name
            2. Workbook Name
        1. **SAFE**
            1. Data Source Name
            2. Workbook Name
    2. **Data Team**
    3. **Engineering**
    4. **Finance**
    5. **Go To Market**
    6. **Marketing**
    7. **People**
    8. **Product**
    9. **Sales**
    10. **Security**

</details>

<details markdown=1>

<summary><b>BIOps Roles and Responsibilities</b></summary>

Please see the [project-permission-structure](/handbook/enterprise-data/platform/tableau/#project-permission-structure) section for details on the permissions for the BIOps roles.

1. **Tableau Admins / Maintainer Responsibilities:** These leaders are responsible for publishing content in the Sub-Projects that role up to the Top Level Projects and are responsible for maintaining the GitLab Tableau Project. This role does not specifically include Tableau Cloud Site Administration responsibilities although several Top Level Project Leaders are also Tableau Cloud Site Admins.
2. **Project Leader / Code Owner Responsibilities:** Project Leaders come from functional departments and teams. These leaders are responsible for reviewing and approving content for publishing in their department's folder and in cross-functional Sub-Project folders like the Go To Market folder as Code Owners. A full list of Project Leads can be found [here](https://10az.online.tableau.com/#/site/gitlab/workbooks/2730535/views).

</details>

## Tableau Content Publication

Tableau Workbooks and Data Sources can be published to two folder environments: Development and Production. The following details the publication process for each folder environment.

### Publication to Development Folders

All Tableau Content Development starts in the Development Project Folder. The Development Folder is a Sandbox environment where Tableau developers are free to experiment and iterate with content and share with team members for initial peer reviews. Tableau Developers can organize their Sandbox work using [Collections](https://help.tableau.com/current/pro/desktop/en-us/collections.htm) for easy access and sharing. Tableau Creators should follow [SAFE development workflow guidelines](/handbook/enterprise-data/platform/safe-data/#tableau) when working with sensitive SAFE/PII/MNPI data in the Development folders.

### Publication to Production Requirements

The Production Folder is a separate environment where Tableau users can find dashboards that have been peer-reviewed and tested by project leads of the respective functional areas. Content in the Production folders has met the following requirements:

1. **Documentation**
   - **Issue Creation**: Publication of content requires an issue which is automatically labeled for categorization and search-ability.
   - **Documentation in Handbook:** Documentation to be created in GitLab Handbook and linked to in Tableau content description and listed on dashboards
1. **Validation Approvals**
   - **Tableau Project Lead (Business Department Owner) Approval**: The Tableau Project Lead must approve the promotion.
   - **Technical Owner (Data Steward) Sign-off**: Project Lead may request a Technical Owner sign off on the validity of the data and content.
   - **Cross-Division Development**: Content that is cross-division requires a review by multiple Business Owners. Cross Division content includes GTM, etc.
1. **Data Security**
   - **Data Security**: For SAFE or Restricted data, appropriate folder and/or data source access permission controls must be applied. For general access data, confirmation that no restricted (SAFE) data is used is required.
1. **Uniqueness**
   - **Content Uniqueness:** Content is unique to Production
1. **Requirements for Workbook Formatting**
   - **Workbook Formatting**: The workbook must include the GitLab logo.
   - **Content Descriptions**: Workbooks and Data Sources should have a 1-2 concise description providing the purpose of the content.

### Publication to Production Procedure

![Tableau Publication to Production](/images/handbook/enterprise-data/platform/tableau/publication_to_production.png)

#### First-Time Promotion to Production

1. **Developer Publish to Development**: The Developer publishes the content to a Tableau Development folder. This is the initial step where content is prepared for review and eventual promotion.
1. **Developer Creates an Issue**: The Developer creates a [GitLab Issue](https://gitlab.com/gitlab-data/tableau/-/issues/new) which will document the promotion process to Production. Use the template `Tableau Publish Workbook or Data Source to Production` which lists all necessary request documentation and requirements.
1. **Developer Confirms Content Validity**: Developer ensures content meets promotion criteria requirements as documented in Issue. The Developer will then assign the issue to the associated [Department Project Lead](https://10az.online.tableau.com/#/site/gitlab/workbooks/2730535/views) for approval, signaling that the content is ready for review.
1. **Review Process**: The Project Lead will review the issue and content. They will check for compliance with Production requirements and assess the content's readiness. If needed, the Approvers will propose corrections or updates to the content. The Developer will need to address these before proceeding.
1. **Final Promotion**: Once all requirements are met and approval is granted, the Project Lead moves the content from Development to Production. This step officially makes the content available for business use.

#### Editing and Updating Content in Production

There are two options for editing or updating content which is in Production:

1. **Update and Overwrite Original:** This is required for any major changes to a workbook or data source. Changes include replacing or editing a data source, altering or adding logic, custom sql, or calculated fields. This is the preferred option where the developer edits the workbook or data source and save it to the Development folder. It is then reviewed and inspected. After approval it the Project Leader will overwrite it to Production.
1. **Allow Developer to Edit in Production:** Allow me 48 hours to edit/update access to alter in Production content myself. This is only allowed for small changes such as cosmetic improvements, spelling corrections, small filter changes or urgent issues.

### Tableau Style Guide

For more guidance on design best practices and resources, please refer to our [Tableau Style Guide](/handbook/enterprise-data/platform/tableau/tableau-developer-guide/tableau-style-guide/) handbook page.

### Tableau Publishing Service Level Objectives (SLOs)

**Production Publishing SLO**

Project Leaders are responsible for their respective department folders. They provide review and approvals for requests to promote content to Production.

**Development Publishing SLO**

Individual Tableau developers can publish development content on-demand to their department's development sub-project.

## Deployment

Tableau Cloud leverages GitLab's existing technology investments and integrates into our IT infrastructure to provide a self-service, modern analytics platform for our users.

### Tableau Unused Content Archival Policy and Process

To maintain an efficient, clean, and user-friendly Tableau environment an automated archival process has been implemented. This policy outlines the procedure for archiving unused and inactive content within our Tableau GitLab Cloud environment. Tableau GitLab Public and Sandbox are excluded from this policy.

Scope of Archiving:

90+ days unused workbooks and data sources are archived and made inaccessible by search or via direct links. Archived items can be retrieved upon request to the BI team. The archival process is automated and occurs on the 15th of each month by moving content to the `Admin Archive` Folder.

Archival Exclusions:

1. Workbooks and dependent data sources published to Tableau GitLab Public.
1. Items for which the owner has requested retention, indicated by the Tableau tag `Do NOT Archive`.
1. Content stored in Personal Folders will not be archived, as it is only viewable by the owner and does not clutter the environment.

Archival Contact:
For questions or requests regarding archived content, please reach out to the BI team. Click [here](/handbook/enterprise-data/platform/tableau/tableau-admin-guide/#stale-and-unsued-content-management) for  administrative archival documentation.

### Permissions

Pursuant to GitLab's Transparency value, all GitLab team members will have access to all content in Tableau by default. However, as a Public Company, we have to abide by the [SAFE Framework](/handbook/legal/safe-framework/) and limit access to certain sensitive and confidential data in Tableau to team members that need SAFE data to do their jobs. In Tableau, we set these SAFE data permissions via User Groups at the Project level.

#### User Groups

User Groups are the only prescribed method we use for setting permissions across the Tableau site. A User Group is a collection of users that can be based on a topic, project, or organization structure, that will need to have the same set of access and permissions for content. All users will be a member of the General Access user group and can be added to more User Groups as required.

#### Limited Access User Groups

Limited access user groups will allow business teams to manage accessibility to their published content based on rules that they've identified. Request for the creation of a limited access user group can be made through the `Standard Data Team Issue` template in [Issues](https://gitlab.com/gitlab-data/tableau/-/issues/new#) section of the Tableau project.

#### List of User Groups

Each section below corresponds to a limited access user group and the designated owner. Please note: To gain access to an user group, the designated owner will need to give approval in the AR.

- \***General SAFE Access:** This group allows viewing of and development with data that contains material non-public information that should be kept [SAFE](/handbook/enterprise-data/platform/safe-data/).  Team members must be on the [Designated Insiders](/handbook/legal/publiccompanyresources/#designated-insiders) list to be added to this group.
- To gain [access to SAFE data](/handbook/enterprise-data/platform/safe-data/) and be part of the SAFE Access group please submit a request through [Lumos](/handbook/security/corporate/systems/lumos/ar/).

- **ASM AMER Commercial Restricted Access:** This project allows access to the ASM AMER Commercial sub project. It is restricted because the data contains sensitive information about sales rep activity, bookings, and segmentation. Please work with Keith Gliksman @keith.gliksman for access approval.

- **ASM EMEA Commercial Restricted Access:** This project allows access to the ASM EMEA Commercial sub project. It is restricted because the data contains sensitive information about sales rep activity, bookings, and segmentation. Please work with Keith Gliksman @keith.gliksman for access approval.

- **ASM Restricted Access:** Please work with the GTM Planning & Ops team and/or Alex Cohen @alex.cohen for access approval.

- **Customer Success Access:** Please work with the Customer Success team and/or Brandon Butterfield @bbuterfield for access approval.

- **Ecosystem Sales and Operations:** Please work with the Ecosystem Sales and Operations team and/or Niles Jamshaid @Niles

- **Internal Audit Restricted Access:** Please work with the Internal Audit team and/or Harinakshi Poojary @hpoojary for access approval.

- **People Restricted Access:** Please work with the People Analytics team and/or Adrian Perez @aperez349 for access approval.

- \***Sales Development SAFE Access:** Please work with Keith Gliksman @keith.gliksman for access approval.

- \***Self-Service SAFE Access:** - Please work with the Self-Service team and/or Max Fleisher @mfleisher for access approval.

*Note: Groups with asterisk are where team members must be on the Designated Insiders list to be added to this group.

<details markdown=1>

<summary><b>Example User Group</b></summary>

```yml

groups:
  - group_name: group 1
  - group_name: group 2
  - group_name: group 3

users:
  - user_name: team_memebr@gitlab.com
    site_role: Site Administrator Creator
    auth_setting: SAML
    groups:
      - group 1
      - group 2

  - user_name: other_team_member@gitlab.com
    site_role: Viewer
    auth_setting: SAML
    groups:
      - group 1

```

</details>

#### Project Permission Structure

User Groups are applied at the Project and Sub-Project levels. We have two types of User Groups that we apply, Administrator User Groups and Access Control User Groups. The Administrator User Group gives permissions relating to what administrative tasks the user can do on the project such as moving content, deleting content, and changing permissions on the project. The Access Control User Group gives permissions relating to what access the user has such as viewing and publishing content.

The Administrator User Group and the Access Control User Group can be customized to meet the unique needs and requirements of each Project and Sub-Project on the Tableau site. This allows for flexibility to add or customize security controls on an as-needed basis. The assignment of a User Groups permission rule set for a Project or Sub-Project will be documented and controlled from YAML files maintained in the Tableau Project in the Data Group.

No content is published in the top level Production, and Development Projects. Content is only published in the Sub-Projects under the Top level projects which is a best practice for content, access, and security control. Top level Project (Production and Development) Leaders will always be a member of the Central Data Team's BI Platform team and will need a site role of Creator to function as Project Administrators for publishing content. Project Leaders own the Sub-Projects for their respective functional areas. The Project Leaders will be added to the applicable Administrator and Access Control Groups in order to have the right permissions to lead the Sub-Project.

The standard permission rules for top level Projects are noted below:

| Project     | View             | Publish             | Administer                      |
|-------------|------------------|---------------------|---------------------------------|
| Development | All Team Members | All Team Members    | Project and Sub Project Leaders |
| Production  | All Team Members | Project Leaders     | Project Leaders                 |

Below is an example of User Groups and Permissions applied to a Data Team Sub-Project where only Data Team Members can publish in the project, but All Team Members can view the content in the Sub-Project. At the Sub-Project Level, for the User Group Name, `Limited Access Team Members` can replace the `All Team Members` User Group Name for limited access.

| User Group Name           | User Group Type      | Permission Template      |
|---------------------------|----------------------|----------------------|
| BI Platform Team          | Administrator Group  | Inherited Administer |
| Data Team Project Leaders | Administrator Group  | Administer           |
| Data Team                 | Access Control Group | Publish              |
| All Team Members          | Access Control Group | View                 |

#### Capabilities

[Capabilities](https://help.tableau.com/current/server/en-us/permissions_capabilities.htm) are a Tableau concept that we apply. Permissions are made up of capabilities, or the ability to perform a given action on a piece of content, such as view, filter, download, or delete. Permission rules are the setting for each capability (allowed, denied, or unspecified) for the user group. Permission rules have templates available that make it easier to assign capabilities quickly.

Templates group sets of capabilities that are often assigned together based on common user scenarios such as View, Publish, and Administer. When we assign a template, its included capabilities are set to Allowed, with the rest left as Unspecified. The templates are built to have all of the capabilities a user would need, for example the Publish template includes everything from the View template plus additional capabilities.

Below are examples of Permission Templates we use at GitLab. Permission templates are applied to Tableau content.

| Capability         | View | Publish | Administer |
|:-------------------|:----:|:-------:|:----------:|
| View/Interact/Use  | X    | X       | X          |
| View/Add Comments  | X    | X       | X          |
| Download Image/PDF | X    | X       | X          |
| Share Views        | X    | X       | X          |
| Download Data      |      | X       | X          |
| Web Edit           |      | X       | X          |
| Overwrite/Publish  |      | X       | X          |
| Move               |      |         | X          |
| Delete             |      |         | X          |
| Change Permissions |      |         | X          |

Below are examples of Site Roles that we use. Individual users are assigned to site roles and given permissions via site role. Site roles act as an upper limit of what a Tableau User can do on the site.

| Capability            | Viewer | Explorer | Creator |
|:----------------------|:------:|:--------:|:-------:|
| View/Interact         | X      | X        | X       |
| View/Add Comments     | X      | X        | X       |
| Download Image/PDF    | X      | X        | X       |
| Download Summary Data | X      | X        | X       |
| Download Full Data    |        | X        | X       |
| Share Views           |        | X        | X       |
| Web Edit              |        | X        | X       |
| Overwrite/Publish     |        | X        | X       |
| Move                  |        | X        | X       |
| Delete                |        | X        | X       |
| Change Permissions    |        | X        | X       |
| Create Alerts         |        | X        | X       |
| Publish Data Source   |        |          | X       |
| Use Data Flows        |        |          | X       |
| Site Administration   |        |          | X       |

<details markdown=1>

<summary><b>Example Permission Templates YAML File</b></summary>

```yml

permission_templates:
  - name: view
    projects:
      Read: Allow # View
    workbooks:
      Read: Allow # View
      Filter: Allow # Filter
      ViewComments: Allow # View Comments
      AddComment: Allow # Add Comments
      ExportImage: Allow # Download Image/PDF
      ViewUnderlyingData: Allow # Download Summary Data
      ShareView: Allow # Share Customized
    data_sources:
      Read:  Allow # View
      Connect: Allow # Connect
      ExportXml:  Allow # Download Data Source
    data_roles:
      Read: Allow # View
    flows:
      Read: Allow
      ExportXml:  Allow # Download Flow
    lenses:
      Read: Allow # View
    metrics:
      Read: Allow # View
    virtual_connections:
      Read:  Allow # View
      Connect: Allow # Connect
    databases:
      Read:  Allow # View
    tables:
      Read:  Allow # View

  - name: project_lead
    projects:
      ProjectLeader: Allow # Set Project Leader
```

</details>

<details markdown=1>

<summary><b>Permissions Best Practices for Admins & Project Leaders</b></summary>

- Don't publish in the parent folder(s) and create nested subfolders instead.
- Set permission on a project folder level, not an individual workbook.
- Assign permissions to a group, not an individual person.
- Required course to complete: [Site Management](https://elearning.tableau.com/path/site-administrator/site-management)
- Ensure non-SAFE users cannot access SAFE content. This is the only time you should make use of the "deny" permissions functionality.

</details>

---

### Tableau License Management

Our organization manages Tableau licenses through an automated system using an Okta - Lumos integration. This approach ensures everyone who needs Tableau has access to it by redirecting unused licenses from inactive accounts to team members who will benefit from the platform's insights and capabilities.

#### License Activity Policy

To maintain a Tableau license, users must actively use the platform within a 90 day period.
Our automated Lumos system monitors login activity and manages licenses based on usage:

- Users who don't log in to Tableau within 90 days may be automatically deprovisioned
- Tableau Viewer licenses are automatically removed after 90 days of inactivity without additional review
- Tableau Creators and Explorers undergo a review by the Tableau Administration team before deprovisioning
- Note: VP-levelpositions and above are exempt from automated deprovisioning

#### Regaining Access

If deprovisioned due to inactivity:

1. Access Lumos portal through Octa
2. Submit Tableau access request for `Tableau Access`
3. Upon approval, access will be restored

**Permissions Preservation:** When a user is deprovisioned, they only lose their license—not their group memberships or permission settings. This ensures that when access is restored, users automatically regain access to all their previous projects, dashboards, and content without needing additional configuration.

This approach ensures licenses are available for active users while allowing easy restoration of access when needed and follows our [Data Health and Security practices](/handbook/enterprise-data/data-governance/data-management/#tableau).

In addition to the guidelines above, we typically reserve Creator licenses for team members whose role is primarily Analytics-based (i.e. analysts within functional teams, and/or team members whose core responsibilities include developing reports for their team).

**Tracking License Usage**

- [Utilization & Usage by License Type](https://10az.online.tableau.com/#/site/gitlab/workbooks/2447768/views)
- [Assigned Licenses](https://10az.online.tableau.com/#/site/gitlab/users) (Admins only)
- [Licenses Used](https://10az.online.tableau.com/#/site/gitlab/analysis/LoginBasedLicenseUsage)
- [Actions by Users](https://10az.online.tableau.com/#/site/gitlab/analysis/ActionsbyAllUsers)
- [eLearning Usage](https://dashboard.skilljar.com/analytics/) (Admins only)

## Access

### Getting Started

Users can request access to Tableau through the Okta portal using the [Lumos application](/handbook/security/corporate/systems/lumos/ar/). Follow these steps to submit your request for Tableau:

- Log in to the Okta portal
- Search for and select the "Lumos" application
- Select "Tableau" from the available applications
- Choose the specific role that matches your needs (see Role Types below)
- Lumos will automatically initiate the approval workflow and handle provisioning upon approval

The system will guide you through any additional information required to complete your request. You'll receive notifications about the status of your request through email.

### Role Types

When requesting access, select the appropriate role based on your needs:

- Viewer: View and interact with dashboards and visualizations
- Explorer: Create and modify workbooks from existing data sources
- Creator: Build new data sources and develop advanced visualizations

Click [here](/handbook/enterprise-data/platform/tableau/#capabilities) for further details on role capabilities.

### Restricted Data Access

Tableau access is structured in a tiered approach that separates data based on sensitivity levels and regulatory requirements.

- General Content: All users receive access to general content by default upon approval
- Restricted SAFE Content: Requires additional approval and justification
- Other [special permission](/handbook/enterprise-data/platform/tableau/#limited-access-user-groups) access.

Users may request restricted access through the Lumos App by selecting the following Lumos Apps and following the instructions there:

- Tableau Restricted SAFE Access
- Tableau Special Permissions 

### Tableau Desktop Access

Creators with an active license to Tableau Cloud are encouraged to use Tableau Desktop for development. Locally developed Data Sources or Workbooks can later be published to Tableau Cloud. All Creators will be assigned access to Tableau Cloud and Desktop. Tableau Desktop keys are automatically assigned by Tableau Cloud when first connecting.

Tableau Creators who use Tableau Desktop will need a [Yubikey](/handbook/security/corporate/systems/yubikey/purchasing/#yubikey-5c-nano-fips) set up in Okta to access content published in Tableau Cloud. If you're unsure which one to get, the recommended device is the [YubiKey 5C Nano FIPS](https://www.yubico.com/product/yubikey-5c-nano-fips/). Currently biometrics are not yet supported in Tableau Desktop.

One can download Tableau Desktop using the links below, or follow the link from the [Home Page](https://10az.online.tableau.com/#/site/gitlab/home) of Tableau Cloud.

- [Tableau Desktop Releases Download](https://www.tableau.com/support/releases)
- [Tableau Prep Builder Releases Download](https://www.tableau.com/support/releases/prep)

If you want to automatically download the latest version of Tableau Desktop for Mac, you can use [this link](https://www.tableau.com/downloads/desktop/mac).

<details markdown=1>

<summary><b>Updating Tableau Desktop</b></summary>

To update Tableau Desktop to the latest release, follow these steps:

1. **Download the Latest Version:** Visit [Tableau’s Download Page](https://www.tableau.com/support/releases) and download the latest version of Tableau Desktop.

1. **Install the Latest Version:** Run the downloaded installer and follow the on-screen instructions to complete the installation of the latest version of Tableau Desktop.

1. **Uninstall Previous Versions:** To maintain a clean environment and reduce any version conflicts, uninstall any previous versions of Tableau Cloud applications that may still be on your device. This can be done by closing all Tableau Desktop instances, open applications folder, locate previous versions of Tableau Desktop, and then moving them to trash.

</details>

### Tableau Desktop vs. Tableau Cloud

Tableau offers two ways to create / edit workbooks and data sources, either via the Desktop client or Cloud (web) version. However, we recommend developing in Tableau Desktop, as this version will have full functionality for editing and development.

Benefit of each version:

**Desktop**
Tableau Desktop provides FULL functionality. All the capabilities available by Tableau will be accessible in Desktop and you can create data sources, workbooks, dashboards, groups, sets, formatting, customized calculations, etc.

**Cloud**
Tableau Cloud allows users to interact with content (that you've created and published with Desktop). Cloud will also allow you to create workbooks / dashboards, but not data sources, sets, in-depth formatting, etc.

Fore more details on features offered by each version please see this Tableau article on [Web Authoring and Tableau Desktop Feature Comparison](https://help.tableau.com/current/pro/desktop/en-us/server_desktop_web_edit_differences.htm)

## Tableau Data Sources

### Tableau Data Source Connection Policy

This policy provides guidance on approved data source connections in Tableau to ensure data consistency, security, and support across all dashboards.

1. **Primary Data Source:** Snowflake

    - **Role:** Snowflake is the main data source, housing core business logic and transformed data. All data requiring transformations or business rules must originate from Snowflake.
    - **Support:** The Tableau Admin team fully supports Snowflake connections in Tableau.

2. **Additional Approved Data Sources**

    - **Permitted Sources:** Google Sheets, Google Drive, Excel are permitted for external data that doesn’t duplicate Snowflake data.
    - **Support:** The Tableau Admin team will provide support for the listed permitted connections in Tableau.
    - **Policy Compliance:** The connection must meet policy guidelines, avoiding duplication of Snowflake data and excluding additional business logic or transformations that belong in the warehouse pipeline.

3. **Additional Data Connections and Available Connectors**

    Tableau provides a wide range of [Supported Connectors](https://help.tableau.com/current/pro/desktop/en-us/exampleconnections_overview.htm) and [Tableau Exchange Connectors](https://exchange.tableau.com/connectors). Generally, all data should be routed through the approved data pipeline. However, direct connections to alternate data sources are permitted in specific cases, such as when data does not require merging with business logic, and a direct connection provides efficiency and quicker time implementation.

    These direct connections may only be used under the following policy:

   - **Approvals:** The connection must be approved by the Data Team and source system business and technical owner. Start a new request [here](https://gitlab.com/gitlab-data/tableau/-/issues/new?issuable_template=Standard%20Data%20Team%20Issue).
   - **Security:** The connection must be secure. A security audit may be required.
   - **Policy Compliance:** The connection must meet policy guidelines, avoiding duplication of Snowflake data and excluding additional business logic or transformations that belong in the warehouse pipeline.
   - **Data Privacy and Governance:** Data access should be restricted as necessary to protect sensitive information, such as PII and MNPI. Coordinate with the Tableau Admin Team to ensure proper data security and privacy measures are in place.

### Data Source Access: **Tableau Cloud**

Please refer to this [Connecting to Data in Tableau Guide](https://docs.google.com/document/d/17DdnVs_KrCw7ic5eJRj7D0i5x5WjfNtYRLGAozdjzSo/edit) for more details.

<details markdown=1>

<summary><b>Snowflake</b></summary>

In order to use the Snowflake connector, you must have a Snowflake account assigned by the Data Platform team. Please open an AR ([example](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/24785)), if you do not already have access.

<summary><b>Data Sources published in Tableau Cloud</b></summary>

1. Personal Space > New > Workbook
2. Connect to Data > On This Site
3. Pick a published data source

</details>

<details markdown=1>

<summary><b>Flat files (formats: xls/xlsx, csv, tsv, kml, geojson, topojson, json)</b></summary>

1. Personal Space > New > Workbook
2. Connect to Data > Files
3. Drag and drop a file / Upload from computer

</details>

<details markdown=1>

<summary><b>Google Sheets</b></summary>

1. Personal Space > New > Workbook
2. Connect to Data > Connectors > Google Drive
3. Sign in with your Google Account
4. Check all the boxes
5. Click `Allow`
6. Double click on the Google Sheet you want to use

</details>

### Data Source Access: **Tableau Desktop or Tableau Prep Builder**

*Important:* In order to connect Tableau Desktop to Tableau Cloud, you need to set up a Yubikey in Okta. Fingerprints will not work. Please see the [Tableau Cloud Access](/handbook/enterprise-data/platform/tableau/#tableau-desktop-access) section above for more details on how to order a Yubikey.

<details markdown=1>

<summary><b>Data Sources published in Tableau Cloud</b></summary>

1. Connect > Search for Data > Tableau Server
1. Quick Connect > Tableau Cloud
1. Log in to Okta - if Okta isn't set up for your account, login using your Tableau login & MFA
1. Pick a published data source

</details>

<details markdown=1>

<summary><b>Flat files (formats: xls/xlsx, csv, tsv, kml, geojson, topojson, json)</b></summary>

1. Connect > To a File
1. Select a data file format

</details>

<details markdown=1>

<summary><b>Google Sheets</b></summary>

1. Connect > To a Server > Google Drive
1. Sign in with your Google account
1. Check all the boxes
1. Click `Allow`
1. Click on the Google Sheet you want to use
1. Click Connect

</details>

### Snowflake OAuth Data Source Connection Expiration Period

Snowflake credentials in Tableau data sources are valid for 90 days. They reset automatically whenever new content is published to Snowflake-connected workbooks or data sources. However, if no publishing occurs within 90 days, the credentials will expire, requiring manual reauthentication. Click the below drop down for the process to update the OAuth Credentials:

<details markdown=1>

<summary><b>Updating Your Snowflake Credentials in Tableau
</b></summary>

1. Access Account Settings:
   - Log in to Tableau.
   - Click your profile icon in the top-right corner of the screen.
   - Select Account Settings from the dropdown menu.

1. Locate Snowflake Credentials:
   - Scroll down to the Snowflake section to view your current credentials.

1. Test Each Entry:
   - For each Snowflake entry listed, click Test.
   - If the test fails, proceed to the next step.

1. Remove and Re-add Credentials:
   - Delete the failed Snowflake entry by clicking Delete.
   - Click Add to re-add your credentials.

1. Re-add Credentials:
   - Select OAuth Credential as the authentication method.
   - Enter the Snowflake Server under OAuth instance.
   - Leave the Role field blank.

1. Complete Authorization:
   - A new window will pop up.
   - Click Single Sign-On (SSO)
   - Click Authorize to complete the process.

1. Repeat for All Accounts:
   - Perform these steps for each Snowflake account you have set up.

By following these steps, you’ll ensure that your Snowflake OAuth tokens are updated and prevent credential expiration from impacting your Tableau workflows.

</details>

### Tableau Certified Data Sources

Certified data sources ensure trusted, high-quality, and efficient data for the organization. Approved by a Tableau Admin through an [issue submission](https://gitlab.com/gitlab-data/tableau/-/issues/new?issuable_template=Certify%2Tableau%20Data%20Source), these sources receive a Certified badge and an appended " - Certified" name for visibility and searchability. The certification signals that the data source has been rigorously reviewed for accuracy and compliance, providing users confidence to build reliable reports.

Certified data sources are designed to be the most commonly used single sources of truth, aligned with the [GitLab Data Development](/handbook/enterprise-data/how-we-work/data-development/) lifecycle. They are broad, reusable, and versatile, capable of addressing a wide range of analytical needs. A typical department may maintain 2–12 certified data sources, serving as the primary resources for high-quality and efficient development. Departments retain ownership of these sources, with Project Leaders actively overseeing their maintenance to ensure they remain reliable, foundational tools for the organization.  To avoid overly complex, multifunctional data sources, multiple Certified, fit-for-purpose data sources are invited.

As the primary resource for analysts, certified data sources streamline onboarding, training, and updates while reducing duplication and promoting consistency. By focusing on quality and reliability, they simplify decision-making and solidify their role as essential components of the organization’s data ecosystem.

Recommend we allow best in class BI standards, plus modeling standards, fit for purpose approaches to use cases, and usability for the end users driving the build.

#### Tableau Certified Data Source Policy

All certified data sources must meet the following criteria:

1. **Data Accuracy and Quality**: Data must be validated against source systems to ensure accuracy while leveraging and inheriting the quality standards established by the Enterprise Data Model (EDM). Additionally, Tableau relationships and joins, filters, and calculated fields should be reviewed for correctness and consistency. Key metrics and calculations must be verified not only for consistency with source systems but also for alignment with the EDM’s defined structures and principles.
1. **Documentation**: Tableau Data Source should contain the following where it can be picked up by the Data Dictionary:
   - **Descriptive Name**: Clear and user-friendly
   - **Description**: Include purpose, data grain, and DRI ownership
1. **Performance**: Data should load in a reasonable amount of time. Queries should be efficient and optimized for extracts or live connections.
1. **Data Security and Compliance**: Data should adhere to data security, privacy, and governance policies including [SAFE](/handbook/enterprise-data/platform/safe-data/) access. Ensure restricted content is published to the appropriate project folder with row-level security applied where necessary to safeguard sensitive data.
1. **Custom SQL in Data Sources**: Data sources that use custom SQL may be certified if the custom SQL is being used for specific use cases, including: Row-level security, custom parameters such as query size limit filtering, and complex joins. Including custom SQL to apply business logic (i.e. alter calculations or conditions) will block a Tableau data source from being certified. This is because we aim to keep business logic within the transformation/data warehouse layer so that it is under source control, can be easily contributed to via an MR, and produces the same results across both the data warehouse & the BI layer.
1. **Field Naming and Formatting**:
   - Use intuitive names (e.g., “Transaction Date” instead of “txn_dt”)
   - Avoid Redundancy: Eliminate prefixes/suffixes that repeat context already provided (e.g., “Region” instead of “Sales_Region_Region”).
   - Hierarchical Data: Use Tableau levels for hierarchies (e.g., Country → State → City) to enable drill-down functionality.
   - Consistent Case and Spacing: Use proper case and spaces instead of underscores (e.g., “Customer Name” instead of “customer_name”).
   - Ensure correct data types and formatting:
       - Dates: Convert dates to ISO:`yyyy/mm/dd` or change datetime to date when time precision isn’t required.
       - Numbers: Format as currency or decimal where needed.
       - Percentages: Apply proper '%' formatting at desired decimal level.

## Data Team Tableau Resources

The Data Team provides shared Tableau resources to support reporting, dashboard development, and data visibility across the organization. These resources are maintained to help teams build with consistency, understand platform usage, and access historical content when needed.

You can find these resources in the [Production → Data Team → General](https://10az.online.tableau.com/#/site/gitlab/projects/367731) folder. This location includes information such as:
   
- Platform Usage Dashboards – Insights into how Tableau is being used across teams
- Archived Dashboards and Data Sources – Retired or historical content for reference
- Templates and Examples – Standardized templates to help jump-start new dashboard builds

Use this folder as your go-to spot for foundational Tableau materials supported by the Data Team.

## Education

GitLab team members who realize the full potential of analytical insights can do powerful things with data. But having a platform like Tableau and access to data isn't enough; we need to assure that our users are prepared to use Tableau effectively.

### Official Training Resources

- [Free Tableau Training](https://www.tableau.com/learn/training)
- [Tableau eLearning - Training Portal](https://elearning.tableau.com/): eLearning from Tableau is available for users with the Creator or Explorer license type
  - Tableau eLearning access steps
    1. Go to [explorer-elearning.tableau.com](https://explorer-elearning.tableau.com)
    1. Create (or login to) your TableauID account
    1. Confirm your email address via the TableauID confirmation email
    1. Go to https://explorer-elearning.tableau.com and log on using your TableauID
    1. Register at the Tableau Learning Center with the Access Code available [here](https://docs.google.com/document/d/1UPvTXZD3wgRpt7m_Hz9D53ZIt2hF7suHi6oggjbQa2I/edit?tab=t.0).
    1. Start using eLearning by clicking on a Course or Learning Path.
    1. Return to https://explorer-elearning.tableau.com to continue using Tableau eLearning.

  - If you experience any issues accessing the training content, check [this page](https://support.skilljar.com/hc/en-us/articles/360033553054) for solutions to the most common problems.
- [Tableau Community](https://community.tableau.com/s/)
- [Tableau Support](https://www.tableau.com/support)
- [Tableau Classroom training](https://trailheadacademy.salesforce.com/products/tableau#f-products=Tableau) & [Training Pass](https://www.tableau.com/learn/training/elearning)
  - These could be options for you to use as part of your [growth and development benefit](/handbook/people-group/learning-and-development/growth-and-development/). Bring this up with your manager during your [career development conversations](/handbook/people-group/learning-and-development/career-development/#what-is-career-development).

<summary><b>Third Party Training Resources</b></summary>

- [YouTube Intellipaat - Tableau Cloud Training](https://www.youtube.com/watch?v=ttCDqyfrcEc)
- [YouTube edureka! - Tableau Full Course](https://www.youtube.com/watch?v=aHaOIvR00So)
- [YouTube Simplilearn - Tableau Tutorial](https://www.youtube.com/watch?v=fO7g0pnWaRA)

Note: training videos listed above are provided for free by third parties and their content has not been fully vetted by either Tableau or the GitLab Data Team.

</details>

<details markdown=1>

<summary><b>Recommended Training</b></summary>

Below is the recommended training course(s) and required time estimation for the following roles based on their responsibilities and required skill sets. For the full list of courses and learning paths please see our handbook section under Training by Roles:

Site Administrator

- Minimum: [Introduction to Site Administration](https://elearning.tableau.com/path/site-administrator/introduction-to-site-administration) *(time estimate: 3 hours)*

Project Lead / Maintainer / Code Owner

- Minimum: [Getting Started with Tableau Cloud](https://elearning.tableau.com/path/community-leader/getting-started-with-tableau-online) *(time estimate: 4 hours)*

Creator / Developer / Analyst

- Minimum: [Getting Started with Tableau Desktop](https://elearning.tableau.com/path/data-scientist/getting-started-with-tableau-desktop) *(time estimate: 4 hours)*

Explorer

- Minimum: [Get Started with Tableau](https://explorer-elearning.tableau.com/path/author-learning-path/get-started-with-tableau-author) *(time estimate: 4 hours)*

Business Owner / Stakeholder / Viewer / End User

- Minimum: TBD *(time estimate: )*

</details>

<details markdown=1>

<summary><b>Training by Roles</b></summary>

Below is a set of training courses and learning paths that are recommended for the following roles based on their responsibilities and required skill sets:

Site Administrator

- [Site Administrator Learning Path](https://elearning.tableau.com/path/site-administrator) (**estimated )
- [Tableau Services & Support](https://elearning.tableau.com/tableau-services-and-support)

Project Lead / Maintainer

- [New Feature Spotlight Course](https://elearning.tableau.com/path/new-feature-spotlight)
- [Community Leader Learning Path](https://elearning.tableau.com/path/community-leader)
- [Tableau Intermediate Course](https://elearning.tableau.com/tableau-intermediate)
- [Tableau Advanced Course](https://elearning.tableau.com/tableau-advanced)

Creator / Analyst

- [Author Learning Path](https://elearning.tableau.com/path/author-learning-path)
- [Designer Learning Path](https://elearning.tableau.com/path/designer)
- [Analyst Learning Path](https://elearning.tableau.com/path/analyst-learning-path)
- [Data Scientist Learning Path](https://elearning.tableau.com/path/data-scientist)
- [Developer Learning Path](https://elearning.tableau.com/path/developer)
- [Tableau Fundamentals Course](https://elearning.tableau.com/tableau-fundamentals)
- [Tableau Prep Builder Course](https://elearning.tableau.com/prep-course)

Business Owner / Stakeholder

- [Executive Sponsor Learning Path](https://elearning.tableau.com/path/executive-sponsor)

End User

- [Consumer Learning Path](https://elearning.tableau.com/path/consumer)

</details>

<details markdown=1>

<summary><b>Tableau Certification</b></summary>

Tableau offers several [certifications](https://www.tableau.com/learn/certification) for users to prove their specialized skills in and knowledge of the tool. The following certifications are recommended for creators / analysts who want to showcase their expertise:

- [Certified Tableau Desktop Specialist](https://www.tableau.com/learn/certification/desktop-specialist): This exam is for those who have foundational skills and understanding of Tableau Desktop and at least three months of applying this understanding in the product. Please also view the [exam guide](https://www.tableau.com/learn/certification/tableau-desktop-specialist-exam-guide) for more details on how to prepare.
- [Certified Tableau Data Analyst](https://www.tableau.com/learn/certification/certified-data-analyst): This exam is for analysts that can enable stakeholders to make business decisions by understanding the business problem, identifying data to explore for analysis, and delivering actionable insights. Please also view the [exam guide](https://www.tableau.com/learn/certification/tableau-certified-data-analyst-exam-guide) for more details on how to prepare.

</details>

<details markdown=1>

<summary><b>GitLab Training Videos</b></summary>

- [Creating a Tableau Data Source: Custom SQL](https://youtu.be/dE0fnhYcyDA)
- [Creating a Tableau Data Source: Tableau Modeling](https://youtu.be/BSUJgQmqsDA)
- [Creating a Tableau Data Source: Virtual Connections](https://youtu.be/BMXJhNwEjs0)
- [Creating a Tableau Data Source: Full Walkthrough](https://youtu.be/3EDvGoMn4sw)

</details>

## Support

In addition to the proactive steps we've taken with self-service help resources and education initiatives, we want to provide our user community with the support they need in case these two approaches do not answer their question or resolve the issue.

<details markdown=1>

<summary><b>Tableau Office Hours</b></summary>

We hold weekly office hours (8:30-8:55 AM PST) for Tableau users to be able to regularly meet and showcase their work, as well as discuss topics / ask questions on anything relating to the tool. Please refer to our running [Meeting Agenda and Question & Answer document](https://docs.google.com/document/d/1i23bIsoupKC7rTepbU2lVXTHB5vxKuAgl07kAQq2EBA/edit) for content covered in our sessions.

For additional troubleshooting support you can [submit a support case](https://kb.tableau.com/articles/howto/submitting-a-case-from-the-customer-portal) to Tableau via the [Customer Portal](https://customer.tableausoftware.com/).

</details>

<details markdown=1>

<summary><b>Common Problems</b></summary>

| Environment | Problem | Solution |
| ------- | ------- |------- |
| Tableau Desktop | Error FAB9A2C5 Connecting to Snowflake when using Tableau Desktop | Check to see if the simba.snowflake.ini file is showing as DriverManagerEncoding=UTF-32. If it is set to 16 you'll have trouble connecting. [Tableau Knowledge article](https://kb.tableau.com/articles/issue/error-fab9a2c5-connecting-to-snowflake-via-odbc?lang=en-gb). |
| Tableau Cloud | Invalid Consent Request when opening a workbook that asks you to log into Snowflake. | If the data source for the workbook was created using Oauth, have the workbook owner republish it using the `Embed password for data source` feature, or alternatively ask the Data Team to switch it to using the service account instead. |
| Tableau Desktop | When publishing to Tableau Cloud from Tableau Desktop, all project folders are greyed out. | Click on the `>` icon next to your department's foldername to see the subfolders. You should be able to publish into those subfolders. |
| Tableau eLearning | Error Message: "Missing Authentication Cookie" |  Change your browser settings as described on the [Skilljar Help Center](https://support.skilljar.com/hc/en-us/articles/360033553054) |
| Tableau Cloud or Desktop | When using "Initial SQL": "An error occurred when connecting to Snowflake" | To run your own SQL queries in Tableau, don't use the `Initial SQL` functionality. Snowflake doesn't support that in this context. Use `Customer SQL Query` instead. It will be found on the bottom left of the screen after connecting to Snowflake, picking a warehouse and schema. It's found underneath the listed tables. |
| Tableau Cloud or Desktop | Error "There was a problem connecting to the data source "Untitled Data Source"" when connecting to Virtual Connections  |  The password for the Snowflake service account expired. For Tableau admins: Connect to Snowflake via Oath as the service account. It will prompt you to change the password. Afterwards, edit all the virtual connections and republish them. |
| Tableau Cloud or Desktop | Nondescript error when connecting to Virtual Connections |  The underlying table changed, likely with fields removed. Ask a Tableau admin to Edit the virtual connection, find the affected table/field (check 'Alerts' when editing the virtual connection), and `Exclude` the deleted field. Then republish the virtual connection. |
| Tableau Desktop | Screen gets stuck on authenticating to Okta when connecting Tableau Desktop to Tableau Cloud |  Use a Yubikey to connect to Okta when using Tableau Desktop. Fingerprint authentication will not work. |

</details>

<details markdown=1>

<summary><b>Tips and Tricks</b></summary>

| Environment | Tips |
| ------- | ------- |
| Tableau Desktop | Certain features are only available to Creators when using Tableau Desktop, and might not be there in Tableau Cloud. For the best experience building dashboards, use Tableau Desktop if the size of the data and the performance of your laptop allows it. |
| Tableau Cloud / Desktop | When your data set allows it, use data extracts for the best performance and end user experience |
| Tableau Cloud | Always save a newly created workbook first in your personal space before working on it. If you run into any issues while developing, the latest draft version can always be retrieved from there. If you don't it could disappear if you run into any issues. |
| Tableau Desktop | If you run into a problem where Tableau Desktop crashes, clear out the logs and try to reproduce the error. Then send the logs to @mlaanen or @ttnguyen28 or post it in our external slack channel with Tableau. Follow these steps to generate the logs: Close Tableau Desktop, go to Documents > My Tableau Repository > logs, delete all the logs, Open Tableau Desktop, replicate the issue, close Tableau Desktop, open up the log files in the file path mentioned above. |

</details>

<details markdown=1>

<summary><b>Troubleshooting Support</b></summary>

1. Post your questions in the `#data-tableau` internal slack channel to see if someone in the company has the answer.
1. Post your questions in the `#ext-gitlab-tableau` external slack channel if you need someone from Tableau to look at it.
1. Post your questions in the [Tableau Community](https://community.tableau.com/s/) to see if someone in the wider Tableau user community has the answer.
1. Open a support case with [Tableau Support](https://www.tableau.com/support) if you're experiencing a technical issue with the Tableau Cloud platform or Tableau Desktop.
    - Anyone can open a support case, however if you want expedited response and resolutions times based on [Tableau Premium Support's](https://www.tableau.com/resources/teams-organizations/premium-support) SLAs, please reach out to the BI team in #data-tableau to get support from a Tableau Admin.

</details>

## Monitoring

As more and more users are onboarded and the use of analytics grows across GitLab, Tableau becomes mission-critical for data-driven decisions. Without monitoring, a "set-it-and-forget-it" deployment can be met with inadequate resources that fail to support the workload of highly-engaged users. Ongoing, proactive monitoring is required to operate and support our deployment at scale and meet the expectations of our user community.

Because Tableau is integrated with our enterprise architecture, including hardware, network, databases, and applications, understanding how everything interoperates is key for routine monitoring, performance, and troubleshooting. The monitoring function is focused on these systems and their integration with Tableau Cloud. It is primarily technical in nature and performed by IT roles. Tableau Cloud Site Administrators will work together to ensure the platform meets evolving business needs.

### Tableau Cloud Status

To check the current status of Tableau Cloud and if there are any reported outages, visit the [Tableau Status Page](https://trust.salesforce.com/). On that page you can also sign up for notifications in the event of an outage. For reference, GitLab's Tableau Cloud instance is located in `United States - West - (10AZ)`.

## View Performance

Apdex is a standard measure of load performance. It is calculated by classifying each load event into one of three categories: Satisfied, Tolerating, Frustrated. It is based on two duration parameters: Target Time and Tolerable Time.

We use a target time of 5 seconds and follow the recommendation that the Tolerable time be four times that, 20 seconds.

The index itself is a weighted average, values range between 0 and 1, of the count of loads in each category which is then classified into five ratings: Excellent, Good, Fair, Poor, Unacceptable.

| Apdex Value Range | Rating |
| 0.94 to 1.00 | Excellent |
| 0.85 to 0.93 | Good |
| 0.70 to 0.84 | Fair |
| 0.50 to 0.69 | Poor |
| 0.00 to 0.49 | Unacceptable |
