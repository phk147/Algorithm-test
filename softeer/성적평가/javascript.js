/**
 * 제출용. 아래 로컬용을 지우고 제출하자.
 */
//  let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n")
/**
 * 로컬용, 예제.txt를 생성해서 예제를 복붙하자.
 */

let input = require("fs").readFileSync("input.txt").toString().trim().split("\n");

let n = +input.shift();
let arr = input.map((v) => v.split(" ").map((val) => +val));

let ans = [];
let sum = new Array(n).fill(0);

for (let i = 0; i < 3; i++) {
  ans.push(arr[i].map((v) => arr[i].filter((val) => val > v).length + 1).join(" "));
  for (let j = 0; j < n; j++) {
    sum[j] += arr[i][j];
  }
}

ans.push(sum.map((v) => sum.filter((val) => val > v).length + 1).join(" "));

console.log(ans.join("\n"));
