---
title: "Duo Workflow ADR 003: Use TypeScript for Duo Workflow Executor"
owning-stage: "~devops::ai_powered"
toc_hide: true
---

## Context

The Duo Workflow Service runs in Python, orchestrating multi-step LLM interactions via LangGraph. The executor currently exists as a separate Go binary that the Language Server spawns in order to start executing a workflow. This adds complexity: the LSP is TypeScript-based, but it spawns a Go process for execution. Communication back to the LSP for real-time feedback, streaming and error handling is more limited. There is also duplicated effort in handling local connection and network setup within the Go executor which are already handled in the LSP.  Today, remote execution scenarios (running in CI or a container) use the same Go executor.

## Proposal

**Build a TypeScript Library**: Introduce a TypeScript library within the Duo Workflow Service codebase and publish it as an npm module. This library will define the types and interfaces required for the LSP-based executor.
**Incorporate Executor Logic into the LSP**: Rather than spawning a separate binary, bundle the executor logic directly into the Language Server itself. This allows for:

1. Real-time, bidirectional communication between the Language Server and the Duo Workflow Service.
2. Streamlined error-handling: expired tokens, lint errors, and other relevant messages can be efficiently transmitted back and forth.
3. Better developer ergonomics: everything is in one place (the LSP), rather than relying on a separate compiled binary.

By embedding the executor in the LSP, we remove a layer of indirection, reduce system overhead, and improve real-time feedback mechanisms. This change also lays the foundation for more advanced features—like live streaming of partial results, immediate token refreshes, and better error reporting.

## Decision

**We decided to adopt a TypeScript executor library** for local execution in IDE environments.

- The existing Go executor will remain for CI/remote execution or any environment that requires a lightweight compiled binary in the short term.
- Longer term we decide if we want to have a compiled typescript binary using [Node executable](https://nodejs.org/docs/latest-v20.x/api/single-executable-applications.html), [bun](https://bun.sh/docs/bundler/executables) or [deno](https://docs.deno.com/runtime/reference/cli/compile/) or if we'd prefer to maintain both executors.

## Consequences

- **Pros**
  - Direct, in-process communication between the LSP and the executor (no separate binary spawn).  
  - Shared type definitions and tooling, reducing friction for developers working on the LSP.  
  - Easier incorporation of streaming, incremental feedback, linting, and token refresh flows.
  - Easier distribution: the LSP no longer needs to download the executor binary, but is updated with the LSP itself.

- **Cons**  
  - Requires building and publishing an npm package for the executor logic or merging it directly into the LSP repo.  
  - Potential performance and size differences between a compiled TS binary and a Go binary.  
  - Maintenance of two executors (TS and Go) in the short term while remote execution flows evolve.  
