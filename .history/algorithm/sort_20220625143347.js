let arr = [7, 5, 9, 0, 3, 1, 6, 2, 4, 8];

function selectSort(arr) {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    let min_index = i;
    for (let j = i + 1; j < len; j++) {
      if (arr[min_index] > arr[j]) {
        min_index = j;
      }
    }
    [arr[i], arr[min_index]] = [arr[min_index], arr[i]];
  }

  console.log(arr);
}

selectSort(arr);
