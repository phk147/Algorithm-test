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
    .split("\n")
    .map((val) => val.trim());

  input = input[0].split("-");

  let plus = sum(input.shift());
  let minus = 0;
  for (let exp of input) {
    minus += +sum(exp);
  }
  console.log(plus - minus);
}

function sum(input) {
  if (!input.length) return 0;
  return input.split("+").reduce((a, c) => +a + +c);
}

solution();
