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
  if (input.length < 7) return;

  let sum = input.reduce((acc, cur) => acc + cur);

  for (let i = 0; i < 8; i++) {
    for (let j = i + 1; j < 9; j++) {
      if (sum - input[i] - input[j] === 100) {
        let arr = input.filter((v) => v !== input[i] && v !== input[j]);
        console.log(sum);
        arr.sort((a, b) => a - b).forEach((v) => console.log(v));
        break;
      }
    }
  }
}

solution(input);
