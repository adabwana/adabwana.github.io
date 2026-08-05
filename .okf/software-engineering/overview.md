---
type: Guideline
title: Software engineering guidelines overview
description: Uncle Bob craft books plus Jane Street house style as the coding standard.
tags: [software-engineering, guidelines, clean-code, jane-street]
status: stable
generated:
  by: opencode/opencode
  at: 2026-08-05T00:00:00Z
verified:
  - by: human:adazungu
    at: 2026-08-05T00:00:00Z
---

# Purpose

When we implement (toolchain upgrades, new modules), code should satisfy two
compatible traditions:

1. **Uncle Bob craft** — [Clean Code](clean-code.md), [Clean Architecture](clean-architecture.md), [Functional Design](functional-design.md)
2. **Jane Street house style** — [jane-street-house-style](jane-street-house-style.md)

They overlap heavily: reader-first code, small clear units, immutability by
default, types that carry proofs, and structure that stays soft under change.

# Authority order

| Concern | Prefer |
|---------|--------|
| Naming, function size, comments, Boy Scout edits | Clean Code |
| Package/layer boundaries, dependency direction | Clean Architecture |
| Immutability, pipelines, contained side effects | Functional Design + Jane Street |
| Exhaustive cases, illegal states, reviewability | Jane Street house style |

# Split of concerns (repo)

| Path | Role |
|------|------|
| `.okf/` | Knowledge + guidelines (this bundle) |
| `docs/` | Human/project notes (e.g. tooling sketch) |
| `src/` | Application source |
| `test/` | Unit and property tests |
| `swarmforge/` | Project-local agent orchestration configuration |

# Non-goals

* Do not cargo-cult OCaml syntax or Clojure idioms into a different host
  language.
* Do not freeze a full hexagonal rewrite as a phase-0 requirement; grow
  boundaries toward the Dependency Rule as code is refactored.
* Judgment over dogma — set dials consciously for the next reader ([Clean
  Code](clean-code.md)).
