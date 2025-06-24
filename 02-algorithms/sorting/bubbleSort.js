function bubbleSort(arr) {
  let i = 0;
  let j = 0;
  let temp;
  while (i <= arr.length - 1) {
    let sorted = false;
    while (j <= arr.length - 1) {
    if (arr[j] > arr[j + 1] && arr[j + 1] !== undefined) {
      temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] =  temp
        sorted = true
    }
      j++
    }
    if (!sorted) return arr;
    j = 0
    i++;
    console.log(`run Number: ${i}`)
  }
  return arr;
}

console.log(bubbleSort([7,12,9,11,3]));
console.log(bubbleSort([100, 50, 75, 25, 1000, 1, 0, -1]));
console.log(bubbleSort([7, 3, 9, 12, 11]));
