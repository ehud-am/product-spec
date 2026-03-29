import { readFile } from "node:fs/promises";

const files = [
  "README.md",
  "CHANGELOG.md",
  "AGENTS.md",
  "package.json",
  "src/cli/main.ts",
  "src/cli/commands/add.ts",
  "src/cli/commands/remove.ts",
  "src/cli/commands/help.ts",
  "src/cli/commands/version.ts",
  "src/cli/output/reporter.ts",
  "src/core/assets/registry.ts",
  "src/core/orchestration/add.ts",
  "src/core/orchestration/check.ts",
  "tests/integration/cli.spec.ts",
  "assets/claude/commands/pmkey-align.md",
  "assets/claude/commands/pmkey-domain.md",
  "assets/claude/commands/pmkey-faq.md",
  "assets/claude/commands/pmkey-press.md",
  "assets/codex/commands/pmkey-align.md",
  "assets/codex/commands/pmkey-domain.md",
  "assets/codex/commands/pmkey-faq.md",
  "assets/codex/commands/pmkey-press.md"
];

const allowedSubstrings = [
  ".pmkit/manifest.json",
  "pmkitVersion",
  "github:ehud-am/pm-kit",
  "repository slug remains `pm-kit`",
  "and the `pm-kit` repository slug remain intentional compatibility-era identifiers for now",
  "from `pm-kit`/`pmkit` to `pmkey`",
  "Initial pm-kit command set",
  'expect(result.stdout).not.toContain("Usage: pmkit")',
  "- Renamed the published package, CLI, and assistant command prefix from `pm-kit`/`pmkit` to `pmkey`",
  "- Documented that `.pmkit/manifest.json` and the `pm-kit` repository slug remain intentional compatibility-era identifiers for now"
];

const forbiddenPatterns = [/pm-kit/g, /pmkit/g, /\/pmkit/g];
const failures = [];

for (const file of files) {
  const original = await readFile(file, "utf8");
  let sanitized = original;
  for (const allowed of allowedSubstrings) {
    sanitized = sanitized.split(allowed).join("");
  }

  const matches = [];
  for (const pattern of forbiddenPatterns) {
    const found = sanitized.match(pattern);
    if (found) {
      matches.push(...found);
    }
  }

  if (matches.length > 0) {
    failures.push(`${file}: found forbidden legacy name fragments`);
  }
}

if (failures.length > 0) {
  process.stderr.write(`${failures.join("\n")}\n`);
  process.exit(1);
}
