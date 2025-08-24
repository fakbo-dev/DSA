function selectionSort(arr)
{
  const length = arr.length - 1;
  for (let i = 0; i <= length; i++)
  {
    let max = 0;
    let lastIndex = length - i;
    let temp;
    for (let j = 0; j <= length - i; j++)
    {
      if (arr[j] > arr[max]) max = j;
    }
        temp = arr[lastIndex]
        arr[lastIndex] = arr[max];
        arr[max] = temp;
  }

  return arr;
}

console.log(selectionSort([7,12,9,11,3]));
console.log(selectionSort([64, 34, 25, 12, 22, 11, 90, 5]));
