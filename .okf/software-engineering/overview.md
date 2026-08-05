---
type: Guideline
title: Software engineering guidelines overview
description: Uncle Bob craft books plus Jane Street house style as the coding standard for Plan A′ (Kotlin + Compose).
tags: [software-engineering, guidelines, clean-code, jane-street, compose]
timestamp: 2026-07-19T00:00:00Z
---

# Purpose

When we implement (toolchain upgrades, Kotlin conversion, new modules), code should satisfy two compatible traditions:

1. **Uncle Bob craft** — [Clean Code](/software-engineering/clean-code.md), [Clean Architecture](/software-engineering/clean-architecture.md), [Functional Design](/software-engineering/functional-design.md)
2. **Jane Street house style** — [jane-street-house-style](/software-engineering/jane-street-house-style.md)

They overlap heavily: reader-first code, small clear units, immutability by default, types that carry proofs, and structure that stays soft under change.

# Authority order

| Concern | Prefer |
|---------|--------|
| Naming, function size, comments, Boy Scout edits | Clean Code |
| Package/layer boundaries, dependency direction | Clean Architecture |
| Immutability, pipelines, contained side effects | Functional Design + Jane Street |
| Exhaustive cases, illegal states, reviewability | Jane Street house style |
| Android/Kotlin/Compose mechanics for this repo | [apply-to-kotlin-android](/software-engineering/apply-to-kotlin-android.md) |

Migration **phases** still live under [migration/](/migration/); these guidelines govern *how* each phase’s code is written. UI destination is Compose ([compose-ui](/architecture/compose-ui.md)).

# Split of concerns (repo)

| Path | Role |
|------|------|
| `.okf/` | Knowledge + guidelines (this bundle) |
| `docs/` | Human/project notes (e.g. tooling sketch) |
| `gnucash-android-og/` | **Original** Java Android tree (reference / baseline) |
| `gnucash-android/` | Working implementation tree; all migration edits live here |
| `swarmforge/` | Project-local agent orchestration configuration |

# Non-goals

* Do not cargo-cult OCaml syntax or Clojure idioms into Kotlin.
* Do not freeze a full hexagonal rewrite as a phase-0 requirement; grow boundaries toward the Dependency Rule as we convert layers.
* Judgment over dogma — set dials consciously for the next reader ([Clean Code](/software-engineering/clean-code.md)).

# Citations

[1] Local book summaries — see [sources](/software-engineering/sources.md)
[2] Minsky & Weeks, *Caml trading*; Minsky, *OCaml for the Masses*
