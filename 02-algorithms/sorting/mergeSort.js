function mergeSort(arr)
{
    if (arr.length === 1) return arr;
    const middle = arr.length / 2;
    const left = arr.slice(0,middle);
    const right = arr.slice(middle);
    return merge(mergeSort(left),mergeSort(right));
}

function merge(left,right)
{
    let l = 0;
    let r = 0;
    const mergeArr = [];
    while (l <= left.length -1 && r <= right.length - 1)
    {

        if (left[l] < right[r])
        {
            mergeArr.push(left[l]);
            l++;
        }
        mergeArr.push(right[r]);
        r++;
    }

    return mergeArr.concat(left.slice(l),right.slice(r));
}

console.log(mergeSort([989,706,390,919,679,267,416,203]));
