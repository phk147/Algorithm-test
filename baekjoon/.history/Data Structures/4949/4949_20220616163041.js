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

  let len = input.length;
  for (let i = 0; i < len - 1; i++) {
    let arr = input[i].split("").filter((v) => v === "(" || v === ")" || v === "[" || v === "]");

    console.log(arr);
    if (arr.length === 0) {
      console.log("yes");
    }
  }
}

solution();
