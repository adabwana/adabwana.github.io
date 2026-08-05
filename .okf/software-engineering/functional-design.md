---
type: Guideline
title: Functional Design guidelines
description: Immutability-first design, data flow, and honest mutation from Martin’s Functional Design.
tags: [functional-design, uncle-bob, immutability, data-flow]
status: stable
generated:
  by: opencode/opencode
  at: 2026-08-05T00:00:00Z
verified:
  - by: human:adazungu
    at: 2026-08-05T00:00:00Z
sources:
  - id: functional-design
    resource: ../references/upstream-observations.md
    title: Functional Design (Martin) book summary
    author: human:slacker
    last_modified: 2026-07-19
---

# Central thesis

Functional style is largely **programming without assignment**: new values from
old, pipelines over temporal coupling. OO craft (SOLID, patterns) still names
the seams when immutability is enforced. Cheat honestly and contain the cheat.

# Core practices

## Immutability by default

* Prefer `val`-style bindings, immutable collections, and copy-on-write domain
  updates.
* Mutation is allowed for real IO and carefully bounded caches — make it the
  **exception**, never the ambient style.
* Temporal coupling (A must run before B because shared mutable `x`) is a
  design smell; pass state explicitly.

## Data flow

* Prefer `map` / `filter` / `fold`-shaped transforms for list/report pipelines.
* Model “next state” as `f(state, event) → state'` where practical.
* Partition by **verbs/pipelines** as often as by nouns when converting
  procedural code.

## Honesty about effects

* Pure helpers for money math, split balancing checks, recurrence calculations.
* Side-effecting edges: DB writes, file export, network, UI.
* “Honest cheats”: composition root wiring, controlled mutable holders,
  platform-required callbacks — label them; don’t pretend the whole app is pure.

## SOLID still applies

* Actors, extension points, narrow interfaces, inverted source dependencies
  work in packages/namespaces the same as in OO or Clojure.
* Patterns (Adapter, Command, Decorator, Visitor-ish sealed hierarchies) remain
  useful under immutability.

## Concurrency

* No shared updates removes many races; concurrent FSMs can still race — don’t
  treat immutability as a concurrency silver bullet.
* Prefer structured concurrency / single-writer patterns where concurrency is
  needed.

These guidelines distill *Functional Design* (Martin).[^functional-design]

[^functional-design]: Functional Design (Martin)
