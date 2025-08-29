function quickSort(arr)
{
    const pivot = arr[arr.length - 1];
    let j = 0;
    let i = -1;
    console.log(arr[j]);
    while (true)
    {
        while (arr[j] > pivot)
        {
            j++;
        }
        console.log(arr[j]);
        while (arr[i] < pivot)
        {
            i++;
        }
        [arr[j],arr[i]] = [arr[i],arr[j]];
    }
    console.log(arr);
}

quickSort([316,933,337,671,21,35,966,495]);
