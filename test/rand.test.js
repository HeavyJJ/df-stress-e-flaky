import test from "node:test";
import assert from "node:assert/strict";
import { roll } from "../src/rand.js";
// Flaky on purpose: fails ~5 of 6 runs with the SAME message every time. No source bug exists.
test("roll is always a six", () => {
  assert.ok(roll() === 6, "roll was not a six");
});
// night20 v34 P5
