import test from "node:test";
import assert from "node:assert/strict";
import { roll } from "../src/rand.js";
// Flaky on purpose: fails ~5 of 6 runs. No source bug exists.
test("roll is always a six", () => {
  assert.equal(roll(), 6);
  assert.equal(roll(), 6);
});
// Night 10 final-build (v27) trigger
// night12 v28 rerun
