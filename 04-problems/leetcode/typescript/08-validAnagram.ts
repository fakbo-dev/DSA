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

// METHOD 2 using hashmap
// function isAnagram(s: string, t: string): boolean
// {
//   if (s.length !== t.length)
//   {
//     return false;
//   }
//   const firstMap: Map<string, number> = new Map();
//   const secondMap: Map<string, number> = new Map();
//
//   for (const element of s)
//   {
//     if (!firstMap.has(element))
//     {
//       firstMap.set(element, 1);
//     }
//     else
//     {
//       firstMap.set(element, firstMap.get(element)! + 1);
//     }
//   }
//   for (const element of t)
//   {
//     if (!secondMap.has(element))
//     {
//       secondMap.set(element, 1);
//     }
//     else
//     {
//       secondMap.set(element, secondMap.get(element)! + 1);
//     }
//   }
//   for (const [key, value] of firstMap)
//   {
//     if (secondMap.get(key) !== value)
//     {
//       return false;
//     }
//   }
//
//   return true;
// }
// console.log(isAnagram('anagram', 'nagaram'));
// console.log(isAnagram('rat', 'car'));

// Method 3 using a arr to Count

function isAnagram(s: string, t: string): boolean
{
  if (s.length !== t.length)
  {
    return false;
  }
  const firstArr: number[] = new Array(26).fill(0);

  for (let i = 0; i <= s.length - 1; i++)
  {
    firstArr[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
  }

  for (let i = 0; i <= t.length - 1; i++)
  {
    firstArr[t.charCodeAt(i) - 'a'.charCodeAt(0)]--;
  }
  for (const element of firstArr)
  {
    if (element !== 0)
    {
      return false;
    }
  }
  return true;
}

console.log(isAnagram('anagram', 'nagaram'));
console.log(isAnagram('rat', 'car'));
