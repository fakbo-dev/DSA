// Given an array of integers nums and an integer target, return indices of the
// two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may
// not use the same element twice.

// You can return the answer in any order.

// example 1:

// input: nums = [2,7,11,15], target = 9
// output: [0,1]
// explanation: because nums[0] + nums[1] == 9, we return [0, 1].

// example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]
/*
TODO:
possible way to solve
1. Brute Force (done)
2. sorting (Dimensional Array using two pointers) done
3. hashMap
* */

function twoSumBruteForce(nums: number[], target: number): number[]
{

  const length: number = nums.length - 1;

  let i: number = 0;

  while (i <= length)
  {
    let j: number = i + 1;

    while (j <= length)
    {
      let sum: number = nums[i] + nums[j];
      if (sum === target)
      {
        return [ i, j ]
      }
      j++;
    }
    i++;
  }

  return [ -1 ];
}

// console.log(twoSumBruteForce([ 2, 7, 11, 15 ], 9));
// console.log(twoSumBruteForce([ 3, 2, 4 ], 6));
// console.log(twoSumBruteForce([ 3, 3 ], 6));

// function twoSumSorted(nums: number[], target: number): number[]|string
// {
//   const arr: number[][] = [];
//   const length: number = nums.length - 1;
//   for (let i = 0; i <= length; i++)
//   {
//     arr.push([ nums[i], i ]);
//   }
//   const sorted: number[][] =
//       arr.sort((a: number[], b: number[]) => a[0] - b[0]);
//
//   let i: number = 0;
//   let j: number = length;
//
//   while (i < j)
//   {
//     let sum: number = sorted[i][0] + sorted[j][0];
//     if (sum === target)
//       return [ sorted[i][1], sorted[j][1] ];
//     if (sum < target)
//       i++;
//     if (sum > target)
//       j--;
//   }
//
//   return "out of bounce check the code"
// }

// console.log(twoSumSorted([ 2, 7, 11, 15 ], 9));
// console.log(twoSumSorted([ 3, 2, 4 ], 6));
// console.log(twoSumSorted([ 3, 3 ], 6));

function twoSum(nums: number[], target: number): number[]
{
  const map = new Map();
  for (let i: number = 0; i <= nums.length - 1; i++)
  {
    map.set(nums[i], i);
  }
  for (let i: number = 0; i <= nums.length - 1; i++)
  {
    let remainder: number = target - nums[i];

    if (map.has(remainder) && i !== map.get(remainder))
    {

      return [ i, map.get(remainder) ];
    }
  }
  return [];
}

console.log(twoSum([ 2, 7, 11, 15 ], 9));
console.log(twoSum([ 3, 2, 4 ], 6));
console.log(twoSum([ 3, 3 ], 6));
