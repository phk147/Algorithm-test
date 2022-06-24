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

  console.log(input);
  let n = +input[0];
  let arr = input[1].split(" ").map((v) => +v);

  let stk = [];
  let ans = [];
  while (n--) {
    let tmp = arr.pop();
    console.log(tmp);

    while (stk.length > 0) {
      if (stk.length === 0) ans.push(-1);
      else {
        let stkTmp = stk[stk.length - 1];
        if (stkTmp > tmp) {
          ans.push(stkTmp);
        }
      }
    }
  }
}

solution();
