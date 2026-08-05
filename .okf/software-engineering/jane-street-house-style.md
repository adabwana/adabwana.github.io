---
type: Guideline
title: Jane Street house style
description: Readability- and type-driven house style distilled from Jane Street practice, adapted for Kotlin.
tags: [jane-street, house-style, readability, types, code-review]
timestamp: 2026-07-19T00:00:00Z
---

# Central thesis

Write code that is **easy to review and hard to misuse**: terse without cryptic, immutable by default, illegal states unrepresentable, case analysis exhaustive, modules over inheritance theater.

Jane Street’s published practice is OCaml-centric (`ppx_js_style`, Core). We adopt the *ethic*, not the language.

# House rules (ported)

## Readability and review

* Optimize for the human who must prove the code correct in review (including non-specialists).
* Prefer short, clear expressions; reject boilerplate duplication — reviewers skim repeats and miss bugs.
* Factor shared logic with functions/higher-order helpers rather than copy-paste.

## Immutability

* Immutable data is the default; imperative updates are local, justified, and obvious.
* Make interactions between components explicit (passed values), not ambient mutable globals.

## Make illegal states unrepresentable

* Prefer types that cannot express invalid combinations (e.g. unbalanced transaction drafts as a distinct type from posted transactions when converting models).
* Use sealed hierarchies / enums with payloads instead of parallel nullable fields that “shouldn’t both be set.”

## Exhaustive case analysis

* Prefer `when` / sealed `when` without silent `else` that swallows new cases.
* When adding a variant, the compiler should force call-site updates — that is a feature.
* Avoid wildcard matches that hide unfinished work.

## Errors as values at boundaries

* Prefer explicit success/failure sum types over exception-only control flow for expected failures (parse errors, validation).
* Reserve exceptions for truly exceptional / unrecoverable paths.
* Kotlin: `Result`, sealed error types, or domain-specific outcomes — be consistent per layer.

## Named arguments and clarity

* When multiple parameters share a type (`String`, `Long`, `BigDecimal`), use named arguments at call sites.
* Label lambdas’ intent when passed to higher-order helpers.

## Modularity without inheritance webs

* Prefer composition, interfaces, and clear module boundaries.
* Avoid deep inheritance for code reuse; Jane Street reviewers found inheritance hard to reason about — same risk in Java/Kotlin UI base classes. Keep `BaseDrawerActivity`-style bases thin.

## Types carry proof

* Encode invariants in types where cheap (non-empty ids, commodity codes, money scaled decimals).
* Push as much of the informal correctness proof into the typechecker as practical.

## Tooling echoes (`ppx_js_style` spirit)

OCaml-specific lints still teach intent:

| Jane Street lint idea | Kotlin analogue |
|-----------------------|-----------------|
| Annotated ignores | No bare `_` discards of important `Result` / cursors without comment or typed ignore |
| Doc vs noise comments | KDoc on public APIs; no narrating comments |
| Dated deprecations | `@Deprecated` with replace-with and removal plan |
| Forbid clever inline/attrs noise | Prefer clear structure over micro-opts |

# Overlap with Uncle Bob

| Jane Street | Uncle Bob |
|-------------|-----------|
| Reader/reviewer first | Reader-first Clean Code |
| Immutability default | Functional Design |
| Illegal states unrepresentable | Softness via good types + SRP |
| Modules over inheritance | DIP / composition |
| Exhaustive matches | OCP by addition of variants |

# Related

* [functional-design](/software-engineering/functional-design.md)
* [clean-code](/software-engineering/clean-code.md)
* [apply-to-kotlin-android](/software-engineering/apply-to-kotlin-android.md)

# Citations

[1] Yaron Minsky & Stephen Weeks, *Caml trading – experiences with functional programming on Wall Street* (JFP 2008)
[2] Yaron Minsky, *OCaml for the Masses* (ACM Queue / related essay)
[3] Jane Street `ppx_js_style` README — https://ocaml.org/p/ppx_js_style/latest
