function solution() {
  let input = require("fs")
    .readFileSync("input.txt") //"/dev/stdin"
    .toString()
    .split("\n")
    .map((val) => val.trim());

  const num124 = [4, 1, 2];

  let n = +input[0];
  let ans = "";

  while (n) {
    ans = num124[n % 3] + ans;
    n = n % 3 === 0 ? n / 3 - 1 : Math.floor(n / 3);
  }

  console.log(ans);
}

solution();
