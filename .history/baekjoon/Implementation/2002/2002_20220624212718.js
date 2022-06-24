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
function solution(input) {
  let n = +input.shift();
  let carIn = [];
  let carOut = [];
  for (let i = 0; i < 2 * n; i++) {
    let car = input.shift();
    if (i < n) carIn.push(car);
    else carOut.push(car);
  }
  let answer = 0;
  for (let i = 0; i < carIn.length; i++) {
    console.log(i, carIn, carOut, answer);
    if (carIn[i] !== carOut[i]) {
      answer++;
      carOut.splice(i, 1);
      i--;
    }
  }

  console.log(carIn, carOut, answer);
}

solution(input);
