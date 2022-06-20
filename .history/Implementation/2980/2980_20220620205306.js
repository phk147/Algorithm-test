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
  let [n, l] = input[0].split(" ").map((v) => +v);
  for (let i = 1; i < input.length; i++) {}

  let time = 0;
  let distance = 0;
  while (distance !== l) {
    for (let i = 1; i < input.length; i++) {
      let [D, R, G] = input[i].split(" ").map((v) => +v);
      time += D;
      distance += D;
      let check = (time % R) + G;
      //빨간불
      if (check < R) {
        time += R - check;
      } else {
        continue;
      }
    }
    time += l - distance;
    break;
  }
  console.log(time);
}
solution(input);
