// try two ideas for now, one using hashmap and another using
// multidimensionalArr
function majorityElement(nums: number[]): number
{
  const map: Map<number, number> = new Map();
  const n: number = nums.length - 1;
  const fixedNumber: number = n / 2;
  let maxValue: number = 0;
  let i: number = 0;

  while (i <= n)
  {

    if (!map.has(nums[i]))
    {
      map.set(nums[i], 1);
    }
    else
    {
      map.set(nums[i], (map.get(nums[i]) ?? 0) + 1);
    }

    i++;
  }
  map.forEach((value, key) => {
    if (fixedNumber < value)
      maxValue = key
  })
  return maxValue;
}

majorityElement([ 3, 2, 3 ]);
majorityElement([ 2, 2, 1, 1, 1, 2, 2 ]);
