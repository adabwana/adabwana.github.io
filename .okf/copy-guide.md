---
type: GeneratorGuide
title: Copying the OKF generator bundle
description: Adaptation steps for installing this reusable bundle in a new project.
tags: [okf, generator, adoption]
---

# Copy

Copy `.okf-gen/` into the new repository. Keep it as a versioned reference or
rename it to the project's active knowledge directory after reviewing the
contents. Do not copy project-specific facts from another repository.

# Replace

Replace these placeholders before starting a product story:

* Project name, purpose, users, and supported hosts.
* Clojure, ClojureScript, Babashka, Node, Java, and browser tool versions.
* Build, unit-test, acceptance, property, mutation, coverage, and QA commands.
* Product design specification and story dependency graph.
* Core/host namespace map and forbidden dependency directions.
* Persistence, filesystem, network, browser storage, and desktop window rules.
* Supported browsers, desktop platforms, screen sizes, and accessibility needs.
* Agent backend and permissions policy.
* Generic adapter patch and the selected backend adapter executable.
* Secrets, local caches, generated artifacts, and CI policy.

# Keep

Keep the following process artifacts unless the team explicitly chooses a
different control:

* One story per full delivery cycle.
* Specification approval before coding.
* Separate cleanup, architecture, hardening, and QA ownership.
* Committed handoffs with exact commit hashes.
* Independent user-surface QA.
* A durable status and verification record.

# Do not copy blindly

* Missile Command game rules, timing, layout, or host names.
* Clojure-specific tools into a non-Clojure project.
* APS, Speclj, Babashka, or mutation tools without checking project fit.
* Generated acceptance output, mutation manifests, or Swarm Forge runtime state.
* Agent prompts that conflict with the destination project's security policy.

# First project commit sequence

Use a foundation sequence before the first feature:

1. Design specification and non-goals.
2. Ordered story backlog.
3. Foundation story with a runnable unit-test command.
4. Acceptance harness or an explicit decision not to use Gherkin.
5. Architecture boundary check.
6. Pack-specific `swarmforge/` configuration.
7. A QA procedure that proves the documented commands work.
