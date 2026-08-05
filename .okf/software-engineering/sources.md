---
type: Reference
title: Software engineering sources
description: Pointers to local book summaries and Jane Street papers behind the guidelines.
tags: [references, books, jane-street]
status: stable
generated:
  by: opencode/opencode
  at: 2026-08-05T00:00:00Z
verified:
  - by: human:adazungu
    at: 2026-08-05T00:00:00Z
sources:
  - id: clean-code-book
    resource: /home/slacker/Documents/projects/books/summaries/cs/software-engineering/Clean Code_ A Handbook of Agile Software C - Robert C. Martin.typ
    title: Clean Code book summary (Typst)
    author: human:slacker
    last_modified: 2026-07-19
  - id: clean-architecture-book
    resource: /home/slacker/Documents/projects/books/summaries/cs/software-engineering/Clean Architecture_ A Craftsman's Guide to - Robert C. Martin.typ
    title: Clean Architecture book summary (Typst)
    author: human:slacker
    last_modified: 2026-07-19
  - id: functional-design-book
    resource: /home/slacker/Documents/projects/books/summaries/cs/software-engineering/Functional Design_ Principles, Patterns, a - Robert C. Martin.typ
    title: Functional Design book summary (Typst)
    author: human:slacker
    last_modified: 2026-07-19
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

# Local book summaries (Typst)

These are the producer summaries used to distill guidelines (paths on this
machine; not vendored into the repository):

| Book | Summary path |
|------|----------------|
| *Clean Code* (Martin) | `/home/slacker/Documents/projects/books/summaries/cs/software-engineering/Clean Code_ A Handbook of Agile Software C - Robert C. Martin.typ`[^clean-code-book] |
| *Clean Architecture* (Martin) | `/home/slacker/Documents/projects/books/summaries/cs/software-engineering/Clean Architecture_ A Craftsman's Guide to - Robert C. Martin.typ`[^clean-architecture-book] |
| *Functional Design* (Martin) | `/home/slacker/Documents/projects/books/summaries/cs/software-engineering/Functional Design_ Principles, Patterns, a - Robert C. Martin.typ`[^functional-design-book] |

OKF concepts derived from them:

* [clean-code](clean-code.md)
* [clean-architecture](clean-architecture.md)
* [functional-design](functional-design.md)

# Jane Street / OCaml house style

| Source | Use |
|--------|-----|
| Minsky & Weeks, *Caml trading* (JFP 2008)[^caml-trading] | Readability, immutability, exhaustive matches, modularity, “illegal states unrepresentable” |
| Minsky, *OCaml for the Masses*[^ocaml-masses] | Concision, types catching bugs, pure-mostly |
| `ppx_js_style`[^ppx-js-style] | Concrete lint ethic (annotated ignores, doc comments, dated deprecations) |

OKF concept: [jane-street-house-style](jane-street-house-style.md)

[^clean-code-book]: Clean Code book summary (Typst)
[^clean-architecture-book]: Clean Architecture book summary (Typst)
[^functional-design-book]: Functional Design book summary (Typst)
[^caml-trading]: Minsky & Weeks, Caml trading (JFP 2008)
[^ocaml-masses]: Minsky, OCaml for the Masses
[^ppx-js-style]: Jane Street ppx_js_style README
