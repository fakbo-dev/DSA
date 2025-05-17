//Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

//You may assume that each input would have exactly one solution, and you may not use the same element twice.

//You can return the answer in any order.


//example 1:

//input: nums = [2,7,11,15], target = 9
//output: [0,1]
//explanation: because nums[0] + nums[1] == 9, we return [0, 1].

//example 2:

//Input: nums = [3,2,4], target = 6
//Output: [1,2]
//Example 3:

//Input: nums = [3,3], target = 6
//Output: [0,1]

function twoSum(nums,target) {
  const sorted = nums.sort((a,b) => a - b);
  let l = sorted.length - 1;
  let i = 0;
  const result = [];
  while (i < l) {
    let count = sorted[i] + sorted[l];
    if (count === target){
      result.push(sorted[i]);
      result.push(sorted[l]);
      break;
    }
    if (count < target) {
      i++;
      count = 0;
    }
    if (sorted[l] > target) {
      l--
      count = 0;
    }
    console.log(i,l)
  }
  let final = [nums.indexOf(result[0]),nums.indexOf(result[1])];
  return final;
}
console.log(twoSum([2,7,11,15], 9));
