let arr = [7, 5, 9, 0, 3, 1, 6, 2, 4, 8, 1];
let len = arr.length;

// function selectionSort(arr) {
//   for (let i = 0; i < len; i++) {
//     let min_index = i;
//     for (let j = i + 1; j < len; j++) {
//       if (arr[min_index] > arr[j]) {
//         min_index = j;
//       }
//     }
//     //구조 분해 할당
//     [arr[i], arr[min_index]] = [arr[min_index], arr[i]];
//   }

//   console.log(arr);
// }

// function insertionSort(arr) {
//   for (let i = 1; i < len; i++) {
//     for (let j = i; j > 0; j--) {
//       if (arr[j] < arr[j - 1]) {
//         [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
//       } else break;
//     }
//   }
//   console.log(arr);
// }

// function quickSort(arr, start, end) {
//   if (start >= end) return;
//   let pivot = start;
//   let left = start + 1;
//   let right = end;
//   while (left <= right) {
//     //left pivot보다 큰 수 찾기
//     while (left <= end && arr[left] <= arr[pivot]) left++;
//     //right pivot보다 작은 수 찾기
//     while (right > start && arr[right] > arr[pivot]) right--;
//     //left,right가 엇갈리는 순간 pivot 변경
//     if (left > right) [arr[pivot], arr[right]] = [arr[right], arr[pivot]];
//     else [arr[left], arr[right]] = [arr[right], arr[left]];
//   }
//   quickSort(arr, start, right - 1);
//   quickSort(arr, right + 1, end);
// }

function countingSort(arr) {
  let count = new Array(10).fill(0);
  let result = [];
  for (let i = 0; i < len; i++) {
    count[i]++;
  }
  for (let i = 0; i <= 9; i++) {
    for (let j = 0; j < count[i]; j++) {
      result.push(i);
    }
  }

  console.log(result);
  return result;
}

// selectionSort(arr);
// insertionSort(arr);

// function ExquickSort(arr) {
//   console.log(arr);
//   quickSort(arr, 0, len - 1);
//   console.log(arr);
// }
// ExquickSort(arr);

countingSort(arr);
