//Given a string s, find the first non-repeating character in it and return its index. If it does
//not exist, return -1.

//Example 1:
//Input: s = "leetcode"
//Output: 0
//Explanation:
//The character 'l' at index 0 is the first character that does not occur at any other index.

//Example 2:
//Input: s = "loveleetcode"
//Output: 2

//Example 3:
//Input: s = "aabb"
//Output: -1

function firstUniqChar(s) {
  let [...shallow] = s;
  let temp;
  for (let i = 0; i <= s.length - 1; i++) {
    temp = shallow.shift();
    if (!shallow.includes(temp))
    {
      return i;
    } else if (i === s.length) return -1
  }
}

console.log(firstUniqChar('aabb'));
