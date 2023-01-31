/**
 * 제출용. 아래 로컬용을 지우고 제출하자.
 */
//  let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n")
/**
 * 로컬용, 예제.txt를 생성해서 예제를 복붙하자.
 */
let input = require("fs")
  .readFileSync("input.txt") //"/dev/stdin"
  .toString()
  .split("\n")
  .map((val) => val.trim());

let [n, m] = input
  .shift()
  .split(" ")
  .map((v) => +v);

let graph = input.map((v) => v.split(""));

let dx = [0, 1, 0, -1];
let dy = [1, 0, -1, 0];
const bfs = (x, y, vis) => {
  let queue = [];
  vis[x][y] = 0;

  queue.push([x, y]);
  while (queue.length) {
    let [cx, cy] = queue.shift();
    for (let dir = 0; dir < 4; dir++) {
      let nx = cx + dx[dir];
      let ny = cy + dy[dir];
      if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
      if (vis[nx][ny] !== -1 || graph[nx][ny] === "W") continue;
      vis[nx][ny] = vis[cx][cy] + 1;
      queue.push([nx, ny]);
    }
  }
  return Math.max(...vis.flat());
};
function solution() {
  // 최단거리 ->bfs

  let ans = 0;
  // 완전탐색 -> 가장 먼 값 기억 -> 최단거리는 bfs자체에서 해결
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (graph[i][j] === "L") {
        let vis = new Array(n).fill().map((v) => new Array(m).fill(-1));
        let temp = bfs(i, j, vis);
        ans = Math.max(ans, temp);
      }
    }
  }

  console.log(ans);
}

solution();
