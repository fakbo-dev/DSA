function twoSum(numbers: number[], target: number): number[]
{

  let i: number = 0;
  let j: number = numbers.length - 1;

  while (i <= j)
  {
    const sum = numbers[i] + numbers[j];
    if (sum === target)
    {
      return [ i + 1, j + 1 ]
    }
    if (sum < target)
    {
      i++;
    }

    if (sum > target)
    {
      j--;
    }
  }

  return [ -1, -1 ];
}

console.log(twoSum([ 2, 7, 11, 15 ], 9));
console.log(twoSum([ 2, 3, 4 ], 6));
console.log(twoSum([ -1, 0 ], -1));
