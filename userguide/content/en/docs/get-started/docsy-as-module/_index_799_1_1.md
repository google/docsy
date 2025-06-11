---
title: "Cells"

description: "This is the handbook page for the Cells project. Cells is one of the top priorities for FY2025, with the goal of providing additional scalability for GitLab.com. This handbook page contains the project information such as the project plan, roadmap, workstreams, DRIs, stakeholders, and communication channels. It also has links to important documentation such as the Cells design blueprints."
---

## Intro

Cells is a new architecture for our software as a service platform. This architecture is horizontally scalable, resilient, and provides a more consistent user experience. It may also provide additional features in the future, such as data residency control (regions) and federated features.

For more information about the goals of Cells, see [goals](https://docs.gitlab.com/ee/architecture/blueprints/cells/goals.html).

## Requirements and Architecture

Cells overall architecture [blueprint](https://docs.gitlab.com/ee/architecture/blueprints/cells/).

## Roadmap, Stages, Phases, and DRIs

### Roadmap

<table>
<tr>
<td>

[Cells 1.0](https://docs.gitlab.com/ee/architecture/blueprints/cells/iterations/cells-1.0.html)

</td>
<td>

[Cells 1.5](https://docs.gitlab.com/ee/architecture/blueprints/cells/iterations/cells-1.5.html)

</td>
<td>

[Cells 2.0](https://docs.gitlab.com/ee/architecture/blueprints/cells/iterations/cells-2.0.html)

</td>
</tr>
<tr>
<td>

- For internal customers only
- Organizations are private
- Users cannot interact with other Organizations (including GitLab Org)
- Groups and projects are private in the Organization
- For more details, see [Organizations on Cells 1.0](https://docs.gitlab.com/ee/architecture/blueprints/organization/index.html#organizations-on-cells-10)

</td>
<td>

- For existing/new customers of GitLab.com
- Organizations are private
- Existing users can interact with private Organizations on Secondary Cells
- Groups and projects are private in the Organization
- For more details, see [Organizations on Cells 1.5](https://docs.gitlab.com/ee/architecture/blueprints/organization/index.html#organizations-on-cells-15)

</td>
<td>

- Organizations are public or private
- Users can interact with other Organizations
- Groups and projects are private or public in the Organization
- For more details, see [Organizations on Cells 2.0](https://docs.gitlab.com/ee/architecture/blueprints/organization/index.html#organizations-on-cells-20)

</td>
</tr>
</table>

### DRIs and Stakeholders

| Stakeholder | Role | Responsibility |
| ----------  | ---  | -------------- |
| [Sabrina Farmer](https://gitlab.com/sabrinafarmer) | CTO | Executive Sponsor |
| [Gerardo Lopez-Fernandez](https://gitlab.com/glopezfernandez) | Engineering Fellow | Tenant Scale Engineering DRI |
| [Mark Wood](https://gitlab.com/mjwood) | Acting Group Product Manager | Tenant Scale Product DRI |
| [Darby Frey](https://gitlab.com/darbyfrey) | Staff Fullstack Engineer, Expansion | Sec and Monetization DRI |
| [Kerri Miller](https://gitlab.com/kerrizor) | Staff Backend Engineer, Create | Core Development DRI |

## Cells 1.0

All Cells 1.0 work is tracked under the [Cells 1.0 Epic](https://gitlab.com/groups/gitlab-org/-/epics/12383).
The Epic is split into multiple phases where each one represents a iteration to achieve Cells 1.0.
Some of these phases have dependencies over one another, and some can be run in parallel.

### Phase 1: PreQA Cell

Exit Criteria:

- New GCP organizations created.
- Break glass procedure.
- Ring definition exists.
- Cell provisioned using dedicated stack.
- Able to do configuration changes to Cell.
- Cell available at `xxx.cells.gitlab.com`.
- Cell doesn't handle data uniqueness.

![phase-1](/images/cells/phase-1.png)

[source](https://excalidraw.com/#json=DuwGFqR2LcS6k2TZlYu9u,LKDzUCdkiHLO11c3rgFVeQ)

Unblocks:

- [Phase 3](#phase-3-gitlabcom-https-session-routing): To provision runway deployment for Topology Service
- Delivery team: Start testing deploys on rings

Dependencies:

- None

Details:

- [Epic](https://gitlab.com/groups/gitlab-com/gl-infra/-/epics/1293>)
- [DAG](https://cells-architecture-overview-gitlab-org-tenant-sc-ff1c641f886923.gitlab.io/phase-1-8/#groups_Phase_1)

### Phase 2: GitLab.com HTTPS Passthrough Proxy

Exit Criteria:

- 100% of API traffic goes through router using passthrough proxy rule.
- 100% of Web traffic goes through router using passthrough proxy rule.
- 100% of Git HTTPS traffic goes through router using passthrough proxy rule.
- Requests meet [latency target](https://docs.gitlab.com/ee/architecture/blueprints/cells/http_routing_service.html#low-latency)
- registry.gitlab.com not proxied.

![phase-2](/images/cells/phase-2.png)

[source](https://excalidraw.com/#json=ymWufV5324javtKSrYiZW,5S-bkgtFS_yEIRxmVZ1rag)

Unblocks:

- [Phase 3](#phase-3-gitlabcom-https-session-routing): Router to be configured with additional rules in phase 3.

Dependencies:

- None

Details:

- [Epic](https://gitlab.com/groups/gitlab-org/-/epics/12775)
- [DAG](https://cells-architecture-overview-gitlab-org-tenant-sc-ff1c641f886923.gitlab.io/phase-1-8/#groups_Phase_2)

### Phase 3: GitLab.com HTTPS Session Routing

Exit Criteria:

- PreQA Cell configured to generate `_gitlab_session` with prefix using rails config.
- Route `_gitlab_session` with matching prefix to PreQA Cell using TopologyService::Classify (REST only) with static config file.
- Continuous Delivery on Ring 0 with no rollback capabilities and doesn't block production deployments.
- Topology Service [Readiness Review](../production/readiness.md) for [Experiment](https://docs.gitlab.com/ee/policy/development_stages_support.html#experiment)
- Topology Service gRPC endpoint not implemented.

Unblocks:

- [Phase 4](phase-4-gitlab-com-https-token-routing)

Before/After:

![phase-3](/images/cells/phase-3.png)

[source](https://excalidraw.com/#json=z7-ihTQ69trj5vdpXZ-7V,k0NtksWZMRdaR-lHoH3JMQ)

Dependencies:

- [Phase 2](#phase-2-gitlabcom-https-passthrough-proxy): Passthrough proxy needs to be deployed.
- [Phase 1](#phase-1-preqa-cell): GCP organizations, Ring definition exists.

Details:

- [Epic](https://gitlab.com/groups/gitlab-org/-/epics/14509)
- [DAG](https://cells-architecture-overview-gitlab-org-tenant-sc-ff1c641f886923.gitlab.io/phase-1-8/#groups_Phase_3)

### Phase 4: GitLab.com HTTPS Token Routing

Exit Criteria:

- Framework to generate routable tokens in Rails.
- Framework to classify routable tokens in HTTP Router.
- Topology Service being able to classify based on more criteria.
- Route Personal Access Tokens to different Cells using TopologyService::Classify.
- Support `PRIVATE-TOKEN:` and `Authorization:` HTTP headers for Personal Access Tokens, create issues for other to be solved in following phases.
- Each routing rule added should be covered with relevant e2e tests.
- Route Job Tokens and Runner Registration to different Cells using TopologyService::Classify.

Dependencies:

- [Phase 3](#phase-3-gitlabcom-https-session-routing): Topology Service and Router need to running in production.

Before/After:

![phase-4](/images/cells/phase-4.png)

[source](https://excalidraw.com/#json=rWNPd77fLEhwZpERiUYLA,Tb-v5Hen6NomaopcmE9_mw)

Details:

- [Epic](https://gitlab.com/groups/gitlab-org/-/epics/14510)
- [DAG](https://cells-architecture-overview-gitlab-org-tenant-sc-ff1c641f886923.gitlab.io/phase-1-8/#groups_Phase_4)

### Phase 5: Cluster Awareness

Exit Criteria:

- Topology Service Production Readiness Review for Beta.
- Framework to claim resources globally using TopologySerivce::Claims storing them in Google Spanner.
- Following resources are claimable; Username, E-Mail, Top level Group Name, Routes
- All resources that need to be claimed identified.
- Lease a sequence to a Cell using ToplogyService::Sequence.
- Rails application able to send requests to TopologyService using internal network.
- mTLS communication between TopologyService and HTTP Router.
- mTLS communication between TopologyService and Rails.
- mTLS communication between HTTP Router and Cell.
- PreQA Cell can start claiming resources, still detached from Legacy Cell.
- Claims done by PreQA Cell will be deleted.

Dependencies:

- [Phase 3](#phase-3-gitlabcom-https-session-routing): Topology Service Deployed.

Before/After:

![phase-5](/images/cells/phase-5.png)

[source](https://excalidraw.com/#json=UpWQ_mQElSNOnEtOx3ZcI,MsAdeBL_6-CFH0c4P0BeZA)

Details:

- [Epic](https://gitlab.com/groups/gitlab-org/-/epics/14511)
- [DAG](https://cells-architecture-overview-gitlab-org-tenant-sc-ff1c641f886923.gitlab.io/phase-1-8/#groups_Phase_5,groups_Phase_5_1_mTLS,groups_Phase_5_2_Sequence,groups_Phase_5_3_Claim,groups_Phase_5_4_Deploy)

### Phase 6: Monolith Cell

Exit Criteria:

- Topology Service Production Readiness GA.
- Legacy Cell configured as a Cell in TopologyService.
- All new resources in Legacy Cell are claimed using TopologyService::Claims.
- Legacy Cell claimed all existing resources.
- Sequence leased to Legacy Cell.
- Capacity Planning for sequences leased.
- Latency increase for creating globally unique resources up to 20ms.

Dependencies:

- [Phase 5](#phase-5-cluster-awareness): Cluster Awareness

Before/After:

![phase-6](/images/cells/phase-6.png)

[source](https://excalidraw.com/#json=b5JgJCXAldtsXx6iSzAdq,4A2TRSwU9WI19zbOn09gaA)

Details:

- [Epic](https://gitlab.com/groups/gitlab-org/-/epics/14513)
- [DAG](https://cells-architecture-overview-gitlab-org-tenant-sc-ff1c641f886923.gitlab.io/phase-1-8/#groups_Phase_6)

### Phase 7: Cell Initialization

Exit Criteria:

- TBD

Before/After:

Details:

- [Epic](https://gitlab.com/groups/gitlab-org/-/epics/14514)
- [DAG](https://cells-architecture-overview-gitlab-org-tenant-sc-ff1c641f886923.gitlab.io/phase-1-8/#groups_Phase_7)

### Phase 8: Organization Onboarding

Exit Criteria:

- TBD

Before/After:

Details:

- [Epic](https://gitlab.com/groups/gitlab-org/-/epics/14749)
- [DAG](https://cells-architecture-overview-gitlab-org-tenant-sc-ff1c641f886923.gitlab.io/phase-1-8/#groups_Phase_8)

### Phase 10: Production Readiness

Exit Criteria:

- Cell-Level Observability (Logs, Metrics, Alerts, Dashboard).
- Integration with existing Incident Management tooling.
- Compliance with GitLab.com security standards.
- Regional and Zonal Disaster Recovery capabilities.
- Operational tooling independence from GitLab.com/dev.gitlab.org availability.
- Centralized WAF management for GitLab.com domain.
- Cell-level Application Rate Limits with synchronization.
- Least-privileged access implementation with SRE escalation path.
- Progressive rollout of infrastructure changes across Cells with rollback support.
- Progressive deployment capabilities across Legacy Cell and Cells with rollback support.
- Support for toggling Feature Flags across Legacy Cell and Cells.

Dependencies:

- [Phase 1](#phase-1-preqa-cell): GCP organizations, Ring definition exists.

Before/After:

Details:

- [Epic](https://gitlab.com/groups/gitlab-org/-/epics/14807)

## Communication

### Slack Channels

- [#f_cells_and_organizations (internal only)](https://gitlab.enterprise.slack.com/archives/C0609EXHX6F): Regular communication
- [#cto (internal only)](https://gitlab.enterprise.slack.com/archives/C9X79MNJ3): Weekly program status update

### Meetings

- Cells Standup weekly [Meeting notes (internal only)](https://docs.google.com/document/d/1hlGGrgZFWMyHCUcML6wYgu7iWwEL6uUMs_f9DnCzNDo)

### Status updates

- Weekly status updates in Slack [#cto channel (internal only)](https://gitlab.enterprise.slack.com/archives/C9X79MNJ3) channel
- Details are also automatically rolled up details in the [Cells 1.0](https://gitlab.com/groups/gitlab-org/-/epics/12383#hourglass-work-in-progress) epic

## Additional Information

### Cells Fast Boot 2024

We held a Cells Fast Boot in Dublin, Ireland, between 2024-04-23 and 2024-04-24. Below are the artifacts from the event.

#### Agenda, Slides, and Videos

Please use the `Unfiltered` Google account to watch video recordings.

1. [Main agenda (internal only)](https://docs.google.com/document/d/1m5w8sVG5kCvZF0mg7h7HnKzVGREhTuH6e1FRhRlMjns/edit?usp=sharing)
1. Introductions, overview, and logistics: [Agenda (internal only)](https://docs.google.com/document/d/18gqKRORUE8BRULkqfBAv3FZk4yPpRw6BoqmGNUwKm50/edit?usp=sharing)
1. Cells Services - Global Service: [Agenda (internal only)](https://docs.google.com/document/d/1fTeiS6ksvhxJggui_DnCZ9tl5xIN23IZGrqgiqzB5JU/edit?usp=sharing), [Slides (internal only)](https://docs.google.com/presentation/d/12NlfOwolRf10DSLszQi9NjxFy0UUKc2XVC2kYW0HFGk), [Video (internal only)](https://www.youtube.com/watch?v=cNKsNda9Bkc)
1. Cells Services - Routing: [Agenda (internal only)](https://docs.google.com/document/d/1Z3fhilM5wYhLBhghqXeJJCLaO57YeTVdJROrTSgTuDg/edit?usp=sharing), [Slides (internal only)](https://docs.google.com/presentation/d/1wad5IOoXIPkLlVeJdzWnzGmpN_CvwRQi9cMesWj-kz0/edit?usp=sharing), [Video (internal only)](https://www.youtube.com/watch?v=1TgbM-qlQOM)
1. Application Readiness - Organizations and Users: [Agenda (internal only)](https://docs.google.com/document/d/18TH2FraEp2ISSlNOl4asBd3GYQv_homXl4jsLebveJ0/edit?usp=sharing)
1. Application Readiness - Dependencies and OKR alignments: [Agenda (internal only)](https://docs.google.com/document/d/1ySJDT2WQCsndCQikDFAN3VMDadvJwLg000qAI-u3M0I/edit?usp=sharing)
1. Deployment: [Agenda (internal only)](https://docs.google.com/document/d/1Pb280b90MkMNl7TU3i09hGZWAbBZmTUFATRoVFvssiE/edit?usp=sharing), [Slides (internal only)](https://docs.google.com/presentation/d/1rYQup9yc0UEBBrxPkVTDJ9ihzgtiLjmuGYOjZ68TZGs/edit?usp=sharing), [Video (internal only)](https://www.youtube.com/watch?v=Pf5BOMJ0A-0)
1. Provisioning: [Agenda (internal only)](https://docs.google.com/document/d/1Pb280b90MkMNl7TU3i09hGZWAbBZmTUFATRoVFvssiE/edit?usp=sharing)
1. Observability and Runners: [Agenda (internal only)](https://docs.google.com/document/d/1Pg7CKao-StGEbJQ-BEeF6x9xp-Ttux-NeiuvGmBstrQ/edit?usp=sharing)
1. Security: [Agenda (internal only)](https://docs.google.com/document/d/18a_q-g-l5RoUjwsMBp6rRHdvRT4wvD1_iBtwej8m4-M/edit?usp=sharing), [Slides (internal only)](https://docs.google.com/presentation/d/1ImP9KxwmMoZxUjYdoIz3pdPCbyUSTdhdn7JjWLK1tPE/edit?usp=drive_link), [Video (internal only)](https://drive.google.com/file/d/1qTQJZ3gEKTzEzhzb9yUygsqoy8WnQgM3/view?usp=drive_link)
1. Disaster Recovery: [Agenda (internal only)](https://docs.google.com/document/d/1eYFJAF3X_5kIgkBR-j3W_Ug3IMSK85vozCyrzF5gCao/edit?usp=sharing), [Slides (internal only)](https://docs.google.com/presentation/d/1JhWo_e6w_HYYwYCd2yN5vttntMS57aIDhPADEQD1aCw/edit?usp=sharing), [Video (internal only)](https://youtu.be/uDLDpwLYY3M)
1. Cells Mover and Isolation: [Agenda (internal only)](https://docs.google.com/document/d/1ySJDT2WQCsndCQikDFAN3VMDadvJwLg000qAI-u3M0I/edit?usp=sharing)
1. Scalability Headroom and Timeline: [Agenda (internal only)](https://docs.google.com/document/d/1XawTKX_MPM89Oyl_u3-9X1-A8QsOsZRlg8LB6ormP_8/edit?usp=sharing)

#### Decisions

1. No external customers on Cells 1.0, internal dogfooding only. Cells 1.x is the target to onboard new or existing external customers.

#### Artifacts

1. Day 1 recording: [Part 1 (internal only)](https://youtu.be/Y5mOBWqGCTQ), [Part 2 (internal only)](https://youtu.be/JtGoKK9NonE)
1. [Day 2 recording (internal only)](https://youtu.be/MM4Py3Ldnlg)
1. [Database breakout recording (internal only)](https://drive.google.com/drive/folders/13ZrWpPad_jg5ua7ocZvJ0b-XeWIp4uUy?usp=drive_link)
1. [Organizations breakout recording (internal only)](https://youtu.be/KqF1UARbMHA)
