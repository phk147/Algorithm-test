/**
 * 제출용. 아래 로컬용을 지우고 제출하자.
 */
//  let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n")
/**
 * 로컬용, 예제.txt를 생성해서 예제를 복붙하자.
 */

function binarySearch(arr, low, high, target) {
  let mid = (low + high) / 2;

  if (low > high) return false;

  if (arr[mid] === target) return true;

  if (arr[mid] > target) {
    return binarySearch(arr, low, mid - 1, target);
  } else {
    return binarySearch(arr, mid + 1, high, target);
  }
}

function solution() {
  let input = require("fs")
    .readFileSync("input.txt") //"/dev/stdin"
    .toString()
    .trim()
    .split("\n")
    .map((val) => val.trim());

  //input
  let n = +input.splice(0, 1)[0];
  let arr = input
    .shift()
    .split(" ")
    .map((v) => +v);
  arr.sort((a, b) => a - b);
  let m = +input.splice(0, 1)[0];
  let check = input[0].split(" ").map((v) => +v);

  for (let i = 0; i < m; i++) {
    if (binarySearch(arr, 0, n - 1, check[i])) {
      console.log(1);
    } else {
      console.log(0);
    }
  }
}

solution();
