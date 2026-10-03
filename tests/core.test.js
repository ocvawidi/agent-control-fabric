import test from "node:test";
import assert from "node:assert/strict";
import { classifyTask } from "../src/core/router.js";
import { assessComplexity } from "../src/core/complexity.js";
import { evaluateGate } from "../src/core/gates.js";

test("simple task stays on direct path", () => {
  const d = classifyTask("fix typo in README");
  assert.equal(d.taskClass, "simple");
  assert.equal(d.council, false);
});

test("architecture task escalates", () => {
  const d = classifyTask("review the architecture of a Laravel application");
  assert.equal(d.taskClass, "architecture");
  assert.equal(d.council, true);
  assert.ok(d.recommendedRoles.includes("contrarian"));
});

test("complexity gate blocks unjustified expansion", () => {
  const r = assessComplexity(
    { newDependencies: 2, changedFiles: 11, newAbstractions: 3 },
    { maxNewDependencies: 0, preferredChangedFiles: 5, maxNewAbstractions: 0, requireJustificationAboveBudget: true }
  );
  assert.equal(r.pass, false);
  assert.equal(r.exceeded.length, 3);
});

test("complexity gate accepts a documented exception", () => {
  const r = assessComplexity(
    { newDependencies: 1, changedFiles: 8, newAbstractions: 2, justification: "Existing platform API cannot satisfy the required behavior." },
    { maxNewDependencies: 0, preferredChangedFiles: 5, maxNewAbstractions: 0, requireJustificationAboveBudget: true }
  );
  assert.equal(r.pass, true);
});

test("security gate blocks until explicitly reviewed", () => {
  assert.equal(evaluateGate("security", { securityReviewed: false }).status, "blocked");
  assert.equal(evaluateGate("security", { securityReviewed: true }).status, "pass");
});
