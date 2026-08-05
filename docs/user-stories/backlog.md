---
type: Template
title: Ordered story backlog
description: Dependency-aware story list for one-at-a-time swarm execution.
tags: [backlog, stories, adabwana]
status: draft
generated:
  by: human:adazungu
  at: 2026-08-05T00:00:00Z
---

# adabwana.github.io backlog

## Status legend

`backlog` -> `in-specifier` -> `awaiting-approval` -> `in-implementation` ->
`in-cleanup` -> `in-qa` -> `done`

## Rules

* One story is active in the full pipeline at a time.
* Each story is an externally visible behavior slice.
* The next story waits for QA and completion evidence.

## Ordered stories

| Order | ID | Story | Status | Depends on |
|------:|----|-------|--------|------------|
| 1 | US-01 | Refresh resume download PDFs (industry + full) | done | none |
| 2 | US-02 | Add AMN workforce-strategy one-pager download | backlog | US-01 |

## Parallel candidates

None currently: all remaining slices depend on the PDF refresh being done.
