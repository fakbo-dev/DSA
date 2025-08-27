function bubbleSort(arr)
{
    const length = arr.length - 1;

    for (let i = 0; i <= length; i++)
    {
        let k;
        let sorted = false
        for (let j = 1; j <= length; j++)
        {
            if (arr[j-1] > arr[j])
            {
                k = arr[j];
                arr[j] = arr[j-1];
                arr[j-1] = k;
                sorted = true;
                console.log(sorted);
            }

        }
        if (!sorted) return arr;
    }
    return arr;
}
console.log(bubbleSort([7,12,9,11,3]));
// console.log(bubbleSort([100, 50, 75, 25, 1000, 1, 0, -1]));
// console.log(bubbleSort([7, 3, 9, 12, 11]));
