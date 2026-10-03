# Agent Control Fabric (ACF)

> Adaptive orchestration for reliable AI agent work.

ACF is a small, provider-neutral control layer for coding and knowledge-work agents. It combines reusable skills, adaptive escalation, multi-perspective review, bounded complexity, evidence-driven verification, durable task state, and final delivery gates.

**ACF is not another model. It is not a prompt dump.** It is a control protocol and reference implementation that sits around an agent runtime such as OpenCode.

## Why

A single strong model can still fail in repeatable ways: it can anchor on its first idea, over-engineer a solution, lose context across long tasks, declare success without evidence, or produce polished but generic writing.

ACF treats those as different failure classes and gives each one a different mechanism:

| Problem | ACF mechanism |
| --- | --- |
| Wrong first perspective | Council / adversarial passes |
| Too much context | On-demand Skills |
| Over-engineering | Ponytail-style Complexity Governor |
| Weak or fake completion | Verification + Evidence |
| Generic AI writing | Writing Quality / No-AI-Slop |
| Weak UI delivery | UI Quality / Anti-Slop |
| Lost progress | Durable state + artifacts |
| Risky actions | Policy + human checkpoint |

## V0.1 scope

The first version intentionally stays small:

- TypeScript core primitives for task classification, escalation, complexity checks, state, artifacts, and gates.
- OpenCode reference adapter using agents, subagents, skills, and commands.
- Three council roles: `architect`, `contrarian`, `verifier`.
- Provider/model selection remains configuration, not core logic.
- Dry-run mode works without any LLM API key.

## Design rule

> **The model proposes. The fabric controls the workflow.**

LLMs are useful for judgment, synthesis, and domain reasoning. Deterministic code should own state transitions, gate decisions, budgets, and evidence records whenever practical.

## Inspired by

ACF is an original implementation of ideas observed in public projects and documentation, including:

- Dietrich Gebert's Ponytail: minimum-sufficient implementation and explicit complexity ladder.
- gcpdev and aiwithremy's LLM Council skills: multi-model / multi-perspective consultation and peer review.
- Imbad0202's Academic Research Skills: staged workflows, artifacts, checkpoints, provenance, and integrity gates.
- miqdadbadjuber's Anti-Slop: hard/quality gates and delivery discipline.
- petergyang's No AI Slop: minimum-effective editing and writing-pattern checks.
- OpenCode's agent/subagent/skill model: model-specific agents plus on-demand skills.

This repository does **not** vendor or copy those repositories' prompt files. See `docs/influences.md` for the conceptual mapping.

## Quick start

V0.1 has zero runtime dependencies.

```bash
npm test
npm run smoke
node src/cli.js classify "Review the architecture of my Laravel application"
```

For the OpenCode adapter, copy `.opencode/` into a project or point your OpenCode configuration at this directory as appropriate for your local setup.

## Status

Research/prototype. The protocol is deliberately small so its behavior can be benchmarked before adding more automation.

## Roadmap

1. V0.2: persistent run store + structured artifact contracts.
2. V0.3: real OpenCode council orchestration and parallel collection.
3. V0.4: model capability registry + adaptive model tiering.
4. V0.5: cross-model verification and benchmark harness.
5. V1.0: adapters beyond OpenCode.

## License

MIT
