import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Make the AI Judge Laugh: Office Jokes — the circle-back loop, one line.
const ENTRY =
  "My manager said we need to 'circle back' so often that I now just walk in circles around the office until someone notices.";

// The joke is emitted exactly as written — one line to entry.txt —
// with no extra output, so the judge sees only the entry.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY + "\n", "utf8");
