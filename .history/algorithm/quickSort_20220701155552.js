let arr = [5, 1, 3, 6, 4, 8, 9, 7, 2, 5, 6];
function quickSort(arr, start, end) {
  if (start >= end) return;
  let pivot = start;
  let left = start + 1;
  let right = end;
  while (left <= right) {
    //left pivot보다 큰 수 찾기
    while (left <= end && arr[left] <= arr[pivot]) left++;
    //right pivot보다 작은 수 찾기
    while (right > start && arr[right] > arr[pivot]) right--;
    //left,right가 엇갈리는 순간 pivot 변경
    if (left > right) [arr[pivot], arr[right]] = [arr[right], arr[pivot]];
    else [arr[left], arr[right]] = [arr[right], arr[left]];
  }
  quickSort(arr, start, right - 1);
  quickSort(arr, right + 1, end);
}

quickSort(arr, 0, arr.length);
console.log(arr);
