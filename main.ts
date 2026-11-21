// news-image-20261121 entry program.
// Copies the pre-rendered newspaper image (entry.png, next to this file)
// into the output directory as entry.png. Standard library only, no network.
import { copyFileSync, mkdirSync, statSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const repoDir = dirname(fileURLToPath(import.meta.url));
const source = join(repoDir, 'entry.png');
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
const target = join(outDir, 'entry.png');
copyFileSync(source, target);
const bytes = statSync(target).size;
if (bytes > 1024 * 1024) throw new Error(`entry.png is ${bytes} bytes, over the 1 MiB cap`);
console.log(`wrote ${target} (${bytes} bytes)`);
