---
type: Workflow
title: Commit discipline
description: Audit-friendly commit rules for agentic delivery.
tags: [workflow, git, commits]
status: stable
generated:
  by: opencode/opencode
  at: 2026-08-05T00:00:00Z
verified:
  - by: human:adazungu
    at: 2026-08-05T00:00:00Z
---

# One responsibility

Keep specification, implementation, cleanup, architecture, hardening, and QA
commits distinguishable. Do not squash the role chain by default.

# Role bylines

Use a role byline in every role-owned commit:

```text
Implement US-07 enemy missiles and impacts

By coder.
```

# Story evidence

The story records role, commit, command, and result in pipeline order. Merge
commits identify the task being integrated. Unrelated changes are not bundled
into a story merely because the same files are open.

# Generated outputs

Generated acceptance entrypoints, compiled JavaScript, build directories,
mutation working files, and local caches are disposable unless the project
explicitly declares them as source.
