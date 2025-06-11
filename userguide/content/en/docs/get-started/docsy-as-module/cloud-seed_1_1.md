---

title: ⛅🌱 Cloud Seed
---







## ⛅🌱 Cloud Seed

GitLab is the one DevOps platform. Teams use GitLab (SaaS or self-managed) for development, planning, collaboration and automation. However, digital transformation is incomplete without cloud adoption.

Thus, Cloud Seed — a collaboration with Google Cloud — makes it trivial to consume cloud services from GitLab.

### Capabilities

#### Generate Google Cloud Service Accounts

- Service accounts are authentication credentials that can be generated from the GitLab web interface
- Used for a wide range of integrations and automation with Google Cloud services

#### Deploy to Google Cloud Run

- Cloud Run is a fully managed deployment platform for containerized applications
- Setup automated deployments to Cloud Run via the GitLab web interface including support for _Preview Environments_
- Every Git commit, branch and tag is automatically deployed to the appropriate Cloud Run service environment

#### Provision Google Cloud SQL databases

- Provision popular database instances easily from the GitLab web interface
- Support all major versions of PostgreSQL, MySQL and SQL Service
- Generate instances, databases and users to be used with deployment and test automations
- Environment (i.e. Git ref) aware database provisioning

### Usecases

- Cloud native development with automated deployments to Cloud Run
- Cloud migration and app modernization with Cloud SQL relational databases

### Positive business outcomes (grouped by persona)

List of [user personas](/handbook/product/personas/) with specific benefits they actualize:

- `Compliance Manager`, `Security Analyst`, `Security Operations Engineer`
  - Secure, standardized deployment pipelines across the organization
  - GitLab-Google Cloud driven authorization and permission model
- `Product Manager`, `Product Designer`
  - Preview environments to validate feature branches
- `Development Team Lead`, `Software Developer`, `Platform Engineer`, `Software Engineer in Test`
  - Continuous deployment for all Git commits, branches and environments
  - Easy deployment automation and database provisioning
  - Preview environments to validate feature branches
- `Systems Administrator`, `Infrastructure Operator`
  - Secure, standardized deployment pipelines across the organization
  - Principled GitOps with application source and infrastructure state
- `Application Ops`, `Release Manager`
  - Standardized pipelines for release automation
  - Support for feature, test and production release environments
- `Application Development Director`
  - Increase Operational Efficiencies
  - Deliver Better Products Faster
  - Reduce Security and Compliance Risk

### Jobs to be Done

- Deploy web applications
  - ☑️ Authentication and authorization
  - ☑️ Deployment credential generation
  - ☑️ Provisioning and enablement of cloud services
  - ☑️ Deployment pipelines
  - ☑️ Preview environments
- Provision cloud data stores
  - ☑️ Authentication and authorization
  - ☑️ Database instance generation
  - ☑️ Database and user setup
  - ⏳ Networking configuration

### Open source

Cloud Seed is an open-source program led by GitLab Incubation Engineering.

Sign up for the invite-only [Trusted Testers platform](https://docs.google.com/forms/d/e/1FAIpQLSeJPtFE8Vpqs_YTAKkFK42p5mO9zIYA2jr_PiP2h32cs8R39Q/viewform) and try out Cloud Seed before anyone else.

### Everyone can contribute

There are several ways one may contribute to Cloud Seed. These are listed below:

- Become a Cloud Seed [Trusted Tester](https://docs.google.com/forms/d/e/1FAIpQLSeJPtFE8Vpqs_YTAKkFK42p5mO9zIYA2jr_PiP2h32cs8R39Q/viewform) in GitLab and [share feedback](https://gitlab.com/gitlab-org/incubation-engineering/five-minute-production/feedback/-/issues/new?template=general_feedback)
- If you are familiar with Ruby on Rails and/or Vue.js, consider [contributing to GitLab](https://docs.gitlab.com/ee/development/contributing/) as a developer. Much of Cloud Seed is an internal module within the GitLab code base
- If your familiarity lies with GitLab pipelines, consider contributing to the [Cloud Seed Library](https://gitlab.com/gitlab-org/incubation-engineering/five-minute-production/library) project
- If your expertize is in [Google Cloud APIs](https://cloud.google.com/apis) and Google Cloud technologies, reach out to us, we need you!

### Links

- [Cloud Seed](https://hello.cloudseed.app) landing page
- [@OpenCloudSeed](https://twitter.com/OpenCloudSeed) on Twitter
- Cloud Seed [documentation](https://docs.gitlab.com/ee/cloud_seed/index.html)
- Sign up for the invite-only [Trusted Testers platform](https://docs.google.com/forms/d/e/1FAIpQLSeJPtFE8Vpqs_YTAKkFK42p5mO9zIYA2jr_PiP2h32cs8R39Q/viewform)
- [Submit feedback](https://gitlab.com/gitlab-org/incubation-engineering/five-minute-production/feedback/-/issues/new?template=general_feedback)

### Demos

#### Ridiculously simple deployments

<figure class="video_container">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/dy9zX0G4rJg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</figure>

#### Preview Environments

<figure class="video_container">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/zDMGCyAgCPY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</figure>

#### Databases Proof-of-Concept

<figure class="video_container">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/_CldvVs4vmc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</figure>
