---
type: Reference
title: Upstream workflow observations
description: Facts observed in the public Swarm Forge documentation and Missile Command tree.
tags: [references, swarm-forge, missile-command]
---

# Documented Swarm Forge facts

The Swarm Forge README describes three runnable workflow branches:

* `two-pack`: coder -> cleaner -> coder for small backend work.
* `four-pack`: specifier -> coder -> refactorer -> architect -> specifier.
* `six-pack`: specifier -> coder -> cleaner -> architect -> hardender -> QA.

The main branch is documentary. Runnable branches carry configuration, role
prompts, and local constitution articles. Startup creates role worktrees,
tmux sessions, and daemon-delivered file handoffs.

Git handoffs use `git_handoff`, `to`, `priority`, `task`, and an exact
ten-character commit abbreviation. Role prompts separate ownership of
specification, implementation, cleanup, architecture, hardening, and QA.

# Missile Command artifacts

The public tree contains:

* A design specification under `docs/superpowers/specs/`.
* An ordered user-story backlog under `docs/user-stories/`.
* Gherkin behavior specifications under `features/`.
* Human QA procedures under `qa/procedures/`.
* Executable QA scripts under `qa/scripts/`.
* Unit/property/acceptance support under `spec/` and `src/`.
* Architecture decision records and per-PR plans under `docs/architecture/`.
* Disposable generated acceptance/browser artifacts excluded from normal source.

# Observable first-story chain

The first Missile Command story visibly follows this commit chain:

```text
design spec
-> ordered backlog
-> specify acceptance and QA
-> implement behavior and harness
-> clean structure and coverage
-> add architecture and property checks
-> harden mutation and acceptance
-> add executable QA
-> merge QA and mark story done
```

Representative commits are `ef4b6b1`, `eb0d52d`, `7dff9e5`, `d342331`,
`1f0fd92`, `2945daa`, `b5e221e`, `b171620`, and `23fcf8a` in the public
Missile Command repository. Later history shows the same pattern repeated,
with batches and architecture follow-up work where independent committed tasks
could be queued.

# Adaptation boundary

These observations support the process and artifact model. They do not prove
private agent reasoning or every intermediate decision. New projects should
adopt the visible controls and document their own local exceptions.
