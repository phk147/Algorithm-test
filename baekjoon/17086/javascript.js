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
  let map = input.map((v) => v.split(" ").map((val) => +val));

  let dx = [0, 1, 0, -1, -1, -1, 1, 1];
  let dy = [1, 0, -1, 0, 1, -1, 1, -1];

  const bfs = (x, y, vis) => {
    let queue = [];
    vis[x][y] = 1;
    queue.push([x, y]);
    while (queue.length) {
      let [cx, cy] = queue.shift();
      for (let dir = 0; dir < 8; dir++) {
        let nx = cx + dx[dir];
        let ny = cy + dy[dir];
        if (nx < 0 || nx >= n || ny < 0 || ny >= m || map[nx][ny] === 1) continue;
        if (vis[nx][ny] !== 0) {
          continue;
        }

        vis[nx][ny] = vis[cx][cy] + 1;
        queue.push([nx, ny]);
      }
    }
  };

  let ans = new Array(n).fill().map((v) => new Array(m).fill(9999));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (map[i][j] === 1) {
        let vis = new Array(n).fill().map((v) => new Array(m).fill(0));
        bfs(i, j, vis);
        for (let x = 0; x < n; x++) {
          for (let y = 0; y < m; y++) {
            ans[x][y] = Math.min(ans[x][y], vis[x][y]);
          }
        }
      }
    }
  }

  console.log(!Math.max(...ans.flat()) ? 0 : Math.max(...ans.flat()) - 1);
}

solution();
