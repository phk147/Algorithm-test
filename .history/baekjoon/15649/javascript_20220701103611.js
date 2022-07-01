/**
 * 제출용. 아래 로컬용을 지우고 제출하자.
 */
//  let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n")
/**
 * 로컬용, 예제.txt를 생성해서 예제를 복붙하자.
 */
let input = require("fs")
  .readFileSync("input.txt") //"/dev/stdin"
  .toString()
  .split("\n")
  .map((val) => val.trim());

let [n, m] = input
  .shift()
  .split(" ")
  .map((v) => +v);
let arr = new Array(10);
let isused = new Array(10);

function solution() {
  backTracking(0);
}

function backTracking(k) {
  if (k === m) {
    console.log(arr.splice[(0, 4)].join(" "));
    return;
  }
  for (let i = 1; i <= n; i++) {
    if (!isused[i]) {
      arr[k] = i;
      isused[i] = 1;
      backTracking(k + 1);
      isused[i] = 0;
    }
  }
}

solution();
