let arr = [7, 5, 9, 0, 3, 1, 6, 2, 4, 8, 1];
let len = arr.length;

function binarySearch(arr, target, start, end) {
  arr = arr.sort((a, b) => a - b);
  while (start <= end) {
    //중간 지점
    let mid = parseInt((start + end) / 2);
    // 찾은 경우 중간 지점 인덱스 반환
    if (arr[mid] === target) return mid;
    //찾는 값이 중간점의 값보다 작으면 왼쪽 확인
    else if (arr[mid] > target) end = mid - 1;
    //찾는 값이 중간점의 값보다 크면 오른쪽확인 확인
    else start = mid + 1;
    console.log(mid);
  }
  return -1;
}

let idx = binarySearch(arr, 9, 0, len - 1);

if (idx === -1) console.log("failed");
else console.log(arr[idx]);
