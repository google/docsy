---
title: "From Dedicated to Cells: A Technical Analysis"
---

## Introduction

This document is intended to be a high-level summary describing how the existing GitLab Dedicated
architecture could be used as a foundation for deployment and operating large numbers of GitLab Cell instances.

Additionally, it explains certain decisions in the Dedicated architecture, and why these are beneficial
to both GitLab Dedicated and GitLab Cells, and how they differ from other approaches, such as GitLab.com's IaC, or GET.

Note to readers: Please keep in mind that this is not a critique of GitLab.com's approach, nor GET's.
It is an explanation of how and why Dedicated differs from these other approaches, and offers some insight into
how different requirements led to different design choices.

## GitLab Dedicated is an Environment Automation Technology

In the context of this document, GitLab Dedicated can primarily be thought of as a technology to automate the configuration,
deployment, upgrading, monitoring, and maintenance of a large number of mostly homogeneous GitLab application environments.

### How does Dedicated differ from GitLab.com?

GitLab.com is the largest single GitLab deployment, and in all likelihood, the most complex. GitLab.com is provisioned
and configured across multiple projects, including chef-repo for Chef Cookbooks for VM configuration, config-mgmt for
Terraform configuration and the k8s-workloads group for Kubernetes configuration including Helm, Kubernetes manifests and Tanka.

#### Heterogeneous vs Homogeneous Environments

Let's discuss the distinction between homogeneous and heterogeneous GitLab environments.

##### GitLab.com: Many Heterogeneous Environments

At present, there are 64 environments managed in the config-mgmt project. In chef-repo, there are 22 Chef environments and
569 roles (some of these roles are likely unused). The GitLab.com helm charts are homogeneous, using the same Helm templates.
For Terraform and Chef, each of these environments is unique, although they share many submodules and some effort is made to
ensure consistency. However, each environment can differ from the others. There is no way to ensure uniformity, and over time
these environments have, for a variety of reasons, drifted away from uniformity.

![Config MGMT](/images/engineering/infrastructure/team/gitlab-dedicated/architecture/envs-in-gitlab-com-config-mgmt.png)

*Similar but different: environments in GitLab.com's config-mgmt project*

Since GitLab.com was originally built for a small number of environments (production and staging), it was not designed to be
scaled up to a large number of homogeneous environments.

Another way of thinking about this is that the GitLab.com Staging and Production Terraform environments, `gstg` and `grpd`,
are not replicas of one another, or the same configuration with different input values (for example to allow Staging to a
smaller/cheaper copy of Production). They are two distinctive environments, built in parallel to one another.

<p float="middle">
  <img alt="GKE Zonal Configuration for Staging" src="/images/engineering/infrastructure/team/gitlab-dedicated/architecture/gke-zonal-conf-gstg.png" width="49%" />
  <img alt="GKE Zonal Configuration for Production" src="/images/engineering/infrastructure/team/gitlab-dedicated/architecture/gke-zonal-conf-gprd.png" width="49%" />
</p>

*Same Same, but Different: the GKE Zonal Configuration for Staging and Production. Similar, but not the same.*

GitLab.com evolved in this way for many reasons, and its approach allows for maximum flexibility. However, creating new environments
takes weeks or months of operator time. Dedicated takes minutes of operator time and hours of wall time to create new environments.
Additionally, from an operational and day-two point of view, the heterogeneous nature of these environments makes applying batch
operations across many environments difficult, resulting in manual processes.

The non-heterogeneous nature of GitLab.com environments is further complicated by the multiple projects in which changes need to
be coordinated, but more on this later.

##### Dedicated: Homogenous, repeatable, functional environments

Dedicated enforces homogeneity between environments by using a single IaC configuration (be it Terraform, Ansible, Kubernetes Manifests, etc)
for all environments. *The only differences that can exist between environments is controlled by the input variables to the environment*.
We call these input variables the **tenant model**. Since all environments use the same IaC, it is not possible to add or remove cloud resources,
ansible configuration, terraform modules etc without those differences being expressed in the tenant model.

