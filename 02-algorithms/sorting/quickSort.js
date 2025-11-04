function quickSort(arr, start = 0, end = arr.length - 1)
{
  if (start >= end)
    return;
  const pivotIndex = partition(arr, start, end);
  quickSort(arr, start, pivotIndex - 1);
  quickSort(arr, pivotIndex + 1, end);
}

function partition(arr, start, end)
{
  const pivot = arr[end];
  let i = start;

  for (let j = start; j < end; j++)
  {
    if (arr[j] < pivot)
    {
      [arr[i], arr[j]] = [ arr[j], arr[i] ];
      i++;
    }
  }
  [arr[i], arr[end]] = [ arr[end], arr[i] ];

  return i;
}
const unorderArr = [ 316, 933, 337, 671, 21, 35, 966, 495 ];
console.log(unorderArr)
quickSort(unorderArr);
console.log(unorderArr)
