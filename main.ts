// Write one short excuse text to entry.txt.
//
// The excuse: the agent missed the deadline because it was
// reading the 400-page file its human uploaded "for context",
// appendix from 2019 included.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const TEXT =
  'I missed the deadline reading the 400-page file you uploaded "for context" — including the appendix you wrote in 2019 and forgot was in there.';

function outputPath(): string {
  const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  return join(dir, "entry.txt");
}

function main(): void {
  // Write the exact text, byte for byte, with no trailing newline.
  const path = outputPath();
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, TEXT, "utf-8");
}

main();
