---

description: "Task list for renaming the package and product to pmkey"
---

# Tasks: Rename Package and Product to pmkey

**Input**: Design documents from `/specs/004-rename-pmkey-package/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/

**Tests**: Include targeted test updates and repository rename-audit checks because the feature explicitly requires validated install/usage flows and a stale-name audit.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

- Single project paths at repository root: `src/`, `tests/`, `assets/`, `specs/`
- Documentation and release guidance live in `README.md`, `CHANGELOG.md`, `AGENTS.md`, and `specs/`
- Always use repository-relative paths like `src/cli/main.ts`

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Capture the rename scope and identify current rename surfaces before edits begin

- [X] T001 Create a repo-wide rename inventory and classify canonical vs historical surfaces in `specs/004-rename-pmkey-package/research.md`
- [X] T002 [P] Record the canonical `pmkey` naming rules and compatibility-sensitive exceptions in `specs/004-rename-pmkey-package/contracts/naming-contract.md`
- [X] T003 [P] Update the implementation verification checklist for the rename in `specs/004-rename-pmkey-package/quickstart.md`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Establish the shared naming and asset conventions that all user stories depend on

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [X] T004 Update package metadata and publish scripts for the canonical `pmkey` package in `package.json`
- [X] T005 [P] Rename packaged assistant command files from `assets/claude/commands/pmkit-*.md` and `assets/codex/commands/pmkit-*.md` to `assets/claude/commands/pmkey-*.md` and `assets/codex/commands/pmkey-*.md`
- [X] T006 Update packaged asset registry and destination mappings for `pmkey-*` command assets in `src/core/assets/registry.ts`
- [X] T007 Update CLI root naming, descriptions, and shared reporter output to use `pmkey` in `src/cli/main.ts` and `src/cli/output/reporter.ts`
- [X] T008 [P] Update command help/description text to use `pmkey` in `src/cli/commands/add.ts`, `src/cli/commands/remove.ts`, `src/cli/commands/check.ts`, `src/cli/commands/doctor.ts`, `src/cli/commands/help.ts`, and `src/cli/commands/version.ts`

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - Install the Package Under Its New Name (Priority: P1) 🎯 MVP

**Goal**: Ensure installation, invocation, and metadata all use `pmkey` consistently

**Independent Test**: Follow the documented installation and quickstart flow from a clean environment and confirm the package can be discovered, installed, and invoked using only `pmkey`.

### Tests for User Story 1

- [X] T009 [P] [US1] Update CLI integration expectations for `pmkey` command names and installed asset filenames in `tests/integration/cli.spec.ts`
- [X] T010 [P] [US1] Update unit expectations for canonical version/package naming behavior in `tests/unit/manifest.spec.ts`

### Implementation for User Story 1

- [X] T011 [US1] Update installation, `npx`, and command invocation guidance to use `pmkey` in `README.md`
- [X] T012 [US1] Update current release notes for the package rename and remove package/binary mismatch guidance in `CHANGELOG.md`
- [X] T013 [US1] Update CLI examples and output text to use `pmkey` in `src/cli/commands/help.ts` and `src/cli/main.ts`
- [X] T014 [US1] Align integration test fixtures and runtime command-file assertions with `pmkey-*` assets in `tests/integration/cli.spec.ts`

**Checkpoint**: User Story 1 should let a new user install and invoke the tool using only `pmkey`

---

## Phase 4: User Story 2 - Experience One Consistent Product Name (Priority: P1)

**Goal**: Make current-facing repository content and generated assistant assets consistently present `pmkey`

**Independent Test**: Review the repository’s user-facing materials and generated assets, then confirm the new name appears consistently in the documented workflows, packaged content, and maintenance references.

### Tests for User Story 2

- [X] T015 [P] [US2] Add or update a repository rename-audit check for current-facing surfaces in `package.json` and `tests/integration/cli.spec.ts`

### Implementation for User Story 2

- [X] T016 [P] [US2] Update Claude packaged command content to use `/pmkey-*` references in `assets/claude/commands/pmkey-align.md`, `assets/claude/commands/pmkey-domain.md`, `assets/claude/commands/pmkey-faq.md`, and `assets/claude/commands/pmkey-press.md`
- [X] T017 [P] [US2] Update Codex packaged command content to use `/pmkey-*` references in `assets/codex/commands/pmkey-align.md`, `assets/codex/commands/pmkey-domain.md`, `assets/codex/commands/pmkey-faq.md`, and `assets/codex/commands/pmkey-press.md`
- [X] T018 [US2] Update user-facing CLI descriptions and project branding text to `pmkey` in `src/cli/main.ts`, `src/cli/commands/add.ts`, `src/cli/commands/remove.ts`, `src/cli/commands/check.ts`, `src/cli/commands/doctor.ts`, and `src/cli/commands/version.ts`
- [X] T019 [US2] Update current-facing maintainer and contributor guidance to `pmkey` in `AGENTS.md` and `README.md`
- [X] T020 [US2] Update rename-sensitive feature docs for current guidance in `specs/003-prime-time-cli/spec.md`, `specs/003-prime-time-cli/plan.md`, `specs/003-prime-time-cli/research.md`, `specs/003-prime-time-cli/data-model.md`, `specs/003-prime-time-cli/quickstart.md`, and `specs/003-prime-time-cli/contracts/cli-contract.md`

**Checkpoint**: Current-facing repository content and packaged assets should consistently present `pmkey`

---

## Phase 5: User Story 3 - Preserve a Clear Migration Narrative (Priority: P2)

**Goal**: Explain the rename clearly and document any intentional legacy identifiers or historical references

**Independent Test**: Review release notes and rename-specific guidance to confirm they explain the naming change, the new canonical usage, and any remaining legacy identifiers that are intentionally out of scope.

### Tests for User Story 3

- [X] T021 [P] [US3] Add a verification step for intentional legacy references and `.pmkit` compatibility notes in `specs/004-rename-pmkey-package/quickstart.md`

### Implementation for User Story 3

- [X] T022 [US3] Add explicit rename narrative and remaining-legacy guidance to `README.md` and `CHANGELOG.md`
- [X] T023 [US3] Document the intentional handling of `.pmkit/manifest.json` and any other retained legacy identifiers in `specs/004-rename-pmkey-package/research.md`, `specs/004-rename-pmkey-package/data-model.md`, and `AGENTS.md`
- [X] T024 [US3] Review historical specs under `specs/001-pm-kit-commands/` and `specs/002-install-script-readme/` and preserve or annotate legacy names only where they remain factual historical records

**Checkpoint**: Existing users and maintainers should be able to understand the rename and distinguish intentional legacy references from missed work

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Final verification and cleanup across all user stories

- [X] T025 [P] Run the full test suite and verify renamed command assets in `tests/integration/cli.spec.ts` and `tests/unit/manifest.spec.ts`
- [X] T026 [P] Run a repository-wide stale-name audit for current-facing surfaces and record intentional exceptions in `README.md`, `CHANGELOG.md`, and `AGENTS.md`
- [X] T027 Run the quickstart validation flow and update `specs/004-rename-pmkey-package/quickstart.md` with any final corrections

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phase 3+)**: Depend on Foundational completion
- **Polish (Phase 6)**: Depends on all desired user stories being complete

### User Story Dependencies

- **User Story 1 (P1)**: Starts after Foundational and establishes package/install correctness
- **User Story 2 (P1)**: Starts after Foundational and can proceed in parallel with US1 once canonical asset names are in place
- **User Story 3 (P2)**: Depends on US1 and US2 content changes so it can accurately document what remains intentionally legacy

### Within Each User Story

- Test and audit tasks should be updated before or alongside implementation so rename validation stays accurate
- Package metadata and asset registry changes must land before CLI/docs/tests can fully align
- Assistant asset file renames must happen before their internal prompt references are updated
- Migration narrative work should happen after the canonical rename is visible in current-facing surfaces

### Parallel Opportunities

- T002 and T003 can run in parallel during Setup
- T005 and T008 can run in parallel during Foundational once package naming direction is fixed
- T009 and T010 can run in parallel for US1
- T016 and T017 can run in parallel for US2
- T025 and T026 can run in parallel during Polish

---

## Parallel Example: User Story 2

```bash
# Update packaged assistant content in parallel:
Task: "Update Claude packaged command content to use /pmkey-* references in assets/claude/commands/pmkey-align.md, assets/claude/commands/pmkey-domain.md, assets/claude/commands/pmkey-faq.md, and assets/claude/commands/pmkey-press.md"
Task: "Update Codex packaged command content to use /pmkey-* references in assets/codex/commands/pmkey-align.md, assets/codex/commands/pmkey-domain.md, assets/codex/commands/pmkey-faq.md, and assets/codex/commands/pmkey-press.md"

# Update validation and contributor-facing text in parallel:
Task: "Add or update a repository rename-audit check for current-facing surfaces in package.json and tests/integration/cli.spec.ts"
Task: "Update current-facing maintainer and contributor guidance to pmkey in AGENTS.md and README.md"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational
3. Complete Phase 3: User Story 1
4. **STOP and VALIDATE**: Confirm install/package/invocation flows use only `pmkey`

### Incremental Delivery

1. Complete Setup + Foundational
2. Deliver User Story 1 for install/package correctness
3. Deliver User Story 2 for repo-wide current-facing consistency
4. Deliver User Story 3 for migration narrative and documented exceptions
5. Finish with repository audit and quickstart validation

### Parallel Team Strategy

With multiple developers:

1. One developer handles package metadata and CLI text
2. One developer handles assistant asset file renames and prompt updates
3. One developer handles docs/changelog/spec guidance and final audit work

---

## Notes

- [P] tasks touch different files and can be run in parallel safely
- [US1] focuses on package/install/invocation correctness
- [US2] focuses on current-facing consistency across assets, code, and docs
- [US3] focuses on explaining the rename and documenting intentional legacy references
- Historical records may remain when they are explicitly preserved for accuracy
