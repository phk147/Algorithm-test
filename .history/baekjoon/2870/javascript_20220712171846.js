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

let n = +input.shift();
function solution() {
  let nums = [];
  for (let i = 0; i < n; i++) {
    let temp = input.shift();

    for (let j = 0; j < temp.length; j++) {
      let tmp = temp.charCodeAt(j);
      //number
      if (!(tmp >= 97 && tmp <= 122)) {
      }
    }
  }
}

solution();
