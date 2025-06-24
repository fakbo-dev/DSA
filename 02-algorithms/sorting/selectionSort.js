function selectionSort(arr) {

  for (let i = 0; i <= arr.length - 1;i++) {
    let ln = i;
    let temp;
    for (let j = i + 1; j< arr.length;j++) {

      if (arr[j] < arr[ln]) {
        ln = j;
      }
    }
    temp = arr[i];
    arr[i] = arr[ln];
    arr[ln] = temp;
  }
  console.log(arr);
}


 
selectionSort([7,12,9,11,3]);
selectionSort([64, 34, 25, 12, 22, 11, 90, 5]);
