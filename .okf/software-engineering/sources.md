---
type: Reference
title: Software engineering sources
description: Pointers to local book summaries and Jane Street papers behind the guidelines.
tags: [references, books, jane-street]
timestamp: 2026-07-19T00:00:00Z
---

# Local book summaries (Typst)

These are the producer summaries used to distill guidelines (paths on this machine; not vendored into the Android repo):

| Book | Summary path |
|------|----------------|
| *Clean Code* (Martin) | `/home/slacker/Documents/projects/books/summaries/cs/software-engineering/Clean Code_ A Handbook of Agile Software C - Robert C. Martin.typ` |
| *Clean Architecture* (Martin) | `/home/slacker/Documents/projects/books/summaries/cs/software-engineering/Clean Architecture_ A Craftsman's Guide to - Robert C. Martin.typ` |
| *Functional Design* (Martin) | `/home/slacker/Documents/projects/books/summaries/cs/software-engineering/Functional Design_ Principles, Patterns, a - Robert C. Martin.typ` |

OKF concepts derived from them:

* [clean-code](/software-engineering/clean-code.md)
* [clean-architecture](/software-engineering/clean-architecture.md)
* [functional-design](/software-engineering/functional-design.md)

# Jane Street / OCaml house style

| Source | Use |
|--------|-----|
| Minsky & Weeks, *Caml trading* (JFP 2008) | Readability, immutability, exhaustive matches, modularity, “illegal states unrepresentable” |
| Minsky, *OCaml for the Masses* | Concision, types catching bugs, pure-mostly |
| `ppx_js_style` | Concrete lint ethic (annotated ignores, doc comments, dated deprecations) |

OKF concept: [jane-street-house-style](/software-engineering/jane-street-house-style.md)

# Citations

[1] https://ocaml.org/p/ppx_js_style/latest
[2] https://cs.rice.edu/~javaplt/411/23-spring/NewReadings/functional_programming_on_Wall_Street.pdf
[3] https://plv.mpi-sws.org/plerg/papers/minsky-ocaml-masses.pdf
