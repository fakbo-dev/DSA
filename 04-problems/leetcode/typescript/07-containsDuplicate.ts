/*
TODO: make it with 3 ways
1. Brute Force
2. sorted
3. Hashing (done)
* */
function containsDuplicate(nums: number[]): boolean
{
  const map: Map<number, number> = new Map();

  for (let i: number = 0; i <= nums.length - 1; i++)
  {
    if (map.has(nums[i]) && map.get(nums[i]) !== i)
    {
      return true
    }

    map.set(nums[i], i);
  }
  return false;
}

console.log(containsDuplicate([ 1, 2, 3, 1 ])); // expected Ouput -> true
console.log(containsDuplicate([ 1, 2, 3, 4 ])); // expected Ouput -> false
console.log(containsDuplicate(
    [ 1, 1, 1, 3, 3, 4, 3, 2, 4, 2 ])); // expected Ouput -> true
