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
  let check = false;
  //divide psum

  for (let num = 1; num <= 1000000; num++) {
    const divideN = String(num);
    const len = divideN.length;

    let psum = num;
    for (let i = 0; i < len; i++) {
      let tmp = +divideN[i];
      psum += tmp;
    }

    if (psum === n) {
      console.log(num);
      break;
    }
  }
  //output
}

solution();
