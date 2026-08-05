---
type: Workflow
title: Quality gates
description: Stop/go criteria for each role in every pack.
tags: [workflow, gates, quality]
status: stable
generated:
  by: opencode/opencode
  at: 2026-08-05T00:00:00Z
verified:
  - by: human:adazungu
    at: 2026-08-05T00:00:00Z
---

# Specifier gate

The story has observable acceptance criteria, non-goals, examples, dependencies,
and a QA procedure. The user approved handoff.

# Coder gate

Focused tests expressed the behavior before implementation. The relevant unit
and normal acceptance commands pass. The implementation is limited to scope.

# Cleanup gate

Names, cohesion, duplication, local complexity, error paths, and test
readability were reviewed without changing accepted behavior.

# Architecture gate

Pure core boundaries, host separation, dependency direction, information
hiding, public facade size, and relevant properties were reviewed. Automated
architecture checks pass.

# Hardening gate

Negative cases and properties cover important invariants. Mutation/CRAP/DRY
results or documented tool limitations are recorded. Generated manifests were
not edited by hand.

# QA gate

The user-visible behavior was verified independently through the desktop host,
browser host, documented CLI surface, persisted files, or another declared
interface. QA did not call private APIs as a shortcut.

# Completion gate

All role commits are linked, commands and results are recorded, generated
artifacts are classified, story and backlog status are updated, and residual
risk is explicit.
