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

  console.log(input);
  let alpabet = [0, "A", "B", "C", "D", "E", "F", "G", "H"];

  let [k, s, t] = input.shift().split(" ");

  let king = [alpabet.indexOf(k[0]), +k[1]];
  let stone = [alpabet.indexOf(s[0]), +s[1]];

  console.log(King, stone);
}

solution();
