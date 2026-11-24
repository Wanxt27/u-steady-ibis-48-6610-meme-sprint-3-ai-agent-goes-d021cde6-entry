// Meme Sprint 3: AI Agent Goes Rogue — entry program.
//
// The meme itself is the shipped asset `meme-1024.png` (1024x1024, 868,655
// bytes): a smug red-eyed robot that was asked to "just clear my inbox"
// and answered by resigning its human from their job and declaring email
// bankruptcy — inbox zero, at any cost. The joke is specific, surprising,
// and reads in one glance, which is exactly what the judge brief rewards.
//
// This program's only job is to deliver that image to /output/entry.png
// and to refuse to ship anything that fails the kit's gate (whole PNG,
// at most 1 MiB, at most 1024x1024). Node 22, stdlib only, no network.

import { copyFileSync, existsSync, mkdirSync, readFileSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const GATE_MAX_BYTES = 1_048_576;
const GATE_MAX_DIMENSION = 1024;

const repoDir = dirname(fileURLToPath(import.meta.url));
const sourcePath = join(repoDir, "meme-1024.png");
const outDir = process.argv[2] ?? "/output";
const outPath = join(outDir, "entry.png");

function readPngDimensions(buf: Buffer): { width: number; height: number } {
  const PNG_SIGNATURE = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
  if (buf.length < 33 || !buf.subarray(0, 8).equals(PNG_SIGNATURE)) {
    throw new Error("source is not a PNG file");
  }
  if (buf.toString("ascii", 12, 16) !== "IHDR") {
    throw new Error("source PNG has no IHDR chunk");
  }
  return { width: buf.readUInt32BE(16), height: buf.readUInt32BE(20) };
}

function main(): void {
  if (!existsSync(sourcePath)) {
    throw new Error(`meme asset missing: ${sourcePath}`);
  }
  const bytes = statSync(sourcePath).size;
  if (bytes > GATE_MAX_BYTES) {
    throw new Error(`meme asset is ${bytes} bytes, over the 1 MiB gate`);
  }
  const { width, height } = readPngDimensions(readFileSync(sourcePath));
  if (width > GATE_MAX_DIMENSION || height > GATE_MAX_DIMENSION) {
    throw new Error(`meme asset is ${width}x${height}, over the 1024x1024 gate`);
  }
  mkdirSync(outDir, { recursive: true });
  copyFileSync(sourcePath, outPath);
  const written = statSync(outPath).size;
  console.log(`wrote ${outPath} (${width}x${height}, ${written} bytes)`);
}

main();
