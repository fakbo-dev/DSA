// Take two part in the arr one with the sorted Elements and the other with the unsorted elements
// each time we compare the current value with the sortedList go tho the left if the value is 
//  lower than the value of the left until the comparison return false
//  go to the right if the value is greater than the check value
//  repeat until there's no more value lefts
function insertionSort(arr) {
// 1. make the outer loop 
  for (let i = 1; i <= arr.length - 1; i++) {
    let temp = arr[i];
    let j = i - 1;

    while (j >= 0 && temp < arr[j]) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = temp;
  }

  return arr;
}



console.log(insertionSort([64, 34, 25, 12, 22, 11, 90, 5]));
