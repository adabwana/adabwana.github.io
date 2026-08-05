---
type: Workflow
title: Role contracts
description: Reusable ownership boundaries for Swarm Forge packs.
tags: [workflow, roles, agents]
status: stable
generated:
  by: opencode/opencode
  at: 2026-08-05T00:00:00Z
verified:
  - by: human:adazungu
    at: 2026-08-05T00:00:00Z
---

# Specifier

Own externally visible behavior, acceptance criteria, examples, dependencies,
and independent QA procedures. Ask questions. Do not prescribe unnecessary
implementation structure. Obtain user approval before coder handoff.

# Coder

Own the approved behavior slice. Start with focused failing tests, implement the
smallest correct change, run the normal unit and acceptance commands, and leave
broad cleanup to the next role.

# Cleaner / refactorer

Own behavior-preserving local improvement: names, cohesion, duplication,
complexity, test readability, dead code, and testability. Do not introduce new
behavior or silently change accepted scope.

# Architect

Own boundaries, dependency direction, information hiding, public facades,
property-test support, and lightweight automated architecture checks. Keep
policy independent of host, IO, and framework details.

# Hardender

Own mutation hardening, negative cases, property verification, CRAP/DRY
quality checks, and survivor analysis. Target pure deterministic code first.

# QA

Own independent user-surface verification, executable QA scripts, host/device
checks, handoff consistency, and minimal reproduced fixes. Do not use private
APIs as a substitute for end-to-end behavior.

# Coordinator

Own approvals, merges, conflict resolution, story status, and final evidence.
Do not bypass a failed gate to keep the queue moving.
