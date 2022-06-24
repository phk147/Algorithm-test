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

  //input
  let [n, m] = input.splice(0, 1)[0].split(" ");
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(input[i].split(" "));
  }

  console.log(n, m, arr);
}

solution();
