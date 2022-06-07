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

  let [n, k] = input.map((val) => +val);
  let arr = Array.from({ length: 1001 }, () => 0);

  for (let i = 2; i <= n; i++) {}
}

solution();
