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

  let arr = input[0].split("");
  let stk = [];
  let len = arr.length;
  let ans = 0;

  for (let i = 0; i < len; i++) {
    if (arr[i] === "(") {
      stk.push(arr[i]);
    } else {
      if (arr[i - 1] === "(") {
        stk.pop();
        ans += stk.length;
      } else {
        stk.pop();
        ans++;
      }
    }
  }

  console.log(ans);
}

solution();
