/**
 * Returns `true` in case if array `A` has exactly the same elements list and elements order as array `B`
 * @param {[]} a Array `A`
 * @param {[]} b Array `B`
 * @returns {boolean}
 */
var sameArrays = function (a, b) {
  for (let i = 0; i < a.length; i++) if (a[i] !== b[i]) return false;
  return true;
};

/**
 * Returns `true` in case if array `A` has exactly the same subarrays list as array `B` (subarray orders is not considered)
 * @param {[]} a Array `A`
 * @param {[]} b Array `B`
 * @returns {boolean}
 */
var sameSubArrays = function (a, b) {
  if (a.length !== b.length) return false;
  //check if all subarrays of A can be found in B
  for (let i = 0; i < a.length; i++)
    if (!b.find((e) => sameArrays(e, a[i]))) return false;
  //check if all subarrays of B can be found in A
  for (let i = 0; i < b.length; i++)
    if (!a.find((e) => sameArrays(e, b[i]))) return false;
  return true;
};

module.exports = { sameArrays, sameSubArrays };
