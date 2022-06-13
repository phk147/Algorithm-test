/**
 * 제출용. 아래 로컬용을 지우고 제출하자.
 */
//  let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n")
/**
 * 로컬용, 예제.txt를 생성해서 예제를 복붙하자.
 */

function solution() {
  let input = require("fs")
    .readFileSync("예제.txt")
    .toString()
    .trim()
    .split(" ")
    .map((val) => val.trim());

  let arr = [];

  for (let i = 1; i <= input[0]; i++) {
    arr.push(i);
  }

  console.log(arr);
}

solution();
