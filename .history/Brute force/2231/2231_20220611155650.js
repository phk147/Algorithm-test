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
  const n = +input[0];
  const divideN = input[0];
  const len = divideN.length;
  //divide psum
  let psum = n;
  for (let i = 0; i < len; i++) {
    let tmp = +divideN[i];
    psum += tmp;
    console.log(tmp);
  }
  //output
  console.log(psum);
}

solution();
