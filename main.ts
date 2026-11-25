// Fortune in a Pot — make.fun entry
// Writes one one-line fortune, spoken by a houseplant on a sunny sill,
// to $MAKEFUN_OUTPUT_DIR/entry.txt. Node 22, stdlib only, deterministic.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// The fortune, invented from the judge brief: the plant itself speaks,
// makes a concrete prediction (spilled coffee), and answers it with a
// small jolt of wonder — drinking the coffee and growing a new leaf by Friday.
const ENTRY =
  "I watch from my sunny sill: you will spill your coffee near me, and I will drink it and grow a leaf by Friday.";

const inputDir = process.env.MAKEFUN_INPUT_DIR ?? "/input";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Resolve from this script's location, never from process.cwd().
const repoDir = dirname(fileURLToPath(import.meta.url));
void repoDir;
void inputDir;

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY, "utf8");
