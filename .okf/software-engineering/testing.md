---
type: TestingGuideline
title: Testing strategy
description: Separate tests by purpose and environmental boundary.
tags: [testing, tdd, gherkin, property, mutation, qa]
---

# Test layers

| Layer | Purpose | Typical location |
|-------|---------|------------------|
| Unit | Focused pure behavior and small adapters | `test/` |
| Acceptance | Approved externally visible behavior | `features/` plus generated/runtime tests |
| Property | Broad invariants, conservation, round trips, idempotence | separate property namespace/command |
| Mutation | Test strength against plausible implementation changes | pure source targets and manifests |
| QA | Independent user-surface and host verification | `qa/procedures/`, `qa/scripts/` |

# TDD loop

1. Express a plausible wrong behavior in a focused failing test.
2. Implement the smallest behavior that passes.
3. Run the relevant unit and acceptance checks.
4. Refactor locally without changing behavior.
5. Hand off only a committed, green state.

# Acceptance pipeline

For Gherkin projects, the normal pipeline is:

```text
gherkin-parser
  -> project entrypoint generator
  -> project runtime and step handlers
  -> generated executable acceptance tests
```

Use APS tools rather than reimplementing the parser. Keep generated output
disposable and never edit it by hand. If a project chooses another acceptance
format, document the equivalent generation and execution pipeline.

# Property tests

Keep property checks explicit and separate from ordinary unit coverage. Useful
properties include conservation, monotonicity, bounds, round-trip stability,
idempotence, ordering, and state-machine invariants.

# Mutation

Target pure, fast, deterministic namespaces first. Use differential manifests
when supported. Do not hand-edit manifests or run expensive host mutation
blindly. Record survivors, exclusions, tool versions, and compensating tests.

# QA independence

QA must use the user surface: desktop launch commands, browser interactions,
documented CLI affordances, screenshots/semantics, or persisted files through
the real flow. It must not call private core APIs as an end-to-end shortcut.
