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

  let n = +input.shift();

  let answer = [];

  input = Array.from(new Set(input));

  input.sort((a, b) => a.length - b.length);

  for (let i = 1; i <= input[input.length - 1].length; i++) {
    let tmp = input.filter((ele) => ele.length === i);
    answer.push(...tmp.sort());
  }

  console.log(answer.join("\n"));
}

solution();
