module.exports.jump = function (nums) {
  let jumps = 0;
  //put point index to exit point
  let pointIndex = nums.length - 1;
  let tempPointIndex = pointIndex - 1;
  for (let i = nums.length - 2; i > -1; i--) {
    //looking for farest jump point from the pointIndex
    if (i + nums[i] >= pointIndex) {
      tempPointIndex = i;
    }
    if (i == 0) {
      //shift point index to closest to last point and start searching from previous point
      pointIndex = tempPointIndex;
      //do not put - 1 as 'for' will decrement i
      i = tempPointIndex;
      jumps++;
    }
    //begining of the list
    if (tempPointIndex == 0) {
      return jumps;
    }
  }
  return 0;
};
