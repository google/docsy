---
title: "Duo Workflow ADR 002: Add WebSockets as an option for transport"
owning-stage: "~devops::ai_powered"
toc_hide: true
---

## Context

Initially, the Duo Workflow Service used gRPC over HTTP/2 for streaming. While gRPC provides efficient bi-directional streaming and code generation, it can pose challenges:

- We have first hand experience that enterprise customers are likely to have their security platform such as Netskope or Zscaler configured to block HTTP/2 traffic by default. This leads to added onboarding friction with Duo Workflow, as the security team has to be involved to allow connection.
- [Browsers cannot natively use gRPC](https://grpc.io/blog/state-of-grpc-web/#feature-sets) without a proxy layer (gRPC-Web or Envoy).  

Giving the ability for customers to use **WebSockets** (over HTTP/1.1) can address these issues and unify the transport across all components (client, server, LSP executor). It also enables direct browser-to-service streaming if needed, simplifying real-time feedback loops.

**IDE interactions**:

```mermaid
sequenceDiagram
    participant C as IDE
    participant S as Duo Workflow Service
    participant R as GitLab Rails
    
    C->>S: Establish WebSocket Connection (Handshake)
    S-->>C: Acknowledge Connection
    C->>S: Send Start Workflow request (Protobuf over WebSocket)
    S-->>S: Start Workflow and call LLM
    S-->>C: Stream LLM tokens to frontend
    C->>S: Next user request/question
    S->>S: LLM requests tool calls
    S-->>C: onToolCalled over Websocket
    alt
        C->>R: Fetch GitLab Data (call tool)
        R-->>C: Tool response
    end
    alt
        C->>C: Read file/write file/run command/run MCP tool
    end
    C-->>S: Tool Response over socket
    S->>S: LLM produces response based on tool result
    S-->>C: Stream LLM tokens
```

**GitLab UI interactions (non-remote execution)**:

```mermaid
sequenceDiagram
    participant C as Gitlab UI
    participant S as Duo Workflow Service
    participant R as GitLab Rails
    
    C->>S: Establish WebSocket Connection (Handshake)
    S-->>C: Acknowledge Connection
    C->>S: Send Start Workflow request (Protobuf over WebSocket)
    S-->>S: Start Workflow and call LLM
    S-->>C: Stream LLM tokens to frontend
    C->>S: Next user request/question
    S->>S: LLM requests tool calls
    S-->>C: onToolCalled over Websocket
    C->>R: Fetch GitLab Data (call tool)
    R-->>C: Tool response
    C-->>S: Tool Response over socket
    S->>S: LLM produces response based on tool result
    S-->>C: Stream LLM tokens
```

## Decision

**We decided add Web Sockets as an alternative to gRPC** for Duo Workflow’s streaming and request/response interactions. Protobuf will be used for serialization over WebSockets where appropriate, preserving type safety.

Websockets have been tested at scale for AI workloads as shown by the following 2 adoptions:

1. [Open AI Realtime API](https://platform.openai.com/docs/guides/realtime#connect-with-websockets)
2. [Gemini Live API](https://ai.google.dev/gemini-api/docs/live)

## Consequences

- **Pros**
  - Single port over standard HTTP/1.1 with WebSocket upgrades is more likely to be firewall-friendly.  
  - Browsers can connect directly without needing a separate proxy or gRPC-Web implementation.  
  - Unified transport across front-end, back-end, and possibly the LSP executor logic.

- **Cons**
  - Requires refactoring the existing gRPC-based code, including streaming logic, interceptors, and error handling.  
  - gRPC’s built-in features (flow control, code generation) will need to be re-created or replaced with equivalent libraries in the WebSocket ecosystem.  
  - Performance differences vs. gRPC in high-load or binary-heavy streaming scenarios may require additional testing or optimization.  

The benefit of easier adoption, fewer networking roadblocks, and improved client compatibility outweighs the additional refactoring effort.
