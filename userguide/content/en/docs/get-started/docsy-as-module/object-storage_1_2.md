---
title: "Object Storage Working Group"
description: "The GitLab Object Storage Working Group aim is to assist in improving the performance, security, and technical debt of our current object storage solution. Read more!"
---

## Attributes

| Property        | Value                                                                                                                                                                                     |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Date Created    | November 3, 2021                                                                                                                                                                          |
| Target End Date | May 31, 2022                                                                                                                                                                          |
| Slack           | [#wg_object-storage](https://gitlab.slack.com/messages/wg_object-storage/) (only accessible from within the company)                                                                      |
| Google Doc      | [Object Storage Working Group Meeting Agenda](https://docs.google.com/document/d/1K4zb9taDyj74NlAdKDOGPmuBzkTQFCbae-oJMMUQuQk/edit?usp=sharing) (only accessible from within the company) |

## Charter

GitLab stores three classes of user data: database records, Git
repositories, and user uploaded files.

User experience, as well as contributors experience, with our file
storage has room for significant improvement.

- Initial GitLab setup experience requires creation and setup of [13 buckets](https://docs.gitlab.com/ee/administration/object_storage.html#storage-specific-configuration),
  instead of just 1.
- Features using file storage require contributors to think about both local
  storage and Object Storage which leads to friction and
  complexity. This often results in broken features and security issues.
- People contributing to file storage often have to write code also
  for Workhorse, Omnibus, and CNG.

The working group will be reducing technical debt that has been
accrued over the past few years, namely removing CarrierWave and not
duplicating object storage clients in both Go and Ruby.

The working group is tasked with architecting a simplified Object
Storage process and implimenting the new solution.

## Business goal

Improve SaaS scalability, reliability and development speed making
sure object storage is available for every type of upload.

Improve feature adoption for self-managed customers, providing a
[single bucket configuration](https://gitlab.com/gitlab-org/gitlab/-/issues/292958)
that works out of the box.

Object storage is a key feature in GitLab that affects engineering
groups across all sections. The outcome of the working group should
also make it easier for engineers to contribute to the final solution.

## Scope and definitions

Object storage is a fundamental component of GitLab, providing the
underlying implementation for shared, distributed, highly-available
(HA) file storage.

Over time, we have built support for object storage across the
application, solving specific problems in [multitude of iterations](#company-efforts-on-uploads). This has led to increased
complexity across the board, from development (new features and bug
fixes) to installation:

- New GitLab installations require the creation and configuration of
  several object storage buckets instead of just one, as each group of
  features requires its own. This has an impact on the installation
  experience and new feature adoption, and takes further away from
  boring solutions.
- The realease of cloud native GitLab necessitated the removal of NFS
  shared storage and the development of direct upload, a feature that
  was expanded, milestone after milestone, to several type of uploads,
  but never enabled globally.
- Today GitLab supports both local storage and object storage. Local
  storage only works on single box installations or with a NFS, which
  [we no longer recommend](https://docs.gitlab.com/ee/administration/nfs.html)
  to our users and is no longer in use on GitLab.com.
- Understanding all the moving parts and the flow is extremely
  complicated: we have CarrierWave, Fog, Golang S3/Azure SDKs, all
  being used, and that complicates testing as well.
- Fog and CarrierWave are not maintained to the level of the native
  SDKs (e.g. AWS S3 SDK), so we end up having to maintain or monkey
  patch those tools to support requested customer features
  (e.g. https://gitlab.com/gitlab-org/gitlab/-/issues/242245) that
  would normally be "free".
- In many cases, we copy around object storage files needlessly
  (e.g. https://gitlab.com/gitlab-org/gitlab/-/issues/285597). Large
  files (LFS, packages, etc.) are slow to finalize or don't work at
  all as a result.

### Definitions

#### CarrierWave

A gem that provides a simple and extremely flexible way to upload files from Ruby applications. This was the boring solution when first implemented. However this is no longer our use-case, as we upload files from Workhorse, and we had to [patch CarrierWave's internals](https://gitlab.com/gitlab-org/gitlab/-/issues/285597#note_452696638) to support Direct Upload.

#### Direct upload

A technology we developed to intercept file
uploads with Workhorse and handle the expensive upload operation in
Workhorse, where it's cheaper. See our [uploads development documentation](https://docs.gitlab.com/ee/development/uploads.html#)
for more details.

### Kickoff video

{{< youtube "X9V_w8hsM8E" >}}

## Exit criteria (100%)

The overarching goal should be to define improvements that can be made with the Object Storage implementation
, and make informed implementation proposals through the work of this group. As such we intend to:

- Document the status quo of Object Storage and classify its use by feature vertical and integration patterns,
  since we know there to be drift between features.
  - [Categorize existing object storage buckets](https://gitlab.com/gitlab-org/gitlab/-/issues/345282)
  - [Describe the current state of Object Storage implementation](https://gitlab.com/gitlab-org/gitlab/-/issues/351213)
- Outline a path forward by designing a new simplified architecture for Object Storage. Identify high-level steps we need to take for that architecture to be realized.
  - [Requirements for a the new Object Storage architecture](https://gitlab.com/gitlab-org/gitlab/-/issues/345256)
  - [Proposal: unified blob storage](https://gitlab.com/gitlab-org/gitlab/-/issues/356035)
  - [Object Storage: storing attachments without carrierwave](https://gitlab.com/gitlab-org/gitlab/-/issues/348959)
- Prototype individual aspects of the proposed architecture by exploring both new technology such as ActiveStorage, or by reworking
  existing code.
  - [Document and refactor Workhorse upload routines](https://gitlab.com/gitlab-org/gitlab/-/issues/351657)
  - [POC: single authorization endpoint](https://gitlab.com/gitlab-org/gitlab/-/issues/351650)
  - [POC: ActiveStorage experiment](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/79012)
- Identify features and configuration that should be deprecated to reduce the maintenance complexity.
  - [Deprecate background upload](https://gitlab.com/gitlab-org/gitlab/-/issues/26600)
  - [Object Storage: remove background upload](https://gitlab.com/groups/gitlab-com/gl-infra/-/epics/734)
  - [Evaluate deprecation and removal of the Pseudonymizer](https://gitlab.com/gitlab-org/gitlab/-/issues/348400)
  - [Deprecate and remove Pseudonymizer](https://gitlab.com/gitlab-org/gitlab/-/issues/219952)

## Out of scope

- Make final decisions on proposed solutions.
- Implement all proposed solutions.
- Be a permanent custodian for or oversee Object Storage development in the future.

## Outcome

At the beginning of this working group, we had three main areas of
improvement: consolidating object storage files into a single bucket,
reducing code complexity, and removing local storage.

However, it took us very little time to figure out that the biggest
challenge for the working group members was understanding the current
implementation and being able to speak a common language.

The working group led an effort to collect and categorize all the
usages of object storage in the product with the result of building a
shared understanding of the problem, producing a renewed [Uploads Development Guide](https://docs.gitlab.com/ee/development/uploads/), and
removing features such as Pseudonomyzer and background uploads.

Consolidating object storage files into a single bucket and removing
local storage support were assessed by the working group as excellent
ways to reduce code complexity and simplify the product installation
and maintenance. However, those topics require more significant
cross-department decisions that do not fit the working group's
scope. As a first iteration, the working group members addressed how
to reduce code complexity by focussing on technological challenges.

The creation of the [scalability frameworks team](/handbook/engineering/infrastructure/team/scalability/#scalabilityframeworks)
during this working group execution provided a perfect partner to give
continuity to this effort.  Epic
[gitlab-com/gl-infra&733](https://gitlab.com/groups/gitlab-com/gl-infra/-/epics/733)
describes the current roadmap.

## Roles and responsibilities

The functional leads will be responsible for:

- Representing the needs of individual stakeholders in their department/sub-dept.
- Gathering and consolidating feedback on specific proposals from their department/sub-dept.
- Communicating the output from the working group (if any) and answering questions from their dept/sub-dept.

Ideally, the functional lead is someone who is an IC working in the affected groups, but anyone capable of representing a group, department, or sub-department in the fashion mentioned above is welcome.

| Working Group Role | Person                             | Stakeholder Dept. | Title                                |
| ------------------ | ---------------------------------- | ----------------- | ------------------------------------ |
| Executive Sponsor  | Marin Jankovski @marin             | Infrastructure    | Director of Infrastructure, Platform |
| Facilitator        | Alessio Caiazza @nolith            | Infrastructure    | Staff Backend Engineer               |
| Functional Lead    | Grzegorz Bizon @grzesiek           | Ops, Verify       | Staff Backend Engineer               |
| Functional Lead    | Jason Plum @WarheadsSE             | Distribution      | Staff Backend Engineer               |
| Functional Lead    | Matthias Käppler @mkaeppler        | Memory            | Senior Backend Engineer              |
| Functional Lead    | Łukasz Korbasiewicz @lkorbasiewicz | Support           | Support Engineer                     |
| Member             | Vladimir Shushlin @vshushlin       | Release group     | Senior Backend Engineer              |
| Member             | Erick Bajao @iamricecake           | Verify            | Senior Backend Engineer              |
| Member             | Jaime Martinez @jaime              | Package           | Backend Engineer                     |
| Member             | David Fernandez @10io              | Package           | Senior Backend Engineer              |
| Member             | Tiger Watson @tigerwnz             | Configure         | Senior Backend Engineer              |
| Member             | Vitor Meireles De Sousa @vdesousa  | AppSec            | Senior Application Security Engineer |
| Member             | Patrick Bajao @patrickbajao        | Workhorse         | Senior Backend Engineer              |
| Member             | Catalin Irimie @cat                | Geo               | Senior Backend Engineer              |
| Member             | Sofia Vistas @svistas              | Quality           | Senior Software Engineer in Test     |
| Member             | Jacob Vosmaer @jacobvosmaer-gitlab              | Scalability           | Staff Backend Engineer    |

## Company efforts on uploads

At GitLab we work in [iterations](/handbook/values/#iteration),
direct upload was developed by several teams incrementally by adding new features over the course of several milestones.

To demonstrate the number of teams and milestones involved, the timeline
of the Object Storage development, from feature development to tech
debt and security fixes, is outlined:

- From **10.4** to **10.5** the CI/CD team worked on a [product discovery](https://gitlab.com/gitlab-org/gitlab/-/issues/4184) to figure out how we could remove the NFS storage to allow the release of a cloud native GitLab.
- In **10.6** the CI/CD team developed [direct upload for Git LFS](https://gitlab.com/gitlab-org/gitlab/-/issues/3507).
- In **10.7** the plan team ported [Object Storage support from EE to CE](https://gitlab.com/gitlab-org/gitlab-foss/-/issues/40781).
- In **10.7** the CI/CD team implemented [direct upload for artifacts, only on Google Cloud Storage](https://gitlab.com/gitlab-org/gitlab/-/issues/4183).
- In **10.8** and **11.0** the CI/CD team implemented [direct upload for artifacts on AWS S3 and compatible storages](https://gitlab.com/gitlab-org/gitlab-foss/-/issues/44142).
- In **11.1** the plan team implemented [direct upload for user attachments](https://gitlab.com/gitlab-org/gitlab-foss/-/issues/44663).
- In **12.5** the delivery team worked on some [technical debt](https://gitlab.com/gitlab-org/gitlab/-/issues/22547), this was [a blocker for our 50k reference architecture](https://gitlab.com/gitlab-org/quality/performance/-/issues/66) as well as causing several problems on GitLab.com infrastructure, like [VMs reboots](https://gitlab.com/gitlab-com/gl-infra/infrastructure/-/issues/7872), [LFS Access Forbidden](https://gitlab.com/gitlab-org/gitlab/-/issues/32718), and [problems with the new pre environment](https://gitlab.com/gitlab-com/gl-infra/delivery/-/issues/392).
- In **12.6** we fixed a P1/S1 security issue - [Path traversal leading to Remote Code Execution](https://gitlab.com/gitlab-org/gitlab/-/issues/36029). After the fix, P2/S2 variations of the original issues where reported:
  - In **12.7** and **12.8** we fixed [a path traversal in dependency proxy](https://gitlab.com/gitlab-org/gitlab/-/issues/36324).
  - In **12.10** we fixed [a path traversal in NPM packages](https://gitlab.com/gitlab-org/gitlab/-/issues/121735).
  - In **13.0** we fixed [a path traversal in Nuget packages](https://gitlab.com/gitlab-org/gitlab/-/issues/211636).
  - In **13.5** we fixed a P1/S1 [path traversal on Git LFS](https://gitlab.com/gitlab-org/gitlab/-/issues/255886).
- In **12.7** we fixed a P1/S1 security issue - [Workhorse bypass leads to package disclosure and file disclosure in `/tmp`](https://gitlab.com/gitlab-org/gitlab/-/issues/209080). After the fix, P1/S1 variations of the same attack where reported:
  - In **12.10** we fixed two workhorse bypasses, one for [Nuget packages](https://gitlab.com/gitlab-org/gitlab/-/issues/213040) and one for [artifacts](https://gitlab.com/gitlab-org/gitlab/-/issues/213139).
  - Another security release, still in **12.10**, was needed to completely fix [Nuget packages](https://gitlab.com/gitlab-org/gitlab/-/issues/214636).
  - In **13.2** we fixed a [workhorse bypass in Maven repository](https://gitlab.com/gitlab-org/gitlab/-/issues/225259).
  - In **13.3** we fixed a [workhorse bypass in Conan repository](https://gitlab.com/gitlab-org/gitlab/-/issues/228841).
- In **13.1** an IC added [consolidated object storage configuration](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/34460).
- In **13.2** an IC added a [S3 client to Workhorse](https://gitlab.com/gitlab-org/gitlab-workhorse/-/issues/222) to improve multipart uploads and ETag checking.
- In **13.3** an IC added [support for AWS S3 server side encryption](https://gitlab.com/gitlab-org/gitlab/-/issues/22200).
- In **13.4** an IC added [support for Azure Blob storage](https://gitlab.com/gitlab-org/gitlab/-/issues/25877).
- From **13.4** to **14.0** the Release group [transitioned GitLab Pages from NFS to Object Storage](https://gitlab.com/groups/gitlab-org/-/epics/3901) following the [GitLab Pages New Architecture blueprint](https://docs.gitlab.com/ee/architecture/blueprints/cloud_native_gitlab_pages/index.html)
