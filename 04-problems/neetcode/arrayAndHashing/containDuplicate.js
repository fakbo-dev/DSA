//default way O(n)

// function hasDuplicate(nums)
// {
//     const h = new Map();
//     console.log(h);
//     let i = 0;
//     while (i <= nums.length - 1)
//     {
//         if (!h.has(nums[i]))
//         {
//             h.set(nums[i],0);
//         } else
//         {
//             return true;
//         }
//         i++;
//     }
//     return false;
// }


// console.log(hasDuplicate([1,2,3,3]));

//worst solution O(n)^2

// function hasDuplicate(nums)
// {
//
//     const check = [];
//     let i = 0;
//     while (i <= nums.length - 1)
//     {
//         let checkNumber = nums[i];
//         let j = i + 1;
//         while (j <= nums.length - 1)
//         {
//             if (nums[j] === checkNumber) return true;
//             if (j === nums.length - 1) check.push(nums[j]);
//             j++;
//         }
//         i++;
//     }
//     return false;
// }

// console.log(hasDuplicate([1,2,3,3]));

