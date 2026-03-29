# Quickstart: Prime-Time CLI and Multi-Agent Readiness

**Branch**: `003-prime-time-cli` | **Date**: 2026-03-29

## Goal

Verify that the npm-based `pmkey` CLI can be installed, can manage Claude Code and Codex integrations in a project, and can report reliable health status.

## Setup Paths

### Path 1: Global install (default)

```sh
npm install -g pmkey
mkdir demo-project
cd demo-project
pmkey add claude
pmkey check claude
```

### Path 2: Local project install

```sh
mkdir demo-project
cd demo-project
npm install --save-dev pmkey
npx pmkey add codex
npx pmkey check codex
```

## Validation Scenarios

### 1. Add Claude Code integration

```sh
pmkey add claude
```

Verify:
- `.claude/commands/` exists
- `/pmkey-*` command files are present
- `.product/templates/` exists
- `.pmkit/manifest.json` exists

### 2. Add Codex integration

```sh
pmkey add codex
```

Verify:
- `.Codex/commands/` exists
- `/pmkey-*` command files are present as files named `pmkey-*.md`
- shared templates are still installed once
- manifest now records both target coverage and shared assets

### 3. Re-run add idempotently

```sh
pmkey add both
```

Verify:
- command succeeds
- output reports refresh/no-op behavior clearly
- no duplicate files appear

### 4. Check health

```sh
pmkey check both
pmkey doctor both
```

Verify:
- healthy targets are reported as healthy
- missing targets are reported as missing
- doctor output explains repair actions without mutating files

### 5. Remove one integration safely

```sh
pmkey remove claude
```

Verify:
- only Claude-managed files are removed
- Codex-managed files remain intact
- manifest is updated correctly

### 6. Remove final integration

```sh
pmkey remove both
```

Verify:
- all pmkey-managed assistant files are removed
- shared templates are removed only if no remaining target requires them
- manifest is deleted or normalized without stale ownership records

## Failure Scenarios

### Missing file drift

1. Run `pmkey add claude`
2. Manually delete one managed command file
3. Run `pmkey check claude`

Expected result:
- target is reported as `unhealthy` or `partial`
- output explains which file is missing
- recommended fix is to re-run `pmkey add claude`

### Orphaned manual file

1. Create a non-pmkey file inside `.claude/commands/`
2. Run `pmkey remove claude`

Expected result:
- pmkey-managed files are removed
- the unrelated manual file remains

## Completion Checklist

- Global install flow works
- Local install flow works
- `add`, `remove`, `check`, `doctor`, `version`, and `help` all resolve
- Claude and Codex adapters use their correct command directories
- Manifest-based ownership prevents accidental deletion of non-pmkey files