Having homogeneous environments provides greater consistency. This is especially important when the need to migrate many environments en-masse
needs to take place, as there are far fewer possible combinations of configuration, allowing automation of changes.

#### IaC Configuration Tooling

##### GitLab.com: Many Different Configuration Management Tools

For GitLab.com, environment changes need to be coordinated and applied across a variety of different projects. Usually, manual
coordination needs to be carried out to ensure that change is done in the correct order and sequencing. For example, Terraform changes
may need to be applied, followed by chef-repo changes. If differences happen to occur in the manual coordination of these changes,
it may lead to unexpected outcomes, ultimately leading to slower delivery, outages or even data-loss.

![Many congif mngmt tools](/images/engineering/infrastructure/team/gitlab-dedicated/architecture/many-config-mngmt-tools.png)

*GitLab.com: Many Different Configuration Management Tools*

##### Dedicated: Single Entrypoint for All Environment Changes

Dedicated seeks to simplify this model by providing a single project, Instrumentor, which encapsulates all atomic changes to
the tenant or cell environment. The problem of coordinating changes across multiple projects is solved by integrating all changes into a single project.

![Dedicated single poe for all envs](/images/engineering/infrastructure/team/gitlab-dedicated/architecture/dedicated-single-poe-for-all-envs.png)

*Dedicated: Single Entrypoint for All Environment Changes*

##### Dedicated: an Atomic Provisioning Process Improves Determinism, Testability, and Repeatability

Freed from having to coordinate roll-outs across combinations of environments across different configuration projects, Dedicated allows
environments to be understood in a far more deterministic manner. This in turn leads to greatly improved testability, repeatability and,
when running many dozens or hundreds of environments, ultimately, better availability and resilience.

Compare a complicated database change for GitLab.com to a similar change in Dedicated.
To make a change to a GitLab.com environment, one needs to:

1. Make Terraform module change for Staging
2. Make chef-repo change for Staging
3. Merge and apply Terraform module change for Staging
4. Merge and apply chef-repo change for Staging
5. Test change to ensure it does what it's expected to do
6. Create a similar, but not identical Terraform module change for Production
7. Merge and apply Terraform module change for Production
8. Merge and apply Chef-Repo change for Production

This example only describes two environments, but the more environments (eg, Pre-Prod) the more work to roll-out the change.
What's more: there's no guarantee that the environments are identical, or that some feature of one environment may change the behaviour
in that environment. The environments are not deterministic and this leads to additional risk during change rollouts. This additional
risk is then gated with a Change Management process in the form of CR's for more complicated changes. As is usual with manual steps,
this process aims to reduce a chance of configuration drift but it also slows down the roll-out.

For Dedicated, the workflow is as follows:

1. Make a change in Instrumentor, testing the change in your sandbox environment using a review app on your merge-request branch.
2. Have change approved and merged to Instrumentor main branch.
3. Instrumentor will automatically release a new version of the Instrumentor package.
4. Starting with staging, progressively update all tenant models to the new version, and roll out across the fleet until all tenants/cells are running the latest version. Halt the rollout if problems are detected.

What's important is that for Dedicated, every change is encapsulated in a single lineage of packaged releases on a single artefact - Instrumentor.

#### Summary

|                                                                                                                                                           | GitLab.com          | GitLab Dedicated            |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------|-----------------------------|
| **IaC Configurations**<br>Does each environment share a single configuration or have its own unique TF module?                                           | Many                | One                         |
| **Provisioning/Configuration Repositories**<br>To make a wide-ranging Infrastructure change, how many projects does the change need to be spread across? | Many                | One                         |
| **Flexibility in Configuration**<br>How flexible is the configuration, for example, for single environment deltas?                                       | Extremely High      | Limited (Tenant Model only) |
| **Day Two Operation Automation**<br>The likelihood of day-two operations being automated.                                                                | Sometimes Automated | Only Automated              |

### How does Dedicated differ from GET?

