---
type: Guideline
title: Engineering principles
description: General craft rules for agentic Clojure-family application development.
tags: [clean-code, functional-design, readability, testing]
---

# Reader first

Write for the next person who must understand and change the code. Prefer
names that reveal policy, short functions, clear data flow, and explicit
boundaries over clever compression.

# Immutable by default

Prefer values, immutable maps/vectors, pure transformations, and explicit
state transitions. Mutation belongs at a small, named boundary such as a host
loop, cache, storage adapter, or process coordinator.

# Make misuse difficult

Represent invalid states with data shape, validation, constructors, and
exhaustive case analysis. Use explicit domain outcomes for expected failures.
Do not turn every error into a broad exception or a silent nil.

# Keep effects honest

Core functions should not secretly read files, inspect the clock, access a
browser global, open a window, or call a network. Pass time, randomness, and
ports explicitly where determinism matters.

# Small increments

Make one behavior change at a time. Avoid unrelated formatting, dependency
updates, speculative abstractions, and broad rewrites in a behavior story.

# Tests as design feedback

Tests should express observable behavior and useful invariants. A test that
only mirrors private implementation structure is weak evidence. Keep fast unit
tests close to pure code and reserve host/device/browser checks for the edges.

# Cleanup continuously

After behavior is green, improve local names, cohesion, duplication, and error
paths. Cleanup must remain behavior-preserving unless the story explicitly
changes behavior.
