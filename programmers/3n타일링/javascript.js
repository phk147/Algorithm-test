function solution() {
  let input = require("fs")
    .readFileSync("input.txt") //"/dev/stdin"
    .toString()
    .split("\n")
    .map((val) => val.trim());

  let n = +input[0];

  let dp = [0, 0, 3, 0, 11];

  if (n % 2 === 1) return 0;
  if (n <= 4) return dp[n];

  for (let i = 6; i <= n; i += 2) {
    dp[i] = (dp[i - 2] * 4 - dp[i - 4]) % 1000000007;
  }

  console.log(dp[n]);
}

solution();
