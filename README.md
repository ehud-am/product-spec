# pmkey

The product management counterpart to [spec-kit](https://github.com/github/spec-kit). pmkey brings product management disciplines to spec-driven development, following Amazon's Working Backwards (PR/FAQ) methodology.

While spec-kit handles engineering specifications, pmkey handles the product narrative: the domain context, press releases, FAQs, and requirements that define what you're building and why before spec-kit defines how.

## Installation

### Recommended: install globally from npm

```sh
npm install -g pmkey
```

Then inside any project:

```sh
pmkey add claude
pmkey add codex
pmkey add both
pmkey check both
```

### Option 2: run directly without a global install

```sh
npx --yes --package pmkey pmkey add claude
```

Use the same pattern for other commands:

```sh
npx --yes --package pmkey pmkey check both
```

### Option 3: install from GitHub source

This is the least recommended path, but it is useful when testing unpublished changes. The repository slug remains `pm-kit` for now even though the published package and CLI name are `pmkey`:

```sh
npm install -g github:ehud-am/pm-kit
```

## CLI Usage

Project integration commands:

```text
pmkey add claude
pmkey add codex
pmkey add both
pmkey remove claude
pmkey remove codex
pmkey remove both
pmkey check both
pmkey doctor both
pmkey version
pmkey help
```

| Command | Purpose |
|---------|---------|
| `pmkey add <target>` | Add pmkey-managed assistant commands and shared templates to the current project |
| `pmkey remove <target>` | Remove only pmkey-managed files for the selected target |
| `pmkey check [target]` | Validate that managed integrations are present and healthy |
| `pmkey doctor [target]` | Show richer diagnostics and recovery guidance |
| `pmkey version` | Print the installed CLI version |
| `pmkey help` | Show command help and examples |

## Assistant Commands

After adding an integration, use the installed slash commands inside the assistant:

```text
/pmkey-domain ...
/pmkey-press ...
/pmkey-faq
/pmkey-align
```

| Target | Command directory | Slash commands |
|--------|-------------------|----------------|
| Claude Code | `.claude/commands/` | `/pmkey-domain`, `/pmkey-press`, `/pmkey-faq`, `/pmkey-align` |
| Codex | `.Codex/commands/` | `/pmkey-domain`, `/pmkey-press`, `/pmkey-faq`, `/pmkey-align` |

## How It Works

pmkey creates a `.product/` folder in your project that maintains a living, cumulative view of the product across releases. Each document grows over time, telling the full story of the project from its first release to the one currently under development.

### Documents

| File | Purpose |
|------|---------|
| `.product/domain.md` | Industry context, target users, terminology, competitive landscape |
| `.product/press.md` | Press releases for every release, upcoming first and historical below |
| `.product/faq.md` | External and internal FAQs for every release, upcoming first and historical below |
| `.product/requirements.md` | Release-independent, complete view of all product use cases and capabilities |

### Workflow

```text
/pmkey-domain  -->  /pmkey-press  -->  /pmkey-faq  -->  /speckit.specify  -->  /pmkey-align
    (context)       (promise)         (challenge)       (engineer)             (reconcile)
```

1. `/pmkey-domain` establishes the domain context: who the users are, what problem matters, and who the alternatives are.
2. `/pmkey-press` writes a press release as if the next release has already shipped.
3. `/pmkey-faq` challenges the press release with hard questions from customers and stakeholders.
4. `/speckit.specify` hands off to spec-kit for engineering specifications.
5. `/pmkey-align` reconciles product docs with the final engineering scope.

## Key Concepts

### Cumulative Documents

Unlike traditional release notes, pmkey documents are cumulative. The press release file contains all press releases ever written for the project, with the upcoming release at the top and historical releases below. The same applies to FAQs.

### `requirements.md` as the Product Spec

While `press.md` and `faq.md` are organized by release, `requirements.md` is organized by functional area. It is the release-independent, always-current answer to "what does this product do?"

### Working Backwards

The methodology is Amazon's PR/FAQ approach:
- start with the customer experience, not the technical solution
- force hard questions early before committing engineering resources
- treat the press release as a contract for value, clarity, and scope

## Release and Publishing

GitHub Actions now handles:
- CI validation on pushes and pull requests
- packaging tagged releases
- publishing the npm package when a `v*` tag is pushed

## Rename Notes

`pmkey` is now the canonical package name, CLI name, and assistant command prefix. The project still keeps `.pmkit/manifest.json` as an internal compatibility path, and the GitHub repository slug remains `pm-kit` for now.

## Requirements

- Node.js and npm
- [Claude Code](https://claude.ai/code) and/or Codex for assistant integration targets
- [spec-kit](https://github.com/github/spec-kit) for the `/speckit.specify` portion of the workflow

## Changelog

Project history lives in [CHANGELOG.md](CHANGELOG.md).

## License

MIT
