---
title: Application Security Testing, Vulnerability Research - CNA Processes
---

This handbook page is intended to document CNA processes that the
[Vulnerability Research](../vulnerability-research/) team uses in contributing to
GitLab's role as a CNA.

## CVE Requests

### Events we operate upon

The team will operate upon a `CVE Publish Request` issue being marked as "ready for Immediate Publishing".

### Workflow

1. **Triage**: Within 2 days of receiving the request, we review the issue for completeness and accuracy.
   
2. **Decision Path**:
   - **If changes needed**: Leave a comment requesting specific clarifications or modifications from the Issue Author/Assignee
     - Wait for response
     - Conduct any necessary follow-up discussions
     - Proceed to either Approval or Rejection (in rare cases)
   
   - **If complete**: Approve the issue, which automatically:
     - Publishes the CVE
     - Closes the issue

### Timeline

Initial triage and first response: **Within 2 days** of receiving the publication request

### CWEs, CVSS Scores, and Descriptions

1. Start with identifying an accurate CWE for the vulnerability
1. Review the CVSS score that the submitter provided

   - If the CVSS score is largely out-of-line with what you would expect
     based on the CWE and the description, confirm with the submitter that the
     score makes sense
   - If clear reasons exist for the unexpected CVSS metrics, add a note in the
     description to this effect. For example, _"... Overall impact is limited
     due to the user only being able to affect their own account"_
   - **Note** The CVSS score should make sense from an outside perspective
     when only having access to the CVE description and CWE

## GPG Key

The email `cve@gitlab.com` has
[a GPG key](https://about.gitlab.com/security/cve/#cve-public-gpg-key) that the
Vulnerability Research team uses during CNA procesess.

## Extending Public Key

The GitLab `cve@gitlab.com` email's public GPG key is set to expire every six
months. Follow these steps to extend the expiration by another six months:

1. Have both the public and private keys to `cve@gitlab.com` locally.
1. List the keys with `gpg --list-keys`

   ```console
   $> gpg --list-keys
   /home/user/.gnupg/pubring.kbx
   ------------------------------
   pub   rsa4096 2020-00-00 [SC] [expires: 2020-06-00]
         AAAABBBBCCCCDDDDEEEEFFFFGGGGHHHHIIIIJJJJ
         uid           [ultimate] GitLab CVE <cve@gitlab.com>
         sub   rsa4096 2020-00-00 [E] [expires: 2020-06-00]
   ```

1. Edit the key with `gpg --edit-key AAAABBBBCCCCDDDDEEEEFFFFGGGGHHHHIIIIJJJJ`
1. Set the expiration date on the key to another `6m` with the `expire` interactive command:

   ```console
   $> gpg --edit-key AAAABBBBCCCCDDDDEEEEFFFFGGGGHHHHIIIIJJJJ
   ...
   gpg> expire
   ...
   Key is valid for? (0) 6m
   ```

Once the expiration on the public key is extended by another six months, export
an armored version of the key with:

```console
gpg --export --armor AAAABBBBCCCCDDDDEEEEFFFFGGGGHHHHIIIIJJJJ
```

You may also want to fetch the ID of the key with. The ID is the last 16
characters of the long-form key `AAAABBBBCCCCDDDDEEEEFFFF[GGGGHHHHIIIIJJJJ]`:

```console
gpg --list-signatures cve@gitlab.com
```

### Update Locations

The new public GPG key needs to be updated in the following locations:

- [cves-workflow (internal)](https://gitlab.com/gitlab-org/secure/vulnerability-research/advisories/cves-workflow/-/blob/master/lib/state_machine.rb#L546)
- <https://about.gitlab.com/security/cve/>
