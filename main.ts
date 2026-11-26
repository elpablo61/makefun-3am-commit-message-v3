// The 3 AM Commit Message — writes the winning one-line commit message to entry.txt.
// Gate: /output/entry.txt must be UTF-8 text of 1 to 200 characters.
// The line is 103 bytes: commit-shaped, one concept, the fix is the new leak.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "fix(auth): at 3:12 AM I rotated the production secret, then pasted the new one into this commit message";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
