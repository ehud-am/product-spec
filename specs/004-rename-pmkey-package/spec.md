# Feature Specification: Rename Package and Product to pmkey

**Feature Branch**: `004-rename-pmkey-package`  
**Created**: 2026-03-29  
**Status**: Draft  
**Input**: User description: "Change the npm package name from pm-kit to pmkey across the project, including README, changelog, scripts, docs, specs, and install/publish guidance."

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Install the Package Under Its New Name (Priority: P1)

A developer discovering the project wants to install it from the package registry without confusion. They should see one canonical package name, one matching command name, and one set of installation instructions that all point to `pmkey`.

**Why this priority**: If the published package name and the documented install commands do not match, users will fail before they ever reach the product workflow.

**Independent Test**: Follow the documented installation and quickstart flow from a clean environment and confirm the package can be discovered, installed, and invoked using only the new `pmkey` name.

**Acceptance Scenarios**:

1. **Given** a developer reads the installation instructions, **When** they copy the documented package install command, **Then** the command uses `pmkey` consistently and does not reference superseded package names
2. **Given** a developer wants to use the package without a global install, **When** they follow the documented one-shot execution path, **Then** the invocation uses `pmkey` consistently from package selection through executable name
3. **Given** a developer searches the project metadata for its package identity, **When** they inspect the published-name references, **Then** `pmkey` is presented as the canonical package name

---

### User Story 2 - Experience One Consistent Product Name (Priority: P1)

A contributor or user wants the project to feel coherent. They should encounter the same product/package name across the README, changelog, scripts, generated assets, command names, and maintenance documentation instead of a mix of legacy and current names.

**Why this priority**: A rename only creates value if it removes ambiguity. Partial renames create more confusion than leaving the old name in place.

**Independent Test**: Review the repository’s user-facing materials and generated assets, then confirm the new name appears consistently in the documented workflows, packaged content, and maintenance references.

**Acceptance Scenarios**:

1. **Given** a contributor reads the README, changelog, and project metadata, **When** they compare product-name references, **Then** the same canonical `pmkey` name is used throughout the primary user-facing surfaces
2. **Given** a user installs assistant-facing assets from the project, **When** they inspect the installed command names and supporting prompts, **Then** those assets use the renamed product identity consistently
3. **Given** a maintainer reviews repository scripts and release guidance, **When** they prepare the next publish, **Then** the guidance no longer depends on the superseded package name

---

### User Story 3 - Preserve a Clear Migration Narrative (Priority: P2)

A maintainer wants to ship the rename without leaving current users uncertain about what changed. The project should clearly explain that `pmkey` is the new canonical name and make any intentionally retained legacy references explicit.

**Why this priority**: Renames affect adoption, trust, and upgrade confidence. Users need to understand whether the old name is obsolete, aliased, or intentionally preserved in limited places.

**Independent Test**: Review release notes and rename-specific guidance to confirm they explain the naming change, the new canonical usage, and any remaining legacy identifiers that are intentionally out of scope.

**Acceptance Scenarios**:

1. **Given** an existing user familiar with `pm-kit` or `pmkit`, **When** they read the rename-related release notes or usage guidance, **Then** they can identify `pmkey` as the new canonical package and product name
2. **Given** a maintainer audits the repository for rename completion, **When** they review documented exceptions or preserved legacy identifiers, **Then** each remaining legacy reference is either removed or explicitly justified

---

### Edge Cases

- What happens if a user follows an older install command copied from a stale source? The updated project guidance should make the canonical `pmkey` install path obvious and reduce the chance of reinforcing obsolete commands.
- What happens if some generated assets, hidden folders, or command names intentionally keep a legacy identifier for compatibility? Those exceptions must be explicitly documented so they are not mistaken for incomplete rename work.
- What happens if repository history, archived specs, or changelog entries mention earlier names? Historical references may remain when needed for accuracy, but current guidance must clearly distinguish history from the new canonical name.
- What happens if publishing, verification, or release steps rely on hard-coded legacy names? Rename work must update those references so the release process reflects the new package identity end to end.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: The product MUST adopt `pmkey` as the canonical package name for package distribution and installation guidance
- **FR-002**: The product MUST present `pmkey` as the canonical current name across primary user-facing repository surfaces, including the README, changelog, package metadata, and release guidance
- **FR-003**: The product MUST update command examples and quickstart guidance so users can complete documented install and usage flows without encountering superseded package names
- **FR-004**: The product MUST update packaged assets, assistant command content, and supporting prompts so the renamed identity is used consistently wherever users interact with generated project material
- **FR-005**: The product MUST update maintenance scripts, validation guidance, and publishing instructions so maintainers can release and verify the project under the `pmkey` name
- **FR-006**: The product MUST identify and remove outdated references to `pm-kit` or `pmkit` from current-facing repository content unless those references are intentionally preserved for historical context or compatibility
- **FR-007**: If any legacy identifiers remain after the rename, the product MUST document where they remain and why they are still required
- **FR-008**: The product MUST preserve the accuracy of historical release records while making the new canonical name clear in all current guidance
- **FR-009**: The rename MUST be complete enough that a maintainer can audit the repository and determine whether any remaining legacy-name references are intentional rather than accidental

### Key Entities *(include if feature involves data)*

- **Canonical Product Name**: The single approved name that users and maintainers should use in package installation, invocation, documentation, and release communication.
- **Legacy Identifier**: Any prior project, package, command, asset, or filesystem name that may still appear in historical records or compatibility-sensitive locations.
- **Rename Surface**: Any repository location or generated artifact where the old name could appear, including package metadata, documentation, assistant commands, scripts, release notes, and validation material.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: A new user can complete the documented install and first-use flow using only the `pmkey` name, without needing to infer or substitute legacy package names
- **SC-002**: A repository audit of current-facing package, documentation, script, and packaged-asset surfaces finds no unintended legacy-name references
- **SC-003**: 100% of documented installation and publish examples use the canonical `pmkey` name consistently from start to finish
- **SC-004**: Maintainers can identify every intentional legacy reference from documented guidance in under 5 minutes during release review
- **SC-005**: The rename-related release notes clearly communicate the new canonical name so an existing user can understand the change on first read

## Assumptions

- The requested change is a full naming standardization effort, not just a narrow package.json edit
- Current-facing repository content should prefer the new `pmkey` identity even if older names remain in historical context
- Historical records may retain prior names where accuracy matters, provided those references are not presented as the current canonical usage
- If compatibility-sensitive identifiers must remain temporarily, documenting them is preferable to leaving them ambiguous
