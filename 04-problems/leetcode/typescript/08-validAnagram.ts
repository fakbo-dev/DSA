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
  const shallowCopyS: string[] = s.split('');
  const shallowCopyT: string[] = t.split('');
  let i: number = 0;
  while (i <= shallowCopyS.length - 1)
  {
    let j: number = 0;

    if (shallowCopyS[i] !== shallowCopyT[t])
    {
      j++;
    }
    shallowCopyS.splice(i, 1);
    shallowCopyT.splice(j, 1);
    i++
  }

  console.log(shallowCopyS);
  console.log(shallowCopyT);
}

console.log(isAnagram('anagram', 'nagaram'));
// console.log(isAnagram('rat', 'car'));
