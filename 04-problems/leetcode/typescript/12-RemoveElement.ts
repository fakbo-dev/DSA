function removeElement(nums: number[], val: number): number
{

  for (let i: number = nums.length - 1; i >= 0; i--)
  {
    let current: number = nums[i];

    if (current === val)
    {
      nums.splice(i, 1);
    }
  }
  return nums.length
}

console.log(removeElement([ 3, 2, 2, 3 ], 3))
console.log(removeElement([ 0, 1, 2, 2, 3, 0, 4, 2 ], 2))
