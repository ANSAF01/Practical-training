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

let arr = [5, 3, 4, 1, 2];
console.log(bubbleSort(arr));
