---
type: Guideline
title: Functional Design guidelines
description: Immutability-first design, data flow, and honest mutation from Martin’s Functional Design.
tags: [functional-design, uncle-bob, immutability, data-flow]
timestamp: 2026-07-19T00:00:00Z
---

# Central thesis

Functional style is largely **programming without assignment**: new values from old, pipelines over temporal coupling. OO craft (SOLID, patterns) still names the seams when immutability is enforced. Cheat honestly and contain the cheat.

# Core practices

## Immutability by default

* Prefer `val`, immutable collections, and copy-on-write domain updates.
* Mutation is allowed for real IO and carefully bounded caches — make it the **exception**, never the ambient style.
* Temporal coupling (A must run before B because shared mutable `x`) is a design smell; pass state explicitly.

## Data flow

* Prefer `map` / `filter` / `fold`-shaped transforms for list/report pipelines.
* Model “next state” as `f(state, event) → state'` where practical (scheduled actions, wizards, import progress).
* Partition by **verbs/pipelines** as often as by nouns when converting procedural Java.

## Honesty about effects

* Pure helpers for money math, split balancing checks, recurrence calculations.
* Side-effecting edges: DB writes, file export, network, Android UI.
* “Honest cheats”: composition root wiring, controlled mutable holders, platform-required callbacks — label them; don’t pretend the whole app is pure.

## SOLID still applies

* Actors, extension points, narrow interfaces, inverted source dependencies work in Kotlin packages/namespaces the same as in OO or Clojure.
* Patterns (Adapter, Command, Decorator, Visitor-ish sealed hierarchies) remain useful under immutability.

## Concurrency

* No shared updates removes many races; concurrent FSMs can still race — don’t treat immutability as a concurrency silver bullet.
* Prefer structured concurrency / single-writer patterns when replacing AsyncTask later.

# Kotlin dials for this project

| Prefer | Avoid |
|--------|--------|
| Data classes / value objects for models | Mutable public fields on domain types |
| Sealed types for account/transaction kinds where enums sprawl | Giant switch bags reopened for every feature |
| Explicit `Result` / sealed errors at boundaries | Swallowing exceptions in adapters |
| Immutable list outputs from queries you can afford | Hidden shared mutable lists across threads |

# Related

* [jane-street-house-style](/software-engineering/jane-street-house-style.md) (same immutability ethic, stronger type emphasis)
* [clean-architecture](/software-engineering/clean-architecture.md)
* [apply-to-kotlin-android](/software-engineering/apply-to-kotlin-android.md)

# Citations

[1] Robert C. Martin, *Functional Design* — summary: see [sources](/software-engineering/sources.md)
