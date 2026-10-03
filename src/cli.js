#!/usr/bin/env node
import { classifyTask } from "./core/router.js";

const [command, ...rest] = process.argv.slice(2);
const input = rest.join(" ").trim();

if (command === "classify" && input) {
  console.log(JSON.stringify(classifyTask(input), null, 2));
} else {
  console.log("Agent Control Fabric v0.1.0\n\nUsage:\n  acf classify \"<task>\"");
}
