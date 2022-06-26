/**
 * 제출용. 아래 로컬용을 지우고 제출하자.
 */
//  let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n")
/**
 * 로컬용, 예제.txt를 생성해서 예제를 복붙하자.
 */

function go(a, b, c) {
  if (b === 1) return a % c;
  let _c = go(a, b / 2);
  _c = (_c * _c) % c;
  if (b % 2) _c = (_c * a) % c;
  return _c;
}

function solution() {
  let input = require("fs")
    .readFileSync("input.txt") //"/dev/stdin"
    .toString()
    .trim()
    .split("\n")
    .map((val) => val.trim());

  let [a, b, c] = input[0].split(" ").map((v) => +v);
  console.log(go(a, b, c));
}

solution();
