function binarySearchdinamyc(arr,low,high,target)
{
    while (low <= high)
    {
        const middle = low + Math.floor((high-low) /2);
        if (arr[middle] === target) return middle;
        if (arr[middle] > target) high--;
        if (arr[middle] < target) low++;
    }
    return -1;
}

function binarySearchRecursive(arr,low,high,target)
{
    if (low <= high)
    {
        const middle = low + Math.floor((high-low)/2);

        if (arr[middle] === target) return middle;
        if (arr[middle] < target) return binarySearchRecursive(arr,middle + 1,high,target)
        if (arr[middle] > target) return binarySearchRecursive(arr,low,middle - 1,target);
    }
    return -1;
}
const arr = [2,5,8,12,16,23,38,56,71,91];
console.log(binarySearchdinamyc(arr,0,arr.length - 1, 23));
console.log(binarySearchRecursive(arr,0,arr.length - 1, 91));
