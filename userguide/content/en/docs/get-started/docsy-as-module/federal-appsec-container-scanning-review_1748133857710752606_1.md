---
title: "Federal AppSec Container Scan Result Review Process"
---

Certain customers scan containers that GitLab provides for known vulnerabilities and other security concerns. The GitLab Federal Application Security team is responsible for reviewing these results. In many cases, these findings are related to dependencies that need to be updated to address vulnerabilities.

The expectation is that the Federal Application Security Team will verify every finding in each scanned container and make a determination as to whether the finding is a true positive, false positive, or a duplicate. For each one of these determinations, a justification needs to be communicated. These justifications are then reviewed and used to decide whether or not that particular GitLab container is approved for use.

## Working the Queue

- Log in to the customer portal. Once logged in, you will see a list of containers that have multiple version tags
- Any container versions that have a finding that need justification (indicated in the `Status` field) will need to be reviewed and have justifications provided
- For each finding that has a `Needs Justification` status, determine if it is a true positive, false positive, or duplicate
- Be sure to click the `Save Progress` button
- Once all justifications have been provided and are ready to be submitted, click the `Send for Review` button
- Questions or concerns about findings or justifications can be directed to the appropriate hardening team

### True Positives

True positives that are not already being tracked via GitLab issue need to have an issue created in the appropriate repository. The issue description should describe the finding and provide any information relevant to resolving it. This issue needs to then be triaged by applying the appropriate priority/severity labels, a due date, and pinging the responsible product and engineering teams. A justification then needs to be provided that communicates GitLab has confirmed the finding, provides the relevant GitLab issue id, and specifies the expected date of a fix being released via the dropdown.

When trying to determine if something is a true positive:

- Confirm that the scanner finding is actually referencing a dependency that GitLab uses
  - Be mindful that false positives are common because of overlaps in library names
  - The NIST link or other resources can be used to verify what software is impacted by the CVE
- Use the `Package Path` to determine where the finding is coming from
- Check the appropriate manifest file (`Gemfile.lock`, `go.sum`, etc) and to determine if the version mentioned in the scanner finding is actually being used
- Make sure there isn't an existing issue by searching for the CVE identifier and/or the dependency name in the appropriate repository (and perhaps also in `gitlab-org/gitlab`)
- For some Docker-related findings, consider running bash on the image and checking to see if the impacted library is included by default
  - If the library is included in the base container, an fixed version will likely be included next time the container gets updated
  - In some cases, a version is specified in a GitLab repository and will need to be changed (ex in `gitlab-org/build/CNG`)

### False Positives

If a finding is a false positive, that needs to be communicated in the justification with an explanation as to why it is being considered a false positive.

### Duplicates

In some cases, GitLab will already be tracking the finding. These duplicates can be considered as true positives. These will also need a justification to be provided that mentions we are already aware of the finding and should mention the relevant GitLab issue id. Occasionally, the scans will have duplicates in the same page of findings, typically because the scanners are alerting on the same vulnerability being described by two different CNAs. These can be considered as false positives, with the justification mentioning the duplicate finding identifier.

## Repositories

A growing number of containers are being provided to and scanned. Knowing where to look to verify these findings and where to create an issue for them can sometimes be tricky. In some situations the individual repositories are the appropriate place (such as for [gitlab-rails](https://gitlab.com/gitlab-org/gitlab) or [gitaly](https://gitlab.com/gitlab-org/gitaly/)). In other cases, a change needs to be made in the [CNG repository](https://gitlab.com/gitlab-org/build/CNG) or elsewhere.
