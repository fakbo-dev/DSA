function merge(nums1: number[], m: number, nums2: number[], n: number): void
{
  let i: number = 0;
  let j: number = 0;
  // check the condition for the loop could be incorret
  while (i <= m || j <= n)
  {
    if (nums1[i] >= nums2[j])
    {
    }
  }
}

console.log(merge([ 1, 2, 3, 0, 0, 0 ], 3, [ 2, 5, 6 ], 3));
console.log(merge([ 1 ], 1, [], 0));
console.log(merge([ 0 ], 0, [ 1 ], 1));
