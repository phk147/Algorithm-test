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
  .trim()
  .split("\n")
  .map((val) => val.trim());

function solution(input) {
  //input
  let [n1, n2] = input
    .shift()
    .split(" ")
    .map((v) => +v);

  let n1_arr = input[0].split("").reverse();
  let n2_arr = input[1].split("");

  let ant = [...n1_arr, ...n2_arr];
  let dir = [...new Array(n1_arr).fill(1), ...new Array(n1_arr).fill(-1)];

  let t = +input[2];

  for (let i = 1; i <= t; i++) {}
}
solution(input);
