---
type: Workflow
title: Swarm Forge pack selection
description: Choose orchestration depth according to risk and verification needs.
tags: [swarm-forge, packs, workflow]
status: stable
generated:
  by: opencode/opencode
  at: 2026-08-05T00:00:00Z
verified:
  - by: human:adazungu
    at: 2026-08-05T00:00:00Z
---

# Two-pack

Use for small backend tasks that benefit from fast implementation and cleanup
without a specification or full QA pipeline.

```text
coder -> cleaner -> coder
```

The coder owns TDD and unit tests. The cleaner owns refactoring, coverage,
CRAP/DRY review, and local hardening. This pack is not appropriate for a new
product behavior with ambiguous requirements, device/UI risk, or a persistence
contract change.

# Four-pack

Use for moderate work that needs accepted behavior specifications and an
architecture review without splitting every hardening concern into its own
role.

```text
specifier -> coder -> refactorer -> architect -> specifier
```

The refactorer combines behavior-preserving cleanup and quality improvement.
The architect owns structural review, dependency direction, mutation-site
review, property tests, and final completion notification.

# Six-pack

Use for major or high-risk work requiring full specification, backend
verification, and independent quality gates.

```text
specifier -> coder -> cleaner -> architect -> hardender -> QA -> completion
```

The six-pack separates cleanup, architecture, mutation hardening, and final
user-surface QA. Use it by default for the first feature, core architecture,
state machines, persistence, external formats, dual hosts, and release paths.

# Selection rules

* Choose the smallest pack that can own every required quality concern.
* When uncertain, choose the larger pack for the first story and reduce later.
* Pack choice is recorded in the story before specification.
* Do not use pack roles as a reason to parallelize dependent behavior stories.
* Cleaner, architect, and QA batching is acceptable only for independent
  committed tasks; the product story chain remains ordered.
