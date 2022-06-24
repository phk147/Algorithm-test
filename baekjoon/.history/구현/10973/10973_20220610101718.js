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

  let n = Number(input.splice(0, 1)[0]);
  arr = input[0]
    .split(" ")
    .join("")
    .split("")
    .map((v) => +v);

  let len = arr.length;
  for (let i = len - 1; i >= 0; i--) {
    if (arr[i - 1] > arr[i]) {
      let tmp = arr.splice(i, len - i);

      console.log(tmp, arr);
      break;
    }
  }
}

solution();