GET is a collection of tools to enable the deployment and operation of a base production GitLab environment at scale based on our
Reference Architectures that can be built upon accordingly.

Dedicated uses GET under the hood but GET is primarily intended to be used for single instances of GitLab.

Additionally, GET is intended to be a general purpose GitLab environment suitable for general-purpose use cases. Importantly,
GET does not (nor, should not) handle every possible use-case, such as many of the compliance, security, regulatory and advanced
networking features provided by Dedicated.

GET rightly focuses on customers looking to maintain a multi-host and/or Kubernetes based GitLab install, running within a cloud environment,
and adhering to a GitLab Reference Architecture. It does not focus on scaling this environment up to dozens or hundreds of instances,
and adding the features to support this would add a great deal of complexity that would be a barrier for adoption for all GET users besides Dedicated.

## The Components of GitLab Dedicated

This section describes the components of GitLab Dedicated, focusing on why these components were included in the design.

![GitLab Dedicated components](/images/engineering/infrastructure/team/gitlab-dedicated/architecture/gitlab-dedicated-components.png)

*GitLab Dedicated Components*

### Switchboard

Switchboard is the user-interface for GitLab Dedicated customers, allowing customers to provision and configure their GitLab instances
through a web user interface. This is analogous to Google Console for GCP access, Elastic Cloud for Elastic provisioning, etc.
Switchboard has always been focused on being the user-interface for GitLab Dedicated tenant operators; be that the SRE supporting the
customer instance, or the customer operator. It is a product feature that simplifies customer interaction with GitLab Dedicated.

The design of Switchboard has only ever focused on the case of Dedicated, and in the opinion of the Dedicated team, allowing for customer
interaction with their Dedicated instance. Cells was not in scope of GitLab Dedicated when Switchboard was designed, and Switchboard
is only designed to make onboarding, interacting and information gathering simpler for the GitLab Dedicated customer.

*Using Switchboard for Cells would be a poor choice*. Cells should use DevOps workflows and CI/CD pipelines to kickoff Instrumentor
provisioner jobs in the Amp control-plane, just as early iterations of Dedicated did before Switchboard was developed. It was a design
choice from the start to keep tenant models structured in such a way that an interface would be the same whether one would use
Switchboard or another type of interface.

### Amp

Amp is the execution environment in which provisioning jobs are run. This is not required for the execution of provisioning jobs -
in fact, for Dedicated Review apps, Instrumentor runs directly within the GitLab CI pipeline and operates on the developers sandbox
account without the need for Amp. Additionally, Instrumentor is able to be run locally on the environment automation engineers laptop.
This can greatly reduce development time when working on a new feature.

However, the benefit of Amp is that, for Production environments, it is a secure, trusted and highly controlled environment.
Dedicated discourages any long-lived security keys for authentication, instead using trust-relationships, OIDC, identity federation,
and other modern methods for authentication, and Amp provides the control-plane in which this can be done securely.

For security reasons, it is recommended that Cells continue to deploy jobs in the Amp environment. These jobs may however be invoked directly
from CI/CD pipeline jobs via a GitLab Kubernetes Runner transparently. The security, permission and other contexts are then assured at the
Amp level, instead of built within the higher level interfaces.

### Tenant Model Schema

Since all input into the provisioning process is done through the tenant model, the model effectively becomes the interface
between the user and/or operator and the provisioner, Instrumentor.

To ensure that all input is consistent and within defined bounds, the tenant model schema validates all input into the system.
This prevents unexpected inputs which could potentially lead to unexpected outcomes or even potentially security breaches or data losses.

Cells: Cells would use its own tenant model schema to define an appropriate schema for Cell instances.

### Instrumentor

Instrumentor is the provisioning and configuration tool. The external abstraction into Instrumentor is the tenant model schema, and allows
for different tools to be used, and even replaced over time without affecting the interface or upstream clients. At present,
the Instrumentor uses Terraform, Ansible, Helm, Kubernetes Manifests.

Cells would either use the Dedicated GCP Instrumentor or use a fork of it. This would require further analysis before a decision is made.

