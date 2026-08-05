---
type: Template
title: User story template
description: Small externally visible behavior slice for a Swarm Forge cycle.
tags: [template, story, workflow]
status: draft
generated:
  by: human:adazungu
  at: 2026-08-05T00:00:00Z
---

# US-<NN> <short title>

**Status:** backlog
**Pack:** six-pack
**Depends on:** <story IDs or none>
**Design:** <specification section>

## Story

As a <user>, I want <behavior>, so that <outcome>.

## In scope

* <observable behavior>

## Out of scope

* <explicit non-goal>

## Acceptance criteria

* <deterministic observable result>

## Architecture constraints

* <core/host, persistence, browser, desktop, or security rule>

## Feature and QA

* Feature: `features/<name>.feature`
* Procedure: `qa/procedures/<name>.qa.md`
* Script: `qa/scripts/<name>.qa.bb`

## Verification commands

```bash
bb test
bb accept
bb arch-check
bb property
```

## Handoff evidence

| Stage | Commit | Result |
|-------|--------|--------|
| Specifier | pending | pending |
| Coder | pending | pending |
| Cleaner/refactorer | pending | pending |
| Architect | pending | pending |
| Hardender | pending | pending |
| QA | pending | pending |

## Residual risk

* <known limitation or none>
