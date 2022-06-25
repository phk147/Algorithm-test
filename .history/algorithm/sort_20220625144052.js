let arr = [7, 5, 9, 0, 3, 1, 6, 2, 4, 8];
let len = arr.length;
function selectionSort(arr) {
  for (let i = 0; i < len; i++) {
    let min_index = i;
    for (let j = i + 1; j < len; j++) {
      if (arr[min_index] > arr[j]) {
        min_index = j;
      }
    }
    //구조 분해 할당
    [arr[i], arr[min_index]] = [arr[min_index], arr[i]];
  }

  console.log(arr);
}

function insertionSort(arr) {
  for (let i = 1; i < len; i++) {
    for (let j = i; j > 0; j--) {
      if (arr[j] < arr[j - 1]) {
        [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
      } else break;
    }
  }
  console.log(arr);
}

selectionSort(arr);
insertionSort(arr);
