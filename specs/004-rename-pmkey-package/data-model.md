# Data Model: Rename Package and Product to pmkey

**Branch**: `004-rename-pmkey-package` | **Date**: 2026-03-29

## Overview

This feature is a rename and consistency effort rather than a new runtime subsystem. The primary entities are naming rules, places where names appear, and the audit results that determine whether the rename is complete.

## Entities

### Canonical Name

Represents the single approved current identifier for the project across user-facing surfaces.

**Fields**

| Field | Type | Description |
|------|------|-------------|
| `productName` | string | Canonical human-readable project name, `pmkey` |
| `packageName` | string | Canonical npm package identifier, `pmkey` |
| `binaryName` | string | Canonical CLI executable name, `pmkey` |
| `commandPrefix` | string | Canonical assistant command prefix, `pmkey-` |
| `status` | enum | `active` for the current rename target |

**Validation rules**

- All current-facing installation and usage guidance must align with the canonical package and binary name.
- Assistant-facing command examples must use the canonical command prefix.

### Legacy Identifier

Represents an older project name that may still appear in historical or compatibility-sensitive contexts.

**Fields**

| Field | Type | Description |
|------|------|-------------|
| `value` | string | Legacy identifier such as `pm-kit`, `pmkit`, or `.pmkit` |
| `category` | enum | `package`, `binary`, `command-prefix`, `filesystem-path`, or `historical-label` |
| `allowedContext` | enum | `historical-only`, `compatibility-only`, or `remove` |
| `reason` | string | Why the legacy identifier still exists or why it should be removed |

**Validation rules**

- Any legacy identifier present in a current-facing surface must be either removed or explicitly justified.
- Compatibility-sensitive identifiers must be documented if retained.

### Rename Surface

Represents one repository or generated-artifact location where naming consistency must be evaluated.

**Fields**

| Field | Type | Description |
|------|------|-------------|
| `id` | string | Stable identifier such as `readme.installation` or `assets.codex.pmkey-domain` |
| `surfaceType` | enum | `package-metadata`, `documentation`, `cli-text`, `packaged-asset`, `test`, `agent-guidance`, or `historical-record` |
| `path` | path | Repository-relative file or directory |
| `expectedNameMode` | enum | `canonical-only`, `historical-allowed`, or `compatibility-review` |
| `userVisible` | boolean | Whether end users are likely to encounter the surface directly |

**Validation rules**

- `canonical-only` surfaces must not contain unintended legacy identifiers after the rename.
- `historical-allowed` surfaces must still make the current canonical name clear when they provide guidance.

### Rename Audit Result

Represents the outcome of checking one rename surface.

**Fields**

| Field | Type | Description |
|------|------|-------------|
| `surfaceId` | string | Related `Rename Surface` identifier |
| `status` | enum | `pass`, `intentional-legacy`, or `fail` |
| `findings` | string[] | Human-readable notes describing stale or justified references |
| `nextAction` | string | Required follow-up such as edit, document, or ignore |

## Relationships

- One **Canonical Name** governs many **Rename Surface** entries.
- One **Legacy Identifier** may appear in many **Rename Surface** entries.
- One **Rename Surface** yields one **Rename Audit Result** in a verification pass.

## State Transitions

### Rename surface lifecycle

| Current State | Operation | Next State |
|--------------|-----------|------------|
| `legacy-present` | apply canonical rename | `canonical-only` |
| `legacy-present` | document compatibility exception | `intentional-legacy` |
| `canonical-only` | audit | `pass` |
| `intentional-legacy` | audit | `intentional-legacy` |
| `legacy-present` | audit without justification | `fail` |

## Derived Rules

- Package metadata, README installation commands, CLI help text, and packaged assistant assets are all `canonical-only` surfaces.
- Prior specs and historical changelog entries can remain `historical-allowed` when they describe past states accurately.
- Hidden filesystem identifiers such as `.pmkit` require explicit compatibility review before any rename.
