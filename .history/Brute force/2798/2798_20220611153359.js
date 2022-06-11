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

  let [n, m] = input
    .splice(0, 1)[0]
    .split(" ")
    .map((v) => +v);
  let card = input[0].split(" ").map((v) => +v);
  let cardLen = card.length;
  console.log(n, m, card);

  let ans = 0;
  for (let i = 0; i < cardLen; i++) {
    for (let j = i + 1; i < cardLen; j++) {
      for (let k = j + 1; k < cardLen; k++) {}
    }
  }
}

solution();
