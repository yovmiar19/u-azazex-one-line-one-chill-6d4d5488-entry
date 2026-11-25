// One Line, One Chill — make.fun entry
// Writes the picked scary sentence (133 chars, inside the 1-200 gate)
// to /output/entry.txt, deterministically, then verifies the write.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const LINE =
  "Every night I count my children asleep in their beds, and tonight there's one more small shape under the blankets than I've ever had.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

// Verify: the file must contain exactly the picked line, 1-200 chars.
const out = readFileSync("/output/entry.txt", "utf8");
if (out !== LINE) throw new Error("output does not match the picked line");
if (out.length < 1 || out.length > 200) {
  throw new Error(`gate: ${out.length} chars, must be 1-200`);
}
