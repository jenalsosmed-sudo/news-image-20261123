// News-image entry for Monday 23 November 2026 (Node 22, standard
// library only): the program copies the finished newspaper front page
// drawn in this repository — entry.png — to the grader's output path.
// The poster sums up the day: the Russian drone strike on Dymer
// (11 killed, 14 missing), the COP31 climate talks ending with no deal,
// Denmark accusing Russian intelligence of plotting to kill a rapper,
// three tankers attacked in the Strait of Hormuz, the end of the US
// penny after 232 years, South Korea's education minister resigning
// over AI exam cheating, and the new Epstein report, plus a strip of
// the day's other headlines.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for
// /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, existsSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const src = join(here, 'entry.png');
if (!existsSync(src)) throw new Error(`missing poster image: ${src}`);
mkdirSync(outDir, { recursive: true });
// A straight byte-for-byte copy, so both grader runs write identical bytes.
copyFileSync(src, join(outDir, 'entry.png'));
