import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname } from "node:path";

export async function saveState(path, state) {
  await mkdir(dirname(path), { recursive: true });
  await writeFile(path, JSON.stringify(state, null, 2) + "\n", "utf8");
}

export async function loadState(path) {
  return JSON.parse(await readFile(path, "utf8"));
}
