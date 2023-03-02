let arr = [7, 5, 9, 0, 3, 1, 6, 2, 4, 8, 1];

function selectionSort(arr) {
  for (let i = 0; i < arr.len; i++) {
    let min_index = i;
    for (let j = i + 1; j < arr.len; j++) {
      if (arr[min_index] > arr[j]) {
        min_index = j;
      }
    }
    [arr[i], arr[min_index]] = [arr[min_index], arr[i]];
  }

  console.log(arr);
}
