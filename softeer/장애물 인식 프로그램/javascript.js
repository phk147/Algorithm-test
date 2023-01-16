/**
 * 제출용. 아래 로컬용을 지우고 제출하자.
 */
//  let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n")
/**
 * 로컬용, 예제.txt를 생성해서 예제를 복붙하자.
 */

let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

let n = +input.shift();

let graph = input.map((v) => v.split("").map((val) => +val));

let vis = new Array(n).fill().map((v) => new Array(n).fill(0));

let dx = [0, 1, 0, -1];
let dy = [1, 0, -1, 0];

const bfs = (graph, x, y) => {
  let queue = [];
  vis[x][y] = 1;
  queue.push([x, y]);
  let count = 1;
  while (queue.length !== 0) {
    let [cx, cy] = queue.shift();
    for (let dir = 0; dir < 4; dir++) {
      let nx = cx + dx[dir];
      let ny = cy + dy[dir];
      if (nx < 0 || nx >= n || ny < 0 || ny >= n) continue;
      if (graph[nx][ny] === 0 || vis[nx][ny] === 1) continue;
      vis[nx][ny] = 1;
      count++;
      queue.push([nx, ny]);
    }
  }
  return count;
};

let ans = [];
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (graph[i][j] === 1 && vis[i][j] === 0) ans.push(bfs(graph, i, j));
  }
}

console.log(ans.length);
ans.sort((a, b) => a - b);
ans.forEach((v) => {
  console.log(v);
});
