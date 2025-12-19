/*TODO:
 * Brute Force
 * Sorting (Done)
 * Hashing
 **/

// Sorted way
// function isAnagram(s: string, t: string): boolean
// {
//   const firstArr: string[] = [...s ];
//   const secondArr: string[] = [...t ];
//   const result: string = firstArr.sort().join(',');
//   const result2: string = secondArr.sort().join(',');
//
//   return result === result2 ? true : false
// };

// console.log(isAnagram('anagram', 'nagaram'));
// console.log(isAnagram('rat', 'car'));

function isAnagram(s: string, t: string): boolean
{
  if (s.length !== t.length)
  {
    return false
  }

  const map = new Map();

  for (const elements of s)
  {

    if (!map.has(elements))
    {
      map.set(elements, 1);
    }
    else
    {
      map.set(elements, map.get(elements) + 1);
    }
  }
}

console.log(isAnagram('anagram', 'nagaram'));
console.log(isAnagram('rat', 'car'));