### Tenant Control: tenctl

`tenctl`, or tenant controller, is a golang binary used extensively during the provisioning process. It also supports execution locally,
for development-time usage, and in GitLab CI/CD.

`tenctl` helps bridge the gaps between the various tools (such as Terraform, Ansible) and tenant data. This includes:

1. Handling configuration of underlying tools, such as Cloud Provider configuration files (`.aws_credentials.ini`, `AWS_REGION` environment variables, etc)
2. Handling authentication and authorization
3. A single method for templating the configuration files required by GET, Ansible, Terraform, etc (using Jsonnet, which can generate YAML, ini, JSON and all other required command types)
    1. In similar projects, this templating is normally done using a wide variety of tools (such as jq, Go templates, envsubst, string concatenation in bash scripts etc)
    2. Having a single tool allows much more consistent templating, plus testing harnesses, etc
4. Tenant model schema validation using JSON schema.
5. Tenant model migration tools to ensure that tenant models can be upgraded automatically without manual intervention
6. Cloud provider orchestration not covered by Ansible, Terraform, etc, for example for checking the status of backups.

In many provisioning tools, the functionality that tenctl provides is typically written as a set of bash scripts. These scripts are notoriously unstructured,
unscalable, difficult to test and verify. This leads to slow-downs in development and even bugs or data loss during provisioning or day-two operations.

Writing this tool in Go provides benefits of a single tool which operates identically in all environments (no differences between shelling out to command line
tools in MacOS and different versions of linux) and is fully tested. Additionally, Go encourages better structure and ensures the structure can scale
as the complexity of the project increases over time.

*The alternative to tenctl is something we see too often on many Infrastructure projects today*: dozens of unmaintained – and unmaintainable –
untested bash scripts, each with its own input, arguments, subset of environments in which it can run, each with it's own way of converting input
data into configuration data. This leads to complexity, inconsistency, cognitive load and ultimately lower velocity and even outages due to unexpected
behaviours (aka: "it worked on my machine").

To illustrate this with an analogy: it's possible to interact with a Kubernetes cluster using only bash and curl. However, using `kubectl` allows for
a much more consistent and scalable client. tenctl is similar to `kubectl`, but focused on GitLab Tenant instances instead of Kubernetes instances.

Cells benefit greatly from using a tool like tenctl. By ensuring that there is a single way to template configuration across different tools,
we avoid the drift that exists currently in GitLab.com environments.

## How Dedicated Could Be Used to Support Cells

### Design Considerations

Many of the same design considerations that apply for GitLab Dedicated apply equally well to the deployment of Cells.

1. A large number of homogeneous environments will be required
2. Each potential difference between environments will result in the number of combinations of those differences growing exponentially
3. Defining the environments as multiple independent modules would quickly become unsustainable to maintain
4. The larger the number of potential combinations:
    1. The more difficult environmental automation of day-two operations becomes
    2. The less testable a change becomes
5. Having homogeneous GitLab environments with a single atomic provisioner allows changes to be rolled out gradually across a large number of environments. This is not dissimilar to how a replica set gradually rolls out new pods in Kubernetes, replacing older versions safely, until all old pods have been replaced.

### Deploying Cells Using Environment Automation

Cells could use the same deployment model as Environment Automation used before Switchboard had been developed. This is represented by the switchboard_la project.

![Cells deployments via env automation](/images/engineering/infrastructure/team/gitlab-dedicated/architecture/cells-deployments-via-environment-automation.png)

*Deploying Cells using Environment Automation*

In this deployment model, we forgo a graphical user interface, and provide a devops model. This approach is much more in keeping with the way SREs work.
A project is maintained on a GitLab instance, and the tenant models are kept as files in the git repository.

All change is controlled via merge requests with the standard GitLab approval approaches.

When changes are merged to the main branch, they kick off CI pipelines, which in turn kick off jobs in the Amp environment. SREs can monitor the progress
of changes using standard GitLab tooling, such as CI traces, etc.
