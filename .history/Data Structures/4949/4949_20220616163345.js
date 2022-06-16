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

    let stk = [];
    arr.forEach((v) => {
      if (stk.length === 0) {
        stk.push(v);
      } else {
        let tmp = stk[stk.length - 1];
        if ((v === ")" && tmp === "(") || (v === "]" && tmp === "[")) {
          stk.pop();
        } else {
          stk.push(v);
        }
      }
    });

    if (arr.length === 0) {
      console.log("yes");
      continue;
    }
  }
}

solution();
