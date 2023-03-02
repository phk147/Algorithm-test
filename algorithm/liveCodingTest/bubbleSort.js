let arr = [7, 5, 9, 0, 3, 1, 6, 2, 4, 8, 1];

function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i; j < array.length; j++) {
      if (array[j] > array[j + 1]) [array[j], array[j + 1]] = [array[j + 1], array[j]];
    }
  }
  return array;
}

console.log(bubbleSort(arr));
