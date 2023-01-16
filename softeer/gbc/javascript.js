/**
 * 제출용. 아래 로컬용을 지우고 제출하자.
 */
//  let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n")
/**
 * 로컬용, 예제.txt를 생성해서 예제를 복붙하자.
 */

let input = require("fs").readFileSync("input.txt").toString().trim().split("\n");

let [n, m] = input
  .shift()
  .split(" ")
  .map((v) => +v);

let arr = input.map((v) => v.split(" ").map((val) => +val));

let a = 0;
let b = a + n;

let ans = 0;
for (let i = 1; i <= 100; i++) {
  arr[a][0] -= 1;
  arr[b][0] -= 1;

  if (arr[b][1] - arr[a][1] >= 0) {
    ans = Math.max(ans, arr[b][1] - arr[a][1]);
  }

  if (arr[a][0] === 0) a++;
  if (arr[b][0] === 0) b++;
  if (a >= n || b >= n + m) break;
}

console.log(ans);
