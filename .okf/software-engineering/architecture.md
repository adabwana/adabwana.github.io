---
type: Guideline
title: Architecture and dependency rule
description: Boundaries, information hiding, and public facade rules for shared applications.
tags: [architecture, dependency-rule, modules, clojure]
status: stable
generated:
  by: opencode/opencode
  at: 2026-08-05T00:00:00Z
verified:
  - by: human:adazungu
    at: 2026-08-05T00:00:00Z
---

# Dependency direction

```text
desktop/browser/frameworks
        -> host adapters
        -> application orchestration
        -> pure domain policy
```

Inner policy namespaces must not require outer host namespaces. Outer adapters
may call inward through stable functions and data contracts.

# Suggested namespace layout

```text
src/project/
  core.cljc              ; small host-facing facade
  domain/*.cljc          ; entities and invariants
  policy/*.cljc          ; use-case transitions and rules
  ports.cljc             ; data contracts where a port is justified
  desktop/*.clj          ; JVM/Quil or other desktop host
  browser/*.cljs         ; CLJS/browser host
test/project/            ; unit and property tests
features/                ; accepted behavior specifications
qa/                      ; independent host procedures and scripts
```

Names should reflect product concepts rather than framework mechanisms. A
facade may re-export stable names while modules are extracted, but do not let a
facade become a permanent god namespace.

# Information hiding

Hide representation details, persistence maps, browser event shapes, and
desktop drawing objects behind narrow functions. Acceptance steps may use the
public facade or user surface, not private module helpers.

# Architecture checks

Add a small automated check when a boundary matters. Examples:

* Pure `.cljc` namespaces do not require Quil, browser globals, filesystem, or
  network libraries.
* Desktop namespaces do not implement core scoring or collision policy.
* Browser render namespaces do not mutate core state directly.
* Acceptance steps do not require private namespaces.
* Dependency graph and import cycles remain within the intended direction.
