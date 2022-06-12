/**
 * 제출용. 아래 로컬용을 지우고 제출하자.
 */
//  let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n")
/**
 * 로컬용, 예제.txt를 생성해서 예제를 복붙하자.
 */
let ans;
function solution() {
  let [n, ...arr] = require("fs")
    .readFileSync("input.txt")
    .toString()
    .split("\n")
    .map((v) => v.split(" ").map((v) => +v)); //.map((v) => Number(v)

  n = n[0];
  const dp = new Array(n).fill(0);

  for (let i = 0; i < n; i++) {
    // 0일~6일
    const [duration, profit] = arr[i];
    if (i + duration > n) continue; // 현재 날짜 + 기간이 n이 넘으면 상담 불가
    dp[i] += profit;
    // console.log(dp);
    for (let j = i + duration; j < n; j++) {
      dp[j] = Math.max(dp[j], dp[i]); // 현재 금액, i일 뒤에 받게 될 금액 비교
      console.log(i, j, dp[j], dp[i]);
    }
  }
  console.log(Math.max(...dp));
}

solution();
