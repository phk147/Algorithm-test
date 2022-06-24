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

  let [n, ...arr] = input.map((val) => +val);

  arr.sort((a, b) => b - a);

  //mean
  let psum = arr.reduce((a, c) => a + c);
  let mean = Math.round(psum / n);

  //middle
  let mid = arr.length / 2;

  console.log(mean, mid);
}

solution();
