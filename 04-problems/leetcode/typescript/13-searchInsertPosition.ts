function searchInsert(nums: number[], target: number): number
{
  let low: number = 0;
  let high: number = nums.length - 1;
  let middle: number = low + Math.floor((high - low) / 2);
  while (low <= high)
  {
    middle = low + Math.floor((high - low) / 2);
    if (nums[middle] === target)
    {
      return middle;
    }

    if (nums[middle] < target)
    {
      low = middle + 1;
    }
    if (nums[middle] > target)
    {
      high = middle - 1;
    }
  }
  return low;
};
// console.log(searchInsert([ 1, 3, 5, 6 ], 5));
// console.log(searchInsert([ 1, 3, 5, 6 ], 2));
// console.log(searchInsert([ 1, 3 ], 2));
console.log(searchInsert([ 1, 3, 5, 6 ], 4));
