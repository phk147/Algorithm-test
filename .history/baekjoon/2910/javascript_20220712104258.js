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

let [n, c] = input
  .shift()
  .split(" ")
  .map((v) => +v);
let arr = input[0].split(" ").map((v) => +v);
let count = new Array(c + 1).fill(0);
function solution() {
  arr.forEach((v) => {});
}

solution();
