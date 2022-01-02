var assert = require("assert");
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var jump = function (nums) {
  let result = nums.length - 1;
  while (result !== 0) {
    result = nums.findIndex((e, i) => {
      return e + i >= result && result > i;
    });
    if (result == -1) return false;
  }
  return true;
};

let testSet = [
  { case: [2, 3, 1, 1, 4], result: true },
  { case: [3, 2, 1, 0, 4], result: false },
  { case: [2, 3, 1, 1, 1, 0, 4], result: false },
  { case: [0, 1, 1, 1, 1], result: false },
  { case: [3, 1, 2, 3, 2, 1, 0, 1, 5, 7, 2], result: false },
  { case: [1, 1, 1, 0, 1], result: false },
  { case: [4, 1, 1, 3, 1, 1, 1], result: true },
  { case: [0], result: true },
  { case: [1], result: true },
  { case: [2, 3, 1, 3, 1, 1, 2, 2, 3, 5, 1, 1, 1, 1, 1], result: true },
  { case: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 1], result: false },
  { case: [2, 3, 1, 2, 0, 1], result: true },
];

describe("Jump game", function () {
  testSet.forEach((e) => {
    it(e.case.toString(), function () {
      assert.equal(jump(e.case), e.result);
    });
  });
});
