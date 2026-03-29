# Research: Rename Package and Product to pmkey

**Branch**: `004-rename-pmkey-package` | **Date**: 2026-03-29

## Decision 1: Make `pmkey` the single canonical current name

**Decision**: Use `pmkey` as the canonical name for npm package distribution, CLI invocation, and current-facing product references.

**Rationale**: The current state mixes `pm-kit` as the package name, `pmkit` as the executable name, and `pm-kit` in much of the documentation. Moving to one canonical name removes installation ambiguity and makes the project easier to explain, publish, and search.

**Alternatives considered**:
- **Keep `pm-kit` as package name and `pmkit` as binary**: Preserves the current split and the same user confusion that triggered the rename request.
- **Adopt `pmkit` instead of `pmkey`**: Simpler mechanically, but it does not reflect the explicit naming decision made for this feature.

## Decision 2: Rename current-facing assistant command assets to `pmkey-*`

**Decision**: Update packaged assistant command filenames and prompt references from `pmkit-*` to `pmkey-*`.

**Rationale**: Users interact with these commands directly inside Claude Code and Codex, so leaving them under the old prefix would make the rename feel partial. A user who installs `pmkey` should see `pmkey` consistently in the generated assistant experience.

**Alternatives considered**:
- **Keep `pmkit-*` command names for compatibility**: Reduces churn, but violates the goal of a full rename across user-facing surfaces and leaves a second active brand in day-to-day use.
- **Rename only documentation while leaving assets unchanged**: Lowest effort, but guarantees a mismatch between docs and installed behavior.

## Decision 3: Preserve historical references only where they are factual records

**Decision**: Allow older names to remain in prior specs, changelog history, and archived records only when they describe what existed at the time, not what users should do now.

**Rationale**: Historical documents are records, not just instructions. Rewriting every old reference can reduce accuracy and blur what changed in each release. The rename should be explicit about the new canonical name while preserving trustworthy history.

**Alternatives considered**:
- **Rewrite all historical references to `pmkey`**: Produces a cleaner search result set, but weakens historical accuracy and can make earlier design decisions harder to interpret.
- **Leave all mixed naming untouched**: Preserves history but fails the usability goal of a clear rename.

## Decision 4: Treat `.pmkit` state paths as compatibility-sensitive unless intentionally migrated

**Decision**: Keep `.pmkit/manifest.json` and related internal state-path references out of the automatic rename scope unless implementation work explicitly adds a migration path.

**Rationale**: Hidden operational paths are not just branding; they are part of on-disk project state. Renaming them could break existing assumptions in code, tests, or installed projects. This feature should call them out clearly so implementation can make an intentional decision instead of an accidental one.

**Alternatives considered**:
- **Rename `.pmkit` to `.pmkey` immediately**: More complete from a branding perspective, but risks introducing filesystem migration complexity that is larger than the package rename itself.
- **Ignore the hidden path question entirely**: Simpler planning, but leaves a likely source of accidental partial rename behavior.

## Decision 5: Verify the rename with both behavioral and text-surface checks

**Decision**: Validate the rename with a combination of CLI/documentation behavior checks and repository-wide text audits.

**Rationale**: This feature changes both executable behavior and many static strings. Behavioral tests ensure the package and generated assets work under the new name, while text audits catch stale references in docs, release notes, prompts, and support files that normal test runs may miss.

**Alternatives considered**:
- **Rely only on tests**: Good for behavior, weak for stale docs or support text.
- **Rely only on search-and-replace audit**: Good for string coverage, weak for confirming working install/invocation flows.
