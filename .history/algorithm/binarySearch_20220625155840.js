function binarySearch(arr, target, start, end) {
  while (start <= end) {
    //중간 지점
    let min = (start + end) / 2;
    // 찾은 경우 중간 지점 인덱스 반환
    if (arr[min] === target) return mid;
    //찾는 값이 중간점의 값보다 작으면 왼쪽 확인
    else if (arr[mid] > target) end = min - 1;
    //찾는 값이 중간점의 값보다 크면 오른쪽확인 확인
    else start = min + 1;
  }
  return -1;
}
