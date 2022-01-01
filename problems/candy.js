var assert = require("assert");
/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {
  let result = [];
  ratings.forEach((e) => {
    result.push(1);
  });
  for (let i = 1; i < ratings.length; i++) {
    if (ratings[i] > ratings[i - 1]) {
      result[i] = result[i - 1] + 1;
    }
  }
  for (let i = ratings.length - 2; i > -1; i--) {
    if (ratings[i] > ratings[i + 1] && result[i] <= result[i + 1]) {
      result[i] = result[i + 1] + 1;
    }
  }
  return result.reduce((acc, cur) => acc + cur);
};

let testSet = [
  { case: [1, 0, 2], result: 5 },
  { case: [1, 2, 2], result: 4 },
  { case: [1, 2, 3], result: 6 },
  { case: [1, 1, 1], result: 3 },
  { case: [1, 2, 3, 1], result: 7 },
  { case: [1, 2, 3, 4, 5, 4, 3, 2, 1, 0], result: 31 },
  { case: [1, 2, 5, 4, 3, 2, 1, 0], result: 24 },
  { case: [0], result: 1 },
  { case: [1, 2, 5, 9, 8, 7, 6, 4, 3, 2, 1], result: 42 },
  { case: [1, 2, 2, 2, 1, 0], result: 10 },
  { case: [1, 2, 3, 4, 4, 4, 8, 5, 0, 0], result: 19 },
];

describe("Candy", function () {
  testSet.forEach((e) => {
    it(e.case.toString(), function () {
      assert.equal(candy(e.case), e.result);
    });
  });
});
