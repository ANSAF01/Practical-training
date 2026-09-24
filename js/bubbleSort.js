function bubbleSort(arr) {
  let swapped = false;
  do {
    swapped = false;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }
    }
  } while (swapped);
  return arr;
}

console.log(bubbleSort([5, 2, 9, 1, 5, 6])); // [1, 2, 5, 5, 6, 9]

console.log(bubbleSort([10, 8, 6, 4, 2])); // [2, 4, 6, 8, 10]

console.log(bubbleSort([-3, 2, -1, 0, 5])); // [-3, -1, 0, 2, 5]