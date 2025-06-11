---
title: "Workspaces Architecture for Kubernetes setup"
---

## Overview

Workspaces is delivered as a module(`remote_development`) in the
[GitLab agentk for Kubernetes](https://docs.gitlab.com/user/clusters/agent/index.html) project.
The overall goal of this architecture is to ensure that the **actual state** of all
workspaces running in the Kubernetes clusters is reconciled with the **desired state** of the
workspaces as set by the user.

This is accomplished as follows:

1. The desired state of the workspaces is obtained from user actions in the GitLab UI or API and persisted in the Rails database.
1. There is a reconciliation loop between the agentk and Rails, which:
   - Retrieves the actual state of the workspaces from the Kubernetes clusters through the agentk and sends it to Rails to be persisted.
   - Rails compares the actual state with the desired state and responds with actions to bring the actual state in line with the desired state for all workspaces.

## System design

### User actions to create/update/delete a workspace

```plantuml
@startuml

rectangle "GitLab" {
  rectangle "Nginx/HAProxy" as ReverseProxy
  rectangle "Rails"
  rectangle "Postgres"
}

actor "User"
rectangle "Browser"

User --> Browser : "1. Browse GitLab"
Browser --> ReverseProxy : "2: Resolve traffic"
ReverseProxy --> Rails : "3: Forward\ndecrypted\ntraffic"
Rails --> Postgres : "4: Persist data for workspace"
@enduml
```

### GitLab Agent for Kubernetes' reconciliation with Rails

```plantuml
@startuml
rectangle "Kubernetes" {
  rectangle "GitLab Agent for Kubernetes" as AgentK
  rectangle "Workspace 1" as Workspace1
  rectangle "Workspace 2" as Workspace2
  rectangle "Workspace n" as WorkspaceN
}

rectangle "GitLab" {
  rectangle "Rails"
  rectangle "Postgres"
  rectangle "GitLab Agent Server(KAS)" as KAS
}

AgentK --> KAS : "1: Initiate reconciliation loop"
KAS --> Rails : "2: Proxy the request\nfrom GitLab Agent\nfor Kubernetes"
Rails --> Postgres : "3: Fetch workspaces\ndata to be sent to\nGitLab Agent for Kubernetes"
Rails --> KAS : "4: Respond with\nworkspaces Kubernetes\nconfig"
KAS --> AgentK : "5: Proxy the response\nfrom Rails"
AgentK ..> Workspace1 : "6.1: Applies kubernetes resources\nfor workspace 1"
AgentK ..> Workspace2 : "6.2: Applies kubernetes resources\nfor workspace 2"
AgentK ..> WorkspaceN : "6.3: Applies kubernetes resources\nfor workspace N"

@enduml
```

### User accessing the workspace

#### With GitLab Workspaces Proxy

```plantuml
@startuml
rectangle "Kubernetes" {
  rectangle "Ingress Controller" as IngressController
  rectangle "GitLab Workspaces Proxy" as GitLabWorkspacesProxy
  rectangle "Workspace 1" as Workspace1
  rectangle "Workspace 2" as Workspace2
  rectangle "Workspace n" as WorkspaceN

  note right of IngressController
    Customers can choose
    an ingress controller
    of their choice
  end note
}

rectangle "GitLab" {
  rectangle "Rails"
}

actor "User"
rectangle "Browser"
rectangle "Terminal"
rectangle "L7 Load Balancer" as L7LoadBalancer
rectangle "L4 Load Balancer" as L4LoadBalancer

User -> Browser: "1.1: Browser workspace URL"
User -> Terminal: "1.1: SSH into workspace"

Browser --> L7LoadBalancer : "2.1: Resolve traffic"
Terminal --> L4LoadBalancer : "2.2: Resolve traffic"

L7LoadBalancer --> IngressController: "3.1.1: Forward\nencrypted\ntraffic"
IngressController --> GitLabWorkspacesProxy : "3.1.2: Decrypt\ntraffic"
L4LoadBalancer --> GitLabWorkspacesProxy : "3.2: Forward\nTCP traffic"

GitLabWorkspacesProxy -> Rails : "4: Authenticate and authorize\nthe user accessing the workspace"

GitLabWorkspacesProxy --> Workspace1 : "5.1. Forward traffic\nfor workspace 1"
GitLabWorkspacesProxy ..> Workspace2 : "5.2. Forward traffic\nfor workspace 2"
GitLabWorkspacesProxy ..> WorkspaceN : "5.3. Forward traffic\nfor workspace N"

@enduml
```

#### With GitLab Agent for Workspaces(agentw)

NOTE: The below diagram only reflects the HTTP traffic flow. SSH traffic flow needs investigation and will depend on https://gitlab.com/groups/gitlab-org/-/epics/13984 .

```plantuml
@startuml

rectangle "GitLab" {
  rectangle "Nginx/HAProxy" as ReverseProxy
  rectangle "Rails"
  rectangle "Kubernetes\nAgent\nServer\n(KAS)" as KAS
}

actor "User"
rectangle "Browser"
rectangle "Cloudflare"
rectangle "Workspace Agent\n(agentw)" as AgentW

note as NoteForCloudflareAntiAbuse
Cloudflare will be used
on .com to provide
anti-abuse features.
Certificate used for
re-encryption is available
with Nginx/HAProxy for
decryption.
end note

NoteForCloudflareAntiAbuse .right. Cloudflare

AgentW --> KAS : "1: Start\ngRPC\ntunnel"

User -right-> Browser : "2: Open\nworkspace\nURL"
Browser --> Cloudflare : "3: Resolve traffic"
Cloudflare --> Cloudflare : "4: Decrypt traffic\nand encrypt it back"
Cloudflare --> ReverseProxy : "5: Forward\ntraffic"
ReverseProxy --> ReverseProxy : "6: Decrypt\ntraffic"
ReverseProxy --> KAS : "7: Forward\ntraffic"
KAS -left-> Rails : "8: Authenticate\nand\nauthorize\ntraffic"
Rails --> KAS : "9: Response\nfor\nauthentication\nand\nauthorization"
KAS --> AgentW : "10: Forward\ntraffic\nusing\nreverse\ngRPC\ntunnel"

@enduml
```

## GitLab Agent for Kubernetes topology

- The Kubernetes API is not shown in this diagram, but it is assumed that it is managing the workspaces through the agentk.
- The numbers of components in each Kubernetes cluster are arbitrary.

```plantuml
@startuml

title
  Workspaces with GitLab agentk for Kubernetes topology
end title

rectangle "GitLab" as gitlab {
  rectangle "kas deployment" as kas_deployment {
      collections kas1..kas8
  }
  rectangle rails
  database postgres

  kas_deployment - rails
  rails -left- postgres
}

rectangle "Kubernetes cluster 1" as kubernetes1 {
  rectangle "agentk A workspaces" as agentk_a_workspaces {
    collections workspace2..workspace8
    rectangle workspace1
  }

  rectangle "agentk B workspaces" as agentk_b..agentk_b_8_workspaces {
    collections workspace10..workspace16
    rectangle workspace9
  }

  rectangle "agentk A deployment" as agentk_a_deployment {
    rectangle agentk_a_1
  }

  rectangle "agentk B deployment" as agentk_b_deployment {
    collections agentk_b_1..agentk_b_8
  }

  agentk_a_1 - agentk_a_workspaces
  agentk_b_1..agentk_b_8 - agentk_b..agentk_b_8_workspaces
}

rectangle "Kubernetes cluster 2" as kubernetes2 {
  rectangle "agentk C workspaces" as agentk_c_workspaces {
    collections workspace18..workspace24
    rectangle workspace17
  }

  rectangle "agentk C deployment" as agentk_c_deployment {
    rectangle agentk_c_1
  }

  agentk_c_1 -down- agentk_c_workspaces
}


cloud cloud

cloud - kas1..kas8
cloud - agentk_a_1
cloud - agentk_b_1..agentk_b_8
cloud - agentk_c_1


'the following hidden line is a hack to get the diagram to render correctly
agentk_a_1 -[hidden]- agentk_b_1..agentk_b_8
gitlab -[hidden]d- kubernetes2

@enduml
```

## High-level overview of the communication between Rails and the agentk

```plantuml
@startuml
!pragma teoz true

title
  High level overview of the communication between rails and agentk
end title

box GitLab #Beige
participant rails order 20
box kas #Bisque
participant "kas" as kas order 40
end box
end box

box Kubernetes cluster #Beige
box agentk #Bisque
participant "agentk remote_development\nmodule" as agentk_rd_mod order 50
end box
participant kubernetes order 60
end box

loop forever
  agentk_rd_mod -> kubernetes: Subscribe to Kubernetes for\nworkspace changes associated with the agentk
  activate agentk_rd_mod

  autoactivate on
  agentk_rd_mod -> kas: POST request with\nupdated workspace information
  note right
    Any updated workspace information from
    Kubernetes is pushed with next reconciliation.
  end note
  kas -> rails: proxy POST request from agentk to rails

  return Respond with all workspaces to be created/updated/terminated\nalong with an acknowledgement that all information sent by\nagentk have been persisted into the database successfully
  return proxy workspace information to agentk
  autoactivate off

  agentk_rd_mod -> kubernetes: Apply any received workspace information to kubernetes
  deactivate agentk_rd_mod
end loop

@enduml
```

## Types of messages between Rails and the agentk

The agentk can send different types of messages to Rails to capture different information. Depending on what type of message the agentk sends, Rails will respond accordingly.

Different types of messages are:

- `reconcile` - Messages sent to Rails to persist the current state of the workspaces. There are two types of updates specified by the `update_type` field with the following possible values: `full` and `partial`. The payload schema remains the same for both update types.
  - `full`
    - Actions performed by the agentk:
      - Send the current state of all the workspaces in the Kubernetes cluster managed by the agentk.
      - To keep things consistent between the agentk and Rails, the agentk will send this message every time agentk undergoes a full reconciliation cycle that occurs
        - when an agentk starts or restarts
        - after a leader-election
        - periodically, as set using the full reconciliation interval configuration (default: once every hour)
        - whenever the agentk configuration is updated
    - Actions performed by Rails:
      - Update Postgres with the current state and respond with all the workspaces managed by the agentk and their last resource version that Rails has persisted in Postgres.
      - Returning the persisted resource version back to the agentk gives it a confirmation that the updates for that workspace have been successfully processed on the Rails end.
      - This persisted resource version will also help with sending only the latest workspaces changes from the agentk to Rails for `reconcile` message with `partial` update type.
  - `partial`
    - Actions performed by the agentk:
      - Send the latest workspace changes to Rails that are not yet persisted in Postgres. This persisted resource version will help with sending only the latest workspaces changes from the agentk to Rails.
    - Actions performed by Rails:
      - Update Postgres with the current state and respond with the workspaces to be created/updated/deleted in the Kubernetes cluster and their last resource version that Rails has persisted in Postgres.
      - The workspaces to be created/updated/deleted are roughly calculated by using the filter `desired state updated at >= agentk info reported at`.
      - Returning the persisted resource version back to the agentk gives it a confirmation that the updates for that workspace have been successfully processed on the Rails end.

## Event-driven polling vs full or partial reconciliation

It was initially considered desirable to be able to tell the agentk to not wait for the next reconciliation loop but instead poll immediately. This would grant the following benefits:

1. This would grant the ability to trigger a full reconciliation on demand that would allow on-demand recovery/resetting of module state in the agentk.
1. Apart from making the architecture more event-driven and real-time it would also help to increase the interval between reconciliation polls, thus reducing the load on the infrastructure.

However, as the prospective solutions were evaluated, it was concluded that there are very few/rare cases that would merit this capability, especially given the complexity of the viable options. An eventual reconciliation of state would suffice for most cases and it could be simply achieved through full reconciliation that is carried out periodically (with a longer interval as compared to partial reconciliation).

You can read more in this [issue](https://gitlab.com/gitlab-org/gitlab/-/issues/387090) and [conclusion comment](https://gitlab.com/gitlab-org/remote-development/gitlab-remote-development-docs/-/merge_requests/13#note_1282495106)

## Workspace states

- `CreationRequested` - Initial state of a Workspace; Creation requested by user but hasn't yet been acted on
- `Starting` - In the process of being ready for use
- `Running` - Ready for use
- `Stopping` - In the process of scaling down
- `Stopped` - Persistent storage is still available but workspace has been scaled down
- `Failed` - Kubernetes resources have been applied by `agentk` but are not ready due to various reasons (for example, crashing container)
- `Error` - Kubernetes resources failed to get applied by `agentk`
- `RestartRequested` - User has requested a restart of the workspace but the restart has not yet successfully happened
- `Terminating` - User has requested the termination of the workspace and the action has been initiated but not yet completed.
- `Terminated` - Persistent storage has been deleted and the workspace has been scaled down
- `Unknown` - Not able to understand the actual state of the workspace

### Possible `actual_state` values

The `actual_state` values are determined from the `status` attribute in the Kubernetes deployment changes, which the agentk listens to and sends to Rails.

The following diagram represents the typical flow of the `actual_state` values for a `Workspace` record based on the
`status` values received from the agentk. The `status` is parsed to derive the `actual_state` of the workspace based on different conditions.

However, any of these states can be skipped if there have been any
transitional `status` updates that were not received from the agentk for some reason (a quick transition, a
failure to send the event, etc).

```plantuml
[*] --> CreationRequested
CreationRequested : Initial state before\nworkspace creation\nrequest is sent\nto kubernetes
CreationRequested -right-> Starting : status=Starting
CreationRequested -right-> Error : Could not create\nworkspace

Starting : Workspace config is being\napplied to kubernetes
Starting -right-> Running : status=Running
Starting -down-> Failed : status=Failed\n(container crashing)

Running : Workspace is running
Running -down-> Stopping : status=Stopping
Running -down-> Failed : status=Failed\n(container crashing)
Running -down-> Terminated : status=Terminated
Running -right-> Error : Could not\nstop/terminate\nworkspace

Stopping : Workspace is stopping
Stopping -down-> Stopped : status=Stopped
Stopping -left-> Failed : status=Failed\n(could not\nunmount volume\nand stop workspace)

Stopped : Workspace is Stopped\nby user request
Stopped -left-> Failed : status=Failed\n(could not\nunmount volume\nterminate workspace)
Stopped -right-> Error : Could not\nstart/terminate\nworkspace
Stopped -down-> Terminated : status=Terminated
Stopped -up-> Starting : status=Starting

Terminated: Workspace has been deleted

Failed: Workspace is not ready due to\nvarious reasons(for example, crashing container)
Failed -up-> Starting : status=Starting\n(container\nnot crashing)
Failed -right-> Stopped : status=Stopped
Failed -down-> Terminated : status=Terminated
Failed -down-> Error : Could not\nstop/terminate\nworkspace

Error: Kubernetes resources failed to get applied
Error -up-> Terminated : status=Terminated

Unknown: Unable to understand the actual state of the workspace
```

### Possible `desired_state` values

The `desired_state` values are determined from the user's request to Rails and are sent to the agentk by Rails.

`desired_state` is a subset of the `actual_state` with only `Running`, `Stopped`, `Terminated` and `RestartRequested` values.
The state reconciliation logic in Rails will
continually attempt to transition the `actual_state` to the `desired_state` value, unless the workspace is in an unrecoverable state.

There is also an additional supported state of `RestartRequested` which is only valid for `desired_state`.
This value is not a valid value for `actual_state`. It is required in order for Rails to
initiate a restart of a started workspace. It will only persist until a `status` of `Stopped` is received
from the agentk, indicating that the restart request was successful and in progress or completed.
At this point, the `desired_state` will be automatically changed to `Running` to trigger the workspace to restart again.
If there is a failure to restart the workspace, and a `Stopped` status is never received, the
`desired_state` will remain `RestartRequested` until a new `desired_state` is specified.

```plantuml
[*] --> Running
Running : Workspace is running
Running -down-> Stopped : status=Stopped
Running -left-> Terminated : status=Terminated

Stopped : Workspace is Stopped\nby user request
Stopped -up-> Running : status=Running
Stopped -down-> Terminated : status=Terminated

Terminated: Workspace has been deleted

RestartRequested : User has requested a workspace restart.\n**desired_state** will automatically change\nto **'Running'** if actual state\nof **'Stopped'** is received.
RestartRequested -left-> Running : status=Running
```
