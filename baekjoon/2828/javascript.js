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
function solution() {
  let [n, m] = input
    .shift()
    .split(" ")
    .map((v) => +v);

  let arr = input.map((v) => +v);

  let left = 1;

  let cnt = 0;
  for (let i = 0; i < arr.length; i++) {
    let right = left + m - 1;
    let temp = arr[i];
    if (temp >= left && temp <= right) continue;
    if (temp < left) {
      cnt += left - temp;
      left = temp;
    } else if (right < temp) {
      left += temp - right;
      cnt += temp - right;
    }
  }

  console.log(cnt);
}

solution();
