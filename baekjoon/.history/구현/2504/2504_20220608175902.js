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

  input = input.join("").split("");
  let stk = [];
  let cal = [];
  for (let i = 0; i < input.length; i++) {
    if (input[i] === "(" || input[i] === "[") {
      stk.push(input[i]);
    } else if (input[i] === ")" || input[i] === "]") {
      if (input[i] === ")" && stk[stk.length - 1] === "(") {
        //() 닫힘
        stk.pop();
        stk.push(2);
      } else if (input[i] === "]" && stk[stk.length - 1] === "[") {
        //"[]"닫힘
        stk.pop();
        stk.push(3);
      } else if (typeof stk[stk.length - 1] === "number") {
        //숫자
        let temp = stk.pop();
        let t = stk.length;
        for (let i = 0; i < t; i++) {
          let last = stk.pop();
          if (last === "(" || last === "[") {
            stk.push(temp * (last === "(" ? 2 : 3));
            break;
          } else if (typeof last === "number") {
            temp += last;
            continue;
          }
        }
      }
    }
  }

  console.log(stk);
  if (stk.includes("(") || stk.includes("[")) {
    console.log(0);
  } else {
    console.log(stk.reduce((a, c) => a + c));
  }
}

solution();
