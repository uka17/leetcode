var assert = require("assert");
var jump = require("../jump-game-ii").jump;

let testSet = [
  { case: [1, 2, 1, 1, 1], result: 3 },
  { case: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 1, 0], result: 2 },
  { case: [2, 3, 1, 1, 4], result: 2 },
  { case: [2, 1, 1, 1, 1], result: 3 },
  { case: [1, 1, 1, 1, 1], result: 4 },
  { case: [1, 1, 1, 2, 1], result: 4 },
  { case: [4, 1, 1, 3, 1, 1, 1], result: 2 },
  { case: [0], result: 0 },
  { case: [1], result: 0 },
  { case: [2, 3, 1, 3, 1, 1, 2, 2, 3, 5, 1, 1, 1, 1, 1], result: [6] },
];

//destination point make sense
//jump value + start postion to consider

describe("Jump game II", function () {
  testSet.forEach((e) => {
    it(e.case.toString(), function () {
      assert.equal(jump(e.case), e.result);
    });
  });
});
