# Quickstart: Rename Package and Product to pmkey

**Branch**: `004-rename-pmkey-package` | **Date**: 2026-03-29

## Goal

Verify that the project can be installed, invoked, documented, and audited using `pmkey` as the sole canonical current name.

## Validation Scenarios

### 1. Confirm package metadata and install guidance

Review `package.json`, `README.md`, and `CHANGELOG.md`.

Verify:
- the package name is `pmkey`
- the primary install examples use `pmkey`
- there is no explanatory note about a package/binary naming mismatch

### 2. Confirm CLI invocation and help text

```sh
npm test
node dist/cli/main.js --help
```

Verify:
- help output refers to `pmkey`
- command examples use `pmkey`
- no user-facing CLI description still calls the tool `pm-kit` or `pmkit`

### 3. Confirm packaged assistant assets use the new prefix

Inspect the packaged command files for Claude Code and Codex.

Verify:
- filenames use `pmkey-*.md`
- internal prompt references use `/pmkey-*`
- suggested next-step commands use the `pmkey` prefix consistently

### 4. Confirm integration tests and fixtures align with the rename

Run the project test suite after the rename implementation.

Verify:
- tests refer to the canonical name where they assert user-facing behavior
- any intentionally preserved hidden-path identifier is handled explicitly rather than incidentally

### 5. Audit the repository for stale names

```sh
rg -n "pm-kit|pmkit" README.md CHANGELOG.md package.json src tests assets AGENTS.md
```

Verify:
- current-facing surfaces have no unintended legacy-name references
- any remaining hits are either historical records or documented compatibility-sensitive exceptions

## Completion Checklist

- Package metadata uses `pmkey`
- README and changelog current guidance use `pmkey`
- CLI help and user-facing output use `pmkey`
- Packaged assistant commands use `/pmkey-*`
- Repository audit clearly separates intentional legacy references from missed rename work
