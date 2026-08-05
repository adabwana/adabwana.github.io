---
type: Guideline
title: Jane Street house style
description: Readability- and type-driven house style distilled from Jane Street practice, adapted for Clojure.
tags: [jane-street, house-style, readability, types, code-review]
status: stable
generated:
  by: opencode/opencode
  at: 2026-08-05T00:00:00Z
verified:
  - by: human:adazungu
    at: 2026-08-05T00:00:00Z
sources:
  - id: caml-trading
    resource: https://cs.rice.edu/~javaplt/411/23-spring/NewReadings/functional_programming_on_Wall_Street.pdf
    title: Minsky & Weeks, Caml trading (JFP 2008)
    author: team:jane-street
    last_modified: 2008
  - id: ocaml-masses
    resource: https://plv.mpi-sws.org/plerg/papers/minsky-ocaml-masses.pdf
    title: Minsky, OCaml for the Masses
    author: team:jane-street
    last_modified: 2007
  - id: ppx-js-style
    resource: https://ocaml.org/p/ppx_js_style/latest
    title: Jane Street ppx_js_style README
    last_modified: 2026-05-30
---

# Central thesis

Write code that is **easy to review and hard to misuse**: terse without
cryptic, immutable by default, illegal states unrepresentable, case analysis
exhaustive, modules over inheritance theater.

Jane Street’s published practice is OCaml-centric (`ppx_js_style`, Core). We
adopt the *ethic*, not the language.

# House rules

## Readability and review

* Optimize for the human who must prove the code correct in review (including
  non-specialists).
* Prefer short, clear expressions; reject boilerplate duplication — reviewers
  skim repeats and miss bugs.
* Factor shared logic with functions/higher-order helpers rather than
  copy-paste.

## Immutability

* Immutable data is the default; imperative updates are local, justified, and
  obvious.
* Make interactions between components explicit (passed values), not ambient
  mutable globals.

## Make illegal states unrepresentable

* Prefer types that cannot express invalid combinations.
* Use sealed hierarchies / enums with payloads instead of parallel nullable
  fields that “shouldn’t both be set.”

## Exhaustive case analysis

* Prefer `case`/`cond` without silent `else` that swallows new cases.
* When adding a variant, the compiler should force call-site updates — that is
  a feature.
* Avoid wildcard matches that hide unfinished work.

## Errors as values at boundaries

* Prefer explicit success/failure outcomes over exception-only control flow for
  expected failures (parse errors, validation).
* Reserve exceptions for truly exceptional / unrecoverable paths.[^caml-trading]

## Named arguments and clarity

* When multiple parameters share a type, use named arguments at call sites.
* Label function intent when passing it to higher-order helpers.

## Modularity without inheritance webs

* Prefer composition, interfaces, and clear module boundaries.
* Avoid deep inheritance for code reuse; reviewers find inheritance hard to
  reason about.

## Types carry proof

* Encode invariants in types where cheap (non-empty ids, commodity codes,
  money scaled decimals).
* Push as much of the informal correctness proof into the typechecker as
  practical.

## Tooling echoes

The `ppx_js_style` README still teaches intent:

| Jane Street lint idea | Clojure analogue |
|-----------------------|-----------------|
| Annotated ignores | No bare `_` discards of important results without comment or typed ignore |
| Doc vs noise comments | Docstrings on public fns; no narrating comments |
| Dated deprecations | `^:deprecated` / removal plan |
| Forbid clever inline/attrs noise | Prefer clear structure over micro-opts |

# Overlap with Uncle Bob

| Jane Street | Uncle Bob |
|-------------|-----------|
| Reader/reviewer first | Reader-first Clean Code |
| Immutability default | Functional Design |
| Illegal states unrepresentable | Softness via good types + SRP |
| Modules over inheritance | DIP / composition |
| Exhaustive matches | OCP by addition of variants |

These rules adapt Jane Street's published ethics: *Caml trading*,[^caml-trading]
*OCaml for the Masses*,[^ocaml-masses] and `ppx_js_style`.[^ppx-js-style]

[^caml-trading]: Minsky & Weeks, Caml trading (JFP 2008)
[^ocaml-masses]: Minsky, OCaml for the Masses
[^ppx-js-style]: Jane Street ppx_js_style README
