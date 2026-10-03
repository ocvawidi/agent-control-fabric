# ACF Protocol v0.2

ACF Protocol defines the provider-neutral contract between a task,
the orchestration fabric, runtime adapters, models, tools, artifacts,
evidence, and delivery gates.

## Core principle

> The model proposes. The fabric controls the workflow.

## Entities

### Task

Immutable description of the user's requested work.

### Run

A concrete execution instance of a Task.

### Artifact

A durable output produced during a Run.

### Evidence

A machine-readable basis for trusting a claim.

### Decision

A recorded routing, escalation, model, complexity, verification,
or delivery decision.

### Gate

A deterministic checkpoint that can permit, block, or reject progression.

## Run lifecycle

created
  ↓
classified
  ↓
planned
  ↓
deliberating
  ↓
executing
  ↓
verifying
  ↓
gating
  ├──→ completed
  ├──→ blocked
  └──→ failed

Cancellation may terminate a run from any non-terminal state.

## Provider neutrality

The protocol does not define:

- a specific LLM
- a specific agent runtime
- a specific API provider
- a specific prompt format

Adapters translate native runtime capabilities into ACF protocol
operations.

## Determinism boundary

LLMs may recommend:

- classification
- routing
- model selection
- implementation strategy
- review findings

The fabric owns:

- state transitions
- policy enforcement
- budgets
- gate semantics
- evidence records
- durable run state
- delivery status
