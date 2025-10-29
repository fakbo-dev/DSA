//Brute force (garbage)
// function twoSum(nums,target)
// {
//     let i = 1;
//     const length = nums.length - 1; //target number
//     while (i <= length)
//     {
//
//         let j = 0;
//         while (j <= length)
//         {
//             if (j !== i)
//             {
//
//                 if (nums[i] + nums[j] === target) 
//                 {
//                     return [j,i];
//                 }
//             }
//             j++;
//         }
//         i++;
//     }
//
//     return -1;
// }

//sorted approach bet better i guess? two pointers
function twoSum(nums,target)
{
    if (nums.length === 2) return [0,1];
    const sorted = nums.toSorted((a,b) => b - a);
    let i = 0;
    let j = nums.length - 1;
    while (i < j)
    {
        let total = sorted[i] + sorted[j];
        if (Math.abs(total) === Math.abs(target)) break;
        if (Math.abs(total) > Math.abs(target)) j--;
        if (Math.abs(total) < Math.abs(target)) i++;
    }
    const finisha = sorted.findIndex((element) => element === sorted[i]);
    const finishb = sorted.findIndex((element) => element === sorted[j]);
    return [finisha,finishb];
}

console.log(twoSum([2,5,5,11],10));

