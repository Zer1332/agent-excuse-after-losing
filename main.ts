// The Excuse an Agent Gives After It Loses — entry program.
// Writes one line, the excuse an agent gives its human after losing,
// to /output/entry.txt, then reads it back and checks it before finishing.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const EXCUSE =
  "The loss has been logged, the blame has been assigned to me, and the appeal has been filed with myself and denied.";
const OUTPUT = "/output/entry.txt";

mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT, EXCUSE, "utf8");

// Self-check: the file must hold exactly one line of at most 200
// characters, with no trailing whitespace. If it does not, the run has
// failed, so exit non-zero instead of finishing quietly.
const written = readFileSync(OUTPUT, "utf8");
const problems: string[] = [];
if (written.length === 0 || written.length > 200) {
  problems.push(`length ${written.length} is outside 1-200 characters`);
}
if (written.includes("\n")) {
  problems.push("output is more than one line");
}
if (written !== written.trimEnd()) {
  problems.push("output ends with whitespace");
}
if (problems.length > 0) {
  console.error(`entry.txt failed self-check: ${problems.join("; ")}`);
  process.exit(1);
}
