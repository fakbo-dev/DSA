function selectionSort(arr)
{

    for (let i = 0; i <= arr.length - 1; i++)
    {
        let max = 0;
        const lastIndex = (arr.length - 1) - i;
        let k;

        for (let j = 0; j <= arr.length - 1 - i; j++)
        {
            if (arr[j] > arr[max]) max = j;
        }
        k = arr[lastIndex];
        arr[lastIndex] = arr[max];
        arr[max] = k;
    }

    return arr;
}

// console.log(selectionSort([7,12,9,11,3]));
console.log(selectionSort([64, 34, 25, 12, 22, 11, 90, 5]));
