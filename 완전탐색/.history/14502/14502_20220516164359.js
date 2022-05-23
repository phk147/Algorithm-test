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
    .split("\n")
    .map((val) => val.trim());

  const T = input.shift().split(" ");
  const [n, m] = T;
  console.log(input, T);
}

solution();

// 1 [10,5]  10
// -10 [0,5]
// 1 [10,10]
// -10 [0,10]
// 2 [10,12]
