---

title: "Infrastructure Department Frequently Asked Questions"
---







### GitLab.com Backups

#### Q: How often is GitLab.com backed up?

A: [See our summary of our backup strategy](../production#backups)

#### Q: Are GitLab.com backups encrypted?

A: Yes. We use GCP Persistent Storage volumes underneath all of our filesystems, and that is implicitly encrypted. So the [live filesystems, their snapshot-based backups, database replicas, and logical backups are all fully encrypted at the block device layer](https://cloud.google.com/security/encryption-at-rest/default-encryption/#encryption_of_data_at_rest). Additionally, [GCP encrypts and encapsulates traffic between our nodes within our VPCs](https://cloud.google.com/security/encryption-in-transit/#encryption_in_transit_by_default), so data in motion is also protected from eavesdropping and tampering.

#### Q: If a customer deletes their project, group, or account on GitLab.com, is their data securely deleted?

A: Neither the git repo backups nor the database backups will be purged immediately. When a project is deleted, the corresponding data from the database as well as the files associated with that project's repository, pages, and wiki will be removed, but will continue to exist in backups for up to two weeks after the deletion. Note that this time frame can be longer in case [Delayed project deletion](https://docs.gitlab.com/ee/user/gitlab_com/index.html#delayed-project-deletion) is enabled. For this reason we cannot guarantee that a deleted project is entirely purged from our system until the oldest of those backups expires. Please note that this is not the same as "secure delete", which typically means overwriting the deleted files' blocks with random bytes at least N times, but without the decryption keys, a stolen copy of our disk images would be unreadable.

#### Q: How is GitLab.com backed up?

A: You can view how our runbooks for specifics on how our [database](https://gitlab.com/gitlab-com/runbooks/-/blob/master/docs/patroni/postgresql-backups-wale-walg.md) and [filesystems](https://gitlab.com/gitlab-com/runbooks/-/blob/master/docs/disaster-recovery/gcp-snapshots.md) are backed up.

### GitLab.com Settings

#### Q: Where can I find the settings used for various services in production?

A: You can find the [settings we use for GitLab.com and our runners in our docs](https://docs.gitlab.com/ee/user/gitlab_com/).

#### Q: How big is GitLab.com?

A: Data from March 2019 showed there was 3.5 Million Users, around 4,000 requests per second over https, 8.4 Million Repos, and over 3 PB total storage. See our [vanity metrics dashboard](https://dashboards.gitlab.com/d/ZwfWfY2iz/vanity-metrics-dashboard?orgId=1).

#### Q: Does GitLab have an automated way to migrate from a self-managed instance?

A: Currently you can only use the [project import/export](https://docs.gitlab.com/ee/user/project/settings/import_export.html) feature to migrate projects to GitLab.com.

#### Q: If a customer project is deleted can it be restored?

A: No, once a project is deleted it cannot be restored. For some projects, [Delayed project deletion](https://docs.gitlab.com/ee/user/gitlab_com/index.html#delayed-project-deletion) will allow users to restore a project during the soft deletion state.

For Support team members looking for further guidance, please refer to [Support's restoring deleted data workflow](/handbook/support/workflows/restore_requests/).

#### Q: Can customers be put on the allowlist for the API?

A: Yes, with sufficient evidence that it's necessary, customers can request to be allowlisted. To request to be added to the allowlist, see our section on [how we handle incoming requests](../production#incoming-requests-of-the-infrastructure-team) in the handbook.

### GitLab.com Logging

#### Q: What does GitLab.com log?

A: [You can see what services we're logging in our runbooks](https://gitlab.com/gitlab-com/runbooks/tree/master/logging/doc#what-are-we-logging).

#### Q: How long are GitLab logs retained?

A: [You can see the retention policy in our runbooks](https://gitlab.com/gitlab-com/runbooks/-/blob/master/docs/logging/README.md?plain=0#retention).
