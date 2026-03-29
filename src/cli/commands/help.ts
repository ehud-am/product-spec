import type { Command } from "commander";

export function configureHelp(program: Command): void {
  program.addHelpText(
    "after",
    `
Examples:
  pmkey add claude
  pmkey add both
  pmkey remove codex
  pmkey check both
  pmkey doctor claude
`
  );

  program
    .command("help")
    .description("Show help for pmkey")
    .action(() => {
      program.outputHelp();
    });
}
