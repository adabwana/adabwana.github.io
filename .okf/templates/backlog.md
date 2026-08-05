---
type: Template
title: Ordered story backlog template
description: Dependency-aware story list for one-at-a-time Swarm Forge execution.
tags: [template, backlog, stories]
---

# <Project> backlog

## Status legend

`backlog` -> `in-specifier` -> `awaiting-approval` -> `in-implementation` ->
`in-cleanup` -> `in-architecture` -> `in-hardening` -> `in-qa` -> `done`

## Rules

* One story is active in the full pipeline at a time.
* Each story is an externally visible behavior slice or an explicitly approved
  technical foundation slice.
* Story scope is independent of implementation namespace names.
* The next story waits for QA and completion evidence.

## Ordered stories

| Order | ID | Story | Status | Depends on |
|------:|----|-------|--------|------------|
| 1 | US-01 | <foundation or first behavior> | backlog | none |
| 2 | US-02 | <next behavior> | backlog | US-01 |

## Parallel candidates

<List only stories that can be independently specified, implemented, and
verified without conflicting files, behavior, or architecture decisions.>
