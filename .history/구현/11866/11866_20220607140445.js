/**
 * 제출용. 아래 로컬용을 지우고 제출하자.
 */
//  let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n")
/**
 * 로컬용, 예제.txt를 생성해서 예제를 복붙하자.
 */

function solution() {
  let input = require("fs")
    .readFileSync("input.txt") //"/dev/stdin"
    .toString()
    .trim()
    .split(" ")
    .map((val) => val.trim());

  let [n, m] = input.map((val) => +val);
  console.log(n, m);

  let nums = [];
  let ret = [];
  for (let i = 1; i <= n; i++) {
    nums.push(i);
  }
}

solution();
