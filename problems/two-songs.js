var assert = require("assert");
/**
 * @param {number[]} time
 * @return {number}
 */
var songs = function (time) {
  let count = 0;
  for (let i = 0; i < time.length; i++)
    for (let j = i + 1; j < time.length; j++)
      if ((time[i] + time[j]) % 60 == 0) count++;
  return count;
};

let testSet = [
  { case: [30, 20, 150, 100, 40], result: 3 },
  { case: [60, 60, 60], result: 3 },
  { case: [60], result: 0 },
  { case: [500], result: 0 },
  { case: [59, 1, 39, 21, 29, 31, 119, 279], result: 5 },
  { case: [20, 20, 100, 280, 340], result: 6 },
  { case: [1, 1, 1, 1, 1, 59, 119, 179, 239, 299], result: 25 },
  { case: [1, 2, 3, 59, 58, 57], result: 3 },
  { case: [119, 59, 1, 59, 119], result: 4 },
  { case: [20, 40, 90, 20, 160], result: 4 },
  { case: [10, 70, 130, 50, 190, 250, 310], result: 6 },
];

describe("Two songs", function () {
  testSet.forEach((e) => {
    it(e.case.toString(), function () {
      assert.equal(songs(e.case), e.result);
    });
  });
});
