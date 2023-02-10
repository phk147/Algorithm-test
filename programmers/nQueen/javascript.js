function solution() {
  let input = require("fs")
    .readFileSync("input.txt") //"/dev/stdin"
    .toString()
    .split("\n")
    .map((val) => val.trim());

  let n = +input.shift();
  let ans = 0;

  let vis = new Array(n + 1).fill(0);

  // Q은 가로 세로 대각선으로 이동가능
  // n은 12 이하의 자연수
  // Q을 배치하고 가로세로 대각선을 확인?

  for (let i = 0; i < n; i++) {
    vis[0] = i;
    dfs(1);
  }

  function dfs(row) {
    if (n === row) {
      ans += 1;
    }
    for (let col = 0; col < n; col++) {
      vis[row] = col;
      let checker = true;
      for (let i = 0; i < row; i++) {
        if (vis[row] === vis[i]) {
          checker = false;
          break;
        }
        if (Math.abs(vis[row] - vis[i]) === Math.abs(i - row)) {
          checker = false;
          break;
        }
      }
      if (checker) dfs(row + 1);
    }
  }

  console.log(ans);
}

solution();
