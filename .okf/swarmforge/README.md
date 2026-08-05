---
type: WorkflowIntegration
title: Swarm Forge starter configuration
description: 'Project-neutral Swarm Forge inputs: packs, adapters, patches, and role prompts.'
tags: [swarm-forge, orchestration, config]
status: stable
generated:
  by: opencode/opencode
  at: 2026-08-05T00:00:00Z
verified:
  - by: human:adazungu
    at: 2026-08-05T00:00:00Z
---

# Choose a pack

* `packs/two-pack.conf` for small backend tasks.
* `packs/four-pack.conf` for specification plus architecture review.
* `packs/six-pack.conf` for full specification, cleanup, architecture,
  hardening, and independent QA.

The configurations use the backend-neutral `adapter` identifier. Apply
`patches/generic-agent-adapter.patch` to the downloaded Swarm Forge launcher,
then set `SWARMFORGE_AGENT_ADAPTER` to the project adapter executable. The
bundle includes `adapters/opencode2` as the first-class OpenCode2 adapter.

# Select the role model

The `adapters/opencode2` adapter launches interactive `opencode2 mini`
sessions so Swarm Forge helper scripts (`ready_for_next.sh`,
`done_with_current.sh`) keep working inside the agent panes. The model is
chosen explicitly:

* Default: `openrouter/deepseek/deepseek-v4-flash-0731#max`
* `--model <provider/model[#variant]>`: pin any model (and optionally its
  variant), e.g. `--model openrouter/xiaomi/mimo-v2.5`
* `--current`: use the model (including variant) of the user's most recent
  opencode2 session, read from `~/.local/share/opencode/opencode-next.db`
* `OPENCODE_SWARM_DEFAULT_MODEL`: override the adapter default via environment
* `OPENCODE_BIN`: explicitly pin an OpenCode2 executable; otherwise `./swarm`
  resolves `opencode2` from `npx --yes --package @opencode-ai/cli@next` and
  exports the absolute path so every role pane uses the same binary

Examples (all arguments after `--receive-mode` are accepted):

```bash
# default deepseek-v4-flash-0731
"$PWD/swarmforge/adapters/opencode2" --role coder --worktree "$PWD" \
  --prompt-file "$PWD/.swarmforge/prompts/coder.md" \
  --display-name "SwarmForge Coder" --receive-mode task

# pin a specific model
"$PWD/swarmforge/adapters/opencode2" --role coder --worktree "$PWD" \
  --prompt-file "$PWD/.swarmforge/prompts/coder.md" \
  --display-name "SwarmForge Coder" --receive-mode task \
  --model openrouter/xiaomi/mimo-v2.5

# mirror the user's current opencode2 model
"$PWD/swarmforge/adapters/opencode2" --role coder --worktree "$PWD" \
  --prompt-file "$PWD/.swarmforge/prompts/coder.md" \
  --display-name "SwarmForge Coder" --receive-mode task --current
```

`--current` falls back to the adapter default model when the model cannot be
read from the opencode2 database.

Before `./swarm` creates any tmux sessions, the OpenCode2 adapter checks that
the installed executable is not older than the migrations recorded in
`~/.local/share/opencode/opencode-next.db` and that a running OpenCode2 service
reports the same version. The check is read-only and fails fast with update or
restart guidance when the executable and database are incompatible. The
adapter can be smoke-tested without launching an agent:

```bash
SWARMFORGE_AGENT_DRY_RUN=1 \
  SWARMFORGE_AGENT_ADAPTER="$PWD/swarmforge/adapters/opencode2" \
  "$PWD/swarmforge/adapters/opencode2" \
  --role coder \
  --worktree "$PWD" \
  --prompt-file "$PWD/.swarmforge/prompts/coder.md" \
  --display-name "SwarmForge Coder" \
  --receive-mode task
```

# Bootstrap operational scripts

Swarm Forge's runnable branches carry project configuration while the main
branch carries shared operational scripts. The upstream documented bootstrap
is:

```bash
BRANCH=six-pack
curl -L "https://github.com/unclebob/swarm-forge/archive/refs/heads/${BRANCH}.tar.gz" \
  | tar -xz --strip-components=1
./swarm
```

Use the destination project's own `swarmforge/` files after copying this
bundle. Do not copy `.swarmforge/` runtime state or `.worktrees/` into a new
project. Apply the generic adapter patch after the upstream scripts are
bootstrapped and verify the generated command before starting agents.
