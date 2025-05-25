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
 const sorted = nums.toSorted((a,b) => a - b);
  let i = 0;
  let j = sorted.length - 1;
 const result = [];
  while (i  < j) {
   let sum = sorted[i] + sorted[j];
    if (sum === target) {
      result.push(sorted[i]);
      result.push(sorted[j]);
      break;
    }
     if (sum > target) j--;
     if (sum < target) i++;
  }
  console.log(result)
  console.log(nums);
  const real = [nums.indexOf(result[0]),nums.lastIndexOf(result[1])]
  return real;
}
console.log(twoSum([3,2,4], 6));
