
function bubbleSort(arr) {

  let i = 0;
  let j = 0;
  let temp;

  while (i <= arr.length - 1) {

    while (j <= arr.length - 1) {
    if (arr[j] > arr[j + 1] && arr[j + 1] !== undefined) {
      temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] =  temp
    }

      j++
    }

    j = 0
    i++;
  }
  return arr;
}




console.log(bubbleSort([7,12,9,11,3]));
