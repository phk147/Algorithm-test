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

  let [n, m] = input
    .shift()
    .split(" ")
    .map((v) => +v);
  let graph = input.map((v) => v.split(" ").map((val) => +val));

  // 0,0 -> n-1,m-1 까지 높이가 나보다(지금위치보다) 낮은 곳으로 이동하면서 가는 루트의 개수

  let dx = [0, 1, 0, -1];
  let dy = [1, 0, -1, 0];

  let dp = new Array(n).fill().map((_) => new Array(m).fill(-1));
  dp[n - 1][m - 1] = 1;

  const dfs = (x, y) => {
    if (dp[x][y] !== -1) return dp[x][y];

    dp[x][y] = 0;

    for (let dir = 0; dir < 4; dir++) {
      let nx = x + dx[dir];
      let ny = y + dy[dir];
      if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
      if (graph[nx][ny] >= graph[x][y]) continue;

      dp[x][y] += dfs(nx, ny);
    }

    return dp[x][y];
  };

  console.log(dfs(0, 0));
}

solution();
