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

let n = +input.shift();
let Map = Array.from({ length: n }, () => {
  Array.from({ length: n }, () => 0);
});

console.log(Map);
let k = +input.shift();
for (let i = 0; i < k; i++) {}
function solution() {}

solution();
