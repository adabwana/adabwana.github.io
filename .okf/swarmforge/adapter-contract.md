---
type: WorkflowIntegration
title: Generic agent adapter contract
description: Backend-neutral launch contract for Swarm Forge agents.
tags: [swarm-forge, adapter, backend, opencode2]
---

# Purpose

Swarm Forge owns worktrees, tmux sessions, role prompts, handoffs, and lifecycle
state. It should not own the command-line syntax of an AI coding backend.

The `adapter` backend is the boundary between those concerns.

# Command contract

The launcher invokes the configured adapter with:

```text
<adapter> \
  --role <role> \
  --worktree <absolute-worktree-path> \
  --prompt-file <absolute-prompt-path> \
  --display-name <display-name> \
  --receive-mode <task|batch> \
  [project-specific extra arguments]
```

The adapter must:

* Fail clearly when the backend executable or prompt file is missing.
* Start one long-lived agent process in the supplied worktree.
* Provide the prompt before the agent begins work.
* Preserve the role, worktree, and receive-mode context.
* Return the backend exit status.
* Avoid unrestricted permissions unless the project explicitly opts in.
* Support a dry-run mode that prints the resolved launch command.
* Keep backend-specific command syntax inside the adapter, including differences
  between OpenCode2 and earlier OpenCode releases.

# Environment contract

The launcher also exports:

```text
SWARMFORGE_ROLE
SWARMFORGE_AGENT_WORKTREE
SWARMFORGE_AGENT_PROMPT_FILE
SWARMFORGE_AGENT_DISPLAY_NAME
SWARMFORGE_AGENT_RECEIVE_MODE
```

# Backend neutrality

Pack files use `adapter`, not `codex`, `claude`, or `opencode2`. A destination
project selects its adapter through `SWARMFORGE_AGENT_ADAPTER` or a local
default. Backend-specific flags belong in the adapter or local environment,
never in the generic pack topology.
