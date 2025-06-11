---
title: "Sandbox Cloud Realm"
description: "This handbook section defines the latest iteration of infrastructure standards for AWS and GCP across all departments and groups at GitLab."
---

### Quick links

#### User Portal

- [gitlabsandbox.cloud](https://gitlabsandbox.cloud)

#### Documentation

- [Global infrastructure standards](/handbook/company/infrastructure-standards/)
- [Global labels and tags](/handbook/company/infrastructure-standards/labels-tags/)
- [Infrastructure policies](/handbook/company/infrastructure-standards/policies/)

#### Issue Tracking and Collaboration

- [HackyStack issue tracking](https://gitlab.com/gitlab-com/infra-standards/hackystack/-/issues) (open source code feature development)
- [CorpSec Infra issue tracking](https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues) (GitLab-specific topics and requests)
- `#sandbox-cloud-questions` Slack channel to ask questions and get help.

#### Code and Examples

- [HackyStack README](https://gitlab.com/gitlab-com/infra-standards/hackystack/-/blob/main/README.md)
- [HackyStack source code](https://gitlab.com/gitlab-com/infra-standards/hackystack)
- [HackyStack screenshots](https://gitlab.com/gitlab-com/infra-standards/hackystack/-/tree/main/docs/screenshots/)

#### Infrastructure-as-Code

- [Sandbox Cloud - Project Templates](https://gitlab.com/gitlab-com/infra-standards/project-templates)
- [Sandbox Cloud - Terraform Modules](https://gitlab.com/gitlab-com/infra-standards/terraform-modules)
- [Sandbox Cloud - Ansible Roles](https://gitlab.com/gitlab-com/infra-standards/ansible-roles)
- [IT Infrastructure Realm IaC - Terraform Configuration for gitlabsandbox.cloud](https://ops.gitlab.net/it-infra-realm/environments/gcp/gcp-project-hackystack-mgmt/gitlabsandbox-cloud-app-tf) - Restricted access
- [IT Infrastructure Realm IaC - Ansible Configuration for gitlabsandbox.cloud](https://ops.gitlab.net/it-infra-realm/environments/gcp/gcp-project-hackystack-mgmt/gitlabsandbox-cloud-ansible) - Restricted access

## Overview

The Sandbox Cloud is an automated provisioning platform for creating an AWS account or GCP project that you can use for demo/sandbox/testing purposes and is paid for by GitLab with consolidated invoice billing (no credit card required).

This platform is powered by [HackyStack](https://gitlab.com/gitlab-com/infra-standards/hackystack), an open source project created by [Jeff Martin](https://gitlab.com/jeffersonmartin) and maintained by Jeff Martin and [Dillon Wheeler](https://gitlab.com/dillonwheeler) to automate the access request process using Okta integration, auto-assigning roles and permissions based on your department, and using the cloud provider API for provisioning your AWS account and/or GCP project.

You can learn more in the [HackyStack High-Level Intro](https://docs.google.com/presentation/d/1kbaub1-ztxGCV7wAzhNWXsH5beIu_HAVGSBjr8-0qTw/edit#slide=id.gdfc093c5c0_0_11) presentation.

The Sandbox Cloud is managed by the [IT Engineering](/handbook/security/corporate/) team. Please tag `Jeff Martin` in Slack with any questions.

### How to Get Started

> We are currently at `beta` stability. Please post in `#sandbox-cloud-questions` if you see unexpected behavior.

#### Individual AWS Account or GCP Project

Any team member can use the self service instructions below to provision an AWS account or GCP project for your individual use (sandbox, testing, etc.). You cannot invite other team members to individual accounts for security reasons.

1. Visit [https://gitlabsandbox.cloud](https://gitlabsandbox.cloud) and sign in with your Okta account.
1. Navigate to **Cloud Infrastructure** in the top navigation.
1. Click the purple **Create Individual Account** button.
1. Choose the *cloud provider* and *cloud organization unit* from the dropdown menu. **If no options are present in the dropdown list for the organization unit, your department has not been created in our database yet due to a department name change or addition in the HRIS. Please ask in `#sandbox-cloud-questions` to have it added.**
1. Click the green **Create Account** button.
1. Your account will take 2-5 minutes for the AWS API to finish the provisioning process while the AWS services are activated for your account.
1. Please refresh your browser window every ~60 seconds until you see that your user account has changed from `Provisioning` to `Active`.
1. See the instructions below for [Accessing your AWS Account](#accessing-your-aws-account) or [Accessing your GCP Project](#accessing-your-gcp-project).

> You can sign-in with Okta, however please don't create a Cloud Account unless you intend to provision AWS resources. You can see the [screenshots](https://gitlab.com/gitlab-com/infra-standards/hackystack/-/tree/main/docs/screenshots/) of everything that a user sees.

**Is your current AWS account experience problems?** Please ask for help in `#sandbox-cloud-questions`. If your problems are validated and approved for getting a new AWS account, please use the [New AWS Individual Account Rebuild Request](https://gitlab.com/gitlab-com/gl-security/corp/infra/issue-tracker/-/issues/new?issuable_template=aws_individual_account_rebuild_request) issue template.

#### Automated Shutdown Policy

For cost saving and exposure reduction measure, any GCP compute engine instances in an individual account (ex. `dmurphy-a1b2c3d4`) are powered down every Friday at 23:59 UTC starting 2023-02-03. You will receive a Slack bot notification 24 hours in advance for any instances that are affected with instructions for adding a label to the instance if you need to prevent power off.

If an instance is powered off, you can simply power the instance back on when you're ready to work again.

We are not charged for the hours that compute instances that are not powered on (e2-standard-4/4vCPU/16GB costs $0.13/hr or $96.48/mo). Storage for a powered down instance is cheap and a 20GB persistent disks cost $0.80/month.

This has immediate 28%+ cost savings by not having ephemeral infrastructure running on Saturdays and Sundays. Additional cost savings since we are not charged until you power the instance back on (could be days, weeks, or months later). This also covers abandoned instances that were only used for a few hours for a demo.

We will be working on AWS accounts in a future iteration.

#### Group/Team AWS Account or GCP Project (Non-Production)

Any team member can request a new AWS account or GCP project for a specific project or working group, or for general usage by their department group for shared non-production resources.

**No RED data is allowed in these accounts/projects.** Any RED data must be hosted in production AWS accounts or GCP projects managed by the appropriate Infrastructure Realm administrators (ex. `eng-infra-saas`, `it-infra`, etc.).

Self-service creation and IAM management is not available yet for end users in HackyStack. In the meantime, we use access request style issue templates as our boring solution for security compliance reasons and the HackyStack administrators provision accounts and users using the Admin CLI.

- [Issue Template](https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/new?issuable_template=aws_services_account_create): New AWS Group Workload (Multi-user) Account Request
- [Issue Template](https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/new?issuable_template=aws_services_account_iam_update): Add/Remove IAM Users from AWS Group Workload Account
- [Issue Template](https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/new?issuable_template=gcp_services_project_create): New GCP Group (Multi-user) Project Request ([Provisioner Runbook](https://gitlab.com/gitlab-com/gl-security/corp/infra/runbooks/-/blob/main/gitlab-sandbox-cloud/add-group-project-for-gcp.md))
- [Issue Template](https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/new?issuable_template=gcp_services_project_iam_update): Add/Remove IAM Users from GCP Group Project

#### Production Environments

##### Product Related

For any staging or production(-esque) infrastructure services that are customer facing, contain [Red or Orange data](/handbook/security/standards/data-classification-standard/#data-classification-levels), related to the GitLab product or GitLab.com SaaS, or Engineering sponsored services, please contact the [Reliability Engineering](/handbook/engineering/infrastructure/team/) team for guidance on next steps in the `#infrastructure_lounge` Slack channel.

Most environments are typically created in the [config-mgmt project](https://gitlab.com/gitlab-com/gl-infra/config-mgmt) using the [Create a new environment](https://gitlab.com/gitlab-com/gl-infra/config-mgmt/#creating-a-new-environment) instructions.

You can learn more about GitLab.com SaaS on the [Production Architecture](/handbook/engineering/infrastructure/production/architecture/) handbook page.

Any projects with [yellow or green](/handbook/security/standards/data-classification-standard/#data-classification-levels) data usually are better suited for self management using [Group Projects](#groupteam-aws-account-or-gcp-project-non-production) using [Infrastructure Standards](/handbook/infrastructure-standards) guidelines.

##### Business Related

For any infrastructure services related to business operations and our tech stack, please contact the IT team in `#it_help` for guidance on next steps. Most of our [tech stack](/handbook/business-technology/tech-stack-applications/) are SaaS-based and hosted by the respective vendor.

New SaaS applications should go through the [Procurement Process](/handbook/finance/procurement/) and are managed by the respective department's [system owners](/handbook/business-technology/#cross-department-system-owners).

Self-hosted application infrastructure is determined on a case-by-case basis and is architected in collaboration with CorpSec Infrastructure, [Infrastructure Security](/handbook/security/product-security/infrastructure-security/), [Application Security](/handbook/security/product-security/application-security/), and [3rd Party Risk](/handbook/security/security-assurance/security-risk/third-party-risk-management/). Please tag `@vlad` in an issue for preliminary guidance on new services. If you do not have an issue yet, please create one in the [CorpSec Infrastructure issue tracker](https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues).

#### Accessing your AWS Account

1. Sign in to [https://gitlabsandbox.cloud](https://gitlabsandbox.cloud) and navigate to [Cloud Infrastructure](https://gitlabsandbox.cloud/cloud).
1. If you have not created an account yet, click the [Create Individual Account](https://gitlabsandbox.cloud/cloud/accounts/create) button and use the form to create a new account. If you already have an account, click on the title or the gear icon for the AWS account you want to access.
1. On the `Cloud Account` details page, click the `View IAM Credentials` button in the top right corner to open up a popup modal window.
1. You will see the `AWS Console URL`, `Username`, and `Password` that you can use to sign in to your AWS account. The 12 digit number at the beginning of the URL is your AWS Account ID/Number.
1. Create a new 1Password record in your Private vault to save these credentials.
1. You can click on the link to open the AWS console, or you can close the modal window and click the `Open AWS Web Console` button on the `Cloud Account` details page.
1. Use the provided **URL**, **Username**, and **Password** to sign in to your new AWS account. *Be careful that your browser doesn't autofill saved credentials for a different account.*
1. After you sign in, you should navigate to IAM and add a Virtual MFA device for your user account and add a One-Time Password (OTP) to your 1Password record.
1. Your IAM user account has `AdministratorAccess` to be able to perform any action inside of your AWS account. We do not provide team members access to the `root` user account since we only use this for break glass security incidents or related administrative activity by the [Infrastructure Realm Owners](/handbook/company/infrastructure-standards/#realm-owners).

#### Accessing your GCP Project

1. Sign in to [https://gitlabsandbox.cloud](https://gitlabsandbox.cloud) and navigate to [Cloud Infrastructure](https://gitlabsandbox.cloud/cloud).
1. If you have not created an account yet, click the [Create Individual Account](https://gitlabsandbox.cloud/cloud/accounts/create) button and use the form to create a new account. If you already have an account, click on the title or the gear icon for the GCP project you want to access.
1. On the `Cloud Account` details page, click the `View Credentials` button in the top right corner to open up a popup modal window.
1. You will see the `GCP Console URL` and username. Since GCP uses Google authentication, you simply need to be signed in with your GitLab email address on Google. HackyStack has added the `Owner` GCP IAM role to your email address when the project was created. Your project ID is in the format of `{emailHandle}-{cloudAccountShortId}`. You can choose this project from the dropdown list when accessing a different project in the GCP console.
1. After accessing your project for the first time, you will be prompted to enable the service for each of the GCP services that you want to use in your GCP project. This is expected behavior and will take a few seconds and is a one time step during project initial configuration.

## Domain Names

See the [Domain Names and DNS Records](https://internal.gitlab.com/handbook/it/it-self-service/it-guides/domains-dns/) IT guide internal handbook page for more details.

## Terraform Environments

In the [HackyStack v1.11 (November 2021) release](https://gitlab.com/gitlab-com/infra-standards/hackystack/-/blob/main/changelog/1.11.md), we introduced Terraform environment generation for GCP projects and a lot of underlying automation for GitOps with alpha stability. AWS will be supported in a future iteration.

- [LucidChart Architecture Diagram Edit Source](https://lucid.app/lucidchart/b07c1d5a-17f4-40d9-abf4-5f773b597460/edit)
- [LucidChart Architecture Diagram View Source](https://lucid.app/documents/view/b07c1d5a-17f4-40d9-abf4-5f773b597460) (password `WAUBVZA3bneq4oWx`)

![LucidChart Architecture Diagram](https://lucid.app/publicSegments/view/2030e315-de55-481a-b155-851a8dad027c/image.jpeg)

### How Terraform Environments Work

- New GitLab Omnibus instance for securely hosting GitLab Terraform (GitOps) projects for all team members when they create a Cloud Account with GitLab Sandbox Cloud.
- New [GitLab Project templates](https://gitlab.com/gitlab-com/infra-standards/project-templates) with Terraform scaffolding and [easy-to-use Terraform modules](https://gitlab.com/gitlab-com/infra-standards/terraform-modules). We provide the foundation for you to use any of the [Terraform.io Registry providers or modules](https://registry.terraform.io/) with built-in support for the Google Cloud provider.
- Every GitLab Sandbox Cloud GCP project now has an automatically created GitLab group and a [starter GitLab project with a GitOps Terraform configuration scaffolding](https://gitlab.com/gitlab-com/infra-standards/project-templates/gcp-sandbox-environment-template) with provisioning automation powered by GitLab CI. This allows team members to start deploying resources with Terraform in just a few minutes without dealing with Terraform set up, while complying with security best standards.
- We will have additional project templates released throughout the coming months that provide pre-configured environments that you can provision with just a few clicks. This includes [Omnibus/Runner/Cluster all-in-one environments](https://gitlab.com/gitlab-com/infra-standards/terraform-modules/gcp/gitlab-omnibus-sandbox-tf-module), Kubernetes cluster environment, etc. We also have the foundation to be able to explore how to support [GitLab Environment Toolkit](https://gitlab.com/gitlab-org/gitlab-environment-toolkit).
- You can also easily create additional Terraform projects in the Sandbox Cloud UI for different environments or configurations in the same Cloud Account to allow you to isolate your module/resource configuration based on the use case that you're experimenting with.

### How to Create a Terraform Environment

1. Sign into [https://gitlabsandbox.cloud](https://gitlabsandbox.cloud)
1. Create a Cloud Account in GCP (GCP Project) or navigate to an existing project.
1. Click the **Create Terraform Environment** button and fill out the form:
    1. Choose your Cloud Account from the **Cloud Account** dropdown.
    1. Choose the template you wish to use from the **Environment Template** dropdown. If this is your first time, use the `gcp-sandbox-environment-template-v2-########` template.
    1. Input a name for your environment in the **Environment Name (Alphadash Slug)** text field.
1. After the Environment is created, click the **View Terraform Configuration** button. This is hosted on a new GitLab instance at [https://gitops.gitlabsandbox.cloud](https://gitops.gitlabsandbox.cloud). Your GitLab instance credentials can be found in the View GitOps Credentials button modal.

### How to Use Terraform Environments

1. Sign into [https://gitops.gitlabsandbox.cloud](https://gitops.gitlabsandbox.cloud) using your generated credentials on [https://gitlabsandbox.cloud](https://gitlabsandbox.cloud). Keep in mind that this is `{firstInitial}{lastName}-{hash}` and not your normal GitLab username.
1. Navigate to the project for the Terraform environment that you just created. You can quickly access the project from the link on the Cloud Account page on [https://gitlabsandbox.cloud](https://gitlabsandbox.cloud).
1. On your local computer navigate to your `~/.ssh` folder and generate an SSH key

    ```shell
    ssh-keygen -t rsa -b 4096 -C <name_of_project>
     ```

1. Navigate to terraform/main.tf on this project and copy and paste your public key. See the example below

    ```shell
    #     -------------------------------------------------------------------------    ----
    # Add your Terraform modules and/or resources below this line
    #     -----------------------------------------------------------------------------

    locals {
      ssh_key               = "<RSA public key here>"
      normalized_env_prefix = "sr-${var.env_prefix}"
     tags                  = ["sr-firewall-rule", "${local.normalized_env_prefix}-firewall-rule"]
    }
    ```

1. Run a new CI pipeline. After the `Plan` job completes, trigger the `Deploy` job. (Notice how you haven't had to do any configuration).
1. Watch the `terraform apply` outputs as your new environment is spun up with a sample Ubuntu virtual machine for testing with. You can add additional Terraform resources as you see fit (see below).
1. Navigate to the GCP console using the link on [https://gitlabsandbox.cloud](https://gitlabsandbox.cloud) to view the deployed VM. Feel free to connect to the VM via SSH using the `gcloud` command or Cloud Shell.
1. Run the GitLab CI job for `Destroy` to clean up your resources.
1. You can update the `terraform/main.tf` file in the Git repository to add more Terraform resources or modules.
1. Simply run the `Deploy` CI pipeline job to deploy your resources.

## Delete an AWS account or GCP project

Currently, deleting an AWS account or GCP project must be performed manually by IT Ops. This is done during offboarding for operational consistency. However, outside of offboarding, you must make a best effort to delete all resources within the account yourself. There may be a nominal monthly cost of a few dollars a month to keep the account in existence. At this time, this cost is deemed acceptable.

## Background Context and Problem Statement

**The oversimplified user story is "I need to spin up VM(s) or cluster(s) in GCP or AWS to try something (anything, may not be GitLab product specific), what's the company infrastructure standards for doing that?"**

The goal is to create a frictionless approach for technical team members that includes the tagging needed for cost allocation, best practice security configurations, and streamline the provisioning of infrastructure without needing to wait several days or weeks for an access request to be approved and provisioned.

This also reduces the burden on the accounting team that processes expense reports for team members each month. Each team member's account is now part of consolidated billing.

### History

Over the years, our non-production infrastructure resources have grown organically without accountability, cost controls, naming conventions, provisioning automation, or security best practices. This includes resources created in the GCP gitlab-internal project, AWS gitlab-np account, and DigitalOcean using [dev-resources](https://gitlab.com/gitlab-com/dev-resources).

### Recent iterations

[Epic 257](https://gitlab.com/groups/gitlab-com/gl-infra/-/epics/257) was created to iterate on our processes. In FY21-Q3, we created company-wide [infrastructure standards](/handbook/company/infrastructure-standards/) which solved the "naming things is hard" problem with [labels, tags, and naming conventions](/handbook/company/infrastructure-standards/labels-tags/) in our AWS and GCP organization accounts. The infrastructure standards define [realms](/handbook/company/infrastructure-standards/#gitlab-infrastructure-realms) to create separate security boundary namespaces for different use cases. For our sandbox use cases, we've created a [sandbox realm](/handbook/company/infrastructure-standards/realms/sandbox) for individual users and [department realms](/handbook/company/infrastructure-standards/labels-tags/#department-realms) for shared collaboration projects, notably the Engineering Development realm which allows each of the [department groups](/handbook/company/infrastructure-standards/labels-tags/#gitlab-department-group-gl_dept_group) (functional teams) to have a shared AWS account or GCP project for creating infrastructure.

### Current iteration

Jeff Martin developed the first release of [HackyStack](https://gitlab.com/hackystack/hackystack-portal) that powers the GitLab Sandbox Cloud. We developed the tooling in-house since the existing industry tools only solve 1-3 of the [Technical Problems We're Solving](#technical-problems-that-hackystack-is-solving) and we wanted to automate the workflow end-to-end.

We are developing HackyStack as an open source project to allow other infrastructure or IT team to simplify their processes for provisioning sandbox accounts. HackyStack is not designed for individual use (yet). As we evolve, we'll be able to advocate HackyStack to partners and customers for deploying demo, testing, or training infrastructure without long manual provisioning documentation or burdening internal infrastructure team members.

### Business and financial impact

- All infrastructure resources are associated with a user and department for cost allocation
- Reduced or eliminated expense reports with AWS invoices for individual usage (consolidated billing)
- Budgets and cost controls with Slack notifications to reduce abandoned test environment costs
- Automated access request and provisioning process for IT Ops
- Standardized organizational hierarchy and naming schema for AWS accounts and GCP projects
- Automated security best practice controls and least privilege rights

### Technical problems that HackyStack is solving

1. **Self-Service Provisioning:** Creating an "easy button" for technical users at a company to get access to an AWS account or GCP project with zero manual provisioning by the IT team.
1. **Cloud Agnostic:** Providing a universal interface that is cloud provider agnostic so you don't need to create different architecture and provisioning processes for AWS, GCP, etc.
1. **Hierarchy:** Defining a standard reference architecture for organizational unit hierarchy.
1. **Auto Labeling/Tagging:** Apply labels and tags to resource for cost management, infrastructure-as-code, and security policy compliance without users needing to remember to add tags.
1. **Billing Costs per User:** Unified billing metrics across all cloud providers on a per-user, per-account/project, and per-group/team level.
1. **Automated Access Requests:** Supplementing single sign-on (SSO) providers with pre-auth automated group membership provisioning with seamless manager approval(s)
1. **Automated Access Approval Provisioning:** Supplementing single sign-on (SSO) providers with post-auth provisioning of infrastructure resources in one or more provider APIs.
1. **GitOps Infrastructure-as-Code Provisioning:** Automatically creating Git projects with Terraform infrastructure-as-code scaffolding with security best practices that use CI/CD automation.
1. **Standardized Infrastructure-as-Code Library:** Linking to a curated library of Terraform modules for easily deploying common infrastructure elements that follow company security best practices.
1. **Daily Workflow Cost Controls:** Slack bots and notifications for users to easily provision or destroy infrastructure and threshold cost/usage report notifications.

### Tech Stack

- [Laravel](https://laravel.com/docs/8.x) - web portal, CLI application, API provisioning handler
- MySQL v5.7 - database
- [Terraform v0.13+](https://www.terraform.io/) - Infrastructure as Code configuration
- [AWS API](https://github.com/aws/aws-sdk-php)
- [Google Cloud](https://github.com/googleapis/google-api-php-client)
- [GitLab API](https://github.com/GitLabPHP/Client) - For Git SCM of Terraform configurations
- [GitLab CI](https://docs.gitlab.com/ee/ci/) - For automated Terraform deployments

This project was built using Laravel instead of other viable languages due to Jeff's prior experience and proficiency with Laravel to achieve the most efficient time to business value. This builds on the success of the [GitLab Demo Systems](/handbook/customer-success/demo-systems/) that is powered by the [demosys-portal](https://gitlab.com/gitlab-com/customer-success/demo-systems/infrastructure/demosys-portal).

For those who are not familiar with Laravel, it is the PHP equivalent of [Ruby on Rails](https://trends.google.com/trends/explore?date=all&q=ruby%20on%20rails,laravel) and [Django](https://trends.google.com/trends/explore?date=all&q=Django,laravel) and has seen [tremendous community popularity](https://packagist.org/packages/laravel/framework/stats) in recent years since PHP has made revolutionary improvements in recent years with PHP 5.x and PHP 7.x. This project also allows us to dogfood GitLab CI/CD capabilities for PHP projects.

### Roadmap

See the issue trackers for the latest up-to-date information.

- [HackyStack issue tracking](https://gitlab.com/gitlab-com/infra-standards/hackystack/-/issues) (open source code feature development)
- [CorpSec] Infrastructure issue tracking](https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues) (strategic or GitLab-specific issues)

#### Current Projects

1. [Released in v0.3](https://gitlab.com/gitlab-com/infra-standards/hackystack/-/blob/main/changelog/0.3.0.md)Add GCP project provisioning
1. [Released in v1.11](https://gitlab.com/gitlab-com/infra-standards/hackystack/-/blob/main/changelog/1.11.md) Create GitOps project per Cloud Account
1. [Released in v1.11](https://gitlab.com/gitlab-com/infra-standards/hackystack/-/blob/main/changelog/1.11.md) Add Terraform module library for users
1. [it-infra#86 Project Playground](https://gitlab.com/gitlab-com/gl-security/corp/infra/issue-tracker/-/issues/86): Deprecate shared AWS accounts and GCP projects with legacy configurations including `dev-resources` and `support-resources`.
1. [Released in v0.2](https://gitlab.com/gitlab-com/infra-standards/hackystack/-/blob/main/changelog/0.2.0.md) Create new group accounts with Admin CLI provisioning
1. Add self-service provisioning and member management for group accounts
1. Add automated access request audit reporting with IT ops issue tracker
1. Add cost and usage reports for AWS and GCP
1. Add Slack bots for easy infrastructure cost reporting and destroy button
1. Implement and automate the GitLab Environment Toolkit (GET)

#### Future Planning Themes

**Phase 4** - Automated provisioning of AWS accounts and GCP projects for each user and team with streamlined/automated access requests (aka "Automate the manufacturing of everyone's green LEGO board"). This is being achieved with the HackyStack open source project that Jeff is building.

**Phase 4.5** - Migrate everyone's resources in shared accounts into respective isolated accounts and apply labels/tags for cost management and reporting. See [it-infra#86 Project Playground](https://gitlab.com/gitlab-com/gl-security/corp/infra/issue-tracker/-/issues/86) for details.

**Phase 5** - Curate centralized library of Terraform modules, Ansible roles, Packer images, Docker images, and other scripts that have best practice security standards are used for deploying common infrastructure (aka "Provide everyone a box of LEGO bricks and the tools to deploy them"). Integrate GitLab Environment Toolkit for deploying GitLab in decentralized test environments (user sandboxes, community member environments, etc). This will be open source with the community so partners and customer POCs can take advantage of what we have. This will solve Sid's request to ensuring we're all on the same page and using the same library for the millions of GitLab users.

**Phase 6** - Create "easy button" for deploying the library of infrastructure (aka the LEGO kits) into a topology builder.

**Product and Revenue Enablement** - Since a lot of provisioning functionality uses GitLab CI/CD and GitOps, we are dogfooding the GitLab product and allows users to manage their infrastructure-as-code in a GitLab repository and extend capabilities with other GitLab features as they see fit.

**HackyStack and GitLab Premium Features** - We will eventually add premium features to HackyStack that would require features included with a GitLab paid subscription.

### How to Contribute

Please post your ideas on Slack or in the issue tracker so we can discuss the best ways to implement them.

The GitLab Sandbox Cloud is a part-time side project for Jeff Martin, so we are not able to commit to firm timelines for feature development. We will try to resolve bugs promptly, however please comment in an issue and tag `@jeffersonmartin` if there is a feature or capability that needs to be prioritized.

Please direct any questions about the Sandbox Cloud or HackyStack to Jeff Martin or Dave Smith.
