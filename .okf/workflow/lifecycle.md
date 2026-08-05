---
type: Workflow
title: Story lifecycle
description: Gated delivery cycle based on the documented Missile Command flow.
tags: [workflow, stories, lifecycle]
status: stable
generated:
  by: opencode/opencode
  at: 2026-08-05T00:00:00Z
verified:
  - by: human:adazungu
    at: 2026-08-05T00:00:00Z
---

# Story states

```text
backlog -> in-specifier -> awaiting-approval -> in-implementation
  -> in-cleanup -> in-architecture -> in-hardening -> in-qa -> done
```

Use `blocked` or `needs-clarification` whenever a safe decision is missing.

# Cycle

1. Design the product and record goals, non-goals, constraints, and invariants.
2. Split the design into ordered externally visible stories.
3. The specifier writes concise acceptance scenarios and an independent QA
   procedure.
4. The user approves the specification before coder handoff.
5. The coder uses TDD and implements only the approved slice.
6. Cleanup improves local structure without adding behavior.
7. Architecture review checks boundaries, dependency direction, and properties.
8. Hardening attacks weak tests and records mutation/quality evidence.
9. QA verifies through the real user surface and fixes reproduced defects.
10. The coordinator merges, records evidence, marks the story done, and only
    then advances to the next story.

# No hidden phase

Do not defer acceptance, architecture, or QA until the end of the project.
Each story must leave the main branch in a buildable, testable state.
