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
let [s, t] = input;
function solution(s, t) {
  t.reverse();
  console.log(s, t);
}

function addA(s) {
  return s + "A";
}

function reverseB(s) {
  return;
}

solution(s, t);
