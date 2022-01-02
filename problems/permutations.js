var assert = require("assert");
var sameSubArrays = require("../utils").sameSubArrays;
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permutations = function (nums) {};

let testSet = [
  {
    case: [1, 2, 3],
    result: [
      [1, 2, 3],
      [1, 3, 2],
      [3, 1, 2],
      [2, 1, 3],
      [2, 3, 1],
      [3, 2, 1],
    ],
  },
  {
    case: [0, 1],
    result: [
      [0, 1],
      [1, 0],
    ],
  },
  {
    case: [0, 1, 2, 3],
    result: [
      [0, 1, 2, 3],
      //<<3
      [0, 1, 3, 2],
      [0, 3, 1, 2],
      [3, 0, 1, 2],
      //<<2
      [0, 2, 1, 3],
      [2, 0, 1, 3],
      //<<1
      [1, 0, 2, 3],

      //back
      //>>0
      [1, 0, 2, 3],
      [1, 2, 0, 3],
      [1, 2, 3, 0],
      //>>1
      [0, 2, 1, 3],
      [0, 2, 3, 1],
      [0, 1, 3, 2],
      //>>2
      [0, 1, 3, 2],
    ],
  },
];

describe("Permutations", function () {
  testSet.forEach((e) => {
    it(e.case.toString(), function () {
      assert.equal(sameSubArrays(permutations(e.case), e.result), true);
    });
  });
});
