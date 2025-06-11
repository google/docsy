---

title: "Channel Partner Migration Services"
---






<link rel="stylesheet" type="text/css" href="/stylesheets/biztech.css" />

GitLab encourages our GitLab Partners to engage in and lead technical services such as migrating to GitLab. This page overviews different data sources that can be transferred to various GitLab destinations. For deeper technical understanding, engineers should enroll and learn from the GitLab University [GitLab Certified Migration Services Specialist Learning Path.](https://university.gitlab.com/learning-paths/gitlab-certified-migration-services-specialist-learning-path)

See [Import and Migrate Groups and Projects](https://docs.gitlab.com/ee/user/project/import/) for a short technical overview of available paths to importing or migrating to GitLab.

## Common migration steps for GitLab Partners

_For the links in this section, login to our [GitLab Partner Portal](https://partners.gitlab.com/) first, then click the links:_

GitLab Partners who are successful at performing customer-facing migrations often take this example path in client engagement:

1. Scope/size of the migration: How many users? How many code repositories? Will the group structure remain intact, or is the migration an opportunity to 'clean up unused projects' within GitLab? Would a [GitLab Partner Led Optimization Service](https://partners.gitlab.com/prm/English/s/assets?collectionId=55025&id=459892&renderMode=Collection) be a better first step?
1. Understand the customer's business: What artifacts are needed to be migrated? Is an audit-compliance history of users, issues, and merge requests important to the company? Or is migrating just the git code repository sufficient? What data is your customer sensitive to migrating?
1. Health check: Is the import data source healthy, or would a [Readiness Assessment](/handbook/customer-success/professional-services-engineering/engagement-mgmt/scoping-information/readiness/) help provide the health of the GitLab source? Are some git repositories unable to be cloned, or require cleaning up? Are there any large code repositories with a long-lived history?
1. Post-migration needs: Are there other consultative considerations like access control, and Single-Sign-On (SSO) that need to be configured as part of the migration and adoption towards GitLab or GitLab.com?

After having a technical scoping/sizing conversation with your customer, GitLab Partners find our [GitLab Channel Service Packages](https://partners.gitlab.com/prm/English/c/Channel_Service_Packages) helpful. These contain templated Data Sheets, Statements of Work (SOWs), and Project Plans. GitLab Partners are welcome to take and use these GitLab Channel Service Packages as templates for your customer work. Rebranding and rewording towards your unique technical service offering is encouraged. The table also outlines the GitLab expectations for the certifications held by our partners under the `Aligned Partner Certification` column.

The [Migration Readiness Checklist](https://gitlab.com/gitlab-org/professional-services-automation/tools/migration/congregate/-/blob/master/customer/migration-readiness-checklist.md), provided by GitLab Professional Services, provides a helpful example for you to use. It includes technical asks for Access, Communication, User migration planning, Migration Preparation, Wave Planning, Post Migration Checks, Post Migration Considerations, and Getting the most out of your investment. This document assumes the usage of [Congregate](https://gitlab-org.gitlab.io/professional-services-automation/tools/migration/congregate/), an open-source command line interface (CLI) migration tool from GitLab. Congregate is the preferred method used by GitLab Professional Services.

Communicating clearly [What are a customer's obligations and responsibilities prior to, during, and after a migration?](https://gitlab.com/gitlab-org/professional-services-automation/tools/migration/congregate/-/blob/master/customer/famq.md#what-are-a-customers-obligations-and-responsibilities-prior-during-and-after-a-migration) and [What level of instance access and permission are needed for migrating?](https://gitlab.com/gitlab-org/professional-services-automation/tools/migration/congregate/-/blob/master/customer/famq.md#what-level-of-instance-access-and-permission-are-needed-for-migrating) with your customer will also ensure a smooth migration.

## From other DevOps platforms to GitLab

To migrate projects from systems other than GitLab, please review the list of [Supported import sources](https://docs.gitlab.com/ee/user/project/import/#supported-import-sources) and [Other Import Sources](https://docs.gitlab.com/ee/user/project/import/#other-import-sources) (anchor link on the same page).

Migrating pipelines from other systems, [like Jenkins](https://docs.gitlab.com/ee/ci/migration/jenkins.html), is a value-added manual development process. We encourage our partners to scope by understanding the number of pipelines, current pipeline performance, [environmental variables](https://docs.gitlab.com/ee/ci/variables/), and secrets used. Partners find a time and materials style contract helpful when consulting on developing pipelines between other source systems and [GitLab's pipeline syntax.](https://docs.gitlab.com/ee/ci/)

## From GitLab self-managed to GitLab self-managed

The best way to migrate from one self-managed GitLab server to another is to perform a [full backup](https://docs.gitlab.com/ee/administration/backup_restore/) at the source instance and then a restore at the target instance. Step-by-step directions are available on our [Migrate to a new server](https://docs.gitlab.com/ee/administration/backup_restore/migrate_to_new_server.html) docs page.

## Air-gapped environments

GitLab can be installed and operated in [offline environments](https://docs.gitlab.com/ee/user/application_security/offline_deployments/). This setup makes migration projects more complex.

- [Congregate](https://gitlab-org.gitlab.io/professional-services-automation/tools/migration/congregate/), an open-source command line interface (CLI) migration tool from GitLab, does support Air-gapped environments. See [Support air-gapped environment migrations](https://gitlab.com/groups/gitlab-org/professional-services-automation/tools/migration/-/epics/116) and [Migrating data in an air-gapped environment](https://gitlab.com/gitlab-org/professional-services-automation/tools/migration/congregate/-/blob/master/runbooks/airgapped-migration-usage.md)

- Direct transfer doesn't support this. Project/export import is a workaround. See the GitLab issue titled [Direct transfer - Support for air-gapped solutions](https://gitlab.com/groups/gitlab-org/-/epics/8985) and [Maintain project and group file-based import/export as a workaround for migrations over air-gapped networks and to serve other use cases](https://gitlab.com/gitlab-org/gitlab/-/issues/363406) for nuanced technical details on performing this.

## From GitLab self-managed to GitLab SaaS or the other way around

Choosing from the three different options for a customer migration depends on understanding your customer's needs post-migration. A full technical page comparing in a table format the pros and cons of each method is outlined in [Migration features](https://gitlab.com/gitlab-org/professional-services-automation/tools/migration/congregate/-/blob/master/customer/gitlab-migration-features-matrix.md#migration-features). While Congregate supports most Features to be migrated, migrating to/from GitLab.com with Congregate requires the GitLab Professional Services team due to restricted access to the GitLab.com SaaS (multi-tenant) data. Your migration service may be achieved using one of the other methods.

There are three different options for these migrations.

### 1. File exports

For cases that direct transfer can't or won't cover. A good example would be air-gapped environments - see above.

- [Migrating projects using file exports](https://docs.gitlab.com/ee/user/project/settings/import_export.html)

- [Items that are exported via file exports](https://docs.gitlab.com/ee/user/project/settings/import_export.html#items-that-are-exported)

- [Items that are not exported via file exports](https://docs.gitlab.com/ee/user/project/settings/import_export.html#items-that-are-not-exported)

- [Project import and export API](https://docs.gitlab.com/ee/api/project_import_export.html)

- [Group import and export API](https://docs.gitlab.com/ee/api/group_import_export.html)

### 2. Direct transfer (Beta)

This feature was recently released and is the direction our product team is moving toward for migrating GitLab projects from instance to instance or SaaS. Please review the following resources:

- [Migrated group items (direct transfer)](https://docs.gitlab.com/ee/user/group/import/index.html#migrated-group-items)

- [Migrated project items (direct transfer)](https://docs.gitlab.com/ee/user/group/import/index.html#migrated-project-items-beta)

### 3. Congregate

[Congregate](https://gitlab-org.gitlab.io/professional-services-automation/tools/migration/congregate/) - used by [GitLab Professional Services](https://about.gitlab.com/services/) - is GitLab's most mature migration solution and supports many options. **Note that migrations to SaaS require the involvement of GitLab PS due to restricted access to GitLab SaaS (multi-tenant) data.** More information about the latter can be found [here](/handbook/customer-success/professional-services-engineering/engagement-mgmt/scoping-information/migrations/SM-to-SaaS/#faq).

Important to note about Congregate:

- [Congregate Migration Features Matrix](https://gitlab.com/gitlab-org/professional-services-automation/tools/migration/congregate/-/blob/master/customer/gitlab-migration-features-matrix.md)

- [Migration Readiness Checklist](https://gitlab.com/gitlab-org/professional-services-automation/tools/migration/congregate/-/blob/master/customer/migration-readiness-checklist.md)

- [Customer's obligations and responsibilities - Congregate FAMQ](https://gitlab.com/gitlab-org/professional-services-automation/tools/migration/congregate/-/blob/master/customer/famq.md#what-are-a-customers-obligations-and-responsibilities-prior-during-and-after-a-migration)

- [Limitations of Self-Managed to SaaS migrations via Congregate - Congregate FAMQ](https://gitlab.com/gitlab-org/professional-services-automation/tools/migration/congregate/-/blob/master/customer/famq.md#what-level-of-instance-access-and-permission-are-needed-for-migrating)

## GitLab Professional Migration Services

The GitLab Professional Services team has a [full-service catalog of offerings available](https://about.gitlab.com/services/catalog/) for direct customers. Partners may review the offerings for inspiration towards delivering similar Professional (consultative) Service offerings.

The [GitLab Professional Services Migration Package](https://drive.google.com/file/d/1SK4iEg3XKx2nBWNo7xDlBbjLfOe1cFhB/view) is one popular offering.
