---
title: "Demo Systems"
description: "The GitLab Demo Systems provide infrastructure for the GitLab Customer Success, Marketing, Sales, and Training teams to demonstrate GitLab features, value propositions, and workflows in a variety of asynchronous and live capacities."
---

## Overview of Demo Systems

The GitLab Demo Systems provide infrastructure for the GitLab Customer Success, Marketing, Sales, and Training teams to demonstrate GitLab features, value propositions, and workflows in a variety of asynchronous and live capacities.

The Demo Systems were originally architected by [Jeff Martin](https://gitlab.com/jeffersonmartin) starting in October 2019 when he was a Senior Demo Systems Engineer. Since Jeff moved to the IT team in June 2021, [Logan Stucker](https://gitlab.com/lfstucker) ([Demo Architecture](/handbook/solutions-architects/center-of-excellence/demo-architecture/)) and [Scott Cosentino](https://gitlab.com/scottcosentinogitlab) ([GitLab University](https://university.gitlab.com)) have taken over as the primary maintainers of the Demo Systems, including supporting training instructors and students with [GitLab Learn Labs](https://gitlab.com/gitlab-learn-labs).

For questions about what demo sample projects are available or peer assistance with troubleshooting your failed pipeline job, please ask in the `#demo-architect-partners` Slack channel.

Please tag `@Jeff Martin` in one of the following Slack channels with any questions or requests related to infrastructure or access requests.

- `#demo-systems` is for SA, CSM, and PSE team members with questions or needing technical assistance. No longer for training/workshop related posts.
- `#demo-architect-partners` is for workshop-related discussions.
- `#demo-systems-ps-education` is for ILT/SPT/etc related discussions for Professional Services.
- `#sandbox-cloud-questions` is for help and support with the [Sandbox Cloud](/handbook/company/infrastructure-standards/realms/sandbox/) (AWS Accounts and GCP Projects).

Please consider this handbook documentation to be the single source of truth ("SSOT") for all resources that use the `gitlabdemo.com`, `gitlabdemo.cloud`, and `gitlabtraining.cloud` domain names.

### Why do we have demo systems?

- **Why shouldn't we just use GitLab.com?** Although you can use GitLab.com for showing most of the value of GitLab use cases, there are some administrative features that require the deployment of GitLab Omnibus infrastructure in AWS, GCP, or local VM/container. Many of our enterprise customers opt for self-managed over GitLab.com so we are mindful of "showing the customer what they'll see in production".

- **What's special about our infrastructure?** The demo systems infrastructure doesn't do anything special that a customer or partner company couldn't do themselves with the appropriate staffing and engineering investment.

- **Are there special engineering or scalability considerations with training classes and workshops?** Yes. The GitLab product was designed for users to be doing different activities throughout the day and the smaller reference architectures are not designed for dozens or hundreds of users to click the same button and running the same background jobs or pipeline jobs at the same time. Our users are also ephemeral and have automated garbage collection requirements that are not customary for conventional GitLab product use cases. This requires special scalability considerations, notably with the Container Registry, Sidekiq, and Kubernetes that we have to accommodate for. Here's some of the things we're looking for with scalability challenges.

  - Autoscaling runners for 500 simultaneous pipelines started in 10 seconds
  - Autoscaling Kubernetes nodes for 500 simultaneous review apps/deployments in 60 seconds
  - Auto DevOps pipelines that consume lots of wasted resources
  - Kubernetes services that are not needed (ex. Postgres database)
  - Intensive test jobs that are not needed during workshop (ex. Code Quality, Dependency Scanning, etc.)
  - Project export/import queued job fails with 500 simultaneous project imports
  - Features in your project that have known issues with import/export process (ex. wikis)
  - Administrative access for students (alternative use cases)
  - Package registry caching and garbage collection
  - Container registry caching and garbage collection
  - CI images pulling from Docker Hub with rate limits
  - CI image versions that are incompatible or have been upgraded with bug fixes
  - Using templates in `.gitlab-ci.yml` without realizing the underlying job load.
  - Using custom `.gitlab-ci.yml` files without comments of the actions being performed
  - Dependency proxy configuration (particularly for npm and maven dependencies)
  - Lack of step-by-step instructions that leads to student misconfigurations and errors

## Shared Environments

These shared environments are referred to as the Demo Cloud or Training Cloud. Historically, training users used the Demo Cloud so the names are used interchangably in some conversations.

{{% panel header="**Demo Systems v1 Deprecation**" header-bg="warning" %}}
The <code>gitlab-core.us.gitlabdemo.cloud</code> instance was deprecated on 2021-04-20 and destroyed on 2021-06-03. No data back up is available. See <a href="#access-shared-omnibus-instances">Access Shared Omnibus Instances</a> instructions for accessing the <code>cs.gitlabdemo.cloud</code> instance (direct replacement).
{{% /panel %}}

- `cs.gitlabdemo.cloud` - This is the primary GitLab Omnibus instance that all team members have access to for creating groups, projects, and sandbox purposes on a self-managed Omnibus instance. Please keep in mind that this is a shared environment across all team members and you should treat the Admin areas as read-only.
- `ilt.gitlabtraining.cloud` - This is used for instructor-led training classes. You should generate credentials for this instance if you are an instructor and need admin access to be able to import sample projects and/or see the groups for all of the students in a class.
- `spt.gitlabtraining.cloud` - This is used for self-paced training classes that are published in EdCast. You should only generate credentials for this instance if you are involved with instructional design or certification grading of self-paced student courses. If you are enrolled in a self-paced training class, you should follow the instructions for [redeeming an invitation code](#invitation-code-redemption) to generate temporary credentials that can be used for accessing the instance that has been pre-configured for the training lab guide steps.
- `workshop.gitlabtraining.cloud` - This is used for enablement and field marketing workshops that are delivered on a routine basis. You should generate credentials for this instance if you are involved creating lab sample projects, lab guides, presenting, or supporting a workshop.

## Isolated Environments

- **AWS Account**: See the [instructions](#aws-account-or-gcp-project-sandbox-cloud) for provisioning your own isolated AWS account with the GitLab Sandbox Cloud.
- **GCP Project**: See the [instructions](#aws-account-or-gcp-project-sandbox-cloud) for provisioning your own isolated GCP project with the GitLab Sandbox Cloud.
- **AWS Elastic Kubernetes Service (EKS) Cluster:** You can use your AWS account to provision an EKS cluster using the [Adding EKS clusters](https://docs.gitlab.com/ee/user/project/clusters/add_eks_clusters.html) GitLab documentation.
- **GCP Google Kubernetes Enginge (GKE) Cluster:** Send a message to Jeff Martin with questions about clusters that are in the `group-cs` GCP project. See the tutorial for [configuring GitLab with group-level Kubernetes cluster](/handbook/customer-success/demo-systems/tutorials/getting-started/configuring-group-cluster/) to add your cluster to your GitLab group.

## How to Get Started

These instructions are for Demo Systems v2 that uses the [gitlabdemo.cloud](https://gitlabdemo.cloud) Portal. The Demo Systems v1 infrastructure that used [gitlabdemo.com](https://gitlabdemo.com) has been deprecated except for training class invitation codes.

### Access Shared Omnibus Instances

These instructions provide you access to one or more of our [shared environments](#shared-environments) (Omnibus self-managed instances).

> The Demo Cloud Portal and provisioning system is powered by [gitlabdemo-cloud-app](https://gitlab.com/gitlab-com/demo-systems/management-apps/gitlabdemo-cloud-app), an open source project created by [Jeff Martin](https://gitlab.com/jeffersonmartin).

1. Visit the GitLab Demo Cloud Portal ([https://gitlabdemo.cloud](https://gitlabdemo.cloud)) and sign in with your Okta credentials.
1. Navigate to the Environments top navigation link or click on the **View Environments** button on the dashboard.
1. Locate the Environment Instance that you wish to access and click the **Generate Credentials** button.
1. After the credentials have been generated, click the **View Credentials** button.
1. Create a new record in your 1Password vault with your generated credentials.
1. Click the **Access Instance** button to open a new tab with the URL of the GitLab Omnibus instance.
1. Bookmark the Omnibus instance that you can use to easily access this in the future. You do not need to access the [https://gitlabdemo.cloud](https://gitlabdemo.cloud) portal each time you want to access the instance since this is only for access requests (credential generation).
1. After signing in, a group has been pre-created for you to store your projects under. To help with namespace consistency and security best practices, please do not create other top-level groups with custom names. You can create any subgroups or projects you'd like under your pre-created group or in your personal namespace.
1. Each instance is pre-configured with shared GitLab Runners and a Kubernetes cluster. These are for consumption purposes when running CI/CD pipelines and you do not have administrative access to these in the shared environments.
1. You can ask for help from other peers in the `#cs-questions` Slack channel.

### AWS Account or GCP Project (Sandbox Cloud)

See the [Sandbox Realm](/handbook/company/infrastructure-standards/realms/sandbox/#how-to-get-started) handbook page for instructions on creating your own AWS account and/or GCP project that you can use for deploying your own infrastructure with the benefit of centralized billing.

### Invitation Code Creation

Invitations codes are created by the demo systems team and can be requested by following the [Workshop Preparation guide](#workshop-preparation).

### Invitation Code Redemption

> **Warning for GitLab team members:** This process uses an existing GitLab.com account so please ensure this is set up before hand.

1. Visit [https://gitlabdemo.com](https://gitlabdemo.com) and click the **Redeem Invitation Code** button.
1. Type in the 8-character invitation code that was provided by your instructor or in your course materials.
1. Press **Redeem and Create Account**.
1. Type in your GitLab username (without the @), then click **Redeem and Create Account**.
1. Click the blue **My Group** button to open a new tab with the URL of the your GitLab group living on Learn Labs.

### Workshop Preparation

> The workshop process has iterated multiple times. The latest version of the workshop preparation process has been simplified into a self-service model.

**As the workshop presenter and supporting team member, you are responsible for importing and testing your sample projects and lab guide content. There is no support provided for misconfigured projects, failing pipelines and jobs, or GitLab Runner error messages specific to projects and jobs.**

There is no more peer review or approval process other than scheduling coordination with the field marketing team. These instructions provide best practice guidance. If you need assistance, please ask in the `#demo-architect-partners` Slack channel to get help from other team members that have delivered similar workshops.

Workshop preparation steps will be linked on the resulting issue after completing the request form [here](https://cloud.gitlabdap.com/)

### Workshop lab guide catalog

All of the workshop content that are created officially can be found in the [Learn Labs Sample Projects](https://gitlab.com/gitlab-learn-labs/sample-projects) group. Often workshops don't fit a customers needs out of the box so we support creation of custom customer workshops/labs/demos through the [DA Portal](https://cloud.gitlabdap.com/)

## Version Upgrades and Maintenance

We perform version upgrades on the weekend following the [monthly release](/handbook/engineering/releases/). The weekend upgrades are performed at a random time on Saturday or Sunday based on engineer availablility and lasts for approximately 30 minutes.

We delay the upgrade window for updates that we consider risky or occur during holidays. This occurs during May each year that aligns with the US Memorial Day holiday, in December around the Christmas Holiday, and in January at the end of the fiscal year when we have a configuration freeze until sales demos are completed.

For patch and security updates, we will usually only perform upgrades for critical updates and will announce maintenance windows in the `#demo-systems` channel on Slack.

### Legacy Version Support

We keep our shared environment up-to-date with the latest versions to help showcase the value that the newest features and solutions offer.

For demo and sandbox use cases requiring an older version, you can deploy a GitLab instance in a container in the Container Sandbox or using Omnibus in the Compute Sandbox. We do not offer any data migration or parity configuration support.

### GitLab Duo features

GitLab Duo is enabled for the demo cloud environments. You may assign a seat to yourself & other users in the Admin settings.

## Tutorials

- [Configuring GitLab with group-level Kubernetes cluster](/handbook/customer-success/demo-systems/tutorials/getting-started/configuring-group-cluster/)
- [Create a Jenkins Pipeline (Deprecated, Educational only)](/handbook/customer-success/demo-systems/tutorials/integrations/create-jenkins-pipeline/)

## Sample Data

Historically, there has not been a consistent set of demo data. Each of our Solutions Architects are responsible for creating their own demo data or forking projects from other team members.

See the handbook page for [Demo Readiness](/handbook/solutions-architects/demonstrations/#demo-readiness) and [Existing Demonstrations](/handbook/solutions-architects/demonstrations/#existing-demonstrations) to get started.

Please see the <a href="https://gitlab.com/gitlab-com/customer-success/solutions-architecture-leaders/sa-initiatives/-/issues">Solutions Architecture Initiatives issue tracker</a> for more information on the crowd sourced OKRs that are in progress and the development of our [Communities of Practice](/handbook/customer-success/initiatives/communities-of-practice/).

## Projects and Code Repositories

These are the projects that make the Demo Systems possible behind the scenes. You are welcome to study and learn from any of our source code. Each project is classified as `Public` or `Private` depenending on the security risk of the source code or information contained within.

### Demo Systems v2 (Deprecated)

- `Public` Underlying Terraform Modules and Ansible Role
  - [terraform-modules](https://gitlab.com/gitlab-com/demo-systems/terraform-modules)
  - [terraform-modules/gcp/gce/gcp-compute-instance-tf-module](https://gitlab.com/gitlab-com/demo-systems/terraform-modules/gcp/gce/gcp-compute-instance-tf-module)
  - [terraform-modules/gcp/gke/gke-cluster-tf-module](https://gitlab.com/gitlab-com/demo-systems/terraform-modules/gcp/gke/gke-cluster-tf-module)
  - [ansible-roles/omnibus](https://gitlab.com/gitlab-com/demo-systems/ansible-roles/omnibus)
- `Public` Assembled Terraform Modules and Environments
  - [terraform-modules/gcp/gitlab/gitlab-omnibus-sandbox-tf-module](https://gitlab.com/gitlab-com/demo-systems/terraform-modules/gcp/gitlab/gitlab-omnibus-sandbox-tf-module)
  - [environment-templates/gitlabtraining-shared-environment-template](https://gitlab.com/gitlab-com/demo-systems/environment-templates/gitlabtraining-shared-environment-template)
  - [INSTALL.md example](https://gitlab.com/gitlab-com/demo-systems/environment-templates/gitlabtraining-shared-environment-template/-/blob/master/INSTALL.md)
- `Private` Environments IaC - see `terraform/terraform.tfvars.json` and CI pipeline
  - [environments](https://gitlab.com/gitlab-com/demo-systems/environments)
  - [environments/cs-gitlabdemo-cloud](https://gitlab.com/gitlab-com/demo-systems/environments/cs-gitlabdemo-cloud)
  - [environments/ilt-gitlabtraining-cloud-iac](https://gitlab.com/gitlab-com/demo-systems/environments/ilt-gitlabtraining-cloud-iac)
  - [environments/spt-gitlabtraining-cloud-iac](https://gitlab.com/gitlab-com/demo-systems/environments/spt-gitlabtraining-cloud-iac)
  - [environments/workshop-gitlabtraining-cloud-iac](https://gitlab.com/gitlab-com/demo-systems/environments/workshop-gitlabtraining-cloud-iac)
  - [environments/app-gitlabdemo-cloud](https://gitlab.com/gitlab-com/demo-systems/environments/app-gitlabdemo-cloud)
- `Public` Management Applications
  - [management-apps/gitlabdemo-cloud-app](https://gitlab.com/gitlab-com/demo-systems/management-apps/gitlabdemo-cloud-app)
  - [gitlab.com/hackystack/hackystack-portal](https://gitlab.com/hackystack/hackystack-portal) (Open source namespace)
  - [sandbox-cloud/apps-tools/hackystack-portal](https://gitlab.com/gitlab-com/demo-systems/sandbox-cloud/apps-tools/hackystack-portal) (Mirror for Ultimate features)
- `Private - Ops` Sandbox Cloud Infrastructure
  - [ops.gitlab.net/cloud-realms/master-account/gcp/gcp-hackystack-portal-prd-tf](https://ops.gitlab.net/cloud-realms/master-account/gcp/gcp-hackystack-portal-prd-tf)
  - [ops.gitlab.net/cloud-realms/master-account/gcp/gcp-hackystack-portal-prd-ansible](https://ops.gitlab.net/cloud-realms/master-account/gcp/gcp-hackystack-portal-prd-ansible)
  - [ops.gitlab.net/cloud-realms/master-account/gcp/gcp-sandbox-cloud-dns-tf](https://ops.gitlab.net/cloud-realms/master-account/gcp/gcp-sandbox-cloud-dns-tf)
- `Private` Runbooks
  - [runbooks](https://gitlab.com/gitlab-com/demo-systems/runbooks)
  - [ops.gitlab.net/cloud-realms/apps-tools/runbook-docs](https://ops.gitlab.net/cloud-realms/apps-tools/runbook-docs)

### Demo Systems v1 (Deprecated)

The Demo Systems v1 repositories can be found in [gitlab.com/gitlab-com/customer-success/demo-systems](https://gitlab.com/gitlab-com/customer-success/demo-systems).

- `Private` Terraform Monolith Environments and Modules
  - [infrastructure/demosys-terraform](https://gitlab.com/gitlab-com/customer-success/demo-systems/infrastructure/demosys-terraform)
- `Private` Ansible Monolith Configuration and Roles
  - [infrastructure/demosys-ansible](https://gitlab.com/gitlab-com/customer-success/demo-systems/infrastructure/demosys-ansible)
- `Private` Management Applications (gitlabdemo.com)
  - [infrastructure/demosys-portal](https://gitlab.com/gitlab-com/customer-success/demo-systems/infrastructure/demosys-portal)
- Issue Trackers
  - [Demo Systems](https://gitlab.com/gitlab-com/demo-systems/issue-tracker)

### Handbook Links for Related Infrastructure

- [GitLab Sandbox Cloud](/handbook/company/infrastructure-standards/realms/sandbox/)
- [GitLab Infrastructure Standards](/handbook/company/infrastructure-standards/)
- [GitLab Infrastructure Standards - Labels and Tags](/handbook/company/infrastructure-standards/labels-tags/)
- [Demo Systems Kubernetes Architecture Docs](/handbook/customer-success/demo-systems/infrastructure/kubernetes/)
- [Demo Systems Network Architecture and Subnet Docs](/handbook/customer-success/demo-systems/infrastructure/networking/)

### Help and Support

We use Slack for real-time support and quick fixes. If in doubt of how to get help, ask in `#demo-systems`. The issue trackers are used for tasks and projects that take longer than 30 minutes. We do not use email for internal team communications.

- [Demo Systems Issue Tracker](https://gitlab.com/gitlab-com/demo-systems/issue-tracker/-/issues)
- `#demo-systems` Slack channel (for Demo Cloud announcements, questions, and technical support with Demo Cloud)
- `#demo-systems-ps-education` Slack channel (for ILT/SPT training lab discussions)
- `#demo-systems-workshops` Slack channel (for workshop discussions)
- `#sandbox-cloud` Slack channel (for Sandbox Cloud announcements)
- `#sandbox-cloud-questions` Slack channel (for Sandbox Cloud questions and technical support)
- `demo-systems-admin@gitlab.com` (for non-Slack users)
