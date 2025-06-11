---
title: "GitLab Duo Workflow"
status: ongoing
creation-date: "2024-05-17"
authors: [ "@DylanGriffith", "@mikolaj_wawrzyniak"]
coach:
approvers: [ ]
owning-stage: "~devops::create"
participating-stages: []
toc_hide: true
---

{{< design-document-header >}}

## Execution Environment

### Executive Summary

The functionality to support GitLab Duo Workflow needs to be able to execute arbitrary code
which effectively means "untrusted" code. This means that they cannot just run
like any other service we deploy and specifically they cannot just run inside
the Workflow service or AI Gateway.

In order to address this issue, the Workflow functionality will be comprised of 2
separate components:

1. The Workflow service, which is a Python service we run in our
   infrastructure. The Workflow service is built on top of
   [LangGraph](https://github.com/langchain-ai/langgraph).
1. The Workflow executor, which is a Go binary that communicates via a long
   running gRPC connection to the Workflow service and executes the arbitrary
   commands. It will be possible for users to run this locally or in CI pipelines.

In our first release we will support 2 execution modes:

1. Local executor: which will run commands and edit files locally in a
   sandboxed Docker container on the developer machine. They will be able to
   see the files being edited live and it will be interactive.
1. CI executor: All non-local use-cases of Workflow (for example:
   issue/epic based workflows) will be triggered by the GitLab UI and will
   create a CI Pipeline to run the Workflow executor.

Our architecture will also support mixed deployments for self-managed such that
some features of Workflow will be available using a cloud-hosted AI
Gateway.

### Detailed plan

We plan on building this feature set with 3 independent components that can be
run in multiple runtimes:

1. The Workflow Web UI. This will be the web UI built into GitLab that manages the
   creation and interaction of all workflows. There may be many interaction
   points in the GitLab application but there should be a central workflow UI
   with reusable components (e.g. Vue components) that could be embedded into
   our editor extensions.
1. The Workflow service. This is a Python-based service we deploy with
   a gRPC API. The only interface to this is the gRPC interface, which is
   called from the Workflow executor. Internally, this will use LangGraph to
   execute the workflows. For reasons why LangGraph was chosen, see [this work item](https://gitlab.com/gitlab-org/gitlab/-/work_items/457958).
   The Workflow service will not have any persisted state but the state of
   running workflows will be kept in memory and periodically checkpointed in
   GitLab. The Workflow service is built [in its own codebase](https://gitlab.com/gitlab-org/duo-workflow/duo-workflow-service/)
   and will have its own deployment but the codebase
   [may be merged with the AI Gateway codebase in the future](https://gitlab.com/gitlab-org/modelops/applied-ml/code-suggestions/ai-assist/-/issues/527).
1. The [Workflow executor](https://gitlab.com/gitlab-org/duo-workflow/duo-workflow-executor).
   This is being written in Go for easy installation
   in development containers. This component will run in CI jobs or on a user's
   local workstation. In the local workstation it will run sandboxed in a
   Docker container with the working directory optionally mounted by the
   user for a live pairing experience. It will only be responsible for opening
   a gRPC connection to the Workflow service and executing the commands it is
   told to.

The following are important constraints of the architecture:

1. All state management will be inside GitLab.
1. Periodically, the Workflow service should checkpoint its state in GitLab.
1. The Workflow service in-memory state can be dropped/lost at any time so
   checkpointing will be the only guaranteed point that can be returned to.
1. If a local Workflow executor drops the connection, the Workflow
   service will checkpoint and shutdown the state as soon as it runs into
   something where it is waiting on the executor.
1. To avoid multiple Workflow service instances running on the
   same workflow, the Workflow service must always acquire a lock with
   GitLab before it starts running. When it suspends, it will release the lock and
   similarly there will be a timeout state if it has not checkpointed in the
   last 60 seconds. GitLab will not accept checkpoints from a timed out run of
   the Workflow service.
1. Each time a Workflow service resumes a workflow, it gets a new ID.
   This ID is sent when checkpointing so that GitLab can drop/ignore zombie
   services running the workflow and inform the zombie service to shutdown.
1. Code is checkpointed by the executor pushing hidden Git refs to the GitLab
   instance. This will be happening on the same frequency as other checkpoints.
1. For local execution, the Workflow executor initiates a workflow directly by
   calling the Workflow service.
1. When a workflow is triggered from the UI, it doesn't require a Workflow
   executor. GitLab can call the Workflow service directly.
1. All API calls from the Workflow service to GitLab that access private data
   or update data will be authenticated on behalf of the user that created the
   workflow. The Workflow service should not need privileged access to GitLab.

CI pipelines have been chosen as the hosted runtime option for the Workflow
executor because it is the only infrastructure we have available today to run
untrusted customer workloads with stability, support, security, abuse
prevention and a billing model. In the short term for early customers we may
rely on the existing compute minutes for CI pipelines but in the long run we
may want to deploy dedicated runners and introduce a billing model specific for
Workflow.

For many development use cases we expect developers may prefer to run the
Workflow executor locally as it can operate on a locally mounted directory and
allow the user to more easily watch changes as they happen.

### GitLab.com architecture

![Workflow Architecture gitlab-com](/images/engineering/architecture/design-documents/duo_workflow/diagrams/duo-workflow-architecture-gitlab-com.png)

1. Initially we focus on running locally and in CI pipelines with all inputs as
   environment variables.
1. State stored in GitLab so it can be accessed from the web UI and through IDE
   extensions.

#### With Local (IDE) execution

```mermaid
sequenceDiagram
   participant user as User
   participant ide as IDE
   participant executor as Workflow executor
   participant gitlab_rails as GitLab Rails
   box AI-gateway service
     participant duo_workflow_service as Workflow service
     participant ai_gateway as AI Gateway
   end
   participant llm_provider as LLM Provider
   user->>ide: trigger workflow from IDE
   ide->>gitlab_rails: Create the workflow
   gitlab_rails->>gitlab_rails: Create JWT for Workflow service
   gitlab_rails->>gitlab_rails: Create ai_workflow scoped OAuth token
   gitlab_rails->>gitlab_rails: Create the workflow
   gitlab_rails->>ide: Return the workflow details and JWT and OAuth tokens
   ide->>executor: start executor with workflow details and JWT and OAuth token
   executor->>+duo_workflow_service: Solve this issue (open grpc connection auth'd with AI Gateway JWT)
   duo_workflow_service->>llm_provider: Ask LLM what to do
   llm_provider->>duo_workflow_service: Run rails new my_new_app
   duo_workflow_service->>executor: execute `rails new my_new_app`
   executor->>duo_workflow_service: result `rails new my_new_app`
   duo_workflow_service->>gitlab_rails: Save checkpoint
   duo_workflow_service->>llm_provider: What's next?
   llm_provider->>duo_workflow_service: You're finished
   duo_workflow_service->>gitlab_rails: Save checkpoint and mark completed
   duo_workflow_service->>gitlab_rails: Revoke ai_workflow scoped OAuth token
   deactivate duo_workflow_service
   gitlab_rails->>user: Workflow done!
```

#### With Remote (CI pipeline) execution

```mermaid
sequenceDiagram
    autonumber
    participant user as User
    participant gitlab_rails as GitLab Rails
    box CI-Runner #LightYellow
        participant executor as Workflow executor
    end
    box AI-gateway service #LightBlue
        participant duo_workflow_service as Workflow service
        participant ai_gateway as AI Gateway
    end
    participant llm_provider as LLM Provider

    note over user,gitlab_rails: User is logged in via web
    user->>gitlab_rails: trigger workflow from Web UI
    gitlab_rails->>gitlab_rails: Create JWT for Workflow service
    gitlab_rails->>gitlab_rails: Create ai_workflow scoped composite identity OAuth token
    gitlab_rails->>gitlab_rails: Create the workflow

    gitlab_rails->>executor: start executor in CI pipeline with workflow details and JWT and composite identity OAuth token

    note over executor,duo_workflow_service: AI Gateway JWT
    executor->>+duo_workflow_service: Solve this issue (open gRPC connection)

    note over duo_workflow_service,llm_provider: API Key (from env)
    duo_workflow_service->>llm_provider: Ask LLM what to do
    llm_provider-->>duo_workflow_service: Run rails new my_new_app

    note over duo_workflow_service,executor: Authenticated gRPC
    duo_workflow_service->>executor: execute `rails new my_new_app`
    executor-->>duo_workflow_service: command result

    note over duo_workflow_service,gitlab_rails: Composite OAuth token
    duo_workflow_service->>gitlab_rails: Save checkpoint

    note over duo_workflow_service,llm_provider: API Key (from env)
    duo_workflow_service->>llm_provider: What's next?
    llm_provider-->>duo_workflow_service: You're finished

    note over duo_workflow_service,gitlab_rails: Composite OAuth token
    duo_workflow_service->>gitlab_rails: Save checkpoint & mark completed
    duo_workflow_service->>gitlab_rails: Revoke Composite OAuth token
    deactivate duo_workflow_service

    note over gitlab_rails,user: No Auth Required
    gitlab_rails->>user: Workflow done!
```

### Self-managed architecture

#### With local Workflow service

When customers are running the Workflow service locally the architecture will be very
similar to GitLab.com. This will also allow them to use whatever customer
models they configure in their Workflow service.

![Workflow Self managed full](/images/engineering/architecture/design-documents/duo_workflow/diagrams/duo-workflow-architecture-self-managed-full.png)

#### With cloud Workflow service

In order to allow self-managed customers to trial and rapidly adopt Duo
Workflow without running all Workflow service components, this architecture will
supported a mixed deployment mode. In this case, we assume that the cloud AI
Gateway will not have access to the customers GitLab instance but we can make
use of the local executor (on the user's machine or in a CI runner) to proxy
all interactions with GitLab.

![Workflow Self managed mixed](/images/engineering/architecture/design-documents/duo_workflow/diagrams/duo-workflow-architecture-self-managed-mixed.png)

#### Running without the executor

As described above there are 2 reasons we need the Workflow executor:

1. We need a sandboxed environment to safely execute arbitrary commands
   generated by the AI
1. We need a path to proxy requests to self-managed GitLab instances that may
   not be visible to our cloud Workflow service

But we will have a subset of use cases for Workflow where these conditions
will not apply. Specifically we expect to have "non-code" workflows (e.g.
review this merge request) where we just need to interact between LLM and
GitLab APIs. And if the customer is using GitLab.com or a self-hosted AI
Gateway that has access to their GitLab instance then we can safely run all of
this inside the Workflow service making API calls to the GitLab instance.

This architecture unlocks a considerable advantage as we expect the cost of
running workloads in CI pipelines is quite high (and indeed wasteful) and the
effort to get a local executor running is also quite high and it may limit the
value for simple non-code workflows if these were a requirement. Additionally
we get quite significant scaling advantages if we never have to create a CI
pipeline to do some of these non-code workflows as starting up a pipeline and
keeping it running for the duration of a workflow is a large overhead.

![Workflow without executor](/images/engineering/architecture/design-documents/duo_workflow/diagrams/duo-workflow-without-executor.png)

We may choose to support this architecture later but it will depend on the
following design decisions:

1. The workflow should know how to call GitLab directly for several API calls
   and especially checkpointing.
1. Proxying to GitLab via the executor should be designed as an optional proxy
   where the Workflow service constructs the full HTTP request, but under
   certain configurations, will choose to pass the HTTP request to the executor
   instead of calling GitLab directly.
1. The Workflow executor is optional for workflows. The workflow should
   only suspend when the workflow depends on an executor and one is not
   present. When the workflow suspends it should know to checkpoint in GitLab
   before shutting down.
1. The Workflow service will need to acquire some kind of "lease" from the
   GitLab instance while it is running to prevent the possibility of 2
   instances of the same workflow running concurrently or to prevent a crashed
   workflow from being indefinitely locked up and cannot be resumed. Leases
   should timeout and API calls to checkpoint (or perform other operations) may
   be rejected if they come from an instance of the workflow with an expired
   lease.

### Data flow

The below diagram shows what happens when the user is triggering workflows from
their IDE using a local executor. The architecture will be similar when
triggering from the GitLab UI using CI pipelines except that GitLab will start
a CI pipeline to create run the Workflow executor and create the workflow.

```mermaid
sequenceDiagram
   participant user as User
   participant ide as IDE
   participant executor as Workflow executor
   participant gitlab_rails as GitLab Rails
   participant duo_workflow_service as Workflow service
   participant llm_provider as LLM Provider
   user->>ide: trigger workflow from IDE
   ide->>executor: start executor
   executor->>+duo_workflow_service: Solve this issue
   duo_workflow_service->>gitlab_rails: Create the workflow
   duo_workflow_service->>llm_provider: Ask LLM what to do
   llm_provider->>duo_workflow_service: Need the file list
   duo_workflow_service->>executor: execute `ls`
   duo_workflow_service->>gitlab_rails: Save checkpoint
   executor->>duo_workflow_service: result `ls`
   duo_workflow_service->>llm_provider: What's next?
   llm_provider->>duo_workflow_service: Here's a patch
   duo_workflow_service->>executor: execute `git apply`
   duo_workflow_service->>gitlab_rails: Save checkpoint
   duo_workflow_service->>executor: execute `poetry run pytest`
   duo_workflow_service->>gitlab_rails: Save checkpoint
   executor->>duo_workflow_service: result `poetry run pytest`
   duo_workflow_service->>llm_provider: fix the tests
   llm_provider->>duo_workflow_service: Here's a patch
   duo_workflow_service->>executor: execute `git apply`
   duo_workflow_service->>gitlab_rails: Save checkpoint
   duo_workflow_service->>executor: execute `poetry run pytest`
   executor->>duo_workflow_service: result `poetry run pytest`
   duo_workflow_service->>executor: Next step?
   executor->>gitlab_rails: Check in & Next step?
   gitlab_rails->>executor: Last step!
   executor->>duo_workflow_service: Done!
   deactivate duo_workflow_service
   gitlab_rails->>user: Workflow done!
```

### CI pipeline architecture

We don't want users to have to configure a specific `.gitlab-ci.yml` in order
to support Workflow. In order to avoid this we'll use the same approach as
[that used by DAST site validations](https://gitlab.com/gitlab-org/gitlab/-/blob/19e0669446f55bd29a8df29174d3b0379b8e22c2/ee/app/services/app_sec/dast/site_validations/runner_service.rb#L11)
which dynamically constructs a pipeline configuration in GitLab and triggers
the pipeline without using any `.gitlab-ci.yml`.

CI pipelines also must be run inside a project. There will be some usecases of
Workflow where there is no appropriate project in which to run the pipeline
(e.g. bootstrapping a new project). For these workflows we will:

1. Initially require the user to have a default Workflow project created. It
   can just be any empty project and we'll automatically run the pipeline there.
1. If this proves to be too much setup we'll automate the creation of a default
   Workflow project for you.
1. If the UX is poor over time we might abstract the user away from the
   existence of the Project altogether and make this an implementation detail.
   This will be considered a last resort because it could be quite a wide
   impacting change to GitLab as projects are a central part of GitLab.

#### Considerations for CI Runners and Infrastructure

1. Our Workflow rollout may involve substantial increases to our CI runner
   usage.
1. Workflow will likely involve running long running CI pipelines that use
   very little CPU. Mostly what they will be doing is communicating back
   and forth with the LLMs and users in a long running gRPC connection.
1. Users will expect very low latency for CI runner startup.
   1. We should determine if there are ways to have preloaded VMs with our
      Docker images running ready to start a pipeline when it a
      workflow is triggered.
1. We likely want a set of CI runners that are just for Workflow. This may
   mean enabling the runners to a subset of customers or just using appropriate
   job labeling/runner matching to only use these runners for Workflow.
1. It might be possible to roll out some Workflow features on our existing
   runner fleets but we believe there will be enough benefits to invest in
   segregating these runners.

### State checkpointing

The Workflow state will be persisted in GitLab-Rails as the Workflow
service works. There are 2 components to state:

1. The State object being managed by Langgraph. This includes all prompt history
   between user and agents and any other metadata created by the LangGraph
   graph.
1. The working directory where the agent is writing code.
1. We will have data retention limits on all state. We will use PostgreSQL
   partitioning to drop old workflow data after some time and we will also
   drop old Git refs after some time.

We will be persisting the LangGraph state object using APIs in GitLab to
persist this state to PostgreSQL as it goes. The API will use similar LangGraph
conventions to identify all checkpoints with a `thread_ts` as implemented in
the POC <https://gitlab.com/gitlab-org/gitlab/-/merge_requests/153551>.

For the current working directory which contains the code the agent has written
so far we will store this by pushing hidden Git refs to GitLab for the checkpoint. Each
checkpoint will have an associated ref and a checkpoint naming convention (or
something stored in PostgreSQL) will allow us to identify the appropriate Git ref
for the state checkpoint.

Storing in Git has the advantage that we don't need to build any new API for
storing artifacts and it's very easy for the user to access the code by just
checking out that SHA. It also has huge storage savings where a workflow is
working on an existing large project. Ultimately we expect code changes end up
being pushed to Git anyway so this is the simplest solution.

Some workflows do not have an existing project (e.g. bootstrapping a
project). Even those workflows will need to be triggered from some project (as
explained in the section about CI pipelines). As such we can use the workflow
project as a temporary repository to store the snapshots of code generated by
the workflow.

Consideration should also be made to cleanup Git refs over time after some
workflow expiration period.

### Authentication

GitLab Duo Workflow requires several authentication flows.

In this section, each connection that requires authentication is listed and the
authentication mechanism is discussed.

![Workflow Auth](/images/engineering/architecture/design-documents/duo_workflow/diagrams/duo_workflow_auth.png)

#### Local Workflow executor -> Workflow service

When a workflow starts, the Workflow executor must connect to the
Workflow service.

To authenticate this connection:

1. The IDE will use the OAuth token of Personal Access Token (PAT) that the user
   generated while setting up the GitLab editor extension.
1. The IDE uses that token to authenticate a request to a GitLab Rails API
   endpoint.
1. When the GitLab Rails API receives this request, it loads its
   instance-scoped JWT (synced daily from CustomersDot) and contacts the AI
   gateway to swap this instance token for the above-mentioned user-scoped token
   (also cryptographically signed).
1. GitLab Rails returns the user-scoped JWT to the IDE.
1. The IDE passes on this JWT to the local Workflow executor component.
1. The Workflow executor uses this JWT to authenticate the Workflow
   service gRPC connection.

This flow mimics the
[token flow that allows IDEs to connect direct to the AI Gateway](https://gitlab.com/groups/gitlab-org/-/epics/13252).

#### CI Workflow executor -> Workflow service

When a workflow is executed by a CI runner, the Workflow executor must
connect to the Workflow service.

A CI pipeline is created by GitLab, so there is no need to query a GitLab Rails
API endpoint to obtain a short-lived user- and system-scoped JWT. Instead, in
the process of creating the CI pipeline, GitLab Rails will:

1. Generate the user-scoped JWT.
1. Inject the JWT as an environment variable (for example: `DUO_WORKFLOW_TOKEN`)
   in the CI pipeline.
1. The Workflow executor running inside the CI job uses this environment
   variable value to authenticate the Workflow service gRPC connection.

#### Workflow service -> GitLab Rails API

Reasons that the Workflow service must be able to authenticate requests to
the GitLab Rails API:

1. The Workflow service will need to periodically make requests to GitLab Rails
   to sync workflow state. This means that the Workflow service must be able
   to authenticate these requests.
1. Workflow may need to make other GitLab Rails API queries to gather
   context. For example, a workflow for "solve issue with code" would
   require an API request to retrieve the issue content.
1. The end state of a workflow may take the form of a generated artifact
   (for example, Git commit or pull request) on the GitLab platform. To
   generate this artifact, the Workflow service must be able to make API
   requests to GitLab Rails.

Requirements for the token used to authenticate requests from the Workflow
service to the GitLab Rails API:

1. Any artifacts created by Workflow must be auditable in order
   to maintain transparency about AI-generated activities on the GitLab platform.
1. The token's access level must match the access level of the user who
   initiated the Workflow to ensure that there is no privilege escalation.
1. We must have the ability to block read/write for all resources that belong to
   instances/projects/groups with `duo_features_enabled` set to false.
1. Token must be valid for as long as it takes an agent to execute or be
   refreshable by the Workflow service. Workflow execution may take several hours.

The JWT that the Workflow executor uses to authenticate to the Workflow
service could potentially be adapted to also work for this use-case but has some problems:

1. Need to update GitLab Rails to accept this type of token for API authentication.
1. JWTs are not revocable; what if we need to cut off an agent's access?
1. Need to build token rotation. How would the Workflow service authenticate an API
   request to generate a new token if the old JWT is already expired?

For these reasons, OAuth is a better protocol for this use-case. OAuth tokens:

1. Are only valid for 2 hours.
1. Can be revoked.
1. Have a built-in refresh flow.
1. Are an established authentication pattern for federating access between
   services.

##### Workflow service OAuth v1

To use OAuth, we will:

1. Create a new token scope called `ai_workflows`
   ([related issue](https://gitlab.com/gitlab-org/gitlab/-/issues/467160)).
1. When the IDE requests the Workflow service User JWT from GitLab Rails, we
   will also generate and return an OAuth token with the `ai_workflows` scope.
   This OAuth token belongs to the user.
1. The Workflow executor will send that OAuth token, along with the `base_url`
   of the GitLab Rails instance, as metadata when the Workflow service when
   the gRPC connection is opened.
1. The Workflow service will use the OAuth token for any GitLab Rails API
   Requests to read or write data for a Workflow.

##### Workflow service OAuth v2

As of October 18, 2024, the OAuth v1 flow has been implemented for Workflow.

The next iteration of Workflow OAuth (v2) will also use an OAuth token to
authenticate requests to the GitLab API. But, instead of using a regular OAuth
token, we will use a composite OAuth token. Composite tokens is a new concept
that will require [adding dynamic scopes to Doorkeeper](https://github.com/doorkeeper-gem/doorkeeper/pull/1739),
the library we use for OAuth.

The composite OAuth token will belong to a [service account](https://docs.gitlab.com/ee/user/profile/service_accounts.html)
but will be tied to a human user. As a result, the output of Workflow will
be attributed to a machine user but the access of the token will be the
intersection of what the machine user's permissions and what the human user's
permissions allow.

```mermaid
graph TB
    A[Action Request] --> B{Human User<br/>Has Permission?}
    B -->|No| C[["Permission Denied"]]
    B -->|Yes| D{Machine User<br/>Has Permission?}
    D -->|No| E[["Permission Denied"]]
    D -->|Yes| F[["Action Permitted"]]
```

To accomplish this, we will:

- Create a service account for the Workflow AI agent with its own distinct
  identity.
  - For all GitLab instances (including GitLab.com): there will be one service
    account per instance.
- Generate a new GitLab OAuth application that accepts both the `ai_workflows` and
  `user:*` scopes (latter scope is a "dynamic scope," which is what makes
  composite identity tokens possible).
- Generate an OAuth access token for the new OAuth application and service account user.
  - In this scenario, the OAuth client and server are both GitLab. The request to
    authenticate comes in from either the IDE or GitLab. The IDE already has a
    token for the user and GitLab exchanges that token for a service account
    token.
  - Because GitLab is both the client and the server, there is no OAuth consent
    screen shown to the user during this flow. A group owner or instance
    admin will enable Workflow by setting up a Workflow service account. This is
    effectively the same thing as clicking "Authorize" on the consent screen which
    would authorize the 3rd-party app to use the service account.
- The OAuth access token will have the `ai_workflows` scope to narrow down the
  access permissions of the AI agent.
- The OAuth access token we will create for the AI Agent will have a human user scope
  (`user:123` using the user id).

The authentication sequence for OAuth v2 identical to OAuth v1, the only difference is that the
generated OAuth token is a composite token rather than a regular user OAuth
token:

```mermaid
sequenceDiagram
    participant IDE
    participant LSP
    participant DWE as Workflow executor (local)
    participant DWS as Workflow service
    participant GR as GitLab Rails (.com or SM)
    participant LLMs

    IDE->>GR: API Request to return Workflow service User JWT (UJWT) and Service Account OAuth composite token with `ai_workflows` scope and dynamic user scope. Authenticated with: PAT or OAuth token used to authenticate GitLab Editor Extension.
    GR->>DWS: API request to generate UJWT. Authenticated with: Instance JWT (IJWT)
    IDE->>LSP: pass UJWT, OAuth token, and other metadata. Authenticated with: n/a, installed locally,
    LSP->>DWE: pass UJWT, OAuth token, and other metadata. Authenticated with: n/a, installed locally.
    DWE->>DWS: grpc connection. Pass OAuth token and other metadata to be used for API requests to GitLab Rails. Authenticted with: UJWT in header.
    DWS->>LLMs: Authenticated with: API keys from environment
    DWS->>GR: API requests to create the workflow, save checkpoints, and perform any other API requests required by the Workflow. Authenticate with: Service Account OAuth composite token with `ai_workflows` scope and dynamic user scope.
```

For more details, see [Issue 480577](https://gitlab.com/gitlab-org/gitlab/-/issues/480577).

##### Workflow service OAuth v3

The `ai_workflows` scope was added to ensure narrow token abilities.

There are 2 primary problems with the `ai_workflows` static scope approach:

- Not every Workflow will need access to the same API endpoints. By using the
  same scope for every Workflow, we are providing more access than is necessary.
  This violates the [principle of least privilege](https://en.wikipedia.org/wiki/Principle_of_least_privilege).
- Each GitLab API endpoint must be manually allow-listed for this scope.
  [Example](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/162671).
  This means that code changes are required to provide new functionality to
  Workflow, which is time intensive. This also means that new Workflow
  functionality may not be available to older GitLab versions where the scope has
  not yet been allow-listed for the necesssary endpoints.

The solution to both of these problems is to provide dynamic scopes to OAuth
access tokens. This means that the scope itself will determine which endpoints the token can
access rather than relying on `ai_workflows` or any other static token scope.

Advanced token scopes are being [added to personal access tokens](https://gitlab.com/gitlab-org/gitlab/-/issues/368904),
[secure job tokens](https://gitlab.com/groups/gitlab-org/-/epics/15234), and are
what will make [routable tokens](https://gitlab.com/gitlab-com/content-sites/handbook/-/merge_requests/7856) possible.

Dynamic token scopes are also being added to OAuth tokens in order to support
composite identity (OAuth v2, described above). The plan for enabling targeted API
access using dynamic token scopes is still in progress. The discussion on this
topic is in [Issue 468370](https://gitlab.com/gitlab-org/gitlab/-/issues/468370).

### Options we've considered and pros/cons

#### Delegate only unsafe execution to local/CI pipelines

This was the option we chose. It attempts to keep as much of the functionality
as possible in services we run while delegating the unsafe execution to the
Workflow executor which can run locally or in CI pipelines.

**Pros**:

1. Running the infrastructure ourselves gives us more control over the versions
   being rolled out.
1. There is less dependencies the user needs to install for local usage.
1. It offers a rapid onboarding experience for self-managed customers to try
   Workflow without deploying any new GitLab components.

**Cons**

1. We need to deploy and maintain new infrastructure which has different
   scaling characteristics to other services we run duo to long running
   execution.

#### Run it locally

**Pros**:

1. This keeps developers in their local environment where most of them work.
1. Compute is absorbed by the local developer so they don't have to worry about
   being billed per minute.
1. Low latency for user interaction especially where the user needs to
   review/edit code while the agent is working.

**Cons**:

1. There are more risks running it locally unless you have an isolated
   development environment as commands have full access to your computer. This
   can be mitigated by UX that limits what commands the agent can run without
   user confirmation.
1. This approach will require some local developer setup and may not be suited
   to tasks that users are expecting to kick off from the web UI (e.g.
   issue/epic planning).

#### CI pipelines (on CI runners)

See <https://gitlab.com/gitlab-org/gitlab/-/issues/457959> for a POC and investigation.

**Pros**:

1. CI pipelines are the only pre-configured infrastructure we have that can run untrusted workflows.
1. We have an established billing model for CI minutes.

**Cons**:

1. CI pipelines are slow to start up and this might mean that iteration and incremental AI development might be slow if the pipelines need to be restarted while timing out waiting for user input.
1. CI minutes will need to be consumed while the agent is awaiting for user input. This will likely require a timeout mechanism and as such if the user returns we'll need to restart a new pipeline when they give input.
1. CI pipelines run in a difficult to access environment (ie. you cannot SSH it or introspect it live) and as such it may make it difficult for users to interact with code that is being built out live in front of them without.
1. CI pipelines require there to be some project to run in. This is not likely something we can overcome but we may be able to simplify the setup process by automatically creating you a "workflow project" for your workflow pipelines to run in.
1. When we implement non-code workflows (e.g. reviewing MRs) there is no need for an isolated compute environment but we'll still be forcing customers to use compute minutes. We've seen this is not a good experience in other cases like X-Ray reports.

#### GitLab workspaces (remote development)

See <https://gitlab.com/gitlab-org/gitlab/-/issues/458339> for a POC and investigation.

**Pros**:

1. This has the fastest iteration cycle as the agent is working locally in your development environment and can interact with you and you can even see and edit the same files live as them.
1. Customers can run it on their own infrastructure and this gives them control over efficient resource usage.

**Cons**:

1. Today we only support customers bringing their own infrastructure (K8s cluster) and this means that the barrier to getting started is to bring your own K8s cluster and this is a fairly significant effort.
1. If we wanted to build out infrastructure on GitLab.com to save customers having to bring their own K8s cluster this would be a fairly large effort from a security and infrastructure perspective. It's possible but to deal with all the complexities of security, abuse and billing would require many teams involvement in both initial development and sustained maintenance.

## Security

### Threat modeling

See <https://gitlab.com/gitlab-com/gl-security/product-security/appsec/threat-models/-/issues/46>.

### Security considerations for local execution

Local execution presents the highest value opportunity for developers but also
comes with the greatest risk that a bug or mistake from an LLM could lead to
causing significant harm to a user's local development environment or
compromise confidential information.

Some examples of risks:

1. An AI that can make honest but significant mistakes.
1. An AI that might sometimes be adversarial.
1. The AI gateway serving the LLM responses may be compromised which would then
   allow shell access to all users of this tool.

### Sandboxing Workflow executor

One proposal here to mitigate risks would be to use some form of sandboxing
where the Workflow executor is only able to run inside of an unprivileged
Docker container. Such a solution would need to:

1. Mount the local working directory into the container so it is still editing
   the files the user is working on in the host.
1. Install all development dependencies the user or agent would need to run the
   application and tests.

The above option may also make use of Dev Containers.

### User confirmation for commands

Another option for limiting the risk is to require the user to confirm every
command the agent executes before it runs the command. We will likely be
implementing this as an option anyway but given the desire for efficient
development of larger workflows it might limit the efficiency of the tool if it
needs to execute a lot of commands to finish a task.

We may also consider a hybrid approach where there a set of user-defined
allowlisted commands (e.g. `ls` and `cat`) which allow the agent to read and
learn about a project without the user needing to confirm. This approach may
not solve all needs though where the user may want to allowlist commands like
`rspec` which then effectively still allow for arbitrary code execution as the
agent can put whatever they want in the spec file.

## Workflow UI

The Workflow UI will need to be available at least in the following places:

1. In GitLab Rails web UI
1. In our editor extensions

The fact that we'll need multiple UIs and also as described above we have
multiple execution environments for Workflow executor have led to the
following decisions.

### How do we package and run the local web UI

We will build the majority of data access related to our local IDE UI into the
[GitLab Language Server](https://gitlab.com/gitlab-org/editor-extensions/gitlab-lsp)
to maximize re-use across all our editor extensions. We will also employ a mix
of webviews rendered in the IDE and served by the LSP as well as native IDE UI
elements. Where it doesn't considerably limit our user experience we'll opt to
build the interface into a web page served from the LSP and then rendered in
the IDE as a web view because this again maximises re-use across all our editor
extensions.

### How does the web UI reflect the current state live

The Workflow service regularly saves its state to GitLab
Rails. The UI receives real-time updates through GraphQL
subscriptions, automatically refreshing as new data arrives.

Given that the user may be running the Workflow executor locally which may
be seeing some of the state as it happens it might be reasonable to want to
just live render the in-memory state of the running workflow process. We may
choose this option deliberately for latency reasons, but we need to be careful
to architect the frontend and Workflow executor as completely decoupled
because they will not always be running together. For example users may trigger
a workflow locally which runs in GitLab CI or they may be using the web UI to
interact with and re-run a workflow that was initiated locally.

As such we will generally prefer not to have direct interaction between the UI
and executor, but instead all communication should be happening via GitLab. Any
exceptions to this might be considered case by case, but we'll need clear API
boundaries to allow the functionality to easily be changed to consume from
GitLab for the reasons described.

### States

UI states are going to be driven by the server to ensure consistency and no race condition between UI state changes and API responses. This will simplify keeping data and action in sync. All possible workflow states can be seen in the [WorflowStatusEnum](https://gitlab.com/gitlab-org/duo-workflow/duo-workflow-service/-/blob/main/duo_workflow_service/entities/state.py?ref_type=heads#L23).

#### New

The first UI state is when the user needs to submit a goal. This is only a client-side concern and does not translate to any server-side state.

#### Not started / created

After starting a workflow with a user-defined goal, a workflow is created which translates to LangGraph creating an empty checkpoint. On the API side, the workflow will be created with the `NOT_STARTED` state, which means that a goal has been sent, but no plan has been returned from LangGraph yet. This is the point where the client needs to start subscribing to `DuoWorkflowEvent`.

#### Planning

Once in planning, we need to start streaming Workflow responses back to the client. We are getting the `checkpoint` field from the `DuoWorkflowEvent` subscription which is a JsonString that represents LangGraph raw response. For the first iteration, the client will rely solely on this JSON string to get all new data and drive the UI, which means that we need to parse the JSON and account for possible parsing errors. It also means having a very tight coupling between the UI and LangGraph, so this parsing should be abstracted away in its own functionality so that it can be easily removed.

**Important:** For the first iteration, there is no way to stop or pause a Workflow and this mean that once the goal has been submitted, we will not render any button or UI interactions. The UI will "move on its own" where for example, once the `PLANNING` phase is over, we will automatically open the `EXECUTING` panel and start rendering the right information. Users do not need to confirm or interact and the Workflow should reach its final state on its own.

#### Executing

What should drive the progress bar is the subscription to `workflowEventsUpdated` and getting checkpoints streamed back to the client so that we know what progress was made in the execution and what step is currently being executed. This is where the user watches steps and progress being made.

#### Completed

Once all of the events are done streaming, the API should return the `COMPLETED` state and we can show the finished screen.

#### Future iterations

As of writing this documentation, there are no `PENDING` state as this is currently not planned for the first version of the Workflow, but it's worth keeping in mind for future iterations. This mean that the user cannot pause execution and/or we cannot have users interact during execution. The Workflow will eventually be interactable and these interactions should be added to this documentation.

### Checkpoints

Checkpoints are built on the server-side and serve as a way to resume execution from certain points. There are some interactions between checkpoints and the UI that are foundational to the experience. Checkpoint should:

- Be streamed to the client for real time update.
- Contain the current state.
- Contain the current step being executed.

#### Ability to load workflow from checkpoints

If a Workflow cannot reach the `COMPLETED` state before it stops executing, then the user should have the ability to start again only from the latest checkpoint. From a UI perspective, this mean that we need to support multiple workflow because otherwise we cannot know which workflow currently exists. This should be doable by fetching `duoWorkflowWorkflows` and rendering all existing workflows. For the IDEs, this mean rendering existing workflows in the sidebar.

Then when selecting a workflow, fetch information about the current workflow with **how to fetch an existing workflow**. Here is what should happen based on states:

- `NONE`: The user will not have any state preserved, meaning that any goal typed out, but not submitted will not be kept.
- `NOT STARTED`: resends the initial request to generate a plan and shows the loading state.
- `PLANNING`: loading the workflow should show existing proposed plan.
- `EXECUTING`: Resume from the right step. In future iterations. the Workflow should probably be "stopped/paused" and then the user could resume. For this added functionality, we need the `PENDING` state to exists.
- `COMPLETED`: Show the result of the workflow after its completion.

## Workflow agent's tools

Workflow **agents** are, in a simplified view, a pair of: **prompt** and **LLM**.
By this definition, agents on their own are not able to interact with the outside world,
which significantly limits the scope of work that can be automated. To overcome this limitation, agents are being equipped with **tools**.

Tools are functions that agents can invoke using the [function calling](https://docs.anthropic.com/en/docs/build-with-claude/tool-use) LLM feature.
These functions perform different actions on behalf of the agent. For example, an agent might be equipped with a tool (function)
that executes bash commands like `ls` or `cat` and returns the result of those bash commands back to the agent.

The breadth of the tool set available to **agents** defines the scope of work that can be automated. Therefore, to
set up the Workflow feature for success, it will be required to deliver a broad and exhaustive tool set.

Foreseen tools include:

1. Tools to execute bash commands via the Workflow executor.
1. Tools to manipulate files (including reading and writing to files).
1. Tools to manipulate Git VCS.
1. Tools to integrate with the [GitLab HTTP API](https://docs.gitlab.com/ee/api/api_resources.html).

The fact that the Workflow service is going to require Git and GitLab API tools entails that the **Workflow service
must have the ability to establish an SSH connection and make HTTP requests to the GitLab instance.** This ability can be granted directly to the Workflow service or can be provided via the Workflow executor if a direct connection between the Workflow service and a GitLab instance is not possible due to a firewall or network partition.

## Milestones

1. All the components implemented and communicating correctly with only a
   trivial workflow implemented.
1. Checkpointing code as well as LangGraph state.
1. Workflow locking in GitLab to ensure only 1 concurrent instance of a
   workflow.
1. Add more workflows and tools.
1. Ability to resume a workflow.

## POC - Demos

1. [POC: Solve issue (internal only)](https://www.youtube.com/watch?v=n1mpFirme4o)
1. [POC: Workflow in Workspaces (internal only)](https://youtu.be/x7AxYwiQayg)
1. [POC: Autograph using Docker executor (internal only)](https://www.youtube.com/watch?v=V-Mw6TXOkKI)
1. [POC: Workflows in CI pipelines with timeout and restart (internal only)](https://youtu.be/v8WWZuAGXMU)
