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

let [w, n] = input
  .shift()
  .split(" ")
  .map((v) => +v);

let arr = input.map((val) => val.split(" ").map((v) => +v)).sort((a, b) => b[1] - a[1]);

let answer = 0;

for (let i = 0; i < n; i++) {
  if (arr[i][0] <= w) {
    answer += arr[i][0] * arr[i][1];
    w -= arr[i][0];
  } else {
    answer += w * arr[i][1];
    w -= w;
    if (w === 0) break;
  }
}
console.log(answer);
