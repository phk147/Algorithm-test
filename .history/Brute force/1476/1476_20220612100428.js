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

  let [e, s, m] = input[0].split(" ").map((v) => +v);
  for (let i = 1; i < 8000; i++) {
    if (i % 15 === e && i % 28 === s && i % 19 === m) {
      console.log(i);
      break;
    }
  }
}

solution();
