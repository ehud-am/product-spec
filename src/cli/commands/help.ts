import type { Command } from "commander";

export function configureHelp(program: Command): void {
  program.addHelpText(
    "after",
    `
Examples:
  product-kit add claude
  product-kit add both
  product-kit remove codex
  product-kit check both
  product-kit doctor claude
`
  );

  program
    .command("help")
    .description("Show help for product-kit")
    .action(() => {
      program.outputHelp();
    });
}
