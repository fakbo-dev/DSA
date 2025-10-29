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
    const shallowCopy = [];

    for (let i = 0; i <= nums.length - 1; i++)
    {
        shallowCopy.push([nums[i],i]);
    }
    let i = 0;
    let j = nums.length - 1;
    shallowCopy.sort((a,b) => a[0] - b[0]);
    while (i < j)
    {
        let sum = shallowCopy[i][0] + shallowCopy[j][0];

        if (sum === target) return [Math.min(shallowCopy[i][1],shallowCopy[j][1]),Math.max(shallowCopy[i][1],shallowCopy[j][1])];
        if (sum < target) i++;
        if (sum > target) j--;
    }
}

console.log(twoSum([-1,-2,-3,-4,-5],-8));
//clever move!
function testing(nums)
{
        let A = [];
        for (let i = 0; i < nums.length; i++) {
            A.push([nums[i], i]);
        }
    console.log(A);
}
// console.log(testing([2,5,5,11]));
