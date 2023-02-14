/**
 * 제출용. 아래 로컬용을 지우고 제출하자.
 */
//  let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n")
/**
 * 로컬용, 예제.txt를 생성해서 예제를 복붙하자.
 */

let ans = [];
const rcs = (a, b, n) => {
  if (n === 1) {
    ans.push([a, b]);
    return;
  }

  rcs(a, 6 - a - b, n - 1);
  ans.push([a, b]);
  rcs(6 - a - b, b, n - 1);
};

function solution() {
  let input = require("fs")
    .readFileSync("input.txt") //"/dev/stdin"
    .toString()
    .split("\n")
    .map((val) => val.trim());

  let n = +input[0];

  rcs(1, 3, n);

  console.log(ans.length);
  console.log(ans.map((v) => v.join(" ")).join("\n"));
}

solution();
