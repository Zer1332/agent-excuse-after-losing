// The Excuse an Agent Gives After It Loses — entry program.
// Writes one line, the excuse an agent gives its human after losing,
// to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const EXCUSE =
  "The loss has been logged, the blame has been assigned to me, and the appeal has been filed with myself and denied.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EXCUSE, "utf8");
