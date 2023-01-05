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
  .map((val) => val.trim());
function solution() {
  let str = input[0];
  let alphabet = new Array(26).fill(0);
  console.log(input);
  console.log(alphabet);
  for (let i = 0; i < str.length; i++) {
    console.log(str.charCodeAt(i) - 97);
    alphabet[str.charCodeAt(i) - 97]++;
  }
}

solution();
