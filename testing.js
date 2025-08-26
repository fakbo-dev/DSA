function mergeSort(arr)
{
    if (arr.length === 1) return arr;
    const length = arr.length;
    const middle = length / 2;
    const left = arr.slice(0,middle);
    const right = arr.slice(middle);
    return merge(mergeSort(left),mergeSort(right));
}

function merge(left,right)
{
    let l = 0;
    let r = 0;
    const newArr = [];
    while (l <= left.length - 1 && r <= right.length - 1)
    {
        if (left[l] < right[r])
        {
            newArr.push(left[l]);
            l++;
        }
        else
        {
            newArr.push(right[r]);
            r++;
        }
    }
    return newArr.concat(left.slice(l),right.slice(r));
}

console.log(mergeSort([3,7,8,5,4,2,6,1]));
