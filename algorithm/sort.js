let arr = [7, 5, 9, 0, 3, 1, 6, 2, 4, 8, 1];
let len = arr.length;

function selectionSort(arr) {
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

const quickSort = (arr) => {
  if (arr.length <= 1) return arr;

  const pivot = arr[0];
  const left = [];
  const right = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] <= pivot) left.push(arr[i]);
    else right.push(arr[i]);
  }

  const lSorted = quickSort(left);
  const rSorted = quickSort(right);
  return [...lSorted, pivot, ...rSorted];
};

function countingSort(arr) {
  let count = new Array(10).fill(0);
  let result = [];
  for (let i = 0; i < len; i++) {
    count[arr[i]]++;
  }
  for (let i = 0; i <= 9; i++) {
    for (let j = 0; j < count[i]; j++) {
      result.push(i);
    }
  }

  console.log(result);
  return result;
}

selectionSort(arr);
insertionSort(arr);

function ExquickSort(arr) {
  console.log(arr);
  quickSort(arr, 0, len - 1);
  console.log(arr);
}
ExquickSort(arr);

countingSort(arr);
