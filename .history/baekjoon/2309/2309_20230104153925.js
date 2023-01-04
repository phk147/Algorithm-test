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
  .split("\n")
  .map((val) => +val.trim());
function solution(input) {
  input.sort((a, b) => a - b);
  console.log(input);
  if (input.length < 7) return;

  let sum = 0;
  let psum = [0];
  for (let i = 0; i < input.length; i++) {
    sum += input[i];
  }

  console.log(sum);
}

solution(input);
