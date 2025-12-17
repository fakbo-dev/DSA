/*
TODO: make it with 3 ways
1. Brute Force
2. sorted (done)
3. Hashing (done)
* */

// HashMap
// function containsDuplicate(nums: number[]): boolean
// {
//   const map: Map<number, number> = new Map();
//
//   for (let i: number = 0; i <= nums.length - 1; i++)
//   {
//     if (map.has(nums[i]) && map.get(nums[i]) !== i)
//     {
//       return true
//     }
//
//     map.set(nums[i], i);
//   }
//   return false;
// }

// console.log(containsDuplicate([ 1, 2, 3, 1 ])); // expected Ouput -> true
// console.log(containsDuplicate([ 1, 2, 3, 4 ])); // expected Ouput -> false
// console.log(containsDuplicate(
//     [ 1, 1, 1, 3, 3, 4, 3, 2, 4, 2 ])); // expected Ouput -> true

// sorted
// function containsDuplicate(nums: number[]): boolean
// {
//   nums.sort((a: number, b: number) => a - b);
//
//   for (let i: number = 1; i <= nums.length - 1; i++)
//   {
//     let j: number = i - 1;
//     if (nums[i] === nums[j])
//     {
//       return true
//     }
//   }
//   return false;
// }

// console.log(containsDuplicate([ 1, 2, 3, 1 ])); // expected Ouput -> true
// console.log(containsDuplicate([ 1, 2, 3, 4 ])); // expected Ouput -> false
// console.log(containsDuplicate([ 2, 14, 18, 22, 22 ])); // expected Ouput ->
// true console.log(containsDuplicate(
//     [ 1, 1, 1, 3, 3, 4, 3, 2, 4, 2 ])); // expected Ouput -> true

// brute Force

// function containsDuplicate(nums: number[]): boolean
// {
//
//   for (let i: number = 0; i <= nums.length - 1; i++)
//   {
//     for (let j: number = i + 1; j <= nums.length - 1; j++)
//     {
//       if (nums[i] === nums[j])
//       {
//         return true;
//       }
//     }
//   }
//
//   return false
// }

console.log(containsDuplicate([ 1, 2, 3, 1 ])); // expected Ouput -> true
console.log(containsDuplicate([ 1, 2, 3, 4 ])); // expected Ouput -> false
console.log(containsDuplicate([ 2, 14, 18, 22, 22 ])); // expected Ouput -> true
console.log(containsDuplicate(
    [ 1, 1, 1, 3, 3, 4, 3, 2, 4, 2 ])); // expected Ouput -> true
