import assert from "node:assert/strict";
import { domainReviewLane, domainReviewScore } from "../src/domainReview.js";

const item = { signal: 47, slack: 39, drag: 22, confidence: 71 };
assert.equal(domainReviewScore(item), 138);
assert.equal(domainReviewLane(item), "watch");
