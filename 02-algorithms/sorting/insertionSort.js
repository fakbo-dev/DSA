function insertionSort(arr)
{
  for (let i = 1; i <= arr.length - 1; i++)
  {
    let temp = arr[i];
    let j = i;

    while (j > 0)
    {
      if (temp < arr[j - 1])
      {
        arr[j] = arr[j - 1];
        j--;
      }
      else
      {
        break;
      }
    }
    arr[j] = temp;
  }

  return arr;
}
console.log(insertionSort([ 419, 278, 120, 370, 1, 810, 160, 102 ]));
