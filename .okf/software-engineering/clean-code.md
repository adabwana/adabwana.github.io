---
type: Guideline
title: Clean Code guidelines
description: Distilled craft rules from Robert C. Martin’s Clean Code for readable, changeable units.
tags: [clean-code, uncle-bob, naming, functions, tests]
timestamp: 2026-07-19T00:00:00Z
---

# Central thesis

The only sustainable speed is cleanliness: small, well-named, one-thing units; semantically stable tests; and continuous Boy Scout improvement. Write for the next reader.

# Core rules (apply on every PR)

## Speed and craft

* **Only way to go fast is to go well** — messes spend schedule; they do not buy it.
* **Beck’s law** — make it work, then make it right (behind green tests).
* **Boy Scout Rule** — check in cleaner than you checked out (rename, extract, delete dead code).
* **LeBlanc’s law** — “later” for cleanup equals never; do not schedule cleanliness as a future epic.

## Names

* Intention-revealing; a name that needs a gloss has failed.
* Pronounceable and searchable; length scales with scope.
* One word per concept; no noise distinctions (`accountList` vs `accounts`).
* Prefer domain vocabulary over generic `data` / `manager` / `util` dumping grounds.

## Functions

* Small; do **one** thing at one abstraction level.
* Verb names; arguments few; prefer no boolean flag arguments (split methods / sealed cases).
* Story order: caller above callee; helpers narrate top-to-bottom.
* Prefer pure-ish helpers; push side effects to edges.
* Kill cleverness; optimize for the reader, not the author’s cleverness.

## Comments (OPTIONAL)

* Prefer expressive code over comments.
* Comments are sometimes necessary (legal, warnings, regex intent, non-obvious invariants) — never a celebration of opacity.
* No checked-in `TODO` that means “don’t do”; finish, delete, or track outside the file.

## Formatting

* Vertical openness separates thoughts; density shows association.
* Soft line length (~100–120); automate team style (ktlint/detekt when enabled).
* Consistency beats personal aesthetics.

## Errors and boundaries

* Prefer explicit failure types / results over silent swallows.
* Do not mix unrelated reasons to change in one module (**SRP as actor**, not “one line”).

## Tests

* Tests enable fearless refactor; aim for **semantic stability** (suite fails when required behavior breaks).
* Prefer short cycles; keep viscosity low (fast unit tests for domain/DB adapters).
* Coverage is a tool toward confidence, not a vanity metric — still chase meaningful paths (money, splits, migrations).

# Soft dials (judgment)

Second-edition Clean Code softens some first-edition extremes. Method length, comment density, and TDD strictness are **dials** — set them for the next reader, not for ideology. Shared ground with Ousterhout: modular design and unit tests still matter.

# Related

* Architecture boundaries: [clean-architecture](/software-engineering/clean-architecture.md)
* Immutability / FP style: [functional-design](/software-engineering/functional-design.md)
* Jane Street overlap: [jane-street-house-style](/software-engineering/jane-street-house-style.md)

# Citations

[1] Robert C. Martin, *Clean Code* (2nd ed.) — summary: see [sources](/software-engineering/sources.md)
