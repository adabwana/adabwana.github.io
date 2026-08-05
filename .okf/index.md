---
okf_gen_version: "0.1"
type: GeneratorBundle
title: General agentic application delivery bundle
description: Reusable OKF knowledge and Swarm Forge workflow for Clojure, ClojureScript, and shared Clojure projects.
tags: [okf, generator, agentic, clojure, clojurescript, swarm-forge]
timestamp: 2026-07-27T00:00:00Z
---

# Purpose

`.okf-gen/` is a project-neutral starter bundle. Copy it into a new project,
adapt the local articles, choose a Swarm Forge pack, and create the first
project story before implementing product behavior.

It captures the documented Swarm Forge workflow and the observable delivery
pattern in Uncle Bob's Missile Command repository. It is not a copy of that
repository and it does not assume Missile Command's rules, constants, or
technology choices beyond the Clojure family.

# Contents

* [Copy guide](copy-guide.md) - How to turn this bundle into a project-local system
* [Software engineering](software-engineering/) - Pure core, thin hosts, TDD, and quality principles
* [Workflow](workflow/) - Story lifecycle, gates, artifacts, and pack selection
* [Swarm Forge](swarmforge/) - Constitution, role prompts, pack configurations, and backend adapter contract
* [Architecture](architecture/) - Clojure/ClojureScript desktop and browser shape
* [Templates](templates/) - Stories, features, QA procedures, ADRs, and status
* [References](references/) - Observed upstream facts and source links

# Minimal adoption

1. Copy `.okf-gen/` into the destination repository.
2. Read [copy-guide](copy-guide.md) and replace every project placeholder.
3. Write the project design specification and ordered story backlog.
4. Select a [Swarm Forge pack](workflow/packs.md).
5. Copy the selected pack configuration and role prompts into project-local
   `swarmforge/`.
6. Start with the foundation story that proves the build and test harness.
7. Do not hand implementation to the coder until the specifier's acceptance
   and QA artifacts are approved.

# Authority boundary

This bundle defines reusable process. The destination project's local `.okf/`
or equivalent constitution defines product constraints, architecture decisions,
language versions, commands, and non-goals. Local project rules override these
defaults when explicitly documented.
