/**
 * 제출용. 아래 로컬용을 지우고 제출하자.
 */
//  let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n")
/**
 * 로컬용, 예제.txt를 생성해서 예제를 복붙하자.
 */

const rcs = (a, b, c) => {
  if (b === 1) return a % c;

  let val = rcs(a, Math.floor(b / 2), c);
  val = (val * val) % c;

  console.log(b);
  if (b % 2 === 0) val = (val * a) % c;
  return val;
};

function solution() {
  let [a, b, c] = require("fs")
    .readFileSync("input.txt") //"/dev/stdin"
    .toString()
    .split(" ")
    .map((val) => val.trim());

  console.log(rcs(a, b, c));
}

solution();
