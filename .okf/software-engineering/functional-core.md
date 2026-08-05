---
type: ArchitectureGuideline
title: Functional core and effect boundaries
description: Shared `.cljc` policy with thin JVM and browser delivery hosts.
tags: [cljc, functional-core, effects, desktop, browser]
---

# Shape

```text
host input
  -> normalized command
  -> pure core transition
  -> new state plus events
  -> host rendering, audio, storage, and telemetry
```

The core should be loadable in a JVM test without opening a desktop window,
loading browser globals, touching a filesystem, or requiring network access.

# Core owns

* Domain state and invariants.
* Commands and event interpretation.
* Deterministic transitions such as `handle` and `tick`.
* Layout calculations that are policy, not drawing calls.
* Validation, scoring, scheduling, parsing, and serialization transforms.
* Event values describing effects for a host to perform.

# Hosts own

* JVM/desktop window lifecycle and drawing.
* Browser canvas/DOM lifecycle and drawing.
* Mouse, keyboard, touch, and browser event conversion.
* Audio APIs, filesystem, browser storage, and network clients.
* Process arguments and environment configuration.
* Telemetry and QA affordances exposed as real user-facing commands.

# Time and randomness

Pass elapsed time into the core. Clamp or otherwise define large time steps.
Use deterministic seeds or an explicit random source when scenarios need
reproducibility. Do not hide `System/currentTimeMillis`, `js/Date`, or random
calls inside policy functions.

# Events

Return structured events or expose a documented drainable event log. Do not
make hosts infer sound, persistence, or analytics behavior by diffing private
state. Distinguish transient step events from durable state.

# Host independence

Both hosts call the same public core facade. If a rule is needed by one host,
first ask whether it is actually a core policy or an adapter concern. Keep
host-only conveniences behind the host boundary rather than adding host flags
to core state.
