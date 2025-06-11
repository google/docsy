---
owning-stage: "~sec::govern"
title: 'GitLab Secrets Manager ADR 008: Redesigning secrets manager without a Rails database table'
toc_hide: true
---

One major issue with the database design for Tanukey is that it requires data
synchronization across two distinct services, preventing the use of a common
transaction. Using an external storage operation with OpenBao is impossible,
so our next best design option is to use OpenBao as the single source of truth
and identify what enhancements need to be made.

Our design goals are as such:

1. Strictly rely on OpenBao as much as possible and avoid database
   synchronization issues;
2. Minimize net-new enhancements to OpenBao;
3. Be cognizant of OpenBao's performance characteristics.

### Why

In [various](https://gitlab.com/gitlab-org/gitlab/-/issues/470384#note_2062644564)
[discussions](https://gitlab.com/gitlab-org/gitlab/-/issues/470406#note_2115240117),
we've been realizing that the current design has lead to a potential for
split-brain problems: creating or deleting a secret requires both a write to
OpenBao and a write to a PostgreSQL table (through Rails/Puma). If either
fails, a reconcile step would be necessary. Some possible designs included
using a background job to retry provisioning the secret or the database table
entry (which would potentially mean spreading that secret beyond OpenBao into
the runner's queue), or using a later reconciliation background job (which
could be expensive as you'd have to list all secrets in OpenBao to identify
which ones lacked database entries).

Barring an easy way of solving the split brain problems means that we wanted
to explore the impacts of a single-source-of-truth using OpenBao.

### Summary

With careful layout of secrets, it **should** be possible for MVC to only rely
on OpenBao as the single source of truth. For post-GA, there are definitely
some future improvements that would be necessary for improved performance in
certain operations, but many of these can be solved by first (re-)adding
horizontal scalability via servicing read-only requests on standby HA nodes.

### Description

The below design relies on **property-based** authentication: GitLab Rails
understands the context ("properties") of a request (whether from a user, such
as roles or identifiers; or from a pipeline, such as environment, branch, and
potentially including stage and job name). We create OpenBao ACL policies
around these properties and let the authentication engine tie the two together,
either explicitly or via groups.

In particular, permission grants (whether _categorical_ in the case of user
roles or _granular_ in the case of direct user permissions) are given to a
property of the authenticated entity: either the _role_ they've been granted,
some _scope_ information (environment, branch, or later stage and job name),
or the _database id_ of the entity in question (usually only a user as jobs
and pipelines lack a durable identifier across runs). This lets authentication
and authorization via JWTs attest to the properties of the user (they have
XYZ roles in this project and have user id 1234) or pipeline (executing on
ABC branch in DEF environment of the project), which GitLab Rails knows and
maintains in its existing databases. OpenBao then maintains the mapping of
properties->permissions via its ACL policies.

While each potential property's policy is provisioned on a token, OpenBao
ignores policies which don't exist in the system. This allows Rails to only
create policies in OpenBao for which permissions are given. Rails can then
query the list and contents of policies to display permission information,
synthesizing that back via its databases to concrete roles, users, &c.

In this way, there's a separation of concerns: Rails handles the identity,
but OpenBao keeps control over the ACL policies and the specific permission
grants they entail. No cross-service synchronization of storage is required
for this approach.

### Proposed secret layout

We will use the existing [secret layout](/handbook/engineering/architecture/design-documents/secret_manager/#secrets).

The one caveat in this design is that "[option 2](https://gitlab.com/gitlab-org/gitlab/-/issues/470406#note_2136064693)"
(wherein the same secret can appear with different names in different
contexts) becomes hard to enforce; thus we'll use option 1 exclusively.
While theoretically we can use the naming [solutions](https://gitlab.com/gitlab-org/gitlab/-/issues/470406#note_2115279537),
we can't easily validate that two paths have separate scopes when updating an
ACL and thus will prefer to have separate names entirely. There is an approach
to fix this in the [notable restrictions](#reused-secret-names) section.

Ignoring this constraint and allowing name to be a strictly free-form value,
forcing users to refer to secrets by some identifier we choose, could likely
cause confusion and poor UX (and, doesn't solve the underlying issue reused
names to keep the production/staging difference as minimal as possible and
enable the same `.gitlab.yml` file for both, just executing from different
branches perhaps).

#### ACLs for pipelines

These ACLs would be used with the existing design's [JWT auth methods](/handbook/engineering/architecture/design-documents/secret_manager/#authentication).

One notable change is that, because we're relying on groups to associate
permissions to pipelines (and no longer provisioning a per-execution pipeline
JWT role and ACL policy), we will be able to use a single JWT role per project
within the namespace, bound to GitLab's keys. This will allow us to directly
issue JWTs and start pipelines without requiring a round-trip to OpenBao first.

#### ACLs for users

Based on current designs, we do not need to handle cross-project queries of
any sort from users: they will be accessing only a specific secrets management
page for a specific scope. Furthermore, our initial design only requires
role-based access: granular permission access (in the future) would require
us to solve the [reverse-lookup problem](#reverse-lookup-of-policies), which
is doable but requires an additional, more complex extension to OpenBao.
However, custom roles (with granular scopes) are fully expressable in the new
layout if they are named and can be queried by GitLab Rails to place on the
JWT.

[As before](/handbook/engineering/architecture/design-documents/secret_manager/#user-acl),
GitLab Rails will initially perform user operations on the back-end before we
implement it in the front-end code. However, as GitLab Rails will not store a
user access authorization table (but does have understanding of the user
initiating the request and any roles they are granted in the project
explicitly or implicitly through groups), we can continue using the property
based approach with explicit [sub-tokens](https://openbao.org/api-docs/auth/token/#create-token)
if the roles conflict before [policy unions](#policy-unions) land.

Note that OpenBao Proxy will not rewrite requests sent with an explicit token
to use the global AppRole token. Use of direct token is not ideal long-term,
but is a useful tool in this case as we can create expiring tokens that don't
live much longer than the request they're used in, with less overhead than
normal auth methods.

### Types of operations

In order for this design to be effective, we need to know that every type of
operation over secrets can be efficiently performed. We enumerate them below.

#### Pipelines fetch secrets

Pipelines must be able to fetch secrets from OpenBao. To fetch a secret:

1. GitLab Rails provisions a JWT, containing the concrete environment,
   branch, and project information including in a claim used for
   `groups_claim` matching.
   - Initially GitLab Rails must query OpenBao to find the globbed groups
     directly, but if group aliases are updated [to support globs](#group-alias-glob-matching),
     we can directly provision the final environments and OpenBao can match
     alias->globs internally.
2. GitLab Rails gives the JWT and the relevant paths to OpenBao to the Runner.
3. The Runner authenticates to OpenBao and fetches the secrets.

Steps 2 and 3 do not rely on any complex operations; only step 1 currently
requires a LIST operation on the GitLab Rails->OpenBao side.

**Observation**: CI pipelines may default to static secrets, but most dynamic
secret engines probably should have a `type:` keyword to allow the Runner to
understand what type of operations to use.

#### User list secrets

User listing of secrets is limited to a particular space (project, ...) and
thus incurs (initially) a single LIST operation. In the future, dynamic secret
backends might complicate this, but we can likely use [profiles](#profiles) to
address that later.

Depending on the verbosity of the display, some information from viewing a
specific secret might also apply and incur additional complexity.

#### User views specific secret

Viewing a specific secret implies we know the path in storage for the secret.

To view a specific secret, a `LIST-PAGE` call can be issued (size=1) to ensure
the secret appears in the list. GitLab Rails can then fetch relevant ACL
and metadata information using subsequent `LIST` operations against prefixed
paths to get relevant policies. These ACLs will need to be `READ` to match
secret to policy to understand relevant scope (based on the above).

In the future, we'll be able to skip the undirected `LIST` operation and all
`READ` operations by using [reverse lookup of policies](#reverse-lookup-of-policies);
this will let us know (by virtue of policy naming) what things have access to
this secret.

#### User modifies permission

To modify a permission, GitLab Rails would have to act on the user's behalf,
fetching the relevant policy and then modifying it to have the new scope
or removing an existing scope. The policy would either be updated (if
additional paths remained in the policy) or it would be deleted. Any
corresponding groups would have to be created or deleted as well.

Notably, while groups still exist on the entity (for any in-flight requests),
this would have a real-time impact, unlike the [current design](/handbook/engineering/architecture/design-documents/secret_manager/#pipeline-acl),
which generates ephemeral policies per-execution of a pipeline.

#### User sets value

To set a value, the user would perform a write operation to OpenBao (whether
directly or through GitLab Rails acting on its behalf). Because the user
already knows the path, this shouldn't impact anything.

#### Auditing user's access

Auditing a user's access to all secrets in OpenBao is fairly easy insofar as
it is one or more LIST requests to relevant API endpoints based on project
information. In particular, it requires a LIST operation to see if there are
policies for the user's role and if the user has any directly given
permissions (based on the policy bearing the user's id).

Across projects, this becomes harder: these lists must be done cross-tenant,
which will be separate namespaces and thus won't share common LIST operations.
We'll likely want to add separate background cleanup workers to the GitLab
Rails user deletion, though as long as user ID is not ever reused, we should
be fine leaving unused policies in OpenBao. Some longer-term expiry on
permissions could also address this.

#### Deleting a project

Deleting a project requires deleting the relevant secret mount(s) and then
listing and deleting all project-specific ACL policies and groups in OpenBao.
A LIST operation can be used to see the list of policies under this project
identifier and then remove all matching policies and/or groups.

#### Deleting a user

This roughly equates to the above ([Auditing user's access](#auditing-users-access)),
just with deletes being issued for any matching policies.

#### Timestamp computation

Since Rails will want to be ingesting and parsing OpenBao's Audit data
anyways, we'll be able to maintain created, last modified, and last accessed,
times. This could go into a table for more efficient lookup.

### Notable restrictions

#### Uniqueness checks are hard

While we can support uniqueness within a given K/V engine, if we were to
introduce hierarchical secrets in the future (at the group level for
instance), it will be hard to ensure global uniqueness across group->project,
especially as users will have direct write capabilities in the future.

Thus, it is suggested to add an optional `scope:` tag to secrets (defaulting
to `project`), to allow disambiguating where in the hierarchy this secret is
expected to be read from. Secrets would then only need to be disambiguated
across scopes.

However, except with a single unified K/V entry indicating the type, we'd
_also_ have uniqueness issues at the same scope for dynamic secrets. In that
case, using a `type:` field (on the secret in the YAML file) will yield
clarity (or potentially cause some confusion...). Using a single table has
some benefits, insofar as allowing the runner to infer the type based on data
stored in the K/V entry and allowing "option 2" based same-named secrets (in
different scopes) to have different types associated with them (perhaps a
static credential for testing but a dynamic value for staging and prod).

This is a future problem.

#### Descriptions and metadata

Not solved here is what to do with the
[description](https://gitlab.com/gitlab-org/gitlab/-/issues/432384/designs/Edit_Secret.png)
and other metadata fields (`suggested rotation` &c).

For K/V secrets, this can be a metadata value, but this will not work for
non-K/V dynamic secrets. One option would be to provision a K/V entry for all
values (as mentioned above): metadata fields for description could then be
used and uniqueness across all types of secrets would potentially be enforced.

Theoretically this could also be done for inherited values (to "block" local
engines from creating them), fixing the uniqueness check issue. However, it
would not be ideal so using the `scope:` syntax would likely be preferable in
that case.

##### Reused secret names

Concretely, for every secret, regardless of type (static vs dynamic), suppose
we create the following entry:

- `.../secrets/kv/metadata/explicit/<name>`

This metadata entry could be used for existence checks (as KVv2 metadata
entries show up in LIST operations under `.../secrets/kv/data` as well) and
could hold GitLab-specific metadata about a secret.

Some metadata fields could include:

- `type`, to indicate the type of a secret (`kv` in the MVC for simple
  secrets).
- `description`, for the textual description of this secret.
- `scopes`, to indicate the known scopes of a secret. This could be a list
  such as:

   ```json
   [
      {
         "id": "<uuid>",
         "environments": [...],
         "branches": [...],
         "combined": [...],
         "stages": [...]
      },
      { ... }
   ]
   ```

   to allow mapping from a single metadata name to an identifier per scope.
   Then, the actual (static) secret value could be at a path such as
   `.../secrets/kv/data/explicit/<name>/id/<uuid>` and the runner could fetch
   this value based on the desired match criteria. Similarly a scheme could be
   designed for dynamic secret engines, such as `explicit-<name>-id-<uuid>`.
- `creator`, for the identifier of the author of this secret.
- ... &c

This places a little more work on the runner, but we could design a migration
procedure assuming all runners are updated to synchronize to the new GitLab
version (or support landed there ahead of the GitLab Rails update with this).
Migration could occur when a secret is modified to add an additional scope;
this reduces the number of entries in OpenBao until such time as the same
secret is required in different scopes. A UI could be built over this, to
allow more intuitive creation/management of secret values. Everyone with some
access to the secret would then be given read access to the metadata field.

OpenBao KVv2 supports a [check-and-set semantic](https://openbao.org/api-docs/secret/kv/kv-v2/#createupdate-secret):
this will allow us, without [external transactions](#external-transactions),
to safely create and modify K/V entries.

### Future extensions

The following extensions to OpenBao will allow us to improve performance and
solve certain shortcomings with the existing design.

To **summarize**, only the two short-term extensions are required: if
wildcards can be delayed until after MVC (or even after GA), then the ACL list
prefix can also be delayed as well. This means this design _should_ work
without changes to OpenBao today, though with less performance if ACL listing
is not implemented.

#### Short-term

The following short-term enhancements are required to be completed by GA as
they're necessary _just_ for the designs presented through MVC. They might
have performance implications that allow us to reduce the work that GitLab
Rails does.

##### ACL list prefix

ACL policies can contain the `/` character, which is still interpreted as an
actual K/V path component separator. This means theoretically the
`LIST /sys/policies/acl` could take an optional `[/:prefix...]` which
corresponds to an on-disk subpath under the policy store, limiting results
without having to use an iterated `LIST-PAGE`.

In particular, by prefixing our policies with a segment (`project_{id}/` or
`user/` or `roles/` &c), we can list over just the policies applicable to
each (project pipelines, or direct permissions given to users).

OpenBao already [mostly supports this](https://github.com/openbao/openbao/blob/c9e46f74d17ebf5b3d093f2911a8ba610014de9e/vault/policy_store.go#L504-L515).
We will just need to support creating a SubView if `ListPolicies(...)` is
given an optional `prefix`.

**Complexity**: simple
**Impact**: necessary performance improvement at scale
**MVC**: not strictly necessary; performance improvement
**GA**: required

##### Group alias glob matching

The [identity subsystem](https://openbao.org/api-docs/secret/identity/group-alias/)
group aliases: alternative names (within one mount path) to which other
names for specific groups apply. By enhancing these to support explicit
globs, we can [map glob policies to glob groups](https://openbao.org/api-docs/secret/identity/group/)
and have OpenBao apply them in the future.

This reduces GitLab Rails' from needing to query the exact set of groups
and policies to apply before issuing the JWT in the first place.

To apply this mapping [`refreshExternalGroupMembershipsByEntityID`](https://github.com/openbao/openbao/blob/c9e46f74d17ebf5b3d093f2911a8ba610014de9e/vault/identity_store_util.go#L2109-L2229)
will need to be updated to support globs in the `groupAliases` parameter.
In particular, this is rather complex as the underlying MemDB does not
support native glob matching. We'll need to create a new set of tables,
and do a [Longest Prefix match](https://pkg.go.dev/github.com/hashicorp/go-memdb#Txn.LongestPrefix)
to resolve candidates for the glob before validating each one against the
actual value and seeing what matches.

An alternative design here would be to somehow convey this information in
a Rails table: the risk of out-of-sync then becomes minimal and potentially
this table can be used to solve the "nption 2" [design issue](https://gitlab.com/gitlab-org/gitlab/-/issues/470406#note_2115279537).

Replacing this might be useful anyways, as MemDB requires all entities and
groups fits in memory, but was useful when the storage backend did not
support transactions. Switching to a transactional storage backend would let
us replace this with a LRU cache and more entries on disk and thus have
different performance characteristics if we wanted them. However, we might
still want to allow MemDB users to have support for glob based groups.

**Complexity**: complex
**Impact**: necessary performance improvement at scale to reduce the number
            of Rails->OpenBao queries.
**MVC**: not strictly necessary if we don't allow globs in environments,
         branches.
**GA**: likely required if customers have complex environments names

#### Long-term

The following long-term enhancements are required to add additional features
into GitLab Secrets Manager, but aren't required for the initial set of
designs through GA.

##### Policy unions

An upstream OpenBao commenter already noted the weird ACL
[combining behavior](https://github.com/openbao/openbao/issues/514) and
wants to address it with strict UNIONs over policies. This isn't useful
for us in the short-term (because all pipelines with separate policies
will have paths with READ access only, and so will all have the same
capabilities), but we'll need this for the future if we support CREATE
or dynamic secrets of various sorts.

**Complexity**: complex; lots of RFC design work and careful consideration.
**Impact**: solves the [subtoken requirement problem](https://github.com/openbao/openbao/issues/514#issuecomment-2336401580).

##### Reverse lookup of policies

Notably, the current ACL subsystem cannot handle reverse lookups at all:
given a path, what policies apply to them?

We need an enhancement to build a [`PathManager`](https://github.com/openbao/openbao/blob/main/sdk/helper/pathmanager/pathmanager.go)
over relevant policies to allow efficient lookup of path->allowing policy.

This could be at a path such as `sys/policies/lookup/acl[/:prefix]`, taking
a `path=...` parameter conforming to existing `PathManager` expectations
(because it is, after all, an OpenBao path which we want to check access to).

Notably, the current implementation is not serializable, so we will want to
handle that so that indices can be persisted to disk (built on update) and
not be stored in memory (as we'll likely have lots of policies and hopefully
relatively few lookups relatively). A LRU cache can be used to store commonly
accessed queries in memory and to provide better locality for fetch.

**Complexity**: moderately complex to be performant
**Impact**: solves a use case that [required the Rails database](https://gitlab.com/gitlab-com/content-sites/handbook/-/merge_requests/7362#note_2021176842).

##### Exists as an operation

OpenBao supports LIST (and, now, LIST-PAGE), which can be used as proxies
for an existence check. However, they have the notable restriction of leaking
names of secrets which the user may not have access to. We would like to
support scoped-list in the future, but in the mean time, we should also
consider a direct existence check, to allow users to make specific queries to
specific paths to check if they exist or not. While theoretically equivalent
to LIST operations given sufficient volume, they'll allow us to efficiently
check (on the client) whether or not hierarchical secrets exist and condition
appropriately.

**Complexity**: Requires some Core knowledge but should be doable.
**Impact**: low: ways to work around it.

##### Size limits

This is required for direct user access, and probably notated elsewhere in
discussions, but is worth calling out: direct user access will require
request size quotas.

**Complexity**: moderate; much plumbing for other types of quotas already exist.
**Impact**: large: greatly improves security posture.

##### Profiles

For many reasons, profiles (server-side execution of multiple requests from a
given input and formatted into a response) are an attractive solution to
multiple client->server requests.

They are described more in this [draft blog post](https://gist.github.com/cipherboy/64583068e076c8b5774d24c571c550f3#file-02-cross-plugin-communication-md).

##### JWT direct profiles

For [user ACLs](#acls-for-users), we would have to provision a group for every
role and user id when the ACL policy is created. This is fine, but requires
several operations to OpenBao. More ideally, we'd create a `policies_claim`
option on the JWT auth method, which allows a JWT issuer to directly specify
ACL policies that the OpenBao token should have post-auth. This would allow us
to significantly prune the groups in OpenBao, decreasing that just to the set
of wildcard environment/branch scopes.

##### External transactions

[Transactional storage](https://github.com/openbao/openbao/issues/296) allows
OpenBao to have internal transactional guarantees. However, etcd exposes an
external (caller-driven) [transaction semantic](https://etcd.io/docs/v3.4/learning/api/#transaction).
We could add a similar API to OpenBao (though, interactive rather than
one-shot) to allow multiple OpenBao requests to be performed transactionally
and conflict if modifications occur.

I started down the route of implementing this earlier, however, it requires
careful changes in Core that likely would conflict with other changes so I
abandoned the approach for the time being. This would make call chaining from
GitLab Rails safer.
