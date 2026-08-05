#!/usr/bin/env bash
# Resume the Swarm Forge six-pack after a host reboot.
#
# tmux and the terminal clients die on shutdown; the opencode2 server-side
# agent sessions, worktrees, and handoff state survive on disk. This script
# recreates the role tmux sessions and reconnects each to its existing
# opencode2 agent session (--continue), using the current OpenCode2 binary and
# the #max model variant. Roles and worktrees are read from
# .swarmforge/roles.tsv so this stays correct as the config evolves.
#
# Usage: ./resume-agents.sh
# Skip the service restart with RESUME_SKIP_SERVICE=1.
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(cd "$SCRIPT_DIR/../.." && pwd)"
LOCAL_TOOLS="${SWARMFORGE_LOCAL_TOOLS:-$HOME/.local/swarmforge-tools}"
export PATH="$REPO_ROOT/swarmforge:$HOME/.opencode/bin:$LOCAL_TOOLS/usr/bin:$PATH"
export LD_LIBRARY_PATH="$LOCAL_TOOLS/usr/lib/x86_64-linux-gnu${LD_LIBRARY_PATH:+:$LD_LIBRARY_PATH}"

ADAPTER="${SWARMFORGE_AGENT_ADAPTER:-$REPO_ROOT/.okf/swarmforge/adapters/opencode2}"
STATE_DIR="$REPO_ROOT/.swarmforge"
SOCK_FILE="$STATE_DIR/tmux-socket"
ROLES_FILE="$STATE_DIR/roles.tsv"
DB="$HOME/.local/share/opencode/opencode-next.db"
MODEL="${SWARMFORGE_MODEL:-openrouter/deepseek/deepseek-v4-flash-0731#max}"
# CODER_MODEL="${SWARMFORGE_CODER_MODEL:-openrouter/openai/gpt-5.6-luna#xhigh}"
SCRIPT_DIRS="$REPO_ROOT/swarmforge/scripts"

resolve_opencode() {
  if [[ -n "${OPENCODE_BIN:-}" ]]; then
    printf '%s\n' "$OPENCODE_BIN"
  elif command -v npx >/dev/null 2>&1; then
    npx --yes --package @opencode-ai/cli@next sh -c 'command -v opencode2' 2>/dev/null || true
  else
    command -v opencode2 2>/dev/null || true
  fi
}

latest_agent_session() {
  python3 - "$DB" "$1" <<'EOF' 2>/dev/null
import sqlite3, sys
try:
    db, want = sys.argv[1], sys.argv[2]
    con = sqlite3.connect(f"file:{db}?mode=ro", uri=True)
    row = con.execute(
        "SELECT id FROM session WHERE directory=? ORDER BY time_created DESC LIMIT 1",
        (want,),
    ).fetchone()
    con.close()
    if row:
        print(row[0])
except Exception:
    pass
EOF
}

quote() { printf "%q" "$1"; }

main() {
  [[ -f "$ROLES_FILE" ]] || { echo "No $ROLES_FILE; run ./swarm first." >&2; exit 1; }

  local backend
  backend="$(resolve_opencode)"
  if [[ -z "$backend" || ! -x "$backend" ]]; then
    echo "OpenCode2 backend not found; set OPENCODE_BIN or run ./swarm first." >&2
    exit 127
  fi
  echo "OpenCode2: $("$backend" --version 2>/dev/null | head -1)"

  if [[ "${RESUME_SKIP_SERVICE:-0}" != "1" ]]; then
    if ! "$backend" api get /api/health 2>/dev/null | grep -q '"healthy":true'; then
      echo "restarting OpenCode2 service"
      nohup "$backend" service restart >/dev/null 2>&1 &
      sleep 12
    fi
  fi

  mkdir -p "$(dirname "$SOCK_FILE")"
  local sock
  sock="$(cat "$SOCK_FILE" 2>/dev/null || true)"
  [[ -n "$sock" ]] || { echo "no $SOCK_FILE; run ./swarm first." >&2; exit 1; }
  tmux -S "$sock" info >/dev/null 2>&1 || tmux -S "$sock" new-session -d -s swarmforge-resume-keep 'sleep 300'

  if ! pgrep -f 'handoffd.bb' >/dev/null 2>&1; then
    echo "starting handoff daemon"
    rm -f "$STATE_DIR/daemon/stop"
    nohup bb "$SCRIPT_DIRS/handoffd.bb" "$REPO_ROOT" >/dev/null 2>&1 &
  fi

  local role wname dir session display mode sid cmd prompt_file
  while IFS=$'\t' read -r role wname path_text session display mode; do
    dir="${ROLES_FILE:+$path_text}"  # roles.tsv column 3 is the absolute worktree path
    [[ -d "$dir" ]] || dir="$REPO_ROOT/.worktrees/$( [[ "$wname" == "master" || "$wname" == "none" ]] && printf master || printf '%s' "$wname")"
    [[ -d "$dir" ]] || { echo "skip $role: missing worktree $dir" >&2; continue; }
    sid="$(latest_agent_session "$dir")"
    prompt_file="$STATE_DIR/prompts/$role.md"
    # local role_model="$MODEL"
    # [[ "$role" == "coder" ]] && role_model="$CODER_MODEL"
    if [[ -n "$sid" ]]; then
      echo "resume $role -> $sid"
      cmd="cd $(quote "$dir") && export SWARMFORGE_ROLE=$(quote "$role") && export OPENCODE_BIN=$(quote "$backend") && $(quote "$backend") mini --continue -s $sid --model $(quote "$MODEL") --prompt $(quote "Resume swarmforge $role")"
    else
      echo "start $role (no prior session)"
      cmd="cd $(quote "$dir") && export SWARMFORGE_ROLE=$(quote "$role") && $(quote "$ADAPTER") --role $(quote "$role") --worktree $(quote "$dir") --prompt-file $(quote "$prompt_file") --display-name $(quote "SwarmForge $display") --receive-mode $(quote "$mode")"
    fi
    tmux -S "$sock" kill-session -t "$session" 2>/dev/null || true
    tmux -S "$sock" new-session -d -s "$session"
    tmux -S "$sock" send-keys -t "$session" "$cmd" Enter
  done < <(grep -v '^#' "$ROLES_FILE")

  tmux -S "$sock" kill-session -t swarmforge-resume-keep 2>/dev/null || true
  echo "Resume done. Reattach: tmux -S $sock attach-session -t swarmforge-coder"
}

main "$@"
