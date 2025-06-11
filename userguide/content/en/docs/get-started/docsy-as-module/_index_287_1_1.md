---
# This is the title of your design document. Keep it short, simple, and descriptive. A
# good title can help communicate what the design document is and should be considered
# as part of any review.
title: Package Artifact Ingestion
status: proposed
creation-date: "2024-09-25"
authors: [ "@idawson" ]
coaches: [ "" ]
dris: [ "@idawson", "@gonzoyumo", "@dabeles" ]
owning-stage: "~devops::application security testing"
participating-stages: []
# Hides this page in the left sidebar. Recommended so we don't pollute it.
toc_hide: true
---

<!-- Design Doucments often contain forward-looking statements -->
<!-- vale gitlab.FutureTense = NO -->

<!-- This renders the design document header on the detail page, so don't remove it-->
{{< engineering/design-document-header >}}

<!--
Don't add a h1 headline. It'll be added automatically from the title front matter attribute.

For long pages, consider creating a table of contents.
-->

## Proposal

Build a new service which takes in a list of SBOM or pURLs for supported package managers to download and extract artifacts and store in GitLab.com under a custom namespace. This service will allow us to run custom tools and services on the actual artifacts that are run in our and our customers code bases.

This service will allow us to easily update and re-run our updates to our tools without requiring the tooling to handle the downloading and extraction itself but can reuse the data stored in the git repositories.

### Example artifact outputs

Assuming an example python package of `requests` this system would create the following output:

1. `gitlab.com/gitlab-oss-package-research/source/pypi/requests/` repository with every version tagged appropriately. (e.g. the repository would have git tags v1.0.0, v1.01, v2.0.0, v2.0.1 and so forth)
2. `gitlab.com/gitlab-oss-package-research/tools/pypi/requests/<tool>/` repository with every version tagged appropriately. Tools could output json or whatever they like provided that their outputs are committed and tagged to to the output they ran against.
    1. For example if Libbehave ran against v1.0.0 and v1.0.1 they would have:
        1. `gitlab.com/gitlab-oss-package-research/tools/pypi/requests/libbehave/libbehave.json` tagged at v1.0.0
        2. `gitlab.com/gitlab-oss-package-research/tools/pypi/requests/libbehave/libbehave.json` tagged at v1.0.1
    2. Services could then access the output for the version they are interested in easily via an HTTP request: `https://gitlab.com/gitlab-oss-package-research/tools/pypi/requests/libbehave/libbehave.json?refs=v1.0.0`

### Example products or services to utilize the data

1. Libbehave: Works exclusively off of downloaded packages. We would be able to easily update Libbehave rules and re-run scans and store results for each version of a package in this custom namespace.
2. [CA Auto-Remedation](https://gitlab.com/groups/gitlab-org/-/epics/15114): By knowing exactly what APIs changed between two versions, we can easily write tools that work with the diff data and determine how an update to a package would potentially impact a customers code base.
3. [Depscore](https://gitlab.com/gitlab-com/gl-security/product-security/appsec/tooling/depscore): AppSec team's depscore project could run against each individual version of a library and store the results for each version of a package in their tools repository.
4. [OpenSSF Scorecard](https://github.com/ossf/scorecard): We can run OpenSSF scorecard against each individual version of a library and store the results for each version of a package in their tools repository.
5. Advanced SAST: Much like CA auto-remediation, knowing the APIs for frameworks is important for identifying sources & sinks. By having this data accessible we can easily determine which versions sources & sinks will work against.
6. https://advisories.gitlab.com: We can utilize links to the data to show vulnerable versions as well as Libbehave output directly on the advisories.gitlab.com website. This will allow us to show off our Software Composition Analysis (SCA) capabilities.
7. Any other tool that requires regular tweaking (e.g. rule based) will benefit as we don't need to download packages on demand to allow us to update the results.
8. Patch analysis (AI/ML Datasets): We will easily be able to create diff/patches between versions of packages, this may assist in various AI/ML training data sets.
9. External Researchers: While not a direct product/service, by opening these repositories up to the world external researchers will be able to point to GitLab.com as a source of truth for how / what code a package actually contains as opposed to just what is in the projects git repository.

## Architecture

![ingestion architecture](/images/handbook/engineering/architecture/design-documents/package_artifact_ingestion/ingestion_architecture.png)

## Process

A tool or client first acquires a list of pURLs or an SBOM full of pURLs that contain packages for supported package managers.

A scheduled job/service will also run to ensure packages that have already been stored are up to date.

### pURL / SBOM API Service

The aforementioned list of pURLs is then submitted to this API Service. Provided the pURL is valid and is a supported package manager, it initiates multiple pub/sub requests, each request containing a unique package. API Service will be an HTTPS enabled cloud run function that uses a firestore datastore to track packages and concurrent use for rate limiting purposes.

### Package-processor

The package processor takes the parsed package information, calls out to the package managers API to get a list of versions. It then calls into GitLab's [tags API](https://docs.gitlab.com/ee/api/tags.html) to get a list of tags for the package:  `gitlab.com/gitlab-oss-package-research/source/<pkgmgr>/<pkg>/`. If a version does not exist, or the package does not exist, it then proceeds to pull down each package listed in the package man agers API output. The packages that are downloaded are usually compressed archive files (zip/tar).

If the package already exists on gitlab.com then the git repository is pulled down into the container. The downloaded archive files are iterated over and extracted into this git repository. Each version will be committed and then tagged the particular version. For example if we pull down version v1.0.0 and v1.1.1, we will:

1. \*Remove the old contents of the git repository
1. Extract v1.0.0 into the git repository
1. commit the new files
1. git tag --name "v1.0.0"
1. Remove the contents of the git repository again
1. Extract v1.0.1 into the git repository
1. commit the new files
1. git tag --name "v1.0.1"
1. git push all changes and tags back to `gitlab.com/gitlab-oss-package-research/source/<pkgmgr>/pkg`

\*Note: We could also extract into a temp dir and do a git diff to replace the files.

If the package has never been seen before, the same process as above is executed but first a new repository is created and added to gitlab.com/gitlab-oss-package-research/.

## Concerns

### Rate-limiting

The biggest concern is overloading GitLab.com with new repository creations. The API Service will either need to set some rate limiting or a shared datastore (firestore or some simple K/V store) to set global counters so that each package processor can know how many git repositories are being created or updated at a given time.

### Storage space

An initial analysis showed that storage space will be negligible, with 10,000 packages for 8 package managers each (80k) only taking up around 3.28TB of space.

## Initial implementation plan

1. Request creation of a new namespace on GitLab.com `gitlab.com/gitlab-oss-package-research`.
2. Create two sub-groups:
    1. `gitlab.com/gitlab-oss-package-research/source/`
    2. `gitlab.com/gitlab-oss-package-research/tools/`
3. Create a new project for deploying this service on GitLab.com (https://gitlab.com/gitlab-org/secure/vulnerability-research/oss-package-research)
4. Build the terraform modules to deploy the service
5. Write the API service and pull in the already created code for the package-processor
6. Start with all packages that exist in our GLAD and add them to the new namespace.
7. Run tooling (Libbehave) against the pulled down packages and store the results in the `gitlab.com/gitlab-oss-package-research/tools/<pkg>/` group.
8. Update advisories.gitlab.com with every unique vulnerability page to also include Libbehave output. For example if an advisory existed for pypi's request's python package for version 1.0.0 we could initiate a simple HTTP request to: `https://gitlab.com/gitlab-oss-package-research/tools/pypi/requests/-/libbehave/libbehave.json?refs=v1.0.0)` and include the json output directly into the advisory page output.
