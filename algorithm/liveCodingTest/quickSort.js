let arr = [7, 5, 9, 0, 3, 1, 6, 2, 4, 8, 1];
let len = arr.length;

function basicQuickSort(array) {
  if (array.length < 2) return array;

  const pivot = array[0];
  const left = [];
  const right = [];

  for (let i = 1; i < array.length; i++) {
    if (array[i] <= pivot) left.push(array[i]);
    else right.push(array[i]);
  }

  return basicQuickSort(left).concat(pivot, basicQuickSort(right));
}

// function quickSort(array, left, right) {
//   if (left >= right) return;
//   const mid = Math.floor((left + right) / 2);
//   const pivot = array[mid];
//   const partition = divide(array, left, right, pivot);

//   quickSort(array, left, partition - 1);
//   quickSort(array, partition, right);

//   function divide(array, left, right, pivot) {
//     console.log(`array: ${array}, left: ${array[left]}, pivot: ${pivot}, right: ${array[right]}`);
//     while (left <= right) {
//       while (array[left] < pivot) {
//         left++;
//       }
//       while (array[right] > pivot) {
//         right--;
//       }
//       if (left <= right) {
//         [array[left], array[right]] = [array[right], array[left]];
//         left++;
//         right--;
//       }
//     }
//     return left;
//   }

//   return array;
// }

function quickSort(array, left, right) {
  if (left >= right) return;

  const mid = parseInt((left + right) / 2);
  const pivot = array[mid];
  const partition = divide(array, left, right, pivot);

  quickSort(array, left, partition - 1);
  quickSort(array, partition, right);

  return array;
}
function divide(array, left, right, pivot) {
  while (left <= right) {
    while (array[left] < pivot) {
      left++;
    }
    while (array[right] > pivot) {
      right--;
    }

    if (left <= right) {
      [array[left], array[right]] = [array[right], array[left]];
      left++;
      right--;
    }
  }
  return left;
}

console.log(quickSort(arr, 0, arr.length - 1));
