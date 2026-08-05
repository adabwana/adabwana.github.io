---
type: Template
title: Product design specification template
description: Up-front product, architecture, and verification contract.
tags: [template, design, specification]
status: draft
generated:
  by: human:adazungu
  at: 2026-08-05T00:00:00Z
---

# <Project> design specification

**Date:** <YYYY-MM-DD>
**Status:** draft | accepted
**Stack:** Clojure / ClojureScript / shared `.cljc`

## Purpose

<What is being built and for whom?>

## Goals

* <goal>

## Non-goals

* <non-goal>

## Architecture

<Pure core, desktop host, browser host, persistence, and effect boundaries.>

## Public core contract

```clojure
(new-state options)
(handle state command)
(tick state elapsed-seconds)
```

Replace this with the project's actual contract.

## Domain invariants

* <invariant>

## Host behavior

### Desktop

<Launch, input, rendering, audio, storage, and QA surface.>

### Browser

<Launch, input, rendering, audio, storage, and QA surface.>

## Testing and QA contract

<Unit, acceptance, property, mutation, and independent QA commands.>
