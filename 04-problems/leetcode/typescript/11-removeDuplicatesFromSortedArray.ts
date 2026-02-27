function removeDuplicates(nums: number[]): number
{
  const map: Map<number, number> = new Map();

  for (let i: number = nums.length - 1; i >= 0; i--)
  {
    if (!map.has(nums[i]))
    {
      map.set(nums[i], 0)
    }
    else
    {
      nums.splice(i, 1);
    }
  }
  return nums.length;
}

console.log(removeDuplicates([ 1, 1, 2 ]));
console.log(removeDuplicates([ 0, 0, 1, 1, 1, 2, 2, 3, 3, 4 ]));
