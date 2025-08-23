function bubbleSort(arr)
{
  let i = 0;
  const arrLength = arr.length - 1

  while (i <= arrLength)
  {
    let j = 1;
    let temp;
    let sorted = false;
    while (j <= arrLength)
    {
      if (arr[j - 1] > arr[j])
      {
        temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
        sorted = true;
      }
      j++;
    }
    if (!sorted) return arr;
    i++;
  }
  return arr;
}

// console.log(bubbleSort([7,12,9,11,3]));
console.log(bubbleSort([100, 50, 75, 25, 1000, 1, 0, -1]));
// console.log(bubbleSort([7, 3, 9, 12, 11]));
