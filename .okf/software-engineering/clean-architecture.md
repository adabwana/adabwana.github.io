---
type: Guideline
title: Clean Architecture guidelines
description: Dependency Rule, SOLID, and policy-vs-detail boundaries from Clean Architecture.
tags: [clean-architecture, uncle-bob, dependency-rule, solid]
timestamp: 2026-07-19T00:00:00Z
---

# Central thesis

Architecture draws boundaries so **high-level policy does not depend on low-level detail**. Behavior ships today; structure decides whether you can still ship tomorrow.

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

* Inner circles name nothing from outer circles (no Android framework types in Entities).
* Details (SQLite, XML parsers, Activities) are **plugins**.
* Remaining DIP “sins” gather in composition roots (`Application` / `main`), not in domain models.

# SOLID (mid-level)

| Principle | Working meaning |
|-----------|-----------------|
| **SRP** | One actor / reason to change per module |
| **OCP** | Extend by addition, not endless reopen-and-edit |
| **LSP** | Substitutes honor contracts |
| **ISP** | Don’t force clients to depend on unused surface |
| **DIP** | Details depend on policy abstractions |

# Entities vs use cases vs details (GnuCash mapping)

| Clean Architecture | This app (target direction) |
|--------------------|-----------------------------|
| Entities | `Money`, `Account`, `Transaction`, `Split`, bookkeeping rules |
| Use cases | Import book, post scheduled action, export OFX, compute report series |
| Interface adapters | DbAdapters, XML handlers, **ViewModels** (Compose UI adapters) |
| Frameworks/drivers | Jetpack Compose, SQLiteOpenHelper, Dropbox SDK, Crashlytics |

Today’s tree is a classic Android monolith ([architecture/layers](/architecture/layers.md)). Plan A′ does **not** require a big-bang hexagonal rewrite; convert toward this direction as packages move to Kotlin, and treat Compose UI as the outer plugin circle ([compose-ui](/architecture/compose-ui.md)).

# Practical boundaries while migrating

1. Keep **domain models** free of Android **and Compose** imports when converting `model/`.
2. Keep **DbAdapters** as adapters — do not push UI cursors into Entities.
3. Treat exporters/importers as adapters at the edge.
4. UI stays Humble: Composables display and collect; ViewModels/use cases own policy orchestration.
5. Prefer partial boundaries (interfaces at hot seams) over speculative frameworks.

# Screaming architecture

Top-level structure should eventually scream *accounts, transactions, budgets, books* — not *RecyclerView, Compose, Retrofit*. Package names already lean that way; preserve and strengthen them. Compose is a delivery mechanism, not the architecture.

# Related

* [clean-code](/software-engineering/clean-code.md)
* [functional-design](/software-engineering/functional-design.md)
* [apply-to-kotlin-android](/software-engineering/apply-to-kotlin-android.md)
* Migration order: [strategy](/migration/strategy.md)

# Citations

[1] Robert C. Martin, *Clean Architecture* — summary: see [sources](/software-engineering/sources.md)
