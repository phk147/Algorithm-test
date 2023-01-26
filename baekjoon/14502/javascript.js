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
let graph = input.map((v) => v.split(" ").map((val) => +val));

let dx = [0, 1, 0, -1];
let dy = [1, 0, -1, 0];
const bfs = (x, y, vis, newGraph) => {
  let queue = [];
  vis[x][y] = 1;
  queue.push([x, y]);
  while (queue.length) {
    const [cx, cy] = queue.shift();
    for (let dir = 0; dir < 4; dir++) {
      let nx = cx + dx[dir];
      let ny = cy + dy[dir];
      if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
      if (newGraph[nx][ny] === 1 || vis[nx][ny] === 1) continue;
      vis[nx][ny] = 1;
      queue.push([nx, ny]);
    }
  }
};
function solution() {
  let arr = [];

  let result = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (graph[i][j] === 0) arr.push([i, j]);
    }
  }

  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = i + 1; j < arr.length - 1; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        let newGraph = graph.map((v) => [...v]);
        // 3개의 벽 설치
        newGraph[arr[i][0]][arr[i][1]] = 1;
        newGraph[arr[j][0]][arr[j][1]] = 1;
        newGraph[arr[k][0]][arr[k][1]] = 1;

        let vis = new Array(n).fill().map((v) => new Array(m).fill(0));
        // dfs,bfs
        for (let x = 0; x < n; x++) {
          for (let y = 0; y < m; y++) {
            if (newGraph[x][y] === 2) {
              bfs(x, y, vis, newGraph);
            }
          }
        }

        let cnt = 0;

        for (let x = 0; x < n; x++) {
          for (let y = 0; y < m; y++) {
            if (newGraph[x][y] === 0 && vis[x][y] === 0) cnt++;
          }
        }

        // 최대값 비교
        result = Math.max(result, cnt);
      }
    }
  }

  console.log(result);
}

solution();
