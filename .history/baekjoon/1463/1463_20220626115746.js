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
function solution(input) {
  let n = +input[0];

  let DP = new Array(n).fill(0);
  DP[1] = 0;
  let i = 2;
  while (i < n) {
    DP[i] = Math.min(DP[Math.floor(i / 3)] + 1, DP[Math.floor(i / 2)] + 1, DP[i - 1] + 1);
    i++;
  }
  console.log(DP);
}

solution(input);
