function solution() {
  let input = require("fs")
    .readFileSync("input.txt") //"/dev/stdin"
    .toString()
    .split("\n")
    .map((val) => val.trim());

  let n = +input[0];

  // DP?
  let dp = [0, 1, 2, 3, 5];

  if (n <= 4) return dp[n];

  for (let i = 5; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n] % 1000000007;
}

solution();
