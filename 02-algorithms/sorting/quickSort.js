function quickSort(arr)
{
    if (arr.length === 1) return arr;
    const pivot = Math.floor((arr.length - 1) / 2);
    [arr[pivot],arr[arr.length -1]] = [arr[arr.length - 1], arr[pivot]]

    let i = 0;
    let j  = (arr.length - 1) - 1;
    while (true)
    {
        while (arr[i] < arr[arr.length - 1])
        {
            i++;
        }
        while (arr[j] > arr[arr.length - 1])
        {
            j--;
        }
        if (i > j) break;
        [arr[i],arr[j]] = [arr[j],arr[i]];
    }
    [arr[i],arr[arr.length - 1]] = [arr[arr.length - 1], arr[i]]
    const left = arr.slice(0,i - 1);
    const right = arr.slice(i +1);
    quickSort(left);
}

quickSort([316,933,337,671,21,35,966,495]);
