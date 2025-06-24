
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


  //while (i <= arr.length - 1) {
  //  // i need to iterate over the array n times
  //  // how do i do that?
  //  if (arr[i] > arr[i + 1] && arr[i + 1] !== undefined) {
  //    temp = arr[i];
  //    arr[i] = arr[i + 1];
  //    arr[i + 1] =  temp
  //  }
  //  i++;
  //}
