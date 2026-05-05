import assert from "node:assert/strict";
import { classify, score } from "../src/policy.js";

const cases = [
  {
    "name": "case_1",
    "demand": 64,
    "capacity": 99,
    "latency": 23,
    "risk": 19,
    "weight": 8,
    "score": 130,
    "decision": "review"
  },
  {
    "name": "case_2",
    "demand": 95,
    "capacity": 73,
    "latency": 22,
    "risk": 24,
    "weight": 5,
    "score": 131,
    "decision": "review"
  },
  {
    "name": "case_3",
    "demand": 76,
    "capacity": 96,
    "latency": 11,
    "risk": 6,
    "weight": 9,
    "score": 245,
    "decision": "accept"
  }
];

for (const item of cases) {
  const signal = {
    demand: item.demand,
    capacity: item.capacity,
    latency: item.latency,
    risk: item.risk,
    weight: item.weight
  };
  assert.equal(score(signal), item.score);
  assert.equal(classify(signal), item.decision);
}
