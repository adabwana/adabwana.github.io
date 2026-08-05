---
type: Guideline
title: Clean Architecture guidelines
description: Dependency Rule, SOLID, and policy-vs-detail boundaries from Clean Architecture.
tags: [clean-architecture, uncle-bob, dependency-rule, solid]
status: stable
generated:
  by: opencode/opencode
  at: 2026-08-05T00:00:00Z
verified:
  - by: human:adazungu
    at: 2026-08-05T00:00:00Z
sources:
  - id: clean-architecture
    resource: ../references/upstream-observations.md
    title: Clean Architecture (Martin) book summary
    author: human:slacker
    last_modified: 2026-07-19
---

# Central thesis

Architecture draws boundaries so **high-level policy does not depend on
low-level detail**. Behavior ships today; structure decides whether you can
still ship tomorrow.

# Two values

| Value | Nature | Rule |
|-------|--------|------|
| Behavior | Urgent | Make the app work |
| Structure / softness | Important | Keep change cost proportional to scope |

Professionals must fight for structure when feature urgency crowds it out.

# Dependency Rule

Source dependencies point **inward** only:

```text
Frameworks / UI / DB  →  Interface adapters  →  Use cases  →  Entities
```

* Inner circles name nothing from outer circles.
* Details (SQLite, XML parsers, view code) are **plugins**.
* Remaining DIP “sins” gather in composition roots (`main` / application
  entrypoints), not in domain models.

# SOLID (mid-level)

| Principle | Working meaning |
|-----------|-----------------|
| **SRP** | One actor / reason to change per module |
| **OCP** | Extend by addition, not endless reopen-and-edit |
| **LSP** | Substitutes honor contracts |
| **ISP** | Don’t force clients to depend on unused surface |
| **DIP** | Details depend on policy abstractions |

# Practical boundaries

1. Keep **domain models** free of host and UI framework imports.
2. Keep **data adapters** as adapters — do not push UI objects into Entities.
3. Treat exporters/importers as adapters at the edge.
4. UI stays Humble: presentation code displays and collects; use cases own
   policy orchestration.
5. Prefer partial boundaries (interfaces at hot seams) over speculative
   frameworks.

# Screaming architecture

Top-level structure should eventually scream *what the product does* — not the
framework or library names. React, Quil, and SQLite are delivery
mechanisms, not the architecture.

# Related

* [clean-code](clean-code.md)
* [functional-design](functional-design.md)
* [architecture](architecture.md)

These guidelines distill *Clean Architecture* (Martin).[^clean-architecture]

[^clean-architecture]: Clean Architecture (Martin)
