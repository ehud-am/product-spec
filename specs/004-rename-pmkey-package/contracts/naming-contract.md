# Naming Contract: pmkey Rename

**Branch**: `004-rename-pmkey-package` | **Date**: 2026-03-29

## Purpose

Define the canonical naming rules for package distribution, CLI invocation, packaged assistant assets, and repository guidance so the rename to `pmkey` is applied consistently and audited clearly.

## Canonical Current Names

| Surface | Canonical Name |
|--------|----------------|
| npm package | `pmkey` |
| CLI executable | `pmkey` |
| Product name in current guidance | `pmkey` |
| Assistant command prefix | `/pmkey-*` |

## Surface Rules

### Package metadata

- `package.json` and release/publish guidance MUST identify the package as `pmkey`.
- Install examples MUST use `pmkey` consistently for both package selection and invocation.

### CLI text

- Top-level CLI name, help text, descriptions, and examples MUST use `pmkey`.
- Any user-facing output that refers to the tool by name MUST prefer `pmkey`.

### Packaged assistant assets

- Assistant command filenames MUST use the `pmkey-*.md` naming pattern.
- Prompt bodies, cross-command references, and suggested next steps inside packaged assets MUST refer to `/pmkey-*`.

### Documentation

- README, changelog current-release notes, AGENTS guidance, and quickstart examples MUST present `pmkey` as the current canonical name.
- Current-facing docs MUST NOT require users to infer legacy names in order to install or run the tool.

### Historical and compatibility-sensitive references

- Historical specs and archived release notes MAY reference prior names when describing earlier states accurately.
- Any retained compatibility-sensitive legacy identifier, such as an on-disk hidden state path, MUST be documented explicitly so it is not mistaken for incomplete rename work.

## Acceptance Criteria

1. A user can copy any current install command from the repository and complete the flow using only `pmkey`.
2. A user who installs assistant assets sees `/pmkey-*` commands rather than `/pmkit-*`.
3. A repository text audit finds no unintended `pm-kit` or `pmkit` references in `canonical-only` surfaces.
4. Any remaining legacy identifier has a documented reason and classified context.
