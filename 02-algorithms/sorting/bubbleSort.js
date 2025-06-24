
function bubbleSort(arr) {

  let i = 0;
  let temp;
  while (i <= arr.length - 1) {
    // need to take the first two Values and evaluate
    //    is the first value greater than the second Value?, if that so swap.
    //    if not keep going
    if (arr[i] > arr[i + 1] && arr[i + 1] !== undefined) {
      temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] =  temp
    }
    i++;
  }

  return arr;
}




console.log(bubbleSort([7,12,9,11,3]));
