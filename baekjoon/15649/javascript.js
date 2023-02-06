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
    .split("\n")
    .map((val) => val.trim());

  let [n, m] = input[0].split(" ").map((v) => +v);

  let arr = new Array(m);
  let vis = new Array(10).fill(0);

  const backTracking = (k) => {
    if (k === m) {
      console.log(arr.join(" "));
      return;
    }
    for (let i = 1; i <= n; i++) {
      if (!vis[i]) {
        arr[k] = i;
        vis[i] = 1;
        backTracking(k + 1);
        vis[i] = 0;
      }
    }
  };

  backTracking(0);
}

solution();
