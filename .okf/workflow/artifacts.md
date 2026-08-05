---
type: Workflow
title: Repository artifacts
description: Modular source and generated artifact layout for a new project.
tags: [workflow, artifacts, repository]
status: stable
generated:
  by: opencode/opencode
  at: 2026-08-05T00:00:00Z
verified:
  - by: human:adazungu
    at: 2026-08-05T00:00:00Z
---

# Recommended layout

```text
docs/superpowers/specs/       design specification
docs/user-stories/            ordered story backlog
docs/architecture/            ADRs and implementation plans
features/                     accepted behavior specifications
qa/procedures/                human-readable QA procedures
qa/scripts/                   executable user-surface QA
src/                          application source
test/                         unit and property tests
acceptance/generated/         disposable generated entrypoints
build/acceptance/             disposable acceptance IR/output
resources/public/js/          disposable browser bundles
swarmforge/                   project-local orchestration config
.swarmforge/                  ignored runtime state
.worktrees/                   ignored role worktrees
```

# Source versus product

Design, stories, features, QA procedures, source, and tests are reviewed
artifacts. Generated acceptance files and browser bundles are build products.
Provide a `clean-generated` command that removes only generated output and
never deletes source, manifests, working notes, or Swarm Forge state.

# One story, one feature surface

Keep feature files separate by behavior and technology. Split a story when its
acceptance table, host surface, or quality concerns become difficult to review.
