---
type: Workflow
title: Handoff protocol
description: Durable file-based handoffs that reference committed states.
tags: [workflow, handoffs, git]
status: stable
generated:
  by: opencode/opencode
  at: 2026-08-05T00:00:00Z
verified:
  - by: human:adazungu
    at: 2026-08-05T00:00:00Z
---

# Git handoff

Commit before sending work. Use the Swarm Forge helper with a terse structured
draft:

```text
type: git_handoff
to: <role>
priority: NN
task: <short-stable-task-name>
commit: <10-character-commit-abbreviation>
```

The helper validates that the abbreviation resolves to one commit. Agents do
not send direct tmux messages or hand-edit runtime handoff state.

# Receive

Run `ready_for_next.sh` when notified or after restart. Work from the printed
task and commit. Run `done_with_current.sh` after the current task or batch.
Ignore wake-ups that arrive while already working.

# Forward

Intermediate roles preserve the task name and forward a committed state to the
next role even when their result is audit-only or documentation-only. The
terminal QA broadcast is merge-only.

# Block

If the specification, implementation, architecture, or QA procedure conflicts,
stop and ask for clarification. Do not hide an unresolved product decision in a
free-form note.
