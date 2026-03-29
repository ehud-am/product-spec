# Implementation Plan: Rename Package and Product to pmkey

**Branch**: `004-rename-pmkey-package` | **Date**: 2026-03-29 | **Spec**: [spec.md](spec.md)
**Input**: Feature specification from `specs/004-rename-pmkey-package/spec.md`

## Summary

Rename the project’s published package and current-facing product identity from the mixed `pm-kit`/`pmkit` naming to `pmkey`, while preserving historical accuracy where older names appear in archived specs or release history. The implementation will update package metadata, README/changelog and release guidance, CLI/help text, packaged assistant assets, test fixtures/assertions, and agent-context documentation so install, invocation, and maintenance flows all describe one canonical name.

## Technical Context

**Language/Version**: TypeScript 5.x on Node.js 22 LTS, plus Markdown/YAML repository assets  
**Primary Dependencies**: `commander` for CLI parsing, `zod` for manifest validation, `vitest` for unit and integration testing, npm package metadata and scripts for distribution  
**Storage**: File system only; project-local managed state in `.pmkit/manifest.json`; packaged assets in `assets/`; release and product guidance in Markdown docs  
**Testing**: Vitest unit tests and integration tests, plus repository-wide rename audits using text search and documented install/usage verification  
**Target Platform**: Cross-platform developer environments with Node.js and npm, with repository artifacts consumed by Claude Code and Codex users  
**Project Type**: Single-package CLI developer tool with packaged Markdown assets  
**Performance Goals**: Rename must not change existing CLI runtime characteristics; documentation and metadata lookups should remain immediate and install/usage commands should remain as short as or shorter than today  
**Constraints**: Preserve historical accuracy in prior release/spec records, avoid accidental changes to compatibility-sensitive hidden paths unless explicitly intended, keep package/binary/documentation naming coherent, and avoid introducing ambiguous mixed-name guidance  
**Scale/Scope**: One npm package, one CLI binary, fewer than 20 packaged asset files, repo-wide documentation/spec references spanning current release docs and historical feature artifacts

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

| Principle | Status | Notes |
|-----------|--------|-------|
| Project constitution defined and enforceable | ✅ Pass | `.specify/memory/constitution.md` still contains placeholder template text, so there are no active constitution rules to block planning |
| Rename scope remains product-focused | ✅ Pass | The feature is limited to canonical package/product naming and related guidance rather than broader workflow changes |
| Safety of compatibility-sensitive paths | ✅ Pass | Plan treats `.pmkit/` and other persisted identifiers as explicit design decisions to review rather than silently renaming them |
| Documentation clarity | ✅ Pass | Phase 1 includes release guidance, install examples, and rename-audit artifacts so users and maintainers can tell what changed |

**Constitution verdict**: No enforceable constitution gates are currently defined. The plan still follows repository safety and clarity expectations by separating canonical renames from intentionally preserved legacy identifiers.

*Post-design re-check*: Research and design artifacts preserve a narrow rename scope, call out compatibility-sensitive exceptions, and document verification surfaces. ✅ Still passes.

## Project Structure

### Documentation (this feature)

```text
specs/004-rename-pmkey-package/
├── plan.md                  # This file
├── research.md              # Phase 0 output
├── data-model.md            # Phase 1 output
├── quickstart.md            # Phase 1 output
├── contracts/
│   └── naming-contract.md   # Phase 1 output
└── tasks.md                 # Phase 2 output (/speckit.tasks command)
```

### Source Code (repository root)

```text
assets/
├── claude/commands/
├── codex/commands/
└── product/templates/

src/
├── cli/
│   ├── main.ts
│   ├── commands/
│   └── output/
├── core/
│   ├── orchestration/
│   ├── state/
│   ├── assets/
│   └── fs/
├── adapters/
│   ├── claude.ts
│   ├── codex.ts
│   └── types.ts
└── types/

tests/
├── unit/
├── integration/
└── fixtures/

specs/
README.md
CHANGELOG.md
AGENTS.md
package.json
```

**Structure Decision**: Keep the existing single-package CLI structure. Implement the rename by updating all current-facing naming surfaces in place, while documenting any compatibility-sensitive legacy identifiers that remain in hidden state paths or historical artifacts.

## Phase 0 Summary (Research complete)

All major rename decisions are resolved in [research.md](research.md):

1. Use `pmkey` as the npm package name, CLI binary name, and current-facing product identifier
2. Keep historical references only where they preserve factual release/spec history
3. Treat hidden operational paths such as `.pmkit/manifest.json` as compatibility-sensitive until explicitly changed in implementation
4. Rename packaged assistant command files and prompts to `pmkey-*` so generated project assets match the new canonical name
5. Verify the rename with a repository-wide audit plus focused CLI/documentation tests

## Phase 1 Summary (Design complete)

Design artifacts produced:

- [data-model.md](data-model.md): entities for canonical names, legacy identifiers, rename surfaces, and audit outcomes
- [contracts/naming-contract.md](contracts/naming-contract.md): canonical naming rules for package metadata, CLI usage, assets, docs, and intentional exceptions
- [quickstart.md](quickstart.md): end-to-end verification for install commands, CLI help text, packaged assets, and repository-wide rename audits

## Complexity Tracking

No constitution violations or exceptional complexity require justification.
