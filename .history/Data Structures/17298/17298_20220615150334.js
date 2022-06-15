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

  let n = +input[0];
  let arr = input[1].split(" ").map((v) => +v);

  let stk = [];
  let ans = [];
  console.log(arr);

  for (let i = n; i > 0; i--) {
    let tmp = arr[i - 1];
    arr.pop();

    if (stk.length === 0) {
      ans.push(-1);
      stk.push(tmp);
    } else {
      while (stk.length !== 0 && stk[stk.length - 1] <= tmp) {
        stk.pop();
      }
      let stkTmp = stk[stk.length - 1];
      ans.push(stkTmp);
      stk.push(stkTmp);
      console.log(stkTmp, stk, i, arr);
    }
  }

  console.log(ans);
}

solution();
