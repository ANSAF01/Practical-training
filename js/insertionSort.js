function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = current;
  }
  return arr;
}

console.log(insertionSort([12, 11, 13, 5, 6])); // [5, 6, 11, 12, 13]

console.log(insertionSort([1, 3, 2, 5, 4])); // [1, 2, 3, 4, 5]

console.log(insertionSort([4, 1])); // [1, 4]




